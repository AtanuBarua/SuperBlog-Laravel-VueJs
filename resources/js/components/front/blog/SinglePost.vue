<template>
    <span id="singlepost">
        <section id="content">
      <div class="container">
        <div class="row">
          <div class="span8">
            <article>
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                      <h3><a href="#">{{singlePost.title}}</a></h3>
                    </div>
                    <img :src="`images/${singlePost.photo}`" alt="hlw"/>
                  </div>
                  <p>
                    {{singlePost.description}}
                  </p>

                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li><i class="icon-user"></i>{{singlePost.user.name}}</li>
                      <li><i class="icon-folder-open"></i>{{singlePost.category.cat_name}}</li>
                      <li><i class="icon-folder-open"></i>{{singlePost.created_at | timeformat}}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
              <!-- author info -->


          </div>
            <Sidebar></Sidebar>

        </div>
      </div>
    </section>
    </span>

</template>

<script>
    import Sidebar from "./Sidebar.vue"
    export default {
        name: "SinglePost",
        components:{
            Sidebar
        },
        computed:{
            singlePost(){
                return this.$store.getters.getSinglePost
            },

        },
        methods:{
            singlepost(){
                return this.$store.dispatch('getPostById',this.$route.params.id)
            }
        },
        mounted() {
            this.singlepost();
        },

        watch:{
            $route(to,from){
                this.singlepost();
            }
        }
    }
</script>

<style scoped>

</style>
