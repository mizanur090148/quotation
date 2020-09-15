<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Validator;

class UserController extends BaseController
{
    protected $apiCrudHandler;

	public function __construct()
    {
        $this->apiCrudHandler = new ApiCrudHandler();      
    }

    public function index(Request $request)
    {
        try {
            $with = ['role','factory'];
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
        	$this->authorize('store', $user);
			$user = User::create($request->all());
			$success['token'] =  $user->createToken('TestToken')->accessToken;
			$success['name'] =  $user->name;
			return $this->sendResponse($success);
        } catch (Exception $ex) {dd(99);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id, User $user)
    {
        try {
        	$this->authorize('delete', $user);
        	$response = $this->apiCrudHandler->delete($id, User::class);
        	return $this->sendResponse($response);
        } catch (Exception $e) {
        	return $this->sendError($e->getMessage());
        }  
    }
}
