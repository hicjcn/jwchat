<template>
  <div class="chatPage" :style="setStyle">
    <div class="taleBox" ref="scrollNode">
      <chatList
        :list="taleList"
        @click="bindEvent"
        @loadHistory="loadHistoryHandler"
        :config="chatListConfig"
      />
    </div>
    <div class="toolBox">
      <tools :tools="toolConfig" class="tools" @emoji="bindEmoji">
        <slot name="tools" slot="tools" />
      </tools>
      <EnterBox @submit="enter" v-model="msg" />
    </div>
  </div>
</template>

<script>
import EnterBox from './enterBox.vue'
import chatList from './chatList.vue'
import tools from './tools.vue'
export default {
  name: "JwChat",
  components: { EnterBox, chatList, tools },
  props: {
    taleList: {
      type: Array,
      default: () => ([])
    },
    scroll: {
      type: Number,
      default: -1
    },
    height: {
      default: '500px'
    },
    width: {
      default: '550px'
    },
    value: {
      default: ''
    },
    scrollType: {
      default: ''
    },
    toolConfig: {
      type: Object,
      default: () => ({
        show: ['file', 'video', 'img'],
        callback: Function
      })
    },
    config: {}
  },
  data () {
    return {
      msg: '',
      scrollToButton: false
    }
  },
  watch: {
    scroll (newVal) {
      if (typeof (newVal) === 'number') {
        this.setScroll(newVal)
      }
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
    },
    scrollToButton (newVal) {
      if (newVal) {
        setTimeout(() => {
          this.scrollToButton = false
        }, 0);
      }
    }
  },
  computed: {
    setStyle () {
      let height = this.height
      let width = this.width
      if (`${height}`.match(/\d$/)) {
        height += 'px'
      }
      if (`${width}`.match(/\d$/)) {
        width += 'px'
      }
      const style = { height, width }
      return style
    },
    talkHeight () {
      let height = this.height
      if (`${height}`.match(/\d$/)) {
        height -= 140
      } else
        height = `calc(${height} - 140px)`
      return height
    },
    chatListConfig () {
      const { width, talkHeight: height, scrollToButton, scrollType, config: { historyConfig = {} } = {} } = this
      return { width, height, scrollToButton, scrollType, historyConfig }
    }
  },
  methods: {
    bindEvent (play) {
      this.$emit('clickTalk', play)
    },
    bindEmoji (emoji) {
      this.getValue('.web__msg-input',emoji)
    },

    getValue(objid,str){
      /* eslint-disable */
      var myField=document.querySelector(""+objid);
      var sel = null
      //IE浏览器
     if (document.selection) {
       myField.focus();
       sel = document.selection.createRange();
       sel.text = str;
       sel.select();
     }
   
     //火狐/网景 浏览器
     else if (myField.selectionStart || myField.selectionStart == '0')
     {
     //得到光标前的位置
       var startPos = myField.selectionStart;
       //得到光标后的位置
       var endPos = myField.selectionEnd;
       // 在加入数据之前获得滚动条的高度
       var restoreTop = myField.scrollTop;
       myField.value = myField.value.substring(0, startPos) + str + myField.value.substring(endPos, myField.value.length);
       //如果滚动条高度大于0
       if (restoreTop > 0) {
         // 返回
         myField.scrollTop = restoreTop;
       }
       myField.focus();
       myField.selectionStart = startPos + str.length;
       myField.selectionEnd = startPos + str.length;
     }
     else {
       myField.value += str;
       myField.focus();
     }

      this.msg += myField.innerHTML

   },
  
    enter (msg) {
      this.$emit('enter', msg)
    },
    toButton () {
      this.scrollToButton = !this.scrollToButton
    },
    loadHistoryHandler () {
      const { historyConfig: { callback = null } = {} } = this.chatListConfig
      callback && callback()
    }
  },
}
</script>
<style lang="scss" scoped>
.chatPage {
  margin: 0 auto;
  position: relative;
  background: #fff;
  overflow: hidden;
}
.taleBox {
  height: calc(100% - 140px);
  min-height: 100px;
  overflow: hidden;
}
.toolBox {
  height: 140px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>