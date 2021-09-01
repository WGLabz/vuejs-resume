<template>
  <v-card elevation="2" class="md-6 mb-2">
    <v-card-title>
      <v-icon small v-if="data.image"></v-icon>
      <span class="text-h6 font-weight-light">{{ data.name }} </span>
    </v-card-title>
    <v-card-subtitle> {{ data.certifiedby }} </v-card-subtitle>
    <v-card-text class="pb-0">{{ data.desc }} </v-card-text>
    <v-card-text class="pb-0">
      <v-icon small>mdi-calendar</v-icon>
      Certified on : {{ data.certifiedon.seconds | moment("DD-MM-YYYY") }}
    </v-card-text>
    <v-card-text class="pt-0">
      <v-icon small>mdi-calendar</v-icon>
      Valid till : {{ data.validtill.seconds | moment("DD-MM-YYYY") }}
    </v-card-text>
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

<style>
</style>