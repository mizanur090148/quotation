<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\Services\DailyInventoryReportService;

class InventoryReportController extends BaseController
{   
    public function dailyInventoryReport (Request $request, DailyInventoryReportService $service)
    {
        try {
            $reports = $service->dailyInventoryReportData($request->report_date);           
            return $this->sendResponse($reports);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function dateWisePurchaseAndSaleReport (Request $request, DailyInventoryReportService $service)
    {
        try {
            $reports = $service->dateWisePurchaseAndSaleReportData($request->from_date, $request->to_date);           
            return $this->sendResponse($reports);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}