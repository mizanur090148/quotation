<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\V1\Services\InventoryService;
use App\Models\Product;

class InventoryController extends BaseController
{
    protected $service;

    public function __construct(InventoryService $service)
    {
        $this->service = $service;
    }

    public function getAvailableProducts(Request $request)
    {
        try {            
            $modelData = $this->service->getAvailableProducts($request);
            return $this->sendResponse($modelData);
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}