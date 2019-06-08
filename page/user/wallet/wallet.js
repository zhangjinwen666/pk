function n(n) {
    o.client.request({
        url: "d=wxapi&c=fee_user&m=userinfo",
        data: {},
        success: function(o) {
            n.setData({
                userFee: o.data
            });
        }
    });
}

var o = getApp();

Page({
    data: {
        userInfo: {
            nickname: "--"
        },
        userFee: {
            moneytotal: "--"
        }
    },
    onLoad: function(n) {},
    withdrawals: function(n) {
        console.error("sssssss");
        wx.navigateTo({
            url: "withdrawals"
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        o.getUserInfo(function(n) {
            e.setData({
                userInfo: n,
                hasLogin: o.globalData.hasLogin
            });
        }), n(this);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});