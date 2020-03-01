<template>
  <div id="app">
    <ConfigManagement v-bind:config-id="id" />
  </div>
</template>

<script>
import ConfigManagement from "./components/ConfigManagement.vue";
import axios from "axios";

export default {
  props: ["id"],
  name: "App",
  components: {
    ConfigManagement
  },
  mounted: function() {
    axios.defaults.baseURL = "http://" + process.env.VUE_APP_SERVER_HOST;
  }
};
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
