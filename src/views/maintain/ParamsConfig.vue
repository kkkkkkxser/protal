<template>
  <!-- 参数配置 -->
  <div>
    <!-- 面包屑导航 -->
    <a-breadcrumb>
      <a-breadcrumb-item>
        <a-icon type="home" />
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <span>门户引擎</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item>门户维护</a-breadcrumb-item>
      <a-breadcrumb-item>参数配置</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { Button, Layout, Breadcrumb, Menu, Icon } from "ant-design-vue";
import { message } from "ant-design-vue";
componentRegister("Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
</style>