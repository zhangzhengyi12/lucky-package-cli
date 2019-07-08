import Input from './input'
import Button from './button'

const install = function (Vue) {
  if (install.installed) return
  Vue.component(Input.name, Input)
  Vue.component(Button, Button)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 全局安装
export default {
  install
}

// 按需导入
export { Input, Button }
