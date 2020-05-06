
import widget from './index.vue'

widget.install = function (Vue) {
  Vue.component(widget.name, widget)
}

export default widget