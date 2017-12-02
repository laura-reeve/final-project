<template>
  <div id="app">
    <!-- put Movie Search logo here? -->
    <router-view/>
  </div>
</template>

<script>
// app-wide import of Bootstrap styling
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body {
  background-color: #383838;
  color: white;
}
.query {
  font-weight: bold;
  color: #5cb85c;
}
.movieLink {
  color: black;
}
.router {
  margin-top: 20px;
}
ul {
  list-style-type: none;
}
.movies li {
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: whitesmoke;
  color: black;
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
