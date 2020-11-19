import '../util.js'

import { mount  } from '@vue/test-utils'
import widget from '@/components/QuickTalk/index.vue'

describe('QuickList 组件', () => {

  const config = {
    nav: ['快捷回复', '超级回复'],
    showAdd: true,
    maxlength: 200,
    showHeader: true,
    showDeleteBtn: true,
  }

  const Talelist = [
    '快捷回复1',
    '快捷回复2',
    '快捷回复3',
    '快捷回复4',
    '快捷回复5',
    '快捷回复6',
  ]

  const wrapper = mount(widget, { propsData: { config, Talelist } })
  // 使用 jest 我们可以创建HTML输出的截图文件
  expect(wrapper.html()).toMatchSnapshot()


  it('默认菜单选中', (done) => {

    const defaultMenu = wrapper.find('.el-menu-demo .is-active')
    expect(defaultMenu.text()).toBe(config.nav[0])
    done()
    
  })

  it('切换选中菜单',async ()=>{

    const menus = wrapper.findAll('.el-menu-demo li')
    
    // 模拟按钮的点击操作
    menus.at(1).trigger('click')
    await sleep()
    expect(wrapper.vm.activeIndex).toBe('2')
    
    menus.filter(w => w.text() == config.nav[0]).trigger('click')
    expect(wrapper.vm.activeIndex).toBe('1')

  })

})

function sleep(time=1000) {
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve()
    }, time);
  })
}