<template>
  <div class="movieSearch">
    <h1>Movies for your Mood</h1>
      <p>This is a movie list based on {{query}}</p>
      <form v-on:submit.prevent="getMovieList">
        <p>I'm feeling like...<input type="text" v-model.lazy="query" placeholder="something"><button type="submit">Go</button></p>
      </form>
      <router-link to="/weather">Try out the Weather Search</router-link>
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
      // API call
      console.log('Making API call...');
  
      axios.get('//api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'a6b89216122d3b45b558a0ac03d25d80',
          language: 'en_US',
          query: this.query,
          page: 1,
          adult: false
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

ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
</style>
