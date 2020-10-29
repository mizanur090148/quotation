<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Sales List</h4>
            <hr>
            <div class="row p-2">
              <div class="col-md-3 add-new-btn">
                <router-link to="/sales/create">
                  <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw">Add New <i class="fas fa-plus"></i></button>
                </router-link>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-3">
                <input type="text" class="form-control search-field" v-model="search_key" placeholder="Search by invoice no"/>
              </div>
            </div>
            <div class="table-responsive">
              <table class="list-table table-hover">
                <thead>
                  <tr>
                    <td>SL.</td>
                    <td>Invoice No.</td>
                    <td>Customer</td>
                    <td>Payment Status</td>                   
                    <td>Product Price</td>
                    <td>Delivery Cost</td>
                    <td>Others Cost</td>
                    <td>Total Cost</td>
                    <td>Sale Date</td>
                    <td>Sale By By</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody v-if="sales.length">
                  <tr v-for="(sale, index) in sales" :key="sale.id">
                    <td>{{ ++index }}</td>
                    <td>{{ sale.invoice_number }}</td>
                    <td>{{ sale.customer.name }}</td>
                    <td>{{ (sale.payment_status == 0) ? 'Due' : 'Sale' }}</td>
                    <td>{{ sale.total_product_cost }}</td>
                    <td>{{ sale.delivery_cost }}</td>
                    <td>{{ sale.others_cost }}</td>
                    <td>{{ sale.total_cost }}</td>
                    <td>{{ sale.sale_date }}</td>
                    <td>{{ sale.created_by.full_name }}</td>
                    <td>
                      <router-link
                        :to="'/sales/'+ sale.id"
                        class="btn btn-sm btn-success btn-rounded btn-fw"
                        title="edit">
                        <i class="mdi mdi-grease-pencil"/>
                      </router-link>
                      <router-link
                        :to="'/sale-invoice/'+ sale.id"
                        class="btn btn-sm btn-primary btn-rounded btn-fw"
                        title="View details">
                        <i class="mdi mdi-eye"/>
                      </router-link>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteSale(sale.id)">
                        <i class="mdi mdi-delete"></i>
                      </button>
                    </td>
                  </tr>                  
                </tbody>
                <tbody v-else>
                  <tr v-if="pagination.current_page == pagination.last_page" class="not-found">
                    <td colspan="11" class="text-danger">Not Found</td>
                  </tr>
                </tbody>
              </table>
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getSales()"></v-pagination>
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
  import Loading from 'vue-loading-overlay';
  
  export default {
    data() {
      return {      
        sales: [],
        pagination: {
          current_page: 1,
        },
        search_key: ''
      }
    },     
    mounted() {
      this.getSales()
    },
    watch: {
      search_key: function() {
        this.searchStockIns();
      }
    },
    methods: {
      searchStockIns() {
        axios.get('sales?search_key=' + this.search_key)
          .then(res => {
            this.sales = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      },
      searchStockIns() {
        axios.get('search-sales?search_key=' + this.search_key)
          .then(res => {
            this.sales = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      }, 
      deleteSale(stockInId) {
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
                  axios.delete('/sales/' + stockInId)
                    .then(response => {
                      this.getSales();
                      this.$snotify.success('Successfully deleted', 'Success');
                    })
                    .catch(e => {
                      this.$snotify.error('Not deleted', 'Success');
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
      getSales() {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('sales?page='+this.pagination.current_page)
          .then((res) => {
            this.sales = res.data.data;
            this.pagination = res.data;
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