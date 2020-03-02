<template>
  <div class="config-edit">
    <div class="loading" v-if="loading">
      <b-spinner class="align-middle"></b-spinner>
      <strong>Loading...</strong>
    </div>
    <b-card no-body v-else>
      <div class="head">
        <div class="left-head">
          <div class="title">{{ `Config: ${configData.name}` }}</div>
          <b-button variant="outline-primary" v-on:click="onCopy">Copy Surge Link</b-button>
        </div>
        <b-alert
          :show="dismissCountDown"
          :dismissible="false"
          variant="success"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
        >
          <p>Link is copied to your clipboard.</p>
        </b-alert>
        <b-button-group>
          <b-button variant="outline-primary" v-on:click="onSave">Save</b-button>
          <b-button variant="outline-danger" v-on:click="onCancel">Cancel</b-button>
        </b-button-group>
      </div>
      <b-tabs pills card vertical>
        <b-tab title="Airports">
          <b-table :items="airports" :fields="['airport_name', 'url', 'action']">
            <template v-slot:cell(airport_name)="row">
              <div
                class="airport-name"
                v-if="row.item.airport_name !== newAirport"
              >{{row.item.airport_name}}</div>
              <input v-else v-model="newAirport" />
            </template>
            <template v-slot:cell(url)="row">
              <div class="airport-url" v-if="row.item.airport_name !== newAirport">
                <a :href="row.item.url">{{row.item.url}}</a>
              </div>
              <input v-else v-model="newAirportUrl" />
            </template>

            <template v-slot:cell(action)="row">
              <div class="airport-delete" v-if="row.item.airport_name !== newAirport">
                <b-icon
                  icon="trash-fill"
                  aria-hidden="true"
                  v-on:click="deleteAirport(row.item.airport_id)"
                ></b-icon>
              </div>
              <div class="airport-add" v-else>
                <b-icon icon="plus" aria-hidden="true" v-on:click="addNewAirport()"></b-icon>
              </div>
            </template>
          </b-table>
        </b-tab>

        <b-tab title="Proxy Groups">
          <b-table :items="groups" :fields="['group_name', 'pattern', 'action']">
            <template v-slot:cell(group_name)="row">
              <div
                class="group-name"
                v-if="row.item.group_name !== newGroup"
              >{{row.item.group_name}}</div>
              <input v-else v-model="newGroup" />
            </template>
            <template v-slot:cell(pattern)="row">
              <div
                class="group-pattern"
                v-if="row.item.group_name !== newGroup"
              >{{row.item.pattern}}</div>
              <input v-else v-model="newGroupPattern" />
            </template>

            <template v-slot:cell(action)="row">
              <div class="group-delete" v-if="row.item.group_name !== newGroup">
                <b-icon
                  icon="trash-fill"
                  aria-hidden="true"
                  v-on:click="deleteGroup(row.item.group_id)"
                ></b-icon>
              </div>
              <div class="group-add" v-else>
                <b-icon icon="plus" aria-hidden="true" v-on:click="addNewGroup()"></b-icon>
              </div>
            </template>
          </b-table>
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
    onSave: Function,
    onCancel: Function
  },
  data: function() {
    return {
      newAirport: "",
      newAirportUrl: "",
      newGroup: "",
      newGroupPattern: "",
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  computed: {
    loading: function() {
      return !this.configData.name;
    },
    airports: function() {
      return Object.values(this.configData.airports).concat([
        {
          airport_id: this.newAirport,
          airport_name: this.newAirport,
          url: this.newAirportUrl
        }
      ]);
    },
    groups: function() {
      return Object.values(this.configData.group_configurations).concat([
        {
          group_id: this.newGroup,
          group_name: this.newGroup,
          pattern: this.newGroupPattern
        }
      ]);
    }
  },
  methods: {
    onChange: function(code, field) {
      this.configData[field] = code;
    },
    onCopy: function() {
      navigator.clipboard
        .writeText(
          `http://surge.nearsyh.me/api/v1/configurations/${this.configData.name}/surge`
        )
        .then(() => this.showAlert());
    },
    addNewAirport: function() {
      this.configData.airports[this.newAirport] = {
        airport_id: this.newAirport,
        airport_name: this.newAirport,
        url: this.newAirportUrl
      };
      this.newAirport = "";
      this.newAirportUrl = "";
    },
    deleteAirport: function(id) {
      delete this.configData.airports[id];
      this.$forceUpdate();
    },
    addNewGroup: function() {
      this.configData.group_configurations[this.newGroup] = {
        group_id: this.newGroup,
        group_name: this.newGroup,
        pattern: this.newGroupPattern
      };
      this.newGroup = "";
      this.newGroupPattern = "";
    },
    deleteGroup: function(id) {
      delete this.configData.group_configurations[id];
      this.$forceUpdate();
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = 1;
    }
  }
};
</script>

<style scoped>
.config-edit {
  width: 100%;
  height: 100vh;
}

.loading {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.head .left-head {
  width: 25%;
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

.airport-url {
  text-align: left;
}

.tabs {
  flex: 2;
}

.tab-pane {
  padding: 0px;
}

.alert {
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
}

.alert p {
  margin-bottom: 0px;
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