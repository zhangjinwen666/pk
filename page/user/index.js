
function o(o) {
    a.client.request({
        url: "d=wxapi&c=auth&m=logout",
        success: function(t) {
            a.showMessage(t.message), a.setLogout(), o.setData({
                hasLogin: !1
            });
        }
    });
}

function t(o) {
    var a = wx.createAnimation({
        duration: 2e3,
        timingFunction: "linear",
        delay: 0,
        transformOrigin: "50% 50%"
    });
    a.opacity(1), a.opacity(.9), a.opacity(.8), a.opacity(.7), a.opacity(.6), a.opacity(.5), 
    a.opacity(.4), a.opacity(.3), a.opacity(.2), a.opacity(.1), a.rotate(50).step(), 
    a.opacity(.2), a.opacity(.3), a.opacity(.4), a.opacity(.5), a.opacity(.6), a.opacity(.7), 
    a.opacity(.8), a.opacity(.9), a.opacity(1), a.rotate(-50).step(), o.setData({
        anima: a.export()
    }), setTimeout(function() {
        t(o);
    }, 4200);
}

function g(t) {
  core.get('wxapp/getset', '', function (e) {
    t.setData({
      kfqrcode: e.kfqrcode,
      tel: e.tel
    });
    
  });
}
var a = getApp(),core  = require('../../utils/core');

Page({
    data: {
        tel: '--',
        hasLogin: !1,
        isHx:1,
      isKf:!1,
        userInfo: {
            nickname: "--"
        }
    },
    onLoad: function(o) {
      t(this); g(this); 
    },
  closeCall: function () {
    this.setData({ isKf: !1 });
  },
  compCall: function (e) {
    var tel = e.currentTarget.dataset.tel;
    wx.makePhoneCall({
      phoneNumber: tel,
    })
  },
  compQrcode: function (e) {
    var img = e.currentTarget.dataset.src;
    wx.showModal({
      title: '添加客服',
      content: '将客服二维码保存到手机本地，然后在使用微信扫一扫识别本地二维码加好友哦',
      success: function (r) {
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
    bindCallCustomer: function(o) {
      this.setData({ isKf: 1 });
    },
    //核销员
    isHxer:function(){
      
      var t = this;
      core.get('lottery/ishxer',{},function(r){
          t.data.tel = r.sysset.tel;
          t.setData({isHx:!r.isHx});
      })
    },
  jumpSign:function(){
    wx.navigateTo({
      url: 'sign/sign',
    });
  
  },
  openQrcode:function(){
    wx.scanCode({
      onlyFromCamera:true,
      scanType:['qrCode'],
      success:(r)=>{
        var data = r.result;
        core.post('lottery/getqrcode',{data:r.result},function(r){
            wx.showToast({
              title: r.message,
            })
        }); 
      }
    });
  },
    onReady: function() {},
    onShow: function() {
        var o = this;  
        a.getUserInfo(function(t) {
            o.setData({ 
              userInfo: t,
              hasLogin: t.isMobile,
                //退出按钮
                showOutButton: !1
            }), o.isHxer();
        });
    },
    onTapLogout: function(t) {
        o(this);
    },
    onHide: function() {
      this.setData({ isKf: !1 });
    },
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});