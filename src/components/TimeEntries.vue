<script lang="coffee">
exports.default =
  data: ->
    # We want to start with an existing time entry
    existingEntry =
      user:
        firstName: 'Ryan'
        lastName: 'Chenkie'
        email: 'ryanchenkie@gmail.com'
        image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250'

      comment: 'First time entry'
      totalTime: 1.5
      date: '2016-04-08'

    { timeEntries: [ existingEntry ] }

  methods:
    deleteTimeEntry: (timeEntry) ->
      # Get the index of the clicked time entry and splice it out
      index = @timeEntries.indexOf(timeEntry)
      if window.confirm('Are you sure you want to delete this time entry?')
        @timeEntries.splice index, 1
        @$dispatch 'deleteTime', timeEntry

  events:
    timeUpdate: (timeEntry) ->
      @timeEntries.push timeEntry
      true

</script>

<template lang="pug">
div
  router-link(to="/time-entries/log-time", v-if="$route.path !== '/time-entries/log-time'") Add time entry

  router-view
  hr
  .time-entries
    p(v-if='!timeEntries.length')
      strong {{ $route }}
    .list-group
      a.list-group-item(v-for='timeEntry in timeEntries')
        .row
          .col-sm-2.user-details
            img.avatar.img-circle.img-responsive(:src='timeEntry.user.image')
            p.text-center
              strong
                | {{ timeEntry.user.firstName }}
                | {{ timeEntry.user.lastName }}
          .col-sm-2.text-center.time-block
            h3.list-group-item-text.total-time
              i.glyphicon.glyphicon-time
              |                 {{ timeEntry.totalTime }}
            p.label.label-primary.text-center
              i.glyphicon.glyphicon-calendar
              |                 {{ timeEntry.date }}
          .col-sm-7.comment-section
            p {{ timeEntry.comment }}
          .col-sm-1
            button.btn.btn-xs.btn-danger.delete-button(@click='deleteTimeEntry(timeEntry)')
              | X
</template>

<style lang="sass">
.avatar
  height: 75px
  margin: 0 auto
  margin-top: 10px
  margin-bottom: 10px

.user-details
  background-color: #f5f5f5
  border-right: 1px solid #ddd
  margin: -10px 0

.time-block
  padding: 10px

.comment-section
  padding: 20px
</style>
