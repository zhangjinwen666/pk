function t(t) {
  t.setData({
    loadMoreType: !0
  });
  w.get('shopuser/goods/getallgooods', { page: t.data.page, type:1 }, function (e) {
    console.log(e);
    var d = "", n = Number(e.total);
    var a = {};


    e.goods || (e.goods = []), e.goods.length > 0 && (a.page = t.data.page + 1, a.productList = t.data.productList.concat(e.goods));
    o.empty(n) ? d = "暂无更多数据" : a.productList.length == n ? d = "暂无更多数据" : a.productList.length < n && (d = "上啦加载更多");
    a.loadMoreType = !1;
    a.loadText = d;
    t.setData(a);
  });

}

function e(t, e, a) {
  w.post('shopuser/goods/delete', { goodsid: t }, function (t) {
    if (t.error != 0) {
      wx.showToast({
        title: t.message,
        icon: "none",
        duration: 2e3
      });
      return;
    }
    var o = a.data.productList;
    o.splice(e, 1), a.setData({
      productList: o
    });
  });
  return;
  o.client.request({
    url: "d=wxapi&c=mall_shop_goods&m=delete",
    data: {
      goodsid: t
    },
    success: function (t) {
      var o = a.data.productList;
      o.splice(e, 1), a.setData({
        productList: o
      });
    }
  });
}

var o = getApp(), w = o.requirejs("core");

Page({
  data: {
    loadMoreType: !0,
    page: 1,
    productList: []
  },
  onLoad: function (e) {
    //t(this);
  },
  catchEdit: function (t) {
    var e = t.currentTarget.dataset.goodsid, o = t.currentTarget.dataset.goodstype;
    "1" == o ? wx.navigateTo({
      url: "releaseDevice?goodsid=" + e
    }) : "2" == o && wx.navigateTo({
      url: "releaseProduct?goodsid=" + e
    });
  },
  catchDelete: function (t) {
    var o = t.currentTarget.dataset.goodsid, a = t.currentTarget.dataset.index, n = t.currentTarget.dataset.goodsname, s = this;
    wx.showModal({
      title: "提示",
      content: "是否删除“" + n + "”此商品？",
      success: function (t) {
        t.confirm && e(o, a, s);
      }
    });
  },
  onReady: function () { },
  onShow: function () {
    this.setData({ page: 1, productList: [] });
    t(this);
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () {
    this.setData({ page: 1, productList: [] });
    t(this), setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 1e3);
  },
  onReachBottom: function () {
    t(this);
  },
  onShareAppMessage: function () { }
});