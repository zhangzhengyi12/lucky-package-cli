import Vue from 'vue'
import App from './App.vue'
import LuckyComponents from '../src'

Vue.config.productionTip = false

Vue.use(LuckyComponents)

new Vue({
  render: h => h(App)
}).$mount('#app')
