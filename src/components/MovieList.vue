<template>
  <div>
    <ul class="movies">
        <li v-for="movie in movieData">
          <h2><a class="movieLink" v-bind:href="'https://www.themoviedb.org/movie/'+movie.id" target="_blank">{{movie.title}}</a></h2>
          <p>{{movie.overview}}</p>
          <p><img v-bind:src="'//image.tmdb.org/t/p/w150_and_h225_bestv2'+ movie.poster_path" v-bind:alt="movie.title + ' Poster'" class="poster-image"></p>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  data () {
    return {

    }
  },
  props: {
    movieData: {}
  }
}
</script>

<style scoped>
.movies li {
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: whitesmoke;
  color: black;
}
</style>