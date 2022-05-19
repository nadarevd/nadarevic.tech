<template>
  <Navbar></Navbar>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script>
  import Navbar from './components/Navbar.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      Navbar
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #191D32;
}
</style>


