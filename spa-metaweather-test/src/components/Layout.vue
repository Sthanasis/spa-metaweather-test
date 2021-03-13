<template>
  <div>
    <Search @fetch="fetchData" />
    <span v-for="item in results" :key="item.woeid">{{ item.title }}</span>
  </div>
</template>

<script>
import Search from "./utilities/Search";
import axios from "axios";

export default {
  data() {
    return {
      results: [],
    };
  },
  components: {
    Search,
  },
  methods: {
    fetchData(query) {
      axios
        .get(`http://localhost:3000/?params=${query}`)
        .then((res) => (this.results = [...res.data]))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
