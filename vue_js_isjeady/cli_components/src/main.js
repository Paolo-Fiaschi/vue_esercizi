import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import MioPrimoComponente from '@/components/MioPrimoComponente.vue'
Vue.component('MioPrimoComponente',MioPrimoComponente)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
