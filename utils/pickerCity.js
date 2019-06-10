var e = require("city"), i = {
  provinceList: [],
  province: {
    index: -1,
    value: 0,
    text: ""
  },
  cityList: [],
  city: {
    index: -1,
    value: 0,
    text: ""
  },
  regionSelect: [],
  regionValue: [0, 0],
  regionInit: !1,
  init: function () {
    var i = this, t = [0, 0];
    if (i.provinceList = [], i.cityList = [], void 0 !== e && e.length > 0) for (var n = 0; n < e.length; n++) i.provinceList.push({
      value: e[n].value,
      text: e[n].text
    });
    i.pickerRegionReset(t), i.regionInit = !0;
  },
  getRegionSelect: function (e) {
    return this.pickerRegionReset(e);
  },
  getRegionList: function (e) {
    var i = this;
    return i.regionValue = [0, 0], i.init(), [i.provinceList, i.cityList];
  },
  pickerRegionChange: function (e, i) {
    var t = this;
    switch (e) {
      case 0:
        t.city = {
          index: -1,
          value: 0,
          text: ""
        }, t.cityList = [];

      case 1:
        t.regionValue[e] = i, 0 == e && (t.regionValue[1] = 0);
        break;

      default:
        t.regionValue = [0, 0];
    }
    return t.pickerRegionReset(t.regionValue), [t.provinceList, t.cityList];
  },
  pickerRegionReset: function (i) {
    var t = this, n = [], c = [];
    if (void 0 !== i[0] && void 0 !== e[i[0]] && (n = e[i[0]], t.province.index != i[0] && (t.province.index = i[0],
      t.province.value = n.value, t.province.text = n.text, t.city = {
        index: -1,
        value: 0,
        text: ""
      }, t.cityList = [], i[1] = 0, void 0 !== n.children))) {
      n.children.length > 1 && t.cityList.push({
        value: 0,
        text: "全部"
      });
      for (var r = 0; r < n.children.length; r++) t.cityList.push({
        value: n.children[r].value,
        text: n.children[r].text
      });
    }
    return void 0 !== i[1] && void 0 !== t.cityList && t.cityList.length > i[1] && (c = t.cityList[i[1]],
      t.city.index != i[1] && (t.city.index = i[1], t.city.value = c.value, t.city.text = c.text)),
      t.city.value > 0 ? t.regionSelect = t.city : t.regionSelect = t.province, t.regionSelect;
  }
};

module.exports = i;