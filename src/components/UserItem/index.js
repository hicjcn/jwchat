import Widget from './index.vue'

Widget.install = function (Vue) {
  Vue.component(Widget.name, Widget)
}

export default Widget