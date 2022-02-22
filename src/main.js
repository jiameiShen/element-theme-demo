import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import '@/assets/scss/reset.scss'

Vue.use(Element)

Vue.config.productionTip = false

import { getIndexStyle } from '@/tools/theme/index'

/* 初始化主题样式 */
getIndexStyle().then(() => {
  store.dispatch('changeThemeStyle')
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
