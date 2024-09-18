<?php

use Illuminate\Support\Facades\Route;

// The Server Side rendering of the blade files will take place here. 
// The Routes for the API are at routes/api.php.
Route::get('/', function () {
    return view('welcome');
});
