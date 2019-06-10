function t(t) {
  w.get('shopuser/index/shop_info',{shopid:n},function(a){
    var e = a.data;
    t.setData({
        shopDetail: e
    });
  });
}

function a(t) {
  w.get('shopuser/goods/getallgooods', { page: 1, shopid:n }, function (a) {
    var e = a.goods;
    t.setData({
      productList: e
    });
  })
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

var o = getApp(), n = "", w = o.requirejs('core');

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