function t() {
  c = 0, l = 1, u = 20, h = 0, p = "", d = "" ,i = '';
}

function a(t) {
  w.get('shopuser/index/shop_info', '', function (t) {
    
    e(t.data);
  });
}

function e(t) {
  !t ? wx.navigateTo({
    url: "shop/shopStation"
  }) : wx.showModal({
    title: "提示",
    content: "您已入驻过店铺，点击确定进入店铺信息管理。",
    success: function (t) {
      t.confirm && wx.navigateTo({
        url: "/page/store/shop/shopStation?query=yes"
      });
    }
  });
}

function o(t) {
  var n = wx.getStorageSync('shopcate');
  if ('object' == typeof n && (r.getCurrentTime() - (n.time || 0)) < r.catchtime) {
    t.setData({ catTree: n.list, creditshow: n.credit.isshow, crediticon: n.credit.icon });
  } else {
    w.get('shopuser/index/getcate', '', function (e) {
      var l = {};
      l.time = r.getCurrentTime(), l.list = e.data, l.credit = e.credit;
      wx.setStorageSync('shopcate', l),
        t.setData({ catTree: l.list, creditshow: l.credit.isshow, crediticon: l.credit.icon});
    });
  }
}

function n(t) {
  t.setData({
    loadMoreType: !0
  });
  w.get('shopuser/index/getshopuser', { page: l, cateid: p, search: d }, function (a) {
    console.log(a);
    var e = t.data.shopList;
    h = parseInt(a.total);
    l == 1 && (e = []);
    var o = a.shop, n = [];
    if (o.length > 0) {
      for (var s = 0; s < o.length; ++s) {
        s < 3 && n.push(o[s].shopname);
      }
      e = e.concat(o);
    }
    
    w.empty(h) ? i = "暂无更多数据" : e.length == h ? i = "暂无更多数据" : e.length < h && (i = "上啦加载更多"),
      t.setData({
        shopList: e,
        newShopBanner: n,
        loadMoreType: !1,
        loadText: i,
      lookMobile: a.lookMobile
      });
  });
}

function ss(t) {
  t.setData({
    loadMoreType: !0
  });
  w.get('shopuser/goods/getallgooods', { page: l, goodstype: 1 }, function (a) {
    var e = t.data.shopList;
    h = parseInt(a.total);
    l == 1 && (e = []);
    var o = a.goods;
    if (o.length > 0) {
      e = e.concat(o);
    }
    w.empty(h) ? i = "暂无更多数据" : e.length == h ? i = "暂无更多数据" : e.length < h && (i = "上啦加载更多");
    t.setData({
      productList: e,
      loadMoreType: !1,
      loadText: i
    });
  })
}

function ii(t) {
  var n = wx.getStorageSync('shopbanner');
  if ('object' == typeof n && (r.getCurrentTime() - (n.time || 0)) < r.catchtime) {
    t.setData({ banner: n.list });
  } else {
    w.get('shopuser/index/getadv', '', function (e) {
      var l = {};
      l.time = r.getCurrentTime(), l.list = e.banner;
      wx.setStorageSync('shopbanner', l),
        t.setData({ banner: l.list });
    });
  }
}

var r = getApp(), c = 0, l = 1, u = 20, h = 0, p = "", d = "", w = r.requirejs('core'),i = '';

Page({
  data: {
    scrollTop: 0,
    inputShowed: !1,
    inputVal: "",
    searchShowed: !1,
    tabSelect: 0,
    shopList: [],
    isRefresh: !1,
    creditshow:!1,
    crediticon:'',
    loadMoreType: !0,
    lookMobile:0
  },
  onLoad: function (a) {
    t(), ii(this), o(this), n(this);
  },
  onScroll: function (t) {
    var a = t.detail.scrollTop;
    this.data.scrollTop = a;
    var e = this.data.searchShowed;
    a > 120 ? e || this.setData({
      searchShowed: !0
    }) : e && this.setData({
      searchShowed: !1
    });
  },
  onTouchStart: function (t) {
    c = t.touches[0].pageY;
  },
  onTouchEnd: function (t) {
    var a = t.changedTouches[0].pageY, e = this;
    this.data.scrollTop < 10 && a - c > 50 && (this.setData({
      isRefresh: !0
    }), wx.startPullDownRefresh({
      success: function (t) {
        l = 1, n(e), setTimeout(function () {
          wx.stopPullDownRefresh(), e.setData({
            isRefresh: !1
          });
        }, 1500);
      }
    }));
  },
  jupClick: function (a) {
    if (!r.globalData.hasLogin) {
      wx.switchTab({
        url: '/page/user/index'
      });
      return;
    }
    var isjump = a.currentTarget.dataset.isjump;
    wx.navigateTo({
      url: isjump
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: !0
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: !1
    }), d = "", l = 1, n(this);
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (t) { },
  bindSearchConfirm: function (t) {
    var a = t.detail.value;
    r.util.empty(a) || (d = a, l = 1, n(this));
  },
  onTabSelect: function (t) {
    var a = t.currentTarget.dataset.index;
    0 == a ? (l = 1, p = "", n(this)) : 1 == a ? (l = 1, p = this.data.catTree[0].catpath,
      n(this)) : 2 == a && ss(this), this.setData({
        tabSelect: a
      });
  },
  onStation: function (t) {
    if (!r.globalData.hasLogin) {
      wx.switchTab({
        url: '/page/user/index'
      });
      return;
    }
    a();
  },
  onCallClick: function (t) {
    if (!r.globalData.hasLogin) {
      wx.switchTab({
        url: '/page/user/index'
      });
      return;
    }
    var a = t.currentTarget.dataset.mobie;
    var credit = this.data.lookMobile;
    credit ? wx.showModal({
        title: "提示",
      content: "注意：当前查看需" + credit+"积分。",
        success: function (ao) {
          ao.confirm && w.get('shopuser/index/lookmobile',{},function(e){
            console.log(e);
            if (e.error == 0){
              wx.makePhoneCall({
                phoneNumber: a
              });
            }else{
              wx.showToast({
                title: e.message,
                icon: 'none',
              });
              return;
            }
          });
        }
      }):wx.makePhoneCall({
      phoneNumber: a
    });
  },
  onPreviewMap: function (t) {
    var a = parseFloat(t.currentTarget.dataset.maplat), e = parseFloat(t.currentTarget.dataset.maplong);
    wx.openLocation({
      latitude: a,
      longitude: e
    });
  },
  onLoadMore: function (t) {
    this.data.tabSelect < 2 && this.data.shopList.length < h && (l++ , n(this));
    this.data.tabSelect == 2 && this.data.productList.length < h && (l++ , ss(this));
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { 
    t(), o(this), n(this),ii(this);
  },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});
