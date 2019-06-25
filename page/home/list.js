//获取地理位置
function ln() {
  wx.getSetting({
    success: (res) => {
      console.log(JSON.stringify(res))
      if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
        wx.showModal({
          title: '请求授权当前位置',
          content: '需要获取您的地理位置，请确认授权',
          success: function (res) {
            if (res.cancel) {
              wx.showToast({
                title: '拒绝授权',
                icon: 'none',
                duration: 1000
              })
            } else if (res.confirm) {
              wx.openSetting({
                success: function (dataAu) {
                  if (dataAu.authSetting["scope.userLocation"] == true) {
                    wx.showToast({
                      title: '授权成功',
                      icon: 'success',
                      duration: 1000
                    })
                    getLocation();

                  } else {
                    wx.showToast({
                      title: '授权失败',
                      icon: 'none',
                      duration: 1000
                    })
                  }
                }
              })
            }
          }
        })
      } else if (res.authSetting['scope.userLocation'] == undefined) {
        getLocation()
      }
      else {
        getLocation()
      }
    }
  })
}
function getLocation() {
  wx.getLocation({
    type: 'wgs84',
    success: function(res) {
      console.log(res)
      //百度api,不想写
    },
    fail: function(res) {},
    complete: function(res) {},
  })
}

function t(t) {

    var e = t.data.headers;
    for (var o in e) {
        var s = e[o];
        s.loadstatus = 0, s.page = 0, s.list = [], s.total = 1;
    }
    a(t);
}

function e(t) {
    var e = t.data.headers[t.data.selectedIndex];
    e.loadstatus = 0, e.page = 0, e.list = [], e.total = 1, a(t);
}

function a(t) {
  
    var e = t.data.selectedIndex, a = t.data.headers, o = a[e];
    console.log(o)
    // if (t.isv) {
    //   o.loadstatus = 0;
    // }
  console.log('key=>'+o.loadstatus);
    if (0 == o.loadstatus) {
        //t.isv ? t.page++ : o.page++;
        o.page++
        var l = {};
        //所有城市 行业 岗位 年限
        l.blockid = t.blockid, l.page = o.page, l.orderby = o.orderby, console.log(l),
        core.get('index/getmsg',{
          page:o.page,
          navid:t.blockid,
          orderby:o.orderby,
          cityid:t.cityid,
          city:t.city,
          select:t.industryList
          },function(s){
            console.log(s); 
            for (var c in s.list) o.list.push(s.list[c]);
            o.total = s.total;
            o.list.length >= o.total ? o.loadstatus = 2 : o.loadstatus = 0,a[e] = o,t.setData({
              headers: a,
              callcredit: s.callcredit
            }),console.log(a);
        });
    }
}

var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, s = getApp(), core = require('../../utils/core'), g = require("../../utils/pickerCity"), gatory = require('../home/block'), y = -1, x = "",m=1;

Page({
    data: {
        headers: [ {
            title: "最新",
            orderby: ""
        }, {
            title: "最近",
            orderby: "heatnum"
        }, {
            title: "推荐",
            orderby: "postcnt"
        } ],
      searchTypeList: [{
        text: "全国",  
      }, {
        text: "行业",
        id: "1"
      }, {
        text: "岗位",
        id: "2"
      }, {
        text: "年限",
        id: "3"
      }],
      callcredit:0,
      showTypeSelectView:!1,
      regionlist: g.getRegionList(),
      regionvalue: g.regionValue,
      fromcityid: 0,
      fromcity: "全国",
      filterSelectList:[],
      filterTypeList:[],
      industry:[],
      job:[],
      work:[],
      iswork:!1,
        selectedIndex: 0
    },
    onLoad: function(e) {
        //ln();
        var d = this;
        this.blockid = e.blockid, (parseInt(this.blockid)==17 || parseInt(this.blockid)==16) && (this.isv = true,this.page=0,this.setData({iswork:1})),wx.setNavigationBarTitle({
            title: e.blockname
        }), gatory.queryIndustryJobWork(17,function(a){
                d.setData(a);
        }), t(this);
    },
  onReachBottom:function(){
    a(this);
  },
    headerClick: function(t) {
        var s = this.data.selectedIndex, l = t.currentTarget.dataset.index;
        if (console.log(s + "----" + l), this.setData({
            selectedIndex: l
        }), s == l) e(this); else {
            var d = this.data.headers[l];
            "object" == o(d.list) && 0 != d.list.length || a(this);
        }
    },
    changeData: function(t) {
        var e = t.detail.data, a = t.detail.index, o = this.data.headers;
        o[this.data.selectedIndex].list.splice(a, 1, e), t.detail.reload && this.setData({
            headers: o
        }), console.log("外面回调"), console.log(o);
    },
  changeRegion: function (t) {
    var ad = this.data.headers, e = this.data.selectedIndex, o = ad[e];
    o.list = [], o.total = 0, o.loadstatus = 0, o.page=0;

    var e = t.detail.value, ac = (t.currentTarget.dataset.name, g.getRegionSelect(e)), n = ac.value, s = ac.text;
    console.log(n,s);
    this.setData({
      fromcityid: n,
      fromcity: s
    }), x = n, m = 1,this.cityid=n,this.city=s, a(this);
  },
  changeRegionColumn: function (t) {
    var e = t.detail.column, a = t.detail.value, i = g.pickerRegionChange(e, a), n = g.regionValue;
    console.log(i,n)
    this.setData({
      regionlist: i,
      regionvalue: n
    });
  },
  showTypeSelect: function (t) {
    var e = t.currentTarget.dataset.index;
    
    if (y == e && this.data.showTypeSelectView) this.setData({
      showTypeSelectView: !1
    }); else {
      y = e;
      var a = {}, i = this.data.searchTypeList[e].id;
      a.pid = i;
      "3" == i && (a.row = this.data.work), "1" == i && (a.row = this.data.industry,
        console.log(a)), "2" == i && (a.row = this.data.job), this.setData({
          showTypeSelectView: !0,
          filterTypeList: a
        });
    }
  },
  selectType: function (t) {
    var ac = t.currentTarget.dataset.id, i = t.currentTarget.dataset.text, n = t.currentTarget.dataset.parent;
    var ad = this.data.headers, e = this.data.selectedIndex, o = ad[e];
    o.list = [], o.total = 0, o.loadstatus = 0, o.page = 0;
    if ("4" != n) {
      console.log(this.data.filterSelectList);
      for (var r = this.data.filterSelectList, c = 0; c < r.length; ++c) r[c].pid == n && r.splice(c, 1);
      "" == ac || r.push({
        id:ac,
        navname: i,
        pid: n
      }), this.setData({
        showTypeSelectView: !1,
        filterSelectList: r
        }), this.industryList = r,a(this);
    } else this.setData({
      showTypeSelectView: !1
    });
  },
  resetType: function (t) {
    this.industryList = '';

    var ad = this.data.headers, e = this.data.selectedIndex, o = ad[e];
    o.list = [], o.total = 0, o.loadstatus = 0, o.page = 0;
     this.setData({
      filterSelectList: []
    }),a(this);
  },
  deleteFilter: function (t) {
    var ad = this.data.headers, e = this.data.selectedIndex, o = ad[e];
    o.list = [], o.total = 0, o.loadstatus = 0, o.page = 0;

    var ac = t.currentTarget.dataset.id, i = t.currentTarget.dataset.text, n = t.currentTarget.dataset.parent;
    for (var r = this.data.filterSelectList, c = 0; c < r.length; ++c) r[c].pid == n && r.splice(c, 1);
    this.setData({
      filterSelectList: r
    }), this.industryList = r, a(this);
  },
  hiddenPop: function (t) {
    this.setData({
      showTypeSelectView: !1
    });
  },
    onShareAppMessage: function() {}
});