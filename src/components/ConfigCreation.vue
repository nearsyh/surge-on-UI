<template>
  <div class="config-creation">
    <div class="brand">Surge-On</div>
    <div class="input-container">
      <b-input-group>
        <b-form-input v-model="id" placeholder="Input Config ID"></b-form-input>
        <b-input-group-append>
          <b-button variant="info" v-on:click="$emit('create-or-edit', id)" :disabled="!id">GO</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: ""
    };
  }
};
</script>

<style scoped>
.config-creation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.brand {
  padding-bottom: 100px;
  font-weight: bold;
  font-size: 100px;
  font-family: "Merriweather";
}

input {
  border-width: 3px 0 3px 3px;
  border-style: solid;
  width: 20vw;
  height: 40px;
  font-size: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 20px;
  border-color: cornflowerblue;
  font-family: "Merriweather";
  text-align: center;
}

input:focus {
  border-color: darkcyan;
  outline: none;
}

.create {
  border-radius: 0 11px 11px 0;
  border-width: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-left: -73px;
  height: 40px;
  border-color: cornflowerblue;
  background-color: cornflowerblue;
  font-size: 20px;
  font-family: "Merriweather";
}
</style>