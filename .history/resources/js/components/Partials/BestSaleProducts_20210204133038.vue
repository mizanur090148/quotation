<template>
  <div class="text-center section">
    <h2 class="h2">Custom Calendars</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Roll your own calendars using scoped slots
    </p>
    <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>


<script>
  import axios from '../../axios';
  
  export default {
    data() {
      return {
        best_sale_products: []
      }
    },
    mounted() {
      this.getBestSaleProducts()
    },    
    methods: {      
      getBestSaleProducts() {
        axios.get('get-best-sale-products')
          .then((res) => {
            this.best_sale_products = res.data;
          })
          .catch((error) => {
          })
      }
    }
  }
</script>