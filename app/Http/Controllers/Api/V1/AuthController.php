<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {  
        $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);

        if (Auth::attempt($request->only('email','password'))) {           
            //return response()->json(Auth::user(), 200); 
            return response()->json([
                'user' => Auth::user(), 
                'status' => 200
            ]);              
        }

        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.']
        ]);
    }

    /* public function getUserToken(User $user, string $token_name = null ) 
    {
        return $user->createToken($token_name)->accessToken; 
    } */

    public function logout()
    {
        Auth::logout();
    }
}
