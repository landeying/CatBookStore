import Vue from 'vue'
import Router from 'vue-router'
import CatBookStoreHome from "./components/tabbar/catBookStoreHome.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:CatBookStoreHome},
    {path:'/chome',component:CatBookStoreHome},
  ]
})
