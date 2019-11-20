# 授权


## 动态授权

- 在`.json`中引用

```json
{
  "usingComponents": {
    "dynamic":"/components/authorize/dynamic"
  }
}
```


- 在`.wxml`页面中引用

```xml
<!-- bind:组件中的事件名称：组件之间通信从父级传递数据 -->
<dynamic id="authorize" appName="我涂" bind:bindGetAuthorize="bindGetAuthorize"></dynamic>
```


- 在`onReady`js函数中加入

```js
//获得authorize组件
this.authorize = this.selectComponent("#authorize");
// userInfo,userLocation,userLocationBackground,address
// invoiceTitle,invoice,werun,record,writePhotosAlbum,camera
this.authorize.isAuthorize('record')
```


- 在js中加入函数

```js
bindGetAuthorize:function(res){
  console.log(res)
}
```




## 用户信息


- 在`.json`中引用

```json
{
  "usingComponents": {
    "userinfo": "/components/authorize/userinfo"
  }
}
```


- 在`.wxml`页面中引用

```xml
<!-- bind:组件中的事件名称：组件之间通信从父级传递数据 -->
<userinfo id="userinfo" bind:bindGetUserInfo="bindGetUserInfo"></userinfo>
```


- 在`onReady`js函数中加入

```js
//获得userinfo组件
this.userinfo = this.selectComponent("#userinfo");
let that = this;
// 查看是否授权
wx.getSetting({
    success: function(res) {
    if (!res.authSetting['scope.userInfo']) {
        that.userinfo.showDialog();
    }
    }
})
```

- 在js中加入函数

```js
bindGetUserInfo:function(res){
  console.log(res)
}
```