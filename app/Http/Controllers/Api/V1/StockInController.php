<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Requests\StockInRequest;
use App\Models\StockIn;
use DB;

class StockInController extends BaseController
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
                'stockIns',
                'supplier:id,name',
                'createdBy:id,first_name,last_name'
            ];
            $where = [
                'stock_in_id' => null
            ];
            $modelData = $this->apiCrudHandler->index($request, StockIn::class, $where, $with);           
            return $this->sendResponse($modelData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function getStockInsByCategory($categoryId)
    {
        try {            
            $modelData = StockIn::where('category_id', $categoryId)->get();
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
    public function StockInDropdowndata(Request $request)
    {       
        try {
            $select = ['id', 'name'];        
            $modelData = $this->apiCrudHandler->dropdownData($request, StockIn::class, $where = [],  $with = [], $select);
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
    public function store(StockInRequest $request)
    {
        try {
            DB::beginTransaction();
            if ($request->id) {
                $delete = $this->apiCrudHandler->delete($request->id, StockIn::class);                
            } 
            $stockIn = StockIn::create($request->except('product_detail_list'));
            $stockIn->stockIns()->createMany($request->product_detail_list);            
            DB::commit();
            return $this->sendResponse($stockIn);
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
                'stockIns',
                'stockIns.supplier:id,name',
                'stockIns.product:id,name,code,sale_price,purchase_price,tax_percentage'
            ];
            $modelData = $this->apiCrudHandler->show($id, StockIn::class, $with);          
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
                'stockIns',
                'supplier:id,name',
                'createdBy:id,first_name,last_name'
            ];
            $where = [
                'stock_in_id' => null
            ];
            $modelData = StockIn::with($with)
                ->where($where)
                ->where('purchase_invoice', 'like', "%$request->search_key%")               
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
    public function delete($id, StockIn $StockIn)
    {
        try {
            $delete = $this->apiCrudHandler->delete($id, StockIn::class);
            return $this->sendResponse($delete);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }  
    }
}