import ResultsList from './results-list/results-list.vue';

export default {
  name: 'app',
  template: '#app',
  components: { ResultsList },
  data() {
    return {
      query: '',
    }
  }
}
