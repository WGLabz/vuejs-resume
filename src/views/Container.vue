<template>
  <div class="page">
    <div class="wrapper">
      <sidebar :user-data="userData" />
      <div id="container">
        <introduction :user-data="userData" />
        <skills :user-data="userData" :skills-overview="skillsOverviewData" />
        <projects :projects-data="projectsData" />
        <education :data="educationData" />
        <certifications :data="certificationsData" />
        <experience :data="experienceData" />
        <publications :data="publicationsData" />
        <personal-projects :data="personalProjectsDetsils"/>
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
import PersonalProjects from "./pages/PersonalProjects.vue";

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
    PersonalProjects,
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
    personalProjectsDetsils: function(){
      return this.$store.getters.getPersonalProjectsData;
    }
  },
};
</script>

<style>
.page {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.wrapper {
  max-width: 1170px;
  margin: 0 auto;
}

#container {
  width: calc(100% - 300px);
  float: right;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
@media screen and (max-width: 768px) {
  #container {
    width: 100%;
    padding: 0 1em;
  }
}
</style>
