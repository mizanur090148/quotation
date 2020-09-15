<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\V1\BaseController as BaseController;
use App\Http\Controllers\Api\ApiCrudHandler;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Auth;

class AuthController extends BaseController
{   

    public function login(Request $request)
    {
        try {
            $credential = [
                'email' => $request->email, 
                'password' => $request->password
            ];

            if (auth()->attempt($credential)) {
                $user = Auth::user();
                return $this->sendResponse($user);              
            }
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return $this->sendError('Unauthorized Access');
    }

    public function getUserToken(User $user, string $token_name = null ) 
    {
        return $user->createToken($token_name)->accessToken; 
    }
}
