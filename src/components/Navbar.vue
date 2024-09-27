<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/gifts">Gifts</router-link></li>
        <li><router-link to="/order">Order</router-link></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  nav {
    background-color: #ffcc00;
    padding: 1em;
  }
  ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }
  li {
    display: inline;
  }
  </style>
  