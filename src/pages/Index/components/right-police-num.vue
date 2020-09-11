<template>
  <div class="police">
    <v-title title="各区派出所数量"></v-title>
    <div class="main">
      <!-- 顶部颜色分类 -->
      <div class="des">
        <div class="des-item" v-for="item in mockData" :key="item.id">
          <div class="des-item-color" :style="{background:item.color}"></div>
          <div class="des-item-text">{{item.address}}</div>
        </div>
      </div>

      <!-- 图表 -->
      <div class="charts">
        <div class="left-chart" >
          <div id="leftChart" class="left-bar"></div>
        </div>
        <div class="right-chart" id="rightChart">
          <img class="right-img" :src="imgs.luoxuan" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import luoxuan from "../../../assets/img/luoxuan.png"
export default {
  data() {
    return {
      //图片
      imgs:{
        luoxuan
      },
      mockData: [
        {
          id: 1,
          color: "#1D40FE",
          address: "番禺区",
          num: 130,
        },
        {
          id: 2,
          color: "#00D2FF",
          address: "番禺区",
          num: 520,
        },
        {
          id: 3,
          color: "#7679FE",
          address: "番禺区",
          num: 230,
        },
        {
          id: 4,
          color: "#FBDE59",
          address: "番禺区",
          num: 365,
        },
        {
          id: 5,
          color: "#00BB9D",
          address: "番禺区",
          num: 365,
        },
      ],
    };
  },
  methods: {
    //左侧图表绘制
    getLeftCharts() {
      var myChart = this.$echarts.init(document.getElementById("leftChart"));

      // 指定图表的配置项和数据
      var option = {
        color: this.mockData.map((item) => item.color),
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "10px",
          right: "0",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
        },
        yAxis: [
          {
            type: "value",
            //  去掉背景的网格线
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff", //这里用参数代替了
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#29304D"],
                width: 1,
                type: "solid",
              },
            },
          },
        ],
        series: this.mockData.map((item, index) => {
          let obj = {
            data: [item.num],
            type: "bar",
            showBackground: true,
            // barWidth: "10px",
            barCategoryGap:"20px",
            backgroundStyle: {
              color: "#313873",
            },
          };
          return obj;
        }),
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    //右侧图表绘制
    getRightCharts() {},
  },
  mounted() {
    this.getLeftCharts();
    this.getRightCharts();
  },
};
</script>

<style scoped>
.police {
  margin-bottom: 7px;
}
.main {
  height: 201px;
  background: rgba(14, 16, 31, 0.55);
}
.des {
  padding: 0px 10px;
  display: flex;
}
.des-item {
  flex: 1;
  overflow: hidden;
}
.des-item-color {
  width: 22px;
  height: 10px;
  float: left;
  margin-top: 13px;
  margin-right: 3px;
}
.des-item-text {
  float: left;
  line-height: 17px;
  color: #ffffff;
  font-size: 12px;
  margin-top: 9px;
}
.charts {
  padding: 0px 10px;
  display: flex;
}
.left-chart {
  width: 244px;
  height: 167px;
}
.left-bar{
  width: 100%;
  height: 190px;
  margin-top: -30px;
}
.right-chart {
  flex: 1;
  color: red;
}
.right-img{
  width: 106px;
  height: 143px;
  margin-top: 20px;
  margin-left: 20px;
}
</style>