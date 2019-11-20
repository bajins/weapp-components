# 搜索



- 在`.json`中引用

```json
{
  "usingComponents": {
    "search": "/components/search/index"
  }
}
```


- 在`.wxml`页面中引用

```xml
<!-- bind:组件中的事件名称：组件之间通信从父级传递数据 -->
<search id="search" bind:searchList="searchList" bind:endsearchList="endsearchList" bind:cancelsearch="cancelsearch" bind:activity_clear="activity_clear"></search>
```


- 在js中加入函数

```js
//搜索框输入时触发
searchList(e) {
  console.log('搜索框输入', e)
},
//搜索回调
endsearchList(e) {
  console.log('查询数据',e)
},
// 取消搜索
cancelsearch() {
  
},
```
