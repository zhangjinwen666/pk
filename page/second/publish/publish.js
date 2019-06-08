function a(t, e, r) {
    var i = [];
    for (var n in t) {
        var o = t[n];
        {
            if ("string" != typeof o.imageurl) {
                var l = parseInt(n) + 1;
                return wx.showLoading({
                    title: r + l + "/" + t.length
                }), void s.client.request({
                    url: "d=wxapi&c=common&m=image_upload",
                    method: "FILE",
                    name: "image",
                    hideAlert: !0,
                    filePath: o.showurl,
                    success: function(s) {
                        o.imageurl = s[0].data.filepath, a(t, e, r);
                    }
                });
            }
            i.push(o.imageurl);
        }
    }
    wx.hideLoading(), "function" == typeof e && e(i.join(";"));
}

function t(a) {
    var t = a.params;
    0 != t.imagelist.length ? a.submitAble || (a.submitAble = !0, wx.showLoading({
        title: "正在提交数据"
    }), s.client.request({
        url: "d=wxapi&c=etp_info_my&m=info_save",
        data: t,
        success: function(t) {
            s.showMessage(t.message), setTimeout(function() {
                wx.reLaunch({
                    url: "/page/user/index"
                });
            }, 1e3), a.submitAble = !1;
        },
        fail: function(t) {
            a.submitAble = !1;
        }
    })) : s.showError("请上传设备照片");
}

function e(a) {
    s.typeTool.queryCatList(function(t) {
        a.setData({
            typelist: t
        });
    });
}

var s = getApp();

Page({
    data: {
        length: 0,
        imagelist: [],
        cardlist: []
    },
    onLoad: function(a) {
        e(this);
        for (var t = new Date().getFullYear(), s = [], r = 0; r < 20; r++) s.push(t), t--;
        this.setData({
            yearlist: s
        }), this.params = {};
    },
    tapAvatarRemove: function(a) {
        var t = this, e = a.currentTarget.dataset.key, s = t.data[e], r = parseInt(a.currentTarget.dataset.index);
        if ("undefinded" != typeof (s = t.data[e])[r]) {
            s.splice(r, 1);
            var i = {};
            i[e] = s, t.setData(i);
        }
    },
    tapAvatarAdd: function(a) {
        var t = this, e = a.currentTarget.dataset.key, r = t.data[e];
        if (r.length >= 9) return s.showMessage("不能再上传图片了"), !1;
        wx.chooseImage({
            count: 9 - r.length,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var s = a.tempFilePaths;
                if (s.length > 0) for (var i = 0; i < s.length; i++) {
                    var n = {};
                    n.showurl = s[i], n.imageurl = null, r.push(n);
                }
                var o = {};
                o[e] = r, t.setData(o);
            }
        });
    },
    tapAvatarPreview: function(a) {
        for (var t = this, e = a.currentTarget.dataset.key, s = (t.data[e], parseInt(a.currentTarget.dataset.index)), r = t.data[e], i = "", n = [], o = 0; o < r.length; o++) n.push(r[o].showurl), 
        o == s && (i = r[o].showurl);
        wx.previewImage({
            current: i,
            urls: n
        });
    },
    typeChanged: function(a) {
        var t = this.data.typelist[a.detail.value];
        this.params.catid = t.catid;
        var e = {};
        e.currenttype = t.catname;
        t.catpath;
        var r = this;
        s.typeTool.queryPropList({
            catpath: t.catpath,
            success: function(a) {
                e.list = [];
                for (var t in a) {
                    var s = a[t];
                    "list" == s.proptype ? (s.range = s.propdata.split(","), e.list.push(s)) : (e.propname = s.propname, 
                    e.propdata = s.propdata);
                }
                console.log(e), r.setData({
                    currentType: e
                });
            }
        }), s.typeTool.queryBrand({
            catpath: t.catpath,
            success: function(a) {
                r.setData({
                    brandlist: a
                });
            }
        });
    },
    listChanged: function(a) {
        console.log("----listChanged----");
        var t = a.currentTarget.dataset.index, e = this.data.currentType, s = e.list[t];
        s.selectedcat = s.range[a.detail.value], this.setData({
            currentType: e
        });
        var r = [];
        for (var i in e.list) {
            var n = e.list[i];
            if ("string" == typeof n.selectedcat) {
                var o = n.propname + ":" + n.selectedcat;
                r.push(o);
            }
        }
        this.params.proplist = r.join(";"), console.log(this.params.proplist);
    },
    yearChanged: function(a) {
        var t = this.data.yearlist[a.detail.value];
        this.setData({
            selectedyear: t
        }), this.params.madeyear = t;
    },
    brandChanged: function(a) {
        var t = a.detail.value, e = this.data.brandlist[t];
        this.params.brandid = e.brandid, this.setData({
            selectedbrand: e
        });
    },
    addressClick: function(a) {
        var t = this;
        wx.chooseLocation({
            success: function(a) {
                t.params.maplat = a.latitude, t.params.maplng = a.longitude, t.params.address = a.name, 
                t.setData({
                    address: a
                });
            }
        });
    },
    submit: function(e) {
        Object.assign(this.params, e.detail.value);
        var s = this;
        a(this.data.imagelist, function(e) {
            s.params.imagelist = e;
            var r = "";
            s.data.currenttype && (r = s.data.currentType.propname), a(s.data.cardlist, function(a) {
                s.params.cardlist = a, t(s);
            }, r);
        }, "设备照片");
    },
    textareainput: function(a) {
        this.setData({
            length: a.detail.value.length
        });
    },
    onShow: function() {
        this.submitAble = !1;
    },
    onShareAppMessage: function() {}
});