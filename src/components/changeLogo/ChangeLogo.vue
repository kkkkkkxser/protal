<template>
  <!-- 选择Logo -->
  <a-modal
    title="切换Logo"
    width="500px"
    :visible="visible"
    @cancel="
      () => {
        $emit('cancel');
      }
    "
    @ok="
      () => {
        $emit('ok');
      }
    "
  >
    <div>
      <div class="before">
        <div class="left">当前Logo</div>
        <div class="right"></div>
      </div>
      <div class="now">
        <div class="left">切换Logo</div>
        <div class="right">
          <a-upload>
            <a-button class="butt"> <a-icon type="upload" />选择图片 </a-button>
          </a-upload>
        </div>
      </div>
    </div>
    <template slot="footer">
      <a-button
        key="submit"
        type="primary"
        @click="
          () => {
            $emit('ok');
          }
        "
        >确定</a-button
      >
      <a-button
        key="back"
        @click="
          () => {
            $emit('cancel');
          }
        "
        >关闭</a-button
      >
    </template>
  </a-modal>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister(
  "Modal",
  "Upload",
  "Button",
  "Layout",
  "Breadcrumb",
  "Menu",
  "Icon"
);
export default {
  // props: ["changelogoVisible"],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.before {
  width: 100%;
  border: 1px #e5e5e5 solid;
  height: 100px;
  margin: 0 auto;
}
.left {
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 98px;
  font-weight: bold;
  float: left;
}
.right {
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 98px;
  font-weight: bold;
  float: right;
}
.now {
  width: 100%;
  border: 1px #e5e5e5 solid;
  border-top: none;
  height: 100px;
  margin: 0 auto;
}
</style>