<template>
  <v-timeline-item small>
    <template v-slot:icon>
      <v-avatar>
        <img :src="image" alt="Project Logo"/>
      </v-avatar>
    </template>
    <v-card class="mx-auto mb-2">
      <v-card-title>
        <v-icon small class="ml-1 pr-0" v-if="project.ispinned">mdi-pin</v-icon>
        {{ project.name }}
      </v-card-title>
      <v-card-subtitle>
        <span>
          {{ project.from.seconds | moment("MMM YYYY") }} -
          <span v-if="project.to">{{
            project.to.seconds | moment("MMM YYYY")
          }}</span>
          <span v-else>Now</span>
        </span>
      </v-card-subtitle>
      <v-card-text>
        {{ project.client }}
      </v-card-text>
      <v-card-text class="mt-0 pt-0">
        <p style="text-align: justify">
          {{ project.desc }}
        </p>
      </v-card-text>
      <v-card-text class="mt-0 pt-0 ml-0">
        <technology-stacks :tech="tech" :hasHeader="false" />
      </v-card-text>
      <v-card-text class="mt-0 pt-0">
        <span v-for="(item, index) in project.bulletpoints" :key="index">
          <p class="mb-0">
            <v-icon small class="pr-1">
              {{ icon(item.icon) }}
            </v-icon>
            {{ item.text }}
          </p>
        </span>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import file from "../firebase/file";
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
  methods: {
    icon(item) {
      return item ? "mdi-" + item : "mdi-diameter-variant";
    },
  },
  mounted() {
    if (this.project.image) {
      file
        .getFile(this.project.image)
        .then((url) => {
          this.image = url;
        })
        .catch(() => {
          this.image = "images/logo_ph.jpg";
          console.warn("Error loading project logo image ");
        });
    }
  },
};
</script>