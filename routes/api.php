<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\VendorController;
use App\Http\Controllers\Api\V1\CategoryController;
use App\Http\Controllers\Api\V1\ModelController;
use App\Http\Controllers\Api\V1\BrandController;
use App\Http\Controllers\Api\V1\ProductController;


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

Route::get('vendors', [VendorController::class, 'index']);
Route::get('vendor-dropdown-data', [VendorController::class, 'vendorDropdownData']);
Route::post('vendors', [VendorController::class, 'store']);
Route::get('vendors/{id}', [VendorController::class, 'show']);
Route::delete('vendors/{id}', [VendorController::class, 'delete']);

Route::get('users', [UserController::class, 'index']);
Route::post('users', [UserController::class, 'store']);
Route::delete('users/{id}', [UserController::class, 'destroy']);

// quotations route
Route::get('products', [ProductController::class, 'index']);
Route::post('products', [ProductController::class, 'store']);
Route::get('products/{id}', [ProductController::class, 'show']);
Route::delete('products/{id}', [ProductController::class, 'delete']);
Route::get('search-products', [ProductController::class, 'search']);

// categories route
Route::get('categories', [CategoryController::class, 'index']);
Route::get('category-dropdown-data', [CategoryController::class, 'categoryDropdownData']);
Route::post('categories', [CategoryController::class, 'store']);
Route::get('categories/{id}', [CategoryController::class, 'show']);
Route::delete('categories/{id}', [CategoryController::class, 'delete']);

// brands route
Route::get('brands', [BrandController::class, 'index']);
Route::get('brand-dropdown-data', [BrandController::class, 'brandDropdowndata']);
Route::post('brands', [BrandController::class, 'store']);
Route::get('brands/{id}', [BrandController::class, 'show']);
Route::delete('brands/{id}', [BrandController::class, 'delete']);

// services route
Route::get('models', [ModelController::class, 'index']);
Route::get('model-dropdown-data', [ModelController::class, 'ModelDropdownData']);
Route::post('models', [ModelController::class, 'store']);
Route::get('models/{id}', [ModelController::class, 'show']);
Route::delete('models/{id}', [ModelController::class, 'delete']);


// quotations services
Route::get('quotation-services', [QuotationServiceController::class, 'index']);
Route::post('quotation-services', [QuotationServiceController::class, 'store']);
Route::get('quotation-services/{id}', [QuotationServiceController::class, 'show']);
Route::delete('quotation-services/{id}', [QuotationServiceController::class, 'destroy']);
Route::get('search-quotation-services', [QuotationServiceController::class, 'search']);
