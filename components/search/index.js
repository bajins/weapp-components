// 本组件为搜索组件
// 需要传入addflag   值为true / false （搜索框右侧部分）
// 若显示搜索框右侧部分   需传入右侧图标url以及addhandle函数

Component({

  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //搜索框 取消按钮显示与隐藏
    searchflag: false,
    searchstr: ""
  },

  /**
   * 组件的方法列表

   */
  methods: {
    //获得焦点
    getfocus() {
      this.setData({
        searchflag: true,
      })
    },
    //搜索输入
    searchList(e) {
      this.triggerEvent("searchList", e.detail);
    },
    //查询
    endsearchList(e) {
      this.triggerEvent("endsearchList", e.detail);
    },
    //失去焦点
    blursearch() {
      this.setData({
        searchflag: false,
      })
    },
    // 取消
    cancelsearch() {
      this.setData({
        searchflag: false,
        searchstr: ''        
      })
      this.triggerEvent("cancelsearch");
    },
    //清空搜索框
    activity_clear(e) {
      this.setData({
        searchflag: false,
        searchstr: ''
      })
      this.triggerEvent("activity_clear");
    },
  }
})