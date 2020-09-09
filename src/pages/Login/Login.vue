<template>
    <div class="container" :style="{background:'url('+imgs.mainImg+') center no-repeat',backgroundSize: 'contain'}">
    
        <my-head></my-head>
    
        <div class="main clearfix">
    
            <div class="login fr">
    
                <div class="tit-zh">欢迎登陆</div>
    
                <div class="tit-eng">WELCOME TO LOGIN</div>
    
                <div class="list info">
    
                    <label>用户名</label>
    
                    <input type="text" />
    
                </div>
    
                <div class="list info">
    
                    <label>密 码</label>
    
                    <input type="password" />
    
                </div>
    
                <div class="list clearfix">
    
                    <div class="verific info fl">
    
                        <label>验证码</label>
    
                        <input type="text" />
    
                    </div>
    
                    <div class="verific-img fr">
    
                        LANDIO
    
                    </div>
    
                </div>
    
                <div class="list clearfix">
    
                    <div class="remember fl">
    
                        <img :src="imgs.remember01Img" /> 记住密码
    
                    </div>
    
                    <div class="forget fr">
    
                        <a href="#">忘记密码?</a>
    
                    </div>
    
                </div>
    
                <div class="list">
    
                    <button>登录</button>
    
                </div>
    
            </div>
    
        </div>
    
        <my-foot></my-foot>
    
    </div>
</template>
<script>
import remember01Img from "@/assets/img/remember01.jpg"
import mainImg from "@/assets/img/main.jpg"
export default {
  data(){
    return {
      imgs:{
        remember01Img,
        mainImg
      }
    }
  }
};
</script>
<style scoped>
.container {
    position: relative;
    height: 100%;
    
}

.main {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 800px;
    height: 420px;
    /* background: red; */
}

.main .login {
    width: 365px;
    height: 360px;
    padding: 30px;
    background-color: #10193b;
}

.main .login .tit-zh {
    font-size: 30px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-weight: bolder;
    font-family: '黑体';
}

.main .login .tit-eng {
    font-size: 30px;
    height: 30px;
    line-height: 30px;
    color: #0b3b76;
    font-weight: bolder;
}

.main .login .list {
    width: 360px;
    height: 59px;
    font-size: 16px;
}

.main .login .info {
    border-bottom: 1px solid #343b58;
}

.main .login .verific {
    width: 195px;
    height: 57px;
}

.main .login .verific-img {
    width: 160px;
    margin-top: 10px;
    height: 49px;
    background-color: #1f2b63;
    line-height: 49px;
    text-align: center;
    color: #008aff;
    font-weight: bolder;
}

.main .login .remember {
    line-height: 59px;
    color: #fff;
    font-size: 16px;
}

.main .login .remember img {
    vertical-align: middle;
}

.main .login .forget {
    line-height: 59px;
    font-size: 16px;
}

.main .login .forget a {
    color: #008aff;
}

.main .login .list label {
    color: #fff;
    line-height: 59px;
    display: inline-block;
    width: 60px;
}

.main .login .list input {
    border: none;
    outline: none;
    background: transparent;
    line-height: 57px;
    color: #027be5;
}

.main .login .list .verific input {
    width: 100px;
}

.main .login .list button {
    border: none;
    height: 59px;
    width: 360px;
    outline: none;
    color: #fff;
    text-align: center;
    background-color: #00b4ff;
    font-size: 18px;
}
</style>