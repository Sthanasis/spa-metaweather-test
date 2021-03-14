<template>
  <b-card :header="weatherObj.applicable_date" header-tag="header">
    <b-card-text>
      <div>
        {{ weatherObj.weather_state_name }}
      </div>
      <img
        :src="
          `https://www.metaweather.com/static/img/weather/${weatherObj.weather_state_abbr}.svg`
        "
        alt=""
        height="100px"
        width="100px"
      />
      <div>
        <span>Min: {{ weatherObj.min_temp.toFixed(0) }}&#8451;</span>
      </div>
      <div>
        <span>Max: {{ weatherObj.max_temp.toFixed(0) }}&#8451;</span>
      </div>
      <div>Wind Speed: {{ weatherObj.wind_speed.toFixed(0) }}mph</div>
      <div>Visibility: {{ weatherObj.visibility.toFixed(0) }}%</div>
      <div>Predictability: {{ weatherObj.predictability.toFixed(0) }}%</div>
      <div>Humidity: {{ weatherObj.humidity.toFixed(0) }}%</div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    weatherObj: {
      type: Object,
    },
  },
};
</script>

<style></style>
