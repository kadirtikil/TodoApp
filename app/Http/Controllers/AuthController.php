<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\User;

class AuthController extends Controller
{

    // all of these are post methods so they get a request.
    // by using return response laravel automatically packages both the session cookie and csrf cookie inside so no need to 
    // check for them seperately
    public function login(Request $request) {    
        // sanitize the request
        // filter out the credentials from the request
        $creds = $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
        ]);
        

        // attempt a login
        if(Auth::attempt($creds)){
            // now create a session
            $request->session()->regenerate();


            // return the cookie and or token
            return response()->json(['msg' => 'authentication succesful, create a session'], 200);
        }

        // just return an error if nothing worked.
        return response()->json(['error' => 'not good'], 401);
    }

    public function logout(Request $request) {
        // just  logout the current user and destroy the session such that they cannot be used
        // the session and csrf token both are in the request. use invalidate and regenreate. 
        // otherwise some people could forge some stuff
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerate();
        return response()->json(['msg' => 'user logged out'], 200);
    }

    public function register(Request $request) {
        
        // validate the request
        $creds = $request->validate([
            'email' => 'required|email|unique:users,email',
            'name' => 'required|min:10',
            'password' => 'required|min:8',
        ]);


        $creds['password'] = bcrypt($creds['password']);

        // init new user
        $user = User::create($creds);
        // create the user (shout out to eloquent btw)
        if($user){
            return response()->json(['msg' => 'User created sucessfully!'], 200);
        }

        // add some more detailed error messages later on (as in user already exists etc.)
        // this is sufficient for now
        return response()->json(['error' => 'Could not create user!'], 401);

    }    

    public function handleResetPassword() {

    }

    public function handleResetEmail() {

    }

    public function handleResetName() {

    }
}
