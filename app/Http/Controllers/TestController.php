<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TestController extends Controller
{
    //
    public function callFlask() {
        $response = Http::get('http://flask:5000/');
        return $response->body();
    }

    public function data() {
        $ary = array(
            array(
                "id" => 100,
                "name" => 'Jone 0',
                "registered" => '2020/09/01',
                "role" => "Guest",
                "status" => "Pending"
            ),
            array(
                "id" => 101,
                "name" => 'Jone 1',
                "registered" => '2020/09/01',
                "role" => "Guest",
                "status" => "Pending"
            ),
            array(
                "id" => 102,
                "name" => 'Jone 2',
                "registered" => '2020/09/01',
                "role" => "Guest",
                "status" => "Pending"
            )
        );
        return $ary;
    }
}
