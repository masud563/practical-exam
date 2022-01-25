<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
