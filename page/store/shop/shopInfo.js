function t(t) {
    o.client.request({
        url: "d=wxapi&c=mall_shop&m=shop_info",
        data: {
            shopid: n
        },
        success: function(a) {
            var e = a.data;
            console.error(e);
            for (var i = 0; i < e.imagelist.length; ++i) e.imagelist[i] = o.client.getFileUrl(e.imagelist[i]);
            for (var n = 0; n < e.cardlist.length; ++n) e.cardlist[n] = o.client.getFileUrl(e.cardlist[n]);
            e.shopavatar_small = o.client.getAvatarUrl(e.shopavatar_small), t.setData({
                shopDetail: e
            });
        }
    });
}

function a(t) {
    o.client.request({
        url: "d=wxapi&c=mall_goods&m=goods_page",
        data: {
            rows: 200,
            shopid: n
        },
        success: function(a) {
            for (var e = a.data.rows, i = 0; i < e.length; ++i) e[i].goodscover = o.client.getFileUrl(e[i].goodscover), 
            e[i].dateline = o.util.formatDate(e[i].dateline, "yyyy-MM-dd");
            t.setData({
                productList: e
            });
        }
    });
}

function e(a) {
    o.client.request({
        url: "d=wxapi&c=mall_user_favorite&m=favorite_save",
        data: {
            type: "1",
            toid: n
        },
        success: function(e) {
            t(a);
        }
    });
}

function i(a, e) {
    o.client.request({
        url: "d=wxapi&c=mall_user_favorite&m=favorite_delete",
        data: {
            favoriteid: e
        },
        success: function(e) {
            t(a);
        }
    });
}

var o = getApp(), n = "";

Page({
    data: {
        showDevice: !1
    },
    onLoad: function(e) {
        n = e.shopid, t(this), a(this);
    },
    bindCollection: function(t) {
        var a = this.data.shopDetail.favoriteid;
        0 == a ? e(this) : i(this, a);
    },
    onBannerClick: function(t) {
        var a = t.currentTarget.dataset.index, e = this.data.shopDetail.imagelist;
        wx.previewImage({
            current: e[a],
            urls: e
        });
    },
    callMobie: function(t) {
        var a = this.data.shopDetail.shoptel;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    viewMap: function(t) {
        var a = parseFloat(this.data.shopDetail.maplat), e = parseFloat(this.data.shopDetail.maplong);
        wx.openLocation({
            latitude: a,
            longitude: e
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