# 基础组件 Chat


## JwChat

<div class="tip" />
<JwChat class='jwchat' :taleList="list" @clickTalk="talkEvent" @enter="bindEnter"
 v-model="inputMsg" :toolConfig="tool" :quickList="quickList" >
  <template slot="tools">
    <div style="width:20rem;text-align:right;" @click="toolEvent('自定义')">
      <b slot="tools">插槽</b>
      <JwChat-icon type="icon-lishi" title="自定义"/>
    </div>
  </template>
</JwChat>

<script>
export default {
  data () {
    return {
      inputMsg: '',
      list: [],
      tool: {
        callback: this.toolEvent
      },
      quickList: [
        {text: '这里是jwchat，您想了解什么问题。'},
        {text: 'jwchat是最好的聊天组件'},
        {text: '谁将烟焚散，散了纵横的牵绊；听弦断，断那三千痴缠。'},
        {text: '长夏逝去。山野间的初秋悄然涉足。'},
        {text: '江南风骨，天水成碧，天教心愿与身违。'},
        {text: '总在不经意的年生。回首彼岸。纵然发现光景绵长。'},
        {text: '外面的烟花奋力的燃着，屋里的人激情的说着情话'},
        {text: '假如你是云，我就是雨，一生相伴，风风雨雨；'},
        {text: '即使泪水在眼中打转，我依旧可以笑的很美，这是你学不来的坚强。'},
        {text: ' 因为不知来生来世会不会遇到你，所以今生今世我会加倍爱你。'},
      ]
    }
  },
  methods: {
    bindEnter (e) {
      console.log(e)
      const msg = this.inputMsg
      if (!msg) return;
      const msgObj = {
        "date": "2020/05/20 23:19:07",
        "text": { "text": msg },
        "mine": true,
        "name": "JwChat",
        "img": "../image/three.jpeg"
      }
      this.list.push(msgObj)
    },
    toolEvent (type, obj) {
      console.log('tools', type, obj)
    },
    talkEvent (play) {
      console.log(play)
    },
  },
   mounted () {
    const img = 'https://www.baidu.com/img/flexible/logo/pc/result.png'
    const list = [
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "起床不" },
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": "../image/one.jpeg"
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "<audio data-src='https://www.w3school.com.cn/i/horse.mp3'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "../image/two.jpeg"
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "<img data-src='"+img+"'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "../image/two.jpeg"
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "<img data-src='../image/three.jpeg'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "../image/two.jpeg"
        },
        {
          "date": "2020/04/16 21:19:07",
          "text": { "text": "<video data-src='https://www.w3school.com.cn/i/movie.mp4' controls='controls' />" },
          "mine": true,
          "name": "JwChat",
          "img": "../image/three.jpeg"
        },
        {
          "date": "2021/03/02 13:14:21",
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": "../image/one.jpeg",
          "text": {
            system: {
              title: '在接入人工前，智能助手将为您首次应答。',
              subtitle: '猜您想问:',
              content: [
                {
                  id: `system1`,
                  text: '组件如何使用'
                },
                {
                  id: `system2`,
                  text: '组件参数在哪里查看'
                },
                {
                  id: 'system',
                  text: '我可不可把组件用在商业'
                }
              ]
            }
          }
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": {
            "text": "<i class='el-icon-document-checked' style='font-size:2rem;'/>",
            "subLink":{
              "text": "a.txt",
              "prop": {
                underline: false
              }
            },
          },
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": "../image/one.jpeg"
        },
      ]
    this.list = list
  }
}
</script>
<style scoped>
.tip{
  margin: 1rem 0;
}
.jwchat{
  margin: 1rem 0;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.jwchat>>>.web__msg{
  padding-top:0;
  padding-bottom:0;
}
</style>


:::details 点击查看代码
``` vue
<JwChat :taleList="list" @enter="bindEnter" @clickTalk="talkEvent" v-model="inputMsg"
 :toolConfig="tool":quickList="quickList">
  <template slot="tools">
    <div style="width:20rem;text-align:right;" @click="toolEvent('自定义')">
      <b slot="tools">插槽</b>
      <JwChat-icon type="icon-lishi" title="自定义"/>
    </div>
  </template>
</JwChat>

<script>
export default {
  data () {
    return {
      inputMsg: '',
      list: [],
      tool: {
        callback: this.toolEvent
      },
      quickList: [
        {text: '这里是jwchat，您想了解什么问题。'},
        {text: 'jwchat是最好的聊天组件'},
        {text: '谁将烟焚散，散了纵横的牵绊；听弦断，断那三千痴缠。'},
        {text: '长夏逝去。山野间的初秋悄然涉足。'},
        {text: '江南风骨，天水成碧，天教心愿与身违。'},
        {text: '总在不经意的年生。回首彼岸。纵然发现光景绵长。'},
        {text: '外面的烟花奋力的燃着，屋里的人激情的说着情话'},
        {text: '假如你是云，我就是雨，一生相伴，风风雨雨；'},
        {text: '即使泪水在眼中打转，我依旧可以笑的很美，这是你学不来的坚强。'},
        {text: ' 因为不知来生来世会不会遇到你，所以今生今世我会加倍爱你。'},
      ] 
    }
  },
  methods: {
    bindEnter (e) {
      console.log(e)
      const msg = this.inputMsg
      if (!msg) return;
      const msgObj = {
        "date": "2020/05/20 23:19:07",
        "text": { "text": msg },
        "mine": true,
        "name": "JwChat",
        "img": "../image/three.jpeg"
      }
      this.list.push(msgObj)
    },
    toolEvent (type, obj) {
      console.log('tools', type, obj)
    },
    talkEvent (play) {
      console.log(play)
    },
  },
   mounted () {
    const img = 'https://www.baidu.com/img/flexible/logo/pc/result.png'
    const list = [
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "起床不" },
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": "/image/one.jpeg"
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "<audio data-src='https://www.w3school.com.cn/i/horse.mp3'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "/image/two.jpeg"
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "<img data-src='"+img+"'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "/image/two.jpeg"
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": { "text": "<img data-src='/image/three.jpeg'/>" },
          "mine": false,
          "name": "只盼流星不盼雨",
          "img": "/image/two.jpeg"
        },
        {
          "date": "2020/04/16 21:19:07",
          "text": { "text": "<video data-src='https://www.w3school.com.cn/i/movie.mp4' controls='controls' />" },
          "mine": true,
          "name": "JwChat",
          "img": "/image/three.jpeg"
        },
        {
          "date": "2021/03/02 13:14:21",
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": "/image/one.jpeg",
          "text": {
            system: {
              title: '在接入人工前，智能助手将为您首次应答。',
              subtitle: '猜您想问:',
              content: [
                {
                  id: `system1`,
                  text: '组件如何使用'
                },
                {
                  id: `system2`,
                  text: '组件参数在哪里查看'
                },
                {
                  id: 'system',
                  text: '我可不可把组件用在商业'
                }
              ]
            }
          }
        },
        {
          "date": "2020/04/25 21:19:07",
          "text": {
            "text": "<i class='el-icon-document-checked' style='font-size:2rem;'/>",
            "subLink":{
              "text": "a.txt",
              "prop": {
                underline: false
              }
            },
          },
          "mine": false,
          "name": "留恋人间不羡仙",
          "img": "../image/one.jpeg"
        },
        {
        "date": "2020/04/25 21:19:07",
        "mine": false,
        "name": "留恋人间不羡仙",
        "img": "../image/one.jpeg",
        "text": {
          shop: {
            title: `2022年寒假读一本好书小学生三四五六年级课外读
            物阅读书籍经典儿童文学 回到远古和神仙们聊天 王云超著`,
            describe: '购买1-3件时享受单件价￥18.20，超出数量以结算价为准，仅限购买一次:',
            price: '999.99',
            cover: '../image/two.jpeg',
            tags: [
              {name:'第二件半价'},
              {name:'送50元优惠'},
              {name:'满1件,送50元优惠'},
            ]
          }
        }
      ]
    this.list = list
  }
}
</script>

```
:::

## 参数配置

### Attribute

| 参数       | 说明           | 类型   | 可选值 | 默认值 |
| :--------: | :------------: | :----: | :----: | :----: |
| v-model    | 输入框中的文字 | String | -      | ""     |
| taleList   | 要渲染的数据 | Array  | -      | []     |
| toolConfig | 工具栏配置     | Object | -      | {}     |
| width      | 聊天框宽度     | string | -      | 550px  |
| height     | 聊天框高度     | string | -      | 500px  |
| config     | 组件配置项     | Object | -      | {}     |
| scrollType | 滚动类型 | String | scroll (滚动到最新消息) | noroll (停留当期位置) |
| quickList | 快捷回复-根据输入内容显示 | Array | - | [] |

### Methods

| 参数      | 说明                               | 参数           |
| --------- | ---------------------------------- | -------------- |
| enter     | 输入框点击就发送或者回车触发的事件 | 输入的原始数据 |
| clickTalk | 点击聊天框列中的用户和昵称触发事件 | 当前对话数据   |

### Event

| 事件           | 说明                 | 传参 |
| -------------- | -------------------- | ---- |
| finishPullDown | 通知组件关闭加载动画 | -    |



###  Slot

| name   | 说明           |
| ------ | -------------- |
| tools | 工具栏自定义插槽 |

### `toolConfig` 说明

``` js
{
    // 现在只配置了 ["file", "video", "img", "hongbao", "more", "history"]
    show: ['file', 'history', 'img', ['文件1', '', '美图']],// 二级数组中放自定义名称
    showEmoji: true, // 是否显示表情图标
     /**
     * @description: 点击按钮的回调函数
     * @param {*} type 当前点击的按钮
     * @param {*} plyload 附加文件或者需要处理的数据
     * @return {*}
     */
	callback: toolEvent (type, plyload) {
   		console.log('tools', type, plyload)
	}    
}
    

```

### `config` 说明

``` js
{
  historyConfig: {
    show: true,
    tip: '滚动到顶时候显示的提示',
    /**
     * @description: 点击加载更多的回调函数
     * @param {*}
     * @return {*}
     */
    callback: bindLoadHistory () {
      const history = new Array(3).fill().map((i, j) => {
        return {
          "date": "2020/05/20 23:19:07",
          "text": { "text": j + new Date() },
          "mine": false,
          "name": "JwChat",
          "img": "image/three.jpeg"
        }
      })
      let list = history.concat(this.list)
      this.list = list
    } 
  }
}
```

### `quickList` 说明

``` js
[
  {text: '这里是jwchat，您想了解什么问题。'},
  {text: 'jwchat是最好的聊天组件'},
  {text: '谁将烟焚散，散了纵横的牵绊；听弦断，断那三千痴缠。'},
  {text: '长夏逝去。山野间的初秋悄然涉足。'},
  {text: '江南风骨，天水成碧，天教心愿与身违。'},
  {text: '总在不经意的年生。回首彼岸。纵然发现光景绵长。'},
  {text: '外面的烟花奋力的燃着，屋里的人激情的说着情话'},
  {text: '假如你是云，我就是雨，一生相伴，风风雨雨；'},
  {text: '即使泪水在眼中打转，我依旧可以笑的很美，这是你学不来的坚强。'},
  {text: ' 因为不知来生来世会不会遇到你，所以今生今世我会加倍爱你。'},
]
```