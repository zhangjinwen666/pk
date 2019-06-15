function e(e) {
    for (var t = {}, r = e.split(","), s = 0; s < r.length; s++) t[r[s]] = !0;
    return t;
}

function t(e) {
    return e.replace(/<\?xml.*\?>\n/, "").replace(/<.*!doctype.*\>\n/, "").replace(/<.*!DOCTYPE.*\>\n/, "");
}

function r(e) {
    return e.replace(/\r?\n+/g, "").replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<");
}

function s(e) {
    var t = [];
    if (0 == a.length || !o) return (d = {}).node = "text", d.text = e, s = [ d ];
    e = e.replace(/\[([^\[\]]+)\]/g, ":$1:");
    for (var r = new RegExp("[:]"), s = e.split(r), i = 0; i < s.length; i++) {
        var l = s[i], d = {};
        o[l] ? (d.node = "element", d.tag = "emoji", d.text = o[l], d.baseSrc = n) : (d.node = "text", 
        d.text = l), t.push(d);
    }
    return t;
}

var a = "", n = "", o = {}, i = require("./wxDiscode.js"), l = require("./htmlparser.js"), d = (e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"), 
e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")), c = e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"), u = e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"), 
e("wxxxcode-style,script,style,view,scroll-view,block"), module.exports = {
    html2json: function(e, a) {
        e = r(e = t(e)), e = i.strDiscode(e);
        var n = [], o = {
            node: a,
            nodes: [],
            images: [],
            imageUrls: []
        }, p = 0;
        return l(e, {
            start: function(e, t, r) {
                var s = {
                    node: "element",
                    tag: e
                };
                if (0 === n.length ? (s.index = p.toString(), p += 1) : (void 0 === (v = n[0]).nodes && (v.nodes = []), 
                s.index = v.index + "." + v.nodes.length), d[e] ? s.tagType = "block" : c[e] ? s.tagType = "inline" : u[e] && (s.tagType = "closeSelf"), 
                0 !== t.length && (s.attr = t.reduce(function(e, t) {
                    var r = t.name, a = t.value;
                    return "class" == r && (s.classStr = a), "style" == r && (s.styleStr = a), a.match(/ /) && (a = a.split(" ")), e[r] ? Array.isArray(e[r]) ? e[r].push(a) : e[r] = [ e[r], a ] : e[r] = a, 
                    e;
                }, {})), "img" === s.tag) {
                    s.imgIndex = o.images.length, s.attr = s.attr || {};
                    var l = s.attr.src || [];
                    "" == l[0] && l.splice(0, 1), l = i.urlToHttpUrl(l, "https"), s.attr.src = l, s.from = a, 
                    o.images.push(s), o.imageUrls.push(l);
                }
                if ("font" === s.tag) {
                    var g = [ "x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large" ], m = {
                        color: "color",
                        face: "font-family",
                        size: "font-size"
                    };
                    s.attr.style || (s.attr.style = []), s.styleStr || (s.styleStr = "");
                    for (var f in m) if (s.attr[f]) {
                        var h = "size" === f ? g[s.attr[f] - 1] : s.attr[f];
                        s.attr.style.push(m[f]), s.attr.style.push(h), s.styleStr += m[f] + ": " + h + ";";
                    }
                }
                if ("source" === s.tag && (o.source = s.attr.src), r) {
                    var v = n[0] || o;
                    void 0 === v.nodes && (v.nodes = []), v.nodes.push(s);
                } else n.unshift(s);
            },
            end: function(e) {
                var t = n.shift();
                if (t.tag !== e && console.error("invalid state: mismatch end tag"), "video" === t.tag && o.source && (t.attr.src = o.source, 
                delete o.source), 0 === n.length) o.nodes.push(t); else {
                    var r = n[0];
                    void 0 === r.nodes && (r.nodes = []), r.nodes.push(t);
                }
            },
            chars: function(e) {
                var t = {
                    node: "text",
                    text: e,
                    textArray: s(e)
                };
                if (0 === n.length) t.index = p.toString(), p += 1, o.nodes.push(t); else {
                    var r = n[0];
                    void 0 === r.nodes && (r.nodes = []), t.index = r.index + "." + r.nodes.length, 
                    r.nodes.push(t);
                }
            },
            comment: function(e) {}
        }), o;
    },
    emojisInit: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/wxParse/emojis/", r = arguments[2];
        a = e, n = t, o = r;
    }
};