function t(t) {
    i.client.request({
        url: "d=wxapi&c=mall_goods&m=goods_byid",
        data: {
            goodsid: n
        },
        success: function(o) {
            for (var e = o.data.goodsinfo, n = 0; n < e.imagelist.length; ++n) e.imagelist[n] = i.client.getFileUrl(e.imagelist[n]);
            t.setData({
                goodsDetail: e
            }), a(t, e.shopid);
        }
    });
}

function a(t, a) {
    i.client.request({
        url: "d=wxapi&c=mall_shop&m=shop_info",
        data: {
            shopid: a
        },
        success: function(a) {
            var o = a.data;
            o.shopavatar_small = i.client.getAvatarUrl(o.shopavatar_small), t.setData({
                shopDetail: o
            });
        }
    });
}

function o(a) {
    i.client.request({
        url: "d=wxapi&c=mall_user_favorite&m=favorite_save",
        data: {
            type: "2",
            toid: n
        },
        success: function(o) {
            t(a, !0);
        }
    });
}

function e(a, o) {
    i.client.request({
        url: "d=wxapi&c=mall_user_favorite&m=favorite_delete",
        data: {
            favoriteid: o
        },
        success: function(o) {
            t(a, !0);
        }
    });
}

var i = getApp(), n = "";

Page({
    data: {},
    onLoad: function(a) {
        n = a.goodsid, t(this);
    },
    callMobie: function(t) {
        var a = this.data.shopDetail.shoptel;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    bindCollection: function(t) {
        var a = this.data.goodsDetail.favoriteid;
        0 == a ? o(this) : e(this, a);
    },
    bindPreviewImg: function(t) {
        var a = t.currentTarget.dataset.index, o = this.data.goodsDetail.imagelist;
        wx.previewImage({
            current: o[a],
            urls: o
        });
    },
    bindBuyGoods: function(t) {
        wx.navigateTo({
            url: "../order/createOrder?goodsid=" + n
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});