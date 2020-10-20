<template>
  <!-- 选择图标 -->
  <div class="chose">
    <div class="icons">
      <span class="iconfont" :class="currentIcon"></span>
    </div>
    <div class="text">
      <a @click="choose">选择</a>
    </div>
    <a-modal
      title="选择图标"
      width="530px"
      :visible="visible"
      :footer="null"
      @cancel="cancel"
      @ok="ok"
    >
      <!-- (item)=>{
    $emit('choose',item)
  } -->
      <div class="details">
        <ul>
          <li
            v-for="(item, index) in icons"
            :key="index"
            @click="chose(item.font_class)"
          >
            <span class="iconfont" :class="'icon-' + item.font_class"></span>
          </li>
        </ul>
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
  data() {
    return {
      icons: this.$store.state.icons.icons,
      visible: false,
      currentIcon: "",
    };
  },
  methods: {
    cancel() {
      this.visible = false;
    },
    ok() {
      this.visible = false;
    },
    choose() {
      this.visible = true;
    },
    // 选择图标
    chose(item) {
      this.currentIcon = "icon-" + item;
      this.visible = false;
    },
  },
};
</script>
<style lang="less" scoped>
.details {
  width: 100%;
  height: 270px;
  // border: 1px #cccccc solid;
  overflow: auto;
}
ul {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
li {
  width: 14%;
  height: 65px;
  border: 1px #cccccc solid;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
}
li:hover {
  transform: scale(1.03);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.iconfont {
  font-size: 40px;
  color: pink;
}
.chose {
  height: 100%;
  width: 100%;
  padding-left: 20px;
  display: flex;
  align-items: center;
}
.icons {
  // width: 13%;
  // height: 75%;
  width: 50px;
  height: 50px;
  border: 1px #cccccc solid;
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
}
.text {
  // width: 15%;
  // height: 100%;
  width: 50px;
  height: 50px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  float: left;
  justify-content: center;
}
</style> 