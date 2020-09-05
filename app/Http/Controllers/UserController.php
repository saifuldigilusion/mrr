<?php

namespace App\Http\Controllers;

use App\User; 
use Validator;
use Exception;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Facades\Log;
use Laravel\Passport\Client as OClient; 

class UserController extends Controller
{
    //

    public $successStatus = 200;

    public function login() { 
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) { 
            $oClient = OClient::where('password_client', 1)->first();

            $accessToken = auth()->user()->createToken('authToken')->accessToken;
            return response(['user' => auth()->user(), 'access_token' => $accessToken]);

            //return $this->getTokenAndRefreshToken($oClient, request('email'), request('password'));
        } 
        else { 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }

    public function register(Request $request) { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'email' => 'required|email|unique:users', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);

        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }

        $password = $request->password;
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input); 

        $accessToken = $user->createToken('authToken')->accessToken;
        return response([ 'user' => $user, 'access_token' => $accessToken]);

        //$oClient = OClient::where('password_client', 1)->first();
        //return $this->getTokenAndRefreshToken($oClient, $user->email, $password);
    }

    public function getTokenAndRefreshToken(OClient $oClient, $email, $password) { 
        Log::debug("getTokenAndRefreshToken to call mrr.test/be/oauth/token");
        $oClient = OClient::where('password_client', 1)->first();
        $http = new Client;
        $response = $http->request('POST', 'http://mrr.test/be/oauth/token', [ #url('/oauth/token'), [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => $oClient->id,
                'client_secret' => $oClient->secret,
                'username' => $email,
                'password' => $password,
                'scope' => '*',
            ],
        ]);

        $result = json_decode((string) $response->getBody(), true);
        return response()->json($result, $this->successStatus);
    }

    public function refreshToken(Request $request) { 
        Log::debug("refreshToken to call mrr.test/oauth/token");
        $refresh_token = $request->header('Refreshtoken');
        $oClient = OClient::where('password_client', 1)->first();
        $http = new Client;

        try {
            $response = $http->request('POST', 'http://mrr.test/be/oauth/token', [ #url('/oauth/token'), [
                'form_params' => [
                    'grant_type' => 'refresh_token',
                    'refresh_token' => $refresh_token,
                    'client_id' => $oClient->id,
                    'client_secret' => $oClient->secret,
                    'scope' => '*',
                ],
            ]);
            return json_decode((string) $response->getBody(), true);
        } catch (Exception $e) {
            return response()->json("unauthorized", 401); 
        }
    }

    public function details() { 
        $user = Auth::user(); 
        return response()->json($user, $this->successStatus); 
    } 

    public function logout(Request $request) {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function unauthorized() { 
        return response()->json("unauthorized", 401); 
    } 
}
