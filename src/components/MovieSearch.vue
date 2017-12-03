<template>
  <div class="container">
    <h1>Movies for your Mood</h1>
      <p>This is a movie list based on <span class="query">{{query}}</span></p>
      <form v-on:submit.prevent="getMovieList">
        <div class="form-row">
          <div class="col-sm-3 offset-sm-4">
          <input type="text" class="form-control" v-model.lazy="query" id="movieSearch" placeholder="something">
          </div>
          <div class="col-sm-1">
          <button class="btn btn-success" type="submit">Search</button>
          </div>
        </div>
      </form>
      <p class="router"><router-link to="/">Go back to Weather and a Movie Search</router-link></p>
      
      <!-- MovieList child component -->
      <movie-list v-bind:movieData="results.results"></movie-list>

    <!-- ErrorList child component -->
    <error-list v-bind:errorList="errors"></error-list>
  </div>      
</template>

<script>
import axios from 'axios';
import MovieList from '@/components/MovieList';
import ErrorList from '@/components/ErrorList';

export default {
  name: 'MovieSearch',
  data () {
    return {
      results: [],
      errors: [],
      query: '',
    }
  },
  methods: {
    getMovieList: function () {
      let cacheLable = ' movieSearch_' + this.query;
      let cacheExpiry = 15 * 60 * 1000; // 15 minutes 

      // If there is a cached query, use that insetad of an API request
      if(this.$ls.get(cacheLable)) {
        console.log('Cached query detected.');
        this.results = this.$ls.get(cacheLable);
      } 
      // If not, make the API request...
      else {
      console.log('No cached query detected. Making API request.');
      axios.get('//api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'a6b89216122d3b45b558a0ac03d25d80',
          language: 'en_US',
          query: this.query,
          page: 1,
          adult: false
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
    }
  },
  components: {
      'movie-list': MovieList,
      'error-list': ErrorList
    }
}
</script>

<style>
/* All styles are global - stored in App.vue */
</style>
