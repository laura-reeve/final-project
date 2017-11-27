<template>
  <div class="movieSearch">
    <p>Movies for your Mood</p>
      <p>This is a movie list based on {{query}}</p>
      <form v-on:submit.prevent="getMovieList">
        <p>I'm feeling like...<input type="text" v-model.lazy="query" placeholder="something"><button type="submit">Go</button></p>
      </form>
      <ul v-if="results && results.length > 0">
       <li v-for="result in results">
         <p>{{results.title}}</p>
       </li>
      </ul>
    <div v-else-if="results && results.length==0">
      <p>No results!</p>
      <p>Please chose another word.</p>
    </div>
    <ul v-if="errors && errors.length > 0">
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
      results: null,
      errors: [],
      query: '',
    }
  },
  methods: {
    getMovieList: function () {
      // API call
      console.log("Making API call...");
  
      axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "a6b89216122d3b45b558a0ac03d25d80",
          language: "en_US",
          query: this.query,
          page: 1
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
