import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Header,Swipe,SwipeItem,Tabbar,TabItem, Navbar, Button} from 'mint-ui'


import'mint-ui/lib/style.css'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Tabbar.name,Tabbar)
Vue.component(TabItem.name,TabItem)
Vue.component(Navbar.name, Navbar);
Vue.component(Button.name, Button);

import VueResource from "vue-resource"
Vue.use(VueResource)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
