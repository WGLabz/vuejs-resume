<template>
  <v-timeline-item color="pink" small>
    <v-card elevation="2" class="mx-auto mb-2">
      <v-card-title>{{ data.org }} </v-card-title>
      <v-card-text class="pb-0">
        <a-timeline>
          <a-timeline-item color="green">
            Create a services site 2015-09-01
          </a-timeline-item>
          <a-timeline-item color="green">
            Create a services site 2015-09-01
          </a-timeline-item>
          <a-timeline-item color="red">
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </a-timeline-item>
          <a-timeline-item>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </a-timeline-item>
          <a-timeline-item color="gray">
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </a-timeline-item>
          <a-timeline-item color="gray">
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </a-timeline-item>
        </a-timeline>
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
  components: {},
};
</script>

<style>
</style>