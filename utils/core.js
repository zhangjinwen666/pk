var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
    return void 0 === e ? "undefined" : t(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
}, n = require("jquery");

module.exports = {
  empty: function (e) {
    return void 0 === e || "string" == typeof e && "" == e.trim() || "number" == typeof e && 0 == e || "boolean" == typeof e && 0 == e || null == e;
  },
  isMobile: function (e) {
    return /^0?1[0-9][0-9]\d{8}$/.test(e);
  },
    toQueryPair: function(t, e) {
        return void 0 === e ? t : t + "=" + encodeURIComponent(null === e ? "" : String(e));
    },
    getUrl: function(t, o, i) {
        t = t.replace(/\//gi, ".");
        var a = getApp().getConfig().api + "&r=" + t;
        return o && ("object" == (void 0 === o ? "undefined" : e(o)) ? a += "&" + n.param(o) : "string" == typeof o && (a += "&" + o)), 
        a;
    },
    json: function(t, e, o, i, a, r) {
        var s = getApp(), c = s.getCache("userinfo_openid"), u = s.getCache("usermid"), f = s.getCache("authkey");
        (e = e || {}).comefrom = "wxapp", e.openid = "sns_wa_" + c, u && (e.mid = u.mid, 
        e.merchid = e.merchid || u.merchid);
        var d = this;
        i && d.loading(), e && (e.authkey = f || "");
        var l = {
            url: (a ? this.getUrl(t) : this.getUrl(t, e)) + "&timestamp=" + +new Date(),
            method: a ? "POST" : "GET",
            header: {
                "Content-type": a ? "application/x-www-form-urlencoded" : "application/json",
                Cookie: "PHPSESSID=" + c
            }
        };
     
        r || delete l.header.Cookie, a && (l.data = n.param(e)), o && (l.success = function(t) {
            if (i && d.hideLoading(), "request:ok" == t.errMsg && "function" == typeof o) {
                if (s.setCache("authkey", t.data.authkey || ""), void 0 !== t.data.sysset) {
                    if (1 == t.data.sysset.isclose) return void wx.redirectTo({
                        url: "/pages/message/auth/index?close=1&text=" + t.data.sysset.closetext
                    });
                    s.setCache("sysset", t.data.sysset);
                }
                o(t.data);
            }
        }), l.fail = function(t) {
            i && d.hideLoading(), d.alert(t.errMsg);
        }, wx.request(l);
    },
    post: function(t, e, n, o, i) {
        this.json(t, e, n, o, !0, i);
    },
    get: function(t, e, n, o, i) {
     
        this.json(t, e, n, o, !1, i);
    },
    getDistanceByLnglat: function(t, e, n, o) {
        function i(t) {
            return t * Math.PI / 180;
        }
        var a = i(e), r = i(o), s = a - r, c = i(t) - i(n), u = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(a) * Math.cos(r) * Math.pow(Math.sin(c / 2), 2)));
        return u *= 6378137, u = Math.round(1e4 * u) / 1e7;
    },
    alert: function(t, n) {
        "object" === (void 0 === t ? "undefined" : e(t)) && (t = JSON.stringify(t)), wx.showModal({
            title: "提示",
            content: t,
            showCancel: !1,
            success: function(t) {
                t.confirm && "function" == typeof confirm && n();
            }
        });
    },
    confirm: function(t, n, o) {
        "object" === (void 0 === t ? "undefined" : e(t)) && (t = JSON.stringify(t)), wx.showModal({
            title: "提示",
            content: t,
            showCancel: !0,
            success: function(t) {
                t.confirm ? "function" == typeof n && n() : "function" == typeof o && o();
            }
        });
    },
    loading: function(t) {
        void 0 !== t && "" != t || (t = "加载中"), wx.showToast({
            title: t,
            icon: "loading",
            duration: 5e6
        });
    },
    hideLoading: function() {
        wx.hideToast();
    },
    toast: function(t, e) {
        e || (e = "success"), wx.showToast({
            title: t,
            icon: e,
            duration: 1e3
        });
    },
    success: function(t) {
        wx.showToast({
            title: t,
            icon: "success",
            duration: 1e3
        });
    },
    upload: function(t) {
        var e = this;
        wx.chooseImage({
            success: function(n) {
                e.loading("正在上传...");
                var o = e.getUrl("util/uploader/upload", {
                    file: "file"
                }), i = n.tempFilePaths;
                wx.uploadFile({
                    url: o,
                    filePath: i[0],
                    name: "file",
                    success: function(n) {
                        e.hideLoading();
                        var o = JSON.parse(n.data);
                        if (0 != o.error) e.alert("上传失败"); else if ("function" == typeof t) {
                            var i = o.files[0];
                            t(i);
                        }
                    }
                });
            }
        });
    },
    pdata: function(t) {
        return t.currentTarget.dataset;
    },
    data: function(t) {
        return t.target.dataset;
    },
    phone: function(t) {
        var e = this.pdata(t).phone;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    pay: function(t, n, o) {
        return "object" == (void 0 === t ? "undefined" : e(t)) && "function" == typeof n && (t.success = n, 
        "function" == typeof o && (t.fail = o), void wx.requestPayment(t));
    },
    cartcount: function(t) {
        this.get("member/cart/count", {}, function(e) {
            t.setData({
                cartcount: e.cartcount
            });
        });
    },
    onShareAppMessage: function(t, e) {
        var n = getApp(), o = n.getCache("sysset"), i = o.share || {}, a = n.getCache("userinfo_id"), r = o.shopname || "", s = o.description || "";
        return i.title && (r = i.title), e && (r = e), i.desc && (s = i.desc), t = t || "/pages/index/index", 
        t = -1 != t.indexOf("?") ? t + "&" : t + "?", {
            title: r,
            desc: s,
            path: t + "mid=" + a
        };
    },
    str2Obj: function(t) {
        if ("string" != typeof t) return t;
        if (t.indexOf("&") < 0 && t.indexOf("=") < 0) return {};
        var e = t.split("&"), o = {};
        return n.each(e, function(t, e) {
            if (e.indexOf("=") > -1) {
                var n = e.split("=");
                o[n[0]] = n[1];
            }
        }), o;
    },
  formatDate: function t(e, t) {
    var n = null, r = {
      "M+": (n = e > 0 ? new Date(1e3 * e) : new Date()).getMonth() + 1,
      "d+": n.getDate(),
      "h+": n.getHours(),
      "m+": n.getMinutes(),
      "s+": n.getSeconds(),
      "q+": Math.floor((n.getMonth() + 3) / 3),
      "S+": n.getMilliseconds()
    };
    /(y+)/i.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var o in r) new RegExp("(" + o + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[o] : ("00" + r[o]).substr(("" + r[o]).length)));
    return t;
  },
};