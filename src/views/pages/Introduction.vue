<template>
  <div
    id="about"
    style="margin-top: 10px; margin-bottom: 140px"
    class="parent-container"
  >
    <module-header title="WHO AM I?" header="About Me" class=""/>
    <div class="row mt-0">
      <div class="col-md-12">
        <div class="about-desc mt-0">
          <p style="text-align: justify">
            <strong>
              Hey I am
              {{ (userData.name && userData.name.split(" ")[0]) || "someone" }},
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
        <areaOfInterest :tech="tech" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ModuleHeader from "../../components/ModuleHeader.vue";
import file from "../../firebase/file";
import areaOfInterest from "../../components/AreaOfInterestCard";
export default {
  name: "Introduction",
  data() {
    return { resumeURL: "" };
  },
  props: {
    userData: {},
  },
  components: {
    areaOfInterest,
    ModuleHeader,
  },
  watch: {
    userData: function (val) {
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