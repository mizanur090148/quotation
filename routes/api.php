<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\Api\V1\VendorController;
use App\Http\Controllers\Api\V1\ServiceController;
use App\Http\Controllers\Api\V1\TermsAndConditionController;
use App\Http\Controllers\Api\V1\QuotationController;


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
Route::get('quotations', [QuotationController::class, 'index']);
Route::post('quotations', [QuotationController::class, 'store']);
Route::get('quotations/{id}', [QuotationController::class, 'show']);
Route::delete('quotations/{id}', [QuotationController::class, 'delete']);
Route::get('search-quotations', [QuotationController::class, 'search']);

// services route
Route::get('service-categories', [ServiceController::class, 'index']);
Route::get('services', [ServiceController::class, 'index']);
Route::get('services-dropdown-data', [ServiceController::class, 'servicesDropdownData']);
Route::post('services', [ServiceController::class, 'store']);
Route::delete('services/{id}', [ServiceController::class, 'delete']);

// services route
Route::get('terms-and-conditions', [TermsAndConditionController::class, 'index']);
Route::get('terms-and-conditions-dropdown-data', [TermsAndConditionController::class, 'termsAndConditionDropdownData']);
Route::post('terms-and-conditions', [TermsAndConditionController::class, 'store']);
Route::delete('terms-and-conditions/{id}', [TermsAndConditionController::class, 'delete']);


// quotations services
Route::get('quotation-services', [QuotationServiceController::class, 'index']);
Route::post('quotation-services', [QuotationServiceController::class, 'store']);
Route::get('quotation-services/{id}', [QuotationServiceController::class, 'show']);
Route::delete('quotation-services/{id}', [QuotationServiceController::class, 'destroy']);
Route::get('search-quotation-services', [QuotationServiceController::class, 'search']);
