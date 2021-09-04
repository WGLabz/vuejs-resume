<template>
  <section class="colorlib-contact" data-section="contact">
    <div class="colorlib-narrow-content">
      <div class="row">
        <div
          class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
          data-animate-effect="fadeInLeft"
        >
          <span class="heading-meta">Get in Touch</span>
          <h2 class="colorlib-heading">Contact</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div
            class="colorlib-feature colorlib-feature-sm animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div class="row">
              <div class="col col-2">
                <v-icon>mdi-email</v-icon>
              </div>
              <div class="col">
                <p>
                  <a
                    :href="`mailto:${data.email}?Subject=Mail%20from%20portfolio%20website`"
                    target="_top"
                    >{{ data.email }}</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div
            class="colorlib-feature colorlib-feature-sm animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div class="row">
              <div class="col col-2">
                <v-icon>mdi-phone</v-icon>
              </div>
              <div class="col">
                <p>{{ data.phone }}</p>
              </div>
            </div>
          </div>
          <div
            class="colorlib-feature colorlib-feature-sm animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div class="row">
              <div class="col col-2">
                <v-icon>mdi-crosshairs-gps </v-icon>
              </div>
              <div class="col">
                <p>{{ data.house }}</p>
                <p>{{ data.street }}</p>
                <p>{{ data.city }},{{ data.state }}</p>
                <p>{{ data.country }}-{{ data.pincode }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-md-push-1">
          <div class="row">
            <div
              class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
              data-animate-effect="fadeInRight"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  props: { data: {} },
};
</script>