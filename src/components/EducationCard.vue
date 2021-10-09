<template>
  <v-card outlined class="mx-auto mb-4">
    <v-card-title>
      <v-img
        lazy-src="images/logo_ph.jpg"
        max-height="25"
        max-width="30"
        contain
        :src="image"
        class="mr-2"
      ></v-img>
      <span
        >{{ data.institute }}
        <span v-if="data.location_">, {{ data.location_ }} </span></span
      >
    </v-card-title>
    <v-card-subtitle>
      {{ data.degree }} in {{ data.specialization }}
    </v-card-subtitle>
    <v-card-text class="pb-0">
      <v-btn small outlined disabled class="mr-2" v-if="data.from && data.to">
        {{ data.from.seconds | moment("YYYY") }} -
        {{ data.to.seconds | moment("YYYY") }}
      </v-btn>
      <v-btn small outlined disabled v-if="data.gpa"
        >CGPA/%:
        <strong>{{ data.gpa }}</strong>
      </v-btn>
    </v-card-text>
    <v-card-text class="pb-0">{{ data.desc }}</v-card-text>
    <v-card-text class="mt-4">
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
</template>

<script>
import moment from "moment";
import file from "../firebase/file";
export default {
  props: { data: {} },
  data() {
    return {
      image: "images/logo_ph.jpg",
    };
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
          console.warn("Error loading education logo image ");
        });
    }
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
};
</script>