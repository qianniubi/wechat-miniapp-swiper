//index.js
var app = getApp();
const list = [
  {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/1.jpg',
    name: '我是图片'
  }, {
    img: './../../images/2.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/3.jpeg',
    name: '我是图片'
  }, {
    img: './../../images/4.jpg',
    name: '我是图片'
  }, {
    img: './../../images/5.jpeg',
    name: '我是图片'
  }, 
]
Page({
  data: {
    dataSource: [],
    dataSourceClass: ['spucard1', 'spucard2', 'spucard3'],
    subX: 0,
    startLeft: 0,
  },
  currentData: 2,
  onLoad(options) {


    wx.getSystemInfo({
      success: (res) => {
        const { screenWidth, screenHeight, statusBarHeight } = res
        const startLeft = 30 * screenWidth / 750
        this.setData({
          startLeft
        })
      }
    })

    this.setData({
      dataSource: [list[0], list[1], list[2]]
    })
    this.currentData += 1
  },

  setDataSource(classname) {
    let { dataSource, dataSourceClass } = this.data
    dataSource.push(list[this.currentData])
    dataSourceClass.splice(-3, 0, classname)
    this.setData({
      dataSource,
      dataSourceClass,
    })
    this.currentData += 1

  },
  drawStart(e) {
    this.startX = e.changedTouches[0].clientX
    this.startY = e.changedTouches[0].clientY
    this.timeStamp = e.timeStamp
  },
  drawMove(e) {
    const touchX = e.changedTouches[0].clientX//滑动zhong坐标
    this.setData({
      subX: touchX - this.startX
    })
  },

  drawEnd(e) {

    const startX = this.startX//开始X坐标
    const startY = this.startY//开始Y坐标
    const touchendX = e.changedTouches[0].clientX//滑动结束坐标
    const touchendY = e.changedTouches[0].clientY//滑动结束坐标

    const angle = this.angle({ X: startX, Y: startY }, { X: touchendX, Y: touchendY });
    if (Math.abs(angle) < 60) {
      const sub = touchendX - startX;
      const subABS = Math.abs(sub);
      if (subABS > 50) {
        if (sub < 0) {
          console.log('《===向⬅️滑动了')
          this.setDataSource('spucardLeft')
        } else {
          console.log('向➡️滑动了===》')
          this.setDataSource('spucardRight')
        }
      } else {
      }
    } else if (Math.abs(angle) <= 30) {

    }

    this.setData({
      subX: 0
    })


  },
  // 计算滑动角度
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },


})
