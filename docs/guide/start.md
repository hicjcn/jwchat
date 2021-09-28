# 使用

1. 因为本组件是基于 `element-ui` 开发。首先需要引入 `element-ui`。

```js
npm install element-ui
```

2. 在 `main.js` 中引入组件

``` js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import JwChat from 'jwchat';

/* 在 0.2.041 之前的版本需要引入 css */
// import 'jwchat/lib/JwChat.css';
Vue.use(JwChat)
```

3. 在 *.vue 中引入
``` xml
<JwChat-index
    :taleList="list"
    @enter="bindEnter"
    v-model="inputMsg"
    :showRightBox='true'
    scrollType="noscroll"
 />
 ```