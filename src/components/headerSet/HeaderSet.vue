<template>
  <!-- 页眉配置 -->
  <a-modal
    title="页眉配置"
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
          <a-select default-value="1" style="width: 200px" @change="change">
            <a-select-option value="1">无页眉</a-select-option>
            <a-select-option value="2">简介页眉</a-select-option>
            <a-select-option value="3">简介带页签页眉</a-select-option>
            <a-select-option value="4">经典页眉</a-select-option>
            <a-select-option value="5">经典带页签页眉</a-select-option>
          </a-select>
        </div>
        <div class="handle">
          <a-button type="primary" @click="confirm">确定</a-button>
        </div>
      </div>
      <div v-show="!(type == '1')" class="img">img</div>
      <div v-show="!(type == '1')" class="detail">
        <table border="1px">
          <tr>
            <td
              width="100%"
              colspan="10"
              style="
                text-align: center;
                background-color: #f6f6f6;
                padding-left: -10px;
              "
            >
              参数设置
            </td>
          </tr>
          <tr>
            <td width="13%">门户切换</td>
            <td width="87%">
              <a-radio-group v-model="protal">
                <a-radio :value="1">显示</a-radio>
                <a-radio :value="2">不显示</a-radio>
              </a-radio-group>
            </td>
          </tr>
          <tr>
            <td>页面切换</td>
            <td>
              <a-radio-group v-model="page">
                <a-radio :value="1">显示</a-radio>
                <a-radio :value="2">不显示</a-radio>
              </a-radio-group>
            </td>
          </tr>
          <tr>
            <td>搜索框</td>
            <td>
              <a-radio-group v-model="search">
                <a-radio :value="1">显示</a-radio>
                <a-radio :value="2">不显示</a-radio>
              </a-radio-group>
            </td>
          </tr>
          <tr>
            <td>个人中心</td>
            <td>
              <a-radio-group v-model="personal">
                <a-radio :value="1">显示</a-radio>
                <a-radio :value="2">不显示</a-radio>
              </a-radio-group>
            </td>
          </tr>
          <tr>
            <td>待处理</td>
            <td>
              <a-radio-group v-model="todo">
                <a-radio :value="1">显示</a-radio>
                <a-radio :value="2">不显示</a-radio>
              </a-radio-group>
            </td>
          </tr>
        </table>
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
      type: "1",
      protal: 1,
      page: 1,
      search: 1,
      personal: 1,
      todo: 1,
    };
  },
  methods: {
    confirm() {
      this.$emit("update:visible", false);
    },
    change(value) {
      this.type = value;
      console.log(!this.type == "1");
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
    text-align: center;
  }
  .detail {
    height: 76%;
    width: 100%;
    table {
      border: 1px #c8c8c8 solid;
      width: 100%;
      line-height: 40px;
    }
    td {
      padding-left: 10px;
    }
  }
}
</style>