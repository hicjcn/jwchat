import App from './App.vue'
/* 使用 CDN开发 不需要 import 引入*/
/* START */
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
/* END */

/* 不使用 CDN */
/* START */
// const Vue = window.Vue
// Vue.use(window.ELEMENT)
/* END */

import JwChat from '@/components'
// import JwChat from '../lib/JwChat.common';
// import '../lib/JwChat.css';
Vue.use(JwChat)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
