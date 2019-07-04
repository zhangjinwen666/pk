Page({
    data: {
      url:''
    },
    onLoad: function(n) {
      console.log(n);
        var o = n.url;
        this.setData({
            url: o
        });
    },
    onReady: function(res) {
      console.log(res);
      this.videoContext = wx.createVideoContext('myVideo')
      console.log(this.videoContext);
    },
    onShow: function() {
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
  }
});