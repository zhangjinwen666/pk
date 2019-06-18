function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

function a(t) {
    var a = getCurrentPages(), e = a[a.length - 2];
    if ("function" == typeof e.changeData) {
        var i = t.data.thread;
        i.postlist = [];
        for (var s in t.data.list) i.postlist.push(t.data.list[t.data.list.length - s - 1]);
        i.postcnt = t.data.total;
        var o = {};
        o.index = t.index, o.reload = !0, o.data = i;
        var r = {};
       
        r.detail = o, e.changeData(r);
    }
}

function e(t) {
  core.get('index/getmsg',{id:t.threadid},function(e){
     
        var i = e.list;
        t.setData({
          thread: i,
          callcredit: e.callcredit
        }), a(t);
    });
}

function i(t) {
    t.page = 0, t.total = 1, t.data.loadstatus = 0, t.data.list = [], s(t);
}

function s(t) {
    console.log("加载评论 - " + t.data.loadstatus), 0 == t.data.loadstatus && (t.page++, 
    t.setData({
        loadstatus: 1
      }), core.get('index/getmessage',{threadid:t.threadid,page:t.page},function(e){
          console.log(e)
            var i = e;
            t.total = i.total;
            var s = i.list, o = t.data.list;
            for (var d in s) {
                var n = s[d];
                o.push(n);
            }
            var c = {};
            c.list = o, c.total = t.total, o.length >= t.total ? c.loadstatus = 2 : c.loadstatus = 0, 
            t.setData(c),a(t);
    }));
}


var o, r = getApp(), d = require("./block"),core = require('../../utils/core');
Page((o = {
    data: {
        showCommentView: !1,
        tipsIndex: 0,
        callcredit: 0
    },
    onLoad: function(t) {
        console.log(t),this.index = t.index, this.threadid = t.threadid, r.empty(this.threadid) && (this.threadid = decodeURIComponent(t.scene)), 
        e(this), i(this);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        s(this);
    },
    call: function(t) {
      var a = this.data.thread.mobile;
      console.log(this)
      //查看电话需要积分
      var credit1 = this.data.callcredit;

      credit1 ? core.confirm('注意:每次查看电话将会消耗' + credit1 + '积分哦', function () {
        core.get('index/lookmobile', {}, (c) => {
          console.log(c)
          if (c.error == -1) {
            wx.showToast({
              title: c.message,
              icon: 'none',
            });
            return;
          }
          wx.makePhoneCall({
            phoneNumber: a
          });
        });

      }) : wx.makePhoneCall({
        phoneNumber: a
      });
    },
    showLocation: function(t) {
        var a = this.data.thread;
        wx.openLocation({
            latitude: parseFloat(a.maplat),
            longitude: parseFloat(a.maplong)
        });
    },
    imagePreview: function(t) {
        var a = t.currentTarget.dataset.current, e = this.data.thread.imagelist;
        wx.previewImage({
            urls: e,
            current: a
        });
    },
    commentInput: function(t) {
        this.comment = t.detail.value;
    },
    sendComment: function(t) {
        var e = this.comment;
        if (r.empty(e)) r.showError("请输入评论内容"); else {
            var i = {};
            i.threadid = this.threadid, i.message = e, i.touserid = this.touserid, wx.showLoading({
                title: "正在提交"
            });
            
            var s = this;
            core.post('index/sendcomment',{
              data:i
            },function(t){
                    if (t.error == 1) {
                      core.get('index/checkEverDay', { type: 'msg_credit' }, function (h) {
                        if (h.error == 1) {
                          wx.showToast({
                            title: h.message,
                            icon: 'none'
                          })
                        }
                      });
                    }
                    var e = t.list, i = s.data.list;
                    console.log(e), void 0 === i && (i = []), 
                    i.unshift(e);
                    var o = parseInt(s.data.total) + 1;
                    s.setData({
                        list: i,
                        total: o,
                        showCommentView: !1
              }), a(s),wx.hideLoading();
            });
        }
    },
    showCommentView: function(t) {
        var a = t.currentTarget.dataset, e = a.tousername, i = a.touserid;
        this.touserid = i, console.error(a);
        var s = this;
        r.getUserInfo(function(t) {
            t.id == i ? wx.showActionSheet({
                itemList: [ "删除" ],
                itemColor: "#FF0000",
                success: function(t) {
                    wx.showLoading({
                        title: "正在删除"
                    }), core.get('index/deletemessage',{id:a.postid},function(t){
                            //r.showMessage();
                            wx.showToast({
                              title: t.message,
                            });
                            if (t.error == 1) {
                              core.get('index/checkEverDay', { type:'msg_delete_credit'},function(h){
                                  if (h.error == 1) {
                                    wx.showToast({
                                      title: h.message,
                                      icon: 'none'
                                    })
                                  }
                              });
                            } 
                            var e = a.idx, i = s.data.thread, o = s.data.list;
                            console.log(o), o.splice(e, 1), i.postcnt = parseInt(i.postcnt) - 1, s.setData({
                                thread: i,
                                list: o
                            }),wx.hideLoading();
                    });
                   
                }
            }) : s.setData({
                showCommentView: !0,
                commentplaceholder: e,
                target: e
            });
        });
    },
    hideView: function(t) {
        var a = t.currentTarget.dataset.view, e = {};
        e[a] = !1, this.setData(e);
    },
    //点赞
    clickupClick: function(t) {
        var e = "", i = {};
        var s = 0; 
      this.data.thread.clickupid > 0 ? (i.threadid = this.data.thread.id,e = "index/cancelclickupcnt", 
        s = 0) : (i.id = this.data.thread.id,e = "index/saveclickupcnt", s = 1), 
        wx.showLoading({
            title: "正在提交"
        }); 
        var o = this;
        core.get(e,i,function(t){
              wx.showToast({
                title: t.message,
              })
                var e = o.data.thread;
                s > 0 ? (e.clickupcnt = parseInt(e.clickupcnt) + 1, e.clickupid = t.clickid) : (e.clickupcnt = parseInt(e.clickupcnt) - 1, 
                e.clickupid = 0), o.setData({
                    thread: e
                }), a(o);
        })
    },
    favoriteClick: function(t) {
        var a = "", e = {}, i = 0;
        console.log(this.data);
        this.data.thread.favoriteid > 0 ? (a = "index/cancelfavorite", 
          e.favoriteid = this.data.thread.favoriteid, e.threadid = this.data.thread.id, i = 0) : (a = "index/savefavorite", 
        e.threadid = this.data.thread.id, i = 1), wx.showLoading({
            title: "正在提交"
        }); 
        var s = this;
        core.get(a,e,function(t){
                wx.showToast({
                  title: t.message,
                })
                //r.showMessage(t.message);
                var a = s.data.thread;
                i > 0 ? (a.favoriteid = t.favoriteid, a.favoritecnt = parseInt(a.favoritecnt) + 1) : (a.favoriteid = i, 
                a.favoritecnt = parseInt(a.favoritecnt) - 1), s.setData({
                    thread: a
                });
        }); 
    },
    showTipsView: function(t) {
        var a = this;
        d.queryBlockDic({
            key: "tip",
            success: function(t) {
                a.setData({
                    tips: t
                });
            }
        }), this.setData({
            showTips: !0
        });
    }
}, t(o, "showTipsView", function(t) {
    var a = this;
    d.queryBlockDic({
        key: "tip",
        success: function(t) {
            a.setData({
                tips: t
            });
        }
    }), this.setData({
        showTips: !0
    });
}), t(o, "tipsClick", function(t) {
    var a = t.currentTarget.dataset.index;
    this.setData({
        tipsIndex: a,
        tipInput: ""
    });
}), t(o, "startInputTips", function(t) {
    this.setData({
        tipsIndex: -1
    });
}), t(o, "tipsSubmit", function(t) {
    var m = t.detail.value.tips;
    if (r.empty(m)) {
      return r.showError("请选择打赏积分");
        //if (!(this.data.tipsIndex >= 0 && this.data.tipsIndex < this.data.tips.length)) return r.showError("请选择打赏金额");
        //m = this.data.tips[this.data.tipsIndex].configvalue;
    }
    var e = this;
    core.post('index/payCredit1',{
      threadid:e.threadid,
      payaction:'tip',
      paycredit1:m
    },function(t){
      console.log(t);
      wx.showToast({
        title: t.message,
      })
      if (t.error == 1) {
        return;
      }
      var m = e.data.thread;
      m.tipcnt = parseInt(m.tipcnt) + 1;
      e.setData({
        showTips:!1,
        thread:m,
      }),a(e);
      //微信支付、余额支付，不需要了
            // var a = t.data.payamount, i = t.data.tradeamount, s = t.data.tradedate, o = t.data.tradetitle, r = t.data.tradeid;
            // wx.navigateTo({
            //     url: "/page/publish/pay?payamount=" + a + "&tradeamount=" + i + "&tradedate=" + s + "&tradetitle=" + o + "&tradeid=" + r
            // }), e.setData({
            //     showTips: !1
            // });
    })
    // r.client.request({
    //     url: "d=wxapi&c=forum_my_pay&m=pay_save",
    //     data: {
    //         threadid: e.threadid,
    //         payaction: "tip",
    //         paydata: a
    //     },
    //     success: function(t) {
    //         var a = t.data.payamount, i = t.data.tradeamount, s = t.data.tradedate, o = t.data.tradetitle, r = t.data.tradeid;
    //         wx.navigateTo({
    //             url: "/page/publish/pay?payamount=" + a + "&tradeamount=" + i + "&tradedate=" + s + "&tradetitle=" + o + "&tradeid=" + r
    //         }), e.setData({
    //             showTips: !1
    //         });
    //     }
    // });
}), t(o, "payCallBack", function(t) {
    if (t) {
        var e = this.data.thread;
        e.tipcnt = parseInt(e.tipcnt) + 1, this.setData({
            thread: e,
            showTips: !1
        }), a(this);
    }
}), t(o, "onShareAppMessage", function() {}), o));