import Vue from 'vue'
import Router from 'vue-router'
import CatHome from './views/CatHome.vue'
import Login from './views/login.vue'
import MoreChannel from './views/MoreChannel.vue'
import Found from './views/Found.vue'
import BookInfo from './views/bookinfo.vue'
import BookList from './views/booklist.vue'
import Catalog from './views/catalog.vue'
import read from './views/read.vue'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    { path: '/', redirect: "/chome/1"},
    { path: '/chome/:fid', component: CatHome},
    { path: '/home', redirect: "/chome/1"},
    { path: '/home/login', component: Login},
    { path: '/home/channel', component: MoreChannel},
    { path: '/home/found', component: Found},
    { path:'/home/booklist', component: BookList},
    { path:'/info', component: BookInfo},
    { path:'/info/catalog',component:Catalog},
    { path:'/info/catalog/read/',component:read}
  ]
})
