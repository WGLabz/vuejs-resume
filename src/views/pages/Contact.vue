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
            <v-col cols="2" class="px-0">
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
      <div class="col-md-7 col-md-push-1">
        <!-- Some other contetn place holder -->
      </div>
    </div>
  </div>
</template>

<script>
import ModuleHeader from "../../components/ModuleHeader.vue";
export default {
  name: "Contact",
  props: { data: {} },
  components: {
    ModuleHeader,
  },
};
</script>