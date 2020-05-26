<template>
  <div class="jwchat-count" :style="style">
    <span class="title" v-if="getTitle">{{getTitle}}</span>
    <div class="number" :style="numberStyle">{{count}}</div>
    <div v-if="getUnit" :style="unitStyle">{{getUnit}}</div>
  </div>
</template>

<script>
export default {
  size: Number,
  name: 'JwChat-count',
  props: {
    num: Number,
    config: {
      regulator: Number,
      time: Number,
      color: String,
      unit: String,
      title: String,
      width: String,
      height: String,
    }
  },
  data () {
    return {
      count: 0
    }
  },
  computed: {
    style () {
      const { color = ["#000"], size = ["2rem"], width = "13rem", height='3rem' } = this.config || {}
      return {
        color: color[0],
        fontSize: size[0],
        width,
        height,
        lineHeight: height,
      }
    },
    getUnit () {
      let { unit = "" } = this.config || {}
      return unit
    },
    numberStyle () {
      const { color = ["#000"], size = ["2rem"] } = this.config || {}
      const obj = {
        textAlign: 'center'
      }
      if (color[1]) obj.color = color[1]
      if (size[1]) obj.fontSize = size[1]
      return obj
    },
    unitStyle () {
      const { color = ["#000"], size = ["2rem"] } = this.config || {}
      const obj = {}
      if (color[2]) obj.color = color[2]
      if (size[2]) obj.fontSize = size[2]
      return obj
    },
    getTitle () {
      const { title = "" } = this.config || {}
      return title
    },
  },
  watch: {
    num () {
      this.NumAutoPlusAnimation()
    }
  },
  methods: {
    NumAutoPlusAnimation () {
      const that = this
      const time = this.config && this.config.time || 1500; //总时间--毫秒为单位
      const finalNum = this.num; //要显示的真实数值
      const regulator = this.config && this.config.regulator || 100 //调速器，改变regulator的数值可以调节数字改变的速度

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
<style lang="scss" scoped>
.jwchat-count {
  padding: 0px;
  margin: 0px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-items: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;

  .title {
    margin-right: 0.2rem;
  }

  &::before {
    content: " ";
    position: absolute;
    width: 5px;
    background: #ffe68d;
    height: 200%;
    opacity: 0.6;
    left: 0;
    transform: rotate(25deg);
    // animation: move 1300ms ease-out infinite normal;
  }
  @keyframes move {
    0% {
      left: -10%;
    }
    100% {
      left: 150%;
    }
    120% {
      left: 150%;
    }
  }
}
</style>
