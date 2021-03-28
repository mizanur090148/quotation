<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\PhoneBookRequest;
use App\Models\PhoneBook;
use Exception;

class PhoneBookController extends BaseController
{
    protected $apiCrudHandler;

	public function __construct(ApiCrudHandler $apiCrudHandler)
    {
        $this->apiCrudHandler = $apiCrudHandler;      
    }

    public function index(Request $request)
    {
        try {
        	$modelData = $this->apiCrudHandler->index($request, PhoneBook::class, $where = [], $with = []);
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
    public function store(PhoneBookRequest $request)
    {
        //If ID then update else create
        try {
            $modelData = $this->apiCrudHandler->store($request, PhoneBook::class);
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
    public function update($id, PhoneBookRequest $request)
    {
    	//If ID then update, else create
        try {  
        	$request->request->add(['id' => $id]);
        	$modelData = $this->apiCrudHandler->update($request, PhoneBook::class);
        	return $this->sendResponse($modelData);       
        } catch (Exception $e) {
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
            $modelData = $this->apiCrudHandler->show($id, PhoneBook::class, $with = []);
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
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
            $modelData = PhoneBook::where('phone_no', 'like', "%$request->search_key%")
                ->orWhere('name', 'like', "%$request->search_key%")
                ->orWhere('email', 'like', "%$request->search_key%")
                ->orWhere('designation', 'like', "%$request->search_key%")
                ->orWhere('designation', 'like', "%$request->search_key%")
                ->orWhere('address', 'like', "%$request->search_key%")
                ->orderBy($request->sortByColumn ?? 'id', $request->sortBy ?? 'desc')
                ->paginate();
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /**   
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        try {  
        	$response = $this->apiCrudHandler->delete($id, PhoneBook::class);
        	return $this->sendResponse($response);
        } catch (Exception $e) {
        	return $this->sendError($e->getMessage());
        }  
    }
}
