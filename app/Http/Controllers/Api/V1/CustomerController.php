<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\CustomerRequest;
use App\Models\Customer;
use Validator;

class CustomerController extends BaseController
{
    protected $apiCrudHandler;

    public function __construct()
    {
        $this->apiCrudHandler = new ApiCrudHandler();
    }

    public function index(Request $request)
    {
        try {
            $modelData = $this->apiCrudHandler->index($request, Customer::class, $where = [], $with = []);
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }        
    }

    public function CustomerDropdownData(Request $request)
    {
        try {
            $select = ['id', 'name'];
            $modelData = $this->apiCrudHandler->dropdownData($request, Customer::class, $where = [], $with = [], $select);
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
    public function store(CustomerRequest $request)
    {       
        try {
            $modelData = $this->apiCrudHandler->store($request, Customer::class);
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
            $modelData = Customer::where('name', 'like', "%$request->search_key%")               
                ->orWhere('address', 'like', "%$request->search_key%")
                ->orWhere('mobile_no', 'like', "%$request->search_key%")
                ->orWhere('telephone_no', 'like', "%$request->search_key%")
                ->orWhere('responsible_person', 'like', "%$request->search_key%")
                ->orWhere('email', 'like', "%$request->search_key%")
                ->orderBy($request->sortByColumn ?? 'id', $request->sortBy ?? 'desc')
                ->paginate();
            return $this->sendResponse($modelData);
        } catch (Exception $ex) {
            return $this->sendError($e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id, Customer $Customer)
    {
        try {
            $delete = $this->apiCrudHandler->delete($id, Customer::class);
            return $this->sendResponse($delete);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }  
    }
}
