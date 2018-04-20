# 按钮

按钮显然是前端开发所必不可少的组件。

# 属性

属性|类型|默认|示例|说明
-|-|-|-|-
color|String|undefined|red|设置按钮的背景色
href|String|undefined|/path/to/page/|用于设置按钮的路由，需配合vue-router

# 插槽

内部的文字。

可以通过`<br />`的方式来换行。

# 事件

事件|参数|说明
-|-|-
click|None|按钮按下并弹起

# 示例代码

```js
<v-button color="red">Text</v-button>
```
