<template>
  <b-modal id="modal-tall" hide-footer title="Consolidated Weather">
    <div v-if="forecast">
      <div style="margin: 10px 0; font-weight:bold">
        {{ forecast.title }}: {{ forecast.parent.title }}
      </div>
      <div>
        <DailyForecast
          v-for="f in forecast.consolidated_weather"
          :key="f.id"
          :weatherObj="f"
        />
      </div>
    </div>
    <div v-else>
      <b-spinner type="grow" label="Loading..."></b-spinner>
    </div>
  </b-modal>
</template>

<script>
import DailyForecast from "../UI/DailyForecast";

export default {
  props: {
    forecast: {
      type: Object,
    },
  },
  components: {
    DailyForecast,
  },
  mounted() {
    console.log(this.forecast);
  },
};
</script>

<style></style>
