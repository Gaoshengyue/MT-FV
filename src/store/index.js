import Vue from 'vue'
import Vuex from 'vuex'
import business from './modules/business'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    business
  },

})

export default store
