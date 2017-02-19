<template>
  <div id="results-list">
    <div class="rd-container">
      <ul>
        <li class="rd-result" v-for="item in results">
          <div class="rd-result__title">{{ item.name }}</div>
          <div class="rd-result__subtitle">{{ item.container }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import results from '../data/results.json';

  export default {
    name: 'results-list',
    template: '#results-list',
    props: ['query', 'selectedCity'],
    data: () => {
      return {
        results: {},
      };
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
    }
  }
</script>
