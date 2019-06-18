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

//获取是否要扣除积分
function ck(t,e){
  w.get('tech/index/getCredit',{id:t},function(a){
    var i = a.data;
    if( i > 0){
      wx.showModal({
        title: "提示",
        content: "注意：当前查看需"+i+"积分。",
        success: function (ao) {
          ao.confirm && wx.navigateTo({
            url: "/page/tech/article/index?articleid=" + t
          });
        }
      });
    }else{
      wx.navigateTo({
        url: "/page/tech/article/index?articleid="+t
      });
    }
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
    var _this = this;
    o.getUserInfo(function (e) {
      if (!e.isMobile) {
        wx.redirectTo({
          url: "/page/user/common/login"
        });
        return;
      } else {
        t(), n(_this);
      }
    });
  },

  onArticle:function(t){
    console.log(t);
    var e = t.currentTarget.dataset.index;
    ck(e,this);
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
  onLoadMore: function (t) {
    this.data.tabSelect == 0 && this.data.shopList.length < h && (l++ , n(this));
    this.data.tabSelect == 1 && this.data.articleList.length < h && (l++ , s(this));
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