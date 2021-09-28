import Vue from 'vue';
import ElementUI from 'element-ui';

import JwChat from '@/components'

Vue.use(ElementUI)
Vue.use(JwChat)

export function sleepTime(time=1000){
  return new Promise(resolve=>{
    setTimeout(()=>{
      resolve()
    },time)
  })
}