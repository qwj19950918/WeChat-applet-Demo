//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  myfn:function(){
    console.log('执行求你')
  },
  onLoad: function () {
    this.myfn();
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
