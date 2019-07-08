const fs = require('fs')
const path = require('path')
const dir = require('../utils/dir')
const ejs = require('ejs')

const ignoreDir = ['lib']

async function copy(from, to, data) {
  let files = fs.readdirSync(from)
  // 区分 文件 和 目录
  let rFiles = files.filter(name => !dir.isDir(path.resolve(from, name)))
  let dirs = files.filter(
    name =>
      dir.isDir(path.resolve(from, name)) && ignoreDir.some(v => v !== name)
  )

  // 复制并编译文件
  rFiles.forEach(fileName => {
    let content = fs.readFileSync(path.resolve(from, fileName), 'utf-8')
    // 该文件需要调用 ejs 模板引擎进行编译
    if (/ejs$/.test(fileName)) {
      content = ejs.render(content, data)
      fileName = fileName.replace('.ejs', '')
    }
    fs.writeFileSync(path.resolve(to, fileName), content)
  })

  // 递归复制 目录
  dirs.forEach(dirName => {
    const fromDir = path.resolve(from, dirName)
    const toDir = path.resolve(to, dirName)
    if (!dir.isDir(toDir)) {
      fs.mkdirSync(toDir)
    }
    copy(fromDir, toDir, data)
  })
}

module.exports = copy
