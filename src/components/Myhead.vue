<template>
    <header :style="{background:'url('+imgs.headImg+') no-repeat center'}">
        <div class="head clear">
           <div class="left fl clearfix">
               <div class="date fl">
                   <img :src="imgs.dateImg"/>
                   <span>{{nowtime}}</span>
               </div>
               <div class="time">
                  {{nowdate}}
                   <br/>
                   {{nowday}}
               </div>
           </div>
           <div class="cen fl">
               <img :src="imgs.sz04Img"/>
               城市智慧安防信息系统
           </div>
           <div class="right fr">
               <ul>
                   <li>
                       <img :src="imgs.sz03Img"/>
                   </li>
                   <li>
                       <img :src="imgs.sz03Img"/>
                   </li>
                   <li>
                       <div class="admin">
                           <img :src="imgs.adminImg"/>
                           admin
                       </div>
                   </li>
                   <li>
                       <div class="admin">
                           <img :src="imgs.searchImg"/>
                       </div>
                   </li>
               </ul>
           </div>
        </div>
    </header>
</template>
<script>
import dateImg from "@/assets/img/date.jpg"
import sz04Img from "@/assets/img/sz04.jpg"
import sz03Img from "@/assets/img/sz03.jpg"
import adminImg from "@/assets/img/admin.png"
import searchImg from "@/assets/img/search.png"
import headImg from "@/assets/img/head.png"
export default {
    data(){
       return {
           //图片
           imgs:{
               dateImg,
               sz04Img,
               sz03Img,
               adminImg,
               searchImg,
               headImg
           },

           timer:null,
           nowtime:"",
           nowdate:"",
           nowday:""
       }
    },
  created(){
      this.timer=setInterval(()=>{
        const newd=new Date();
        let w=newd.getDay()
        const week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
        this.nowday=week[w];
        let h=newd.getHours();
        let mi=newd.getMinutes();
        let s=newd.getSeconds();
        this.nowtime=h+":"+mi;
        let y=newd.getFullYear();
        let m=newd.getMonth()+1;
        let d=newd.getDate();
        this.nowdate=y+"/"+m+"/"+d;
      },1000)
  },
  destroyed(){
      clearInterval(this.timer)
  }

}
</script>
<style scoped>
header{
    width: 100%;
    position: fixed;
    top: 0;
    height:90px;
    z-index: 50;
}
.head{
    width:1300px;
    height:90px;
    /* background-color: red; */
    margin:0 auto;
}
.head .left{
    width:200px;
    height:90px;
    color:#fff;
}
.head .left .date{
    font-size: 24px;
    line-height: 40px;
    font-family: Arial, Helvetica, sans-serif;
    padding-right: 10px;
}
.head .left .time{
    font-size: 12px;
    line-height: 20px;
}
.head .cen{
     width:820px;
     height:80px;
     line-height: 80px;
     font-size: 28px;
     color: #fff;
     font-weight: bolder;
     text-align:center;
}
.head .cen img{
    vertical-align: middle;
}
.head .right{
    width:280px;
    height: 30px;
    padding-top:5px;
}
.head .right li{
    float:right;
    padding:0 10px;
}
.head .right li .admin{
    height:28px;
    line-height:28px;
    border:2px solid #008aff;
    border-radius: 14px;
    font-size:12px;
    background-color:#00389c;
    color:#fff;
    padding:0 10px;
}
.head .right li .admin img{
    width:14px;
    height:14px;
    vertical-align: middle;
}
</style>