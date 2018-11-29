// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vary_width: wx.getSystemInfoSync().windowWidth * 0.5,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;

    //···第一个圆环···
    that.canvasRing = that.selectComponent("#canvasRing");
    var num = 0; //初始值，从什么值开始
    var timer = setInterval(function() {
      num++;
      if (num >= 100) { //到哪个值结束
        clearInterval(timer); //清除定时器
      }
      that.setData({
        c_val: num
      })
      that.canvasRing.showCanvasRing(); //如果有定时器 就把它放定时器里面
    }, 50);


    //···第二个圆环···
    that.varyRing = that.selectComponent("#varyRing");

    //定义函数产生随机数
    function randomNum(min, max) {
      return Math.floor(Math.random() * (min - max) + max);
    }
    //定义函数产生随机颜色
    function getRandomColor() {
      var red = Math.round(Math.random() * 255);
      var green = Math.round(Math.random() * 255);
      var blue = Math.round(Math.random() * 255);
      return "rgba(" + red + "," + green + "," + blue + ",0.9)";
    }


    var vary_timer = setInterval(function() {
      that.setData({
        vary_color: getRandomColor(),
        val_color: getRandomColor(),
        vary_lineW: randomNum(1, 20), //线条的宽度 1~20随机数
        vary_start: randomNum(0, 360), //0~360的随机数
        vary_val: randomNum(0, 72) //0~72的随机数
      })
      that.varyRing.showCanvasRing();
    }, 300)



  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})