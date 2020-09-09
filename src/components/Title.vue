<template>
  <div class="title">
    <div class="dot"></div>
    <div class="title-con">{{title}}</div>
    <div class="more iconfont icon-gengduo"></div>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      required:true,
      type:String
    }
  }
};
</script>

<style scoped>
.title{
  width: 100%;
  height: 52px;
  box-sizing: border-box;
  border: 1px dashed #fff;
  overflow: hidden;
}
.dot{
  width: 6px;
  height: 6px;
  margin-left: 10px;
  background: #008AFF;
  border-radius: 50%;
  margin-top: 23px;
  float: left;
}
.title-con{
  color: #fff;
  line-height: 52px;
  font-size: 17px;
  margin-left: 15px;
  float: left;
}
.more{
  color: #008AFF;
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