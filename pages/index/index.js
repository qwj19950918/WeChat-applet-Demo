//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    thisarr:['正直','善良','自由','赋予'],
    myarr:[
      { 'name': 'jack' ,  'age': 17 },
      { 'name': 'rose' ,  'age':16},
      { 'name': 'titan' , 'age': 27 },      
      ],
    myif:'banana',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    numcount:0,
  },
  //事件处理函数
  add:function(){
    this.setData({
      numcount: this.data.numcount + 1
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goNews:function(){
    wx.navigateTo({
      url: `../props/props?id=1&name=${this.data.motto}`,
    })
  },
  goFlex:function(){
    wx.navigateTo({
      url: '../flexbox/flexbox',
    })
  },
  goShop:function(){
    wx.navigateTo({
      url: '../shop/shop',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
