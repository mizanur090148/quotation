<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\ServiceRequest;
use App\Models\Service;
use Validator;

class ServiceController extends BaseController
{
    protected $apiCrudHandler;

    public function __construct()
    {
        $this->apiCrudHandler = new ApiCrudHandler();
    }

    public function index(Request $request)
    {
        try {          

            if (\Request::segment(2) == 'services') {
                $modelData = Service::with('service_category')->whereNotNull('parent_id');
                $modelData = $modelData->orderBy($request->sortByColumn ?? 'id', $request->sortBy ?? 'desc');
                $modelData = $modelData->paginate(5);
            } else {
                $where = ['parent_id' => NULL];
                $with = ['services:id,name,parent_id'];
                $modelData = $this->apiCrudHandler->index($request, Service::class, $where, $with);
            }            
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
    public function store(ServiceRequest $request)
    {       
        try {           
            $modelData = $this->apiCrudHandler->store($request, Service::class);           
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
    public function delete($id, Service $service)
    {
        try {
            $delete = $this->apiCrudHandler->delete($id, Service::class);
            return $this->sendResponse($delete);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }  
    }
}
