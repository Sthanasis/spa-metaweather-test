<template>
  <b-card :header="city.title" header-tag="header" title="">
    <b-card-text>View the weather forecast for {{ city.title }}</b-card-text>
    <b-button
      v-b-modal.modal-tall
      href="#"
      variant="primary"
      @click="fetchForecast"
      >View forecast</b-button
    >
  </b-card>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
    show: {},
  },
  methods: {
    fetchForecast() {
      this.$emit("fetchForecast", this.city.woeid);
    },
  },
};
</script>

<style scoped>
@media (min-width: 500px) {
  .card {
    width: 48%;
    margin: 5px 2px;
  }
}
</style>
