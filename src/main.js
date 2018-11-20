import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
import 'mint-ui/lib/mint-ui.common.js'
Vue.config.productionTip = false
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import VueDND from 'awe-dnd'
import Vuex from 'vuex'

Vue.use(MintUI)
Vue.use(VueDND)
Vue.use(Vuex)

import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.root="http://127.0.0.1:3000/"
 
var store = new Vuex.Store({  
  state:{fid:""},
  mutations:{
    jump(state){
      this.$router.push("/chome/"+state.fid);
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
