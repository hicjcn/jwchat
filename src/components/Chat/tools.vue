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
      toolConfig: {
        'img': 'el-icon-picture-outline',
        'video': 'el-icon-video-camera',
        'file': 'el-icon-folder-opened'
      },
    }
  },
  methods: {
    bindButton (type) {
      this.tools.callback && this.tools.callback(type)
    }
  },
}
</script>
<style  scoped>
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
</style>