<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
    :href="video.link"
    target="_blank"
  >
    <v-hover v-slot="{ hover }">
      <v-img height="60" :src="image">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal"
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
    <div class="mx-1">
      <small>{{ video.title }}</small>
    </div>
  </v-card>
</template>

<script>
import file from "../firebase/file";
export default {
  data() {
    return {
      image: "images/video_ph.jpg",
    };
  },
  props: {
    video: {},
  },

  mounted() {
    if (this.video.thumbnail) {
      file
        .getFile(this.video.thumbnail)
        .then((url) => {
          this.image = url;
        })
        .catch(() => {
          this.image = "images/video_ph.jpg";
          console.warn("Error loading video thumbnail image ");
        });
    }
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