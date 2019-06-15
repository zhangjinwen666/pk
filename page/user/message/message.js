// page/user/message/message.js
var core = require('../../../utils/core'),page=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTarg:1,
    dataImg:'',
    list:[],
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        wx.setNavigationBarTitle({
          title: '我的抵扣券',
        }),
        this.getMyAward(this);
  },
  getMyAward:(t)=>{
    var length = t.data.list.length;
    length <= t.data.total &&  (length<=0 && (page=0),core.get('lottery/getmyquan', { page: ++page},function(a){
      for (var c in a.list) t.data.list.push(a.list[c]);
      t.setData({list:t.data.list,total:a.total});
    }));
  },
  showImg:function(a){
    
    this.setData({ dataImg: a.currentTarget.dataset.src, showTarg: !1})
  },
  hiddenImg:function(){
    this.setData({showTarg: 1,dataImg:''});
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
    this.getMyAward(this);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})