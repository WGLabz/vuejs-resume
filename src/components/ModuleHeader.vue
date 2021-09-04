<template>
  <div class="row">
    <div class="col-md-6 col-md-offset-3 col-md-pull-3">
      <span class="heading-meta">{{ title }}</span>
      <h2 class="colorlib-heading">{{ header }}</h2>
    </div>
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

<style>
</style>