<template>
  <!-- 系统导航 -->
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
            <a-breadcrumb-item>系统导航</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="title">系统导航</div>
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
              <div class="right">
                <div class="tree">
                  <a-tree
                    class="draggable-tree"
                    draggable
                    :tree-data="gData"
                    :show-line="showline"
                    @dragenter="onDragEnter"
                    @drop="onDrop"
                    @select="choose"
                    :key="key"
                  />
                </div>
                <div v-show="handle" class="handle">
                  <div class="line top">
                    <a-button @click="addchild(gData)">添加子导航</a-button>
                    <a-button class="buttons" @click="addbro"
                      >添加兄弟导航</a-button
                    >
                  </div>
                  <div class="line">
                    菜单名:
                    <input type="text" v-model="current" class="input" />
                  </div>
                  <div class="line">
                    菜单链接:<input
                      type="text"
                      v-model="currentLink"
                      class="input"
                    />
                  </div>
                  <div class="line">打开方式:</div>
                  <div class="line">
                    <div class="line-left">图标:</div>
                    <div class="line-right">
                      <ChoseIcons ref="ChoseIcons"> </ChoseIcons>
                    </div>
                  </div>
                  <div class="line bottom">
                    <a-button>确定</a-button>
                    <a-button class="buttons">取消</a-button>
                    <a-button class="buttons" type="danger">删除</a-button>
                  </div>
                </div>
              </div>
            </li>
            <li class="thirdline">
              <div class="left">可维护者</div>
              <div class="right allcenter">
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
var gData = [
  {
    key: "f",
    title: "测试",
    link: "www.baidu.com",
  },
  {
    key: "d",
    title: "采集",
    link: "www.jd.com",
    children: [
      {
        key: "fcd",
        title: "why",
        link: "www.test.com",
      },
    ],
  },
  {
    key: "fc",
    title: "喝",
    link: "www.test.com",
  },
  {
    key: "fd",
    title: "的",
    link: "www.test.com",
  },
  {
    key: "fk",
    title: "密码",
    link: "www.test.com",
  },
];
import ChoseIcons from "../../components/choseIcons/ChoseIcons";
import ChosePeople from "../../components/chosePeople/ChosePeople";
import CreateBy from "../../components/createBy/CreateBy";
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { Tree, Button, Layout, Breadcrumb, Menu, Icon } from "ant-design-vue";
import { message } from "ant-design-vue";
componentRegister("Tree", "Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  components: {
    ChoseIcons,
    ChosePeople,
    CreateBy,
  },
  data() {
    return {
      gData,
      showline: true,
      current: "",
      currentKey: "",
      currentLink: "",
      handle: false,
      test: {
        key: "o",
        title: "oo",
        link: "ooo",
      },
      key: 0,
    };
  },
  methods: {
    // 添加子元素
    addchild(list) {
      list.forEach((g) => {
        if (g.children) {
          this.addchild(g.children);
        } else {
          if (g.key == this.currentKey) {
            g.children = [];
            g.children.push(this.test);
            this.key += 1;
          }
        }
      });
    },
    // 添加兄弟元素
    addbro() {},
    change(evt) {},
    // 保存
    save() {
      console.log("save");
    },
    // 关闭
    close() {
      // this.$router.push("/partsdetail");
      this.$router.go(-1);
    },
    // 选择导航
    choose(selectedKeys, e) {
      this.handle = true;
      let tmp = selectedKeys[0];
      this.currentKey = tmp;
      gData.forEach((g) => {
        if (g.key == tmp) {
          this.current = g.title;
          this.currentLink = g.link;
        } else {
          if (g.children) {
            g.children.forEach((c) => {
              if (c.key == tmp) {
                this.current = c.title;
                this.currentLink = c.link;
              }
            });
          }
        }
      });
    },
    // 拖动事件
    onDragEnter(info) {},
    onDrop(info) {
      // console.log(info);
      // 放到的key
      const dropKey = info.node.eventKey;
      // 拖动的key
      const dragKey = info.dragNode.eventKey;
      // 放到的节点分隔
      const dropPos = info.node.pos.split("-");
      console.log(info.dropPosition);
      console.log(dropPos[dropPos.length - 1]);
      const dropPosition =
        info.dropPosition - Number(dropPos[dropPos.length - 1]);
      // console.log(dropPosition);
      // console.log(info.dropToGap);
      const loop = (data, key, callback) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr);
          }
          if (item.children) {
            return loop(item.children, key, callback);
          }
        });
      };
      const data = [...this.gData];

      // Find dragObject
      let dragObj;
      loop(data, dragKey, (item, index, arr) => {
        arr.splice(index, 1);
        dragObj = item;
        // console.log(dragObj);
      });
      // 跨级拖动
      if (!info.dropToGap) {
        // Drop on the content
        alert("kua");
        loop(data, dropKey, (item) => {
          // console.log(item);
          item.children = item.children || [];
          // if (item.children) {
          //   alert("有孩子");
          //   // return;
          // } else {
          //   alert("here");
          //   item.children = [];
          // }
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.push(dragObj);
        });
      } else if (
        (info.node.children || []).length > 0 && // Has children
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        alert("cant");
        loop(data, dropKey, (item) => {
          item.children = item.children || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.unshift(dragObj);
        });
      } else {
        console.log(info.dropToGap);
        let ar;
        let i;
        loop(data, dropKey, (item, index, arr) => {
          ar = arr;
          i = index;
        });
        if (dropPosition === -1) {
          alert("-1");
          ar.splice(i, 0, dragObj);
        } else {
          alert("?");
          ar.splice(i + 1, 0, dragObj);
        }
      }
      this.gData = data;
    },
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
  .tree {
    width: 40%;
    height: 100%;
    float: left;
    overflow: auto;
  }
  .handle {
    width: 60%;
    height: 100%;
    float: right;
    border-left: 1px #cccccc solid;
    // padding-top: 20px;
    .line {
      height: 17%;
      // border: 1px red solid;
      border-bottom: 1px #cccccc solid;
      // padding-top: 10px;
      padding-left: 20px;
      display: flex;
      align-items: center;
    }
    .top {
      padding-top: 0;
    }
    .bottom {
      border: 0;
    }
    .buttons {
      margin-left: 20px;
    }
    .line-left {
      width: 15%;
      height: 100%;
      float: left;
      display: flex;
      align-items: center;
    }
    .line-right {
      width: 85%;
      height: 100%;
      float: left;
    }
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
  }
  .left {
    width: 15%;
    height: inherit;
    float: left;
    background-color: #f6f6f6;
    border-bottom: 1px #cccccc solid;
    padding-left: 5px;
    display: flex;
    align-items: center;
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