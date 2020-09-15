<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\V1\VendorController;
use App\Http\Controllers\Api\V1\ServiceController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');

Route::get('/vendors', 'VendorController@index');
Route::post('vendors', 'VendorController@store');
Route::get('vendors/{id}', 'VendorController@show');
Route::delete('vendors/{id}', 'VendorController@delete');

Route::get('/users', 'UserController@index');
Route::post('users', 'UserController@store');
Route::delete('users/{id}', 'UserController@destroy');

// quotations route
Route::get('/quotations', [QuotationController::class, 'index']);
Route::post('quotations', [QuotationController::class, 'store']);
Route::get('quotations/{id}', [QuotationController::class, 'show']);
Route::delete('quotations/{id}', [QuotationController::class, 'destroy']);
Route::get('/search-quotations', [QuotationController::class, 'search']);

// services route
Route::get('/services', [ServiceController::class, 'index']);
Route::post('services', [ServiceController::class, 'store']);
Route::delete('services/{id}', [ServiceController::class, 'delete']);


// quotations services
Route::get('/quotation-services', 'QuotationServiceController@index');
Route::post('quotation-services', 'QuotationServiceController@store');
Route::get('quotation-services/{id}', 'QuotationServiceController@show');
Route::delete('quotation-services/{id}', 'QuotationServiceController@destroy');
Route::get('/search-quotation-services', 'QuotationServiceController@search');
