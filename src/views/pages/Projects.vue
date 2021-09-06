<template>
  <div style="margin-bottom: 140px">
    <div class="parent-container" id="experience">
      <module-header title="What Matters" header="Project" />
    </div>
    <div class="px-0 mx-0">
      <v-timeline align-top dense>
        <project-card
          :project="project"
          v-for="(project, index) in projectsData"
          :key="index"
        />
      </v-timeline>
    </div>
  </div>
</template>

<script>
import ModuleHeader from "../../components/ModuleHeader.vue";
import projectCard from "../../components/ProjectCard.vue";
export default {
  name: "Projects",
  components: { projectCard, ModuleHeader },
  props: { projectsData: [] },
};
</script>