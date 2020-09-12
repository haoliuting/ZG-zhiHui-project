<template>
  <div class="info">
    <div class="left">
      <div class="title">
        <div class="dot"></div>
        <div class="title-text">实时告警信息</div>
      </div>
      <!-- 表格 -->
      <div class="table">
        <div class="theader">
          <div>级别</div>
          <div>姓名</div>
          <div>出生</div>
          <div>性别</div>
          <div class="date">失踪日期</div>
          <div class="date">失踪地点</div>
          <div class="date">当前状态</div>
        </div>
        <div class="tbody" ref="leftTBody">
          <div class="rbody" ref="leftRBody">
            <div class="theader tr" v-for="item in mockData1" :key="item.id">
              <div>
                <img class="img" :src="imgs.icon" alt />
              </div>
              <div>{{item.name}}</div>
              <div>{{item.birthday}}</div>
              <div>{{item.sex}}</div>
              <div class="date">{{item.date}}</div>
              <div class="date">{{item.address}}</div>
              <div class="date">{{item.status}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="right">
      <div class="title">
        <div class="dot"></div>
        <div class="title-text">嫌疑人员信息</div>
      </div>
      <div class="table">
        <div class="theader">
          <div>级别</div>
          <div>姓名</div>
          <div>出生</div>
          <div>性别</div>
          <div class="date">失踪日期</div>
          <div class="date">失踪地点</div>
          <div class="date">当前状态</div>
        </div>
        <div class="tbody" ref="rightTBody">
          <div class="rbody" ref="rightRBody">
            <div class="theader tr" v-for="item in mockData1" :key="item.id">
              <div>
                <img class="img" :src="imgs.icon" alt />
              </div>
              <div>{{item.name}}</div>
              <div>{{item.birthday}}</div>
              <div>{{item.sex}}</div>
              <div class="date">{{item.date}}</div>
              <div class="date">{{item.address}}</div>
              <div class="date">{{item.status}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      mockData1: [
        {
          id: 1,
          name: "蓝秋容",
          birthday: "1991/6/10",
          sex: "女",
          date: "2012/6/10",
          address: "广东广州天河",
          status: "待办",
        },
        {
          id: 2,
          name: "蓝秋容",
          birthday: "1991/6/10",
          sex: "女",
          date: "2012/6/10",
          address: "广东广州天河",
          status: "待办",
        },
        {
          id: 3,
          name: "蓝秋容",
          birthday: "1991/6/10",
          sex: "女",
          date: "2012/6/10",
          address: "广东广州天河",
          status: "待办",
        },
        {
          id: 4,
          name: "蓝秋容",
          birthday: "1991/6/10",
          sex: "女",
          date: "2012/6/10",
          address: "广东广州天河",
          status: "待办",
        },
        {
          id: 5,
          name: "蓝秋容",
          birthday: "1991/6/10",
          sex: "女",
          date: "2012/6/10",
          address: "广东广州天河",
          status: "待办",
        },
      ],
    };
  },
  methods: {
    //具体滚轮逻辑
    wheel(ev,tbody) {
     
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
    
    },
    //添加滚轮事件
    addWheel(tbody) {
      if (window.navigator.userAgent.indexOf("Firefox") != -1) {
        tbody.addEventListener("DOMMouseScroll", (e)=>{
          this.wheel(e,tbody)
        }, false);
      } else {
        tbody.addEventListener("mousewheel",(e)=>{
          this.wheel(e,tbody)
        }, false);
      }
    },
  },
  mounted() {
    this.addWheel(this.$refs.leftTBody)
    this.addWheel(this.$refs.rightTBody)

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
  margin-right: 32px;
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
.table {
}
.theader {
  display: flex;
}
.theader div {
  flex: 1;
  font-size: 12px;
  font-weight: 400;
  line-height: 37px;
  color: #58cfff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 37px;
}
.theader .date {
  flex: 1.5;
}
.tr{
  height: 37px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.3s all;
}
.left .tr:hover{
  background: #004E8F;
  border: 1px dashed #fff;
}
.right .tr:hover{
  background: #510021;
  border: 1px solid #FF0068;
}
.tr .img {
  width: 18px;
  height: 18px;
  display: block;
  margin-top: 9.5px;
}
.tr div {
  color: #ffffff;
}
.tbody {
  height: 111px;
  overflow: hidden;
}
.rbody {
  height: auto;
}
</style>