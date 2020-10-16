<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Supplier List</h4>
            <div class="row p-2">
              <div class="col-md-3">
                <!-- <router-link to="/supplier/create">
                  <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw">Add New <i class="fas fa-plus"></i></button>
                </router-link> -->
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-3">
                <input type="text" class="form-control search-field" v-model="search_key" placeholder="Search"/>
              </div>
            </div>
            <div class="table-responsive">
              <table class="list-table table-hover">
                <thead>
                  <tr>
                    <th>Sl.</th>
                    <th>Supplier Name</th>
                    <th>Resonsible Person</th>
                    <th>Mobile No.</th>               
                    <th>Telephone No.</th>                   
                    <th>E-mail</th>
                    <th>Address</th>                  
                    <th>Action</th>
                </tr>
                </thead>
                <tbody v-if="suppliers.length">
                  <tr v-for="(supplier, index) in suppliers" :key="supplier.id">
                    <td>{{ ++index }}</td>
                    <td>{{ supplier.name }}</td>
                    <td>{{ supplier.responsible_person }}</td>
                    <td>{{ supplier.mobile_no }}</td>
                    <td>{{ supplier.telephone_no }}</td>                  
                    <td>{{ supplier.email }}</td>
                    <td>{{ supplier.address }}</td>                  
                    <td>
                      <button type="button" class="btn btn-sm btn-success btn-rounded btn-fw" @click="">
                        <i class="mdi mdi-grease-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteSupplier(supplier.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>                  
                </tbody>
                <tbody v-else>
                  <tr v-if="pagination.current_page == pagination.last_page" class="not-found">
                    <td colspan="8" class="text-danger">Not Found</td>
                  </tr>
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getSuppliers()"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
  import axios from '../../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
  
  export default {
    data() {
      return {
        listResponse: null,
        suppliers: [],
        pagination: {
          current_page: 1,
        },
        search_key: ''
      }
    },     
    mounted() {
      this.getSuppliers()
    },
    watch: {
      search_key: function() {
        this.searchSuppliers();
      },
    },
    methods: {
      searchSuppliers() {
        axios.get('search-suppliers?search_key=' + this.search_key)
          .then(res => {
            this.suppliers = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      }, 
      deleteSupplier(id) { 
        this.$snotify.clear();
        this.$snotify.confirm(
          "Are you sure to delete this?",
          {
            closeOnClick: false,
            pauseOnHover: true,
            buttons: [
              {
                text: "Yes",
                action: toast => {
                  this.$snotify.remove(toast.id);
                  axios.delete('/suppliers/'+id)
                    .then(response => {
                        this.getSuppliers();
                        this.$snotify.success('Successfully deleted', 'Success');
                    })
                    .catch(e => {
                        this.$snotify.success('Not deleted', 'Success');
                    })
                },
                bold: true
              },
              {
                text: "No",
                action: toast => {
                    this.$snotify.remove(toast.id);
                },
                bold: true
              }
            ]
          }
        );
      },
      getSuppliers() {      
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('suppliers?page='+this.pagination.current_page)
          .then((res) => {
            this.suppliers = res.data.data;
            this.pagination = res.data;
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