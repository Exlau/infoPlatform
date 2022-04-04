<template>
  <div class="video-container">
    <div class="search-bar">
      <input
        type="text"
        placeholder="搜索视频"
        v-model="searchKey"
        @input="serachVideoOnChange($event)"
        @keyup.enter="searchVideo"
      />
      <button @click="searchVideo">搜索</button>
    </div>
    <div class="video-card-container">
      <VideoCard
        v-for="video in videoListToShow"
        :title="video.title"
        :src="video.src"
        :imgSrc="video.imgSrc"
        :key="video.key"
      />
    </div>
  </div>
</template>

<script>
import VideoCard from "../VideoCard/index.vue";
import videoList from "../../assets/videoList";
import { debounce } from "../../utils/debounce";

export default {
  name: "VideoContainer",
  components: {
    VideoCard,
  },
  data() {
    return {
      videoList,
      videoListToShow: [],
      searchList: [],
      searchKey: "",
    };
  },
  methods: {
    searchVideo() {
      const searchKey = this.searchKey;
      const searchList = this.videoList.filter(
        (video) => video.title.indexOf(searchKey) !== -1
      );
      this.videoListToShow = searchList;
    },
    serachVideoOnChange() {
      console.log(this.searchKey);
      return debounce(this.searchVideo, 500);
    },
  },
  mounted() {
    this.videoListToShow = this.videoList;
  },
};
</script>

<style scoped lang="less">
.video-container {
  .video-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
  }
}
</style>
