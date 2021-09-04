<template>
  <v-card elevation="2" class="mx-auto mb-2">
    <v-card-title>
      <v-icon small v-if="data.image"></v-icon>
      <span class="text-h6 font-weight-light"
        >{{ data.institute }},{{ data.location }}
      </span>
    </v-card-title>
    <v-card-subtitle>
      {{ data.degree }} in {{ data.specialization }}, CGPA/%:
      {{ data.gpa }}
    </v-card-subtitle>
    <v-card-text class="pb-0">{{ data.desc }}</v-card-text>
    <v-card-text class="pt-0">
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
export default {
  props: { data: {} },
};
</script>