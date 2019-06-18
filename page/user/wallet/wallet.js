
function n(n) {
  t.get("member/index/userinfo", '', function (o) {
    0 == o.error && n.setData({ userFee:o});
    console.log(this.data);
  });
}

var o = getApp(), t = o.requirejs("core");

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