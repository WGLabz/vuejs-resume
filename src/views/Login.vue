<template>
  <div class="page">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="3" md="3">
          <v-card class="elevation-12">
            <v-card-text class="mt-12">
              <h4 class="text-center display-2 teal--text text--accent-3">
                Sign In
              </h4>
              <v-form>
                <v-text-field
                  label="Email"
                  v-model="form.email"
                  name="Email"
                  type="text"
                  color="teal accent-3"
                />

                <v-text-field
                  id="password"
                  v-model="form.password"
                  label="Password"
                  name="password"
                  type="password"
                  color="teal accent-3"
                />
              </v-form>
            </v-card-text>
            <div class="text-center mt-3 mb-3">
              <v-btn color="teal accent-3" dark class="mb-3" @click="submit()"
                >SIGN IN</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" top>
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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      snackbartext: "",
      error: null,
      snackbar: false,
    };
  },
  methods: {
    submit() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.form.email, this.form.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          this.$router.push("/admin");
        })
        .catch(() => {
          this.snackbartext = "Please check the username or password";
          this.snackbar = true;
        });
    },
  },
};
</script>
<style scoped>
.page {
  width: 100%;
  overflow: hidden;
  position: static;
}
</style>