# 搜索

> 注意数组顺序！

## 历程时间轴

- 在`.json`中引用

```json
{
  "usingComponents": {
    "history": "/components/timeline/history"
  }
}
```


- 在`.wxml`页面中引用

```xml
<!-- showMode：modal模态弹窗，embedded内嵌入页面进行滚动 -->
<!-- 当showMode="embedded"时，必须加上height="高度"属性设置 -->
<history id="history" show-mode="modal" bind:clickSubContainer="clickSubContainer"></history>
```


- 在js触发函数中加入

```js
let newsList = [{
  "content": "【新加坡风投公司Golden Gate Ventures发起规模1000万美元的加密基金】 位于新加坡的风险投资公司Golden Gate Ventures周五宣布，将发起名为LuneX Ventures、规模1000万美元的基金，投资加密货币和区块链技术初创企业。（路透）",
  "postTime": 1533905187022,
}, {
  "content": "【OKEx发布《关于执行隐藏和下线交易对的项目名单》】据OKEx官方消息，OKEx公布隐藏和下线交易对的项目名单，其中46个项目的Token被隐藏，29个交易对将下线，其中涉及20个项目的部分交易对。这些项目未下线的其他交易对在OKEx平台可以正常交易。 OKEx表示会保持对所有已上线该平台项目的持续关注，若发现存在符合隐藏或下线交易对标准的将会严格执行，同时也会根据项目后续发展情况对隐藏项目进行取消隐藏或下线交易兑的调整。",
  "postTime": 1533904126947,
}, {
  "content": "【浙江省整治网络传销 重点查处对象包括数字货币传销案件】据浙江在线消息，自今年3月份，浙江省开展网络传销违法犯罪活动联合整治工作，重点查处对象包括以“虚拟货币”为幌子的违法犯罪活动。截至6月底，全省工商（市场监管）部门、公安机关共立案查处传销案件132起，涉案金额11亿多元。",
  "postTime": 1533803036885,
}];
// 获得history组件
this.history = this.selectComponent("#history");
this.history.canShow(newsList);
```


- 在js中加入函数

```js
clickSubContainer(){
  // 隐藏组件
  this.history.canHide();
}
```




## 进度时间轴

- 在`.json`中引用

```json
{
  "usingComponents": {
    "course": "/components/timeline/course"
  }
}
```


- 在`.wxml`页面中引用

```xml
<course id="course" bind:clickSubContainer="clickSubContainer"></course>
```


- 在js触发函数中加入

```js
let content = [{
  postTime: "2019-11-19 20:39",
  status: "运输中",
  textArray: ["武汉转运中心公司 已发出，下一站 深圳转运中心"]
},
{
  postTime: "2019-11-19 20:37",
  status: "运输中",
  textArray: ["武汉转运中心公司 已收入"]
},
{
  postTime: "2019-11-19 14:37",
  status: "",
  textArray: ["湖北省孝感市汉川市公司 已打包"]
},
{
  postTime: "2019-11-19 14:17",
  status: "已揽件",
  textArray: ["湖北省孝感市汉川市公司 已收件"]
},
{
  postTime: "2019-11-19 13:50",
  status: "已发货",
  textArray: ["卖家发货"]
},
];
// 获得course组件
this.course = this.selectComponent("#course");
this.course.canShow(content);
```

- 在js中加入函数

```js
clickSubContainer(){
  // 隐藏组件
  this.course.canHide();
}
```