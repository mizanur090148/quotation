<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">User List</h4>
            <div class="row p-2">
              <div class="col-md-3">
                <router-link to="/users/create">
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
                    <th>E-mail</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>Role</th>
                    <th>Outlet</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-if="users.length > 0" v-for="(user, index) in users" :key="user.id">
                    <td>{{ ++index }}</td>
                    <td>{{ user.full_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.mobile_no }}</td>
                    <td>{{ user.address }}</td>
                    <td>{{ user.role.name }}</td>
                    <td>{{ user.outlet.name }}</td>
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
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getUsers()"></v-pagination>
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
        users: [],
        pagination: {
            current_page: 1,
        }
      }
    },     
    mounted() {
      this.getUsers()
    },
    methods: {
       deleteUser(id) { alert(id);
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
                    axios.delete('/users/'+quotationId)
                      .then(response => {
                          this.getUsers();
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
      getUsers() {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('users?page='+this.pagination.current_page)
            .then((res) => {
              this.users = res.data.data;
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