<?php

namespace App\Http\Controllers\Api\V1\Services;

use App\Models\Sale;
use App\Models\StockIn;
use Carbon\Carbon;
use DB;
use Swift_LoadBalancedTransport;

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

    public function datesOfCurrentMonth($request)
    {
        $days_of_given_month = cal_days_in_month(CAL_GREGORIAN, $request->month, $request->year);

        $all_dates = [];
        for ($i = 1; $i <= $days_of_given_month; $i++) {
            $all_dates[] = $request->year . '-' . str_pad($request->month, 2, '0', STR_PAD_LEFT) . '-' . str_pad($i, 2, '0', STR_PAD_LEFT);
        }
        return $all_dates;
    }
    
    public function dashboardMonthlyDetails($request)
    { 
        $all_dates_of_month = $this->datesOfCurrentMonth($request);

        $purchases = StockIn::whereYear('created_at', $request->year)
            ->whereMonth('created_at', $request->month)
            ->selectRaw("DATE_FORMAT(created_at, '%Y-%m-%d') as purchasing_date,product_wise_total")
            ->get();        
        
        $sales = Sale::whereYear('created_at', $request->year)
            ->whereMonth('created_at', $request->month)
            ->selectRaw("DATE_FORMAT(created_at, '%Y-%m-%d') as selling_date,product_wise_total")
            ->get();
                
        $days_no = [];
        $date_wise_purchases = [];
        $date_wise_sales = [];
        $date_wise_balance = [];
        foreach ($all_dates_of_month as $key => $date) {
            $purchase = $purchases->where('purchasing_date', $date)->sum('product_wise_total');
            $sale = $sales->where('selling_date', $date)->sum('product_wise_total');

            $days_no[] = str_pad(++$key, 2, '0', STR_PAD_LEFT); 
            $date_wise_purchases[] = $purchase + 10;
            $date_wise_sales[] = $sale + 20;
            $date_wise_balance[] = (($sale - $purchase) > 0) ? ($sale - $purchase) : 0;
        }       

        $sale_amount = $sales->sum('product_wise_total');
        $purchase_amount = $purchases->sum('product_wise_total');
        $balance = $sale_amount - $purchase_amount;

        return [
            'days_no' => $days_no,
            'date_wise_purchases' => $date_wise_purchases,
            'date_wise_sales' => $date_wise_sales, 
            'date_wise_balance' => $date_wise_balance,
            'sale_amount' => round($sale_amount),
            'purchase_amount' => round($purchase_amount),
            'balance' => round($balance)
        ];
    }
}