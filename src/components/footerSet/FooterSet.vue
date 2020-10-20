<template>
  <!-- 页脚配置 -->
  <a-modal
    title="页脚配置"
    width="650px"
    :visible="visible"
    :footer="null"
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
    <div class="header">
      <div class="choose">
        <div class="select">
          <a-select
            default-value="a"
            style="width: 200px"
            @change="handleChange"
          >
            <a-select-option value="a">无页脚</a-select-option>
            <a-select-option value="b">默认页脚</a-select-option>
          </a-select>
        </div>
        <div class="handle">
          <a-button type="primary" @click="confirm">确定</a-button>
        </div>
      </div>
      <div class="img" v-show="show">
        <img src="../../assets/img/footer.png" class="footer-img" />
      </div>
      <div class="detail" v-show="show">
        <div class="left">页眉文字</div>
        <div class="right">Copyright © 广东顾德智能科技有限公司</div>
      </div>
    </div>
  </a-modal>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister(
  "Modal",
  "Select",
  "Button",
  "Layout",
  "Breadcrumb",
  "Menu",
  "Icon"
);
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleChange(value) {
      if (value == "b") {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    // 关闭自己
    confirm() {
      this.$emit("update:visible", false);
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 400px;
  .choose {
    height: 12%;
    width: 100%;
    border-bottom: 1px #e5e5e5 solid;
    .select {
      width: 85%;
      float: left;
    }
    .handle {
      width: 15%;
      float: right;
    }
  }
  .img {
    height: 12%;
    width: 100%;
    margin-top: 5px;
  }
  .footer-img {
    height: 95%;
    width: 100%;
  }
  .detail {
    height: 16%;
    border: 1px #c8c8c8 solid;
    width: 100%;
    .left {
      width: 15%;
      height: 100%;
      border-right: 1px #c8c8c8 solid;
      float: left;
      line-height: 60px;
      text-align: center;
    }
    .right {
      width: 75%;
      height: 80%;
      float: right;
      line-height: 60px;
      border-bottom: 1px #c8c8c8 solid;
      margin-right: 30px;
    }
  }
}
</style>