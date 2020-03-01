<template>
  <div class="config-management">
    <ConfigCreation v-if="!configId" v-on:create-or-edit="createOrEdit" />
    <ConfigEdit v-bind:config-data="configData" v-else />
  </div>
</template>

<script>
import ConfigCreation from "./ConfigCreation.vue";
import ConfigEdit from "./ConfigEdit.vue";
import {
  createOrGetConfiguration,
  getConfiguration
} from "../lib/ConfigService";

export default {
  components: {
    ConfigCreation,
    ConfigEdit
  },
  props: ["configId"],
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
  async beforeMount() {
    if (this.configId) {
      await this.refresh(this.configId);
    }
  },
  methods: {
    createOrEdit: async function(id) {
      this.configData = await createOrGetConfiguration(id);
      this.$router.push({
        path: `/config/${id}`
      });
    },
    async refresh(id) {
      await getConfiguration(id).then(
        res => {
          this.configData = res;
        },
        () => {
          alert("找不到对应的配置");
        }
      );
    }
  }
};
</script>

<style scoped>
</style>