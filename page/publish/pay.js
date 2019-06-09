function a(a) {
    i.client.request({
        url: "d=wxapi&c=fee_user&m=userinfo",
        success: function(t) {
            wx.hideLoading();
            var e = t.data;
            console.log(t), a.setData({
                money: e.moneycurrent
            });
        }
    });
}

function t(a) {
    wx.showLoading({
        title: "正在发起支付"
    }), i.client.request({
        url: "d=wxapi&c=fee_user&m=pay_create",
        data: a,
        success: function(t) {
            "money" == a.paytype ? n(a.tradeid) : "weixin" == a.paytype && e(t.data, a.tradeid);
        }
    });
}

function e(a, t) {
    wx.requestPayment({
        timeStamp: a.paydata.timeStamp,
        nonceStr: a.paydata.nonceStr,
        package: a.paydata.package,
        signType: "MD5",
        paySign: a.paydata.paySign,
        success: function(a) {
            console.log(a), n(t);
        },
        fail: function(a) {
            console.log(a), i.client.showError("支付失败");
        }
    });
}

function n(a) {
    i.client.request({
        url: "d=wxapi&c=fee_user&m=pay_finish",
        data: {
            tradeid: a,
            appresultcode: 1
        },
        success: function(a) {
            i.showMessage(a.message);
            var t = getCurrentPages(), e = t[t.length - 2];
            "function" == typeof e.payCallBack && e.payCallBack(!0), setTimeout(function() {
                wx.navigateBack({});
            }, 1500);
        },
        fail: function(a) {
            i.showError(a.message);
        }
    });
}

var i = getApp();

Page({
    data: {
        paytype: "money"
    },
    onLoad: function(t) {
        a(this);
        t.tradeamount, t.payamount, t.tradedate, t.tradetitle;
        this.setData(t);
    },
    startPay: function(a) {
        var e = this.data.paytype, n = {};
        n.tradeid = this.data.tradeid, n.paytype = e, t(n);
    },
    payTypeChoose: function(a) {
        var t = a.currentTarget.dataset.paytype;
        this.setData({
            paytype: t
        });
    }
});