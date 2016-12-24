<script lang="coffee">
</script>

<template lang="pug">
#wrapper
  nav.navbar.navbar-default
    .container
      a.navbar-brand(href='#')
        i.glyphicon.glyphicon-time
        |           Vue Time Tracker
      ul.nav.navbar-nav
        li
          router-link(to="/home") Home
        li
          router-link(to="/time-entries") Time Entries
  .container
    .col-sm-3
    .col-sm-9
      router-view
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
