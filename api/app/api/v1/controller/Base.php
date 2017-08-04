<?php
namespace app\api\v1\controller;
use think\Controller;

class Base extends Controller
{
    public function __construct () {
        parent::__construct();
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT, PATCH");
        header("Access-Control-Max-Age: 3600");
    }
}
