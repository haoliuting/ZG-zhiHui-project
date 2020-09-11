 <template>
  <div class="camera">
    <v-title title="各区摄像头数量-天眼"></v-title>
    <div class="main">
      <!-- 每一项 -->
      <div class="item" v-for="item in mockData" :key="item.id">
        <div class="item-con">
          <div class="item-title">
            <i class="item-icon iconfont icon-shexiangtou"></i>
            <div class="item-num">{{item.num}}</div>
            <i class="more iconfont icon-gengduo"></i>
          </div>
          <div class="item-text">{{item.name}}</div>
          <div class="item-outer">
            <div class="item-inner" :style="{width:item.percent}"></div>
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
      mockData: [
        {
          id: 1,
          num: 464,
          name: "番禺区",
          percent:'30%',
        },
        {
          id: 2,
          num: 464,
          name: "番禺区",
          percent:'50%',
        },
        {
          id: 3,
          num: 464,
          name: "番禺区",percent:'70%',
        },
        {
          id: 4,
          num: 464,
          name: "番禺区",
          percent:'50%',
        },
        {
          id: 5,
          num: 464,
          name: "番禺区",
          percent:'30%',
        },
        {
          id: 6,
          num: 464,
          name: "番禺区",
          percent:'70%',
        },
        {
          id: 7,
          num: 464,
          name: "番禺区",
          percent:'100%',
        },
        {
          id: 8,
          num: 464,
          name: "番禺区",
          percent:'60%',
        },
        {
          id: 9,
          num: 464,
          name: "番禺区",
          percent:'80%',
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  padding: 10px;
  padding-right: 2px;
  background: rgba(14, 16, 31, 0.55);
  overflow: hidden;
}
.item {
  width: 33.33%;
  float: left;
  padding-right: 8px;
  padding-bottom: 10px;
  box-sizing: border-box;
}
.item-con {
  height: 75px;
  background: #0b122d;
}
.item-title {
  overflow: hidden;
}
.item-icon {
  float: left;
  font-size: 12px;
  line-height: 22px;
  margin-left: 9px;
  margin-top: 8px;
  margin-right: 5px;
  color: #ffffff;
}
.item-num {
  float: left;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 8px;
}
.more {
  float: right;
  margin-right: 11px;
  line-height: 20px;
  font-size: 12px;
  color: #ffffff;
  margin-top: 9px;
  cursor: pointer;
}
.item-text {
  line-height: 17px;
  color: #ffffff;
  font-size: 12px;
  margin-left: 9px;
  margin-top: 5px;
}
.item-outer {
  margin: 0px 9px;
  height: 9px;
  border-radius: 5px;
  background: #343874;
  margin-top: 5px;
  position: relative;
}
.item-inner {
  position: absolute;
  top: 2px;
  left:0px;
  height: 5px;
  background: #58cfff;
  opacity: 1;
  border-radius: 5px;
}
</style>