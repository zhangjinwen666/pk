function t(t) {
    t.total = 1, t.page = 0, t.data.list = [], t.data.loadstatus = 0, a(t);
}

function a(t) {
    0 == t.data.loadstatus && (t.setData({
        loadstatus: 1
    }), t.page++, s.client.request({
        url: "d=wxapi&c=forum_my_thread&m=thread_page",
        data: {
            page: t.page
        },
        success: function(a) {
            var s = a.data;
            t.total = s.total;
            var o = t.data.list;
            o = o.concat(s.rows);
            var e = {};
            e.list = o, o.length >= s.total ? e.loadstatus = 2 : e.loadstatus = 0, console.log(e), 
            t.setData(e), wx.stopPullDownRefresh();
        },
        fail: function(t) {
            wx.stopPullDownRefresh();
        }
    }));
}

var s = getApp();

Page({
    data: {},
    onLoad: function(a) {
        t(this);
    },
    onPullDownRefresh: function() {
        t(this);
    },
    onReachBottom: function() {
        a(this);
    },
    changeData: function(t) {
        var a = t.detail, o = a.index;
        if (s.util.empty(a.data)) (e = this.data.list).splice(o, 1), this.setData({
            list: e
        }), this.total = parseInt(this.total) - 1; else {
            var e = this.data.list;
            console.log(e), e.splice(o, 1, a.data), this.setData({
                list: e
            }), console.log(e), this.total = parseInt(this.total);
        }
    },
    onShareAppMessage: function() {}
});