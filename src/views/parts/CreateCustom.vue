<template>
  <!-- 自定义页面 -->
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
              <span>门户管理</span>
            </a-breadcrumb-item>
            <a-breadcrumb-item>公共门户部件</a-breadcrumb-item>
            <a-breadcrumb-item>自定义页面</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="title">自定义页面</div>
        <div class="details">
          <ul>
            <li class="firstline">
              <div class="left">名称</div>
              <div class="right">
                <input type="text" class="Input" />
              </div>
            </li>
            <li class="secondline">
              <div class="left">内容</div>
              <div class="right ed">
                <div class="editor" id="editor"></div>
              </div>
            </li>
            <li class="thirdline">
              <div class="left">可维护者</div>
              <div class="right">
                <ChosePeople></ChosePeople>
              </div>
            </li>
            <li class="fourthline">
              <!-- <div class="left">创建人</div>
              <div class="right"></div> -->
              <CreateBy></CreateBy>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wangEditor from "wangeditor";
import ChosePeople from "../../components/chosePeople/ChosePeople";
import CreateBy from "../../components/createBy/CreateBy";
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { Button, Layout, Breadcrumb, Menu, Icon } from "ant-design-vue";
import { message } from "ant-design-vue";
componentRegister("Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  components: {
    ChosePeople,
    CreateBy,
  },
  data() {
    return {
      editor: null,
      editorContent: "",
    };
  },
  methods: {
    change(evt) {
      console.log(evt);
    },
    save() {
      console.log("save");
    },
    close() {
      this.$router.push("/partsdetail");
    },
  },
  mounted() {
    const editor = new wangEditor(`#editor`);
    editor.config.onchange = (html) => {
      this.editorContent = html;
    };
    editor.config.uploadImgServer = "/upload-img";
    editor.config.menus = [
      // 菜单配置
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "code", // 插入代码
      "undo", // 撤销
      "redo", // 重复
    ];
    editor.create();
    this.editor = editor;
  },
  created() {},
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
  line-height: 80px;
  font-weight: 900;
}
.details {
  width: 90%;
  min-height: 200px;
  margin: 0 auto;
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
    height: 33px;
    border: 1px #cccccc solid;
    border-bottom: 0;
    line-height: 33px;
  }
  .secondline {
    height: 360px;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
    text-align: center;
    margin-left: 10px;
    outline: none;
  }
  .add {
    width: 99%;
    border: 1px #cccccc solid;
    height: 25px;
    margin: 0 auto;
    text-align: center;
    border-top: 0;
    .number {
      width: 4%;
      height: inherit;
      float: left;
      border-right: 1px #cccccc solid;
    }
    .name {
      width: 25%;
      height: inherit;
      border-right: 1px #cccccc solid;
      float: left;
    }
    .link {
      width: 50%;
      height: inherit;
      border-right: 1px #cccccc solid;
      float: left;
    }
    .links {
      width: 35%;
      height: inherit;
      border-right: 1px #cccccc solid;
      float: left;
    }
    .pic {
      width: 15%;
      height: inherit;
      border-right: 1px #cccccc solid;
      float: left;
    }
    .handle {
      width: 20%;
      height: inherit;
      float: left;
    }
  }
}
</style>