<template>
  <div id="app">
    <!-- <JwChat-index :taleList="list" @enter="bindEnter" v-model="inputMsg" :toolConfig="tool" /> -->
    <ChatPage :taleList="list" @enter="bindEnter" v-model="inputMsg" :toolConfig="tool">
      <div class="rightSlot">
        <div class="notice">
          群通知
          <br />
          <p style="font-size:0.8rem;margin-top:0.5rem;">【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发</p>
        </div>
        <div class="userList">
          <ul>
            <li>组成员 3/3</li>
            <li v-for="item in allUser" :key="item.name">
              <img :src="item.img" alt />
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </ChatPage>
  </div>
</template>

<script>
import ChatPage from './components/ChatInterface'

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
        show: ['file', 'img'],
        callback: this.toolEvent
      },
      allUser: [
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
      ],
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
        "img": "image/three.jpeg"
      }
      this.list.push(msgObj)
    },
    toolEvent (type) {
      alert(type)
    }
  }
}
</script>
<style scoped>
.rightSlot {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}
.notice {
  height: 30%;
  text-align: left;
  padding-left: 0.2rem;
}
.userList {
  height: 70%;
  text-align: left;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.userList li {
  height: 2rem;
  line-height: 2rem;
  padding: 0.2rem;
}
img {
  width: 25px;
  margin-right: 0.3rem;
  vertical-align: middle;
  border-radius: 50%;
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
