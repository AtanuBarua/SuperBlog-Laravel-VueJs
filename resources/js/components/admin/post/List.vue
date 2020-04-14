<template>
    <div>
        <section class="content">
            <div class="row justify-content-around">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Post List</h3>
                            <div class="card-tools">
                                <button class="btn btn-primary">
                                    <router-link to="/add-post" style="color:#fff">Add Post</router-link>
                                </button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-dark table-bordered table-hover ">
                                <thead>
                                <tr>
                                    <th>No</th>
                                    <th>User Name</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Action</th>


                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(post,index) in allPost">

                                    <td>{{ index+1 }}</td>
                                    <td v-if="post.user">{{ post.user.name}}</td>
                                    <td v-if="post.category">{{ post.category.cat_name}}</td>
                                    <td>{{ post.title | shortlength(20,"...")}}</td>
                                    <td>{{ post.description | shortlength(40,"...")}}</td>
                                    <td><img v-bind:src="images(post.photo)" alt="" height="100" width="100"></td>
                                    <td>
                                        <router-link v-bind:to="`/edit-post/${post.id}`">Edit</router-link>
                                        <a href="" @click.prevent="deletePost(post.id)">Delete</a>
                                    </td>
                                </tr>

                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>No</th>
                                    <th>User Name</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->


                    <!-- /.card -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
    </div>

</template>


<script>
    export default {
        name: "List",

        mounted() {
            this.$store.dispatch("allPost")
        },

        computed:{
            allPost(){
                return this.$store.getters.getAllPost
            }

        },

        methods:{
            images(img){
                return "images/"+img
            },

            deletePost(id){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })

                    .then((result) => {
                        if (result.value) {
                            axios.get('/post/delete/'+id)
                            Swal.fire(
                                'Deleted!',
                                'Post has been deleted.',
                                'success'
                            )
                            this.$store.dispatch("allPost")
                        }
                    })

            }

        }

    }
</script>

<style scoped>

</style>
