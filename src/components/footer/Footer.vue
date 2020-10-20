<template>
  <!-- 页脚 -->
  <div class="main">Copyright © 广东顾德智能科技有限公司</div>
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
  text-align: center;
}
</style>