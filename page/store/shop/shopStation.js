
function t(a, e, s) {
  var i = [];
  var os = w.getUrl("util/uploader/upload", {
    file: "file"
  })
  for (var o in a) {
    var n = a[o];
    {
      if ("string" != typeof n.imageurl) {
        var r = parseInt(o) + 1;
        return wx.showLoading({
          title: s + r + "/" + a.length
        }), wx.uploadFile({
          url: os,
          filePath: n.showurl,
          name: "file",
          success: function (ss) {
            var oss = JSON.parse(ss.data);
            n.imageurl = oss.files[0].filename, t(a, e, s);
          }
        });
      }
      i.push(n.imageurl);
    }
  }
  wx.hideLoading(), "function" == typeof e && e(i.join(";"));
}

function a(t, a) {
  if (w.empty(t.shopname)){
    return h.showError("请输入店铺名称");
  }
  if (w.empty(f)) {
    return h.showError("请选择店铺分类");
  }
  if (w.empty(t.linkman)) {
    return h.showError("请输入联系人");
  }
  if (w.empty(t.shoptel)) {
    return h.showError("请输入联系电话");
  }else{
    if (!w.isMobile(t.shoptel)){
      return h.showError("电话格式错误");
    }
  }
  if (w.empty(d)) {
    return h.showError("请选择详细地址");
  }
  if ("开始时间" == a.data.shophourstart) {
    return h.showError("请选择营业开始时间");
  }
  if ("结束时间" == a.data.shophourend) {
    return h.showError("请选择营业结束时间");
  }
  if (0 == a.data.imagelist.length) {
    return h.showError("请添加门店/门头照片");
  }
  if (0 == a.data.businessList.length) {
    return h.showError("请添加营业执照");
  }
  if (0 == a.data.shopImgList.length) {
    return h.showError("请选添加店铺照片");
  }
  if (0 == a.data.userIDimg.length) {
    return h.showError("请添加身份证正面照");
  }
  if (0 == a.data.userIDimgs.length) {
    return h.showError("请添加身份证反面照");
  }
}

function e(t) {
  w.get("shopuser/index/getcate", '', function (s) {
    t.setData({
      catTree: s.data
    });
  });
}

function s(t, a) {
  t.shopavatar = m, t.imagelist = v, t.cardlist = g, t.address = d, t.maplat = c,
    t.maplong = p, t.catid = f, t.shophourstart = a.data.shophourstart, t.shophourend = a.data.shophourend,
    t.userIDimg = u, t.userIDimgs = fu;
  w.post('shopuser/index/register', t, function (s) {
    if (s.error == 0) {
      wx.showToast({
        title: "信息提交成功"
      }), null != a.data.feeConfig ? u(a, s.id) : setTimeout(function () {
        wx.navigateBack({});
      }, 1500);
    } else {
      h.showError(s.message);
    }
  });
}

function i(t, a) {
  t.shopavatar = m, t.imagelist = v, t.cardlist = g,
    t.address = d, t.maplat = c, t.maplong = p, t.catid = f, t.shophourstart = a.data.shophourstart,
    t.shophourend = a.data.shophourend, t.userIDimg = u, t.userIDimgs = fu;
  w.post('shopuser/index/save', t, function (t) {
    wx.showToast({
      title: "信息修改成功"
    }), setTimeout(function () {
      wx.navigateBack({});
    }, 1500);
  })
}

function o() {
  d = "", c = "", p = "", f = "", m = "", g = "", v = "", u = "", fu = "";
}

function n(t) {
  w.get('shopuser/index/shop_info', '', function (a) {
    if (a.data) {
      var e = a.data;
      f = e.catid, d = e.address, c = e.maplat, p = e.maplong;
      for (var s = t.data.imagelist, i = t.data.businessList, o = t.data.shopImgList, n = 0; n < e.imagelist.length; ++n) o.push({
        showurl: e.imagelists[n],
        imageurl: e.imagelist[n]
      });
      i.push({
        showurl: e.cardlists,
        imageurl: e.cardlist
      });
      s.push({
        showurl: e.shopavatars,
        imageurl: e.shopavatar
      });
      var us = t.data.userIDimg;
      var fus = t.data.userIDimgs;
      us.push({
        showurl: e.suserIDimg,
        imageurl: e.userIDimg
      });
      fus.push({
        showurl: e.suserIDimgs,
        imageurl: e.userIDimgs
      });
      t.setData({
        shopInfo: e,
        catename: e.catename,
        address: d,
        shophourstart: e.shophourstart,
        shophourend: e.shophourend,
        shopImgList: o,
        businessList: i,
        imagelist: s,
        userIDimg: us,
        userIDimgs: fus
      });
    }
  });
}

function r(t) {
  return;
  h.client.request({
    url: "d=wxapi&c=mall_user_shop&m=pay_config",
    data: {},
    success: function (a) {
      null != a.data && t.setData({
        feeConfigList: a.data
      });
    }
  });
}

function u(t, a) {
  h.client.request({
    url: "d=wxapi&c=mall_shop_pay&m=pay_save",
    data: {
      shopid: a,
      paymonth: t.data.feeConfig.configkey
    },
    success: function (t) {
      l(t);
    }
  });
}

function l(t) {
  wx.redirectTo({
    url: "/page/publish/pay?tradeid=" + t.data.tradeid + "&payamount=" + t.data.payamount
  });
}

var h = getApp(), d = "", c = "", p = "", f = "", m = "", g = "", v = "", u = "", fu = "", w = h.requirejs("core");

Page({
  data: {
    imagelist: [],
    businessList: [],
    shopImgList: [],
    catTree: [],
    userIDimg: [],
    userIDimgs: [],
    shophourstart: "开始时间",
    shophourend: "结束时间",
    buttonText: "确认入驻",
    feeConfigList: []
  },
  onLoad: function (t) {
    o(), e(this), h.empty(t.query) || (this.setData({
      buttonText: "确定修改"
    }), wx.setNavigationBarTitle({
      title: "编辑店铺信息"
    }), n(this)), r(this);
  },
  bindFeeChange: function (t) {
    var a = t.detail.value, e = this.data.feeConfigList;
    this.setData({
      feeConfig: e[a]
    });
  },
  insertShop: function (e) {
    var o = e.detail.value;
    var n = this;
    a(o, n) && t(this.data.imagelist, function (a) {
      m = a, t(n.data.businessList, function (a) {
        g = a, t(n.data.shopImgList, function (a) {
          v = a, t(n.data.userIDimg, function (a) {
            u = a, t(n.data.userIDimgs, function (t) {
              fu = t, null != n.data.shopInfo ? i(o, n) : s(o, n);
            }, "身份证反面照");
          }, "身份证正面照");
        }, "店铺照片");
      }, "营业执照");
    }, "门店照片");
  },
  onCatType: function (t) {
    var a = t.detail.value, e = this.data.catTree;
    f = e[a].id, this.setData({
      catename: e[a].catename
    });
  },
  onSartTime: function (t) {
    this.setData({
      shophourstart: t.detail.value
    });
  },
  onEndTime: function (t) {
    this.setData({
      shophourend: t.detail.value
    });
  },
  selectAddress: function (t) {
    var a = this;
    wx.chooseLocation({
      success: function (t) {
        d = t.address, c = t.latitude, p = t.longitude, a.setData({
          address: d
        });
      }
    });
  },
  tapAvatarRemove: function (t) {
    var a = this, e = t.currentTarget.dataset.key, s = a.data[e], i = parseInt(t.currentTarget.dataset.index);
    if ("undefinded" != typeof (s = a.data[e])[i]) {
      s.splice(i, 1);
      var o = {};
      o[e] = s, a.setData(o);
    }
  },
  tapAvatarAdd: function (t) {
    var a = this, e = t.currentTarget.dataset.key, s = t.currentTarget.dataset.size, i = a.data[e], o = s;
    if (i.length >= o) return h.showMessage("不能再上传图片了"), !1;
    wx.chooseImage({
      count: o - i.length,
      sizeType: ["compressed"],
      sourceType: ["album", "camera"],
      success: function (t) {
        var s = t.tempFilePaths;
        if (s.length > 0) for (var o = 0; o < s.length; o++) {
          var n = {};
          n.showurl = s[o], n.imageurl = null, i.push(n);
        }
        var r = {};
        r[e] = i, a.setData(r);
      }
    });
  },
  tapAvatarPreview: function (t) {
    for (var a = this, e = t.currentTarget.dataset.key, s = (a.data[e], parseInt(t.currentTarget.dataset.index)), i = a.data[e], o = "", n = [], r = 0; r < i.length; r++) n.push(i[r].showurl),
      r == s && (o = i[r].showurl);
    wx.previewImage({
      current: o,
      urls: n
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