<template>
  <div class="config-management">
    <ConfigCreation v-if="configId === ''" />
    <ConfigEdit v-else />
  </div>
</template>

<script>
import ConfigCreation from './ConfigCreation.vue';
import ConfigEdit from './ConfigEdit.vue';

export default {
  components: {
    ConfigCreation,
    ConfigEdit,
  },
  data: function() {
    return {
      configId: "",
      configData: {
        id: "",
        name: "",
        generals: "",
        rules: "",
        url_rewrites: "",
        airports: [],
        groups: []
      }
    };
  }
};
</script>

<style scoped>
</style>