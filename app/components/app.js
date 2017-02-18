import results from '../data/results.json';
import ResultsList from './results-list/results-list.vue';

export default {
  name: 'app',
  template: '#app',
  components: { ResultsList },
  data: () => {
    return {
      results: results,
      query: '',
    }
  },
  watch: {
    query: function(query) {
      this.results = results.filter(
        (el) => _.includes(el.name.toLowerCase(), query.toLowerCase()));
    }
  },
}
