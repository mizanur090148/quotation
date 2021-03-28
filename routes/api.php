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
use App\Http\Controllers\Api\V1\PhoneBookController;
use App\Http\Controllers\Api\V1\TodoController;
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

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('logout', [AuthController::class, 'logout']);

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

    // phone books route
    Route::get('phonebooks', [PhoneBookController::class, 'index']);
    Route::post('phonebooks', [PhoneBookController::class, 'store']);
    Route::get('phonebooks/{id}', [PhoneBookController::class, 'show']);
    Route::delete('phonebooks/{id}', [PhoneBookController::class, 'delete']);
    Route::get('search-phonebooks', [PhoneBookController::class, 'search']);

    // todos route
    Route::get('todos', [TodoController::class, 'index']);
    Route::post('todos', [TodoController::class, 'store']);
    Route::get('todos/{id}', [TodoController::class, 'show']);
    Route::delete('todos/{id}', [TodoController::class, 'delete']);
    Route::get('search-todos', [TodoController::class, 'search']);

    Route::get('pending-todos', [TodoController::class, 'pendingTodos']);
    Route::get('change-todo-status', [TodoController::class, 'changeTodoStatus']);

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

});