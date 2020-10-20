<template>
  <!-- 组件选择 -->
  <a-modal
    title="组件选择"
    width="700px"
    :visible="visible"
    @cancel="
      () => {
        $emit('cancel');
      }
    "
    @ok="
      () => {
        $emit('ok');
      }
    "
  >
    <div class="main">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="内容配置">
          <div class="content">
            {{ name }}
            {{ component }}
            <Content></Content>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="外观配置" force-render>
          <div class="outlook">
            <OutLook></OutLook>
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="权限配置">
          <div class="rights">
            <div class="leftt tocenter">可阅读者</div>
            <div class="rightt allcenter">
              <ChosePeople></ChosePeople>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
    <template slot="footer">
      <a-button
        key="submit"
        type="primary"
        @click="
          () => {
            $emit('ok');
          }
        "
        >确定</a-button
      >
      <a-button
        key="back"
        @click="
          () => {
            $emit('cancel');
          }
        "
        >关闭</a-button
      >
    </template>
  </a-modal>
</template>
<script>
import ChosePeople from "../../components/chosePeople/ChosePeople";
import OutLook from "../../components/outLook/OutLook";
import Content from "../../components/page/Content";
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Tabs", "Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  components: {
    ChosePeople,
    OutLook,
    Content,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: "",
      component: "",
    };
  },
  methods: {
    // 接受父组件的信息
    init(a, b) {
      console.log("----");
      console.log(this.name);
      console.log(this.component);
      this.name = a;
      this.component = b;
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 350px;
}
.content {
  width: 100%;
  height: 300px;
}
.outlook {
  width: 100%;
  height: 300px;
}
.rights {
  width: 100%;
  height: 130px;
  border: 1px #cccccc solid;
}
.leftt {
  width: 15%;
  height: 100%;
  border-right: 1px #cccccc solid;
  padding-left: 10px;
  float: left;
}
.rightt {
  width: 85%;
  height: 100%;
  float: right;
}
::v-deep .left {
  width: 95%;
}
::v-deep .right {
  width: 5%;
}
</style>