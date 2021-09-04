<template>
  <v-card outlined>
    <div class="d-flex">
      <div class="d-flex" style="align-items: center">
        <v-avatar class="ma-3" size="100" tile>
          <v-img :src="certificationImage"></v-img>
        </v-avatar>
      </div>
      <div>
        <v-card-title class="text-truncate">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <p v-bind="attrs" v-on="on">{{ title }}</p>
            </template>
            <span>{{ certifcation.name }}</span>
          </v-tooltip>
        </v-card-title>
        <v-card-subtitle>{{ certifcation.certifiedby }}</v-card-subtitle>
        <v-card-text class="pb-0"
          ><small>{{ content }}</small>
        </v-card-text>
        <v-card-text class="pb-0">
          <small v-if="certifcation.pdf" class="mx-2">
            <a :href="pdfFileLink">Download PDF</a>
          </small>
          <small v-if="certifcation.link">
            <a :href="certifcation.link">Official Website</a>
          </small>
        </v-card-text>
        <v-card-actions>
          <v-btn dense small outlined disabled class="ml-2">
            <v-icon small>mdi-calendar</v-icon>
            {{ certifcation.certifiedon.seconds | moment("DD-MM-YYYY") }}
          </v-btn>
          <v-btn
            dense
            small
            outlined
            plain
            disabled
            v-if="certifcation.validtill"
          >
            <v-icon small>mdi-calendar</v-icon>
            {{ certifcation.validtill.seconds | moment("DD-MM-YYYY") }}
          </v-btn>
          <v-btn dense small outlined plain disabled v-else> No Expiry </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
import file from "../firebase/file";
export default {
  name: "CertificationCard",
  props: {
    certifcation: {},
  },
  data() {
    return {
      certificationImage: "images/certificate_ph.png",
      pdfFileLink: "",
      title: "",
      content: "",
    };
  },
  mounted() {
    let val = this.certifcation;
    if (val.image) {
      file
        .getFile(val.image)
        .then((url) => {
          this.certificationImage = url;
        })
        .catch(() => {
          this.certificationImage = "images/certificate_ph.png";
          console.warn("Error loading user image ");
        });
    }

    if (val.pdf) {
      file
        .getFile(val.pdf)
        .then((url) => {
          this.pdfFileLink = url;
        })
        .catch(() => {
          this.certifcation.pdf = "";
          console.warn("Error loading pdf file ");
        });
    }
    this.title =
      this.certifcation.name.length > 25
        ? this.certifcation.name.substring(0, 20) + "...."
        : this.certifcation.name;
    this.content =
      this.certifcation.desc > 60
        ? this.certifcation.desc.substring(0, 55) + "...."
        : this.certifcation.desc;
  },
};
</script>