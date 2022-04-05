<template>
  <swiper
    :options="swiperOption"
    @slideChange="onSlideChange"
    style="width: 60%; padding-top: 30px; padding-bottom: 30px"
  >
    <swiper-slide
      style="
        background-position: center;
        background-size: cover;
        width: 320px;
        background-color: #fff;
        overflow: hidden;
        border-radius: 8px;
      "
    >
      <div class="picture">
        <VideoCard
          title="那些无法超越的台词与画面！"
          src="https://www.bilibili.com/video/BV1y34y1s7x7?spm_id_from=333.851.b_7265636f6d6d656e64.3"
          imgSrc="test"
          styles="width:320px;height:auto;text-align:center;"
        />
      </div>
    </swiper-slide>
    <swiper-slide
      style="
        background-position: center;
        background-size: cover;
        width: 320px;
        background-color: #fff;
        overflow: hidden;
        border-radius: 8px;
      "
      ><div class="picture">
        <VideoCard
          title="那些无法超越的台词与画面！"
          src="https://www.bilibili.com/video/BV1y34y1s7x7?spm_id_from=333.851.b_7265636f6d6d656e64.3"
          imgSrc="test"
          styles="width:320px;height:auto;text-align:center"
        />
      </div></swiper-slide
    >
    <swiper-slide
      style="
        background-position: center;
        background-size: cover;
        width: 320px;
        background-color: #fff;
        overflow: hidden;
        border-radius: 8px;
      "
      ><div class="picture">
        <VideoCard
          title="那些无法超越的台词与画面！"
          src="https://www.bilibili.com/video/BV1y34y1s7x7?spm_id_from=333.851.b_7265636f6d6d656e64.3"
          imgSrc="test"
          styles="width:320px;height:auto;text-align:center"
        />
      </div></swiper-slide
    >
    <swiper-slide
      style="
        background-position: center;
        background-size: cover;
        width: 320px;
        background-color: #fff;
        overflow: hidden;
        border-radius: 8px;
      "
    >
      <div class="picture">
        <VideoCard
          title="那些无法超越的台词与画面！"
          src="https://www.bilibili.com/video/BV1y34y1s7x7?spm_id_from=333.851.b_7265636f6d6d656e64.3"
          imgSrc="test"
          styles="width:320px;height:auto;text-align:center"
        />
      </div>
    </swiper-slide>
    <swiper-slide
      style="
        background-position: center;
        background-size: cover;
        width: 320px;
        background-color: #fff;
        overflow: hidden;
        border-radius: 8px;
      "
    >
      <div class="picture">
        <VideoCard
          title="那些无法超越的台词与画面！"
          src="https://www.bilibili.com/video/BV1y34y1s7x7?spm_id_from=333.851.b_7265636f6d6d656e64.3"
          imgSrc="test"
          styles="width:320px;height:auto;text-align:center"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import VideoCard from "../VideoCard/index.vue";

export default defineComponent({
  name: "IndexSwiper",
  components: {
    VideoCard,
  },
  data() {
    return {
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: 1000,
        },
        autoplayDisableOnInteraction: false,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  methods: {
    onSlideChange() {
      console.log("silde change");
    },
  },
});
</script>

<style scoped>
.title {
  position: absolute;
  top: 270px;
  width: 320px;
  overflow: hidden;
  text-align: center;
}
.detail {
  padding: 25px 20px;
  font-weight: 600;
  text-align: center;
}
.picture {
  width: 320px;
  overflow: hidden;
  background: #e2ebf0;
}
</style>
