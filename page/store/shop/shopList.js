function t(t) {
    t.setData({
        loadMoreType: !0
    });
  w.get('shopuser/index/getshopuser', { page: e, cateid: l},function(a){
    var n = t.data.shopList;
    s = parseInt(a.total), 1 == e && (n = []);
    var l =  a.shop;
    if(l.length > 0){
      n = n.concat(l);
    }
    var r = "";
    w.empty(s) ? r = "暂无更多数据" : n.length == s ? r = "暂无更多数据" : n.length < s && (r = "上啦加载更多"), 
    t.setData({
        shopList: n,
        loadMoreType: !1,
        loadText: r,
    });
  });
}

function a() {
    e = 1, n = 20, s = 0, l = "";
}

var o = getApp(), e = 1, n = 20, s = 0, l = "", w = o.requirejs('core');

Page({
    data: {
        shopList: [],
        loadMoreType: !0,
        lookMobile:0
    },
    onLoad: function(o) {
      console.log(o);
        a(), l = o.catpath, t(this);
    },
    onCallClick: function(t) {
        var a = t.currentTarget.dataset.mobie;
      var credit = this.data.lookMobile;
      credit ? wx.showModal({
        title: "提示",
        content: "注意：当前查看需" + credit + "积分。",
        success: function (ao) {
          ao.confirm && w.get('shopuser/index/lookmobile', {}, function (e) {
            console.log(e);
            if (e.error == 0) {
              wx.makePhoneCall({ 
                phoneNumber: a
              });
            } else {
              wx.showToast({
                title: e.message,
                icon: 'none',
              });
              return;
            }
          });
        }
      }) : wx.makePhoneCall({
        phoneNumber: a
      });
    },
    onPreviewMap: function(t) {
        var a = parseFloat(t.currentTarget.dataset.maplat), o = parseFloat(t.currentTarget.dataset.maplong);
        wx.openLocation({
            latitude: a,
            longitude: o
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        e = 1, t(this), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1500);
    },
    onReachBottom: function() {
        this.data.shopList.length < s && (e++, t(this));
    },
    onShareAppMessage: function() {}
});