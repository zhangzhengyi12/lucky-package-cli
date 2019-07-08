// 组件安装选项
interface InstallationOptions {
}

// 组件库全局安装
function install(vue: typeof Vue, options: InstallationOptions): void

/**
 * Vetur Vue.js 还未支持手写 TS 类型声明 做到 props 提示
 */
export default {
  install
}