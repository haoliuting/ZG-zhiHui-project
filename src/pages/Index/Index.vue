<template>
  <div
    class="container"
    :style="{background:'url('+imgs.bgImg+') center no-repeat', backgroundSize:'100% 100%'}"
  >
    <!-- 头部 -->
    <my-head></my-head>
    <div class="main">
      <!-- 左侧图表 -->
      <v-left></v-left>

      <!-- 中间图表 -->
      <v-center></v-center>

      <!-- 右侧图表 -->
      <v-right></v-right>
    </div>
  </div>
</template>
<script>
import bgImg from "@/assets/img/index_bg.jpg";
import vLeft from "./components/Left";
import vCenter from "./components/Center";
import vRight from "./components/Right";
export default {
  components: {
    vLeft,
    vRight,
    vCenter,
  },
  data() {
    return {
      //图片
      imgs: {
        bgImg,
      },
    };
  },
  mounted(){
   
  }
};
</script>
<style scoped>
.container {
  min-width: 1920px;
  position: relative;
  /* height: 100%; */
}
.main{
    padding: 90px 30px 0;
    display: flex;
}
</style>