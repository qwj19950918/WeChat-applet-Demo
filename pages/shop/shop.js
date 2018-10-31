//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    shop: [],
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
      ]
  },
  myfn: function () {
    console.log('执行求你')
  },
  onLoad: function () {
    this.myfn();
  }
})
