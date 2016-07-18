import Vue from 'vue'
import Page from './Components/Page.vue'

Vue.use(require('vue-resource'));

new Vue({
  el: '.app',
  render: h => h(Page)
});
Vue.transition('stagger', {
  stagger: function (index) {
    // increase delay by 50ms for each transitioned item,
    // but limit max delay to 300ms
    return Math.min(300, index * 50)
  }
})