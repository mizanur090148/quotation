<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Model List</h4>
            <hr>
            <div class="row p-2">
              <div class="col-md-3 add-new-btn">               
                <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw" @click="modelModal">Add New <i class="fas fa-plus"></i></button>
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
                    <th>Model Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody v-if="models.length">
                  <tr v-for="(model, index) in models" :key="model.id">
                    <td>{{ ++index }}</td>
                    <td>{{ model.name }}</td>                 
                    <td>
                      <button type="button" class="btn btn-sm btn-success btn-rounded btn-fw" @click="getModelInfo(model.id)">
                        <i class="mdi mdi-grease-pencil"></i>
                      </button>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteModel(model.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr v-if="pagination.current_page == pagination.last_page" class="not-found">
                    <td colspan="3" class="text-danger">Not Found</td>
                  </tr>
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getModels()"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal name="modelModal" :width="550" :height="325">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Model</h5>
            <button type="button" class="close" @click="closeModal('modelModal')">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <form @submit.prevent="modelStore()">
            <div class="modal-body">
              <div class="row p-2">
                <div class="col-12">
                  <div class="form-group">
                    <label> Name</label>
                    <input type="text" v-model="model_form.name" class="form-control form-control-sm" :class="{ 'is-invalid': model_errors.name }" placeholder="Enter model name">
                    <small class="text-danger" v-if="model_errors.name">{{ model_errors.name[0] }}</small>
                  </div>
                </div>              
              </div>
            </div>
            <div class="modal-footer justify-content-md-center">
              <div class="row p-2 ">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <button class="btn btn-sm btn-danger mr-2" @click="closeModal('modelModal')">Close</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </modal>

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
        models: [],
        pagination: {
          current_page: 1
        },
        model_errors: [],
        model_form: new Form({
          name: ''
        }),
        search_key: ''
      }
    },
    mounted() {
      this.getModels()
    },
    watch: {
      search_key: function() {      
        this.searchModels();
      },      
    },
    methods: {
      searchModels() {
        axios.get('search-models?search_key=' + this.search_key)
          .then(res => {
            this.models = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      }, 
      closeModal(modalName) {
        this.$modal.hide(modalName);
      },
      modelModal()
      {
        this.model_form.reset();
        this.model_form.clear();
        this.$modal.show('modelModal');
      },
      getModelInfo(modelId) {
        axios.get('models/' + modelId)
          .then((res) => {
            this.model_form = res.data;
            this.$modal.show('modelModal');
          })
          .catch((error) => {
            console.log(error);
          })
      },
      modelStore() {
        this.model_errors = [];
        const loader = this.$loading.show({
           container: this.$refs.modelContainer,
           canCancel: true,
           loader: 'bars'
        })

        axios.post('/models', this.model_form)
          .then(response => {
            if (response.status == 200) {
              this.$snotify.success('Successfully created', 'Success');
              this.getModels();
              this.$modal.hide('modelModal');
              this.loader.hide();
            } else {
              this.$snotify.error('Something went worng', 'error');
            }
          })
          .catch( errors => {
            this.model_errors = errors.response.data.errors;
          })
          .finally(e => {
            loader.hide();
          })
      },
      getModels() {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('models?page='+this.pagination.current_page)
          .then((res) => {
            this.models = res.data.data;
            this.pagination = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loader.hide();
          });
      },
      deleteModel(modelId) {
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
                    axios.delete('/models/'+modelId)
                      .then(response => {
                        this.getModels();
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