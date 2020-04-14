<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function addCategory(Request $request){
        //return $request->all();
        $this->validate($request,[
           'cat_name' => 'required|min:2|max:20'
        ]);
        $category = new Category();
        $category->cat_name = $request->cat_name;
        $category->save();
        return ['message'=>'Category added successfully'];
    }

    public function allCategory(){
        $categories = Category::orderBy('id','desc')->get();
        return response()->json([
            'categories'=>$categories
        ],200);
    }

    public function deleteCategory($id)
    {
        $category = Category::find($id);
        $category->delete();
    }

    public function editCategory($id){
        $category = Category::find($id);
        return response()->json([
            'category' => $category
        ],200);

    }

    public function updateCategory(Request $request, $id)
    {
        $this->validate($request,[
            'cat_name' => 'required|min:2|max:20'
        ]);
        $category = Category::find($id);
        $category->cat_name = $request->cat_name;
        $category->save();
    }

    public function deleteSelectedCategory($ids){
        $selectedIds = explode(',',$ids);
        foreach ($selectedIds as $id){
            $category = Category::find($id);
            $category->delete();
        }
    }
}
