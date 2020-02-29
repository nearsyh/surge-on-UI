<template>
  <div id="app">
    <ConfigManagement />
  </div>
</template>

<script>
import ConfigManagement from './components/ConfigManagement.vue'

export default {
  name: 'App',
  components: {
    ConfigManagement
  }
}
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
