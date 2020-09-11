<template>
  <div class="general">
    <div class="title">北京海淀人流量实时监控</div>
    <!-- 内容 -->
    <div class="main">
      <!-- 每一项 -->
      <div class="item" v-for="item in mockData" :key="item.id">
        <div class="item-con">
          <div class="item-title">
            <div class="item-text">商圈人流量</div>
            <img class="item-icon" :src="item.icon" alt />
          </div>
          <div class="item-num">{{item.num}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon1 from "@/assets/img/center-icon1.png";
import icon2 from "@/assets/img/center-icon2.png";
import icon3 from "@/assets/img/center-icon3.png";
import icon4 from "@/assets/img/center-icon4.png";
export default {
  data() {
    return {
      mockData: [
        {
          id: 1,
          name: "商圈人流量",
          num: "718.5K",
          icon: icon1,
        },
        {
          id: 2,
          name: "失踪人员统计",
          num: "4185",
          icon: icon2,
        },
        {
          id: 3,
          name: "监控设备",
          num: "4185",
          icon: icon3,
        },
        {
          id: 4,
          name: "告警信息",
          num: "4185",
          icon: icon4,
        },
      ],
    };
  },
};
</script>

<style scoped>
.general {
  margin-top: 20px;
}
.title {
  text-align: center;
  line-height: 24px;
  color: #ffffff;
  font-size: 20px;
}
.main {
  display: flex;
  margin-top: 25px;
}
.item {
  flex: 1;
}
.item-con {
  margin: 0px 6px;
  padding: 0px 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 81px;
}
.item-title {
  overflow: hidden;
}
.item-text {
  float: left;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  color: #58cfff;
  margin-top: 10px;
}
.item-icon {
  float: right;
  margin-top: 10px;
}
.item-num {
  font-size: 39px;
  line-height: 47px;
  color: #ffffff;
}
</style>