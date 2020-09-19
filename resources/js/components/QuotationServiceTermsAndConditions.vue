<template>
  <div class="content-wrapper">
    <div class="row justify-content-md-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Services, Terms And Conditions Entry</h4>
              <div class="row p-3">
                <div class="col-6">
                  <label><button class="btn btn-sm btn-primary quotation-headline text-center">Category Wise Services</button></label>
                  <div class="row p-3" v-for="(category, index) in service_categories" :key="index">
                    <label><h5>{{ category.name }}</h5></label>
                    <div class="row p-3" v-for="(service, index1) in category.services" :key="index1">
                      <div class="form-group  col-xs-12" >
                        <input type="checkbox" class="form-check-input"> <label>{{ category.name }}</label> :                  
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <label><button class="btn btn-sm btn-primary quotation-headline text-center">Terms And Conditions</button></label>
                  <div class="row p-3" v-for="(term, index) in terms_and_conditions" :key="index">                    
                    <div class="form-group  col-xs-12" >
                      <input type="checkbox" class="form-check-input"> <label>{{ term.name }}</label> :                  
                    </div>
                  </div>
                </div>
              </div>
              <div class="row p-2 justify-content-md-center">
                <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-primary mr-2">Submit</button>
                  <button class="btn btn-sm btn-danger mr-2">Cancel</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>

    <vue-snotify></vue-snotify>
  </div>
</template>

<style>  
  .modal-dialog {
    max-width: 650px !important;     
  }
</style>
<script>

  import axios from '../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';

  export default {
    data: function () {
      return {          
        service_categories: [],
        terms_and_conditions: []
      }
    },
    mounted() {
      this.getServiceCategories();
      this.getTermsAndConditions();
    },
    
    methods: {
      getServiceCategories() {
        const loader = this.$loading.show({
            container: this.$refs.attendanceTable,
            canCancel: true,
            loader: 'bars'
        })
        axios.get('services-dropdown-data')
            .then((res) => {
              this.service_categories = res.data;             
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              loader.hide();
            });
       },
       getTermsAndConditions() {
        const loader = this.$loading.show({
            container: this.$refs.attendanceTable,
            canCancel: true,
            loader: 'bars'
        })
        axios.get('terms-and-conditions-dropdown-data')
            .then((res) => {
              this.terms_and_conditions = res.data;             
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