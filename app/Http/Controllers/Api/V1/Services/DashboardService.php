<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\Sale;
use App\Models\StockIn;
use Carbon\Carbon;
use DB;

class DashboardService
{
    public function recentPurchaseProducts()
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

    public function recentSaleProducts()
    {
        $with = [
            'product:id,name,sale_price'
        ];
        $result = Sale::with($with)
            ->whereNotNull('product_id')
            ->orderBy('id', 'desc')
            ->limit(10)
            ->get();
            
        return $result;
    }

    public function getBestSaleProducts()
    {
        $reportData = DB::table('sales')->join('products', 'sales.product_id','products.id')
            ->selectRaw('count(sales.product_id) as sales_count,products.name as product_name')
            ->whereNull('sales.deleted_at')
            ->whereNotNull('sales.sale_id')
            ->whereDate('sales.created_at', '>=', Carbon::today()->firstOfMonth()->format('Y-m-d'))
            ->whereDate('sales.created_at', '<=', Carbon::today()->format('Y-m-d'))
            ->groupBy('product_id','product_name')
            ->orderBy('sales_count', 'desc')
            ->limit(10)
            ->get();
            
        return $reportData;
    }

    public function getBestPurchaseProducts()
    {       
        $reportData = DB::table('stock_ins')->join('products', 'stock_ins.product_id','products.id')
            ->selectRaw('count(stock_ins.product_id) as purchase_count,products.name as product_name')
            ->whereNull('stock_ins.deleted_at')
            ->whereNotNull('stock_ins.stock_in_id')
            ->whereDate('stock_ins.created_at', '>=', Carbon::today()->firstOfMonth()->format('Y-m-d'))
            ->whereDate('stock_ins.created_at', '<=', Carbon::today()->format('Y-m-d'))
            ->groupBy('product_id','product_name')
            ->orderBy('purchase_count', 'desc')
            ->limit(10)
            ->get();
            
        return $reportData;
    }

}