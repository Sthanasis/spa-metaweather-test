<template>
  <div>
    <b-form-input
      id="search"
      v-model="text"
      placeholder="City name"
      type="search"
    ></b-form-input>
  </div>
</template>

<script>
import { debounce } from "lodash";
export default {
  data() {
    return {
      text: "",
    };
  },
  watch: {
    text: debounce(function() {
      this.$emit("fetch", this.text);
    }, 500),
  },
};
</script>
