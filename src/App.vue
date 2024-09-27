<template>
  <div>
    <Resume />
  </div>
</template>

<script>
import Resume from './components/Resume.vue';

export default {
  name: 'App',
  components: {
    Resume
  }
}
</script>

<style>
body {
  background-image: url(assets/bg.gif) !important;
  background-position-x:50%; 
  background-position-y:-70% ;
  font-family: 'Arial', sans-serif;
}
</style>
