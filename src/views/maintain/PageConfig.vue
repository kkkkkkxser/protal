<template>
  <!-- 页面配置 -->
  <div class="main">
    <!-- 面包屑导航 -->
    <!-- <div class="header">
      <div class="bread">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <a-icon type="home" />
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <span>门户引擎</span>
          </a-breadcrumb-item>
          <a-breadcrumb-item>门户维护</a-breadcrumb-item>
          <a-breadcrumb-item>页面配置</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
    </div> -->
    <div class="search">
      <a-input-search class="searchs"></a-input-search>
      <div class="handle">
        <a-button @click="createNew">新建页面</a-button>
      </div>
    </div>
    <div class="title">
      <a-table
        :row-selection="rowSelection"
        :columns="columns"
        :data-source="data"
      >
        <span slot="handle" slot-scope="text, record">
          <a-tag @click="edit(record.key)" color="#2db7f5" class="edit"
            >编辑</a-tag
          >
          <a-tag class="delete" color="#f50" @click="delet(record.key)"
            >删除</a-tag
          >
        </span>
      </a-table>
      <!-- <ul>
        <li>序号</li>
        <li>名称</li>
        <li>主题</li>
        <li>类型</li>
        <li>操作</li>
      </ul> -->
    </div>
    <div class="protal"></div>
    <div class="pages"></div>
  </div>
</template>
<script>
const columns = [
  {
    title: "序号",
    dataIndex: "key",
  },
  {
    title: "名称",
    dataIndex: "name",
  },
  {
    title: "主题",
    dataIndex: "theme",
  },
  {
    title: "类型",
    dataIndex: "type",
  },
  {
    title: "操作",
    dataIndex: "handle",
    scopedSlots: { customRender: "handle" },
  },
];
const data = [
  {
    key: "1",
    name: "页面1",
    theme: "普通主题",
    type: "页面",
  },
  {
    key: "2",
    name: "页面2",
    theme: "普通主题",
    type: "页面",
  },
  {
    key: "3",
    name: "页面3",
    theme: "普通主题",
    type: "页面",
  },
  {
    key: "4",
    name: "页面4",
    theme: "普通主题",
    type: "页面",
  },
];
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import {
  Tag,
  Table,
  Input,
  Button,
  Layout,
  Breadcrumb,
  Menu,
  Icon,
} from "ant-design-vue";
import { message } from "ant-design-vue";
componentRegister(
  "Tag",
  "Table",
  "Input",
  "Button",
  "Layout",
  "Breadcrumb",
  "Menu",
  "Icon"
);
export default {
  data() {
    return {
      data,
      columns,
    };
  },
  methods: {
    createNew() {
      this.$router.push("/pagecreate");
    },
    edit(i) {
      console.log(i);
    },
    delet(i) {
      console.log(i);
    },
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        getCheckboxProps: (record) => ({
          props: {
            disabled: record.name === "Disabled User",
            name: record.name,
          },
        }),
      };
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}
.header {
  height: 50px;
  width: 100%;
}
.bread {
  border-bottom: 1px #dbdbdb solid;
  float: left;
  width: 90%;
  height: 50px;
}
.handle {
  float: right;
  margin-right: 20px;
}
.search {
  width: 100%;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px #dbdbdb solid;
}
.searchs {
  width: 40%;
}
.title {
  ul {
    margin: 0px;
    padding: 0px;
    display: flex;
    list-style-type: none;
  }
  li {
    font-weight: bold;
    width: 20%;
    text-align: center;
  }
}
.edit:hover {
  cursor: pointer;
}
.delete {
  margin-left: 10px;
}
.delete:hover {
  cursor: pointer;
}
</style>