Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // embedded、modal
    showMode: {
      type: String,
      value: ""
    },
    height: {
      type: String,
      value: "1000rpx"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 显示
     */
    canShow(data) {
      this.setData({
        isShow: true,
        newsList: formatNews(data)
      })
    },
    /**
     * 设置隐藏
     */
    canHide() {
      this.setData({
        isShow: false
      })
    },
    /**
     * 点击单个容器节点
     */
    clickSubContainer(e) {
      // 组件之间通信
      this.triggerEvent("clickSubContainer");
    },
  }
})

/**
 * 遍历数组格式化数组中的时间
 */
function formatNews(news) {
  return news.map(item => {
    let today = new Date().toLocaleDateString();
    let date = new Date(item.postTime)
    let dateStr = date.toLocaleDateString();
    if (today == dateStr) {
      item.time = dateFormat(date, 'HH:mm:ss');
    } else {
      item.time = dateFormat(date, 'yyyy-MM-dd HH:mm:ss');
    }
    return item;
  });
}



/**
 * Date格式化输出
 *
 * dateFormat(new Date(),"yyyy-MM-dd HH:mm:ss.S")   ==> 2019-11-19 17:10:22.970
 * dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss.S")   ==> 2019-11-19 05:09:54.203
 * dateFormat(new Date(),"yyyy-M-d h:m:s.S")        ==> 2019-11-19 5:19:5.44
 *
 * @param date
 * @param fmt
 * @returns {void | string}
 */
function dateFormat(date, fmt) {
  if (!date instanceof Date) {
    throw TypeError("date不是Date类型");
  }
  if (typeof fmt != "string") {
    throw TypeError("fmt不是字符串类型");
  }
  if (fmt == "" || fmt.length == 0) {
    throw new Error("fmt不能为空");
  }
  let opt = {
    // 年
    "y+": date.getFullYear(),
    // 月
    "M+": date.getMonth() + 1,
    // 日
    "d+": date.getDate(),
    // 时
    "H+": date.getHours(),
    "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,
    // 分
    "m+": date.getMinutes(),
    // 秒
    "s+": date.getSeconds(),
    // 季度
    "q+": Math.floor((date.getMonth() + 3) / 3),
    // 毫秒
    "S": date.getMilliseconds()
  };
  for (let k in opt) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      let type = opt[k].toString();
      let time = type.padStart(RegExp.$1.length, "0");
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? type : time)
    }
  }
  return fmt;
}