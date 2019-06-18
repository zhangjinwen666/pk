
function a(a) {
    o.queryBlockList(function(e) {
        var s = "";
        for (var d in e) {
            var o = e[d];
            if (18 == o.id) {
                s = o.id;
                break;
            }
        }
        s.length > 0 && (a.parentid = s, t(a));
    });
}

function t(a) {
    o.querySubBlockList(a.parentid, function(t) {
      console.log(t)
        for (var d in t) {
            var o = t[d];
            o.total = 1, o.page = 0, o.loadstatus = 0, o.list = [];
        }
        a.setData({
            header: t
        }), e(a), s(a);
    });
}

function e(a) {
    var t = a.data.headerIndex, e = a.data.header[t];
    e.page = 0, e.total = 1, e.list = [], e.loadstatus = 0, a.setData({
        showReload: !0
    });
}

function s(a) {
    wx.stopPullDownRefresh();
    var t = a.data.headerIndex, e = a.data.header, s = e[t];
    0 == s.loadstatus && (s.loadstatus = 1, e[t] = s, a.setData({
        header: e
    }), s.page++,
      core.get('index/getmsg', { navid: a.parentid,subnavid:s.id},function(d){
            var o = d.list;
            
            s.total = d.total;
            for (var r in o) s.list.push(o[r]);
            e[t] = s;
            var n = {};
            n.callcredit = d.callcredit;
            s.list.length >= s.total ? s.loadstatus = 2 : s.loadstatus = 0, n.header = e, a.data.showReload && (n.showReload = !1), 
            a.setData(n);
     }));
}

var d = getApp(), o = require("../home/block.js"),core = require('../../utils/core');

Page({
    data: {
        header: [],
        headerIndex: 0,
        callcredit : 0
    },
    onLoad: function(t) {
        a(this);
    },
    onPullDownRefresh: function() {
        a(this);
    },
    onReachBottom: function() {
        s(this);
    },
    headerClick: function(a) {
        var t = this.data.headerIndex;
        a.currentTarget.dataset.index == t ? (e(this), s(that)) : (this.setData({
            headerIndex: a.currentTarget.dataset.index
        }), 0 == this.data.header[this.data.headerIndex].list && s(this));
    },
    onShareAppMessage: function() {}
});