<template>
  <v-row class="mx-4 my-4">
    <v-col>
      <vue-json-editor
        v-model="json"
        :show-btns="true"
        :mode="mode"
        :expandedOnStart="true"
        @json-change="onJsonChange"
      ></vue-json-editor>
    </v-col>
  </v-row>
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
        msg: "demo of jsoneditcor",
      },
      mode: "view",
    };
  },
  methods: {
    onJsonChange(value) {
      console.log("value:", value);
    },
  },
  mounted() {
  },
};
</script>

<style>
</style>