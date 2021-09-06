<template>
  <div class="parent-container" id="skills" style="padding-bottom: 140px">
    <module-header title="My Speciality" header="My Skills" />
    <div class="row">
      <v-col class="col-md-12">
        <p style="text-align: justify">
          {{ skillsOverview.desc }}
        </p>
      </v-col>
    </div>
    <!-- primary skills or domain -->

    <div class="row d-flex justify-content-start flex-wrap mb-8">
      <skill-with-progress-bar
        v-for="(skill, index) in skillsOverview.primaryskills"
        :key="index"
        :skill="skill"
      />
    </div>
    <!-- Technology Stacks -->
    <div class="d-flex justify-content-start flex-wrap">
      <technology-stacks
        :tech="tech"
        v-for="tech in techStacks"
        :key="tech.name"
      />
    </div>
  </div>
</template>

<script>
import ModuleHeader from "../../components/ModuleHeader.vue";
import SkillWithProgressBar from "../../components/SkillWithProgressBar.vue";
import TechnologyStacks from "../../components/TechnologyStacks";
export default {
  components: { SkillWithProgressBar, TechnologyStacks, ModuleHeader },
  name: "Skills",
  props: {
    skillsOverview: {},
    userData: {},
  },
  computed: {
    techStacks: function () {
      return this.$store.getters.getTechStacks;
    },
  },
};
</script>