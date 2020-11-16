<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\Sale;
use App\Models\StockIn;

class PurchaseOrSaleReturnService
{
    public function purchaseOrSaleReturn($request)
    {
        if ($request->return_type == 0) {
            if ($request->type == 'single') {
                $result = $this->returnProduct(StockIn::class, $request->product_id);
            } elseif ($request->type == 'invoice') {
                $result = $this->returnProduct(StockIn::class, $request->product_id);
            }            
        } elseif($request->return_type == 1) {
            if ($request->type == 'single') {
                $result = $this->returnProduct(Sale::class, $request->product_id);
            } elseif ($request->type == 'invoice') {
                $result = $this->returnProduct(Sale::class, $request->product_id);
            }  
        }
        return $result;
    }

    public function returnProduct($modelName, $productId)
    {
        return $modelName::destroy($productId);
    }
}