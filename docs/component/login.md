# 登录框

## JwChat-login

<div class="loginBox">
  <JwChat-login @submit="bindSubmit" width="600px"/>
</div>

<script>
  export default {
    methods:{
      bindSubmit(play){
        console.log(play)
      }
    }
  }
</script>

<style scoped>
.loginBox {
  border-radius: 0.5rem;
  margin: 2rem auto;
  padding: 0.5rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  width: 600px;
  height: 380px;
}
/deep/ .login-container{
  padding:0 !important;
}
</style>

:::details 点击查看代码
```vue
 <JwChat-login @submit="submit" :width="600px"
  :config="{
          rules: {
            username: [{
              required: true, trigger: 'blur', validator: function (rule, value, callback) {
                if (!value) {
                  callback(new Error('请输入账号'))
                } else {
                  callback()
                }
              }
            }],
            password: [{
              required: true, trigger: 'blur', validator: function (rule, value, callback) {
                if (!value) {
                  callback(new Error('请输入密码'))
                } else {
                  callback()
                }
              }
            }]
          }
        }"
/>
```
:::

## 参数配置

### Attribute

| 参数   | 说明         | 类型          | 可选值 | 默认值 |
| ------ | :----------- | ------------- | ------ | ------ |
| config | 组件配置对象 | Object        | -      | {}     |
| width   | 组件宽度   | string | -      |600px     |

### Methods

| 参数  | 说明                               | 参数           |
| ----- | ---------------------------------- | -------------- |
| submit | 点击提交返回填写数据 | form |
