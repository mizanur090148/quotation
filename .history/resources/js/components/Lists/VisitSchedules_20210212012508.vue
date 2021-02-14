<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Visit Schedule List</h4>
            <hr>
            <div class="row p-2">
              <div class="col-md-3 pl-1">
                <router-link to="/visit-schedules/create">
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
                    <th>Form Date</th>
                    <th>To Date</th>
                    <th>From Location</th>
                    <th>To Location</th>
                    <th>Status</th>
                    <th>Note</th>
                    <th>Admin Comment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody v-if="schedules.length > 0">
                  <tr v-for="(schedule, index) in schedules" :key="schedule.id" :class="(schedule.status == 1) ? 'bg-gradient-success' : (schedule.status == 2) ? 'bg-warning' : (schedule.status == 3) ? 'bg-danger' : ''">
                      <td>{{ ++index }}</td>
                      <td>{{ schedule.from_date }}</td>
                      <td>{{ schedule.to_date }}</td>
                      <td>{{ schedule.from_location }}</td>
                      <td>{{ schedule.to_location }}</td>
                      <td>{{ (schedule.status == 0) ? 'Pending' : 'Accepted' }}</td>
                      <td>{{ schedule.note }}</td>
                      <td>{{ schedule.admin_comment }}</td>
                      <td class="text-center">
                        <router-link
                          :to="'/visit-schedules/'+schedule.id"
                          class="btn btn-sm btn-success btn-rounded btn-fw"
                          title="edit">
                          <i class="mdi mdi-grease-pencil"/>
                        </router-link>
                        <router-link
                          :to="'/review-visit-schedules/'+schedule.id"
                          class="btn btn-sm btn-primary btn-rounded btn-fw"
                          title="edit">
                          <i class="mdi mdi-eye"/>
                        </router-link>
                        <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteVisitSchedule(schedule.id)">
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
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getVisitSchedules()"></v-pagination>
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
  
  export default {
    data() {
       return {
          schedules: [],
          pagination: {
            current_page: 1,
          },
          search_key: ''
       }
    },
    mounted() {
      this.getVisitSchedules()
    },
    watch: {
      search_key: function() {
        this.searchVisitSchedules();
      },
    },
    methods: { 
      searchVisitSchedules() {
        axios.get('search-visit-schedules?search_key=' + this.search_key)
          .then(res => {
            this.schedules = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      },
      deleteVisitSchedule(id) { 
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
                  axios.delete('/visit-schedules/'+id)
                    .then(response => {
                        this.getVisitSchedules();
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
      getVisitSchedules() {      
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })

        axios.get('visit-schedules?page='+this.pagination.current_page)
          .then((res) => {               
            this.schedules = res.data.data;
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