import Vue from 'vue';
// 引入组件
import Button from './src/views/index/app.vue';
export default context => {
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
  return app;
}