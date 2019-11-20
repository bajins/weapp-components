Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 弹窗标题
    title: {
      type: String,
      // 默认值
      value: "微信授权"
    },
    appName: {
      type: String,
      value: ""
    },
    // 弹窗确认按钮文字
    confirmText: {
      type: String,
      value: "确定"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    popShow: false,
    authType: "",
    authTxt: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 检测用户是否已经授权过某个权限，如果没有授权就调用小程序的授权，如果授权了就返回相应的状态给回调函数
     * https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-列表
     * 
     * scope为具体的某个权限
     * cb为回调
     */
    isAuthorize(scope, cb) {
      let self = this;
      switch (scope) {
        case 'phoneNumber':
          self.setAuthorize(scope, '手机号');
          break;
        case 'userInfo':
          self.setAuthorize(scope, '用户信息');
          break;
        case 'userLocation':
          self.setAuthorize(scope, '地理位置');
          break;
        case 'userLocationBackground':
          self.setAuthorize(scope, '后台定位');
          break;
        case 'address':
          self.setAuthorize(scope, '通讯地址');
          break;
        case 'invoiceTitle':
          self.setAuthorize(scope, '发票抬头');
          break;
        case 'invoice':
          self.setAuthorize(scope, '获取发票');
          break;
        case 'werun':
          self.setAuthorize(scope, '微信运动步数');
          break;
        case 'record':
          self.setAuthorize(scope, '录音功能');
          break;
        case 'writePhotosAlbum':
          self.setAuthorize(scope, '保存到相册');
          break;
        case 'camera':
          self.setAuthorize(scope, '摄像头');
          break;
        default:
          console.log("scope错误，无法授权");
          self.popClose();
          return;
      }
    },
    /**
     * 授权
     */
    setAuthorize(scope, authTxt) {
      let self = this;
      wx.getSetting({
        success(res) {
          if (res.authSetting["scope." + scope]) {
            return typeof cb == "function" && cb();
          }
          self.setData({
            popShow: true,
            authType: scope,
            authTxt: authTxt
          })
          // 判断只能使用button按钮授权方式的
          if (scope != "userInfo" && scope != "phoneNumber") {
            wx.authorize({
              scope: 'scope.' + scope,
              success(e) {
                return typeof cb == "function" && cb();
              },
              fail(e) {
                console.log(e)
              }
            })
          }
        }
      })

    },
    /**
     * 用户点击允许或拒绝
     * triggerEvent 组件之间通信
     */
    bindGetAuthorize: function(res) {
      this.triggerEvent("bindGetAuthorize", res.detail);
      if (res.detail.errMsg.search("ok") != -1) {
        this.popClose();
        return typeof this.callBack == "function" && this.callBack();
      }
    },
    /**
     * 控制 pop 的打开关闭
     * 该方法作用有2:
     * 1：点击弹窗以外的位置可消失弹窗
     * 2：用到弹出或者关闭弹窗的业务逻辑时都可调用
     */
    popClose() {
      this.setData({
        popShow: false
      })
    },
  }
})