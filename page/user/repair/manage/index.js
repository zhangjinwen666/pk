function t(t) {
  t.setData({
    loadMoreType: !0
  });
  w.get('repair/index/getUserAll', { page: t.data.page,}, function (e) {
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
  w.post('repair/index/delete', { id: t }, function (t) {
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
    //t(this);
  },
  catchEdit: function (t) {
    var e = t.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/page/user/repair/publish/index?repairid=" + e
    });
  },
  catchDelete: function (t) {
    var o = t.currentTarget.dataset.id, a = t.currentTarget.dataset.index, n = t.currentTarget.dataset.name, s = this;
    wx.showModal({
      title: "提示",
      content: "是否删除“" + n + "”此申请？",
      success: function (t) {
        t.confirm && e(o, a, s);
      }
    });
  },
  imagePreview: function (t) {
    var a = t.currentTarget.dataset.image, e = this.data.productList.imagelist;
    console.log(t);
    console.log(a);
    console.log(this.data);
    wx.previewImage({
      urls: e,
      current: a
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