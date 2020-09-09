import Vue from "vue"
import MyFoot from "./Myfoot.vue"
import MyHead from "./Myhead.vue"
import vTitle from "./Title.vue"
let common={
    MyFoot,
    MyHead,
    vTitle,
}
for(let i in common){
    Vue.component(i,common[i])
}