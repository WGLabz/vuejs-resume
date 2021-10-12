<template>
  <div>
    <v-container>
      <v-row class="mx-4 my-4">
        <v-col>
          <v-text-field dense label="Backend URL" v-model="url"></v-text-field>
        </v-col>
        <v-col>
          <v-btn
            small
            color="success"
            @click="urlUpdate()"
            :disabled="!urlUpdated"
          >
            <v-icon left dark> mdi-check </v-icon> Update
          </v-btn>
        </v-col>
        <v-col class="text-right">
          <v-btn
            @click="loadData()"
            small
            color="secondary"
            class="mx-4"
            :loading="loading"
          >
            <v-icon left dark> mdi-sync </v-icon> Reload
          </v-btn>
          <v-btn
            @click="save()"
            :disabled="!changed"
            small
            color="success"
            :loading="saving"
          >
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
    <v-snackbar v-model="snackbar" top :color="snackbarColor">
      {{ snackbartext }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import vueJsonEditor from "vue-json-editor";
import { getAuth } from "firebase/auth";
import http from "../http";

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
      mode: "tree",
      idToken: "",
      changed: false,
      url: "",
      snackbar: false,
      snackbartext: "",
      snackbarColor: "success",
      urlUpdated: false,
      originalURL: "",
      loading: false,
      saving: false,
    };
  },
  methods: {
    edit() {
      console.log("EDIT CLICKED");
      this.mode = "form";
    },
    save() {
      this.saving = true;
      http
        .postData(this.idToken, this.updatedJSON)
        .then((res) => {
          this.saving = false;
          if (!res.data.msg.status) {
            this.snackbartext = "Err- " + res.data.msg.message;
            this.snackbar = true;
            this.snackbarColor = "danger";
            this.changed = false;
          } else {
            this.snackbartext = "Data saved sucessfully.";
            this.snackbar = true;
            this.snackbarColor = "success";
            this.changed = false;
          }
        })
        .catch((err) => {
          this.snackbartext = "Error- " + err;
          this.snackbarColor = "danger";
          this.snackbar = true;
          this.saving = false;
        });
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
      this.loading = true;
      http
        .getData(idToken)
        .then((response) => {
          this.json = response.data;
          this.originalJSON = response.data;
          this.loading = false;
        })
        .catch((err) => {
          this.json = err;
          this.snackbartext =
            "Error occured while loading data! check the URL.";
          this.snackbar = true;
          this.snackbarColor = "danger";
          this.loading = false;
        });
    },
    async urlUpdate() {
      this.originalURL = this.url;
      await this.loadData();
      this.changed = false;
    },
  },
  mounted() {
    this.url = http.serverURL;
    this.loadData();
    this.originalURL = this.url;
  },
  watch: {
    url: function (val) {
      if (val !== this.originalURL) {
        console.log(val);
        this.urlUpdated = true;
      } else {
        this.urlUpdated = false;
      }
    },
  },
};
</script>

<style>
</style>