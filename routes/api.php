<?php

use Illuminate\Support\Facades\Route;

// Route for the API. 
// The Routes have a Prefix with .../api/{whatever}


use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;

// These routes will be wrapped in a middleware, to check for authentication and authorization. 
// Depending on those, acess will be permitted. 

Route::get("/indexUser", [UserController::class,"index"]);

Route::get("/showUser/{id}", [UserController::class, "show"]);

Route::post("/createUser", [UserController::class,"store"]);

Route::delete("/deleteUser/{id}", [UserController::class, "destroy"]);


Route::get("/indexTask", [TaskController::class, "index"]);

Route::get("/showTask/{id}", [TaskController::class, "show"]);

Route::post("/createTask", [TaskController::class, "store"]);

Route::put("/updateTask", [TaskController::class, "update"]);

Route::delete("/deleteTask/{id}", [TaskController::class, "delete"]);
