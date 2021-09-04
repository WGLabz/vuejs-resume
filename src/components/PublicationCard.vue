<template>
  <div class="row row-pt-md">
    <div class="col-md-12 text-center animate-box">
      <template>
        <a-card
          class=""
          :title="publication.papername"
          style="text-align: left"
          size="small"
          type="inner"
        >
          <div class="d-flex flex-no-wrap">
            <v-avatar class="ma-1" size="125" tile>
              <v-img :src="publication.image || 'images/paper_ph.png'"></v-img>
            </v-avatar>
            <div>
              {{ publication.desc }}
            </div>
          </div>
          <div slot="extra">
            <a :href="publication.link" target="_blank">
              <v-btn class="px-2" icon small>
                <v-icon> mdi-link </v-icon>
              </v-btn>
            </a>

            <a :href="publication.pdf" target="_blank">
              <v-btn class="p-4" icon small>
                <v-icon class="mx-2"> mdi-file-document </v-icon>
              </v-btn>
            </a>
          </div>
        </a-card>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicationCard",
  props: {
    publication: {},
  },
};
</script>

<style>
</style>