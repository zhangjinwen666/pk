function t(t) {
  w.get('shopuser/index/shop_info',{shopid:n},function(a){
    console.log(a);
    var e = a.data;
    t.setData({
        shopDetail: e,
        lookMobile:a.lookMobile
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
  w.post('shopuser/favorite/savefavorite',{type:1,toid:n},function(e){
    t(a);
  });
  
}

function i(a, e) {
  w.post('shopuser/favorite/cancelfavorite',{id:e},function(e){
    t(a);
  });
}

var o = getApp(), n = "", w = o.requirejs('core');

Page({
    data: {
        showDevice: !1,
        lookMobile:0
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
      var credit = this.data.lookMobile;
      credit ? wx.showModal({
        title: "提示",
        content: "注意：当前查看需" + credit + "积分。",
        success: function (ao) {
          ao.confirm && w.get('shopuser/index/lookmobile', {}, function (e) {
            console.log(e);
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