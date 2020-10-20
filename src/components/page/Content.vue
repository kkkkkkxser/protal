<template>
  <!-- 内容配置 -->
  <div class="content"></div>
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
.content {
  width: 100%;
  height: 100%;
  border: 1px #cccccc solid;
}
</style>