/**
 * 扩展 VuePress 应用
 */
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import JwChat from '../../lib/JwChat.umd.js'

export default ({ Vue, isServer }) => {
  Vue.use(Element)
  Vue.use(JwChat)
  Vue.mixin({
    mounted () {
      import('../../lib/JwChat.umd.js').then(function (module) {
        // console.log(12,module);
      // import('jwchat').then(function (module) {
        Vue.use(module.default)
      })
    },
  })

  // ...做一些其他的应用级别的优化
}
