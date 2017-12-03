<!-- Error list loop and styles -->

<template>
  <div>
    <div v-if="errorList.length > 0">
    <p>There was an error fetching data.</p>
    <ul class="errors">
      <li v-for="error in errorList">{{ error.message }}</li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
    name: "ErrorList",
    data () {
      return {
        
      }
    },
    props: {
      errorList: {}
    }
  }
</script>

<style scoped>
ul.errors {
  list-style-type: none;
}
.errors li {
  background-color: white;
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
</style>