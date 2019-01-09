import Vue from 'vue';
// 引入组件
import Button from './src/views/index/app.vue';
var app = new Vue({
  template: require('./index.html'),
  components: {
    Button
  },
  data() {
    return {

    }
  }
});
app.$mount('#app');