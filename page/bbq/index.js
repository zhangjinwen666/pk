function a(a) {
    o.queryBlockList(function(e) {
        var s = "";
        for (var d in e) {
            var o = e[d];
            if (1 == o.istop) {
                s = o.blockid;
                break;
            }
        }
        s.length > 0 && (a.parentid = s, t(a));
    });
}

function t(a) {
    o.querySubBlockList(a.parentid, function(t) {
        for (var d in t) {
            var o = t[d];
            o.total = 1, o.page = 0, o.loadstatus = 0, o.list = [];
        }
        a.setData({
            header: t
        }), e(a), s(a);
    });
}

function e(a) {
    var t = a.data.headerIndex, e = a.data.header[t];
    e.page = 0, e.total = 1, e.list = [], e.loadstatus = 0, a.setData({
        showReload: !0
    });
}

function s(a) {
    wx.stopPullDownRefresh();
    var t = a.data.headerIndex, e = a.data.header, s = e[t];
    0 == s.loadstatus && (s.loadstatus = 1, e[t] = s, a.setData({
        header: e
    }), s.page++, d.client.request({
        url: "d=wxapi&c=forum_thread&m=thread_page",
        data: {
            blockid: s.blockid,
            page: s.page
        },
        success: function(d) {
            var o = d.data;
            s.total = o.total;
            for (var r in o.rows) s.list.push(o.rows[r]);
            e[t] = s;
            var n = {};
            s.list.length >= s.total ? s.loadstatus = 2 : s.loadstatus = 0, n.header = e, a.data.showReload && (n.showReload = !1), 
            a.setData(n);
        }
    }));
}

var d = getApp(), o = require("../home/block.js");

Page({
    data: {
        header: [],
        headerIndex: 0
    },
    onLoad: function(t) {
        a(this);
    },
    onPullDownRefresh: function() {
        a(this);
    },
    onReachBottom: function() {
        s(this);
    },
    headerClick: function(a) {
        var t = this.data.headerIndex;
        a.currentTarget.dataset.index == t ? (e(this), s(that)) : (this.setData({
            headerIndex: a.currentTarget.dataset.index
        }), 0 == this.data.header[this.data.headerIndex].list && s(this));
    },
    onShareAppMessage: function() {}
});