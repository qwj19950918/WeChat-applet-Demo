//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    props: [],
    baba:'',
    bobo:'',
    objectArray: [
      {
        id: 0,
        name: '美国',
        en:'USA'
      },
      {
        id: 1,
        name: '中国',
        en:'CHINA'
      },
      {
        id: 2,
        name: '巴西',
        en:'BRAZIL'
      },
      {
        id: 3,
        name: '日本',
        en:'JAPAN'
      }
    ],
    objectId:'',
    objectEn:''
  },
  myfn: function (e) {
    console.log('执行求你');
    this.setData({
      bobo: e.target.dataset.id
    })
    console.log(e.target.dataset.id)
  },
  myId:function(e){
    console.log(e.currentTarget)
    this.setData({
      objectId: e.currentTarget.dataset.id,
      objectEn: e.currentTarget.dataset.en,
    })
  },
  onLoad: function (options) {
    this.setData({
      baba:options.name
    })
  }
})