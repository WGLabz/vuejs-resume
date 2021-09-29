<template>
  <vue-json-editor
    v-model="json"
    :show-btns="true"
    :expandedOnStart="true"
    @json-change="onJsonChange"
  ></vue-json-editor>
</template>

<script>
import vueJsonEditor from "vue-json-editor";
export default {
  components: {
    vueJsonEditor,
  },
  name: "Skills",
  data() {
    return {
      json: {
        msg: "demo of jsoneditor",
      },
    };
  },
  methods: {
    onJsonChange(value) {
      console.log("value:", value);
    },
  },
};
</script>

<style>
</style>