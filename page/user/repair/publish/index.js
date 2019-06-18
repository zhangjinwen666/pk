// page/user/repair/publish/index.js
function s() {
  l = "", u = "", c = "";
}

function a(t, e) {
  if (w.empty(t.name)) return wx.showToast({
    icon:'none',
    title: "请输入产品名称"
  }), !1;
  if (w.empty(t.code)) return wx.showToast({
    icon: 'none',
    title: "请输入产品型号"
  }), !1;
  if (w.empty(t.linkname)) return wx.showToast({
    icon: 'none',
    title: "请输入联系人"
  }), !1;
  if (w.empty(t.mobile)) return wx.showToast({
    icon: 'none',
    title: "请输入联系电话"
  }), !1;
  if (!w.isMobile(t.mobile)) return wx.showToast({
    icon: 'none',
    title: "请输入电话格式有误"
  }), !1;
  if (w.empty(e.data.fromcity)) return wx.showToast({
    icon: 'none',
    title: "请选择所在城市"
  }), !1;
  if (w.empty(t.rdesc)) return wx.showToast({
    icon: 'none',
    title: "请输入故障描述"
  }), !1;
  return 0 != e.data.imagelist.length || (wx.showToast({
    icon: 'none',
    title: "请上传图片"
  }), !1);
}

function i(t, e, a) {
  var o = [], n = "产品照片", s = w.getUrl("util/uploader/upload", {
    file: "file"
  }), d = "image";
  "vedio" == a && (n = "产品视频", s = w.getUrl("util/uploader/uploads", {
    file: "file"
  }), d = "video");
  for (var l in t) {
    var u = t[l];
    {
      if ("string" != typeof u.imageurl) {
        var c = parseInt(l) + 1;
        wx.showLoading({
          title: n + c + "/" + t.length
        });
        var p = u.showurl;
        return "vedio" == a && (p = u.tempFilePath), wx.uploadFile({
          url: s,
          filePath: p,
          name: "file",
          success: function (ss) {
            var oss = JSON.parse(ss.data);
            u.imageurl = oss.files[0].filename, i(t, e, a);
          }
        });
      }
      o.push(u.imageurl);
    }
  }
  wx.hideLoading(), "function" == typeof e && e(o.join(";"));
}

function n(t){
  w.get('repair/index/repair_byid',{id:p},function(a){
    console.log(a);
    if (a.error != 0) {
      wx.showToast({
        title: a.message,
        icon: "none",
        duration: 2e3
      });
      setTimeout(function () {
        wx.navigateBack({});
      }, 1500);

      return;
    }
    var i = a.data, o = t.data.imagelist;
    for (var n = 0; n < i.imagelist.length; ++n) {
      o.push({
        showurl: i.imagelists[n],
        imageurl: i.imagelist[n]
      });
    }
    var s = t.data.videolist;
    if (null != s && i.videolist.length > 0) for (var d = 0; d < i.videolist.length; ++d) s.push({
      tempFilePath: i.videolists[d],
      imageurl: i.videolist[d]
    });
    t.setData({
      goodsDetail: i,
      imagelist: o,
      videolist: s,
      fromcity: i.goodsaddr
    });
  });
}
function o(t, e) {
  wx.showLoading({
    title: "提交中"
  }),t.imagelist = u, t.videolist = c,
    t.goodsaddr = e.data.fromcity, w.empty(p) || (t.id = p);
  w.post('repair/index/post', t, function (t) {
    wx.hideLoading();
    if (t.error != 0) {
      r.showError(t.message);
      return;
    }
    wx.showToast({
      title: "提交成功"
    }), setTimeout(function () {
      wx.navigateBack({});
    }, 1500);
  })
}

var r = getApp(), d = require("../../../../utils/pickerCity"), l = "", u = "", c = "", p = "", w = r.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist: [],
    videolist: [],
    regionlist: d.getRegionList(),
    regionvalue: d.regionValue,
    deviceTypeList: [],
    buttonText: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e);
    s(), p = e.repairid;
    
    var a = "立即申请";
    w.empty(p) || (a = "确定修改", wx.setNavigationBarTitle({
      title: "编辑維修信息"
    }), n(this)),this.setData({
      buttonText: a
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  changeRegion: function (t) {
    var e = t.detail.value, a = (t.currentTarget.dataset.name, d.getRegionSelect(e)), i = a.value, o = a.text;
    this.setData({
      fromcityid: i,
      fromcity: o
    });
  },
  changeRegionColumn: function (t) {
    var e = t.detail.column, a = t.detail.value, i = d.pickerRegionChange(e, a), o = d.regionValue;
    this.setData({
      regionlist: i,
      regionvalue: o
    });
  },
  tapAvatarRemove: function (t) {
    var e = this, a = t.currentTarget.dataset.key, i = e.data[a], o = parseInt(t.currentTarget.dataset.index);
    if ("undefinded" != typeof (i = e.data[a])[o]) {
      i.splice(o, 1);
      var n = {};
      n[a] = i, e.setData(n);
    }
  },
  tapAvatarAdd: function (t) {
    var e = this, a = t.currentTarget.dataset.key, i = e.data[a];
    if (i.length >= 9) return r.showMessage("不能再上传图片了"), !1;
    wx.chooseImage({
      count: 9 - i.length,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: function (t) {
        var o = t.tempFilePaths;
        if (o.length > 0) for (var n = 0; n < o.length; n++) {
          var s = {};
          s.showurl = o[n], s.imageurl = null, i.push(s);
        }
        var r = {};
        r[a] = i, e.setData(r);
      }
    });
  },
  tapAvatarPreview: function (t) {
    for (var e = this, a = t.currentTarget.dataset.key, i = (e.data[a], parseInt(t.currentTarget.dataset.index)), o = e.data[a], n = "", s = [], r = 0; r < o.length; r++) s.push(o[r].showurl),
      r == i && (n = o[r].showurl);
    wx.previewImage({
      current: n,
      urls: s
    });
  },
  onVideoAdd: function (t) {
    var e = this.data.videolist, a = this;
    console.log(e);
    wx.chooseVideo({
      success: function (t) {
        console.log(t);
        e.push(t), a.setData({
          videolist: e
        });
      }
    });
  },
  onSubmitClick: function (t) {
    var e = t.detail.value, n = this;
    a(e, this) && (i(this.data.imagelist, function (t) {
      u = t, n.data.videolist.length > 0 ? i(n.data.videolist, function (t) {
        c = t, o(e, n);
      }, "vedio") : o(e, n);
    }, "image"));
  },
  startPlay: function (t) {
    var e = t.currentTarget.dataset.index, a = this.data.videolist[e];
    console.log(a);
    wx.navigateTo({
      url: "/page/user/video/videoPlay?url=" + a.tempFilePath
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