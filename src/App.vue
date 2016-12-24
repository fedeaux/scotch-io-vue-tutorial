<script lang="coffee">
Hello = require './components/Hello'

exports.default =
  name: 'app'
  components:
    hello: Hello
</script>

<template lang="pug">
#app
  // This html with replace the original <tagname/>
  img(src='./assets/logo.png')
  hello
  // Look! Another tag that will be replaced with a component
</template>

<style lang="sass">
#app
  border: thin gray solid
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
