<template>
  <Navbar class="fixed w-full z-50 -mt-11"></Navbar>
  <header-center class="absolute mt-11"></header-center>
  <div><HeroSection class="" v-motion :initial="{ opacity: 0,y: 100,}" :enter="{ opacity: 1, y: 0,}"></HeroSection></div>
  <div class="bg-[#ebebec]"><AboutSection class="relative w-full"></AboutSection></div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import HeroSection from './components/HeroSection.vue'
import HeaderCenter from './components/HeaderCenter.vue'
import AboutSection from './components/AboutSection.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
    Navbar,
    HeroSection,
    HeaderCenter,
    AboutSection
}
  }
</script>


<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
}

</style>


