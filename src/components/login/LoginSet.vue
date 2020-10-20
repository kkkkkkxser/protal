<template>
  <!-- 门户配置列 -->
  <div class="main">
    <!-- 企业logo -->
    <div
      class="logo"
      @mouseenter="Hover('logoHover')"
      @mouseleave="Leave('logoHover')"
      :class="{ hightlight: hover.logoHover }"
    >
      <div class="logo-title">企业Logo</div>
      <div class="logo-detail">
        <div class="text">
          <a>png/jpg/jpeg/gif</a>
        </div>
        <div class="pic">
          <a-upload>
            <a-button class="butt"> <a-icon type="upload" />选择图片 </a-button>
          </a-upload>
        </div>
      </div>
    </div>
    <!-- 背景图  -->
    <div
      class="backg"
      @mouseenter="Hover('backgHover')"
      @mouseleave="Leave('backgHover')"
      :class="{ hightlight: hover.backgHover }"
    >
      <div class="backg-title">背景图</div>
      <div class="backg-detail">
        <div class="text">
          <a>png/jpg/jpeg/gif</a>
        </div>
        <div class="pic">
          <a-upload>
            <a-button class="butt"> <a-icon type="upload" />选择图片 </a-button>
          </a-upload>
        </div>
      </div>
    </div>
    <!-- 登录框位置  -->
    <div
      class="login"
      @mouseenter="Hover('loginHover')"
      @mouseleave="Leave('loginHover')"
      :class="{ hightlight: hover.loginHover }"
    >
      <div class="login-title">登录框位置</div>
      <div class="login-detail">
        <a-radio-group v-model="loginPage.position">
          <a-radio :value="'left'">居左</a-radio>
          <a-radio :value="'middle'">居中</a-radio>
          <a-radio :value="'right'">居右</a-radio>
        </a-radio-group>
      </div>
    </div>
    <!-- 预留模块 -->
    <div
      class="wait"
      @mouseenter="Hover('waitHover')"
      @mouseleave="Leave('waitHover')"
      :class="{ hightlight: hover.waitHover }"
    >
      <div class="wait-title">登录框标题</div>
      <div class="wait-detail">
        <a-input v-model="loginPage.loginText" class="wait-input" />
      </div>
    </div>
    <!-- 登录按钮 -->
    <div
      class="login-button"
      @mouseenter="Hover('buttonHover')"
      @mouseleave="Leave('buttonHover')"
      :class="{ hightlight: hover.buttonHover }"
    >
      <div class="login-button-title">登录按钮</div>
      <div class="login-button-detail">
        <div class="chooseColor">
          按钮颜色
          <colorPicker
            v-model="loginPage.buttonColor"
            ref="buttonColor"
            style="float: right; margin-right: 20px; border: 1px grey solid"
          />
        </div>
        <div class="chooseColor">
          鼠标经过按钮颜色
          <colorPicker
            v-model="loginPage.buttonHover"
            ref="buttonHover"
            style="float: right; margin-right: 20px; border: 1px grey solid"
          />
        </div>
        <div class="chooseColor">
          按钮文字颜色
          <colorPicker
            v-model="loginPage.buttonTextColor"
            ref="buttonTextColor"
            style="float: right; margin-right: 20px; border: 1px grey solid"
          />
        </div>
        <a-input v-model="loginPage.buttonText" class="login-input" />
      </div>
    </div>
    <!-- 版权信息 -->
    <div
      class="right"
      @mouseenter="Hover('rightHover')"
      @mouseleave="Leave('rightHover')"
      :class="{ hightlight: hover.rightHover }"
    >
      <div class="right-title">版权信息</div>
      <div class="right-detail">
        <a-input v-model="loginPage.rightText" class="right-input" />
      </div>
    </div>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister(
  "Input",
  "Radio",
  "Button",
  "Layout",
  "Breadcrumb",
  "Menu",
  "Icon",
  "Upload"
);
export default {
  data() {
    return {
      loginPages: this.$store.state.loginPage.loginPage,
      loginPage: "",
      currentPage: "",
      hover: this.$store.state.hover,
    };
  },
  created() {
    this.currentPage = this.$route.query.currentPage;
    this.loginPages.forEach((p) => {
      if (p.name == this.currentPage) {
        this.loginPage = p;
      }
    });
  },
  methods: {
    // Hover事件
    Hover(param) {
      this.hover[param] = true;
    },
    Leave(param) {
      this.hover[param] = false;
    },
  },
  mounted() {
    document.onclick = () => {
      this.$refs.buttonColor.openStatus = false;
      this.$refs.buttonHover.openStatus = false;
      this.$refs.buttonTextColor.openStatus = false;
    };
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #424750;
  padding-top: 10px;
  overflow: hidden;
}

.logo {
  width: 90%;
  height: 70px;
  border: 1px lightblue solid;
  background-color: white;
  margin: 0 auto;
  border-radius: 5px;
  .logo-title {
    padding-left: 5px;
    font-size: 17px;
  }
  .logo-detail {
    margin-top: 5px;
    .text {
      width: 60%;
      height: 30px;
      float: left;
      line-height: 30px;
      a {
        font-size: 13px;
        color: #868989;
      }
    }
    .pic {
      width: 40%;
      height: 30px;
      float: right;
    }
    .butt {
      padding: 0 10px;
    }
  }
}
.backg {
  width: 90%;
  height: 70px;
  border: 1px lightblue solid;
  background-color: white;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
  .backg-title {
    padding-left: 5px;
    font-size: 17px;
  }
  .backg-detail {
    margin-top: 5px;
    .text {
      width: 60%;
      height: 30px;
      float: left;
      line-height: 30px;
      a {
        font-size: 13px;
        color: #868989;
      }
    }
    .pic {
      width: 40%;
      height: 30px;
      float: right;
    }
    .butt {
      padding: 0 10px;
    }
  }
}
.login {
  width: 90%;
  height: 55px;
  border: 1px lightblue solid;
  background-color: white;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
  .login-title {
    padding-left: 5px;
    font-size: 17px;
  }
  .login-detail {
    margin-top: 5px;
    padding-left: 10px;
  }
}
.login-button {
  width: 90%;
  height: 180px;
  margin: 0 auto;
  border: 1px lightblue solid;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
  .login-button-title {
    padding-left: 5px;
    font-size: 17px;
  }
  .login-button-detail {
    margin-top: 5px;
    padding-left: 5px;
  }
  .chooseColor {
    margin-top: 5px;
  }
  .login-input {
    margin-top: 20px;
    width: 90%;
  }
}
.right {
  width: 90%;
  height: 90px;
  margin: 0 auto;
  border: 1px lightblue solid;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
  .right-title {
    padding-left: 5px;
    font-size: 17px;
  }
  .right-detail {
    margin-top: 20px;
    padding-left: 5px;
    .right-input {
      width: 90%;
    }
  }
}
.wait {
  width: 90%;
  height: 90px;
  margin: 0 auto;
  border: 1px lightblue solid;
  background-color: white;
  margin-top: 10px;
  border-radius: 5px;
  .wait-title {
    padding-left: 5px;
    font-size: 17px;
  }
  .wait-detail {
    margin-top: 20px;
    padding-left: 5px;
    .wait-input {
      width: 90%;
    }
  }
}
::v-deep .m-colorPicker .box {
  z-index: 999;
}
.hightlight {
  border: 4px lightsalmon solid;
}
</style>