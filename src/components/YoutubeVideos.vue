<template>
  <v-timeline-item right dense>
    <template v-slot:icon>
      <v-avatar>
        <img :src="image" alt="Project Logo" />
      </v-avatar>
    </template>
    <v-card>
      <v-card-title>
        {{ data.title }}
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
      <v-card-text>{{ data.desc }}</v-card-text>
      <v-container>
        <v-row no-gutters>
          <v-col
            :key="i"
            cols="12"
            sm="2"
            md="2"
            v-for="(video, i) in data.gallery"
          >
            <y-t-video-card :video="video" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-timeline-item>
</template>
<script>
import file from "../firebase/file";
import moment from "moment";
import YTVideoCard from "./YTVideoCard.vue";

export default {
  components: { YTVideoCard },
  data() {
    return {
      image: "images/logo_ph.jpg",
    };
  },
  props: {
    data: {},
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
  mounted() {
    if (this.data.image) {
      file
        .getFile(this.data.image)
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