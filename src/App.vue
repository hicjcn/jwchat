<template>
  <div id="app">
    <ChatPage :taleList="list" @enter="bindEnter" v-model="inputMsg" :toolConfig="tool" />
  </div>
</template>

<script>
import ChatPage from './components/Chat'

export default {
  components: {
    ChatPage
  },
  data () {
    return {
      inputMsg: '',
      list: [
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "起床不" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "image/two.jpeg"
        },
        {
          "date": "2020/04/16 21:19:07",
          "text": { "text": "我不饿" },
          "mine": true,
          "name": "留恋人间不羡仙",
          "img": "image/three.jpeg"
        },
      ],
      tool: {
        show: ['file', 'img'],
        callback: this.toolEvent
      },
      toolConfig: null
    }
  },
  methods: {
    bindEnter () {
      const msg = this.inputMsg
      if (!msg) return;
      const msgObj = {
        "date": "2020/05/20 23:19:07",
        "text": { "text": msg },
        "mine": true,
        "name": "JwChat",
        "img": "image/one.jpeg"
      }
      this.list.push(msgObj)
    },
    toolEvent (type) {
      alert(type)
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
width: 100vw;
height: 100vh;
overflow: hidden;
background-image: linear-gradient(to bottom right, #7a88ff, #7affaf);
body {
}
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
