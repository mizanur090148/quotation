<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\StockIn;
use App\Models\Sale;
use DB;

class DailyInventoryReportService
{
    public function dailyInventoryReport($form_date, $to_date)
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