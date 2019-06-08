var t = getApp();
var co = require("../../../utils/core.js");
Page({
  data: {},
  onLoad: function (t) {
    console.log(t);
    console.log(t), this.setData({
      close: t.close,
      text: t.text
    });
  },
  onShow: function () {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    var url = currentPage.route;
    console.log(url);
    var e = t.getCache("sysset").shopname;
    wx.setNavigationBarTitle({
      title: e || "提示"
    });


  },
  bind: function () {
    var t1 = this;
    var uinfo = t.globalData.userInfo;
    var e1 = setInterval(function () {
    wx.getSetting({
      success: function (n) {
        var a = n.authSetting["scope.userInfo"];
        a && (
          t.globalData.userInfo = true, wx.getUserInfo({
            success: function (i) {
              co.get("wxapp/auth", {
                data: i.encryptedData,
                iv: i.iv,
                sessionKey: t.globalData.sessionKey
              }, function (rs) {
                var auturl = wx.getStorageSync('auturl');
                if(auturl){

                }else{
                  auturl = '/page/home/index';
                }
                wx.removeStorageSync('auturl');
                wx.reLaunch({
                  url:auturl
                })
                // wx.navigateBack();
              });
            }
          }, clearInterval(e1)))
      }
    })}, 1e3);
  }
});