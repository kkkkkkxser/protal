<template>
  <!-- 具体部件 -->
  <div>
    <div class="bread">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <a-icon type="home" />
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <span>门户引擎</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item>门户部件</a-breadcrumb-item>
        <a-breadcrumb-item>{{ current }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="search">
      <div class="Search">
        <a-input-search></a-input-search>
      </div>
      <div class="handle">
        <a-button @click="create">新建</a-button>
        <a-button class="delete">批量删除</a-button>
      </div>
    </div>
    <div class="detail">
      <a-table
        :row-selection="rowSelection"
        :columns="columns"
        :data-source="data"
      >
        <span slot="handle" slot-scope="text, record">
          <a-tag @click="edit(record.key)" color="#2db7f5" class="edit"
            >编辑</a-tag
          >
          <a-popconfirm
            title="确定要删除这个部件吗?"
            cancel-text="取消"
            ok-text="确定"
            @confirm="confirm"
            @cancel="cancel"
          >
            <a-tag class="delete" color="#f50" @click="delet(record.key)"
              >删除</a-tag
            >
          </a-popconfirm>
        </span>
      </a-table>
    </div>
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
    title: "创建时间",
    dataIndex: "createtime",
  },
  {
    title: "创建人",
    dataIndex: "creater",
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
    name: "快捷方式1",
    createtime: "2020-10-13",
    creater: "test",
  },
  {
    key: "2",
    name: "快捷方式2",
    createtime: "2020-10-13",
    creater: "test",
  },
  {
    key: "3",
    name: "快捷方式3",
    createtime: "2020-10-13",
    creater: "test",
  },
  {
    key: "4",
    name: "快捷方式4",
    createtime: "2020-10-13",
    creater: "test",
  },
];

// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister(
  "Popconfirm",
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
      current: "快捷方式",
      columns,
      data,
      currentRoute: "shortcuts",
    };
  },
  methods: {
    confirm() {
      message.success("删除成功");
    },
    cancel() {
      message.error("取消删除");
    },
    //部件编辑
    edit(i) {
      console.log(i);
      this.create();
    },
    // 部件删除
    delet(i) {
      console.log(i);
    },
    // 部件跳转
    create() {
      this.currentRoute = this.$route.query.detail;
      if (this.currentRoute == "shortcuts" || this.currentRoute == "links") {
        this.$router.push({
          path: "/create",
          query: {
            detail: this.currentRoute,
          },
        });
      } else if (this.currentRoute == "bars") {
        this.$router.push("/bars");
      } else if (this.currentRoute == "customs") {
        this.$router.push("/custom");
      }
    },
  },
  watch: {
    // 当前头部面包屑
    $route(to, from) {
      switch (this.$route.query.detail) {
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
  },
  computed: {
    // 列表选择
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
.bread {
  height: 35px;
}
.search {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px #dbdbdb solid;
  border-top: 1px #dbdbdb solid;
}
.Search {
  width: 30%;
  float: left;
}
.handle {
  width: 20%;
  float: right;
}
.delete {
  margin-left: 40px;
}
.text {
  margin-left: 10px;
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