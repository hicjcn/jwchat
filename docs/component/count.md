# 计数器

## JwChat-count
<el-button @click='changeNum' size="mini" style="margin-top:1rem;">改变数值</el-button>
<JwChat-count
    class="box"
    :config="{
      time:1500,
      regulator:50,
      unit:'人',
      title:'接入：',
      color:['','red',],
      size:['2rem','','']
    }"
    :num="num"
/>
<script>
export default {
  data () {
    return {
      num: 5000,
    }
  },
  methods:{
    changeNum(){
      this.num = Math.random()*10000
    }
  }
}
</script>
<style scoped>
.box {
  border-radius: 0.5rem;
  margin: 2rem auto;
  padding: 0.5rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>

:::details 点击查看代码
```vue
<JwChat-count
    class="box"
    :config="{
      time:1500,
      regulator:50,
      unit:'人',
      title:'接入：',
      color:['','red','#fff'],
      size:['2rem','','']
    }"
    :num="num"
/>
```
:::

## 参数配置

### Attribute

| 参数   | 说明         | 类型          | 可选值 | 默认值 |
| ------ | :----------- | ------------- | ------ | ------ |
| config | 组件配置对象 | Object        | -      | {}     |
| num   | 要显示的数据   | Number | -      | 0     |

