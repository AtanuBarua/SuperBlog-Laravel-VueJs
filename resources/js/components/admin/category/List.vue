<template>
    <div>
        <section class="content">
            <div class="row justify-content-around">
                <div class="col-8">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Category List</h3>
                            <div class="card-tools">
                                <button class="btn btn-primary">
                                    <router-link to="/add-category" style="color:#fff">Add Category</router-link>
                                </button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>
                                        <select name="" id="" v-model="select"  @change="deleteSelected">
                                            <option value="">Select</option>
                                            <option value="">Delete All</option>
                                        </select><br>
                                        <input type="checkbox" @click.prevent="selectAll" v-model="allSelect">
                                        <span v-if="allSelect==false">Check all</span>
                                        <span v-else>Uncheck all</span>
                                    </th>
                                    <th>No</th>
                                    <th>Category Name</th>
                                    <th>Date</th>
                                    <th>Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(category,index) in getallCategory" :key="category.id">
                                    <td><input type="checkbox" v-model="categoryItem" :value="category.id"></td>
                                    <td>{{index+1}}</td>
                                    <td>{{category.cat_name}}</td>
                                    <td>{{category.created_at | timeformat}}</td>
                                    <td>
                                        <router-link v-bind:to="`/edit-category/${category.id}`" class="btn btn-success">Edit</router-link>
                                        <a href="" class="btn btn-danger" @click.prevent="deleteCategory(category.id)">Delete</a>
                                    </td>
                                </tr>

                                </tbody>
                               <!-- <tfoot>
                                <tr>
                                    <th>
                                        <select name="" id="">
                                            <option>Select</option>
                                            <option>Delete All</option>
                                        </select><br>
                                        <input type="checkbox">Check all
                                    </th>
                                    <th>No</th>
                                    <th>Category Name</th>
                                    <th>Action</th>
                                </tr>
                                </tfoot>-->
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
        data(){
            return{
                categoryItem:[],
                select:'',
                allSelect: false
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
            deleteCategory(id)
            {

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
                            axios.get('/category/delete/'+id)
                            Swal.fire(
                                'Deleted!',
                                'Category has been deleted.',
                                'success'
                            )
                            this.$store.dispatch("allCategory")
                        }
                    })

            },

            deleteSelected(){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })
                    .then((result)=>{
                        if (result.value){
                            axios.get('/deletecategory/'+this.categoryItem)
                            Swal.fire(
                                'Deleted!',
                                'Category has been deleted.',
                                'success'
                            )
                            this.categoryItem = []
                            this.$store.dispatch("allCategory")
                        }
                    })
               /* axios.get('deletecategory/'+this.categoryItem)
                    .then(()=>{
                        this.$store.dispatch("allCategory")
                    })*/

            },

            selectAll(){

                if (this.allSelect==false){
                    this.allSelect = true
                    for(var category in this.getallCategory){
                        this.categoryItem.push(this.getallCategory[category].id)
                    }

                }
                else {
                    this.allSelect = false
                    this.categoryItem = []

                }


            }

            }
    }
</script>

<style scoped>

</style>
