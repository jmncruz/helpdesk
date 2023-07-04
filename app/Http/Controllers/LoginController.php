<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index(Request $resquest){

        return response()->json(
            $resquest->all()
        , 500);
    }
}
