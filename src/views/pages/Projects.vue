<template>
  <section class="colorlib-experience" data-section="projects">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div
          class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
          data-animate-effect="fadeInLeft"
        >
          <span class="heading-meta">What Matters</span>
          <h2 class="colorlib-heading animate-box">Projects</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="timeline-centered">
            <article
              class="timeline-entry animate-box"
              data-animate-effect="fadeInLeft"
              v-for="(project, index) in projectsData"
              :key="index"
            >
              <project-card :project="project" />
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import projectCard from "../../components/ProjectCard.vue";
export default {
  name: "Projects",
  components: { projectCard },
  props: { projectsData: [] },
  watch: {
    projectsData: function (val) {
      console.log(val);
    },
  },
};
</script>

<style>
</style>