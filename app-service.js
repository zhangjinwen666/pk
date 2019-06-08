var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.5vv_20180905_syb_scopedata*/global.__wcc_version__='v0.5vv_20180905_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'listBtm'])
Z([[6],[[6],[[7],[3,'header']],[[7],[3,'headerIndex']]],[3,'list']])
Z([[7],[3,'item']])
Z([3,'page__bd'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'loadstatus']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'loadstatus']],[1,2]])
Z([[6],[[6],[[7],[3,'header']],[[7],[3,'headerIndex']]],[3,'loadstatus']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cellClick'])
Z([3,'weui-cell listCell'])
Z([3,'weui-cell_active'])
Z([[2,'=='],[[6],[[7],[3,'data']],[3,'topflag']],[1,1]])
Z([[2,'=='],[[7],[3,'mine']],[1,false]])
Z([[2,'&&'],[[2,'>'],[[6],[[6],[[7],[3,'data']],[3,'postlist']],[3,'length']],[1,0]],[[2,'=='],[[7],[3,'mine']],[1,false]]])
Z([3,'none'])
Z([3,'commentBtm'])
Z([[6],[[7],[3,'data']],[3,'postlist']])
Z([[7],[3,'this']])
Z([3,'commentClick'])
Z([3,'comment'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'postid']])
Z([[6],[[7],[3,'item']],[3,'username']])
Z([[6],[[7],[3,'item']],[3,'userid']])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'touserid']],[1,0]])
Z(z[16])
Z([[7],[3,'showCommentView']])
Z([[7],[3,'showTips']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,''])
Z([[2,'=='],[[7],[3,'loadstatus']],[1,1]])
Z([[2,'=='],[[7],[3,'loadstatus']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[7],[3,'uploadtype']],[1,'image']])
Z([3,'zhao'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([[7],[3,'showAdd']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'showvideo']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'thread']])
Z([3,'padding-bottom:90rpx'])
Z([[7],[3,'list']])
Z([[7],[3,'this']])
Z([3,'showCommentView'])
Z([3,'commentCell'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'postid']])
Z([[6],[[7],[3,'item']],[3,'userid']])
Z([[6],[[7],[3,'item']],[3,'username']])
Z([[2,'>'],[[6],[[7],[3,'item']],[3,'touserid']],[1,0]])
Z([[7],[3,'loadstatus']])
Z([[7],[3,'showCommentView']])
Z([[7],[3,'showTips']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'inputVal']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'banner']],[3,'length']],[1,0]])
Z([[7],[3,'list']])
Z([[7],[3,'this']])
Z([3,'changeData'])
Z([[7],[3,'item']])
Z([[7],[3,'index']])
Z([[7],[3,'loadstatus']])
Z([[7],[3,'fixBar']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'padding-top:102rpx'])
Z([[6],[[6],[[7],[3,'headers']],[[7],[3,'selectedIndex']]],[3,'list']])
Z([[7],[3,'this']])
Z([3,'changeData'])
Z([[7],[3,'item']])
Z([[7],[3,'index']])
Z([[6],[[6],[[7],[3,'headers']],[[7],[3,'selectedIndex']]],[3,'loadstatus']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'submitAction'])
Z([3,'button_padding_botttom'])
Z([[2,'!='],[[7],[3,'bannerIndex']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'url']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'formSubmit'])
Z([3,'weui-cells weui-cells_after-title'])
Z([3,'image'])
Z(z[2])
Z([[2,'>'],[[6],[[7],[3,'subblocks']],[3,'length']],[1,0]])
Z([[2,'&&'],[[7],[3,'isTop']],[[2,'>'],[[6],[[7],[3,'topDays']],[3,'length']],[1,0]]])
Z([[7],[3,'isTop']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'payTypeChoose'])
Z([3,'cell'])
Z([3,'money'])
Z([[2,'>'],[[7],[3,'money']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'=='],[[6],[[7],[3,'deviceInfo']],[3,'status']],[1,2]])
Z([[2,'>'],[[6],[[7],[3,'deviceList']],[3,'length']],[1,0]])
Z([[7],[3,'showEnterStatus']])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onScorll'])
Z([3,'scorllview'])
Z([3,'true'])
Z([3,'onTochend'])
Z([3,'onMove'])
Z([3,'onMoveStart'])
Z([[2,'?:'],[[7],[3,'showTop']],[1,'title2'],[1,'title']])
Z([[2,'>'],[[6],[[7],[3,'filterSelectList']],[3,'length']],[1,0]])
Z([[7],[3,'showTypeSelectView']])
Z([[7],[3,'showTop']])
Z([[7],[3,'deviceList']])
Z([3,'itemClick'])
Z([3,'item'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'commentlist']],[1,null]])
Z([3,'idx'])
Z([3,'comment'])
Z([[6],[[7],[3,'item']],[3,'commentlist']])
Z([3,'commentClick'])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'sellid']])
Z([[6],[[7],[3,'comment']],[3,'userid']])
Z([[6],[[7],[3,'comment']],[3,'username']])
Z([[2,'!='],[[6],[[7],[3,'comment']],[3,'touserid']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,2]])
Z(z[8])
Z([[7],[3,'showInput']])
Z([[7],[3,'showEnterStatus']])
Z(z[26])
Z([[7],[3,'refreshType']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'submit'])
Z([3,'weui-cells weui-cells_after-title'])
Z([[7],[3,'brandlist']])
Z([3,'zhao'])
Z([[2,'>'],[[6],[[7],[3,'imagelist']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'imagelist']],[3,'length']],[1,8]])
Z([[2,'>'],[[6],[[6],[[7],[3,'currentType']],[3,'propname']],[3,'length']],[1,0]])
Z(z[3])
Z([[2,'>'],[[6],[[7],[3,'cardlist']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'cardlist']],[3,'length']],[1,8]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'list']])
Z([3,'right'])
Z([3,'width:460rpx'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z(z[3])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,2]])
Z(z[5])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'submit'])
Z([3,'weui-cells weui-cells_after-title'])
Z([[7],[3,'brandlist']])
Z([3,'zhao'])
Z([[2,'>'],[[6],[[7],[3,'imagelist']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'imagelist']],[3,'length']],[1,9]])
Z([[2,'>'],[[6],[[6],[[7],[3,'currentType']],[3,'propname']],[3,'length']],[1,0]])
Z(z[3])
Z([[2,'>'],[[6],[[7],[3,'cardlist']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'cardlist']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[6],[[7],[3,'userInfo']],[3,'usermapaddr']],[1,null]])
Z([[7],[3,'showEnterStatus']])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onScroll'])
Z([3,'onLoadMore'])
Z([3,'scroll_view'])
Z([3,'true'])
Z([3,'onTouchEnd'])
Z([3,'onTouchStart'])
Z([[2,'>'],[[6],[[7],[3,'inputVal']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'insertShop'])
Z([3,'weui-cells weui-cells_after-title'])
Z([[2,'>'],[[6],[[7],[3,'feeConfigList']],[3,'length']],[1,0]])
Z([3,'bindFeeChange'])
Z([[7],[3,'feeConfigList']])
Z([3,'title'])
Z([[2,'!='],[[7],[3,'feeConfig']],[1,null]])
Z([[2,'=='],[[6],[[7],[3,'shopInfo']],[3,'shopstatus']],[1,'1']])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'shopInfo']],[3,'shopenddate']],[1,null]],[[2,'!='],[[6],[[7],[3,'shopInfo']],[3,'shopenddate']],[1,'']]])
Z([3,'zhao'])
Z([[2,'>'],[[6],[[7],[3,'imagelist']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'imagelist']],[3,'length']],[1,1]])
Z(z[9])
Z([[2,'>'],[[6],[[7],[3,'businessList']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'businessList']],[3,'length']],[1,1]])
Z(z[9])
Z([[2,'>'],[[6],[[7],[3,'shopImgList']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'shopImgList']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'favoriteList']])
Z([[7],[3,'this']])
Z([3,'changeData'])
Z([[7],[3,'item']])
Z([[7],[3,'index']])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showOutButton']])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'list']])
Z([[7],[3,'this']])
Z([3,'changeData'])
Z([[7],[3,'item']])
Z([[7],[3,'index']])
Z([3,'true'])
Z([[7],[3,'loadstatus']])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'onSubmitClick'])
Z([[2,'>'],[[6],[[7],[3,'propList']],[3,'length']],[1,0]])
Z([[7],[3,'propList']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'proptype']],[1,'boolean']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'proptype']],[1,'list']])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'proptype']],[1,'text']],[[2,'=='],[[6],[[7],[3,'item']],[3,'proptype']],[1,'date']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'proptype']],[1,'number']])
Z([3,'zhao'])
Z([[2,'>'],[[6],[[7],[3,'imagelist']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'imagelist']],[3,'length']],[1,9]])
Z(z[7])
Z([[2,'>'],[[6],[[7],[3,'videolist']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'videolist']],[3,'length']],[1,5]])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'bindFormSubmit'])
Z([3,'zhao'])
Z([[2,'>'],[[6],[[7],[3,'imagelist']],[3,'length']],[1,0]])
Z([[2,'<'],[[6],[[7],[3,'imagelist']],[3,'length']],[1,9]])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wxParseVideo'])
Z([3,'wxParseImg'])
Z([3,'WxEmojiView'])
Z([3,'WxParseBr'])
Z([3,'wxParse'])
Z([[7],[3,'wxParseData']])
Z([3,''])
Z([[8],'item',[[7],[3,'item']]])
Z([3,'wxParse0'])
Z(z[8])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'node']],[1,'element']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'button']])
Z([3,'item'])
Z([[6],[[7],[3,'item']],[3,'nodes']])
Z(z[6])
Z(z[7])
Z([3,'wxParse1'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'li']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'video']])
Z(z[7])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'img']])
Z(z[7])
Z(z[1])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'a']])
Z([3,'wxParseTagATap'])
Z([a,[3,'wxParse-inline '],[[6],[[7],[3,'item']],[3,'classStr']],[3,' wxParse-'],[[6],[[7],[3,'item']],[3,'tag']]])
Z([[6],[[6],[[7],[3,'item']],[3,'attr']],[3,'href']])
Z([[6],[[7],[3,'item']],[3,'styleStr']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'table']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tag']],[1,'br']])
Z(z[3])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'tagType']],[1,'block']])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[16])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'node']],[1,'text']])
Z(z[7])
Z(z[2])
Z(z[16])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse2'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[68])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[68])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse3'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[114])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[114])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse4'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[160])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[160])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse5'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[206])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[206])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse6'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[252])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[252])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse7'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[298])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[298])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse8'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[344])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[344])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse9'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[390])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[390])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse10'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[436])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[436])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse11'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[482])
Z(z[58])
Z(z[7])
Z(z[2])
Z(z[482])
Z(z[10])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z([3,'wxParse12'])
Z(z[17])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[23])
Z(z[7])
Z(z[0])
Z(z[26])
Z(z[7])
Z(z[1])
Z(z[29])
Z(z[30])
Z([a,z[31][1],z[31][2],z[31][3],z[31][4]])
Z(z[32])
Z(z[33])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[45])
Z(z[3])
Z(z[47])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[12])
Z(z[13])
Z(z[6])
Z(z[7])
Z(z[528])
Z(z[58])
Z(z[7])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./page/author/author.wxml','./page/bbq/index.wxml','./page/home/component/bbqCell.wxml','./page/home/component/loadMore.wxml','./page/home/component/uploader.wxml','./page/home/detail.wxml','./page/home/index.wxml','./page/home/list.wxml','./page/home/tool/assess.wxml','./page/home/tool/fincial.wxml','./page/home/tool/introduce.wxml','./page/publish/bbq.wxml','./page/publish/index.wxml','./page/publish/pay.wxml','./page/second/device/deviceInfo.wxml','./page/second/index.wxml','./page/second/mypublish/edit.wxml','./page/second/mypublish/pulish.wxml','./page/second/publish/publish.wxml','./page/second/user/userInfo.wxml','./page/store/index.wxml','./page/store/order/createOrder.wxml','./page/store/product/commodityDetail.wxml','./page/store/product/deviceDetail.wxml','./page/store/product/moreImg.wxml','./page/store/shop/shopInfo.wxml','./page/store/shop/shopList.wxml','./page/store/shop/shopStation.wxml','./page/user/admiration/myAdmiration.wxml','./page/user/collection/collection.wxml','./page/user/common/login.wxml','./page/user/index.wxml','./page/user/myRelease/myRelease.wxml','./page/user/order/orderList.wxml','./page/user/shopManage/myShopList.wxml','./page/user/shopManage/productManage.wxml','./page/user/shopManage/releaseDevice.wxml','./page/user/shopManage/releaseProduct.wxml','./page/user/shopManage/shopManage.wxml','./page/user/shopManage/shopOrder/shopOrderList.wxml','./page/user/video/videoPlay.wxml','./page/user/wallet/addbankcard.wxml','./page/user/wallet/billList.wxml','./page/user/wallet/recharge.wxml','./page/user/wallet/wallet.wxml','./page/user/wallet/withdrawals.wxml','./utils/wxParse/wxParse.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_n('bbqCell')
_rz(z,oJ,'data',2,hG,cF,gg)
_(oH,oJ)
var lK=_n('view')
_rz(z,lK,'class',3,hG,cF,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,4,hG,cF,gg)){aL.wxVkey=1
}
var tM=_v()
_(lK,tM)
if(_oz(z,5,hG,cF,gg)){tM.wxVkey=1
}
aL.wxXCkey=1
tM.wxXCkey=1
_(oH,lK)
return oH
}
oD.wxXCkey=4
_2z(z,1,fE,e,s,gg,oD,'item','index','')
var eN=_n('loadmore')
_rz(z,eN,'loadstatus',6,e,s,gg)
_(xC,eN)
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oR=_mz(z,'view',['catchtap',0,'class',1,'hoverClass',1],[],e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,3,e,s,gg)){fS.wxVkey=1
}
var cT=_v()
_(oR,cT)
if(_oz(z,4,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(oR,hU)
if(_oz(z,5,e,s,gg)){hU.wxVkey=1
var oV=_mz(z,'view',['catchtap',6,'class',1],[],e,s,gg)
var cW=_v()
_(oV,cW)
var oX=function(aZ,lY,t1,gg){
var b3=_mz(z,'view',['catchtap',10,'class',1,'data-idx',2,'data-postid',3,'data-target',4,'data-touserid',5],[],aZ,lY,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,16,aZ,lY,gg)){o4.wxVkey=1
}
var x5=_v()
_(b3,x5)
if(_oz(z,17,aZ,lY,gg)){x5.wxVkey=1
}
o4.wxXCkey=1
x5.wxXCkey=1
_(t1,b3)
return t1
}
cW.wxXCkey=2
_2z(z,8,oX,e,s,gg,cW,'item','index','{{this}}')
_(hU,oV)
}
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
_(r,oR)
var oP=_v()
_(r,oP)
if(_oz(z,18,e,s,gg)){oP.wxVkey=1
}
var xQ=_v()
_(r,xQ)
if(_oz(z,19,e,s,gg)){xQ.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,1,e,s,gg)){c8.wxVkey=1
}
var h9=_v()
_(f7,h9)
if(_oz(z,2,e,s,gg)){h9.wxVkey=1
}
c8.wxXCkey=1
h9.wxXCkey=1
_(r,f7)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cAB=_v()
_(r,cAB)
if(_oz(z,0,e,s,gg)){cAB.wxVkey=1
var lCB=_n('view')
_rz(z,lCB,'class',1,e,s,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,2,e,s,gg)){aDB.wxVkey=1
}
var tEB=_v()
_(lCB,tEB)
if(_oz(z,3,e,s,gg)){tEB.wxVkey=1
}
aDB.wxXCkey=1
tEB.wxXCkey=1
_(cAB,lCB)
}
else{cAB.wxVkey=2
var eFB=_n('view')
_rz(z,eFB,'class',4,e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,5,e,s,gg)){bGB.wxVkey=1
}
var oHB=_v()
_(eFB,oHB)
if(_oz(z,6,e,s,gg)){oHB.wxVkey=1
}
bGB.wxXCkey=1
oHB.wxXCkey=1
_(cAB,eFB)
}
var oBB=_v()
_(r,oBB)
if(_oz(z,7,e,s,gg)){oBB.wxVkey=1
}
cAB.wxXCkey=1
oBB.wxXCkey=1
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oJB=_v()
_(r,oJB)
if(_oz(z,0,e,s,gg)){oJB.wxVkey=1
}
var hMB=_n('view')
_rz(z,hMB,'style',1,e,s,gg)
var oNB=_v()
_(hMB,oNB)
var cOB=function(lQB,oPB,aRB,gg){
var eTB=_mz(z,'view',['bindtap',4,'class',1,'data-idx',2,'data-postid',3,'data-touserid',4,'data-tousername',5],[],lQB,oPB,gg)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,10,lQB,oPB,gg)){bUB.wxVkey=1
}
bUB.wxXCkey=1
_(aRB,eTB)
return aRB
}
oNB.wxXCkey=2
_2z(z,2,cOB,e,s,gg,oNB,'item','index','{{this}}')
var oVB=_n('loadmore')
_rz(z,oVB,'loadstatus',11,e,s,gg)
_(hMB,oVB)
_(r,hMB)
var fKB=_v()
_(r,fKB)
if(_oz(z,12,e,s,gg)){fKB.wxVkey=1
}
var cLB=_v()
_(r,cLB)
if(_oz(z,13,e,s,gg)){cLB.wxVkey=1
}
oJB.wxXCkey=1
fKB.wxXCkey=1
cLB.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oXB=_v()
_(r,oXB)
if(_oz(z,0,e,s,gg)){oXB.wxVkey=1
}
var fYB=_v()
_(r,fYB)
if(_oz(z,1,e,s,gg)){fYB.wxVkey=1
}
var h1B=_v()
_(r,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_mz(z,'bbqCell',['bindchangedata',4,'data',1,'index',2],[],o4B,c3B,gg)
_(l5B,t7B)
return l5B
}
h1B.wxXCkey=4
_2z(z,2,o2B,e,s,gg,h1B,'item','index','{{this}}')
var e8B=_n('loadmore')
_rz(z,e8B,'loadstatus',7,e,s,gg)
_(r,e8B)
var cZB=_v()
_(r,cZB)
if(_oz(z,8,e,s,gg)){cZB.wxVkey=1
}
oXB.wxXCkey=1
fYB.wxXCkey=1
cZB.wxXCkey=1
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var o0B=_n('view')
_rz(z,o0B,'style',0,e,s,gg)
var xAC=_v()
_(o0B,xAC)
var oBC=function(cDC,fCC,hEC,gg){
var cGC=_mz(z,'bbqCell',['bindchangedata',3,'data',1,'index',2],[],cDC,fCC,gg)
_(hEC,cGC)
return hEC
}
xAC.wxXCkey=4
_2z(z,1,oBC,e,s,gg,xAC,'item','index','{{this}}')
var oHC=_n('loadmore')
_rz(z,oHC,'loadstatus',6,e,s,gg)
_(o0B,oHC)
_(r,o0B)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var tKC=_mz(z,'form',['bindsubmit',0,'class',1],[],e,s,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,2,e,s,gg)){eLC.wxVkey=1
}
eLC.wxXCkey=1
_(r,tKC)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oNC=_v()
_(r,oNC)
if(_oz(z,0,e,s,gg)){oNC.wxVkey=1
}
oNC.wxXCkey=1
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oPC=_n('form')
_rz(z,oPC,'bindsubmit',0,e,s,gg)
var fQC=_n('view')
_rz(z,fQC,'class',1,e,s,gg)
var cUC=_mz(z,'uploader',['id',2,'uploadtype',1],[],e,s,gg)
_(fQC,cUC)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,4,e,s,gg)){cRC.wxVkey=1
}
var hSC=_v()
_(fQC,hSC)
if(_oz(z,5,e,s,gg)){hSC.wxVkey=1
}
var oTC=_v()
_(fQC,oTC)
if(_oz(z,6,e,s,gg)){oTC.wxVkey=1
}
cRC.wxXCkey=1
hSC.wxXCkey=1
oTC.wxXCkey=1
_(oPC,fQC)
_(r,oPC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var aXC=_mz(z,'view',['bindtap',0,'class',1,'data-paytype',1],[],e,s,gg)
var tYC=_v()
_(aXC,tYC)
if(_oz(z,3,e,s,gg)){tYC.wxVkey=1
}
tYC.wxXCkey=1
_(r,aXC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var b1C=_v()
_(r,b1C)
if(_oz(z,0,e,s,gg)){b1C.wxVkey=1
}
var o2C=_v()
_(r,o2C)
if(_oz(z,1,e,s,gg)){o2C.wxVkey=1
}
var x3C=_v()
_(r,x3C)
if(_oz(z,2,e,s,gg)){x3C.wxVkey=1
}
var o4C=_v()
_(r,o4C)
if(_oz(z,3,e,s,gg)){o4C.wxVkey=1
}
b1C.wxXCkey=1
o2C.wxXCkey=1
x3C.wxXCkey=1
o4C.wxXCkey=1
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var o0C=_mz(z,'scroll-view',['bindscroll',0,'class',1,'scrollY',1],[],e,s,gg)
var lAD=_mz(z,'view',['bindtouchend',3,'bindtouchmove',1,'bindtouchstart',2],[],e,s,gg)
var eDD=_n('view')
_rz(z,eDD,'class',6,e,s,gg)
var bED=_v()
_(eDD,bED)
if(_oz(z,7,e,s,gg)){bED.wxVkey=1
}
var oFD=_v()
_(eDD,oFD)
if(_oz(z,8,e,s,gg)){oFD.wxVkey=1
}
bED.wxXCkey=1
oFD.wxXCkey=1
_(lAD,eDD)
var aBD=_v()
_(lAD,aBD)
if(_oz(z,9,e,s,gg)){aBD.wxVkey=1
}
var xGD=_v()
_(lAD,xGD)
var oHD=function(cJD,fID,hKD,gg){
var cMD=_mz(z,'view',['bindtap',11,'class',1],[],cJD,fID,gg)
var oND=_v()
_(cMD,oND)
if(_oz(z,13,cJD,fID,gg)){oND.wxVkey=1
var aPD=_v()
_(oND,aPD)
var tQD=function(bSD,eRD,oTD,gg){
var oVD=_mz(z,'navigator',['catchtap',17,'data-index',1,'data-sellid',2,'data-touserid',3,'data-username',4],[],bSD,eRD,gg)
var fWD=_v()
_(oVD,fWD)
if(_oz(z,22,bSD,eRD,gg)){fWD.wxVkey=1
}
fWD.wxXCkey=1
_(oTD,oVD)
return oTD
}
aPD.wxXCkey=2
_2z(z,16,tQD,cJD,fID,gg,aPD,'comment','idx','')
}
var lOD=_v()
_(cMD,lOD)
if(_oz(z,23,cJD,fID,gg)){lOD.wxVkey=1
}
oND.wxXCkey=1
lOD.wxXCkey=1
_(hKD,cMD)
return hKD
}
xGD.wxXCkey=2
_2z(z,10,oHD,e,s,gg,xGD,'item','index','')
var tCD=_v()
_(lAD,tCD)
if(_oz(z,24,e,s,gg)){tCD.wxVkey=1
}
aBD.wxXCkey=1
tCD.wxXCkey=1
_(o0C,lAD)
_(r,o0C)
var c6C=_v()
_(r,c6C)
if(_oz(z,25,e,s,gg)){c6C.wxVkey=1
}
var h7C=_v()
_(r,h7C)
if(_oz(z,26,e,s,gg)){h7C.wxVkey=1
}
var o8C=_v()
_(r,o8C)
if(_oz(z,27,e,s,gg)){o8C.wxVkey=1
}
var c9C=_v()
_(r,c9C)
if(_oz(z,28,e,s,gg)){c9C.wxVkey=1
}
c6C.wxXCkey=1
h7C.wxXCkey=1
o8C.wxXCkey=1
c9C.wxXCkey=1
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var hYD=_n('form')
_rz(z,hYD,'bindsubmit',0,e,s,gg)
var oZD=_n('view')
_rz(z,oZD,'class',1,e,s,gg)
var c1D=_v()
_(oZD,c1D)
if(_oz(z,2,e,s,gg)){c1D.wxVkey=1
}
var l3D=_n('view')
_rz(z,l3D,'class',3,e,s,gg)
var a4D=_v()
_(l3D,a4D)
if(_oz(z,4,e,s,gg)){a4D.wxVkey=1
}
var t5D=_v()
_(l3D,t5D)
if(_oz(z,5,e,s,gg)){t5D.wxVkey=1
}
a4D.wxXCkey=1
t5D.wxXCkey=1
_(oZD,l3D)
var o2D=_v()
_(oZD,o2D)
if(_oz(z,6,e,s,gg)){o2D.wxVkey=1
var e6D=_n('view')
_rz(z,e6D,'class',7,e,s,gg)
var b7D=_v()
_(e6D,b7D)
if(_oz(z,8,e,s,gg)){b7D.wxVkey=1
}
var o8D=_v()
_(e6D,o8D)
if(_oz(z,9,e,s,gg)){o8D.wxVkey=1
}
b7D.wxXCkey=1
o8D.wxXCkey=1
_(o2D,e6D)
}
c1D.wxXCkey=1
o2D.wxXCkey=1
_(hYD,oZD)
_(r,hYD)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var o0D=_v()
_(r,o0D)
var fAE=function(hCE,cBE,oDE,gg){
var oFE=_mz(z,'view',['class',1,'style',1],[],hCE,cBE,gg)
var tIE=_n('view')
var eJE=_v()
_(tIE,eJE)
if(_oz(z,3,hCE,cBE,gg)){eJE.wxVkey=1
}
var bKE=_v()
_(tIE,bKE)
if(_oz(z,4,hCE,cBE,gg)){bKE.wxVkey=1
}
eJE.wxXCkey=1
bKE.wxXCkey=1
_(oFE,tIE)
var lGE=_v()
_(oFE,lGE)
if(_oz(z,5,hCE,cBE,gg)){lGE.wxVkey=1
}
var aHE=_v()
_(oFE,aHE)
if(_oz(z,6,hCE,cBE,gg)){aHE.wxVkey=1
}
lGE.wxXCkey=1
aHE.wxXCkey=1
_(oDE,oFE)
return oDE
}
o0D.wxXCkey=2
_2z(z,0,fAE,e,s,gg,o0D,'item','index','')
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var xME=_n('form')
_rz(z,xME,'bindsubmit',0,e,s,gg)
var oNE=_n('view')
_rz(z,oNE,'class',1,e,s,gg)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,2,e,s,gg)){fOE.wxVkey=1
}
var hQE=_n('view')
_rz(z,hQE,'class',3,e,s,gg)
var oRE=_v()
_(hQE,oRE)
if(_oz(z,4,e,s,gg)){oRE.wxVkey=1
}
var cSE=_v()
_(hQE,cSE)
if(_oz(z,5,e,s,gg)){cSE.wxVkey=1
}
oRE.wxXCkey=1
cSE.wxXCkey=1
_(oNE,hQE)
var cPE=_v()
_(oNE,cPE)
if(_oz(z,6,e,s,gg)){cPE.wxVkey=1
var oTE=_n('view')
_rz(z,oTE,'class',7,e,s,gg)
var lUE=_v()
_(oTE,lUE)
if(_oz(z,8,e,s,gg)){lUE.wxVkey=1
}
var aVE=_v()
_(oTE,aVE)
if(_oz(z,9,e,s,gg)){aVE.wxVkey=1
}
lUE.wxXCkey=1
aVE.wxXCkey=1
_(cPE,oTE)
}
fOE.wxXCkey=1
cPE.wxXCkey=1
_(xME,oNE)
_(r,xME)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var eXE=_v()
_(r,eXE)
if(_oz(z,0,e,s,gg)){eXE.wxVkey=1
}
var bYE=_v()
_(r,bYE)
if(_oz(z,1,e,s,gg)){bYE.wxVkey=1
}
var oZE=_v()
_(r,oZE)
if(_oz(z,2,e,s,gg)){oZE.wxVkey=1
}
eXE.wxXCkey=1
bYE.wxXCkey=1
oZE.wxXCkey=1
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var o2E=_mz(z,'scroll-view',['bindscroll',0,'bindscrolltolower',1,'class',1,'scrollY',2],[],e,s,gg)
var f3E=_mz(z,'view',['bindtouchend',4,'bindtouchstart',1],[],e,s,gg)
var c4E=_v()
_(f3E,c4E)
if(_oz(z,6,e,s,gg)){c4E.wxVkey=1
}
c4E.wxXCkey=1
_(o2E,f3E)
_(r,o2E)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var eBF=_n('form')
_rz(z,eBF,'bindsubmit',0,e,s,gg)
var bCF=_n('view')
_rz(z,bCF,'class',1,e,s,gg)
var oDF=_v()
_(bCF,oDF)
if(_oz(z,2,e,s,gg)){oDF.wxVkey=1
var oFF=_mz(z,'picker',['bindchange',3,'range',1,'rangeKey',2],[],e,s,gg)
var fGF=_v()
_(oFF,fGF)
if(_oz(z,6,e,s,gg)){fGF.wxVkey=1
}
fGF.wxXCkey=1
_(oDF,oFF)
}
var xEF=_v()
_(bCF,xEF)
if(_oz(z,7,e,s,gg)){xEF.wxVkey=1
var cHF=_v()
_(xEF,cHF)
if(_oz(z,8,e,s,gg)){cHF.wxVkey=1
}
cHF.wxXCkey=1
}
oDF.wxXCkey=1
xEF.wxXCkey=1
_(eBF,bCF)
var hIF=_n('view')
_rz(z,hIF,'class',9,e,s,gg)
var oJF=_v()
_(hIF,oJF)
if(_oz(z,10,e,s,gg)){oJF.wxVkey=1
}
var cKF=_v()
_(hIF,cKF)
if(_oz(z,11,e,s,gg)){cKF.wxVkey=1
}
oJF.wxXCkey=1
cKF.wxXCkey=1
_(eBF,hIF)
var oLF=_n('view')
_rz(z,oLF,'class',12,e,s,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,13,e,s,gg)){lMF.wxVkey=1
}
var aNF=_v()
_(oLF,aNF)
if(_oz(z,14,e,s,gg)){aNF.wxVkey=1
}
lMF.wxXCkey=1
aNF.wxXCkey=1
_(eBF,oLF)
var tOF=_n('view')
_rz(z,tOF,'class',15,e,s,gg)
var ePF=_v()
_(tOF,ePF)
if(_oz(z,16,e,s,gg)){ePF.wxVkey=1
}
var bQF=_v()
_(tOF,bQF)
if(_oz(z,17,e,s,gg)){bQF.wxVkey=1
}
ePF.wxXCkey=1
bQF.wxXCkey=1
_(eBF,tOF)
_(r,eBF)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oTF=_v()
_(r,oTF)
var fUF=function(hWF,cVF,oXF,gg){
var oZF=_mz(z,'bbqCell',['bindchangedata',2,'data',1,'index',2],[],hWF,cVF,gg)
_(oXF,oZF)
return oXF
}
oTF.wxXCkey=4
_2z(z,0,fUF,e,s,gg,oTF,'item','index','{{this}}')
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var t3F=_v()
_(r,t3F)
if(_oz(z,0,e,s,gg)){t3F.wxVkey=1
}
t3F.wxXCkey=1
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var b5F=_v()
_(r,b5F)
var o6F=function(o8F,x7F,f9F,gg){
var hAG=_mz(z,'bbqCell',['bindchangedata',2,'data',1,'index',2,'mine',3],[],o8F,x7F,gg)
_(f9F,hAG)
return f9F
}
b5F.wxXCkey=4
_2z(z,0,o6F,e,s,gg,b5F,'item','index','{{this}}')
var oBG=_n('loadmore')
_rz(z,oBG,'loadstatus',6,e,s,gg)
_(r,oBG)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var tGG=_n('form')
_rz(z,tGG,'bindsubmit',0,e,s,gg)
var eHG=_v()
_(tGG,eHG)
if(_oz(z,1,e,s,gg)){eHG.wxVkey=1
var bIG=_v()
_(eHG,bIG)
var oJG=function(oLG,xKG,fMG,gg){
var hOG=_v()
_(fMG,hOG)
if(_oz(z,3,oLG,xKG,gg)){hOG.wxVkey=1
}
var oPG=_v()
_(fMG,oPG)
if(_oz(z,4,oLG,xKG,gg)){oPG.wxVkey=1
}
var cQG=_v()
_(fMG,cQG)
if(_oz(z,5,oLG,xKG,gg)){cQG.wxVkey=1
}
var oRG=_v()
_(fMG,oRG)
if(_oz(z,6,oLG,xKG,gg)){oRG.wxVkey=1
}
hOG.wxXCkey=1
oPG.wxXCkey=1
cQG.wxXCkey=1
oRG.wxXCkey=1
return fMG
}
bIG.wxXCkey=2
_2z(z,2,oJG,e,s,gg,bIG,'item','index','')
}
var lSG=_n('view')
_rz(z,lSG,'class',7,e,s,gg)
var aTG=_v()
_(lSG,aTG)
if(_oz(z,8,e,s,gg)){aTG.wxVkey=1
}
var tUG=_v()
_(lSG,tUG)
if(_oz(z,9,e,s,gg)){tUG.wxVkey=1
}
aTG.wxXCkey=1
tUG.wxXCkey=1
_(tGG,lSG)
var eVG=_n('view')
_rz(z,eVG,'class',10,e,s,gg)
var bWG=_v()
_(eVG,bWG)
if(_oz(z,11,e,s,gg)){bWG.wxVkey=1
}
var oXG=_v()
_(eVG,oXG)
if(_oz(z,12,e,s,gg)){oXG.wxVkey=1
}
bWG.wxXCkey=1
oXG.wxXCkey=1
_(tGG,eVG)
eHG.wxXCkey=1
_(r,tGG)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var oZG=_n('form')
_rz(z,oZG,'bindsubmit',0,e,s,gg)
var f1G=_n('view')
_rz(z,f1G,'class',1,e,s,gg)
var c2G=_v()
_(f1G,c2G)
if(_oz(z,2,e,s,gg)){c2G.wxVkey=1
}
var h3G=_v()
_(f1G,h3G)
if(_oz(z,3,e,s,gg)){h3G.wxVkey=1
}
c2G.wxXCkey=1
h3G.wxXCkey=1
_(oZG,f1G)
_(r,oZG)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
d_[x[46]]["wxParseVideo"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParseVideo'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParseImg"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParseImg'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["WxEmojiView"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':WxEmojiView'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["WxParseBr"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':WxParseBr'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
var cI=_oz(z,8,fE,oD,gg)
var oJ=_gd(x[46],cI,e_,d_)
if(oJ){
var lK=_1z(z,7,fE,oD,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[46],43,18)
return cF
}
oB.wxXCkey=2
_2z(z,5,xC,e,s,gg,oB,'item','index','')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse0"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse0'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,10,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,11,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,16,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,15,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],56,24)
return oH
}
oD.wxXCkey=2
_2z(z,13,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,17,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,22,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,21,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],69,28)
return oR
}
eN.wxXCkey=2
_2z(z,19,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,23,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,25,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,24,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],78,20)
}
else if(_oz(z,26,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,28,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,27,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],83,20)
}
else if(_oz(z,29,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',30,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,38,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,37,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],90,24)
return cAB
}
f7.wxXCkey=2
_2z(z,35,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,39,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=function(oJB,xIB,fKB,gg){
var hMB=_v()
_(fKB,hMB)
var oNB=_oz(z,44,oJB,xIB,gg)
var cOB=_gd(x[46],oNB,e_,d_)
if(cOB){
var oPB=_1z(z,43,oJB,xIB,gg) || {}
var cur_globalf=gg.f
hMB.wxXCkey=3
cOB(oPB,oPB,hMB,gg)
gg.f=cur_globalf
}
else _w(oNB,x[46],97,24)
return fKB
}
bGB.wxXCkey=2
_2z(z,41,oHB,e,s,gg,bGB,'item','index','')
}
else if(_oz(z,45,e,s,gg)){xC.wxVkey=7
var lQB=_v()
_(xC,lQB)
var aRB=_oz(z,46,e,s,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB={}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],103,20)
}
else if(_oz(z,47,e,s,gg)){xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,52,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,51,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],109,24)
return fYB
}
bUB.wxXCkey=2
_2z(z,49,oVB,e,s,gg,bUB,'item','index','')
}
else{xC.wxVkey=9
var l5B=_v()
_(xC,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_v()
_(b9B,xAC)
var oBC=_oz(z,57,e8B,t7B,gg)
var fCC=_gd(x[46],oBC,e_,d_)
if(fCC){
var cDC=_1z(z,56,e8B,t7B,gg) || {}
var cur_globalf=gg.f
xAC.wxXCkey=3
fCC(cDC,cDC,xAC,gg)
gg.f=cur_globalf
}
else _w(oBC,x[46],117,22)
return b9B
}
l5B.wxXCkey=2
_2z(z,54,a6B,e,s,gg,l5B,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,58,e,s,gg)){oB.wxVkey=2
var hEC=_v()
_(oB,hEC)
var oFC=_oz(z,60,e,s,gg)
var cGC=_gd(x[46],oFC,e_,d_)
if(cGC){
var oHC=_1z(z,59,e,s,gg) || {}
var cur_globalf=gg.f
hEC.wxXCkey=3
cGC(oHC,oHC,hEC,gg)
gg.f=cur_globalf
}
else _w(oFC,x[46],126,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse1"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse1'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,62,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,63,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,68,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,67,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],141,24)
return oH
}
oD.wxXCkey=2
_2z(z,65,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,69,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,74,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,73,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],154,28)
return oR
}
eN.wxXCkey=2
_2z(z,71,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,75,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,77,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,76,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],163,20)
}
else if(_oz(z,78,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,80,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,79,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],168,20)
}
else if(_oz(z,81,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',82,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,90,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,89,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],175,24)
return cAB
}
f7.wxXCkey=2
_2z(z,87,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,91,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,92,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],181,20)
}
else if(_oz(z,93,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,98,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,97,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],187,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,95,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,103,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,102,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],195,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,100,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,104,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,106,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,105,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],204,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse2"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse2'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,108,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,109,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,114,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,113,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],218,24)
return oH
}
oD.wxXCkey=2
_2z(z,111,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,115,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,120,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,119,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],231,28)
return oR
}
eN.wxXCkey=2
_2z(z,117,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,121,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,123,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,122,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],240,20)
}
else if(_oz(z,124,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,126,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,125,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],245,20)
}
else if(_oz(z,127,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',128,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,136,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,135,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],252,24)
return cAB
}
f7.wxXCkey=2
_2z(z,133,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,137,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,138,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],258,20)
}
else if(_oz(z,139,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,144,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,143,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],264,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,141,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,149,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,148,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],272,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,146,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,150,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,152,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,151,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],281,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse3"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse3'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,154,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,155,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,160,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,159,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],294,24)
return oH
}
oD.wxXCkey=2
_2z(z,157,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,161,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,166,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,165,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],307,28)
return oR
}
eN.wxXCkey=2
_2z(z,163,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,167,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,169,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,168,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],316,20)
}
else if(_oz(z,170,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,172,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,171,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],321,20)
}
else if(_oz(z,173,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',174,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,182,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,181,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],328,24)
return cAB
}
f7.wxXCkey=2
_2z(z,179,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,183,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,184,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],334,20)
}
else if(_oz(z,185,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,190,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,189,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],340,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,187,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,195,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,194,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],348,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,192,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,196,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,198,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,197,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],357,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse4"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse4'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,200,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,201,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,206,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,205,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],370,24)
return oH
}
oD.wxXCkey=2
_2z(z,203,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,207,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,212,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,211,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],383,28)
return oR
}
eN.wxXCkey=2
_2z(z,209,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,213,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,215,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,214,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],392,20)
}
else if(_oz(z,216,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,218,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,217,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],397,20)
}
else if(_oz(z,219,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',220,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,228,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,227,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],404,24)
return cAB
}
f7.wxXCkey=2
_2z(z,225,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,229,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,230,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],410,20)
}
else if(_oz(z,231,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,236,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,235,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],416,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,233,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,241,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,240,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],424,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,238,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,242,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,244,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,243,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],433,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse5"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse5'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,246,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,247,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,252,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,251,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],446,24)
return oH
}
oD.wxXCkey=2
_2z(z,249,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,253,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,258,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,257,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],459,28)
return oR
}
eN.wxXCkey=2
_2z(z,255,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,259,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,261,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,260,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],468,20)
}
else if(_oz(z,262,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,264,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,263,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],473,20)
}
else if(_oz(z,265,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',266,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,274,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,273,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],480,24)
return cAB
}
f7.wxXCkey=2
_2z(z,271,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,275,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,276,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],486,20)
}
else if(_oz(z,277,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,282,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,281,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],492,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,279,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,287,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,286,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],500,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,284,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,288,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,290,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,289,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],509,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse6"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse6'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,292,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,293,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,298,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,297,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],522,24)
return oH
}
oD.wxXCkey=2
_2z(z,295,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,299,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,304,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,303,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],535,28)
return oR
}
eN.wxXCkey=2
_2z(z,301,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,305,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,307,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,306,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],544,20)
}
else if(_oz(z,308,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,310,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,309,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],549,20)
}
else if(_oz(z,311,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',312,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,320,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,319,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],556,24)
return cAB
}
f7.wxXCkey=2
_2z(z,317,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,321,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,322,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],562,20)
}
else if(_oz(z,323,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,328,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,327,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],568,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,325,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,333,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,332,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],576,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,330,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,334,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,336,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,335,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],585,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse7"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse7'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,338,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,339,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,344,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,343,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],597,24)
return oH
}
oD.wxXCkey=2
_2z(z,341,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,345,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,350,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,349,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],610,28)
return oR
}
eN.wxXCkey=2
_2z(z,347,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,351,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,353,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,352,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],619,20)
}
else if(_oz(z,354,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,356,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,355,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],624,20)
}
else if(_oz(z,357,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',358,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,366,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,365,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],631,24)
return cAB
}
f7.wxXCkey=2
_2z(z,363,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,367,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,368,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],637,20)
}
else if(_oz(z,369,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,374,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,373,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],643,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,371,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,379,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,378,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],651,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,376,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,380,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,382,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,381,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],660,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse8"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse8'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,384,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,385,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,390,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,389,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],673,24)
return oH
}
oD.wxXCkey=2
_2z(z,387,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,391,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,396,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,395,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],686,28)
return oR
}
eN.wxXCkey=2
_2z(z,393,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,397,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,399,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,398,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],695,20)
}
else if(_oz(z,400,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,402,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,401,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],700,20)
}
else if(_oz(z,403,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',404,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,412,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,411,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],707,24)
return cAB
}
f7.wxXCkey=2
_2z(z,409,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,413,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,414,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],713,20)
}
else if(_oz(z,415,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,420,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,419,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],719,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,417,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,425,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,424,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],727,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,422,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,426,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,428,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,427,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],736,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse9"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse9'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,430,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,431,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,436,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,435,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],749,24)
return oH
}
oD.wxXCkey=2
_2z(z,433,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,437,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,442,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,441,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],762,28)
return oR
}
eN.wxXCkey=2
_2z(z,439,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,443,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,445,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,444,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],771,20)
}
else if(_oz(z,446,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,448,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,447,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],776,20)
}
else if(_oz(z,449,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',450,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,458,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,457,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],783,24)
return cAB
}
f7.wxXCkey=2
_2z(z,455,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,459,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,460,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],789,20)
}
else if(_oz(z,461,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,466,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,465,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],795,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,463,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,471,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,470,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],803,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,468,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,472,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,474,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,473,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],812,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse10"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse10'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,476,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,477,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,482,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,481,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],825,24)
return oH
}
oD.wxXCkey=2
_2z(z,479,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,483,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,488,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,487,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],838,28)
return oR
}
eN.wxXCkey=2
_2z(z,485,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,489,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,491,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,490,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],847,20)
}
else if(_oz(z,492,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,494,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,493,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],852,20)
}
else if(_oz(z,495,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',496,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,504,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,503,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],859,24)
return cAB
}
f7.wxXCkey=2
_2z(z,501,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,505,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,506,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],865,20)
}
else if(_oz(z,507,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,512,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,511,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],871,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,509,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,517,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,516,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],879,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,514,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,518,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,520,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,519,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],888,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[46]]["wxParse11"]=function(e,s,r,gg){
var z=gz$gwx_47()
var b=x[46]+':wxParse11'
r.wxVkey=b
gg.f=$gdc(f_["./utils/wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[46]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,522,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,523,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,528,hG,cF,gg)
var aL=_gd(x[46],lK,e_,d_)
if(aL){
var tM=_1z(z,527,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[46],901,24)
return oH
}
oD.wxXCkey=2
_2z(z,525,fE,e,s,gg,oD,'item','index','')
}
else if(_oz(z,529,e,s,gg)){xC.wxVkey=2
var eN=_v()
_(xC,eN)
var bO=function(xQ,oP,oR,gg){
var cT=_v()
_(oR,cT)
var hU=_oz(z,534,xQ,oP,gg)
var oV=_gd(x[46],hU,e_,d_)
if(oV){
var cW=_1z(z,533,xQ,oP,gg) || {}
var cur_globalf=gg.f
cT.wxXCkey=3
oV(cW,cW,cT,gg)
gg.f=cur_globalf
}
else _w(hU,x[46],914,28)
return oR
}
eN.wxXCkey=2
_2z(z,531,bO,e,s,gg,eN,'item','index','')
}
else if(_oz(z,535,e,s,gg)){xC.wxVkey=3
var oX=_v()
_(xC,oX)
var lY=_oz(z,537,e,s,gg)
var aZ=_gd(x[46],lY,e_,d_)
if(aZ){
var t1=_1z(z,536,e,s,gg) || {}
var cur_globalf=gg.f
oX.wxXCkey=3
aZ(t1,t1,oX,gg)
gg.f=cur_globalf
}
else _w(lY,x[46],923,20)
}
else if(_oz(z,538,e,s,gg)){xC.wxVkey=4
var e2=_v()
_(xC,e2)
var b3=_oz(z,540,e,s,gg)
var o4=_gd(x[46],b3,e_,d_)
if(o4){
var x5=_1z(z,539,e,s,gg) || {}
var cur_globalf=gg.f
e2.wxXCkey=3
o4(x5,x5,e2,gg)
gg.f=cur_globalf
}
else _w(b3,x[46],928,20)
}
else if(_oz(z,541,e,s,gg)){xC.wxVkey=5
var o6=_mz(z,'view',['bindtap',542,'class',1,'data-src',2,'style',3],[],e,s,gg)
var f7=_v()
_(o6,f7)
var c8=function(o0,h9,cAB,gg){
var lCB=_v()
_(cAB,lCB)
var aDB=_oz(z,550,o0,h9,gg)
var tEB=_gd(x[46],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,549,o0,h9,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[46],935,24)
return cAB
}
f7.wxXCkey=2
_2z(z,547,c8,e,s,gg,f7,'item','index','')
_(xC,o6)
}
else if(_oz(z,551,e,s,gg)){xC.wxVkey=6
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,552,e,s,gg)
var xIB=_gd(x[46],oHB,e_,d_)
if(xIB){
var oJB={}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[46],941,20)
}
else if(_oz(z,553,e,s,gg)){xC.wxVkey=7
var fKB=_v()
_(xC,fKB)
var cLB=function(oNB,hMB,cOB,gg){
var lQB=_v()
_(cOB,lQB)
var aRB=_oz(z,558,oNB,hMB,gg)
var tSB=_gd(x[46],aRB,e_,d_)
if(tSB){
var eTB=_1z(z,557,oNB,hMB,gg) || {}
var cur_globalf=gg.f
lQB.wxXCkey=3
tSB(eTB,eTB,lQB,gg)
gg.f=cur_globalf
}
else _w(aRB,x[46],947,24)
return cOB
}
fKB.wxXCkey=2
_2z(z,555,cLB,e,s,gg,fKB,'item','index','')
}
else{xC.wxVkey=8
var bUB=_v()
_(xC,bUB)
var oVB=function(oXB,xWB,fYB,gg){
var h1B=_v()
_(fYB,h1B)
var o2B=_oz(z,563,oXB,xWB,gg)
var c3B=_gd(x[46],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,562,oXB,xWB,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[46],955,22)
return fYB
}
bUB.wxXCkey=2
_2z(z,560,oVB,e,s,gg,bUB,'item','index','')
}
xC.wxXCkey=1
}
else if(_oz(z,564,e,s,gg)){oB.wxVkey=2
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,566,e,s,gg)
var t7B=_gd(x[46],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,565,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[46],964,18)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['page/bbq/index.json'] = {"enablePullDownRefresh":true,"navigationStyle":"custom","usingComponents":{"bbqCell":"/page/home/component/bbqCell","loadmore":"/page/home/component/loadMore"}};
		__wxAppCode__['page/bbq/index.wxml'] = $gwx( './page/bbq/index.wxml' );
		__wxAppCode__['page/home/component/bbqCell.json'] = {"component":true};
		__wxAppCode__['page/home/component/bbqCell.wxml'] = $gwx( './page/home/component/bbqCell.wxml' );
		__wxAppCode__['page/home/component/loadMore.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['page/home/component/loadMore.wxml'] = $gwx( './page/home/component/loadMore.wxml' );
		__wxAppCode__['page/home/component/uploader.json'] = {"component":true};
		__wxAppCode__['page/home/component/uploader.wxml'] = $gwx( './page/home/component/uploader.wxml' );
		__wxAppCode__['page/home/detail.json'] = {"usingComponents":{"loadmore":"/page/home/component/loadMore"}};
		__wxAppCode__['page/home/detail.wxml'] = $gwx( './page/home/detail.wxml' );
		__wxAppCode__['page/home/index.json'] = {"enablePullDownRefresh":true,"usingComponents":{"bbqCell":"/page/home/component/bbqCell","loadmore":"/page/home/component/loadMore"}};
		__wxAppCode__['page/home/index.wxml'] = $gwx( './page/home/index.wxml' );
		__wxAppCode__['page/home/list.json'] = {"usingComponents":{"bbqCell":"/page/home/component/bbqCell","loadmore":"/page/home/component/loadMore"}};
		__wxAppCode__['page/home/list.wxml'] = $gwx( './page/home/list.wxml' );
		__wxAppCode__['page/publish/bbq.json'] = {"usingComponents":{"uploader":"/page/home/component/uploader"}};
		__wxAppCode__['page/publish/bbq.wxml'] = $gwx( './page/publish/bbq.wxml' );
		__wxAppCode__['page/user/collection/collection.json'] = {"navigationBarTitleText":"我的收藏","usingComponents":{"bbqCell":"/page/home/component/bbqCell"},"enablePullDownRefresh":true};
		__wxAppCode__['page/user/collection/collection.wxml'] = $gwx( './page/user/collection/collection.wxml' );
		__wxAppCode__['page/user/myRelease/myRelease.json'] = {"enablePullDownRefresh":true,"usingComponents":{"bbqCell":"/page/home/component/bbqCell","loadmore":"/page/home/component/loadMore"}};
		__wxAppCode__['page/user/myRelease/myRelease.wxml'] = $gwx( './page/user/myRelease/myRelease.wxml' );
	
	define("page/home/block.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){console.error(t)}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=30;module.exports={queryBlockList:function(i){var c=getApp(),n=wx.getStorageSync("blocklist"),r=c.util.getTimestamp();if("object"==(void 0===n?"undefined":e(n))&&r-n.time<o)return i(n.list),void t("本地缓存分类列表");c.client.request({url:"d=wxapi&c=forum_block&m=block_top",success:function(e){var o=e.data;for(var n in o){var s=o[n];s.image=c.client.getFileUrl(s.image)}var u={};u.time=r,u.list=o,wx.setStorageSync("blocklist",u),t("服务器获取分类列表"),"function"==typeof i&&i(o)}})},querySubBlockList:function(i,c){var n=getApp();if(n.util.empty(i))"function"==typeof c&&c([]);else{var r="blockSub"+i,s=wx.getStorageSync(r),u=n.util.getTimestamp(),l=!1;"object"==(void 0===s?"undefined":e(s))?"function"==typeof c&&(u-s.time<o?(t("本地缓存子分类 "+i),c(s.list)):l=!0):l=!0,l&&n.client.request({url:"d=wxapi&c=forum_block&m=block_list",data:{parentid:i},success:function(e){var o=e.data;for(var s in o){var l=o[s];l.image=n.client.getFileUrl(l.image)}var a={};a.time=u,a.list=o,wx.setStorageSync(r,a),t("网络请求子分类 "+i),"function"==typeof c?c(e.data):console.error("分类属性查询成功没有处理")}})}},queryBlockDic:function(i){var c=getApp(),n="blockDic"+i.key,r=wx.getStorageSync(n),s=c.util.getTimestamp();"object"==(void 0===r?"undefined":e(r))&&s-r.time<o?i.success&&(i.success(r.list),t("本地缓存分类列表")):c.client.request({url:"d=wxapi&c=forum_block&m=config",data:{configtype:i.key},success:function(e){var o=e.data,c={};c.time=s,c.list=o,wx.setStorageSync(n,c),t("服务器获取分类列表"),"function"==typeof i.success&&i.success(o)}})}}; 
 			}); 
		define("utils/WxValidate.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),i=function(){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,i),Object.assign(this,{rules:e,messages:n}),this.__init()}return n(i,[{key:"__init",value:function(){this.__initMethods(),this.__initDefaults(),this.__initData()}},{key:"__initData",value:function(){this.form={},this.errorList=[]}},{key:"__initDefaults",value:function(){this.defaults={messages:{required:"这是必填字段。",email:"请输入有效的电子邮件地址。",tel:"请输入11位的手机号码。",url:"请输入有效的网址。",date:"请输入有效的日期。",dateISO:"请输入有效的日期（ISO），例如：2009-06-23，1998/01/22。",number:"请输入有效的数字。",digits:"只能输入数字。",idcard:"请输入18位的有效身份证。",equalTo:this.formatTpl("输入值必须和 {0} 相同。"),contains:this.formatTpl("输入值必须包含 {0}。"),minlength:this.formatTpl("最少要输入 {0} 个字符。"),maxlength:this.formatTpl("最多可以输入 {0} 个字符。"),rangelength:this.formatTpl("请输入长度在 {0} 到 {1} 之间的字符。"),min:this.formatTpl("请输入不小于 {0} 的数值。"),max:this.formatTpl("请输入不大于 {0} 的数值。"),range:this.formatTpl("请输入范围在 {0} 到 {1} 之间的数值。")}}}},{key:"__initMethods",value:function(){var t=this;t.methods={required:function(e,n){if(!t.depend(n))return"dependency-mismatch";if("number"==typeof e)e=e.toString();else if("boolean"==typeof e)return!0;return e.length>0},email:function(e){return t.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},tel:function(e){return t.optional(e)||/^1[34578]\d{9}$/.test(e)},url:function(e){return t.optional(e)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)},date:function(e){return t.optional(e)||!/Invalid|NaN/.test(new Date(e).toString())},dateISO:function(e){return t.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)},number:function(e){return t.optional(e)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e){return t.optional(e)||/^\d+$/.test(e)},idcard:function(e){return t.optional(e)||/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e)},equalTo:function(e,n){return t.optional(e)||e===t.scope.detail.value[n]},contains:function(e,n){return t.optional(e)||e.indexOf(n)>=0},minlength:function(e,n){return t.optional(e)||e.length>=n},maxlength:function(e,n){return t.optional(e)||e.length<=n},rangelength:function(e,n){return t.optional(e)||e.length>=n[0]&&e.length<=n[1]},min:function(e,n){return t.optional(e)||e>=n},max:function(e,n){return t.optional(e)||e<=n},range:function(e,n){return t.optional(e)||e>=n[0]&&e<=n[1]}}}},{key:"addMethod",value:function(t,e,n){this.methods[t]=e,this.defaults.messages[t]=void 0!==n?n:this.defaults.messages[t]}},{key:"isValidMethod",value:function(t){var e=[];for(var n in this.methods)n&&"function"==typeof this.methods[n]&&e.push(n);return-1!==e.indexOf(t)}},{key:"formatTpl",value:function(t,e){var n=this;return 1===arguments.length?function(){var e=Array.from(arguments);return e.unshift(t),n.formatTpl.apply(this,e)}:void 0===e?t:(arguments.length>2&&e.constructor!==Array&&(e=Array.from(arguments).slice(1)),e.constructor!==Array&&(e=[e]),e.forEach(function(e,n){t=t.replace(new RegExp("\\{"+n+"\\}","g"),function(){return e})}),t)}},{key:"depend",value:function(t){switch(void 0===t?"undefined":e(t)){case"boolean":t=t;break;case"string":t=!!t.length;break;case"function":t=t();default:t=!0}return t}},{key:"optional",value:function(t){return!this.methods.required(t)&&"dependency-mismatch"}},{key:"customMessage",value:function(t,n){var i=this.messages[t],r="object"===(void 0===i?"undefined":e(i));if(i&&r)return i[n.method]}},{key:"defaultMessage",value:function(t,n){var i=this.customMessage(t,n)||this.defaults.messages[n.method],r=void 0===i?"undefined":e(i);return"undefined"===r?i="Warning: No message defined for "+n.method+".":"function"===r&&(i=i.call(this,n.parameters)),i}},{key:"formatTplAndAdd",value:function(t,e,n){var i=this.defaultMessage(t,e);this.errorList.push({param:t,msg:i,value:n})}},{key:"checkParam",value:function(t,e,n){this.scope=n;var i=n.detail.value[t]||"";for(var r in e)if(this.isValidMethod(r)){var a={method:r,parameters:e[r]},o=this.methods[r](i,a.parameters);if("dependency-mismatch"===o)continue;if(this.setValue(t,r,o,i),!o){this.formatTplAndAdd(t,a,i);break}}}},{key:"setView",value:function(t){this.form[t]={$name:t,$valid:!0,$invalid:!1,$error:{},$success:{},$viewValue:""}}},{key:"setValue",value:function(t,e,n,i){var r=this.form[t];r.$valid=n,r.$invalid=!n,r.$error[e]=!n,r.$success[e]=n,r.$viewValue=i}},{key:"checkForm",value:function(t){this.__initData();for(var e in this.rules)this.setView(e),this.checkParam(e,this.rules[e],t);return this.valid()}},{key:"valid",value:function(){return 0===this.size()}},{key:"size",value:function(){return this.errorList.length}},{key:"validationErrors",value:function(){return this.errorList}}]),i}();exports.default=i; 
 			}); 
		define("utils/city.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=[{value:"0",text:"全国"},{value:"80",text:"北京",children:[{value:"88",text:"北京"}]},{value:"81",text:"天津",children:[{value:"89",text:"天津"}]},{value:"90",text:"河北",children:[{value:"124",text:"石家庄"},{value:"125",text:"唐山"},{value:"126",text:"秦皇岛"},{value:"127",text:"邯郸"},{value:"128",text:"邢台"},{value:"129",text:"保定"},{value:"130",text:"张家口"},{value:"131",text:"承德"},{value:"132",text:"沧州"},{value:"133",text:"廊坊"},{value:"134",text:"衡水"}]},{value:"91",text:"山西",children:[{value:"135",text:"太原"},{value:"136",text:"大同"},{value:"137",text:"阳泉"},{value:"138",text:"长治"},{value:"139",text:"晋城"},{value:"140",text:"朔州"},{value:"141",text:"晋中"},{value:"142",text:"运城"},{value:"143",text:"忻州"},{value:"144",text:"临汾"},{value:"145",text:"吕梁"}]},{value:"92",text:"内蒙古",children:[{value:"146",text:"呼和浩特"},{value:"147",text:"包头"},{value:"148",text:"乌海"},{value:"149",text:"赤峰"},{value:"150",text:"通辽"},{value:"151",text:"鄂尔多斯"},{value:"152",text:"呼伦贝尔"},{value:"153",text:"巴彦淖尔"},{value:"154",text:"乌兰察布"},{value:"155",text:"兴安盟"},{value:"156",text:"锡林郭勒"},{value:"157",text:"阿拉善"}]},{value:"93",text:"辽宁",children:[{value:"158",text:"沈阳"},{value:"159",text:"大连"},{value:"160",text:"鞍山"},{value:"161",text:"抚顺"},{value:"162",text:"本溪"},{value:"163",text:"丹东"},{value:"164",text:"锦州"},{value:"165",text:"营口"},{value:"166",text:"阜新"},{value:"167",text:"辽阳"},{value:"168",text:"盘锦"},{value:"169",text:"铁岭"},{value:"170",text:"朝阳"},{value:"171",text:"葫芦岛"}]},{value:"94",text:"吉林",children:[{value:"172",text:"长春"},{value:"173",text:"吉林"},{value:"174",text:"四平"},{value:"175",text:"辽源"},{value:"176",text:"通化"},{value:"177",text:"白山"},{value:"178",text:"松原"},{value:"179",text:"白城"},{value:"180",text:"延边"}]},{value:"95",text:"黑龙江",children:[{value:"181",text:"哈尔滨"},{value:"182",text:"齐齐哈尔"},{value:"183",text:"鸡西"},{value:"184",text:"鹤岗"},{value:"185",text:"双鸭山"},{value:"186",text:"大庆"},{value:"187",text:"伊春"},{value:"188",text:"佳木斯"},{value:"189",text:"七台河"},{value:"190",text:"牡丹江"},{value:"191",text:"黑河"},{value:"192",text:"绥化"},{value:"193",text:"大兴安岭"}]},{value:"82",text:"上海",children:[{value:"96",text:"上海"}]},{value:"97",text:"江苏",children:[{value:"195",text:"南京"},{value:"196",text:"无锡"},{value:"197",text:"徐州"},{value:"198",text:"常州"},{value:"199",text:"苏州"},{value:"200",text:"南通"},{value:"201",text:"连云港"},{value:"202",text:"淮安"},{value:"203",text:"盐城"},{value:"204",text:"扬州"},{value:"205",text:"镇江"},{value:"206",text:"泰州"},{value:"207",text:"宿迁"}]},{value:"98",text:"浙江",children:[{value:"208",text:"杭州"},{value:"209",text:"宁波"},{value:"210",text:"温州"},{value:"211",text:"嘉兴"},{value:"212",text:"湖州"},{value:"213",text:"绍兴"},{value:"214",text:"金华"},{value:"215",text:"衢州"},{value:"216",text:"舟山"},{value:"217",text:"台州"},{value:"218",text:"丽水"}]},{value:"99",text:"安徽",children:[{value:"219",text:"合肥"},{value:"220",text:"芜湖"},{value:"221",text:"蚌埠"},{value:"222",text:"淮南"},{value:"223",text:"马鞍山"},{value:"224",text:"淮北"},{value:"225",text:"铜陵"},{value:"226",text:"安庆"},{value:"227",text:"黄山"},{value:"228",text:"滁州"},{value:"229",text:"阜阳"},{value:"230",text:"宿州"},{value:"231",text:"巢湖"},{value:"232",text:"六安"},{value:"233",text:"亳州"},{value:"234",text:"池州"},{value:"235",text:"宣城"}]},{value:"100",text:"福建",children:[{value:"236",text:"福州"},{value:"237",text:"厦门"},{value:"238",text:"莆田"},{value:"239",text:"三明"},{value:"240",text:"泉州"},{value:"241",text:"漳州"},{value:"242",text:"南平"},{value:"243",text:"龙岩"},{value:"244",text:"宁德"}]},{value:"101",text:"江西",children:[{value:"245",text:"南昌"},{value:"246",text:"景德镇"},{value:"247",text:"萍乡"},{value:"248",text:"九江"},{value:"249",text:"新余"},{value:"250",text:"鹰潭"},{value:"251",text:"赣州"},{value:"252",text:"吉安"},{value:"253",text:"宜春"},{value:"254",text:"抚州"},{value:"255",text:"上饶"}]},{value:"102",text:"山东",children:[{value:"256",text:"济南"},{value:"257",text:"青岛"},{value:"258",text:"淄博"},{value:"259",text:"枣庄"},{value:"260",text:"东营"},{value:"261",text:"烟台"},{value:"262",text:"潍坊"},{value:"263",text:"济宁"},{value:"264",text:"泰安"},{value:"265",text:"威海"},{value:"266",text:"日照"},{value:"267",text:"莱芜"},{value:"268",text:"临沂"},{value:"269",text:"德州"},{value:"270",text:"聊城"},{value:"271",text:"滨州"},{value:"272",text:"荷泽"}]},{value:"103",text:"河南",children:[{value:"273",text:"郑州"},{value:"274",text:"开封"},{value:"275",text:"洛阳"},{value:"276",text:"平顶山"},{value:"277",text:"安阳"},{value:"278",text:"鹤壁"},{value:"279",text:"新乡"},{value:"280",text:"焦作"},{value:"281",text:"濮阳"},{value:"282",text:"许昌"},{value:"283",text:"漯河"},{value:"284",text:"三门峡"},{value:"285",text:"南阳"},{value:"286",text:"商丘"},{value:"287",text:"信阳"},{value:"288",text:"周口"},{value:"289",text:"驻马店"}]},{value:"104",text:"湖北",children:[{value:"290",text:"武汉"},{value:"291",text:"黄石"},{value:"292",text:"十堰"},{value:"293",text:"宜昌"},{value:"294",text:"襄樊"},{value:"295",text:"鄂州"},{value:"296",text:"荆门"},{value:"297",text:"孝感"},{value:"298",text:"荆州"},{value:"299",text:"黄冈"},{value:"300",text:"咸宁"},{value:"301",text:"随州"},{value:"302",text:"恩施"}]},{value:"105",text:"湖南",children:[{value:"304",text:"长沙"},{value:"305",text:"株洲"},{value:"306",text:"湘潭"},{value:"307",text:"衡阳"},{value:"308",text:"邵阳"},{value:"309",text:"岳阳"},{value:"310",text:"常德"},{value:"311",text:"张家界"},{value:"312",text:"益阳"},{value:"313",text:"郴州"},{value:"314",text:"永州"},{value:"315",text:"怀化"},{value:"316",text:"娄底"},{value:"317",text:"湘西"}]},{value:"106",text:"广东",children:[{value:"318",text:"广州"},{value:"319",text:"韶关"},{value:"320",text:"深圳"},{value:"321",text:"珠海"},{value:"322",text:"汕头"},{value:"323",text:"佛山"},{value:"324",text:"江门"},{value:"325",text:"湛江"},{value:"326",text:"茂名"},{value:"327",text:"肇庆"},{value:"328",text:"惠州"},{value:"329",text:"梅州"},{value:"330",text:"汕尾"},{value:"331",text:"河源"},{value:"332",text:"阳江"},{value:"333",text:"清远"},{value:"334",text:"东莞"},{value:"335",text:"中山"},{value:"336",text:"潮州"},{value:"337",text:"揭阳"},{value:"338",text:"云浮"}]},{value:"107",text:"广西",children:[{value:"339",text:"南宁"},{value:"340",text:"柳州"},{value:"341",text:"桂林"},{value:"342",text:"梧州"},{value:"343",text:"北海"},{value:"344",text:"防城港"},{value:"345",text:"钦州"},{value:"346",text:"贵港"},{value:"347",text:"玉林"},{value:"348",text:"百色"},{value:"349",text:"贺州"},{value:"350",text:"河池"},{value:"351",text:"来宾"},{value:"352",text:"崇左"}]},{value:"108",text:"海南",children:[{value:"353",text:"海口"},{value:"354",text:"三亚"}]},{value:"83",text:"重庆",children:[{value:"109",text:"重庆"}]},{value:"110",text:"四川",children:[{value:"357",text:"成都"},{value:"358",text:"自贡"},{value:"359",text:"攀枝花"},{value:"360",text:"泸州"},{value:"361",text:"德阳"},{value:"362",text:"绵阳"},{value:"363",text:"广元"},{value:"364",text:"遂宁"},{value:"365",text:"内江"},{value:"366",text:"乐山"},{value:"367",text:"南充"},{value:"368",text:"眉山"},{value:"369",text:"宜宾"},{value:"370",text:"广安"},{value:"371",text:"达州"},{value:"372",text:"雅安"},{value:"373",text:"巴中"},{value:"374",text:"资阳"},{value:"375",text:"阿坝"},{value:"376",text:"甘孜"},{value:"377",text:"凉山"}]},{value:"111",text:"贵州",children:[{value:"378",text:"贵阳"},{value:"379",text:"六盘水"},{value:"380",text:"遵义"},{value:"381",text:"安顺"},{value:"382",text:"铜仁"},{value:"383",text:"黔西南"},{value:"384",text:"毕节地区"},{value:"385",text:"黔东南"},{value:"386",text:"黔南"}]},{value:"112",text:"云南",children:[{value:"387",text:"昆明"},{value:"388",text:"曲靖"},{value:"389",text:"玉溪"},{value:"390",text:"保山"},{value:"391",text:"昭通"},{value:"392",text:"丽江"},{value:"393",text:"思茅"},{value:"394",text:"临沧"},{value:"395",text:"楚雄"},{value:"396",text:"红河"},{value:"397",text:"文山"},{value:"398",text:"西双版纳"},{value:"399",text:"大理"},{value:"400",text:"德宏"},{value:"401",text:"怒江"},{value:"402",text:"迪庆"}]},{value:"113",text:"西藏",children:[{value:"403",text:"拉萨"},{value:"404",text:"昌都"},{value:"405",text:"山南"},{value:"406",text:"日喀则"},{value:"407",text:"那曲"},{value:"408",text:"阿里"},{value:"409",text:"林芝"}]},{value:"114",text:"陕西",children:[{value:"410",text:"西安"},{value:"411",text:"铜川"},{value:"412",text:"宝鸡"},{value:"413",text:"咸阳"},{value:"414",text:"渭南"},{value:"415",text:"延安"},{value:"416",text:"汉中"},{value:"417",text:"榆林"},{value:"418",text:"安康"},{value:"419",text:"商洛"}]},{value:"115",text:"甘肃",children:[{value:"420",text:"兰州"},{value:"421",text:"嘉峪关"},{value:"422",text:"金昌"},{value:"423",text:"白银"},{value:"424",text:"天水"},{value:"425",text:"武威"},{value:"426",text:"张掖"},{value:"427",text:"平凉"},{value:"428",text:"酒泉"},{value:"429",text:"庆阳"},{value:"430",text:"定西"},{value:"431",text:"陇南"},{value:"432",text:"临夏"},{value:"433",text:"甘南"}]},{value:"116",text:"青海",children:[{value:"434",text:"西宁"},{value:"435",text:"海东"},{value:"436",text:"海北"},{value:"437",text:"黄南"},{value:"438",text:"海南"},{value:"439",text:"果洛"},{value:"440",text:"玉树"},{value:"441",text:"海西"}]},{value:"117",text:"宁夏",children:[{value:"442",text:"银川"},{value:"443",text:"石嘴山"},{value:"444",text:"吴忠"},{value:"445",text:"固原"},{value:"446",text:"中卫"}]},{value:"118",text:"新疆",children:[{value:"447",text:"乌鲁木齐"},{value:"448",text:"克拉玛依"},{value:"449",text:"吐鲁番"},{value:"450",text:"哈密"},{value:"451",text:"昌吉"},{value:"452",text:"博尔塔拉"},{value:"453",text:"巴音郭楞"},{value:"454",text:"阿克苏"},{value:"455",text:"克孜勒苏"},{value:"456",text:"喀什"},{value:"457",text:"和田"},{value:"458",text:"伊犁"},{value:"459",text:"塔城"},{value:"460",text:"阿勒泰"}]},{value:"119",text:"台湾"},{value:"120",text:"香港"},{value:"121",text:"澳门"}];module.exports=e; 
 			}); 
		define("utils/client.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(e){if(null==e||""==e)return null;if("string"==typeof e)return-1!=e.indexOf("http://")?e:"http://"+d+"/"+e;for(var i=0;i<e.length;i++)e[i]=t(e[i]);return e}function e(t,e){l(e),"string"==typeof e.data&&(e.data=JSON.parse(e.data)),e.data.success?"function"==typeof t.success?"FILE"==t.method?t.success(t.fileresult):t.success(e.data):s(e.data.message):"string"==typeof e.data.message?201==e.data.status_code?wx.navigateTo({url:"/page/user/common/login",success:function(t){s("请登录")},fail:function(t){f("跳转登录失败")}}):("function"==typeof t.fail&&t.fail(e.data),f(e.data.message)):("function"==typeof t.fail&&t.fail(e.data),f("异常"))}function i(t,e){"string"==typeof e.data&&(e.data=JSON.parse(e.data)),"function"==typeof t.fail?t.fail(e.data):f("异常"+e.errMsg)}function n(t,e){"string"==typeof e.data&&(e.data=JSON.parse(e.data)),"function"==typeof t.complete&&t.complete(e.data)}function o(t){wx.request({url:t.url,data:t.data,method:t.method,header:{"Content-type":"application/x-www-form-urlencoded",Cookie:t.cookie},success:function(i){e(t,i)},fail:function(e){i(t,e)},complete:function(e){n(t,e)}})}function a(t){if(t.filecurrent=null,"object"==r(t.filePath)?("number"==typeof t.fileindex&&"number"==typeof t.filelength||(t.filelength=t.filePath.length,t.fileindex=0,t.fileresult=[]),t.fileindex<t.filelength&&(t.filecurrent=t.filePath[t.fileindex],t.fileindex++)):(t.filecurrent=t.filePath,t.filelength=1,t.fileindex=1,t.fileresult=[]),null==t.filecurrent&&i(t,{data:{},errMsg:"上传文件为空"}),!t.hideAlert){var o="提交中 ("+t.fileindex+"/"+t.filelength+")";wx.showLoading({title:o})}wx.uploadFile({url:t.url,filePath:t.filecurrent,name:t.name,formData:t.data,header:{Cookie:t.cookie},success:function(i){wx.hideLoading(),"string"==typeof i.data&&(i.data=JSON.parse(i.data)),t.fileresult.push(i.data),i.data.success&&t.fileindex<t.filelength?a(t):e(t,i)},fail:function(e){wx.hideLoading(),i(t,e)},complete:function(e){n(t,e)}})}function l(t){if("string"==typeof t.data.session_id){var e=wx.getStorageSync("sessionid");null!=e&&e==t.data.session_id||wx.setStorageSync("sessionid",t.data.session_id)}}function f(t){wx.hideLoading(),wx.showToast({title:t,icon:"none",duration:2e3})}function s(t){wx.hideLoading(),wx.showToast({title:t,duration:2e3})}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d="www.tgj168.com",u="https://"+d+"/index.php?dataType=json",c=!1;module.exports={init:function(){if(c)return!0;var t=wx.getExtConfigSync(),e="";void 0!==t&&void 0!==t.dataFrom&&(e=t.dataFrom,u+="&dataFrom="+e),c=!0},request:function(t){0==c&&this.init(),void 0===t.data&&(t.data={}),void 0===t.method&&(t.method="POST"),void 0===t.data&&(t.data={}),console.info("request url"+t.url),t.url=u+"&"+t.url;var e="ci_session="+wx.getStorageSync("sessionid")+"; openid="+wx.getStorageSync("openid");t.cookie=e,"FILE"==t.method?a(t):o(t)},showError:f,showMessage:s,getAvatarUrl:function(t){return null==t||""==t?null:"http://"+d+"/static/"+t},getFileUrl:t}; 
 			}); 
		define("utils/gpsUtil.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=52.35987755982988,a=3.141592653589793,n=6378245,i=.006693421622965943,s=function(t,n){var i=2*(t=+t)-100+3*(n=+n)+.2*n*n+.1*t*n+.2*Math.sqrt(Math.abs(t));return i+=2*(20*Math.sin(6*t*a)+20*Math.sin(2*t*a))/3,i+=2*(20*Math.sin(n*a)+40*Math.sin(n/3*a))/3,i+=2*(160*Math.sin(n/12*a)+320*Math.sin(n*a/30))/3},r=function(t,n){var i=300+(t=+t)+2*(n=+n)+.1*t*t+.1*t*n+.1*Math.sqrt(Math.abs(t));return i+=2*(20*Math.sin(6*t*a)+20*Math.sin(2*t*a))/3,i+=2*(20*Math.sin(t*a)+40*Math.sin(t/3*a))/3,i+=2*(150*Math.sin(t/12*a)+300*Math.sin(t/30*a))/3},h=function(t,a){var a=+a;return!((t=+t)>73.66&&t<135.05&&a>3.86&&a<53.55)};module.exports={bd09togcj02:function(a,n){var i=(a=+a)-.0065,s=(n=+n)-.006,r=Math.sqrt(i*i+s*s)-2e-5*Math.sin(s*t),h=Math.atan2(s,i)-3e-6*Math.cos(i*t);return{longitude:r*Math.cos(h),latitude:r*Math.sin(h)}},gcj02tobd09:function(a,n){var n=+n,a=+a,i=Math.sqrt(a*a+n*n)+2e-5*Math.sin(n*t),s=Math.atan2(n,a)+3e-6*Math.cos(a*t);return{longitude:i*Math.cos(s)+.0065,latitude:i*Math.sin(s)+.006}},wgs84togcj02:function(t,M){if(h(t=+t,M=+M))return{longitude:t,latitude:M};var u=s(t-105,M-35),e=r(t-105,M-35),o=M/180*a,c=Math.sin(o);c=1-i*c*c;var d=Math.sqrt(c);return u=180*u/(n*(1-i)/(c*d)*a),{longitude:t+(e=180*e/(n/d*Math.cos(o)*a)),latitude:M+u}},gcj02towgs84:function(t,M){if(h(t=+t,M=+M))return{longitude:t,latitude:M};var u=s(t-105,M-35),e=r(t-105,M-35),o=M/180*a,c=Math.sin(o);c=1-i*c*c;var d=Math.sqrt(c);return u=180*u/(n*(1-i)/(c*d)*a),{longitude:2*t-(t+(e=180*e/(n/d*Math.cos(o)*a))),latitude:2*M-(M+u)}}}; 
 			}); 
		define("utils/pickerCity.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("city"),i={provinceList:[],province:{index:-1,value:0,text:""},cityList:[],city:{index:-1,value:0,text:""},regionSelect:[],regionValue:[0,0],regionInit:!1,init:function(){var i=this,t=[0,0];if(i.provinceList=[],i.cityList=[],void 0!==e&&e.length>0)for(var n=0;n<e.length;n++)i.provinceList.push({value:e[n].value,text:e[n].text});i.pickerRegionReset(t),i.regionInit=!0},getRegionSelect:function(e){return this.pickerRegionReset(e)},getRegionList:function(e){var i=this;return i.regionValue=[0,0],i.init(),[i.provinceList,i.cityList]},pickerRegionChange:function(e,i){var t=this;switch(e){case 0:t.city={index:-1,value:0,text:""},t.cityList=[];case 1:t.regionValue[e]=i,0==e&&(t.regionValue[1]=0);break;default:t.regionValue=[0,0]}return t.pickerRegionReset(t.regionValue),[t.provinceList,t.cityList]},pickerRegionReset:function(i){var t=this,n=[],c=[];if(void 0!==i[0]&&void 0!==e[i[0]]&&(n=e[i[0]],t.province.index!=i[0]&&(t.province.index=i[0],t.province.value=n.value,t.province.text=n.text,t.city={index:-1,value:0,text:""},t.cityList=[],i[1]=0,void 0!==n.children))){n.children.length>1&&t.cityList.push({value:0,text:"全部"});for(var r=0;r<n.children.length;r++)t.cityList.push({value:n.children[r].value,text:n.children[r].text})}return void 0!==i[1]&&void 0!==t.cityList&&t.cityList.length>i[1]&&(c=t.cityList[i[1]],t.city.index!=i[1]&&(t.city.index=i[1],t.city.value=c.value,t.city.text=c.text)),t.city.value>0?t.regionSelect=t.city:t.regionSelect=t.province,t.regionSelect}};module.exports=i; 
 			}); 
		define("utils/pickerRegion.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var i=require("region"),t={provinceList:[],province:{index:-1,value:0,text:""},cityList:[],city:{index:-1,value:0,text:""},districtList:[],district:{index:-1,value:0,text:""},regionSelect:[],regionValue:[0,0,0],regionInit:!1,init:function(){var t=this,e=[0,0,0];if(t.provinceList=[],t.cityList=[],t.districtList=[],void 0!==i&&i.length>0)for(var r=0;r<i.length;r++)t.provinceList.push({value:i[r].value,text:i[r].text});t.pickerRegionReset(e),t.regionInit=!0},getRegionSelect:function(i){return this.pickerRegionReset(i)},getRegionList:function(){var i=this;return i.regionValue=[0,0,0],i.init(),[i.provinceList,i.cityList,i.districtList]},pickerRegionChange:function(i,t){var e=this;switch(i){case 0:e.city={index:-1,value:0,text:""},e.cityList=[];case 1:e.district={index:-1,value:0,text:""},e.districtList=[];case 2:e.regionValue[i]=t;for(var r=i+1;r<=2;r++)e.regionValue[r]=0;break;default:e.regionValue=[0,0,0]}return e.pickerRegionReset(e.regionValue),[e.provinceList,e.cityList,e.districtList]},pickerRegionReset:function(t){var e=this,r=[],n=[],c=[];if(void 0!==t[0]&&void 0!==i[t[0]]&&(r=i[t[0]],e.province.index!=t[0]&&(e.province.index=t[0],e.province.value=r.value,e.province.text=r.text,e.city={index:-1,value:0,text:""},e.cityList=[],e.district={index:-1,value:0,text:""},e.districtList=[],t[1]=0,t[2]=0,void 0!==r.children)))for(var d=0;d<r.children.length;d++)e.cityList.push({value:r.children[d].value,text:r.children[d].text});if(void 0!==t[1]&&void 0!==r.children&&r.children.length>t[1]&&(n=r.children[t[1]],e.city.index!=t[1]&&(e.city.index=t[1],e.city.value=n.value,e.city.text=n.text,e.district={index:-1,value:0,text:""},e.districtList=[],t[2]=0,void 0!==n.children)))for(var s=0;s<n.children.length;s++)e.districtList.push({value:n.children[s].value,text:n.children[s].text});return void 0!==t[2]&&void 0!==n.children&&n.children.length>t[2]&&(c=n.children[t[2]],e.district.index!=t[2]&&(e.district.index=t[2],e.district.value=c.value,e.district.text=c.text)),e.city.index>=0?(e.regionSelect=e.city,e.district.index>=0&&(e.regionSelect={value:e.district.value,text:""},e.regionSelect.text=e.city.text+e.district.text)):e.regionSelect=e.province,e.regionSelect}};module.exports=t; 
 			}); 
		define("utils/pointData.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=["1.我们仅为买卖双方提供平台，所有设备均为用户自主发布。我们力求提供真实可靠的设备信息，但无法核实所有信息的真实性、有效性。我们不参与交易环节。","2.未见实物，先交定金的，风险极高！","3.动身看货前需先确认产品型号、设备是否还在、产权是否清晰等重要信息，以免白跑一趟。","4.价格远低于市场价请慎重购买，要深刻理解一分钱一分货的道理。","5.仔细检查设备能否正常使用。","6.认真核对发票、质保证书、身份证、营业执照等信息，并拍照留存。","7.收货验货时请仔细核对，谨防调包。"];module.exports={pointList:t}; 
 			}); 
		define("utils/region.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=[{value:"80",text:"北京",children:[{value:"88",text:"北京",children:[{value:"462",text:"东城区"},{value:"463",text:"西城区"},{value:"464",text:"崇文区"},{value:"465",text:"宣武区"},{value:"466",text:"朝阳区"},{value:"467",text:"丰台区"},{value:"468",text:"石景山区"},{value:"469",text:"海淀区"},{value:"470",text:"门头沟区"},{value:"471",text:"房山区"},{value:"472",text:"通州区"},{value:"473",text:"顺义区"},{value:"474",text:"昌平区"},{value:"475",text:"大兴区"},{value:"476",text:"怀柔区"},{value:"477",text:"平谷区"},{value:"478",text:"密云县"},{value:"479",text:"延庆县"}]}]},{value:"81",text:"天津",children:[{value:"89",text:"天津",children:[{value:"480",text:"和平区"},{value:"481",text:"河东区"},{value:"482",text:"河西区"},{value:"483",text:"南开区"},{value:"484",text:"河北区"},{value:"485",text:"红桥区"},{value:"486",text:"塘沽区"},{value:"487",text:"汉沽区"},{value:"488",text:"大港区"},{value:"489",text:"东丽区"},{value:"490",text:"西青区"},{value:"491",text:"津南区"},{value:"492",text:"北辰区"},{value:"493",text:"武清区"},{value:"494",text:"宝坻区"},{value:"495",text:"宁河县"},{value:"496",text:"静海县"},{value:"497",text:"蓟县"}]}]},{value:"90",text:"河北",children:[{value:"124",text:"石家庄",children:[{value:"499",text:"长安区"},{value:"500",text:"桥东区"},{value:"501",text:"桥西区"},{value:"502",text:"新华区"},{value:"503",text:"井陉矿区"},{value:"504",text:"裕华区"},{value:"505",text:"井陉县"},{value:"506",text:"正定县"},{value:"507",text:"栾城县"},{value:"508",text:"行唐县"},{value:"509",text:"灵寿县"},{value:"510",text:"高邑县"},{value:"511",text:"深泽县"},{value:"512",text:"赞皇县"},{value:"513",text:"无极县"},{value:"514",text:"平山县"},{value:"515",text:"元氏县"},{value:"516",text:"赵县"},{value:"517",text:"辛集市"},{value:"518",text:"藁城市"},{value:"519",text:"晋州市"},{value:"520",text:"新乐市"},{value:"521",text:"鹿泉市"}]},{value:"125",text:"唐山",children:[{value:"523",text:"路南区"},{value:"524",text:"路北区"},{value:"525",text:"古冶区"},{value:"526",text:"开平区"},{value:"527",text:"丰南区"},{value:"528",text:"丰润区"},{value:"529",text:"滦县"},{value:"530",text:"滦南县"},{value:"531",text:"乐亭县"},{value:"532",text:"迁西县"},{value:"533",text:"玉田县"},{value:"534",text:"唐海县"},{value:"535",text:"遵化市"},{value:"536",text:"迁安市"}]},{value:"126",text:"秦皇岛",children:[{value:"538",text:"海港区"},{value:"539",text:"山海关区"},{value:"540",text:"北戴河区"},{value:"541",text:"青龙满族自治县"},{value:"542",text:"昌黎县"},{value:"543",text:"抚宁县"},{value:"544",text:"卢龙县"}]},{value:"127",text:"邯郸",children:[{value:"546",text:"邯山区"},{value:"547",text:"丛台区"},{value:"548",text:"复兴区"},{value:"549",text:"峰峰矿区"},{value:"550",text:"邯郸县"},{value:"551",text:"临漳县"},{value:"552",text:"成安县"},{value:"553",text:"大名县"},{value:"554",text:"涉县"},{value:"555",text:"磁县"},{value:"556",text:"肥乡县"},{value:"557",text:"永年县"},{value:"558",text:"邱县"},{value:"559",text:"鸡泽县"},{value:"560",text:"广平县"},{value:"561",text:"馆陶县"},{value:"562",text:"魏县"},{value:"563",text:"曲周县"},{value:"564",text:"武安市"}]},{value:"128",text:"邢台",children:[{value:"566",text:"桥东区"},{value:"567",text:"桥西区"},{value:"568",text:"邢台县"},{value:"569",text:"临城县"},{value:"570",text:"内丘县"},{value:"571",text:"柏乡县"},{value:"572",text:"隆尧县"},{value:"573",text:"任县"},{value:"574",text:"南和县"},{value:"575",text:"宁晋县"},{value:"576",text:"巨鹿县"},{value:"577",text:"新河县"},{value:"578",text:"广宗县"},{value:"579",text:"平乡县"},{value:"580",text:"威县"},{value:"581",text:"清河县"},{value:"582",text:"临西县"},{value:"583",text:"南宫市"},{value:"584",text:"沙河市"}]},{value:"129",text:"保定",children:[{value:"586",text:"新市区"},{value:"587",text:"北市区"},{value:"588",text:"南市区"},{value:"589",text:"满城县"},{value:"590",text:"清苑县"},{value:"591",text:"涞水县"},{value:"592",text:"阜平县"},{value:"593",text:"徐水县"},{value:"594",text:"定兴县"},{value:"595",text:"唐县"},{value:"596",text:"高阳县"},{value:"597",text:"容城县"},{value:"598",text:"涞源县"},{value:"599",text:"望都县"},{value:"600",text:"安新县"},{value:"601",text:"易县"},{value:"602",text:"曲阳县"},{value:"603",text:"蠡县"},{value:"604",text:"顺平县"},{value:"605",text:"博野县"},{value:"606",text:"雄县"},{value:"607",text:"涿州市"},{value:"608",text:"定州市"},{value:"609",text:"安国市"},{value:"610",text:"高碑店市"}]},{value:"130",text:"张家口",children:[{value:"612",text:"桥东区"},{value:"613",text:"桥西区"},{value:"614",text:"宣化区"},{value:"615",text:"下花园区"},{value:"616",text:"宣化县"},{value:"617",text:"张北县"},{value:"618",text:"康保县"},{value:"619",text:"沽源县"},{value:"620",text:"尚义县"},{value:"621",text:"蔚县"},{value:"622",text:"阳原县"},{value:"623",text:"怀安县"},{value:"624",text:"万全县"},{value:"625",text:"怀来县"},{value:"626",text:"涿鹿县"},{value:"627",text:"赤城县"},{value:"628",text:"崇礼县"}]},{value:"131",text:"承德",children:[{value:"630",text:"双桥区"},{value:"631",text:"双滦区"},{value:"632",text:"鹰手营子矿区"},{value:"633",text:"承德县"},{value:"634",text:"兴隆县"},{value:"635",text:"平泉县"},{value:"636",text:"滦平县"},{value:"637",text:"隆化县"},{value:"638",text:"丰宁满族自治县"},{value:"639",text:"宽城满族自治县"},{value:"640",text:"围场满族蒙古族自治县"}]},{value:"132",text:"沧州",children:[{value:"642",text:"新华区"},{value:"643",text:"运河区"},{value:"644",text:"沧县"},{value:"645",text:"青县"},{value:"646",text:"东光县"},{value:"647",text:"海兴县"},{value:"648",text:"盐山县"},{value:"649",text:"肃宁县"},{value:"650",text:"南皮县"},{value:"651",text:"吴桥县"},{value:"652",text:"献县"},{value:"653",text:"孟村回族自治县"},{value:"654",text:"泊头市"},{value:"655",text:"任丘市"},{value:"656",text:"黄骅市"},{value:"657",text:"河间市"}]},{value:"133",text:"廊坊",children:[{value:"659",text:"安次区"},{value:"660",text:"广阳区"},{value:"661",text:"固安县"},{value:"662",text:"永清县"},{value:"663",text:"香河县"},{value:"664",text:"大城县"},{value:"665",text:"文安县"},{value:"666",text:"大厂回族自治县"},{value:"667",text:"霸州市"},{value:"668",text:"三河市"}]},{value:"134",text:"衡水",children:[{value:"670",text:"桃城区"},{value:"671",text:"枣强县"},{value:"672",text:"武邑县"},{value:"673",text:"武强县"},{value:"674",text:"饶阳县"},{value:"675",text:"安平县"},{value:"676",text:"故城县"},{value:"677",text:"景县"},{value:"678",text:"阜城县"},{value:"679",text:"冀州市"},{value:"680",text:"深州市"}]}]},{value:"91",text:"山西",children:[{value:"135",text:"太原",children:[{value:"682",text:"小店区"},{value:"683",text:"迎泽区"},{value:"684",text:"杏花岭区"},{value:"685",text:"尖草坪区"},{value:"686",text:"万柏林区"},{value:"687",text:"晋源区"},{value:"688",text:"清徐县"},{value:"689",text:"阳曲县"},{value:"690",text:"娄烦县"},{value:"691",text:"古交市"}]},{value:"136",text:"大同",children:[{value:"693",text:"城区"},{value:"694",text:"矿区"},{value:"695",text:"南郊区"},{value:"696",text:"新荣区"},{value:"697",text:"阳高县"},{value:"698",text:"天镇县"},{value:"699",text:"广灵县"},{value:"700",text:"灵丘县"},{value:"701",text:"浑源县"},{value:"702",text:"左云县"},{value:"703",text:"大同县"}]},{value:"137",text:"阳泉",children:[{value:"705",text:"城区"},{value:"706",text:"矿区"},{value:"707",text:"郊区"},{value:"708",text:"平定县"},{value:"709",text:"盂县"}]},{value:"138",text:"长治",children:[{value:"711",text:"城区"},{value:"712",text:"郊区"},{value:"713",text:"长治县"},{value:"714",text:"襄垣县"},{value:"715",text:"屯留县"},{value:"716",text:"平顺县"},{value:"717",text:"黎城县"},{value:"718",text:"壶关县"},{value:"719",text:"长子县"},{value:"720",text:"武乡县"},{value:"721",text:"沁县"},{value:"722",text:"沁源县"},{value:"723",text:"潞城市"}]},{value:"139",text:"晋城",children:[{value:"725",text:"城区"},{value:"726",text:"沁水县"},{value:"727",text:"阳城县"},{value:"728",text:"陵川县"},{value:"729",text:"泽州县"},{value:"730",text:"高平市"}]},{value:"140",text:"朔州",children:[{value:"732",text:"朔城区"},{value:"733",text:"平鲁区"},{value:"734",text:"山阴县"},{value:"735",text:"应县"},{value:"736",text:"右玉县"},{value:"737",text:"怀仁县"}]},{value:"141",text:"晋中",children:[{value:"739",text:"榆次区"},{value:"740",text:"榆社县"},{value:"741",text:"左权县"},{value:"742",text:"和顺县"},{value:"743",text:"昔阳县"},{value:"744",text:"寿阳县"},{value:"745",text:"太谷县"},{value:"746",text:"祁县"},{value:"747",text:"平遥县"},{value:"748",text:"灵石县"},{value:"749",text:"介休市"}]},{value:"142",text:"运城",children:[{value:"751",text:"盐湖区"},{value:"752",text:"临猗县"},{value:"753",text:"万荣县"},{value:"754",text:"闻喜县"},{value:"755",text:"稷山县"},{value:"756",text:"新绛县"},{value:"757",text:"绛县"},{value:"758",text:"垣曲县"},{value:"759",text:"夏县"},{value:"760",text:"平陆县"},{value:"761",text:"芮城县"},{value:"762",text:"永济市"},{value:"763",text:"河津市"}]},{value:"143",text:"忻州",children:[{value:"765",text:"忻府区"},{value:"766",text:"定襄县"},{value:"767",text:"五台县"},{value:"768",text:"代县"},{value:"769",text:"繁峙县"},{value:"770",text:"宁武县"},{value:"771",text:"静乐县"},{value:"772",text:"神池县"},{value:"773",text:"五寨县"},{value:"774",text:"岢岚县"},{value:"775",text:"河曲县"},{value:"776",text:"保德县"},{value:"777",text:"偏关县"},{value:"778",text:"原平市"}]},{value:"144",text:"临汾",children:[{value:"780",text:"尧都区"},{value:"781",text:"曲沃县"},{value:"782",text:"翼城县"},{value:"783",text:"襄汾县"},{value:"784",text:"洪洞县"},{value:"785",text:"古县"},{value:"786",text:"安泽县"},{value:"787",text:"浮山县"},{value:"788",text:"吉县"},{value:"789",text:"乡宁县"},{value:"790",text:"大宁县"},{value:"791",text:"隰县"},{value:"792",text:"永和县"},{value:"793",text:"蒲县"},{value:"794",text:"汾西县"},{value:"795",text:"侯马市"},{value:"796",text:"霍州市"}]},{value:"145",text:"吕梁",children:[{value:"798",text:"离石区"},{value:"799",text:"文水县"},{value:"800",text:"交城县"},{value:"801",text:"兴县"},{value:"802",text:"临县"},{value:"803",text:"柳林县"},{value:"804",text:"石楼县"},{value:"805",text:"岚县"},{value:"806",text:"方山县"},{value:"807",text:"中阳县"},{value:"808",text:"交口县"},{value:"809",text:"孝义市"},{value:"810",text:"汾阳市"}]}]},{value:"92",text:"内蒙古",children:[{value:"146",text:"呼和浩特",children:[{value:"812",text:"新城区"},{value:"813",text:"回民区"},{value:"814",text:"玉泉区"},{value:"815",text:"赛罕区"},{value:"816",text:"土默特左旗"},{value:"817",text:"托克托县"},{value:"818",text:"和林格尔县"},{value:"819",text:"清水河县"},{value:"820",text:"武川县"}]},{value:"147",text:"包头",children:[{value:"822",text:"东河区"},{value:"823",text:"昆都仑区"},{value:"824",text:"青山区"},{value:"825",text:"石拐区"},{value:"826",text:"白云矿区"},{value:"827",text:"九原区"},{value:"828",text:"土默特右旗"},{value:"829",text:"固阳县"},{value:"830",text:"达尔罕茂明安联合旗"}]},{value:"148",text:"乌海",children:[{value:"832",text:"海勃湾区"},{value:"833",text:"海南区"},{value:"834",text:"乌达区"}]},{value:"149",text:"赤峰",children:[{value:"836",text:"红山区"},{value:"837",text:"元宝山区"},{value:"838",text:"松山区"},{value:"839",text:"阿鲁科尔沁旗"},{value:"840",text:"巴林左旗"},{value:"841",text:"巴林右旗"},{value:"842",text:"林西县"},{value:"843",text:"克什克腾旗"},{value:"844",text:"翁牛特旗"},{value:"845",text:"喀喇沁旗"},{value:"846",text:"宁城县"},{value:"847",text:"敖汉旗"}]},{value:"150",text:"通辽",children:[{value:"849",text:"科尔沁区"},{value:"850",text:"科尔沁左翼中旗"},{value:"851",text:"科尔沁左翼后旗"},{value:"852",text:"开鲁县"},{value:"853",text:"库伦旗"},{value:"854",text:"奈曼旗"},{value:"855",text:"扎鲁特旗"},{value:"856",text:"霍林郭勒市"}]},{value:"151",text:"鄂尔多斯",children:[{value:"857",text:"东胜区"},{value:"858",text:"达拉特旗"},{value:"859",text:"准格尔旗"},{value:"860",text:"鄂托克前旗"},{value:"861",text:"鄂托克旗"},{value:"862",text:"杭锦旗"},{value:"863",text:"乌审旗"},{value:"864",text:"伊金霍洛旗"}]},{value:"152",text:"呼伦贝尔",children:[{value:"866",text:"海拉尔区"},{value:"867",text:"阿荣旗"},{value:"868",text:"莫力达瓦达斡尔族自治旗"},{value:"869",text:"鄂伦春自治旗"},{value:"870",text:"鄂温克族自治旗"},{value:"871",text:"陈巴尔虎旗"},{value:"872",text:"新巴尔虎左旗"},{value:"873",text:"新巴尔虎右旗"},{value:"874",text:"满洲里市"},{value:"875",text:"牙克石市"},{value:"876",text:"扎兰屯市"},{value:"877",text:"额尔古纳市"},{value:"878",text:"根河市"}]},{value:"153",text:"巴彦淖尔",children:[{value:"880",text:"临河区"},{value:"881",text:"五原县"},{value:"882",text:"磴口县"},{value:"883",text:"乌拉特前旗"},{value:"884",text:"乌拉特中旗"},{value:"885",text:"乌拉特后旗"},{value:"886",text:"杭锦后旗"}]},{value:"154",text:"乌兰察布",children:[{value:"888",text:"集宁区"},{value:"889",text:"卓资县"},{value:"890",text:"化德县"},{value:"891",text:"商都县"},{value:"892",text:"兴和县"},{value:"893",text:"凉城县"},{value:"894",text:"察哈尔右翼前旗"},{value:"895",text:"察哈尔右翼中旗"},{value:"896",text:"察哈尔右翼后旗"},{value:"897",text:"四子王旗"},{value:"898",text:"丰镇市"}]},{value:"155",text:"兴安盟",children:[{value:"899",text:"乌兰浩特市"},{value:"900",text:"阿尔山市"},{value:"901",text:"科尔沁右翼前旗"},{value:"902",text:"科尔沁右翼中旗"},{value:"903",text:"扎赉特旗"},{value:"904",text:"突泉县"}]},{value:"156",text:"锡林郭勒",children:[{value:"905",text:"二连浩特市"},{value:"906",text:"锡林浩特市"},{value:"907",text:"阿巴嘎旗"},{value:"908",text:"苏尼特左旗"},{value:"909",text:"苏尼特右旗"},{value:"910",text:"东乌珠穆沁旗"},{value:"911",text:"西乌珠穆沁旗"},{value:"912",text:"太仆寺旗"},{value:"913",text:"镶黄旗"},{value:"914",text:"正镶白旗"},{value:"915",text:"正蓝旗"},{value:"916",text:"多伦县"}]},{value:"157",text:"阿拉善",children:[{value:"917",text:"阿拉善左旗"},{value:"918",text:"阿拉善右旗"},{value:"919",text:"额济纳旗"}]}]},{value:"93",text:"辽宁",children:[{value:"158",text:"沈阳",children:[{value:"921",text:"和平区"},{value:"922",text:"沈河区"},{value:"923",text:"大东区"},{value:"924",text:"皇姑区"},{value:"925",text:"铁西区"},{value:"926",text:"苏家屯区"},{value:"927",text:"东陵区"},{value:"928",text:"新城子区"},{value:"929",text:"于洪区"},{value:"930",text:"辽中县"},{value:"931",text:"康平县"},{value:"932",text:"法库县"},{value:"933",text:"新民市"}]},{value:"159",text:"大连",children:[{value:"935",text:"中山区"},{value:"936",text:"西岗区"},{value:"937",text:"沙河口区"},{value:"938",text:"甘井子区"},{value:"939",text:"旅顺口区"},{value:"940",text:"金州区"},{value:"941",text:"长海县"},{value:"942",text:"瓦房店市"},{value:"943",text:"普兰店市"},{value:"944",text:"庄河市"}]},{value:"160",text:"鞍山",children:[{value:"946",text:"铁东区"},{value:"947",text:"铁西区"},{value:"948",text:"立山区"},{value:"949",text:"千山区"},{value:"950",text:"台安县"},{value:"951",text:"岫岩满族自治县"},{value:"952",text:"海城市"}]},{value:"161",text:"抚顺",children:[{value:"954",text:"新抚区"},{value:"955",text:"东洲区"},{value:"956",text:"望花区"},{value:"957",text:"顺城区"},{value:"958",text:"抚顺县"},{value:"959",text:"新宾满族自治县"},{value:"960",text:"清原满族自治县"}]},{value:"162",text:"本溪",children:[{value:"962",text:"平山区"},{value:"963",text:"溪湖区"},{value:"964",text:"明山区"},{value:"965",text:"南芬区"},{value:"966",text:"本溪满族自治县"},{value:"967",text:"桓仁满族自治县"}]},{value:"163",text:"丹东",children:[{value:"969",text:"元宝区"},{value:"970",text:"振兴区"},{value:"971",text:"振安区"},{value:"972",text:"宽甸满族自治县"},{value:"973",text:"东港市"},{value:"974",text:"凤城市"}]},{value:"164",text:"锦州",children:[{value:"976",text:"古塔区"},{value:"977",text:"凌河区"},{value:"978",text:"太和区"},{value:"979",text:"黑山县"},{value:"980",text:"义县"},{value:"981",text:"凌海市"},{value:"982",text:"北宁市"}]},{value:"165",text:"营口",children:[{value:"984",text:"站前区"},{value:"985",text:"西市区"},{value:"986",text:"鲅鱼圈区"},{value:"987",text:"老边区"},{value:"988",text:"盖州市"},{value:"989",text:"大石桥市"}]},{value:"166",text:"阜新",children:[{value:"991",text:"海州区"},{value:"992",text:"新邱区"},{value:"993",text:"太平区"},{value:"994",text:"清河门区"},{value:"995",text:"细河区"},{value:"996",text:"阜新蒙古族自治县"},{value:"997",text:"彰武县"}]},{value:"167",text:"辽阳",children:[{value:"999",text:"白塔区"},{value:"1000",text:"文圣区"},{value:"1001",text:"宏伟区"},{value:"1002",text:"弓长岭区"},{value:"1003",text:"太子河区"},{value:"1004",text:"辽阳县"},{value:"1005",text:"灯塔市"}]},{value:"168",text:"盘锦",children:[{value:"1007",text:"双台子区"},{value:"1008",text:"兴隆台区"},{value:"1009",text:"大洼县"},{value:"1010",text:"盘山县"}]},{value:"169",text:"铁岭",children:[{value:"1012",text:"银州区"},{value:"1013",text:"清河区"},{value:"1014",text:"铁岭县"},{value:"1015",text:"西丰县"},{value:"1016",text:"昌图县"},{value:"1017",text:"调兵山市"},{value:"1018",text:"开原市"}]},{value:"170",text:"朝阳",children:[{value:"1020",text:"双塔区"},{value:"1021",text:"龙城区"},{value:"1022",text:"朝阳县"},{value:"1023",text:"建平县"},{value:"1024",text:"喀喇沁左翼蒙古族自治县"},{value:"1025",text:"北票市"},{value:"1026",text:"凌源市"}]},{value:"171",text:"葫芦岛",children:[{value:"1028",text:"连山区"},{value:"1029",text:"龙港区"},{value:"1030",text:"南票区"},{value:"1031",text:"绥中县"},{value:"1032",text:"建昌县"},{value:"1033",text:"兴城市"}]}]},{value:"94",text:"吉林",children:[{value:"172",text:"长春",children:[{value:"1035",text:"南关区"},{value:"1036",text:"宽城区"},{value:"1037",text:"朝阳区"},{value:"1038",text:"二道区"},{value:"1039",text:"绿园区"},{value:"1040",text:"双阳区"},{value:"1041",text:"农安县"},{value:"1042",text:"九台市"},{value:"1043",text:"榆树市"},{value:"1044",text:"德惠市"}]},{value:"173",text:"吉林",children:[{value:"1046",text:"昌邑区"},{value:"1047",text:"龙潭区"},{value:"1048",text:"船营区"},{value:"1049",text:"丰满区"},{value:"1050",text:"永吉县"},{value:"1051",text:"蛟河市"},{value:"1052",text:"桦甸市"},{value:"1053",text:"舒兰市"},{value:"1054",text:"磐石市"}]},{value:"174",text:"四平",children:[{value:"1056",text:"铁西区"},{value:"1057",text:"铁东区"},{value:"1058",text:"梨树县"},{value:"1059",text:"伊通满族自治县"},{value:"1060",text:"公主岭市"},{value:"1061",text:"双辽市"}]},{value:"175",text:"辽源",children:[{value:"1063",text:"龙山区"},{value:"1064",text:"西安区"},{value:"1065",text:"东丰县"},{value:"1066",text:"东辽县"}]},{value:"176",text:"通化",children:[{value:"1068",text:"东昌区"},{value:"1069",text:"二道江区"},{value:"1070",text:"通化县"},{value:"1071",text:"辉南县"},{value:"1072",text:"柳河县"},{value:"1073",text:"梅河口市"},{value:"1074",text:"集安市"}]},{value:"177",text:"白山",children:[{value:"1076",text:"八道江区"},{value:"1077",text:"抚松县"},{value:"1078",text:"靖宇县"},{value:"1079",text:"长白朝鲜族自治县"},{value:"1080",text:"江源县"},{value:"1081",text:"临江市"}]},{value:"178",text:"松原",children:[{value:"1083",text:"宁江区"},{value:"1084",text:"前郭尔罗斯蒙古族自治县"},{value:"1085",text:"长岭县"},{value:"1086",text:"乾安县"},{value:"1087",text:"扶余县"}]},{value:"179",text:"白城",children:[{value:"1089",text:"洮北区"},{value:"1090",text:"镇赉县"},{value:"1091",text:"通榆县"},{value:"1092",text:"洮南市"},{value:"1093",text:"大安市"}]},{value:"180",text:"延边",children:[{value:"1094",text:"延吉市"},{value:"1095",text:"图们市"},{value:"1096",text:"敦化市"},{value:"1097",text:"珲春市"},{value:"1098",text:"龙井市"},{value:"1099",text:"和龙市"},{value:"1100",text:"汪清县"},{value:"1101",text:"安图县"}]}]},{value:"95",text:"黑龙江",children:[{value:"181",text:"哈尔滨",children:[{value:"1103",text:"道里区"},{value:"1104",text:"南岗区"},{value:"1105",text:"道外区"},{value:"1106",text:"香坊区"},{value:"1107",text:"动力区"},{value:"1108",text:"平房区"},{value:"1109",text:"松北区"},{value:"1110",text:"呼兰区"},{value:"1111",text:"依兰县"},{value:"1112",text:"方正县"},{value:"1113",text:"宾县"},{value:"1114",text:"巴彦县"},{value:"1115",text:"木兰县"},{value:"1116",text:"通河县"},{value:"1117",text:"延寿县"},{value:"1118",text:"阿城市"},{value:"1119",text:"双城市"},{value:"1120",text:"尚志市"},{value:"1121",text:"五常市"}]},{value:"182",text:"齐齐哈尔",children:[{value:"1123",text:"龙沙区"},{value:"1124",text:"建华区"},{value:"1125",text:"铁锋区"},{value:"1126",text:"昂昂溪区"},{value:"1127",text:"富拉尔基区"},{value:"1128",text:"碾子山区"},{value:"1129",text:"梅里斯达斡尔族区"},{value:"1130",text:"龙江县"},{value:"1131",text:"依安县"},{value:"1132",text:"泰来县"},{value:"1133",text:"甘南县"},{value:"1134",text:"富裕县"},{value:"1135",text:"克山县"},{value:"1136",text:"克东县"},{value:"1137",text:"拜泉县"},{value:"1138",text:"讷河市"}]},{value:"183",text:"鸡西",children:[{value:"1140",text:"鸡冠区"},{value:"1141",text:"恒山区"},{value:"1142",text:"滴道区"},{value:"1143",text:"梨树区"},{value:"1144",text:"城子河区"},{value:"1145",text:"麻山区"},{value:"1146",text:"鸡东县"},{value:"1147",text:"虎林市"},{value:"1148",text:"密山市"}]},{value:"184",text:"鹤岗",children:[{value:"1150",text:"向阳区"},{value:"1151",text:"工农区"},{value:"1152",text:"南山区"},{value:"1153",text:"兴安区"},{value:"1154",text:"东山区"},{value:"1155",text:"兴山区"},{value:"1156",text:"萝北县"},{value:"1157",text:"绥滨县"}]},{value:"185",text:"双鸭山",children:[{value:"1159",text:"尖山区"},{value:"1160",text:"岭东区"},{value:"1161",text:"四方台区"},{value:"1162",text:"宝山区"},{value:"1163",text:"集贤县"},{value:"1164",text:"友谊县"},{value:"1165",text:"宝清县"},{value:"1166",text:"饶河县"}]},{value:"186",text:"大庆",children:[{value:"1168",text:"萨尔图区"},{value:"1169",text:"龙凤区"},{value:"1170",text:"让胡路区"},{value:"1171",text:"红岗区"},{value:"1172",text:"大同区"},{value:"1173",text:"肇州县"},{value:"1174",text:"肇源县"},{value:"1175",text:"林甸县"},{value:"1176",text:"杜尔伯特蒙古族自治县"}]},{value:"187",text:"伊春",children:[{value:"1178",text:"伊春区"},{value:"1179",text:"南岔区"},{value:"1180",text:"友好区"},{value:"1181",text:"西林区"},{value:"1182",text:"翠峦区"},{value:"1183",text:"新青区"},{value:"1184",text:"美溪区"},{value:"1185",text:"金山屯区"},{value:"1186",text:"五营区"},{value:"1187",text:"乌马河区"},{value:"1188",text:"汤旺河区"},{value:"1189",text:"带岭区"},{value:"1190",text:"乌伊岭区"},{value:"1191",text:"红星区"},{value:"1192",text:"上甘岭区"},{value:"1193",text:"嘉荫县"},{value:"1194",text:"铁力市"}]},{value:"188",text:"佳木斯",children:[{value:"1196",text:"永红区"},{value:"1197",text:"向阳区"},{value:"1198",text:"前进区"},{value:"1199",text:"东风区"},{value:"1200",text:"郊区"},{value:"1201",text:"桦南县"},{value:"1202",text:"桦川县"},{value:"1203",text:"汤原县"},{value:"1204",text:"抚远县"},{value:"1205",text:"同江市"},{value:"1206",text:"富锦市"}]},{value:"189",text:"七台河",children:[{value:"1208",text:"新兴区"},{value:"1209",text:"桃山区"},{value:"1210",text:"茄子河区"},{value:"1211",text:"勃利县"}]},{value:"190",text:"牡丹江",children:[{value:"1213",text:"东安区"},{value:"1214",text:"阳明区"},{value:"1215",text:"爱民区"},{value:"1216",text:"西安区"},{value:"1217",text:"东宁县"},{value:"1218",text:"林口县"},{value:"1219",text:"绥芬河市"},{value:"1220",text:"海林市"},{value:"1221",text:"宁安市"},{value:"1222",text:"穆棱市"}]},{value:"191",text:"黑河",children:[{value:"1224",text:"爱辉区"},{value:"1225",text:"嫩江县"},{value:"1226",text:"逊克县"},{value:"1227",text:"孙吴县"},{value:"1228",text:"北安市"},{value:"1229",text:"五大连池市"}]},{value:"192",text:"绥化",children:[{value:"1231",text:"北林区"},{value:"1232",text:"望奎县"},{value:"1233",text:"兰西县"},{value:"1234",text:"青冈县"},{value:"1235",text:"庆安县"},{value:"1236",text:"明水县"},{value:"1237",text:"绥棱县"},{value:"1238",text:"安达市"},{value:"1239",text:"肇东市"},{value:"1240",text:"海伦市"}]},{value:"193",text:"大兴安岭",children:[{value:"1241",text:"呼玛县"},{value:"1242",text:"塔河县"},{value:"1243",text:"漠河县"}]}]},{value:"82",text:"上海",children:[{value:"96",text:"上海",children:[{value:"1244",text:"黄浦区"},{value:"1245",text:"卢湾区"},{value:"1246",text:"徐汇区"},{value:"1247",text:"长宁区"},{value:"1248",text:"静安区"},{value:"1249",text:"普陀区"},{value:"1250",text:"闸北区"},{value:"1251",text:"虹口区"},{value:"1252",text:"杨浦区"},{value:"1253",text:"闵行区"},{value:"1254",text:"宝山区"},{value:"1255",text:"嘉定区"},{value:"1256",text:"浦东新区"},{value:"1257",text:"金山区"},{value:"1258",text:"松江区"},{value:"1259",text:"青浦区"},{value:"1260",text:"南汇区"},{value:"1261",text:"奉贤区"},{value:"1262",text:"崇明县"}]}]},{value:"97",text:"江苏",children:[{value:"195",text:"南京",children:[{value:"1264",text:"玄武区"},{value:"1265",text:"白下区"},{value:"1266",text:"秦淮区"},{value:"1267",text:"建邺区"},{value:"1268",text:"鼓楼区"},{value:"1269",text:"下关区"},{value:"1270",text:"浦口区"},{value:"1271",text:"栖霞区"},{value:"1272",text:"雨花台区"},{value:"1273",text:"江宁区"},{value:"1274",text:"六合区"},{value:"1275",text:"溧水县"},{value:"1276",text:"高淳县"}]},{value:"196",text:"无锡",children:[{value:"1278",text:"崇安区"},{value:"1279",text:"南长区"},{value:"1280",text:"北塘区"},{value:"1281",text:"锡山区"},{value:"1282",text:"惠山区"},{value:"1283",text:"滨湖区"},{value:"1284",text:"江阴市"},{value:"1285",text:"宜兴市"}]},{value:"197",text:"徐州",children:[{value:"1287",text:"鼓楼区"},{value:"1288",text:"云龙区"},{value:"1289",text:"九里区"},{value:"1290",text:"贾汪区"},{value:"1291",text:"泉山区"},{value:"1292",text:"丰县"},{value:"1293",text:"沛县"},{value:"1294",text:"铜山县"},{value:"1295",text:"睢宁县"},{value:"1296",text:"新沂市"},{value:"1297",text:"邳州市"}]},{value:"198",text:"常州",children:[{value:"1299",text:"天宁区"},{value:"1300",text:"钟楼区"},{value:"1301",text:"戚墅堰区"},{value:"1302",text:"新北区"},{value:"1303",text:"武进区"},{value:"1304",text:"溧阳市"},{value:"1305",text:"金坛市"}]},{value:"199",text:"苏州",children:[{value:"1307",text:"沧浪区"},{value:"1308",text:"平江区"},{value:"1309",text:"金阊区"},{value:"1310",text:"虎丘区"},{value:"1311",text:"吴中区"},{value:"1312",text:"相城区"},{value:"1313",text:"常熟市"},{value:"1314",text:"张家港市"},{value:"1315",text:"昆山市"},{value:"1316",text:"吴江市"},{value:"1317",text:"太仓市"}]},{value:"200",text:"南通",children:[{value:"1319",text:"崇川区"},{value:"1320",text:"港闸区"},{value:"1321",text:"海安县"},{value:"1322",text:"如东县"},{value:"1323",text:"启东市"},{value:"1324",text:"如皋市"},{value:"1325",text:"通州市"},{value:"1326",text:"海门市"}]},{value:"201",text:"连云港",children:[{value:"1328",text:"连云区"},{value:"1329",text:"新浦区"},{value:"1330",text:"海州区"},{value:"1331",text:"赣榆县"},{value:"1332",text:"东海县"},{value:"1333",text:"灌云县"},{value:"1334",text:"灌南县"}]},{value:"202",text:"淮安",children:[{value:"1336",text:"清河区"},{value:"1337",text:"楚州区"},{value:"1338",text:"淮阴区"},{value:"1339",text:"清浦区"},{value:"1340",text:"涟水县"},{value:"1341",text:"洪泽县"},{value:"1342",text:"盱眙县"},{value:"1343",text:"金湖县"}]},{value:"203",text:"盐城",children:[{value:"1345",text:"亭湖区"},{value:"1346",text:"盐都区"},{value:"1347",text:"响水县"},{value:"1348",text:"滨海县"},{value:"1349",text:"阜宁县"},{value:"1350",text:"射阳县"},{value:"1351",text:"建湖县"},{value:"1352",text:"东台市"},{value:"1353",text:"大丰市"}]},{value:"204",text:"扬州",children:[{value:"1355",text:"广陵区"},{value:"1356",text:"邗江区"},{value:"1357",text:"郊区"},{value:"1358",text:"宝应县"},{value:"1359",text:"仪征市"},{value:"1360",text:"高邮市"},{value:"1361",text:"江都市"}]},{value:"205",text:"镇江",children:[{value:"1363",text:"京口区"},{value:"1364",text:"润州区"},{value:"1365",text:"丹徒区"},{value:"1366",text:"丹阳市"},{value:"1367",text:"扬中市"},{value:"1368",text:"句容市"}]},{value:"206",text:"泰州",children:[{value:"1370",text:"海陵区"},{value:"1371",text:"高港区"},{value:"1372",text:"兴化市"},{value:"1373",text:"靖江市"},{value:"1374",text:"泰兴市"},{value:"1375",text:"姜堰市"}]},{value:"207",text:"宿迁",children:[{value:"1377",text:"宿城区"},{value:"1378",text:"宿豫区"},{value:"1379",text:"沭阳县"},{value:"1380",text:"泗阳县"},{value:"1381",text:"泗洪县"}]}]},{value:"98",text:"浙江",children:[{value:"208",text:"杭州",children:[{value:"1383",text:"上城区"},{value:"1384",text:"下城区"},{value:"1385",text:"江干区"},{value:"1386",text:"拱墅区"},{value:"1387",text:"西湖区"},{value:"1388",text:"滨江区"},{value:"1389",text:"萧山区"},{value:"1390",text:"余杭区"},{value:"1391",text:"桐庐县"},{value:"1392",text:"淳安县"},{value:"1393",text:"建德市"},{value:"1394",text:"富阳市"},{value:"1395",text:"临安市"}]},{value:"209",text:"宁波",children:[{value:"1397",text:"海曙区"},{value:"1398",text:"江东区"},{value:"1399",text:"江北区"},{value:"1400",text:"北仑区"},{value:"1401",text:"镇海区"},{value:"1402",text:"鄞州区"},{value:"1403",text:"象山县"},{value:"1404",text:"宁海县"},{value:"1405",text:"余姚市"},{value:"1406",text:"慈溪市"},{value:"1407",text:"奉化市"}]},{value:"210",text:"温州",children:[{value:"1409",text:"鹿城区"},{value:"1410",text:"龙湾区"},{value:"1411",text:"瓯海区"},{value:"1412",text:"洞头县"},{value:"1413",text:"永嘉县"},{value:"1414",text:"平阳县"},{value:"1415",text:"苍南县"},{value:"1416",text:"文成县"},{value:"1417",text:"泰顺县"},{value:"1418",text:"瑞安市"},{value:"1419",text:"乐清市"}]},{value:"211",text:"嘉兴",children:[{value:"1421",text:"秀城区"},{value:"1422",text:"秀洲区"},{value:"1423",text:"嘉善县"},{value:"1424",text:"海盐县"},{value:"1425",text:"海宁市"},{value:"1426",text:"平湖市"},{value:"1427",text:"桐乡市"}]},{value:"212",text:"湖州",children:[{value:"1429",text:"吴兴区"},{value:"1430",text:"南浔区"},{value:"1431",text:"德清县"},{value:"1432",text:"长兴县"},{value:"1433",text:"安吉县"}]},{value:"213",text:"绍兴",children:[{value:"1435",text:"越城区"},{value:"1436",text:"绍兴县"},{value:"1437",text:"新昌县"},{value:"1438",text:"诸暨市"},{value:"1439",text:"上虞市"},{value:"1440",text:"嵊州市"}]},{value:"214",text:"金华",children:[{value:"1442",text:"婺城区"},{value:"1443",text:"金东区"},{value:"1444",text:"武义县"},{value:"1445",text:"浦江县"},{value:"1446",text:"磐安县"},{value:"1447",text:"兰溪市"},{value:"1448",text:"义乌市"},{value:"1449",text:"东阳市"},{value:"1450",text:"永康市"}]},{value:"215",text:"衢州",children:[{value:"1452",text:"柯城区"},{value:"1453",text:"衢江区"},{value:"1454",text:"常山县"},{value:"1455",text:"开化县"},{value:"1456",text:"龙游县"},{value:"1457",text:"江山市"}]},{value:"216",text:"舟山",children:[{value:"1459",text:"定海区"},{value:"1460",text:"普陀区"},{value:"1461",text:"岱山县"},{value:"1462",text:"嵊泗县"}]},{value:"217",text:"台州",children:[{value:"1464",text:"椒江区"},{value:"1465",text:"黄岩区"},{value:"1466",text:"路桥区"},{value:"1467",text:"玉环县"},{value:"1468",text:"三门县"},{value:"1469",text:"天台县"},{value:"1470",text:"仙居县"},{value:"1471",text:"温岭市"},{value:"1472",text:"临海市"}]},{value:"218",text:"丽水",children:[{value:"1474",text:"莲都区"},{value:"1475",text:"青田县"},{value:"1476",text:"缙云县"},{value:"1477",text:"遂昌县"},{value:"1478",text:"松阳县"},{value:"1479",text:"云和县"},{value:"1480",text:"庆元县"},{value:"1481",text:"景宁畲族自治县"},{value:"1482",text:"龙泉市"}]}]},{value:"99",text:"安徽",children:[{value:"219",text:"合肥",children:[{value:"1484",text:"瑶海区"},{value:"1485",text:"庐阳区"},{value:"1486",text:"蜀山区"},{value:"1487",text:"包河区"},{value:"1488",text:"长丰县"},{value:"1489",text:"肥东县"},{value:"1490",text:"肥西县"}]},{value:"220",text:"芜湖",children:[{value:"1492",text:"镜湖区"},{value:"1493",text:"马塘区"},{value:"1494",text:"新芜区"},{value:"1495",text:"鸠江区"},{value:"1496",text:"芜湖县"},{value:"1497",text:"繁昌县"},{value:"1498",text:"南陵县"}]},{value:"221",text:"蚌埠",children:[{value:"1500",text:"龙子湖区"},{value:"1501",text:"蚌山区"},{value:"1502",text:"禹会区"},{value:"1503",text:"淮上区"},{value:"1504",text:"怀远县"},{value:"1505",text:"五河县"},{value:"1506",text:"固镇县"}]},{value:"222",text:"淮南",children:[{value:"1508",text:"大通区"},{value:"1509",text:"田家庵区"},{value:"1510",text:"谢家集区"},{value:"1511",text:"八公山区"},{value:"1512",text:"潘集区"},{value:"1513",text:"凤台县"}]},{value:"223",text:"马鞍山",children:[{value:"1515",text:"金家庄区"},{value:"1516",text:"花山区"},{value:"1517",text:"雨山区"},{value:"1518",text:"当涂县"}]},{value:"224",text:"淮北",children:[{value:"1520",text:"杜集区"},{value:"1521",text:"相山区"},{value:"1522",text:"烈山区"},{value:"1523",text:"濉溪县"}]},{value:"225",text:"铜陵",children:[{value:"1525",text:"铜官山区"},{value:"1526",text:"狮子山区"},{value:"1527",text:"郊区"},{value:"1528",text:"铜陵县"}]},{value:"226",text:"安庆",children:[{value:"1530",text:"迎江区"},{value:"1531",text:"大观区"},{value:"1532",text:"郊区"},{value:"1533",text:"怀宁县"},{value:"1534",text:"枞阳县"},{value:"1535",text:"潜山县"},{value:"1536",text:"太湖县"},{value:"1537",text:"宿松县"},{value:"1538",text:"望江县"},{value:"1539",text:"岳西县"},{value:"1540",text:"桐城市"}]},{value:"227",text:"黄山",children:[{value:"1542",text:"屯溪区"},{value:"1543",text:"黄山区"},{value:"1544",text:"徽州区"},{value:"1545",text:"歙县"},{value:"1546",text:"休宁县"},{value:"1547",text:"黟县"},{value:"1548",text:"祁门县"}]},{value:"228",text:"滁州",children:[{value:"1550",text:"琅琊区"},{value:"1551",text:"南谯区"},{value:"1552",text:"来安县"},{value:"1553",text:"全椒县"},{value:"1554",text:"定远县"},{value:"1555",text:"凤阳县"},{value:"1556",text:"天长市"},{value:"1557",text:"明光市"}]},{value:"229",text:"阜阳",children:[{value:"1559",text:"颍州区"},{value:"1560",text:"颍东区"},{value:"1561",text:"颍泉区"},{value:"1562",text:"临泉县"},{value:"1563",text:"太和县"},{value:"1564",text:"阜南县"},{value:"1565",text:"颍上县"},{value:"1566",text:"界首市"}]},{value:"230",text:"宿州",children:[{value:"1568",text:"墉桥区"},{value:"1569",text:"砀山县"},{value:"1570",text:"萧县"},{value:"1571",text:"灵璧县"},{value:"1572",text:"泗县"}]},{value:"231",text:"巢湖",children:[{value:"1574",text:"居巢区"},{value:"1575",text:"庐江县"},{value:"1576",text:"无为县"},{value:"1577",text:"含山县"},{value:"1578",text:"和县"}]},{value:"232",text:"六安",children:[{value:"1580",text:"金安区"},{value:"1581",text:"裕安区"},{value:"1582",text:"寿县"},{value:"1583",text:"霍邱县"},{value:"1584",text:"舒城县"},{value:"1585",text:"金寨县"},{value:"1586",text:"霍山县"}]},{value:"233",text:"亳州",children:[{value:"1588",text:"谯城区"},{value:"1589",text:"涡阳县"},{value:"1590",text:"蒙城县"},{value:"1591",text:"利辛县"}]},{value:"234",text:"池州",children:[{value:"1593",text:"贵池区"},{value:"1594",text:"东至县"},{value:"1595",text:"石台县"},{value:"1596",text:"青阳县"}]},{value:"235",text:"宣城",children:[{value:"1598",text:"宣州区"},{value:"1599",text:"郎溪县"},{value:"1600",text:"广德县"},{value:"1601",text:"泾县"},{value:"1602",text:"绩溪县"},{value:"1603",text:"旌德县"},{value:"1604",text:"宁国市"}]}]},{value:"100",text:"福建",children:[{value:"236",text:"福州",children:[{value:"1606",text:"鼓楼区"},{value:"1607",text:"台江区"},{value:"1608",text:"仓山区"},{value:"1609",text:"马尾区"},{value:"1610",text:"晋安区"},{value:"1611",text:"闽侯县"},{value:"1612",text:"连江县"},{value:"1613",text:"罗源县"},{value:"1614",text:"闽清县"},{value:"1615",text:"永泰县"},{value:"1616",text:"平潭县"},{value:"1617",text:"福清市"},{value:"1618",text:"长乐市"}]},{value:"237",text:"厦门",children:[{value:"1620",text:"思明区"},{value:"1621",text:"海沧区"},{value:"1622",text:"湖里区"},{value:"1623",text:"集美区"},{value:"1624",text:"同安区"},{value:"1625",text:"翔安区"}]},{value:"238",text:"莆田",children:[{value:"1627",text:"城厢区"},{value:"1628",text:"涵江区"},{value:"1629",text:"荔城区"},{value:"1630",text:"秀屿区"},{value:"1631",text:"仙游县"}]},{value:"239",text:"三明",children:[{value:"1633",text:"梅列区"},{value:"1634",text:"三元区"},{value:"1635",text:"明溪县"},{value:"1636",text:"清流县"},{value:"1637",text:"宁化县"},{value:"1638",text:"大田县"},{value:"1639",text:"尤溪县"},{value:"1640",text:"沙县"},{value:"1641",text:"将乐县"},{value:"1642",text:"泰宁县"},{value:"1643",text:"建宁县"},{value:"1644",text:"永安市"}]},{value:"240",text:"泉州",children:[{value:"1646",text:"鲤城区"},{value:"1647",text:"丰泽区"},{value:"1648",text:"洛江区"},{value:"1649",text:"泉港区"},{value:"1650",text:"惠安县"},{value:"1651",text:"安溪县"},{value:"1652",text:"永春县"},{value:"1653",text:"德化县"},{value:"1654",text:"金门县"},{value:"1655",text:"石狮市"},{value:"1656",text:"晋江市"},{value:"1657",text:"南安市"}]},{value:"241",text:"漳州",children:[{value:"1659",text:"芗城区"},{value:"1660",text:"龙文区"},{value:"1661",text:"云霄县"},{value:"1662",text:"漳浦县"},{value:"1663",text:"诏安县"},{value:"1664",text:"长泰县"},{value:"1665",text:"东山县"},{value:"1666",text:"南靖县"},{value:"1667",text:"平和县"},{value:"1668",text:"华安县"},{value:"1669",text:"龙海市"}]},{value:"242",text:"南平",children:[{value:"1671",text:"延平区"},{value:"1672",text:"顺昌县"},{value:"1673",text:"浦城县"},{value:"1674",text:"光泽县"},{value:"1675",text:"松溪县"},{value:"1676",text:"政和县"},{value:"1677",text:"邵武市"},{value:"1678",text:"武夷山市"},{value:"1679",text:"建瓯市"},{value:"1680",text:"建阳市"}]},{value:"243",text:"龙岩",children:[{value:"1682",text:"新罗区"},{value:"1683",text:"长汀县"},{value:"1684",text:"永定县"},{value:"1685",text:"上杭县"},{value:"1686",text:"武平县"},{value:"1687",text:"连城县"},{value:"1688",text:"漳平市"}]},{value:"244",text:"宁德",children:[{value:"1690",text:"蕉城区"},{value:"1691",text:"霞浦县"},{value:"1692",text:"古田县"},{value:"1693",text:"屏南县"},{value:"1694",text:"寿宁县"},{value:"1695",text:"周宁县"},{value:"1696",text:"柘荣县"},{value:"1697",text:"福安市"},{value:"1698",text:"福鼎市"}]}]},{value:"101",text:"江西",children:[{value:"245",text:"南昌",children:[{value:"1700",text:"东湖区"},{value:"1701",text:"西湖区"},{value:"1702",text:"青云谱区"},{value:"1703",text:"湾里区"},{value:"1704",text:"青山湖区"},{value:"1705",text:"南昌县"},{value:"1706",text:"新建县"},{value:"1707",text:"安义县"},{value:"1708",text:"进贤县"}]},{value:"246",text:"景德镇",children:[{value:"1710",text:"昌江区"},{value:"1711",text:"珠山区"},{value:"1712",text:"浮梁县"},{value:"1713",text:"乐平市"}]},{value:"247",text:"萍乡",children:[{value:"1715",text:"安源区"},{value:"1716",text:"湘东区"},{value:"1717",text:"莲花县"},{value:"1718",text:"上栗县"},{value:"1719",text:"芦溪县"}]},{value:"248",text:"九江",children:[{value:"1721",text:"庐山区"},{value:"1722",text:"浔阳区"},{value:"1723",text:"九江县"},{value:"1724",text:"武宁县"},{value:"1725",text:"修水县"},{value:"1726",text:"永修县"},{value:"1727",text:"德安县"},{value:"1728",text:"星子县"},{value:"1729",text:"都昌县"},{value:"1730",text:"湖口县"},{value:"1731",text:"彭泽县"},{value:"1732",text:"瑞昌市"}]},{value:"249",text:"新余",children:[{value:"1734",text:"渝水区"},{value:"1735",text:"分宜县"}]},{value:"250",text:"鹰潭",children:[{value:"1737",text:"月湖区"},{value:"1738",text:"余江县"},{value:"1739",text:"贵溪市"}]},{value:"251",text:"赣州",children:[{value:"1741",text:"章贡区"},{value:"1742",text:"赣县"},{value:"1743",text:"信丰县"},{value:"1744",text:"大余县"},{value:"1745",text:"上犹县"},{value:"1746",text:"崇义县"},{value:"1747",text:"安远县"},{value:"1748",text:"龙南县"},{value:"1749",text:"定南县"},{value:"1750",text:"全南县"},{value:"1751",text:"宁都县"},{value:"1752",text:"于都县"},{value:"1753",text:"兴国县"},{value:"1754",text:"会昌县"},{value:"1755",text:"寻乌县"},{value:"1756",text:"石城县"},{value:"1757",text:"瑞金市"},{value:"1758",text:"南康市"}]},{value:"252",text:"吉安",children:[{value:"1760",text:"吉州区"},{value:"1761",text:"青原区"},{value:"1762",text:"吉安县"},{value:"1763",text:"吉水县"},{value:"1764",text:"峡江县"},{value:"1765",text:"新干县"},{value:"1766",text:"永丰县"},{value:"1767",text:"泰和县"},{value:"1768",text:"遂川县"},{value:"1769",text:"万安县"},{value:"1770",text:"安福县"},{value:"1771",text:"永新县"},{value:"1772",text:"井冈山市"}]},{value:"253",text:"宜春",children:[{value:"1774",text:"袁州区"},{value:"1775",text:"奉新县"},{value:"1776",text:"万载县"},{value:"1777",text:"上高县"},{value:"1778",text:"宜丰县"},{value:"1779",text:"靖安县"},{value:"1780",text:"铜鼓县"},{value:"1781",text:"丰城市"},{value:"1782",text:"樟树市"},{value:"1783",text:"高安市"}]},{value:"254",text:"抚州",children:[{value:"1785",text:"临川区"},{value:"1786",text:"南城县"},{value:"1787",text:"黎川县"},{value:"1788",text:"南丰县"},{value:"1789",text:"崇仁县"},{value:"1790",text:"乐安县"},{value:"1791",text:"宜黄县"},{value:"1792",text:"金溪县"},{value:"1793",text:"资溪县"},{value:"1794",text:"东乡县"},{value:"1795",text:"广昌县"}]},{value:"255",text:"上饶",children:[{value:"1797",text:"信州区"},{value:"1798",text:"上饶县"},{value:"1799",text:"广丰县"},{value:"1800",text:"玉山县"},{value:"1801",text:"铅山县"},{value:"1802",text:"横峰县"},{value:"1803",text:"弋阳县"},{value:"1804",text:"余干县"},{value:"1805",text:"鄱阳县"},{value:"1806",text:"万年县"},{value:"1807",text:"婺源县"},{value:"1808",text:"德兴市"}]}]},{value:"102",text:"山东",children:[{value:"256",text:"济南",children:[{value:"1810",text:"历下区"},{value:"1811",text:"市中区"},{value:"1812",text:"槐荫区"},{value:"1813",text:"天桥区"},{value:"1814",text:"历城区"},{value:"1815",text:"长清区"},{value:"1816",text:"平阴县"},{value:"1817",text:"济阳县"},{value:"1818",text:"商河县"},{value:"1819",text:"章丘市"}]},{value:"257",text:"青岛",children:[{value:"1821",text:"市南区"},{value:"1822",text:"市北区"},{value:"1823",text:"四方区"},{value:"1824",text:"黄岛区"},{value:"1825",text:"崂山区"},{value:"1826",text:"李沧区"},{value:"1827",text:"城阳区"},{value:"1828",text:"胶州市"},{value:"1829",text:"即墨市"},{value:"1830",text:"平度市"},{value:"1831",text:"胶南市"},{value:"1832",text:"莱西市"}]},{value:"258",text:"淄博",children:[{value:"1834",text:"淄川区"},{value:"1835",text:"张店区"},{value:"1836",text:"博山区"},{value:"1837",text:"临淄区"},{value:"1838",text:"周村区"},{value:"1839",text:"桓台县"},{value:"1840",text:"高青县"},{value:"1841",text:"沂源县"}]},{value:"259",text:"枣庄",children:[{value:"1843",text:"市中区"},{value:"1844",text:"薛城区"},{value:"1845",text:"峄城区"},{value:"1846",text:"台儿庄区"},{value:"1847",text:"山亭区"},{value:"1848",text:"滕州市"}]},{value:"260",text:"东营",children:[{value:"1850",text:"东营区"},{value:"1851",text:"河口区"},{value:"1852",text:"垦利县"},{value:"1853",text:"利津县"},{value:"1854",text:"广饶县"}]},{value:"261",text:"烟台",children:[{value:"1856",text:"芝罘区"},{value:"1857",text:"福山区"},{value:"1858",text:"牟平区"},{value:"1859",text:"莱山区"},{value:"1860",text:"长岛县"},{value:"1861",text:"龙口市"},{value:"1862",text:"莱阳市"},{value:"1863",text:"莱州市"},{value:"1864",text:"蓬莱市"},{value:"1865",text:"招远市"},{value:"1866",text:"栖霞市"},{value:"1867",text:"海阳市"}]},{value:"262",text:"潍坊",children:[{value:"1869",text:"潍城区"},{value:"1870",text:"寒亭区"},{value:"1871",text:"坊子区"},{value:"1872",text:"奎文区"},{value:"1873",text:"临朐县"},{value:"1874",text:"昌乐县"},{value:"1875",text:"青州市"},{value:"1876",text:"诸城市"},{value:"1877",text:"寿光市"},{value:"1878",text:"安丘市"},{value:"1879",text:"高密市"},{value:"1880",text:"昌邑市"}]},{value:"263",text:"济宁",children:[{value:"1882",text:"市中区"},{value:"1883",text:"任城区"},{value:"1884",text:"微山县"},{value:"1885",text:"鱼台县"},{value:"1886",text:"金乡县"},{value:"1887",text:"嘉祥县"},{value:"1888",text:"汶上县"},{value:"1889",text:"泗水县"},{value:"1890",text:"梁山县"},{value:"1891",text:"曲阜市"},{value:"1892",text:"兖州市"},{value:"1893",text:"邹城市"}]},{value:"264",text:"泰安",children:[{value:"1895",text:"泰山区"},{value:"1896",text:"岱岳区"},{value:"1897",text:"宁阳县"},{value:"1898",text:"东平县"},{value:"1899",text:"新泰市"},{value:"1900",text:"肥城市"}]},{value:"265",text:"威海",children:[{value:"1902",text:"环翠区"},{value:"1903",text:"文登市"},{value:"1904",text:"荣成市"},{value:"1905",text:"乳山市"}]},{value:"266",text:"日照",children:[{value:"1907",text:"东港区"},{value:"1908",text:"岚山区"},{value:"1909",text:"五莲县"},{value:"1910",text:"莒县"}]},{value:"267",text:"莱芜",children:[{value:"1912",text:"莱城区"},{value:"1913",text:"钢城区"}]},{value:"268",text:"临沂",children:[{value:"1915",text:"兰山区"},{value:"1916",text:"罗庄区"},{value:"1917",text:"河东区"},{value:"1918",text:"沂南县"},{value:"1919",text:"郯城县"},{value:"1920",text:"沂水县"},{value:"1921",text:"苍山县"},{value:"1922",text:"费县"},{value:"1923",text:"平邑县"},{value:"1924",text:"莒南县"},{value:"1925",text:"蒙阴县"},{value:"1926",text:"临沭县"}]},{value:"269",text:"德州",children:[{value:"1928",text:"德城区"},{value:"1929",text:"陵县"},{value:"1930",text:"宁津县"},{value:"1931",text:"庆云县"},{value:"1932",text:"临邑县"},{value:"1933",text:"齐河县"},{value:"1934",text:"平原县"},{value:"1935",text:"夏津县"},{value:"1936",text:"武城县"},{value:"1937",text:"乐陵市"},{value:"1938",text:"禹城市"}]},{value:"270",text:"聊城",children:[{value:"1940",text:"东昌府区"},{value:"1941",text:"阳谷县"},{value:"1942",text:"莘县"},{value:"1943",text:"茌平县"},{value:"1944",text:"东阿县"},{value:"1945",text:"冠县"},{value:"1946",text:"高唐县"},{value:"1947",text:"临清市"}]},{value:"271",text:"滨州",children:[{value:"1949",text:"滨城区"},{value:"1950",text:"惠民县"},{value:"1951",text:"阳信县"},{value:"1952",text:"无棣县"},{value:"1953",text:"沾化县"},{value:"1954",text:"博兴县"},{value:"1955",text:"邹平县"}]},{value:"272",text:"荷泽",children:[{value:"1957",text:"牡丹区"},{value:"1958",text:"曹县"},{value:"1959",text:"单县"},{value:"1960",text:"成武县"},{value:"1961",text:"巨野县"},{value:"1962",text:"郓城县"},{value:"1963",text:"鄄城县"},{value:"1964",text:"定陶县"},{value:"1965",text:"东明县"}]}]},{value:"103",text:"河南",children:[{value:"273",text:"郑州",children:[{value:"1967",text:"中原区"},{value:"1968",text:"二七区"},{value:"1969",text:"管城回族区"},{value:"1970",text:"金水区"},{value:"1971",text:"上街区"},{value:"1972",text:"邙山区"},{value:"1973",text:"中牟县"},{value:"1974",text:"巩义市"},{value:"1975",text:"荥阳市"},{value:"1976",text:"新密市"},{value:"1977",text:"新郑市"},{value:"1978",text:"登封市"}]},{value:"274",text:"开封",children:[{value:"1980",text:"龙亭区"},{value:"1981",text:"顺河回族区"},{value:"1982",text:"鼓楼区"},{value:"1983",text:"南关区"},{value:"1984",text:"郊区"},{value:"1985",text:"杞县"},{value:"1986",text:"通许县"},{value:"1987",text:"尉氏县"},{value:"1988",text:"开封县"},{value:"1989",text:"兰考县"}]},{value:"275",text:"洛阳",children:[{value:"1991",text:"老城区"},{value:"1992",text:"西工区"},{value:"1993",text:"廛河回族区"},{value:"1994",text:"涧西区"},{value:"1995",text:"吉利区"},{value:"1996",text:"洛龙区"},{value:"1997",text:"孟津县"},{value:"1998",text:"新安县"},{value:"1999",text:"栾川县"},{value:"2000",text:"嵩县"},{value:"2001",text:"汝阳县"},{value:"2002",text:"宜阳县"},{value:"2003",text:"洛宁县"},{value:"2004",text:"伊川县"},{value:"2005",text:"偃师市"}]},{value:"276",text:"平顶山",children:[{value:"2007",text:"新华区"},{value:"2008",text:"卫东区"},{value:"2009",text:"石龙区"},{value:"2010",text:"湛河区"},{value:"2011",text:"宝丰县"},{value:"2012",text:"叶县"},{value:"2013",text:"鲁山县"},{value:"2014",text:"郏县"},{value:"2015",text:"舞钢市"},{value:"2016",text:"汝州市"}]},{value:"277",text:"安阳",children:[{value:"2018",text:"文峰区"},{value:"2019",text:"北关区"},{value:"2020",text:"殷都区"},{value:"2021",text:"龙安区"},{value:"2022",text:"安阳县"},{value:"2023",text:"汤阴县"},{value:"2024",text:"滑县"},{value:"2025",text:"内黄县"},{value:"2026",text:"林州市"}]},{value:"278",text:"鹤壁",children:[{value:"2028",text:"鹤山区"},{value:"2029",text:"山城区"},{value:"2030",text:"淇滨区"},{value:"2031",text:"浚县"},{value:"2032",text:"淇县"}]},{value:"279",text:"新乡",children:[{value:"2034",text:"红旗区"},{value:"2035",text:"卫滨区"},{value:"2036",text:"凤泉区"},{value:"2037",text:"牧野区"},{value:"2038",text:"新乡县"},{value:"2039",text:"获嘉县"},{value:"2040",text:"原阳县"},{value:"2041",text:"延津县"},{value:"2042",text:"封丘县"},{value:"2043",text:"长垣县"},{value:"2044",text:"卫辉市"},{value:"2045",text:"辉县市"}]},{value:"280",text:"焦作",children:[{value:"2047",text:"解放区"},{value:"2048",text:"中站区"},{value:"2049",text:"马村区"},{value:"2050",text:"山阳区"},{value:"2051",text:"修武县"},{value:"2052",text:"博爱县"},{value:"2053",text:"武陟县"},{value:"2054",text:"温县"},{value:"2055",text:"济源市"},{value:"2056",text:"沁阳市"},{value:"2057",text:"孟州市"}]},{value:"281",text:"濮阳",children:[{value:"2059",text:"华龙区"},{value:"2060",text:"清丰县"},{value:"2061",text:"南乐县"},{value:"2062",text:"范县"},{value:"2063",text:"台前县"},{value:"2064",text:"濮阳县"}]},{value:"282",text:"许昌",children:[{value:"2066",text:"魏都区"},{value:"2067",text:"许昌县"},{value:"2068",text:"鄢陵县"},{value:"2069",text:"襄城县"},{value:"2070",text:"禹州市"},{value:"2071",text:"长葛市"}]},{value:"283",text:"漯河",children:[{value:"2073",text:"源汇区"},{value:"2074",text:"郾城区"},{value:"2075",text:"召陵区"},{value:"2076",text:"舞阳县"},{value:"2077",text:"临颍县"}]},{value:"284",text:"三门峡",children:[{value:"2079",text:"湖滨区"},{value:"2080",text:"渑池县"},{value:"2081",text:"陕县"},{value:"2082",text:"卢氏县"},{value:"2083",text:"义马市"},{value:"2084",text:"灵宝市"}]},{value:"285",text:"南阳",children:[{value:"2086",text:"宛城区"},{value:"2087",text:"卧龙区"},{value:"2088",text:"南召县"},{value:"2089",text:"方城县"},{value:"2090",text:"西峡县"},{value:"2091",text:"镇平县"},{value:"2092",text:"内乡县"},{value:"2093",text:"淅川县"},{value:"2094",text:"社旗县"},{value:"2095",text:"唐河县"},{value:"2096",text:"新野县"},{value:"2097",text:"桐柏县"},{value:"2098",text:"邓州市"}]},{value:"286",text:"商丘",children:[{value:"2100",text:"梁园区"},{value:"2101",text:"睢阳区"},{value:"2102",text:"民权县"},{value:"2103",text:"睢县"},{value:"2104",text:"宁陵县"},{value:"2105",text:"柘城县"},{value:"2106",text:"虞城县"},{value:"2107",text:"夏邑县"},{value:"2108",text:"永城市"}]},{value:"287",text:"信阳",children:[{value:"2110",text:"师河区"},{value:"2111",text:"平桥区"},{value:"2112",text:"罗山县"},{value:"2113",text:"光山县"},{value:"2114",text:"新县"},{value:"2115",text:"商城县"},{value:"2116",text:"固始县"},{value:"2117",text:"潢川县"},{value:"2118",text:"淮滨县"},{value:"2119",text:"息县"}]},{value:"288",text:"周口",children:[{value:"2121",text:"川汇区"},{value:"2122",text:"扶沟县"},{value:"2123",text:"西华县"},{value:"2124",text:"商水县"},{value:"2125",text:"沈丘县"},{value:"2126",text:"郸城县"},{value:"2127",text:"淮阳县"},{value:"2128",text:"太康县"},{value:"2129",text:"鹿邑县"},{value:"2130",text:"项城市"}]},{value:"289",text:"驻马店",children:[{value:"2132",text:"驿城区"},{value:"2133",text:"西平县"},{value:"2134",text:"上蔡县"},{value:"2135",text:"平舆县"},{value:"2136",text:"正阳县"},{value:"2137",text:"确山县"},{value:"2138",text:"泌阳县"},{value:"2139",text:"汝南县"},{value:"2140",text:"遂平县"},{value:"2141",text:"新蔡县"}]}]},{value:"104",text:"湖北",children:[{value:"290",text:"武汉",children:[{value:"2143",text:"江岸区"},{value:"2144",text:"江汉区"},{value:"2145",text:"乔口区"},{value:"2146",text:"汉阳区"},{value:"2147",text:"武昌区"},{value:"2148",text:"青山区"},{value:"2149",text:"洪山区"},{value:"2150",text:"东西湖区"},{value:"2151",text:"汉南区"},{value:"2152",text:"蔡甸区"},{value:"2153",text:"江夏区"},{value:"2154",text:"黄陂区"},{value:"2155",text:"新洲区"}]},{value:"291",text:"黄石",children:[{value:"2157",text:"黄石港区"},{value:"2158",text:"西塞山区"},{value:"2159",text:"下陆区"},{value:"2160",text:"铁山区"},{value:"2161",text:"阳新县"},{value:"2162",text:"大冶市"}]},{value:"292",text:"十堰",children:[{value:"2164",text:"茅箭区"},{value:"2165",text:"张湾区"},{value:"2166",text:"郧县"},{value:"2167",text:"郧西县"},{value:"2168",text:"竹山县"},{value:"2169",text:"竹溪县"},{value:"2170",text:"房县"},{value:"2171",text:"丹江口市"}]},{value:"293",text:"宜昌",children:[{value:"2173",text:"西陵区"},{value:"2174",text:"伍家岗区"},{value:"2175",text:"点军区"},{value:"2176",text:"猇亭区"},{value:"2177",text:"夷陵区"},{value:"2178",text:"远安县"},{value:"2179",text:"兴山县"},{value:"2180",text:"秭归县"},{value:"2181",text:"长阳土家族自治县"},{value:"2182",text:"五峰土家族自治县"},{value:"2183",text:"宜都市"},{value:"2184",text:"当阳市"},{value:"2185",text:"枝江市"}]},{value:"294",text:"襄樊",children:[{value:"2187",text:"襄城区"},{value:"2188",text:"樊城区"},{value:"2189",text:"襄阳区"},{value:"2190",text:"南漳县"},{value:"2191",text:"谷城县"},{value:"2192",text:"保康县"},{value:"2193",text:"老河口市"},{value:"2194",text:"枣阳市"},{value:"2195",text:"宜城市"}]},{value:"295",text:"鄂州",children:[{value:"2197",text:"梁子湖区"},{value:"2198",text:"华容区"},{value:"2199",text:"鄂城区"}]},{value:"296",text:"荆门",children:[{value:"2201",text:"东宝区"},{value:"2202",text:"掇刀区"},{value:"2203",text:"京山县"},{value:"2204",text:"沙洋县"},{value:"2205",text:"钟祥市"}]},{value:"297",text:"孝感",children:[{value:"2207",text:"孝南区"},{value:"2208",text:"孝昌县"},{value:"2209",text:"大悟县"},{value:"2210",text:"云梦县"},{value:"2211",text:"应城市"},{value:"2212",text:"安陆市"},{value:"2213",text:"汉川市"}]},{value:"298",text:"荆州",children:[{value:"2215",text:"沙市区"},{value:"2216",text:"荆州区"},{value:"2217",text:"公安县"},{value:"2218",text:"监利县"},{value:"2219",text:"江陵县"},{value:"2220",text:"石首市"},{value:"2221",text:"洪湖市"},{value:"2222",text:"松滋市"}]},{value:"299",text:"黄冈",children:[{value:"2224",text:"黄州区"},{value:"2225",text:"团风县"},{value:"2226",text:"红安县"},{value:"2227",text:"罗田县"},{value:"2228",text:"英山县"},{value:"2229",text:"浠水县"},{value:"2230",text:"蕲春县"},{value:"2231",text:"黄梅县"},{value:"2232",text:"麻城市"},{value:"2233",text:"武穴市"}]},{value:"300",text:"咸宁",children:[{value:"2235",text:"咸安区"},{value:"2236",text:"嘉鱼县"},{value:"2237",text:"通城县"},{value:"2238",text:"崇阳县"},{value:"2239",text:"通山县"},{value:"2240",text:"赤壁市"}]},{value:"301",text:"随州",children:[{value:"2242",text:"曾都区"},{value:"2243",text:"广水市"}]},{value:"302",text:"恩施",children:[{value:"2244",text:"恩施市"},{value:"2245",text:"利川市"},{value:"2246",text:"建始县"},{value:"2247",text:"巴东县"},{value:"2248",text:"宣恩县"},{value:"2249",text:"咸丰县"},{value:"2250",text:"来凤县"},{value:"2251",text:"鹤峰县"}]}]},{value:"105",text:"湖南",children:[{value:"304",text:"长沙",children:[{value:"2257",text:"芙蓉区"},{value:"2258",text:"天心区"},{value:"2259",text:"岳麓区"},{value:"2260",text:"开福区"},{value:"2261",text:"雨花区"},{value:"2262",text:"长沙县"},{value:"2263",text:"望城县"},{value:"2264",text:"宁乡县"},{value:"2265",text:"浏阳市"}]},{value:"305",text:"株洲",children:[{value:"2267",text:"荷塘区"},{value:"2268",text:"芦淞区"},{value:"2269",text:"石峰区"},{value:"2270",text:"天元区"},{value:"2271",text:"株洲县"},{value:"2272",text:"攸县"},{value:"2273",text:"茶陵县"},{value:"2274",text:"炎陵县"},{value:"2275",text:"醴陵市"}]},{value:"306",text:"湘潭",children:[{value:"2277",text:"雨湖区"},{value:"2278",text:"岳塘区"},{value:"2279",text:"湘潭县"},{value:"2280",text:"湘乡市"},{value:"2281",text:"韶山市"}]},{value:"307",text:"衡阳",children:[{value:"2283",text:"珠晖区"},{value:"2284",text:"雁峰区"},{value:"2285",text:"石鼓区"},{value:"2286",text:"蒸湘区"},{value:"2287",text:"南岳区"},{value:"2288",text:"衡阳县"},{value:"2289",text:"衡南县"},{value:"2290",text:"衡山县"},{value:"2291",text:"衡东县"},{value:"2292",text:"祁东县"},{value:"2293",text:"耒阳市"},{value:"2294",text:"常宁市"}]},{value:"308",text:"邵阳",children:[{value:"2296",text:"双清区"},{value:"2297",text:"大祥区"},{value:"2298",text:"北塔区"},{value:"2299",text:"邵东县"},{value:"2300",text:"新邵县"},{value:"2301",text:"邵阳县"},{value:"2302",text:"隆回县"},{value:"2303",text:"洞口县"},{value:"2304",text:"绥宁县"},{value:"2305",text:"新宁县"},{value:"2306",text:"城步苗族自治县"},{value:"2307",text:"武冈市"}]},{value:"309",text:"岳阳",children:[{value:"2309",text:"岳阳楼区"},{value:"2310",text:"云溪区"},{value:"2311",text:"君山区"},{value:"2312",text:"岳阳县"},{value:"2313",text:"华容县"},{value:"2314",text:"湘阴县"},{value:"2315",text:"平江县"},{value:"2316",text:"汨罗市"},{value:"2317",text:"临湘市"}]},{value:"310",text:"常德",children:[{value:"2319",text:"武陵区"},{value:"2320",text:"鼎城区"},{value:"2321",text:"安乡县"},{value:"2322",text:"汉寿县"},{value:"2323",text:"澧县"},{value:"2324",text:"临澧县"},{value:"2325",text:"桃源县"},{value:"2326",text:"石门县"},{value:"2327",text:"津市市"}]},{value:"311",text:"张家界",children:[{value:"2329",text:"永定区"},{value:"2330",text:"武陵源区"},{value:"2331",text:"慈利县"},{value:"2332",text:"桑植县"}]},{value:"312",text:"益阳",children:[{value:"2334",text:"资阳区"},{value:"2335",text:"赫山区"},{value:"2336",text:"南县"},{value:"2337",text:"桃江县"},{value:"2338",text:"安化县"},{value:"2339",text:"沅江市"}]},{value:"313",text:"郴州",children:[{value:"2341",text:"北湖区"},{value:"2342",text:"苏仙区"},{value:"2343",text:"桂阳县"},{value:"2344",text:"宜章县"},{value:"2345",text:"永兴县"},{value:"2346",text:"嘉禾县"},{value:"2347",text:"临武县"},{value:"2348",text:"汝城县"},{value:"2349",text:"桂东县"},{value:"2350",text:"安仁县"},{value:"2351",text:"资兴市"}]},{value:"314",text:"永州",children:[{value:"2353",text:"芝山区"},{value:"2354",text:"冷水滩区"},{value:"2355",text:"祁阳县"},{value:"2356",text:"东安县"},{value:"2357",text:"双牌县"},{value:"2358",text:"道县"},{value:"2359",text:"江永县"},{value:"2360",text:"宁远县"},{value:"2361",text:"蓝山县"},{value:"2362",text:"新田县"},{value:"2363",text:"江华瑶族自治县"}]},{value:"315",text:"怀化",children:[{value:"2365",text:"鹤城区"},{value:"2366",text:"中方县"},{value:"2367",text:"沅陵县"},{value:"2368",text:"辰溪县"},{value:"2369",text:"溆浦县"},{value:"2370",text:"会同县"},{value:"2371",text:"麻阳苗族自治县"},{value:"2372",text:"新晃侗族自治县"},{value:"2373",text:"芷江侗族自治县"},{value:"2374",text:"靖州苗族侗族自治县"},{value:"2375",text:"通道侗族自治县"},{value:"2376",text:"洪江市"}]},{value:"316",text:"娄底",children:[{value:"2378",text:"娄星区"},{value:"2379",text:"双峰县"},{value:"2380",text:"新化县"},{value:"2381",text:"冷水江市"},{value:"2382",text:"涟源市"}]},{value:"317",text:"湘西",children:[{value:"2383",text:"吉首市"},{value:"2384",text:"泸溪县"},{value:"2385",text:"凤凰县"},{value:"2386",text:"花垣县"},{value:"2387",text:"保靖县"},{value:"2388",text:"古丈县"},{value:"2389",text:"永顺县"},{value:"2390",text:"龙山县"}]}]},{value:"106",text:"广东",children:[{value:"318",text:"广州",children:[{value:"2393",text:"荔湾区"},{value:"2394",text:"越秀区"},{value:"2395",text:"海珠区"},{value:"2396",text:"天河区"},{value:"2397",text:"芳村区"},{value:"2398",text:"白云区"},{value:"2399",text:"黄埔区"},{value:"2400",text:"番禺区"},{value:"2401",text:"花都区"},{value:"2402",text:"增城市"},{value:"2403",text:"从化市"}]},{value:"319",text:"韶关",children:[{value:"2405",text:"武江区"},{value:"2406",text:"浈江区"},{value:"2407",text:"曲江区"},{value:"2408",text:"始兴县"},{value:"2409",text:"仁化县"},{value:"2410",text:"翁源县"},{value:"2411",text:"乳源瑶族自治县"},{value:"2412",text:"新丰县"},{value:"2413",text:"乐昌市"},{value:"2414",text:"南雄市"}]},{value:"320",text:"深圳",children:[{value:"2416",text:"罗湖区"},{value:"2417",text:"福田区"},{value:"2418",text:"南山区"},{value:"2419",text:"宝安区"},{value:"2420",text:"龙岗区"},{value:"2421",text:"盐田区"}]},{value:"321",text:"珠海",children:[{value:"2423",text:"香洲区"},{value:"2424",text:"斗门区"},{value:"2425",text:"金湾区"}]},{value:"322",text:"汕头",children:[{value:"2427",text:"龙湖区"},{value:"2428",text:"金平区"},{value:"2429",text:"濠江区"},{value:"2430",text:"潮阳区"},{value:"2431",text:"潮南区"},{value:"2432",text:"澄海区"},{value:"2433",text:"南澳县"}]},{value:"323",text:"佛山",children:[{value:"2435",text:"禅城区"},{value:"2436",text:"南海区"},{value:"2437",text:"顺德区"},{value:"2438",text:"三水区"},{value:"2439",text:"高明区"}]},{value:"324",text:"江门",children:[{value:"2441",text:"蓬江区"},{value:"2442",text:"江海区"},{value:"2443",text:"新会区"},{value:"2444",text:"台山市"},{value:"2445",text:"开平市"},{value:"2446",text:"鹤山市"},{value:"2447",text:"恩平市"}]},{value:"325",text:"湛江",children:[{value:"2449",text:"赤坎区"},{value:"2450",text:"霞山区"},{value:"2451",text:"坡头区"},{value:"2452",text:"麻章区"},{value:"2453",text:"遂溪县"},{value:"2454",text:"徐闻县"},{value:"2455",text:"廉江市"},{value:"2456",text:"雷州市"},{value:"2457",text:"吴川市"}]},{value:"326",text:"茂名",children:[{value:"2459",text:"茂南区"},{value:"2460",text:"茂港区"},{value:"2461",text:"电白县"},{value:"2462",text:"高州市"},{value:"2463",text:"化州市"},{value:"2464",text:"信宜市"}]},{value:"327",text:"肇庆",children:[{value:"2466",text:"端州区"},{value:"2467",text:"鼎湖区"},{value:"2468",text:"广宁县"},{value:"2469",text:"怀集县"},{value:"2470",text:"封开县"},{value:"2471",text:"德庆县"},{value:"2472",text:"高要市"},{value:"2473",text:"四会市"}]},{value:"328",text:"惠州",children:[{value:"2475",text:"惠城区"},{value:"2476",text:"惠阳区"},{value:"2477",text:"博罗县"},{value:"2478",text:"惠东县"},{value:"2479",text:"龙门县"}]},{value:"329",text:"梅州",children:[{value:"2481",text:"梅江区"},{value:"2482",text:"梅县"},{value:"2483",text:"大埔县"},{value:"2484",text:"丰顺县"},{value:"2485",text:"五华县"},{value:"2486",text:"平远县"},{value:"2487",text:"蕉岭县"},{value:"2488",text:"兴宁市"}]},{value:"330",text:"汕尾",children:[{value:"2490",text:"城区"},{value:"2491",text:"海丰县"},{value:"2492",text:"陆河县"},{value:"2493",text:"陆丰市"}]},{value:"331",text:"河源",children:[{value:"2495",text:"源城区"},{value:"2496",text:"紫金县"},{value:"2497",text:"龙川县"},{value:"2498",text:"连平县"},{value:"2499",text:"和平县"},{value:"2500",text:"东源县"}]},{value:"332",text:"阳江",children:[{value:"2502",text:"江城区"},{value:"2503",text:"阳西县"},{value:"2504",text:"阳东县"},{value:"2505",text:"阳春市"}]},{value:"333",text:"清远",children:[{value:"2507",text:"清城区"},{value:"2508",text:"佛冈县"},{value:"2509",text:"阳山县"},{value:"2510",text:"连山壮族瑶族自治县"},{value:"2511",text:"连南瑶族自治县"},{value:"2512",text:"清新县"},{value:"2513",text:"英德市"},{value:"2514",text:"连州市"}]},{value:"334",text:"东莞"},{value:"335",text:"中山"},{value:"336",text:"潮州",children:[{value:"2516",text:"湘桥区"},{value:"2517",text:"潮安县"},{value:"2518",text:"饶平县"}]},{value:"337",text:"揭阳",children:[{value:"2520",text:"榕城区"},{value:"2521",text:"揭东县"},{value:"2522",text:"揭西县"},{value:"2523",text:"惠来县"},{value:"2524",text:"普宁市"}]},{value:"338",text:"云浮",children:[{value:"2526",text:"云城区"},{value:"2527",text:"新兴县"},{value:"2528",text:"郁南县"},{value:"2529",text:"云安县"},{value:"2530",text:"罗定市"}]}]},{value:"107",text:"广西",children:[{value:"339",text:"南宁",children:[{value:"2532",text:"兴宁区"},{value:"2533",text:"青秀区"},{value:"2534",text:"江南区"},{value:"2535",text:"西乡塘区"},{value:"2536",text:"良庆区"},{value:"2537",text:"邕宁区"},{value:"2538",text:"武鸣县"},{value:"2539",text:"隆安县"},{value:"2540",text:"马山县"},{value:"2541",text:"上林县"},{value:"2542",text:"宾阳县"},{value:"2543",text:"横县"}]},{value:"340",text:"柳州",children:[{value:"2545",text:"城中区"},{value:"2546",text:"鱼峰区"},{value:"2547",text:"柳南区"},{value:"2548",text:"柳北区"},{value:"2549",text:"柳江县"},{value:"2550",text:"柳城县"},{value:"2551",text:"鹿寨县"},{value:"2552",text:"融安县"},{value:"2553",text:"融水苗族自治县"},{value:"2554",text:"三江侗族自治县"}]},{value:"341",text:"桂林",children:[{value:"2556",text:"秀峰区"},{value:"2557",text:"叠彩区"},{value:"2558",text:"象山区"},{value:"2559",text:"七星区"},{value:"2560",text:"雁山区"},{value:"2561",text:"阳朔县"},{value:"2562",text:"临桂县"},{value:"2563",text:"灵川县"},{value:"2564",text:"全州县"},{value:"2565",text:"兴安县"},{value:"2566",text:"永福县"},{value:"2567",text:"灌阳县"},{value:"2568",text:"龙胜各族自治县"},{value:"2569",text:"资源县"},{value:"2570",text:"平乐县"},{value:"2571",text:"荔蒲县"},{value:"2572",text:"恭城瑶族自治县"}]},{value:"342",text:"梧州",children:[{value:"2574",text:"万秀区"},{value:"2575",text:"蝶山区"},{value:"2576",text:"长洲区"},{value:"2577",text:"苍梧县"},{value:"2578",text:"藤县"},{value:"2579",text:"蒙山县"},{value:"2580",text:"岑溪市"}]},{value:"343",text:"北海",children:[{value:"2582",text:"海城区"},{value:"2583",text:"银海区"},{value:"2584",text:"铁山港区"},{value:"2585",text:"合浦县"}]},{value:"344",text:"防城港",children:[{value:"2587",text:"港口区"},{value:"2588",text:"防城区"},{value:"2589",text:"上思县"},{value:"2590",text:"东兴市"}]},{value:"345",text:"钦州",children:[{value:"2592",text:"钦南区"},{value:"2593",text:"钦北区"},{value:"2594",text:"灵山县"},{value:"2595",text:"浦北县"}]},{value:"346",text:"贵港",children:[{value:"2597",text:"港北区"},{value:"2598",text:"港南区"},{value:"2599",text:"覃塘区"},{value:"2600",text:"平南县"},{value:"2601",text:"桂平市"}]},{value:"347",text:"玉林",children:[{value:"2603",text:"玉州区"},{value:"2604",text:"容县"},{value:"2605",text:"陆川县"},{value:"2606",text:"博白县"},{value:"2607",text:"兴业县"},{value:"2608",text:"北流市"}]},{value:"348",text:"百色",children:[{value:"2610",text:"右江区"},{value:"2611",text:"田阳县"},{value:"2612",text:"田东县"},{value:"2613",text:"平果县"},{value:"2614",text:"德保县"},{value:"2615",text:"靖西县"},{value:"2616",text:"那坡县"},{value:"2617",text:"凌云县"},{value:"2618",text:"乐业县"},{value:"2619",text:"田林县"},{value:"2620",text:"西林县"},{value:"2621",text:"隆林各族自治县"}]},{value:"349",text:"贺州",children:[{value:"2623",text:"八步区"},{value:"2624",text:"昭平县"},{value:"2625",text:"钟山县"},{value:"2626",text:"富川瑶族自治县"}]},{value:"350",text:"河池",children:[{value:"2628",text:"金城江区"},{value:"2629",text:"南丹县"},{value:"2630",text:"天峨县"},{value:"2631",text:"凤山县"},{value:"2632",text:"东兰县"},{value:"2633",text:"罗城仫佬族自治县"},{value:"2634",text:"环江毛南族自治县"},{value:"2635",text:"巴马瑶族自治县"},{value:"2636",text:"都安瑶族自治县"},{value:"2637",text:"大化瑶族自治县"},{value:"2638",text:"宜州市"}]},{value:"351",text:"来宾",children:[{value:"2640",text:"兴宾区"},{value:"2641",text:"忻城县"},{value:"2642",text:"象州县"},{value:"2643",text:"武宣县"},{value:"2644",text:"金秀瑶族自治县"},{value:"2645",text:"合山市"}]},{value:"352",text:"崇左",children:[{value:"2647",text:"江洲区"},{value:"2648",text:"扶绥县"},{value:"2649",text:"宁明县"},{value:"2650",text:"龙州县"},{value:"2651",text:"大新县"},{value:"2652",text:"天等县"},{value:"2653",text:"凭祥市"}]}]},{value:"108",text:"海南",children:[{value:"353",text:"海口",children:[{value:"2655",text:"秀英区"},{value:"2656",text:"龙华区"},{value:"2657",text:"琼山区"},{value:"2658",text:"美兰区"}]},{value:"354",text:"三亚"}]},{value:"83",text:"重庆",children:[{value:"109",text:"重庆",children:[{value:"2679",text:"万州区"},{value:"2680",text:"涪陵区"},{value:"2681",text:"渝中区"},{value:"2682",text:"大渡口区"},{value:"2683",text:"江北区"},{value:"2684",text:"沙坪坝区"},{value:"2685",text:"九龙坡区"},{value:"2686",text:"南岸区"},{value:"2687",text:"北碚区"},{value:"2688",text:"万盛区"},{value:"2689",text:"双桥区"},{value:"2690",text:"渝北区"},{value:"2691",text:"巴南区"},{value:"2692",text:"黔江区"},{value:"2693",text:"长寿区"},{value:"2694",text:"綦江县"},{value:"2695",text:"潼南县"},{value:"2696",text:"铜梁县"},{value:"2697",text:"大足县"},{value:"2698",text:"荣昌县"},{value:"2699",text:"璧山县"},{value:"2700",text:"梁平县"},{value:"2701",text:"城口县"},{value:"2702",text:"丰都县"},{value:"2703",text:"垫江县"},{value:"2704",text:"武隆县"},{value:"2705",text:"忠县"},{value:"2706",text:"开县"},{value:"2707",text:"云阳县"},{value:"2708",text:"奉节县"},{value:"2709",text:"巫山县"},{value:"2710",text:"巫溪县"},{value:"2711",text:"石柱土家族自治县"},{value:"2712",text:"秀山土家族苗族自治县"},{value:"2713",text:"酉阳土家族苗族自治县"},{value:"2714",text:"彭水苗族土家族自治县"},{value:"2715",text:"江津市"},{value:"2716",text:"合川市"},{value:"2717",text:"永川市"},{value:"2718",text:"南川市"}]}]},{value:"110",text:"四川",children:[{value:"357",text:"成都",children:[{value:"2720",text:"锦江区"},{value:"2721",text:"青羊区"},{value:"2722",text:"金牛区"},{value:"2723",text:"武侯区"},{value:"2724",text:"成华区"},{value:"2725",text:"龙泉驿区"},{value:"2726",text:"青白江区"},{value:"2727",text:"新都区"},{value:"2728",text:"温江区"},{value:"2729",text:"金堂县"},{value:"2730",text:"双流县"},{value:"2731",text:"郫县"},{value:"2732",text:"大邑县"},{value:"2733",text:"蒲江县"},{value:"2734",text:"新津县"},{value:"2735",text:"都江堰市"},{value:"2736",text:"彭州市"},{value:"2737",text:"邛崃市"},{value:"2738",text:"崇州市"}]},{value:"358",text:"自贡",children:[{value:"2740",text:"自流井区"},{value:"2741",text:"贡井区"},{value:"2742",text:"大安区"},{value:"2743",text:"沿滩区"},{value:"2744",text:"荣县"},{value:"2745",text:"富顺县"}]},{value:"359",text:"攀枝花",children:[{value:"2747",text:"东区"},{value:"2748",text:"西区"},{value:"2749",text:"仁和区"},{value:"2750",text:"米易县"},{value:"2751",text:"盐边县"}]},{value:"360",text:"泸州",children:[{value:"2753",text:"江阳区"},{value:"2754",text:"纳溪区"},{value:"2755",text:"龙马潭区"},{value:"2756",text:"泸县"},{value:"2757",text:"合江县"},{value:"2758",text:"叙永县"},{value:"2759",text:"古蔺县"}]},{value:"361",text:"德阳",children:[{value:"2761",text:"旌阳区"},{value:"2762",text:"中江县"},{value:"2763",text:"罗江县"},{value:"2764",text:"广汉市"},{value:"2765",text:"什邡市"},{value:"2766",text:"绵竹市"}]},{value:"362",text:"绵阳",children:[{value:"2768",text:"涪城区"},{value:"2769",text:"游仙区"},{value:"2770",text:"三台县"},{value:"2771",text:"盐亭县"},{value:"2772",text:"安县"},{value:"2773",text:"梓潼县"},{value:"2774",text:"北川羌族自治县"},{value:"2775",text:"平武县"},{value:"2776",text:"江油市"}]},{value:"363",text:"广元",children:[{value:"2778",text:"市中区"},{value:"2779",text:"元坝区"},{value:"2780",text:"朝天区"},{value:"2781",text:"旺苍县"},{value:"2782",text:"青川县"},{value:"2783",text:"剑阁县"},{value:"2784",text:"苍溪县"}]},{value:"364",text:"遂宁",children:[{value:"2786",text:"船山区"},{value:"2787",text:"安居区"},{value:"2788",text:"蓬溪县"},{value:"2789",text:"射洪县"},{value:"2790",text:"大英县"}]},{value:"365",text:"内江",children:[{value:"2792",text:"市中区"},{value:"2793",text:"东兴区"},{value:"2794",text:"威远县"},{value:"2795",text:"资中县"},{value:"2796",text:"隆昌县"}]},{value:"366",text:"乐山",children:[{value:"2798",text:"市中区"},{value:"2799",text:"沙湾区"},{value:"2800",text:"五通桥区"},{value:"2801",text:"金口河区"},{value:"2802",text:"犍为县"},{value:"2803",text:"井研县"},{value:"2804",text:"夹江县"},{value:"2805",text:"沐川县"},{value:"2806",text:"峨边彝族自治县"},{value:"2807",text:"马边彝族自治县"},{value:"2808",text:"峨眉山市"}]},{value:"367",text:"南充",children:[{value:"2810",text:"顺庆区"},{value:"2811",text:"高坪区"},{value:"2812",text:"嘉陵区"},{value:"2813",text:"南部县"},{value:"2814",text:"营山县"},{value:"2815",text:"蓬安县"},{value:"2816",text:"仪陇县"},{value:"2817",text:"西充县"},{value:"2818",text:"阆中市"}]},{value:"368",text:"眉山",children:[{value:"2820",text:"东坡区"},{value:"2821",text:"仁寿县"},{value:"2822",text:"彭山县"},{value:"2823",text:"洪雅县"},{value:"2824",text:"丹棱县"},{value:"2825",text:"青神县"}]},{value:"369",text:"宜宾",children:[{value:"2827",text:"翠屏区"},{value:"2828",text:"宜宾县"},{value:"2829",text:"南溪县"},{value:"2830",text:"江安县"},{value:"2831",text:"长宁县"},{value:"2832",text:"高县"},{value:"2833",text:"珙县"},{value:"2834",text:"筠连县"},{value:"2835",text:"兴文县"},{value:"2836",text:"屏山县"}]},{value:"370",text:"广安",children:[{value:"2838",text:"广安区"},{value:"2839",text:"岳池县"},{value:"2840",text:"武胜县"},{value:"2841",text:"邻水县"},{value:"2842",text:"华莹市"}]},{value:"371",text:"达州",children:[{value:"2844",text:"通川区"},{value:"2845",text:"达县"},{value:"2846",text:"宣汉县"},{value:"2847",text:"开江县"},{value:"2848",text:"大竹县"},{value:"2849",text:"渠县"},{value:"2850",text:"万源市"}]},{value:"372",text:"雅安",children:[{value:"2852",text:"雨城区"},{value:"2853",text:"名山县"},{value:"2854",text:"荥经县"},{value:"2855",text:"汉源县"},{value:"2856",text:"石棉县"},{value:"2857",text:"天全县"},{value:"2858",text:"芦山县"},{value:"2859",text:"宝兴县"}]},{value:"373",text:"巴中",children:[{value:"2861",text:"巴州区"},{value:"2862",text:"通江县"},{value:"2863",text:"南江县"},{value:"2864",text:"平昌县"}]},{value:"374",text:"资阳",children:[{value:"2866",text:"雁江区"},{value:"2867",text:"安岳县"},{value:"2868",text:"乐至县"},{value:"2869",text:"简阳市"}]},{value:"375",text:"阿坝",children:[{value:"2870",text:"汶川县"},{value:"2871",text:"理县"},{value:"2872",text:"茂县"},{value:"2873",text:"松潘县"},{value:"2874",text:"九寨沟县"},{value:"2875",text:"金川县"},{value:"2876",text:"小金县"},{value:"2877",text:"黑水县"},{value:"2878",text:"马尔康县"},{value:"2879",text:"壤塘县"},{value:"2880",text:"阿坝县"},{value:"2881",text:"若尔盖县"},{value:"2882",text:"红原县"}]},{value:"376",text:"甘孜",children:[{value:"2883",text:"康定县"},{value:"2884",text:"泸定县"},{value:"2885",text:"丹巴县"},{value:"2886",text:"九龙县"},{value:"2887",text:"雅江县"},{value:"2888",text:"道孚县"},{value:"2889",text:"炉霍县"},{value:"2890",text:"甘孜县"},{value:"2891",text:"新龙县"},{value:"2892",text:"德格县"},{value:"2893",text:"白玉县"},{value:"2894",text:"石渠县"},{value:"2895",text:"色达县"},{value:"2896",text:"理塘县"},{value:"2897",text:"巴塘县"},{value:"2898",text:"乡城县"},{value:"2899",text:"稻城县"},{value:"2900",text:"得荣县"}]},{value:"377",text:"凉山",children:[{value:"2901",text:"西昌市"},{value:"2902",text:"木里藏族自治县"},{value:"2903",text:"盐源县"},{value:"2904",text:"德昌县"},{value:"2905",text:"会理县"},{value:"2906",text:"会东县"},{value:"2907",text:"宁南县"},{value:"2908",text:"普格县"},{value:"2909",text:"布拖县"},{value:"2910",text:"金阳县"},{value:"2911",text:"昭觉县"},{value:"2912",text:"喜德县"},{value:"2913",text:"冕宁县"},{value:"2914",text:"越西县"},{value:"2915",text:"甘洛县"},{value:"2916",text:"美姑县"},{value:"2917",text:"雷波县"}]}]},{value:"111",text:"贵州",children:[{value:"378",text:"贵阳",children:[{value:"2919",text:"南明区"},{value:"2920",text:"云岩区"},{value:"2921",text:"花溪区"},{value:"2922",text:"乌当区"},{value:"2923",text:"白云区"},{value:"2924",text:"小河区"},{value:"2925",text:"开阳县"},{value:"2926",text:"息烽县"},{value:"2927",text:"修文县"},{value:"2928",text:"清镇市"}]},{value:"379",text:"六盘水",children:[{value:"2929",text:"钟山区"},{value:"2930",text:"六枝特区"},{value:"2931",text:"水城县"},{value:"2932",text:"盘县"}]},{value:"380",text:"遵义",children:[{value:"2934",text:"红花岗区"},{value:"2935",text:"汇川区"},{value:"2936",text:"遵义县"},{value:"2937",text:"桐梓县"},{value:"2938",text:"绥阳县"},{value:"2939",text:"正安县"},{value:"2940",text:"道真仡佬族苗族自治县"},{value:"2941",text:"务川仡佬族苗族自治县"},{value:"2942",text:"凤冈县"},{value:"2943",text:"湄潭县"},{value:"2944",text:"余庆县"},{value:"2945",text:"习水县"},{value:"2946",text:"赤水市"},{value:"2947",text:"仁怀市"}]},{value:"381",text:"安顺",children:[{value:"2949",text:"西秀区"},{value:"2950",text:"平坝县"},{value:"2951",text:"普定县"},{value:"2952",text:"镇宁布依族苗族自治县"},{value:"2953",text:"关岭布依族苗族自治县"},{value:"2954",text:"紫云苗族布依族自治县"}]},{value:"382",text:"铜仁",children:[{value:"2955",text:"铜仁市"},{value:"2956",text:"江口县"},{value:"2957",text:"玉屏侗族自治县"},{value:"2958",text:"石阡县"},{value:"2959",text:"思南县"},{value:"2960",text:"印江土家族苗族自治县"},{value:"2961",text:"德江县"},{value:"2962",text:"沿河土家族自治县"},{value:"2963",text:"松桃苗族自治县"},{value:"2964",text:"万山特区"}]},{value:"383",text:"黔西南",children:[{value:"2965",text:"兴义市"},{value:"2966",text:"兴仁县"},{value:"2967",text:"普安县"},{value:"2968",text:"晴隆县"},{value:"2969",text:"贞丰县"},{value:"2970",text:"望谟县"},{value:"2971",text:"册亨县"},{value:"2972",text:"安龙县"}]},{value:"384",text:"毕节地区",children:[{value:"2973",text:"毕节市"},{value:"2974",text:"大方县"},{value:"2975",text:"黔西县"},{value:"2976",text:"金沙县"},{value:"2977",text:"织金县"},{value:"2978",text:"纳雍县"},{value:"2979",text:"威宁彝族回族苗族自治县"},{value:"2980",text:"赫章县"}]},{value:"385",text:"黔东南",children:[{value:"2981",text:"凯里市"},{value:"2982",text:"黄平县"},{value:"2983",text:"施秉县"},{value:"2984",text:"三穗县"},{value:"2985",text:"镇远县"},{value:"2986",text:"岑巩县"},{value:"2987",text:"天柱县"},{value:"2988",text:"锦屏县"},{value:"2989",text:"剑河县"},{value:"2990",text:"台江县"},{value:"2991",text:"黎平县"},{value:"2992",text:"榕江县"},{value:"2993",text:"从江县"},{value:"2994",text:"雷山县"},{value:"2995",text:"麻江县"},{value:"2996",text:"丹寨县"}]},{value:"386",text:"黔南",children:[{value:"2997",text:"都匀市"},{value:"2998",text:"福泉市"},{value:"2999",text:"荔波县"},{value:"3000",text:"贵定县"},{value:"3001",text:"瓮安县"},{value:"3002",text:"独山县"},{value:"3003",text:"平塘县"},{value:"3004",text:"罗甸县"},{value:"3005",text:"长顺县"},{value:"3006",text:"龙里县"},{value:"3007",text:"惠水县"},{value:"3008",text:"三都水族自治县"}]}]},{value:"112",text:"云南",children:[{value:"387",text:"昆明",children:[{value:"3010",text:"五华区"},{value:"3011",text:"盘龙区"},{value:"3012",text:"官渡区"},{value:"3013",text:"西山区"},{value:"3014",text:"东川区"},{value:"3015",text:"呈贡县"},{value:"3016",text:"晋宁县"},{value:"3017",text:"富民县"},{value:"3018",text:"宜良县"},{value:"3019",text:"石林彝族自治县"},{value:"3020",text:"嵩明县"},{value:"3021",text:"禄劝彝族苗族自治县"},{value:"3022",text:"寻甸回族彝族自治县"},{value:"3023",text:"安宁市"}]},{value:"388",text:"曲靖",children:[{value:"3025",text:"麒麟区"},{value:"3026",text:"马龙县"},{value:"3027",text:"陆良县"},{value:"3028",text:"师宗县"},{value:"3029",text:"罗平县"},{value:"3030",text:"富源县"},{value:"3031",text:"会泽县"},{value:"3032",text:"沾益县"},{value:"3033",text:"宣威市"}]},{value:"389",text:"玉溪",children:[{value:"3035",text:"红塔区"},{value:"3036",text:"江川县"},{value:"3037",text:"澄江县"},{value:"3038",text:"通海县"},{value:"3039",text:"华宁县"},{value:"3040",text:"易门县"},{value:"3041",text:"峨山彝族自治县"},{value:"3042",text:"新平彝族傣族自治县"},{value:"3043",text:"元江哈尼族彝族傣族自治县"}]},{value:"390",text:"保山",children:[{value:"3045",text:"隆阳区"},{value:"3046",text:"施甸县"},{value:"3047",text:"腾冲县"},{value:"3048",text:"龙陵县"},{value:"3049",text:"昌宁县"}]},{value:"391",text:"昭通",children:[{value:"3051",text:"昭阳区"},{value:"3052",text:"鲁甸县"},{value:"3053",text:"巧家县"},{value:"3054",text:"盐津县"},{value:"3055",text:"大关县"},{value:"3056",text:"永善县"},{value:"3057",text:"绥江县"},{value:"3058",text:"镇雄县"},{value:"3059",text:"彝良县"},{value:"3060",text:"威信县"},{value:"3061",text:"水富县"}]},{value:"392",text:"丽江",children:[{value:"3063",text:"古城区"},{value:"3064",text:"玉龙纳西族自治县"},{value:"3065",text:"永胜县"},{value:"3066",text:"华坪县"},{value:"3067",text:"宁蒗彝族自治县"}]},{value:"393",text:"思茅",children:[{value:"3069",text:"翠云区"},{value:"3070",text:"普洱哈尼族彝族自治县"},{value:"3071",text:"墨江哈尼族自治县"},{value:"3072",text:"景东彝族自治县"},{value:"3073",text:"景谷傣族彝族自治县"},{value:"3074",text:"镇沅彝族哈尼族拉祜族自治县"},{value:"3075",text:"江城哈尼族彝族自治县"},{value:"3076",text:"孟连傣族拉祜族佤族自治县"},{value:"3077",text:"澜沧拉祜族自治县"},{value:"3078",text:"西盟佤族自治县"}]},{value:"394",text:"临沧",children:[{value:"3080",text:"临翔区"},{value:"3081",text:"凤庆县"},{value:"3082",text:"云县"},{value:"3083",text:"永德县"},{value:"3084",text:"镇康县"},{value:"3085",text:"双江拉祜族佤族布朗族傣族自治县"},{value:"3086",text:"耿马傣族佤族自治县"},{value:"3087",text:"沧源佤族自治县"}]},{value:"395",text:"楚雄",children:[{value:"3088",text:"楚雄市"},{value:"3089",text:"双柏县"},{value:"3090",text:"牟定县"},{value:"3091",text:"南华县"},{value:"3092",text:"姚安县"},{value:"3093",text:"大姚县"},{value:"3094",text:"永仁县"},{value:"3095",text:"元谋县"},{value:"3096",text:"武定县"},{value:"3097",text:"禄丰县"}]},{value:"396",text:"红河",children:[{value:"3098",text:"个旧市"},{value:"3099",text:"开远市"},{value:"3100",text:"蒙自县"},{value:"3101",text:"屏边苗族自治县"},{value:"3102",text:"建水县"},{value:"3103",text:"石屏县"},{value:"3104",text:"弥勒县"},{value:"3105",text:"泸西县"},{value:"3106",text:"元阳县"},{value:"3107",text:"红河县"},{value:"3108",text:"金平苗族瑶族傣族自治县"},{value:"3109",text:"绿春县"},{value:"3110",text:"河口瑶族自治县"}]},{value:"397",text:"文山",children:[{value:"3111",text:"文山县"},{value:"3112",text:"砚山县"},{value:"3113",text:"西畴县"},{value:"3114",text:"麻栗坡县"},{value:"3115",text:"马关县"},{value:"3116",text:"丘北县"},{value:"3117",text:"广南县"},{value:"3118",text:"富宁县"}]},{value:"398",text:"西双版纳",children:[{value:"3119",text:"景洪市"},{value:"3120",text:"勐海县"},{value:"3121",text:"勐腊县"}]},{value:"399",text:"大理",children:[{value:"3122",text:"大理市"},{value:"3123",text:"漾濞彝族自治县"},{value:"3124",text:"祥云县"},{value:"3125",text:"宾川县"},{value:"3126",text:"弥渡县"},{value:"3127",text:"南涧彝族自治县"},{value:"3128",text:"巍山彝族回族自治县"},{value:"3129",text:"永平县"},{value:"3130",text:"云龙县"},{value:"3131",text:"洱源县"},{value:"3132",text:"剑川县"},{value:"3133",text:"鹤庆县"}]},{value:"400",text:"德宏",children:[{value:"3134",text:"瑞丽市"},{value:"3135",text:"芒市"},{value:"3136",text:"梁河县"},{value:"3137",text:"盈江县"},{value:"3138",text:"陇川县"}]},{value:"401",text:"怒江",children:[{value:"3139",text:"泸水县"},{value:"3140",text:"福贡县"},{value:"3141",text:"贡山独龙族怒族自治县"},{value:"3142",text:"兰坪白族普米族自治县"}]},{value:"402",text:"迪庆",children:[{value:"3143",text:"香格里拉县"},{value:"3144",text:"德钦县"},{value:"3145",text:"维西傈僳族自治县"}]}]},{value:"113",text:"西藏",children:[{value:"403",text:"拉萨",children:[{value:"3147",text:"城关区"},{value:"3148",text:"林周县"},{value:"3149",text:"当雄县"},{value:"3150",text:"尼木县"},{value:"3151",text:"曲水县"},{value:"3152",text:"堆龙德庆县"},{value:"3153",text:"达孜县"},{value:"3154",text:"墨竹工卡县"}]},{value:"404",text:"昌都",children:[{value:"3155",text:"昌都县"},{value:"3156",text:"江达县"},{value:"3157",text:"贡觉县"},{value:"3158",text:"类乌齐县"},{value:"3159",text:"丁青县"},{value:"3160",text:"察雅县"},{value:"3161",text:"八宿县"},{value:"3162",text:"左贡县"},{value:"3163",text:"芒康县"},{value:"3164",text:"洛隆县"},{value:"3165",text:"边坝县"}]},{value:"405",text:"山南",children:[{value:"3166",text:"乃东县"},{value:"3167",text:"扎囊县"},{value:"3168",text:"贡嘎县"},{value:"3169",text:"桑日县"},{value:"3170",text:"琼结县"},{value:"3171",text:"曲松县"},{value:"3172",text:"措美县"},{value:"3173",text:"洛扎县"},{value:"3174",text:"加查县"},{value:"3175",text:"隆子县"},{value:"3176",text:"错那县"},{value:"3177",text:"浪卡子县"}]},{value:"406",text:"日喀则",children:[{value:"3178",text:"日喀则市"},{value:"3179",text:"南木林县"},{value:"3180",text:"江孜县"},{value:"3181",text:"定日县"},{value:"3182",text:"萨迦县"},{value:"3183",text:"拉孜县"},{value:"3184",text:"昂仁县"},{value:"3185",text:"谢通门县"},{value:"3186",text:"白朗县"},{value:"3187",text:"仁布县"},{value:"3188",text:"康马县"},{value:"3189",text:"定结县"},{value:"3190",text:"仲巴县"},{value:"3191",text:"亚东县"},{value:"3192",text:"吉隆县"},{value:"3193",text:"聂拉木县"},{value:"3194",text:"萨嘎县"},{value:"3195",text:"岗巴县"}]},{value:"407",text:"那曲",children:[{value:"3196",text:"那曲县"},{value:"3197",text:"嘉黎县"},{value:"3198",text:"比如县"},{value:"3199",text:"聂荣县"},{value:"3200",text:"安多县"},{value:"3201",text:"申扎县"},{value:"3202",text:"索县"},{value:"3203",text:"班戈县"},{value:"3204",text:"巴青县"},{value:"3205",text:"尼玛县"}]},{value:"408",text:"阿里",children:[{value:"3206",text:"普兰县"},{value:"3207",text:"札达县"},{value:"3208",text:"噶尔县"},{value:"3209",text:"日土县"},{value:"3210",text:"革吉县"},{value:"3211",text:"改则县"},{value:"3212",text:"措勤县"}]},{value:"409",text:"林芝",children:[{value:"3213",text:"林芝县"},{value:"3214",text:"工布江达县"},{value:"3215",text:"米林县"},{value:"3216",text:"墨脱县"},{value:"3217",text:"波密县"},{value:"3218",text:"察隅县"},{value:"3219",text:"朗县"}]}]},{value:"114",text:"陕西",children:[{value:"410",text:"西安",children:[{value:"3221",text:"新城区"},{value:"3222",text:"碑林区"},{value:"3223",text:"莲湖区"},{value:"3224",text:"灞桥区"},{value:"3225",text:"未央区"},{value:"3226",text:"雁塔区"},{value:"3227",text:"阎良区"},{value:"3228",text:"临潼区"},{value:"3229",text:"长安区"},{value:"3230",text:"蓝田县"},{value:"3231",text:"周至县"},{value:"3232",text:"户县"},{value:"3233",text:"高陵县"}]},{value:"411",text:"铜川",children:[{value:"3235",text:"王益区"},{value:"3236",text:"印台区"},{value:"3237",text:"耀州区"},{value:"3238",text:"宜君县"}]},{value:"412",text:"宝鸡",children:[{value:"3240",text:"渭滨区"},{value:"3241",text:"金台区"},{value:"3242",text:"陈仓区"},{value:"3243",text:"凤翔县"},{value:"3244",text:"岐山县"},{value:"3245",text:"扶风县"},{value:"3246",text:"眉县"},{value:"3247",text:"陇县"},{value:"3248",text:"千阳县"},{value:"3249",text:"麟游县"},{value:"3250",text:"凤县"},{value:"3251",text:"太白县"}]},{value:"413",text:"咸阳",children:[{value:"3253",text:"秦都区"},{value:"3254",text:"杨凌区"},{value:"3255",text:"渭城区"},{value:"3256",text:"三原县"},{value:"3257",text:"泾阳县"},{value:"3258",text:"乾县"},{value:"3259",text:"礼泉县"},{value:"3260",text:"永寿县"},{value:"3261",text:"彬县"},{value:"3262",text:"长武县"},{value:"3263",text:"旬邑县"},{value:"3264",text:"淳化县"},{value:"3265",text:"武功县"},{value:"3266",text:"兴平市"}]},{value:"414",text:"渭南",children:[{value:"3268",text:"临渭区"},{value:"3269",text:"华县"},{value:"3270",text:"潼关县"},{value:"3271",text:"大荔县"},{value:"3272",text:"合阳县"},{value:"3273",text:"澄城县"},{value:"3274",text:"蒲城县"},{value:"3275",text:"白水县"},{value:"3276",text:"富平县"},{value:"3277",text:"韩城市"},{value:"3278",text:"华阴市"}]},{value:"415",text:"延安",children:[{value:"3280",text:"宝塔区"},{value:"3281",text:"延长县"},{value:"3282",text:"延川县"},{value:"3283",text:"子长县"},{value:"3284",text:"安塞县"},{value:"3285",text:"志丹县"},{value:"3286",text:"吴旗县"},{value:"3287",text:"甘泉县"},{value:"3288",text:"富县"},{value:"3289",text:"洛川县"},{value:"3290",text:"宜川县"},{value:"3291",text:"黄龙县"},{value:"3292",text:"黄陵县"}]},{value:"416",text:"汉中",children:[{value:"3294",text:"汉台区"},{value:"3295",text:"南郑县"},{value:"3296",text:"城固县"},{value:"3297",text:"洋县"},{value:"3298",text:"西乡县"},{value:"3299",text:"勉县"},{value:"3300",text:"宁强县"},{value:"3301",text:"略阳县"},{value:"3302",text:"镇巴县"},{value:"3303",text:"留坝县"},{value:"3304",text:"佛坪县"}]},{value:"417",text:"榆林",children:[{value:"3306",text:"榆阳区"},{value:"3307",text:"神木县"},{value:"3308",text:"府谷县"},{value:"3309",text:"横山县"},{value:"3310",text:"靖边县"},{value:"3311",text:"定边县"},{value:"3312",text:"绥德县"},{value:"3313",text:"米脂县"},{value:"3314",text:"佳县"},{value:"3315",text:"吴堡县"},{value:"3316",text:"清涧县"},{value:"3317",text:"子洲县"}]},{value:"418",text:"安康",children:[{value:"3319",text:"汉滨区"},{value:"3320",text:"汉阴县"},{value:"3321",text:"石泉县"},{value:"3322",text:"宁陕县"},{value:"3323",text:"紫阳县"},{value:"3324",text:"岚皋县"},{value:"3325",text:"平利县"},{value:"3326",text:"镇坪县"},{value:"3327",text:"旬阳县"},{value:"3328",text:"白河县"}]},{value:"419",text:"商洛",children:[{value:"3330",text:"商州区"},{value:"3331",text:"洛南县"},{value:"3332",text:"丹凤县"},{value:"3333",text:"商南县"},{value:"3334",text:"山阳县"},{value:"3335",text:"镇安县"},{value:"3336",text:"柞水县"}]}]},{value:"115",text:"甘肃",children:[{value:"420",text:"兰州",children:[{value:"3338",text:"城关区"},{value:"3339",text:"七里河区"},{value:"3340",text:"西固区"},{value:"3341",text:"安宁区"},{value:"3342",text:"红古区"},{value:"3343",text:"永登县"},{value:"3344",text:"皋兰县"},{value:"3345",text:"榆中县"}]},{value:"421",text:"嘉峪关"},{value:"422",text:"金昌",children:[{value:"3348",text:"金川区"},{value:"3349",text:"永昌县"}]},{value:"423",text:"白银",children:[{value:"3351",text:"白银区"},{value:"3352",text:"平川区"},{value:"3353",text:"靖远县"},{value:"3354",text:"会宁县"},{value:"3355",text:"景泰县"}]},{value:"424",text:"天水",children:[{value:"3357",text:"秦城区"},{value:"3358",text:"北道区"},{value:"3359",text:"清水县"},{value:"3360",text:"秦安县"},{value:"3361",text:"甘谷县"},{value:"3362",text:"武山县"},{value:"3363",text:"张家川回族自治县"}]},{value:"425",text:"武威",children:[{value:"3365",text:"凉州区"},{value:"3366",text:"民勤县"},{value:"3367",text:"古浪县"},{value:"3368",text:"天祝藏族自治县"}]},{value:"426",text:"张掖",children:[{value:"3370",text:"甘州区"},{value:"3371",text:"肃南裕固族自治县"},{value:"3372",text:"民乐县"},{value:"3373",text:"临泽县"},{value:"3374",text:"高台县"},{value:"3375",text:"山丹县"}]},{value:"427",text:"平凉",children:[{value:"3377",text:"崆峒区"},{value:"3378",text:"泾川县"},{value:"3379",text:"灵台县"},{value:"3380",text:"崇信县"},{value:"3381",text:"华亭县"},{value:"3382",text:"庄浪县"},{value:"3383",text:"静宁县"}]},{value:"428",text:"酒泉",children:[{value:"3385",text:"肃州区"},{value:"3386",text:"金塔县"},{value:"3387",text:"安西县"},{value:"3388",text:"肃北蒙古族自治县"},{value:"3389",text:"阿克塞哈萨克族自治县"},{value:"3390",text:"玉门市"},{value:"3391",text:"敦煌市"}]},{value:"429",text:"庆阳",children:[{value:"3393",text:"西峰区"},{value:"3394",text:"庆城县"},{value:"3395",text:"环县"},{value:"3396",text:"华池县"},{value:"3397",text:"合水县"},{value:"3398",text:"正宁县"},{value:"3399",text:"宁县"},{value:"3400",text:"镇原县"}]},{value:"430",text:"定西",children:[{value:"3402",text:"安定区"},{value:"3403",text:"通渭县"},{value:"3404",text:"陇西县"},{value:"3405",text:"渭源县"},{value:"3406",text:"临洮县"},{value:"3407",text:"漳县"},{value:"3408",text:"岷县"}]},{value:"431",text:"陇南",children:[{value:"3410",text:"武都区"},{value:"3411",text:"成县"},{value:"3412",text:"文县"},{value:"3413",text:"宕昌县"},{value:"3414",text:"康县"},{value:"3415",text:"西和县"},{value:"3416",text:"礼县"},{value:"3417",text:"徽县"},{value:"3418",text:"两当县"}]},{value:"432",text:"临夏",children:[{value:"3419",text:"临夏市"},{value:"3420",text:"临夏县"},{value:"3421",text:"康乐县"},{value:"3422",text:"永靖县"},{value:"3423",text:"广河县"},{value:"3424",text:"和政县"},{value:"3425",text:"东乡族自治县"},{value:"3426",text:"积石山保安族东乡族撒拉族自治县"}]},{value:"433",text:"甘南",children:[{value:"3427",text:"合作市"},{value:"3428",text:"临潭县"},{value:"3429",text:"卓尼县"},{value:"3430",text:"舟曲县"},{value:"3431",text:"迭部县"},{value:"3432",text:"玛曲县"},{value:"3433",text:"碌曲县"},{value:"3434",text:"夏河县"}]}]},{value:"116",text:"青海",children:[{value:"434",text:"西宁",children:[{value:"3436",text:"城东区"},{value:"3437",text:"城中区"},{value:"3438",text:"城西区"},{value:"3439",text:"城北区"},{value:"3440",text:"大通回族土族自治县"},{value:"3441",text:"湟中县"},{value:"3442",text:"湟源县"}]},{value:"435",text:"海东",children:[{value:"3443",text:"平安县"},{value:"3444",text:"民和回族土族自治县"},{value:"3445",text:"乐都县"},{value:"3446",text:"互助土族自治县"},{value:"3447",text:"化隆回族自治县"},{value:"3448",text:"循化撒拉族自治县"}]},{value:"436",text:"海北",children:[{value:"3449",text:"门源回族自治县"},{value:"3450",text:"祁连县"},{value:"3451",text:"海晏县"},{value:"3452",text:"刚察县"}]},{value:"437",text:"黄南",children:[{value:"3453",text:"同仁县"},{value:"3454",text:"尖扎县"},{value:"3455",text:"泽库县"},{value:"3456",text:"河南蒙古族自治县"}]},{value:"438",text:"海南",children:[{value:"3457",text:"共和县"},{value:"3458",text:"同德县"},{value:"3459",text:"贵德县"},{value:"3460",text:"兴海县"},{value:"3461",text:"贵南县"}]},{value:"439",text:"果洛",children:[{value:"3462",text:"玛沁县"},{value:"3463",text:"班玛县"},{value:"3464",text:"甘德县"},{value:"3465",text:"达日县"},{value:"3466",text:"久治县"},{value:"3467",text:"玛多县"}]},{value:"440",text:"玉树",children:[{value:"3468",text:"玉树县"},{value:"3469",text:"杂多县"},{value:"3470",text:"称多县"},{value:"3471",text:"治多县"},{value:"3472",text:"囊谦县"},{value:"3473",text:"曲麻莱县"}]},{value:"441",text:"海西",children:[{value:"3474",text:"格尔木市"},{value:"3475",text:"德令哈市"},{value:"3476",text:"乌兰县"},{value:"3477",text:"都兰县"},{value:"3478",text:"天峻县"}]}]},{value:"117",text:"宁夏",children:[{value:"442",text:"银川",children:[{value:"3480",text:"兴庆区"},{value:"3481",text:"西夏区"},{value:"3482",text:"金凤区"},{value:"3483",text:"永宁县"},{value:"3484",text:"贺兰县"},{value:"3485",text:"灵武市"}]},{value:"443",text:"石嘴山",children:[{value:"3487",text:"大武口区"},{value:"3488",text:"惠农区"},{value:"3489",text:"平罗县"}]},{value:"444",text:"吴忠",children:[{value:"3491",text:"利通区"},{value:"3492",text:"盐池县"},{value:"3493",text:"同心县"},{value:"3494",text:"青铜峡市"}]},{value:"445",text:"固原",children:[{value:"3496",text:"原州区"},{value:"3497",text:"西吉县"},{value:"3498",text:"隆德县"},{value:"3499",text:"泾源县"},{value:"3500",text:"彭阳县"}]},{value:"446",text:"中卫",children:[{value:"3502",text:"沙坡头区"},{value:"3503",text:"中宁县"},{value:"3504",text:"海原县"}]}]},{value:"118",text:"新疆",children:[{value:"447",text:"乌鲁木齐",children:[{value:"3506",text:"天山区"},{value:"3507",text:"沙依巴克区"},{value:"3508",text:"新市区"},{value:"3509",text:"水磨沟区"},{value:"3510",text:"头屯河区"},{value:"3511",text:"达坂城区"},{value:"3512",text:"东山区"},{value:"3513",text:"乌鲁木齐县"}]},{value:"448",text:"克拉玛依",children:[{value:"3515",text:"独山子区"},{value:"3516",text:"克拉玛依区"},{value:"3517",text:"白碱滩区"},{value:"3518",text:"乌尔禾区"}]},{value:"449",text:"吐鲁番",children:[{value:"3519",text:"吐鲁番市"},{value:"3520",text:"鄯善县"},{value:"3521",text:"托克逊县"}]},{value:"450",text:"哈密",children:[{value:"3522",text:"哈密市"},{value:"3523",text:"巴里坤哈萨克自治县"},{value:"3524",text:"伊吾县"}]},{value:"451",text:"昌吉",children:[{value:"3525",text:"昌吉市"},{value:"3526",text:"阜康市"},{value:"3527",text:"米泉市"},{value:"3528",text:"呼图壁县"},{value:"3529",text:"玛纳斯县"},{value:"3530",text:"奇台县"},{value:"3531",text:"吉木萨尔县"},{value:"3532",text:"木垒哈萨克自治县"}]},{value:"452",text:"博尔塔拉",children:[{value:"3533",text:"博乐市"},{value:"3534",text:"精河县"},{value:"3535",text:"温泉县"}]},{value:"453",text:"巴音郭楞",children:[{value:"3536",text:"库尔勒市"},{value:"3537",text:"轮台县"},{value:"3538",text:"尉犁县"},{value:"3539",text:"若羌县"},{value:"3540",text:"且末县"},{value:"3541",text:"焉耆回族自治县"},{value:"3542",text:"和静县"},{value:"3543",text:"和硕县"},{value:"3544",text:"博湖县"}]},{value:"454",text:"阿克苏",children:[{value:"3545",text:"阿克苏市"},{value:"3546",text:"温宿县"},{value:"3547",text:"库车县"},{value:"3548",text:"沙雅县"},{value:"3549",text:"新和县"},{value:"3550",text:"拜城县"},{value:"3551",text:"乌什县"},{value:"3552",text:"阿瓦提县"},{value:"3553",text:"柯坪县"}]},{value:"455",text:"克孜勒苏",children:[{value:"3554",text:"阿图什市"},{value:"3555",text:"阿克陶县"},{value:"3556",text:"阿合奇县"},{value:"3557",text:"乌恰县"}]},{value:"456",text:"喀什",children:[{value:"3558",text:"喀什市"},{value:"3559",text:"疏附县"},{value:"3560",text:"疏勒县"},{value:"3561",text:"英吉沙县"},{value:"3562",text:"泽普县"},{value:"3563",text:"莎车县"},{value:"3564",text:"叶城县"},{value:"3565",text:"麦盖提县"},{value:"3566",text:"岳普湖县"},{value:"3567",text:"伽师县"},{value:"3568",text:"巴楚县"},{value:"3569",text:"塔什库尔干塔吉克自治县"}]},{value:"457",text:"和田",children:[{value:"3570",text:"和田市"},{value:"3571",text:"和田县"},{value:"3572",text:"墨玉县"},{value:"3573",text:"皮山县"},{value:"3574",text:"洛浦县"},{value:"3575",text:"策勒县"},{value:"3576",text:"于田县"},{value:"3577",text:"民丰县"}]},{value:"458",text:"伊犁",children:[{value:"3578",text:"伊宁市"},{value:"3579",text:"奎屯市"},{value:"3580",text:"伊宁县"},{value:"3581",text:"察布查尔锡伯自治县"},{value:"3582",text:"霍城县"},{value:"3583",text:"巩留县"},{value:"3584",text:"新源县"},{value:"3585",text:"昭苏县"},{value:"3586",text:"特克斯县"},{value:"3587",text:"尼勒克县"}]},{value:"459",text:"塔城",children:[{value:"3588",text:"塔城市"},{value:"3589",text:"乌苏市"},{value:"3590",text:"额敏县"},{value:"3591",text:"沙湾县"},{value:"3592",text:"托里县"},{value:"3593",text:"裕民县"},{value:"3594",text:"和布克赛尔蒙古自治县"}]},{value:"460",text:"阿勒泰",children:[{value:"3595",text:"阿勒泰市"},{value:"3596",text:"布尔津县"},{value:"3597",text:"富蕴县"},{value:"3598",text:"福海县"},{value:"3599",text:"哈巴河县"},{value:"3600",text:"青河县"},{value:"3601",text:"吉木乃县"}]}]},{value:"119",text:"台湾"},{value:"120",text:"香港"},{value:"121",text:"澳门"}];module.exports=e; 
 			}); 
		define("utils/typeTool.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=86400,a="/1";module.exports={queryCatList:function(a){var c=getApp(),o=wx.getStorageSync("catlist"),s=c.util.getTimestamp();if("object"==(void 0===o?"undefined":t(o))&&s-o.time<e)return a(o.list),void console.error("本地缓存分类列表");c.client.request({url:"d=wxapi&c=etp_base&m=cat_list",data:{parentid:1},success:function(t){var e=t.data,c={};c.time=s,c.list=e,wx.setStorageSync("catlist",c),console.error("服务器获取分类列表"),"function"==typeof a?a(t.data):console.error("设备分类查询成功没有处理")}})},queryPropList:function(c){var o=getApp();o.util.empty(c.catpath)&&(c.catpath=a);var s="prop"+c.catpath,r=wx.getStorageSync(s),i=o.util.getTimestamp();"object"==(void 0===r?"undefined":t(r))&&i-r.time<e?c.success(r.list):o.client.request({url:"d=wxapi&c=etp_base&m=prop_list",data:{catpath:c.catpath},success:function(t){var e=t.data,a={};a.time=i,a.list=e,wx.setStorageSync(s,a),"function"==typeof c.success?c.success(t.data):console.error("分类属性查询成功没有处理")}})},queryBrand:function(c){var o=getApp();o.util.empty(c.catpath)&&(c.catpath=a);var s="brand"+c.catpath,r=wx.getStorageSync(s),i=o.util.getTimestamp();"object"==(void 0===r?"undefined":t(r))&&i-r.time<e?c.success(r.list):(null==c.catpath&&(c.catpath=a),o.client.request({url:"d=wxapi&c=etp_base&m=brand_list",data:{catpath:c.catpath},success:function(t){var e=t.data,a={};a.time=i,a.list=e,wx.setStorageSync(s,a),"function"==typeof c.success?c.success(t.data):console.error("品牌查询成功没有处理")}}))}}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){return Math.floor(new Date/1e3)}function t(e,t){var n=null,r={"M+":(n=e>0?new Date(1e3*e):new Date).getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};/(y+)/i.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in r)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length)));return t}function n(t,n,r){var o=wx.getStorageSync(t+"date"),i=e(),a=Number(i)-Number(o);console.error(a+"   "+o+"   "+i);var s=wx.getStorageSync(t);a<callTime&&s==t?wx.showModal({title:"提示",content:"分享到重复群2小时内无效"}):(wx.setStorageSync(t+"date",i),wx.setStorageSync(t,t),wx.showToast({title:"已获得一次免费拨打电话机会"}),wx.setStorageSync("callPhone","1"),r(!0))}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports={empty:function(e){return void 0===e||"string"==typeof e&&""==e.trim()||"number"==typeof e&&0==e||"boolean"==typeof e&&0==e||null==e},formatTime:function(e){if("number"!=typeof e||e<0)return e;var t=parseInt(e/3600);return e%=3600,[t,parseInt(e/60),e%=60].map(function(e){return(e=e.toString())[1]?e:"0"+e}).join(":")},formatDate:t,formatDateTime:function(e){if("string"==typeof e)e=parseInt(e);else if("number"!=typeof e||e<0)return e;var n=(new Date).getTime()/1e3-e,r="";return n>86400?r=t(e,"yyyy-MM-dd"):r+=n>3600?Math.ceil(n/3600)+"小时前":n>60?Math.ceil(n/60)+"分钟前":"刚刚",r},formatLocation:function(e,t){return"string"==typeof e&&"string"==typeof t&&(e=parseFloat(e),t=parseFloat(t)),e=e.toFixed(2),t=t.toFixed(2),{longitude:e.toString().split("."),latitude:t.toString().split(".")}},getTimestamp:e,isMobile:function(e){return/^0?1[3|4|5|7|8][0-9]\d{8}$/.test(e)},hiddenNumer:function(e){return null==e?"":("string"==typeof e&&(e=(e=e.replace(/(\d)\s+(\d)/g,"$1$2")).replace(/(\d{3})\d{1,4}(\d{4})/,"$1****$2")),e)},validateForm:function(e,t,n){var o={success:!1,message:""};if(null==e||"object"!=(void 0===e?"undefined":r(e)))return o.message="系统异常",o;if(null==n||"object"!=(void 0===n?"undefined":r(n)))return o.message="验证规则不存在",o;if(null==t||"object"!=(void 0===t?"undefined":r(t)))return o.message="表单数据不存在",o;for(var i=0;i<n.length;i++){var a=n[i].name,s=t[a],u="string"==typeof n[i].text?n[i].text:a;if((void 0===n[i].required||n[i].required)&&e.util.empty(s))return o.message="请输入"+u,o;if(void 0===n[i].max_length&&"string"==typeof s&&s.length>n[i].max_length)return o.message=u+"字符长度不能大于"+n[i].max_length,o;if(void 0===n[i].min_length&&"string"==typeof s&&s.length<n[i].min_length)return o.message=u+"字符长度不能小于"+n[i].min_length,o}return o.success=!0,o.message="验证成功",o},shareResolve:function(e,t,r){var o=getApp(),i=e.encryptedData,a=e.iv;o.client.request({url:"d=wxapi&c=auth&m=decrypt_wxdata",data:{encryptedData:i,iv:a},success:function(e){n(e.data.openGId,0,r),console.error(e)}})},addRecord:function(e,t,n){getApp().client.request({url:"d=wxapi&c=etp_user_action&m=action_save",data:{type:e,idtype:t,idvalue:n},success:function(e){}})}}; 
 			}); 
		define("utils/wxParse/html2json.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}function t(e){return e.replace(/<\?xml.*\?>\n/,"").replace(/<.*!doctype.*\>\n/,"").replace(/<.*!DOCTYPE.*\>\n/,"")}function r(e){return e.replace(/\n+/g,"").replace(/<!--.*?-->/gi,"").replace(/\/\*.*?\*\//gi,"").replace(/[ ]+</gi,"<")}function s(e){var t=[];if(0==n.length||!i)return(d={}).node="text",d.text=e,s=[d];e=e.replace(/\[([^\[\]]+)\]/g,":$1:");for(var r=new RegExp("[:]"),s=e.split(r),a=0;a<s.length;a++){var l=s[a],d={};i[l]?(d.node="element",d.tag="emoji",d.text=i[l],d.baseSrc=o):(d.node="text",d.text=l),t.push(d)}return t}var a="https",n="",o="",i={},l=require("./wxDiscode.js"),d=require("./htmlparser.js"),c=(e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),e("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video")),u=e("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),p=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),e("wxxxcode-style,script,style,view,scroll-view,block");module.exports={html2json:function(e,n){e=r(e=t(e)),e=l.strDiscode(e);var o=[],i={node:n,nodes:[],images:[],imageUrls:[]},m=0;return d(e,{start:function(e,t,r){var s={node:"element",tag:e};if(0===o.length?(s.index=m.toString(),m+=1):(void 0===(b=o[0]).nodes&&(b.nodes=[]),s.index=b.index+"."+b.nodes.length),c[e]?s.tagType="block":u[e]?s.tagType="inline":p[e]&&(s.tagType="closeSelf"),0!==t.length&&(s.attr=t.reduce(function(e,t){var r=t.name,a=t.value;return"class"==r&&(console.dir(a),s.classStr=a),"style"==r&&(console.dir(a),s.styleStr=a),a.match(/ /)&&(a=a.split(" ")),e[r]?Array.isArray(e[r])?e[r].push(a):e[r]=[e[r],a]:e[r]=a,e},{})),"img"===s.tag){s.imgIndex=i.images.length;var d=s.attr.src;""==d[0]&&d.splice(0,1);var g="http://www.tgj168.com/";(d=l.urlToHttpUrl(d,a)).indexOf("tgj168.com/")&&(g=""),s.attr.src=g+d,s.from=n,i.images.push(s),i.imageUrls.push(d)}if("font"===s.tag){var f=["x-small","small","medium","large","x-large","xx-large","-webkit-xxx-large"],h={color:"color",face:"font-family",size:"font-size"};s.attr.style||(s.attr.style=[]),s.styleStr||(s.styleStr="");for(var v in h)if(s.attr[v]){var x="size"===v?f[s.attr[v]-1]:s.attr[v];s.attr.style.push(h[v]),s.attr.style.push(x),s.styleStr+=h[v]+": "+x+";"}}if("source"===s.tag&&(i.source=s.attr.src),r){var b=o[0]||i;void 0===b.nodes&&(b.nodes=[]),b.nodes.push(s)}else o.unshift(s)},end:function(e){var t=o.shift();if(t.tag!==e&&console.error("invalid state: mismatch end tag"),"video"===t.tag&&i.source&&(t.attr.src=i.source,delete result.source),0===o.length)i.nodes.push(t);else{var r=o[0];void 0===r.nodes&&(r.nodes=[]),r.nodes.push(t)}},chars:function(e){var t={node:"text",text:e,textArray:s(e)};if(0===o.length)i.nodes.push(t);else{var r=o[0];void 0===r.nodes&&(r.nodes=[]),t.index=r.index+"."+r.nodes.length,r.nodes.push(t)}},comment:function(e){}}),i},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",r=arguments[2];n=e,o=t,i=r}}; 
 			}); 
		define("utils/wxParse/htmlparser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){for(var t={},r=e.split(","),s=0;s<r.length;s++)t[r[s]]=!0;return t}var t=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,r=/^<\/([-A-Za-z0-9_]+)[^>]*>/,s=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,a=e("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),n=e("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),i=e("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),o=e("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),l=e("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),c=e("wxxxcode-style,script,style,view,scroll-view,block");module.exports=function(e,d){function f(e,t){if(t)for(t=t.toLowerCase(),r=b.length-1;r>=0&&b[r]!=t;r--);else var r=0;if(r>=0){for(var s=b.length-1;s>=r;s--)d.end&&d.end(b[s]);b.length=r}}var p,u,h,b=[],m=e;for(b.last=function(){return this[this.length-1]};e;){if(u=!0,b.last()&&c[b.last()])e=e.replace(new RegExp("([\\s\\S]*?)</"+b.last()+"[^>]*>"),function(e,t){return t=t.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),d.chars&&d.chars(t),""}),f(0,b.last());else if(0==e.indexOf("\x3c!--")?(p=e.indexOf("--\x3e"))>=0&&(d.comment&&d.comment(e.substring(4,p)),e=e.substring(p+3),u=!1):0==e.indexOf("</")?(h=e.match(r))&&(e=e.substring(h[0].length),h[0].replace(r,f),u=!1):0==e.indexOf("<")&&(h=e.match(t))&&(e=e.substring(h[0].length),h[0].replace(t,function(e,t,r,c){if(t=t.toLowerCase(),n[t])for(;b.last()&&i[b.last()];)f(0,b.last());if(o[t]&&b.last()==t&&f(0,t),(c=a[t]||!!c)||b.push(t),d.start){var p=[];r.replace(s,function(e,t){var r=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:l[t]?t:"";p.push({name:t,value:r,escaped:r.replace(/(^|[^\\])"/g,'$1\\"')})}),d.start&&d.start(t,p,c)}}),u=!1),u){p=e.indexOf("<");for(var g="";0===p;)g+="<",p=(e=e.substring(1)).indexOf("<");g+=p<0?e:e.substring(0,p),e=p<0?"":e.substring(p),d.chars&&d.chars(g)}if(e==m)throw"Parse Error: "+e;m=e}f()}; 
 			}); 
		define("utils/wxParse/showdown.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){var r={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Specify a prefix to generated header ids",type:"string"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,description:"Tries to smartly fix identation in es6 strings",type:"boolean"}};if(!1===e)return JSON.parse(JSON.stringify(r));var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n].defaultValue);return t}function r(e,r){var t=r?"Error in "+r+" extension->":"Error in unnamed extension",a={valid:!0,error:""};s.helper.isArray(e)||(e=[e]);for(var o=0;o<e.length;++o){var i=t+" sub-extension "+o+": ",l=e[o];if("object"!==(void 0===l?"undefined":n(l)))return a.valid=!1,a.error=i+"must be an object, but "+(void 0===l?"undefined":n(l))+" given",a;if(!s.helper.isString(l.type))return a.valid=!1,a.error=i+'property "type" must be a string, but '+n(l.type)+" given",a;var c=l.type=l.type.toLowerCase();if("language"===c&&(c=l.type="lang"),"html"===c&&(c=l.type="output"),"lang"!==c&&"output"!==c&&"listener"!==c)return a.valid=!1,a.error=i+"type "+c+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',a;if("listener"===c){if(s.helper.isUndefined(l.listeners))return a.valid=!1,a.error=i+'. Extensions of type "listener" must have a property called "listeners"',a}else if(s.helper.isUndefined(l.filter)&&s.helper.isUndefined(l.regex))return a.valid=!1,a.error=i+c+' extensions must define either a "regex" property or a "filter" method',a;if(l.listeners){if("object"!==n(l.listeners))return a.valid=!1,a.error=i+'"listeners" property must be an object but '+n(l.listeners)+" given",a;for(var u in l.listeners)if(l.listeners.hasOwnProperty(u)&&"function"!=typeof l.listeners[u])return a.valid=!1,a.error=i+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+u+" must be a function but "+n(l.listeners[u])+" given",a}if(l.filter){if("function"!=typeof l.filter)return a.valid=!1,a.error=i+'"filter" must be a function, but '+n(l.filter)+" given",a}else if(l.regex){if(s.helper.isString(l.regex)&&(l.regex=new RegExp(l.regex,"g")),!l.regex instanceof RegExp)return a.valid=!1,a.error=i+'"regex" property must either be a string or a RegExp object, but '+n(l.regex)+" given",a;if(s.helper.isUndefined(l.replace))return a.valid=!1,a.error=i+'"regex" extensions must implement a replace string or function',a}}return a}function t(e,r){return"~E"+r.charCodeAt(0)+"E"}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s={},a={},o={},i=e(!0),l={github:{omitExtraWLInCodeBlocks:!0,prefixHeaderId:"user-content-",simplifiedAutoLink:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0},vanilla:e(!0)};s.helper={},s.extensions={},s.setOption=function(e,r){return i[e]=r,this},s.getOption=function(e){return i[e]},s.getOptions=function(){return i},s.resetOptions=function(){i=e(!0)},s.setFlavor=function(e){if(l.hasOwnProperty(e)){var r=l[e];for(var t in r)r.hasOwnProperty(t)&&(i[t]=r[t])}},s.getDefaultOptions=function(r){return e(r)},s.subParser=function(e,r){if(s.helper.isString(e)){if(void 0===r){if(a.hasOwnProperty(e))return a[e];throw Error("SubParser named "+e+" not registered!")}a[e]=r}},s.extension=function(e,t){if(!s.helper.isString(e))throw Error("Extension 'name' must be a string");if(e=s.helper.stdExtName(e),s.helper.isUndefined(t)){if(!o.hasOwnProperty(e))throw Error("Extension named "+e+" is not registered!");return o[e]}"function"==typeof t&&(t=t()),s.helper.isArray(t)||(t=[t]);var n=r(t,e);if(!n.valid)throw Error(n.error);o[e]=t},s.getAllExtensions=function(){return o},s.removeExtension=function(e){delete o[e]},s.resetExtensions=function(){o={}},s.validateExtension=function(e){var t=r(e,null);return!!t.valid||(console.warn(t.error),!1)},s.hasOwnProperty("helper")||(s.helper={}),s.helper.isString=function(e){return"string"==typeof e||e instanceof String},s.helper.isFunction=function(e){var r={};return e&&"[object Function]"===r.toString.call(e)},s.helper.forEach=function(e,r){if("function"==typeof e.forEach)e.forEach(r);else for(var t=0;t<e.length;t++)r(e[t],t,e)},s.helper.isArray=function(e){return e.constructor===Array},s.helper.isUndefined=function(e){return void 0===e},s.helper.stdExtName=function(e){return e.replace(/[_-]||\s/g,"").toLowerCase()},s.helper.escapeCharactersCallback=t,s.helper.escapeCharacters=function(e,r,n){var s="(["+r.replace(/([\[\]\\])/g,"\\$1")+"])";n&&(s="\\\\"+s);var a=new RegExp(s,"g");return e=e.replace(a,t)};var c=function(e,r,t,n){var s,a,o,i,l,c=n||"",u=c.indexOf("g")>-1,p=new RegExp(r+"|"+t,"g"+c.replace(/g/g,"")),h=new RegExp(r,c.replace(/g/g,"")),d=[];do{for(s=0;o=p.exec(e);)if(h.test(o[0]))s++||(i=(a=p.lastIndex)-o[0].length);else if(s&&!--s){l=o.index+o[0].length;var f={left:{start:i,end:a},match:{start:a,end:o.index},right:{start:o.index,end:l},wholeMatch:{start:i,end:l}};if(d.push(f),!u)return d}}while(s&&(p.lastIndex=a));return d};s.helper.matchRecursiveRegExp=function(e,r,t,n){for(var s=c(e,r,t,n),a=[],o=0;o<s.length;++o)a.push([e.slice(s[o].wholeMatch.start,s[o].wholeMatch.end),e.slice(s[o].match.start,s[o].match.end),e.slice(s[o].left.start,s[o].left.end),e.slice(s[o].right.start,s[o].right.end)]);return a},s.helper.replaceRecursiveRegExp=function(e,r,t,n,a){if(!s.helper.isFunction(r)){var o=r;r=function(){return o}}var i=c(e,t,n,a),l=e,u=i.length;if(u>0){var p=[];0!==i[0].wholeMatch.start&&p.push(e.slice(0,i[0].wholeMatch.start));for(var h=0;h<u;++h)p.push(r(e.slice(i[h].wholeMatch.start,i[h].wholeMatch.end),e.slice(i[h].match.start,i[h].match.end),e.slice(i[h].left.start,i[h].left.end),e.slice(i[h].right.start,i[h].right.end))),h<u-1&&p.push(e.slice(i[h].wholeMatch.end,i[h+1].wholeMatch.start));i[u-1].wholeMatch.end<e.length&&p.push(e.slice(i[u-1].wholeMatch.end)),l=p.join("")}return l},s.helper.isUndefined(console)&&(console={warn:function(e){alert(e)},log:function(e){alert(e)},error:function(e){throw e}}),s.Converter=function(e){function t(e,t){if(t=t||null,s.helper.isString(e)){if(e=s.helper.stdExtName(e),t=e,s.extensions[e])return console.warn("DEPRECATION WARNING: "+e+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),void a(s.extensions[e],e);if(s.helper.isUndefined(o[e]))throw Error('Extension "'+e+'" could not be loaded. It was either not found or is not a valid extension.');e=o[e]}"function"==typeof e&&(e=e()),s.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var i=0;i<e.length;++i){switch(e[i].type){case"lang":h.push(e[i]);break;case"output":d.push(e[i])}if(e[i].hasOwnProperty(f))for(var l in e[i].listeners)e[i].listeners.hasOwnProperty(l)&&c(l,e[i].listeners[l])}}function a(e,t){"function"==typeof e&&(e=e(new s.Converter)),s.helper.isArray(e)||(e=[e]);var n=r(e,t);if(!n.valid)throw Error(n.error);for(var a=0;a<e.length;++a)switch(e[a].type){case"lang":h.push(e[a]);break;case"output":d.push(e[a]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function c(e,r){if(!s.helper.isString(e))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+(void 0===e?"undefined":n(e))+" given");if("function"!=typeof r)throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+(void 0===r?"undefined":n(r))+" given");f.hasOwnProperty(e)||(f[e]=[]),f[e].push(r)}function u(e){var r=e.match(/^\s*/)[0].length,t=new RegExp("^\\s{0,"+r+"}","gm");return e.replace(t,"")}var p={},h=[],d=[],f={};!function(){e=e||{};for(var r in i)i.hasOwnProperty(r)&&(p[r]=i[r]);if("object"!==(void 0===e?"undefined":n(e)))throw Error("Converter expects the passed parameter to be an object, but "+(void 0===e?"undefined":n(e))+" was passed instead.");for(var a in e)e.hasOwnProperty(a)&&(p[a]=e[a]);p.extensions&&s.helper.forEach(p.extensions,t)}(),this._dispatch=function(e,r,t,n){if(f.hasOwnProperty(e))for(var s=0;s<f[e].length;++s){var a=f[e][s](e,r,this,t,n);a&&void 0!==a&&(r=a)}return r},this.listen=function(e,r){return c(e,r),this},this.makeHtml=function(e){if(!e)return e;var r={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:h,outputModifiers:d,converter:this,ghCodeBlocks:[]};return e=e.replace(/~/g,"~T"),e=e.replace(/\$/g,"~D"),e=e.replace(/\r\n/g,"\n"),e=e.replace(/\r/g,"\n"),p.smartIndentationFix&&(e=u(e)),e=e,e=s.subParser("detab")(e,p,r),e=s.subParser("stripBlankLines")(e,p,r),s.helper.forEach(h,function(t){e=s.subParser("runExtension")(t,e,p,r)}),e=s.subParser("hashPreCodeTags")(e,p,r),e=s.subParser("githubCodeBlocks")(e,p,r),e=s.subParser("hashHTMLBlocks")(e,p,r),e=s.subParser("hashHTMLSpans")(e,p,r),e=s.subParser("stripLinkDefinitions")(e,p,r),e=s.subParser("blockGamut")(e,p,r),e=s.subParser("unhashHTMLSpans")(e,p,r),e=s.subParser("unescapeSpecialChars")(e,p,r),e=e.replace(/~D/g,"$$"),e=e.replace(/~T/g,"~"),s.helper.forEach(d,function(t){e=s.subParser("runExtension")(t,e,p,r)}),e},this.setOption=function(e,r){p[e]=r},this.getOption=function(e){return p[e]},this.getOptions=function(){return p},this.addExtension=function(e,r){t(e,r=r||null)},this.useExtension=function(e){t(e)},this.setFlavor=function(e){if(l.hasOwnProperty(e)){var r=l[e];for(var t in r)r.hasOwnProperty(t)&&(p[t]=r[t])}},this.removeExtension=function(e){s.helper.isArray(e)||(e=[e]);for(var r=0;r<e.length;++r){for(var t=e[r],n=0;n<h.length;++n)h[n]===t&&h[n].splice(n,1);for(;0<d.length;++n)d[0]===t&&d[0].splice(n,1)}},this.getAllExtensions=function(){return{language:h,output:d}}},s.subParser("anchors",function(e,r,t){var n=function(e,r,n,a,o,i,l,c){s.helper.isUndefined(c)&&(c=""),e=r;var u=n,p=a.toLowerCase(),h=o,d=c;if(!h)if(p||(p=u.toLowerCase().replace(/ ?\n/g," ")),h="#"+p,s.helper.isUndefined(t.gUrls[p])){if(!(e.search(/\(\s*\)$/m)>-1))return e;h=""}else h=t.gUrls[p],s.helper.isUndefined(t.gTitles[p])||(d=t.gTitles[p]);var f='<a href="'+(h=s.helper.escapeCharacters(h,"*_",!1))+'"';return""!==d&&null!==d&&(d=d.replace(/"/g,"&quot;"),f+=' title="'+(d=s.helper.escapeCharacters(d,"*_",!1))+'"'),f+=">"+u+"</a>"};return e=(e=t.converter._dispatch("anchors.before",e,r,t)).replace(/(\[((?:\[[^\]]*]|[^\[\]])*)][ ]?(?:\n[ ]*)?\[(.*?)])()()()()/g,n),e=e.replace(/(\[((?:\[[^\]]*]|[^\[\]])*)]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,n),e=e.replace(/(\[([^\[\]]+)])()()()()()/g,n),e=t.converter._dispatch("anchors.after",e,r,t)}),s.subParser("autoLinks",function(e,r,t){function n(e,r){var t=r;return/^www\./i.test(r)&&(r=r.replace(/^www\./i,"http://www.")),'<a href="'+r+'">'+t+"</a>"}function a(e,r){var t=s.subParser("unescapeSpecialChars")(r);return s.subParser("encodeEmailAddress")(t)}var o=/\b(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+)(?=\s|$)(?!["<>])/gi,i=/<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)>/gi,l=/(?:^|[ \n\t])([A-Za-z0-9!#$%&'*+-/=?^_`\{|}~\.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?:$|[ \n\t])/gi,c=/<(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;return e=(e=t.converter._dispatch("autoLinks.before",e,r,t)).replace(i,n),e=e.replace(c,a),r.simplifiedAutoLink&&(e=(e=e.replace(o,n)).replace(l,a)),e=t.converter._dispatch("autoLinks.after",e,r,t)}),s.subParser("blockGamut",function(e,r,t){e=t.converter._dispatch("blockGamut.before",e,r,t),e=s.subParser("blockQuotes")(e,r,t),e=s.subParser("headers")(e,r,t);var n=s.subParser("hashBlock")("<hr />",r,t);return e=e.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,n),e=e.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,n),e=s.subParser("lists")(e,r,t),e=s.subParser("codeBlocks")(e,r,t),e=s.subParser("tables")(e,r,t),e=s.subParser("hashHTMLBlocks")(e,r,t),e=s.subParser("paragraphs")(e,r,t),e=t.converter._dispatch("blockGamut.after",e,r,t)}),s.subParser("blockQuotes",function(e,r,t){return e=t.converter._dispatch("blockQuotes.before",e,r,t),e=e.replace(/((^[ \t]{0,3}>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(e,n){var a=n;return a=a.replace(/^[ \t]*>[ \t]?/gm,"~0"),a=a.replace(/~0/g,""),a=a.replace(/^[ \t]+$/gm,""),a=s.subParser("githubCodeBlocks")(a,r,t),a=s.subParser("blockGamut")(a,r,t),a=a.replace(/(^|\n)/g,"$1  "),a=a.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(e,r){var t=r;return t=t.replace(/^  /gm,"~0"),t=t.replace(/~0/g,"")}),s.subParser("hashBlock")("<blockquote>\n"+a+"\n</blockquote>",r,t)}),e=t.converter._dispatch("blockQuotes.after",e,r,t)}),s.subParser("codeBlocks",function(e,r,t){e=t.converter._dispatch("codeBlocks.before",e,r,t);var n=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g;return e=(e+="~0").replace(n,function(e,n,a){var o=n,i=a,l="\n";return o=s.subParser("outdent")(o),o=s.subParser("encodeCode")(o),o=s.subParser("detab")(o),o=o.replace(/^\n+/g,""),o=o.replace(/\n+$/g,""),r.omitExtraWLInCodeBlocks&&(l=""),o="<pre><code>"+o+l+"</code></pre>",s.subParser("hashBlock")(o,r,t)+i}),e=e.replace(/~0/,""),e=t.converter._dispatch("codeBlocks.after",e,r,t)}),s.subParser("codeSpans",function(e,r,t){return void 0===(e=t.converter._dispatch("codeSpans.before",e,r,t))&&(e=""),e=e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(e,r,t,n){var a=n;return a=a.replace(/^([ \t]*)/g,""),a=a.replace(/[ \t]*$/g,""),a=s.subParser("encodeCode")(a),r+"<code>"+a+"</code>"}),e=t.converter._dispatch("codeSpans.after",e,r,t)}),s.subParser("detab",function(e){return e=e.replace(/\t(?=\t)/g,"    "),e=e.replace(/\t/g,"~A~B"),e=e.replace(/~B(.+?)~A/g,function(e,r){for(var t=r,n=4-t.length%4,s=0;s<n;s++)t+=" ";return t}),e=e.replace(/~A/g,"    "),e=e.replace(/~B/g,"")}),s.subParser("encodeAmpsAndAngles",function(e){return e=e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),e=e.replace(/<(?![a-z\/?\$!])/gi,"&lt;")}),s.subParser("encodeBackslashEscapes",function(e){return e=e.replace(/\\(\\)/g,s.helper.escapeCharactersCallback),e=e.replace(/\\([`*_{}\[\]()>#+-.!])/g,s.helper.escapeCharactersCallback)}),s.subParser("encodeCode",function(e){return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=s.helper.escapeCharacters(e,"*_{}[]\\",!1)}),s.subParser("encodeEmailAddress",function(e){var r=[function(e){return"&#"+e.charCodeAt(0)+";"},function(e){return"&#x"+e.charCodeAt(0).toString(16)+";"},function(e){return e}];return e="mailto:"+e,e=e.replace(/./g,function(e){if("@"===e)e=r[Math.floor(2*Math.random())](e);else if(":"!==e){var t=Math.random();e=t>.9?r[2](e):t>.45?r[1](e):r[0](e)}return e}),e='<a href="'+e+'">'+e+"</a>",e=e.replace(/">.+:/g,'">')}),s.subParser("escapeSpecialCharsWithinTagAttributes",function(e){var r=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return e=e.replace(r,function(e){var r=e.replace(/(.)<\/?code>(?=.)/g,"$1`");return r=s.helper.escapeCharacters(r,"\\`*_",!1)})}),s.subParser("githubCodeBlocks",function(e,r,t){return r.ghCodeBlocks?(e=t.converter._dispatch("githubCodeBlocks.before",e,r,t),e+="~0",e=e.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(e,n,a){var o=r.omitExtraWLInCodeBlocks?"":"\n";return a=s.subParser("encodeCode")(a),a=s.subParser("detab")(a),a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,""),a="<pre><code"+(n?' class="'+n+" language-"+n+'"':"")+">"+a+o+"</code></pre>",a=s.subParser("hashBlock")(a,r,t),"\n\n~G"+(t.ghCodeBlocks.push({text:e,codeblock:a})-1)+"G\n\n"}),e=e.replace(/~0/,""),t.converter._dispatch("githubCodeBlocks.after",e,r,t)):e}),s.subParser("hashBlock",function(e,r,t){return e=e.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(t.gHtmlBlocks.push(e)-1)+"K\n\n"}),s.subParser("hashElement",function(e,r,t){return function(e,r){var n=r;return n=n.replace(/\n\n/g,"\n"),n=n.replace(/^\n/,""),n=n.replace(/\n+$/g,""),n="\n\n~K"+(t.gHtmlBlocks.push(n)-1)+"K\n\n"}}),s.subParser("hashHTMLBlocks",function(e,r,t){for(var n=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],a=0;a<n.length;++a)e=s.helper.replaceRecursiveRegExp(e,function(e,r,n,s){var a=e;return-1!==n.search(/\bmarkdown\b/)&&(a=n+t.converter.makeHtml(r)+s),"\n\n~K"+(t.gHtmlBlocks.push(a)-1)+"K\n\n"},"^(?: |\\t){0,3}<"+n[a]+"\\b[^>]*>","</"+n[a]+">","gim");return e=e.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,s.subParser("hashElement")(e,r,t)),e=e.replace(/(<!--[\s\S]*?-->)/g,s.subParser("hashElement")(e,r,t)),e=e.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,s.subParser("hashElement")(e,r,t))}),s.subParser("hashHTMLSpans",function(e,r,t){for(var n=s.helper.matchRecursiveRegExp(e,"<code\\b[^>]*>","</code>","gi"),a=0;a<n.length;++a)e=e.replace(n[a][0],"~L"+(t.gHtmlSpans.push(n[a][0])-1)+"L");return e}),s.subParser("unhashHTMLSpans",function(e,r,t){for(var n=0;n<t.gHtmlSpans.length;++n)e=e.replace("~L"+n+"L",t.gHtmlSpans[n]);return e}),s.subParser("hashPreCodeTags",function(e,r,t){return e=s.helper.replaceRecursiveRegExp(e,function(e,r,n,a){var o=n+s.subParser("encodeCode")(r)+a;return"\n\n~G"+(t.ghCodeBlocks.push({text:e,codeblock:o})-1)+"G\n\n"},"^(?: |\\t){0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^(?: |\\t){0,3}</code>\\s*</pre>","gim")}),s.subParser("headers",function(e,r,t){function n(e){var r,n=e.replace(/[^\w]/g,"").toLowerCase();return t.hashLinkCounts[n]?r=n+"-"+t.hashLinkCounts[n]++:(r=n,t.hashLinkCounts[n]=1),!0===a&&(a="section"),s.helper.isString(a)?a+r:r}e=t.converter._dispatch("headers.before",e,r,t);var a=r.prefixHeaderId,o=isNaN(parseInt(r.headerLevelStart))?1:parseInt(r.headerLevelStart),i=r.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,l=r.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;return e=e.replace(i,function(e,a){var i=s.subParser("spanGamut")(a,r,t),l=r.noHeaderId?"":' id="'+n(a)+'"',c=o,u="<h"+c+l+">"+i+"</h"+c+">";return s.subParser("hashBlock")(u,r,t)}),e=e.replace(l,function(e,a){var i=s.subParser("spanGamut")(a,r,t),l=r.noHeaderId?"":' id="'+n(a)+'"',c=o+1,u="<h"+c+l+">"+i+"</h"+c+">";return s.subParser("hashBlock")(u,r,t)}),e=e.replace(/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm,function(e,a,i){var l=s.subParser("spanGamut")(i,r,t),c=r.noHeaderId?"":' id="'+n(i)+'"',u=o-1+a.length,p="<h"+u+c+">"+l+"</h"+u+">";return s.subParser("hashBlock")(p,r,t)}),e=t.converter._dispatch("headers.after",e,r,t)}),s.subParser("images",function(e,r,t){function n(e,r,n,a,o,i,l,c){var u=t.gUrls,p=t.gTitles,h=t.gDimensions;if(n=n.toLowerCase(),c||(c=""),""===a||null===a){if(""!==n&&null!==n||(n=r.toLowerCase().replace(/ ?\n/g," ")),a="#"+n,s.helper.isUndefined(u[n]))return e;a=u[n],s.helper.isUndefined(p[n])||(c=p[n]),s.helper.isUndefined(h[n])||(o=h[n].width,i=h[n].height)}r=r.replace(/"/g,"&quot;"),r=s.helper.escapeCharacters(r,"*_",!1);var d='<img src="'+(a=s.helper.escapeCharacters(a,"*_",!1))+'" alt="'+r+'"';return c&&(c=c.replace(/"/g,"&quot;"),d+=' title="'+(c=s.helper.escapeCharacters(c,"*_",!1))+'"'),o&&i&&(d+=' width="'+(o="*"===o?"auto":o)+'"',d+=' height="'+(i="*"===i?"auto":i)+'"'),d+=" />"}var a=/!\[(.*?)]\s?\([ \t]*()<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(['"])(.*?)\6[ \t]*)?\)/g,o=/!\[([^\]]*?)] ?(?:\n *)?\[(.*?)]()()()()()/g;return e=(e=t.converter._dispatch("images.before",e,r,t)).replace(o,n),e=e.replace(a,n),e=t.converter._dispatch("images.after",e,r,t)}),s.subParser("italicsAndBold",function(e,r,t){return e=t.converter._dispatch("italicsAndBold.before",e,r,t),e=r.literalMidWordUnderscores?(e=(e=(e=e.replace(/(^|\s|>|\b)__(?=\S)([\s\S]+?)__(?=\b|<|\s|$)/gm,"$1<strong>$2</strong>")).replace(/(^|\s|>|\b)_(?=\S)([\s\S]+?)_(?=\b|<|\s|$)/gm,"$1<em>$2</em>")).replace(/(\*\*)(?=\S)([^\r]*?\S[*]*)\1/g,"<strong>$2</strong>")).replace(/(\*)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"):(e=e.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>")).replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),e=t.converter._dispatch("italicsAndBold.after",e,r,t)}),s.subParser("lists",function(e,r,t){function n(e,n){t.gListLevel++,e=e.replace(/\n{2,}$/,"\n"),e+="~0";var a=/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,o=/\n[ \t]*\n(?!~0)/.test(e);return e=e.replace(a,function(e,n,a,i,l,c,u){u=u&&""!==u.trim();var p=s.subParser("outdent")(l,r,t),h="";return c&&r.tasklists&&(h=' class="task-list-item" style="list-style-type: none;"',p=p.replace(/^[ \t]*\[(x|X| )?]/m,function(){var e='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return u&&(e+=" checked"),e+=">"})),n||p.search(/\n{2,}/)>-1?(p=s.subParser("githubCodeBlocks")(p,r,t),p=s.subParser("blockGamut")(p,r,t)):(p=(p=s.subParser("lists")(p,r,t)).replace(/\n$/,""),p=o?s.subParser("paragraphs")(p,r,t):s.subParser("spanGamut")(p,r,t)),p="\n<li"+h+">"+p+"</li>\n"}),e=e.replace(/~0/g,""),t.gListLevel--,n&&(e=e.replace(/\s+$/,"")),e}function a(e,r,t){var s="ul"===r?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,a=[],o="";if(-1!==e.search(s)){!function e(a){var i=a.search(s);-1!==i?(o+="\n\n<"+r+">"+n(a.slice(0,i),!!t)+"</"+r+">\n\n",s="ul"===(r="ul"===r?"ol":"ul")?/^ {0,2}\d+\.[ \t]/gm:/^ {0,2}[*+-][ \t]/gm,e(a.slice(i))):o+="\n\n<"+r+">"+n(a,!!t)+"</"+r+">\n\n"}(e);for(var i=0;i<a.length;++i);}else o="\n\n<"+r+">"+n(e,!!t)+"</"+r+">\n\n";return o}e=t.converter._dispatch("lists.before",e,r,t),e+="~0";var o=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return t.gListLevel?e=e.replace(o,function(e,r,t){return a(r,t.search(/[*+-]/g)>-1?"ul":"ol",!0)}):(o=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,e=e.replace(o,function(e,r,t,n){return a(t,n.search(/[*+-]/g)>-1?"ul":"ol")})),e=e.replace(/~0/,""),e=t.converter._dispatch("lists.after",e,r,t)}),s.subParser("outdent",function(e){return e=e.replace(/^(\t|[ ]{1,4})/gm,"~0"),e=e.replace(/~0/g,"")}),s.subParser("paragraphs",function(e,r,t){for(var n=(e=(e=(e=t.converter._dispatch("paragraphs.before",e,r,t)).replace(/^\n+/g,"")).replace(/\n+$/g,"")).split(/\n{2,}/g),a=[],o=n.length,i=0;i<o;i++){var l=n[i];l.search(/~(K|G)(\d+)\1/g)>=0?a.push(l):(l=(l=s.subParser("spanGamut")(l,r,t)).replace(/^([ \t]*)/g,"<p>"),l+="</p>",a.push(l))}for(o=a.length,i=0;i<o;i++){for(var c="",u=a[i],p=!1;u.search(/~(K|G)(\d+)\1/)>=0;){var h=RegExp.$1,d=RegExp.$2;c=(c="K"===h?t.gHtmlBlocks[d]:p?s.subParser("encodeCode")(t.ghCodeBlocks[d].text):t.ghCodeBlocks[d].codeblock).replace(/\$/g,"$$$$"),u=u.replace(/(\n\n)?~(K|G)\d+\2(\n\n)?/,c),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u)&&(p=!0)}a[i]=u}return e=a.join("\n\n"),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),t.converter._dispatch("paragraphs.after",e,r,t)}),s.subParser("runExtension",function(e,r,t,n){if(e.filter)r=e.filter(r,n.converter,t);else if(e.regex){var s=e.regex;!s instanceof RegExp&&(s=new RegExp(s,"g")),r=r.replace(s,e.replace)}return r}),s.subParser("spanGamut",function(e,r,t){return e=t.converter._dispatch("spanGamut.before",e,r,t),e=s.subParser("codeSpans")(e,r,t),e=s.subParser("escapeSpecialCharsWithinTagAttributes")(e,r,t),e=s.subParser("encodeBackslashEscapes")(e,r,t),e=s.subParser("images")(e,r,t),e=s.subParser("anchors")(e,r,t),e=s.subParser("autoLinks")(e,r,t),e=s.subParser("encodeAmpsAndAngles")(e,r,t),e=s.subParser("italicsAndBold")(e,r,t),e=s.subParser("strikethrough")(e,r,t),e=e.replace(/  +\n/g," <br />\n"),e=t.converter._dispatch("spanGamut.after",e,r,t)}),s.subParser("strikethrough",function(e,r,t){return r.strikethrough&&(e=(e=t.converter._dispatch("strikethrough.before",e,r,t)).replace(/(?:~T){2}([\s\S]+?)(?:~T){2}/g,"<del>$1</del>"),e=t.converter._dispatch("strikethrough.after",e,r,t)),e}),s.subParser("stripBlankLines",function(e){return e.replace(/^[ \t]+$/gm,"")}),s.subParser("stripLinkDefinitions",function(e,r,t){var n=/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(\S+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=~0))/gm;return e+="~0",e=e.replace(n,function(e,n,a,o,i,l,c){return n=n.toLowerCase(),t.gUrls[n]=s.subParser("encodeAmpsAndAngles")(a),l?l+c:(c&&(t.gTitles[n]=c.replace(/"|'/g,"&quot;")),r.parseImgDimensions&&o&&i&&(t.gDimensions[n]={width:o,height:i}),"")}),e=e.replace(/~0/,"")}),s.subParser("tables",function(e,r,t){function n(e){return/^:[ \t]*--*$/.test(e)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(e)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(e)?' style="text-align:center;"':""}function a(e,n){var a="";return e=e.trim(),r.tableHeaderId&&(a=' id="'+e.replace(/ /g,"_").toLowerCase()+'"'),e=s.subParser("spanGamut")(e,r,t),"<th"+a+n+">"+e+"</th>\n"}function o(e,n){return"<td"+n+">"+s.subParser("spanGamut")(e,r,t)+"</td>\n"}function i(e,r){for(var t="<table>\n<thead>\n<tr>\n",n=e.length,s=0;s<n;++s)t+=e[s];for(t+="</tr>\n</thead>\n<tbody>\n",s=0;s<r.length;++s){t+="<tr>\n";for(var a=0;a<n;++a)t+=r[s][a];t+="</tr>\n"}return t+="</tbody>\n</table>\n"}if(!r.tables)return e;var l=/^[ \t]{0,3}\|?.+\|.+\n[ \t]{0,3}\|?[ \t]*:?[ \t]*(?:-|=){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:-|=){2,}[\s\S]+?(?:\n\n|~0)/gm;return e=t.converter._dispatch("tables.before",e,r,t),e=e.replace(l,function(e){var r,t=e.split("\n");for(r=0;r<t.length;++r)/^[ \t]{0,3}\|/.test(t[r])&&(t[r]=t[r].replace(/^[ \t]{0,3}\|/,"")),/\|[ \t]*$/.test(t[r])&&(t[r]=t[r].replace(/\|[ \t]*$/,""));var l=t[0].split("|").map(function(e){return e.trim()}),c=t[1].split("|").map(function(e){return e.trim()}),u=[],p=[],h=[],d=[];for(t.shift(),t.shift(),r=0;r<t.length;++r)""!==t[r].trim()&&u.push(t[r].split("|").map(function(e){return e.trim()}));if(l.length<c.length)return e;for(r=0;r<c.length;++r)h.push(n(c[r]));for(r=0;r<l.length;++r)s.helper.isUndefined(h[r])&&(h[r]=""),p.push(a(l[r],h[r]));for(r=0;r<u.length;++r){for(var f=[],g=0;g<p.length;++g)s.helper.isUndefined(u[r][g]),f.push(o(u[r][g],h[g]));d.push(f)}return i(p,d)}),e=t.converter._dispatch("tables.after",e,r,t)}),s.subParser("unescapeSpecialChars",function(e){return e=e.replace(/~E(\d+)E/g,function(e,r){var t=parseInt(r);return String.fromCharCode(t)})}),module.exports=s; 
 			}); 
		define("utils/wxParse/wxDiscode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e=e.replace(/&forall;/g,"∀"),e=e.replace(/&part;/g,"∂"),e=e.replace(/&exists;/g,"∃"),e=e.replace(/&empty;/g,"∅"),e=e.replace(/&nabla;/g,"∇"),e=e.replace(/&isin;/g,"∈"),e=e.replace(/&notin;/g,"∉"),e=e.replace(/&ni;/g,"∋"),e=e.replace(/&prod;/g,"∏"),e=e.replace(/&sum;/g,"∑"),e=e.replace(/&minus;/g,"−"),e=e.replace(/&lowast;/g,"∗"),e=e.replace(/&radic;/g,"√"),e=e.replace(/&prop;/g,"∝"),e=e.replace(/&infin;/g,"∞"),e=e.replace(/&ang;/g,"∠"),e=e.replace(/&and;/g,"∧"),e=e.replace(/&or;/g,"∨"),e=e.replace(/&cap;/g,"∩"),e=e.replace(/&cap;/g,"∪"),e=e.replace(/&int;/g,"∫"),e=e.replace(/&there4;/g,"∴"),e=e.replace(/&sim;/g,"∼"),e=e.replace(/&cong;/g,"≅"),e=e.replace(/&asymp;/g,"≈"),e=e.replace(/&ne;/g,"≠"),e=e.replace(/&le;/g,"≤"),e=e.replace(/&ge;/g,"≥"),e=e.replace(/&sub;/g,"⊂"),e=e.replace(/&sup;/g,"⊃"),e=e.replace(/&nsub;/g,"⊄"),e=e.replace(/&sube;/g,"⊆"),e=e.replace(/&supe;/g,"⊇"),e=e.replace(/&oplus;/g,"⊕"),e=e.replace(/&otimes;/g,"⊗"),e=e.replace(/&perp;/g,"⊥"),e=e.replace(/&sdot;/g,"⋅")}function a(e){return e=e.replace(/&Alpha;/g,"Α"),e=e.replace(/&Beta;/g,"Β"),e=e.replace(/&Gamma;/g,"Γ"),e=e.replace(/&Delta;/g,"Δ"),e=e.replace(/&Epsilon;/g,"Ε"),e=e.replace(/&Zeta;/g,"Ζ"),e=e.replace(/&Eta;/g,"Η"),e=e.replace(/&Theta;/g,"Θ"),e=e.replace(/&Iota;/g,"Ι"),e=e.replace(/&Kappa;/g,"Κ"),e=e.replace(/&Lambda;/g,"Λ"),e=e.replace(/&Mu;/g,"Μ"),e=e.replace(/&Nu;/g,"Ν"),e=e.replace(/&Xi;/g,"Ν"),e=e.replace(/&Omicron;/g,"Ο"),e=e.replace(/&Pi;/g,"Π"),e=e.replace(/&Rho;/g,"Ρ"),e=e.replace(/&Sigma;/g,"Σ"),e=e.replace(/&Tau;/g,"Τ"),e=e.replace(/&Upsilon;/g,"Υ"),e=e.replace(/&Phi;/g,"Φ"),e=e.replace(/&Chi;/g,"Χ"),e=e.replace(/&Psi;/g,"Ψ"),e=e.replace(/&Omega;/g,"Ω"),e=e.replace(/&alpha;/g,"α"),e=e.replace(/&beta;/g,"β"),e=e.replace(/&gamma;/g,"γ"),e=e.replace(/&delta;/g,"δ"),e=e.replace(/&epsilon;/g,"ε"),e=e.replace(/&zeta;/g,"ζ"),e=e.replace(/&eta;/g,"η"),e=e.replace(/&theta;/g,"θ"),e=e.replace(/&iota;/g,"ι"),e=e.replace(/&kappa;/g,"κ"),e=e.replace(/&lambda;/g,"λ"),e=e.replace(/&mu;/g,"μ"),e=e.replace(/&nu;/g,"ν"),e=e.replace(/&xi;/g,"ξ"),e=e.replace(/&omicron;/g,"ο"),e=e.replace(/&pi;/g,"π"),e=e.replace(/&rho;/g,"ρ"),e=e.replace(/&sigmaf;/g,"ς"),e=e.replace(/&sigma;/g,"σ"),e=e.replace(/&tau;/g,"τ"),e=e.replace(/&upsilon;/g,"υ"),e=e.replace(/&phi;/g,"φ"),e=e.replace(/&chi;/g,"χ"),e=e.replace(/&psi;/g,"ψ"),e=e.replace(/&omega;/g,"ω"),e=e.replace(/&thetasym;/g,"ϑ"),e=e.replace(/&upsih;/g,"ϒ"),e=e.replace(/&piv;/g,"ϖ"),e=e.replace(/&middot;/g,"·")}function r(e){return e=e.replace(/&nbsp;/g," "),e=e.replace(/&quot;/g,"'"),e=e.replace(/&amp;/g,"&"),e=e.replace(/&lt;/g,"<"),e=e.replace(/&gt;/g,">"),e=e.replace(/&#8226;/g,"•")}function l(e){return e=e.replace(/&OElig;/g,"Œ"),e=e.replace(/&oelig;/g,"œ"),e=e.replace(/&Scaron;/g,"Š"),e=e.replace(/&scaron;/g,"š"),e=e.replace(/&Yuml;/g,"Ÿ"),e=e.replace(/&fnof;/g,"ƒ"),e=e.replace(/&circ;/g,"ˆ"),e=e.replace(/&tilde;/g,"˜"),e=e.replace(/&ensp;/g,""),e=e.replace(/&emsp;/g,""),e=e.replace(/&thinsp;/g,""),e=e.replace(/&zwnj;/g,""),e=e.replace(/&zwj;/g,""),e=e.replace(/&lrm;/g,""),e=e.replace(/&rlm;/g,""),e=e.replace(/&ndash;/g,"–"),e=e.replace(/&mdash;/g,"—"),e=e.replace(/&lsquo;/g,"‘"),e=e.replace(/&rsquo;/g,"’"),e=e.replace(/&sbquo;/g,"‚"),e=e.replace(/&ldquo;/g,"“"),e=e.replace(/&rdquo;/g,"”"),e=e.replace(/&bdquo;/g,"„"),e=e.replace(/&dagger;/g,"†"),e=e.replace(/&Dagger;/g,"‡"),e=e.replace(/&bull;/g,"•"),e=e.replace(/&hellip;/g,"…"),e=e.replace(/&permil;/g,"‰"),e=e.replace(/&prime;/g,"′"),e=e.replace(/&Prime;/g,"″"),e=e.replace(/&lsaquo;/g,"‹"),e=e.replace(/&rsaquo;/g,"›"),e=e.replace(/&oline;/g,"‾"),e=e.replace(/&euro;/g,"€"),e=e.replace(/&trade;/g,"™"),e=e.replace(/&larr;/g,"←"),e=e.replace(/&uarr;/g,"↑"),e=e.replace(/&rarr;/g,"→"),e=e.replace(/&darr;/g,"↓"),e=e.replace(/&harr;/g,"↔"),e=e.replace(/&crarr;/g,"↵"),e=e.replace(/&lceil;/g,"⌈"),e=e.replace(/&rceil;/g,"⌉"),e=e.replace(/&lfloor;/g,"⌊"),e=e.replace(/&rfloor;/g,"⌋"),e=e.replace(/&loz;/g,"◊"),e=e.replace(/&spades;/g,"♠"),e=e.replace(/&clubs;/g,"♣"),e=e.replace(/&hearts;/g,"♥"),e=e.replace(/&diams;/g,"♦"),e=e.replace(/&#39;/g,"'")}function p(e){return e=e.replace(/\r\n/g,""),e=e.replace(/\n/g,""),e=e.replace(/code/g,"wxxxcode-style")}module.exports={strDiscode:function(c){return c=e(c),c=a(c),c=r(c),c=l(c),c=p(c)},urlToHttpUrl:function(e,a){return new RegExp("^//").test(e)&&(e=a+":"+e),e}}; 
 			}); 
		define("utils/wxParse/wxParse.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function a(e){var t=this,a=e.target.dataset.src,i=e.target.dataset.from;void 0!==i&&i.length>0&&wx.previewImage({current:a,urls:t.data[i].imageUrls})}function i(e){var t=this,a=e.target.dataset.from,i=e.target.dataset.idx;void 0!==a&&a.length>0&&r(e,i,t,a)}function r(e,a,i,r){var o,d=i.data[r];if(d&&0!=d.images.length){var s=d.images,l=n(e.detail.width,e.detail.height,i,r),g=s[a].index,h=""+r,m=!0,u=!1,v=void 0;try{for(var f,w=g.split(".")[Symbol.iterator]();!(m=(f=w.next()).done);m=!0)h+=".nodes["+f.value+"]"}catch(e){u=!0,v=e}finally{try{!m&&w.return&&w.return()}finally{if(u)throw v}}var c=h+".width",x=h+".height";i.setData((o={},t(o,c,l.imageWidth),t(o,x,l.imageheight),o))}}function n(e,t,a,i){var r=0,n=0,o=0,d={},g=a.data[i].view.imagePadding;return r=s-2*g,l,e>r?(o=(n=r)*t/e,d.imageWidth=n,d.imageheight=o):(d.imageWidth=e,d.imageheight=t),d}var o=e(require("./showdown.js")),d=e(require("./html2json.js")),s=0,l=0;wx.getSystemInfo({success:function(e){s=e.windowWidth,l=e.windowHeight}}),module.exports={wxParse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wxParseData",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'<div class="color:red;">数据不能为空</div>',n=arguments[3],s=arguments[4],l=n,g={};if("html"==t)g=d.default.html2json(r,e),console.log(JSON.stringify(g," "," "));else if("md"==t||"markdown"==t){var h=(new o.default.Converter).makeHtml(r);g=d.default.html2json(h,e),console.log(JSON.stringify(g," "," "))}g.view={},g.view.imagePadding=0,void 0!==s&&(g.view.imagePadding=s);var m={};m[e]=g,l.setData(m),l.wxParseImgLoad=i,l.wxParseImgTap=a},wxParseTemArray:function(e,t,a,i){for(var r=[],n=i.data,o=null,d=0;d<a;d++){var s=n[t+d].nodes;r.push(s)}e=e||"wxParseTemArray",(o=JSON.parse('{"'+e+'":""}'))[e]=r,i.setData(o)},emojisInit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/wxParse/emojis/",a=arguments[2];d.default.emojisInit(e,t,a)}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o,e,a){var t=a.code,n=JSON.stringify(o.globalData.systemInfo,["model","version","system","SDKVersion"]);r.request({url:"d=wxapi&c=auth&m=login",data:{code:t,system:n},success:function(a){console.info("callLoginByCode success"),o.globalData.openId=a.data.openid,void 0!==a.data.userinfo&&o.setLogin(a.data.userinfo),wx.setStorageSync("openid",o.globalData.openId),s(o,e)}})}function e(o,e){var a=JSON.stringify(o.globalData.systemInfo,["model","version","system","SDKVersion"]);r.request({url:"d=wxapi&c=auth&m=login",data:{system:a},success:function(a){o.globalData.openId=a.data.openid,void 0!==a.data.userinfo&&o.setLogin(a.data.userinfo),console.info("callLoginByOpenId success"),s(o,e)}})}function a(o,e){r.request({url:"d=wxapi&c=auth&m=decrypt_userinfo",data:{openId:o.globalData.openId,rawData:e.rawData,signature:e.signature,encryptedData:e.encryptedData,iv:e.iv},success:function(o){console.log("callDecryptUser success"),console.log(o)},fail:function(o){console.log("callDecryptUser fail")}})}function t(e,a){wx.login({success:function(t){console.info("wx.login success"),o(e,a,t)},fail:function(o){console.info("wx.login fail"),r.showError("登录异常"+o.errMsg)}})}function n(o,a){wx.checkSession({success:function(){console.info("wx.checkSession success");var n=wx.getStorageSync("openid");null!=n&&n.length>20?o.globalData.openId=n:(n=null,o.globalData.openId=n),null==n||n.length<20?t(o,a):0==o.globalData.hasLogin?e(o,a):s(o,a)},fail:function(){console.info("wx.checkSession fail"),o.globalData.openId=null,t(o,a)}})}function s(o,e){var t=Math.round((new Date).getTime()/1e3);if(null==o.globalData.userInfo){var n=wx.getStorageSync("userinfo");"object"==(void 0===n?"undefined":i(n))&&n.timestamp>t-86400&&(o.globalData.userInfo=n,console.info("getUserInfo from storage"))}null==o.globalData.userInfo?wx.getUserInfo({success:function(n){var s=n.userInfo;o.globalData.userInfo={nickname:s.nickName,usersex:s.gender,useravatar:s.avatarUrl,timestamp:t},console.info("wx.getUserInfo success"),wx.setStorageSync("userinfo",o.globalData.userInfo),"function"==typeof e&&e(o.globalData.userInfo),a(o,n)},fail:function(o){console.warn("need open setting: scope.userInfo");var e=getCurrentPages();if(e.length>0){var a=e[e.length-1].route;console.error("需要前往的界面---\x3e"+a),"/page/author/author"!=a&&wx.navigateTo({url:"/page/author/author"})}}}):"function"==typeof e&&e(o.globalData.userInfo)}function l(o,e,a){var t=u.getTimestamp(),n=o.globalData.appConfig,s=wx.getStorageSync("appConfig");if(null==n&&"number"==typeof s.timestamp&&t-s.timestamp<1800&&(n=s),a&&n&&"number"==typeof n.timestamp&&t-n.timestamp>10&&(n=null),n&&"number"==typeof n.timestamp&&t-n.timestamp<86400){var l={};o.globalData.appName=n.appname,o.globalData.appLogo=n.applogo,l.title=n.sharetitle,l.url=n.shareurl,o.globalData.shareInfo=l,"function"==typeof e&&e(n)}else r.request({url:"d=wxapi&c=open_config&m=get_config",success:function(a){var n=a.data,s={};o.globalData.appName=n.appname,o.globalData.appLogo=n.applogo,s.title=n.sharetitle,s.url=n.shareurl,o.globalData.shareInfo=s,n.timestamp=t,o.globalData.appConfig=n,wx.setStorageSync("appConfig",n),"function"==typeof e&&e(n)}})}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r=require("./utils/client"),u=require("./utils/util"),c=require("./utils/typeTool");App({onLaunch:function(){r.init(),this.globalData.systemInfo=wx.getSystemInfoSync(),console.log("App Launch"),this.getAppConfig()},onShow:function(){this.getUserInfo(),console.log("App Show")},onHide:function(){console.log("App Hide")},onError:function(o){console.log(o)},globalData:{appName:"",appLogo:null,appConfig:null,hasLogin:!1,userRole:null,userId:0,userMobile:null,openId:null,userInfo:null,shareInfo:null,bindUser:null,imageHeader:"http://tgj168.com/static/images/mapp/bcwy/",modules:[]},typeTool:c,client:r,util:u,getDictionary:function(o,e){var a=u.getTimestamp(),t="dict_"+o,n=wx.getStorageSync(t);if(null!=n&&"number"==typeof n.timestamp&&a-n.timestamp<864e3)"function"==typeof e&&e(n.list);else{var s={dictcatcode:o};r.request({url:"d=wxapi&c=common&m=dict_entity",data:s,success:function(o){var n=o.data,s=[];for(var l in n)s.push({value:n[l].dictkey,name:n[l].dictname});var i={timestamp:a,list:s};wx.setStorageSync(t,i),"function"==typeof e&&e(i.list)}})}},showError:r.showError,showMessage:r.showMessage,getUserInfo:function(o){n(this,o)},getAppConfig:function(o,e){void 0===e&&(e=!1),l(this,o,e)},checkLogin:function(){var o=this;return!!this.globalData.hasLogin||(wx.navigateTo({url:"/page/user/common/login",success:function(e){o.showMessage("请登录")},fail:function(e){o.showError("登录失败")}}),!1)},setLogin:function(o){void 0===o||null==o?this.setLogout():(this.globalData.hasLogin=!0,this.globalData.userId=o.userid,this.globalData.userMobile=o.mobile,this.globalData.userRole=o.approlename,this.globalData.bindUser=o)},setLogout:function(){this.globalData.hasLogin=!1,this.globalData.userId=0,this.globalData.userMobile="",this.globalData.userRole=null,this.globalData.bindUser=null}}); 
 			}); 	require("app.js");
 		__wxRoute = 'page/home/component/bbqCell';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'page/home/component/bbqCell.js';	define("page/home/component/bbqCell.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp(),a=require("../block");Component({options:{multipleSlots:!0},properties:{data:{type:Object,observer:function(a,e,i){a.imageList=t.client.getFileUrl(a.imagelist),a.time=t.util.formatDateTime(a.dateline),this.setData({data:a})}},index:{type:Number},mine:{type:Boolean,value:!1}},data:{showCommentView:!1,showTips:!1,tipsIndex:0,tips:[]},methods:{commentClick:function(a){var e=a.currentTarget.dataset,i=e.target,d=e.touserid,s=this;t.getUserInfo(function(a){t.globalData.userId==d?wx.showActionSheet({itemList:["删除"],itemColor:"#FF0000",success:function(a){wx.showLoading({title:"正在删除"}),t.client.request({url:"d=wxapi&c=forum_my_post&m=post_delete",data:{postid:e.postid},success:function(a){t.showMessage(a.message);var i=e.idx,d=s.data.data,n=d.postlist;console.log(n),n.splice(i,1),d.postcnt=parseInt(d.postcnt)-1,s.setData({data:d})}})}}):s.setData({showCommentView:!0,commentplaceholder:i,touserid:d})})},commentInput:function(t){this.comment=t.detail.value},sendComment:function(a){var e=this.comment;if(t.util.empty(e))t.showError("请输入评论内容");else{var i={};i.threadid=this.data.data.threadid,i.message=e,i.touserid=this.data.touserid,wx.showLoading({title:"正在提交"});var d=this;t.client.request({url:"d=wxapi&c=forum_my_post&m=post_save",data:i,success:function(a){t.showMessage(a.message),console.log("评论成功 返回内容"),console.error(a);var e=a.data,i=d.data.data.postlist;void 0===i&&(i=[]),i.push(e);var s=d.data.data;s.postlist=i,s.postcnt=parseInt(s.postcnt)+1,d.setData({data:s,showCommentView:!1}),s.index=d.data.index;var n={};n.data=s,n.index=d.data.index,d.triggerEvent("changedata",n)}})}},hideView:function(t){var a=t.currentTarget.dataset.view,e={};e[a]=!1,this.setData(e),this.comment=""},showTipsView:function(t){var e=this;a.queryBlockDic({key:"tip",success:function(t){e.setData({tips:t})}}),this.setData({showTips:!0})},tipsClick:function(t){var a=t.currentTarget.dataset.index;this.setData({tipsIndex:a,tipInput:""})},startInputTips:function(t){this.setData({tipsIndex:-1})},tipsSubmit:function(a){var e=a.detail.value.tips;if(t.util.empty(e)){if(!(this.data.tipsIndex>=0&&this.data.tipsIndex<this.data.tips.length))return t.showError("请选择打赏金额");e=this.data.tips[this.data.tipsIndex].configvalue}var i=this;t.client.request({url:"d=wxapi&c=forum_my_pay&m=pay_save",data:{threadid:i.data.data.threadid,payaction:"tip",paydata:e},success:function(t){var a=t.data.payamount,e=t.data.tradeamount,d=t.data.tradedate,s=t.data.tradetitle,n=t.data.tradeid;wx.navigateTo({url:"/page/publish/pay?payamount="+a+"&tradeamount="+e+"&tradedate="+d+"&tradetitle="+s+"&tradeid="+n}),i.setData({showTips:!1})}})},addressClick:function(t){var a=this.data.data;wx.openLocation({latitude:parseFloat(a.maplat),longitude:parseFloat(a.maplong)})},call:function(t){var a=this.data.data.usermobile;wx.makePhoneCall({phoneNumber:a})},none:function(t){},cellClick:function(t){var a=this.data.data.threadid,e=this.data.index;wx.navigateTo({url:"/page/home/detail?threadid="+a+"&index="+e})},imagePreview:function(t){var a=t.currentTarget.dataset.image,e=this.data.data.imagelist;wx.previewImage({urls:e,current:a})},likeClick:function(a){this.data.data.threadid;var e=this,i=e.data.data;i.index=e.data.index,i.clickupid>0?t.client.request({url:"d=wxapi&c=forum_my_click&m=click_delete",data:{threadid:i.threadid},success:function(t){i.clickupcnt=parseInt(i.clickupcnt)-1,i.clickupid=0,e.setData({data:i});var a={};a.data=i,a.index=e.data.index,e.triggerEvent("changedata",a)}}):t.client.request({url:"d=wxapi&c=forum_my_click&m=click_save",data:{threadid:i.threadid,clicktype:1},success:function(t){i.clickupcnt=parseInt(i.clickupcnt)+1,i.clickupid=1,e.setData({data:i});var a={};a.data=i,a.index=e.data.index,e.triggerEvent("changedata",a)}})},deleteAction:function(a){var e=this;wx.showModal({title:"提示",content:"是否确认删除此内容",success:function(a){a.confirm&&(wx.showLoading({title:"正在删除"}),t.client.request({url:"d=wxapi&c=forum_my_thread&m=thread_delete",data:{threadid:e.data.data.threadid},success:function(a){t.showMessage(a.message);var i={};i.index=e.data.index,e.triggerEvent("changedata",i)}}))}})},editAction:function(t){var a=this;wx.navigateTo({url:"/page/publish/bbq?threadid="+a.data.data.threadid+"&index="+a.data.index+"&blockid="+a.data.data.blockid})},reloadAction:function(a){var e=this;wx.showModal({title:"提示",content:"是否刷新？",success:function(a){a.confirm&&(wx.showLoading({title:"正在刷新"}),t.client.request({url:"d=wxapi&c=forum_my_pay&m=pay_save",data:{threadid:e.data.data.threadid,payaction:"refresh",paydata:"0"},success:function(t){t.data.payamount,t.data.tradetitle,t.data.tradeid;wx.navigateTo({url:"/page/publish/pay"})}}))}})}}}); 
 			}); 	require("page/home/component/bbqCell.js");
 		__wxRoute = 'page/home/component/loadMore';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'page/home/component/loadMore.js';	define("page/home/component/loadMore.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{loadstatus:{type:Number,value:0},bgcolor:{type:String,value:"#f0f0f0"}},data:{},methods:{}}); 
 			}); 	require("page/home/component/loadMore.js");
 		__wxRoute = 'page/home/component/uploader';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'page/home/component/uploader.js';	define("page/home/component/uploader.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=getApp();Component({options:{multipleSlots:!0},properties:{uploadtype:{type:String},uploadTitle:{type:String},maxLength:{type:Number,value:0}},data:{list:[],showvideo:!1,imageHeader:"http://tgj168.com/static/images/mapp/common/upload/",showAdd:!0},methods:{checkAddView:function(){var t=this.data.maxLength;t>0&&this.data.list.length>=t?this.setData({showAdd:!1}):this.setData({showAdd:!0})},uploadImageProgress:function(e,a){var i=this.data.uploadtype,s=[],o="d=wxapi&c=common&m=image_upload",r="image";"video"==i&&(a="设备视频",o="d=wxapi&c=common&m=video_upload",r="video");var d=this.data.list;for(var l in d){var n=d[l];{if("string"!=typeof n.imageurl){var h=parseInt(l)+1;wx.showLoading({title:a+h+"/"+d.length});var u=n.showurl;"video"==i&&(u=n.tempFilePath);var p=this;return void t.client.request({url:o,method:"FILE",name:r,hideAlert:!0,filePath:u,success:function(t){n.imageurl=t[0].data.filepath,p.uploadImageProgress(e,a)}})}s.push(n.imageurl)}}wx.hideLoading(),"function"==typeof e&&e(s.join(";"))},uploadImage:function(e){var a=this.data.uploadTitle;t.util.empty(a)&&(a="video"==this.data.uploadtype?"视频上传":"图片上传"),this.uploadImageProgress(e,a)},tapAvatarAdd:function(t){var e=this.data.uploadtype,a=this;if("image"==e){var i=this.data.list,s=this.data.maxLength,o=s-i.length;0==s&&(o=9),console.log("最大图片 "+o),wx.chooseImage({count:o,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var e=t.tempFilePaths;if(e.length>0)for(var s=0;s<e.length;s++){var o={};o.showurl=e[s],o.imageurl=null,i.push(o)}a.setData({list:i}),a.checkAddView()}})}else if("video"==e){var r=this.data.list;wx.chooseVideo({success:function(t){r.push(t),a.setData({list:r}),a.checkAddView()}})}},tapAvatarRemove:function(t){var e=this,a=this.data.list,i=parseInt(t.currentTarget.dataset.index);"undefinded"!=typeof a[i]&&(a.splice(i,1),e.setData({list:a}),e.checkAddView())},tapAvatarPreview:function(t){for(var e=parseInt(t.currentTarget.dataset.index),a=this.data.list,i="",s=[],o=0;o<a.length;o++)s.push(a[o].showurl),o==e&&(i=a[o].showurl);wx.previewImage({current:i,urls:s})},startPlay:function(t){var e=parseInt(t.currentTarget.dataset.index),a=this.data.list[e];this.setData({showvideo:!0,video:a.tempFilePath})},stopplay:function(t){this.setData({showvideo:!1})},setDefaultImage:function(e){console.log("imagelist = "),console.log(e);var a=this.data.uploadtype,i=this;if("image"==a){var s=[];for(var o in e){var r=e[o],d={};d.showurl=t.client.getFileUrl(r),d.imageurl=r,s.push(d)}this.setData({list:s}),i.checkAddView()}}}}); 
 			}); 	require("page/home/component/uploader.js");
 		__wxRoute = 'page/home/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'page/home/index.js';	define("page/home/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function a(t){0==t.data.loadstatus&&(t.setData({loadstatus:1}),t.page++,i.client.request({url:"d=wxapi&c=forum_thread&m=thread_page",data:{page:t.page,search:t.search},success:function(a){t.total=a.data.total;var e=a.data.rows,n={},i=t.data.list;n.list=i.concat(e),n.list.length>=t.total?n.loadstatus=2:n.loadstatus=0,t.setData(n),wx.stopPullDownRefresh()},fail:function(a){i.showError(a.message),t.setData({loadstatus:0}),wx.stopPullDownRefresh()}}))}function e(t){t.page=0,t.total=1,t.setData({list:[],loadstatus:0}),a(t)}var n,i=getApp(),s=require("./block");Page((n={data:{imageHeader:i.globalData.imageHeader,inputShowed:!1,inputVal:"",tools:[{title:"优质二手机",subtitle:"二手车源首发",url:"/page/second/index"},{title:"二手评估",subtitle:"专业泵车估价",url:"./tool/introduce?index=0"},{title:"过户年审",subtitle:"全国过户年审",url:"./tool/introduce?index=1"},{title:"保险服务",subtitle:"保险服务",url:"./tool/introduce?index=2"}],list:[],fixBar:!0},onLoad:function(t){var a=this;this.search="",this.searchInput="",i.getAppConfig(function(t){var e=t.banner;a.setData({banner:e})}),s.queryBlockList(function(t){a.setData({icons:t})}),e(this)},onPullDownRefresh:function(){var t=this;i.getAppConfig(function(a){var e=a.banner;t.setData({banner:e}),wx.stopPullDownRefresh()})},showInput:function(){this.setData({inputShowed:!0})},hideInput:function(){this.search=this.searchInput,e(this)},clearInput:function(){this.setData({inputVal:""})},searchChanged:function(t){this.searchInput=t.detail.value},inputTyping:function(t){this.search=t.detail.value,e(this)},fixBarStatusChange:function(t){var a=!this.data.fixBar;this.setData({fixBar:a})},none:function(t){console.log("none")},gotoTabbar:function(t){var a=t.currentTarget.dataset.tabbar;wx.switchTab({url:a})},iconsClick:function(t){var a=t.currentTarget.dataset.index,e=this.data.icons[a];1==e.istop?wx.switchTab({url:"/page/bbq/index"}):wx.navigateTo({url:"list?blockid="+e.blockid+"&blockname"+e.blockname})},onReachBottom:function(){a(this)}},t(n,"onPullDownRefresh",function(){e(this)}),t(n,"changeData",function(t){var a=t.detail.data,e=t.detail.index,n=this.data.list;n.splice(e,1,a),t.detail.reload&&this.setData({list:n})}),t(n,"onShareAppMessage",function(){}),n)); 
 			}); 	require("page/home/index.js");
 		__wxRoute = 'page/home/detail';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'page/home/detail.js';	define("page/home/detail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function a(t){var a=getCurrentPages(),e=a[a.length-2];if("function"==typeof e.changeData){var i=t.data.thread;i.postlist=[];for(var s in t.data.list)i.postlist.push(t.data.list[t.data.list.length-s-1]);i.postcnt=t.data.total;var o={};o.index=t.index,o.reload=!0,o.data=i;var r={};r.detail=o,e.changeData(r)}}function e(t){r.client.request({url:"d=wxapi&c=forum_thread&m=thread_byid",data:{threadid:t.threadid},success:function(e){console.log(e);var i=e.data;i.imagelist=r.client.getFileUrl(i.imagelist),i.time=r.util.formatDateTime(i.dateline),t.setData({thread:i}),a(t)}})}function i(t){t.page=0,t.total=1,t.data.loadstatus=0,t.data.list=[],s(t)}function s(t){console.log("加载评论 - "+t.data.loadstatus),0==t.data.loadstatus&&(t.page++,t.setData({loadstatus:1}),r.client.request({url:"d=wxapi&c=forum_post&m=post_page",data:{threadid:t.threadid,page:t.page},success:function(e){var i=e.data;t.total=i.total;var s=i.rows,o=t.data.list;for(var d in s){var n=s[d];n.time=r.util.formatDateTime(n.dateline),o.push(n)}var c={};c.list=o,c.total=t.total,o.length>=t.total?c.loadstatus=2:c.loadstatus=0,t.setData(c),a(t)}}))}var o,r=getApp(),d=require("./block");Page((o={data:{showCommentView:!1,tipsIndex:0},onLoad:function(t){console.log(t),this.threadid=t.threadid,r.util.empty(this.threadid)&&(this.threadid=decodeURIComponent(t.scene)),e(this),i(this)},onPullDownRefresh:function(){},onReachBottom:function(){s(this)},call:function(t){var a=this;wx.makePhoneCall({phoneNumber:a.data.thread.usermobile})},showLocation:function(t){var a=this.data.thread;wx.openLocation({latitude:parseFloat(a.maplat),longitude:parseFloat(a.maplong)})},imagePreview:function(t){var a=t.currentTarget.dataset.current,e=this.data.thread.imagelist;wx.previewImage({urls:e,current:a})},commentInput:function(t){this.comment=t.detail.value},sendComment:function(t){var e=this.comment;if(r.util.empty(e))r.showError("请输入评论内容");else{var i={};i.threadid=this.threadid,i.message=e,i.touserid=this.touserid,wx.showLoading({title:"正在提交"});var s=this;r.client.request({url:"d=wxapi&c=forum_my_post&m=post_save",data:i,success:function(t){r.showMessage(t.message);var e=t.data,i=s.data.list;console.log(e),void 0===i&&(i=[]),e.time=r.util.formatDateTime(e.dateline),i.unshift(e);var o=parseInt(s.data.total)+1;s.setData({list:i,total:o,showCommentView:!1}),a(s)}})}},showCommentView:function(t){var a=t.currentTarget.dataset,e=a.tousername,i=a.touserid;this.touserid=i,console.error(a);var s=this;r.getUserInfo(function(t){r.globalData.userId==i?wx.showActionSheet({itemList:["删除"],itemColor:"#FF0000",success:function(t){wx.showLoading({title:"正在删除"}),r.client.request({url:"d=wxapi&c=forum_my_post&m=post_delete",data:{postid:a.postid},success:function(t){r.showMessage(t.message);var e=a.idx,i=s.data.thread,o=s.data.list;console.log(o),o.splice(e,1),i.postcnt=parseInt(i.postcnt)-1,s.setData({thread:i,list:o})}})}}):s.setData({showCommentView:!0,commentplaceholder:e,target:e})})},hideView:function(t){var a=t.currentTarget.dataset.view,e={};e[a]=!1,this.setData(e)},clickupClick:function(t){var e="",i={};i.threadid=this.data.thread.threadid;var s=0;this.data.thread.clickupid>0?(e="d=wxapi&c=forum_my_click&m=click_delete",s=0):(e="d=wxapi&c=forum_my_click&m=click_save",i.clicktype=1,s=1),wx.showLoading({title:"正在提交"});var o=this;r.client.request({url:e,data:i,success:function(t){r.showMessage(t.message);var e=o.data.thread;s>0?(e.clickupcnt=parseInt(e.clickupcnt)+1,e.clickupid=t.data.clickid):(e.clickupcnt=parseInt(e.clickupcnt)-1,e.clickupid=0),o.setData({thread:e}),a(o)}})},favoriteClick:function(t){var a="",e={},i=0;this.data.thread.favoriteid>0?(a="d=wxapi&c=forum_my_favorite&m=favorite_delete",e.favoriteid=this.data.thread.favoriteid,i=0):(a="d=wxapi&c=forum_my_favorite&m=favorite_save",e.threadid=this.data.thread.threadid,i=1),wx.showLoading({title:"正在提交"});var s=this;r.client.request({url:a,data:e,success:function(t){r.showMessage(t.message);var a=s.data.thread;i>0?(a.favoriteid=t.data.favoriteid,a.favoritecnt=parseInt(a.favoritecnt)+1):(a.favoriteid=i,a.favoritecnt=parseInt(a.favoritecnt)-1),s.setData({thread:a})}})},showTipsView:function(t){var a=this;d.queryBlockDic({key:"tip",success:function(t){a.setData({tips:t})}}),this.setData({showTips:!0})}},t(o,"showTipsView",function(t){var a=this;d.queryBlockDic({key:"tip",success:function(t){a.setData({tips:t})}}),this.setData({showTips:!0})}),t(o,"tipsClick",function(t){var a=t.currentTarget.dataset.index;this.setData({tipsIndex:a,tipInput:""})}),t(o,"startInputTips",function(t){this.setData({tipsIndex:-1})}),t(o,"tipsSubmit",function(t){var a=t.detail.value.tips;if(r.util.empty(a)){if(!(this.data.tipsIndex>=0&&this.data.tipsIndex<this.data.tips.length))return r.showError("请选择打赏金额");a=this.data.tips[this.data.tipsIndex].configvalue}var e=this;r.client.request({url:"d=wxapi&c=forum_my_pay&m=pay_save",data:{threadid:e.threadid,payaction:"tip",paydata:a},success:function(t){var a=t.data.payamount,i=t.data.tradeamount,s=t.data.tradedate,o=t.data.tradetitle,r=t.data.tradeid;wx.navigateTo({url:"/page/publish/pay?payamount="+a+"&tradeamount="+i+"&tradedate="+s+"&tradetitle="+o+"&tradeid="+r}),e.setData({showTips:!1})}})}),t(o,"payCallBack",function(t){if(t){var e=this.data.thread;e.tipcnt=parseInt(e.tipcnt)+1,this.setData({thread:e,showTips:!1}),a(this)}}),t(o,"onShareAppMessage",function(){}),o)); 
 			}); 	require("page/home/detail.js");
 		__wxRoute = 'page/bbq/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'page/bbq/index.js';	define("page/bbq/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function a(a){o.queryBlockList(function(e){var s="";for(var d in e){var o=e[d];if(1==o.istop){s=o.blockid;break}}s.length>0&&(a.parentid=s,t(a))})}function t(a){o.querySubBlockList(a.parentid,function(t){for(var d in t){var o=t[d];o.total=1,o.page=0,o.loadstatus=0,o.list=[]}a.setData({header:t}),e(a),s(a)})}function e(a){var t=a.data.headerIndex,e=a.data.header[t];e.page=0,e.total=1,e.list=[],e.loadstatus=0,a.setData({showReload:!0})}function s(a){wx.stopPullDownRefresh();var t=a.data.headerIndex,e=a.data.header,s=e[t];0==s.loadstatus&&(s.loadstatus=1,e[t]=s,a.setData({header:e}),s.page++,d.client.request({url:"d=wxapi&c=forum_thread&m=thread_page",data:{blockid:s.blockid,page:s.page},success:function(d){var o=d.data;s.total=o.total;for(var r in o.rows)s.list.push(o.rows[r]);e[t]=s;var n={};s.list.length>=s.total?s.loadstatus=2:s.loadstatus=0,n.header=e,a.data.showReload&&(n.showReload=!1),a.setData(n)}}))}var d=getApp(),o=require("../home/block.js");Page({data:{header:[],headerIndex:0},onLoad:function(t){a(this)},onPullDownRefresh:function(){a(this)},onReachBottom:function(){s(this)},headerClick:function(a){var t=this.data.headerIndex;a.currentTarget.dataset.index==t?(e(this),s(that)):(this.setData({headerIndex:a.currentTarget.dataset.index}),0==this.data.header[this.data.headerIndex].list&&s(this))},onShareAppMessage:function(){}}); 
 			}); 	require("page/bbq/index.js");
 		__wxRoute = 'page/publish/index';__wxRouteBegin = true; 	define("page/publish/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o){t.client.request({url:"d=wxapi&c=mall_user_shop&m=shop_info",data:{},success:function(o){n(o)}})}function n(o){null==o.data?wx.navigateTo({url:"/page/store/shop/shopStation"}):wx.showModal({title:"提示",content:"您已入驻过店铺，点击确定进入店铺信息管理。",success:function(o){o.confirm&&wx.navigateTo({url:"/page/store/shop/shopStation?query=yes"})}})}var t=getApp(),e=require("../home/block.js");Page({data:{imageHeader:t.globalData.imageHeader},onLoad:function(o){var n=this;e.queryBlockList(function(o){n.setData({icons:o})})},onStation:function(n){o()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/publish/index.js");
 		__wxRoute = 'page/store/index';__wxRouteBegin = true; 	define("page/store/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(){c=0,l=1,u=20,h=0,p="",d=""}function a(t){r.client.request({url:"d=wxapi&c=mall_user_shop&m=shop_info",data:{},success:function(t){e(t)}})}function e(t){null==t.data?wx.navigateTo({url:"shop/shopStation"}):wx.showModal({title:"提示",content:"您已入驻过店铺，点击确定进入店铺信息管理。",success:function(t){t.confirm&&wx.navigateTo({url:"/page/store/shop/shopStation?query=yes"})}})}function o(t){r.client.request({url:"d=wxapi&c=mall_shop&m=cat_tree",data:{},success:function(a){for(var e=a.data,o=0;o<e.length;++o)e[o].image=r.client.getFileUrl(e[o].image);t.setData({catTree:e})}})}function n(t){t.setData({loadMoreType:!0}),r.client.request({url:"d=wxapi&c=mall_shop&m=shop_page",data:{page:l,rows:u,catpath:p,orderby:"new",search:d},success:function(a){var e=t.data.shopList;h=parseInt(a.data.total),1==l&&(e=[]);var o=a.data.rows,n=[];if(o.length>0){for(var s=0;s<o.length;++s)o[s].shopavatar_small=r.client.getAvatarUrl(o[s].shopavatar_small),s<3&&n.push(o[s].shopname);e=e.concat(o)}var i="";r.util.empty(h)?i="暂无更多数据":e.length==h?i="暂无更多数据":e.length<h&&(i="上啦加载更多"),t.setData({shopList:e,newShopBanner:n,loadMoreType:!1,loadText:i})}})}function s(t){t.setData({loadMoreType:!0}),r.client.request({url:"d=wxapi&c=mall_goods&m=goods_page",data:{orderby:"new",goodstype:"1"},success:function(a){for(var e=a.data.rows,o=0;o<e.length;++o)e[o].goodscover=r.client.getFileUrl(e[o].goodscover),e[o].dateline=r.util.formatDate(e[o].dateline,"yyyy-MM-dd");t.setData({productList:e,loadMoreType:!1,loadText:"没有更多了"})}})}function i(t){r.getAppConfig(function(a){var e=a.banner;t.setData({banner:e})})}var r=getApp(),c=0,l=1,u=20,h=0,p="",d="";Page({data:{scrollTop:0,inputShowed:!1,inputVal:"",searchShowed:!1,tabSelect:0,shopList:[],isRefresh:!1,loadMoreType:!0},onLoad:function(a){t(),i(this),o(this),n(this)},onScroll:function(t){var a=t.detail.scrollTop;this.data.scrollTop=a;var e=this.data.searchShowed;a>120?e||this.setData({searchShowed:!0}):e&&this.setData({searchShowed:!1})},onTouchStart:function(t){c=t.touches[0].pageY},onTouchEnd:function(t){var a=t.changedTouches[0].pageY,e=this;this.data.scrollTop<10&&a-c>50&&(this.setData({isRefresh:!0}),wx.startPullDownRefresh({success:function(t){l=1,n(e),setTimeout(function(){wx.stopPullDownRefresh(),e.setData({isRefresh:!1})},1500)}}))},showInput:function(){this.setData({inputShowed:!0})},hideInput:function(){this.setData({inputVal:"",inputShowed:!1}),d="",l=1,n(this)},clearInput:function(){this.setData({inputVal:""})},inputTyping:function(t){},bindSearchConfirm:function(t){var a=t.detail.value;r.util.empty(a)||(d=a,l=1,n(this))},onTabSelect:function(t){var a=t.currentTarget.dataset.index;0==a?(l=1,p="",n(this)):1==a?(l=1,p=this.data.catTree[0].catpath,n(this)):2==a&&s(this),this.setData({tabSelect:a})},onStation:function(t){a()},onCallClick:function(t){var a=t.currentTarget.dataset.mobie;wx.makePhoneCall({phoneNumber:a})},onPreviewMap:function(t){var a=parseFloat(t.currentTarget.dataset.maplat),e=parseFloat(t.currentTarget.dataset.maplong);wx.openLocation({latitude:a,longitude:e})},onLoadMore:function(t){this.data.tabSelect<2&&this.data.shopList.length<h&&(l++,n(this))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/store/index.js");
 		__wxRoute = 'page/store/shop/shopList';__wxRouteBegin = true; 	define("page/store/shop/shopList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){t.setData({loadMoreType:!0}),o.client.request({url:"d=wxapi&c=mall_shop&m=shop_page",data:{page:e,rows:n,catpath:l},success:function(a){var n=t.data.shopList;s=parseInt(a.data.total),1==e&&(n=[]);var l=a.data.rows;if(l.length>0){for(var i=0;i<l.length;++i)l[i].shopavatar_small=o.client.getAvatarUrl(l[i].shopavatar_small);n=n.concat(l)}var r="";o.util.empty(s)?r="暂无更多数据":n.length==s?r="暂无更多数据":n.length<s&&(r="上啦加载更多"),t.setData({shopList:n,loadMoreType:!1,loadText:r})},fail:function(a){t.setData({loadMoreType:!1,loadText:"加载失败"})}})}function a(){e=1,n=20,s=0,l=""}var o=getApp(),e=1,n=20,s=0,l="";Page({data:{shopList:[],loadMoreType:!0},onLoad:function(o){a(),l=o.catpath,t(this)},onCallClick:function(t){var a=t.currentTarget.dataset.mobie;wx.makePhoneCall({phoneNumber:a})},onPreviewMap:function(t){var a=parseFloat(t.currentTarget.dataset.maplat),o=parseFloat(t.currentTarget.dataset.maplong);wx.openLocation({latitude:a,longitude:o})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){e=1,t(this),setTimeout(function(){wx.stopPullDownRefresh()},1500)},onReachBottom:function(){this.data.shopList.length<s&&(e++,t(this))},onShareAppMessage:function(){}}); 
 			}); 	require("page/store/shop/shopList.js");
 		__wxRoute = 'page/user/index';__wxRouteBegin = true; 	define("page/user/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o){a.client.request({url:"d=wxapi&c=auth&m=logout",success:function(t){a.showMessage(t.message),a.setLogout(),o.setData({hasLogin:!1})}})}function t(o){var a=wx.createAnimation({duration:2e3,timingFunction:"linear",delay:0,transformOrigin:"50% 50%"});a.opacity(1),a.opacity(.9),a.opacity(.8),a.opacity(.7),a.opacity(.6),a.opacity(.5),a.opacity(.4),a.opacity(.3),a.opacity(.2),a.opacity(.1),a.rotate(50).step(),a.opacity(.2),a.opacity(.3),a.opacity(.4),a.opacity(.5),a.opacity(.6),a.opacity(.7),a.opacity(.8),a.opacity(.9),a.opacity(1),a.rotate(-50).step(),o.setData({anima:a.export()}),setTimeout(function(){console.error("fffff"),t(o)},4200)}var a=getApp();Page({data:{hasLogin:!1,userInfo:{nickname:"--"}},onLoad:function(o){t(this)},bindCallCustomer:function(o){wx.makePhoneCall({phoneNumber:"18874888878"})},onReady:function(){},onShow:function(){var o=this;a.getUserInfo(function(t){var n=a.globalData.userMobile;if(!a.util.empty(n)){var i=!1;"1770000"==(n=n.substring(0,7))&&(i=!0)}o.setData({userInfo:t,hasLogin:a.globalData.hasLogin,showOutButton:i})})},onTapLogout:function(t){o(this)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/index.js");
 		__wxRoute = 'page/author/author';__wxRouteBegin = true; 	define("page/author/author.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n=getApp();Page({data:{appName:n.globalData.appName},onLoad:function(o){this.setData({appName:n.globalData.appName})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onGotUserInfo:function(n){var t=n.detail.userInfo;"object"==(void 0===t?"undefined":o(t))&&wx.navigateBack()},onShareAppMessage:function(){}}); 
 			}); 	require("page/author/author.js");
 		__wxRoute = 'page/store/shop/shopInfo';__wxRouteBegin = true; 	define("page/store/shop/shopInfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){o.client.request({url:"d=wxapi&c=mall_shop&m=shop_info",data:{shopid:n},success:function(a){var e=a.data;console.error(e);for(var i=0;i<e.imagelist.length;++i)e.imagelist[i]=o.client.getFileUrl(e.imagelist[i]);for(var n=0;n<e.cardlist.length;++n)e.cardlist[n]=o.client.getFileUrl(e.cardlist[n]);e.shopavatar_small=o.client.getAvatarUrl(e.shopavatar_small),t.setData({shopDetail:e})}})}function a(t){o.client.request({url:"d=wxapi&c=mall_goods&m=goods_page",data:{rows:200,shopid:n},success:function(a){for(var e=a.data.rows,i=0;i<e.length;++i)e[i].goodscover=o.client.getFileUrl(e[i].goodscover),e[i].dateline=o.util.formatDate(e[i].dateline,"yyyy-MM-dd");t.setData({productList:e})}})}function e(a){o.client.request({url:"d=wxapi&c=mall_user_favorite&m=favorite_save",data:{type:"1",toid:n},success:function(e){t(a)}})}function i(a,e){o.client.request({url:"d=wxapi&c=mall_user_favorite&m=favorite_delete",data:{favoriteid:e},success:function(e){t(a)}})}var o=getApp(),n="";Page({data:{showDevice:!1},onLoad:function(e){n=e.shopid,t(this),a(this)},bindCollection:function(t){var a=this.data.shopDetail.favoriteid;0==a?e(this):i(this,a)},onBannerClick:function(t){var a=t.currentTarget.dataset.index,e=this.data.shopDetail.imagelist;wx.previewImage({current:e[a],urls:e})},callMobie:function(t){var a=this.data.shopDetail.shoptel;wx.makePhoneCall({phoneNumber:a})},viewMap:function(t){var a=parseFloat(this.data.shopDetail.maplat),e=parseFloat(this.data.shopDetail.maplong);wx.openLocation({latitude:a,longitude:e})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/store/shop/shopInfo.js");
 		__wxRoute = 'page/store/product/commodityDetail';__wxRouteBegin = true; 	define("page/store/product/commodityDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){i.client.request({url:"d=wxapi&c=mall_goods&m=goods_byid",data:{goodsid:n},success:function(o){for(var e=o.data.goodsinfo,n=0;n<e.imagelist.length;++n)e.imagelist[n]=i.client.getFileUrl(e.imagelist[n]);t.setData({goodsDetail:e}),a(t,e.shopid)}})}function a(t,a){i.client.request({url:"d=wxapi&c=mall_shop&m=shop_info",data:{shopid:a},success:function(a){var o=a.data;o.shopavatar_small=i.client.getAvatarUrl(o.shopavatar_small),t.setData({shopDetail:o})}})}function o(a){i.client.request({url:"d=wxapi&c=mall_user_favorite&m=favorite_save",data:{type:"2",toid:n},success:function(o){t(a,!0)}})}function e(a,o){i.client.request({url:"d=wxapi&c=mall_user_favorite&m=favorite_delete",data:{favoriteid:o},success:function(o){t(a,!0)}})}var i=getApp(),n="";Page({data:{},onLoad:function(a){n=a.goodsid,t(this)},callMobie:function(t){var a=this.data.shopDetail.shoptel;wx.makePhoneCall({phoneNumber:a})},bindCollection:function(t){var a=this.data.goodsDetail.favoriteid;0==a?o(this):e(this,a)},bindPreviewImg:function(t){var a=t.currentTarget.dataset.index,o=this.data.goodsDetail.imagelist;wx.previewImage({current:o[a],urls:o})},bindBuyGoods:function(t){wx.navigateTo({url:"../order/createOrder?goodsid="+n})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/store/product/commodityDetail.js");
 		__wxRoute = 'page/store/product/deviceDetail';__wxRouteBegin = true; 	define("page/store/product/deviceDetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(){d=""}function e(o,e){r.client.request({url:"d=wxapi&c=mall_goods&m=goods_byid",data:{goodsid:d},success:function(i){for(var n=i.data.goodsinfo,s=0;s<n.imagelist.length;++s)n.imagelist[s]=r.client.getFileUrl(n.imagelist[s]);if(null!=n.goodsprop&&n.goodsprop.length>0)for(var l=0;l<n.goodsprop.length;++l)"true"==n.goodsprop[l].propvalue?n.goodsprop[l].propvalue="是":"false"==n.goodsprop[l].propvalue&&(n.goodsprop[l].propvalue="否");o.setData({goodsDetail:n}),e||(t(o,n.shopid),a(o,n.catpath))}})}function t(o,e){r.client.request({url:"d=wxapi&c=mall_shop&m=shop_info",data:{shopid:e},success:function(e){var t=e.data;t.shopavatar_small=r.client.getAvatarUrl(t.shopavatar_small),o.setData({shopDetail:t})}})}function a(o,e){r.client.request({url:"d=wxapi&c=mall_goods&m=goods_page",data:{rows:10,catpath:e,goodstype:"1"},success:function(e){for(var t=e.data.rows,a=0;a<t.length;++a)t[a].goodscover=r.client.getFileUrl(t[a].goodscover),console.error(t[a].goodscover),t[a].dateline=r.util.formatDate(t[a].dateline,"yyyy-MM-dd"),t[a].goodsid==d&&(t.splice(a,1),--a);o.setData({productList:t})}})}function i(){wx.showLoading({title:"二维码生成中"}),r.client.request({url:"d=wxapi&c=common&m=get_qrcode",data:{page:"page/store/product/deviceDetail",scene:d},success:function(o){n(r.client.getFileUrl(o.data.url))}})}function n(o){wx.hideLoading(),wx.previewImage({urls:[o]})}function s(o){r.client.request({url:"d=wxapi&c=mall_user_favorite&m=favorite_save",data:{type:"2",toid:d},success:function(t){e(o,!0)}})}function l(o,t){r.client.request({url:"d=wxapi&c=mall_user_favorite&m=favorite_delete",data:{favoriteid:t},success:function(t){e(o,!0)}})}var r=getApp(),d="";Page({data:{},onLoad:function(t){o(),d=t.goodsid,r.util.empty(d)&&(d=decodeURIComponent(t.scene)),e(this,!1)},callMobie:function(o){var e=this.data.shopDetail.shoptel;wx.makePhoneCall({phoneNumber:e})},bindBuyGoods:function(o){r.checkLogin()&&wx.navigateTo({url:"../order/createOrder?goodsid="+d})},bindCollection:function(o){var e=this.data.goodsDetail.favoriteid;0==e?s(this):l(this,e)},bindPreviewImg:function(o){var e=o.currentTarget.dataset.index,t=this.data.goodsDetail.imagelist;wx.previewImage({current:t[e],urls:t})},bindCallMobie:function(o){var e=this.data.shopDetail.shoptel;wx.makePhoneCall({phoneNumber:e})},bindOpenMap:function(o){var e=this.data.shopDetail.maplat,t=this.data.shopDetail.maplong;wx.openLocation({latitude:parseFloat(e),longitude:parseFloat(t)})},openMore:function(o){wx.navigateTo({url:"moreImg?goodsid="+d})},generateCode:function(){i()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:"泵车无忧商城"}}}); 
 			}); 	require("page/store/product/deviceDetail.js");
 		__wxRoute = 'page/store/product/moreImg';__wxRouteBegin = true; 	define("page/store/product/moreImg.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){e.client.request({url:"d=wxapi&c=mall_goods&m=goods_byid",data:{goodsid:n},success:function(n){var i=n.data.goodsinfo,o=i.videolist;if(null!=o)for(var a=0;a<o.length;a++)o[a]=e.client.getFileUrl(o[a]);var l=o.length,r=i.imagelist;r.length;if(null!=r){for(var s=0;s<r.length;++s)r[s]=e.client.getFileUrl(r[s]);r.push("")}t.setData({imagelist:r,videolist:o})}})}var e=getApp(),n="";Page({data:{imgList:["","","",""]},onLoad:function(e){n=e.goodsid,t(this)},watchVideo:function(t){var e=t.currentTarget.dataset.url;wx.navigateTo({url:"/page/user/video/videoPlay?url="+e})},watchImg:function(t){var e=t.currentTarget.dataset.index,n=this.data.imagelist;""!=n[e]&&(""==n[n.length-1]&&n.splice(n.length-1,1),wx.previewImage({current:n[e],urls:n}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/store/product/moreImg.js");
 		__wxRoute = 'page/store/shop/shopStation';__wxRouteBegin = true; 	define("page/store/shop/shopStation.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(a,e,s){var i=[];for(var o in a){var n=a[o];{if("string"!=typeof n.imageurl){var r=parseInt(o)+1;return wx.showLoading({title:s+r+"/"+a.length}),void h.client.request({url:"d=wxapi&c=common&m=image_upload",method:"FILE",name:"image",hideAlert:!0,filePath:n.showurl,success:function(i){n.imageurl=i[0].data.filepath,t(a,e,s)}})}i.push(n.imageurl)}}wx.hideLoading(),"function"==typeof e&&e(i.join(";"))}function a(t,a){return h.util.empty(t.shopname)?(h.showError("请输入店铺名称"),!1):h.util.empty(f)?(h.showError("请选择店铺分类"),!1):h.util.empty(t.linkman)?(h.showError("请输入联系人"),!1):h.util.isMobile(t.shoptel)?h.util.empty(d)?(h.showError("请选择详细地址"),!1):"开始时间"==a.data.shophourstart?(h.showError("请选择营业时间"),!1):"结束时间"==a.data.shophourend?(h.showError("请选择营业时间"),!1):0==a.data.imagelist.length?(h.showError("请添加门头照片"),!1):0==a.data.businessList.length?(h.showError("请添加营业执照"),!1):0!=a.data.shopImgList.length||(h.showError("请选添加店铺照片"),!1):(h.showError("电话格式错误"),!1)}function e(t){h.client.request({url:"d=wxapi&c=mall_shop&m=cat_tree",data:{},success:function(a){t.setData({catTree:a.data})}})}function s(t,a){t.shopavatar=m,t.imagelist=v,t.cardlist=g,t.address=d,t.maplat=c,t.maplong=p,t.catid=f,t.shophourstart=a.data.shophourstart,t.shophourend=a.data.shophourend,h.client.request({url:"d=wxapi&c=mall_user_shop&m=register",data:t,success:function(t){wx.showToast({title:"信息提交成功"}),null!=a.data.feeConfig?u(a,t.data.shopid):setTimeout(function(){wx.navigateBack({})},1500)}})}function i(t,a){t.shopid=a.data.shopInfo.shopid,t.shopavatar=m,t.imagelist=v,t.cardlist=g,t.address=d,t.maplat=c,t.maplong=p,t.catid=f,t.shophourstart=a.data.shophourstart,t.shophourend=a.data.shophourend,h.client.request({url:"d=wxapi&c=mall_user_shop&m=save",data:t,success:function(t){wx.showToast({title:"信息修改成功"}),null!=a.data.feeConfig?u(a,t.data.shopid):setTimeout(function(){wx.navigateBack({})},1500)}})}function o(){d="",c="",p="",f="",m="",g="",v=""}function n(t){h.client.request({url:"d=wxapi&c=mall_user_shop&m=shop_info",data:{},success:function(a){if(null!=a.data){var e=a.data;f=e.catid,d=e.address,c=e.maplat,p=e.maplong;for(var s=t.data.imagelist,i=t.data.businessList,o=t.data.shopImgList,n=0;n<e.imagelist.length;++n)o.push({showurl:h.client.getFileUrl(e.imagelist[n]),imageurl:e.imagelist[n]});for(var r=0;r<e.cardlist.length;++r)i.push({showurl:h.client.getFileUrl(e.cardlist[r]),imageurl:e.cardlist[r]});s.push({showurl:h.client.getAvatarUrl(e.shopavatar_small),imageurl:e.shopavatar_small}),t.setData({shopInfo:e,catname:e.catname,address:d,shophourstart:e.shophourstart,shophourend:e.shophourend,shopImgList:o,businessList:i,imagelist:s})}}})}function r(t){h.client.request({url:"d=wxapi&c=mall_user_shop&m=pay_config",data:{},success:function(a){null!=a.data&&t.setData({feeConfigList:a.data})}})}function u(t,a){h.client.request({url:"d=wxapi&c=mall_shop_pay&m=pay_save",data:{shopid:a,paymonth:t.data.feeConfig.configkey},success:function(t){l(t)}})}function l(t){wx.redirectTo({url:"/page/publish/pay?tradeid="+t.data.tradeid+"&payamount="+t.data.payamount})}var h=getApp(),d="",c="",p="",f="",m="",g="",v="";Page({data:{imagelist:[],businessList:[],shopImgList:[],catTree:[],shophourstart:"开始时间",shophourend:"结束时间",buttonText:"确认入驻",feeConfigList:[]},onLoad:function(t){o(),e(this),h.util.empty(t.query)||(this.setData({buttonText:"确定修改"}),wx.setNavigationBarTitle({title:"编辑店铺信息"}),n(this)),r(this)},bindFeeChange:function(t){var a=t.detail.value,e=this.data.feeConfigList;this.setData({feeConfig:e[a]})},insertShop:function(e){var o=e.detail.value;console.error(o);var n=this;a(o,n)&&t(this.data.imagelist,function(a){m=a,t(n.data.businessList,function(a){g=a,t(n.data.shopImgList,function(t){v=t,null!=n.data.shopInfo?i(o,n):s(o,n)},"店铺照片")},"营业执照")},"门店照片")},onCatType:function(t){var a=t.detail.value,e=this.data.catTree;f=e[a].catid,this.setData({catname:e[a].catname})},onSartTime:function(t){this.setData({shophourstart:t.detail.value})},onEndTime:function(t){this.setData({shophourend:t.detail.value})},selectAddress:function(t){var a=this;wx.chooseLocation({success:function(t){d=t.address,c=t.latitude,p=t.longitude,a.setData({address:d})}})},tapAvatarRemove:function(t){var a=this,e=t.currentTarget.dataset.key,s=a.data[e],i=parseInt(t.currentTarget.dataset.index);if("undefinded"!=typeof(s=a.data[e])[i]){s.splice(i,1);var o={};o[e]=s,a.setData(o)}},tapAvatarAdd:function(t){var a=this,e=t.currentTarget.dataset.key,s=t.currentTarget.dataset.size,i=a.data[e],o=s;if(i.length>=o)return h.showMessage("不能再上传图片了"),!1;wx.chooseImage({count:o-i.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var s=t.tempFilePaths;if(s.length>0)for(var o=0;o<s.length;o++){var n={};n.showurl=s[o],n.imageurl=null,i.push(n)}var r={};r[e]=i,a.setData(r)}})},tapAvatarPreview:function(t){for(var a=this,e=t.currentTarget.dataset.key,s=(a.data[e],parseInt(t.currentTarget.dataset.index)),i=a.data[e],o="",n=[],r=0;r<i.length;r++)n.push(i[r].showurl),r==s&&(o=i[r].showurl);wx.previewImage({current:o,urls:n})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/store/shop/shopStation.js");
 		__wxRoute = 'page/home/tool/introduce';__wxRouteBegin = true; 	define("page/home/tool/introduce.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){var o="http://tgj168.com/static/images/mapp/bcwy/home_introduce_"+n.index+".png",t={};t.src=o,0==n.index||3==n.index&&(t.buttonTitle="金融贷款",t.url="fincial"),this.setData(t)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/home/tool/introduce.js");
 		__wxRoute = 'page/home/tool/fincial';__wxRouteBegin = true; 	define("page/home/tool/fincial.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/home/tool/fincial.js");
 		__wxRoute = 'page/home/tool/assess';__wxRouteBegin = true; 	define("page/home/tool/assess.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/home/tool/assess.js");
 		__wxRoute = 'page/publish/bbq';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'page/publish/bbq.js';	define("page/publish/bbq.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function a(a,t,i){e.client.request({url:"d=wxapi&c=forum_my_pay&m=pay_save",data:{threadid:a,payaction:"top",paydata:t},success:function(a){console.log(a);var t=a.data.payamount,e=a.data.tradeamount,s=a.data.tradedate,d=a.data.tradetitle,o=a.data.tradeid;wx.redirectTo({url:"pay?payamount="+t+"&tradeamount="+e+"&tradedate="+s+"&tradetitle="+d+"&tradeid="+o+"&blockid="+i.blockid+"&blockname="+i.blockname})}})}function t(a){e.client.request({url:"d=wxapi&c=forum_thread&m=thread_byid",data:{threadid:a.threadid},success:function(t){a.setData({brief:t.data.brief,address:{latitude:t.data.maplat,longitude:t.data.maplong,address:t.data.address},originalData:t.data}),a.selectComponent("#image").setDefaultImage(t.data.imagelist)}})}var e=getApp(),i=require("../home/block.js");Page({data:{textcount:0,topDays:[1,5,10,30,100],subblocks:[],selectedDay:1,brief:"",originalData:{}},onShow:function(){this.startToPay&&(this.payResult?(e.showMessage("置顶成功"),setTimeout(function(){wx.navigateBack()},1500)):e.showError("置顶失败"))},onLoad:function(a){console.log(a);var e=a.blockid;this.blockid=e,this.blockname=a.blockname,wx.setNavigationBarTitle({title:a.blockname}),a.threadid>0&&(this.threadid=a.threadid,this.index=a.index,t(this));var s=this;i.querySubBlockList(e,function(a){s.setData({subblocks:a})})},inputchanged:function(a){this.setData({textcount:a.detail.value.length})},subblocksChanged:function(a){var t=a.detail.value,e=this.data.subblocks[t];this.setData({selectedBlock:e})},pickerChanged:function(a){var t=a.currentTarget.dataset.range,e=a.currentTarget.dataset.value,i=this.data[t][a.detail.value],s={};s[e]=i,console.log(s),this.setData(s)},topStyleChange:function(a){if(this.setData({isTop:a.detail.value}),a.detail.value){wx.showLoading({title:""});var t=this;i.queryBlockDic({key:"top",success:function(a){wx.hideLoading();var e=a[0];t.setData({topDays:a,selectedDay:e.configkey,topMoney:e.configvalue})}})}},topDaysChanged:function(a){var t=a.detail.value,e=this.data.topDays[t];this.setData({selectedDay:e.configkey,topMoney:e.configvalue})},chooseLocation:function(a){var t=this;wx.chooseLocation({success:function(a){t.setData({address:a})}})},formSubmit:function(t){var i=t.detail.value;if(i.blockid=this.blockid,e.util.empty(this.threadid)||(i.threadid=this.threadid),e.util.empty(this.data.address))e.showError("请选择位置");else{var s=this.data.address;if(i.maplat=s.latitude,i.maplong=s.longitude,i.address=s.address,!e.util.empty(this.data.subblocks)&&this.data.subblocks.length>0){if(e.util.empty(this.data.selectedBlock))return void e.showError("请选择子分类");i.blockid=this.data.selectedBlock.blockid}this.data.isTop&&(i.topday=this.data.selectedDay);var d=this;this.selectComponent("#image").uploadImage(function(t){i.imagelist=t,wx.showLoading({title:"正在提交"}),e.client.request({url:"d=wxapi&c=forum_my_thread&m=thread_save",data:i,success:function(t){if(console.log(t),e.showMessage(t.message),!e.util.empty(d.blockid)){var s=getCurrentPages(),o=s[s.length-2];if("function"==typeof o.changeData){var l={};l.index=d.index,l.edit=!0;var n=d.data.originalData;n.maplat=i.maplat,n.maplong=i.maplong,n.address=i.address,n.imagelist=i.imagelist.split(";"),n.brief=i.content,l.data=n;var c={};c.detail=l,o.changeData(c)}}d.threadid=t.data.threadid,d.data.isTop?(a(t.data.threadid,d.data.selectedDay,d),d.startToPay=!0,d.payResult=!1):setTimeout(function(){wx.redirectTo({url:"/page/home/list?blockid="+d.blockid+"&blockname="+d.blockname})},1500)}})})}},payCallBack:function(a){this.payResult=a},onShareAppMessage:function(){}}); 
 			}); 	require("page/publish/bbq.js");
 		__wxRoute = 'page/user/wallet/wallet';__wxRouteBegin = true; 	define("page/user/wallet/wallet.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(n){o.client.request({url:"d=wxapi&c=fee_user&m=userinfo",data:{},success:function(o){n.setData({userFee:o.data})}})}var o=getApp();Page({data:{userInfo:{nickname:"--"},userFee:{moneytotal:"--"}},onLoad:function(n){},withdrawals:function(n){console.error("sssssss");wx.navigateTo({url:"withdrawals"})},onReady:function(){},onShow:function(){var e=this;o.getUserInfo(function(n){e.setData({userInfo:n,hasLogin:o.globalData.hasLogin})}),n(this)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/wallet/wallet.js");
 		__wxRoute = 'page/user/shopManage/shopManage';__wxRouteBegin = true; 	define("page/user/shopManage/shopManage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){e.client.request({url:"d=wxapi&c=mall_user_shop&m=shop_info",data:{},success:function(t){i=null!=t.data}})}function o(){i?wx.showToast({title:"您已入驻过店铺"}):wx.navigateTo({url:"/page/store/shop/shopStation"})}function n(t){i?wx.navigateTo({url:t}):wx.showModal({title:"温馨提示",content:"您还未入驻成为商家，马上去入驻吧",success:function(t){t.confirm&&wx.navigateTo({url:"/page/store/shop/shopStation"})}})}var e=getApp(),i=!1;Page({data:{moduleList:[{img:"/image/c-2.png",title:"商品管理",url:"productManage"},{img:"/image/c-3.png",title:"发布商品",url:"releaseProduct"},{img:"/image/c-3.png",title:"发布设备",url:"releaseDevice"},{img:"/image/c-4.png",title:"所有订单",url:"/page/user/order/orderList?navigateType=shop"},{img:"/image/c-5.png",title:"新店入驻",url:""}]},onLoad:function(t){i=!1},onNavigator:function(t){var e=t.currentTarget.dataset.url;""!=e?n(e):o()},onMyShop:function(t){n("/page/store/shop/shopStation?query=yes")},onReady:function(){},onShow:function(){t()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/shopManage/shopManage.js");
 		__wxRoute = 'page/user/shopManage/myShopList';__wxRouteBegin = true; 	define("page/user/shopManage/myShopList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/shopManage/myShopList.js");
 		__wxRoute = 'page/user/shopManage/releaseProduct';__wxRouteBegin = true; 	define("page/user/shopManage/releaseProduct.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){s.client.request({url:"d=wxapi&c=mall_goods&m=cat_tree",data:{goodstype:2},success:function(e){for(var a=e.data,i=0;i<a.length;++i)0==a[i].catid&&a.splice(i,1);t.setData({deviceTypeList:a})}})}function e(t,e){return s.util.empty(r)?(wx.showToast({title:"请选择商品类型"}),!1):s.util.empty(t.goodsname)?(wx.showToast({title:"请输入商品标题"}),!1):s.util.empty(t.goodspricenum)?(wx.showToast({title:"请输入商品售价"}),!1):s.util.empty(t.goodsdesc)?(wx.showToast({title:"请输入商品介绍"}),!1):0!=e.data.imagelist.length||(wx.showToast({title:"请选择商品图片"}),!1)}function a(t,e,i){var o=[];for(var n in t){var r=t[n];{if("string"!=typeof r.imageurl){var u=parseInt(n)+1;return wx.showLoading({title:i+u+"/"+t.length}),void s.client.request({url:"d=wxapi&c=common&m=image_upload",method:"FILE",name:"image",hideAlert:!0,filePath:r.showurl,success:function(o){r.imageurl=o[0].data.filepath,a(t,e,i)}})}o.push(r.imageurl)}}wx.hideLoading(),"function"==typeof e&&e(o.join(";"))}function i(t,e){wx.showLoading({title:"上传中"}),t.catid=r,t.imagelist=u,t.goodstype="2",t.goodspricetype="0",s.util.empty(l)||(t.goodsid=l),s.client.request({url:"d=wxapi&c=mall_shop_goods&m=save",data:t,success:function(t){wx.hideLoading(),wx.showToast({title:"提交成功"}),setTimeout(function(){wx.navigateBack({})},1500)}})}function o(t){s.client.request({url:"d=wxapi&c=mall_shop_goods&m=goods_view",data:{goodsid:l},success:function(e){for(var a=e.data.goodsinfo,i=t.data.imagelist,o=0;o<a.imagelist.length;++o)i.push({showurl:s.client.getFileUrl(a.imagelist[o]),imageurl:a.imagelist[o]});r=a.catid,t.setData({goodsDetail:a,catname:a.catname,imagelist:i})}})}function n(){r="",u="",l=""}var s=getApp(),r="",u="",l="";Page({data:{imagelist:[],deviceTypeList:[],buttonText:""},onLoad:function(e){n(),t(this),l=e.goodsid;var a="立即发布";s.util.empty(l)||(wx.setNavigationBarTitle({title:"编辑商品"}),a="确定修改",o(this)),this.setData({buttonText:a})},bindFormSubmit:function(t){var o=t.detail.value;e(o,this)&&a(this.data.imagelist,function(t){u=t,i(o)},"上传图片")},bindTypeChange:function(t){var e=this.data.deviceTypeList,a=t.detail.value;r=e[a].catid,this.setData({catname:e[a].catname})},tapAvatarRemove:function(t){var e=this,a=t.currentTarget.dataset.key,i=e.data[a],o=parseInt(t.currentTarget.dataset.index);if("undefinded"!=typeof(i=e.data[a])[o]){i.splice(o,1);var n={};n[a]=i,e.setData(n)}},tapAvatarAdd:function(t){var e=this,a=t.currentTarget.dataset.key,i=e.data[a];if(i.length>=9)return s.showMessage("不能再上传图片了"),!1;wx.chooseImage({count:9-i.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var o=t.tempFilePaths;if(o.length>0)for(var n=0;n<o.length;n++){var s={};s.showurl=o[n],s.imageurl=null,i.push(s)}var r={};r[a]=i,e.setData(r)}})},tapAvatarPreview:function(t){for(var e=this,a=t.currentTarget.dataset.key,i=(e.data[a],parseInt(t.currentTarget.dataset.index)),o=e.data[a],n="",s=[],r=0;r<o.length;r++)s.push(o[r].showurl),r==i&&(n=o[r].showurl);wx.previewImage({current:n,urls:s})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/shopManage/releaseProduct.js");
 		__wxRoute = 'page/user/shopManage/releaseDevice';__wxRouteBegin = true; 	define("page/user/shopManage/releaseDevice.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){r.client.request({url:"d=wxapi&c=mall_goods&m=cat_tree",data:{goodstype:1},success:function(e){for(var a=e.data,i=0;i<a.length;++i)0==a[i].catid&&a.splice(i,1);t.setData({deviceTypeList:a})}})}function e(t,e){r.client.request({url:"d=wxapi&c=mall_goods&m=cat_prop",data:{catpath:e},success:function(e){var a=e.data;if(!r.util.empty(p))var i=t.data.goodsDetail.goodsprop;for(var o=0;o<a.length;++o)if("list"==a[o].proptype&&(a[o].propdata=a[o].propdata.split(",")),!r.util.empty(p))for(var n=0;n<i.length;++n)a[o].propid==i[n].propid&&(a[o].thisvalue=i[n].propvalue);t.setData({propList:a})}})}function a(t,e){if(r.util.empty(t.goodsname))return wx.showToast({title:"请输入商品标题"}),!1;if(r.util.empty(l))return wx.showToast({title:"请选择设备类型"}),!1;if(r.util.empty(t.brandname))return wx.showToast({title:"请输入设备品牌"}),!1;if(r.util.empty(t.goodscode))return wx.showToast({title:"请输入设备型号"}),!1;if(r.util.empty(e.data.madedate))return wx.showToast({title:"请选择出厂年份"}),!1;if(r.util.empty(e.data.fromcity))return wx.showToast({title:"请选择所在地区"}),!1;if(r.util.empty(t.goodspricenum))return wx.showToast({title:"请填写售价"}),!1;if(r.util.empty(t.goodsdesc))return wx.showToast({title:"请输入车况描述"}),!1;for(var a=e.data.propList,i=0;i<a.length;++i)if("boolean"!=a[i].proptype&&r.util.empty(a[i].thisvalue))return wx.showToast({title:"请填写"+a[i].propname}),!1;return 0!=e.data.imagelist.length||(wx.showToast({title:"请选择图片"}),!1)}function i(t,e,a){var o=[],n="设备照片",s="d=wxapi&c=common&m=image_upload",d="image";"vedio"==a&&(n="设备视频",s="d=wxapi&c=common&m=video_upload",d="video");for(var l in t){var u=t[l];{if("string"!=typeof u.imageurl){var c=parseInt(l)+1;wx.showLoading({title:n+c+"/"+t.length});var p=u.showurl;return"vedio"==a&&(p=u.tempFilePath),void r.client.request({url:s,method:"FILE",name:d,hideAlert:!0,filePath:p,success:function(o){u.imageurl=o[0].data.filepath,i(t,e,a)}})}o.push(u.imageurl)}}wx.hideLoading(),"function"==typeof e&&e(o.join(";"))}function o(t,e){wx.showLoading({title:"提交中"}),t.catid=l,t.imagelist=u,t.videolist=c,t.madedate=e.data.madedate,t.goodsaddr=e.data.fromcity,r.util.empty(p)||(t.goodsid=p);for(var a=e.data.propList,i="",o=0;o<a.length;++o){var n=a[o].thisvalue;"boolean"==a[o].proptype&&r.util.empty(n)&&(n=!1),i+=a[o].propid+":"+n+";"}i=i.substring(0,i.length-1),t.goodsprop=i,t.goodstype="1",console.error(t),r.client.request({url:"d=wxapi&c=mall_shop_goods&m=save",data:t,success:function(t){wx.hideLoading(),wx.showToast({title:"发布成功"}),setTimeout(function(){wx.navigateBack({})},1500)}})}function n(t){r.client.request({url:"d=wxapi&c=mall_shop_goods&m=goods_view",data:{goodsid:p},success:function(a){for(var i=a.data.goodsinfo,o=t.data.imagelist,n=0;n<i.imagelist.length;++n)o.push({showurl:r.client.getFileUrl(i.imagelist[n]),imageurl:i.imagelist[n]});var s=t.data.videolist;if(null!=s&&i.videolist.length>0)for(var d=0;d<i.videolist.length;++d)s.push({tempFilePath:r.client.getFileUrl(i.videolist[d]),imageurl:i.videolist[d]});l=i.catid,t.setData({goodsDetail:i,imagelist:o,videolist:s,madedate:i.madedate,fromcity:i.goodsaddr,catname:i.catname}),e(t,i.catpath)}})}function s(){l="",u="",c=""}var r=getApp(),d=require("../../../utils/pickerCity"),l="",u="",c="",p="";Page({data:{imagelist:[],videolist:[],deviceTypeList:[],regionlist:d.getRegionList(),regionvalue:d.regionValue,endDate:r.util.formatDate(null,"yyyy-MM-dd"),buttonText:""},onLoad:function(e){s(),t(this),p=e.goodsid;var a="立即发布";r.util.empty(p)||(a="确定修改",wx.setNavigationBarTitle({title:"编辑设备信息"}),n(this)),this.setData({buttonText:a})},onSubmitClick:function(t){var e=t.detail.value,n=this;a(e,this)&&(e.goodspricetype="4",i(this.data.imagelist,function(t){u=t,n.data.videolist.length>0?i(n.data.videolist,function(t){c=t,o(e,n)},"vedio"):o(e,n)},"image"))},bindWwitchChange:function(t){var e=t.currentTarget.dataset.index;this.data.propList;this.data.propList[e].thisvalue=t.detail.value},bindPropInput:function(t){var e=t.currentTarget.dataset.index;this.data.propList;this.data.propList[e].thisvalue=t.detail.value},bindPropChange:function(t){var e=t.currentTarget.dataset.index,a=this.data.propList;a[e].thisvalue=a[e].propdata[t.detail.value],this.setData({propList:a})},bindDateChange:function(t){var e=t.detail.value;this.setData({madedate:e})},changeRegion:function(t){var e=t.detail.value,a=(t.currentTarget.dataset.name,d.getRegionSelect(e)),i=a.value,o=a.text;this.setData({fromcityid:i,fromcity:o})},changeRegionColumn:function(t){var e=t.detail.column,a=t.detail.value,i=d.pickerRegionChange(e,a),o=d.regionValue;this.setData({regionlist:i,regionvalue:o})},bindTypeChange:function(t){var a=t.detail.value,i=this.data.deviceTypeList;this.setData({catname:i[a].catname}),l=i[a].catid,e(this,i[a].catpath)},tapAvatarRemove:function(t){var e=this,a=t.currentTarget.dataset.key,i=e.data[a],o=parseInt(t.currentTarget.dataset.index);if("undefinded"!=typeof(i=e.data[a])[o]){i.splice(o,1);var n={};n[a]=i,e.setData(n)}},tapAvatarAdd:function(t){var e=this,a=t.currentTarget.dataset.key,i=e.data[a];if(i.length>=9)return r.showMessage("不能再上传图片了"),!1;wx.chooseImage({count:9-i.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var o=t.tempFilePaths;if(o.length>0)for(var n=0;n<o.length;n++){var s={};s.showurl=o[n],s.imageurl=null,i.push(s)}var r={};r[a]=i,e.setData(r)}})},tapAvatarPreview:function(t){for(var e=this,a=t.currentTarget.dataset.key,i=(e.data[a],parseInt(t.currentTarget.dataset.index)),o=e.data[a],n="",s=[],r=0;r<o.length;r++)s.push(o[r].showurl),r==i&&(n=o[r].showurl);wx.previewImage({current:n,urls:s})},onVideoAdd:function(t){var e=this.data.videolist,a=this;wx.chooseVideo({success:function(t){e.push(t),a.setData({videolist:e})}})},startPlay:function(t){var e=t.currentTarget.dataset.index,a=this.data.videolist[e];console.log(a),wx.navigateTo({url:"../video/videoPlay?url="+a.tempFilePath})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/shopManage/releaseDevice.js");
 		__wxRoute = 'page/user/video/videoPlay';__wxRouteBegin = true; 	define("page/user/video/videoPlay.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){var o=n.url;this.setData({url:o})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/video/videoPlay.js");
 		__wxRoute = 'page/user/collection/collection';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'page/user/collection/collection.js';	define("page/user/collection/collection.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){t.setData({loadMoreType:!0}),o.client.request({url:"d=wxapi&c=mall_user_favorite&m=goods_page",data:{rows:200},success:function(e){for(var a=e.data.rows,i=0;i<a.length;++i)a[i].goodscover=o.client.getFileUrl(a[i].goodscover),a[i].dateline=o.util.formatDate(a[i].dateline,"yyyy-MM-dd");t.setData({productList:a,loadMoreType:!1,loadText:"暂无跟多数据"})}})}function e(t){t.setData({loadMoreType:!0}),o.client.request({url:"d=wxapi&c=mall_user_favorite&m=shop_page",data:{rows:200},success:function(e){var a=[],i=e.data.rows;if(i.length>0){for(var s=0;s<i.length;++s)i[s].shopavatar_small=o.client.getAvatarUrl(i[s].shopavatar_small);a=a.concat(i)}t.setData({shopList:a,loadMoreType:!1,loadText:"暂无跟多数据"})}})}function a(t){t.setData({loadMoreType:!0}),o.client.request({url:"d=wxapi&c=forum_my_favorite&m=favorite_page",data:{rows:200},success:function(e){t.setData({favoriteList:e.data.rows,loadMoreType:!1,loadText:"暂无跟多数据"})}})}var o=getApp();Page({data:{tabs:["收藏的帖子","收藏的商家","收藏的商品"],activeIndex:0,sliderOffset:0,sliderLeft:0,loadMoreType:!0},onLoad:function(t){var e=this;wx.getSystemInfo({success:function(t){e.setData({sliderLeft:(t.windowWidth/e.data.tabs.length-96)/2,sliderOffset:t.windowWidth/e.data.tabs.length*e.data.activeIndex})}}),a(this)},tabClick:function(o){this.setData({sliderOffset:o.currentTarget.offsetLeft,activeIndex:o.currentTarget.id}),2==o.currentTarget.id&&t(this),1==o.currentTarget.id&&e(this),0==o.currentTarget.id&&a(this)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){t(this),e(this),a(this),setTimeout(function(){wx.stopPullDownRefresh()},1e3)},changeData:function(t){var e=t.detail.data,a=t.detail.index,o=this.data.favoriteList;o.splice(a,1,e),t.detail.reload&&this.setData({favoriteList:o})},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/collection/collection.js");
 		__wxRoute = 'page/user/admiration/myAdmiration';__wxRouteBegin = true; 	define("page/user/admiration/myAdmiration.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/admiration/myAdmiration.js");
 		__wxRoute = 'page/user/wallet/recharge';__wxRouteBegin = true; 	define("page/user/wallet/recharge.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){i.client.request({url:"d=wxapi&c=fee_user&m=pay_create",data:{tradeid:t.data.tradeid,paytype:"weixin"},success:function(n){wx.hideLoading(),console.log(n),a(e,n,t.data.tradeid)}})}function a(e,a,n){wx.requestPayment({timeStamp:a.data.paydata.timeStamp,nonceStr:a.data.paydata.nonceStr,package:a.data.paydata.package,signType:"MD5",paySign:a.data.paydata.paySign,success:function(a){wx.showToast({title:"支付成功",icon:"success",duration:2e3}),console.log(a),t(n),o(e)},fail:function(e){console.log(e),wx.showToast({title:"支付失败",icon:"fail",duration:2e3})}})}function t(e){i.client.request({url:"d=wxapi&c=fee_user&m=pay_finish",data:{tradeid:e,appresultcode:1},success:function(e){wx.showToast({title:"充值成功"}),setTimeout(function(){wx.navigateBack({})},1e3)}})}function n(e){i.client.request({url:"d=wxapi&c=fee_money&m=recharge_list",success:function(a){wx.hideLoading();var t=a.data;console.log(a),e.setData({moneys:t})}}),o(e)}function o(e){i.client.request({url:"d=wxapi&c=fee_user&m=userinfo",success:function(a){wx.hideLoading();var t=a.data;console.log(a),e.setData({money:t.moneycurrent})}})}var i=getApp();Page({data:{currentIndex:0,money:0},onLoad:function(){},onShow:function(){i.checkLogin()&&n(this)},chooseMOney:function(e){var a=e.currentTarget.dataset.index;console.log(e),this.setData({currentIndex:a})},recharge:function(){var a=this;wx.showToast({title:"提交订单...",icon:"loading",duration:1e5}),i.client.request({url:"d=wxapi&c=fee_money&m=user_recharge",data:{rechargeid:this.data.moneys[this.data.currentIndex].rechargeid},success:function(t){wx.hideLoading(),e(a,t),console.log(t)}})},onShareAppMessage:function(){return i.globalData.shareInfo}}); 
 			}); 	require("page/user/wallet/recharge.js");
 		__wxRoute = 'page/user/wallet/addbankcard';__wxRouteBegin = true; 	define("page/user/wallet/addbankcard.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(n){e.client.request({url:"d=wxapi&c=user&m=save",data:{realname:a,bankcnname:t,bankcardno:r},success:function(n){wx.showToast({title:"绑定银行卡成功"}),setTimeout(function(){wx.redirectTo({url:"withdrawals"})},1e3)}})}function o(n){return a=n.detail.value.realname,r=n.detail.value.bankcardno,t=n.detail.value.bankcnname,e.util.empty(a)?(e.showError("请输入姓名"),!1):e.util.empty(r)?(e.showError("请输入卡号"),!1):!e.util.empty(t)||(e.showError("请输入银行名称"),!1)}var e=getApp(),a="",t="",r="";Page({data:{},submit:function(e){console.error("fffffffffffasdfadsfadsf"),o(e)&&n()},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return e.globalData.shareInfo}}); 
 			}); 	require("page/user/wallet/addbankcard.js");
 		__wxRoute = 'page/user/wallet/withdrawals';__wxRouteBegin = true; 	define("page/user/wallet/withdrawals.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){r.client.request({url:"d=wxapi&c=user&m=profile",data:{},success:function(n){var t=n.data.userinfo;r.util.empty(t.bankname)&&(t.bankname=""),r.util.empty(t.bankcardno)&&(t.bankcardno=""),e.setData({userInfo:t})}})}function n(e,n){n.actiontype="tocard",wx.showLoading({title:"加载中..."}),r.client.request({url:"d=wxapi&c=fee_money&m=user_transfer",data:n,success:function(n){t(e,n.data.tradeid,"money")}})}function t(e,n,t){r.client.request({url:"d=wxapi&c=fee_user&m=pay_create",data:{tradeid:n,paytype:t},success:function(t){a(e,n)}})}function a(e,n){r.client.request({url:"d=wxapi&c=fee_user&m=pay_finish",data:{tradeid:n,appresultcode:1},success:function(e){wx.hideLoading(),wx.showToast({title:"提现申请成功"}),setTimeout(function(){wx.navigateBack({})},1e3)}})}function o(e,n){return r.util.empty(n.moneynum)?(r.showError("请输入提现金额"),!1):parseFloat(n.moneynum)>parseFloat(e.data.userInfo.fee.moneycurrent)?(r.showError("体现金额不能大于"+e.data.userInfo.fee.moneycurrent),!1):r.util.empty(n.realname)?(r.showError("请输入真实姓名"),!1):r.util.empty(n.cardno)?(r.showError("请输入卡号"),!1):!r.util.empty(n.bankname)||(r.showError("请输入所属银行"),!1)}var r=getApp();Page({data:{userInfo:{},moneynum:""},onLoad:function(n){e(this)},onWithdrawals:function(e){var t=e.detail.value;o(this,t)&&n(this,t)},allWithd:function(e){this.setData({moneynum:this.data.userInfo.fee.moneycurrent})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return r.globalData.shareInfo}}); 
 			}); 	require("page/user/wallet/withdrawals.js");
 		__wxRoute = 'page/user/wallet/billList';__wxRouteBegin = true; 	define("page/user/wallet/billList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(n){o.client.request({url:"d=wxapi&c=fee_money&m=money_page",data:{},success:function(t){var i=t.data.rows;e=Number(t.data.total);var c=n.data.billList;1==a&&(c=[]);for(var u=0;u<i.length;++u)i[u].dateline=o.util.formatDate(i[u].dateline,"yyyy-MM-dd hh:mm:ss");c=c.concat(i),n.setData({billList:c})}})}function t(){a=1,e=0}var o=getApp(),a=1,e=0;Page({data:{billList:[]},onLoad:function(o){t(),n(this)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/wallet/billList.js");
 		__wxRoute = 'page/user/order/orderList';__wxRouteBegin = true; 	define("page/user/order/orderList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){e.setData({loadMoreType:!0});var t="";"mine"==i?t="d=wxapi&c=mall_order&m=order_page":"shop"==i&&(t="d=wxapi&c=mall_shop_order&m=order_page"),o.client.request({url:t,data:{page:a,rows:n},success:function(t){var n=t.data.rows;r=Number(t.data.total);var i=e.data.orderList;if(1==a&&(i=[]),null!=n&&n.length>0){for(var l=0;l<n.length;++l)console.error(n[l].dateline),n[l].dateline=o.util.formatDate(n[l].dateline,"yyyy-MM-dd   hh:mm:ss");i=i.concat(n)}var s="";o.util.empty(r)?s="暂无更多数据":i.length==r?s="暂无更多数据":i.length<r&&(s="上啦加载更多"),e.setData({orderList:i,loadMoreType:!1,loadText:s})},fail:function(t){e.setData({loadMoreType:!1,loadText:"加载失败"})}})}function t(){a=1,r=0}var o=getApp(),a=1,n=20,r=0,i="";Page({data:{orderList:[],loadMoreType:!0},onLoad:function(o){t(),"shop"==(i=o.navigateType)&&wx.setNavigationBarTitle({title:"商家订单"}),e(this)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){a=1,e(this),setTimeout(function(){wx.stopPullDownRefresh()},1e3)},onReachBottom:function(){var t=this.data.orderList;Number(t.length)<r&&(a++,e(this))},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/order/orderList.js");
 		__wxRoute = 'page/user/myRelease/myRelease';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'page/user/myRelease/myRelease.js';	define("page/user/myRelease/myRelease.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){t.total=1,t.page=0,t.data.list=[],t.data.loadstatus=0,a(t)}function a(t){0==t.data.loadstatus&&(t.setData({loadstatus:1}),t.page++,s.client.request({url:"d=wxapi&c=forum_my_thread&m=thread_page",data:{page:t.page},success:function(a){var s=a.data;t.total=s.total;var o=t.data.list;o=o.concat(s.rows);var e={};e.list=o,o.length>=s.total?e.loadstatus=2:e.loadstatus=0,console.log(e),t.setData(e),wx.stopPullDownRefresh()},fail:function(t){wx.stopPullDownRefresh()}}))}var s=getApp();Page({data:{},onLoad:function(a){t(this)},onPullDownRefresh:function(){t(this)},onReachBottom:function(){a(this)},changeData:function(t){var a=t.detail,o=a.index;if(s.util.empty(a.data))(e=this.data.list).splice(o,1),this.setData({list:e}),this.total=parseInt(this.total)-1;else{var e=this.data.list;console.log(e),e.splice(o,1,a.data),this.setData({list:e}),console.log(e),this.total=parseInt(this.total)}},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/myRelease/myRelease.js");
 		__wxRoute = 'page/user/shopManage/productManage';__wxRouteBegin = true; 	define("page/user/shopManage/productManage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){t.setData({loadMoreType:!0}),o.client.request({url:"d=wxapi&c=mall_shop_goods&m=goods_page",data:{rows:200},success:function(e){for(var a=e.data.rows,n=Number(e.data.total),s=0;s<a.length;++s)a[s].goodscover=o.client.getFileUrl(a[s].goodscover),a[s].dateline=o.util.formatDate(a[s].dateline,"yyyy-MM-dd");var d="";o.util.empty(n)?d="暂无更多数据":a.length==n?d="暂无更多数据":a.length<n&&(d="上啦加载更多"),t.setData({productList:a,loadMoreType:!1,loadText:d})},fail:function(e){t.setData({loadMoreType:!1,loadText:"加载失败"})}})}function e(t,e,a){o.client.request({url:"d=wxapi&c=mall_shop_goods&m=delete",data:{goodsid:t},success:function(t){var o=a.data.productList;o.splice(e,1),a.setData({productList:o})}})}var o=getApp();Page({data:{loadMoreType:!0},onLoad:function(e){t(this)},catchEdit:function(t){var e=t.currentTarget.dataset.goodsid,o=t.currentTarget.dataset.goodstype;"1"==o?wx.navigateTo({url:"releaseDevice?goodsid="+e}):"2"==o&&wx.navigateTo({url:"releaseProduct?goodsid="+e})},catchDelete:function(t){var o=t.currentTarget.dataset.goodsid,a=t.currentTarget.dataset.index,n=t.currentTarget.dataset.goodsname,s=this;wx.showModal({title:"提示",content:"是否删除“"+n+"”此商品？",success:function(t){t.confirm&&e(o,a,s)}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){t(this),setTimeout(function(){wx.stopPullDownRefresh()},1e3)},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/shopManage/productManage.js");
 		__wxRoute = 'page/user/shopManage/shopOrder/shopOrderList';__wxRouteBegin = true; 	define("page/user/shopManage/shopOrder/shopOrderList.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{},onLoad:function(n){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/user/shopManage/shopOrder/shopOrderList.js");
 		__wxRoute = 'page/home/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'page/home/list.js';	define("page/home/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){var e=t.data.headers;for(var o in e){var s=e[o];s.loadstatus=0,s.page=0,s.list=[],s.total=1}a(t)}function e(t){var e=t.data.headers[t.data.selectedIndex];e.loadstatus=0,e.page=0,e.list=[],e.total=1,a(t)}function a(t){var e=t.data.selectedIndex,a=t.data.headers,o=a[e];if(0==o.loadstatus){o.page++;var l={};l.blockid=t.blockid,l.page=o.page,l.orderby=o.orderby,console.log(l),s.client.request({url:"d=wxapi&c=forum_thread&m=thread_page",data:l,success:function(s){var l=s.data;o.total=l.total;var d=l.rows;o.list=o.list.concat(d),o.list.length>=o.total?o.loadstatus=2:o.loadstatus=0,a[e]=o,t.setData({headers:a}),console.log(a)}})}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=getApp();Page({data:{headers:[{title:"最新",orderby:""},{title:"最近",orderby:"heatnum"},{title:"推荐",orderby:"postcnt"}],selectedIndex:0},onLoad:function(e){this.blockid=e.blockid,wx.setNavigationBarTitle({title:e.blockname}),t(this)},headerClick:function(t){var s=this.data.selectedIndex,l=t.currentTarget.dataset.index;if(console.log(s+"----"+l),this.setData({selectedIndex:l}),s==l)e(this);else{var d=this.data.headers[l];"object"==o(d.list)&&0!=d.list.length||a(this)}},changeData:function(t){var e=t.detail.data,a=t.detail.index,o=this.data.headers;o[this.data.selectedIndex].list.splice(a,1,e),t.detail.reload&&this.setData({headers:o}),console.log("外面回调"),console.log(o)},onShareAppMessage:function(){}}); 
 			}); 	require("page/home/list.js");
 		__wxRoute = 'page/user/common/login';__wxRouteBegin = true; 	define("page/user/common/login.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e.wxValidate=new r.default({mobile:{required:!0,tel:!0},verify:{required:!0}},{mobile:{required:"请输入手机号码"},verify:{required:"请输入验证码"}}),e.wxValidate}function t(e,t){var a=t.detail.value;if(!e.wxValidate.checkForm(t)){var i=e.wxValidate.errorList[0];return o.showError(i.msg)}o.client.request({url:"d=wxapi&c=login&m=login",data:a,success:function(e){o.showMessage("登录成功"),o.setLogin(e.data),wx.navigateBack()}})}function a(e){var t=e.data.btnVerifyCount,i=!0,r="获取验证码";t>0?(r+="("+--t+")",setTimeout(function(){a(e)},1e3)):i=!1,e.setData({btnVerifyCount:t,btnVerifyDisabled:i,btnVerifyText:r})}function i(e,t){var i=t.detail.value.mobile,r=/^0?1[3|4|5|7|8][0-9]\d{8}$/;if(null==i||i.length<1)return o.showError("请输入手机号码");if(!r.test(i))return o.showError("手机号码格式错误");e.setData({btnVerifyCount:60}),setTimeout(function(){a(e)},1e3);var n={mobile:i};o.client.request({url:"d=wxapi&c=login&m=send_verify",data:n,success:function(e){o.showMessage(e.message)}})}var r=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../utils/WxValidate")),o=getApp();Page({data:{logoUrl:null,appName:"",hasLogin:!1,mobile:"",btnVerifyText:"获取验证码",btnVerifyDisabled:!1,btnVerifyCount:0},onLoad:function(t){var a=this;this.wxValidate=e(this),console.error(o.globalData.appLogo);var i=o.globalData.appLogo,r=o.globalData.appName;a.setData({logoUrl:i,appName:r})},onShow:function(){o.globalData.hasLogin&&o.setLogout()},submitForm:function(e){"btnsubmit"==e.detail.target.id?t(this,e):"btnverify"==e.detail.target.id&&i(this,e)}}); 
 			}); 	require("page/user/common/login.js");
 		__wxRoute = 'page/store/order/createOrder';__wxRouteBegin = true; 	define("page/store/order/createOrder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){d.client.request({url:"d=wxapi&c=mall_goods&m=goods_byid",data:{goodsid:n},success:function(o){for(var e=o.data.goodsinfo,a=0;a<e.imagelist.length;++a)e.imagelist[a]=d.client.getFileUrl(e.imagelist[a]);e.dateline=d.util.formatDate(e.dateline,"yyyy-MM-dd");var i=e.goodspricenum;"4"==e.goodspricetype&&(i=1e4*parseFloat(e.goodspricenum)),t.setData({goodsDetail:e,payPrice:i})}})}function o(){return d.util.empty(s)?(d.showError("请输入收货人"),!1):d.util.isMobile(r)?!d.util.empty(u)||(d.showError("请输入收获地址"),!1):(d.showError("电话号码输入错误"),!1)}function e(){s="",r="",u=""}function a(t){d.client.request({url:"d=wxapi&c=mall_order&m=order_save",data:{goodsid:n,goodsnum:t.data.goodsNum,postusername:s,postusermobile:r,postuseraddr:u},success:function(t){i(t)}})}function i(t){wx.redirectTo({url:"/page/publish/pay?tradeid="+t.data.tradeid+"&payamount="+t.data.payamount})}var d=getApp(),n="",s="",r="",u="";Page({data:{goodsNum:1},onLoad:function(o){e(),n=o.goodsid,t(this)},bindSubmitOrder:function(t){o()&&a(this)},bindSetGoodsNum:function(t){var o=t.currentTarget.dataset.settype,e=Number(this.data.goodsNum);"add"==o?e++:"delete"==o&&e>1&&e--;var a=Number(this.data.goodsDetail.goodspricenum);"4"==this.data.goodsDetail.goodspricetype&&(a=1e4*parseFloat(this.data.goodsDetail.goodspricenum)),this.setData({goodsNum:e,payPrice:a*e})},bindInput:function(t){var o=t.currentTarget.dataset.name;"postusername"==o?s=t.detail.value:"postusermobile"==o?r=t.detail.value:"postuseraddr"==o&&(u=t.detail.value)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("page/store/order/createOrder.js");
 		__wxRoute = 'page/publish/pay';__wxRouteBegin = true; 	define("page/publish/pay.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function a(a){i.client.request({url:"d=wxapi&c=fee_user&m=userinfo",success:function(t){wx.hideLoading();var e=t.data;console.log(t),a.setData({money:e.moneycurrent})}})}function t(a){wx.showLoading({title:"正在发起支付"}),i.client.request({url:"d=wxapi&c=fee_user&m=pay_create",data:a,success:function(t){"money"==a.paytype?n(a.tradeid):"weixin"==a.paytype&&e(t.data,a.tradeid)}})}function e(a,t){wx.requestPayment({timeStamp:a.paydata.timeStamp,nonceStr:a.paydata.nonceStr,package:a.paydata.package,signType:"MD5",paySign:a.paydata.paySign,success:function(a){console.log(a),n(t)},fail:function(a){console.log(a),i.client.showError("支付失败")}})}function n(a){i.client.request({url:"d=wxapi&c=fee_user&m=pay_finish",data:{tradeid:a,appresultcode:1},success:function(a){i.showMessage(a.message);var t=getCurrentPages(),e=t[t.length-2];"function"==typeof e.payCallBack&&e.payCallBack(!0),setTimeout(function(){wx.navigateBack({})},1500)},fail:function(a){i.showError(a.message)}})}var i=getApp();Page({data:{paytype:"money"},onLoad:function(t){a(this);t.tradeamount,t.payamount,t.tradedate,t.tradetitle;this.setData(t)},startPay:function(a){var e=this.data.paytype,n={};n.tradeid=this.data.tradeid,n.paytype=e,t(n)},payTypeChoose:function(a){var t=a.currentTarget.dataset.paytype;this.setData({paytype:t})}}); 
 			}); 	require("page/publish/pay.js");
 		__wxRoute = 'page/second/index';__wxRouteBegin = true; 	define("page/second/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){w.typeTool.queryCatList(function(e){if(e.length>0){var a={};a.id="1",a.oneRow=t.data.years.oneRow,a.twoRow=[];for(var i=0;i<e.length;++i)a.twoRow.push({text:e[i].catname,id:e[i].catid,catpath:e[i].catpath});t.data.deviceTypeList=a}})}function e(t){w.typeTool.queryBrand({catpath:V,success:function(e){if(e.length>0){var a={};a.id="2",a.oneRow=t.data.years.oneRow,a.twoRow=[];for(var i=0;i<e.length;++i)a.twoRow.push({text:e[i].brandname,id:e[i].brandid});t.data.Brands=a}}})}function a(){x="",L="",S="",D="",R="",k="",I="",m=1}function i(t){wx.showLoading({title:"加载中..."}),t.setData({loadMoreType:!0}),w.client.request({url:"d=wxapi&c=etp_info_sell&m=info_page",data:{cityid:x,catid:L,year:S,rootcid:"1",brandid:D,search:R,orderby:k,page:m,rows:v},success:function(e){wx.hideLoading(),wx.stopPullDownRefresh(),T=Number(e.data.total);var a=t.data.deviceList;1==m&&(a=[]);var i=e.data.rows;if(i.length>0){for(var s=0;s<i.length;++s){i[s].dateline=w.util.formatDateTime(i[s].dateline);for(var o=i[s].imagelist,r=0;r<o.length;++r)o[r]=w.client.getFileUrl(o[r]);i[s].imagelist=o,i[s].useravatar_middle=w.client.getAvatarUrl(i[s].useravatar_middle),console.error(i[s].useravatar_middle)}a=a.concat(i)}var c="";w.util.empty(T)?c="暂无更多数据":a.length==T?c="暂无更多数据":a.length<T&&(c="点击加载更多"),n(t),t.setData({deviceList:a,loadMoreType:!1,loadText:c})},fail:function(e){wx.hideLoading(),n(t),t.setData({loadMoreType:!1,loadText:"加载失败"})}})}function n(t){t.data.refreshType&&t.setData({refreshType:!1})}function s(t,e,a){"1"==e?L=t:"2"==e?D=t:"3"==e?S=t:"4"==e&&(k=t),m=1,i(a)}function o(t){L="",D="",S="",k="",m=1,V="",e(t),i(t)}function r(t){wx.showLoading({title:"提交中..."}),w.client.request({url:"d=wxapi&c=etp_comment&m=comment_save",data:{idtype:"sellid",idvalue:b,message:_,touserid:E},success:function(e){wx.hideLoading(),t.setData({showInput:!1}),c(t)}})}function c(t){var e=t.data.deviceList,a=e[C].commentlist;w.util.empty(a)&&(a=[]);var i="";w.getUserInfo(function(n){i=n.nickname;var s=w.globalData.userId;s==E&&(E="0"),a.push({userid:s,username:i,message:_,touserid:E,tousername:U}),t.data.deviceList[C].commentlist=a,t.setData({deviceList:e}),E="",_=""})}function d(t,e){wx.showLoading({title:"加载中..."}),w.client.request({url:"d=wxapi&c=common_user&m=profile",data:{userid:e},success:function(t){wx.hideLoading(),wx.setStorageSync("callPhone",""),wx.makePhoneCall({phoneNumber:t.data.userinfo.usermobile})},fail:function(t){wx.hideLoading(),w.showError("获取电话号码失败")}})}function l(t){wx.showLoading({title:"加载中..."}),w.client.request({url:"d=wxapi&c=etp_info_order&m=order_save",data:{idtype:"sellid",idvalue:P},success:function(e){u(t,e)}})}function u(t,e){w.client.request({url:"d=wxapi&c=fee_user&m=pay_create",data:{tradeid:e.data.tradeid,paytype:"weixin"},success:function(a){wx.hideLoading(),h(t,a,e.data.tradeid)}})}function h(t,e,a){wx.requestPayment({timeStamp:e.data.paydata.timeStamp,nonceStr:e.data.paydata.nonceStr,package:e.data.paydata.package,signType:"MD5",paySign:e.data.paydata.paySign,success:function(t){f(a)},fail:function(t){w.client.showError("支付失败")}})}function f(t){w.client.request({url:"d=wxapi&c=fee_user&m=pay_finish",data:{tradeid:t,appresultcode:1},success:function(t){wx.showToast({title:"已获得一次免费拨打电话机会"}),wx.setStorageSync("callPhone","1")}})}function p(t){w.getAppConfig(function(e){var a=e.banner;t.setData({bannerList:a})})}var g=require("../../utils/pickerCity"),w=getApp(),y=-1,m=1,v=20,T=0,x="",L="",S="",D="",R="",k="",I="",_="",b="",C=-1,P="",q="",M=0,V="",E="",U="";Page({data:{deviceList:[],showTop:!1,searchTypeList:[{text:"全国"},{text:"分类",id:"1"},{text:"品牌",id:"2"},{text:"年限",id:"3"},{text:"排序",id:"4"}],filterTypeList:{},filterSelectList:[],years:{id:"3",oneRow:[{text:"不限",id:""}],twoRow:[{text:"3年以内",id:"0,3"},{text:"3-5年",id:"3,5"},{text:"5-8年",id:"5,8"},{text:"8-10年",id:"8,10"},{text:"10年以上",id:"10,"}]},sequenceList:{id:"4",oneRow:[{text:"时间最新发布",id:"new"},{text:"价格从低到高",id:"priceasc"},{text:"价格从高到低",id:"pricedesc"}]},showTypeSelectView:!1,showInput:!1,regionlist:g.getRegionList(),regionvalue:g.regionValue,fromcityid:0,fromcity:"全国",loadMoreType:!0,topy:0,bannerList:[]},onLoad:function(n){_="",b="",E="",a(),t(this),e(this),i(this),p(this)},onScorll:function(t){var e=t.detail.scrollTop,a=this.data.showTop;e>170?a||this.setData({showTop:!0}):(this.data.topy=e,a&&this.setData({showTop:!1}))},showTypeSelect:function(t){var e=t.currentTarget.dataset.index;if(y==e&&this.data.showTypeSelectView)this.setData({showTypeSelectView:!1});else{y=e;var a={},i=this.data.searchTypeList[e].id;"3"==i&&(a=this.data.years),"4"==i&&(a=this.data.sequenceList),"1"==i&&(a=this.data.deviceTypeList,console.log(a)),"2"==i&&(a=this.data.Brands),this.setData({showTypeSelectView:!0,filterTypeList:a})}},selectType:function(t){var a=t.currentTarget.dataset.id,i=t.currentTarget.dataset.text,n=t.currentTarget.dataset.parent;if(s(a,n,this),"4"!=n){if("1"==n){var o=t.currentTarget.dataset.catpath;V=null!=o?o:"",e(this)}for(var r=this.data.filterSelectList,c=0;c<r.length;++c)r[c].parentId==n&&r.splice(c,1);""==a||r.push({text:i,parentId:n}),this.setData({showTypeSelectView:!1,filterSelectList:r})}else this.setData({showTypeSelectView:!1})},deleteFilter:function(t){var a=t.currentTarget.dataset.index,i=t.currentTarget.dataset.parent,n=this.data.filterSelectList;s("",i,this),"1"==i&&(V="",e(this)),n.splice(a,1),this.setData({filterSelectList:n})},maskClick:function(t){this.setData({showTypeSelectView:!1})},hiddenPop:function(t){this.setData({showTypeSelectView:!1})},resetType:function(t){o(this),this.setData({filterSelectList:[]})},commentClick:function(t){E=t.currentTarget.dataset.touserid,w.util.empty(E)&&(E="0"),b=t.currentTarget.dataset.sellid,C=t.currentTarget.dataset.index,U=t.currentTarget.dataset.username,this.setData({showInput:!0,toUserName:U})},itemClick:function(t){_="",this.setData({showInput:!1})},natoInfo:function(t){if(w.checkLogin()){var e=t.currentTarget.dataset.sellid;wx.navigateTo({url:"device/deviceInfo?sellid="+e})}},lookUser:function(t){if(w.checkLogin()){var e=t.currentTarget.dataset.userid;wx.navigateTo({url:"user/userInfo?userid="+e})}},changeRegion:function(t){var e=t.detail.value,a=(t.currentTarget.dataset.name,g.getRegionSelect(e)),n=a.value,s=a.text;this.setData({fromcityid:n,fromcity:s}),x=n,m=1,i(this)},changeRegionColumn:function(t){var e=t.detail.column,a=t.detail.value,i=g.pickerRegionChange(e,a),n=g.regionValue;this.setData({regionlist:i,regionvalue:n})},searchClick:function(){if(w.util.empty(I))return w.showError("搜索不能为空");R=I,m=1,i(this)},inputListener:function(t){I=t.detail.value},deleteSearch:function(t){w.util.empty(I)||(I==R&&(R="",m=1,i(this)),this.setData({searchValue:""}),I="")},lookMap:function(t){var e=parseFloat(t.currentTarget.dataset.la),a=parseFloat(t.currentTarget.dataset.lo);wx.openLocation({latitude:e,longitude:a})},sendCommentClick:function(t){if(w.util.empty(_))return w.showError("评论不能为空");r(this)},commentInput:function(t){_=t.detail.value},callPhone:function(t){if(w.checkLogin()){var e=wx.getStorageSync("callPhone");if(w.util.empty(e))P=t.currentTarget.dataset.sellid,q=t.currentTarget.dataset.userid,w.util.addRecord("click","sellid",P),this.setData({showEnterStatus:!0,callPrice:w.callPrice});else{var a=t.currentTarget.dataset.userid,i=t.currentTarget.dataset.sellid;d(0,a),w.util.addRecord("call","sellid",i)}}},hiddenCallDialog:function(t){this.setData({showEnterStatus:!1})},lookOverImag:function(t){var e=t.currentTarget.dataset.index,a=t.currentTarget.dataset.imgindex,i=this.data.deviceList[e].imagelist;wx.previewImage({current:i[a],urls:i})},opentPublish:function(t){wx.navigateTo({url:"/page/second/publish/publish"})},loadMore:function(t){this.data.deviceList.length<T&&(m++,i(this))},onMove:function(t){if(0==this.data.topy){var e=t.touches[0].pageY;if(e>M){var a=e-M;this.data.totaly=a}else(a=M-e)>10&&this.setData({refreshType:!1})}},onMoveStart:function(t){M=t.touches[0].pageY},onTochend:function(t){this.data.totaly>50&&(this.setData({refreshType:!0}),m=1,this.data.totaly=0,i(this))},payCall:function(t){this.setData({showEnterStatus:!1}),l(this)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){m=1,i(this)},onReachBottom:function(){},onShareAppMessage:function(t){if(wx.showShareMenu({withShareTicket:!0}),"button"==t.from){this.setData({showEnterStatus:!1});var e=t.target.dataset.clicktype,a="";return a=w.util.empty(e)?t.target.dataset.sellid:P,w.util.addRecord("share","sellid",a),{title:"二手机买卖、维修、租赁",path:"/page/second/device/deviceInfo?sellid="+a,success:function(t){if(!w.util.empty(e)){var a=t.shareTickets;w.util.empty(a)?w.showError("分享到群才有效"):wx.getShareInfo({shareTicket:a[0],success:function(t){w.util.shareResolve(t,this,function(t){t&&d(0,q)})}})}}}}}}); 
 			}); 	require("page/second/index.js");
 		__wxRoute = 'page/second/device/deviceInfo';__wxRouteBegin = true; 	define("page/second/device/deviceInfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){wx.showLoading({title:"加载中..."}),f.client.request({url:"d=wxapi&c=etp_info_sell&m=info_byid",data:{sellid:h},success:function(i){wx.hideLoading();for(var n=i.data.imagelist,o=0;o<n.length;++o)i.data.imagelist[o]=f.client.getFileUrl(n[o]);i.data.dateline=f.util.formatDateTime(i.data.dateline),i.data.userfavorite=parseInt(i.data.userfavorite),e.setData({deviceInfo:i.data}),t(e,i.data.proplist),a(i.data.userid,e)}})}function t(e,t){if(!f.util.empty(t)&&(t=t.split(";")).length>0){for(var a=[],i=0;i<t.length;++i){var n=t[i].split(":");a.push({left:n[0],right:n[1]})}e.setData({typeList:a})}}function a(e,t){f.client.request({url:"d=wxapi&c=etp_info_sell&m=info_page",data:{rows:100,userid:e},success:function(e){var a=e.data.rows;if(a.length>0){for(var i=0;i<a.length;++i)a[i].image=f.client.getFileUrl(a[i].image),a[i].dateline=f.util.formatDateTime(a[i].dateline),h==a[i].sellid&&(a.splice(i,1),i--);t.setData({deviceList:a})}}})}function i(t){f.client.request({url:"d=wxapi&c=etp_info_favorite&m=info_save",data:{idtype:"sellid",idvalue:h},success:function(a){wx.showToast({title:"收藏成功"}),e(t)}})}function n(e){wx.showLoading({title:"加载中..."}),f.client.request({url:"d=wxapi&c=common_user&m=profile",data:{userid:e.data.deviceInfo.userid},success:function(e){wx.hideLoading(),wx.setStorageSync("callPhone",""),wx.makePhoneCall({phoneNumber:e.data.userinfo.usermobile})},fail:function(e){wx.hideLoading(),f.showError("获取电话号码失败")}})}function o(t){f.client.request({url:"d=wxapi&c=etp_info_favorite&m=info_delete",data:{favoriteid:t.data.deviceInfo.userfavorite},success:function(a){wx.showToast({title:"已取消"}),e(t)}})}function s(e){wx.showLoading({title:"加载中..."}),f.client.request({url:"d=wxapi&c=etp_info_order&m=order_save",data:{idtype:"sellid",idvalue:h},success:function(t){c(e,t)}})}function c(e,t){f.client.request({url:"d=wxapi&c=fee_user&m=pay_create",data:{tradeid:t.data.tradeid,paytype:"weixin"},success:function(a){wx.hideLoading(),console.log(a),l(e,a,t.data.tradeid)}})}function l(e,t,a){wx.requestPayment({timeStamp:t.data.paydata.timeStamp,nonceStr:t.data.paydata.nonceStr,package:t.data.paydata.package,signType:"MD5",paySign:t.data.paydata.paySign,success:function(e){console.log(e),d(a)},fail:function(e){console.log(e),f.client.showError("支付失败")}})}function d(e){f.client.request({url:"d=wxapi&c=fee_user&m=pay_finish",data:{tradeid:e,appresultcode:1},success:function(e){wx.showToast({title:"已获得一次免费拨打电话机会"}),wx.setStorageSync("callPhone","1")}})}function r(){wx.showLoading({title:"二维码生成中"}),f.client.request({url:"d=wxapi&c=common&m=get_qrcode",data:{page:"page/buy/device/deviceInfo",scene:h},success:function(e){var t=f.client.getFileUrl(e.data.url);console.error(t),u(t)}})}function u(e){wx.hideLoading(),wx.previewImage({urls:[e]})}var f=getApp(),p=require("../../../utils/pointData.js"),h="";Page({data:{deviceInfo:{},deviceList:[],pointList:p.pointList},onLoad:function(t){h=t.sellid,f.util.empty(h)&&(h=decodeURIComponent(t.scene)),e(this)},lookMap:function(e){var t=parseFloat(this.data.deviceInfo.maplat),a=parseFloat(this.data.deviceInfo.maplng);wx.openLocation({latitude:t,longitude:a})},collectionClick:function(e){var t=this.data.deviceInfo.userfavorite;0==t?i(this):t>0&&o(this)},callPhone:function(e){var t=wx.getStorageSync("callPhone");f.util.empty(t)?(this.setData({showEnterStatus:!0,callPrice:f.callPrice}),f.util.addRecord("click","sellid",h)):(n(this),f.util.addRecord("call","sellid",h))},hiddenCallDialog:function(e){this.setData({showEnterStatus:!1})},lookOverImag:function(e){var t=e.currentTarget.dataset.index,a=this.data.deviceInfo.imagelist;wx.previewImage({current:a[t],urls:a})},payCall:function(e){this.setData({showEnterStatus:!1}),s(this)},goHome:function(e){wx.switchTab({url:"/page/home/index"})},generateCode:function(){f.util.addRecord("qrcode","sellid",h),r()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(e){var t=this;if(wx.showShareMenu({withShareTicket:!0}),"button"==e.from){var a=e.target.dataset.clicktype;return f.util.empty(a)||this.setData({showEnterStatus:!1}),f.util.addRecord("share","sellid",h),{title:"二手机买卖、维修、租赁",path:"/page/second/device/deviceInfo?sellid="+h,success:function(e){if(!f.util.empty(a)){var i=e.shareTickets;f.util.empty(i)?f.showError("分享到群才有效"):wx.getShareInfo({shareTicket:i[0],success:function(e){f.util.shareResolve(e,this,function(e){e&&n(t)})}})}}}}}}); 
 			}); 	require("page/second/device/deviceInfo.js");
 		__wxRoute = 'page/second/mypublish/edit';__wxRouteBegin = true; 	define("page/second/mypublish/edit.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function a(a){console.log(a.sellid),s.client.request({url:"d=wxapi&c=etp_info_my&m=info_byid",data:{sellid:a.sellid},success:function(t){var e=t.data;console.log(e),a.params.maplat=e.maplat,a.params.maplng=e.maplng,a.params.address=e.address,a.params.proplist=e.proplist;var r={name:e.address};a.params.madeyear=e.madeyear,a.params.catid=e.catid;e.catpath;var i={};i.currenttype=e.catname,s.typeTool.queryPropList({catpath:e.catpath,success:function(t){i.list=[];var r={};if(e.proplist){var n=e.proplist.split(";");for(var l in n){var p=n[l].split(":");r[p[0]]=p[1]}}for(var d in t){var o=t[d];if("list"==o.proptype)o.range=o.propdata.split(","),o.propname&&(o.selectedcat=r[o.propname]),i.list.push(o);else{i.propname=o.propname,i.propdata=o.propdata;var c=[];for(var u in e.cardlist){var h=e.cardlist[u],m={};m.showurl=s.client.getFileUrl(h),m.imageurl=h,c.push(m)}a.setData({cardlist:c})}}a.setData({currentType:i})}}),a.params.brandid=e.brandid,s.typeTool.queryBrand({catpath:e.catpath,success:function(t){var r={};r.brandid=e.brandid,r.brandname=e.brandname,a.setData({brandlist:t,selectedbrand:r})}});var n=[];for(var l in e.imagelist){var p=e.imagelist[l],d={};d.showurl=s.client.getFileUrl(p),d.imageurl=p,n.push(d)}a.setData({imagelist:n}),a.setData({address:r,currentType:i,brief:e.brief,sellmoney:e.sellmoney,length:e.brief.length,selectedyear:e.madeyear})}})}function t(a,e,r){var i=[];for(var n in a){var l=a[n];{if("string"!=typeof l.imageurl){var p=parseInt(n)+1;return wx.showLoading({title:r+p+"/"+a.length}),void s.client.request({url:"d=wxapi&c=common&m=image_upload",method:"FILE",name:"image",hideAlert:!0,filePath:l.showurl,success:function(s){l.imageurl=s[0].data.filepath,t(a,e,r)}})}i.push(l.imageurl)}}wx.hideLoading(),"function"==typeof e&&e(i.join(";"))}function e(a){0!=a.imagelist.length?i||(i=!0,s.client.request({url:"d=wxapi&c=etp_info_my&m=info_save",data:a,success:function(a){s.showMessage(a.message),setTimeout(function(){wx.navigateBack()},1e3)},fail:function(a){i=!1}})):s.showError("请上传设备照片")}function r(a){s.typeTool.queryCatList(function(t){a.setData({typelist:t})})}var s=getApp(),i=!1;Page({data:{length:0,imagelist:[],cardlist:[]},onShow:function(){i=!1},onLoad:function(t){r(this);for(var e=(new Date).getFullYear(),s=[],i=0;i<20;i++)s.push(e),e--;this.setData({yearlist:s}),this.params={},"string"==typeof t.sellid&&(this.sellid=t.sellid,this.params.sellid=t.sellid,a(this))},tapAvatarRemove:function(a){var t=this,e=a.currentTarget.dataset.key,r=t.data[e],s=parseInt(a.currentTarget.dataset.index);if("undefinded"!=typeof(r=t.data[e])[s]){r.splice(s,1);var i={};i[e]=r,t.setData(i)}},tapAvatarAdd:function(a){var t=this,e=a.currentTarget.dataset.key,r=t.data[e];if(r.length>=8)return s.showMessage("不能再上传图片了"),!1;wx.chooseImage({count:8-r.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(a){var s=a.tempFilePaths;if(s.length>0)for(var i=0;i<s.length;i++){var n={};n.showurl=s[i],n.imageurl=null,r.push(n)}var l={};l[e]=r,t.setData(l)}})},tapAvatarPreview:function(a){for(var t=this,e=a.currentTarget.dataset.key,r=(t.data[e],parseInt(a.currentTarget.dataset.index)),s=t.data[e],i="",n=[],l=0;l<s.length;l++)n.push(s[l].showurl),l==r&&(i=s[l].showurl);wx.previewImage({current:i,urls:n})},typeChanged:function(a){var t=this.data.typelist[a.detail.value];this.params.catid=t.catid;var e={};e.currenttype=t.catname;t.catpath;var r=this;s.typeTool.queryPropList({catpath:t.catpath,success:function(a){e.list=[];for(var t in a){var s=a[t];"list"==s.proptype?(s.range=s.propdata.split(","),e.list.push(s)):(e.propname=s.propname,e.propdata=s.propdata)}r.setData({currentType:e})}}),s.typeTool.queryBrand({catpath:t.catpath,success:function(a){r.setData({brandlist:a})}})},listChanged:function(a){var t=a.currentTarget.dataset.index,e=this.data.currentType,r=e.list[t];r.selectedcat=r.range[a.detail.value],this.setData({currentType:e});var s=[];for(var i in e.list){var n=e.list[i];if("string"!=typeof n.selectedcat)return;var l=n.propname+":"+n.selectedcat;s.push(l)}this.params.proplist=s.join(";")},yearChanged:function(a){var t=this.data.yearlist[a.detail.value];this.setData({selectedyear:t}),this.params.madeyear=t},brandChanged:function(a){var t=a.detail.value,e=this.data.brandlist[t];this.params.brandid=e.brandid,this.setData({selectedbrand:e})},addressClick:function(a){var t=this;wx.chooseLocation({success:function(a){t.params.maplat=a.latitude,t.params.maplng=a.longitude,t.params.address=a.name,t.setData({address:a})}})},submit:function(a){Object.assign(this.params,a.detail.value);var r=this;t(this.data.imagelist,function(a){r.params.imagelist=a;var s="";r.data.currentType&&(s=r.data.currentType.propname),t(r.data.cardlist,function(a){r.params.cardlist=a,e(r.params)},s)},"设备照片")},textareainput:function(a){this.setData({length:a.detail.value.length})},onShareAppMessage:function(){}}); 
 			}); 	require("page/second/mypublish/edit.js");
 		__wxRoute = 'page/second/mypublish/pulish';__wxRouteBegin = true; 	define("page/second/mypublish/pulish.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){if(!(t.total<=t.data.list.length)){var e={};e.page=++t.page,a.client.request({url:"d=wxapi&c=etp_info_my&m=info_page",data:e,success:function(e){wx.hideLoading(),t.total=e.data.total,0==t.total?t.setData({empty:!0}):t.setData({empty:!1});var i=e.data.rows,s=t.data.list;for(var o in i){var n=i[o];n.image=a.client.getFileUrl(n.image),n.time=a.util.formatDateTime(n.dateline),s.push(n),console.log(n.status)}var l={};l.list=s,t.total<=s.length&&(l.loadstatus=2),t.setData(l)}})}}var a=getApp();Page({data:{loadstatus:0},onLoad:function(t){},onShow:function(){this.page=0,this.total=1,this.setData({list:[]}),wx.showLoading({title:"正在刷新"}),t(this)},onReachBottom:function(){this.setData({loadstatus:1}),t(this)},onPullDownRefresh:function(){this.page=0,this.total=1,this.setData({list:[]}),wx.showLoading({title:"正在刷新"}),t(this)},statusChange:function(t){var e=t.currentTarget.dataset,i={sellid:e.sellid},s=this,o=s.data.list,n=e.index,l=o[n];"edit"==e.btntype?wx.navigateTo({url:"edit?sellid="+l.sellid}):"delete"==e.btntype?wx.showModal({title:"提示",content:"删除信息将无法撤销",confirmText:"确定",confirmColor:"#da432c",success:function(t){t.confirm&&a.client.request({url:"d=wxapi&c=etp_info_my&m=info_delete",data:i,success:function(t){o.splice(n,1),s.total-=1;var a={list:o};0==s.total&&(a.empty=!0),s.setData(a)}})}}):"change"==e.btntype&&wx.showModal({title:"提示",content:"将这条信息改成成交状态，将不能重新改回在售状态",confirmText:"确定",confirmColor:"#da432c",success:function(t){t.confirm&&(i.status=2,a.client.request({url:"d=wxapi&c=etp_info_my&m=info_edit",data:i,success:function(t){l.status=2,s.setData({list:o})}}))}})},onShareAppMessage:function(){}}); 
 			}); 	require("page/second/mypublish/pulish.js");
 		__wxRoute = 'page/second/publish/publish';__wxRouteBegin = true; 	define("page/second/publish/publish.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function a(t,e,r){var i=[];for(var n in t){var o=t[n];{if("string"!=typeof o.imageurl){var l=parseInt(n)+1;return wx.showLoading({title:r+l+"/"+t.length}),void s.client.request({url:"d=wxapi&c=common&m=image_upload",method:"FILE",name:"image",hideAlert:!0,filePath:o.showurl,success:function(s){o.imageurl=s[0].data.filepath,a(t,e,r)}})}i.push(o.imageurl)}}wx.hideLoading(),"function"==typeof e&&e(i.join(";"))}function t(a){var t=a.params;0!=t.imagelist.length?a.submitAble||(a.submitAble=!0,wx.showLoading({title:"正在提交数据"}),s.client.request({url:"d=wxapi&c=etp_info_my&m=info_save",data:t,success:function(t){s.showMessage(t.message),setTimeout(function(){wx.reLaunch({url:"/page/user/index"})},1e3),a.submitAble=!1},fail:function(t){a.submitAble=!1}})):s.showError("请上传设备照片")}function e(a){s.typeTool.queryCatList(function(t){a.setData({typelist:t})})}var s=getApp();Page({data:{length:0,imagelist:[],cardlist:[]},onLoad:function(a){e(this);for(var t=(new Date).getFullYear(),s=[],r=0;r<20;r++)s.push(t),t--;this.setData({yearlist:s}),this.params={}},tapAvatarRemove:function(a){var t=this,e=a.currentTarget.dataset.key,s=t.data[e],r=parseInt(a.currentTarget.dataset.index);if("undefinded"!=typeof(s=t.data[e])[r]){s.splice(r,1);var i={};i[e]=s,t.setData(i)}},tapAvatarAdd:function(a){var t=this,e=a.currentTarget.dataset.key,r=t.data[e];if(r.length>=9)return s.showMessage("不能再上传图片了"),!1;wx.chooseImage({count:9-r.length,sizeType:["compressed"],sourceType:["album","camera"],success:function(a){var s=a.tempFilePaths;if(s.length>0)for(var i=0;i<s.length;i++){var n={};n.showurl=s[i],n.imageurl=null,r.push(n)}var o={};o[e]=r,t.setData(o)}})},tapAvatarPreview:function(a){for(var t=this,e=a.currentTarget.dataset.key,s=(t.data[e],parseInt(a.currentTarget.dataset.index)),r=t.data[e],i="",n=[],o=0;o<r.length;o++)n.push(r[o].showurl),o==s&&(i=r[o].showurl);wx.previewImage({current:i,urls:n})},typeChanged:function(a){var t=this.data.typelist[a.detail.value];this.params.catid=t.catid;var e={};e.currenttype=t.catname;t.catpath;var r=this;s.typeTool.queryPropList({catpath:t.catpath,success:function(a){e.list=[];for(var t in a){var s=a[t];"list"==s.proptype?(s.range=s.propdata.split(","),e.list.push(s)):(e.propname=s.propname,e.propdata=s.propdata)}console.log(e),r.setData({currentType:e})}}),s.typeTool.queryBrand({catpath:t.catpath,success:function(a){r.setData({brandlist:a})}})},listChanged:function(a){console.log("----listChanged----");var t=a.currentTarget.dataset.index,e=this.data.currentType,s=e.list[t];s.selectedcat=s.range[a.detail.value],this.setData({currentType:e});var r=[];for(var i in e.list){var n=e.list[i];if("string"==typeof n.selectedcat){var o=n.propname+":"+n.selectedcat;r.push(o)}}this.params.proplist=r.join(";"),console.log(this.params.proplist)},yearChanged:function(a){var t=this.data.yearlist[a.detail.value];this.setData({selectedyear:t}),this.params.madeyear=t},brandChanged:function(a){var t=a.detail.value,e=this.data.brandlist[t];this.params.brandid=e.brandid,this.setData({selectedbrand:e})},addressClick:function(a){var t=this;wx.chooseLocation({success:function(a){t.params.maplat=a.latitude,t.params.maplng=a.longitude,t.params.address=a.name,t.setData({address:a})}})},submit:function(e){Object.assign(this.params,e.detail.value);var s=this;a(this.data.imagelist,function(e){s.params.imagelist=e;var r="";s.data.currenttype&&(r=s.data.currentType.propname),a(s.data.cardlist,function(a){s.params.cardlist=a,t(s)},r)},"设备照片")},textareainput:function(a){this.setData({length:a.detail.value.length})},onShow:function(){this.submitAble=!1},onShareAppMessage:function(){}}); 
 			}); 	require("page/second/publish/publish.js");
 		__wxRoute = 'page/second/user/userInfo';__wxRouteBegin = true; 	define("page/second/user/userInfo.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t){t.setData({loadMoreType:!0}),u.client.request({url:"d=wxapi&c=etp_info_sell&m=info_page",data:{page:l,rows:d,userid:p},success:function(e){f=parseInt(e.data.total);var a=e.data.rows,o=t.data.deviceList;if(1==l&&(o=[]),a.length>0)for(var i=0;i<a.length;++i)a[i].image=u.client.getFileUrl(a[i].image),a[i].dateline=u.util.formatDateTime(a[i].dateline);o=o.concat(a);var n="";u.util.empty(f)?n="暂无更多数据":o.length==f?n="暂无更多数据":o.length<f&&(n="加载更多"),t.setData({deviceList:o,loadMoreType:!1,loadText:n})},fail:function(e){wx.hideLoading(),t.setData({loadMoreType:!1,loadText:"加载失败"})}})}function e(t){u.client.request({url:"d=wxapi&c=common_user&m=profile",data:{userid:p},success:function(e){var a=e.data.userinfo;a.useravatar_middle=u.client.getAvatarUrl(a.useravatar_middle),t.setData({userInfo:a})}})}function a(t){wx.showLoading({title:"加载中..."}),u.client.request({url:"d=wxapi&c=common_user&m=profile",data:{userid:p},success:function(t){wx.hideLoading(),wx.setStorageSync("callPhone",""),wx.makePhoneCall({phoneNumber:t.data.userinfo.usermobile})},fail:function(t){wx.hideLoading(),u.showError("获取电话号码失败")}})}function o(t){u.client.request({url:"d=wxapi&c=etp_user_follow&m=follow_query",data:{touserid:p},success:function(e){var a="object"==c(e.data);t.setData({attention:a})}})}function i(t){wx.showLoading({title:"加载中..."}),u.client.request({url:"d=wxapi&c=etp_info_order&m=order_save",data:{idtype:"userid",idvalue:p},success:function(e){n(t,e)}})}function n(t,e){u.client.request({url:"d=wxapi&c=fee_user&m=pay_create",data:{tradeid:e.data.tradeid,paytype:"weixin"},success:function(a){wx.hideLoading(),console.log(a),s(t,a,e.data.tradeid)}})}function s(t,e,a){wx.requestPayment({timeStamp:e.data.paydata.timeStamp,nonceStr:e.data.paydata.nonceStr,package:e.data.paydata.package,signType:"MD5",paySign:e.data.paydata.paySign,success:function(t){console.log(t),r(a)},fail:function(t){console.log(t),u.client.showError("支付失败")}})}function r(t){u.client.request({url:"d=wxapi&c=fee_user&m=pay_finish",data:{tradeid:t,appresultcode:1},success:function(t){wx.showToast({title:"已获得一次免费拨打电话机会"}),wx.setStorageSync("callPhone","1")}})}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=getApp(),l=1,d=20,f=0,p="";Page({data:{deviceList:[],loadMoreType:!0},onLoad:function(a){p=a.userid,t(this),e(this),o(this)},callPhone:function(t){var e=wx.getStorageSync("callPhone");u.util.empty(e)?(this.setData({showEnterStatus:!0,callPrice:u.callPrice}),u.util.addRecord("click","userid",p)):(a(),u.util.addRecord("call","userid",p))},hiddenCallDialog:function(t){this.setData({showEnterStatus:!1})},payCall:function(t){this.setData({showEnterStatus:!1}),i(this)},goHome:function(t){wx.switchTab({url:"/page/home/index"})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){this.data.deviceList.length<f&&(l++,t(this))},attention:function(t){var e="";e=this.data.attention?"d=wxapi&c=etp_user_follow&m=follow_delete":"d=wxapi&c=etp_user_follow&m=follow_save";var a={touserid:p},o=this;u.client.request({url:e,data:a,success:function(t){o.setData({attention:!o.data.attention})}})},onShareAppMessage:function(t){if(wx.showShareMenu({withShareTicket:!0}),"button"==t.from){var e=t.target.dataset.clicktype;return u.util.empty(e)||this.setData({showEnterStatus:!1}),u.util.addRecord("share","userid",p),{title:"二手机买卖、维修、租赁",path:"/page/buy/user/userInfo?userid="+p,success:function(t){if(!u.util.empty(e)){var o=t.shareTickets;u.util.empty(o)?u.showError("分享到群才有效"):wx.getShareInfo({shareTicket:o[0],success:function(t){u.util.shareResolve(t,this,function(t){t&&a()})}})}}}}}}); 
 			}); 	require("page/second/user/userInfo.js");
 	