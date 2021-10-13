/*
 * @Author: your name
 * @Date: 2021-09-30 16:54:59
 * @LastEditTime: 2021-09-30 17:47:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JChat\build\utils.js
 */

/**------------------ 下面是新增 ------------------*/

// 国内免费cdn镜像源
const cdnBaseHttp = 'https://cdn.staticfile.org'

/* cdn配置
name：模块名称，与package.json同名，如：element-ui
scope：模块作用域命名，对应window里面挂载的变量名称，如：ELEMENT
js：js地址，是从版本号后面开始的，如：完整js cnd为 https://cdn.staticfile.org/element-ui/2.4.11/index.js，则应该填写的为：index.js
css：css地址，是从版本号后面开始的，如：完整css cnd为 https://cdn.staticfile.org/element-ui/2.4.11/theme-chalk/index.css，则应该填写的为：theme-chalk/index.css
*/
const cdnConfig = [
    { name: 'vue', scope: 'Vue', js: 'vue.min.js' },
    // {
    //     name: 'vue-router',
    //     scope: 'VueRouter',
    //     js: 'vue-router.min.js',
    //     cndHttp: 'https://cdn.bootcss.com' // 当不使用默认的cnd镜像源时，可以配置这个
    // },
    // 配置 element-ui 示例，前提是要安装依赖哦！！！
    { 
        name: 'element-ui',
        scope: 'ELEMENT',
        js: 'index.js',
        css: 'theme-chalk/index.css',
        cndHttp: 'https://cdn.bootcss.com'  // 当不使用默认的cnd镜像源时，可以配置这个
    }
]

// 获取模块版本号
function getModulesVersion() {
    let mvs = {}
    let regexp = /^npm_package_.{0,3}dependencies_/gi
    for (let m in process.env) {
        // 从node内置参数中读取，也可直接import 项目文件进来
        if (regexp.test(m)) {
            // 匹配模块
            // 获取到模块版本号
            mvs[m.replace(regexp, '').replace(/_/g, '-')] = process.env[m].replace(/(~|\^)/g, '')
        }
    }
    return mvs
}

// 1、生成完成的cdnConfig；2、处理忽略的资源
function getExternalModules(config) {
    let externalModules = {} // 要忽略的资源，如 {vue: 'Vue'}
    let dependencieModules = getModulesVersion() // 获取全部的模块和版本号
    config = config || cdnConfig // 默认使用utils下的配置
    config.forEach(item => {
        // 遍历配置
        if (item.name in dependencieModules) {
            let version = dependencieModules[item.name]
            let currCdnHttp = item.cndHttp || cdnBaseHttp
            // 拼接完整 css 的链接
            item.css =
                item.css &&
                [currCdnHttp, item.name, version, item.css].join('/')
            // 拼接完整 js 的链接
            item.js =
                item.js && [currCdnHttp, item.name, version, item.js].join('/')
            // 新增要忽略的资源
            externalModules[item.name] = item.scope
        } else {
            throw new Error(item.name + ' 未安装，请执行 yarn add' + item.name)
        }
    })
    // 根据isExternalJs，判断是否真正要忽略
    return  externalModules 
}

// 用在 webpack.base.conf.js 里面
exports.externalModules = getExternalModules()

// 用在 webpack.dev.conf.js/webpack.prod.conf.js 里面
exports.cdnConfig = cdnConfig

/**------------------ 上面是新增 ------------------*/