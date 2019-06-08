function e(e) {
    e.setData({
        loadMoreType: !0
    });
    var t = "";
    "mine" == i ? t = "d=wxapi&c=mall_order&m=order_page" : "shop" == i && (t = "d=wxapi&c=mall_shop_order&m=order_page"), 
    o.client.request({
        url: t,
        data: {
            page: a,
            rows: n
        },
        success: function(t) {
            var n = t.data.rows;
            r = Number(t.data.total);
            var i = e.data.orderList;
            if (1 == a && (i = []), null != n && n.length > 0) {
                for (var l = 0; l < n.length; ++l) console.error(n[l].dateline), n[l].dateline = o.util.formatDate(n[l].dateline, "yyyy-MM-dd   hh:mm:ss");
                i = i.concat(n);
            }
            var s = "";
            o.util.empty(r) ? s = "暂无更多数据" : i.length == r ? s = "暂无更多数据" : i.length < r && (s = "上啦加载更多"), 
            e.setData({
                orderList: i,
                loadMoreType: !1,
                loadText: s
            });
        },
        fail: function(t) {
            e.setData({
                loadMoreType: !1,
                loadText: "加载失败"
            });
        }
    });
}

function t() {
    a = 1, r = 0;
}

var o = getApp(), a = 1, n = 20, r = 0, i = "";

Page({
    data: {
        orderList: [],
        loadMoreType: !0
    },
    onLoad: function(o) {
        t(), "shop" == (i = o.navigateType) && wx.setNavigationBarTitle({
            title: "商家订单"
        }), e(this);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        a = 1, e(this), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function() {
        var t = this.data.orderList;
        Number(t.length) < r && (a++, e(this));
    },
    onShareAppMessage: function() {}
});