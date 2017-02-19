<template>
  <div id="search-form">
    <div class="rd-hero rd-hero--center rd-hero--primary">
      <h1 class="rd-hero__title">Recycling directory</h1>
      <input
        type="text"
        class="rd-search-input rd-search-input--large rd-hero__input"
        placeholder="Search an object"
        autofocus
        v-model="query"
      >
      <div class="rd-hero__city">
        Change:
        <select class="rd-select" v-model="selectedCity">
          <option v-for="city in cities" v-bind:value="city">{{ city }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
