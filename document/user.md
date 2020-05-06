## 基本语法

---


``` xml
 <JwChat-item :config="config" @click="bindClick" />
```

![](./img/20200506231245.png)


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
}
```
