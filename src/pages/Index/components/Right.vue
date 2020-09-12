<template>
  <div class="right">
      <!-- 派出所数量  -->
      <right-police-num></right-police-num>
      <!-- 案件数量 -->
      <right-case-num></right-case-num>
      <!-- 摄像头数量 -->
      <right-camera-num></right-camera-num>
  </div>
</template>

<script>
import rightPoliceNum from "./right-police-num"
import rightCaseNum from "./right-case-num"
import rightCameraNum from "./right-camera-num"
export default {
  components:{
    rightPoliceNum,
    rightCaseNum,
    rightCameraNum
  }
}
</script>

<style scoped>
.right{
  /* width: 436px; */
  width: 25%;
}
</style>