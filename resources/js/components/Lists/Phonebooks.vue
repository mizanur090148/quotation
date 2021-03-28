<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Phone Book List</h4>
            <hr>
            <div class="row p-2">
              <div class="col-md-3 pl-1">
                <router-link to="/phonebook/create">
                  <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw">Add New <i class="fas fa-plus"></i></button>
                </router-link>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-3 pr-1">
                <input type="text" class="form-control search-field" v-model="search_key" placeholder="Search"/>
              </div>
            </div>
            <div class="table-responsive">
              <table class="list-table table-hover">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Phone No.</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Designation</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody v-if="phonebooks.length > 0">
                  <tr v-for="(phonebook, index) in phonebooks" :key="phonebook.id">
                      <td>{{ ++index }}</td>
                      <td>{{ phonebook.phone_no }}</td>
                      <td>{{ phonebook.name }}</td>
                      <td>{{ phonebook.email }}</td>
                      <td>{{ phonebook.designation }}</td>
                      <td>{{ phonebook.address }}</td>
                      <td class="text-center">
                        <router-link
                          :to="'/phonebook/'+phonebook.id"
                          class="btn btn-sm btn-success btn-rounded btn-fw"
                          title="edit">
                          <i class="mdi mdi-grease-pencil"/>
                        </router-link>
                        <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deletePhonebook(phonebook.id)">
                          <i class="mdi mdi-delete"></i>
                        </button>
                      </td>
                  </tr>                  
                </tbody>
                <tbody v-else>
                  <tr v-if="pagination.current_page == pagination.last_page" class="not-found">
                    <td colspan="10" class="text-danger">Not Found</td>
                  </tr>
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getPhonebooks()"></v-pagination>
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
          phonebooks: [],
          pagination: {
            current_page: 1,
          },
          search_key: '',
       }
    },
    mounted() {
      this.getPhonebooks()
    },
    watch: {
      search_key: function() {
        this.searchPhonebooks();
      },
    },
    methods: { 
      searchPhonebooks() {
        Api.get('search-phonebooks?search_key=' + this.search_key)
          .then(res => {
            this.phonebooks = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      },
      deletePhonebook(id) { 
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
                  Api.delete('/phonebooks/'+id)
                    .then(response => {
                        this.getPhonebooks();
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
      getPhonebooks() {      
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })

        Api.get('phonebooks?page='+this.pagination.current_page)
          .then((res) => {               
            this.phonebooks = res.data.data;
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