function t(t) {
    t.setData({
        loadMoreType: !0
    }), u.client.request({
        url: "d=wxapi&c=etp_info_sell&m=info_page",
        data: {
            page: l,
            rows: d,
            userid: p
        },
        success: function(e) {
            f = parseInt(e.data.total);
            var a = e.data.rows, o = t.data.deviceList;
            if (1 == l && (o = []), a.length > 0) for (var i = 0; i < a.length; ++i) a[i].image = u.client.getFileUrl(a[i].image), 
            a[i].dateline = u.util.formatDateTime(a[i].dateline);
            o = o.concat(a);
            var n = "";
            u.util.empty(f) ? n = "暂无更多数据" : o.length == f ? n = "暂无更多数据" : o.length < f && (n = "加载更多"), 
            t.setData({
                deviceList: o,
                loadMoreType: !1,
                loadText: n
            });
        },
        fail: function(e) {
            wx.hideLoading(), t.setData({
                loadMoreType: !1,
                loadText: "加载失败"
            });
        }
    });
}

function e(t) {
    u.client.request({
        url: "d=wxapi&c=common_user&m=profile",
        data: {
            userid: p
        },
        success: function(e) {
            var a = e.data.userinfo;
            a.useravatar_middle = u.client.getAvatarUrl(a.useravatar_middle), t.setData({
                userInfo: a
            });
        }
    });
}

function a(t) {
    wx.showLoading({
        title: "加载中..."
    }), u.client.request({
        url: "d=wxapi&c=common_user&m=profile",
        data: {
            userid: p
        },
        success: function(t) {
            wx.hideLoading(), wx.setStorageSync("callPhone", ""), wx.makePhoneCall({
                phoneNumber: t.data.userinfo.usermobile
            });
        },
        fail: function(t) {
            wx.hideLoading(), u.showError("获取电话号码失败");
        }
    });
}

function o(t) {
    u.client.request({
        url: "d=wxapi&c=etp_user_follow&m=follow_query",
        data: {
            touserid: p
        },
        success: function(e) {
            var a = "object" == c(e.data);
            t.setData({
                attention: a
            });
        }
    });
}

function i(t) {
    wx.showLoading({
        title: "加载中..."
    }), u.client.request({
        url: "d=wxapi&c=etp_info_order&m=order_save",
        data: {
            idtype: "userid",
            idvalue: p
        },
        success: function(e) {
            n(t, e);
        }
    });
}

function n(t, e) {
    u.client.request({
        url: "d=wxapi&c=fee_user&m=pay_create",
        data: {
            tradeid: e.data.tradeid,
            paytype: "weixin"
        },
        success: function(a) {
            wx.hideLoading(), console.log(a), s(t, a, e.data.tradeid);
        }
    });
}

function s(t, e, a) {
    wx.requestPayment({
        timeStamp: e.data.paydata.timeStamp,
        nonceStr: e.data.paydata.nonceStr,
        package: e.data.paydata.package,
        signType: "MD5",
        paySign: e.data.paydata.paySign,
        success: function(t) {
            console.log(t), r(a);
        },
        fail: function(t) {
            console.log(t), u.client.showError("支付失败");
        }
    });
}

function r(t) {
    u.client.request({
        url: "d=wxapi&c=fee_user&m=pay_finish",
        data: {
            tradeid: t,
            appresultcode: 1
        },
        success: function(t) {
            wx.showToast({
                title: "已获得一次免费拨打电话机会"
            }), wx.setStorageSync("callPhone", "1");
        }
    });
}

var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, u = getApp(), l = 1, d = 20, f = 0, p = "";

Page({
    data: {
        deviceList: [],
        loadMoreType: !0
    },
    onLoad: function(a) {
        p = a.userid, t(this), e(this), o(this);
    },
    callPhone: function(t) {
        var e = wx.getStorageSync("callPhone");
        u.util.empty(e) ? (this.setData({
            showEnterStatus: !0,
            callPrice: u.callPrice
        }), u.util.addRecord("click", "userid", p)) : (a(), u.util.addRecord("call", "userid", p));
    },
    hiddenCallDialog: function(t) {
        this.setData({
            showEnterStatus: !1
        });
    },
    payCall: function(t) {
        this.setData({
            showEnterStatus: !1
        }), i(this);
    },
    goHome: function(t) {
        wx.switchTab({
            url: "/page/home/index"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        this.data.deviceList.length < f && (l++, t(this));
    },
    attention: function(t) {
        var e = "";
        e = this.data.attention ? "d=wxapi&c=etp_user_follow&m=follow_delete" : "d=wxapi&c=etp_user_follow&m=follow_save";
        var a = {
            touserid: p
        }, o = this;
        u.client.request({
            url: e,
            data: a,
            success: function(t) {
                o.setData({
                    attention: !o.data.attention
                });
            }
        });
    },
    onShareAppMessage: function(t) {
        if (wx.showShareMenu({
            withShareTicket: !0
        }), "button" == t.from) {
            var e = t.target.dataset.clicktype;
            return u.util.empty(e) || this.setData({
                showEnterStatus: !1
            }), u.util.addRecord("share", "userid", p), {
                title: "二手机买卖、维修、租赁",
                path: "/page/buy/user/userInfo?userid=" + p,
                success: function(t) {
                    if (!u.util.empty(e)) {
                        var o = t.shareTickets;
                        u.util.empty(o) ? u.showError("分享到群才有效") : wx.getShareInfo({
                            shareTicket: o[0],
                            success: function(t) {
                                u.util.shareResolve(t, this, function(t) {
                                    t && a();
                                });
                            }
                        });
                    }
                }
            };
        }
    }
});