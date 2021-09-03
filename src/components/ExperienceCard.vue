<template>
  <v-timeline-item color="pink" small>
    <v-card elevation="2" class="mx-auto mb-2">
      <v-card-title>{{ data.org }} </v-card-title>
      <v-card-text class="pb-0"> </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    data: {},
  },
  components: {},
  data() {},
};
</script>

<style>
</style>