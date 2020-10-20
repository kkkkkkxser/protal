<template>
  <!-- 新建部件 -->
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
            <a-breadcrumb-item>{{ current }}</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="title">{{ current }}</div>
        <div class="details">
          <ul>
            <li class="firstline">
              <div class="left">名称</div>
              <div class="right">
                <input type="text" class="Input" />
              </div>
            </li>
            <li class="secondline">
              <div class="second">
                <div class="number">序号</div>
                <div class="name">名称</div>
                <div :class="routeDetail == 'shortcuts' ? 'links' : 'link'">
                  链接
                </div>
                <div class="pic" v-show="routeDetail == 'shortcuts'">图标</div>
                <div class="handle">
                  <a>选择分类</a>&nbsp; <a>系统引入</a>&nbsp;
                  <a @click="add">自定义</a>&nbsp;
                </div>
              </div>
              <draggable @change="change">
                <!-- <transition-group> -->
                <div class="add" v-for="(item, index) in links" :key="index">
                  <div class="number">
                    <input type="text" v-model="item.number" class="input" />
                  </div>
                  <div class="name">
                    <input type="text" v-model="item.name" class="input" />
                  </div>
                  <div :class="routeDetail == 'shortcuts' ? 'links' : 'link'">
                    <input type="text" v-model="item.link" class="input" />
                  </div>
                  <div class="pic" v-show="routeDetail == 'shortcuts'">
                    <!-- <input type="text" v-model="item.pic" class="input" /> -->
                    <ChoseIcons ref="ChoseIcons"> </ChoseIcons>
                  </div>
                  <div class="handle">
                    <a-tag @click="delet(index)" color="#f50">删除</a-tag>
                  </div>
                </div>
                <!-- </transition-group> -->
              </draggable>
            </li>
            <li class="thirdline">
              <div class="left">可维护者</div>
              <div class="right">
                <ChosePeople></ChosePeople>
              </div>
            </li>
            <li class="fourthline">
              <CreateBy></CreateBy>
              <!-- <div class="create-left tocenter">创建人</div>
              <div class="create-right tocenter">test</div>
              <div class="create-left tocenter">创建时间</div>
              <div class="create-right tocenter">{{ createTime }}</div> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import ChoseIcons from "../../components/choseIcons/ChoseIcons";
import ChosePeople from "../../components/chosePeople/ChosePeople";
import CreateBy from "../../components/createBy/CreateBy";
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { Tag, Button, Layout, Breadcrumb, Menu, Icon } from "ant-design-vue";
import { message } from "ant-design-vue";
componentRegister("Tag", "Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  components: {
    draggable,
    ChoseIcons,
    ChosePeople,
    CreateBy,
  },
  data() {
    return {
      current: "",
      routeDetail: this.$route.query.detail,
      links: [
        {
          number: 1,
          name: "百度",
          link: "www.baidu.com",
          pic: "pic1",
        },
        {
          number: 2,
          name: "新闻中心",
          link: "www.baidu.com",
          pic: "pic2",
        },
        {
          number: 3,
          name: "天气",
          link: "www.baidu.com",
          pic: "pic3",
        },
        {
          number: 4,
          name: "公告",
          link: "www.baidu.com",
          pic: "pic4",
        },
      ],
    };
  },
  methods: {
    add() {
      let test = {
        number: 2,
        name: "test2",
        link: "www.baidu.com",
      };
      this.links.push(test);
    },
    delet(index) {
      this.links.splice(index, 1);
    },
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
  created() {
    console.log(this.routeDetail);
    switch (this.routeDetail) {
      case "shortcuts":
        this.current = "快捷方式";
        break;
      case "links":
        this.current = "常用链接";
        break;
      case "menus":
        this.current = "级联菜单";
        break;
      case "bars":
        this.current = "系统导航";
        break;
      case "customs":
        this.current = "自定义页面";
        break;
    }
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
    min-height: 33px;
    border: 1px #cccccc solid;
    border-top: 0;
    line-height: 24px;
    padding-top: 9px;
    padding-bottom: 9px;
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
  .second {
    width: 99%;
    border: 1px #cccccc solid;
    height: 25px;
    margin: 0 auto;
    background-color: #eeeeee;
    text-align: center;
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
  .add {
    width: 99%;
    border: 1px #cccccc solid;
    height: 60px;
    margin: 0 auto;
    text-align: center;
    border-top: 0;
    .number {
      width: 4%;
      height: inherit;
      float: left;
      border-right: 1px #cccccc solid;
      display: flex;
      align-items: center;
    }
    .name {
      width: 25%;
      height: inherit;
      border-right: 1px #cccccc solid;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .link {
      width: 50%;
      height: inherit;
      border-right: 1px #cccccc solid;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .links {
      width: 35%;
      height: inherit;
      border-right: 1px #cccccc solid;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .pic {
      width: 15%;
      height: inherit;
      border-right: 1px #cccccc solid;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .handle {
      width: 20%;
      height: inherit;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.create-left {
  width: 15%;
  height: 100%;
  float: left;
  padding-left: 5px;
  background-color: #f6f6f6;
  border-right: 1px #cccccc solid;
  border-left: 1px #cccccc solid;
}
.create-right {
  width: 35%;
  height: 100%;
  float: left;
  padding-left: 5px;
}
</style>