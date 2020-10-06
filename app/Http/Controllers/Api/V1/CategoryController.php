<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;

class CategoryController extends BaseController
{
    protected $apiCrudHandler;

    public function __construct()
    {
        $this->apiCrudHandler = new ApiCrudHandler();
    }

    public function index(Request $request)
    {
        try {           
            $modelData = $this->apiCrudHandler->index($request, Category::class, $where = [], $with = []);
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function categoryDropdownData(Request $request)
    {
        try {
            $select = ['id', 'name'];
            $modelData = $this->apiCrudHandler->dropdownData($request, Category::class, $where = [],  $with = [], $select);
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
    public function store(CategoryRequest $request)
    {       
        try {           
            $modelData = $this->apiCrudHandler->store($request, Category::class);           
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
            $modelData = $this->apiCrudHandler->show($id, Category::class, $with = []);
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
            $modelData = $this->apiCrudHandler->search($request, Category::class);
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
            $delete = $this->apiCrudHandler->delete($id, Category::class);
            return $this->sendResponse($delete);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }  
    }
}
