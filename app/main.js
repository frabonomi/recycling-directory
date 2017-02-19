import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/app.vue'
import store from './store';
import './styles/main.css';

const app = new Vue({
  store,
  el: '#app',
  render: createElement => createElement(App),
  components: { App },
});

export { app, store }
