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

    expect(wrapper.vm.activeIndex).toBe('1')

    const defaultMenu = wrapper.find('.el-menu-demo .is-active')
    expect(defaultMenu.text()).toBe(config.nav[0])

    const quickNode = wrapper.findAll('ul p')
    for (let i = 0; i < quickNode.length; i++) {
      expect( quickNode.at(i).text()).toBe(Talelist[i])
    }

    done()

  })

  it('切换选中菜单',async ()=>{

    const menus = wrapper.findAll('.el-menu-demo li')
    
    // 模拟按钮的点击操作
    menus.at(1).trigger('click')
    expect(wrapper.vm.activeIndex).toBe('2')
    
    await wrapper.vm.$nextTick()
     
    const defaultMenu = wrapper.find('.el-menu-demo .is-active')
    expect(defaultMenu.text()).toBe(config.nav[1])

    menus.filter(w => w.text() == config.nav[0]).trigger('click')
    expect(wrapper.vm.activeIndex).toBe('1')

  })

  it('改变列表数据',async ()=>{
    const chageList = [
      '切换回复1',
      '切换回复2',
      '切换回复3',
    ]

    await wrapper.setProps({ Talelist: chageList })

    const quickNode = wrapper.findAll('ul p')
    for (let i = 0; i < quickNode.length; i++) {
      expect( quickNode.at(i).text()).toBe(chageList[i])
    }

  })

  it('新增数据功能',async ()=>{
    expect(wrapper.vm.visible).toBe(false);
    expect(wrapper.vm.itemQuick).toBe('');

    const showBtn = wrapper.find('[title="新增"]')
    showBtn.trigger('click')
    await wrapper.vm.$nextTick()

    
    const crestedBox = wrapper.find('.el-dialog__wrapper')
    expect(wrapper.vm.visible).toBe(true);
    expect(crestedBox.isVisible()).toBe(true);

    const inputBox = wrapper.find('.el-dialog__body textarea')

    const testString = '测试添加的文字'
    inputBox.setValue(testString)
    expect(inputBox.element.value).toBe(wrapper.vm.itemQuick);

    const btns = crestedBox.findAll('button')
    await btns.at(2).trigger('click')
    expect(wrapper.vm.itemQuick).toBe('');
    expect(wrapper.vm.visible).toBe(false);
    
  })

})
