<template>
  <div class="config-management">
    <ConfigCreation v-if="!configId" v-on:create-or-edit="createOrEdit" />
    <ConfigEdit v-bind:config-data="configData" v-else  />
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
  props: ['configId'],
  data: function() {
    return {
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
  beforeRouteUpdate (to, from, next) {
    console.log(to);
    next();
  },
  methods: {
    createOrEdit: async function(id) {
      this.configData = await createOrGetConfiguration(id);
      this.$router.push({
        path: `/configs/${id}`
      });
    }
  }
};
</script>

<style scoped>
</style>