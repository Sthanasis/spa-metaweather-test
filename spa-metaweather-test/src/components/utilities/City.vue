<template>
  <b-card
    header="featured"
    header-tag="header"
    footer="Card Footer"
    footer-tag="footer"
    :title="city.title"
  >
    <b-card-text>View the weather forecast for: {{ city.title }}</b-card-text>
    <b-button
      v-b-modal.modal-tall
      href="#"
      variant="primary"
      @click="fetchForecast"
      >View</b-button
    >
  </b-card>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
    },
  },
  methods: {
    fetchForecast() {
      this.$emit("fetchForecast", this.city.woeid);
    },
  },
};
</script>

<style>
.card {
  width: 400px;
  margin: 10px;
}
</style>
