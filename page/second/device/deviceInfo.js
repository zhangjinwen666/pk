function e(e) {
    wx.showLoading({
        title: "加载中..."
    }), f.client.request({
        url: "d=wxapi&c=etp_info_sell&m=info_byid",
        data: {
            sellid: h
        },
        success: function(i) {
            wx.hideLoading();
            for (var n = i.data.imagelist, o = 0; o < n.length; ++o) i.data.imagelist[o] = f.client.getFileUrl(n[o]);
            i.data.dateline = f.util.formatDateTime(i.data.dateline), i.data.userfavorite = parseInt(i.data.userfavorite), 
            e.setData({
                deviceInfo: i.data
            }), t(e, i.data.proplist), a(i.data.userid, e);
        }
    });
}

function t(e, t) {
    if (!f.util.empty(t) && (t = t.split(";")).length > 0) {
        for (var a = [], i = 0; i < t.length; ++i) {
            var n = t[i].split(":");
            a.push({
                left: n[0],
                right: n[1]
            });
        }
        e.setData({
            typeList: a
        });
    }
}

function a(e, t) {
    f.client.request({
        url: "d=wxapi&c=etp_info_sell&m=info_page",
        data: {
            rows: 100,
            userid: e
        },
        success: function(e) {
            var a = e.data.rows;
            if (a.length > 0) {
                for (var i = 0; i < a.length; ++i) a[i].image = f.client.getFileUrl(a[i].image), 
                a[i].dateline = f.util.formatDateTime(a[i].dateline), h == a[i].sellid && (a.splice(i, 1), 
                i--);
                t.setData({
                    deviceList: a
                });
            }
        }
    });
}

function i(t) {
    f.client.request({
        url: "d=wxapi&c=etp_info_favorite&m=info_save",
        data: {
            idtype: "sellid",
            idvalue: h
        },
        success: function(a) {
            wx.showToast({
                title: "收藏成功"
            }), e(t);
        }
    });
}

function n(e) {
    wx.showLoading({
        title: "加载中..."
    }), f.client.request({
        url: "d=wxapi&c=common_user&m=profile",
        data: {
            userid: e.data.deviceInfo.userid
        },
        success: function(e) {
            wx.hideLoading(), wx.setStorageSync("callPhone", ""), wx.makePhoneCall({
                phoneNumber: e.data.userinfo.usermobile
            });
        },
        fail: function(e) {
            wx.hideLoading(), f.showError("获取电话号码失败");
        }
    });
}

function o(t) {
    f.client.request({
        url: "d=wxapi&c=etp_info_favorite&m=info_delete",
        data: {
            favoriteid: t.data.deviceInfo.userfavorite
        },
        success: function(a) {
            wx.showToast({
                title: "已取消"
            }), e(t);
        }
    });
}

function s(e) {
    wx.showLoading({
        title: "加载中..."
    }), f.client.request({
        url: "d=wxapi&c=etp_info_order&m=order_save",
        data: {
            idtype: "sellid",
            idvalue: h
        },
        success: function(t) {
            c(e, t);
        }
    });
}

function c(e, t) {
    f.client.request({
        url: "d=wxapi&c=fee_user&m=pay_create",
        data: {
            tradeid: t.data.tradeid,
            paytype: "weixin"
        },
        success: function(a) {
            wx.hideLoading(), console.log(a), l(e, a, t.data.tradeid);
        }
    });
}

function l(e, t, a) {
    wx.requestPayment({
        timeStamp: t.data.paydata.timeStamp,
        nonceStr: t.data.paydata.nonceStr,
        package: t.data.paydata.package,
        signType: "MD5",
        paySign: t.data.paydata.paySign,
        success: function(e) {
            console.log(e), d(a);
        },
        fail: function(e) {
            console.log(e), f.client.showError("支付失败");
        }
    });
}

function d(e) {
    f.client.request({
        url: "d=wxapi&c=fee_user&m=pay_finish",
        data: {
            tradeid: e,
            appresultcode: 1
        },
        success: function(e) {
            wx.showToast({
                title: "已获得一次免费拨打电话机会"
            }), wx.setStorageSync("callPhone", "1");
        }
    });
}

function r() {
    wx.showLoading({
        title: "二维码生成中"
    }), f.client.request({
        url: "d=wxapi&c=common&m=get_qrcode",
        data: {
            page: "page/buy/device/deviceInfo",
            scene: h
        },
        success: function(e) {
            var t = f.client.getFileUrl(e.data.url);
            console.error(t), u(t);
        }
    });
}

function u(e) {
    wx.hideLoading(), wx.previewImage({
        urls: [ e ]
    });
}

var f = getApp(), p = require("../../../utils/pointData.js"), h = "";

Page({
    data: {
        deviceInfo: {},
        deviceList: [],
        pointList: p.pointList
    },
    onLoad: function(t) {
        h = t.sellid, f.util.empty(h) && (h = decodeURIComponent(t.scene)), e(this);
    },
    lookMap: function(e) {
        var t = parseFloat(this.data.deviceInfo.maplat), a = parseFloat(this.data.deviceInfo.maplng);
        wx.openLocation({
            latitude: t,
            longitude: a
        });
    },
    collectionClick: function(e) {
        var t = this.data.deviceInfo.userfavorite;
        0 == t ? i(this) : t > 0 && o(this);
    },
    callPhone: function(e) {
        var t = wx.getStorageSync("callPhone");
        f.util.empty(t) ? (this.setData({
            showEnterStatus: !0,
            callPrice: f.callPrice
        }), f.util.addRecord("click", "sellid", h)) : (n(this), f.util.addRecord("call", "sellid", h));
    },
    hiddenCallDialog: function(e) {
        this.setData({
            showEnterStatus: !1
        });
    },
    lookOverImag: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data.deviceInfo.imagelist;
        wx.previewImage({
            current: a[t],
            urls: a
        });
    },
    payCall: function(e) {
        this.setData({
            showEnterStatus: !1
        }), s(this);
    },
    goHome: function(e) {
        wx.switchTab({
            url: "/page/home/index"
        });
    },
    generateCode: function() {
        f.util.addRecord("qrcode", "sellid", h), r();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(e) {
        var t = this;
        if (wx.showShareMenu({
            withShareTicket: !0
        }), "button" == e.from) {
            var a = e.target.dataset.clicktype;
            return f.util.empty(a) || this.setData({
                showEnterStatus: !1
            }), f.util.addRecord("share", "sellid", h), {
                title: "二手机买卖、维修、租赁",
                path: "/page/second/device/deviceInfo?sellid=" + h,
                success: function(e) {
                    if (!f.util.empty(a)) {
                        var i = e.shareTickets;
                        f.util.empty(i) ? f.showError("分享到群才有效") : wx.getShareInfo({
                            shareTicket: i[0],
                            success: function(e) {
                                f.util.shareResolve(e, this, function(e) {
                                    e && n(t);
                                });
                            }
                        });
                    }
                }
            };
        }
    }
});