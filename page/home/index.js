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
            title: "优质二手机",
            subtitle: "二手车源首发",
            url: "/page/second/index"
        }, {
            title: "成功案例",
            subtitle: "专业泵车估价",
            url: "/page/case/index"
        }, {
            title: "鹏控技术",
            subtitle: "全国过户年审",
            url: "/page/tech/index"
        }, {
            title: "投票",
            subtitle: "投票服务",
            url: "/page/vote/index"
        } ],
        list: [],
        fixBar:0
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
        // var a = !this.data.fixBar;
        // this.setData({
        //     fixBar: a
        // });
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

      1 == isjump ? wx.switchTab({
            url: a
        }) : wx.navigateTo({
            url: a
        });
    },
    onReachBottom: function() {
        a(this);
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
