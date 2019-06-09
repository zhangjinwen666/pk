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

      var c = getApp(),n = wx.getStorageSync('banner');   
      if ('object' == typeof n && (c.getCurrentTime() - (n.time || 0)) < c.catchtime) return void t("本地缓存轮播列表"),'function' == typeof f && f(n.list);
      
      u.get('index/getbanner',{},function(a){
        var l = {};
        l.time = c.getCurrentTime(),l.list = a.banner;
       
        wx.setStorageSync('banner',l),t("服务器获取轮播列表"),'function' == typeof f && f(l.list);
      })
    },
    //获取导航按钮
    queryBlockList: function(i) {
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
    //打赏条件配置，暂时不想写，后面配置吧
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
    }
};