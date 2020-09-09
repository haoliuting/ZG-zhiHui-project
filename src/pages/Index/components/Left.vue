<template>
  <div class="left">
      <!-- 名人圈流量 -->
      <left-Person></left-Person>

      <!-- 视频设备 -->
      <left-video></left-video>
  </div>
</template>

<script>
import LeftPerson from "./LeftPerson"
import LeftVideo from "./LeftVideo"
export default {
  components:{
    LeftPerson,
    LeftVideo
  }
}
</script>

<style scoped>
.left{
  width: 436px;
}
</style>