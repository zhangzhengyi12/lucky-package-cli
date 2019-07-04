import say from './say'

// 独立使用
export default say

// 用于 Vue 全局注册
// const install = function (Vue) {
//   if (install.installed) return
//   Vue.prototype.$say = say
// }

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

// // 全局安装
// export default {
//   install
// }
