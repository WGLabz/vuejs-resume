<template>
  <v-card class="mb-8" outlined>
    <v-card-title>{{ publication.papername }}</v-card-title>
    <v-card-subtitle
      >{{ publication.event }}
      <span v-if="publication.date">
        <v-icon small class="mx-1">mdi-circle-small</v-icon
        >{{ publication.date.seconds | moment("MMM YYYY") }}</span
      >
    </v-card-subtitle>

    <v-row>
      <v-col cols="2" class="align-items-center">
        <v-avatar class="ma-4" size="125" tile>
          <v-img :src="image" contain></v-img>
        </v-avatar>
      </v-col>
      <v-col>
        <v-card-text> {{ publication.desc }}</v-card-text>
        <v-card-text>
          <v-btn
            outlined
            plain
            small
            :href="publication.link"
            target="_blank"
            v-if="publication.link"
            class="mx-2"
          >
            <v-icon class="mx-2" small> mdi-link </v-icon> Link
          </v-btn>

          <v-btn
            outlined
            plain
            small
            :href="publication.pdf"
            target="_blank"
            v-if="publication.pdf"
          >
            <v-icon class="mx-2" small> mdi-file-document </v-icon>
            PDF Download
          </v-btn>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import file from "../firebase/file";
export default {
  name: "PublicationCard",
  props: {
    publication: {},
  },
  data() {
    return { image: "images/paper_ph.png" };
  },
  mounted() {
    let val = this.publication;
    if (val.image) {
      file
        .getFile(val.image)
        .then((url) => {
          this.image = url;
        })
        .catch(() => {
          this.image = "images/certificate_ph.png";
          console.warn("Error loading user image ");
        });
    }
  },
};
</script>