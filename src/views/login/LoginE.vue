<template>
  <div>
    //vue-awesome-swiper结构
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">slide{{item}}</swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination", //分页器作用对象
          clickable: true, //分页器小圆点是否可点击
        },
      },
      slide: [1, 2, 3, 4],
    };
  },
};
</script>

<style>
.swiper-slide {
  height: 400px;
  background: pink;
  font-size: 50px;
  text-align: center;
  line-height: 400px;
}
</style>