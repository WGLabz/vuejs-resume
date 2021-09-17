<template>
  <v-timeline-item right dense>
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
      <v-container>
        <v-row>
          <v-col
            :key="i"
            cols="12"
            sm="12"
            md="2"
            v-for="(video, i) in data.videos"
          >
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
              <v-hover v-slot="{ hover }">
                <v-img
                  height="60"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="
                        d-flex
                        transition-fast-in-fast-out
                        darken-2
                        v-card--reveal
                      "
                    >
                      <img
                        class="center-block"
                        src="images/youtube.jpg"
                        height="30"
                        width="30"
                      />
                    </div> </v-expand-transition
                ></v-img>
              </v-hover>

              <small class="mx-1">Cafe Badilico</small>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-timeline-item>
</template>
<script>
import moment from "moment";

export default {
  setup() {},
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
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  height: 100%;
  background: #ffffff;
  position: absolute;
  width: 100%;
}
</style>