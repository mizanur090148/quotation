<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\SaleRequest;
use App\Models\Sale;
use DB;

class SaleController extends BaseController
{
    protected $apiCrudHandler;

    public function __construct()
    {
        $this->apiCrudHandler = new ApiCrudHandler();
    }

    public function index(Request $request)
    {
        try {
            $with = [
                'sales',
                'customer:id,name',
                'createdBy:id,first_name,last_name'
            ];
            $where = [
                'sale_id' => null
            ];
            $modelData = $this->apiCrudHandler->index($request, Sale::class, $where, $with);           
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    /* public function getSalesByCategory($categoryId)
    {
        try {            
            $modelData = Sale::where('category_id', $categoryId)->get();
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    } */

    /**
    *
     * @param Request $request
     * @param String $moduleName
     * @param String $modelClassName   
     *
     * @return Array
     */
    public function SaleDropdowndata(Request $request)
    {       
        try {
            $select = ['id', 'name'];        
            $modelData = $this->apiCrudHandler->dropdownData($request, Sale::class, $where = [],  $with = [], $select);
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
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            if ($request->id) {
                $delete = $this->apiCrudHandler->delete($request->id, Sale::class);                
            } 
            $sale = Sale::create($request->except('product_detail_list'));
            $sale->sales()->createMany($request->product_detail_list);            
            DB::commit();
            return $this->sendResponse($sale);
        } catch (Exception $ex) {
            DB::rollback();
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
            $with = [
                'sales',
                'customer:id,name',
                'sales.product:id,name,code,sale_price,tax_percentage'
            ];
            $modelData = $this->apiCrudHandler->show($id, Sale::class, $with);
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
                'sales',
                'customer:id,name',
                'createdBy:id,first_name,last_name'
            ];
            $where = [
                'sale_id' => null
            ];
            $modelData = Sale::with($with)
                ->where($where)
                ->where('invoice_number', 'like', "%$request->search_key%")               
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
    public function delete($id, Sale $sale)
    {
        try {
            $delete = $this->apiCrudHandler->delete($id, Sale::class);
            return $this->sendResponse($delete);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }  
    }
}