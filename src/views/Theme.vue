<template>
  <!-- 门户主题 -->
  <div class="main">
    <table border="1px">
      <tr>
        <th>序号</th>
        <th>ID</th>
        <th>名称</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in theme" :key="index">
        <td>{{ item.number }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>删除</td>
      </tr>
    </table>
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
      theme: this.$store.state.theme.theme,
    };
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-right: 3px;
}
table {
  width: 100%;
  // margin-top: 100px;
  line-height: 38px;
  border: 1px #d2d2d2 solid;
}
table tr:first-child {
  background-color: rgb(246, 246, 246);
}
table th {
  text-align: center;
}
table tr td:first-child {
  width: 10%;
  text-align: center;
}
table tr:hover {
  background-color: #f6f6f6;
}
</style>