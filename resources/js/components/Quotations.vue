<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Quotation List</h4>
            <div class="row p-2">
              <div class="col-md-3">
                <router-link to="/quotations/create">
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
                    <th>SL</th>
                    <th>QID</th>
                    <th>To</th>
                    <th width="33%">Subject</th>
                    <th>Q. Date</th>
                    <th>Discount</th>
                    <th>Amount</th>
                    <th title="Services, Terms & Conditions">Services, T & C</th>                   
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-if="quotations.length > 0" v-for="(quotation, index) in quotations" :key="quotation.id">
                      <td>{{ ++index }}</td>
                      <td>{{ quotation.id }}</td>
                      <td>{{ quotation.vendor.vendor_name }}</td>
                      <td :title="quotation.subject">{{ quotation.subject | subStr }}</td>
                      <td>{{ quotation.quotation_date }}</td>                               
                      <td>{{ quotation.total_discount }}</td>
                      <td>{{ quotation.total_without_discount }}</td>
                      <td>
                        <router-link
                            :to="'/quotation-service-terms-and-conditions/'+ quotation.id"
                            class="btn btn-sm btn-primary btn-rounded btn-fw"
                            title="View details">
                            <i class="mdi mdi-grease-pencil"/>
                        </router-link>                        
                      </td>                      
                      <td>                          
                        <router-link
                            :to="'/quotations/'+ quotation.id"
                            class="btn btn-sm btn-primary btn-rounded btn-fw"
                            title="View details">
                            <i class="mdi mdi-eye"/>
                        </router-link>
                        <button type="button" class="btn btn-sm btn-success btn-rounded btn-fw" @click="">
                          <i class="mdi mdi-grease-pencil"></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteQuotation(quotation.id)">
                          <i class="mdi mdi-delete"></i>
                        </button>
                      </td>
                  </tr>
                  <tr v-else>
                    <td>Not Found</td>
                  </tr> 
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getQuotations()"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
  import axios from '../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
  
  export default {
    data() {
       return {
          listResponse: null,
          quotations: [],
          pagination: {
             current_page: 1,
          }
       }
    },     
    mounted() {
      this.getQuotations()
    },
    methods: {
       deleteQuotation(id) { 
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
                    axios.delete('/quotations/'+id)
                      .then(response => {
                          this.getQuotations();
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
       getQuotations() {      
          const loader = this.$loading.show({
             container: this.$refs.attendanceTable,
             canCancel: true,
             loader: 'bars'
          })
          axios.get('quotations?page='+this.pagination.current_page)
              .then((res) => {               
                this.quotations = res.data.data;
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