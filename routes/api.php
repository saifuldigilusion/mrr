<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');
Route::post('refreshtoken', 'UserController@refreshToken');
Route::get('/unauthorized', 'UserController@unauthorized');
Route::group(['middleware' => ['CheckClientCredentials','auth:api']], function() {
    Route::post('logout', 'UserController@logout');
    Route::post('details', 'UserController@details');
    Route::post('fileupload', 'FileUploadController@upload');
    Route::get('fileinfo', 'FileUploadController@info');
    Route::get('/upload/clientcode', 'FileUploadController@clientCode');
    Route::get('/transaction/data', 'TransactionController@data');
    Route::get('/transaction/data/{identifier}', 'TransactionController@detail');
});

// test
Route::get('/test/callflask', 'TestController@callFlask');
Route::get('/test/data', 'TestController@data');