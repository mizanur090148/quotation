<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Quotation Details</h4>
            <div class="row p-3">
                <div class="col-4">
                    <span>To</span><br/>
                    <span>{{ vendor.vendor_name  }}</span><br/>
                    <span>{{ vendor.attention_designation }}</span><br/>
                    <span>{{ vendor.address }}</span><br/><br/>
                </div>
                <div class="col-4"></div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="last-name" class="form-control-label font-weight-bold">Quotation Date</label>
                        {{ quotation.quotation_date }}
                    </div>
                </div>
            </div>
            <div class="row p-3">
                <div class="col-12">
                    <div class="form-group">
                        <label for="subject" class="form-control-label font-weight-bold">Subject: </label>
                        This is subject
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary quotation-headline"> Services Description As Following Detail</button>
            <br/>  <br/>  
            <div class="table-responsive">
              <!-- <div class="row p-3"> -->
                  <table class="list-table">
                      <thead>
                          <tr>
                              <th>No</th>
                              <th> &nbsp;&nbsp; Job Description</th>
                              <th width="10%">Quantity</th>
                              <th width="15%">Service Price Per Year</th>                                    
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(item, index) in quotation_items" :key="index">
                              <td class="text-center">
                                  {{ ++index }}
                              </td>
                              <td>
                                  {{ item.job_description }}
                              </td>
                              <td class="text-center">
                                  {{ item.quantity }}
                              </td>
                              <td class="text-center">
                                  {{ item.service_per_year }}
                              </td>                                       
                          </tr>
                          <tr class="font-weight-bold">
                              <td colspan="3" class="text-right">Total Without Discount</td>
                              <td>
                                  {{ quotation.quotation_total }}
                              </td>
                          </tr>
                          <tr class="font-weight-bold">
                              <td colspan="3" class="text-right">Total Discount</td>
                              <td>{{ quotation.total_discount }}</td>
                          </tr>
                          <tr class="font-weight-bold">
                              <td colspan="3" class="text-right capitalize">
                                In words, {{ require('number-to-words').toWords(quotation.quotation_total - quotation.total_discount) }} only
                              </td>
                              <td>{{ quotation.quotation_total - quotation.total_discount }}</td>
                          </tr>
                      </tbody>
                  </table>
              <!-- </div> -->
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
    components: {
        Loading
    },
    data() {
      return {
        quotation: null,
        quotation_items: null,
        vendor: null
      }
    }, 
    mounted() {
      this.getQuotation();
    },
    methods: {
      getQuotation() {
        axios.get('/quotations/' +this.$route.params.id)
          .then((res) => {            
              this.quotation = res.data;             
              this.quotation_items = this.quotation.quotation_details; 
              this.vendor = res.data.vendor;               
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
  }
</script>