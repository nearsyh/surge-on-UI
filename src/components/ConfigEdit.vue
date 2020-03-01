<template>
  <div class="config-edit">
    <div class="airports">
      <h2>Airport Configuration</h2>
      <div class="airport" v-for="(airport, id) in configData.airports" :key="id">
        <input v-model="airport.airport_name" />
        <input v-model="airport.url" />
      </div>
    </div>

    <div class="groups">
      <h2>Proxy Group Configuration</h2>
      <div class="group" v-for="(group, id) in configData.group_configurations" :key="id">
        <input v-model="group.group_name" />
        <input v-model="group.pattern" />
      </div>
    </div>

    <div class="rules">
      <TextEditor :code="configData.rules" :title="'Rules'"></TextEditor>
    </div>

    <div class="generals">
      <TextEditor :code="configData.generals" :title="'Generals'"></TextEditor>
    </div>

    <div class="url-rewrites">
      <TextEditor :code="configData.url_rewrites" :title="'URL Rewrites'"></TextEditor>
    </div>
  </div>
</template>

<script>
import TextEditor from './TextEditor.vue';

export default {
  components: {
    TextEditor
  },
  props: {
    configData: Object
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>