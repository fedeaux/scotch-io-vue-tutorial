<template lang="pug">
.form-horizontal
  .form-group
    .col-sm-6
      label Date
      input.form-control(type='date', v-model='timeEntry.date', placeholder='Date')
    .col-sm-6
      label Hours
      input.form-control(type='number', v-model='timeEntry.totalTime', placeholder='Hours')
  .form-group
    .col-sm-12
      label Comment
      input.form-control(type='text', v-model='timeEntry.comment', placeholder='Comment')

  button.btn.btn-primary(@click='save()') Save
  router-link.btn.btn-danger(to="/time-entries") Cancel
  hr
</template>

<script lang="coffee">
exports.default =
  data: ->
    timeEntry:
      user: {}
    firstName: 'Ryan'
    lastName: 'Chenkie'
    email: 'ryanchenkie@gmail.com'
    image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g'

  methods:
    save: ->
      timeEntry = @timeEntry
      # We dispatch the timeEntry so it can be pushed
      # onto the timeEntries array in the parent component
      @$dispatch 'timeUpdate', timeEntry
      @timeEntry = {}
</script>
