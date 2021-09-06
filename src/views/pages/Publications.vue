<template>
  <div class="parent-container" id="publications" style="margin-bottom: 140px">
    <module-header title="Research Work" header="Publications" />
    <div v-for="(publication, index) in data" :key="index">
      <publication-card :publication="publication" />
    </div>
  </div>
</template>
<script>
import ModuleHeader from "../../components/ModuleHeader.vue";
import PublicationCard from "../../components/PublicationCard.vue";
export default {
  components: {
    PublicationCard,
    ModuleHeader,
  },
  props: {
    data: [],
  },
};
</script>