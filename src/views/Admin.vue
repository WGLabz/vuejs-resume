<template>
  <v-container>
    <v-row class="mx-4 my-4">
      <v-col>
        <v-text-field dense label="Backend URL" v-model="url"></v-text-field>
      </v-col>
      <v-col>
        <v-btn small color="success" @click="urlUpdate()">
          <v-icon left dark> mdi-check </v-icon> Update
        </v-btn>
      </v-col>
      <v-col class="text-right">
        <v-btn @click="edit()" small color="secondary" class="mx-4">
          <v-icon left dark> mdi-pencil </v-icon> EDIT
        </v-btn>
        <v-btn @click="save()" :disabled="!changed" small color="success">
          <v-icon left dark> mdi-content-save </v-icon>SAVE
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-4 my-4">
      <v-col>
        <vue-json-editor
        style="height: 100%"
          v-model="json"
          :mode="mode"
          :expandedOnStart="false"
          @json-change="onChange"
        ></vue-json-editor>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vueJsonEditor from "vue-json-editor";
import { getAuth } from "firebase/auth";
import axios from "axios";

export default {
  components: {
    vueJsonEditor,
  },
  name: "Skills",
  data() {
    return {
      json: {
        msg: "Loading Data.",
      },
      updatedJSON: {},
      originalJSON: {},
      mode: "view",
      idToken: "",
      changed: false,
      url: "https://resume-backend-bikash.herokuapp.com",
    };
  },
  methods: {
    edit() {
      console.log(this.mode);
      this.mode = "form";
    },
    save() {
      axios
        .post(this.url + "/firebase?token=" + this.idToken, {
          updated: this.updatedJSON,
          // original: this.originalJSON,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
        this.changed=false;
    },
    onChange(val) {
      this.updatedJSON = val;
      this.changed = true;
    },
    async loadData() {
      const auth = getAuth();
      const user = auth.currentUser;

      var idToken = await user.getIdToken(true);
      this.idToken = idToken;
      axios
        .get(this.url + "/firebase?token=" + idToken)
        .then((response) => {
          this.json = response.data;
          this.originalJSON = response.data;
        })
        .catch((err) => {
          this.json = err;
        });
    },
    async urlUpdate() {
      await this.loadData();
      this.changed=false;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style>
</style>