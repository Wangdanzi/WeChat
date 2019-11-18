// pages/tab/index.js
var common = require('./../common/common.js')
Page({

  data: { //页面的初始数据
    
    text: "This is page data."
  },
  helloMINA () {
    common.sayHello('MINA')
  },
  goodbyeMINA () {
    common.sayGoodbye('MINA')
  },
  onTabItemTap(item) {// tab 点击时执行
    this.helloMINA()
    this.goodbyeMINA()
    var app = getApp()
    app.globalData++
    console.log(app.globalData++, app)
  },
  onLoad  (options) {// 页面创建时执行
    this.helloMINA() 
    this.goodbyeMINA() 
    var app = getApp()
    app.globalData++
    console.log(app.globalData++,app)
  },
  onShow  () {// 页面出现在前台时执行
  },
  onReady  () { // 页面首次渲染完毕时执行
  },
  onHide  () {// 页面从前台变为后台时执行
  },
  onUnload  () {// 页面销毁时执行
  },
  onPullDownRefresh  () {// 触发下拉刷新时执行
  },
  onReachBottom  () {// 页面触底时执行
  },
  onShareAppMessage  () {// 页面被用户分享时执行
  },
  onPageScroll  () {// 页面滚动时执行
  },
  onResize  () {// 页面尺寸变化时执行
  }
})