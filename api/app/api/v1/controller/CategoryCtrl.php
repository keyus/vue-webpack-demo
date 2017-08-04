<?php
namespace app\api\v1\controller;
use app\api\v1\model\Category;
use think\Request;

class CategoryCtrl extends Base
{
    public function model () {
        return new Category();
    }
    public function index($id=null)
    {
        $data = $this->model()->getCategory($id);
        return json($data);
    }

    public function edit(Request $request){
        $query  = $request->param();
        $result = $this->model()->writeCategory($query);
        return 1;
    }

}
