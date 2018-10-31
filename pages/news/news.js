//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    mystate:false,
    array: ['美国', '中国', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    index:0,
    date: '2016-09-01',
    region: ['浙江省', '杭州市', '西湖区'],
    myColor:2
  },
  thisChange:function(e){
    this.setData({
      index:e.detail.value
    })
  },
  myChange:function(e){
    this.setData({
      multiIndex:e.detail.value
    })
  },
  myDate:function(e){
    this.setData({
      date: e.detail.value
    })
  },
  myRegion:function(e){
    this.setData({
      region:e.detail.value,
      myColor:1
    })
  }
})