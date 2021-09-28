const { Promise } = require('core-js')
const fs = require('fs')
const path = require('path')

// 根目录
let BASEPATHURL = path.resolve(__dirname, '..')
// 移动目录
const startFileDirectory = `${BASEPATHURL}/dist`
// 放置目录
const endFileDirectory = `${BASEPATHURL}/docs/.vuepress/dist/demo`

 
async function main() {
  // 删除复制执行
  console.log('dist 复制操作');
  // await rmDirFile(endFileDirectory);
  await copyDir(startFileDirectory, endFileDirectory)
}
main()
 
// 复制文件
function copyFile(srcPath, tarPath) {
  return new Promise(function (resolve, reject){
    var rs = fs.createReadStream(srcPath)
    rs.on('error', function (err) {
        if (err) {
            console.log('read error', srcPath)
        }
        reject(err)
    })
 
    var ws = fs.createWriteStream(tarPath)
    ws.on('error', function (err) {
        if (err) {
            console.log('write error', tarPath)
        }
        reject(err)
    })
 
    ws.on('close', function (ex) {
        resolve(ex)
    })
 
    rs.pipe(ws)
  })
}
 
// 复制文件夹所有
function copyDir(srcDir, tarDir) {
  return new Promise((resolve, reject)=>{
    if (fs.existsSync(tarDir)) {
        fs.readdir(srcDir, function (err, files) {
          var count = 0
          var checkEnd = function () {
            ++count == files.length && resolve()
          }
          
          if (err) {
            checkEnd()
            reject()
            return
          }

          //为空时直接回调
          files.length === 0 && resolve()
          
          files.forEach(function (file) {
              var srcPath = path.join(srcDir, file)
              var tarPath = path.join(tarDir, file)

              fs.stat(srcPath, function (err, stats) {
                  if (stats.isDirectory()) {
                      fs.mkdir(tarPath, function (err) {
                          if (err) {
                              console.log(err)
                              reject(err)
                              return
                          }
                          copyDir(srcPath, tarPath, checkEnd)
                      })
                  } else {
                      copyFile(srcPath, tarPath, checkEnd)
                  }
              })
          })
 
        })
 
    } else {
        fs.mkdir(tarDir, function (err) {
            if (err) {
                console.log(err)
                reject(err)
                return
            }
            console.log('创建文件夹', tarDir)
            copyDir(srcDir, tarDir,)
        })
    }
  })
 
}