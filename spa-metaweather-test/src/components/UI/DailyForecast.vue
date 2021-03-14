<template>
  <b-card :header="date" header-tag="header">
    <b-card-text>
      <div class="description-container">
        <img
          :src="
            `https://www.metaweather.com/static/img/weather/${weatherObj.weather_state_abbr}.svg`
          "
          alt=""
          height="100px"
          width="100px"
        />
        <div>
          {{ weatherObj.weather_state_name }}
        </div>
      </div>

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
  computed: {
    date() {
      const date = new Date(this.weatherObj.applicable_date);
      const today = new Date();
      const dateString = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
      const todayString = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
      if (dateString === todayString) return "Today";
      return this.weatherObj.applicable_date;
    },
  },
};
</script>

<style>
.description-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.description-container img {
  margin-right: 10px;
}

.description-container div {
  font-weight: bold;
}

.card-text div {
  text-align: start;
}
</style>
