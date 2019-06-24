function e(t) {
  w.get('news/index/getnews', { id: d }, function (a) {
    if (a.error != 0) {
      wx.showToast({
        title: a.message,
        icon: "none",
        duration: 2e3
      });
      setTimeout(function () {
        wx.navigateBack({});
      }, 1500);
      return;
    }
    var s = a.data;
    c.wxParse("article_content", "html", a.data.article_content, t, "0");
    wx.setNavigationBarTitle({
      title: s.article_title
    });
    t.setData({ article: s, isshow: !0 });
  });
}

var o = getApp(), w = o.requirejs('core'), d = '', c = o.requirejs("wxParse/wxParse");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: !0,
    isshow: !1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (t) {
    d = t.id, e(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  likeClick: function (a) {
    l(this);
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})