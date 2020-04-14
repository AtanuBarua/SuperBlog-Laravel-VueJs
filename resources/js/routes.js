import AdminHome from './components/admin/AdminHome.vue'

//category
import CategoryList from './components/admin/category/List.vue'
import AddCategory from './components/admin/category/New.vue'
import EditCategory from './components/admin/category/Edit.vue'

//post
import PostList from './components/admin/post/List'
import AddPost from './components/admin/post/New'
import EditPost from './components/admin/post/Edit'


//front
import FrontHome from './components/front/FrontHome.vue'
import BlogPost from './components/front/blog/BlogPost'
import SinglePost from "./components/front/blog/SinglePost";


export const routes = [

    {
        path:'/home',
        component: AdminHome
    },

    //admin category
    {
        path:'/category-list',
        component: CategoryList
    },

    {
        path:'/add-category',
        component: AddCategory
    },

    {
        path:'/edit-category/:id',
        component: EditCategory
    },

    //admin post
    {
        path:'/post-list',
        component: PostList
    },

    {
        path:'/add-post',
        component: AddPost
    },

    {
        path:'/edit-post/:id',
        component: EditPost
    },


    //Front
    {
        path:'/',
        component: FrontHome
    },

    {
        path:'/blogs',
        component: BlogPost
    },


    {
        path:'/blog/:id',
        component: SinglePost
    },

    {
        path:'/categories/:id',
        component: BlogPost
    },




]
