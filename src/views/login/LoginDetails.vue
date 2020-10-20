<template>
  <!-- 登录页面具体配置页面 -->
  <div class="main">
    <div class="header">
      <div class="title">登录页面具体配置页面</div>
      <div class="handle">
        <div class="diyButton" @click="save">
          <a>保存</a>
        </div>
        <div class="diyButton" @click="reset">
          <a>重置</a>
        </div>
        <div class="diyButton" @click="exit">
          <a>退出</a>
        </div>
      </div>
    </div>
    <div class="config">
      <LoginSet></LoginSet>
    </div>
    <div class="preview">
      <LoginA class="loginP" v-if="currentPage == 'loginA'"></LoginA>
      <LoginB class="loginP" v-if="currentPage == 'loginB'"></LoginB>
      <LoginD class="loginP" v-if="currentPage == 'loginD'"></LoginD>
    </div>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Button", "Layout", "Breadcrumb", "Menu", "Icon");
import LoginA from "../../views/login/LoginA";
import LoginB from "../../views/login/LoginB";
import LoginD from "../../views/login/LoginD";
import LoginSet from "../../components/login/LoginSet";
export default {
  components: {
    LoginA,
    LoginB,
    LoginD,
    LoginSet,
  },
  data() {
    return {
      loginPages: this.$store.state.loginPage.loginPage,
      loginPage: "",
      currentPage: "",
    };
  },
  mounted() {
    console.log(this.currentPage);
  },
  created() {
    this.currentPage = this.$route.query.currentPage;
    this.loginPage = this.loginPages[this.currentPage];
  },
  methods: {
    save() {
      console.log(this.loginA);
    },
    reset() {
      console.log("reset");
    },
    exit() {
      this.$router.push("/loginconfig");
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: 7%;
    background-color: #001529;
    .title {
      float: left;
      font-size: 23px;
      color: white;
      padding-left: 16px;
      line-height: 45px;
    }
    .handle {
      float: right;
      .diyButton {
        float: left;
        text-align: center;
        width: 80px;
        margin-right: 10px;
        height: 32px;
        margin-top: 10px;
        background-color: lightsteelblue;
        border-radius: 4px;
        a {
          color: white;
          line-height: 30px;
          font-size: 17px;
        }
      }
      .diyButton:hover {
        cursor: pointer;
        background-color: lightblue;
      }
    }
  }
  .config {
    width: 20%;
    float: left;
    height: 93%;
    // .scroll {
    //   width: 100%;
    //   height: 95%;
    //   // overflow-y: scroll;
    //   // overflow-x: hidden;
    //   overflow: auto;
    // }
  }
  .preview {
    background-color: #424750;
    height: 93%;
    width: 80%;
    float: left;
    .loginP {
      width: 98%;
      height: 95%;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>