var e = require("utils/core.js");
//版本更新
function updateCopy(){
  const updateManager = wx.getUpdateManager()
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    console.log(res.hasUpdate)
  })
  updateManager.onUpdateReady(function () {
    wx.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success: function (res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate()
        }
      }
    })
  })
  updateManager.onUpdateFailed(function () {
    // 新版本下载失败
  })
}


App({
  onShow: function () {
    updateCopy();
    this.onLaunch();
   
  },
  onLaunch: function () {
    var e = this;
    wx.getSystemInfo({
      success: function (t) {
        "0" == t.model.indexOf("iPhone X") ? e.setCache("isIpx", t.model) : e.setCache("isIpx", "");
      }
    }), this.getConfig(), this.getUserInfo(function (e) { }, function (e, t) {
      var t = t ? 1 : 0, e = e || "";
      t && wx.redirectTo({
        url: "/page/message/auth/index?close=" + t + "&text=" + e
      });
    }), wx.getSystemInfo({
      success: function (t) {
        wx.setStorageSync("systemInfo", t);
        var i = t.windowWidth, o = t.windowHeight;
        e.globalData.ww = i, e.globalData.hh = o;
      }
    });
  },
  //时间
  getCurrentTime : function() {
    return Date.parse(new Date()) / 1000;
  },
  requirejs: function (e) {
    return require("utils/" + e + ".js");
  },
  getConfig: function () {
    if (null !== this.globalData.api) return {
      api: this.globalData.api,
      approot: this.globalData.approot,
      appid: this.globalData.appid
    };
    var e = wx.getExtConfigSync();
    return console.log(e), this.globalData.api = e.config.api, this.globalData.approot = e.config.approot,
      this.globalData.appid = e.config.appid, e.config;
  },
  getCache: function (e, t) {
    var i = +new Date() / 1e3, o = "";
    i = parseInt(i);
    try {
      (o = wx.getStorageSync(e + this.globalData.appid)).expire > i || 0 == o.expire ? o = o.value : (o = "",
        this.removeCache(e));
    } catch (e) {
      o = void 0 === t ? "" : t;
    }
    return o = o || "";
  },
  setCache: function (e, t, i) {
    var o = +new Date() / 1e3, n = !0, a = {
      expire: i ? o + parseInt(i) : 0,
      value: t
    };
    try {
      wx.setStorageSync(e + this.globalData.appid, a);
    } catch (e) {
      n = !1;
    }
    return n;
  },
  removeCache: function (e) {
    var t = !0;
    try {
      wx.removeStorageSync(e + this.globalData.appid);
    } catch (e) {
      t = !1;
    }
    return t;
  },
  getUserInfo: function (t, i) {
    var o = this, n = {};
    
    (n = o.getCache("userinfo")) && n.needauth ? t && "function" == typeof t && t(n) : wx.login({
      success: function (a) {
        a.code ? e.post("wxapp/login", {
          code: a.code
        }, function (a) {
          o.setCache("userinfo_openid", a.openid);
          o.globalData.sessionKey = a.session_key;
          wx.getSetting({
            success: function (rs) {
              var a = rs.authSetting["scope.userInfo"];
              if (!a) {
                return typeof i == 'function' && i(o.closetext, !0);
              }
            }
          });
          a.error ? e.alert("获取用户登录态失败:" + a.message) : a.isclose && i && "function" == typeof i ? i(a.closetext, !0): wx.getUserInfo({
            success: function (i) {
              n = i.userInfo, e.get("wxapp/auth", {
                data: i.encryptedData,
                iv: i.iv, 
                sessionKey: a.session_key
              }, function (e) {
                o.globalData.hasLogin = e.isMobile, o.globalData.userId = e.id, n.hasLogin = 1, n.isMobile = e.isMobile, n.isHx = e.isHx, i.userInfo.openid = e.openId, i.userInfo.id = e.id, i.userInfo.uniacid = e.uniacid, i.userInfo.isMobile = e.isMobile, i.userInfo.nickName = e.nickName,i.userInfo.avatarUrl = e.avatarUrl,i.needauth = 0, o.setCache("userinfo", i.userInfo, 7200), o.setCache("userinfo_openid", i.userInfo.openid),
                  o.setCache('COOKIE','PHPSESSID='+i.userInfo.openid),o.setCache("userinfo_id", e.id), o.getSet(), t && "function" == typeof t && t(n);
              });
            },
            fail: function () {
              e.get("wxapp/check", {
                openid: a.openid
              }, function (e) { 
                 o.setCache("userinfo", e, 7200), o.setCache("userinfo_openid", a.openid),
                  o.setCache("userinfo_id", a.id), o.getSet(), t && "function" == typeof t && t(n);
              });
            }
          });
        }) : e.alert("获取用户登录态失败:" + a.errMsg);
      },
      fail: function () {
        e.alert("获取用户信息失败!");
      }
    });
  },
  getSet: function () {
    var t = this, i = t.getCache("cacheset");
    "" == i && setTimeout(function () {
      e.get("cacheset", {
        version: i.version
      }, function (e) {
        console.log(e), e.update && t.setCache("cacheset", e.data);
      });
    }, 10);
  },
  url: function (e) {
    e = e || {};
    var t = {}, i = "", o = "", n = this.getCache("usermid");
    i = e.mid || "", o = e.merchid || "", "" != n ? ("" != n.mid && void 0 !== n.mid || (t.mid = i),
      "" != n.merchid && void 0 !== n.merchid || (t.merchid = o)) : (t.mid = i, t.merchid = o),
      this.setCache("usermid", t, 7200);
  },
  impower: function (e, t, i) {
    wx.getSetting({
      success: function (o) {
        console.log(o), o.authSetting["scope." + e] || wx.showModal({
          title: "用户未授权",
          content: "您点击了拒绝授权，暂时无法" + t + "，点击去设置可重新获取授权喔~",
          confirmText: "去设置",
          success: function (e) {
            e.confirm ? wx.openSetting({
              success: function (e) { }
            }) : "route" == i ? wx.switchTab({
              url: "/page/home/index"
            }) : "details" == i || wx.navigateTo({
              url: "/page/home/index"
            });
          }
        });
      }
    });
  },
  showMessage:(m)=>{
    wx.showToast({
      title: m,
      icon:'none'
    })
  },
  empty:function(v){
    return !v || v == 'undefined' || v == '';
  },
  showError : function(m){
      e.alert(m);
  },
  //缓存时间单位：秒
  catchtime: 0,
  globalData: {
    appid: "wx4f6313242198e512",
    api: "https://pkkj.gdtygsc.com/app/ewei_shopv2_api.php?i=1",
    approot: "https://pkkj.gdtygsc.com/addons/ewei_shopv2/",
    userInfo: "",
    hasLogin:!1,
    sessionKey: ""
  }
});