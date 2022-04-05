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
    <el-tabs v-model="activeName" @tab-click="handleTabChange">
      <el-tab-pane
        v-for="category in categoryList"
        :label="category"
        :name="category"
        :key="category"
      >
        <div class="video-card-container">
          <VideoCard
            v-for="video in videoListToShow"
            :title="video.title"
            :src="video.src"
            :imgSrc="video.imgSrc"
            :key="video.key"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
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
      categoryList: [],
      currentCategory: "",
      activeName: "second",
    };
  },
  watch: {
    currentCategory: function () {
      console.log("this.cuir", this.currentCategory);
      this.searchVideo();
    },
  },
  methods: {
    searchVideo() {
      const searchKey = this.searchKey;
      const searchList = this.videoList.filter((video) => {
        return (
          video.title.indexOf(searchKey) !== -1 &&
          (this.currentCategory === "全部"
            ? true
            : video.category === this.currentCategory)
        );
      });
      this.videoListToShow = searchList;
    },
    serachVideoOnChange() {
      debounce(this.searchVideo, 700)();
    },
    handleTabChange(tab) {
      this.currentCategory = tab.name;
    },
    distinctCategory() {
      const categoryList = this.videoList.map((video) => video.category);
      const distinctCategoryList = [...new Set(categoryList)];
      this.categoryList = ["全部", ...distinctCategoryList];
    },
  },
  mounted() {
    this.videoListToShow = this.videoList;
    this.distinctCategory();
  },
};
</script>

<style scoped lang="less">
.video-container {
  .search-bar {
    width: 400px;
    margin: 0 auto;
  }
  .video-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
