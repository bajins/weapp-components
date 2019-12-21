Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 返回顶部
    backTop: {
      type: Boolean,
      value: ''
    },
    images: {
      type: Array,
      value: []
    },
    // 自定义样式
    customStyle: {
      type: String,
      value: ""
    },
    // 自定义根节点样式类
    customClass: {
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击除返回顶部以外的其他按钮
    clickBtn: function(e) {
      // 组件之间通信
      this.triggerEvent("clickFB", e.currentTarget.dataset);
    },
    // 点击返回顶部
    clickBackTop: function(e) {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 400
      })
    }
  }
})