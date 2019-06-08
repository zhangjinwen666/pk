function t(t) {
    e.client.request({
        url: "d=wxapi&c=mall_goods&m=goods_byid",
        data: {
            goodsid: n
        },
        success: function(n) {
            var i = n.data.goodsinfo, o = i.videolist;
            if (null != o) for (var a = 0; a < o.length; a++) o[a] = e.client.getFileUrl(o[a]);
            var l = o.length, r = i.imagelist;
            r.length;
            if (null != r) {
                for (var s = 0; s < r.length; ++s) r[s] = e.client.getFileUrl(r[s]);
                r.push("");
            }
            t.setData({
                imagelist: r,
                videolist: o
            });
        }
    });
}

var e = getApp(), n = "";

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