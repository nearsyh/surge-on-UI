<template>
  <div class="config-management">
    <ConfigCreation v-if="configId === ''" v-on:create="onCreate" />
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
  },
  onCreate: function(name) {
    
  }
};
</script>

<style scoped>
</style>