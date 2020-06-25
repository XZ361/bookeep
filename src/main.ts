import Nav from '@/components/Nav.vue'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 全局引入导航组件
Vue.component('Nav',Nav)  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
