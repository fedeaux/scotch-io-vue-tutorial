<template lang="pug">
.panel.panel-default
  .panel-heading
    h1.text-center Total Time
  .panel-body
    h1.text-center {{ time }} hours
</template>

<script lang="coffee">
  exports.default = props: [ 'time' ]
</script>
