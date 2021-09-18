<template>
  <v-timeline-item small>
    <template v-slot:icon>
      <v-avatar>
        <img :src="image" alt="Org Image" />
      </v-avatar>
    </template>
    <v-card class="mx-auto mb-2">
      <v-card-title>
        {{ data.org }}
      </v-card-title>
      <v-card-subtitle>
        <span v-if="data.from" small>
          {{ data.from.seconds | moment("MMM YYYY") }} -
          {{ getTimeTo(data) }}
        </span>

        <span v-if="data.link">
          <v-icon small>mdi-circle-small</v-icon>
          <v-btn small plain :href="data.link" class="px-0" target="_blank">
            Website
          </v-btn>
        </span>
      </v-card-subtitle>
      <v-card-text class="pb-0">
        <a-timeline class="pl-0">
          <a-timeline-item
            :color="color"
            v-for="(designation, index) in data.designations"
            :key="index"
          >
            <strong>{{ designation.position }}</strong>
            <p>
              <span v-if="designation.jobtype">
                {{ designation.jobtype }}
              </span>
              <span v-if="designation.from">
                <v-icon small class="mx-0">mdi-circle-small</v-icon>
                {{ designation.from.seconds | moment("MMM YYYY") }} -
                {{ getTimeTo(designation) }}
              </span>
              <span v-if="designation.location">
                <v-icon small>mdi-circle-small</v-icon>
                {{ designation.location }}
              </span>
            </p>
            <p>{{ designation.desc }}</p>
          </a-timeline-item>
        </a-timeline>
      </v-card-text>
      <v-card-text class="mt-0 pt-0">
        <span v-for="(item, index) in data.bulletpoints" :key="index">
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
import utils from "../utils";
import file from "../firebase/file";
import moment from "moment";
export default {
  name: "ExperienceCard",
  props: {
    data: {},
  },
  data() {
    return {
      image: "images/logo_ph.jpg",
      timeto: "",
    };
  },
  methods: {
    getTimeTo(val) {
      return val.to && val.to.seconds
        ? moment(val.to.seconds * 1000).format("MMM YYYY")
        : "Now";
    },
    icon(item) {
      return item ? "mdi-" + item : "mdi-diameter-variant";
    },
  },
  components: {},
  computed: {
    color: function () {
      return utils.generateRandomDarkColor();
    },
  },
  mounted() {
    this.data.designations.sort((x, y) => {
      return y.from.seconds - x.from.seconds;
    });
    if (this.data.image) {
      file
        .getFile(this.data.image)
        .then((url) => {
          this.image = url;
        })
        .catch(() => {
          this.image = "images/logo_ph.jpg";
          console.warn("Error loading experience logo image ");
        });
    }
  },
};
</script>