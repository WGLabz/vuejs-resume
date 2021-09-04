<template>
  <v-card outlined class="mx-auto mb-4">
    <v-card-title>
      <v-image></v-image>
      <span>{{ data.institute }}, {{ data.location }} </span>
    </v-card-title>
    <v-card-subtitle>
      {{ data.degree }} in {{ data.specialization }},
    </v-card-subtitle>
    <v-card-text class="pb-0">
      <v-btn small outlined disabled class="mr-2">
        {{ data.from.seconds | moment("YYYY") }} -
        {{ data.to.seconds | moment("YYYY") }}
      </v-btn>
      <v-btn small outlined disabled
        >CGPA/%:
        <strong>{{ data.gpa }}</strong>
      </v-btn>
    </v-card-text>
    <v-card-text class="pb-0">{{ data.desc }}</v-card-text>
    <v-card-text class="pt-0 pl-0">
      <v-list three-line>
        <template v-for="(item, index) in data.bulletpoints">
          <v-subheader :key="index">
            <slot>
              <v-icon small class="pr-1"> mdi-trophy </v-icon>
              <span> {{ item.text }}</span>
            </slot>
          </v-subheader>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
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
};
</script>