<template>
  <div>
    <div
      class="col-md-12 animate-box"
      data-animate-effect="fadeInRight"
      style="margin-bottom: 20px"
    >
      <h4>{{ tech.name || "Dummy Technology Type" }}</h4>
    </div>
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-default btn-sm"
        v-for="(technology, ii) in tech.tech"
        :key="ii"
      >
        {{ technology.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnologyStacks",
  props: {
    tech: {},
  },
};
</script>