import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
import 'mint-ui/lib/mint-ui.common.js'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


Vue.use(MintUI)

import VueResource from "vue-resource";
Vue.use(VueResource);

Vue.http.options.root="http://127.0.0.1:3000/"
 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
