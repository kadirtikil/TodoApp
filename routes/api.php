<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

// Route for the API. 
// The Routes have a Prefix with .../api/{whatever}


use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;





// Entry point to the api
// Authentication routes below
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::post('/register', [AuthController::class, 'register']);



Route::middleware('auth')->group(function(){
    // these routes are for users and admins.
    Route::get("/indexTask", [TaskController::class, "index"]);
    Route::get("/showTask/{id}", [TaskController::class, "show"]);
    Route::post("/createTask", [TaskController::class, "store"]);
    Route::put("/updateTask", [TaskController::class, "update"]);
    Route::delete("/deleteTask/{id}", [TaskController::class, "delete"]);

    // these are for admins only, so no user should be able to check these.
    // Check in controller if current user is an admin with private function
    Route::get("/indexUser", [UserController::class,"index"]);          
    Route::get("/showUser/{id}", [UserController::class, "show"]);          
    Route::post("/createUser", [UserController::class,"store"]);            
    Route::delete("/deleteUser/{id}", [UserController::class, "destroy"]);     
    
    // User related operations:
    // check if modifications are for logged in user aswell and not for other user (forgery)
    Route::post('/resetPassword', [AuthController::class, 'handleResetPassword']);
    Route::post('/resetEmail', [AuthController::class, 'handleResetEmail']);
    Route::post('/resetName', [AuthController::class, 'handleResetName']);
});


