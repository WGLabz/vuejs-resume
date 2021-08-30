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
        <v-img :src="tech.image || 'images/tech_image_ph.jpg'"></v-img
      ></v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "AreaOfInterest",
  props: {
    tech: {},
  },
};
</script>