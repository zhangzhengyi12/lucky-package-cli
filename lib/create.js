const path = require('path')
const inquirer = require('inquirer')
const validateProjectName = require('validate-npm-package-name')
const chalk = require('chalk')
const copy = require('./copy')
const fs = require('fs')
const dir = require('../utils/dir')

async function create(projectName, options) {
  const cwd = options.cwd || process.cwd()
  const inCurrent = projectName === '.'
  const name = inCurrent ? path.relative('../', cwd) : projectName
  const targetDir = path.resolve(cwd, projectName || '.')

  const result = validateProjectName(name)
  if (!result.validForNewPackages) {
    console.error(chalk.red(`无效的项目名: "${name}"`))
    result.errors &&
      result.errors.forEach(err => {
        console.error(chalk.red.dim('Error: ' + err))
      })
    result.warnings &&
      result.warnings.forEach(warn => {
        console.error(chalk.red.dim('Warning: ' + warn))
      })
    return
  }

  // 推荐项目起始 TBD
  // if(!/lucky-package/.test(name)){
  //   console.warn(chalk.red.dim('项目名称推荐以 lucky-package 起始'))
  // }

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: 'template: 请选择项目起始模板',
      choices: [
        {
          key: '1',
          name: 'JavaScript Library - 适用于普通 JS 库',
          value: 'js-lib'
        },
        {
          key: '2',
          name: 'Vue-components - 适用于 Vue 组件库',
          value: 'vue-component'
        }
      ]
    },
    {
      type: 'input',
      name: 'author',
      message: 'author: 请输入你的名字',
      validate: function(value) {
        return !!value
      }
    },
    {
      type: 'input',
      name: 'desc',
      message: 'desc: 请输入项目描述',
      validate: function(value) {
        return !!value
      }
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'confirm: 完成配置了?',
      default: false
    }
  ])

  // 启动复制流程
  const sourceDir = path.resolve(__dirname, '..', 'templates', answers.template)

  if (!dir.isDir(targetDir)) {
    fs.mkdirSync(targetDir)
  } else {
    console.error(chalk.red(`该目录下已经存在该文件夹 请删除或者修改项目名`))
    return
  }

  console.log(chalk.blue(`🚀    开始创建...`))

  try {
    await copy({
      from: sourceDir,
      to: targetDir,
      renderData: {
        desc: answers.desc,
        author: answers.author,
        name: projectName
      },
      ignore: ['node_modules', 'package.json']
    })
  } catch (e) {
    console.error(chalk.red(e))
    return
  }

  console.log(chalk.green('🎉    创建完毕!'))
  console.log()
  console.log(chalk.cyan(` $ cd ${projectName}`))
  console.log(chalk.cyan(` $ npm i && npm run dev`))
}

module.exports = create
