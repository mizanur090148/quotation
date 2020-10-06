<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\SupplierRequest;
use App\Models\Supplier;
use Validator;

class SupplierController extends BaseController
{
    protected $apiCrudHandler;

    public function __construct()
    {
        $this->apiCrudHandler = new ApiCrudHandler();
    }

    public function index(Request $request)
    {
        try {
            $modelData = $this->apiCrudHandler->index($request, Supplier::class, $where = [], $with = []);
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }        
    }

    public function SupplierDropdownData(Request $request)
    {
        try {
            $select = ['id', 'Supplier_name'];
            $modelData = $this->apiCrudHandler->dropdownData($request, Supplier::class, $where = [], $with = [], $select);
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
    public function store(SupplierRequest $request)
    {       
        try {           
            $modelData = $this->apiCrudHandler->store($request, Supplier::class);           
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
    public function delete($id, Supplier $Supplier)
    {
        try {
            $delete = $this->apiCrudHandler->delete($id, Supplier::class);
            return $this->sendResponse($delete);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }  
    }
}
