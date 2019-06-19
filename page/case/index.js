function t(t) {
  t.setData({
    loadMoreType: !0
  });
  w.get('case/index/getAll', { page: t.data.page, }, function (e) {
    console.log(e);
    var d = "", n = Number(e.total);
    var a = {};
    e.data || (e.data = []), e.data.length > 0 && (a.page = t.data.page + 1, a.productList = t.data.productList.concat(e.data));
    o.empty(n) ? d = "暂无更多数据" : a.productList.length == n ? d = "暂无更多数据" : a.productList.length < n && (d = "上啦加载更多");
    a.loadMoreType = !1;
    a.loadText = d;

    t.setData(a);
  });

}

function e(t, e, a) {
  w.post('case/index/delete', { id: t }, function (t) {
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
}

var o = getApp(), w = o.requirejs("core");

Page({
  data: {
    loadMoreType: !0,
    page: 1,
    productList: []
  },
  onLoad: function (e) {
    this.setData({ page: 1, productList: [] });
    t(this);
  },
  imagePreview: function (t) {
    var a = t.currentTarget.dataset.image, e = t.currentTarget.dataset.index;
    console.log(t);
    wx.previewImage({
      urls: e,
      current: a
    });
  },
  cellClick: function (t) {
    var e = t.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/page/case/detail/index?caseid=' + e
    })
  },
  onReady: function () { },
  onShow: function () {

  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () {
   
  },
  onReachBottom: function () {
    t(this);
  },
  onShareAppMessage: function () { }
});