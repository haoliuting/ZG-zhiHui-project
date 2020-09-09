import Vue from 'vue'
import App from './App'
// 引入公共样式
import './assets/css/reset.css'
//字体图标
import "./assets/css/iconfont.css"
import router from './router'

//公共组件
import "./components"
//echarts
import echarts from "echarts"
Vue.prototype.$echarts=echarts;




Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
