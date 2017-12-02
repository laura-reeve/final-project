<template>
  <div class="container">
    <h1>Movies for your Mood</h1>
      <p>This is a movie list based on {{query}}</p>
      <form v-on:submit.prevent="getMovieList">
        <p>I'm feeling like...<input type="text" v-model.lazy="query" placeholder="something"><button class="btn btn-success" type="submit">Go</button></p>
      </form>
      <router-link to="/">Go back to Weather and a Movie Search</router-link>
      <ul class="movies">
        <li v-for="movie in results.results">
          <h2>{{movie.title}}</h2>
          <p>{{movie.overview}}</p>
          <p><img v-bind:src="'//image.tmdb.org/t/p/w150_and_h225_bestv2'+ movie.poster_path" v-bind:alt="movie.title + 'Poster'" class="poster-image"></p>
        </li>
      </ul>
    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>      
</template>

<script>
import axios from 'axios';

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul.movies {
  list-style-type: none;
}

.movies li {
  border: 1px solid black;
}
.poster-image {
  text-align: left;
}
</style>
