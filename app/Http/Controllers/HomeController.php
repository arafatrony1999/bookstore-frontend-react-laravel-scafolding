<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function getFirstData(){
        $data = DB::select('select * from product');
        $data = json_encode($data);
        return $data;
    }
}
