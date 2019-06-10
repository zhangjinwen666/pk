function s() {
  l = "", u = "", c = "";
}
function t(t) {
  w.get('shopuser/goods/getcate', { goodstype: 1 }, function (e) {
    for (var a = e.data, i = 0; i < a.length; ++i) 0 == a[i].catid && a.splice(i, 1);
    t.setData({
      deviceTypeList: a
    });
  });
}
function n(t) {
  w.get('shopuser/goods/goods_view', { goodsid: p }, function (a) {
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
    var i = a.data,o = t.data.imagelist;
    for (var n = 0; n < i.imagelist.length; ++n) {
      o.push({
        showurl: i.imagelists[n],
        imageurl: i.imagelist[n]
      });
    }
    l = i.catid;
    t.setData({
      goodsDetail: i,
      imagelist: o,
      videolist: s,
      madedate: i.madedate,
      fromcity: i.goodsaddr,
      catename: i.catename
    }), e(t, i.catid);
  });
  return;

  r.client.request({
    url: "d=wxapi&c=mall_shop_goods&m=goods_view",
    data: {
      goodsid: p
    },
    success: function (a) {
      for (var i = a.data.goodsinfo, o = t.data.imagelist, n = 0; n < i.imagelist.length; ++n) o.push({
        showurl: r.client.getFileUrl(i.imagelist[n]),
        imageurl: i.imagelist[n]
      });
      var s = t.data.videolist;
      if (null != s && i.videolist.length > 0) for (var d = 0; d < i.videolist.length; ++d) s.push({
        tempFilePath: r.client.getFileUrl(i.videolist[d]),
        imageurl: i.videolist[d]
      });
      l = i.catid, t.setData({
        goodsDetail: i,
        imagelist: o,
        videolist: s,
        madedate: i.madedate,
        fromcity: i.goodsaddr,
        catname: i.catname
      }), e(t, i.catpath);
    }
  });
}
function e(t, e) {
  w.get('shopuser/goods/getprop',{cateid:e},function(e){
    var a = e.data, i = t.data.goodsDetail.goodsprop;
    for(var o =0; o< a.length; ++o){
      if (a[o].proptype == 'list' && (a[o].propdata = a[o].propdata.split(",")),!w.empty(p)){
        for (var n = 0; n < i.length; ++n){
          a[o].id == i[n].propid && (a[o].thisvalue = i[n].propvalue);
        }
      }
    }
    t.setData({
      propList: a
    });
  });
}

function i(t, e, a) {
  var o = [], n = "设备照片", s = w.getUrl("util/uploader/upload", {
    file: "file"
  }), d = "image";
  "vedio" == a && (n = "设备视频", s = "d=wxapi&c=common&m=video_upload", d = "video");
  for (var l in t) {
    var u = t[l];
    {
      if ("string" != typeof u.imageurl) {
        var c = parseInt(l) + 1;
        wx.showLoading({
          title: n + c + "/" + t.length
        });
        return "vedio" == a && (p = u.tempFilePath),wx.uploadFile({
          url: s,
          filePath: u.showurl,
          name: "file",
          success: function (ss) {
            var oss = JSON.parse(ss.data);
            u.imageurl = oss.files[0].filename, i(t, e, a);
          }
        });
        // var p = u.showurl;
        // return "vedio" == a && (p = u.tempFilePath), void r.client.request({
        //   url: s,
        //   method: "FILE",
        //   name: d,
        //   hideAlert: !0,
        //   filePath: p,
        //   success: function (o) {
        //     u.imageurl = o[0].data.filepath, i(t, e, a);
        //   }
        // });
      }
      o.push(u.imageurl);
    }
  }
  wx.hideLoading(), "function" == typeof e && e(o.join(";"));
}

function a(t, e) {
  if (w.empty(t.goodsname)) return wx.showToast({
    title: "请输入设备标题"
  }), !1;
  if (w.empty(l)) return wx.showToast({
    title: "请选择设备类型"
  }), !1;
  if (w.empty(t.brandname)) return wx.showToast({
    title: "请输入设备品牌"
  }), !1;
  if (w.empty(t.goodscode)) return wx.showToast({
    title: "请输入设备型号"
  }), !1;
  if (w.empty(e.data.madedate)) return wx.showToast({
    title: "请选择出厂年份"
  }), !1;
  if (w.empty(e.data.fromcity)) return wx.showToast({
    title: "请选择所在地区"
  }), !1;
  if (w.empty(t.goodspricenum)) return wx.showToast({
    title: "请填写售价"
  }), !1;
  if (w.empty(t.goodsdesc)) return wx.showToast({
    title: "请输入车况描述"
  }), !1;
  for (var a = e.data.propList, i = 0; i < a.length; ++i) if ("boolean" != a[i].proptype && w.empty(a[i].thisvalue)) return wx.showToast({
    title: "请填写" + a[i].propname
  }), !1;
  return 0 != e.data.imagelist.length || (wx.showToast({
    title: "请选择图片"
  }), !1);
}

function o(t, e) {

  wx.showLoading({
    title: "提交中"
  }), t.catid = l, t.imagelist = u, t.videolist = c, t.madedate = e.data.madedate,
    t.goodsaddr = e.data.fromcity, w.empty(p) || (t.goodsid = p);
  for (var a = e.data.propList, i = "", o = 0; o < a.length; ++o) {
    var n = a[o].thisvalue;
    "boolean" == a[o].proptype && w.empty(n) && (n = !1), i += a[o].id + ":" + n + ";";
  }
  i = i.substring(0, i.length - 1), t.goodsprop = i, t.goodstype = "1";
  w.post('shopuser/goods/save', t, function (t) {
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
  return;
    r.client.request({
      url: "d=wxapi&c=mall_shop_goods&m=save",
      data: t,
      success: function (t) {
        wx.hideLoading(), wx.showToast({
          title: "发布成功"
        }), setTimeout(function () {
          wx.navigateBack({});
        }, 1500);
      }
    });
}

var r = getApp(), d = require("../../../utils/pickerCity"),l = "", u = "", c = "", p = "", w = r.requirejs("core");
Page({
  data: {
    imagelist: [],
    videolist: [],
    regionlist: d.getRegionList(),
    regionvalue: d.regionValue,
    deviceTypeList: [],
    endDate: w.formatDate(null, "yyyy-MM-dd"),
    buttonText: ""
  },
  onLoad: function (e) {
    s(), t(this), p = e.goodsid;
    var a = "立即发布";
    w.empty(p) || (a = "确定修改", wx.setNavigationBarTitle({
      title: "编辑设备信息"
    }), n(this)), this.setData({
      buttonText: a
    });
  },
  onSubmitClick: function (t) {
    var e = t.detail.value, n = this;
    a(e, this) && (e.goodspricetype = "4", i(this.data.imagelist, function (t) {
      u = t, n.data.videolist.length > 0 ? i(n.data.videolist, function (t) {
        c = t, o(e, n);
      }, "vedio") : o(e, n);
    }, "image"));
  },
  bindWwitchChange: function (t) {
    var e = t.currentTarget.dataset.index;
    this.data.propList;
    this.data.propList[e].thisvalue = t.detail.value;
  },
  bindPropInput: function (t) {
    var e = t.currentTarget.dataset.index;
    this.data.propList;
    this.data.propList[e].thisvalue = t.detail.value;
  },
  bindPropChange: function (t) {
    var e = t.currentTarget.dataset.index, a = this.data.propList;
    a[e].thisvalue = a[e].propdata[t.detail.value], this.setData({
      propList: a
    });
  },
  bindDateChange: function (t) {
    var e = t.detail.value;
    this.setData({
      madedate: e
    });
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
  bindTypeChange: function (t) {
    var a = t.detail.value, i = this.data.deviceTypeList;
    
    this.setData({
      catename: i[a].catename
    }), l = i[a].id, e(this, i[a].id);
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
    wx.chooseVideo({
      success: function (t) {
        e.push(t), a.setData({
          videolist: e
        });
      }
    });
  },
  startPlay: function (t) {
    var e = t.currentTarget.dataset.index, a = this.data.videolist[e];
     wx.navigateTo({
      url: "../video/videoPlay?url=" + a.tempFilePath
    });
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});