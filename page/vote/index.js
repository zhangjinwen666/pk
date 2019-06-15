// page/tech/index.js
function t() {
  c = 0, l = 1, h = 0, p = "", d = "";
}

//获取所有的投票内容
function s(t) {
  w.get('vote/index/getAllArticle', { page: l }, function (e) {
    var a = t.data.articleList;
    h = e.total;
    l == 1 && (a = []);
    var r = e.data;
    if (r.length > 0) {
      a = a.concat(r);
    }
    var i = "";
    w.empty(h) ? i = "暂无更多数据" : a.length == h ? i = "暂无更多数据" : a.length < h && (i = "上啦加载更多"),
      t.setData({
        articleList: a,
        loadMoreType: !1,
        loadText: i
      });
  });
}

var o = getApp(), w = o.requirejs('core'), c = 0, l = 1, h = 0, p = "", d = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],
    loadMoreType: !0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onTouchStart: function (t) {
  },
  onTouchEnd: function (t) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this;
    o.getUserInfo(function (e) {
      if (!e.isMobile) {
        wx.redirectTo({
          url: "/page/user/common/login"
        });
        return;
      }else{
        t(), s(_this);
      }
    });
  },
  onLoadMore: function (t) {
    this.data.articleList.length < h && (l++ , s(this));
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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