
function a(a) {

  core.get('news/index/getcate','',function(t){
    a.setData({
      header: t.data
    })
    e(a);
    s(a);
  });
}

function t(a) {
  o.querySubBlockList(a.parentid, function (t) {
    console.log(t)
    for (var d in t) {
      var o = t[d];
      o.total = 1, o.page = 0, o.loadstatus = 0, o.list = [];
    }
    a.setData({
      header: t
    }), e(a), s(a);
  });
}

function e(a) {
  var t = a.data.headerIndex, e = a.data.header[t];
  e.page = 1, e.total = 0, e.list = [], e.loadstatus = 0, a.setData({
    showReload: !0
  });
}

function s(a) {
  wx.stopPullDownRefresh();
  var t = a.data.headerIndex, e = a.data.header, s = e[t];
  0 == s.loadstatus && (s.loadstatus = 1, e[t] = s, a.setData({
    header: e
  }) ,
    core.get('news/index/getAll', { cid:s.id,page:s.page }, function (d) {
      var o = d.data;
      s.total = d.total;
      for (var r in o) s.list.push(o[r]);

    s.list.length >= s.total ? s.loadstatus = 2 : s.loadstatus = 0;
    s.page++;
      e[t] = s;
      var n = {};
      n.callcredit = d.callcredit;
       n.header = e, a.data.showReload && (n.showReload = !1),
        a.setData(n);
    }));
}

var d = getApp(), o = require("../home/block.js"), core = require('../../utils/core');

Page({
  data: {
    header: [],
    headerIndex: 0,
    callcredit: 0
  },
  onLoad: function (t) {
    a(this);
  },
  onPullDownRefresh: function () {
    a(this);
  },
  onReachBottom: function () {
    s(this);
  },
  cellClick: function (t) {
    if (!d.globalData.hasLogin) {
      wx.switchTab({
        url: '/page/user/index'
      });
      return;
    }
    var a = t.currentTarget.dataset.id;
    
    console.log(a)
    wx.navigateTo({
      url: "/page/news/detail/index?id=" + a
    });
  },
  headerClick: function (a) {
    var t = this.data.headerIndex;
    a.currentTarget.dataset.index == t ? (e(this), s(this)) : (this.setData({
      headerIndex: a.currentTarget.dataset.index
    }), e(this),s(this));
  },
  onShareAppMessage: function () { }
});