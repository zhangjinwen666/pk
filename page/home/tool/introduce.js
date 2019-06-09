Page({
    data: {},
    onLoad: function(n) {
        var o = "http://tgj168.com/static/images/mapp/bcwy/home_introduce_" + n.index + ".png", t = {};
        t.src = o, 0 == n.index || 3 == n.index && (t.buttonTitle = "金融贷款", t.url = "fincial"), 
        this.setData(t);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});