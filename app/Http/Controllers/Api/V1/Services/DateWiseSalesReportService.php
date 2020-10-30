<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\Sale;
use DB;

class DateWiseSalesReportService
{
    public function dateWiseSalesReport($form_date, $to_date)
    {
        $with = [
            'sales',
            'customer:id,name'  
        ];
        $where = [
            'sale_id' => null
        ];
        $reportData = Sale::with($with)
            ->whereNull('sale_id')
            ->whereDate('created_at', '>=', $form_date)
            ->whereDate('created_at', '<=', $to_date)
            ->get();
            
        return $reportData;
    }    
}