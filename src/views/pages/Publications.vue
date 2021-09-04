<template>
  <section class="colorlib-services" id="publications">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div
          class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
          data-animate-effect="fadeInLeft"
        >
          <span class="heading-meta">Research Work</span>
          <h2 class="colorlib-heading">Publications</h2>
        </div>
      </div>
      <div v-for="(publication, index) in data" :key="index">
        <publication-card :publication="publication" />
      </div>
    </div>
  </section>
</template>
<script>
import PublicationCard from "../../components/PublicationCard.vue";
export default {
  components: {
    PublicationCard,
  },
  props: {
    data: [],
  },
};
</script>