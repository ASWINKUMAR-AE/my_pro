<template>
    <div>
      <h1>Welcome to Gift Orders!</h1>
      <p>Order the perfect gift for your loved ones today.</p>
      <div class="gift-box">
        <div class="ribbon"></div>
        <div class="gift"></div>
    </div>
    </div>
  </template>
  <style>

.gift-box {
    position: relative;
    width: 100px;
    height: 100px;
    background-color: #ff6347;
    border-radius: 10px;
    animation: shake 1s infinite;
}

.ribbon {
    position: absolute;
    width: 100%;
    height: 20px;
    background-color: #fff;
    top: 40%;
    left: 0;
}

.gift {
    position: absolute;
    width: 20px;
    height: 100%;
    background-color: #fff;
    left: 40%;
    top: 0;
}

@keyframes shake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(5deg); }
    50% { transform: rotate(-5deg); }
    75% { transform: rotate(5deg); }
}

</style>