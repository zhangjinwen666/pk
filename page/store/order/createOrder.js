function t(t) {
    d.client.request({
        url: "d=wxapi&c=mall_goods&m=goods_byid",
        data: {
            goodsid: n
        },
        success: function(o) {
            for (var e = o.data.goodsinfo, a = 0; a < e.imagelist.length; ++a) e.imagelist[a] = d.client.getFileUrl(e.imagelist[a]);
            e.dateline = d.util.formatDate(e.dateline, "yyyy-MM-dd");
            var i = e.goodspricenum;
            "4" == e.goodspricetype && (i = 1e4 * parseFloat(e.goodspricenum)), t.setData({
                goodsDetail: e,
                payPrice: i
            });
        }
    });
}

function o() {
    return d.util.empty(s) ? (d.showError("请输入收货人"), !1) : d.util.isMobile(r) ? !d.util.empty(u) || (d.showError("请输入收获地址"), 
    !1) : (d.showError("电话号码输入错误"), !1);
}

function e() {
    s = "", r = "", u = "";
}

function a(t) {
    d.client.request({
        url: "d=wxapi&c=mall_order&m=order_save",
        data: {
            goodsid: n,
            goodsnum: t.data.goodsNum,
            postusername: s,
            postusermobile: r,
            postuseraddr: u
        },
        success: function(t) {
            i(t);
        }
    });
}

function i(t) {
    wx.redirectTo({
        url: "/page/publish/pay?tradeid=" + t.data.tradeid + "&payamount=" + t.data.payamount
    });
}

var d = getApp(), n = "", s = "", r = "", u = "";

Page({
    data: {
        goodsNum: 1
    },
    onLoad: function(o) {
        e(), n = o.goodsid, t(this);
    },
    bindSubmitOrder: function(t) {
        o() && a(this);
    },
    bindSetGoodsNum: function(t) {
        var o = t.currentTarget.dataset.settype, e = Number(this.data.goodsNum);
        "add" == o ? e++ : "delete" == o && e > 1 && e--;
        var a = Number(this.data.goodsDetail.goodspricenum);
        "4" == this.data.goodsDetail.goodspricetype && (a = 1e4 * parseFloat(this.data.goodsDetail.goodspricenum)), 
        this.setData({
            goodsNum: e,
            payPrice: a * e
        });
    },
    bindInput: function(t) {
        var o = t.currentTarget.dataset.name;
        "postusername" == o ? s = t.detail.value : "postusermobile" == o ? r = t.detail.value : "postuseraddr" == o && (u = t.detail.value);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});