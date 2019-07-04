import LuckyInput from './lucky-input'

const install = function (Vue) {
  if (install.installed) return
  Vue.component(LuckyInput.name, LuckyInput)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 全局安装
export default {
  install
}

// 按需导入
export { LuckyInput }
