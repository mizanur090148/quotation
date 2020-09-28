<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Category List</h4>
            <div class="row p-2">
              <div class="col-md-3">
                <router-link to="/categories/create">
                  <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw">Add New <i class="fas fa-plus"></i></button>
                </router-link>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-3">
                <input type="text" class="form-control search-field" placeholder="Search"/>
              </div>
            </div>
            <div class="table-responsive">
              <table class="list-table table-hover">
                <thead>
                  <tr>
                    <th>Sl.</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-if="categories.length > 0" v-for="(category, index) in categories" :key="category.id">
                    <td>{{ ++index }}</td>
                    <td>{{ category.name }}</td>
                    <td>
                      <button type="button" class="btn btn-sm btn-success btn-rounded btn-fw" @click="">
                        <i class="mdi mdi-grease-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteUser(user.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>
                  <tr v-else>
                    <td>Not Found</td>
                  </tr> 
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getCategories()"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
  
  export default {
    data() {
       return {
          listResponse: null,
          categories: [],
          pagination: {
             current_page: 1,
            
          },
          search_query: ''
       }
    },     

    methods: {
       categoryDelete(id) {
          if (window.confirm('Are You Sure?')) {
             deleteEmployee(id)
                .then((res) => {
                   console.log(res);
                   this.getCategories();
                })
                .catch((error) => {
                   console.log(error);
                });
          }
       },
       getCategories() {          
          const loader = this.$loading.show({
             container: this.$refs.attendanceTable,
             canCancel: true,
             loader: 'bars'
          })
          axios.get('categories?page='+this.pagination.current_page)
              .then((res) => {
                this.categories = res.data.content.data;
                this.pagination = res.data.content;
                console.log(res.data.content);
             })
             .catch((error) => {
                console.log(error);
             })
             .finally(() => {    
                loader.hide();             
             });
       }
    },
    mounted() {
       this.getCategories()
    }
  }
</script>