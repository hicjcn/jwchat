<template>
  <div class="toolsBox">
    <div class="web__tools">
      <el-popover placement="top-start" trigger="click" ref="popover">
        <div class="emjioBox">
          <ul class="emjio">
            <li v-for="item in Object.keys(emoji)" :key="item" @click="selectEmit(item)">
              <a
                v-if="emoji[item]&&emoji[item].position"
                :style="`display: inline-block;background: url(/emoji/${emoji[item].panel}-r.png) no-repeat;width: 28px;height: 28px; background-position:${emoji[item].position};`"
              ></a>
              <a v-else-if="emoji[item].length<5">{{emoji[item]}}</a>
              <img v-else :src="emoji[item]" />
            </li>
          </ul>
        </div>
        <i slot="reference" class="emjioIcon" />
      </el-popover>
      <template v-for="item in tools.show">
        <i
          v-if="toolConfig[item]"
          :key="item"
          :class="toolConfig[item]"
          @click="bindButton(item)"
        >{{toolConfig[item]?'':item}}</i>
        <i :key="item" v-else :class="item" @click="bindButton(item)"></i>
      </template>
    </div>
  </div>
</template>

<script>
import emoji from '@/utils/emoji'
// import emojiParser from 'wechat-emoji-parser'
export default {
  name: "JwChat_tools",
  props: {
    tools: {
      type: Object,
      default: () => {
        return {
          show: Object.keys(this.toolConfig),
          callback: Function
        }
      }
    }
  },
  data () {
    return {
      emoji,
      toolConfig: {
        'img': 'el-icon-picture-outline',
        'video': 'el-icon-video-camera',
        'file': 'el-icon-folder-opened'
      },
    }
  },
  methods: {
    selectEmit (type) {
      // const emoji = emojiParser(type)
      this.$emit('emoji', type)
      this.$refs.popover.doClose()
    },
    bindButton (type) {
      this.tools.callback && this.tools.callback(type)
    }
  },
}
</script>
<style  scoped>
.toolsBox {
  position: relative;
}
.emjioIcon {
  vertical-align: middle;
  padding-right: 20px;
  height: 20px;
  display: inline-block;
  background: url(/icon/icon-desktop@2x.png) -23px -1px / 44px no-repeat;
  background-position: -23px -1px;
}
.web__tools {
  text-align: left;
  padding-left: 8px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 30px;
}
i {
  margin-right: 12px;
  font-size: 20px;
  color: #888a91;
}
i:hover {
  color: #76b1f9;
}
.emjioBox {
  /* position: absolute;
  bottom: 35px;
  left: 12px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04); */
  background: #fff;
  height: 150px;
  width: 300px;
  overflow: auto;
  text-align: left;
}
.emjioBox li {
  display: inline-block;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
}
</style>