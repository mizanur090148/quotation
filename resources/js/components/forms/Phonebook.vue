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
                  <div class="form-group">
                    <label>Phone No.</label>
                    <input type="text" v-model="form.phone_no" class="form-control form-control-sm" :class="{ 'is-invalid': errors.phone_no }" placeholder="Enter phone no, multiple number add with coma">
                    <small class="text-danger" v-if="errors.phone_no">{{ errors.phone_no[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="form.name" class="form-control form-control-sm" :class="{ 'is-invalid': errors.name }" placeholder="Enter name">
                    <small class="text-danger" v-if="errors.name">{{ errors.name[0] }}</small>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <label>E-mail</label>
                    <input type="text" v-model="form.email" class="form-control form-control-sm" :class="{ 'is-invalid': errors.email }" placeholder="Enter email">
                    <small class="text-danger" v-if="errors.email">{{ errors.email[0] }}</small>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-4">
                  <div class="form-group">
                    <label>Designation</label>
                    <input type="text" v-model="form.designation" class="form-control form-control-sm" :class="{ 'is-invalid': errors.designation }" placeholder="Enter designation">
                    <small class="text-danger" v-if="errors.designation">{{ errors.designation[0] }}</small>
                  </div>
                </div>
                <div class="col-8">
                  <div class="form-group">
                    <label>Address</label>
                    <textarea v-model="form.address" rows="2" cols="12" class="form-control form-control-sm" :class="{ 'is-invalid': errors.address }" placeholder="Enter address"></textarea>
                    <small class="text-danger" v-if="errors.address">{{ errors.address[0] }}</small>
                  </div>
                </div>
              </div>
              <hr/>
              <div class="row p-2 justify-content-md-center">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <router-link to="/phonebooks">
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
  import Api from '../../apis/Api';
  
  export default {
    data() {
      return {
        form: new Form({
          'id' : this.$route.params.id,
          'phone_no': '',
          'name': '',
          'email': '',
          'designation': '',
          'address': ''
        }),
        errors: []
      }
    },
    mounted() {
      if (this.$route.params.id) {
        this.getPhoneBookInfo(this.$route.params.id);
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

        Api.post('/phonebooks', this.form)
          .then(response => {
            if (response.status == 200) {           
              this.$snotify.success('Successfully created', 'Success');
              this.$router.push({name: 'Phonebooks'});
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
      getPhoneBookInfo(id) {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        Api.get('phonebooks/'+id)
          .then((res) => {
            this.form = res.data;
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

<style>
  .radio-label {
    padding-top: 8px !important;
    padding-left: 0px !important;
  }
  .radio-field {
    padding-right: 0px !important;
  }
</style>