<template>
  <div class="ChatPage" :style="faceSize">
    <div class="header">
      <img v-if="config.img" :src="config.img" class="header_cover" alt />
      <div class="header-info">
        <p class="web__logo-name">{{config.name}}</p>
        <p class="web__logo-dept">{{config.dept}}</p>
      </div>
      <slot name="header"></slot>
    </div>
    <div class="main">
      <div class="chatBox">
        <Chat
          :taleList="taleList"
          @enter="enter"
          v-model="msg"
          :toolConfig="toolConfig"
          :width="chatWidth"
          :height="chatHeight"
        />
      </div>
      <div class="rightBox">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Chat from '@/components/Chat'
export default {
  name: "JwChat-index",
  components: {
    Chat
  },
  props: {
    config: {
      type: Object,
      default: () => ({
        img: 'image/cover.png',
        name: 'JwChat',
        dept: '最简单、最便捷'
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
        this.chatHeight = this.height - 90 + ''
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
  align-items: center;
  height: 60px;
  position: relative;
}
.ChatPage .header .header_cover {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin: 0 12px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
}
.ChatPage .header .header-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ChatPage .header .header-info p {
  margin: 0;
  color: #fff;
  margin: 0;
  padding: 0;
  width: 175px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  white-space: nowrap;
  font-size: 13px;
}

.ChatPage .header .header-info p:last-child {
  font-size: 12px;
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
