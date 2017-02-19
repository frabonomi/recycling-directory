import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store';
import './styles/main.css';

import App from './components/App.vue'

const app = new Vue({
  store,
  ...App,
});

export { app, store }
