<template>
  <div class="video-container">
    <div class="search-bar">
      <el-input
        class="search-input"
        type="text"
        placeholder="搜索视频"
        v-model="searchKey"
        @input="serachVideoOnChange($event)"
        @keyup.enter="searchVideo"
      ></el-input>
      <el-button
        class="search-btn"
        icon="el-icon-search"
        type="primary"
        circle
        @click="searchVideo"
      ></el-button>
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
      debounce(this.searchVideo, 700)();
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
    justify-content:space-between;
    padding: 20px;
  }
  .search-input {
    width: 300px;
  }
  .search-btn {
    margin-left: 20px;
  }
}
</style>
