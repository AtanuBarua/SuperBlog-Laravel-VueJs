<template>
    <span id="sidebar">
        <div class="span4">
            <aside class="right-sidebar">
              <div class="widget">
                <form class="form-search">
                  <input @keyup="search" placeholder="Type something" v-model="keyword" type="text" class="input-medium search-query">
                  <button type="submit" @click.prevent="search" class="btn btn-square btn-theme">Search</button>
                </form>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Categories</h5>
                <ul class="cat">
                  <li v-for="category in allcategories"><i class="icon-angle-right"></i><router-link :to="`/categories/${category.id}`">{{category.cat_name}}</router-link><span> (20)</span></li>

                </ul>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Latest posts</h5>
                <ul class="recent">
                  <li v-for="(post,index) in blogPost" v-if="index<3">
                    <img :src="`images/${post.photo}`" width="100" height="100"  alt="" />
                    <h6><router-link :to="`/blog/${post.id}`">{{post.title}}</router-link></h6>
                    <p>
                      {{post.description | shortlength(50,"...")}}
                    </p>
                      <hr/>
                  </li>

                </ul>
              </div>

            </aside>
          </div>
    </span>

</template>

<script>
    import _ from 'lodash'
    export default {
        name: "Sidebar",
        data(){
            return{
               keyword:''
            }

        },
        computed:{
            allcategories(){
                return this.$store.getters.allcategories;
            },
            blogPost(){
                return this.$store.getters.latestpost
            }
        },

        mounted(){
            //this.$store.dispatch('getBlogPost');
            this.$store.dispatch('latestPost');
            this.$store.dispatch('allcategories')
        },

        methods:{

            search:_.debounce(function(){
                this.$store.dispatch('searchPost',this.keyword)
            },1000)
        }
    }


</script>

<style scoped>

</style>
