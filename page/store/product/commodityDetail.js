function t(t) {
  w.get('shopuser/goods/goods_view',{goodsid:n},function(o){
    if (o.error != 0){
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
    }), a(t, e.shopid);
  });
}

function a(t, a) {
  w.get('shopuser/index/shop_info', { shopid:a}, function (a) {
    var o = a.data;
    o.shopavatar_small = o.shopavatars, t.setData({
      shopDetail: o,
      isshow:a.isshow,
      lookMobile: a.lookMobile
    });
  });
}

function o(o) {
  w.post('shopuser/favorite/savefavorite', { type: 2, toid: n }, function (e) {
    console.log(e);
    t(o);
  });
}

function e(o, t) {
  w.post('shopuser/favorite/cancelfavorite', { id: t }, function (t) {
    t(o);
  });

}

var i = getApp(), n = "", w = i.requirejs("core");

Page({
    data: {
      isshow:!1,
      lookMobile:0
    },
    onLoad: function(a) {
        n = a.goodsid, t(this);
    },
    callMobie: function(t) {
        var a = this.data.shopDetail.shoptel;
      var credit = this.data.lookMobile;
      credit ? wx.showModal({
        title: "提示",
        content: "注意：当前查看需" + credit + "积分。",
        success: function (ao) {
          ao.confirm && w.get('shopuser/index/lookmobile', {}, function (e) {
            if (e.error == 0) {
              wx.makePhoneCall({
                phoneNumber: a
              });
            } else {
              wx.showToast({
                title: e.message,
                icon: 'none',
              });
              return;
            }
          });
        }
      }) : wx.makePhoneCall({
        phoneNumber: a
      });
    },
    bindCollection: function(t) {
        var a = this.data.goodsDetail.favoriteid;
        console.log(a);
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