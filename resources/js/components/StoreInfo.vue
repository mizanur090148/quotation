<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Store List</h4>
            <div class="row p-2">
              <div class="col-md-3">
                <router-link to="/store-info/create">
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
                    <th>Outlet</th>
                    <th>Category</th>
                    <th>Sub Category</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Item Code/Desc.</th>
                    <th>Quantity</th>
                    <th>Sold Quantity</th>
                    <th>Rate</th>
                    <th>Status</th>
                    <th>Entry By</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-if="store_info.length > 0" v-for="(store, index) in store_info" :key="store.id">
                    <td>{{ ++index }}</td>
                    <td>{{ store.outlet.name }}</td>
                    <td>{{ store.category.name }}</td>
                    <td>{{ store.sub_category.name }}</td>
                    <td>{{ store.color.name }}</td>
                    <td>{{ store.size.name }}</td>
                    <td>{{ store.item_code_or_description }}</td>
                    <td>{{ store.quantity }}</td>
                    <td>{{ 'Sold qty' }}</td>
                    <td>{{ store.rate }}</td>
                    <td>{{ store.status }}</td>
                    <td>{{ store.created_by.full_name }}</td>                 
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
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getStoreInfo()"></v-pagination>
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
          store_info: [],
          pagination: {
             current_page: 1
          },
          search_query: ''
       }
    },
    mounted() {
       this.getStoreInfo()
    },
    methods: {
      getStoreInfo() {
        const loader = this.$loading.show({
           container: this.$refs.attendanceTable,
           canCancel: true,
           loader: 'bars'
        })
        axios.get('store-info?page='+this.pagination.current_page)
          .then((res) => {
            this.store_info = res.data.content.data;
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
    }
  }
</script>