function n(n) {
    e.client.request({
        url: "d=wxapi&c=user&m=save",
        data: {
            realname: a,
            bankcnname: t,
            bankcardno: r
        },
        success: function(n) {
            wx.showToast({
                title: "绑定银行卡成功"
            }), setTimeout(function() {
                wx.redirectTo({
                    url: "withdrawals"
                });
            }, 1e3);
        }
    });
}

function o(n) {
    return a = n.detail.value.realname, r = n.detail.value.bankcardno, t = n.detail.value.bankcnname, 
    e.util.empty(a) ? (e.showError("请输入姓名"), !1) : e.util.empty(r) ? (e.showError("请输入卡号"), 
    !1) : !e.util.empty(t) || (e.showError("请输入银行名称"), !1);
}

var e = getApp(), a = "", t = "", r = "";

Page({
    data: {},
    submit: function(e) {
        console.error("fffffffffffasdfadsfadsf"), o(e) && n();
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return e.globalData.shareInfo;
    }
});