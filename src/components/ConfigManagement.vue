<template>
  <div class="config-management">
    <ConfigCreation v-if="configId === ''" v-on:create-or-edit="createOrEdit" />
    <ConfigEdit v-else />
  </div>
</template>

<script>
import ConfigCreation from "./ConfigCreation.vue";
import ConfigEdit from "./ConfigEdit.vue";
import { createOrGetConfiguration } from "../lib/ConfigService";

export default {
  components: {
    ConfigCreation,
    ConfigEdit
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
  methods: {
    createOrEdit: async function(id) {
      this.configData = await createOrGetConfiguration(id);
      this.configId = id;
    }
  }
};
</script>

<style scoped>
</style>