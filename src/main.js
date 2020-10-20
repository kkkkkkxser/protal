import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import "@/assets/css/common.less";
import "@/assets/icon/iconfont.css";
//颜色选择器
import vcolorpicker from "vcolorpicker";
//分屏组件
import VueAwesomeSwiper from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";

Vue.use(VueAwesomeSwiper);
Vue.use(vcolorpicker);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
