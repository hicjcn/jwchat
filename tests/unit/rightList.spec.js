import '../util.js'

import { mount  } from '@vue/test-utils'
import widget from '@/components/RightList/index.vue'

describe('RightList 组件', () => {

  const config = {
    tip:'',
    notice:'',
    listTip:'',
    list: [
      // {
      //   name: 'JwChat',
      //   "img": "image/three.jpeg"
      // },
      // {
      //   name: 'JwChat',
      //   "img": "image/three.jpeg"
      // },
      // {
      //   name: '留恋人间不羡仙',
      //   "img": "image/one.jpeg"
      // },
      // {
      //   name: '只盼流星不盼雨',
      //   "img": "image/two.jpeg"
      // }
    ]
  }


  const wrapper = mount(widget, { propsData: { config } })
  // 使用 jest 我们可以创建HTML输出的截图文件
  expect(wrapper.html()).toMatchSnapshot()
})
