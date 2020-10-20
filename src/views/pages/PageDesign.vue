<template>
  <!-- 门户页面配置 -->
  <div class="body">
    <Choose
      ref="choose"
      :visible.sync="visible"
      @cancel="handleCancel"
    ></Choose>
    <ChangeLogo
      ref="changelogo"
      :visible="changelogoVisible"
      @cancel="changelogoCanCel"
      @ok="changelogoOk"
    ></ChangeLogo>
    <HeaderSet
      ref="headerset"
      :visible.sync="headersetVisible"
      @cancel="headersetCancel"
      @ok="headersetlogoOk"
    ></HeaderSet>
    <FooterSet
      ref="footerset"
      :visible.sync="footersetVisible"
      @cancel="footersetCancel"
      @ok="footersetOk"
    ></FooterSet>
    <Change
      ref="change"
      :visible="changeVisible"
      @cancel="changeCancel"
      @ok="changeOk"
    ></Change>
    <Set ref="set" :visible="setVisible" @cancel="setCancel" @ok="setOk"></Set>
    <div class="header">
      <div class="title">门户页面具体配置页面</div>
      <div class="tips">您可以对页面进行自定义设置</div>
      <!-- 操作 -->
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
        <div class="diyButton" @click="choose">
          <a>选择模板</a>
        </div>
      </div>
    </div>
    <div class="select">
      <div class="current">当前模板：{{ currentTemplate }}</div>
      <div class="choose">
        可选组件：
        <ul>
          <li v-for="(item, index) in tools" :key="index">
            <a draggable="true">{{ item.name }}</a>
            <img
              @click="add(item.component, item.name)"
              class="add"
              src="../../assets/img/add.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="layout">
      <div class="layout-design">
        <div class="true-design">
          <div class="true-header">
            <div class="header-logo">
              <img src="../../assets/img/withName.png" alt class="img" />
            </div>
            <div class="header-choose" @click="ChangeLogo">切换LoGo</div>
            <div class="header-set">
              <a>默认页眉</a>
              <div class="set-button" @click="HeaderSet">切换页眉</div>
            </div>
          </div>
          <div class="true-body">
            <div class="true-left" v-if="haveLeft"></div>
            <!-- <div class="true-right"> -->
            <div :class="haveLeft ? 'true-right' : 'no-left'">
              <grid-layout
                :layout.sync="layout"
                :col-num="24"
                :row-height="30"
                :is-draggable="true"
                :is-resizable="true"
                :is-mirrored="false"
                :vertical-compact="true"
                :margin="[10, 10]"
                :use-css-transforms="true"
                class="container"
              >
                <grid-item
                  v-for="(item, index) in layout"
                  :is-draggable="item.isDraggable"
                  :is-resizable="item.isResizable"
                  :x="item.x"
                  :y="item.y"
                  :w="item.w"
                  :h="item.h"
                  :i="item.i"
                  :key="item.i"
                  class="item"
                  @resized="resizedEvent"
                  @moved="movedEvent"
                >
                  <div
                    class="detail"
                    @mouseenter="mouseenter(index)"
                    @mouseleave="mouseleave(index)"
                  >
                    <div class="head clearfix">
                      <div class="title">
                        <a>{{ item.name }}</a>
                      </div>
                      <div class="operates" v-show="item.show">
                        <img
                          class="pic"
                          @click="set(item)"
                          src="../../assets/img/set.png"
                          alt
                        />
                        <img
                          class="pic"
                          @click="change(item.name, item.component)"
                          src="../../assets/img/change.png"
                          alt
                        />
                        <img
                          class="pic"
                          @click="delele(index)"
                          src="../../assets/img/delele.png"
                          alt
                        />
                      </div>
                    </div>
                    <div class="details">
                      <component :is="item.component"></component>
                    </div>
                  </div>
                </grid-item>
              </grid-layout>
            </div>
          </div>
          <div class="true-footer">
            <a>默认页脚</a>
            <div class="footer-button" @click="FooterSet">设置</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { Button, Layout, Breadcrumb, Menu, Icon } from "ant-design-vue";
import { message } from "ant-design-vue";
componentRegister("Button", "Layout", "Breadcrumb", "Menu", "Icon");
//拖动组件
import VueGridLayout from "vue-grid-layout";
//选择模板组件
import Choose from "../../components/page/Choose";
import ChangeLogo from "../../components/changeLogo/ChangeLogo";
import HeaderSet from "../../components/headerSet/HeaderSet";
import FooterSet from "../../components/footerSet/FooterSet";
import Change from "../../components/change/Change";
import Set from "../../components/set/Set";
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Choose,
    ChangeLogo,
    HeaderSet,
    FooterSet,
    Change,
    Set,
  },
  data() {
    return {
      layout: [],
      // layout: this.$store.state.portal.portal[0].layout,
      visible: false,
      currentTemplate: "",
      tools: this.$store.state.tools.tools,
      changelogoVisible: false,
      headersetVisible: false,
      footersetVisible: false,
      changeVisible: false,
      setVisible: false,
      haveLeft: false,
    };
  },
  watch: {
    // 监听选择模板的变化
    visible(val, oldVal) {
      this.currentTemplate = this.$refs.choose.currentTemplate;
      this.layout = this.$refs.choose.currentLayout;
      this.circle();
      if (this.$refs.choose.currentNumber == "4") {
        console.log("左右导航模式");
        this.haveLeft = true;
      } else {
        this.haveLeft = false;
      }
    },
  },
  created() {},
  methods: {
    circle() {
      this.layout.forEach((i, index) => {
        if (this.layout[index].component) {
          this.registerComponent(this.layout[index].component);
        }
      });
    },
    registerComponent(templateName) {
      Vue.component(
        templateName,
        require("../../components/" + templateName + ".vue").default
      );
    },
    drag(ev) {
      console.log("...");
    },
    //头部操作
    save() {
      console.log(this.loginA);
    },
    reset() {
      console.log("reset");
    },
    exit() {
      this.$router.push("/pagecreate");
    },
    //网格布局事件
    resizedEvent(i, newH, newW, newHPx, newWPx) {
      console.log("大小改变完了", i, newH, newW, newHPx, newWPx);
      console.log(this.layout);
    },
    movedEvent(i, newX, newY) {
      console.log("移动结束了", i, newX, newY);
      console.log(this.layout);
    },
    //选模板模态框
    handleCancel() {
      this.visible = false;
    },
    choose() {
      this.visible = true;
    },
    //hover事件
    mouseenter(index) {
      this.layout[index].show = true;
    },
    mouseleave(index) {
      this.layout[index].show = false;
    },
    //框框操作
    delele(index) {
      this.layout.splice(index, 1);
    },
    //添加组件
    add(component, name) {
      var d = this.layout.length;
      if (d == 0) {
        var a = {
          x: 0,
          y: 0,
          w: 4,
          h: 4,
          i: d,
          component: component,
          name: name,
          show: false,
        };
      } else {
        var maxH = this.layout[0].y;
        console.log(maxH);
        for (var i = 0; i < this.layout.length; i++) {
          if (this.layout[i].y > maxH) {
            maxH = this.layout[i].y + this.layout[i].h;
          }
          console.log(maxH);
        }
        var a = {
          x: 0,
          y: maxH,
          w: 4,
          h: 4,
          i: d + 1,
          component: component,
          name: name,
          show: false,
        };
      }
      this.layout.push(a);
      Vue.component(
        component,
        require("../../components/" + component + ".vue").default
      );
      console.log(this.layout);
    },
    //引入组件的开关
    // Open(v) {
    //   this.v = true;
    // },
    // Cancel(v) {
    //   console.log("?");
    //   this.v = false;
    //   console.log(v);
    //   console.log(this.v);
    // },
    // Ok(v) {
    //   this.v = false;
    // },
    ChangeLogo() {
      this.changelogoVisible = true;
    },
    changelogoCanCel() {
      this.changelogoVisible = false;
    },
    changelogoOk() {
      this.changelogoVisible = false;
    },
    HeaderSet() {
      this.headersetVisible = true;
    },
    headersetCancel() {
      this.headersetVisible = false;
    },
    headersetlogoOk() {
      this.headersetVisible = false;
    },
    FooterSet() {
      this.footersetVisible = true;
    },
    footersetCancel() {
      this.footersetVisible = false;
    },
    footersetOk() {
      this.footersetVisible = false;
    },
    set(item) {
      this.setVisible = true;
      this.$refs.set.init(item);
    },
    setCancel() {
      this.setVisible = false;
    },
    setOk() {
      this.setVisible = false;
    },
    change(a, b) {
      this.layout.forEach((l) => {
        if (l.component == b) {
          l.component = "links";
          l.name = "导航链接";
          let tmp = l.component;
          Vue.component(
            tmp,
            require("../../components/" + tmp + ".vue").default
          );
        }
      });
      return;
      this.changeVisible = true;
      this.$refs.change.init(a, b);
    },
    changeCancel() {
      this.changeVisible = false;
    },
    changeOk() {
      this.changeVisible = false;
    },
  },
};
</script>
<style lang="less" scoped>
.body {
  width: 100%;
  height: 100%;
}
.header {
  width: 100%;
  height: 7%;
  background-color: #001529;
  .title {
    float: left;
    font-size: 23px;
    color: white;
    padding-left: 16px;
    line-height: 50px;
    height: 100;
  }
  .tips {
    float: left;
    // color: white;
    color: hsla(0, 0%, 100%, 0.65);
    line-height: 60px;
    text-align: center;
    width: 60%;
    height: 100%;
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
.main {
  width: 100%;
  height: 93%;
}
.select {
  width: 15%;
  height: 93%;
  float: left;
  background-color: #424750;
  color: hsla(0, 0%, 100%, 0.65);
  .current {
    height: 10%;
    width: 100%;
    font-size: 17px;
    line-height: 70px;
    padding-left: 17px;
  }
  .choose {
    height: 90%;
    width: 100%;
    font-size: 17px;
    padding-left: 17px;
    a {
      color: hsla(0, 0%, 100%, 0.65);
    }
  }
  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    margin-top: 10px;
  }
  li {
    padding-left: 20px;
    line-height: 30px;
  }
  .add {
    width: 15px;
    height: 15px;
    float: right;
    margin-right: 30px;
    margin-top: 8px;
  }
  .add:hover {
    cursor: pointer;
  }
}
.layout {
  width: 85%;
  height: 93%;
  float: right;
  // background-color: lightslategrey;
  .layout-design {
    width: 97%;
    height: 97%;
    background-color: #f7f7f7;
    // border: 1px lightcoral solid;
    margin: 0 auto;
    margin-top: 8px;
    .true-design {
      width: 80%;
      height: 100%;
      // background-color: lightcyan;
      margin: 0 auto;
      overflow: auto;
    }
    .true-header {
      width: 100%;
      height: 10%;
      background-color: #82d0f4;
      .header-logo {
        width: 20%;
        height: 100%;
        float: left;
        .img {
          width: 80%;
          height: 60%;
          margin-top: 10px;
          margin-left: 10px;
        }
      }
      .header-choose {
        width: 8%;
        // height: 20%;
        // border: 1px red solid;
        float: left;
        color: white;
        text-align: center;
        line-height: 20px;
        margin-left: 20px;
        margin-top: 20px;
        border-radius: 4px;
        font-size: 14px;
        background-color: #47b5e6;
        padding: 5px;
      }
      .header-choose:hover {
        cursor: pointer;
      }
      .header-set {
        width: 15%;
        height: 100%;
        float: left;
        margin-left: 17%;
        color: white;
        line-height: 70px;
        a {
          color: black;
          padding-right: 5px;
        }
        .set-button {
          display: inline;
          background-color: #47b5e6;
          padding: 5px;
          border-radius: 4px;
        }
        .set-button:hover {
          cursor: pointer;
        }
      }
    }
    .true-body {
      margin-top: 20px;
      // min-height: 74%;
      height: 74%;
      background-color: #f7f7f7;
      // border: 2px #e5e5e5 solid;
      overflow-x: hidden;
      .true-left {
        width: 13%;
        height: 100%;
        float: left;
        // border: 2px #e5e5e5 solid;
        background-color: white;
      }
      .true-right {
        width: 86%;
        height: 100%;
        float: right;
        // border: 2px #e5e5e5 solid;
        margin-left: 2px;
        overflow: auto;
        background-color: white;
      }
      .no-left {
        width: 100%;
        height: 100%;
        background-color: white;
      }
      .container {
        background-color: white;
      }
      // .item {
      //   background-color: lightcyan;
      //   border: 1px grey solid;
      // }
      .detail {
        height: 100%;
        width: 100%;
        border: 1px grey solid;
        padding: 5px;
        overflow: hidden;
        a {
          font-weight: bold;
          color: black;
        }
      }
      .detail:hover {
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.125);
      }
    }
    .true-footer {
      margin-top: 19px;
      width: 100%;
      height: 9%;
      background-color: #c8c8c8;
      text-align: center;
      line-height: 60px;
      a {
        color: black;
      }
      .footer-button {
        display: inline;
        background-color: #82d0f4;
        padding: 5px;
        border-radius: 4px;
        padding-left: 7px, 2px;
        margin-left: 5px;
        font-size: 13px;
        color: white;
      }
      .footer-button:hover {
        cursor: pointer;
      }
    }
  }
}
// ::v-deep .vue-resizable-handle {
//   background: url("../../assets/img/triangle.png");
//   background-color: red;
// }
::v-deep .vue-grid-item.vue-grid-placeholder {
  background-color: grey;
}
.title {
  float: left;
}
.operates {
  float: right;
  .pic {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .pic:hover {
    cursor: pointer;
  }
}
.head {
  width: 100%;
}
.details {
  margin-top: 5px;
  width: 100%;
  height: 85%;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
</style>