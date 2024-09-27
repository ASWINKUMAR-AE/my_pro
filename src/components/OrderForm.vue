<template>
    <div>
      <h2>Place your order</h2>
      <form @submit.prevent="submitOrder">
        <div>
          <label for="name">Your Name:</label>
          <input type="text" v-model="name" required />
        </div>
        <div>
          <label for="address">Delivery Address:</label>
          <input type="text" v-model="address" required />
        </div>
        <div v-if="selectedGift">
          <p>You have selected: {{ selectedGift.name }} - ${{ selectedGift.price }}</p>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['selectedGift'],
    data() {
      return {
        name: '',
        address: '',
      };
    },
    methods: {
      submitOrder() {
        if (this.selectedGift) {
          alert(`Order placed for ${this.name}, delivering ${this.selectedGift.name} to ${this.address}.`);
        } else {
          alert('Please select a gift to order.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    margin-top: 2em;
  }
  input {
    margin: 0.5em 0;
    padding: 0.5em;
  }
  </style>
  