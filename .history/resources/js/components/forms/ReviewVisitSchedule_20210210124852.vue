<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">New Entry Form</h4>
            <hr>
            <form class="forms-sample" @submit.prevent="store()">
              <div class="row">
                <div class="col-4">
                  <v-date-picker v-model="form.range" is-range>
                    <template v-slot="{ inputValue, inputEvents }">
                      <div class="row">
                        <div class="col-6">
                          <div class="form-group">
                            <label>From Date</label>
                            <input :value="inputValue.start" readonly  class="form-control form-control-sm"/>
                            <!-- <small class="text-danger" v-if="errors.range.from_date">{{ errors.range.from_date[0] }}</small> -->
                          </div>
                        </div>
                        <!-- <svg
                          class="w-4 h-4 mx-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg> -->
                        <div class="col-6">
                          <div class="form-group">
                            <label>To Date</label>
                            <input :value="inputValue.end" readonly class="form-control form-control-sm "/>
                            <!-- <small class="text-danger" v-if="errors.range.to_date">{{ errors.range.to_date[0] }}</small> -->
                          </div>
                        </div>
                      </div>
                    </template>
                  </v-date-picker>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>From Location</label>
                    <input type="text" v-model="form.from_location" readonly class="form-control form-control-sm" :class="{ 'is-invalid': errors.from_location }" placeholder="Enter from location">
                    <small class="text-danger" v-if="errors.from_location">{{ errors.from_location[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>To Location</label>
                    <input type="text" v-model="form.to_location" readonly class="form-control form-control-sm" :class="{ 'is-invalid': errors.to_location }" placeholder="Enter to location">
                    <small class="text-danger" v-if="errors.to_location">{{ errors.to_location[0] }}</small>
                  </div>
                </div>
              </div>  
              <div class="row p-2">
                <label>Note</label>
                <textarea v-model="form.note" readonly rows="2" cols="12" class="form-control form-control-sm" :class="{ 'is-invalid': errors.note }" placeholder="Enter note"></textarea>
                <small class="text-danger" v-if="errors.note">{{ errors.note[0] }}</small>
              </div>
              <div class="row p-2">
                <label>Reviewer Comment</label>
                <textarea v-model="form.admin_comment" rows="2" cols="12" class="form-control form-control-sm" :class="{ 'is-invalid': errors.note }" placeholder="Enter comment"></textarea>
                <small class="text-danger" v-if="errors.admin_comment">{{ errors.admin_comment[0] }}</small>
              </div>
              <div class="row p-2">
                <div class="col-2">
                  <div class="form-group">
                    Accept <input type="radio" value="1" class="form-control form-control-sm">
                  </div>
                </div>
                <div class="col-2"><input type="radio" value="2" class="form-control form-control-sm"> Back to change</div>
                <div class="col-2"><input type="radio" value="3" class="form-control form-control-sm"> Cancel</div>
              </div>
              <div class="row p-2 justify-content-md-center">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <router-link to="/visit-schedules">
                    <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
  import axios from '../../axios';
  
  export default {
    data() {
      return {
        form: new Form({
          'status': '',
          'admin_comment': ''
        }),
        errors: []
      }
    },
    mounted() {
      if (this.$route.params.id) {
        this.getVisitScheduleInfo(this.$route.params.id);
      }
    },
    methods: {
      store() {
        this.errors = [];
        const loader = this.$loading.show({
          container: this.$refs.categoryContainer,
          canCancel: true,
          loader: 'bars'
        })

        axios.post('/visit-schedules', this.form)
          .then(response => {
            if (response.status == 200) {           
              this.$snotify.success('Successfully created', 'Success');
              this.$router.push({name: 'VisitSchedules'});
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch(errors => {
            this.errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
          })
      },
      getVisitScheduleInfo(id) {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('visit-schedules/'+id)
          .then((res) => {
            let range = {
              start: res.data.from_date,
              end: res.data.to_date
            }
            let data = {};
            data.id = res.data.id;
            data.range = range;
            data.from_location = res.data.from_location;
            data.to_location = res.data.to_location;
            data.to_location = res.data.to_location;
            data.note = res.data.note;
            this.form = data;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loader.hide();
          });
      },
    }
  };
</script>