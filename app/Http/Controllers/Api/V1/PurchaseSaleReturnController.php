<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\ApiCrudHandler;
use App\Http\Controllers\Api\V1\Services\PurchaseOrSaleReturnService;
use App\Models\StockIn;
use App\Models\Sale;

class PurchaseSaleReturnController extends BaseController
{    
    protected $apiCrudHandler;

    public function __construct(ApiCrudHandler $apiCrudHandler)
    {
        $this->apiCrudHandler = $apiCrudHandler;
    }
    
    public function getInvoiceDropdown(Request $request)
    {
        try { 
            if ($request->return_type == 0) {
                $select = ['id', 'purchase_invoice'];
                $where = [
                    ['purchase_invoice', '<>', NULL]
                ];
                $modelData = $this->apiCrudHandler->dropdownData($request, StockIn::class, $where,  $with = [], $select);
            } else {
                $select = ['id', 'invoice_number'];
                $where = [
                    ['invoice_number', '<>', NULL]
                ];
                $modelData = $this->apiCrudHandler->dropdownData($request, Sale::class, $where,  $with = [], $select);
            }
            return $this->sendResponse($modelData);
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function getInvoiceDetails(Request $request)
    {
        try {
            if ($request->return_type == 0) {
                $with = [
                    'product'
                ];
                $where = [
                    'stock_in_id' => $request->invoice_id
                ];
               // $modelData = $this->apiCrudHandler->show($where, StockIn::class, $with);
               $modelData = StockIn::with($with)->where($where)->get();
            } else {  
                $with = [
                    'product'
                ];
                $where = [
                    'sale_id' => $request->invoice_id
                ];
               // $modelData = $this->apiCrudHandler->show($where, Sale::class, $with);
               $modelData = Sale::with($with)->where($where)->get();
            }
            return $this->sendResponse($modelData);
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function getInvoiceDetailsForReturn(Request $request)
    {
        try {
            if ($request->return_type == 0) {
                $with = [
                    'stockIns',
                    'stockIns.supplier:id,name',
                    'stockIns.product:id,name,code,sale_price,purchase_price,tax_percentage'
                ];
                $modelData = $this->apiCrudHandler->show($request->invoice_id, StockIn::class, $with);
            } else {
                $with = [
                    'sales',
                    'customer:id,name',
                    'sales.product:id,name,code,sale_price,tax_percentage'
                ];
                $modelData = $this->apiCrudHandler->show($request->invoice_id, Sale::class, $with);
            }
            return $this->sendResponse($modelData);
        } catch (\Exception $e) {
            
        }   
    }

    public function getInvoiceDetailsForReturnProduct(Request $request, PurchaseOrSaleReturnService $service)
    {
        try {
            $modelData = $service->purchaseOrSaleReturn($request);
            return $this->sendResponse($modelData);
        } catch (\Exception $e) {dd($e->getMessage());
            return $this->sendError($e->getMessage());
        }
    }
}