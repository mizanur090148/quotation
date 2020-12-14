<template>
  <div class="content-wrapper">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Available Product List</h4>
            <hr>
            <div class="row p-2">
              <div class="col-md-3 pl-1">
                <!-- <router-link to="/product/create">
                  <button type="button" class="btn btn-primary btn-sm btn-rounded btn-fw">Add New <i class="fas fa-plus"></i></button>
                </router-link> -->
              </div>
              <div class="col-md-3">
                
              </div>
              <div class="col-md-3">
                <select v-model="amount" class="form-control form-control-sm search-field" @change="getAvailableProducts">
                  <option value="">Select a quantity</option>
                  <option value="5">Less Than 5</option>
                  <option value="10">Less Than 10</option>
                  <option value="15">Less Than 15</option>
                  <option value="20">Less Than 20</option>
                  <option value="25">Less Than 25</option>
                  <option value="30">Less Than 30</option>
                  <option value="35">Less Than 35</option>
                  <option value="40">Less Than 40</option>
                  <option value="45">Less Than 45</option>
                  <option value="50">Less Than 50</option>
                  <option value="55">Less Than 55</option>
                  <option value="60">Less Than 60</option>
                  <option value="65">Less Than 65</option>
                  <option value="70">Less Than 70</option>
                  <option value="75">Less Than 75</option>
                  <option value="80">Less Than 80</option>
                  <option value="85">Less Than 85</option>
                  <option value="90">Less Than 90</option>
                  <option value="95">Less Than 95</option>
                  <option value="100">Less Than 100</option>
                </select>
              </div>
              <div class="col-md-3 pr-1">
                <input type="text" class="form-control search-field" v-model="search_key" placeholder="Search by name and code"/>
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
                    <th>Available Qty</th>                  
                  </tr>
                </thead>
                <tbody v-if="Object.keys(products).length">
                  <tr v-for="(product, index) in products" :key="product.id">
                    <td>{{ ++index }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.code }}</td>
                    <td>{{ product.category.name }}</td>
                    <td>{{ product.brand.name }}</td>
                    <td>{{ product.model.name }}</td>                   
                    <td>{{ product.available_qty }}</td>
                  </tr>
                </tbody>
                <tbody v-else>
                  <tr class="not-found">
                    <td colspan="10" class="text-danger">Not Found</td>
                  </tr>
                </tbody>
              </table>             
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
          product: null,
          products: [],          
          search_key: '',
          amount: 5
       }
    },     
    mounted() {
      this.getAvailableProducts()
    },
    watch: {
      search_key: function() {    
        this.getAvailableProducts();  
      }
    },
    methods: {
      getAvailableProducts() {
        const loader = this.$loading.show({
          container: this.$refs.attendanceTable,
          canCancel: true,
          loader: 'bars'
        })
        axios.get('available-products', { params: {search_key:this.search_key, amount: this.amount} })
          .then((res) => {               
            this.products = res.data;         
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