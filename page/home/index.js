function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

//发布的信息列表
function a(t) {
    0 == t.data.loadstatus && (t.setData({
        loadstatus: 1
    }), t.page++, core.get('index/getmsg', {page: t.page,search: t.search},function(a){
          t.setData({tel:a.sysset.tel,kfqrcode:a.sysset.kfqrcode});
          t.total = a.total;
          var n = {}, i = t.data.list;
      n.callcredit = a.callcredit;
      for (var c in a.list) {
        i.push(a.list[c]);
      }
      n.list = i, n.list.length >= t.total ? n.loadstatus = 2 : n.loadstatus = 0, 
          t.setData(n), wx.stopPullDownRefresh();
      
    }));
}

function e(t) {
    t.page = 0, t.total = 1, t.setData({
        list: [],
        loadstatus: 0
    }), a(t);
}

var n, i = getApp(),core = require('../../utils/core.js'), s = require("./block");

Page((n = {
    data: {
        imageHeader: i.globalData.imageHeader,
        inputShowed: !1,
        inputVal: "",
        tools: [ {
          title: "抽奖",
          subtitle: "有机会免费获得模型",
          url: "/page/lottery/index"
        }, {
            title: "成功案例",
            subtitle: "专业维修技术展示",
            url: "/page/case/index"
        }, {
            title: "鹏控技术",
            subtitle: "视频、文章免费阅读",
            url: "/page/tech/index"
        }, {
            title: "投票",
            subtitle: "奖励模型、产品配件",
            url: "/page/vote/index"
        } ],
        list: [],
        fixBar:1,
        isKf:!1,
        tel:"--",
        kfqrcode:""
    },
    onLoad: function(t) {
        var a = this;
      //获取轮播图  获取导航按钮 获取发布信息列表
      this.search = "", this.searchInput = "", s.queryBanner(function (d) {
        
        a.setData({
          banner: d
        });
      }),s.queryBlockList(function(t) {
        
            a.setData({
                icons: t
            });
        }), e(this);
    },
    onPullDownRefresh: function() {
     
        var t = this;
        i.getAppConfig(function(a) {
            var e = a.banner;
            t.setData({
                banner: e
            }), wx.stopPullDownRefresh();
        });
    },
    showInput: function() {
        this.setData({
            inputShowed: !0
        });
    },
    hideInput: function() {
        this.search = this.searchInput, e(this);
    },
    clearInput: function() {
        this.setData({
            inputVal: ""
        });
    },
    searchChanged: function(t) {
        this.searchInput = t.detail.value;
    },
    inputTyping: function(t) {
        this.search = t.detail.value, e(this);
    },
    fixBarStatusChange: function(t) {
        var a = !this.data.fixBar;
        this.setData({
            fixBar: a
        });
    },
  jumpComp:function(){
    this.setData({isKf:1});
  },
  
  closeCall:function(){
    this.setData({ isKf: !1 });
  },
  compCall:function(e){
    var tel = e.currentTarget.dataset.tel;
    wx.makePhoneCall({
      phoneNumber: tel,
    })
  },
  compQrcode:function(e){
    var img = e.currentTarget.dataset.src;
    wx.showModal({
      title: '添加客服',
      content: '将客服二维码保存到手机本地，然后在使用微信扫一扫识别本地二维码加好友哦',
      success:function(r){
        if (r.confirm) {
          wx.downloadFile({
            url: img,
            success: function (r) {
              wx.saveImageToPhotosAlbum({
                filePath: r.tempFilePath,
                success: function (data) {
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 2000
                  })
                }
              });
            }

          });
        }
      }
    })
     
       
  },
    none: function(t) {
        console.log("none");
    },
    gotoTabbar: function(t) {
        var a = t.currentTarget.dataset.tabbar;
        wx.switchTab({
            url: a
        });
    },
    iconsClick: function(t) {
      var a = t.currentTarget.dataset.index, isjump = t.currentTarget.dataset.isjump;
      if (!i.globalData.hasLogin){
        wx.switchTab({
          url: '/page/user/index'
        });
        return;
      }
      1 == isjump ? wx.switchTab({
            url: a
        }) : wx.navigateTo({
            url: a
        });
    },
  jupClidk:function(t){
    var isjump = t.currentTarget.dataset.isjump;
    if (!i.globalData.hasLogin) {
      wx.switchTab({
        url: '/page/user/index'
      });
      return;
    }
    wx.navigateTo({
      url: isjump
    });

  },
    onReachBottom: function() {
        a(this);
    },
  onHide:function(){
      this.setData({ isKf: !1 });
    }
},
t(n, "onPullDownRefresh", function() {
  
    e(this);
}), 
t(n, "changeData", function(t) {
  console.log(t)
    var a = t.detail.data, e = t.detail.index, n = this.data.list;
    n.splice(e, 1, a), t.detail.reload && this.setData({
        list: n
    });
}), 
t(n, "onShareAppMessage", function() {}), n));
