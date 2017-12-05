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
</style>
