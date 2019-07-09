function t(t) {
    t.setData({
        loadMoreType: !0
    });
  w.get('shopuser/favorite/getgoodsfavorite','',function(e){
    var a = e.data;
    t.setData({
        productList: a,
        loadMoreType: !1,
        loadText: "暂无跟多数据"
    });
  });
}

function e(t) {
    t.setData({
        loadMoreType: !0
    });
  w.get('shopuser/favorite/getshopfavorite','',function(e){
    var a = e.data;
    t.setData({
      shopList: a,
      loadMoreType: !1,
      loadText: "暂无跟多数据"
    });
  });
}

function a(t) {
    t.setData({
        loadMoreType: !0
    });
  w.get('shopuser/favorite/getfavorite','',function(e){
    t.setData({
        favoriteList: e.data,
        loadMoreType: !1,
        loadText: "暂无跟多数据",
      callcredit: e.callcredit
    });
  });
}

function f(o,a,i,s){
  w.get('shopuser/favorite/delfavorite',{id:o,index:i},function(e){
    if(i == 0){
      var favoriteList = s.data.favoriteList;
      favoriteList.splice(a, 1), s.setData({
        favoriteList: favoriteList
      });
    }
    if(i == 1){
      var shopList = s.data.shopList;
      shopList.splice(a, 1), s.setData({
        shopList: shopList
      });
    }
    if(i == 2){
      var productList = s.data.productList;
      productList.splice(a, 1), s.setData({
        productList: productList
      });
    }
  })
}

var o = getApp(), w = o.requirejs('core');

Page({
    data: {
        tabs: [ "收藏的帖子", "收藏的商家", "收藏的商品" ],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        loadMoreType: !0
    },
    onLoad: function(t) {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    sliderLeft: (t.windowWidth / e.data.tabs.length - 96) / 2,
                    sliderOffset: t.windowWidth / e.data.tabs.length * e.data.activeIndex
                });
            }
        }), a(this);
    },
    tabClick: function(o) {
        this.setData({
            sliderOffset: o.currentTarget.offsetLeft,
            activeIndex: o.currentTarget.id
        }), 2 == o.currentTarget.id && t(this), 1 == o.currentTarget.id && e(this), 0 == o.currentTarget.id && a(this);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        t(this), e(this), a(this), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
  favorite:function(t){
    var activeIndex = this.data.activeIndex;
    var o = t.currentTarget.dataset.id, a = t.currentTarget.dataset.index, s = this;
    wx.showModal({
      title: "提示",
      content: "是否取消该收藏？",
      success: function (t) {
        t.confirm && f(o, a, activeIndex, s);
      }
    });
  },
  call: function (t) {
    var a = t.currentTarget.dataset.call;
    //查看电话需要积分
    var credit1 = this.data.callcredit;

    credit1 ? w.confirm('注意:每次查看电话将会消耗' + credit1 + '积分哦', function () {
      w.get('index/lookmobile', {}, (c) => {
        console.log(c)
        if (c.error == -1) {
          wx.showToast({
            title: c.message,
            icon: 'none',
          });
          return;
        }
        wx.makePhoneCall({
          phoneNumber: a
        });
      });

    }) : wx.makePhoneCall({
      phoneNumber: a
    });
  },
  cellClick: function (t) {
    var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.index;
    wx.navigateTo({
      url: "/page/home/detail?threadid=" + a + "&index=" + e
    });
  },
    changeData: function(t) {
        var e = t.detail.data, a = t.detail.index, o = this.data.favoriteList;
        o.splice(a, 1, e), t.detail.reload && this.setData({
            favoriteList: o
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});