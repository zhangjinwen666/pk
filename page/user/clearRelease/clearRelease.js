// page/user/clearRelease/clearRelease.js
function t(t) {
  t.total = 1, t.page = 0, t.data.list = [], t.data.loadstatus = 0, a(t);
}

function a(t) {
  0 == t.data.loadstatus && (t.setData({
    loadstatus: 1
  }), t.page++ ,
    core.get('index/getmsg', { page: t.page, see: 1,status:'-1'}, function (a) {
      console.log(a);
      var s = a.list;
      t.total = a.total;
      var o = t.data.list;
      for (var c in s) o.push(s[c]);
      var e = {};
      e.isupdate = a.isupdate;
      e.list = o, o.length >= a.total ? e.loadstatus = 2 : e.loadstatus = 0, console.log(e), t.setData(e), wx.stopPullDownRefresh();
    }));
}

var s = getApp(), core = require('../../../utils/core');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    t(this);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    t(this);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    a(this);
  },
  changeData: function (t) {
    var a = t.detail, o = a.index;

    if (s.empty(a.data)) (e = this.data.list).splice(o, 1), this.setData({
      list: e
    }), this.total = parseInt(this.total) - 1; else {
      var e = this.data.list;
      console.log(e), e.splice(o, 1, a.data), this.setData({
        list: e
      }), console.log(e), this.total = parseInt(this.total);
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})