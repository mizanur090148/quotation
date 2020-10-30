<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\Sale;
use Carbon\Carbon;
use DB;

class BestSalesProductService
{
    public function getBestSalesProduct()
    {//dd(Carbon::today()->format('Y-m-d'));
        $with = [
            'product:id,name'
        ];
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
}