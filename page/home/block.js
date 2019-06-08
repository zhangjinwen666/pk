function t(t) {
    console.error(t);
}

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, o = 30;
var u = require("../../utils/core.js");
module.exports = {
  //获取轮播图
    queryBanner: function(f){
<<<<<<< HEAD
      var c = getApp(),n = wx.getStorageSync('banner');   
      if ('object' == typeof n && (c.getCurrentTime() - (n.time || 0)) < c.catchtime) return void t("本地缓存轮播列表"),'function' == typeof f && f(n.list);
      
      u.get('index/getbanner',{},function(a){
        var l = {};
        l.time = c.getCurrentTime(),l.list = a.banner;
       
        wx.setStorageSync('banner',l),t("服务器获取轮播列表"),'function' == typeof f && f(l.list);
=======
      var c = getApp(),n = wx.getStorageSync('banner');
      
      if ('object' == typeof n && 0 < n.length) return 'function' == typeof f && f(n);
      u.get('index/getbanner',{},function(a){
      
        wx.setStorageSync('banner',a.banner),t("服务器获取轮播分类列表"),'function' == typeof f && f(a.banner);
>>>>>>> e69d8bd868f3a96d2d392bc1beba334c58671214
      })
    },
    //获取导航按钮
    queryBlockList: function(i) {
<<<<<<< HEAD
      var c = getApp();
        var n = wx.getStorageSync("nav");
      if ('object' == typeof n && (c.getCurrentTime() - n.time) < c.catchtime) return void t("本地缓存分类列表"),'function' == typeof i && i(n.list); 
      u.get('index/getnav', {}, function (e) {
        var o = {};
        o.time = c.getCurrentTime();o.list = e.nav; 
         wx.setStorageSync("nav", o), t("服务器获取分类列表"), "function" == typeof i && i(o.list);
      });
    },
    //获取导航子分类
    querySubBlockList: function(i, c) {
        var n = getApp();
        if (n.empty(i)) "function" == typeof c && c([]); else {
          var s = 'usbnavs' + i, m = wx.getStorageSync(s); (n.getCurrentTime() - (m.time || 0)) < n.catchtime ? typeof c == 'function' && (t("本地缓存获取子分类列表"),c(m.list)) : u.get('index/getsubnav',{id:i},function(a){
              var l = {};
              l.time = n.getCurrentTime();
              l.list = a.subnav;
              wx.setStorageSync(s, l);
              typeof c == 'function' && (t("服务器获取子分类列表"),c(l.list));

          })
          
        }
    },
    queryBlockDic: function(i) {
      
        // var c = getApp(), n = "blockDic" + i.key, r = wx.getStorageSync(n), s = c.util.getTimestamp();
        // "object" == (void 0 === r ? "undefined" : e(r)) && s - r.time < o ? i.success && (i.success(r.list), 
        // t("本地缓存分类列表")) : c.client.request({
        //     url: "d=wxapi&c=forum_block&m=config",
        //     data: {
        //         configtype: i.key
        //     },
        //     success: function(e) {
        //         var o = e.data, c = {};
        //         c.time = s, c.list = o, wx.setStorageSync(n, c), t("服务器获取分类列表"), "function" == typeof i.success && i.success(o);
        //     }
        // });
=======
        var n = wx.getStorageSync("nav");
      if ('object' == typeof n && 0 < n.length) return void t("本地缓存分类列表"),n; 
      u.get('index/getnav', {}, function (e) {
        var o = e.nav;
         wx.setStorageSync("nav", u), t("服务器获取分类列表"), "function" == typeof i && i(o);
      });
    },
    querySubBlockList: function(i, c) {
        var n = getApp();
        if (n.util.empty(i)) "function" == typeof c && c([]); else {
            var r = "blockSub" + i, s = wx.getStorageSync(r), u = n.util.getTimestamp(), l = !1;
            "object" == (void 0 === s ? "undefined" : e(s)) ? "function" == typeof c && (u - s.time < o ? (t("本地缓存子分类 " + i), 
            c(s.list)) : l = !0) : l = !0, l && n.client.request({
                url: "d=wxapi&c=forum_block&m=block_list",
                data: {
                    parentid: i
                },
                success: function(e) {
                    var o = e.data;
                    for (var s in o) {
                        var l = o[s];
                        l.image = n.client.getFileUrl(l.image);
                    }
                    var a = {};
                    a.time = u, a.list = o, wx.setStorageSync(r, a), t("网络请求子分类 " + i), "function" == typeof c ? c(e.data) : console.error("分类属性查询成功没有处理");
                }
            });
        }
    },
    queryBlockDic: function(i) {
        var c = getApp(), n = "blockDic" + i.key, r = wx.getStorageSync(n), s = c.util.getTimestamp();
        "object" == (void 0 === r ? "undefined" : e(r)) && s - r.time < o ? i.success && (i.success(r.list), 
        t("本地缓存分类列表")) : c.client.request({
            url: "d=wxapi&c=forum_block&m=config",
            data: {
                configtype: i.key
            },
            success: function(e) {
                var o = e.data, c = {};
                c.time = s, c.list = o, wx.setStorageSync(n, c), t("服务器获取分类列表"), "function" == typeof i.success && i.success(o);
            }
        });
>>>>>>> e69d8bd868f3a96d2d392bc1beba334c58671214
    }
};