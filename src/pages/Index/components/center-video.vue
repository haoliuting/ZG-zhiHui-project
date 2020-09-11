<template>
  <div class="video">
    <div class="item">
      <div class="item-con">
        <img class="item-img" :src="imgs.p1" alt />
        <div class="item-text">主要区域监控视频1</div>
      </div>
    </div>
    <div class="item">
      <div class="item-con">
        <img class="item-img" :src="imgs.p1" alt />
        <div class="item-text">主要区域监控视频2</div>
      </div>
    </div>
  </div>
</template>

<script>
import p1 from "@/assets/img/center-p1.png";
import p2 from "@/assets/img/center-p2.png";
export default {
  data() {
    return {
      imgs: {
        p1,
        p2,
      },
    };
  },
};
</script>

<style scoped>
.video {
  margin-top: 163px;
}
.item {
  overflow: hidden;
  margin-bottom: 30px;
}
.item-con {
  float: right;
}
.item-img {
  width: 260px;
  height: 163px;
}
.item-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #ffffff;
}
</style>