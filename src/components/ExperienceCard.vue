<template>
  <v-timeline-item color="pink" small>
    <v-card elevation="2" class="mx-auto mb-2">
      <v-card-title>{{ data.org }} </v-card-title>
      <v-card-text class="pb-0">
        <a-timeline class="pl-0">
          <a-timeline-item
            :color="color"
            v-for="(designation, index) in data.designations"
            :key="index"
          >
            {{ designation.position }}, {{ designation.from }} -
            {{ designation.to }}
            <p>{{ designation.desc }}</p>
            <template v-for="(item, index) in designation.bulletpoints">
              <v-subheader :key="index">
                <slot>
                  <v-icon small class="pr-1"> mdi-trophy </v-icon>
                  <span> {{ item.text }}</span>
                </slot>
              </v-subheader>
            </template>
          </a-timeline-item>
        </a-timeline>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import utils from "../utils";
export default {
  name: "ExperienceCard",
  props: {
    data: {},
  },
  components: {},
  computed: {
    color: function () {
      return utils.generateRandomDarkColor();
    },
  },
};
</script>

<style>
</style>