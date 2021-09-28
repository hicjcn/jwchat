
const path = require('path')
const fs = require('fs')

let BASEPATHURL = path.resolve(__dirname, '..') // 根目录

const version = process.env.VERSION || require(`${BASEPATHURL}/package.json`).version;

fs.readFile(`${BASEPATHURL}/README.md`, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const content = data.replace(/(JwChat-).+?(-blue)/,`$1${version}$2`)
  fs.writeFile(`${BASEPATHURL}/README.md`,content,(err)=>console.log(err))
})
