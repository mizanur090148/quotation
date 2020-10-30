<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\StockIn;
use App\Models\Sale;
use DB;

class DateWiseVatReportService
{
    public function dateWisePurchaseReport($form_date, $to_date)
    {
        $reportData = StockIn::whereDate('created_at', '>=', $form_date)
            ->whereDate('created_at', '<=', $to_date)
            ->get();
            
        return $reportData;
    }
    
    public function dateWiseSalesReport($form_date, $to_date)
    {
        $reportData = Sale::whereDate('created_at', '>=', $form_date)
            ->whereDate('created_at', '<=', $to_date)
            ->get();
            
        return $reportData;
    }
}