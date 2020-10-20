<template>
  <!-- 创建人 时间 -->
  <div class="main">
    <div class="create-left tocenter">创建人</div>
    <div class="create-right tocenter">test</div>
    <div class="create-left tocenter">创建时间</div>
    <div class="create-right tocenter">{{ createTime }}</div>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  data() {
    return {
      createTime: new Date(),
    };
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}
.create-left {
  width: 15%;
  height: 100%;
  float: left;
  padding-left: 5px;
  background-color: #f6f6f6;
  border-right: 1px #cccccc solid;
  border-left: 1px #cccccc solid;
}
.create-right {
  width: 35%;
  height: 100%;
  float: left;
  padding-left: 5px;
}
</style> 