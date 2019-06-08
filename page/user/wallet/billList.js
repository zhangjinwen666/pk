function n(n) {
    o.client.request({
        url: "d=wxapi&c=fee_money&m=money_page",
        data: {},
        success: function(t) {
            var i = t.data.rows;
            e = Number(t.data.total);
            var c = n.data.billList;
            1 == a && (c = []);
            for (var u = 0; u < i.length; ++u) i[u].dateline = o.util.formatDate(i[u].dateline, "yyyy-MM-dd hh:mm:ss");
            c = c.concat(i), n.setData({
                billList: c
            });
        }
    });
}

function t() {
    a = 1, e = 0;
}

var o = getApp(), a = 1, e = 0;

Page({
    data: {
        billList: []
    },
    onLoad: function(o) {
        t(), n(this);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});