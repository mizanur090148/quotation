<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\UserRequest;
use App\Models\User;

class UserController extends BaseController
{
    protected $apiCrudHandler;

	public function __construct(ApiCrudHandler $apiCrudHandler)
    {
        $this->apiCrudHandler = $apiCrudHandler;      
    }

    public function index(Request $request)
    {
        try {
            $with = [
                'role:id,name',
                'outlet:id,name'
            ];
        	$modelData = $this->apiCrudHandler->index($request, User::class, $where = [], $with);
        	return $this->sendResponse($modelData);
        } catch (Exception $e) {
        	return $this->sendError($e->getMessage());
        }
    }

    /**
     *
     * @param Request $request
     * @param String $moduleName
     * @param String $modelClassName   
     *
     * @return Array
     */
    public function store(UserRequest $request, User $user)
    {
        //If ID then update, else create
        try {
			$user = User::create($request->all());
			$user['token'] =  $user->createToken('TestToken')->accessToken;
            $user['name'] =  $user->name;
           // $modelData = $this->apiCrudHandler->store($request, User::class);
			return $this->sendResponse($user);
        } catch (Exception $ex) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
    *
     * @param Request $request
     * @param String $moduleName
     * @param String $modelClassName   
     *
     * @return Array
     */
    public function update($id, UserRequest $request)
    {
    	//If ID then update, else create
        try {  
        	$request->request->add(['id' => $id]);
        	$modelData = $this->apiCrudHandler->update($request, User::class);
        	return $this->sendResponse($modelData);       
        } catch (Exception $ex) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $modelData = $this->apiCrudHandler->show($id, User::class, $with = []);
            return $this->sendResponse($modelData);
        } catch (Exception $ex) {
            return $this->sendError($e->getMessage());
        }
    }

    /**    
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        try {
            $with = [
                'role:id,name',
                'outlet:id,name'
            ];
            $modelData = User::with($with)
                ->where('first_name', 'like', "%$request->search_key%")
                ->orWhere('last_name', 'like', "%$request->search_key%")
                ->orWhere('mobile_no', 'like', "%$request->search_key%")
                ->orWhere('email', 'like', "%$request->search_key%")
                ->orderBy($request->sortByColumn ?? 'id', $request->sortBy ?? 'desc')
                ->paginate();
            return $this->sendResponse($modelData);
        } catch (Exception $ex) {
            return $this->sendError($e->getMessage());
        }
    }

    /**   
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id, User $user)
    {
        try {  
        	$response = $this->apiCrudHandler->delete($id, User::class);
        	return $this->sendResponse($response);
        } catch (Exception $e) {
        	return $this->sendError($e->getMessage());
        }  
    }
}
