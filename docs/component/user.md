# 用户组件

## JwChat-item

 <JwChat-item class="box" :config="config" @click="bindClick" />

<script>
export default {
  data () {
    return {
      config: {
        img: '../image/cover.png',
        name: 'JwChat',
        dept: '最简单、最便捷',
        callback: this.bindCover
      },
    }
  },
  methods: {
    bindClick (play) {
      console.log('user', play)
    },
  }
}
</script>
<style scoped>
.box {
  width: 300px;
  border-radius: 0.9rem;
  height: 50px;
  margin: 2rem auto;
  padding-left: 0.5rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>

:::details 点击查看代码
```vue
  <JwChat-item :config="config" @click="bindClick" />

<script>
export default {
  data () {
    return {
      config: {
        img: '../image/cover.png',
        name: 'JwChat',
        dept: '最简单、最便捷',
        callback: this.bindCover
      },
    }
  },
  methods: {
    bindClick (play) {
      console.log('user', play)
    },
  }
}
</script>
```
:::


## 参数配置

---

### Attribute

| 参数   | 说明         | 类型          | 可选值 | 默认值 |
| ------ | :----------- | ------------- | ------ | ------ |
| config | 组件配置对象 | Object        | -      | {}     |
| size   | 封面图大小   | String/number | -      | 35     |

### Methods

| 参数  | 说明             | 参数 |
| ----- | ---------------- | ---- |
| click | 组件点击选中事件 | {}   |



*  ####  `config`


``` json
// 格式
{
    img: '', // 头像
    name: 'JwChat',
    dept: '', // 下边文字
    callback: ()=>{}, // 点击回调函数
}
```
