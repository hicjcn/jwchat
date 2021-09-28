import '../util.js'

import { mount,shallowMount  } from '@vue/test-utils'
import widget from '@/components/RightList/index.vue'

describe('RightList 组件', () => {

  const config = {
    tip:'',
    notice:'',
    listTip:'',
    list: [
      {
        name: 'JwChat',
        "img": "image/three.jpeg"
      },
      {
        name: 'JwChat',
        "img": "image/three.jpeg"
      },
      {
        name: '留恋人间不羡仙',
        "img": "image/one.jpeg"
      },
      {
        name: '只盼流星不盼雨',
        "img": "image/two.jpeg"
      }
    ]
  }


  const wrapper = mount(widget, { propsData: { config } })
  // 使用 jest 我们可以创建HTML输出的截图文件
  expect(wrapper.html()).toMatchSnapshot()
  it('组件 notice 字段显示',()=>{
    const notice = '公告'
    config.notice = notice
    let wrapper = null
    // beforeEach(() => {
    wrapper = shallowMount(widget, { propsData: { config } })
    // })
    // console.log(wrapper.props());
   
    expect(wrapper.vm.info.notice).toBe(notice)
    expect(wrapper.props().config.notice).toBe('公告')
  })

  it('组件文本 包含特定文字',()=>{
    expect(wrapper.text()).toContain('留恋人间不羡仙') 
  })

  it('切换公告',async ()=>{
    wrapper.setData({
      'config': {notice:'12'}
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.config.notice).toBe('12')
  })
})
