import Vue from 'vue'
import Vuex from 'vuex'
import { writeNewStyle } from '@/tools/theme/index'
import variables from '@/tools/theme/variables'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    themeColor: sessionStorage.getItem('themeColor') || variables.themeColor,
  },
  mutations: {
    setTheme(state, data) {
      state.themeColor = data || variables.themeColor
      sessionStorage.setItem('themeColor', state.themeColor)
    },
  },
  actions: {
    changeThemeStyle({ state }) {
      writeNewStyle(state.themeColor)
    },
  },
})
