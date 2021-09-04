<template>
  <section class="colorlib-skills" data-section="skills" id="skills">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div
          class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
          data-animate-effect="fadeInLeft"
        >
          <span class="heading-meta">My Specialty</span>
          <h2 class="colorlib-heading animate-box">My Skills</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <p style="text-align: justify">
            {{ skillsOverview.desc }}
          </p>
        </div>
        <!-- primary skills or domain -->
        <skill-with-progress-bar
          v-for="(skill, index) in skillsOverview.primaryskills"
          :key="index"
          :skill="skill"
        />
        <div
          class="col-md-12 animate-box"
          data-animate-effect="fadeInLeft"
          style="margin-top: 10px; margin-bottom: 20px"
        >
          <p style="text-align: justify">
            I have worked on following techonologies or atleast I am aware of,
          </p>
        </div>
        <!-- Technology Stacks -->
        <technology-stacks
          :tech="tech"
          v-for="tech in techStacks"
          :key="tech.name"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SkillWithProgressBar from "../../components/SkillWithProgressBar.vue";
import TechnologyStacks from "../../components/TechnologyStacks";
export default {
  components: { SkillWithProgressBar, TechnologyStacks },
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