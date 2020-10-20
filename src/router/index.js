import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 首页
  {
    path: "/",
    name: "BackHome",
    redirect: "/maintain",
    component: () => import("../views/BackHome.vue"),
    children: [
      // 门户维护
      {
        path: "/maintain",
        name: "MainTain",
        redirect: "/loginconfig",
        component: () => import("../views/Maintain.vue"),
        children: [
          //登录页配置
          {
            path: "/loginconfig",
            name: "LoginConfig",
            component: () => import("../views/maintain/LoginConfig.vue"),
          },
          // 参数配置
          {
            path: "/paramsconfig",
            name: "ParamsConfig",
            component: () => import("../views/maintain/ParamsConfig.vue"),
          },
          // 门户配置
          {
            path: "/protalconfig",
            name: "ProtalConfig",
            component: () => import("../views/maintain/ProtalConfig.vue"),
          },
        ],
      },
      // 页面配置
      {
        path: "/pageconfig",
        name: "PageConfig",
        component: () => import("../views/maintain/PageConfig.vue"),
      },
      // 门户主题
      {
        path: "/theme",
        name: "Theme",
        component: () => import("../views/Theme.vue"),
      },
      // 门户部件
      {
        path: "/parts",
        name: "Parts",
        redirect: "/partsdetail",
        component: () => import("../views/Parts.vue"),
        children: [
          {
            path: "/partsdetail",
            name: "PartsDetail",
            component: () => import("../views/parts/PartsDetail"),
          },
        ],
      },
      // 门户个人
      {
        path: "personal",
        name: "Personal",
        component: () => import("../views/Personal.vue"),
      },
    ],
  },
  // 登录页面A
  {
    path: "/loginA",
    name: "LoginA",
    component: () => import("../views/login/LoginA.vue"),
  },
  // 登录页面B
  {
    path: "/loginB",
    name: "LoginB",
    component: () => import("../views/login/LoginB.vue"),
  },
  // 登录页面C
  {
    path: "/loginC",
    name: "LoginC",
    component: () => import("../views/login/LoginC.vue"),
  },
  {
    path: "/loginD",
    name: "LoginD",
    component: () => import("../views/login/LoginD.vue"),
  },
  {
    path: "/loginE",
    name: "LoginE",
    component: () => import("../views/login/LoginE.vue"),
  },
  //登录页面具体配置页面
  {
    path: "/logindetails",
    name: "LoginDetails",
    component: () => import("../views/login/LoginDetails.vue"),
  },
  //门户页面具体配置
  {
    path: "/pagedesign",
    name: "Pagedesin",
    component: () => import("../views/pages/PageDesign.vue"),
  },
  //门户页面新建页面
  {
    path: "/pagecreate",
    name: "PageCreate",
    component: () => import("../views/pages/PageCreate.vue"),
  },
  //门户页面具体页面
  {
    path: "/page",
    name: "Page",
    component: () => import("../views/pages/Page.vue"),
  },
  //新建门户页面
  {
    path: "/protalcreate",
    name: "ProtalCreate",
    component: () => import("../views/protal/ProtalCreate.vue"),
  },
  //创建快捷方式，等组件，
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/parts/Create.vue"),
  },
  //创建系统导航
  {
    path: "/bars",
    name: "CreateBars",
    component: () => import("../views/parts/CreateBars.vue"),
  },
  //创建自定义页面
  {
    path: "/custom",
    name: "CreateCustom",
    component: () => import("../views/parts/CreateCustom.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
