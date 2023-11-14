<template>
    <div >
      <span class="heading-meta">{{ title }}</span>
      <h2 class="colorlib-heading">{{ header }}</h2>
    </div>
</template>

<script>
export default {
  name: "ModuleHeader",
  props: {
    title: String,
    header: String,
  },
};
</script>

<style scoped>
.heading-meta {
  margin-bottom: 10px;
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  color: #999999;
  font-weight: 500;
  letter-spacing: 5px;
}
.colorlib-heading {
  font-size: 18px;
  margin-bottom: 4em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.8;
  position: relative;
}
.colorlib-heading {
  display: block;
    margin-bottom: 0.8em;
}
/* @media screen and (max-width: 768px) {
  .colorlib-heading {
    margin-bottom: 0.8em;
  }
} */
</style>