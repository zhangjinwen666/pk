function t() {
    c = 0, l = 1, u = 20, h = 0, p = "", d = "";
}

function a(t) {
    r.client.request({
        url: "d=wxapi&c=mall_user_shop&m=shop_info",
        data: {},
        success: function(t) {
            e(t);
        }
    });
}

function e(t) {
    null == t.data ? wx.navigateTo({
        url: "shop/shopStation"
    }) : wx.showModal({
        title: "提示",
        content: "您已入驻过店铺，点击确定进入店铺信息管理。",
        success: function(t) {
            t.confirm && wx.navigateTo({
                url: "/page/store/shop/shopStation?query=yes"
            });
        }
    });
}

function o(t) {
    r.client.request({
        url: "d=wxapi&c=mall_shop&m=cat_tree",
        data: {},
        success: function(a) {
            for (var e = a.data, o = 0; o < e.length; ++o) e[o].image = r.client.getFileUrl(e[o].image);
            t.setData({
                catTree: e
            });
        }
    });
}

function n(t) {
    t.setData({
        loadMoreType: !0
    }), r.client.request({
        url: "d=wxapi&c=mall_shop&m=shop_page",
        data: {
            page: l,
            rows: u,
            catpath: p,
            orderby: "new",
            search: d
        },
        success: function(a) {
            var e = t.data.shopList;
            h = parseInt(a.data.total), 1 == l && (e = []);
            var o = a.data.rows, n = [];
            if (o.length > 0) {
                for (var s = 0; s < o.length; ++s) o[s].shopavatar_small = r.client.getAvatarUrl(o[s].shopavatar_small), 
                s < 3 && n.push(o[s].shopname);
                e = e.concat(o);
            }
            var i = "";
            r.util.empty(h) ? i = "暂无更多数据" : e.length == h ? i = "暂无更多数据" : e.length < h && (i = "上啦加载更多"), 
            t.setData({
                shopList: e,
                newShopBanner: n,
                loadMoreType: !1,
                loadText: i
            });
        }
    });
}

function s(t) {
    t.setData({
        loadMoreType: !0
    }), r.client.request({
        url: "d=wxapi&c=mall_goods&m=goods_page",
        data: {
            orderby: "new",
            goodstype: "1"
        },
        success: function(a) {
            for (var e = a.data.rows, o = 0; o < e.length; ++o) e[o].goodscover = r.client.getFileUrl(e[o].goodscover), 
            e[o].dateline = r.util.formatDate(e[o].dateline, "yyyy-MM-dd");
            t.setData({
                productList: e,
                loadMoreType: !1,
                loadText: "没有更多了"
            });
        }
    });
}

function i(t) {
    r.getAppConfig(function(a) {
        var e = a.banner;
        t.setData({
            banner: e
        });
    });
}

var r = getApp(), c = 0, l = 1, u = 20, h = 0, p = "", d = "";

Page({
    data: {
        scrollTop: 0,
        inputShowed: !1,
        inputVal: "",
        searchShowed: !1,
        tabSelect: 0,
        shopList: [],
        isRefresh: !1,
        loadMoreType: !0
    },
    onLoad: function(a) {
        t(), i(this), o(this), n(this);
    },
    onScroll: function(t) {
        var a = t.detail.scrollTop;
        this.data.scrollTop = a;
        var e = this.data.searchShowed;
        a > 120 ? e || this.setData({
            searchShowed: !0
        }) : e && this.setData({
            searchShowed: !1
        });
    },
    onTouchStart: function(t) {
        c = t.touches[0].pageY;
    },
    onTouchEnd: function(t) {
        var a = t.changedTouches[0].pageY, e = this;
        this.data.scrollTop < 10 && a - c > 50 && (this.setData({
            isRefresh: !0
        }), wx.startPullDownRefresh({
            success: function(t) {
                l = 1, n(e), setTimeout(function() {
                    wx.stopPullDownRefresh(), e.setData({
                        isRefresh: !1
                    });
                }, 1500);
            }
        }));
    },
    showInput: function() {
        this.setData({
            inputShowed: !0
        });
    },
    hideInput: function() {
        this.setData({
            inputVal: "",
            inputShowed: !1
        }), d = "", l = 1, n(this);
    },
    clearInput: function() {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function(t) {},
    bindSearchConfirm: function(t) {
        var a = t.detail.value;
        r.util.empty(a) || (d = a, l = 1, n(this));
    },
    onTabSelect: function(t) {
        var a = t.currentTarget.dataset.index;
        0 == a ? (l = 1, p = "", n(this)) : 1 == a ? (l = 1, p = this.data.catTree[0].catpath, 
        n(this)) : 2 == a && s(this), this.setData({
            tabSelect: a
        });
    },
    onStation: function(t) {
        a();
    },
    onCallClick: function(t) {
        var a = t.currentTarget.dataset.mobie;
        wx.makePhoneCall({
            phoneNumber: a
        });
    },
    onPreviewMap: function(t) {
        var a = parseFloat(t.currentTarget.dataset.maplat), e = parseFloat(t.currentTarget.dataset.maplong);
        wx.openLocation({
            latitude: a,
            longitude: e
        });
    },
    onLoadMore: function(t) {
        this.data.tabSelect < 2 && this.data.shopList.length < h && (l++, n(this));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});