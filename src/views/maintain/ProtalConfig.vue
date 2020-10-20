<template>
  <!-- 门户配置 -->
  <div>
    <!-- 面包屑导航 -->
    <div class="header">
      <div class="bread">
        <a-breadcrumb>
          <a-breadcrumb-item>
            <a-icon type="home" />
          </a-breadcrumb-item>
          <a-breadcrumb-item>
            <span>门户引擎</span>
          </a-breadcrumb-item>
          <a-breadcrumb-item>门户维护</a-breadcrumb-item>
          <a-breadcrumb-item>门户配置</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="handle">
        <a-button @click="createprotal">新建门户</a-button>
      </div>
    </div>
    <div class="title">
      <a-table
        :columns="columns"
        :data-source="data"
        childrenColumnName="children"
        :rowSelection="rowSelection"
      >
        <span slot="handle" slot-scope="text, record">
          <a-tag @click="edit(record.key)" color="#2db7f5" class="edit"
            >编辑</a-tag
          >
          <a-popconfirm
            title="确定要删除这个门户吗?"
            cancel-text="取消"
            ok-text="确定"
            @confirm="confirm"
            @cancel="cancel"
          >
            <a-tag
              v-if="!record.isChild"
              class="delete"
              color="#f50"
              @click="delet(record.key)"
              >删除</a-tag
            >
          </a-popconfirm>
          <a-tag
            v-if="!record.isChild"
            class="delete"
            color="#87d068"
            @click="delet(record.key)"
            >禁用</a-tag
          >
        </span>
      </a-table>
      <!-- <ul>
        <li>门户名称</li>
        <li>门户类型</li>
        <li>是否启用</li>
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
    title: "门户名称",
    dataIndex: "name",
  },
  {
    title: "门户类型",
    dataIndex: "type",
  },
  {
    title: "是否启用",
    dataIndex: "open",
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
    name: "门户1",
    type: "门户",
    open: "启用",
    isChild: false,
    children: [
      {
        key: "11",
        name: "页面1",
        type: "页面",
        open: "启用",
        isChild: true,
      },
    ],
  },
  {
    key: "2",
    name: "门户2",
    type: "门户",
    open: "启用",
    isChild: false,
  },
  {
    key: "3",
    name: "门户3",
    type: "门户",
    open: "启用",
    isChild: false,
  },
  {
    key: "4",
    name: "门户4",
    type: "门户",
    open: "启用",
    isChild: false,
  },
];
// 引入组件封装注册
import { componentRegister } from "@/util/index";

import { message } from "ant-design-vue";
componentRegister(
  "Popconfirm",
  "Tag",
  "Table",
  "Button",
  "Layout",
  "Breadcrumb",
  "Menu",
  "Icon"
);
export default {
  data() {
    return {
      columns,
      data,
    };
  },
  methods: {
    // 新建门户
    createprotal() {
      this.$router.push("/protalcreate");
    },
    // 编辑门户
    edit(i) {
      this.$router.push("/protalcreate");
      console.log(i);
    },
    // 删除门户
    delet(i) {
      console.log(i);
    },
    confirm() {
      message.success("删除成功");
    },
    cancel() {
      message.error("取消删除");
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
ul {
  margin: 0 px;
  padding: 0px;
  list-style-type: none;
}
ul {
  display: flex;
}
li {
  font-weight: bold;
  width: 25%;
  text-align: center;
}
.header {
  height: 50px;
  .bread {
    width: 80%;
    float: left;
  }
  .handl {
    width: 20%;
    float: right;
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