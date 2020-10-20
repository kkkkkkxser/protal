<template>
  <!-- 选择模板 -->
  <div>
    <a-modal
      :width="750"
      title="选择模板"
      :visible="visible"
      @cancel="
        () => {
          $emit('cancel');
        }
      "
      :footer="null"
    >
      <div class="main">
        <div class="header">
          <ul>
            <li>
              <div class="number">序号</div>
              <div class="name">名称</div>
              <div class="preview">布局预览</div>
            </li>
          </ul>
        </div>
        <div class="detail">
          <ul v-for="(item, index) in layout" :key="index">
            <li>
              <div class="number">{{ index + 1 }}</div>
              <div class="name">{{ item.name }}</div>
              <div class="preview">
                <div class="pic"></div>
                <div class="pick" @click="pick(index)">选择</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Modal", "Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  name: "chooseModal",
  props: ["visible"],
  data() {
    return {
      layout: this.$store.state.portal.portal,
      currentTemplate: "",
      currentLayout: [],
      currentNumber: "",
    };
  },
  methods: {
    pick(index) {
      console.log("in");
      this.currentTemplate = this.layout[index].name;
      this.currentLayout = this.layout[index].layout;
      this.currentNumber = this.layout[index].number;
      this.$emit("update:visible", false);
    },
  },
  created() {},
};
</script>
<style lang="less" scoped>
ul {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}
.main {
  height: 500px;
  width: 100%;
  padding: 4px;
  //   background-color: lightcyan;
  border: 1px #d2d2d2 solid;
  overflow: auto;
  ul {
    display: flex;
  }
  li {
    width: 100%;
  }
  .header {
    width: 100%;
    height: 10%;
    line-height: 50px;
    background-color: #f8f8f8;
    border-bottom: 1px #d2d2d2 solid;
    font-weight: bold;
  }
  .detail {
    width: 100%;
    height: 350px;
    li {
      height: 100px;
      border-bottom: 1px #d2d2d2 solid;
      line-height: 100px;
    }
    .pic {
      width: 40%;
      height: 100%;
      float: left;
      margin-left: 40px;
    }
    .pick {
      display: inline;
      //   width: 20%;
      //   border: 1px yellow solid;
      padding: 5px;
      background-color: #82d0f4;
      font-size: 13px;
      color: white;
      border-radius: 4px;
      //   float: left;
      //   height: 20px;
    }
    .pick:hover {
      cursor: pointer;
    }
  }
  .number {
    width: 20%;
    float: left;
    padding-left: 5px;
  }
  .name {
    width: 40%;
    float: left;
    text-align: center;
  }
  .preview {
    width: 40%;
    float: left;
    text-align: center;
  }
}
</style>