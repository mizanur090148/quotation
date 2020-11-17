<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Stock In List</h4>
            <hr>
            <div class="row p-2">
              <div class="col-md-3 add-new-btn">
                <router-link to="/stock-in/create">
                  <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw">Add New <i class="fas fa-plus"></i></button>
                </router-link>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-3">
                <input type="text" class="form-control search-field" v-model="search_key" placeholder="Search by challan no"/>
              </div>
            </div>
            <div class="table-responsive">
              <table class="list-table table-hover">
                <thead>
                  <tr>
                    <td>SL.</td>
                    <td title="Stock In Challan">Challan No</td>
                    <td>Status</td>
                    <td>Product Cost</td>
                    <td>Shipping Cost</td>
                    <td>Others Cost</td>
                    <td>Total Cost</td>
                    <td>Created Date</td>
                    <td>Created By</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody v-if="stock_ins.length">
                  <tr v-for="(stock_in, index) in stock_ins" :key="stock_in.id">
                    <td>{{ ++index }}</td>
                    <td>{{ stock_in.purchase_invoice }}</td>
                    <td>{{ (stock_in.stock_in_status == 0) ? 'Pending' : 'Received' }}</td>
                    <td>{{ stock_in.total_product_cost }}</td>
                    <td>{{ stock_in.shipping_cost }}</td>
                    <td>{{ stock_in.others_cost }}</td>
                    <td>{{ stock_in.total_cost }}</td>
                    <td>{{ stock_in.purchase_date }}</td>
                    <td>{{ stock_in.created_by.full_name }}</td>
                    <td>
                      <router-link
                        :to="'/stock-ins/'+ stock_in.id"
                        class="btn btn-sm btn-success btn-rounded btn-fw"
                        title="edit">
                        <i class="mdi mdi-grease-pencil"/>
                      </router-link>
                      <router-link
                        :to="'/stock-in-view/'+ stock_in.id"
                        class="btn btn-sm btn-primary btn-rounded btn-fw"
                        title="View details">
                        <i class="mdi mdi-eye"/>
                      </router-link>
                      <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteStockIn(stock_in.id)">
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
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getStockIns()"></v-pagination>
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
        stock_ins: [],
        pagination: {
          current_page: 1,
        },
        search_key: ''
      }
    },     
    mounted() {
      this.getStockIns()
    },
    watch: {
      search_key: function() {
        this.searchStockIns();
      }
    },
    methods: {
      searchStockIns() {
        axios.get('stock-ins?search_key=' + this.search_key)
          .then(res => {
            this.stock_ins = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      },
      searchStockIns() {
        axios.get('search-stock-ins?search_key=' + this.search_key)
          .then(res => {
            this.stock_ins = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      }, 
      deleteStockIn(stockInId) {
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
                  axios.delete('/stock-ins/' + stockInId)
                    .then(response => {
                      this.getStockIns();
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
      getStockIns() {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('stock-ins?page='+this.pagination.current_page)
          .then((res) => {
            this.stock_ins = res.data.data;
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