<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('front.index');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//Route::get('/post','PostController@allPost')->name('post');

//Route::get('/{anypath}','HomeController@index')->where('path','.*');


Route::group(['middleware' => ['auth']], function () {

    //Category
    Route::post('/add-category','CategoryController@addCategory');
    Route::get('category','CategoryController@allCategory');
    Route::get('category/delete/{id}','CategoryController@deleteCategory');
    Route::get('/edit-category/{id}','CategoryController@editCategory');
    Route::post('/update-category/{id}','CategoryController@updateCategory');
    Route::get('/deletecategory/{id}','CategoryController@deleteSelectedCategory');

    //Post
    Route::get('posts','PostController@allPost');
    Route::post('add-post','PostController@addPost');
    Route::get('post/delete/{id}','PostController@deletePost');
    Route::get('/edit-post/{id}','PostController@editPost');
    Route::post('/update-post/{id}','PostController@updatePost');

});

//front
Route::get('/blogpost','BlogController@getAllPost');
Route::get('/singlepost/{id}','BlogController@getPostById');
Route::get('/categories/','BlogController@getAllCategories');
Route::get('/category/post/{id}','BlogController@getAllPostById');
Route::get('/search/','BlogController@searchPost');
Route::get('/latestpost/','BlogController@latestPost');
