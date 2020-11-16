<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\StockIn;
use DB;

class DailyInventoryReportService
{
    public function dailyInventoryReportData($report_date)
    {
        $with = [           
            'product:id,name,code'  
        ];       
        
        $reportData = StockIn::with($with)
            ->leftJoin('sales', 'stock_ins.product_id', 'sales.product_id')
           // ->leftJoin('products', 'stock_ins.product_id', 'products.id')
            ->selectRaw('
                sum(COALESCE(stock_ins.quantity, 0)) as stock_qty, 
                sum(COALESCE(sales.quantity, 0)) as sale_qty, 
                (sum(COALESCE(stock_ins.quantity, 0)) - sum(COALESCE(sales.quantity, 0))) as inventory_qty,
                stock_ins.product_id
            ')
            ->whereDate('stock_ins.created_at', '<=', $report_date)
            ->orWhereDate('stock_ins.created_at', '<=', $report_date)
            ->whereNull('stock_ins.purchase_invoice')
            ->whereNull('sales.invoice_number')
            // ->groupBy('stock_ins.product_id')
            ->groupBy(DB::raw('stock_ins.product_id WITH ROLLUP'))
            ->get();
            
        return $reportData;
    }    
}