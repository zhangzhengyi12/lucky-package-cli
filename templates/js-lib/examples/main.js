import Vue from 'vue'
import App from './App.vue'
import mod from '../src/index'

// 使用模块
console.log(mod.say())

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
