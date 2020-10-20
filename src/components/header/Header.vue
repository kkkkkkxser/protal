<template>
  <!-- 页眉 -->
  <div class="main">
    <div class="top">
      <div class="logo allcenter">
        <img src="../../assets/img/withName.png" alt="" class="logo-img" />
      </div>
      <div class="change allcenter">切换门户</div>
      <div class="search allcenter">
        <a-input-search placeholder="" @search="onSearch" />
      </div>
      <div class="todo allcenter">
        <a-badge dot
          ><a-icon type="notification" class="icons" title="待处理"
        /></a-badge>
      </div>
      <div class="personal allcenter"><a-icon type="user" class="icons" /></div>
    </div>
    <div class="bottom">
      <ul>
        <li><div class="underline">页面1</div></li>
      </ul>
    </div>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister, changeStyle } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister(
  "Badge",
  "Input",
  "Button",
  "Layout",
  "Breadcrumb",
  "Menu",
  "Icon"
);
export default {
  data() {
    return {
      themes: this.$store.state.themes.themes,
    };
  },
  methods: {
    // 切换主题
    onSearch() {
      console.log("check");
      console.log(this.themes);
      changeStyle(this.themes[3]);
    },
  },
};
</script>
<style lang="less" scoped>
// * {
//   color: @fontColor;
// }
.main {
  height: 100%;
  width: 100%;
}
.top {
  height: 55%;
  background-color: white;
  // background-image: linear-gradient(-90deg, #c2e9fb 0%, #c2e9fb 100%);
  .logo {
    width: 20%;
    height: 100%;
    float: left;
    // border: 1px red solid;
    text-align: center;
    // background-color: @mainColor;
  }
  .logo-img {
    width: 80%;
    height: 80%;
    // border: 1px red solid;
    margin-top: 5px;
  }
  .change {
    float: left;
    width: 5%;
    height: 100%;
    // border: 1px red solid;
    line-height: 47px;
    color: @mainColor;
  }
  .search {
    float: left;
    width: 20%;
    height: 100%;
    // border: 1px red solid;
    margin-left: 20px;
  }
  .personal {
    float: right;
    width: 5%;
    height: 100%;
    // border: 1px red solidl;
  }
  .todo {
    float: right;
    width: 5%;
    height: 100%;
    // border: 1px red solidl;
  }
  .icons {
    font-size: 20px;
    color: @mainColor;
  }
  .icons:hover {
    cursor: pointer;
  }
}
.bottom {
  height: 45%;
  // background-color: @mainColor;
  // background-image: linear-gradient(-90deg, #c2e9fb 0%, #c2e9fb 100%);
  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
  }
  li {
    width: 7%;
    height: 38px;
  }
  .underline {
    text-align: center;
    height: 38px;
    line-height: 38px;
    width: 90%;
    margin: 0 auto;
    color: @mainColor;
    // color: #5fa5f8;
    border-bottom: 2px @mainColor solid;
    // border-bottom: 2px #5fa5f8 solid;
    cursor: pointer;
  }
}
::v-deep .ant-input {
  transition: none;
}
::v-deep .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
  border: 1px @mainColor solid;
  box-shadow: none;
}
::v-deep .ant-input-affix-wrapper .ant-input:focus {
  border: 1px @mainColor solid;
  border-bottom: 1px @mainColor solid !important;
  box-shadow: none;
}
</style>