<template>
  <div class="video-card" @click="handleCardClick" :style="styles">
    <img
      class="video-img"
      :src="require('../../assets/' + $props.imgSrc + '.jpg')"
    />
    <div class="video-title">
      {{ $props.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  data() {
    return {};
  },
  props: {
    title: String,
    src: String,
    imgSrc: String,
    styles:Object,
  },
  methods: {
    handleCardClick() {
      window.open(this.$props.src, "_blank");
    },
  },
};
</script>

<style scoped lang="less">
.video-card {
  width: 200px;
  height: 240px;
  .video-img {
    overflow: hidden;
    width: 100%;
    object-fit: contain;
    border-radius: 6px;
  }
}

// 标签hover样式
.video-card:hover {
  cursor: pointer;
  .video-img {
    animation: hover-zoom 0.2s cubic-bezier(0.46, -0.57, 0.5, 1.42);
    animation-fill-mode: forwards;
  }
}

@keyframes hover-zoom {
  0% {
  }
  100% {
    transform: scale(1.05);
    transform: scale(1.05);
    filter: brightness(120%);
  }
}
</style>
