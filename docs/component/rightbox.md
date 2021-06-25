
# 右边栏-仿QQ群

## JwChat-rightbox

<el-button @click='showNotice' size="mini" style="margin-top:1rem;">传入公告</el-button>
<JwChat-rightbox class='rightSlot' :config="rightConfig" @click="rightClick" />
<script>
export default {
  data () {
    return {
      show: false,
      rightConfig: {}
    }
  },
  watch:{
    show:{
      handler(newVal){
        let _c =  {
          listTip: '当前在线',
          // notice: '【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。点个赞再走吧 ',
          list: [
            {
              name: 'JwChat',
              "img": "../image/three.jpeg"
            },
            {
              name: '留恋人间不羡仙',
              "img": "../image/one.jpeg"
            },
            {
              name: '只盼流星不盼雨',
              "img": "../image/two.jpeg"
            }
          ]
        }
        if(newVal){
          _c.notice= '【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。点个赞再走吧 '
        }
        this.rightConfig = _c
      },
      immediate: true,
    }
  },
  methods: {
    rightClick (type) {
      console.log('rigth', type)
    },
    showNotice(){
      this.show = !this.show
    },
  }
}
</script>
<style scoped>
.rightSlot {
  width: 200px;
  height: 440px !important;
  margin: 2rem auto;
  overflow: hidden;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.rightSlot>>>li{
    list-style:none;
}
</style>

:::details 点击查看代码
``` vue
<JwChat-rightbox :config="rightConfig" @click="rightClick" />

<script>
export default {
  data () {
    return {
      rightConfig: {
        listTip: '当前在线',
        // notice: '【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。点个赞再走吧 ',
        list: [
          {
            name: 'JwChat',
            "img": "../image/three.jpeg"
          },
          {
            name: '留恋人间不羡仙',
            "img": "../image/one.jpeg"
          },
          {
            name: '只盼流星不盼雨',
            "img": "../image/two.jpeg"
          }
        ]
      }
    }
  },
  methods: {
    rightClick (type) {
      console.log('rigth', type)
    },
  }
}
</script>

```
:::

## 参数配置

---

### Attribute

| 参数   | 说明           | 类型   | 可选值 | 默认值 |
| ------ | :------------- | ------ | ------ | ------ |
| config | 输入框中的文字 | Object | -      | -      |

### Methods

| 参数  | 说明                 | 参数       |
| ----- | -------------------- | ---------- |
| click | 点击列表触发回调函数 | 选中的节点 |

#### `config`参数

``` json
// 格式
{
  tip: '群公告',
  notice: '【公告】这是一款高度自由的聊天组件，基于AVue、Vue、Element-ui开发。点个赞再走吧 ',
  listTip: '当前在线',
  list: [
    {
      name: 'JwChat',
      "img": "../image/three.jpeg"
    },
    {
      name: '留恋人间不羡仙',
      "img": "../image/one.jpeg"
    },
    {
      name: '只盼流星不盼雨',
      "img": "../image/two.jpeg"
    }
  ]
}
```
