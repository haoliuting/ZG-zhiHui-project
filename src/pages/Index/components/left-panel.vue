<template>
  <!-- 仪表盘组件 -->
  <div class="panel" ref="panel">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    //外环发光颜色
    outerColor: {
      required: true,
      type: String,
    },
    //外环发光颜色
    innerColor: {
      required: true,
      type: String,
    },
    //外环发光颜色
    percent: {
      required: true,
      type: Number,
    },
    //数量
    num: {
      required: true,
    },
    //文字说明
    name: {
      required: true,
    },
  },
  mounted() {
    //外环颜色
    let outerColor = this.outerColor;
    //内环颜色
    let innerColor =this.innerColor;
    //环比
    let percent =this.percent
    //数量
    let num = this.num
    //文字说明
    let name = this.name

    //环背景色
    let bgColor = "rgb(44,47,48)";
    // 节点
    let panel = this.$refs.panel;
    let canvas = this.$refs.canvas;
    //绘画对象
    let cobj = canvas.getContext("2d");
    let width = panel.offsetWidth;
    let height = panel.offsetHeight;
    //获取中心点坐标
    let ox = width / 2;
    let oy = height / 2;

    //最大半径
    let maxR = Math.min(width, height) / 2;
    //圈间距
    let circleL = 5;
    //外环结束点半径
    let dotR = 2;
    //发光块的大小
    let lightWidth = 4;
    let lightHeight = 8;
    //发光块的数量
    let lightNum = 36;
    //内环宽度
    let circleWidth = 6;

    //设置宽高
    canvas.with = width;
    canvas.height = height;

    //绘制最大的外圈
    //右侧半圆
    cobj.beginPath();
    // cobj.strokeStyle='rgb(52,52,52)';
    cobj.strokeStyle = "rgb(150,150,150)"; //此处颜色是假的，上面颜色才是真正的颜色
    cobj.arc(ox, oy, maxR, (-1 / 4) * Math.PI, (2 / 4) * Math.PI, false);
    cobj.stroke();
    cobj.closePath();
    //右侧半圆结束点
    cobj.beginPath();
    // cobj.strokeStyle='rgb(52,52,52)';
    cobj.fillStyle = "rgb(150,150,150)"; //此处颜色是假的，上面颜色才是真正的颜色
    cobj.arc(ox, oy + maxR, dotR, 0, 2 * Math.PI, false);
    cobj.fill();
    cobj.closePath();
    //左侧半圆
    cobj.beginPath();
    // cobj.strokeStyle='rgb(52,52,52)';
    cobj.strokeStyle = "rgb(150,150,150)"; //此处颜色是假的，上面颜色才是真正的颜色
    cobj.arc(ox, oy, maxR, (3 / 4) * Math.PI, (3 / 2) * Math.PI, false);
    cobj.stroke();
    cobj.closePath();
    //左侧半圆结束点
    cobj.beginPath();
    // cobj.strokeStyle='rgb(52,52,52)';
    cobj.fillStyle = "rgb(150,150,150)"; //此处颜色是假的，上面颜色才是真正的颜色
    cobj.arc(ox, oy - maxR, dotR, 0, 2 * Math.PI, false);
    cobj.fill();
    cobj.closePath();

    //第二个圈
    cobj.beginPath();
    // cobj.strokeStyle='rgb(93,93,93)';
    cobj.strokeStyle = "rgb(255,255,255)"; //此处颜色是假的，上面颜色才是真正的颜色
    cobj.arc(ox, oy, maxR - circleL, 0, Math.PI * 2, true);
    cobj.stroke();
    cobj.closePath();

    //绘制36个外环发光元素
    for (let i = 0; i < lightNum; i++) {
      if (i > 13 && i <= 22) {
        continue;
      }
      cobj.save();
      cobj.beginPath();
      cobj.translate(ox, oy);
      cobj.rotate(((360 / lightNum) * i * Math.PI) / 180); //旋转47度
      cobj.moveTo(0, 2 * circleL - oy);
      cobj.lineTo(0, 2 * circleL + lightHeight - oy);
      cobj.lineWidth = lightWidth;
      cobj.strokeStyle = outerColor;
      cobj.stroke();
      cobj.closePath();
      cobj.restore();
    }

    //绘制内环 背景环
    cobj.beginPath();
    cobj.lineWidth = circleWidth;
    cobj.strokeStyle = bgColor; //此处颜色是假的，上面颜色才是真正的颜色
    cobj.arc(
      ox,
      oy,
      maxR - 2 * circleL - lightHeight - 3,
      (130 * Math.PI) / 180,
      (410 * Math.PI) / 180,
      false
    );
    cobj.stroke();
    cobj.closePath();

    //内环
    cobj.beginPath();
    cobj.lineWidth = circleWidth;
    cobj.strokeStyle = innerColor; //此处颜色是假的，上面颜色才是真正的颜色
    let endDeg = (410 - 130) * percent + 130;
    cobj.arc(
      ox,
      oy,
      maxR - 2 * circleL - lightHeight - 3,
      (130 * Math.PI) / 180,
      (endDeg * Math.PI) / 180,
      false
    );
    cobj.stroke();
    cobj.closePath();

    //绘制数量
    cobj.font = "23px bold 黑体";
    cobj.fillStyle = "#fff";
    cobj.textAlign = "center";
    cobj.textBaseline = "middle";
    cobj.fillText(num, ox, oy);

    //绘制说明
    cobj.font = "12px bold 黑体";
    cobj.fillStyle = "#fff";
    cobj.textAlign = "center";
    cobj.textBaseline = "middle";
    cobj.fillText(name, ox, oy + maxR - 2 * circleL - lightHeight);
  },
};
</script>

<style scoped>
.panel {
  width: 100%;
  height: 100%;
}
</style>