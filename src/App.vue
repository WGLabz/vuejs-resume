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
  mounted() {
    this.$store.dispatch("setUserMetaData");
    this.$store.dispatch("setSkills");
  },
  metaInfo() {
    return {
      title: this.title,
    };
  },
  computed: {
    title: function () {
      let name = this.$store.getters.getUserMetaData.name;
      return name ? `${name} | Resume` : "A dummy title.";
    },
  },
};
</script>
<style>
@import "./assets/styles/main.css";
@import "./assets/styles/style.css";
</style>