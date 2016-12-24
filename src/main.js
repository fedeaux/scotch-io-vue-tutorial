import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'time-entries',
          component: TimeEntries,
          children: [
            {
              path: 'log-time',
              component: LogTime
            }
          ]
        }
      ]
    }
  ]
})

new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
})
