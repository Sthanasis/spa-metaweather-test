<template>
  <div class="container">
    <Search @fetch="fetchData" />
    <span v-if="results.length > 0">Results: {{ results.length }}</span>
    <div v-if="loading">
      <b-spinner type="grow" label="Loading..."></b-spinner>
    </div>
    <div v-else class="flex">
      <City
        v-for="item in results"
        :key="item.woeid"
        :city="item"
        @fetchForecast="fetchForecast"
      />
    </div>

    <Forecast v-if="selectedCity" :forecast="selectedCity" />
  </div>
</template>

<script>
import Search from "./utilities/Search";
import City from "./utilities/City";
import Forecast from "./utilities/Forecast";
import axios from "axios";

export default {
  data() {
    return {
      results: [],
      loading: false,
      selectedCity: null,
    };
  },
  components: {
    Search,
    City,
    Forecast,
  },
  methods: {
    fetchData(query) {
      if (query.trim() !== "") {
        this.loading = true;
        axios
          .get(`http://localhost:3000/search?params=${query}`)
          .then((res) => {
            this.results = [...res.data];
            this.loading = false;
          })
          .catch((err) => {
            console.log(err);
            this.loading = false;
          });
      } else {
        this.results = [];
        this.selectedCity = null;
      }
    },
    fetchForecast(cityId) {
      axios
        .get(`http://localhost:3000/?params=${cityId}`)
        .then((res) => {
          this.selectedCity = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>
