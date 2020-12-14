import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import JwChat from '@/components'
Vue.use(ElementUI)

// import JwChat from '../lib/JwChat.common';
// import '../lib/JwChat.css';
Vue.use(JwChat)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
