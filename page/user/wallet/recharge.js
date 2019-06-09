function e(e, t) {
    i.client.request({
        url: "d=wxapi&c=fee_user&m=pay_create",
        data: {
            tradeid: t.data.tradeid,
            paytype: "weixin"
        },
        success: function(n) {
            wx.hideLoading(), console.log(n), a(e, n, t.data.tradeid);
        }
    });
}

function a(e, a, n) {
    wx.requestPayment({
        timeStamp: a.data.paydata.timeStamp,
        nonceStr: a.data.paydata.nonceStr,
        package: a.data.paydata.package,
        signType: "MD5",
        paySign: a.data.paydata.paySign,
        success: function(a) {
            wx.showToast({
                title: "支付成功",
                icon: "success",
                duration: 2e3
            }), console.log(a), t(n), o(e);
        },
        fail: function(e) {
            console.log(e), wx.showToast({
                title: "支付失败",
                icon: "fail",
                duration: 2e3
            });
        }
    });
}

function t(e) {
    i.client.request({
        url: "d=wxapi&c=fee_user&m=pay_finish",
        data: {
            tradeid: e,
            appresultcode: 1
        },
        success: function(e) {
            wx.showToast({
                title: "充值成功"
            }), setTimeout(function() {
                wx.navigateBack({});
            }, 1e3);
        }
    });
}

function n(e) {
    i.client.request({
        url: "d=wxapi&c=fee_money&m=recharge_list",
        success: function(a) {
            wx.hideLoading();
            var t = a.data;
            console.log(a), e.setData({
                moneys: t
            });
        }
    }), o(e);
}

function o(e) {
    i.client.request({
        url: "d=wxapi&c=fee_user&m=userinfo",
        success: function(a) {
            wx.hideLoading();
            var t = a.data;
            console.log(a), e.setData({
                money: t.moneycurrent
            });
        }
    });
}

var i = getApp();

Page({
    data: {
        currentIndex: 0,
        money: 0
    },
    onLoad: function() {},
    onShow: function() {
        i.checkLogin() && n(this);
    },
    chooseMOney: function(e) {
        var a = e.currentTarget.dataset.index;
        console.log(e), this.setData({
            currentIndex: a
        });
    },
    recharge: function() {
        var a = this;
        wx.showToast({
            title: "提交订单...",
            icon: "loading",
            duration: 1e5
        }), i.client.request({
            url: "d=wxapi&c=fee_money&m=user_recharge",
            data: {
                rechargeid: this.data.moneys[this.data.currentIndex].rechargeid
            },
            success: function(t) {
                wx.hideLoading(), e(a, t), console.log(t);
            }
        });
    },
    onShareAppMessage: function() {
        return i.globalData.shareInfo;
    }
});