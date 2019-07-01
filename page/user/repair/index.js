
function n(t) {
  wx.navigateTo({
    url: t
  });
}

var e = getApp(),i = !1,w = e.requirejs("core");
Page({
  data: {
    moduleList: [{
      img: "/image/weixiuguanli.png",
      title: "我要维修",
      url: "manage/index"
    }, {
        img: "/image/fabujianli.png",
        title: "维修申请",
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