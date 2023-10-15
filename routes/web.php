<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('home');
});

Route::get('/products', function () {
    return view('products');
});

Route::get('/estacao', function () {
    return view('estacao');
});
