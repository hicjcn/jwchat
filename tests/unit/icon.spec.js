import { shallowMount  } from '@vue/test-utils'
import widget from '@/components/Icon/index.vue'

describe('Icon weiget', () => {
  it('Icon Class', () => {
    const type = 'icon-empty'
    const wrapper = shallowMount(widget, { propsData: { type } })
    expect(wrapper.classes()).toContain(type)
    expect(wrapper.classes('iconfont')).toBe(true)
    expect(wrapper.classes()).toEqual(['iconfont',type]);
  })
})

