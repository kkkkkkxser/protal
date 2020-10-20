<template>
  <!-- 新建门户 -->
  <div class="body">
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
            <a-breadcrumb-item>门户配置</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="title">门户配置</div>
        <div class="details">
          <ul>
            <li class="firstline">
              <div class="lefts">
                <div class="lefts-top">门户名称</div>
                <div class="lefts-bottom">上级门户</div>
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
              </div>
            </li>
            <li class="secondline">
              <div class="lefts ap">是否启用</div>
              <div class="left-right ap">
                <a-radio-group v-model="isOpen">
                  <a-radio :value="1">是</a-radio>
                  <a-radio :value="2">否</a-radio>
                </a-radio-group>
              </div>
              <div class="medium ap">窗口</div>
              <div class="medium-right ap">
                <a-radio-group v-model="openWay">
                  <a-radio :value="1">新窗口</a-radio>
                  <a-radio :value="2">本窗口</a-radio>
                </a-radio-group>
              </div>
            </li>
            <li class="secondline">
              <div class="left">当前门户顺序</div>
              <div class="right"></div>
            </li>
            <li class="addline clearfix">
              <div class="add-left ad">页面</div>
              <div class="add-right ad" style="border-bottom: 0">
                <div class="addpage">
                  <div class="block">类型</div>
                  <div class="block">名称</div>
                  <div class="block">窗口</div>
                  <div class="handle">
                    <a @click="add">添加</a>
                  </div>
                  <draggable @click="change">
                    <div
                      class="pages"
                      v-for="(item, index) in Page"
                      :key="index"
                    >
                      <div class="block topb">{{ item.type }}</div>
                      <div class="block topb">
                        <input type="text" class="Input" v-model="item.name" />
                      </div>
                      <div class="block topb">
                        <a-select default-value="local" size="small">
                          <a-select-option value="local"
                            >本窗口</a-select-option
                          >
                          <a-select-option value="new">新窗口</a-select-option>
                        </a-select>
                      </div>
                      <div class="handle topb" style="text-align: center">
                        <a-tag color="#f50" @click="delel(index)">删除</a-tag>
                      </div>
                    </div>
                  </draggable>
                </div>
              </div>
            </li>
            <li class="secondline">
              <div class="left ad">主题</div>
              <div class="right ad">
                <input type="text" class="Input" />
              </div>
            </li>
            <li class="secondline">
              <div class="left ad">LoGo</div>
              <div class="right ad">
                <a @click="choselogo">选择</a>
              </div>
            </li>
            <div class="secondline">
              <div class="left ad">页眉</div>
              <div class="right ad">
                <a @click="choseheader">选择</a>
              </div>
            </div>
            <div class="secondline">
              <div class="left ad">页脚</div>
              <div class="right ad">
                <a @click="chosefooter">选择</a>
              </div>
            </div>
            <li class="thirdline">
              <div class="left">默认访问者</div>
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
var Page = [
  {
    type: "页面",
    name: "testUrl",
    title: "testUrl",
  },
];
import draggable from "vuedraggable";
import ChosePeople from "../../components/chosePeople/ChosePeople";
import ChoseIcons from "../../components/choseIcons/ChoseIcons";
import CreateBy from "../../components/createBy/CreateBy";
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister(
  "Select",
  "Tag",
  "Radio",
  "Button",
  "Layout",
  "Breadcrumb",
  "Menu",
  "Icon"
);
import ChangeLogo from "../../components/changeLogo/ChangeLogo";
import HeaderSet from "../../components/headerSet/HeaderSet";
import FooterSet from "../../components/footerSet/FooterSet";
export default {
  components: {
    ChangeLogo,
    HeaderSet,
    FooterSet,
    ChoseIcons,
    ChosePeople,
    CreateBy,
    draggable,
  },
  data() {
    return {
      isOpen: 1,
      openWay: 1,
      changelogoVisible: false,
      headersetVisible: false,
      footersetVisible: false,
      Page,
      adds: {
        type: "页面",
        name: "test2",
        title: "test2",
      },
    };
  },
  created() {},
  methods: {
    change() {
      console.log(this.Page);
    },
    delel(i) {
      this.Page.splice(i, 1);
    },
    add() {
      this.Page.push(this.adds);
    },
    change(evt) {
      console.log(evt);
    },
    save() {
      console.log("save");
      console.log(this.$refs.ChoseIcons.currentIcon);
    },
    close() {
      this.$router.push("/protalconfig");
    },
    choselogo() {
      this.changelogoVisible = true;
    },
    choseheader() {
      this.headersetVisible = true;
    },
    chosefooter() {
      this.footersetVisible = true;
    },
    changelogoCanCel() {
      this.changelogoVisible = false;
    },
    changelogoOk() {
      this.changelogoVisible = false;
    },
    headersetCancel() {
      this.headersetVisible = false;
    },
    headersetlogoOk() {
      this.headersetVisible = false;
    },
    footersetCancel() {
      this.footersetVisible = false;
    },
    footersetOk() {
      this.footersetVisible = false;
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
.title {
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  font-weight: 900;
}
.details {
  width: 95%;
  min-height: 560px;
  margin: 0 auto;
  padding-top: 20px;
  .input {
    background-color: transparent;
    border: 0;
    outline: none;
    direction: ltr;
    text-align: left;
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
    padding-left: 10px;
  }
  .medium {
    width: 15%;
    height: 100%;
    float: left;
    border-right: 1px #cccccc solid;
    border-bottom: 1px #cccccc solid;
    padding-left: 10px;
    line-height: 66px;
  }
  .medium-right {
    width: 35%;
    height: 100%;
    float: left;
    border-bottom: 1px #cccccc solid;
    padding-left: 10px;
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
  .addline {
    min-height: 34px;
    border: 1px #cccccc solid;
    border-top: 0;
  }
  .ads {
    border-bottom: 0;
    line-height: 33px;
  }
  .ed {
    padding-top: 6px;
  }
  .ap {
    border-bottom: 0px;
    line-height: 33px;
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
  .addpage {
    width: 99%;
    border: 1px #cccccc solid;
    min-height: 29px;
    margin-top: 2px;
  }
  .adds {
    width: 100%;
    height: 29px;
    border: 1px #cccccc solid;
    border-bottom: 0;
  }
  .block {
    width: 30%;
    height: 26px;
    border-right: 1px #cccccc solid;
    background-color: #f6f6f6;
    float: left;
    text-align: center;
  }
  .handle {
    width: 10%;
    height: 26px;
    border-right: 1px #cccccc solid;
    background-color: #f6f6f6;
    float: left;
    text-align: center;
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
  .add-left {
    width: 15%;
    // min-height: 33px;
    // height: 100%;
    float: left;
    background-color: #f6f6f6;
    // border-bottom: 1px #cccccc solid;
    padding-left: 5px;
  }
  .add-right {
    width: 85%;
    border-left: 1px #cccccc solid;
    min-height: 33px;
    float: right;
    border-bottom: 1px #cccccc solid;
    padding-left: 10px;
    display: flex;
    align-items: center;
    padding-top: 3px;
    padding-bottom: 5px;
  }
  .topb {
    border-top: 1px #cccccc solid;
    background-color: white;
    height: 36px;
    text-align: left;
    padding-left: 10px;
  }
  .clearfix:after {
    /*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
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
}
</style>