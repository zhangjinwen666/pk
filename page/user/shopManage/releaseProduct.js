function t(t) {
  w.get('shopuser/goods/getcate', { goodstype: 2 }, function (e) {
    for (var a = e.data, i = 0; i < a.length; ++i) 0 == a[i].catid && a.splice(i, 1);
    t.setData({
      deviceTypeList: a
    });
  });
}

function e(t, e) {
  return s.empty(r) ? (wx.showToast({
    title: "请选择商品类型"
  }), !1) : s.empty(t.goodsname) ? (wx.showToast({
    title: "请输入商品标题"
  }), !1) : s.empty(t.goodspricenum) ? (wx.showToast({
    title: "请输入商品售价"
  }), !1) : s.empty(t.goodsdesc) ? (wx.showToast({
    title: "请输入商品介绍"
  }), !1) : 0 != e.data.imagelist.length || (wx.showToast({
    title: "请添加商品图片"
  }), !1);
}

function a(t, e, i) {
  var o = [];
  var os = w.getUrl("util/uploader/upload", {
    file: "file"
  })
  for (var n in t) {
    var r = t[n];
    {
      if ("string" != typeof r.imageurl) {
        var u = parseInt(n) + 1;
        return wx.showLoading({
          title: i + u + "/" + t.length
        }), wx.uploadFile({
          url: os,
          filePath: r.showurl,
          name: "file",
          success: function (ss) {
            var oss = JSON.parse(ss.data);
            r.imageurl = oss.files[0].filename, a(t, e, i);
          }
        });
      }
      o.push(r.imageurl);
    }
  }
  wx.hideLoading(), "function" == typeof e && e(o.join(";"));
}

function i(t, e) {
  wx.showLoading({
    title: "上传中"
  }), t.catid = r, t.imagelist = u, t.goodstype = "2", t.goodspricetype = "0", s.empty(l) || (t.goodsid = l);
  w.post('shopuser/goods/save', t, function (t) {
    wx.hideLoading();
    if (t.error != 0) {
      s.showError(t.message);
      return;
    }
    wx.showToast({
      title: "提交成功"
    }), setTimeout(function () {
      wx.navigateBack({});
    }, 1500);
  })
  return;
}

function o(t) {
  w.get('shopuser/goods/goods_view', { goodsid: l }, function (e) {
    if (e.error != 0) {
      wx.showToast({
        title: e.message,
        icon: "none",
        duration: 2e3
      });
      setTimeout(function () {
        wx.navigateBack({});
      }, 1500);

      return;
    }
    var a = e.data, i = t.data.imagelist;
    for (var o = 0; o < a.imagelist.length; ++o) {
      i.push({
        showurl: a.imagelists[o],
        imageurl: a.imagelist[o]
      });
    }
    r = a.catid, t.setData({
      goodsDetail: a,
      catename: a.catename,
      imagelist: i
    });
  });
}

function n() {
  r = "", u = "", l = "";
}

var s = getApp(), r = "", u = "", l = "", w = s.requirejs("core"), se = (s.requirejs("icons"), s.requirejs("foxui"));

Page({
  data: {
    imagelist: [],
    deviceTypeList: [],
    buttonText: ""
  },
  onLoad: function (e) {
    n(), t(this), l = e.goodsid;
    var a = "立即发布";
    s.empty(l) || (wx.setNavigationBarTitle({
      title: "编辑商品"
    }), a = "确定修改", o(this)), this.setData({
      buttonText: a
    });
  },
  bindFormSubmit: function (t) {
    var o = t.detail.value;
    e(o, this) && a(this.data.imagelist, function (t) {
      u = t, i(o);
    }, "上传图片");
  },
  bindTypeChange: function (t) {
    var e = this.data.deviceTypeList, a = t.detail.value;
    r = e[a].id, this.setData({
      catename: e[a].catename
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
    if (i.length >= 9) return s.showMessage("不能再上传图片了"), !1;
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
  onReady: function () { },
  onShow: function () {

  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
});