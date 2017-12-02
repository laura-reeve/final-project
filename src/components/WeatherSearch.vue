<template>
  <div class="container">
    <h1>Weather and a Movie Search</h1>
    <p>What's it like outside? Enter in your <strong>city</strong> to find out: <span class="query">{{query}}</span></p>
    <form v-on:submit.prevent="getWeather">
      <div class="form-row">
        <div class="col-sm-3 offset-sm-4">
          <input type="text" class="form-control" v-model.lazy="query" placeholder="Seattle">
        </div>
        <div class="col-sm-1">
          <button class="btn btn-success" type="submit">Submit</button></p>
        </div>
      </div>
    </form>

    <!-- weather description -->
    <ul class="cities">
      <li v-for="city in results.weather">
        <!-- keyword and icon -->
        <p><span id="currentWeather">{{city.main}}</span> <img v-bind:src="'http://openweathermap.org/img/w/' + city.icon + '.png'"></p>
      </li>
    </ul>

    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
    <p>Want to find something to watch?  Click the button to search for movies based on current weather conditions.</p>
    <button class="btn btn-primary" v-on:click="getMovies">Weather and a Movie Search</button>
    <p class="router"><router-link to="/movies">Not feeling it? Click here to search for more movies!</router-link></p>

    <!-- movie list -->
    <ul class="movies">
      <li v-for="movie in movies.results">
        <h2><a class="movieLink" v-bind:href="'https://www.themoviedb.org/movie/'+movie.id" target="_blank">{{movie.title}}</a></h2>
        <p>{{movie.overview}}</p>
        <p><img v-bind:src="'//image.tmdb.org/t/p/w150_and_h225_bestv2'+ movie.poster_path" v-bind:alt="movie.title + 'Poster'" class="poster-image"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WeatherSearch',
  data () {
    return {
      results: [],
      movies: [],
      errors: [],
      query: '',
    }
  },
  methods: {
    // weather API
    getWeather: function () {
      let cacheLable = ' citySearch_' + this.query;
      let cacheExpiry = 15 * 60 * 1000; // 15 minutes 

      // If there is a cached query, use that insetad of an API request
      if(this.$ls.get(cacheLable)) {
        console.log('Cached query detected.');
        this.results = this.$ls.get(cacheLable);
      } 
      // If not, make the API request...
      else {
      console.log('No cached query detected. Making API request.');
      axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          APPID: 'e40ed8ae1d6512b314d2f184c59a5d23',
          units: 'imperial',
          q: this.query
        }
      })
      // ... and then cache the value for the amount of time specified in cacheExpiry
      .then(response => {
        this.$ls.set(cacheLable, response.data, cacheExpiry);
        console.log('New query has been cached as' + cacheLable);
        this.results = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      })
      }
    },
    // movie API
    getMovies: function () {
      // grab {{city.main}}
      var movieQuery = document.getElementById('currentWeather').innerHTML;

      // use it to fill in query for the API call
      console.log('Making movie API call...');
  
      axios.get('//api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'a6b89216122d3b45b558a0ac03d25d80',
          language: 'en_US',
          query: movieQuery,
          page: 1,
          adult: false
        }
      })
      .then(response => {
        this.movies = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      })
    }
  }
}
</script>

<style>
/* All styles are global - stored in App.vue */
</style>