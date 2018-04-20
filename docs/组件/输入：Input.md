# 输入

对html的输入框进行封装。

支持v-model是必须的。

# 属性

属性|类型|默认|示例|说明
type|String|text|password|html的input的type

# 插槽

None.

# 事件

事件|参数|说明
-|-|-
change|None|值改变时触发

# 示例代码

```html
<v-input v-model="inputModule" @change="inputChange"></v-input>
```