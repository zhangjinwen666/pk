function t(t) {
  w.get('shopuser/goods/goods_view',{goodsid:n},function(o){
    if (o.error != 0){
      console.log(33333);
      wx.showToast({
        title: o.message,
        icon: "none",
        duration: 2e3
      });
      setTimeout(function () {
        wx.navigateBack({});
      }, 1500);

      return;
    }
    var e = o.data;
    t.setData({
      goodsDetail: e
    }), a(t, e.id);
  });
}

function a(t, a) {
  w.get('shopuser/index/shop_info', { shopid:a}, function (a) {
    var o = a.data;
    o.shopavatar_small = o.shopavatars, t.setData({
      shopDetail: o,
      isshow:a.isshow
    });
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

var i = getApp(), n = "", w = i.requirejs("core");

Page({
    data: {
      isshow:!1
    },
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