<template>
  <div class="main">
    <div class="title">
      <a>我的代办任务</a>
    </div>
    <div class="task">
      <a>无</a>
    </div>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}
// a {
//   color: black;
//   padding-left: 200px;
//   font-size: 20px;
// }
.title {
  border-bottom: 1px #ebebeb solid;
  height: 15%;
  display: flex;
  align-items: center;
  // line-height: 40px;
  a {
    padding-left: 10px;
    color: @mainColor;
    font-size: 16px;
  }
}
.task {
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: black;
  }
}
</style>