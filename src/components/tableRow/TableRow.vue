<template>
      <td>{{user.id}}</td>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td>{{user.gender}}</td>
    <td>{{user.status}}</td>
</template>

<script>
export default {
  props: ['user'],
}
</script>

<style>
  td {
    color: #fff;
    padding: 30px 10px ;
    transition: all ease 0.4s;
    font-weight: 100;
  }
</style>