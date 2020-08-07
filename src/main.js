import Vue from 'vue'
import App from './App'
import router from './router'
import { Spinner } from 'vux'
import { ButtonTab, ButtonTabItem } from 'vux'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'remixicon/fonts/remixicon.css'
import '../static/css/local.css'
import { Tabbar, TabbarItem } from 'vux'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { Spinner,App, },
  template: '<App/>'
})

Vue.use(VueAxios,axios);
Vue.component('button-tab', ButtonTab)
Vue.component('button-tab-item', ButtonTabItem)


Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)



Vue.component('spinner', Spinner)



