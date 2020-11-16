<template>
  <div class="col-md-6 stretch-card">
    <div class="card">
      <div class="card-body">
        <p class="card-title">Recent Purchase Products</p>
        <div class="table-responsive">
          <table id="recent-purchases-listing" class="list-table table-bordered">
            <thead>
              <tr>
                <td>SL.</td>
                <td>Name</td>
                <td>Purchase Price</td>
              </tr>
            </thead>
            <tbody v-if="recent_purchase_products.length">
              <tr v-for="(product, index) in recent_purchase_products" :key="index">  
                <td>{{ ++index }}</td>
                <td>{{ product.product.name}}</td>
                <td>{{ product.product.purchase_price }}</td>
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
        recent_purchase_products: []
      }
    },
    mounted() {
      this.getRecentPurchaseProducts()
    },    
    methods: {      
      getRecentPurchaseProducts() {
        axios.get('get-recent-purchase-products')
          .then((res) => {
            this.recent_purchase_products = res.data;         
          })
          .catch((error) => {
          })
      }
    }
  }
</script>