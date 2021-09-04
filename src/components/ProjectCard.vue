<template>
  <div class="timeline-entry-inner">
    <div class="timeline-icon color-6">
      <img src="images/thingworx.png" style="height: 20opx; width: 20px" />
    </div>
    <div class="timeline-label">
      <h2>
        <i
          class="fa fa-sm fa-thumb-tack fa-rotate-45"
          style="font-size: 16px !important; color: rgb(63, 63, 68) !important"
          aria-hidden="true"
        ></i>
        {{ project.name }}
        <span>
          {{ project.from.seconds | moment("MMM YYYY") }} -
          <span v-if="project.to">{{
            project.to.seconds | moment("MMM YYYY")
          }}</span>
          <span v-else>Now</span>
        </span>
      </h2>
      <p><Strong>Client: </Strong>{{ project.client }}</p>
      <p style="text-align: justify">
        {{ project.desc }}
      </p>
      <technology-stacks :tech="tech" :hasHeader="false" />
    </div>
  </div>
</template>

<script>
import TechnologyStacks from "./TechnologyStacks.vue";
export default {
  name: "ProjectCard",
  props: {
    project: {},
  },
  computed: {
    tech: function () {
      return { tech: this.project.tech };
    },
  },
  components: {
    TechnologyStacks,
  },
};
</script>