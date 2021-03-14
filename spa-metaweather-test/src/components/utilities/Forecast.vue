<template>
  <b-modal id="modal-tall" title="Weather Forecast">
    <div>{{ forecast.title }}: {{ forecast.parent.title }}</div>
    <div>
      <DailyForecast
        v-for="f in forecast.consolidated_weather"
        :key="f.id"
        :weatherObj="f"
      />
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
};
</script>

<style></style>
