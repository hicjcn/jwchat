<template>
  <div :style="style">{{count}}</div>
</template>

<script>
export default {
  name: 'JwChat-count',
  props: {
    num: Number,
    config: {
      regulator: Number,
      time: Number,
      color: String,
      size: Number
    }
  },
  data () {
    return {
      count: 0
    }
  },
  computed: {
    style () {
      const { color = "#000", size = "2rem" } = this.config || {}
      return {
        color,
        fontSize: size
      }
    }
  },
  watch: {
    num () {
      this.NumAutoPlusAnimation()
    }
  },
  methods: {
    NumAutoPlusAnimation () {
      const that = this
      const time = this.config.time; //总时间--毫秒为单位
      const finalNum = this.num; //要显示的真实数值
      const regulator = this.config.regulator || 100 //调速器，改变regulator的数值可以调节数字改变的速度

      const step = finalNum / (time / regulator)/*每30ms增加的数值--*/
      let count = 0 //计数器
      let initial = 0
      var timer = setInterval(function () {
        count = count + step;

        if (count >= finalNum) {
          clearInterval(timer);
          count = finalNum;
        }
        //t未发生改变的话就直接返回
        //避免调用text函数，提高DOM性能
        var t = Math.floor(count);
        if (t == initial) return;

        initial = t;
        that.count = initial
      }, 30);
    }
  },
  created () {
    this.NumAutoPlusAnimation()
  }
}
</script>
<style scoped>
.wrapper {
  padding: 0px;
  margin: 0px;
}
</style>