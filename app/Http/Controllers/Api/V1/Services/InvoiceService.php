<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\Sale;
use App\Models\StockIn;
use Carbon\Carbon;
use DB;

class InvoiceService
{
    public function invoiceDropdownData()
    {
        $with = [
            'product:id,name,purchase_price'
        ];
        $result = StockIn::with($with)
            ->whereNotNull('product_id')
            ->orderBy('id', 'desc')
            ->limit(10)
            ->get();
            
        return $result;
    }   

}