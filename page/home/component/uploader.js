var t = getApp();
var core = require("../../../utils/core.js");
Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        uploadtype: {
            type: String
        },
        uploadTitle: {
            type: String
        },
        maxLength: {
            type: Number,
            value: 0
        }
    },
    data: {
        list: [],
        showvideo: !1,
        imageHeader: "http://tgj168.com/static/images/mapp/common/upload/",
        showAdd: !0
    },
    methods: {
        checkAddView: function() {
            var t = this.data.maxLength;
            t > 0 && this.data.list.length >= t ? this.setData({
                showAdd: !1
            }) : this.setData({
                showAdd: !0
            });
        },
        uploadImageProgress: function(e, a) {
         
          var i = this.data.uploadtype, s = [], o = "util/uploader/upload", r = "image";
          "video" == i && (a = "设备视频", o = "index/video_upload", r = "video");
            var d = this.data.list;
            for (var l in d) {
                var n = d[l];
                {
                    if ("string" != typeof n.imageurl) {
                        var h = parseInt(l) + 1;
                        wx.showLoading({
                            title: a + h + "/" + d.length
                        });
                        var u = n.showurl;
                        "video" == i && (u = n.tempFilePath);
                        var p = this;
                        // return void t.client.request({
                        //     url: o,
                        //     method: "FILE",
                        //     name: r,
                        //     hideAlert: !0,
                        //     filePath: u,
                        //     success: function(t) {
                        //         n.imageurl = t[0].data.filepath, p.uploadImageProgress(e, a);
                        //     }
                        // });
                      return void wx.uploadFile({
                        url: core.getUrl(o,{file:"file"}),
                        filePath: u,
                        name: 'file',
                        success:function(t){
                          var json = JSON.parse(t.data); 
                          n.imageurl = json.files[0]['url'], p.uploadImageProgress(e, a);
                        }
                      })
                    }
                    s.push(n.imageurl);
                }
            }
            wx.hideLoading(), "function" == typeof e && e(s.join(";"));
        },
        uploadImage: function(e) {
            var a = this.data.uploadTitle;
            t.empty(a) && (a = "video" == this.data.uploadtype ? "视频上传" : "图片上传"), this.uploadImageProgress(e, a);
        },
        tapAvatarAdd: function(t) {
            var e = this.data.uploadtype, a = this;
            if ("image" == e) {
                var i = this.data.list, s = this.data.maxLength, o = s - i.length;
                0 == s && (o = 9), console.log("最大图片 " + o), wx.chooseImage({
                    count: o,
                    sizeType: [ "compressed" ],
                    sourceType: [ "album", "camera" ],
                    success: function(t) {
                        var e = t.tempFilePaths;
                        if (e.length > 0) for (var s = 0; s < e.length; s++) {
                            var o = {};
                            o.showurl = e[s], o.imageurl = null, i.push(o);
                        }
                        a.setData({
                            list: i
                        }), a.checkAddView();
                    }
                });
            } else if ("video" == e) {
                var r = this.data.list;
                wx.chooseVideo({
                    success: function(t) {
                        r.push(t), a.setData({
                            list: r
                        }), a.checkAddView();
                    }
                });
            }
        },
        tapAvatarRemove: function(t) {
            var e = this, a = this.data.list, i = parseInt(t.currentTarget.dataset.index);
            "undefinded" != typeof a[i] && (a.splice(i, 1), e.setData({
                list: a
            }), e.checkAddView());
        },
        tapAvatarPreview: function(t) {
            for (var e = parseInt(t.currentTarget.dataset.index), a = this.data.list, i = "", s = [], o = 0; o < a.length; o++) s.push(a[o].showurl), 
            o == e && (i = a[o].showurl);
            wx.previewImage({
                current: i,
                urls: s
            });
        },
        startPlay: function(t) {
            var e = parseInt(t.currentTarget.dataset.index), a = this.data.list[e];
            this.setData({
                showvideo: !0,
                video: a.tempFilePath
            });
        },
        stopplay: function(t) {
            this.setData({
                showvideo: !1
            });
        },
        setDefaultImage: function(e) {
            console.log("imagelist = "), console.log(e);
            var a = this.data.uploadtype, i = this;
            if ("image" == a) {
                var s = [];
                for (var o in e) {
                    var r = e[o], d = {};
                    d.showurl =r, d.imageurl = r, s.push(d);
                }
                this.setData({
                    list: s
                }), i.checkAddView();
            }
        }
    }
});