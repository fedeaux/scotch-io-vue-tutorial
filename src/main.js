// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import component_name from './App'; // This line will load App.vue and give it a name

/* eslint-disable no-new */
new Vue({
  el: '#app-wrapper',
  /*
   START HERE!
   The <tagname/> tag will match against our components and find tagname
   This template can have anything, but just one root element. (<p></p><span></span>) is not allowed
   This html with replace the original <div id="app-wrapper"></div>
   */
  template: '<div><span class="debug">From main.js</span><tagname/></div>',

  /*
   After vue replaces <div id="app"></div> with this template it will find
   <tagname/> and replace it with the template from the component (Go to ./App.vue)
   */
  components: { tagname: component_name }
});
