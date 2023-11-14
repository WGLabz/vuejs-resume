<template>
  <div class="pb-2">
    <div class="pb-2">
      <h4 v-if="hasHeader">{{ tech.name || "Dummy Technology Type" }}</h4>
    </div>
    <div class="d-flex justify-content-start flex-wrap">
      <div v-for="(technology, ii) in tech.tech" :key="ii" class="mr-1 mb-1">
        <!-- <v-btn
          type="button"
          class="ml-0"
          small
          dark
          :color="color()"
          :href="technology.link"
          target="_blank"
          depressed
          tile
          v-if="technology.name"
        > -->
          <!-- <v-icon small class="pr-2">{{ generateIcon(technology) }}</v-icon> -->
          <a-badge :count="technology.name" :number-style="{ backgroundColor: color() }" />
          <!-- {{ technology.name }} -->
        <!-- </v-btn> -->
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../utils";
export default {
  name: "TechnologyStacks",
  props: {
    tech: {},
    hasHeader: {
      default: true,
    },
  },
  methods: {
    generateIcon(tech) {
      return tech.icon ? "mdi-" + tech.icon : "mdi-minus-box";
    },

    color() {
      return utils.generateRandomDarkColor();
    },
  },
};
</script>