<template>
  <v-card elevation="2" class="md-4 mb-2 ml-3">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-avatar class="ma-3" size="125" tile>
        <v-img :src="data.image || 'images/certificate_ph.png'"></v-img>
      </v-avatar>
      <div>
        <v-card-title v-text="data.name" />
        <v-card-subtitle>{{ data.certifiedby }}</v-card-subtitle>
        <v-card-text class="pb-0">{{ data.desc }} </v-card-text>
        <v-card-text class="pb-0">
          <small><a :href="data.pdf">Download PDF</a></small>
        </v-card-text>
        <v-card-actions>
          <v-btn dense small outlined disabled class="ml-2">
            <v-icon small>mdi-calendar</v-icon>
            {{ data.certifiedon.seconds | moment("DD-MM-YYYY") }}
          </v-btn>
          <v-btn dense small outlined plain disabled>
            <v-icon small>mdi-calendar</v-icon>
            {{ data.validtill.seconds | moment("DD-MM-YYYY") }}
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CertificationCard",
  props: {
    data: {},
  },
};
</script>