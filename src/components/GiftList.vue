<template>
    <div>
      <h2>Available Gifts</h2>
      <div v-for="gift in gifts" :key="gift.id" class="gift-item">
        <h3>{{ gift.name }}</h3>
        <p>{{ gift.description }}</p>
        <p>Price: ${{ gift.price }}</p>
        <button @click="selectGift(gift)">Order this gift</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gifts: [
          { id: 1, name: "Flowers", description: "Beautiful flowers", price: 25 },
          { id: 2, name: "Chocolates", description: "Delicious chocolates", price: 15 },
          { id: 3, name: "Teddy Bear", description: "Soft and cuddly", price: 30 },
        ],
      };
    },
    methods: {
      selectGift(gift) {
        this.$emit('select-gift', gift);
      }
    }
  };
  </script>
  
  <style scoped>
  .gift-item {
    border: 1px solid #ddd;
    padding: 1em;
    margin: 1em 0;
  }
  </style>
  