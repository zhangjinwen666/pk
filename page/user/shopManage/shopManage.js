function t(t) {
  w.get('shopuser/index/shop_info', '', function (t) {
    i = t.data;
  });
}

function o() {
  i ? wx.showToast({
    title: "您已入驻过店铺"
  }) : wx.navigateTo({
    url: "/page/store/shop/shopStation"
  });
}

function n(t) {
  i ? wx.navigateTo({
    url: t
  }) : wx.showModal({
    title: "温馨提示",
    content: "您还未入驻成为商家，马上去入驻吧",
    success: function (t) {
      t.confirm && wx.navigateTo({
        url: "/page/store/shop/shopStation"
      });
    }
  });
}

var e = getApp(), i = !1, w = e.requirejs("core");

Page({
  data: {
    moduleList: [{
      img: "/image/c-2.png",
      title: "商品管理",
      url: "productManage"
    }, {
      img: "/image/c-3.png",
      title: "发布商品",
      url: "releaseProduct"
    }, {
      img: "/image/c-3.png",
      title: "发布设备",
      url: "releaseDevice"
    }, {
      img: "/image/c-4.png",
      title: "所有订单",
      url: "/page/user/order/orderList?navigateType=shop"
    }, {
      img: "/image/c-5.png",
      title: "新店入驻",
      url: ""
    }]
  },
  onLoad: function (t) {
    i = !1;
  },
  onNavigator: function (t) {
    var e = t.currentTarget.dataset.url;
    "" != e ? n(e) : o();
  },
  onMyShop: function (t) {
    n("/page/store/shop/shopStation?query=yes");
  },
  onReady: function () { },
  onShow: function () {
    t();
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});