/* import { shallowMount } from "@vue/test-utils";
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18nMessage from '@/i18n';
// import Comp from "@/components/Device.vue";

const fakeData = { //假数据
  deviceNo: "abcdefg",
  deviceSpace: 45,
  deviceStatus: 2,
  devices: [
    {
      id: "test001",
      location: "12",
      status: 1
    },
    {
      id: "test002",
      location: "58",
      status: 3
    },
    {
      id: "test003",
      location: "199",
      status: 4
    }
  ]
};


Vue.use(VueI18n); //重现必要的依赖
const i18n = new VueI18n({
  locale: 'zh-CN',
  silentTranslationWarn: true,
  missing: (locale, key, vm) => key,
  messages: i18nMessage
});

let wrapper = null;
const makeWrapper = () => {
  // wrapper = shallowMount(Comp, {
  //   i18n, //看这里
  //   propsData: { //还有这里
  //     unitHeight: 5,
  //     data: fakeData
  //   }
  // });
};

afterEach(() => { //也很常见的用法
  if (!wrapper) return;
  wrapper = null;
});

describe("test Device.vue", () => {

  it("should be a VUE instance", () => {
    makeWrapper();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("应该有正常的总高度", () => {
    makeWrapper();
    expect(wrapper.vm.totalHeight).toBe(1230);
  });

  it("应该渲染正确的设备数量", () => {
    makeWrapper();
    expect(wrapper.findAll('.deviceitem').length).toBe(3);
  });

  it("指定的设备应该在正确的位置", () => {
    makeWrapper();
    const sty = wrapper.findAll('.deviceitem').at(1).attributes('style');
    expect(sty).toMatch(/height\:\s*20px/);
    expect(sty).toMatch(/bottom\:\s*20px/);
  });

  it("应该渲染正确的tooltip", () => {
    makeWrapper();

    //这里的用法值得注意
    const popper_ref = wrapper.find({ ref: 'device_tooltip_test002' });
    expect(popper_ref.exists()).toBeTruthy();

    const cont = popper_ref.find('.tooltip_cont');
    expect(cont.html()).toMatch(/所在位置\:\s58/);
  });

  it("应该渲染正确的设备分类", () => {
    makeWrapper();

    const badge = wrapper.find('.badge');
    expect(badge.exists()).toBeTruthy();

    expect(badge.findAll('li').length).toBe(4);
    expect(badge.findAll('li').at(2).text()).toBe('喷雾设备');
  });

  it("当点击了关闭按钮，应该不再显示", (done) => { //异步的用例
    makeWrapper();
    wrapper.vm.$nextTick(() => { //再看这里
      expect(
        wrapper.find('.devices_container').exists()
      ).toBeFalsy();
      done();
    });
  });

});
 */