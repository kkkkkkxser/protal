<template>
  <!-- 链接 -->
  <div class="main">
    <div class="title">
      <a>导航链接</a>
    </div>
    <div class="details">
      <a>百度一下</a><br />
      <a>知乎</a><br />
      <a>美团</a><br />
      <a>bilibili</a><br />
      <a>CSDN</a><br />
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
a {
  padding-left: 50px;
  font-size: 16px;
}
.main {
  line-height: 40px;
  overflow: auto;
}
.title {
  border-bottom: 1px #ebebeb solid;
  a {
    padding-left: 10px;
    color: @mainColor;
  }
}
.details {
  a {
    font-size: 14px;
    font-weight: normal;
    color: black;
  }
}
</style>