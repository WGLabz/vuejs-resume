<template>
  <section class="colorlib-education" id="education">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div
          class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
          data-animate-effect="fadeInLeft"
        >
          <span class="heading-meta">Education</span>
          <h2 class="colorlib-heading animate-box">Education</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <div class="fancy-collapse-panel">
            <div
              class="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <education-card
                v-for="(education, index) in data"
                :key="index"
                :data="education"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EducationCard from "../../components/EducationCard.vue";
export default {
  name: "Education",
  components: {
    EducationCard,
  },
  props: {
    data: [],
  },
};
</script>
