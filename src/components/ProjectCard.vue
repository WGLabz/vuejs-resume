<template>
  <v-timeline-item small>
    <template v-slot:icon>
      <v-avatar>
        <img :src="image" />
      </v-avatar>
    </template>
    <v-card class="mx-auto mb-2">
      <v-card-title>
        {{ project.name }}
      </v-card-title>
      <span>
        {{ project.from.seconds | moment("MMM YYYY") }} -
        <span v-if="project.to">{{
          project.to.seconds | moment("MMM YYYY")
        }}</span>
        <span v-else>Now</span>
      </span>
      <p><Strong>Client: </Strong>{{ project.client }}</p>
      <p style="text-align: justify">
        {{ project.desc }}
      </p>
      <technology-stacks :tech="tech" :hasHeader="false" />
    </v-card>
  </v-timeline-item>
</template>

<script>
import TechnologyStacks from "./TechnologyStacks.vue";
export default {
  name: "ProjectCard",
  props: {
    project: {},
  },
  data() {
    return {
      image: "images/logo_ph.jpg",
    };
  },
  computed: {
    tech: function () {
      return { tech: this.project.tech };
    },
  },
  components: {
    TechnologyStacks,
  },
};
</script>