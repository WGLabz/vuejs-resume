<template>
  <aside id="sidebar" role="complementary" class="border">
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
    <div style="text-align: center">
      <p>
        <small
          >&copy;
          <a
            href="https://wglabz.in"
            class="text-decoration-none"
            target="_blank"
            >WGLabz</a
          >
          All rights reserved.
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
<style scoped>
#sidebar {
  padding-top: 3em;
  padding-bottom: 40px;
  float: left;
  width: 300px;
  position: fixed;
  /* overflow-y: scroll;/ */
  z-index: 1001;
  background: #f2f3f7;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
@media screen and (max-width: 768px) {
  #sidebar {
    width: 300px;
    -moz-transform: translateX(-300px);
    -webkit-transform: translateX(-300px);
    -ms-transform: translateX(-300px);
    -o-transform: translateX(-300px);
    transform: translateX(-300px);
    padding-top: 4em;
  }
}
#sidebar .author-img {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 30px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}
#sidebar .position {
  display: block;
  margin-bottom: 2em;
  font-size: 12px;
  text-transform: uppercase;
}
#sidebar #colorlib-logo {
  text-align: right;
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 0.5em;
  display: block;
  width: 100%;
}
#sidebar #colorlib-logo a {
  display: block;
  text-align: center;
  color: #000;
  padding-right: 0.3em;
}
#sidebar #colorlib-main-menu {
  display: block;
  width: 100%;
}
#sidebar #colorlib-main-menu .collapse {
  display: block !important;
}
#sidebar #colorlib-main-menu ul {
  text-align: center;
  margin: 0;
  padding: 0;
}
@media screen and (max-width: 768px) {
  #sidebar #colorlib-main-menu ul {
    margin: 0 0 2em 0;
  }
}
#sidebar #colorlib-main-menu ul li {
  margin: 0 0 10px 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}
#sidebar #colorlib-main-menu ul li a {
  color: rgba(0, 0, 0, 0.7);
  text-decoration: none;
  position: relative;
  padding: 10px 0;
  font-family: "Quicksand", Arial, sans-serif;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
#sidebar #colorlib-main-menu ul li a:after {
  content: "";
  position: absolute;
  height: 1px;
  bottom: 7px;
  left: 0;
  right: 0;
  background-color: #2c98f0;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -ms-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
#sidebar #colorlib-main-menu ul li a:hover {
  text-decoration: none;
  color: black;
}
#sidebar #colorlib-main-menu ul li a:hover:after {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}
#sidebar #colorlib-main-menu ul li.active a {
  color: #2c98f0;
}
#sidebar #colorlib-main-menu ul li.active a:after {
  visibility: visible;
  -webkit-transform: scaleX(1);
  -moz-transform: scaleX(1);
  -ms-transform: scaleX(1);
  -o-transform: scaleX(1);
  transform: scaleX(1);
}
#sidebar .colorlib-footer {
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  padding: 0 20px;
  width: 100%;
}
@media screen and (max-width: 768px) {
  #sidebar .colorlib-footer {
    position: relative;
    bottom: 0;
  }
}
#sidebar .colorlib-footer span {
  display: block;
}
#sidebar .colorlib-footer ul {
  padding: 0;
  margin: 0;
}
#sidebar .colorlib-footer ul li {
  padding: 0;
  margin: 0;
  display: inline;
  list-style: none;
}
#sidebar .colorlib-footer ul li a {
  color: rgba(255, 255, 255, 0.3);
  padding: 4px;
}
#sidebar .colorlib-footer ul li a:hover,
#sidebar .colorlib-footer ul li a:active,
#sidebar .colorlib-footer ul li a:focus {
  text-decoration: none;
  outline: none;
  color: #2c98f0;
}
</style>