// page/tech/article/index.js
function e(t) {
  w.get('vote/index/getArticle', { id: d }, function (a) {
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
    c.wxParse("article_content", "html", a.data.detail, t, "0");
    t.setData({ article: s, isshow: !0, isclick: a.isclick, agree: a.agree, opposition: a.opposition, hidden:!1});
  });
}

//点赞
function l(t,e) {
  w.post('vote/index/vote', { id: d,status:e }, function (a) {
    if(0 !== a.error){
      wx.showToast({
        title: a.message,
        icon: "none",
        duration: 2e3
      });
      return;
    }
    t.setData({ isclick: a.isclick, agree: a.agree, opposition: a.opposition });
  });
}
var o = getApp(), w = o.requirejs('core'), d = '', c = o.requirejs("wxParse/wxParse");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: !0,
    isshow: !1,
    isclick:0,
    agree:0,
    opposition:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (t) {
    
    d = t.articleid, e(this);
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
  bindCollection:function(t){
    var e = t.currentTarget.dataset.index;
    l(this,e);
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