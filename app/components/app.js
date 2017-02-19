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
      selectedCity: 'Varese',
    }
  },
}
