<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Service List</h4>
            <div class="row p-2">
              <div class="col-md-3">
                <router-link to="/services/create">
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
                    <th>Service Name</th>
                    <th>Service Category Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-if="services.length > 0" v-for="(service, index) in services" :key="service.id">
                    <td>{{ ++index }}</td>
                    <td>{{ service.name }}</td>
                    <td>{{ service.service_category.name }}</td>
                    <td>
                      <button type="button" class="btn btn-sm btn-success btn-rounded btn-fw" @click="">
                        <i class="mdi mdi-grease-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteService(service.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>
                  <tr v-else>
                    <td>Not Found</td>
                  </tr> 
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getServices()"></v-pagination>
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
          services: [],
          pagination: {
             current_page: 1,
            
          },
          search_query: ''
       }
    },
    mounted() {
       this.getServices()
    },
    methods: {       
        getServices() {          
          const loader = this.$loading.show({
             container: this.$refs.attendanceTable,
             canCancel: true,
             loader: 'bars'
          })
          axios.get('services?page='+this.pagination.current_page)
              .then((res) => {
                this.services = res.data.data;
                this.pagination = res.data;               
             })
             .catch((error) => {
                console.log(error);
             })
             .finally(() => {    
                loader.hide();             
             });
        },
        deleteService(id) {
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
                    axios.delete('/services/'+id)
                      .then(response => {
                          this.getServices();
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
    }
  }
</script>