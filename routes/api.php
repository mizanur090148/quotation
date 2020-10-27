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
use App\Http\Controllers\Api\V1\ProductController;
use App\Http\Controllers\Api\V1\StockInController;

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

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

//Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');

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

// users route
Route::get('users', [UserController::class, 'index']);
Route::post('users', [UserController::class, 'store']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::delete('users/{id}', [UserController::class, 'delete']);
Route::get('search-users', [UserController::class, 'search']);
Route::get('role-dropdown-data', [RoleController::class, 'RoleDropdownData']);

// products route
Route::get('products', [ProductController::class, 'index']);
Route::post('products', [ProductController::class, 'store']);
Route::get('products/{id}', [ProductController::class, 'show']);
Route::delete('products/{id}', [ProductController::class, 'delete']);
Route::get('search-products', [ProductController::class, 'search']);
Route::get('get-products-by-category/{categoryId}', [ProductController::class, 'getProductsByCategory']);

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
Route::get('model-dropdown-data', [ModelController::class, 'ModelDropdownData']);
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

/* 
Route::get('quotation-services/{id}', [StockInController::class, 'show']);
Route::get('search-quotation-services', [StockInController::class, 'search']); 
*/
