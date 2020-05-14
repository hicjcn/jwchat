<template>
  <div class="ChatPage" :style="faceSize">
    <div class="header">
      <JwChat-item :config="config" @click="bindClick" />
      <slot name="header"></slot>
    </div>
    <div class="main">
      <div class="chatBox">
        <JwChat
          :taleList="taleList"
          @enter="enter"
          v-model="msg"
          :toolConfig="toolConfig"
          :width="chatWidth"
          :height="chatHeight"
          @clickTalk="$emit('clickTalk',$event)"
        />
      </div>
      <div class="rightBox">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JwChat-index",
  props: {
    config: {
      type: Object,
      default: () => ({
        img: 'image/cover.png',
        name: 'JwChat',
        dept: '最简单、最便捷',
        callback: () => { }
      })
    },
    taleList: {
      type: Array,
      default: () => {
        return []
      }
    },
    height: {
      type: String,
      default: "570"
    },
    width: {
      default: "750"
    },
    value: {
      default: ''
    },
    toolConfig: {
      type: Object
    }
  },
  data () {
    return {
      chatHeight: '',
      chatWidth: "",
      msg: ''
    }
  },
  computed: {
    faceSize () {
      let height = this.height
      let width = this.width
      if (height.match(/\d$/)) {
        height += 'px'
      }
      if (width.match(/\d$/)) {
        width += 'px'
      }
      const style = { height, width }
      return style
    },
  },
  watch: {
    height: {
      handler () {
        this.chatHeight = this.height - 60 + ''
      },
      immediate: true
    },
    width: {
      handler () {
        this.chatWidth = this.width * .7 + ''
      },
      immediate: true
    },
    value: {
      handler () {
        this.msg = this.value;
      },
      immediate: true
    },
    msg: {
      handler () {
        this.$emit('input', this.msg);
      },
      immediate: true
    }
  },
  methods: {
    bindClick (type) {
      const { callback } = this.config || {}
      if (callback) {
        callback(type)
      }
    },
    enter (msg) {
      this.$emit('enter', msg)
    }
  }
}
</script>

<style  scoped>
.ChatPage {
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.ChatPage .header {
  background-color: #409eff;
  display: flex;
  margin: 0 auto;
  padding-left: 12px;
  align-items: center;
  height: 60px;
  position: relative;
  color: #fff;
}

.ChatPage .main {
  display: flex;
  height: calc(100% - 60px);
}
.ChatPage .main .rightBox {
  box-shadow: 0 -3px 3px 0 rgba(0, 0, 0, 0.1);
  width: 45%;
  overflow: auto;
}
</style>
