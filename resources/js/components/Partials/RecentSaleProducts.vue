<template>
  <div class="col-md-6 stretch-card">
    <div class="card">
      <div class="card-body">
        <p class="card-title">Recent 5 Sale Products</p>
        <div class="table-responsive">
          <table id="recent-purchases-listing" class="list-table table-bordered">
            <thead>
              <tr>
                <td>SL.</td>
                <td>Name</td>
                <td>Sell Price</td>
              </tr>
            </thead>
            <tbody v-if="recent_sale_products.length">
              <tr v-for="(product, index) in recent_sale_products" :key="index">  
                <td>{{ ++index }}</td>
                <td>{{ product.product.name }}</td>
                <td>{{ product.product.sale_price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '../../axios';
  
  export default {
    data() {
      return {
        recent_sale_products: []
      }
    },
    mounted() {
      this.getRecentSaleProducts()
    },    
    methods: {      
      getRecentSaleProducts() {
        axios.get('get-recent-sale-products')
          .then((res) => {
            this.recent_sale_products = res.data;           
          })
          .catch((error) => {
          })
      }
    }
  }
</script>