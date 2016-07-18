import Vue from 'vue'
import Page from './Components/Page.vue'

Vue.use(require('vue-resource'));

new Vue({
  el: '.app',
  render: h => h(Page)
});