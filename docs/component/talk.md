# 快捷回复组件

## JwChat-talk

<JwChat-talk class="box" :Talelist="talk" :config="quickConfig" @event="bindTalk" />

<script>
export default {
  data () {
    return {
      active: '1',
      quickConfig: { },
    }
  },
  watch:{
    active: {
      handler () {
        let config = {
          nav: ['快捷回复', '超级回复'],
          showAdd: true,
          maxlength: 200,
          showHeader: true,
          showDeleteBtn: true,
        }
        if(this.active==='2'){
          config.showAdd = false
          config.showDeleteBtn= false
        }
        this.quickConfig = config
      },
      immediate: true,
    }
  },
  computed: {
    talk () {
      let talk =  [
        '快捷回复1',
        '快捷回复2',
        '快捷回复3',
        '快捷回复4',
        '快捷回复5',
        '快捷回复6',
      ]
      if(this.active==='2'){
        talk =  [
          '超级回复1',
          '超级回复2',
          '超级回复3',
          '超级回复4',
          '超级回复5',
          '超级回复6',
        ]
      }
      return talk
    },
  },
  methods: {
    bindTalk (play) {
      const {key,value} = play
      if(key==='navIndex'){
        this.active = value
      }
      console.log('talk', play)
    },
  }
}
</script>
<style scoped>
.box {
  width: 200px;
  height: 440px;
  margin: 2rem auto;
  overflow: hidden;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
::: details 点击查看代码
``` vue

<JwChat-talk :Talelist="talk" :config="quickConfig" @event="bindTalk" />

<script>
export default {
  data () {
    return {
      quickConfig: {
        nav: ['快捷回复', '超级回复'],
        showAdd: true,
        maxlength: 200,
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
      ],
    }
  },
  methods: {
    bindTalk (play) {
      console.log('talk', play)
    },
  }
}
</script>
```
:::


## 参数配置

---

### Attribute

| 参数   | 说明         | 类型   | 可选值 | 默认值 |
| ------ | :----------- | ------ | ------ | ------ |
| talk   | 快捷回复内容 | Array  | -      | []     |
| config | 工具栏配置   | Object | -      | {}     |

### Methods

| 参数  | 说明             | 参数 |
| ----- | ---------------- | ---- |
| event | 组件点击选中事件 | {}   |



 ####  `config`参数


``` json
// 格式
{
    nav: ['快捷回复', '超级回复'],
    showAddBtn: true,
    showHeader: true,
    showDeleteBtn: true,
}
```
