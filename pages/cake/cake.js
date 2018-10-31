//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    cake: [
      { url: '../../image/banner1.jpg' },
      { url: '../../image/banner2.jpg' }
    ],
    cakeNav:[
      { url: '../../image/icon1.png', name: '推荐' },
      { url: '../../image/icon2.png', name: '活动' },
      { url: '../../image/icon3.png', name: '新品' },
      { url: '../../image/icon4.png', name: '预定' },
      { url: '../../image/icon4.png', name: '预定' },
      { url: '../../image/icon4.png', name: '预定' },
      { url: '../../image/icon4.png', name: '预定' },
      { url: '../../image/icon4.png', name: '预定' },
      { url: '../../image/icon4.png', name: '预定' },
      { url: '../../image/icon4.png', name: '预定' },
      { url: '../../image/icon4.png', name: '预定z' },
    ],
    cakeShow:[
      { url: '../../image/img1.jpg' },
      { url: '../../image/img2.jpg' },
      { url: '../../image/img3.jpg' },
      { url: '../../image/img4.png' },
      { url:'../../image/img5.jpg'},
    ],
    thisindex:0,
    cakeText:[
      { text: '新店促销，9月1日至9月30日，全场7.8折，酒水除外。' },
      { text:'新店促销，9月1日至9月30日，全场7.8折，酒水除外。'},
    ]
  },
  myfn: function () {
    console.log('执行求你')
  },
  onLoad: function () {
    this.myfn();
  }
})
