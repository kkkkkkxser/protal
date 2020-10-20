<template>
  <!-- 登录页 -->
  <div class="main">
    <!-- 面包屑导航 -->
    <a-breadcrumb>
      <a-breadcrumb-item>
        <a-icon type="home" />
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <span>门户引擎</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item>门户维护</a-breadcrumb-item>
      <a-breadcrumb-item>登录页</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 选择布局模式 -->
    <div class="choose">
      <div class="title">
        <a @click="changeColor">请选择登录页面模板</a>
      </div>
      <div class="page">
        <ul>
          <li v-for="(item, index) in loginPage" :key="index">
            <div
              class="preview"
              @mouseenter="Hover(index)"
              @mouseleave="Leave(index)"
            >
              <img
                :src="require(`../../assets/img/${item.img}`)"
                alt
                class="preview-pic"
              />
              <div class="operates" v-show="item.show">
                <div class="operate" @click="preView(item.name, index)">
                  预览
                </div>
                <div class="operate" @click="toDefault(index)">设为默认</div>
                <div class="operate" @click="toDesign(item.name, index)">
                  定制
                </div>
              </div>
            </div>
            <div class="name">
              <i v-show="item.isDefault == true" class="default">默认</i
              >{{ item.description }}
            </div>
          </li>
          <!-- <li></li> -->
          <!-- <li></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister, changeStyle } from "@/util/index";
import { Badge, Button, Layout, Breadcrumb, Menu, Icon } from "ant-design-vue";
import { message } from "ant-design-vue";
componentRegister("Badge", "Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  data() {
    return {
      show: false,
      loginPage: this.$store.state.loginPage.loginPage,
      obj: {
        mainColor: "purple",
        activeColor: "green",
      },
    };
  },
  methods: {
    // 改变主题
    changeColor() {
      changeStyle(this.obj);
    },
    // 操作
    preView(param, index) {
      // this.$router.push(param);
      // param = "/" + param;
      let go = this.$router.resolve({ path: param });
      window.open(go.href, "_blank");
      this.loginPage[index].show = false;
    },
    toDefault(index) {
      this.loginPage.forEach((p, i) => {
        if (i == index) {
          p.isDefault = true;
        } else {
          p.isDefault = false;
        }
      });
      this.loginPage[index].show = false;
    },
    toDesign(param, index) {
      this.$router.push({
        path: "/logindetails",
        query: {
          currentPage: param,
        },
      });
      this.loginPage[index].show = false;
    },
    // Hover事件
    Hover(index) {
      this.loginPage[index].show = true;
    },
    Leave(index) {
      this.loginPage[index].show = false;
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
.main {
  width: 100%;
  height: 100%;
}
.choose {
  margin-top: 20px;
  width: 100%;
  height: 90%;
  .title {
    width: 100%;
    height: 15%;
    border-top: 1px #dbdbdb solid;
    border-bottom: 1px #dbdbdb solid;
    text-align: center;
    line-height: 80px;
    a {
      // color: #40a9ff;
      color: @mainColor;
      font-size: 27px;
      font-weight: bold;
    }
  }
  .page {
    ul {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      width: 30%;
      height: 200px;
      margin-left: 30px;
      margin-top: 20px;
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.125);
    }
    .preview {
      position: relative;
      width: 100%;
      height: 80%;
      // background: url("../../assets/img/loginA.png") no-repeat;
      // background-size: 100%;
      .preview-pic {
        width: 100%;
        height: 100%;
      }

      .operates {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 25%;
        .operate {
          width: 33.3%;
          height: 100%;
          float: left;
          background: rgba(76, 76, 76, 0.7);
          text-align: center;
          color: white;
          line-height: 40px;
        }
        .operate:hover {
          cursor: pointer;
          background: rgba(36, 36, 36, 0.7);
        }
      }
    }
    .name {
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
    }
  }
}
.default {
  display: block;
  font-style: normal;
  font-size: 13px;
  width: 40px;
  height: 20px;
  line-height: 18px;
  text-align: center;
  background-color: #38adff;
  border-radius: 10px;
  color: white;
  margin-right: 10px;
  margin-top: 2px;
}
</style>