<template>
  <div class="parent-container" id="contacts">
    <module-header title="Contact" header="Get in touch" />
    <div class="row">
      <div class="col-md-5">
        <v-container class="mr-0">
          <v-row v-if="data.email">
            <v-col cols="2" class="px-0"> <v-icon>mdi-email</v-icon></v-col>
            <v-col>
              <p>
                <a
                  :href="`mailto:${data.email}?Subject=Mail%20from%20portfolio%20website`"
                  target="_top"
                  >{{ data.email }}
                </a>
              </p>
            </v-col>
          </v-row>
          <v-row v-if="data.phone">
            <v-col cols="2" class="px-0"> <v-icon>mdi-phone</v-icon></v-col>
            <v-col>
              {{ data.phone }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2" class="px-0" v-if="Object.keys(data).length > 2">
              <v-icon>mdi-crosshairs-gps </v-icon>
            </v-col>
            <v-col>
              <p v-if="data.house">{{ data.house }}</p>
              <p v-if="data.street">{{ data.street }}</p>
              <p v-if="data.city || data.state">
                {{ data.city }}<span v-if="data.state">, </span>{{ data.state }}
              </p>
              <p v-if="data.country || data.pincode" class="text-uppercase">
                {{ data.country }}<span v-if="data.pincode">-</span
                >{{ data.pincode }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="col-md-7 pb-8">
        <v-card :href="data.map_link" target="_blank">
          <v-img :src="image" />
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import file from "../../firebase/file";
import ModuleHeader from "../../components/ModuleHeader.vue";
export default {
  name: "Contact",
  props: { data: {} },
  data() {
    return {
      image: "images/map-ph.png",
    };
  },
  components: {
    ModuleHeader,
  },
  watch: {
    data: function (val) {
      if (val.map) {
        file
          .getFile(val.map)
          .then((url) => {
            this.image = url;
          })
          .catch(() => {
            this.image = "images/map-ph.png";
            console.warn("Error loading project logo image ");
          });
      }
    },
  },
};
</script>