<template>
  <div class="main">
    <a-carousel class="slider">
      <div class="slider-img">
        <img src="../assets/img/loginB.png" alt="" />
      </div>
      <div class="slider-img">
        <img src="../assets/img/loginA.png" alt="" />
      </div>
      <div class="slider-img">
        <img src="../assets/img/loginC.png" alt="" />
      </div>
      <div class="slider-img">
        <img src="../assets/img/loginD.png" alt="" />
      </div>
    </a-carousel>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Carousel", "Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
}
.slider {
  width: 100%;
  height: 100%;
}
::v-deep .ant-carousel .slick-slide {
  text-align: center;
  height: 308px;
  line-height: 308px;
  background: #364d79;
  overflow: hidden;
}

::v-deep .ant-carousel .slick-slide h3 {
  color: #fff;
}
</style>