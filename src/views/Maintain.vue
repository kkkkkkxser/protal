<template>
  <!-- 门户维护 -->
  <div>
    <a-layout>
      <a-layout-content>
        <div class="secondBar">
          <div class="title">
            <a-icon type="folder" />
            <a @click="show = !show">门户维护</a>
          </div>
          <ul v-show="show">
            <li>
              <a-icon type="folder" />
              <a
                @click="Trans('/loginconfig')"
                :class="current == '/loginconfig' ? 'now' : ''"
                >登录页</a
              >
            </li>
            <li>
              <a-icon type="folder" />
              <a
                @click="Trans('/protalconfig')"
                :class="current == '/protalconfig' ? 'now' : ''"
                >门户配置</a
              >
            </li>
            <!-- <li>
              <a-icon type="folder" />
              <a
                @click="Trans('/pageconfig')"
                :class="current == '/pageconfig' ? 'now' : ''"
                >页面配置</a
              >
            </li> -->
            <!-- <li>
              <a-icon type="folder" />
              <a
                @click="Trans('/paramsconfig')"
                :class="current == '/paramsconfig' ? 'now' : ''"
                >参数配置</a
              >
            </li> -->
          </ul>
        </div>
        <div class="contain">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  data() {
    return {
      current: "/loginconfig",
      show: "true",
    };
  },
  methods: {
    // 路由跳转
    Trans(param) {
      this.current = param;
      this.$router.push(param);
    },
  },
  // watch: {
  //   $route(to, from) {
  //     console.log(from);
  //   },
  // },
};
</script>
<style lang="less" scoped>
ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.secondBar {
  padding-top: 10px;
  width: 12%;
  height: 91vh;
  float: left;
  border-right: 1px #dbdbdb solid;
  a {
    padding-left: 3px;
  }
  .title {
    padding-left: 5px;
  }
  li {
    padding-left: 24px;
    margin-top: 10px;
  }
  //   li:hover a {
  //     color: #1890ff;
  //   }
  a {
    color: #868989;
  }
  .now {
    color: #1890ff;
  }
}
.contain {
  width: 88%;
  height: 91vh;
  float: left;
  padding-top: 10px;
  padding-left: 10px;
}
</style>

