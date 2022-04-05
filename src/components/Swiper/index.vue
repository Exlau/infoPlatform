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
          imgSrc="tiger"
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
        <img
          src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b4e41a670c097c8fd2834579f5d5958&auto=format&fit=crop&w=633&q=80"
          alt=""
          style="width: 100%"
        />
        <h3 class="title">Kelly Woods</h3>
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
        <img
          src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b4e41a670c097c8fd2834579f5d5958&auto=format&fit=crop&w=633&q=80"
          alt=""
          style="width: 100%"
        />
        <h3 class="title">Kelly Woods</h3>
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
        <img
          src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b4e41a670c097c8fd2834579f5d5958&auto=format&fit=crop&w=633&q=80"
          alt=""
          style="width: 100%"
        />
        <h3 class="title">Kelly Woods</h3>
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
        <img
          src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b4e41a670c097c8fd2834579f5d5958&auto=format&fit=crop&w=633&q=80"
          alt=""
          style="width: 100%"
        />
        <h3 class="title">
          sssssssssssssssssssssssssssssssssssssssssssssssssssss
        </h3>
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
</style>
