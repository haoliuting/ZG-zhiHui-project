<template>
    <footer :style="{background:'url('+bgImg+') no-repeat center'}">
        Copyright©1999-2020 北京中公教育科技有限公司 .All Rights Reserved
    </footer>
</template>
<script>
import img from "@/assets/img/foot.jpg"
export default {
    data(){
        return {
            bgImg:img
        }
    }
}
</script>
<style scoped>
footer{
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-size: 14px;
}
</style>