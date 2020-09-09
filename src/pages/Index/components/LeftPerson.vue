<template>
  <div class="person">
    <!-- 头部 -->
    <v-title title="名商圈人流量"></v-title>

    <!-- 内容 -->
    <div class="main">
      <!-- 总体概况 -->
      <div class="con">
        <div class="left">
          <h3>418.32K</h3>
          <p>北京路商圈实时</p>
        </div>
        <div class="right">
          <div id="table1" class="line"></div>
          <div class="right-border"></div>
        </div>
      </div>

      <!-- 具体详情 -->
      <div class="detail">
        <div class="inner">
          <!-- 每一项 -->
          <div class="item">
            <div class="info">
              <div class="address">天河路</div>
              <div class="num">47.32K</div>
              <!-- 上要 类名 shang ,下要xia类名 -->
              <div class="trend shang">
                +12.6%
                <i class="iconfont icon-shangjiantou"></i>

                <!-- 此处是上下箭头,使用条件判断战士即可 -->
                <!-- <i class="iconfont icon-shangjiantou"></i>
                <i class="iconfont icon-xiajiantou"></i>-->
              </div>
            </div>
            <div class="right table">
              <div id="table2" class="line"></div>
              <div class="right-border"></div>
            </div>
          </div>

          <div class="item">
            <div class="info">
              <div class="address">天河路</div>
              <div class="num">47.32K</div>
              <!-- 上要 类名 shang ,下要xia类名 -->
              <div class="trend xia">
                +12.6%
                <i class="iconfont icon-xiajiantou"></i>

                <!-- 此处是上下箭头,使用条件判断战士即可 -->
                <!-- <i class="iconfont icon-shangjiantou"></i>
                <i class="iconfont icon-xiajiantou"></i>-->
              </div>
            </div>
            <div class="right table">
              <div id="table3" class="line"></div>
              <div class="right-border"></div>
            </div>
          </div>
          <div class="item">
            <div class="info">
              <div class="address">天河路</div>
              <div class="num">47.32K</div>
              <!-- 上要 类名 shang ,下要xia类名 -->
              <div class="trend xia">
                +12.6%
                <i class="iconfont icon-xiajiantou"></i>

                <!-- 此处是上下箭头,使用条件判断战士即可 -->
                <!-- <i class="iconfont icon-shangjiantou"></i>
                <i class="iconfont icon-xiajiantou"></i>-->
              </div>
            </div>
            <div class="right table">
              <div id="table4" class="line"></div>
              <div class="right-border"></div>
            </div>
          </div>
          <div class="item">
            <div class="info">
              <div class="address">天河路</div>
              <div class="num">47.32K</div>
              <!-- 上要 类名 shang ,下要xia类名 -->
              <div class="trend xia">
                +12.6%
                <i class="iconfont icon-xiajiantou"></i>

                <!-- 此处是上下箭头,使用条件判断战士即可 -->
                <!-- <i class="iconfont icon-shangjiantou"></i>
                <i class="iconfont icon-xiajiantou"></i>-->
              </div>
            </div>
            <div class="right table">
              <div id="table5" class="line"></div>
              <div class="right-border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //此处是个假数据
      mockData: [4, 5, 3, 2, 4, 3, 6, 4],
    };
  },
  methods: {
    //渲染图表 传入domId和数据 borderColor折线颜色  areaColor-面积颜色
    renderTable(domId, data, borderColor, areaColor) {
      var myChart = this.$echarts.init(document.getElementById(domId));
      var option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          show: false,
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          show: false,
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: data,
            type: "line",
            symbol: "none",
            areaStyle: {
              normal: {
                color: areaColor,
              },
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  color: borderColor,
                },
              },
            },
          },
        ],
      };

      myChart.setOption(option);
    },
  },
  mounted() {
    //渲染图表
    this.renderTable("table1", this.mockData, "#008AFF", "#092379");
    this.renderTable("table2", this.mockData, "#008AFF", "#092379");
    this.renderTable("table3", this.mockData, "#B6811D", "#5D4F2F");
    this.renderTable("table4", this.mockData, "#008046", "#004F4D");
    this.renderTable("table5", this.mockData, "#BA03A3", "#502880");
  },
};
</script>

<style scoped>
.main {
  background: rgba(14, 16, 31, 0.55);
}
.con {
  padding: 20px 10px 0;
  display: flex;
}
.left {
  flex: 1;
}
.left h3 {
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
  opacity: 1;
}
.left p {
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  opacity: 1;
}
.right {
  width: 300px;
  height: 58px;
  position: relative;
}
.right .line {
  width: 100%;
  height: 100%;
}
.right-border {
  position: absolute;
  border: 1px dashed #fff;
  width: 242px;
  height: 58px;
  left: 28px;
  top: 0;
}
.detail {
  overflow: hidden;
  padding: 10px;
}
.inner {
  width: 430px;
}
.item {
  width: 201px;
  margin-right: 14px;
  float: left;
  color: #fff;
  margin-top: 21px;
}
.info {
  overflow: hidden;
  position: relative;
}
.address {
  float: left;
  font-size: 12px;
  line-height: 14px;
}
.num {
  width: 100%;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
}
.trend {
  float: right;
  font-size: 12px;
  line-height: 14px;
}
.shang {
  color: #e20080;
}
.xia {
  color: #23b899;
}
.table{
  width: 100%;
  height: 35.88px;
  float: none;
  margin-top: 10px;
}
.table .line{
  margin-left: -23px;
  width: 250px;

}
.table .right-border{
  width: 202px;
  height: 38px;
  left: 0;
  top: -1px;

}
</style>
