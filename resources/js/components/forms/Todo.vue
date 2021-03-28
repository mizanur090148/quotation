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
                <div class="col-6">
                  <div class="form-group">
                    <label>Todo Title</label>
                    <textarea v-model="form.title" rows="2" cols="12" class="form-control form-control-sm" :class="{ 'is-invalid': errors.title }" placeholder="Enter todo title"></textarea>
                    <small class="text-danger" v-if="errors.title">{{ errors.title[0] }}</small>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label>Description</label>
                    <textarea v-model="form.description" rows="2" cols="12" class="form-control form-control-sm" :class="{ 'is-invalid': errors.description }" placeholder="Enter description"></textarea>
                    <small class="text-danger" v-if="errors.description">{{ errors.description[0] }}</small>
                  </div>
                </div>
              </div>
              <hr/>
              <div class="row p-2 justify-content-md-center">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <router-link to="/todos">
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
          'title': '',
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

        Api.post('/todos', this.form)
          .then(response => {
            if (response.status == 200) {           
              this.$snotify.success('Successfully created', 'Success');
              this.$router.push({name: 'Todos'});
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
        Api.get('todos/'+id)
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