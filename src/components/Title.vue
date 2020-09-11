<template>
  <div
    class="title"
    :style="{background:`url(${imgs.bg}) center center no-repeat`,backgroundSize:'100% 100%'}"
  >
    <div class="tit-con">
      <div class="dot"></div>
      <div class="title-con">{{title}}</div>
      <div class="more iconfont icon-gengduo"></div>
    </div>
  </div>
</template>

<script>
import bg from "@/assets/img/tit-bg.png";
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      imgs: {
        bg,
      },
    };
  },
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  overflow: hidden;
}
.tit-con {
  width: 100%;
  height: 46px;
  margin-top: 6px;
  box-sizing: border-box;
  /* border: 1px dashed #fff; */
  overflow: hidden;
  background: #0d1554;
}
.dot {
  width: 6px;
  height: 6px;
  margin-left: 10px;
  background: #008aff;
  border-radius: 50%;
  margin-top: 23px;
  float: left;
}
.title-con {
  color: #fff;
  line-height: 52px;
  font-size: 14px;
  margin-left: 15px;
  float: left;
}
.more {
  color: #008aff;
  width: 28px;
  height: 28px;
  border: 1px dashed #fff;
  margin-top: 11px;
  margin-right: 10px;
  float: right;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  font-weight: 900;
}
</style>