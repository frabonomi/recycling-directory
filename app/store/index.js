import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    query: '',
    results: {},
    selectedCity: '',
  },
  mutations: {},
});

export default store;
