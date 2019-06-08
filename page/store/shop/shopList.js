function t(t) {
    t.setData({
        loadMoreType: !0
    }), o.client.request({
        url: "d=wxapi&c=mall_shop&m=shop_page",
        data: {
            page: e,
            rows: n,
            catpath: l
        },
        success: function(a) {
            var n = t.data.shopList;
            s = parseInt(a.data.total), 1 == e && (n = []);
            var l = a.data.rows;
            if (l.length > 0) {
                for (var i = 0; i < l.length; ++i) l[i].shopavatar_small = o.client.getAvatarUrl(l[i].shopavatar_small);
                n = n.concat(l);
            }
            var r = "";
            o.util.empty(s) ? r = "暂无更多数据" : n.length == s ? r = "暂无更多数据" : n.length < s && (r = "上啦加载更多"), 
            t.setData({
                shopList: n,
                loadMoreType: !1,
                loadText: r
            });
        },
        fail: function(a) {
            t.setData({
                loadMoreType: !1,
                loadText: "加载失败"
            });
        }
    });
}

function a() {
    e = 1, n = 20, s = 0, l = "";
}

var o = getApp(), e = 1, n = 20, s = 0, l = "";

Page({
    data: {
        shopList: [],
        loadMoreType: !0
    },
    onLoad: function(o) {
        a(), l = o.catpath, t(this);
    },
    onCallClick: function(t) {
        var a = t.currentTarget.dataset.mobie;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    onPreviewMap: function(t) {
        var a = parseFloat(t.currentTarget.dataset.maplat), o = parseFloat(t.currentTarget.dataset.maplong);
        wx.openLocation({
            latitude: a,
            longitude: o
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        e = 1, t(this), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1500);
    },
    onReachBottom: function() {
        this.data.shopList.length < s && (e++, t(this));
    },
    onShareAppMessage: function() {}
});