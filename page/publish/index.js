
function n(o) {
    null == o.data ? wx.navigateTo({
        url: "/page/store/shop/shopStation"
    }) : wx.showModal({
        title: "提示",
        content: "您已入驻过店铺，点击确定进入店铺信息管理。",
        success: function(o) {
            o.confirm && wx.navigateTo({
                url: "/page/store/shop/shopStation?query=yes"
            });
        }
    });
}

var t = getApp(), e = require("../home/block.js");

Page({
    data: {
        imageHeader: ''//t.globalData.imageHeader
    },
    onLoad: function(o) {
        var n = this;
        e.queryBlockList(function(o) {
            n.setData({
                icons: o
            });
        });
    },
    onStation: function(n) {
      t.getUserInfo(function(r){
        var u = '/page/user/index';
        r.isMobile && (u = '/page/user/shopManage/shopManage'); 
          wx.navigateTo({
            url: u,
          }); 
      });
       
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});