function n(n) {
  w.get('member/index/credit',{page:a,type:'credit1'},function(t){
    console.log(t);
    var i = t.data;
    e = Number(t.total);
    var c = n.data.billList;
    1 == a && ( c = []);
    c = c.concat(i);
    var i = "";
    w.empty(e) ? i = "暂无更多数据" : c.length == e ? i = "暂无更多数据" : c.length < e && (i = "上啦加载更多"),
      n.setData({
        billList: c,
        loadMoreType: !1,
        loadText: i});
  });
}

function t() {
    a = 1, e = 0;
}

var o = getApp(), a = 1, e = 0, w = o.requirejs("core");

Page({
    data: {
        billList: [],
      loadMoreType:!0
    },
    onLoad: function(o) {
        t(), n(this);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
      console.log(this.data);
      e > this.data.billList.length && a++,n(this);
    },
    onShareAppMessage: function() {}
});