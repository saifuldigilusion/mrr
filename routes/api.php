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
//Route::post('register', 'UserController@register');
//Route::post('refreshtoken', 'UserController@refreshToken');
//Route::get('/unauthorized', 'UserController@unauthorized');
Route::group(['middleware' => ['CheckClientCredentials','auth:api']], function() {
    Route::post('logout', 'UserController@logout');
    Route::post('details', 'UserController@details');

    Route::get('/upload/clientcode', 'FileUploadController@clientCode');
});

Route::group(['middleware' => ['CheckClientCredentials','auth:api', 'can:create transaction']], function() {
    Route::post('fileupload', 'FileUploadController@upload');
    Route::get('/transaction/result/{identifier}', 'TransactionController@result');
    Route::get('fileinfo', 'FileUploadController@info');
});

Route::group(['middleware' => ['CheckClientCredentials','auth:api', 'can:view transaction']], function() {
    Route::get('/transaction/data', 'TransactionController@data');
    Route::get('/transaction/data/{identifier}', 'TransactionController@detail');
    Route::get('/transaction/svg/{identifier}', 'TransactionController@getSvg');
});

Route::group(['middleware' => ['CheckClientCredentials','auth:api', 'can:create user']], function() {
});
Route::group(['middleware' => ['CheckClientCredentials','auth:api', 'can:view user']], function() {
});
Route::group(['middleware' => ['CheckClientCredentials','auth:api', 'can:create config']], function() {
});
Route::group(['middleware' => ['CheckClientCredentials','auth:api', 'can:view config']], function() {
});



// test
Route::get('/test/callflask', 'TestController@callFlask');
Route::get('/test/data', 'TestController@data');
Route::get('/test/svg/{identifier}', 'TestController@getSvg');