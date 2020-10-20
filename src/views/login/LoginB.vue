<template>
  <!-- 登录页面B -->
  <div class="main">
    <div class="center">
      <div class="pic" :class="Playout"></div>
      <div class="login" :class="Llayout">
        <div class="loginTitle">
          <div class="loginTitle-fa" :class="{ hightlight: hover.waitHover }">
            <a>{{ loginB.loginText }}</a>
          </div>
        </div>
        <div class="logo">
          <div class="logo-fa" :class="{ hightlight: hover.logoHover }">
            <img src="../../assets/img/withName.png" alt class="logo-pic" />
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
        <div
          class="logobutton"
          :style="styleObject"
          :class="{ hightlight: hover.buttonHover }"
        >
          <a>{{ loginB.buttonText }}</a>
        </div>
        <div class="forget">忘记密码</div>
      </div>
    </div>
    <div class="right">
      <div class="right-fa" :class="{ hightlight: hover.rightHover }">
        {{ loginB.rightText }}
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
  data() {
    return {
      loginB: this.$store.state.loginPage.loginPage[1],
      hover: this.$store.state.hover,
      accounts,
    };
  },
  computed: {
    Playout() {
      if (this.loginB.position == "left") {
        return "PlayoutLeft";
      } else {
        return "PlayoutRight";
      }
    },
    Llayout() {
      if (this.loginB.position == "left") {
        return "LlayoutLeft";
      } else {
        return "LlayoutRight";
      }
    },
    // 动态绑定登录框样式
    styleObject() {
      return {
        "--background-color": this.loginB.buttonColor,
        "--color": this.loginB.buttonTextColor,
        "--background-color-hover": this.loginB.buttonHover,
      };
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100vh;
  background: url("../../assets/img/gradient.png");
  position: relative;
}
.center {
  width: 80%;
  height: 80%;
  // background-color: lightgray;
  position: absolute;
  left: 12%;
  top: 10%;
  .pic {
    width: 50%;
    height: 100%;
    // float: left;
    background: url("../../assets/img/bglogo.jpg") no-repeat;
    background-size: 830px 580px;
    border: 1px #8fdffb solid;
    // border-top-left-radius: 9px;
    // border-bottom-left-radius: 9px;
    opacity: 0.8;
  }
  .login {
    width: 50%;
    height: 100%;
    // float: right;
    background-color: white;
    // border-top-right-radius: 9px;
    // border-bottom-right-radius: 9px;
    .loginTitle {
      width: 80%;
      height: 10%;
      margin: 0 auto;
      text-align: center;
      margin-top: 60px;
      .loginTitle-fa {
        width: 40%;
        height: 100%;
        margin: 0 auto;
      }
      a {
        font-size: 25px;
        color: #5cc0ea;
        font-weight: bold;
        line-height: 60px;
      }
    }
    .logo {
      width: 80%;
      height: 21%;
      margin: 0 auto;
      margin-top: 20px;

      .logo-fa {
        margin: 0 auto;
        width: 63%;
        height: 46%;
        margin-top: 20px;
      }
      .logo-pic {
        width: 98%;
        height: 98%;
      }
    }
    .username {
      width: 70%;
      height: 10%;
      margin: 0 auto;
      margin-top: -10px;
    }
    .forget {
      width: 70%;
      height: 10%;
      margin: 0 auto;
      margin-top: 15px;
      a {
        color: grey;
      }
    }
    .password {
      width: 70%;
      height: 10%;
      margin: 0 auto;
      margin-top: 10px;
    }
    .select {
      width: 70%;
      height: 10%;
      margin: 0 auto;
      margin-top: 10px;
    }
    .select-width {
      width: 100%;
    }
    .logobutton {
      width: 70%;
      height: 8%;
      margin: 0 auto;
      background-color: var(--background-color);
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
      margin-top: 10px;
      a {
        font-size: 17px;
        color: var(--color);
      }
    }
    .logobutton:hover {
      cursor: pointer;
      background-color: var(--background-color-hover);
    }
  }
}
.right {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 25px;
  .right-fa {
    width: 20%;
    margin: 0 auto;
  }
}
::v-deep .ant-input {
  height: 41px;
  border-radius: 20px;
}
::v-deep .ant-select-selection {
  border-radius: 20px;
  height: 40px;
}
::v-deep .ant-select-selection__placeholder,
.ant-select-search__field__placeholder {
  height: 33px;
  line-height: 25px;
}
::v-deep .ant-select-selection__rendered {
  line-height: 33px;
}
.hightlight {
  border: 2px dashed lightsalmon;
}
.PlayoutRight {
  float: left;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
}
.PlayoutLeft {
  float: right;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
}
.LlayoutRight {
  float: right;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
}
.LlayoutLeft {
  float: left;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
}
</style>
