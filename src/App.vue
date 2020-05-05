<template>
  <div id="app">
    <JwChat-index
      :taleList="list"
      @enter="bindEnter"
      @bindCover="bindCover"
      v-model="inputMsg"
      :toolConfig="tool"
    >
      <!-- <JwChat-rightbox class="rightSlot" :config="rightConfig" @click="rightClick" /> -->
      <JwChat-talk class="rightSlot" :Talelist="talk" :config="quickConfig" @event="bindTalk" />
    </JwChat-index>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputMsg: '',
      list: [
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "起床不" },
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": "image/one.jpeg"
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "<audio data-src='https://www.w3school.com.cn/i/horse.mp3'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "image/two.jpeg"
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "<img data-src='image/three.jpeg'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "image/two.jpeg"
        },
        {
          "date": "2020/04/16 21:19:07",
          "text": { "text": "<video data-src='https://www.w3school.com.cn/i/movie.mp4' controls='controls' />" },
          "mine": true,
          "name": "JwChat",
          "img": "image/three.jpeg"
        },
      ],
      tool: {
        // show: ['file', 'img'],
        callback: this.toolEvent
      },
      rightConfig: {
        listTip: '当前在线',
        // notice: '【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。点个赞再走吧 ',
        list: [
          {
            name: 'JwChat',
            "img": "image/three.jpeg"
          },
          {
            name: '留恋人间不羡仙',
            "img": "image/one.jpeg"
          },
          {
            name: '只盼流星不盼雨',
            "img": "image/two.jpeg"
          }
        ]
      },
      quickConfig: {
        nav: ['快捷回复', '超级回复'],
        showAddBtn: true,
        showHeader: true,
        showDeleteBtn: true,
      },
      talk: [
        '快捷回复1',
        '快捷回复2',
        '快捷回复3',
        '快捷回复4',
        '快捷回复5',
        '快捷回复6',
      ]
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
        "img": "image/three.jpeg"
      }
      this.list.push(msgObj)
    },
    toolEvent (type) {
      console.log('tools', type)
    },
    bindCover (type) {
      console.log('header', type)
    },
    rightClick (type) {
      console.log('rigth', type)
    },
    bindTalk (play) {
      console.log('talk', play)
    },
  }
}
</script>
<style scoped>
.rightSlot {
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* display: flex; */
  flex-direction: column;
  /* justify-content: center; */
}
</style>
<style>
* {
  padding: 0;
  margin: 0;
}
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(to bottom right, #7a88ff, #7affaf);
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
