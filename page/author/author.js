var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, n = getApp();

Page({
    data: {
        appName: n.globalData.appName
    },
    onLoad: function(o) {
        this.setData({
            appName: n.globalData.appName
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onGotUserInfo: function(n) {
        var t = n.detail.userInfo;
        "object" == (void 0 === t ? "undefined" : o(t)) && wx.navigateBack();
    },
    onShareAppMessage: function() {}
});