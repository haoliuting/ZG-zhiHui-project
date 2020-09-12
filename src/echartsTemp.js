var myChart = echarts.init(document.getElementById("main"));

// 指定图表的配置项和数据
var option = {
  title: {
    text: "ECharts 入门示例",
  },
  tooltip: {},
  legend: {
    data: ["销量"],
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);



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