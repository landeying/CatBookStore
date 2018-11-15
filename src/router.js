import Vue from 'vue'
import Router from 'vue-router'
import CatHome from './views/CatHome.vue'
import Login from './views/login.vue'
import MoreChannel from './views/MoreChannel.vue'
import Found from './views/Found.vue'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    { path: '/', component: CatHome},
    { path: '/chome', component: CatHome},
    { path: '/chome/login', component: Login},
    { path: '/chome/channel', component: MoreChannel},
    { path: '/chome/found', component: Found},
  ]
})
