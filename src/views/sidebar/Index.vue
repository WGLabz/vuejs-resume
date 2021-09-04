<template>
  <aside id="colorlib-aside" role="complementary" class="border">
    <div class="text-center">
      <v-avatar size="156">
        <img :src="userImage || 'images/user_image.png'" alt="User" />
      </v-avatar>
      <h1 id="colorlib-logo" class="mt-4 text-center">
        {{ userData.name || "A Dummy Name" }}
      </h1>
      <span class="position mb-4">{{
        userData.iama || "I am a Developer"
      }}</span>
    </div>
    <v-divider />
    <nav id="colorlib-main-menu" role="navigation" class="mt-4">
      <ul>
        <li>
          <router-link :to="{ name: 'home', hash: '#about' }"
            >About</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'home', hash: '#skills' }"
            >Skills</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'home', hash: '#projects' }"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'home', hash: '#education' }"
            >Education</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'home', hash: '#certifications' }"
            >Courses and Certifications</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'home', hash: '#experience' }"
            >Work Experience</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'home', hash: '#publications' }"
            >Research Publications</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'home', hash: '#contacts' }"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>
    <v-divider class="mb-2" />
    <template v-if="hasSocialMedia">
      <div class="text-center">
        <v-tooltip top v-for="(site, index) in userData.social" :key="index">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :color="site.color || 'black'"
              icon
              :href="site.url"
              target="_blank"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                {{ site.icon.indexOf("mdi") > -1 ? icon : `mdi-${site.icon}` }}
              </v-icon>
            </v-btn>
          </template>
          <span>{{ `Catch me on ${site.name}` }}</span>
        </v-tooltip>
      </div>
      <v-divider class="mt-2" />
    </template>
    <div class="colorlib-footer">
      <p>
        <small
          >&copy;
          <a
            href="https://wglabz.in"
            class="text-decoration-none"
            target="_blank"
            >WGLabz</a
          >
          All rights reserved. Made from
          <a
            href="https://colorlib.com/wp/template/elen/"
            target="_blank"
            class="text-decoration-none"
            >Colorlib</a
          >
        </small>
      </p>
    </div>
  </aside>
</template>

<script>
import file from "../../firebase/file";
export default {
  name: "Sidebar",
  props: {
    userData: {},
  },
  watch: {
    userData: function (val) {
      this.hasSocialMedia = val.social && val.social.length > 0 ? true : false;
      if (val.avatar) {
        file
          .getFile(val.avatar)
          .then((url) => {
            this.userImage = url;
          })
          .catch((error) => {
            console.error("Error loading user image " + error);
          });
      }
    },
  },
  data() {
    return {
      hasSocialMedia: Boolean,
      userImage: "",
    };
  },
};
</script>

<style></style>
