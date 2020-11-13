<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\V1\Services\DashboardService;
use Exception;

class DashboardController extends BaseController
{    
    protected $service;

    public function __construct(DashboardService $service)
    {
        $this->service = $service;
    }
    
    public function getRecentPurchaseProducts()
    {
        try {
            $reports = $this->service->recentPurchaseProducts();            
            return $this->sendResponse($reports);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function getRecentSaleProducts()
    {
        try {
            $reports = $this->service->recentSaleProducts();            
            return $this->sendResponse($reports);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    } 

    public function getBestSaleProducts()
    {
        try {
            $reports = $this->service->getBestSaleProducts();
            return $this->sendResponse($reports);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function getBestPurchaseProducts()
    {
        try {
            $reports = $this->service->getBestPurchaseProducts();
            return $this->sendResponse($reports);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}