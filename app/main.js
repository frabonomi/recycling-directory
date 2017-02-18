import _ from 'lodash';
import Vue from 'vue';
import App from './components/app.vue'
import './styles/main.css';

const app = new Vue({
  el: '#app',
  render: createElement => createElement(App),
  components: { App },
});
