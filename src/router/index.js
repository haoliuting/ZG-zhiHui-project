import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 3配置路由
const routes = [
  {
    path: '/',
    component: () => import('../pages/Index/Index'),
  },
  {
    path: '/login',
    component: () => import('../pages/Login/Login')
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router;


