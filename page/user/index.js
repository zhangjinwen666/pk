
function o(o) {
    a.client.request({
        url: "d=wxapi&c=auth&m=logout",
        success: function(t) {
            a.showMessage(t.message), a.setLogout(), o.setData({
                hasLogin: !1
            });
        }
    });
}

function t(o) {
    var a = wx.createAnimation({
        duration: 2e3,
        timingFunction: "linear",
        delay: 0,
        transformOrigin: "50% 50%"
    });
    a.opacity(1), a.opacity(.9), a.opacity(.8), a.opacity(.7), a.opacity(.6), a.opacity(.5), 
    a.opacity(.4), a.opacity(.3), a.opacity(.2), a.opacity(.1), a.rotate(50).step(), 
    a.opacity(.2), a.opacity(.3), a.opacity(.4), a.opacity(.5), a.opacity(.6), a.opacity(.7), 
    a.opacity(.8), a.opacity(.9), a.opacity(1), a.rotate(-50).step(), o.setData({
        anima: a.export()
    }), setTimeout(function() {
        console.error("fffff"), t(o);
    }, 4200);
}

var a = getApp();

Page({
    data: {
        hasLogin: !1,
        userInfo: {
            nickname: "--"
        }
    },
    onLoad: function(o) {
        t(this);
    },
    bindCallCustomer: function(o) {
        wx.makePhoneCall({
            phoneNumber: "13888888888"
        });
    },
    onReady: function() {},
    onShow: function() {
        var o = this;
      
        a.getUserInfo(function(t) {
            o.setData({
                userInfo: t,
                hasLogin: a.globalData.hasLogin,
                //退出按钮
                showOutButton: 1
            });
        });
    },
    onTapLogout: function(t) {
        o(this);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});