<template>
  <Navbar class="fixed w-full z-50 -mt-11"></Navbar>
  <header-center class="absolute mt-11"></header-center>
  <div><HeroSection id="home"></HeroSection></div>
  <div class="bg-[#ebebec]"><AboutSection id="about" class="relative w-full" v-motion-slide-bottom></AboutSection></div>
  <div class="bg-[#ebebec]"><Projects id="projects" v-motion :initial="{opacity: 0,y: 100,}" :visible="{opacity: 1,y: 0, transition: { duration: 700 } }" ></Projects></div>
  <div class="bg-[#ebebec]"><Hobbies id="hobbies" v-motion :initial="{opacity: 0,y: 100,}" :visible="{opacity: 1,y: 0, transition: { duration: 700 } }" ></Hobbies></div>
  <Footer></Footer>
</template>

<script>
  import { defineAsyncComponent } from 'vue';
  import Projects from './components/Projects.vue'
  import Hobbies from './components/Hobbies.vue'
  export default {
    components: {
      Navbar: defineAsyncComponent(() => import('./components/Navbar.vue')),
      HeroSection: defineAsyncComponent(() => import('./components/HeroSection.vue')),
      HeaderCenter: defineAsyncComponent(() => import('./components/HeaderCenter.vue')),
      AboutSection: defineAsyncComponent(() => import('./components/AboutSection.vue')),
      Projects,
      Hobbies,
      Footer: defineAsyncComponent(() => import('./components/Footer.vue'))
    }
  }
</script>
<style>

img {
  pointer-events: none;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
}

</style>