<script lang="coffee">
Hello = require './components/Hello'

exports.default =
  name: 'app'
  components: Hello: Hello
</script>

<template>
  <div id="app"> <!-- This html with replace the original <tagname/> -->
    <img src="./assets/logo.png">
    <hello></hello> <!-- Look! Another tag that will be replaced with a component -->
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
