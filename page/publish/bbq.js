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
  core.get('index/getmsg', {id: a.threadid},function(t){
    console.log(t)
       a.setData({
         brief: t.list.content,
         address: {
           latitude: t.list.maplat,
           longitude: t.list.maplong,
           address: t.list.address
         },
         originalData: t.list
       }), a.selectComponent("#image").setDefaultImage(t.list.imagelist);
  });
}

var e = getApp(), i = require("../home/block.js");
var core  = require('../../utils/core.js');
Page({
    data: {
        textcount: 0,
        topDays: [ 1, 5, 10, 30, 100 ],
        //子分类
        subblocks: [],
        //行业分类
        industry:[],
        //岗位分类
        job:[],
        //工年分类
        work:[],
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
        this.blockid = e, this.subnavid = a.subnavid,this.industryid=a.industryid,this.jobid=a.jobid,this.workid=a.workid, this.blockname = a.blockname, wx.setNavigationBarTitle({
            title: a.blockname
        }), a.threadid > 0 && (this.threadid = a.threadid, this.index = a.index, t(this));
        var s = this;
        //分类
        i.querySubBlockList(e, function(a) {
            var o = {};
            for (var c in a) a[c]['id'] == s.subnavid && (o=a[c]);
            s.setData({
                subblocks: a,
                selectedBlock: o
            });
        });
        //行业分类
        //岗位分类
        //工年分类
      i.queryIndustryJobWork(e,function(a){
            var g_i = [],g_j = [],g_w=[];
            for (var c in a.industry) a.industry[c]['id'] == s.industryid && (g_i = a.industry[c]);
        for (var c in a.job) a.job[c]['id'] == s.jobid && (g_j = a.job[c]);
            for (var c in a.work) a.work[c]['id'] == s.workid && (g_w = a.work[c]);
            s.setData({
              industry:a.industry,
              job:a.job,
              work:a.work,
              industryBlock: g_i,
              jobBlock: g_j,
              workBlock: g_w,
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
    industryChanged: function (a) {
      var t = a.detail.value, e = this.data.industry[t];
      this.setData({
        industryBlock: e
      });
    },
    jobChanged: function (a) {
      var t = a.detail.value, e = this.data.job[t];
      this.setData({
        jobBlock: e
      });
    },
    workChanged: function (a) {
      var t = a.detail.value, e = this.data.work[t];
      this.setData({
        workBlock: e
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
      if (!e.globalData.hasLogin) {
            wx.showModal({
              title: '绑定手机',
              content: '为了方便其他用户与您沟通，请先绑定手机号哦',
              success:function(r){
                  r.confirm && wx.navigateTo({
                    url: '/page/user/common/login',
                  })
              }
            });
            return;
         }
        var i = t.detail.value;
        if (i.navid = this.blockid, e.empty(this.threadid) || (i.threadid = this.threadid), 
        e.empty(this.data.address)) e.showError("请选择位置"); else {
            var s = this.data.address;
            if (i.maplat = s.latitude, i.maplong = s.longitude, i.address = s.address, !e.empty(this.data.subblocks) && this.data.subblocks.length > 0) {
                if (e.empty(this.data.selectedBlock)) return void e.showError("请选择子分类");

                i.subnavid = this.data.selectedBlock.id;
          } 
          if (!e.empty(this.data.industry) && this.data.industry.length > 0) {
            if (e.empty(this.data.industryBlock)) return void e.showError("请选择行业");

            i.industryid = this.data.industryBlock.id;
          }
          if (!e.empty(this.data.job) && this.data.job.length > 0) {
            if (e.empty(this.data.jobBlock)) return void e.showError("请选择岗位");

            i.jobid = this.data.jobBlock.id;
          }
          if (!e.empty(this.data.work) && this.data.work.length > 0) {
            if (e.empty(this.data.workBlock)) return void e.showError("请选择工年");

            i.workid = this.data.workBlock.id;
          }

            this.data.isTop && (i.topday = this.data.selectedDay);
            var d = this;
           
            this.selectComponent("#image").uploadImage(function(t) {        
                i.imagelist = t, wx.showLoading({
                    title: "正在提交"
                }), console.log(i),core.post('index/sendmsg',{data:i},function(t){
                  //发帖积分奖励
                  if (t.error == 1) {
                    core.get('index/checkEverDay', { type: 'send_credit' }, function (h) {
                      if (h.error == 1) {
                        wx.showToast({
                          title: h.message,
                          icon: 'none'
                        })
                      }
                    });
                  }
                  if (console.log(t), wx.showToast({title: t.message}), !e.empty(d.blockid)) {
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
                  
                  d.threadid = t.data.id, d.data.isTop ? (a(t.data.threadid, d.data.selectedDay, d),
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