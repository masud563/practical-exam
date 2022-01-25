<template>
  <div class="home">
    <router-link :to="{name: 'FirstAssignment'}">
      <div class="ass">
        <h1>First Assignment</h1>
        <p>Task:Turning a light bulb on or off.</p>
      </div>
    </router-link>

    <router-link :to="{name: 'SecondAssignment'}">
      <div class="ass">
        <h1>Second Assignment</h1>
        <p>Task: Fetching data from an external api.</p>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style >

  .home {
    margin: 50px auto;
  }
  .home .ass {
    width: 500px;
    margin: 50px;
    border: 3px solid white;
    border-radius: 10px;
    display: inline-block;
  }
  .home  a{
    text-decoration: none;
  }
  .home p{
    color: #ffbf00;
    margin: 0  0 20px 20px;
  }
</style>