function e(e) {
    return e.wxValidate = new r.default({
        mobile: {
            required: !0,
            tel: !0
        },
        verify: {
            required: !0
        },
        worktextcount:{
          required: !0
        },
      occupation: {
        required: !0
      }
    }, {
        mobile: {
            required: "请输入手机号码"
        },
        verify: {
            required: "请输入验证码"
        },
        worktextcount: {
          required: "请输入工作经验"
        },
        occupation:{
          required: "请输入职业"
        }
    }), e.wxValidate;
}

function t(e, t) {
    var a = t.detail.value;
    console.log(a);
    if (!e.wxValidate.checkForm(t)) {
        var i = e.wxValidate.errorList[0];
        return o.showError(i.msg);
    }

    // o.client.request({
    //     url: "d=wxapi&c=login&m=login",
    //     data: a,
    //     success: function(e) {
    //         o.showMessage("登录成功"), o.setLogin(e.data), wx.navigateBack();
    //     }
    // });

  p.post("member/bind/submit", a, function (s) {
    if(s.error != 0){
      o.showError(s.message)
    }else{
      o.showMessage("绑定成功");
      o.globalData.hasLogin = true;
      wx.navigateBack();
    }
    
  })
}

function a(e) {
    var t = e.data.btnVerifyCount, i = !0, r = "获取验证码";
    t > 0 ? (r += "(" + --t + ")", setTimeout(function() {
        a(e);
    }, 1e3)) : i = !1, e.setData({
        btnVerifyCount: t,
        btnVerifyDisabled: i,
        btnVerifyText: r
    });
}

function i(e, t) {
    var i = t.detail.value.mobile, r = /^0?1[0-9][0-9]\d{8}$/;
    if (null == i || i.length < 1) return o.showError("请输入手机号码");
    if (!r.test(i)) return o.showError("手机号码格式错误");
    
    var n = {
        mobile: i
    };
    p.get("sms/changemobile", {
      mobile: i
    }, function (s) {
      0 == s.error ? (o.showMessage("短信发送成功"), e.setData({
        btnVerifyCount: 60
      }), setTimeout(function () {
        a(e);
        }, 1e3)) : o.showError(s.message);
    });
}

function g(t){
  p.get('wxapp/getset','',function(e){
    console.log(e)
    t.setData({
      logoUrl: e.logo,
      appName: e.name
    });
  });
}

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../utils/WxValidate")), o = getApp(), p = o.requirejs("core"), u = o.requirejs("foxui"), l = o.requirejs("jquery");

Page({
    data: {
        logoUrl: null,
        appName: "",
        hasLogin: !1,
        mobile: "",
        btnVerifyText: "获取验证码",
        btnVerifyDisabled: !1,
        btnVerifyCount: 0,
        worktextcount:0,
      occupation:0
    },
    onLoad: function(t) {
        var a = this;
        this.wxValidate = e(this), console.error(o.globalData.appLogo);
        var i = o.globalData.appLogo, r = o.globalData.appName;
        g(this);
        
    },
    onShow: function() {
        o.globalData.hasLogin && o.setLogout();
    },
  inputchanged: function (a) {
    if (a.currentTarget.dataset.index == 'worktextcount'){
      this.setData({
        worktextcount: a.detail.value.length
      });
    }
    if (a.currentTarget.dataset.index == 'occupation') {
      this.setData({
        occupation: a.detail.value.length
      });
    }

    
  },
    submitForm: function(e) {
      console.log(e);
        "btnsubmit" == e.detail.target.id ? t(this, e) : "btnverify" == e.detail.target.id && i(this, e);
    }
});