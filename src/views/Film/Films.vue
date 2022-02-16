<template>
  <h1 class="text-success">Filmek</h1>

  <div class="container">
    <div class="row">
      <div class="card col-sm-12 col-md-6 col-lg-4" v-for="f in films" :key="f.id">
        <router-link :to="{name: 'Details', params: { id: f.id }}">
          <img class="img-top w-75" :src="f.movie_banner" alt="Banner" />
        </router-link>
        <!-- <router-link to="/films">Films</router-link> -->

        <div class="card-body">
          <h3 class="card-title">{{ f.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      films: [],
    };
  },
  created() {
    axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then((response) => {
        console.log(response.data);
        this.films = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>