<template>
  <div class="col-md-6 stretch-card">
    <div class="card">
      <div class="card-body">
        <p class="card-title">Best sale of current month</p>
        <div class="table-responsive">
          <table id="recent-purchases-listing" class="list-table table-bordered">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Number Of Sales</th>
              </tr>
            </thead>
            <tbody v-if="best_sales.length">
              <tr v-for="(product, index) in best_sales" :key="index">  
                <td>{{ ++index }}</td>
                <td>{{ product.product_name }}</td>
                <td>{{ product.sales_count }}</td>
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
        best_sales: []
      }
    },
    mounted() {
      this.getBestSaleProduct()
    },    
    methods: {      
      getBestSaleProduct(stockInId) {
        axios.get('get-best-sales-product')
          .then((res) => {
            this.best_sales = res.data;
            console.log(this.best_sales);
          })
          .catch((error) => {
          })
      }
    }
  }
</script>