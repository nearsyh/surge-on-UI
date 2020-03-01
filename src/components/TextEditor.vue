<template>
  <div class="text-editor">
    <h2 v-if="title">{{ title }}</h2>
    <prism-editor :code="code" :lineNumbers="false" :emitEvents="true" v-on:change="(event) => $emit('change', event)" />
  </div>
</template>

<script>
import "prismjs";
import "prismjs/themes/prism.css";
import PrismEditor from "vue-prism-editor";

export default {
  props: ["code", "title"],
  components: {
    PrismEditor
  }
};
</script>

<style>
.prism-editor__line-numbers {
  padding: 6px;
  font-size: 12px !important;
}

.prism-editor-wrapper pre {
  padding: 6px !important;
}
.prism-editor-wrapper pre code {
  margin: 0;
  font-size: 12px !important;
}

.prism-editor__code {
  margin: 0px !important;
}
</style>