// page/tech/index.js
function t(){
  c = 0, l = 1, h = 0, p = "", d = "", catid = '',al = 1;
}

//获取产品分类
function cate(t){
  w.get('tech/index/getAllCate','',function(e){
    var a = e.data;
    if(a.length > 0){
      t.setData({ isSelect:!0,cateList:a});
    }
  });
}

//获取全部产品
function n(t){
  w.get('tech/index/getAllGood', { page: l, catid: catid},function(e){
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
  w.get('tech/index/getAllArticle',{page:al},function(e){
    var a = t.data.articleList;
    h = e.total;
    al == 1 && (a = []);
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

var o = getApp(), w = o.requirejs('core'),c = 0, l = 1,al=1, h = 0, p = "", d = "",catid='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabSelect:0,
    goodsList:[],
    articleList:[],
    loadMoreType: !0,
    showTypeSelectView:!1,
    isSelect:!1,
    cateList:[],
    name:'全部产品'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    o.getUserInfo(function (e) {
      if (!e.isMobile) {
        wx.redirectTo({
          url: "/page/user/common/login"
        });
        return;
      } else {
        t(), cate(_this), n(_this);
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onTabSelect: function (t) {
    var a = t.currentTarget.dataset.index;
    var tabSelect = this.data.tabSelect;
    if (a == tabSelect && a == 0){
      var showTypeSelectView = this.data.showTypeSelectView;
      if (showTypeSelectView){
        this.setData({ showTypeSelectView: !1 });
      }else{
        this.setData({ showTypeSelectView: !0 });
      }
    }else{
      0 == a ? (l = 1, n(this)) : 1 == a && (al = 1, s(this)), this.setData({
        tabSelect: a,
        showTypeSelectView: !1
      });
    }
    
  },

  selectType: function (t) {
    console.log(t);
    var catid = t.currentTarget.dataset.id, name = t.currentTarget.dataset.text;
    l = 1,n(this);
    this.setData({
      showTypeSelectView: !1,
      name:name
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

  onArticle:function(t){
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
    this.data.tabSelect == 1 && this.data.articleList.length < h && (al++ , s(this));
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