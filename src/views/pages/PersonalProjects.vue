<template>
  <div style="margin-bottom: 140px" id="personal">
    <div class="parent-container">
      <module-header title="The ME Time" header="Personal Projects" />
    </div>
    <div class="px-0 mx-0">
      <youtube-videos></youtube-videos>
    </div>
  </div>
</template>

<script>
import ModuleHeader from "../../components/ModuleHeader.vue";
import YoutubeVideos from "../../components/YoutubeVideos.vue";
export default {
  name: "Personal Projects",
  props: {
    data: [],
  },
  components: { ModuleHeader, YoutubeVideos },
};
</script>