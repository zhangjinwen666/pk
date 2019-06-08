function o() {
    d = "";
}

function e(o, e) {
    r.client.request({
        url: "d=wxapi&c=mall_goods&m=goods_byid",
        data: {
            goodsid: d
        },
        success: function(i) {
            for (var n = i.data.goodsinfo, s = 0; s < n.imagelist.length; ++s) n.imagelist[s] = r.client.getFileUrl(n.imagelist[s]);
            if (null != n.goodsprop && n.goodsprop.length > 0) for (var l = 0; l < n.goodsprop.length; ++l) "true" == n.goodsprop[l].propvalue ? n.goodsprop[l].propvalue = "是" : "false" == n.goodsprop[l].propvalue && (n.goodsprop[l].propvalue = "否");
            o.setData({
                goodsDetail: n
            }), e || (t(o, n.shopid), a(o, n.catpath));
        }
    });
}

function t(o, e) {
    r.client.request({
        url: "d=wxapi&c=mall_shop&m=shop_info",
        data: {
            shopid: e
        },
        success: function(e) {
            var t = e.data;
            t.shopavatar_small = r.client.getAvatarUrl(t.shopavatar_small), o.setData({
                shopDetail: t
            });
        }
    });
}

function a(o, e) {
    r.client.request({
        url: "d=wxapi&c=mall_goods&m=goods_page",
        data: {
            rows: 10,
            catpath: e,
            goodstype: "1"
        },
        success: function(e) {
            for (var t = e.data.rows, a = 0; a < t.length; ++a) t[a].goodscover = r.client.getFileUrl(t[a].goodscover), 
            console.error(t[a].goodscover), t[a].dateline = r.util.formatDate(t[a].dateline, "yyyy-MM-dd"), 
            t[a].goodsid == d && (t.splice(a, 1), --a);
            o.setData({
                productList: t
            });
        }
    });
}

function i() {
    wx.showLoading({
        title: "二维码生成中"
    }), r.client.request({
        url: "d=wxapi&c=common&m=get_qrcode",
        data: {
            page: "page/store/product/deviceDetail",
            scene: d
        },
        success: function(o) {
            n(r.client.getFileUrl(o.data.url));
        }
    });
}

function n(o) {
    wx.hideLoading(), wx.previewImage({
        urls: [ o ]
    });
}

function s(o) {
    r.client.request({
        url: "d=wxapi&c=mall_user_favorite&m=favorite_save",
        data: {
            type: "2",
            toid: d
        },
        success: function(t) {
            e(o, !0);
        }
    });
}

function l(o, t) {
    r.client.request({
        url: "d=wxapi&c=mall_user_favorite&m=favorite_delete",
        data: {
            favoriteid: t
        },
        success: function(t) {
            e(o, !0);
        }
    });
}

var r = getApp(), d = "";

Page({
    data: {},
    onLoad: function(t) {
        o(), d = t.goodsid, r.util.empty(d) && (d = decodeURIComponent(t.scene)), e(this, !1);
    },
    callMobie: function(o) {
        var e = this.data.shopDetail.shoptel;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    bindBuyGoods: function(o) {
        r.checkLogin() && wx.navigateTo({
            url: "../order/createOrder?goodsid=" + d
        });
    },
    bindCollection: function(o) {
        var e = this.data.goodsDetail.favoriteid;
        0 == e ? s(this) : l(this, e);
    },
    bindPreviewImg: function(o) {
        var e = o.currentTarget.dataset.index, t = this.data.goodsDetail.imagelist;
        wx.previewImage({
            current: t[e],
            urls: t
        });
    },
    bindCallMobie: function(o) {
        var e = this.data.shopDetail.shoptel;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    bindOpenMap: function(o) {
        var e = this.data.shopDetail.maplat, t = this.data.shopDetail.maplong;
        wx.openLocation({
            latitude: parseFloat(e),
            longitude: parseFloat(t)
        });
    },
    openMore: function(o) {
        wx.navigateTo({
            url: "moreImg?goodsid=" + d
        });
    },
    generateCode: function() {
        i();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "泵车无忧商城"
        };
    }
});