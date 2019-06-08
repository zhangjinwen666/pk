function a(a, t, i) {
    e.client.request({
        url: "d=wxapi&c=forum_my_pay&m=pay_save",
        data: {
            threadid: a,
            payaction: "top",
            paydata: t
        },
        success: function(a) {
            console.log(a);
            var t = a.data.payamount, e = a.data.tradeamount, s = a.data.tradedate, d = a.data.tradetitle, o = a.data.tradeid;
            wx.redirectTo({
                url: "pay?payamount=" + t + "&tradeamount=" + e + "&tradedate=" + s + "&tradetitle=" + d + "&tradeid=" + o + "&blockid=" + i.blockid + "&blockname=" + i.blockname
            });
        }
    });
}

function t(a) {
    e.client.request({
        url: "d=wxapi&c=forum_thread&m=thread_byid",
        data: {
            threadid: a.threadid
        },
        success: function(t) {
            a.setData({
                brief: t.data.brief,
                address: {
                    latitude: t.data.maplat,
                    longitude: t.data.maplong,
                    address: t.data.address
                },
                originalData: t.data
            }), a.selectComponent("#image").setDefaultImage(t.data.imagelist);
        }
    });
}

var e = getApp(), i = require("../home/block.js");
var core  = require('../../utils/core.js');
Page({
    data: {
        textcount: 0,
        topDays: [ 1, 5, 10, 30, 100 ],
        subblocks: [],
        selectedDay: 1,
        brief: "",
        originalData: {}
    },
    onShow: function() {
        this.startToPay && (this.payResult ? (e.showMessage("置顶成功"), setTimeout(function() {
            wx.navigateBack();
        }, 1500)) : e.showError("置顶失败"));
    },
    onLoad: function(a) {
        var e = a.blockid;
        this.blockid = e, this.blockname = a.blockname, wx.setNavigationBarTitle({
            title: a.blockname
        }), a.threadid > 0 && (this.threadid = a.threadid, this.index = a.index, t(this));
        var s = this;
        //分类
        i.querySubBlockList(e, function(a) {
            s.setData({
                subblocks: a
            });
        });
    },
    inputchanged: function(a) {
        this.setData({
            textcount: a.detail.value.length
        });
    },
    subblocksChanged: function(a) {
        var t = a.detail.value, e = this.data.subblocks[t];
        this.setData({
            selectedBlock: e
        });
    },
    pickerChanged: function(a) {
        var t = a.currentTarget.dataset.range, e = a.currentTarget.dataset.value, i = this.data[t][a.detail.value], s = {};
        s[e] = i, console.log(s), this.setData(s);
    },
    topStyleChange: function(a) {
        if (this.setData({
            isTop: a.detail.value
        }), a.detail.value) {
            wx.showLoading({
                title: ""
            });
            var t = this;
            i.queryBlockDic({
                key: "top",
                success: function(a) {
                    wx.hideLoading();
                    var e = a[0];
                    t.setData({
                        topDays: a,
                        selectedDay: e.configkey,
                        topMoney: e.configvalue
                    });
                }
            });
        }
    },
    topDaysChanged: function(a) {
        var t = a.detail.value, e = this.data.topDays[t];
        this.setData({
            selectedDay: e.configkey,
            topMoney: e.configvalue
        });
    },
    chooseLocation: function(a) {
        var t = this;
        wx.chooseLocation({
            success: function(a) {
                t.setData({
                    address: a
                });
            }
        });
    },
    formSubmit: function(t) {
       
        var i = t.detail.value;
        if (i.navid = this.blockid, e.empty(this.threadid) || (i.threadid = this.threadid), 
        e.empty(this.data.address)) e.showError("请选择位置"); else {
            var s = this.data.address;
            if (i.maplat = s.latitude, i.maplong = s.longitude, i.address = s.address, !e.empty(this.data.subblocks) && this.data.subblocks.length > 0) {
                if (e.empty(this.data.selectedBlock)) return void e.showError("请选择子分类");
                i.subnavid = this.data.selectedBlock.id;
          } 
            this.data.isTop && (i.topday = this.data.selectedDay);
            var d = this;
          
            this.selectComponent("#image").uploadImage(function(t) {
            
                i.imagelist = t, wx.showLoading({
                    title: "正在提交"
                }), core.post('index/sendmsg',{data:i},function(t){
                  console.log(t);return;
                  if (console.log(t), e.showMessage(t.message), !e.empty(d.blockid)) {
                    var s = getCurrentPages(), o = s[s.length - 2];
                    if ("function" == typeof o.changeData) {
                      var l = {};
                      l.index = d.index, l.edit = !0;
                      var n = d.data.originalData;
                      n.maplat = i.maplat, n.maplong = i.maplong, n.address = i.address, n.imagelist = i.imagelist.split(";"),
                        n.brief = i.content, l.data = n;
                      var c = {};
                      c.detail = l, o.changeData(c);
                    }
                  }
                  d.threadid = t.data.threadid, d.data.isTop ? (a(t.data.threadid, d.data.selectedDay, d),
                    d.startToPay = !0, d.payResult = !1) : setTimeout(function () {
                      wx.redirectTo({
                        url: "/page/home/list?blockid=" + d.blockid + "&blockname=" + d.blockname
                      });
                    }, 1500);
                });
            });
        }
    },
    payCallBack: function(a) {
        this.payResult = a;
    },
    onShareAppMessage: function() {}
});