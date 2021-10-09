<template>
  <div style="margin-bottom: 140px" id="personal">
    <div class="parent-container">
      <module-header title="The ME Time" header="Personal Projects" />
    </div>
    <div class="px-0 mx-0">
      <v-timeline align-top dense>
        <template v-for="(item, i) in data">
          <personal-project :key="i" :data="item" />
        </template>
      </v-timeline>
    </div>
  </div>
</template>

<script>
import ModuleHeader from "../../components/ModuleHeader.vue";
import PersonalProject from "../../components/PersonalProject.vue";
export default {
  name: "PersonalProjects",
  props: {
    data: [],
  },
  components: { ModuleHeader, PersonalProject },
};
</script>