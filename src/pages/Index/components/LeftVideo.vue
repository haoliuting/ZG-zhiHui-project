 <template>
  <div class="video">
    <!-- 视频设备 -->
    <v-title title="视频设备"></v-title>
    <!-- 图表 -->
    <div class="charts">
      <div class="inner">
        <!-- 每一个 -->
        <div class="item" v-for="item in mockData" :key="item.id">
          <div class="item-main">
            <div class="item-chart">
              <!-- 仪表盘 -->
              <left-panel 
              :outerColor="item.outerColor"
              :innerColor="item.innerColor"
              :percent="item.percent"
              :num="item.num"
              :name="item.name"
              ></left-panel>
            </div>
            <div class="item-text">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <!-- 表头 -->
      <div class="table-header">
        <div class="street">主要道路</div>
        <div class="video-num">视频数</div>
        <div class="slot-num">卡口数</div>
        <div class="dot-num">点位数</div>
      </div>
      <!-- 内容 -->
      <div class="main">
        <div class="slider" ref="slider" @mousedown="sliderDown"></div>
        <div class="tbody" ref="tbody">
          <div class="real-body" ref="rbody">
            <div class="line" v-for="item in d" :key="item">
              <div class="street">
                <i class="dot"></i> 中山大道
              </div>
              <div class="video-num">56</div>
              <div class="slot-num">56</div>
              <div class="dot-num">56</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftPanel from "./left-panel"
export default {
  components:{
    leftPanel
  },
  data() {
    return {
      d: [1, 2, 3, 4, 6, 5],
      mockData:[
        {
          id:1,
          outerColor:"rgb(123,0,81)",
          innerColor:"rgb(252,71,146)",
          percent:0.3,
          num:58,
          name:"数量",
          title:"高峰站点"
        },
        {
          id:2,
          outerColor:"rgb(8,59,124)",
          innerColor:"rgb(12,114,255)",
          percent:0.5,
          num:58,
          name:"数量",
          title:"卡口"
        },
        {
          id:3,
          outerColor:"rgb(8,59,124)",
          innerColor:"rgb(12,114,255)",
          percent:0.7,
          num:58,
          name:"数量",
          title:"高清球机"
        },
        {
          id:4,
          outerColor:"rgb(8,59,124)",
          innerColor:"rgb(12,114,255)",
          percent:0.7,
          num:58,
          name:"数量",
          title:"高空枪机"
        },
        {
          id:5,
          outerColor:"rgb(8,59,124)",
          innerColor:"rgb(12,114,255)",
          percent:0.7,
          num:58,
          name:"数量",
          title:"模拟枪机"
        },
        {
          id:6,
          outerColor:"rgb(8,59,124)",
          innerColor:"rgb(12,114,255)",
          percent:0.7,
          num:58,
          name:"数量",
          title:"高清枪机"
        },


      ]
    };
  },
  methods: {
    //滑动小块
    sliderDown(e) {
      e.preventDefault();
      let slider = this.$refs.slider;
      let tbody = this.$refs.tbody;
      let rbody = this.$refs.rbody;
      //最大上卷距离
      let maxScrollTop = rbody.offsetHeight - tbody.offsetHeight;
      let sb_y = e.clientY - slider.getBoundingClientRect().top;
      document.onmousemove = (e) => {
        e.preventDefault();
        //slider距离顶部的top
        let top = e.clientY - sb_y - tbody.getBoundingClientRect().top;
        //top临界值
        if (top > tbody.clientHeight - slider.clientHeight) {
          top = tbody.clientHeight - slider.clientHeight;
        }
        if (top < 0) {
          top = 0;
        }
        slider.style.top = top + "px";

        tbody.scrollTop =
          (top * maxScrollTop) / (tbody.clientHeight - slider.clientHeight);
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
    //具体滚轮逻辑
    wheel(ev) {
      let slider = this.$refs.slider;
      let tbody = this.$refs.tbody;
      let rbody = this.$refs.rbody;
      var oEvent = ev || event;
      var bDown = true;
      bDown = oEvent.wheelDelta ? oEvent.wheelDelta > 0 : oEvent.detail < 0;
      oEvent.preventDefault && oEvent.preventDefault();
      if (bDown) {
        //上滚
        tbody.scrollTop -= 10;
      } else {
        //下滚
        tbody.scrollTop += 10;
      }
      slider.style.top =
        (tbody.scrollTop / (rbody.offsetHeight - tbody.offsetHeight)) *
          (tbody.clientHeight - slider.clientHeight) +
        "px";
    },
    //添加滚轮事件
    addWheel() {
      let tbody = this.$refs.tbody;
      if (window.navigator.userAgent.indexOf("Firefox") != -1) {
        tbody.addEventListener("DOMMouseScroll", this.wheel, false);
      } else {
        tbody.addEventListener("mousewheel", this.wheel, false);
      }
    },
  },
  mounted() {
    //添加滚轮事件
    this.addWheel();
  },
};
</script>

<style scoped>
.video {
  margin-top: 9px;
  margin-bottom: 30px;
}
.charts {
  padding: 19px 9px 7px;
  overflow: hidden;
  background: rgba(14, 16, 31, 0.55);
}
.inner {
  overflow: hidden;
}
.item {
  width: 33.33%;
  padding-right: 11px;
  margin-bottom: 12px;
  float: left;
  box-sizing: border-box;
}
.item-chart {
  width: 100%;
  height: 100px;
  border: 1px #ffffff dashed;
  padding: 5px 0;
}
.item-text {
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  color: #ffffff;
  text-align: center;
  margin-top: 7px;
}
.table {
  background: rgba(14, 16, 31, 0.55);
}
.table .table-header {
  background: #051554;
  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  line-height: 43px;
  padding-right: 26.99px;
  /* overflow: hidden; */
  display: flex;
}
.table-header div,
.line div {
  flex: 1;
}
.line {
  /* overflow: hidden; */
  display: flex;
  margin-right: 26.99px;
  color: #ffffff;
  font-size: 12px;
  line-height: 30px;
  border-bottom: 1px solid #707070;
}
.dot {
  width: 4px;
  height: 4px;
  display: inline-block;
  border: 1px solid #f4df58;
  border-radius: 50%;
  vertical-align: top;
  margin-top: 13px;
}
.street {
  width: 177px;
  margin-left: 12px;
}
.video-num {
  width: 83px;
}
.slot-num {
  width: 83px;
}
.dot-num {
  width: 53px;
}
.main {
  height: 134px;
  position: relative;
}
.tbody {
  height: 134px;
  overflow: hidden;
}

.real-body {
  height: auto;
}
.slider {
  width: 4px;
  height: 58px;
  background: #3981ff;
  border-radius: 2px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
</style>
