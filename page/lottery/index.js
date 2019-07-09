// page/lottery/index.js

var a = getApp(), core = require('../../utils/core'),WxParse = require('../../utils/wxParse/wxParse');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backImg:'',//背景图片
    rotate:0,
    deg:45,
    //圈数
    degTotal:360*4,
    //指针累计位置
    sumDeg:0,
     list:[],
    marquee:{
        duration:5,
        width:12,
        text:""
      },
      avatar:'',
      go:0,
      checkOut:!1,
    awardRemark:1,
    showContent:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = this;
    var u = a.getCache('userinfo');
    t.setData({ avatar: u.avatarUrl, rotate:0}),
    //中奖信息
    
    t.setMesage(t),
    //奖励产品
    t.showShop(t);
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
  //获取中奖信息
  setMesage:(t)=>{
    core.get('lottery/getlog',{},(a)=>{
      console.log(a)
      var i = {};
      i.text = a.message, i.width = t.getWidth(i.text), i.duration = t.getDuration(i.width);
      t.setData({
        marquee: i,
      });
      setTimeout(()=>{
        t.setMesage(t);
      },i.duration*1000*2);
    });
    
  },
  //摇奖菜单 、抽奖次数
  showShop:(t)=>{
      core.get('lottery/getshop',{},(a)=>{
        console.log(a);
        
        wx.setNavigationBarTitle({
          title: a.bannerTitle,
        }),
       WxParse.wxParse('mingx', 'html', a.content, t,20);
          t.setData({
            list:a.list,
            deg:a.deg,
            go:a.times,
            backImg:a.backImg
          })
      });
  },
  lotsGo:function(){
   var t = this;
    t.data.checkOut ? {} : (t.setData({checkOut:1}),core.get('lottery/check',{id:t.id||0},function(a){
     if (a.error == 1) {
       wx.showModal({
         title: '抽奖次数兑换',
         content: '您当前的抽奖次数为0次，是否使用积分兑换，'+a.lottery_credit+'积分兑换1次抽奖机会',
         success:function(r){
            if (r.confirm) {
                core.get('lottery/evals',{},function(r){
                    wx.showToast({
                      title: r.message,
                      icon:'none'
                    });
                    t.setData({
                      checkOut:!1,
                      go:r.num
                    })
                })
            }else{
              t.setData({
                checkOut: !1
              })
            }
         }
       }) 
       return;
     }
     t.id = a.id;
     var degTotal = (t.data.degTotal + t.data.sumDeg + a.key * t.data.deg);
      t.setData({ rotate: degTotal, sumDeg: degTotal, go: a.go});
     var l = t.data.list,m={};
      for (var c in l) l[c]['id'] == a.id && (m = l[c]);
     console.log(a,m);
     setTimeout(()=>{
       //显示奖励
       t.setData({ checkOut: !1, awardTitle: m.title, awardImg:m.thumb, awardRemark:!1 });
     },6000);
   }));
   
    console.log('go')
  },
  goHidden:function(){
    this.setData({
      awardImg:'',
      awardTitle:'',
      awardRemark:1
    });
  },
  getWidth:(str)=>{
    return [].reduce.call(str, (pre, cur, index, arr) => {
      if (str.charCodeAt(index) > 255) {// charCode大于255是汉字
        pre++;
      } else {
        pre += 0.5;
      }
      return pre;
    }, 0);
  },
  getDuration:(a)=>{
    return   a > 20 ? (a % 10) * 5 : 5;
  },
  contentHidden:function(){
    this.setData({ showContent: 1 });
  },
  showContent:function(){
    this.setData({ showContent:!1});
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