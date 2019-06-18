
function n(t) {
  wx.navigateTo({
    url: t
  });
}

var e = getApp(),
  i = !1,
  w = e.requirejs("core");

Page({
  data: {
    moduleList: [{
      img: "/image/c-4.png",
      title: "维修管理",
      url: "manage/index"
    }, {
      img: "/image/c-3.png",
      title: "申请维修",
      url: "publish/index"
    }]
  },
  onLoad: function(t) {
    i = !1;
  },
  onNavigator: function(t) {
    var e = t.currentTarget.dataset.url;
    "" != e ? n(e) : '';
  },
  onReady: function() {},
  onShow: function() {
    
  },
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {}
});