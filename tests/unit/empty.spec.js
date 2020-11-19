import '../util.js'

import { shallowMount, mount } from '@vue/test-utils'
import widget from '@/components/Empty/index.vue'
const size = "2rem"

describe('empty weiget', () => {
  const wrapper = shallowMount(widget, { propsData: { size } })
  const emptyWidget = wrapper.find('.empty')
  it(`组件大小 ${size}`, () => {
    const boxSize = emptyWidget.attributes('style')
    expect(boxSize).toBe('width: 2rem;')
  })

  it('icon 是否正确', () => {
    const wrapper = mount(widget, { propsData: { size } })
    const icon = wrapper.find('i')
    const defaultClass = 'icon-empty'
    const iconSize = icon.attributes().style
    expect(iconSize).toBe(`font-size: calc(${size} / 2);`)
    expect(icon.classes()).toEqual(['iconfont', defaultClass])
  })
})

