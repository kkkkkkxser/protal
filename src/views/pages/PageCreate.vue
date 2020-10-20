<template>
  <!-- 新建页面 -->
  <div class="body">
    <div class="header">
      <a-button class="boton" @click="save">保存</a-button>
      <a-button class="boton" @click="close">关闭</a-button>
    </div>
    <div class="main">
      <div class="detail">
        <div class="detail-header">
          <a-breadcrumb>
            <a-breadcrumb-item>
              <a-icon type="home" />
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <span>首页</span>
            </a-breadcrumb-item>
            <a-breadcrumb-item>门户管理</a-breadcrumb-item>
            <a-breadcrumb-item>页面基本信息</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="details">
          <ul>
            <li class="firstline">
              <div class="lefts">
                <div class="lefts-top ad">名称</div>
                <div class="lefts-bottom ad">页面简介</div>
              </div>
              <div class="left-right">
                <!-- <input type="text" class="Input" /> -->
                <div class="left-right-top">
                  <input type="text" class="Input" />
                </div>
                <div class="left-right-bottom">
                  <input type="text" class="Input" />
                </div>
              </div>
              <div class="medium">图标</div>
              <div class="medium-right">
                <ChoseIcons ref="ChoseIcons"> </ChoseIcons>
                <!-- <div class="icon">
                  <span class="iconfont" :class="currentIcon"></span>
                </div>
                <div class="text">
                  <a @click="choseicon">选择</a>
                </div> -->
              </div>
            </li>
            <li class="secondline">
              <div class="left ad">类型</div>
              <div class="right ad">
                <a-radio-group v-model="type" @change="change">
                  <a-radio :value="1">页面</a-radio>
                  <a-radio :value="2">URL</a-radio>
                </a-radio-group>
                <a-button
                  v-show="type == 1"
                  type="primary"
                  size="small"
                  @click="toConfig"
                  >具体配置页面</a-button
                >
                <input v-show="type == 2" type="text" class="configInput" />
              </div>
            </li>
            <li class="secondline">
              <div class="left ad">主题</div>
              <div class="right ad">
                <input type="text" class="Input" />
              </div>
            </li>
            <li class="secondline">
              <div class="left ad">界面配置</div>
              <div class="right ad">
                <a-radio-group v-model="config">
                  <a-radio :value="1">优先使用门户配置的主题和页眉页脚</a-radio>
                  <a-radio :value="2">优先使用页面配置的主题和页眉页脚</a-radio>
                </a-radio-group>
              </div>
            </li>
            <li class="thirdline">
              <div class="left">默认访问者</div>
              <div class="right">
                <ChosePeople></ChosePeople>
              </div>
            </li>
            <li class="thirdline">
              <div class="left">可访问者</div>
              <div class="right">
                <ChosePeople></ChosePeople>
              </div>
            </li>
            <li class="thirdline">
              <div class="left">可维护者</div>
              <div class="right">
                <ChosePeople></ChosePeople>
              </div>
            </li>
            <li class="fourthline">
              <CreateBy></CreateBy>
              <!-- <div class="left">创建人</div>
              <div class="right"></div> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ChoseIcons from "../../components/choseIcons/ChoseIcons";
import ChosePeople from "../../components/chosePeople/ChosePeople";
import CreateBy from "../../components/createBy/CreateBy";
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { Radio, Button, Layout, Breadcrumb, Menu, Icon } from "ant-design-vue";
import { message } from "ant-design-vue";
componentRegister("Radio", "Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  components: {
    ChoseIcons,
    ChosePeople,
    CreateBy,
  },
  data() {
    return {
      type: 1,
      config: 1,
      choseIcon: false,
      currentIcon: "",
    };
  },
  methods: {
    change() {},
    save() {},
    close() {
      this.$router.push("/pageconfig");
    },
    toConfig() {
      this.$router.push("/pagedesign");
    },
  },
};
</script>
<style lang="less" scoped>
.body {
  width: 100%;
  min-height: 100vh;
  background-color: #eeeeee;
}
.header {
  height: 50px;
  background-color: white;
  text-align: right;
  padding-top: 8px;
  .boton {
    margin-right: 17px;
  }
}
.detail {
  width: 80%;
  margin: 0 auto;
  background-color: white;
  min-height: 350px;
  margin-top: 30px;
}
.detail-header {
  width: 100%;
  height: 35px;
  padding-top: 10px;
  padding-left: 10px;
}
.details {
  width: 95%;
  height: 580px;
  margin: 0 auto;
  padding-top: 20px;
  .input {
    background-color: transparent;
    border: 0;
    outline: none;
  }
  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
  }
  li {
    width: 100%;
  }
  .firstline {
    height: 66px;
    border: 1px #cccccc solid;
    border-bottom: 0;
    line-height: 33px;
  }
  .lefts {
    width: 15%;
    height: 100%;
    float: left;
    background-color: #f6f6f6;
    border-right: 1px#cccccc solid;
    border-bottom: 1px #cccccc solid;
    padding-left: 5px;
  }
  .lefts-top {
    width: 100%;
    border-bottom: 1px #cccccc solid;
  }
  .left-right-top {
    height: 33px;
    border-bottom: 1px #cccccc solid;
  }
  .left-right-bottom {
    height: 33px;
  }
  .left-right {
    width: 35%;
    height: 100%;
    float: left;
    border-right: 1px #cccccc solid;
    border-bottom: 1px #cccccc solid;
  }
  .medium {
    width: 15%;
    height: 100%;
    float: left;
    border-right: 1px #cccccc solid;
    border-bottom: 1px #cccccc solid;
    line-height: 66px;
    padding-left: 10px;
  }
  .medium-right {
    width: 35%;
    height: 100%;
    float: left;
    border-bottom: 1px #cccccc solid;
  }
  .secondline {
    height: 33px;
    border: 1px #cccccc solid;
    border-top: 0;
    // padding-top: 6px;
    // line-height: 33px;
    // padding-top: 9px;
    // padding-bottom: 9px;
  }
  .ed {
    padding-top: 6px;
  }
  .ad {
    line-height: 33px;
  }
  .editor {
    width: 98%;
    margin: 0 auto;
  }
  .thirdline {
    height: 100px;
    border: 1px #cccccc solid;
    border-top: 0;
    line-height: 100px;
  }
  .fourthline {
    height: 33px;
    border: 1px #cccccc solid;
    border-top: 0;
    line-height: 33px;
  }
  .right {
    width: 85%;
    border-left: 1px #cccccc solid;
    height: inherit;
    float: right;
    border-bottom: 1px #cccccc solid;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }
  .left {
    width: 15%;
    height: inherit;
    float: left;
    background-color: #f6f6f6;
    border-bottom: 1px #cccccc solid;
    padding-left: 5px;
  }
  .Input {
    border: 0;
    border-bottom: 1px #cccccc solid;
    width: 90%;
    height: 20px;
    text-align: left;
    margin-left: 10px;
    outline: none;
  }
  .configInput {
    border: 0;
    border-bottom: 1px #cccccc solid;
    width: 80%;
    height: 20px;
    text-align: left;
    margin-left: 10px;
    outline: none;
  }
}
</style>