<?php
namespace app\api\v1\model;
use think\Db;

class Category
{
    protected $pk    = 'pid';
    public function getCategory($id)
    {
        if($id){
            $data = Db::name('category')->field('pid,name,parent_id,is_nav,sort')->find($id);
            return $data;
        }
        $data = Db::name('category')->field('pid,name,parent_id,is_nav,sort')->select();
        return $data;
    }

    //写入数据
    public function writeCategory($query) {
        Db::name('category')->insert($query);
    }

}
