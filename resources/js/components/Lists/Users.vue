<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">User List</h4>
            <hr>
            <div class="row p-2">
              <div class="col-md-3 add-new-btn">
                <router-link to="/user/create">
                  <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw">Add New <i class="fas fa-plus"></i></button>
                </router-link>
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
                    <th>F. Name</th>
                    <th>L. Name</th>
                    <th>E-mail</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>Role</th>
                    <th>Branch</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-if="users.length">
                  <tr v-for="(user, index) in users" :key="user.id">
                    <td>{{ ++index }}</td>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.mobile_no }}</td>
                    <td>{{ user.address }}</td>
                    <td>{{ user.role.name }}</td>
                    <td>{{ user.outlet.name }}</td>
                    <td>
                      <router-link
                        :to="'/user/'+ user.id"
                        class="btn btn-sm btn-success btn-rounded btn-fw"
                        title="edit">
                        <i class="mdi mdi-grease-pencil"/>
                      </router-link>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteUser(user.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>                  
                </tbody>
                <tbody v-else>
                  <tr v-if="pagination.current_page == pagination.last_page" class="not-found">
                    <td colspan="9" class="text-danger">Not Found</td>
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
  import Api from '../../apis/Api';
  
  export default {
    data() {
      return {
        listResponse: null,
        users: [],
        pagination: {
          current_page: 1,
        },
        search_key: ''
      }
    },     
    mounted() {
      this.getUsers()
    },
    watch: {
      search_key: function() {
        this.searchUsers();
      },
    },
    methods: {
      searchUsers() {
        Api.get('search-users?search_key=' + this.search_key)
          .then(res => {
            this.users = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      }, 
      deleteUser(userId) {
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
                  Api.delete('/users/' + userId)
                    .then(response => {
                      this.getUsers();
                      this.$snotify.success('Successfully deleted', 'Success');
                    })
                    .catch(e => {
                      this.$snotify.error('Not deleted', 'error');
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
        Api.get('users?page='+this.pagination.current_page)
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
      },
    }    
  }
</script>