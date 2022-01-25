<template>
  <h1>FirstAssignment</h1>
  <h4>Click on the bulb to toggle its state</h4>
  <div class="container" @click="switchBulb" >
    <img src="../assets/bulboff.svg" alt="" v-if="show">
    <img src="../assets/bulbon.svg" alt="" v-else>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: true
    }
  },
  methods: {
    switchBulb(){
      this.show = !this.show
    }
  }
}
</script>

<style>
  .container {
    width: 400px;
    margin: 100px auto;
  }
  h1 {
    color: white;
    margin: 50px 0 20px 20px;
  }
</style>