function e(e) {
    r.client.request({
        url: "d=wxapi&c=user&m=profile",
        data: {},
        success: function(n) {
            var t = n.data.userinfo;
            r.util.empty(t.bankname) && (t.bankname = ""), r.util.empty(t.bankcardno) && (t.bankcardno = ""), 
            e.setData({
                userInfo: t
            });
        }
    });
}

function n(e, n) {
    n.actiontype = "tocard", wx.showLoading({
        title: "加载中..."
    }), r.client.request({
        url: "d=wxapi&c=fee_money&m=user_transfer",
        data: n,
        success: function(n) {
            t(e, n.data.tradeid, "money");
        }
    });
}

function t(e, n, t) {
    r.client.request({
        url: "d=wxapi&c=fee_user&m=pay_create",
        data: {
            tradeid: n,
            paytype: t
        },
        success: function(t) {
            a(e, n);
        }
    });
}

function a(e, n) {
    r.client.request({
        url: "d=wxapi&c=fee_user&m=pay_finish",
        data: {
            tradeid: n,
            appresultcode: 1
        },
        success: function(e) {
            wx.hideLoading(), wx.showToast({
                title: "提现申请成功"
            }), setTimeout(function() {
                wx.navigateBack({});
            }, 1e3);
        }
    });
}

function o(e, n) {
    return r.util.empty(n.moneynum) ? (r.showError("请输入提现金额"), !1) : parseFloat(n.moneynum) > parseFloat(e.data.userInfo.fee.moneycurrent) ? (r.showError("体现金额不能大于" + e.data.userInfo.fee.moneycurrent), 
    !1) : r.util.empty(n.realname) ? (r.showError("请输入真实姓名"), !1) : r.util.empty(n.cardno) ? (r.showError("请输入卡号"), 
    !1) : !r.util.empty(n.bankname) || (r.showError("请输入所属银行"), !1);
}

var r = getApp();

Page({
    data: {
        userInfo: {},
        moneynum: ""
    },
    onLoad: function(n) {
        e(this);
    },
    onWithdrawals: function(e) {
        var t = e.detail.value;
        o(this, t) && n(this, t);
    },
    allWithd: function(e) {
        this.setData({
            moneynum: this.data.userInfo.fee.moneycurrent
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return r.globalData.shareInfo;
    }
});