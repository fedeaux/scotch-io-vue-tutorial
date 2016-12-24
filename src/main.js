import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: App },
  ]
})

new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
})
