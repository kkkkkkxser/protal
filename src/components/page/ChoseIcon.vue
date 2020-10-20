<template>
  <!-- 选择图标 -->
  <a-modal
    title="选择图标"
    width="530px"
    :visible="visible"
    :footer="null"
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
    <!-- (item)=>{
    $emit('choose',item)
  } -->
    <div class="details">
      <ul>
        <li
          v-for="(item, index) in icons"
          :key="index"
          @click="chose(item.font_class)"
        >
          <span class="iconfont" :class="'icon-' + item.font_class"></span>
        </li>
      </ul>
    </div>
  </a-modal>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Modal", "Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      icons: this.$store.state.icons.icons,
    };
  },
  methods: {
    chose(item) {
      this.$emit("choose", item);
    },
  },
};
</script>
<style lang="less" scoped>
.details {
  width: 100%;
  height: 270px;
  // border: 1px #cccccc solid;
  overflow: auto;
}
ul {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
li {
  width: 14%;
  height: 65px;
  border: 1px #cccccc solid;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
}
li:hover {
  transform: scale(1.03);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.iconfont {
  font-size: 40px;
  color: pink;
}
</style> 