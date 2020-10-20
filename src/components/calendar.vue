<template>
  <!-- 日历 -->
  <div class="calendar">
    <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Calendar", "Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  data() {
    return {};
  },
  methods: {
    onPanelChange() {},
  },
};
</script>
<style lang="less" scoped>
.calendar {
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  // height: 100%;
}
</style>