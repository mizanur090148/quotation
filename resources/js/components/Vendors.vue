<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Vendor List</h4>
            <div class="row p-2">
              <div class="col-md-3">
                <router-link to="/vendors/create">
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
                    <th>Vendor Name</th>
                    <th>Vendor No.</th>
                    <th>Trn No.</th>
                    <th>Telephone No.</th>
                    <th>Fax No.</th>
                    <th>E-mail</th>
                    <th>Address</th>
                    <th>Attention</th>
                    <th>Attention Designation</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-if="vendors.length > 0" v-for="(vendor, index) in vendors" :key="vendor.id">
                    <td>{{ ++index }}</td>
                    <td>{{ vendor.vendor_name }}</td>
                    <td>{{ vendor.vendor_no }}</td>
                    <td>{{ vendor.trn_no }}</td>
                    <td>{{ vendor.telephone_no }}</td>
                    <td>{{ vendor.fax_no }}</td>
                    <td>{{ vendor.email }}</td>
                    <td>{{ vendor.address }}</td>
                    <td>{{ vendor.attention }}</td>
                    <td>{{ vendor.attention_designation }}</td>                  
                    <td>
                      <button type="button" class="btn btn-sm btn-success btn-rounded btn-fw" @click="">
                        <i class="mdi mdi-grease-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteVendor(vendor.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>
                  <tr v-else>
                    <td>Not Found</td>
                  </tr> 
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getVendors()"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-snotify></vue-snotify>
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
          vendors: [],
          pagination: {
             current_page: 1,
          }
       }
    },     
    mounted() {
      this.getVendors()
    },
    methods: {
       deleteVendor(id) { 
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
                    axios.delete('/vendors/'+id)
                      .then(response => {
                          this.getVendors();
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
       getVendors() {      
          const loader = this.$loading.show({
             container: this.$refs.attendanceTable,
             canCancel: true,
             loader: 'bars'
          })
          axios.get('vendors?page='+this.pagination.current_page)
              .then((res) => {               
                this.vendors = res.data.data;
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