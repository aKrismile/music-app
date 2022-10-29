import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// 导入插件集中管理
import getVant from '@/plugins'
getVant(Vue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
