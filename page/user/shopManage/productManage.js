function t(t) {
    t.setData({
        loadMoreType: !0
    }), o.client.request({
        url: "d=wxapi&c=mall_shop_goods&m=goods_page",
        data: {
            rows: 200
        },
        success: function(e) {
            for (var a = e.data.rows, n = Number(e.data.total), s = 0; s < a.length; ++s) a[s].goodscover = o.client.getFileUrl(a[s].goodscover), 
            a[s].dateline = o.util.formatDate(a[s].dateline, "yyyy-MM-dd");
            var d = "";
            o.util.empty(n) ? d = "暂无更多数据" : a.length == n ? d = "暂无更多数据" : a.length < n && (d = "上啦加载更多"), 
            t.setData({
                productList: a,
                loadMoreType: !1,
                loadText: d
            });
        },
        fail: function(e) {
            t.setData({
                loadMoreType: !1,
                loadText: "加载失败"
            });
        }
    });
}

function e(t, e, a) {
    o.client.request({
        url: "d=wxapi&c=mall_shop_goods&m=delete",
        data: {
            goodsid: t
        },
        success: function(t) {
            var o = a.data.productList;
            o.splice(e, 1), a.setData({
                productList: o
            });
        }
    });
}

var o = getApp();

Page({
    data: {
        loadMoreType: !0
    },
    onLoad: function(e) {
        t(this);
    },
    catchEdit: function(t) {
        var e = t.currentTarget.dataset.goodsid, o = t.currentTarget.dataset.goodstype;
        "1" == o ? wx.navigateTo({
            url: "releaseDevice?goodsid=" + e
        }) : "2" == o && wx.navigateTo({
            url: "releaseProduct?goodsid=" + e
        });
    },
    catchDelete: function(t) {
        var o = t.currentTarget.dataset.goodsid, a = t.currentTarget.dataset.index, n = t.currentTarget.dataset.goodsname, s = this;
        wx.showModal({
            title: "提示",
            content: "是否删除“" + n + "”此商品？",
            success: function(t) {
                t.confirm && e(o, a, s);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        t(this), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});