import _ from 'lodash';
import Vue from 'vue';
import App from './App.vue'
import './styles/main.scss';

new Vue({
  el: '#app',
  render: createElement => createElement(App),
  components: { App },
});
