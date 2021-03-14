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
    <Logo v-if="results.length === 0" />
    <Forecast :forecast="selectedCity" />
  </div>
</template>

<script>
import Search from "./utilities/Search";
import City from "./utilities/City";
import Forecast from "./utilities/Forecast";
import Logo from "./utilities/Logo";
import toast from "@/mixins/toasts.js";
import axios from "axios";

export default {
  data() {
    return {
      results: [],
      loading: false,
      selectedCity: null,
      show: false,
    };
  },
  mixins: [toast],
  components: {
    Search,
    City,
    Forecast,
    Logo,
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
            this.errorToast("Something went wrong try again later");
            this.loading = false;
          });
      } else {
        this.results = [];
        this.selectedCity = null;
        this.show = false;
      }
    },
    fetchForecast(cityId) {
      axios
        .get(`http://localhost:3000/?params=${cityId}`)
        .then((res) => {
          this.selectedCity = res.data;
          console.log(this.selectedCity);
          this.show = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
