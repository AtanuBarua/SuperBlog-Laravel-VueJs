
export default {
    state:{
        category:[],
        post:[],
        blogpost:[],
        singlepost:[],
        allcategories:[],
        latestpost:[]

    },
    getters:{
        getCategory(state){
            return state.category
        },

        getAllPost(state){
            return state.post
        },

        getBlogPost(state){
            return state.blogpost
        },

        getSinglePost(state){
            return state.singlepost
        },

        allcategories(state){
            return state.allcategories
        },

        latestpost(state){
            return state.latestpost
        }

    },
    actions:{
        allCategory(context){
            axios.get('/category')
                .then((response)=>{
                    context.commit('categories',response.data.categories)
                })
        },

        allPost(context){
            axios.get('/posts')
                .then((response)=>{
                    context.commit('posts', response.data.posts)
                })

        },

        getBlogPost(context){
            axios.get('/blogpost')
                .then((response)=>{
                    context.commit('getBlogPost', response.data.posts)
                })

        },

        getPostById(context,payload){
            axios.get('/singlepost/'+payload)
                .then((response)=>{
                    context.commit('singlePost', response.data.post)
                })
        },

        allcategories(context){
            axios.get('/categories/')
                .then((response)=>{
                    context.commit('allcategories', response.data.categories)
                })
        },

        getPostByCatId(context, payload){
            axios.get('/category/post/'+payload)
                .then((response)=>{
                    context.commit('getPostByCatId', response.data.posts)
                })
        },

        searchPost(context, payload){
            axios.get('/search?s='+payload)
                .then((response)=>{
                    context.commit('searchPost', response.data.posts)
                })
        },

        latestPost(context){
            axios.get('/latestpost/')
                .then((response)=>{
                    context.commit('latestpost', response.data.posts)
                })
        }

    },
    mutations:{
        categories(state,data){
            return state.category = data
        },

        posts(state,data){
            return state.post = data
        },

        getBlogPost(state, data){
            return state.blogpost = data
        },

        singlePost(state, data){
            return state.singlepost = data
        },

        allcategories(state, data){
            return state.allcategories = data
        },

        getPostByCatId(state,data){
             state.blogpost = data
        },

        searchPost(state,data){
            state.blogpost = data
        },

        latestpost(state,data){
            state.latestpost = data
        }

    }
}
