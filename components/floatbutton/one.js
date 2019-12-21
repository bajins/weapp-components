Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 自定义根节点样式
    customStyle: {
      type: String,
      value: ""
    },
    // 自定义根节点样式类
    customClass: {
      type: String,
      value: ""
    },
    src: {
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
    clickbtn: function(e) {
      // 组件之间通信
      this.triggerEvent("clickFB");
    }
  }
})