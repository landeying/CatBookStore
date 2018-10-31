import Vue from 'vue'
import Router from 'vue-router'
import CatHome from './views/CatHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: CatHome,},
  ]
})
