<template>
  <div class="nav">
    <div class="brand-logo">
      <a href="/">
        <img src="../../assets/brand-logo.svg" alt="">
      </a>
    </div>
    <div class="links">
      <ul>
        <li><router-link :to="{name:'Home'} ">Home</router-link></li>
        <li><router-link :to="{name:'FirstAssignment'} ">First Assignment</router-link></li>
        <li><router-link :to="{name:'SecondAssignment'} ">Second Assignment</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style>
  .nav {
    display: flex;
    align-content:center;
    justify-content: space-between;
  }
  .nav .links ul {
    list-style-type: none;
    margin: 50px 10px;
    padding: 0;
  }
  .nav .links ul li{
    display: inline;
    padding: 10px;
  }
  .nav .links ul li a:hover {
    color: #ffbf00;
  }
  .nav .links ul li a{
    text-decoration: none;
    color: white;
  }
  .brand-logo img{
    width: 250px;
    padding: 50px;
  }
</style>

