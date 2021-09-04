<template>
  <div class="parent-container" id="education">
    <module-header title="Education" header="Education" />
    <education-card
      v-for="(education, index) in data"
      :key="index"
      :data="education"
    />
  </div>
</template>

<script>
import ModuleHeader from "../../components/ModuleHeader.vue";
import EducationCard from "../../components/EducationCard.vue";
export default {
  name: "Education",
  components: {
    EducationCard,
    ModuleHeader,
  },
  props: {
    data: [],
  },
};
</script>
