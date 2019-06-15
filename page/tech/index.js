// page/tech/index.js
function t(){
  c = 0, l = 1, h = 0, p = "", d = "";
}

//获取全部产品
function n(t){
  w.get('tech/index/getAllGoods',{page:l},function(e){
    var a = t.data.goodsList;
    h = e.total;
    l == 1 && (a = []);
    var r = e.goods;
    if(r.length > 0){
      a = a.concat(r);
    }
    var i = "";
    w.empty(h) ? i = "暂无更多数据" : a.length == h ? i = "暂无更多数据" : a.length < h && (i = "上啦加载更多"),
      t.setData({
        goodsList: a,
        loadMoreType: !1,
        loadText: i
      });
  });
}

//获取所有的文章
function s(t){
  w.get('tech/index/getAllArticle',{page:l},function(e){
    console.log(e);
    var a = t.data.articleList;
    h = e.total;
    l == 1 && (a = []);
    var r = e.articles;
    if (r.length > 0) {
      a = a.concat(r);
    }
    var i = "";
    w.empty(h) ? i = "暂无更多数据" : a.length == h ? i = "暂无更多数据" : a.length < h && (i = "上啦加载更多"),
      t.setData({
        articleList: a,
        loadMoreType: !1,
        loadText: i
      });
  });
}

var o = getApp(), w = o.requirejs('core'),c = 0, l = 1, h = 0, p = "", d = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabSelect:0,
    goodsList:[],
    articleList:[],
    loadMoreType: !0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    t(),n(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onTabSelect: function (t) {
    var a = t.currentTarget.dataset.index;
    0 == a ? (l = 1, n(this)) : 1 == a && s(this), this.setData({
        tabSelect: a
      });
  },
  onTouchStart: function (t) {
  },
  onTouchEnd: function (t) {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})