<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

use Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $allUsers = User::all();

        return Response([
            "data" => $allUsers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */

    // I did not know the server served the forms to the client. 
    // Makes sense tho since this way, the server can always impose its rules on the client.
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Prepare Data from Request.
        // Validate against SQLInjection and other vulnerabilities. 
        // Authen and Author will be checked by middleware
        $credentials = $request->validate([
            "email"=> "max:255|email|required",
            "name" => "max:255|required",
            "password" => "max:255|required", 
        ]);
        
        // Email is already unique in the database, so it would throw an error if another one is trying to enter.
        if(User::where("email", $credentials["email"])->first()){

            return Response([
                "error" => "This user already exists.",
            ]);
        }

        User::create($credentials);


        return Response([
            "data" => $credentials,
        ]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return User::where("id", $id)->first();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        // should all three be updated at the same time???
        // i see some forgery potential here.

        $credentials = $request->validate([
            "email"=> "max:255|email|required",
            "name" => "max:255|required",
            "password" => "max:255|required", 
        ]);

        if(User::where("id", $id)){
            User::updateOrCreate([
                "email"=> $credentials["email"],
                "name"=> $credentials["name"],
                "password"=> $credentials["password"],
            ]);


            return Response([
                "message" => "User has been updated",
            ]);
        }

        return Response([
            "error" => "This user can not be updated",
        ]);


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(User::where("id", $id)->first()){
            User::destroy($id);
            return Response([
                "confirm" => "User has been deleted",
            ]);
        }

        return Response([
            "error"=> "This user does not exist.",
        ]);

    }
}
