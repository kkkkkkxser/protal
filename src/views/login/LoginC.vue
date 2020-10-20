<template>
  <!-- 登录页面C -->
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper">
    <swiper-slide class="page1"></swiper-slide>
    <swiper-slide class="page2"></swiper-slide>
    <swiper-slide class="page3"></swiper-slide>
    <swiper-slide class="page4"></swiper-slide>
    <swiper-slide class="page5"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.page1 {
  width: 100%;
  height: 100%;
  background-color: lightgray;
}
.page2 {
  background-color: lightgreen;
}
.page3 {
  background-color: lightpink;
}
.page4 {
  background-color: lightsalmon;
}
.page5 {
  background-color: lightskyblue;
}
.swiper {
  height: 300px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    background-color: yellow;
    // font-size: $font-size-huge * 2;
    // background-color: $white;
  }
}
</style>