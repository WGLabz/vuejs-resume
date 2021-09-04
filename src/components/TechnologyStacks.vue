<template>
  <div style="padding: 0px">
    <div class="col-md-12">
      <h6 v-if="hasHeader">{{ tech.name || "Dummy Technology Type" }}</h6>
    </div>
    <div>
      <v-tooltip top v-for="(technology, ii) in tech.tech" :key="ii">
        <template v-slot:activator="{ on, attrs }" v-if="technology.name" dense small>
          <v-btn
            type="button"
            class="ml-3"
            small
            dark
            :color="color()"
            :href="technology.link"
            target="_blank"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon small class="pr-2">{{ generateIcon(technology) }}</v-icon>
            {{ technology.name }}
          </v-btn>
        </template>
        <span v-if="technology.link">
          Learn more about {{ technology.name }}
        </span>
      </v-tooltip>
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