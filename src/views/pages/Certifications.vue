<template>
  <div
    id="certifications"
    class="parent-container"
    style="margin-bottom: 140px"
  >
    <module-header title="Certifications and Courses" header="Certifications" />
    <div class="row d-flex justify-content-start flex-wrap mb-8">
      <div class="col-md-6" v-for="(certifcation, index) in data" :key="index">
        <certification-card
          :certifcation="certifcation"
          v-if="certifcation.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ModuleHeader from "../../components/ModuleHeader.vue";
import CertificationCard from "../../components/CertificationCard.vue";
export default {
  name: "Certifications",
  components: {
    CertificationCard,
    ModuleHeader,
  },
  props: {
    data: [],
  },
};
</script>