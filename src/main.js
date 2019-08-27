// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Spinner } from 'vux'
import { ButtonTab, ButtonTabItem } from 'vux'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'remixicon/fonts/remixicon.css'
import '../static/css/local.css'
// import VueI18n from "vue-i18n"
Vue.config.productionTip = false
// Vue.use(VueI18n)
// const i18n = new VueI18n({
//   locale: 'zh-CN',
//   messages: {
//     'zh-CN': require('./common/lang/zh'),
//     'en-US': require('./common/lang/en')
//   }
//
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // i18n,
  components: { Spinner,App, },
  template: '<App/>'
})
Vue.use(VueAxios,axios);
Vue.component('button-tab', ButtonTab)
Vue.component('button-tab-item', ButtonTabItem)
import { Tabbar, TabbarItem } from 'vux'

Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)



Vue.component('spinner', Spinner)



