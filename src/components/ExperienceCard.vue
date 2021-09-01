<template>
  <v-timeline-item color="pink" small>
    <v-card elevation="2" class="mx-auto mb-2">
      <v-card-title>{{ data.org }} </v-card-title>
      <v-card-text class="pb-0">
        <v-timeline align-top dense class="p-0 m-0">
          <v-timeline-item
            small
            v-for="(designation, index) in data.designations"
            :key="index"
            right
          >
            <v-card outlined>
              <v-card-title>{{ designation.position }} </v-card-title>
              <v-card-text> {{ designation.desc }}</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    data: {},
  },
};
</script>

<style>
</style>