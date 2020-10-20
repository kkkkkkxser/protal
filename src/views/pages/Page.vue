<template>
  <!-- 具体页面 -->
  <div class="main">
    <div class="header-fa">
      <div class="header">
        <Header></Header>
        <!-- <HeaderB></HeaderB> -->
        <!-- <HeaderC></HeaderC> -->
        <!-- <HeaderD></HeaderD> -->
      </div>
    </div>
    <div class="bottom">
      <div class="center">
        <grid-layout
          :layout.sync="layout"
          :col-num="24"
          :row-height="30"
          :is-draggable="false"
          :is-resizable="false"
          :is-mirrored="false"
          :vertical-compact="true"
          :margin="[10, 10]"
          :use-css-transforms="true"
        >
          <grid-item
            v-for="item in layout"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
            :key="item.i"
            class="item"
          >
            <component :is="item.component"></component>
          </grid-item>
        </grid-layout>
      </div>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueGridLayout from "vue-grid-layout";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeaderB from "../../components/header/HeaderB";
import HeaderC from "../../components/header/HeaderC";
import HeaderD from "../../components/header/HeaderD";
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Footer,
    Header,
    HeaderB,
    HeaderC,
    HeaderD,
  },
  data() {
    return {
      layout: this.$store.state.portal.portal[2].layout,
    };
  },
  methods: {
    circle() {
      this.layout.forEach((i, index) => {
        if (this.layout[index].component) {
          this.registerComponent(this.layout[index].component);
        }
      });
    },
    registerComponent(templateName) {
      Vue.component(
        templateName,
        require("../../components/" + templateName + ".vue").default
      );
    },
  },
  created() {
    this.circle();
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
}
.header-fa {
  width: 100%;
  height: 12%;
}
.header {
  width: 100%;
  height: 12%;
  // background-color: lightsalmon;
  position: fixed;
  z-index: 99;
}
.bottom {
  width: 100%;
  height: 88%;
  overflow: auto;
  background-color: @backgColor;
}
.center {
  width: 80%;
  min-height: 80%;
  margin: 0 auto;
  background-color: @backgColor;
  .item {
    // border: 1px grey solid;
    background-color: #ffffff;
    border-radius: 10px;
  }
}
.footer {
  margin-top: 50px;
  width: 100%;
  height: 6%;
  // background-color: lightyellow;
}
</style>