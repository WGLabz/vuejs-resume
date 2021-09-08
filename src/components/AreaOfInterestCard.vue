<template>
  <v-card class="mx-auto" outlined>
    <v-list-item two-line>
      <v-list-item-content dense>
        <div class="text-overline mb-4">{{ tech.name }}</div>
        <v-list-item-subtitle>
          <small> {{ tech.desc }}</small>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar tile size="55">
        <v-img :src="image" contain> </v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
import file from "../firebase/file";
export default {
  name: "AreaOfInterest",
  data() {
    return { image: "images/tech_image_ph.jpg" };
  },
  props: {
    tech: {},
  },
  mounted() {
    if (this.tech.image) {
      file
        .getFile(this.tech.image)
        .then((url) => {
          this.image = url;
        })
        .catch(() => {
          this.image = "images/tech_image_ph.jpg";
          console.warn("Error loading AreaOfInteres image ");
        });
    }
  },
};
</script>