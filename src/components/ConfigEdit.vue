<template>
  <div class="config-edit">
    <div class="airports">
      <h2>Airport Configuration</h2>
      <div class="airport" v-for="(airport, id) in configData.airports" :key="id">
        <input v-model="airport.airport_name" />
        <input v-model="airport.url" />
      </div>
      <input v-model="newAirport" />
      <button v-on:click="addNewAirport">Add New Airport</button>
    </div>

    <div class="groups">
      <h2>Proxy Group Configuration</h2>
      <div class="group" v-for="(group, id) in configData.group_configurations" :key="id">
        <input v-model="group.group_name" />
        <input v-model="group.pattern" />
      </div>
      <input v-model="newGroup" />
      <button v-on:click="addNewGroup">Add New Group</button>
    </div>

    <div class="rules">
      <TextEditor
        :code="configData.rules"
        :title="'Rules'"
        v-on:change="(e) => onChange(e, 'rules')"
      ></TextEditor>
    </div>

    <div class="generals">
      <TextEditor
        :code="configData.generals"
        :title="'Generals'"
        v-on:change="(e) => onChange(e, 'generals')"
      ></TextEditor>
    </div>

    <div class="url-rewrites">
      <TextEditor
        :code="configData.url_rewrites"
        :title="'URL Rewrites'"
        v-on:change="(e) => onChange(e, 'url_rewrites')"
      ></TextEditor>
    </div>

    <button v-on:click="onSave">Save</button>
  </div>
</template>

<script>
import TextEditor from "./TextEditor.vue";

export default {
  components: {
    TextEditor
  },
  props: {
    configData: Object,
    onSave: Function
  },
  data: function() {
    return {
      newAirport: "",
      newGroup: "",
    };
  },
  methods: {
    onChange: function(code, field) {
      this.configData[field] = code;
    },
    addNewAirport: function() {
      this.configData.airports[this.newAirport] = {
        airport_id: this.newAirport,
        airport_name: this.newAirport,
        url: "",
      };
      this.newAirport = "";
    },
    addNewGroup: function() {
      this.configData.group_configurations[this.newGroup] = {
        group_id: this.newGroup,
        group_name: this.newGroup,
        pattern: "",
      };
      this.newGroup = "";
    },
  }
};
</script>

<style scoped>
</style>