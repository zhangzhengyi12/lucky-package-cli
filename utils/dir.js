const fs = require('fs')
const path = require('path')

function exists(path) {
  return fs.existsSync(path)
}
function isDir(path) {
  return exists(path) && fs.statSync(path).isDirectory()
}

module.exports = {
  isDir
}
