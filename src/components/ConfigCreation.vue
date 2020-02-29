<template>
  <div class="config-creation">
    <input v-model="id" />
    <button v-on:click="$emit('create-or-edit', id)">Create</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: ''
    };
  }
};
</script>

<style scoped>
</style>