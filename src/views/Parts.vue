<template>
  <!-- 门户部件 -->
  <div>
    <a-layout>
      <a-layout-content>
        <div class="secondBar">
          <div class="title">
            <a-icon type="folder" />
            <a @click="show = !show">门户部件</a>
          </div>
          <ul v-show="show">
            <li>
              <a-icon type="folder" />
              <a
                @click="Trans('shortcuts')"
                :class="current == 'shortcuts' ? 'now' : ''"
                >快捷方式</a
              >
            </li>
            <li>
              <a-icon type="folder" />
              <a
                @click="Trans('links')"
                :class="current == 'links' ? 'now' : ''"
                >常用链接</a
              >
            </li>
            <!-- <li>
              <a-icon type="folder" />
              <a
                @click="Trans('menus')"
                :class="current == 'menus' ? 'now' : ''"
                >级联菜单</a
              >
            </li> -->
            <li>
              <a-icon type="folder" />
              <a @click="Trans('bars')" :class="current == 'bars' ? 'now' : ''"
                >系统导航</a
              >
            </li>
            <li>
              <a-icon type="folder" />
              <a
                @click="Trans('customs')"
                :class="current == 'customs' ? 'now' : ''"
                >自定义页面</a
              >
            </li>
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
      current: "shortcuts",
      show: "true",
    };
  },
  methods: {
    Trans(param) {
      this.current = param;
      this.$router.push({
        path: "/partsdetail",
        query: {
          detail: param,
        },
      });
    },
  },
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