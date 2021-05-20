<?php

use Illuminate\Support\Facades\Route;
Auth::routes();

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('index');
Route::get('/biography', [App\Http\Controllers\HomeController::class, 'biography'])->name('biography');
Route::get('/proyects', [App\Http\Controllers\HomeController::class, 'proyects'])->name('proyects');
Route::get('/games', [App\Http\Controllers\HomeController::class, 'games'])->name('games');
Route::get('/hobbies', [App\Http\Controllers\HomeController::class, 'hobbies'])->name('hobbies');
Route::get('/others', [App\Http\Controllers\HomeController::class, 'others'])->name('others');
Route::get('/contact', [App\Http\Controllers\HomeController::class, 'contact'])->name('contact');

Route::get('/terms', [App\Http\Controllers\HomeController::class, 'terms'])->name('terms');
Route::get('/privacy', [App\Http\Controllers\HomeController::class, 'privacy'])->name('privacy');