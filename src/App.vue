<template>
<Navbar class="fixed w-full z-50 -mt-8"></Navbar>
<header-center class="absolute mt-8"></header-center>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
    <HeroSection class="relative w-full" v-motion :initial="{ opacity: 0,y: 100,}" :enter="{ opacity: 1, y: 0,}"></HeroSection>
    <AboutSection class="relative w-full"></AboutSection>
  </div>
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
  background-color: #fafafa;
}

</style>


