<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Outlet List</h4>
            <div class="row p-2">
              <div class="col-md-3">
                <router-link to="/outlets/create">
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
                    <th>Responsible Person</th>
                    <th>E-mail</th>
                    <th>Phone No</th>
                    <th>Address</th>                   
                    <th>Action</th>
                </tr>
                </thead>
                <tbody v-if="outlets.length">
                  <tr v-for="(outlet, index) in outlets" :key="outlet.id">
                    <td>{{ ++index }}</td>
                    <td>{{ outlet.name }}</td>
                    <td>{{ outlet.responsible_person }}</td>
                    <td>{{ outlet.email }}</td>
                    <td>{{ outlet.phone_no }}</td>
                    <td>{{ outlet.address }}</td>                   
                    <td>
                      <button type="button" class="btn btn-sm btn-success btn-rounded btn-fw" @click="">
                        <i class="mdi mdi-grease-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteOutlet(outlet.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr>
                    <td>Not Found</td>
                  </tr>
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getOutlets()"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          outlets: [],
          pagination: {
             current_page: 1,
          }
       }
    },     
    mounted() {
      this.getOutlets()
    },
    methods: {
       deleteOutlet(id) {
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
                    axios.delete('/outlets/'+quotationId)
                      .then(response => {
                          this.getOutlets();
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
       getOutlets() {          
          const loader = this.$loading.show({
             container: this.$refs.attendanceTable,
             canCancel: true,
             loader: 'bars'
          })
          axios.get('outlets?page='+this.pagination.current_page)
              .then((res) => {
                this.outlets = res.data.data;
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