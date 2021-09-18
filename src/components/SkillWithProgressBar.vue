<template>
  <v-col class="col-sm-6">
    <v-icon dense class="pb-1 pr-1">{{ icon }}</v-icon>
    <span>{{ skill.name }}</span>
    <v-progress-linear :value="skill.level" height="14" :color="color_"
      ><template v-slot:default="{ value }">
        <small style="color: white"> {{ value }}%</small>
      </template>
    </v-progress-linear>
  </v-col>
</template>

<script>
import utils from "../utils";
export default {
  name: "SkillWithProgressBar",
  props: {
    skill: {},
  },
  computed: {
    icon: function () {
      return this.skill.icon ? `mdi-${this.skill.icon}` : "mdi-chip";
    },
    color_: function () {
      return utils.generateRandomDarkColor();
    },
  },
};
</script>