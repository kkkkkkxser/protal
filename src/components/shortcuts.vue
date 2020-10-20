<template>
  <!-- 快捷方式 -->
  <div class="main">
    <ul>
      <li>
        <div class="pic">
          <!-- <img src="../assets/img/baidu.jpg" alt="" class="logo" /> -->
          <span class="iconfont icon-yongche logo"></span>
        </div>
        <div class="text">
          <a href="http://www.baidu.com">百度</a>
        </div>
      </li>
      <li>
        <div class="pic">
          <!-- <img src="../assets/img/JD.jpg" alt="" class="logo" /> -->
          <span class="iconfont icon-- logo"></span>
        </div>
        <div class="text">
          <a href="http://www.baidu.com">京东</a>
        </div>
      </li>
      <li>
        <div class="pic">
          <!-- <img src="../assets/img/taobao.jpg" alt="" class="logo" /> -->
          <span class="iconfont icon-zhaodai logo"></span>
        </div>
        <div class="text">
          <a href="http://www.baidu.com">淘宝</a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// 引入组件封装注册
import { componentRegister } from "@/util/index";
import { message } from "ant-design-vue";
componentRegister("Button", "Layout", "Breadcrumb", "Menu", "Icon");
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
// * {
//   color: @mainColor;
// }
.main {
  width: 100%;
  height: 100%;
}
ul {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  margin-left: 40px;
}
li {
  width: 10%;
  height: 110px;
  //   border: 1px red solid;
  margin-left: 20px;
  color: @mainColor;
}
li:hover {
  cursor: pointer;
  transform: scale(1.1);
  background-color: @mainColor;
  color: white;
  a {
    color: white;
  }
}
.pic {
  width: 60%;
  height: 60%;
  //   border: 1px red solid;
  margin: 0 auto;
  margin-top: 8px;
}
.logo {
  width: 100%;
  height: 100%;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  width: 60%;
  height: 20%;
  //   border: 1px red solid;
  margin: 0 auto;
  margin-top: 4px;
  text-align: center;
  a {
    color: @mainColor;
  }
}
</style>