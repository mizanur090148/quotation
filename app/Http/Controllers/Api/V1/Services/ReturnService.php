<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\Sale;
use App\Models\StockIn;

class ReturnService
{
    /* public function purchaseReturnOld($request)
    {
        // return_type = 0; // Purchase
        // return_type = 1; // Sale
        $return_type = $request->return_type;
        
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
 */
    public function purchaseReturn($request)
    {
        return $this->returnPurchaseOrSaleProductOrInvoice(StockIn::class, $request->delete_id);
    }

    public function saleReturn($request)
    {
        return $this->returnPurchaseOrSaleProductOrInvoice(Sale::class, $request->delete_id);
    }

    public function returnPurchaseOrSaleProductOrInvoice($modelName, $productId)
    {   
        return $modelName::destroy($productId);
    }
}