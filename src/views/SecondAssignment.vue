<template>
  <div class="title">
    <h1>Second Assignment</h1>
    <h4>Using javascript</h4>
  </div>
  <div class="table-wrapper" v-if="users.length">
    <table>
      <TableHead />
      <tr class="user-table" v-for="(user, index) in users" :key="index">
        <TableRow :user="user" />
      </tr>
    </table>
   
  </div>
  <div class="loader" v-else>
    loading data
  </div>
  <h4>Using php(source code)</h4>
  <div class="php">
    <code>
      <pre>
      &lt;?php
      $ch = curl_init();
      $url = " https://gorest.co.in/public/v1/users?access-token=d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3"
      curl_setopt($ch,CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      $res = curl_exec($ch);
      if($e = curl_error($ch)){
        echo $e;
      }else{
        $data = json_decode($res);
        print_r($data);
      }
      curl_close($ch);
      &gt;
      </pre>
    </code>
  </div>

</template>

<script>
  import TableHead from '../components/tableHead/TableHead.vue'
import TableRow from '../components/tableRow/TableRow.vue'
export default {
  components: {
    TableHead,
    TableRow
  },
  data() {
    return{
      users: [],
      uri: 'https://gorest.co.in/public/v1/users',
      token: '?access-token=d7c01847de4c083cb154e9a533294301e9f05f93dbae7d589e42ece63226c0a3'
    }
  },
  async mounted(){
    const url = this.uri + this.token
    const res = await fetch(url)
    const data = await res.json()
    this.users = data.data
  }
}
</script>

<style>
  .title h1,h4 {
    color: white;
    margin: 80px 0 20px 20px;
  }
  
  table{
    border: 1px solid white;
    border-collapse: collapse;
    width: 80vw;
    text-align: left;
    letter-spacing: 1px;
    margin: 20px auto;
  }
  tr:nth-child(1):hover {
    background-color:#3c373e;
  }
  tr {
    font-size: 24px;
  }
  tr:nth-child(odd) {
    background-color:#3c373e;
  }
  tr:nth-child(even) {
    background-color: #39343b;
  }
  tr:hover {
    background-color: white;
    transition: all ease 0.4s;
  }
  
  tr:hover td{
    color:black;
  }
  .php {
    color: white;
    
  }
</style>