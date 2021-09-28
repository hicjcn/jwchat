/*
 * @Author: your name
 * @Date: 2021-08-07 22:44:32
 * @LastEditTime: 2021-08-08 12:46:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JChat\tests\unit\userItem.spec.js
 */
import { sleepTime } from '../util.js'

import { /* mount, */shallowMount  } from '@vue/test-utils'
import widget from '@/components/userItem/index.vue'

describe('UserItem 组件', ()=>{
  const config = {
    readNum: 1,
    img:'https://www.baidu.com/img/flexible/logo/pc/result.png',
    name:'JwChat',
    dept:'愉快的周天'
  }

  const wrapper = shallowMount(widget,{propsData:{config}})
  // expect(wrapper.html()).toMatchSnapshot()

  it('数据是否正确', ()=>{
    expect(wrapper.vm.config.readNum).toBe(1)
    expect(wrapper.text()).toContain('JwChat')
    expect(wrapper.text()).toContain('愉快的周天')
    expect(wrapper.find('img').attributes('src')).toBe('https://www.baidu.com/img/flexible/logo/pc/result.png')
  })

  it('改变角标Dom渲染',async ()=>{
    wrapper.setData({
      'config': {readNum: 0, name:'JwChat2',}
    })
    // await wrapper.vm.$nextTick()
    await sleepTime(3000)
    expect(wrapper.props().config.readNum).toBe(0)
  })
})
