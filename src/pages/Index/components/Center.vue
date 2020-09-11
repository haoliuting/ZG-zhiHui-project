<template>
  <div class="center">
      <!-- 大致概况 -->
      <center-general></center-general>

      <!-- 监控视频 -->
      <center-video></center-video>

      <!-- 具体通报信息 -->
      <center-info></center-info>
  </div>
</template>

<script>
import centerGeneral from "./center-general"
import centerVideo from "./center-video"
import centerInfo from "./center-info"
export default {
  components:{
    centerGeneral,
    centerVideo,
    centerInfo
  }
}
</script>

<style scoped>
.center{
  flex: 1;
}
</style>