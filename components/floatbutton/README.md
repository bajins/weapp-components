# 授权


## 悬浮固定返回顶部按钮和菜单

- 在`.json`中引用

```json
{
  "usingComponents": {
    "floatFixedbutton":"/components/floatbutton/fixed"
  }
}
```


- 在`.wxml`页面中引用

```xml
<!-- bind:组件中的事件名称：组件之间通信从父级传递数据 -->
<floatFixedbutton back-top custom-style="background: #ffffff9c;" images="{{ ['../../images/1.png','../../images/2.png'] }}" bind:clickFB="clickFloatButton"/>
```

1、 `backTop`当有此属性为true时显示返回顶部按钮

> 控制动态显示：在`onPageScroll`js监听页面滚动函数中加入，且`back-top="{{ backTop }}"`

```js
//监听页面滚动
onPageScroll: function (e) {
    this.setData({
      // 当页面滚动大于100px时显示
      backTop: e.scrollTop > 100 ? true : false
    });
}
```

2、`custom-style`自定义样式

3、`custom-class`自定义根节点样式类


4、`images`此属性为自定义按钮的图片地址数组

> 注意路径为相对于组件位置


5、`bind:clickFB`从组件传递绑定的事件

> 在js中加入函数(当images属性有值时生效)

```js
clickFloatButton: function(e) {
  // 从0开始，取的数组下标，可由此值判断做相应的逻辑处理
  console.log(`点击第${e.detail.index}个按钮`);
}
```


## 悬浮固定单个按钮


- 在`.json`中引用

```json
{
  "usingComponents": {
    "floatOneButton": "/components/floatbutton/one"
  }
}
```


- 在`.wxml`页面中引用

```xml
<!-- bind:组件中的事件名称：组件之间通信从父级传递数据 -->
<floatOneButton bind:clickFB="clickFloatOneButton" src="../../images/test.png"/>
```

1、 `bind:clickFB`从组件传递绑定的事件

> 在js中加入函数

```js
clickFloatOneButton: function() {
  // 逻辑处理
  console.log("点击悬浮按钮");
}
```

2、 `src`此属性为按钮的图片地址

> 注意路径为相对于组件位置

3、`custom-style`自定义样式

> 如：`custom-style="left:auto;right:0px;border-radius: 50% 0px 0px 50%;"`

4、`custom-class`自定义根节点样式类