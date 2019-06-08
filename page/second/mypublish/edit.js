function a(a) {
    console.log(a.sellid), s.client.request({
        url: "d=wxapi&c=etp_info_my&m=info_byid",
        data: {
            sellid: a.sellid
        },
        success: function(t) {
            var e = t.data;
            console.log(e), a.params.maplat = e.maplat, a.params.maplng = e.maplng, a.params.address = e.address, 
            a.params.proplist = e.proplist;
            var r = {
                name: e.address
            };
            a.params.madeyear = e.madeyear, a.params.catid = e.catid;
            e.catpath;
            var i = {};
            i.currenttype = e.catname, s.typeTool.queryPropList({
                catpath: e.catpath,
                success: function(t) {
                    i.list = [];
                    var r = {};
                    if (e.proplist) {
                        var n = e.proplist.split(";");
                        for (var l in n) {
                            var p = n[l].split(":");
                            r[p[0]] = p[1];
                        }
                    }
                    for (var d in t) {
                        var o = t[d];
                        if ("list" == o.proptype) o.range = o.propdata.split(","), o.propname && (o.selectedcat = r[o.propname]), 
                        i.list.push(o); else {
                            i.propname = o.propname, i.propdata = o.propdata;
                            var c = [];
                            for (var u in e.cardlist) {
                                var h = e.cardlist[u], m = {};
                                m.showurl = s.client.getFileUrl(h), m.imageurl = h, c.push(m);
                            }
                            a.setData({
                                cardlist: c
                            });
                        }
                    }
                    a.setData({
                        currentType: i
                    });
                }
            }), a.params.brandid = e.brandid, s.typeTool.queryBrand({
                catpath: e.catpath,
                success: function(t) {
                    var r = {};
                    r.brandid = e.brandid, r.brandname = e.brandname, a.setData({
                        brandlist: t,
                        selectedbrand: r
                    });
                }
            });
            var n = [];
            for (var l in e.imagelist) {
                var p = e.imagelist[l], d = {};
                d.showurl = s.client.getFileUrl(p), d.imageurl = p, n.push(d);
            }
            a.setData({
                imagelist: n
            }), a.setData({
                address: r,
                currentType: i,
                brief: e.brief,
                sellmoney: e.sellmoney,
                length: e.brief.length,
                selectedyear: e.madeyear
            });
        }
    });
}

function t(a, e, r) {
    var i = [];
    for (var n in a) {
        var l = a[n];
        {
            if ("string" != typeof l.imageurl) {
                var p = parseInt(n) + 1;
                return wx.showLoading({
                    title: r + p + "/" + a.length
                }), void s.client.request({
                    url: "d=wxapi&c=common&m=image_upload",
                    method: "FILE",
                    name: "image",
                    hideAlert: !0,
                    filePath: l.showurl,
                    success: function(s) {
                        l.imageurl = s[0].data.filepath, t(a, e, r);
                    }
                });
            }
            i.push(l.imageurl);
        }
    }
    wx.hideLoading(), "function" == typeof e && e(i.join(";"));
}

function e(a) {
    0 != a.imagelist.length ? i || (i = !0, s.client.request({
        url: "d=wxapi&c=etp_info_my&m=info_save",
        data: a,
        success: function(a) {
            s.showMessage(a.message), setTimeout(function() {
                wx.navigateBack();
            }, 1e3);
        },
        fail: function(a) {
            i = !1;
        }
    })) : s.showError("请上传设备照片");
}

function r(a) {
    s.typeTool.queryCatList(function(t) {
        a.setData({
            typelist: t
        });
    });
}

var s = getApp(), i = !1;

Page({
    data: {
        length: 0,
        imagelist: [],
        cardlist: []
    },
    onShow: function() {
        i = !1;
    },
    onLoad: function(t) {
        r(this);
        for (var e = new Date().getFullYear(), s = [], i = 0; i < 20; i++) s.push(e), e--;
        this.setData({
            yearlist: s
        }), this.params = {}, "string" == typeof t.sellid && (this.sellid = t.sellid, this.params.sellid = t.sellid, 
        a(this));
    },
    tapAvatarRemove: function(a) {
        var t = this, e = a.currentTarget.dataset.key, r = t.data[e], s = parseInt(a.currentTarget.dataset.index);
        if ("undefinded" != typeof (r = t.data[e])[s]) {
            r.splice(s, 1);
            var i = {};
            i[e] = r, t.setData(i);
        }
    },
    tapAvatarAdd: function(a) {
        var t = this, e = a.currentTarget.dataset.key, r = t.data[e];
        if (r.length >= 8) return s.showMessage("不能再上传图片了"), !1;
        wx.chooseImage({
            count: 8 - r.length,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(a) {
                var s = a.tempFilePaths;
                if (s.length > 0) for (var i = 0; i < s.length; i++) {
                    var n = {};
                    n.showurl = s[i], n.imageurl = null, r.push(n);
                }
                var l = {};
                l[e] = r, t.setData(l);
            }
        });
    },
    tapAvatarPreview: function(a) {
        for (var t = this, e = a.currentTarget.dataset.key, r = (t.data[e], parseInt(a.currentTarget.dataset.index)), s = t.data[e], i = "", n = [], l = 0; l < s.length; l++) n.push(s[l].showurl), 
        l == r && (i = s[l].showurl);
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
                r.setData({
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
        var t = a.currentTarget.dataset.index, e = this.data.currentType, r = e.list[t];
        r.selectedcat = r.range[a.detail.value], this.setData({
            currentType: e
        });
        var s = [];
        for (var i in e.list) {
            var n = e.list[i];
            if ("string" != typeof n.selectedcat) return;
            var l = n.propname + ":" + n.selectedcat;
            s.push(l);
        }
        this.params.proplist = s.join(";");
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
    submit: function(a) {
        Object.assign(this.params, a.detail.value);
        var r = this;
        t(this.data.imagelist, function(a) {
            r.params.imagelist = a;
            var s = "";
            r.data.currentType && (s = r.data.currentType.propname), t(r.data.cardlist, function(a) {
                r.params.cardlist = a, e(r.params);
            }, s);
        }, "设备照片");
    },
    textareainput: function(a) {
        this.setData({
            length: a.detail.value.length
        });
    },
    onShareAppMessage: function() {}
});