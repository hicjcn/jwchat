# 用户资料卡片

## JwChat-card

<JwChat-card
    class="box"
    :data="[
    { label: 'nickName', value: 'JwChat', icon: 'el-icon-user' },
    { label: '住址', value: '内蒙古-乌兰察布市-内蒙古-内蒙古' },
    { label: '电话号', value: '18600******' },
    { label: '身份证号', value: '1233135153' },
    { label: '身份证号', value: '1233135153' },
    { label: '身份证号', value: '1233135153' },
    { label: '身份证号', value: '1233135153' },
    { label: '身份证号', value: '1233135153' },
    { label: '身份证号', value: '1233135153' },
    ]"
    :config=" {
    width: 25,
    height: 60,
    coverStyle: { width: '150px' },
    icon: 'el-icon-star-off',
    cover: '../image/two.jpeg'
    }"
/>

<style scoped>
.box {
  border-radius: 0.5rem;
  margin: 2rem auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>

:::details 点击查看代码
```vue
<JwChat-card
  :data="[
  { label: 'nickName', value: 'JwChat', icon: 'el-icon-user' },
  { label: '住址', value: '内蒙古-乌兰察布市-内蒙古-内蒙古' },
  { label: '电话号', value: '18600******' },
  { label: '身份证号', value: '1233135153' },
  { label: '身份证号', value: '1233135153' },
  { label: '身份证号', value: '1233135153' },
  { label: '身份证号', value: '1233135153' },
  { label: '身份证号', value: '1233135153' },
  { label: '身份证号', value: '1233135153' },
  ]"
  :config=" {
  width: 25,
  height: 60,
  coverStyle: { width: '150px' },
  icon: 'el-icon-star-off',
  cover: '../image/two.jpeg'
  }"
/>
```
:::

## 参数配置

### Attribute

| 参数   | 说明         | 类型          | 可选值 | 默认值 |
| ------ | :----------- | ------------- | ------ | ------ |
| config | 组件配置对象 | Object        | -      | {}     |
| data   | 要显示的数据   | Array | -      | []     |

