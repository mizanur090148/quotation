<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\RoleController;
use App\Http\Controllers\Api\V1\SupplierController;
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

Route::get('suppliers', [SupplierController::class, 'index']);
Route::get('supplier-dropdown-data', [SupplierController::class, 'supplierDropdownData']);
Route::post('suppliers', [SupplierController::class, 'store']);
Route::get('suppliers/{id}', [SupplierController::class, 'show']);
Route::delete('suppliers/{id}', [SupplierController::class, 'delete']);
Route::get('search-suppliers', [SupplierController::class, 'search']);

Route::get('role-dropdown-data', [RoleController::class, 'RoleDropdownData']);

// users route
Route::get('users', [UserController::class, 'index']);
Route::post('users', [UserController::class, 'store']);
Route::get('users/{id}', [UserController::class, 'show']);
Route::delete('users/{id}', [UserController::class, 'delete']);
Route::get('search-users', [UserController::class, 'search']);

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


// quotations services
Route::get('quotation-services', [QuotationServiceController::class, 'index']);
Route::post('quotation-services', [QuotationServiceController::class, 'store']);
Route::get('quotation-services/{id}', [QuotationServiceController::class, 'show']);
Route::delete('quotation-services/{id}', [QuotationServiceController::class, 'destroy']);
Route::get('search-quotation-services', [QuotationServiceController::class, 'search']);
