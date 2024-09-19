<?php


use Illuminate\Support\Facades\Route;

// Route for the API. 
// The Routes have a Prefix with .../api/{whatever}

use App\Http\Controllers\UserController;

Route::get("/testUserfetching", [UserController::class,"index"]);

Route::get("/show/{id}", [UserController::class, "show"]);

Route::post("/createUser", [UserController::class,"store"]);

Route::delete("/delete/{id}", [UserController::class, "destroy"]);