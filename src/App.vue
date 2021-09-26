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
    this.$store.dispatch("setTechStacks");
    this.$store.dispatch("setProjectsData");
    this.$store.dispatch("setEducationData");
    this.$store.dispatch("setCertificationsData");
    this.$store.dispatch("setPublicationsData");
    this.$store.dispatch("setExperienceData");
    this.$store.dispatch("setContactDetails");
    this.$store.dispatch("setPersonalProjects");
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
@media screen and (min-width: 600px) {
  .parent-container {
    margin-left: 40px;
  }
}
</style>