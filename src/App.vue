<template>
  <div id="app">
    <ConfigManagement />
  </div>
</template>

<script>
import ConfigManagement from "./components/ConfigManagement.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    ConfigManagement
  },
  mounted: function() {
    axios.defaults.baseURL = "http://" + process.env.VUE_APP_SERVER_HOST;
    console.log(axios.defaults.baseURL);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
