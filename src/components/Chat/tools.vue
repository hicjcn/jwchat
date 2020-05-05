<template>
  <div class="toolsBox">
    <div class="web__tools">
      <el-popover placement="top-start" trigger="click" ref="popover">
        <div class="emjioBox">
          <ul class="emjio">
            <li v-for="item in Object.keys(emoji)" :key="item" @click="selectEmit(item)">
              <a v-if="emoji[item]&&emoji[item].position" :style="emojiStyle(item)"></a>
              <a v-else-if="emoji[item].length<5">{{emoji[item]}}</a>
              <img v-else :src="emoji[item]" />
            </li>
          </ul>
        </div>
        <JwChat-icon slot="reference" type="icon-xiaolian" />
      </el-popover>
      <template v-for="item in showkeys()">
        <span
          v-if="toolConfig[item]"
          :key="item"
          :style="item=='history'&&'flex-grow: 100;text-align: right;'"
          @click="bindButton(item)"
        >
          <JwChat-icon :type="toolConfig[item]" />
        </span>
        <i :key="item" v-else :class="item" @click="bindButton(item)"></i>
      </template>
    </div>
  </div>
</template>

<script>
import emoji from '@/utils/emoji'
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
        'file': 'icon-wenjian',
        'video': 'icon-shipin',
        'img': 'icon-xiangce',
        'hongbao': 'icon-hongbao',
        'more': 'icon-gengduo',
        'history': 'icon-lishi',
      },
      'img': 'icon-xiangce',
    }
  },
  methods: {
    showkeys () {
      let keys = Object.keys(this.toolConfig)
      if (this.tools.show) {
        keys = this.tools.show
      }
      return keys
    },
    selectEmit (type) {
      this.$emit('emoji', type)
      this.$refs.popover.doClose()
    },
    bindButton (type) {
      this.tools.callback && this.tools.callback(type)
    },
    emojiStyle (item) {
      const emoji = this.emoji[item]
      if (!emoji) return {}
      const url = `/emoji/${emoji.panel}-r.png`
      return {
        display: 'inline-block',
        background: `url(${url})  no-repeat`,
        width: `28px`,
        height: `28px`,
        'background-position': emoji.position,
      }
    },
  },
}
</script>

<style  scoped>
.toolsBox {
  position: relative;
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