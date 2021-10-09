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
      <v-card-text class="pb-0" v-if="data.gallery_type === 'github'">
        <a-timeline class="pl-0">
          <a-timeline-item
            class="pb-1"
            v-for="(commit, index) in data.commits"
            :key="index"
            >{{ commit.message }}
            <small>
              by
              <a :href="commit.user_link" target="_blank">{{ commit.id }} </a>
              on {{ commit.date | moment("DD/MM/YYYY") }}</small
            >
          </a-timeline-item>
        </a-timeline>
      </v-card-text>
      <v-container v-else>
        <v-row no-gutters>
          <v-col
            :key="i"
            cols="12"
            class="pr-2"
            sm="2"
            md="2"
            v-for="(video, i) in data.gallery"
          >
            <y-t-video-card
              :video="video"
              v-if="data.gallery_type === 'video'"
            />
            <image-card :video="video" v-if="data.gallery_type === 'image'" />
          </v-col>
        </v-row>
      </v-container>
      <v-card-text
        class="mt-2 pt-0 ml-0"
        v-if="data.tech && data.tech.length > 0"
      >
        <technology-stacks :tech="data" :hasHeader="false" />
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>
<script>
import file from "../firebase/file";
import moment from "moment";
import YTVideoCard from "./YTVideoCard.vue";
import ImageCard from "./ImageCard.vue";
import TechnologyStacks from "./TechnologyStacks.vue";

export default {
  components: { YTVideoCard, ImageCard, TechnologyStacks },
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