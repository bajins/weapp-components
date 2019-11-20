Component({
  options: {
    // 在组件定义时的选项中启用多slot支持
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 弹窗标题
    title: {
      type: String,
      value: '用户未授权' // 默认值
    },
    // 弹窗内容
    content: {
      type: String,
      value: '小程序需要您的授权'
    },

    // 弹窗确认按钮文字
    confirmText: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件内私有数据
   */
  data: {
    // 弹窗显示控制
    isShow: false
  },

  /**
   * 组件的公有方法列表
   */
  methods: {

    //隐藏弹框
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    /**
     * triggerEvent 组件之间通信
     */
    confirmEvent(res) {
      this.triggerEvent("confirmEvent", res.detail);
      this.hideDialog();
    },
    bindGetUserInfo(res) {
      this.triggerEvent("bindGetUserInfo", res.detail);
      // 查看是否授权
      wx.getSetting({
        success: function(res) {
          console.log("用户是否同意授权:", res.authSetting["scope.userInfo"]);
        }
      })
    }
  }
})