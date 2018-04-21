# 文本

一段文字的容器。

为什么不直接用html的p标签呢？

因为p标签的特性太少了啊。

# 属性

属性|类型|默认|示例|说明
-|-|-|-|-
color|String|undefined|red|设置文字的背景色
href|String|undefined|/path/to/page/|用于设置文字的路由，需配合vue-router


# 插槽

文本内容。

不建议再嵌套其它组件。

# 事件

事件|参数|说明
-|-|-
click|None|文字所在的整个方形区域收到点击事件

# 示例代码

```html
<v-text>This is a paragraph.</v-text>
```