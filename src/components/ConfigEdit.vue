<template>
  <div class="config-edit">
    <span>{{ configData.name }}</span>
    <div class="airports">
      <div class="airport" v-for="(id, airport) in configData.airports" :key="id">
        <input v-model="airport.name" />
        <input v-model="airport.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    configData: Object
  },
  data: function() {
    return {

    };
  }
};
</script>

<style scoped>
</style>