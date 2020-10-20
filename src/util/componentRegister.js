/** 组件注册js */
import Vue from "vue";
export default function componentRegister(componentNames) {
  const componentList = Array.isArray(componentNames)
    ? componentNames
    : [...arguments];
  componentList.map((v) => {
    Vue.use(require("ant-design-vue")[v]);
  });
}
