<template>
  <div>
    <div class="web__tools">
      <i
        v-for="item in tools.show"
        :key="item"
        :class="toolConfig[item]"
        @click="bindButton(item)"
      >{{toolConfig[item]?'':item}}</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "JChatTool",
  components: {},
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
      toolConfig: {
        'img': 'el-icon-picture-outline',
        'video': 'el-icon-video-camera',
        'file': 'el-icon-folder-opened'
      },
    }
  },
  watch: {},
  computed: {},
  methods: {
    bindButton (type) {
      this.tools.callback && this.tools.callback(type)
    }
  },
  created () { },
  mounted () { }
}
</script>
<style  scoped>
.web__tools {
  text-align: left;
  padding: 8px;
  box-sizing: border-box;
}
i {
  margin-right: 12px;
  font-size: 20px;
  color: #888a91;
}
i:hover {
  color: #76b1f9;
}
</style>