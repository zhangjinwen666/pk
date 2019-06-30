function o() {
    d = "";
}

function e(o, e) {
  w.get('shopuser/goods/goods_view', { goodsid: d }, function (i) {
    if (i.error != 0) {
      
      wx.showToast({
        title: i.message,
        icon: "none",
        duration: 2e3
      });
      setTimeout(function () {
        wx.navigateBack({});
      }, 1500);

      return;
    }
    var n = i.data;
    if (null != n.goodsprop && n.goodsprop.length > 0) for (var l = 0; l < n.goodsprop.length; ++l) "true" == n.goodsprop[l].propvalue ? n.goodsprop[l].propvalue = "是" : "false" == n.goodsprop[l].propvalue && (n.goodsprop[l].propvalue = "否");
    o.setData(
      {
        goodsDetail: n
      }
    );
    e || (t(o, n.shopid), a(o, n.catid));
  });
}

function t(o, e) {
  console.log(e);
  w.get('shopuser/index/shop_info', { shopid: e }, function (e) {
    var t = e.data;
    t.shopavatar_small = t.shopavatars, o.setData({
      shopDetail: t,
      isshow: e.isshow,
      lookMobile:e.lookMobile
    });
  });
   
}

function a(o, e) {
  w.get('shopuser/goods/getallgooods',{rows:10,cateid:e,goodstype:1,goodsid:d},function(e){
    var t = e.goods;
    o.setData({
      productList: t
    });
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
  w.post('shopuser/favorite/savefavorite', { type: 2, toid: d }, function (t) {
    e(o, !0);
  });
}

function l(o, t) {
  w.post('shopuser/favorite/cancelfavorite', { id: t }, function (t) {
    e(o, !0);
  });
    
}

var r = getApp(), d = "", w = r.requirejs("core");

Page({
    data: {},
    onLoad: function(t) {
        o(), d = t.goodsid, w.empty(d) && (d = decodeURIComponent(t.scene)), e(this, !1);
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