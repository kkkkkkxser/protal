<template>
  <!-- 首页 -->
  <div>
    <a-layout id="components-layout-demo-top" class="layout">
      <a-layout-header>
        <div class="logo">
          <img src="../assets/img/logo.png" alt class="logo-img" />
          <a class="logo-font">顾德智能</a>
        </div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '64px', width: '70%', float: 'left' }"
        >
          <a-menu-item key="1"> <a-icon type="home" />门户引擎 </a-menu-item>
          <a-menu-item key="2"> <a-icon type="search" />搜索引擎 </a-menu-item>
          <a-menu-item key="3"> <a-icon type="fork" />流程引擎 </a-menu-item>
        </a-menu>
        <div class="admin">
          <img src="../assets/img/user.png" alt class="user" />
          <span class="user-name">川建国</span>
          <a-divider type="vertical" />
          <img src="../assets/img/logout.png" alt class="logout" />
          <span class="user-name">退出</span>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div class="left">
          <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
            <a-menu-item key="1" @click="goTo('/maintain')">
              <a-icon type="tool" />门户维护
            </a-menu-item>
            <a-menu-item key="4" @click="goTo('/pageconfig')">
              <a-icon type="desktop" />门户页面
            </a-menu-item>
            <a-menu-item key="2" @click="goTo('/theme')">
              <a-icon type="appstore" />门户主题
            </a-menu-item>
            <a-menu-item key="3" @click="goTo('/parts')">
              <a-icon type="build" />门户部件
            </a-menu-item>
            <a-menu-item key="5"> <a-icon type="cloud" />门户素材 </a-menu-item>
            <a-menu-item key="6"> <a-icon type="menu" />门户菜单 </a-menu-item>
          </a-menu>
        </div>
        <div class="right">
          <router-view style="minheight: 91vh"></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Divider", "Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  data() {
    return {
      currentPage: this.$store.state.currentPage,
    };
  },
  methods: {
    goTo(param) {
      this.$router.push(param);
    },
  },
};
</script>
<style lang="less" scoped>
#components-layout-demo-top .logo {
  width: 155px;
  height: 64px;
  float: left;
  margin-left: -30px;
  margin-right: 40px;
}
.logo {
  .logo-img {
    width: 55px;
    height: 35px;
    margin-top: -8px;
  }
  .logo-font {
    padding-left: 10px;
    color: white;
    font-size: 21px;
  }
}
.admin {
  width: 140px;
  height: 64px;
  float: right;
  color: white;
  .user {
    width: 25px;
    height: 25px;
    margin-top: -3px;
  }
  .user-name {
    padding-left: 5px;
  }
  .logout {
    width: 17px;
    height: 17px;
    margin-top: -2px;
  }
}
.left {
  width: 13%;
  float: left;
  min-height: 91vh;
  background-color: #001529;
}
.right {
  width: 85%;
  float: right;
}
::v-deep .ant-layout-content {
  background-color: white;
}
</style>