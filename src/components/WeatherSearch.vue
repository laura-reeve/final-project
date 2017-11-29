<template>
  <div class="weatherSearch">
    <p>What's it like outside?</p>
    <p>Enter in your city to find out: {{query}}</p>
    <form v-on:submit.prevent="getWeather">
      <p>City: <input type="text" v-model.lazy="query" placeholder="Seattle,WA"><button type="submit">Go</button></p>
    </form>
    <ul class="cities">
      <li v-for="city in results.weather">
        <p>{{ city.main }}</p>
        <p>{{ city.description }}</p>
      </li>
    </ul>
    <router-link to="/">Go back home</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WeatherSearch',
  data () {
    return {
      results: [],
      errors: [],
      query: '',
    }
  },
  methods: {
    getWeather: function () {
      axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          APPID: 'e40ed8ae1d6512b314d2f184c59a5d23',
          units: 'imperial',
          q: this.query
        }
      })
      .then(response => {
        this.results = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      })
    }
  }
}
</script>

<style>
li {
  list-style-type: none;
}
</style>