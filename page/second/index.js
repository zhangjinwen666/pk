function t(t) {
    w.typeTool.queryCatList(function(e) {
        if (e.length > 0) {
            var a = {};
            a.id = "1", a.oneRow = t.data.years.oneRow, a.twoRow = [];
            for (var i = 0; i < e.length; ++i) a.twoRow.push({
                text: e[i].catname,
                id: e[i].catid,
                catpath: e[i].catpath
            });
            t.data.deviceTypeList = a;
        }
    });
}

function e(t) {
    w.typeTool.queryBrand({
        catpath: V,
        success: function(e) {
            if (e.length > 0) {
                var a = {};
                a.id = "2", a.oneRow = t.data.years.oneRow, a.twoRow = [];
                for (var i = 0; i < e.length; ++i) a.twoRow.push({
                    text: e[i].brandname,
                    id: e[i].brandid
                });
                t.data.Brands = a;
            }
        }
    });
}

function a() {
    x = "", L = "", S = "", D = "", R = "", k = "", I = "", m = 1;
}

function i(t) {
    wx.showLoading({
        title: "加载中..."
    }), t.setData({
        loadMoreType: !0
    }), w.client.request({
        url: "d=wxapi&c=etp_info_sell&m=info_page",
        data: {
            cityid: x,
            catid: L,
            year: S,
            rootcid: "1",
            brandid: D,
            search: R,
            orderby: k,
            page: m,
            rows: v
        },
        success: function(e) {
            wx.hideLoading(), wx.stopPullDownRefresh(), T = Number(e.data.total);
            var a = t.data.deviceList;
            1 == m && (a = []);
            var i = e.data.rows;
            if (i.length > 0) {
                for (var s = 0; s < i.length; ++s) {
                    i[s].dateline = w.util.formatDateTime(i[s].dateline);
                    for (var o = i[s].imagelist, r = 0; r < o.length; ++r) o[r] = w.client.getFileUrl(o[r]);
                    i[s].imagelist = o, i[s].useravatar_middle = w.client.getAvatarUrl(i[s].useravatar_middle), 
                    console.error(i[s].useravatar_middle);
                }
                a = a.concat(i);
            }
            var c = "";
            w.util.empty(T) ? c = "暂无更多数据" : a.length == T ? c = "暂无更多数据" : a.length < T && (c = "点击加载更多"), 
            n(t), t.setData({
                deviceList: a,
                loadMoreType: !1,
                loadText: c
            });
        },
        fail: function(e) {
            wx.hideLoading(), n(t), t.setData({
                loadMoreType: !1,
                loadText: "加载失败"
            });
        }
    });
}

function n(t) {
    t.data.refreshType && t.setData({
        refreshType: !1
    });
}

function s(t, e, a) {
    "1" == e ? L = t : "2" == e ? D = t : "3" == e ? S = t : "4" == e && (k = t), m = 1, 
    i(a);
}

function o(t) {
    L = "", D = "", S = "", k = "", m = 1, V = "", e(t), i(t);
}

function r(t) {
    wx.showLoading({
        title: "提交中..."
    }), w.client.request({
        url: "d=wxapi&c=etp_comment&m=comment_save",
        data: {
            idtype: "sellid",
            idvalue: b,
            message: _,
            touserid: E
        },
        success: function(e) {
            wx.hideLoading(), t.setData({
                showInput: !1
            }), c(t);
        }
    });
}

function c(t) {
    var e = t.data.deviceList, a = e[C].commentlist;
    w.util.empty(a) && (a = []);
    var i = "";
    w.getUserInfo(function(n) {
        i = n.nickname;
        var s = w.globalData.userId;
        s == E && (E = "0"), a.push({
            userid: s,
            username: i,
            message: _,
            touserid: E,
            tousername: U
        }), t.data.deviceList[C].commentlist = a, t.setData({
            deviceList: e
        }), E = "", _ = "";
    });
}

function d(t, e) {
    wx.showLoading({
        title: "加载中..."
    }), w.client.request({
        url: "d=wxapi&c=common_user&m=profile",
        data: {
            userid: e
        },
        success: function(t) {
            wx.hideLoading(), wx.setStorageSync("callPhone", ""), wx.makePhoneCall({
                phoneNumber: t.data.userinfo.usermobile
            });
        },
        fail: function(t) {
            wx.hideLoading(), w.showError("获取电话号码失败");
        }
    });
}

function l(t) {
    wx.showLoading({
        title: "加载中..."
    }), w.client.request({
        url: "d=wxapi&c=etp_info_order&m=order_save",
        data: {
            idtype: "sellid",
            idvalue: P
        },
        success: function(e) {
            u(t, e);
        }
    });
}

function u(t, e) {
    w.client.request({
        url: "d=wxapi&c=fee_user&m=pay_create",
        data: {
            tradeid: e.data.tradeid,
            paytype: "weixin"
        },
        success: function(a) {
            wx.hideLoading(), h(t, a, e.data.tradeid);
        }
    });
}

function h(t, e, a) {
    wx.requestPayment({
        timeStamp: e.data.paydata.timeStamp,
        nonceStr: e.data.paydata.nonceStr,
        package: e.data.paydata.package,
        signType: "MD5",
        paySign: e.data.paydata.paySign,
        success: function(t) {
            f(a);
        },
        fail: function(t) {
            w.client.showError("支付失败");
        }
    });
}

function f(t) {
    w.client.request({
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

function p(t) {
    w.getAppConfig(function(e) {
        var a = e.banner;
        t.setData({
            bannerList: a
        });
    });
}

var g = require("../../utils/pickerCity"), w = getApp(), y = -1, m = 1, v = 20, T = 0, x = "", L = "", S = "", D = "", R = "", k = "", I = "", _ = "", b = "", C = -1, P = "", q = "", M = 0, V = "", E = "", U = "";

Page({
    data: {
        deviceList: [],
        showTop: !1,
        searchTypeList: [ {
            text: "全国"
        }, {
            text: "分类",
            id: "1"
        }, {
            text: "品牌",
            id: "2"
        }, {
            text: "年限",
            id: "3"
        }, {
            text: "排序",
            id: "4"
        } ],
        filterTypeList: {},
        filterSelectList: [],
        years: {
            id: "3",
            oneRow: [ {
                text: "不限",
                id: ""
            } ],
            twoRow: [ {
                text: "3年以内",
                id: "0,3"
            }, {
                text: "3-5年",
                id: "3,5"
            }, {
                text: "5-8年",
                id: "5,8"
            }, {
                text: "8-10年",
                id: "8,10"
            }, {
                text: "10年以上",
                id: "10,"
            } ]
        },
        sequenceList: {
            id: "4",
            oneRow: [ {
                text: "时间最新发布",
                id: "new"
            }, {
                text: "价格从低到高",
                id: "priceasc"
            }, {
                text: "价格从高到低",
                id: "pricedesc"
            } ]
        },
        showTypeSelectView: !1,
        showInput: !1,
        regionlist: g.getRegionList(),
        regionvalue: g.regionValue,
        fromcityid: 0,
        fromcity: "全国",
        loadMoreType: !0,
        topy: 0,
        bannerList: []
    },
    onLoad: function(n) {
        _ = "", b = "", E = "", a(), t(this), e(this), i(this), p(this);
    },
    onScorll: function(t) {
        var e = t.detail.scrollTop, a = this.data.showTop;
        e > 170 ? a || this.setData({
            showTop: !0
        }) : (this.data.topy = e, a && this.setData({
            showTop: !1
        }));
    },
    showTypeSelect: function(t) {
        var e = t.currentTarget.dataset.index;
        if (y == e && this.data.showTypeSelectView) this.setData({
            showTypeSelectView: !1
        }); else {
            y = e;
            var a = {}, i = this.data.searchTypeList[e].id;
            "3" == i && (a = this.data.years), "4" == i && (a = this.data.sequenceList), "1" == i && (a = this.data.deviceTypeList, 
            console.log(a)), "2" == i && (a = this.data.Brands), this.setData({
                showTypeSelectView: !0,
                filterTypeList: a
            });
        }
    },
    selectType: function(t) {
        var a = t.currentTarget.dataset.id, i = t.currentTarget.dataset.text, n = t.currentTarget.dataset.parent;
        if (s(a, n, this), "4" != n) {
            if ("1" == n) {
                var o = t.currentTarget.dataset.catpath;
                V = null != o ? o : "", e(this);
            }
            for (var r = this.data.filterSelectList, c = 0; c < r.length; ++c) r[c].parentId == n && r.splice(c, 1);
            "" == a || r.push({
                text: i,
                parentId: n
            }), this.setData({
                showTypeSelectView: !1,
                filterSelectList: r
            });
        } else this.setData({
            showTypeSelectView: !1
        });
    },
    deleteFilter: function(t) {
        var a = t.currentTarget.dataset.index, i = t.currentTarget.dataset.parent, n = this.data.filterSelectList;
        s("", i, this), "1" == i && (V = "", e(this)), n.splice(a, 1), this.setData({
            filterSelectList: n
        });
    },
    maskClick: function(t) {
        this.setData({
            showTypeSelectView: !1
        });
    },
    hiddenPop: function(t) {
        this.setData({
            showTypeSelectView: !1
        });
    },
    resetType: function(t) {
        o(this), this.setData({
            filterSelectList: []
        });
    },
    commentClick: function(t) {
        E = t.currentTarget.dataset.touserid, w.util.empty(E) && (E = "0"), b = t.currentTarget.dataset.sellid, 
        C = t.currentTarget.dataset.index, U = t.currentTarget.dataset.username, this.setData({
            showInput: !0,
            toUserName: U
        });
    },
    itemClick: function(t) {
        _ = "", this.setData({
            showInput: !1
        });
    },
    natoInfo: function(t) {
        if (w.checkLogin()) {
            var e = t.currentTarget.dataset.sellid;
            wx.navigateTo({
                url: "device/deviceInfo?sellid=" + e
            });
        }
    },
    lookUser: function(t) {
        if (w.checkLogin()) {
            var e = t.currentTarget.dataset.userid;
            wx.navigateTo({
                url: "user/userInfo?userid=" + e
            });
        }
    },
    changeRegion: function(t) {
        var e = t.detail.value, a = (t.currentTarget.dataset.name, g.getRegionSelect(e)), n = a.value, s = a.text;
        this.setData({
            fromcityid: n,
            fromcity: s
        }), x = n, m = 1, i(this);
    },
    changeRegionColumn: function(t) {
        var e = t.detail.column, a = t.detail.value, i = g.pickerRegionChange(e, a), n = g.regionValue;
        this.setData({
            regionlist: i,
            regionvalue: n
        });
    },
    searchClick: function() {
        if (w.util.empty(I)) return w.showError("搜索不能为空");
        R = I, m = 1, i(this);
    },
    inputListener: function(t) {
        I = t.detail.value;
    },
    deleteSearch: function(t) {
        w.util.empty(I) || (I == R && (R = "", m = 1, i(this)), this.setData({
            searchValue: ""
        }), I = "");
    },
    lookMap: function(t) {
        var e = parseFloat(t.currentTarget.dataset.la), a = parseFloat(t.currentTarget.dataset.lo);
        wx.openLocation({
            latitude: e,
            longitude: a
        });
    },
    sendCommentClick: function(t) {
        if (w.util.empty(_)) return w.showError("评论不能为空");
        r(this);
    },
    commentInput: function(t) {
        _ = t.detail.value;
    },
    callPhone: function(t) {
        if (w.checkLogin()) {
            var e = wx.getStorageSync("callPhone");
            if (w.util.empty(e)) P = t.currentTarget.dataset.sellid, q = t.currentTarget.dataset.userid, 
            w.util.addRecord("click", "sellid", P), this.setData({
                showEnterStatus: !0,
                callPrice: w.callPrice
            }); else {
                var a = t.currentTarget.dataset.userid, i = t.currentTarget.dataset.sellid;
                d(0, a), w.util.addRecord("call", "sellid", i);
            }
        }
    },
    hiddenCallDialog: function(t) {
        this.setData({
            showEnterStatus: !1
        });
    },
    lookOverImag: function(t) {
        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.imgindex, i = this.data.deviceList[e].imagelist;
        wx.previewImage({
            current: i[a],
            urls: i
        });
    },
    opentPublish: function(t) {
        wx.navigateTo({
            url: "/page/second/publish/publish"
        });
    },
    loadMore: function(t) {
        this.data.deviceList.length < T && (m++, i(this));
    },
    onMove: function(t) {
        if (0 == this.data.topy) {
            var e = t.touches[0].pageY;
            if (e > M) {
                var a = e - M;
                this.data.totaly = a;
            } else (a = M - e) > 10 && this.setData({
                refreshType: !1
            });
        }
    },
    onMoveStart: function(t) {
        M = t.touches[0].pageY;
    },
    onTochend: function(t) {
        this.data.totaly > 50 && (this.setData({
            refreshType: !0
        }), m = 1, this.data.totaly = 0, i(this));
    },
    payCall: function(t) {
        this.setData({
            showEnterStatus: !1
        }), l(this);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        m = 1, i(this);
    },
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        if (wx.showShareMenu({
            withShareTicket: !0
        }), "button" == t.from) {
            this.setData({
                showEnterStatus: !1
            });
            var e = t.target.dataset.clicktype, a = "";
            return a = w.util.empty(e) ? t.target.dataset.sellid : P, w.util.addRecord("share", "sellid", a), 
            {
                title: "二手机买卖、维修、租赁",
                path: "/page/second/device/deviceInfo?sellid=" + a,
                success: function(t) {
                    if (!w.util.empty(e)) {
                        var a = t.shareTickets;
                        w.util.empty(a) ? w.showError("分享到群才有效") : wx.getShareInfo({
                            shareTicket: a[0],
                            success: function(t) {
                                w.util.shareResolve(t, this, function(t) {
                                    t && d(0, q);
                                });
                            }
                        });
                    }
                }
            };
        }
    }
});