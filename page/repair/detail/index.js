// page/repair/detail/index.js
function n(t){
  w.get('repair/index/repair_byid',{id:d},function(e){
    var i = e.data;
    t.setData({
      thread: i
    })
    s(t);
  })
}

function s(t){
  w.get('repair/index/getMsg',{page:l,id:d},function(e){
    console.log(e);
    var i = "", n = Number(e.total);
    var a = {}, li = t.data.list;
    l == 1 && (li = []);
    e.list || (e.list = []), e.list.length > 0 && (l++ , a.list = li.concat(e.list));
    o.empty(n) ? i = "暂无更多数据" : a.list.length == n ? i = "暂无更多数据" : a.list.length < n && (i = "上啦加载更多");
    a.loadMoreType = !1;
    a.loadText = i;
    a.total = n;
    t.setData(a);
  });
}
var o = getApp(), d = 0, w = o.requirejs('core'), l= 1, h=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadMoreType:!0,
    thread:[],
    page:1,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (t) {
    l = 1,d = t.repairid,n(this);
  },

  showCommentView: function (t) {
    var a = t.currentTarget.dataset, e = a.tousername, i = a.touserid;
    this.touserid = i, console.error(a);
    var _this = this;
    o.getUserInfo(function (t) {
      console.log(t);
      t.id == i ? wx.showActionSheet({
        itemList: ["删除"],
        itemColor: "#FF0000",
        success: function (t) {
          wx.showLoading({
            title: "正在删除"
          }), w.get('repair/index/deletemessage', { id: a.postid }, function (t) {
            //r.showMessage();
            wx.showToast({
              title: t.message,
            });
            var e = a.idx, i = _this.data.thread, ol = _this.data.list;
            console.log(ol), ol.splice(e, 1), i.postcnt = parseInt(i.postcnt) - 1, _this.setData({
              thread: i,
              list: ol
            }), wx.hideLoading();
          });

        }
      }) : s.setData({
        showCommentView: !0,
        commentplaceholder: e,
        target: e
      });
    });
  },

  commentInput: function (t) {
    this.comment = t.detail.value;
  },
  sendComment: function (t) {
    var e = this.comment;
    if (o.empty(e)) o.showError("请输入评论内容"); else {
      var i = {};
      i.threadid = d, i.message = e, i.touserid = this.touserid, wx.showLoading({
        title: "正在提交"
      });
      var _this = this;
      w.post('repair/index/sendcomment', {
        data: i
      }, function (t) {
        console.log(t);
        if (t.error != 0) {
          wx.showToast({
            title: t.message,
            icon: 'none'
          });
          return;
        }
        wx.hideLoading();
        _this.setData({
          showCommentView: !1
        });
        l = 1, s(_this);
      });
    }
  },

  hideView: function (t) {
    var a = t.currentTarget.dataset.view, e = {};
    e[a] = !1, this.setData(e);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    s(this);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})