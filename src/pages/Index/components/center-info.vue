<template>
  <div class="info">
    <div class="left">
      <div class="title">
        <div class="dot"></div>
        <div class="title-text">实时告警信息</div>
      </div>
      <table width="100%">
        <tr class="theader">
          <th>级别</th>
          <th>姓名</th>
          <th>出生</th>
          <th>性别</th>
          <th>失踪日期</th>
          <th>失踪地点</th>
          <th>当前状态</th>
        </tr>

        <tbody class="tbody">
          <tr>
            <td>
              <img class="img" :src="imgs.icon" alt />
            </td>
            <td>姓名</td>
            <td>出生</td>
            <td>性别</td>
            <td>失踪日期</td>
            <td>失踪地点</td>
            <td>当前状态</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="line"></div>
    <div class="right"></div>
  </div>
</template>

<script>
import icon4 from "@/assets/img/center-icon4.png";
export default {
  data() {
    return {
      imgs: {
        icon: icon4,
      },
    };
  },
};
</script>

<style scoped>
.info {
  margin: 0px 10px 30px;
  height: 190px;
  background: rgba(14, 16, 31, 0.75);
  display: flex;
  padding: 0px 20px;
  box-sizing: border-box;
}
.left {
  flex: 1;
}
.line {
  width: 2px;
  height: 143px;
  margin-top: 47px;
  background: #004e8f;
}
.right {
  flex: 1;
}
.title {
  overflow: hidden;
}
.dot {
  float: left;
  width: 5px;
  height: 5px;
  background: #323efb;
  border-radius: 50%;
  opacity: 1;
  margin-top: 17.5px;
}
.title-text {
  float: left;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #ffffff;
  margin-top: 10px;
  margin-left: 8px;
}
tr {
  height: 37px;
}
.theader th {
  font-size: 12px;
  font-weight: 400;
  line-height: 37px;
  color: #58cfff;
  text-align: left;
}
.tbody tr td {
  font-size: 10px;
  font-weight: 400;
  line-height: 37px;
  color: #ffffff;
   border: 1px solid #ffffff;
}
.tbody tr:hover{
  background: #004E8F;
}
.img{
  width: 18px;
  height: 18px;
  margin-top: 9.5px;
}
</style>