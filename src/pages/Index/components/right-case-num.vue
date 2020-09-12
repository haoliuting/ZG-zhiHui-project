<template>
  <div class="case">
    <v-title title="各区案件数量"></v-title>
    <div class="main">
      <div class="text">126.89K</div>
      <div class="circle"></div>
      <div id="chart" class="chart"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //模拟数据
      mockData: [
        {
          name: "行政案件",
          value: 1680,
          color: "#FBDE59",
        },
        {
          name: "民事案件",
          value: 1235,
          color: "#00D2FF",
        },
        {
          name: "行事案件",
          value: 3455,
          color: "#FF7070",
        },
        {
          name: "电信诈骗",
          value: 4655,
          color: "#1D40FE",
        },
      ],
    };
  },
  methods: {
    //绘制图表
    getCharts() {
      var myChart = this.$echarts.init(document.getElementById("chart"));

      // 指定图表的配置项和数据
      let option = {
        color: this.mockData.map((item) => item.color),
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          textStyle: {
            fontSize: 12, //字体大小
            color: "#ffffff", //字体颜色
          },
          x: "right",
          y: "center",
          orient: "vertical",
          data: this.mockData.map((item) => item.name),
        },

        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            center: ["50%", "60%"],
            roseType: "area",
            data: this.mockData,
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.getCharts();
  },
};
</script>

<style scoped>
.case {
  margin-bottom: 7px;
}
.main {
  padding: 10px;
  height: 272px;
  background: rgba(14, 16, 31, 0.55);
  position: relative;
}
.chart {
  width: 100%;
  height: 100%;
}
.circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-48%,24%);
  background: #36446a;
  z-index: 10;
}
.text {
  line-height: 30px;
  color: #ffffff;
  font-size: 25px;
  position: absolute;
  left: 17px;
  top: 21px;
}
</style>