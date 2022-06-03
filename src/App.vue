<template>
  <Navbar class="fixed w-full z-50 -mt-11"></Navbar>
  <header-center class="absolute mt-11"></header-center>
  <div><HeroSection></HeroSection></div>
  <div class="bg-[#ebebec]"><AboutSection class="relative w-full" v-motion-slide-bottom></AboutSection></div>
  <div class="bg-[#F5F5F5]"><Projects v-motion :initial="{opacity: 0,y: 100,}" :visible="{opacity: 1,y: 0, transition: { duration: 700 } }" ></Projects></div>
  <div class="bg-[#F5F5F5]"><Hobbies v-motion :initial="{opacity: 0,y: 100,}" :visible="{opacity: 1,y: 0, transition: { duration: 700 } }" ></Hobbies></div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import HeroSection from './components/HeroSection.vue'
import HeaderCenter from './components/HeaderCenter.vue'
import AboutSection from './components/AboutSection.vue'
import Projects from './components/Projects.vue'
import Hobbies from './components/Hobbies.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
    Navbar,
    HeroSection,
    HeaderCenter,
    AboutSection,
    Projects,
    Hobbies
}
  }
</script>


<style>

img {
  pointer-events: none;
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