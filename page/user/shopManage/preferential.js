// page/user/shopManage/information.js
function a(t) {
  w.get('shopuser/index/getInformation', { type: 2 }, function (e) {
    console.log(e);
    if(e.data){
      t.setData({
        brief: e.data.content,
        checkvalue: e.data.status == 0 ? false : true,
        posttext:'修改',
        textcount: e.data.content.length
      });
    }
    
  });
}

var o = getApp(), w = o.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textcount: 0,
    posttext: '提交',
    checkvalue: !1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    a(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  inputchanged: function (a) {
    this.setData({
      textcount: a.detail.value.length
    });
  },
  bindWwitchChange: function (t) {
  },
  formSubmit: function (t) {
    var i = t.detail.value;
    if (o.empty(i.content)) {
      return o.showError("请输入活动信息内容");
    }
    i.type = 2;
    w.post('shopuser/index/information', i, function (e) {
      if (e.error != 0) {
        wx.showToast({
          title: e.message,
          icon: "none",
          duration: 2e3
        });
        return;
      }
      wx.showToast({
        title: "提交成功"
      }), setTimeout(function () {
        wx.navigateBack({});
      }, 1500);
    });
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