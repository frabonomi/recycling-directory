import results from '../data/results.json';
import ResultsList from './results-list/results-list.vue';

export default {
  name: 'app',
  template: '#app',
  components: { ResultsList },
  data: () => {
    return {
      cities: [
        'Varese',
        'Casciago',
        'Induno Olona',
        'Cantello',
        'Solbiate',
        'Binago',
        'Cagno',
      ],
      query: '',
      results: {},
      selectedCity: 'Varese',
    }
  },
  watch: {
    query: function() {
      if (!this.query || !this.selectedCity) {
        this.results = {};
      } else {
        this.results = results.filter((el) => {
          return _.includes(el.name.toLowerCase(), this.query.toLowerCase()) &&
            _.includes(el.city, this.selectedCity);
        });
      }
    }
  },
}
