<template>
  <div id="app"> <!-- This html with replace the original <tagname/> -->
    <img src="./assets/logo.png">
    <hello></hello> <!-- Look! Another tag that will be replaced with a component -->
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app', /* What is this used for? */
  components: {
    Hello /* The previously mentioned component */
  }
}

// Go to components/Hello.vue
</script>

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
