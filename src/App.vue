<template>
  <v-app>
    <v-main>
      <Container />
    </v-main>
  </v-app>
</template>

<script>
import Container from "./views/Container.vue";

export default {
  name: "App",

  components: {
    Container,
  },

  data: () => ({
    //
  }),
  mounted() {
    this.$store.dispatch("setUserMetaData");
    this.$store.dispatch("setSkills");
  },
};
</script>
<style>
@import "./assets/styles/main.css";
@import "./assets/styles/style.css";
</style>