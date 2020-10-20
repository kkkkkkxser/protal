<template>
  <!-- 登录页面A -->
  <div class="main">
    <div class="company">
      <div class="company-fa" :class="{ hightlight: hover.logoHover }">
        <img src="../../assets/img/withName.png" alt class="logo" />
      </div>
    </div>
    <div class="login" :class="layout">
      <div class="title">
        <div
          class="title-fa allcenter"
          :class="{ hightlight: hover.waitHover }"
        >
          {{ loginA.loginText }}
        </div>
      </div>
      <div class="username">
        <a-input placeholder="用户名">
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </div>
      <div class="password">
        <a-input type="password" placeholder="密码">
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </div>
      <div class="select">
        <a-select class="select-width" placeholder="请选择账套">
          <a-select-option v-for="(item, index) in accounts" :key="index">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </div>
      <div class="loginButtonFa">
        <div
          class="loginButton"
          :class="{ hightlight: hover.buttonHover }"
          :style="styleObject"
        >
          {{ loginA.buttonText }}
        </div>
      </div>
      <div class="forget">
        <a>忘记密码</a>
      </div>
    </div>
    <div class="right">
      <div class="right-fa" :class="{ hightlight: hover.rightHover }">
        {{ loginA.rightText }}
      </div>
    </div>
  </div>
</template>
<script>
const accounts = [
  {
    name: "顾德智能",
  },
  {
    name: "test",
  },
];
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister(
  "Select",
  "Input",
  "Button",
  "Layout",
  "Breadcrumb",
  "Menu",
  "Icon"
);
export default {
  props: [],
  data() {
    return {
      loginA: this.$store.state.loginPage.loginPage[0],
      hover: this.$store.state.hover,
      layoutLeft: "layoutLeft",
      layoutMiddle: "layoutMiddle",
      layoutRight: "layoutRight",
      accounts,
    };
  },
  computed: {
    //登录框的位置
    layout() {
      if (this.loginA.position == "left") {
        return "layoutLeft";
      } else if (this.loginA.position == "middle") {
        return "layoutMiddle";
      } else {
        return "layoutRight";
      }
    },
    // 动态绑定登录框样式
    styleObject() {
      return {
        "--background-color": this.loginA.buttonColor,
        "--color": this.loginA.buttonTextColor,
        "--background-color-hover": this.loginA.buttonHover,
      };
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/bglogo.jpg") no-repeat;
  background-size: 100%;
  .company {
    width: 100%;
    height: 70px;
    .company-fa {
      width: 21%;
      height: 52px;
      margin-top: 20px;
      margin-left: 20px;
    }
    .logo {
      height: 50px;
      width: 98%;
    }
  }
  .login {
    width: 415px;
    height: 306px;
    background-color: #fdfbfa;
    border-radius: 7px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.125);
    .title {
      width: 100%;
      height: 17%;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
      background-color: white;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.125);
      .title-fa {
        width: 100%;
        height: 100%;
      }
    }
    .username {
      width: 80%;
      height: 15%;
      margin: 0 auto;
      margin-top: 20px;
    }
    .password {
      width: 80%;
      height: 15%;
      margin: 0 auto;
    }
    .forget {
      a {
        color: grey;
      }
      width: 80%;
      margin: 0 auto;
    }
    .select {
      width: 80%;
      height: 15%;
      margin: 0 auto;
    }
    .select-width {
      width: 100%;
    }
    .loginButtonFa {
      width: 80%;
      height: 15%;
      margin: 0 auto;
    }
    .loginButton {
      margin: 0 auto;
      width: 100%;
      height: 72%;
      margin-top: 1px;
      border-radius: 4px;
      text-align: center;
      line-height: 30px;
      color: var(--color);
      background-color: var(--background-color);
    }
    .loginButton:hover {
      cursor: pointer;
      // background-color: white;
      background-color: var(--background-color-hover);
    }
  }
  .right {
    width: 100%;
    height: 7%;
    bottom: 0px;
    position: absolute;
    // text-align: center;
    // line-height: 55px;
    .right-fa {
      width: 201px;
      height: 43px;
      line-height: 50px;
      margin: 0 auto;
    }
  }
}
.layoutRight {
  float: right;
  margin-top: 80px;
  margin-right: 65px;
}
.layoutMiddle {
  margin: 0 auto;
  margin-top: 150px;
}
.layoutLeft {
  float: left;
  margin-top: 100px;
  margin-left: 70px;
}
.hightlight {
  border: 2px dashed lightsalmon;
}
</style>