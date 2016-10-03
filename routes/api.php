<?php

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

Route::resource('characters', CharacterController::class);
Route::resource('families', FamilyController::class);
Route::resource('afk', AfkController::class);
Route::resource('classes', CharacterClassController::class);
Route::resource('events', EventController::class);
Route::resource('eventTypes', EventTypeController::class);
