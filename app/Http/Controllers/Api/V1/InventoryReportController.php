<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\Services\DailyInventoryReportService;
use App\Models\Sale;
use DB;

class InventoryReportController extends BaseController
{    
    public function dateWiseSalesReport(Request $request, DailyInventoryReportService $service)
    {
        try {
            $reports = $service->dailyInventoryReportService($request->from_date, $request->to_date);
            $reportData = [
                'reports' => $reports,
                'total_taxable' => $reports->sum('total_product_price'),
                'total_tax_value' => $reports->sum('total_tax_value'),
                'total_amount' => $reports->sum('total_product_price') + $reports->sum('total_tax_value'),
            ];
            return $this->sendResponse($reportData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    } 
    
    public function dateWiseVatReport(Request $request, DateWiseVatReportService $service)
    {
        try {
            $purchases = $service->dateWisePurchaseReport($request->from_date, $request->to_date);
            $sales = $service->dateWiseSalesReport($request->from_date, $request->to_date);
            $reportData = [  
                'total_purchase_taxable' => $purchases->sum('product_wise_total'),
                'total_purchase_tax_value' => $purchases->sum('tax_value'),
                'total_sales_taxable' => $sales->sum('product_wise_total'),
                'total_sales_tax_value' => $sales->sum('tax_value')
            ];
            return $this->sendResponse($reportData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function getBestSalesProduct(BestSalesProductService $service)
    {
        try {
            $reportData = $service->getBestSalesProduct();
            return $this->sendResponse($reportData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}