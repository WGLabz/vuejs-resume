<template>
  <div id="colorlib-page">
    <div class="container-wrap">
      <sidebar :user-data="userData" />
      <div id="colorlib-main">
        <introduction :user-data="userData" />
        <skills :user-data="userData" :skills-overview="skillsOverviewData" />
        <projects :projects-data="projectsData" />
        <education :data="educationData" />
        <certifications :data="certificationsData" />
        <experience :data="experienceData" />
        <publications :data="publicationsData" />
        <contact :data="contactDetails" />
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar/Index";
import introduction from "./pages/Introduction";
import skills from "./pages/Skills";
import Projects from "./pages/Projects.vue";
import Education from "./pages/Education.vue";
import Certifications from "./pages/Certifications.vue";
import Experience from "./pages/Experience.vue";
import Publications from "./pages/Publications.vue";
import Contact from "./pages/Contact.vue";

export default {
  name: "Container",
  components: {
    sidebar,
    introduction,
    skills,
    Projects,
    Education,
    Certifications,
    Experience,
    Publications,
    Contact,
  },
  computed: {
    projectsData: function () {
      return this.$store.getters.getProjectsData;
    },
    userData: function () {
      return this.$store.getters.getUserMetaData;
    },
    skillsOverviewData: function () {
      return this.$store.getters.getSkills;
    },
    educationData: function () {
      return this.$store.getters.getEducationData;
    },
    certificationsData: function () {
      return this.$store.getters.getCertificationsData;
    },
    experienceData: function () {
      return this.$store.getters.getExperienceData;
    },
    publicationsData: function () {
      return this.$store.getters.getPublicationsData;
    },
    contactDetails: function () {
      return this.$store.getters.getContactDetails;
    },
  },
};
</script>

<style></style>
