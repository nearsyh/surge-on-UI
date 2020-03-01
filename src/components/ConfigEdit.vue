<template>
  <div class="config-edit">
    <b-card no-body>
      <div class="head">
        <div class="title">{{ `Config: ${configData.name}` }}</div>
        <button v-on:click="onSave">Save</button>
      </div>
      <b-tabs pills card vertical>
        <b-tab title="Airports">
          <div class="airport" v-for="(airport, id) in configData.airports" :key="id">
            <b-input-group :prepend="airport.airport_name" class="mt-3">
              <b-form-input v-model="airport.url"></b-form-input>
              <b-input-group-append>
                <b-button variant="outline-success" v-on:click="deleteAirport(id)">Delete</b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
          <input v-model="newAirport" />
          <button v-on:click="addNewAirport">Add New Airport</button>
        </b-tab>

        <b-tab title="Proxy Groups">
          <div class="group" v-for="(group, id) in configData.group_configurations" :key="id">
            <input class="name" v-model="group.group_name" />
            <input class="name" v-model="group.pattern" />
            <button v-on:click="deleteGroup(id)">Delete</button>
          </div>
          <input v-model="newGroup" />
          <button v-on:click="addNewGroup">Add New Group</button>
        </b-tab>

        <b-tab title="Rules">
          <TextEditor
            :code="configData.rules"
            :title="''"
            v-on:change="(e) => onChange(e, 'rules')"
          ></TextEditor>
        </b-tab>

        <b-tab title="Generals">
          <TextEditor
            :code="configData.generals"
            :title="''"
            v-on:change="(e) => onChange(e, 'generals')"
          ></TextEditor>
        </b-tab>

        <b-tab title="URL Rewrites">
          <TextEditor
            :code="configData.url_rewrites"
            :title="''"
            v-on:change="(e) => onChange(e, 'url_rewrites')"
          ></TextEditor>
        </b-tab>
      </b-tabs>
    </b-card>
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
      tab: ""
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
        url: ""
      };
      this.newAirport = "";
    },
    deleteAirport: function(id) {
      delete this.configData.airports[id];
      this.$forceUpdate();
    },
    addNewGroup: function() {
      this.configData.group_configurations[this.newGroup] = {
        group_id: this.newGroup,
        group_name: this.newGroup,
        pattern: ""
      };
      this.newGroup = "";
    },
    deleteGroup: function(id) {
      delete this.configData.group_configurations[id];
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>
.config-edit {
  width: 100%;
  height: 100vh;
}

.head {
  height: 50px;
  border-color: #dddddd;
  border-width: 0 0 1px 0;
  border-style: solid;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.head .title {
  font-family: "Merriweather";
  font-size: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tabs {
  flex: 2;
}

.tab-pane {
  padding: 0px;
}

.name {
  width: 10vw;
  max-width: 200px;
  padding-right: 20px;
}

.content {
  width: 30vw;
  max-width: 600px;
}
</style>

<style>
.config-edit h2 {
  text-align: left;
  font-family: "Merriweather";
  color: royalblue;
  font-size: 30px;
}
</style>