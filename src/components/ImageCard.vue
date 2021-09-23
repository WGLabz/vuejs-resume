<template>
  <v-card class="px-2" max-width="374" :href="video.link" target="_blank" flat>
    <v-hover v-slot="{ hover }">
      <v-img height="60" :src="video.thumbnail || image">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal"
          >
            <img
              class="center-block"
              src="images/link.png"
              height="30"
              width="30"
            />
          </div> </v-expand-transition
      ></v-img>
    </v-hover>
    <div class="mx-1">
      <small>{{ video.title }}</small>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      image: "images/video_ph.jpg",
    };
  },
  props: {
    video: {},
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