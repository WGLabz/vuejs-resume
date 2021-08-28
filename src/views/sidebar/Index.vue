<template>
  <aside id="colorlib-aside" role="complementary" class="border">
    <div class="text-center">
      <div
        class="author-img"
        style="background-image: url('images/bikash.jpg')"
      ></div>
      <h1 id="colorlib-logo">
        <a href="index.html">{{ userData.name || "A Dummy Name" }}</a>
      </h1>
      <span class="position"
        ><a href="#">{{ userData.iama || "I am a Developer" }}</a></span
      >
    </div>
    <nav id="colorlib-main-menu" role="navigation" class="navbar">
      <div id="navbar" class="collapse">
        <ul>
          <!-- <li class="active"><a href="#" data-nav-section="home">Home</a></li> -->
          <li><a href="#" data-nav-section="about">About</a></li>
          <li><a href="#" data-nav-section="skills">Skills</a></li>
          <li><a href="#" data-nav-section="projects">Projects</a></li>
          <li><a href="#" data-nav-section="articles">Articles</a></li>
          <li><a href="#" data-nav-section="education">Education</a></li>
          <li>
            <a href="#" data-nav-section="certifications"
              >Courses and Certifications</a
            >
          </li>
          <li><a href="#" data-nav-section="work">Work Experience</a></li>
          <li>
            <a href="#" data-nav-section="publications"
              >Research Publications</a
            >
          </li>
          <li><a href="#" data-nav-section="contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <div class="colorlib-footer">
      <a href="http://www.facebook.com/oksbwn"
        ><i class="fa fa-facebook" style="font-size: 20px"></i
      ></a>
      <a href="#"><i class="fa" style="font-size: 20px"></i></a>
      <a href="http://www.twitter.com/geekybikash"
        ><i class="fa fa-twitter" style="font-size: 20px"></i
      ></a>
      <a href="#"><i class="fa" style="font-size: 20px"></i></a>
      <a href="https://www.instagram.com/bikashp_wg/"
        ><i class="fa fa-instagram" style="font-size: 20px"></i
      ></a>
      <a href="#"><i class="fa" style="font-size: 20px"></i></a>
      <a href="http://www.linkedin.com/in/oksbwn"
        ><i class="fa fa-linkedin" style="font-size: 20px"></i
      ></a>
      <a href="#"><i class="fa" style="font-size: 20px"></i></a>
      <a href="https://github.com/bikashnpanda"
        ><i class="fa fa-github" style="font-size: 20px"></i
      ></a>
      <p></p>
      <p></p>
      <p>
        <small>&copy; <a href="https://wglabz.in">WGLabz</a> Copyright</small>
        <!-- <script>document.write(new Date().getFullYear());</script>  -->
        All rights reserved. Made with
        <i class="icon-heart" aria-hidden="true"></i> by
        <a href="https://colorlib.com" target="_blank">Colorlib</a>
      </p>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  mounted() {
    this.userData = this.$store.getters.getUserMetaData;
  },
  data() {
    return {
      userData: {},
    };
  },
};
</script>

<style></style>
