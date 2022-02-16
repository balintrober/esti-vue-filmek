<template>
  <h3>Részletek: {{ id }}</h3>
  <table>
    <tr v-for="(value, key) in details" :key="key.id">
      <td>{{key}}</td>
      <td>{{value}}</td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      details: null,
      //keys: [],
    };
  },
  props: ["id"],
  created() {
    axios
      .get("https://ghibliapi.herokuapp.com/films/" + this.id)
      .then((resp) => {
        console.log(resp);
        this.details = resp.data;
        // for (let k in this.details) {
        //   this.keys.push(k);
        // }
        // console.log(this.keys);
      });
  },
};
</script>

<style>
</style>