<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\Services\DateWisePurchaseReportService;

class PurchaseReportController extends BaseController
{    
    public function dateWisePurchaseReport(Request $request, DateWisePurchaseReportService $service)
    {
        try {
            $reports = $service->dateWisePurchaseReport($request->from_date, $request->to_date);
            $reportData = [
                'reports' => $reports,
                'total_taxable' => $reports->sum('total_product_cost'),
                'total_tax_value' => $reports->sum('total_tax_value'),
                'total_amount' => $reports->sum('total_product_cost') + $reports->sum('total_tax_value'),
            ];
            return $this->sendResponse($reportData);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }    
}