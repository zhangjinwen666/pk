function t(t) {
    var e = t.data.headers;
    for (var o in e) {
        var s = e[o];
        s.loadstatus = 0, s.page = 0, s.list = [], s.total = 1;
    }
    a(t);
}

function e(t) {
    var e = t.data.headers[t.data.selectedIndex];
    e.loadstatus = 0, e.page = 0, e.list = [], e.total = 1, a(t);
}

function a(t) {
    var e = t.data.selectedIndex, a = t.data.headers, o = a[e];
    if (0 == o.loadstatus) {
        o.page++;
        var l = {};
        l.blockid = t.blockid, l.page = o.page, l.orderby = o.orderby, console.log(l), s.client.request({
            url: "d=wxapi&c=forum_thread&m=thread_page",
            data: l,
            success: function(s) {
                var l = s.data;
                o.total = l.total;
                var d = l.rows;
                o.list = o.list.concat(d), o.list.length >= o.total ? o.loadstatus = 2 : o.loadstatus = 0, 
                a[e] = o, t.setData({
                    headers: a
                }), console.log(a);
            }
        });
    }
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, s = getApp();

Page({
    data: {
        headers: [ {
            title: "最新",
            orderby: ""
        }, {
            title: "最近",
            orderby: "heatnum"
        }, {
            title: "推荐",
            orderby: "postcnt"
        } ],
        selectedIndex: 0
    },
    onLoad: function(e) {
        this.blockid = e.blockid, wx.setNavigationBarTitle({
            title: e.blockname
        }), t(this);
    },
    headerClick: function(t) {
        var s = this.data.selectedIndex, l = t.currentTarget.dataset.index;
        if (console.log(s + "----" + l), this.setData({
            selectedIndex: l
        }), s == l) e(this); else {
            var d = this.data.headers[l];
            "object" == o(d.list) && 0 != d.list.length || a(this);
        }
    },
    changeData: function(t) {
        var e = t.detail.data, a = t.detail.index, o = this.data.headers;
        o[this.data.selectedIndex].list.splice(a, 1, e), t.detail.reload && this.setData({
            headers: o
        }), console.log("外面回调"), console.log(o);
    },
    onShareAppMessage: function() {}
});