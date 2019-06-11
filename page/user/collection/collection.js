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
    //  o.client.request({
    //     url: "d=wxapi&c=mall_user_favorite&m=shop_page",
    //     data: {
    //         rows: 200
    //     },
    //     success: function(e) {
    //         var a = [], i = e.data.rows;
    //         if (i.length > 0) {
    //             for (var s = 0; s < i.length; ++s) i[s].shopavatar_small = o.client.getAvatarUrl(i[s].shopavatar_small);
    //             a = a.concat(i);
    //         }
    //         t.setData({
    //             shopList: a,
    //             loadMoreType: !1,
    //             loadText: "暂无跟多数据"
    //         });
    //     }
    // });
}

function a(t) {
    t.setData({
        loadMoreType: !0
    });
  w.get('shopuser/favorite/getfavorite','',function(e){
    console.log(e);
    t.setData({
        favoriteList: e.data,
        loadMoreType: !1,
        loadText: "暂无跟多数据"
    });
  });
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
    changeData: function(t) {
        var e = t.detail.data, a = t.detail.index, o = this.data.favoriteList;
        o.splice(a, 1, e), t.detail.reload && this.setData({
            favoriteList: o
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});