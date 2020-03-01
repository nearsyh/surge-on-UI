<template>
  <div class="text-editor">
    <h2 v-if="title">{{ title }}</h2>
    <prism-editor :code="code" :lineNumbers="true" />
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
  font-size: 12px !important;
}
</style>