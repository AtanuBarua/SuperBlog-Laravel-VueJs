<template>

    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <!-- left column -->
                <div class="col-md-10">
                    <!-- general form elements -->
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Add New Post</h3>
                        </div>
                        <!-- /.card-header -->
                        <!-- form start -->
                        <form role="form" enctype="multipart/form-data" @submit.prevent="addNewPost()">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="title">Title</label>
                                    <input type="text" class="form-control" id="title" placeholder="title" v-model="form.title" name="title"  :class="{ 'is-invalid': form.errors.has('title') }">
                                    <has-error :form="form" field="title"></has-error>
                                </div>
                                <div class="form-group">
                                    <label>Description</label>
                                    <!--<textarea class="form-control" id="description" placeholder="description" v-model="form.description" name="description"  :class="{ 'is-invalid': form.errors.has('description') }"></textarea>-->
                                    <markdown-editor v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }"></markdown-editor>
                                    <has-error :form="form" field="description"></has-error>
                                </div>
                                <div class="form-group">
                                    <label>Select Category</label>
                                    <select class="form-control" v-model="form.cat_id" :class="{ 'is-invalid': form.errors.has('cat_id') }">
                                        <option disabled value="">Select One</option>
                                        <option :value="category.id" v-for="category in getallCategory">{{ category.cat_name }}</option>
                                        <has-error :form="form" field="cat_id"></has-error>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input @change="changePhoto($event)" name="photo" type="file" :class="{ 'is-invalid': form.errors.has('photo') }">
                                    <has-error :form="form" field="photo"></has-error>
                                    <img :src="form.photo" alt="" width="80" height="80">
                                </div>

                            </div>
                            <!-- /.card-body -->

                            <div class="card-footer">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->

                    <!-- Form Element sizes -->

                    <!-- /.card -->


                    <!-- /.card -->

                    <!-- Input addon -->

                    <!-- /.card -->

                </div>

            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>


</template>

<script>
    export default {
        name: "New",

        data(){
            return{
                form: new Form({

                        title:'',
                        description:'',
                        cat_id:'',
                        photo:'',

                    }
                )
            }
        },

        mounted(){

            this.$store.dispatch("allCategory")
        },

        computed:{
            getallCategory(){
                return this.$store.getters.getCategory
            }
        },

        methods:{
            changePhoto(event)
            {
                let file = event.target.files[0];
                if (file.size>1048576){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Image size has to be less than 1 mb',
                        footer: '<a href></a>'
                    })
                }
                else{
                    let reader = new FileReader();
                    reader.onload = e => {
                        // The file's text will be printed here
                        this.form.photo = e.target.result
                    };

                    reader.readAsDataURL(file);
                }

            },

            addNewPost()
            {
                this.form.post('add-post')
                    .then(()=>{
                        this.$router.push('/post-list')
                        Swal.fire({
                            icon: 'success',
                            title: 'Post added successfully'
                        })
                    })
                    .catch(()=>{

                    })

            }


        }
    }
</script>

<style scoped>

</style>
