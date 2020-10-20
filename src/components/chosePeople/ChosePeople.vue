<template>
  <!-- 选人 -->
  <div class="chose">
    <div class="left"></div>
    <div class="right">
      <img src="../../assets/img/choose.png" alt="" class="pic" />
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
.chose {
  width: 99%;
  height: 93%;
  border: 1px #cccccc solid;
}
.left {
  width: 97%;
  height: 100%;
  float: left;
}
.right {
  width: 3%;
  height: 100%;
  float: left;
  border-left: 1px #cccccc solid;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pic {
  width: 20px;
}
.pic:hover {
  cursor: pointer;
}
</style> 