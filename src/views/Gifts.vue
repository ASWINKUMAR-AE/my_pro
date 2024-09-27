<template>
    <div>
      <GiftList @select-gift="selectGift"/>
    </div>
  </template>
  
  <script>
  import GiftList from '@/components/GiftList.vue';
  
  export default {
    components: {
      GiftList
    },
    methods: {
      selectGift(gift) {
        this.$router.push({ path: '/order', query: { gift: JSON.stringify(gift) } });
      }
    }
  }
  </script>
  