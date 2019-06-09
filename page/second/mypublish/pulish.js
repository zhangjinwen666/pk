function t(t) {
    if (!(t.total <= t.data.list.length)) {
        var e = {};
        e.page = ++t.page, a.client.request({
            url: "d=wxapi&c=etp_info_my&m=info_page",
            data: e,
            success: function(e) {
                wx.hideLoading(), t.total = e.data.total, 0 == t.total ? t.setData({
                    empty: !0
                }) : t.setData({
                    empty: !1
                });
                var i = e.data.rows, s = t.data.list;
                for (var o in i) {
                    var n = i[o];
                    n.image = a.client.getFileUrl(n.image), n.time = a.util.formatDateTime(n.dateline), 
                    s.push(n), console.log(n.status);
                }
                var l = {};
                l.list = s, t.total <= s.length && (l.loadstatus = 2), t.setData(l);
            }
        });
    }
}

var a = getApp();

Page({
    data: {
        loadstatus: 0
    },
    onLoad: function(t) {},
    onShow: function() {
        this.page = 0, this.total = 1, this.setData({
            list: []
        }), wx.showLoading({
            title: "正在刷新"
        }), t(this);
    },
    onReachBottom: function() {
        this.setData({
            loadstatus: 1
        }), t(this);
    },
    onPullDownRefresh: function() {
        this.page = 0, this.total = 1, this.setData({
            list: []
        }), wx.showLoading({
            title: "正在刷新"
        }), t(this);
    },
    statusChange: function(t) {
        var e = t.currentTarget.dataset, i = {
            sellid: e.sellid
        }, s = this, o = s.data.list, n = e.index, l = o[n];
        "edit" == e.btntype ? wx.navigateTo({
            url: "edit?sellid=" + l.sellid
        }) : "delete" == e.btntype ? wx.showModal({
            title: "提示",
            content: "删除信息将无法撤销",
            confirmText: "确定",
            confirmColor: "#da432c",
            success: function(t) {
                t.confirm && a.client.request({
                    url: "d=wxapi&c=etp_info_my&m=info_delete",
                    data: i,
                    success: function(t) {
                        o.splice(n, 1), s.total -= 1;
                        var a = {
                            list: o
                        };
                        0 == s.total && (a.empty = !0), s.setData(a);
                    }
                });
            }
        }) : "change" == e.btntype && wx.showModal({
            title: "提示",
            content: "将这条信息改成成交状态，将不能重新改回在售状态",
            confirmText: "确定",
            confirmColor: "#da432c",
            success: function(t) {
                t.confirm && (i.status = 2, a.client.request({
                    url: "d=wxapi&c=etp_info_my&m=info_edit",
                    data: i,
                    success: function(t) {
                        l.status = 2, s.setData({
                            list: o
                        });
                    }
                }));
            }
        });
    },
    onShareAppMessage: function() {}
});