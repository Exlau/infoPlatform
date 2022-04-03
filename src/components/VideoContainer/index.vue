<template>
  <div class="video-container">
    video container
    <VideoCard
      v-for="video in videoList"
      :title="video.title"
      :src="video.src"
      :imgSrc="video.imgSrc"
      :key="video.key"
    />
  </div>
</template>

<script>
import VideoCard from "../VideoCard/index.vue";
import videoList from "../../assets/videoList";

export default {
  name: "VideoContainer",
  components: {
    VideoCard,
  },
  data() {
    return {
      videoList,
    };
  },
};
</script>
