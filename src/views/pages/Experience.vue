<template>
  <section class="colorlib-experience" data-section="work">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">Experience</span>
          <h2 class="colorlib-heading animate-box">Work Experience</h2>
        </div>
      </div>
    </div>
    <v-timeline align-top dense class="p-0 m-0">
      <experience-card
        :data="experience"
        v-for="(experience, index) in data"
        :key="index"
      />
    </v-timeline>
  </section>
</template>

<script>
import ExperienceCard from "../../components/ExperienceCard.vue";
export default {
  name: "Experience",
  props: {
    data: [],
  },
  components: {
    ExperienceCard,
  },
};
</script>

<style>
</style>