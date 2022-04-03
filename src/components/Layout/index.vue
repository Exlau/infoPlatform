<template>
  <div>
    layout
    <VideoContainer />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import VideoContainer from "../VideoContainer/index.vue";

export default defineComponent({
  name: "Layout",
  components: {
    VideoContainer,
  },
});
</script>
