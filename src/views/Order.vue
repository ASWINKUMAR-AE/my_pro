<template>
    <div>
      <OrderForm :selectedGift="selectedGift"/>
    </div>
  </template>
  
  <script>
  import OrderForm from '@/components/OrderForm.vue';
  
  export default {
    components: {
      OrderForm
    },
    computed: {
      selectedGift() {
        return this.$route.query.gift ? JSON.parse(this.$route.query.gift) : null;
      }
    }
  }
  </script>
  