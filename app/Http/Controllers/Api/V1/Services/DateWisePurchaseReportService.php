<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\StockIn;
use DB;

class DateWisePurchaseReportService
{
    public function DateWisePurchaseReport($form_date, $to_date)
    {
        $with = [
            'stockIns',
            'stockIns.supplier:id,name'  
        ];
        $where = [
            'stock_in_id' => null
        ];
        $reportData = StockIn::with($with)
            ->whereNull('stock_in_id')
            ->whereDate('created_at', '>=', $form_date)
            ->whereDate('created_at', '<=', $to_date)
            ->get();
            
        return $reportData;
    }    
}