<template>
  <div style="margin-bottom: 140px" id="experience">
    <div class="parent-container">
      <module-header title="Work Experience" header="Experience" />
    </div>
    <div class="px-0 mx-0">
      <v-timeline align-top dense>
        <experience-card
          :data="experience"
          v-for="(experience, index) in data"
          :key="index"
          class="pl-0 mr-0"
        />
      </v-timeline>
    </div>
  </div>
</template>

<script>
import ModuleHeader from "../../components/ModuleHeader.vue";
import ExperienceCard from "../../components/ExperienceCard.vue";

export default {
  name: "Experience",
  props: {
    data: [],
  },
  components: { ModuleHeader, ExperienceCard },
};
</script>