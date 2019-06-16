var t = getApp(), a = require("../block"),core = require('../../../utils/core');

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        data: {
            type: Object,
            observer: function(a, e, i) {
              a.imageList = a.imagelist, a.time = a.createtime, 
                this.setData({
                    data: a
                });
            }
        },
        index: {
            type: Number
        },
        mine: {
            type: Boolean,
            value: !1
        },
        showMnue : {
          type: Boolean,
          value: 1
        },
        isupdate : {
          type:Boolean,
          value: !1,
        },
        callcredit : {
          type:Float32Array,
          value:0.00,
        },
        isDelete:{
          type:Boolean,
          value:!1
        }
    },
    data: {
        showCommentView: !1,
        showTips: !1,
        tipsIndex: 0,
        tips: [],
    },
    methods: {
        commentClick: function(a) {
            // var e = a.currentTarget.dataset, i = e.target, d = e.touserid, s = this;
            // t.getUserInfo(function(a) {
            //    a.id == d ? wx.showActionSheet({
            //         itemList: [ "删除" ],
            //         itemColor: "#FF0000",
            //         success: function(a) {
            //             wx.showLoading({
            //                 title: "正在删除"
            //             }), 
            //               core.get('index/deletemessage',{id:e.postid},function(a){
            //                     //t.showMessage(a.message);
            //                     wx.showToast({
            //                       title: a.message,
            //                     }) 
            //                     var i = e.idx, d = s.data.data, n = d.postlist;
            //                     console.log(n), n.splice(i, 1), d.postcnt = parseInt(d.postcnt) - 1, s.setData({
            //                         data: d
            //                     });
            //             });
            //         }
            //     }) : s.setData({
            //         showCommentView: !0,
            //         commentplaceholder: i,
            //         touserid: d
            //     });
            // });
        },
        commentInput: function(t) {
            this.comment = t.detail.value;
        },
        sendComment: function(a) {
            // var e = this.comment;
            // return;
            // if (t.empty(e)) t.showError("请输入评论内容"); else {
            //     var i = {};
            //     i.threadid = this.data.data.id, i.message = e, i.touserid = this.data.touserid, 
            //     wx.showLoading({
            //         title: "正在提交"
            //     });
            //     console.log(i);
            //     var d = this;
            //   core.post('index/sendcomment',{data:i},function(a){
            //         wx.showToast({
            //           title: a.message,
            //         }), console.log("评论成功 返回内容"), console.error(a);
            //     console.log(a, d.data);
            //         var e = a.list, i = d.data.list || 0;
            //         void 0 === i && (i = []), i.push(e);
            //         var s = d.data.list;
                   
            //         s.list = i, s.postcnt = parseInt(s.postcnt) + 1, d.setData({
            //           data: s,
            //           showCommentView: !1
            //         }), s.index = d.data.index;
            //         var n = {};
            //         n.data = s, n.index = d.data.index, d.triggerEvent("changedata", n);
            //     });
            // }
        },
        hideView: function(t) {
            var a = t.currentTarget.dataset.view, e = {};
            e[a] = !1, this.setData(e), this.comment = "";
        },
        showTipsView: function(t) {
            // var e = this;
            // a.queryBlockDic({
            //     key: "tip",
            //     success: function(t) {
            //         e.setData({
            //             tips: t
            //         });
            //     }
            // }), this.setData({
            //     showTips: !0
            // });
        },
        tipsClick: function(t) {
            var a = t.currentTarget.dataset.index;
            this.setData({
                tipsIndex: a,
                tipInput: ""
            });
        },
        startInputTips: function(t) {
            this.setData({
                tipsIndex: -1
            });
        },
        tipsSubmit: function(a) {
            var e = a.detail.value.tips;
            if (t.util.empty(e)) {
                if (!(this.data.tipsIndex >= 0 && this.data.tipsIndex < this.data.tips.length)) return t.showError("请选择打赏金额");
                e = this.data.tips[this.data.tipsIndex].configvalue;
            }
            var i = this;
            t.client.request({
                url: "d=wxapi&c=forum_my_pay&m=pay_save",
                data: {
                    threadid: i.data.data.threadid,
                    payaction: "tip",
                    paydata: e
                },
                success: function(t) {
                    var a = t.data.payamount, e = t.data.tradeamount, d = t.data.tradedate, s = t.data.tradetitle, n = t.data.tradeid;
                    wx.navigateTo({
                        url: "/page/publish/pay?payamount=" + a + "&tradeamount=" + e + "&tradedate=" + d + "&tradetitle=" + s + "&tradeid=" + n
                    }), i.setData({
                        showTips: !1
                    });
                }
            });
        },
        addressClick: function(t) {
            var a = this.data.data;
            wx.openLocation({
                latitude: parseFloat(a.maplat),
                longitude: parseFloat(a.maplong)
            });
        },
        call: function(t) {
            var a = this.data.data.mobile;
            //查看电话需要积分
          var credit1 = this.data.callcredit;

          credit1 ? core.confirm('注意:每次查看电话将会消耗' + credit1 + '积分哦',function(){
            core.get('index/lookmobile',{},(c)=>{
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
        none: function(t) {},
        cellClick: function(t) {

            var a = this.data.data.id, e = this.data.index;
            wx.navigateTo({
                url: "/page/home/detail?threadid=" + a + "&index=" + e
            });
        },
        imagePreview: function(t) {
            var a = t.currentTarget.dataset.image, e = this.data.data.imagelist;
            wx.previewImage({
                urls: e,
                current: a
            });
        },
        likeClick: function(a) {
           
          var m = {}, e = this, i = e.data.data; m.threadid = i.id;
            console.log(m);
          i.index = e.data.index, i.clickupid > 0 ? core.get('index/cancelclickupcnt',m,function(t){
            wx.showToast({
              title: t.message,
            })
            i.clickupcnt = parseInt(i.clickupcnt) - 1, i.clickupid = 0, e.setData({
                        data: i
                    });
                    var a = {};
                    a.data = i, a.index = e.data.index, e.triggerEvent("changedata", a);
          }) : core.get('index/saveclickupcnt',i,function(t){
              wx.showToast({
                title: t.message,
              })
              i.clickupcnt = parseInt(i.clickupcnt) + 1, i.clickupid = 1, e.setData({
                        data: i
                    });
                    var a = {};
                    a.data = i, a.index = e.data.index, e.triggerEvent("changedata", a);
          })  
        },
      deleteClear: function(a) {
            var e = this;
           
            wx.showModal({
                title: "提示",
                content: "是否确认回收此内容",
                success: function(a) {
                    a.confirm && (wx.showLoading({
                        title: "正在回收"
                    }), core.get('index/deletemsg',{threadid:e.data.data.id},function(a){
                          wx.showToast({
                            title: a.message,
                          });
                          if (a.error == 1) {
                            core.get('index/checkEverDay', {type:'send_delete_credit'},function(h){
                                if (h.error == 1) {
                                  wx.showToast({
                                    title: h.message,
                                    icon: 'none'
                                  });
                                }
                            });
                          }
                          var i = {};
                          
                          i.index = e.data.index,e.triggerEvent("changedata",i);
                    })
                    );
                }
            });
        },
        //删除
      deleteAction: function (a) {
        var e = this;
        wx.showModal({
          title: "提示",
          content: "是否确认删除此内容",
          success: function (a) {
            a.confirm && (wx.showLoading({
              title: "正在删除"
            }), core.get('index/deletemsgcok', { threadid: e.data.data.id }, function (a) {
              wx.showToast({
                title: a.message,
              });
              var i = {};
              i.index = e.data.index, e.triggerEvent("changedata", i);
            })
            );
          }
        });
      },
      //恢复
      statusAction: function (a) {
        var e = this;

        wx.showModal({
          title: "提示",
          content: "是否确认恢复此内容",
          success: function (a) {
            a.confirm && (wx.showLoading({
              title: "正在恢复"
            }), core.get('index/remsg', { threadid: e.data.data.id }, function (a) {
              wx.showToast({
                title: a.message,
                icon:'none'
              });
              var i = {};
              i.index = e.data.index,a.error && e.triggerEvent("changedata", i);
            })
            );
          }
        });
      },
        editAction: function(t) {
            var a = this;
          console.log(a)
            wx.navigateTo({
              url: "/page/publish/bbq?threadid=" + a.data.data.id + "&index=" + a.data.index + "&blockid=" + a.data.data.navid + "&subnavid=" + a.data.data.subnavid + "&blockname=发布板块"
            });
        },
        reloadAction: function(a) {
            var e = this;
            wx.showModal({
                title: "提示",
                content: "是否刷新？",
                success: function(a) {
                   var i = {};
                    a.confirm && (wx.showLoading({
                        title: "正在刷新"
                    }), i.threadid = e.data.data.id, i.payaction = "refresh",core.post('index/sendmsg', { data:i },function(t){
                          wx.showToast({
                            title: t.message,
                          }),wx.hideLoading();
                          //不需要支付
                      // wx.navigateTo({
                      //           url: "/page/publish/pay"
                      //       });
                    })
                    // t.client.request({
                    //     url: "index/sendmsg",
                    //     data: {
                    //         threadid: e.data.data.threadid,
                    //         payaction: "refresh",
                    //         paydata: "0"
                    //     },
                    //     success: function(t) {
                    //         t.data.payamount, t.data.tradetitle, t.data.tradeid;
                    //         wx.navigateTo({
                    //             url: "/page/publish/pay"
                    //         });
                    //     }
                    // })
                    );
                }
            });
        }
    }
});