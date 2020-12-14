<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Product List</h4>
            <hr>
            <div class="row p-2">
              <div class="col-md-3 pl-1">
                <router-link to="/product/create">
                  <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw">Add New <i class="fas fa-plus"></i></button>
                </router-link>
              </div>
              <div class="col-md-6"></div>
              <div class="col-md-3 pr-1">
                <input type="text" class="form-control search-field" v-model="search_key" placeholder="Search"/>
              </div>
            </div>
            <div class="table-responsive">
              <table class="list-table table-hover">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Product Name</th>
                    <th>Code</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Model</th>                    
                    <th>Purchase Price</th>
                    <td>Tax(%)</td>
                    <th>Sale Price</th>                   
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody v-if="products.length > 0">
                  <tr v-for="(product, index) in products" :key="product.id">
                      <td>{{ ++index }}</td>
                      <td>{{ product.name }}</td>
                      <td>{{ product.code }}</td>
                      <td>{{ product.category.name }}</td>
                      <td>{{ product.brand.name }}</td>
                      <td>{{ product.model.name }}</td>
                      <td>{{ product.purchase_price }}</td>
                      <td>{{ product.tax_percentage }}</td>
                      <td>{{ product.sale_price }}</td>
                      <td>                          
                        <!-- <router-link
                            :to="'/products/'+ product.id"
                            class="btn btn-sm btn-primary btn-rounded btn-fw"
                            title="View details">
                            <i class="mdi mdi-eye"/>
                        </router-link> -->                        
                        <button class="btn btn-sm btn-primary btn-rounded btn-fw" title="View details" @click="getProductInfo(product.id)">
                          <i class="mdi mdi-eye"></i>
                        </button> 
                        <router-link
                            :to="'/product/'+ product.id"
                            class="btn btn-sm btn-success btn-rounded btn-fw"
                            title="edit">
                            <i class="mdi mdi-grease-pencil"/>
                        </router-link>                    
                        <button type="button" class="btn btn-sm btn-danger btn-rounded btn-fw" @click="deleteProduct(product.id)">
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
              <v-pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="8" @paginate="getProducts()"></v-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product detail modal -->   
    <modal name="productDetailModal" :width="700" :height="535">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Product Details</h5>
            <button type="button" class="close" @click="closeModal()">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>          
            <div class="modal-body" v-if="product">
              <table class="list-table product-detail">
                <tr class="p-2">
                  <td colspan="2" class="p-2">
                    <img :src="product.image" style="height: 220px; width: 600px;">
                  </td>               
                </tr>
                <tr>
                  <td style="width: 50%"><span>Product Name:</span> {{ product.name }}</td>
                  <td><span>Product Code:</span> {{ product.code }}</td>
                </tr>
                <tr>
                  <td><span>Category:</span> {{ product.category.name }}</td>
                  <td><span>Brand:</span> {{ product.brand.name }}</td>
                </tr>
                <tr>
                  <td><span>Model:</span> {{ product.model.name }}</td>
                  <td><span>Product Unit:</span> {{ product.product_unit }}</td>
                </tr>
                <tr>
                  <td><span>Purchase Price:</span> {{ product.purchase_price }}</td>
                  <td><span>Sale Price:</span> {{ product.sale_price }}</td>
                </tr>
                <tr>
                  <td><span>Warning Quantity:</span> {{ product.warning_quantity }}</td>
                  <td><span>Tax Percentage:</span> {{ product.tax_percentage }}</td>
                </tr>
                <tr>
                  <td colspan="2"><span>Product Details:</span> {{ product.product_detail }} </td>                 
                </tr>
              </table>
              <!--
              <div class="row">
                <div class="col-md-12 text-center">
                  <img :src="product.image" style="height: 180px; width: 350px;">
                </div>
              </div>
              <div class="row p-2">
                <div class="col-md-6"><span>Product Name:</span> {{ product.name }}</div>
                <div class="col-md-6"><span>Product Code:</span> {{ product.code }}</div>
              </div>
              <div class="row p-2">
                <div class="col-md-6"><span>Category:</span> {{ product.category.name }}</div>
                <div class="col-md-6"><span>Brand:</span> {{ product.brand.name }}</div>
              </div>
              <div class="row p-2">
                <div class="col-md-6"><span>Model:</span> {{ product.model.name }}</div>
                <div class="col-md-6"><span>Product Unit:</span> {{ product.product_unit }}</div>
              </div>
              <div class="row p-2">
                <div class="col-md-6"><span>Purchase Price:</span> {{ product.purchase_price }}</div>
                <div class="col-md-6"><span>Sale Price:</span> {{ product.sale_price }}</div>
              </div>
              <div class="row p-2">
                <div class="col-md-6"><span>Warning Quantity:</span> {{ product.warning_quantity }}</div>
                <div class="col-md-6"><span>Tax Percentage:</span> {{ product.tax_percentage }}</div>
              </div>
              <div class="row p-2">
                <div class="col-md-6"><span>Product Details:</span> {{ product.product_detail }}</div>
              </div> -->
          </div>
        </div>
      </div>
    </modal>
    <vue-snotify></vue-snotify>
  </div>
</template>

<style>
  .modal-dialog {
    max-width: 650px !important;
    width: 650px !important;
  }
  tr span {
    font-weight: bold;
    padding-left: 10px !important;
  }
  .product-detail td {
    text-align: left !important;
  }
</style>

<script>
  import axios from '../../axios';
  import "vue-loading-overlay/dist/vue-loading.css";
  import Loading from 'vue-loading-overlay';
  
  export default {
    data() {
       return {      
          product: null,
          products: [],
          pagination: {
            current_page: 1,
          },
          search_key: ''
       }
    },     
    mounted() {
      this.getProducts()
    },
    watch: {
      search_key: function() {
        this.searchProducts();
      },
    },
    methods: { 
      searchProducts() {
        axios.get('search-products?search_key=' + this.search_key)
          .then(res => {
            this.products = res.data.data;
            this.pagination = res.data;
          })
          .catch(e => {
            console.log(e);
          })
      },      
      getProductInfo(productId) {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('products/' + productId)
          .then((res) => {
            this.product = res.data;
            this.$modal.show('productDetailModal');
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            loader.hide();
          });
      },
      closeModal() {
        this.$modal.hide('productDetailModal');
      },
      deleteProduct(id) { 
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
                  axios.delete('/products/'+id)
                    .then(response => {
                        this.getProducts();
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
      getProducts() {      
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('products?page='+this.pagination.current_page)
          .then((res) => {               
            this.products = res.data.data;
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