<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\RoleController;
use App\Http\Controllers\Api\V1\SupplierController;
use App\Http\Controllers\Api\V1\CustomerController;
use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\ModelController;
use App\Http\Controllers\Api\V1\BrandController;
use App\Http\Controllers\Api\V1\UnitController;
use App\Http\Controllers\Api\V1\ScheduleController;
use App\Http\Controllers\Api\V1\StockInController;
use App\Http\Controllers\Api\V1\SaleController;
use App\Http\Controllers\Api\V1\PurchaseReportController;
use App\Http\Controllers\Api\V1\SalesReportController;
use App\Http\Controllers\Api\V1\InventoryReportController;
use App\Http\Controllers\Api\V1\DashboardController;
use App\Http\Controllers\Api\V1\ReturnController;
use App\Http\Controllers\Api\V1\OutletController;
use App\Http\Controllers\Api\V1\InventoryController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::post('register', 'AuthController@register');
Route::post('login', [AuthController::class, 'login']);
Route::post('logout', [AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {dd(9999);
    return $request->user();
});

// dashboard6n
Route::get('get-best-purchase-products', [DashboardController::class, 'getBestPurchaseProducts']);
Route::get('get-best-sale-products', [DashboardController::class, 'getBestSaleProducts']);
Route::get('get-recent-purchase-products', [DashboardController::class, 'getRecentPurchaseProducts']);
Route::get('get-recent-sale-products', [DashboardController::class, 'getRecentSaleProducts']);
Route::get('get-monthly-dashboard-details', [DashboardController::class, 'getMonthlyDashboardDetails']);
Route::get('get-yearly-dashboard-details', [DashboardController::class, 'getYearlyDashboardDetails']);

Route::get('suppliers', [SupplierController::class, 'index']);
Route::get('supplier-dropdown-data', [SupplierController::class, 'supplierDropdownData']);
Route::post('suppliers', [SupplierController::class, 'store']);
Route::get('suppliers/{id}', [SupplierController::class, 'show']);
Route::delete('suppliers/{id}', [SupplierController::class, 'delete']);
Route::get('search-suppliers', [SupplierController::class, 'search']);

Route::get('customers', [CustomerController::class, 'index']);
Route::get('customer-dropdown-data', [CustomerController::class, 'customerDropdownData']);
Route::post('customers', [CustomerController::class, 'store']);
Route::get('customers/{id}', [CustomerController::class, 'show']);
Route::delete('customers/{id}', [CustomerController::class, 'delete']);
Route::get('search-customers', [CustomerController::class, 'search']);

// outlets
Route::get('outlets', [OutletController::class, 'index']);
Route::post('outlets', [OutletController::class, 'store']);
Route::get('outlets/{id}', [OutletController::class, 'show']);
Route::delete('outlets/{id}', [OutletController::class, 'delete']);
Route::get('search-outlets', [OutletController::class, 'search']);

// users route
Route::get('users', [UserController::class, 'index']);
Route::post('users', [UserController::class, 'store']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::delete('users/{id}', [UserController::class, 'delete']);
Route::get('search-users', [UserController::class, 'search']);
Route::get('role-dropdown-data', [RoleController::class, 'roleDropdownData']);

// products route
Route::get('visit-schedules', [ScheduleController::class, 'index']);
Route::post('visit-schedules', [ScheduleController::class, 'store']);
Route::get('visit-schedules/{id}', [ScheduleController::class, 'show']);
Route::delete('visit-schedules/{id}', [ScheduleController::class, 'delete']);
Route::get('search-visit-schedules', [ScheduleController::class, 'search']);
Route::get('get-visit-schedule-data', [ScheduleController::class, 'getVisitScheduleData']);


// product units
Route::get('/unit-dropdown-data', [UnitController::class, 'unitDropdownData']);

// categories route
Route::get('categories', [CategoryController::class, 'index']);
Route::get('category-dropdown-data', [CategoryController::class, 'categoryDropdownData']);
Route::post('categories', [CategoryController::class, 'store']);
Route::get('categories/{id}', [CategoryController::class, 'show']);
Route::delete('categories/{id}', [CategoryController::class, 'delete']);
Route::get('search-categories', [CategoryController::class, 'search']);

// brands route
Route::get('brands', [BrandController::class, 'index']);
Route::get('brand-dropdown-data', [BrandController::class, 'brandDropdowndata']);
Route::post('brands', [BrandController::class, 'store']);
Route::get('brands/{id}', [BrandController::class, 'show']);
Route::delete('brands/{id}', [BrandController::class, 'delete']);
Route::get('search-brands', [BrandController::class, 'search']);

// models route
Route::get('models', [ModelController::class, 'index']);
Route::get('model-dropdown-data', [ModelController::class, 'modelDropdownData']);
Route::post('models', [ModelController::class, 'store']);
Route::get('models/{id}', [ModelController::class, 'show']);
Route::delete('models/{id}', [ModelController::class, 'delete']);
Route::get('search-models', [ModelController::class, 'search']);


// stock in services
Route::get('stock-ins', [StockInController::class, 'index']);
Route::post('stock-ins', [StockInController::class, 'store']);
Route::get('stock-ins/{id}', [StockInController::class, 'show']);
Route::get('stock-in-view/{id}', [StockInController::class, 'show']);
Route::delete('stock-ins/{id}', [StockInController::class, 'delete']);
Route::get('search-stock-ins', [StockInController::class, 'search']);
Route::get('/search-product-in-purchase', [ProductController::class, 'searchProductInPurchase']);

// sales
Route::get('sales', [SaleController::class, 'index']);
Route::post('sales', [SaleController::class, 'store']);
Route::get('sales/{id}', [SaleController::class, 'show']);
Route::get('sale-invoice/{id}', [SaleController::class, 'show']);
Route::delete('sales/{id}', [SaleController::class, 'delete']);
Route::get('search-sales', [SaleController::class, 'search']);

// Return
//Route::get('get-invoice-dropdown', [PurchaseSaleReturnController::class, 'getInvoiceDropdown']);
Route::get('get-purchase-invoices-dropdown', [ReturnController::class, 'getPurchaseInvoicesDropdown']);
Route::get('get-sale-invoices-dropdown', [ReturnController::class, 'getSaleInvoicesDropdown']);

//Route::get('get-invoice-details', [PurchaseSaleReturnController::class, 'getInvoiceDetails']);
Route::get('get-invoice-details-for-return', [ReturnController::class, 'getInvoiceDetailsForReturn']);
Route::get('purchase-return', [ReturnController::class, 'purchaseReturn']);
Route::get('sale-return', [ReturnController::class, 'saleReturn']);

// reports
Route::get('daily-inventory-report', [InventoryReportController::class, 'dailyInventoryReport']);
Route::get('date-wise-purchase-and-sale-report', [InventoryReportController::class, 'dateWisePurchaseAndSaleReport']);
Route::get('date-wise-purchase-report', [PurchaseReportController::class, 'dateWisePurchaseReport']);
Route::get('date-wise-sales-report', [SalesReportController::class, 'dateWiseSalesReport']);
Route::get('date-wise-vat-report', [SalesReportController::class, 'dateWiseVatReport']);
