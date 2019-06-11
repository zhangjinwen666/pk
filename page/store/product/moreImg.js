function t(t) {
  w.get('shopuser/goods/goods_view', { goodsid: n }, function (n) {
    var i = n.data, o = i.videolists, r = i.imagelists;
    t.setData({
      imagelist: r,
      videolist: o
    });
  });
   
}

var e = getApp(), n = "", w = e.requirejs("core");

Page({
    data: {
        imgList: [ "", "", "", "" ]
    },
    onLoad: function(e) {
        n = e.goodsid, t(this);
    },
    watchVideo: function(t) {
        var e = t.currentTarget.dataset.url;
        wx.navigateTo({
            url: "/page/user/video/videoPlay?url=" + e
        });
    },
    watchImg: function(t) {
        var e = t.currentTarget.dataset.index, n = this.data.imagelist;
        "" != n[e] && ("" == n[n.length - 1] && n.splice(n.length - 1, 1), wx.previewImage({
            current: n[e],
            urls: n
        }));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});