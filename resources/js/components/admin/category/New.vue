<template>

        <section class="content">
            <div class="container-fluid">
                <div class="row justify-content-around">
                    <!-- left column -->
                    <div class="col-md-6">
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Add New Category</h3>
                            </div>
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form role="form" @click.prevent="addCategory()">
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="categoryId">Category Name</label>
                                        <input type="text" class="form-control" id="categoryId" placeholder="Enter category" v-model="form.cat_name" name="cat_name"  :class="{ 'is-invalid': form.errors.has('cat_name') }">
                                        <has-error :form="form" field="cat_name"></has-error>
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

                    cat_name:'',

                    }
                )
            }
        },
        methods:{
            addCategory(){
                this.form.post('/add-category')
                    .then((response)=>{
                        this.$router.push('/category-list')
                        Swal.fire({
                            icon: 'success',
                            title: 'Category added successfully'
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
