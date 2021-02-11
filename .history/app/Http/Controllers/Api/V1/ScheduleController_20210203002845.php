<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\ScheduleRequest;
use App\Models\Schedule;

class ScheduleController extends BaseController
{
    protected $apiCrudHandler;

    public function __construct(ApiCrudHandler $apiCrudHandler)
    {
        $this->apiCrudHandler = $apiCrudHandler;
    }

    public function index(Request $request)
    {
        try {           
            $modelData = $this->apiCrudHandler->index($request, Schedule::class, $where = [], $with = []);
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function categoryDropdownData(Request $request)
    {
        try {
            $select = ['id', 'name'];
            $modelData = $this->apiCrudHandler->dropdownData($request, Schedule::class, $where = [], $select);
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
    public function store(ScheduleRequest $request)
    {       
        try {   
            $request->request->add(['from_date' => $request->range['from_date']]);  
            dd($request->all());      
            $modelData = $this->apiCrudHandler->store($request, Schedule::class);           
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
            $modelData = $this->apiCrudHandler->show($id, Schedule::class, $with = []);
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
            $modelData = $this->apiCrudHandler->search($request, Schedule::class);
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
    public function delete($id, Category $Category)
    {
        try {
            $delete = $this->apiCrudHandler->delete($id, Schedule::class);
            return $this->sendResponse($delete);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }  
    }
}
