<template>
  <div class="col-md-6 stretch-card">
    <div class="card">
      <div class="card-body">
        <p class="card-title">Best Purchase of current month</p>
        <div class="table-responsive">
          <table id="recent-purchases-listing" class="list-table table-bordered">
            <thead>
              <tr>
                <td>SL.</td>
                <td>Name</td>
                <td>Number Of Sales</td>
              </tr>
            </thead>
            <tbody v-if="best_purchase_products.length">
              <tr v-for="(product, index) in best_purchase_products" :key="index">  
                <td>{{ ++index }}</td>
                <td>{{ product.product_name }}</td>
                <td>{{ product.purchase_count }}</td>
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
        best_purchase_products: []
      }
    },
    mounted() {
      this.getBestPurchaseProducts()
    },    
    methods: {      
      getBestPurchaseProducts() {
        axios.get('get-best-purchase-products')
          .then((res) => {
            this.best_purchase_products = res.data;
          })
          .catch((error) => {
          })
      }
    }
  }
</script>