<template>
  <section class="colorlib-services" id="certifications">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div
          class="col-md-12 col-md-offset-3 col-md-pull-3 animate-box"
          data-animate-effect="fadeInLeft"
        >
          <span class="heading-meta">Certifications</span>
          <h2 class="colorlib-heading">Certifications and Courses</h2>
        </div>
      </div>
      <div class="row row-pt-md">
        <certification-card
          v-for="(certifcation, index) in data"
          :key="index"
          :data="certifcation"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CertificationCard from "../../components/CertificationCard.vue";
export default {
  name: "Certifications",
  components: {
    CertificationCard,
  },
  props: {
    data: [],
  },
  watch: {
    data: function (val) {
      console.log("Certs " + val);
    },
  },
};
</script>