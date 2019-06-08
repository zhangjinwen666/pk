var t = getApp(), a = require("../block");

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        data: {
            type: Object,
            observer: function(a, e, i) {
                a.imageList = t.client.getFileUrl(a.imagelist), a.time = t.util.formatDateTime(a.dateline), 
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
        }
    },
    data: {
        showCommentView: !1,
        showTips: !1,
        tipsIndex: 0,
        tips: []
    },
    methods: {
        commentClick: function(a) {
            var e = a.currentTarget.dataset, i = e.target, d = e.touserid, s = this;
            t.getUserInfo(function(a) {
                t.globalData.userId == d ? wx.showActionSheet({
                    itemList: [ "删除" ],
                    itemColor: "#FF0000",
                    success: function(a) {
                        wx.showLoading({
                            title: "正在删除"
                        }), t.client.request({
                            url: "d=wxapi&c=forum_my_post&m=post_delete",
                            data: {
                                postid: e.postid
                            },
                            success: function(a) {
                                t.showMessage(a.message);
                                var i = e.idx, d = s.data.data, n = d.postlist;
                                console.log(n), n.splice(i, 1), d.postcnt = parseInt(d.postcnt) - 1, s.setData({
                                    data: d
                                });
                            }
                        });
                    }
                }) : s.setData({
                    showCommentView: !0,
                    commentplaceholder: i,
                    touserid: d
                });
            });
        },
        commentInput: function(t) {
            this.comment = t.detail.value;
        },
        sendComment: function(a) {
            var e = this.comment;
            if (t.util.empty(e)) t.showError("请输入评论内容"); else {
                var i = {};
                i.threadid = this.data.data.threadid, i.message = e, i.touserid = this.data.touserid, 
                wx.showLoading({
                    title: "正在提交"
                });
                var d = this;
                t.client.request({
                    url: "d=wxapi&c=forum_my_post&m=post_save",
                    data: i,
                    success: function(a) {
                        t.showMessage(a.message), console.log("评论成功 返回内容"), console.error(a);
                        var e = a.data, i = d.data.data.postlist;
                        void 0 === i && (i = []), i.push(e);
                        var s = d.data.data;
                        s.postlist = i, s.postcnt = parseInt(s.postcnt) + 1, d.setData({
                            data: s,
                            showCommentView: !1
                        }), s.index = d.data.index;
                        var n = {};
                        n.data = s, n.index = d.data.index, d.triggerEvent("changedata", n);
                    }
                });
            }
        },
        hideView: function(t) {
            var a = t.currentTarget.dataset.view, e = {};
            e[a] = !1, this.setData(e), this.comment = "";
        },
        showTipsView: function(t) {
            var e = this;
            a.queryBlockDic({
                key: "tip",
                success: function(t) {
                    e.setData({
                        tips: t
                    });
                }
            }), this.setData({
                showTips: !0
            });
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
          
            wx.makePhoneCall({
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
            this.data.data.threadid;
            var e = this, i = e.data.data;
            i.index = e.data.index, i.clickupid > 0 ? t.client.request({
                url: "d=wxapi&c=forum_my_click&m=click_delete",
                data: {
                    threadid: i.threadid
                },
                success: function(t) {
                    i.clickupcnt = parseInt(i.clickupcnt) - 1, i.clickupid = 0, e.setData({
                        data: i
                    });
                    var a = {};
                    a.data = i, a.index = e.data.index, e.triggerEvent("changedata", a);
                }
            }) : t.client.request({
                url: "d=wxapi&c=forum_my_click&m=click_save",
                data: {
                    threadid: i.threadid,
                    clicktype: 1
                },
                success: function(t) {
                    i.clickupcnt = parseInt(i.clickupcnt) + 1, i.clickupid = 1, e.setData({
                        data: i
                    });
                    var a = {};
                    a.data = i, a.index = e.data.index, e.triggerEvent("changedata", a);
                }
            });
        },
        deleteAction: function(a) {
            var e = this;
            wx.showModal({
                title: "提示",
                content: "是否确认删除此内容",
                success: function(a) {
                    a.confirm && (wx.showLoading({
                        title: "正在删除"
                    }), t.client.request({
                        url: "d=wxapi&c=forum_my_thread&m=thread_delete",
                        data: {
                            threadid: e.data.data.threadid
                        },
                        success: function(a) {
                            t.showMessage(a.message);
                            var i = {};
                            i.index = e.data.index, e.triggerEvent("changedata", i);
                        }
                    }));
                }
            });
        },
        editAction: function(t) {
            var a = this;
            wx.navigateTo({
                url: "/page/publish/bbq?threadid=" + a.data.data.threadid + "&index=" + a.data.index + "&blockid=" + a.data.data.blockid
            });
        },
        reloadAction: function(a) {
            var e = this;
            wx.showModal({
                title: "提示",
                content: "是否刷新？",
                success: function(a) {
                    a.confirm && (wx.showLoading({
                        title: "正在刷新"
                    }), t.client.request({
                        url: "d=wxapi&c=forum_my_pay&m=pay_save",
                        data: {
                            threadid: e.data.data.threadid,
                            payaction: "refresh",
                            paydata: "0"
                        },
                        success: function(t) {
                            t.data.payamount, t.data.tradetitle, t.data.tradeid;
                            wx.navigateTo({
                                url: "/page/publish/pay"
                            });
                        }
                    }));
                }
            });
        }
    }
});