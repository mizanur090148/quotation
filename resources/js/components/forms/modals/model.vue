<template>
    <modal name="modelModal" :width="550" :height="325">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Model</h5>
            <button type="button" class="close" @click="closeModal('modelModal123')">
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
</template>

<script>
    import axios from '../../../axios';
    import "vue-loading-overlay/dist/vue-loading.css";
    import Loading from 'vue-loading-overlay';

    export default {
        props:['model_form', 'model_errors'],
        methods: {
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
                this.modelDropdowndata();
                this.$snotify.success('Successfully created', 'Success');
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
        }
      },
    }
</script>