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
      <p style="text-align: justify">
        {{ project.desc }}
      </p>
      <ul class="fa-ul">
        <li>
          <span class="fa-li"><i class="fa fa-building"></i></span
          ><Strong>Client: </Strong>{{ project.client }}
        </li>
        <li>
          <span class="fa-li"><i class="fa fa-tags"></i></span
          ><Strong>Technologies: </Strong>{{ project.tech }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {},
  },
};
</script>