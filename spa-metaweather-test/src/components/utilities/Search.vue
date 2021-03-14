<template>
  <div>
    <b-form-input
      id="search"
      v-model="text"
      placeholder="Enter location"
      @input="onLocationChange"
      type="search"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  watch: {},
  methods: {
    onLocationChange() {
      this.$emit("fetch", this.text);
    },
  },
};
</script>
