<template>
  <section class="colorlib-about" id="about">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div class="col-md-12">
          <div class="about-desc">
            <span class="heading-meta">About Me</span>
            <h2 class="colorlib-heading" style="display: inline">Who Am I?</h2>
            <p style="text-align: justify" class="mt-6">
              <strong>
                Hey I am
                {{
                  (userData.name && userData.name.split(" ")[0]) || "someone"
                }},
              </strong>
              {{ userData.about }}
              <span v-if="resumeURL !== ''">
                You can download my CV from here
                <v-btn icon small color="blue" :href="resumeURL">
                  <v-icon small> mdi-download </v-icon>
                </v-btn>
              </span>
            </p>
            <p>Some of the areas I havce worked on and love to work are,</p>
          </div>
        </div>
      </div>
      <v-row>
        <v-col
          sm="4"
          v-for="(tech, index) in userData.areaofinterest"
          :key="index"
        >
          <v-card class="mx-auto" outlined>
            <v-list-item two-line>
              <v-list-item-content dense>
                <div class="text-overline mb-4">{{ tech.name }}</div>
                <v-list-item-subtitle>
                  <small> {{ tech.desc }}</small>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar tile size="55">
                <v-img :src="tech.image || 'images/tech_image_ph.jpg'"></v-img
              ></v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import file from "../firebase/file";
export default {
  name: "Introduction",
  data() {
    return { resumeURL: "" };
  },
  props: {
    userData: {},
  },
  watch: {
    userData: function (val) {
      console.log(val);
      if (val.resume_file) {
        file
          .getFile(val.resume_file)
          .then((url) => {
            this.resumeURL = url;
          })
          .catch((error) => {
            console.error("Failed to load resume file URL " + error);
          });
      }
      this.userData.areaofinterest.map(async (tech) => {
        if (tech.icon) {
          tech.image = await file.getFile(tech.icon);
        }
      });
    },
  },
};
</script>

<style>
</style>