function Bs(r,e){
  if ((e==null || e>r.length)) {
    (e = r.length);
  }

  var a=Array(e);
  for (var t=0; t<e; t++) {
    a[t]=r[t];
  }return a
}function ec(r){if (Array.isArray(r)) {
  return r
}}function rc(r){if (Array.isArray(r)) {
  return Bs(r)
}}function ht(r,e){if (!(r instanceof e)) {
  throw new TypeError("Cannot call a class as a function")
}}function tc(r,e){for(var t=0;t<e.length;t++){
  var a=e[t];
  a.enumerable=a.enumerable||false;
  a.configurable=true;

  if ("value"in a) {
    (a.writable = true);
  }

  Object.defineProperty(r,jl(a.key),a);
}}function gt(r,e,t){
  if (e) {
    tc(r.prototype,e);
  }

  Object.defineProperty(r,"prototype",{writable:false});
  return r;
}function kr(r,e){
  var t=typeof Symbol !== "undefined"&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=Xs(r))||e){
  if (t) {
    (r = t);
  }

  var a=0;
  var n=function(){};
  return {s:n,n:function(){return a>=r.length?{done:true}:{done:false,value:r[a++]};},e:function(l){throw l},f:n};
}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
  In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}
  var i;
  var s=true;
  var o=false;
  return {s:function(){t=t.call(r)},n:function(){
    var l=t.next();
    s=l.done;
    return l;
  },e:function(l){
    o=true;
    i=l;
  },f:function(){try{
    if (!s && t.return != null) {
      t.return();
    }
  }finally{if (o) {
    throw i
  }}}};
}function Jl(r,e,t){
  if ((e=jl(e))in r) {
    Object.defineProperty(r,e,{value:t,enumerable:true,configurable:true,writable:true});
  } else {
    r[e]=t;
  }

  return r;
}function ac(r){if (typeof Symbol !== "undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null) {
  return Array.from(r)
}}function nc(r,e){var t=r==null?null:typeof Symbol !== "undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){
  var a;
  var n;
  var i;
  var s;
  var o=[];
  var l=true;
  var u=false;
  try{
    i=(t=t.call(r)).next;

    if (e===0) {if (Object(t)!==t) {
      return;
    }l=false} else {
      for (; !(l=(a=i.call(t)).done)&&(o.push(a.value),o.length!==e); l=true)
        {}
    }
  }catch(v){
    u=true;
    n=v;
  }finally{try{if (!l&&t.return!=null&&(s=t.return(),Object(s)!==s)) {
    return
  }}finally{if (u) {
    throw n
  }}}return o
}}function ic(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Je(r,e){return ec(r)||nc(r,e)||Xs(r,e)||ic()}function mn(r){return rc(r)||ac(r)||Xs(r)||sc()}function oc(r,e){if (typeof r!="object"||!r) {
  return r;
}var t=r[Symbol.toPrimitive];if(t!==void 0){var a=t.call(r,e);if (typeof a!="object") {
  return a;
}throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}function jl(r){var e=oc(r,"string");return typeof e=="symbol"?e:e+""}function ar(r){
  "@babel/helpers - typeof";
  ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
  return ar(r);
}function Xs(r,e){if(r){
  if (typeof r=="string") {
    return Bs(r,e);
  }var t=Object.prototype.toString.call(r).slice(8,-1);

  if (t==="Object"&&r.constructor) {
    (t = r.constructor.name);
  }

  if (t==="Map"||t==="Set") {
    return Array.from(r);
  }

  if (t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) {
    return Bs(r,e);
  }

  return void 0;
}}
var rr=typeof window === "undefined"?null:window;
var To=rr?rr.navigator:null;

if (rr) {
  rr.document;
}

var uc=ar("");
var ev=ar({});
var lc=ar(function(){});
var vc=typeof HTMLElement === "undefined"?"undefined":ar(HTMLElement);
var La=function(e){return e&&e.instanceString&&Ue(e.instanceString)?e.instanceString():null};
var ge=function(e){return e!=null&&ar(e)==uc};
var Ue=function(e){return e!=null&&ar(e)===lc};
var _e=function(e){return!Dr(e)&&(Array.isArray?Array.isArray(e):e!=null&&e instanceof Array)};
var Le=function(e){return e!=null&&ar(e)===ev&&!_e(e)&&e.constructor===Object};
var fc=function(e){return e!=null&&ar(e)===ev};
var ae=function(e){return e!=null&&ar(e)===ar(1)&&!isNaN(e)};
var cc=function(e){return ae(e)&&Math.floor(e)===e};

var bn=function(e){if (vc!=="undefined") {
  return e!=null&&e instanceof HTMLElement
}};

var Dr=function(e){return Ia(e)||rv(e)};
var Ia=function(e){return La(e)==="collection"&&e._private.single};
var rv=function(e){return La(e)==="collection"&&!e._private.single};
var Ys=function(e){return La(e)==="core"};
var tv=function(e){return La(e)==="stylesheet"};
var dc=function(e){return La(e)==="event"};
var ut=function(e){return e==null?true:!!(e===""||e.match(/^\s+$/));};
var hc=function(e){return typeof HTMLElement === "undefined"?false:e instanceof HTMLElement;};
var gc=function(e){return Le(e)&&ae(e.x1)&&ae(e.x2)&&ae(e.y1)&&ae(e.y2)};
var pc=function(e){return fc(e)&&Ue(e.then)};
var yc=function(){return To&&To.userAgent.match(/msie|trident|edge/i);};

var Qt=function(e,t){
  if (!t) {
    (t = function(...args) {
      if (args.length===1) {
        return args[0];
      }if (args.length===0) {
        return"undefined";
      }
      var i=[];
      for (var s=0; s<args.length; s++) {
        i.push(args[s]);
      }return i.join("$")
    });
  }

  var a=function(...args) {
    var i=this;
    var s=args;
    var o;
    var l=t.apply(i,s);
    var u=a.cache;

    if (!(o = u[l])) {
      (o = u[l]=e.apply(i,s));
    }

    return o;
  };
  a.cache={};
  return a;
};

var Zs=Qt(function(r){return r.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()});});
var Mn=Qt(function(r){return r.replace(/(-\w)/g,function(e){return e[1].toUpperCase()});});
var av=Qt(function(r,e){return r+e[0].toUpperCase()+e.substring(1)},function(r,e){return r+"$"+e});
var So=function(e){return ut(e)?e:e.charAt(0).toUpperCase()+e.substring(1)};
var at=function(e,t){return e.slice(-1*t.length)===t};
var tr="(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))";
var mc="rgb[a]?\\(("+tr+"[%]?)\\s*,\\s*("+tr+"[%]?)\\s*,\\s*("+tr+"[%]?)(?:\\s*,\\s*("+tr+"))?\\)";
var bc="rgb[a]?\\((?:"+tr+"[%]?)\\s*,\\s*(?:"+tr+"[%]?)\\s*,\\s*(?:"+tr+"[%]?)(?:\\s*,\\s*(?:"+tr+"))?\\)";
var wc="hsl[a]?\\(("+tr+")\\s*,\\s*("+tr+"[%])\\s*,\\s*("+tr+"[%])(?:\\s*,\\s*("+tr+"))?\\)";
var xc="hsl[a]?\\((?:"+tr+")\\s*,\\s*(?:"+tr+"[%])\\s*,\\s*(?:"+tr+"[%])(?:\\s*,\\s*(?:"+tr+"))?\\)";
var Ec="\\#[0-9a-fA-F]{3}";
var Cc="\\#[0-9a-fA-F]{6}";
var nv=function(e,t){return e<t?-1:e>t?1:0};
var Tc=function(e,t){return-1*nv(e,t)};

var be=Object.assign!=null?Object.assign.bind(Object):function(r){for(var e=arguments,t=1;t<e.length;t++){var a=e[t];if (a!=null) {
  for(var n=Object.keys(a),i=0;i<n.length;i++){var s=n[i];r[s]=a[s]}
}}return r};

var Sc=function(e){if(!(!(e.length===4||e.length===7)||e[0]!=="#")){
  var t=e.length===4;
  var a;
  var n;
  var i;
  var s=16;

  if (t) {
    a=parseInt(e[1]+e[1],s);
    n=parseInt(e[2]+e[2],s);
    i=parseInt(e[3]+e[3],s);
  } else {
    a=parseInt(e[1]+e[2],s);
    n=parseInt(e[3]+e[4],s);
    i=parseInt(e[5]+e[6],s);
  }

  return [a,n,i];
}};

var kc=function(e){
  var t;
  var a;
  var n;
  var i;
  var s;
  var o;
  var l;
  var u;
  function v(d,y,g){
    if (g<0) {
      (g += 1);
    }

    if (g>1) {
      (g -= 1);
    }

    return g<1/6?d+(y-d)*6*g:g<1/2?y:g<2/3?d+(y-d)*(2/3-g)*6:d;
  }var f=new RegExp("^"+wc+"$").exec(e);if(f){
  a=parseInt(f[1]);

  if (a<0) {
    a=(360- -1*a%360)%360;
  } else if (a>360) {
    (a = a%360);
  }

  a/=360;
  n=parseFloat(f[2]);

  if (n<0||n>100||(n=n/100,i=parseFloat(f[3]),i<0||i>100)||(i=i/100,s=f[4],s!==void 0&&(s=parseFloat(s),s<0||s>1))) {
    return;
  }

  if (n===0) {
    o=l=u=Math.round(i*255);
  } else {
    var c=i<0.5/* .5 */?i*(1+n):i+n-i*n;
    var h=2*i-c;
    o=Math.round(255*v(h,c,a+1/3));
    l=Math.round(255*v(h,c,a));
    u=Math.round(255*v(h,c,a-1/3));
  }t=[o,l,u,s]
}return t
};

var Dc=function(e){
  var t;
  var a=new RegExp("^"+mc+"$").exec(e);
  if(a){
    t=[];
    var n=[];
    for(var i=1;i<=3;i++){
      var s=a[i];

      if (s[s.length-1]==="%") {
        (n[i] = true);
      }

      s=parseFloat(s);

      if (n[i]) {
        (s = s/100*255);
      }

      if (s<0||s>255) {
        return;
      }

      t.push(Math.floor(s))
    }
    var o=n[1]||n[2]||n[3];
    var l=n[1]&&n[2]&&n[3];
    if (o&&!l) {
      return;
    }var u=a[4];if(u!==void 0){
      u=parseFloat(u);

      if (u<0||u>1) {
        return;
      }

      t.push(u)
    }
  }return t
};

var Bc=function(e){return Pc[e.toLowerCase()]};
var iv=function(e){return(_e(e)?e:null)||Bc(e)||Sc(e)||Dc(e)||kc(e)};
var Pc={transparent:[0,0,0,0],aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};

var sv=function(e){
  var t=e.map;
  var a=e.keys;
  for(var n=a.length, i=0;i<n;i++){
    var s=a[i];if (Le(s)) {
      throw Error("Tried to set map with object key");
    }

    if (i<a.length-1) {
      t[s]==null&&(t[s]={});
      t=t[s];
    } else {
      t[s]=e.value;
    }
  }
};

var ov=function(e){
  var t=e.map;
  var a=e.keys;
  for(var n=a.length, i=0;i<n;i++){
    var s=a[i];if (Le(s)) {
      throw Error("Tried to get map with object key");
    }
    t=t[s];

    if (t==null) {
      return t
    }
  }return t
};

var Ka=typeof globalThis !== "undefined"?globalThis:typeof window !== "undefined"?window:typeof global !== "undefined"?global:typeof self !== "undefined"?self:{};
function Oa(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}
var Jn;
var ko;
function Na(){
  if (ko) {
    return Jn;
  }ko=1;function r(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}
  Jn=r;
  return Jn;
}
var jn;
var Do;
function Ac(){
  if (Do) {
    return jn;
  }Do=1;var r=typeof Ka=="object"&&Ka&&Ka.Object===Object&&Ka;
  jn=r;
  return jn;
}
var ei;
var Bo;
function Ln(){
  if (Bo) {
    return ei;
  }Bo=1;
  var r=Ac();
  var e=typeof self=="object"&&self&&self.Object===Object&&self;
  var t=r||e||Function("return this")();
  ei=t;
  return ei;
}
var ri;
var Po;
function Rc(){
  if (Po) {
    return ri;
  }Po=1;
  var r=Ln();
  var e=function(){return r.Date.now()};
  ri=e;
  return ri;
}
var ti;
var Ao;
function Mc(){
  if (Ao) {
    return ti;
  }Ao=1;var r=/\s/;function e(t){for (var a=t.length; a--&&r.test(t.charAt(a)); )
    {}return a}
  ti=e;
  return ti;
}
var ai;
var Ro;
function Lc(){
  if (Ro) {
    return ai;
  }Ro=1;
  var r=Mc();
  var e=/^\s+/;
  function t(a){return a&&a.slice(0,r(a)+1).replace(e,"")}
  ai=t;
  return ai;
}
var ni;
var Mo;
function Qs(){
  if (Mo) {
    return ni;
  }Mo=1;
  var r=Ln();
  var e=r.Symbol;
  ni=e;
  return ni;
}
var ii;
var Lo;
function Ic(){
  if (Lo) {
    return ii;
  }Lo=1;
  var r=Qs();
  var e=Object.prototype;
  var t=e.hasOwnProperty;
  var a=e.toString;
  var n=r?r.toStringTag:void 0;
  function i(s){
    var o=t.call(s,n);
    var l=s[n];
    try{s[n]=void 0;var u=true}catch{}var v=a.call(s);

    if (u) {
      if (o) {
        s[n]=l;
      } else {
        delete s[n];
      }
    }

    return v;
  }
  ii=i;
  return ii;
}
var si;
var Io;
function Oc(){
  if (Io) {
    return si;
  }Io=1;
  var r=Object.prototype;
  var e=r.toString;
  function t(a){return e.call(a)}
  si=t;
  return si;
}
var oi;
var Oo;
function uv(){
  if (Oo) {
    return oi;
  }Oo=1;
  var r=Qs();
  var e=Ic();
  var t=Oc();
  var a="[object Null]";
  var n="[object Undefined]";
  var i=r?r.toStringTag:void 0;
  function s(o){return o==null?o===void 0?n:a:i&&i in Object(o)?e(o):t(o)}
  oi=s;
  return oi;
}
var ui;
var No;
function Nc(){
  if (No) {
    return ui;
  }No=1;function r(e){return e!=null&&typeof e=="object"}
  ui=r;
  return ui;
}
var li;
var zo;
function za(){
  if (zo) {
    return li;
  }zo=1;
  var r=uv();
  var e=Nc();
  var t="[object Symbol]";
  function a(n){return typeof n=="symbol"||e(n)&&r(n)==t}
  li=a;
  return li;
}
var vi;
var Fo;
function zc(){
  if (Fo) {
    return vi;
  }Fo=1;
  var r=Lc();
  var e=Na();
  var t=za();
  var a=NaN;
  var n=/^[-+]0x[0-9a-f]+$/i;
  var i=/^0b[01]+$/i;
  var s=/^0o[0-7]+$/i;
  var o=parseInt;
  function l(u){if (typeof u=="number") {
    return u;
  }if (t(u)) {
    return a;
  }if(e(u)){var v=typeof u.valueOf=="function"?u.valueOf():u;u=e(v)?v+"":v}if (typeof u!="string") {
    return u===0?u:+u;
  }u=r(u);var f=i.test(u);return f||s.test(u)?o(u.slice(2),f?2:8):n.test(u)?a:+u}
  vi=l;
  return vi;
}
var fi;
var Vo;
function Fc(...args) {
  if (Vo) {
    return fi;
  }Vo=1;
  var r=Na();
  var e=Rc();
  var t=zc();
  var a="Expected a function";
  var n=Math.max;
  var i=Math.min;
  function s(o,l,u){
    var v;
    var f;
    var c;
    var h;
    var d;
    var y;
    var g=0;
    var p=false;
    var m=false;
    var b=true;
    if (typeof o!="function") {
      throw new TypeError(a);
    }
    l=t(l)||0;

    if (r(u)) {
      p=!!u.leading;
      m="maxWait"in u;
      c=m?n(t(u.maxWait)||0,l):c;
      b="trailing"in u?!!u.trailing:b;
    }

    function w(A){
      var R=v;
      var L=f;
      v = void 0;
      f = void 0;
      g=A;
      h=o.apply(L,R);
      return h;
    }function E(A){
        g=A;
        d=setTimeout(T,l);
        return p?w(A):h;
      }function C(A){
        var R=A-y;
        var L=A-g;
        var I=l-R;
        return m?i(I,c-L):I
      }function x(A){
        var R=A-y;
        var L=A-g;
        return y===void 0||R>=l||R<0||m&&L>=c
      }function T(){var A=e();if (x(A)) {
        return k(A);
      }d=setTimeout(T,C(A))}function k(A){
        d=void 0;
        return b&&v?w(A):(v=f=void 0,h);
      }function D(){
      if (d!==void 0) {
        clearTimeout(d);
      }

      g=0;
      v = void 0;
      y = void 0;
      f = void 0;
      d = void 0;
    }function B(){return d===void 0?h:k(e())}function P(){
      var A=e();
      var R=x(A);
      v=args;
      f=this;
      y=A;

      if (R) {if (d===void 0) {
        return E(y);
      }if (m) {
        clearTimeout(d);
        d=setTimeout(T,l);
        return w(y);
      }}

      if (d===void 0) {
        (d = setTimeout(T,l));
      }

      return h;
    }
    P.cancel=D;
    P.flush=B;
    return P;
  }
  fi=s;
  return fi;
}
var Vc=Fc();
var Fa=Oa(Vc);
var ci=rr?rr.performance:null;
var lv=ci&&ci.now?function(){return ci.now()}:function(){return Date.now()};

var qc=(function(){if(rr){if (rr.requestAnimationFrame) {
  return function(r){rr.requestAnimationFrame(r)};
}if (rr.mozRequestAnimationFrame) {
  return function(r){rr.mozRequestAnimationFrame(r)};
}if (rr.webkitRequestAnimationFrame) {
  return function(r){rr.webkitRequestAnimationFrame(r)};
}if (rr.msRequestAnimationFrame) {
  return function(r){rr.msRequestAnimationFrame(r)}
}}return function(r){
  if (r) {
    setTimeout(function(){r(lv())},1000/* 1e3 *//60);
  }
};})();

var wn=function(e){return qc(e)};
var Yr=lv;
var Tt=9261;
var vv=65599;
var Ht=5381;

var fv=function(e, t = Tt) {
  var a=t;
  for (var n; n=e.next(),!n.done; ) {
    a=a*vv+n.value|0;
  }return a
};

var Ca=function(e, t = Tt) {
  return t*vv+e|0
};
var Ta=function(e, t = Ht) {
  return(t<<5)+t+e|0
};
var _c=function(e,t){return e*2097152+t};
var et=function(e){return e[0]*2097152+e[1]};
var Xa=function(e,t){return[Ca(e[0],t[0]),Ta(e[1],t[1])]};

var qo=function(e,t){
  var a={value:0,done:false};
  var n=0;
  var i=e.length;

  var s={next:function(){
    if (n<i) {
      a.value=e[n++];
    } else {
      a.done=true;
    }

    return a;
  }};

  return fv(s,t)
};

var Dt=function(e,t){
  var a={value:0,done:false};
  var n=0;
  var i=e.length;

  var s={next:function(){
    if (n<i) {
      a.value=e.charCodeAt(n++);
    } else {
      a.done=true;
    }

    return a;
  }};

  return fv(s,t)
};

var cv=function(...args) {return Gc(args);};

var Gc=function(e){
  var t;
  for(var a=0;a<e.length;a++){
    var n=e[a];

    if (a===0) {
      t=Dt(n);
    } else {
      t=Dt(n,t);
    }
  }return t
};

function Hc(r,e,t,a,n){
  var i=n*Math.PI/180;
  var s=Math.cos(i)*(r-t)-Math.sin(i)*(e-a)+t;
  var o=Math.sin(i)*(r-t)+Math.cos(i)*(e-a)+a;
  return{x:s,y:o}
}var Wc=function(e,t,a,n,i,s){return{x:(e-a)*i+a,y:(t-n)*s+n}};function $c(r,e,t){
  if (t===0) {
    return r;
  }
  var a=(e.x1+e.x2)/2;
  var n=(e.y1+e.y2)/2;
  var i=e.w/e.h;
  var s=1/i;
  var o=Hc(r.x,r.y,a,n,t);
  var l=Wc(o.x,o.y,a,n,i,s);
  return{x:l.x,y:l.y}
}
var _o=true;
var Uc=console.warn!=null;
var Kc=console.trace!=null;
var Js=Number.MAX_SAFE_INTEGER||9007199254740991;
var dv=function(){return true;};
var xn=function(){return false;};
var Go=function(){return 0};
var js=function(){};
var $e=function(e){throw new Error(e)};

var hv=function(e){if (e!==void 0) {
  _o=!!e;
} else {
  return _o
}};

var Ve=function(e){
  if (hv()) {
    if (Uc) {
      console.warn(e);
    } else {
      console.log(e);
      Kc&&console.trace();
    }
  }
};
var Xc=function(e){return be({},e)};
var qr=function(e){return e==null?e:_e(e)?e.slice():Le(e)?Xc(e):e};
var Yc=function(e){return e.slice()};

var gv=function(e,t){for (t=e=""; e++<36; t+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-")
  {}return t};

var Zc={};
var pv=function(){return Zc};

var cr=function(e){var t=Object.keys(e);return function(a){
  var n={};
  for(var i=0;i<t.length;i++){
    var s=t[i];
    var o=a?.[s];
    n[s]=o===void 0?e[s]:o
  }return n
};};

var lt=function(e,t,a){for (var n=e.length-1; n>=0; n--) {
  if (e[n]===t) {
    e.splice(n,1);
  }
}};

var eo=function(e){e.splice(0,e.length)};
var Qc=function(e,t){for(var a=0;a<t.length;a++){var n=t[a];e.push(n)}};

var Tr=function(e,t,a){
  if (a) {
    (t = av(a,t));
  }

  return e[t];
};

var Kr=function(e,t,a,n){
  if (a) {
    (t = av(a,t));
  }

  e[t]=n;
};

var Jc=(function(){function r(){
  ht(this,r);
  this._obj={};
}return gt(r,[{key:"set",value:function(t,a){
  this._obj[t]=a;
  return this;
}},{key:"delete",value:function(t){
  this._obj[t]=void 0;
  return this;
}},{key:"clear",value:function(){this._obj={}}},{key:"has",value:function(t){return this._obj[t]!==void 0}},{key:"get",value:function(t){return this._obj[t]}}]);})();

var Xr=typeof Map !== "undefined"?Map:Jc;
var jc="undefined";

var ed=(function(){function r(e){
  ht(this,r);
  this._obj=Object.create(null);
  this.size=0;

  if (e!=null) {
    var t;

    if (e.instanceString!=null&&e.instanceString()===this.instanceString()) {
      t=e.toArray();
    } else {
      t=e;
    }

    for (var a=0; a<t.length; a++) {
      this.add(t[a])
    }
  }
}return gt(r,[{key:"instanceString",value:function(){return"set"}},{key:"add",value:function(t){
  var a=this._obj;

  if (a[t]!==1) {
    a[t]=1;
    this.size++;
  }
}},{key:"delete",value:function(t){
  var a=this._obj;

  if (a[t]===1) {
    a[t]=0;
    this.size--;
  }
}},{key:"clear",value:function(){this._obj=Object.create(null)}},{key:"has",value:function(t){return this._obj[t]===1}},{key:"toArray",value:function(){var t=this;return Object.keys(this._obj).filter(function(a){return t.has(a)})}},{key:"forEach",value:function(t,a){return this.toArray().forEach(t,a)}}]);})();

var ra=(typeof Set === "undefined"?"undefined":ar(Set))!==jc?Set:ed;

var In=function(e, t, a = true) {
  if(e===void 0||t===void 0||!Ys(e)){$e("An element must have a core reference and parameters set");return}var n=t.group;

  if (n==null) {
    if (t.data&&t.data.source!=null&&t.data.target!=null) {
      n="edges";
    } else {
      n="nodes";
    }
  }

  if (n!=="nodes"&&n!=="edges")
    {$e("An element must be of type `nodes` or `edges`; you specified `"+n+"`");return}

  this.length=1;
  this[0]=this;
  var i=this._private={cy:e,single:true,data:t.data||{},position:t.position||{x:0,y:0},autoWidth:void 0,autoHeight:void 0,autoPadding:void 0,compoundBoundsClean:false,listeners:[],group:n,style:{},rstyle:{},styleCxts:[],styleKeys:{},removed:true,selected:!!t.selected,selectable:t.selectable===void 0?true:!!t.selectable,locked:!!t.locked,grabbed:false,grabbable:t.grabbable===void 0?true:!!t.grabbable,pannable:t.pannable===void 0?n==="edges":!!t.pannable,active:false,classes:new ra,animation:{current:[],queue:[]},rscratch:{},scratch:t.scratch||{},edges:[],children:[],parent:t.parent&&t.parent.isNode()?t.parent:null,traversalCache:{},backgrounding:false,bbCache:null,bbCacheShift:{x:0,y:0},bodyBounds:null,overlayBounds:null,labelBounds:{all:null,source:null,target:null,main:null},arrowBounds:{source:null,target:null,"mid-source":null,"mid-target":null}};

  if (i.position.x==null) {
    (i.position.x = 0);
  }

  if (i.position.y==null) {
    (i.position.y = 0);
  }

  if (t.renderedPosition) {
    var s=t.renderedPosition;
    var o=e.pan();
    var l=e.zoom();
    i.position={x:(s.x-o.x)/l,y:(s.y-o.y)/l}
  }

  var u=[];

  if (_e(t.classes)) {
    u=t.classes;
  } else if (ge(t.classes)) {
    (u = t.classes.split(/\s+/));
  }

  for(var v=0,f=u.length;v<f;v++){
    var c=u[v];

    if (c && c !== "") {
      i.classes.add(c);
    }
  }
  this.createEmitter();

  if ((a===void 0 || a)) {
    this.restore();
  }

  var h=t.style||t.css;

  if (h) {
    Ve("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead.");
    this.style(h);
  }
};

var Ho=function(e){
  e={bfs:e.bfs||!e.dfs,dfs:e.dfs||!e.bfs};

  return function(a,n,i){
    var s;

    if (Le(a)&&!Dr(a)) {
      s=a;
      a=s.roots||s.root;
      n=s.visit;
      i=s.directed;
    }

    i=arguments.length===2&&!Ue(n)?n:i;
    n=Ue(n)?n:function(){};
    var o=this._private.cy;
    var u=[];
    var v=[];
    var f={};
    var c={};
    var h={};
    var d=0;
    var y;
    var g=this.byGroup();
    var p=g.nodes;
    var m=g.edges;
    for(var l=a=ge(a)?this.filter(a):a, b=0;b<l.length;b++){
      var w=l[b];
      var E=w.id();

      if (w.isNode()) {
        u.unshift(w);
        e.bfs&&(h[E]=true,v.push(w));
        c[E]=0;
      }
    }for (var C=function(){
             var A=e.bfs?u.shift():u.pop();
             var R=A.id();
             if(e.dfs){
               if (h[R]) {
                 return 0;
               }
               h[R]=true;
               v.push(A);
             }
             var L=c[R];
             var I=f[R];
             var M=I!=null?I.source():null;
             var O=I!=null?I.target():null;
             var V=I==null?void 0:A.same(M)?O[0]:M[0];
             var G;
             G=n(A,I,V,d++,L);

             if (G===true) {
               y=A;
               return 1;
             }

             if (G===false) {
               return 1;
             }for(var N=A.connectedEdges().filter(function(j){return(!i||j.source().same(A))&&m.has(j)}),F=0;F<N.length;F++){
      var U=N[F];
      var Q=U.connectedNodes().filter(function(j){return!j.same(A)&&p.has(j)});
      var K=Q.id();

      if (Q.length!==0&&!h[K]) {
        Q=Q[0];
        u.push(Q);
        e.bfs&&(h[K]=true,v.push(Q));
        f[K]=U;
        c[K]=c[R]+1;
      }
    }
           },x;
           u.length!==0&&(x=C(),!(x!==0&&x===1));
      )
      {}
    var T=o.collection();
    for(var k=0;k<v.length;k++){
      var D=v[k];
      var B=f[D.id()];

      if (B!=null) {
        T.push(B);
      }

      T.push(D);
    }return{path:o.collection(T),found:o.collection(y)}
  };
};

var Sa={breadthFirstSearch:Ho({bfs:true}),depthFirstSearch:Ho({dfs:true})};
Sa.bfs=Sa.breadthFirstSearch;Sa.dfs=Sa.depthFirstSearch;
var on={exports:{}};
var rd=on.exports;
var Wo;
function td(){
  if (!Wo) {
    Wo=1;

    (function(r,e){(function(){
      var t;
      var a;
      var n;
      var i;
      var s;
      var o;
      var l;
      var u;
      var v;
      var f;
      var c;
      var h;
      var d;
      var y;
      var g;
      n=Math.floor;
      f=Math.min;
      a=function(p,m){return p<m?-1:p>m?1:0};

      v=function(p,m,b,w,E){
        var C;

        if (b==null) {
          (b = 0);
        }

        if (E==null) {
          (E = a);
        }

        if (b<0) {
          throw new Error("lo must be non-negative");
        }

        for (w==null&&(w=p.length); b<w; ) {
          C=n((b+w)/2);

          if (E(m,p[C])<0) {
            w=C;
          } else {
            b=C+1;
          }
        }
        Array.prototype.splice.apply(p, [b,b-b].concat(m));
        return m;
      };

      o=function(p,m,b){
        if (b==null) {
          (b = a);
        }

        p.push(m);
        return y(p,0,p.length-1,b);
      };

      s=function(p,m){
        var b;
        var w;

        if (m==null) {
          (m = a);
        }

        b=p.pop();

        if (p.length) {
          w=p[0];
          p[0]=b;
          g(p,0,m);
        } else {
          w=b;
        }

        return w;
      };

      u=function(p,m,b){
        var w;

        if (b==null) {
          (b = a);
        }

        w=p[0];
        p[0]=m;
        g(p,0,b);
        return w;
      };

      l=function(p,m,b){
        var w;

        if (b==null) {
          (b = a);
        }

        if (p.length&&b(p[0],m)<0) {
          w=[p[0],m];
          m=w[0];
          p[0]=w[1];
          g(p,0,b);
        }

        return m;
      };

      i=function(p,m){
        var b;
        var w;
        var E;
        var C;
        var x;
        var T;

        if (m==null) {
          (m = a);
        }

        C=(function(){T=[];for (var k=0,D=n(p.length/2); D >= 0?k<D:k>D; D >= 0?k++:k--) {
          T.push(k);
        }return T}).apply(this).reverse();

        x=[];
        w=0;

        for (E=C.length; w<E; w++) {
          b=C[w];
          x.push(g(p,b,m));
        }

        return x
      };

      d=function(p,m,b){
        var w;

        if (b==null) {
          (b = a);
        }

        w=p.indexOf(m);

        if (w!==-1) {
          y(p,0,w,b);
          return g(p,w,b);
        }
      };

      c=function(p,m,b){
        var w;
        var E;
        var C;
        var x;
        var T;

        if (b==null) {
          (b = a);
        }

        E=p.slice(0,m);

        if (!E.length) {
          return E;
        }

        i(E,b);
        T=p.slice(m);
        C=0;

        for (x=T.length; C<x; C++) {
          w=T[C];
          l(E,w,b);
        }

        return E.sort(b).reverse()
      };

      h=function(p,m,b){
        var w;
        var E;
        var C;
        var x;
        var T;
        var k;
        var D;
        var B;
        var P;

        if (b==null) {
          (b = a);
        }

        if (m*10<=p.length) {
          C=p.slice(0,m).sort(b);

          if (!C.length) {
            return C;
          }

          E=C[C.length-1];
          D=p.slice(m);
          x=0;

          for (k=D.length; x<k; x++) {
            w=D[x];

            if (b(w,E)<0) {
              v(C,w,0,null,b);
              C.pop();
              E=C[C.length-1];
            }
          }

          return C
        }

        i(p,b);
        P=[];
        T=0;

        for (B=f(m,p.length); B >= 0?T<B:T>B; B >= 0?++T:--T) {
          P.push(s(p,b));
        }

        return P
      };

      y=function(p,m,b,w){
        var E;
        var C;
        var x;

        if (w==null) {
          (w = a);
        }

        for (E=p[b]; b>m; ) {
          x=b-1>>1;
          C=p[x];

          if (w(E,C)<0) {
            p[b]=C;
            b=x;
            continue
          }

          break
        }

        return p[b]=E
      };

      g=function(p,m,b){
        var w;
        var E;
        var C;
        var x;
        var T;

        if (b==null) {
          (b = a);
        }

        E=p.length;
        T=m;
        C=p[m];

        for (w=2*m+1; w<E; ) {
          x=w+1;

          if (x<E&&!(b(p[w],p[x])<0)) {
            (w = x);
          }

          p[m]=p[w];
          m=w;
          w=2*m+1;
        }

        p[m]=C;
        return y(p,T,m,b);
      };

      t=(function(){
        p.push=o;
        p.pop=s;
        p.replace=u;
        p.pushpop=l;
        p.heapify=i;
        p.updateItem=d;
        p.nlargest=c;
        p.nsmallest=h;
        function p(m){
          this.cmp=m??a;
          this.nodes=[];
        }
        p.prototype.push=function(m){return o(this.nodes,m,this.cmp)};
        p.prototype.pop=function(){return s(this.nodes,this.cmp)};
        p.prototype.peek=function(){return this.nodes[0]};
        p.prototype.contains=function(m){return this.nodes.indexOf(m)!==-1};
        p.prototype.replace=function(m){return u(this.nodes,m,this.cmp)};
        p.prototype.pushpop=function(m){return l(this.nodes,m,this.cmp)};
        p.prototype.heapify=function(){return i(this.nodes,this.cmp)};
        p.prototype.updateItem=function(m){return d(this.nodes,m,this.cmp)};
        p.prototype.clear=function(){return this.nodes=[]};
        p.prototype.empty=function(){return this.nodes.length===0};
        p.prototype.size=function(){return this.nodes.length};

        p.prototype.clone=function(){
          var m;
          m=new p;
          m.nodes=this.nodes.slice(0);
          return m;
        };

        p.prototype.toArray=function(){return this.nodes.slice(0)};
        p.prototype.insert=p.prototype.push;
        p.prototype.top=p.prototype.peek;
        p.prototype.front=p.prototype.peek;
        p.prototype.has=p.prototype.contains;
        p.prototype.copy=p.prototype.clone;
        return p;
      })();

      (function(p,m){return r.exports=m()})(this,function(){return t});
    }).call(rd)})(on);
  }

  return on.exports;
}
var di;
var $o;
function ad(){
  if (!$o) {
    $o=1;
    di=td();
  }

  return di;
}
var nd=ad();
var Va=Oa(nd);
var id=cr({root:null,weight:function(e){return 1},directed:false});

var sd={dijkstra:function(e){
  if(!Le(e)){var t=arguments;e={root:t[0],weight:t[1],directed:t[2]}}
  var a=id(e);
  var n=a.root;
  var i=a.weight;
  var s=a.directed;
  var o=this;
  var l=i;
  var u=ge(n)?this.filter(n)[0]:n[0];
  var v={};
  var f={};
  var c={};
  var h=this.byGroup();
  var d=h.nodes;
  var y=h.edges;
  y.unmergeBy(function(L){return L.isLoop()});
  var g=function(I){return v[I.id()]};

  var p=function(I,M){
    v[I.id()]=M;
    m.updateItem(I);
  };

  var m=new Va(function(L,I){return g(L)-g(I)});
  for(var b=0;b<d.length;b++){
    var w=d[b];
    v[w.id()]=w.same(u)?0:Infinity;
    m.push(w);
  }

  var E=function(I,M){
    var V=Infinity;
    var G;
    for(var O=(s?I.edgesTo(M):I.edgesWith(M)).intersect(y), N=0;N<O.length;N++){
      var F=O[N];
      var U=l(F);

      if ((U<V || !G)) {
        V=U;
        G=F;
      }
    }return{edge:G,dist:V}
  };

  while (m.size()>0) {
    var C=m.pop();
    var x=g(C);
    var T=C.id();
    c[T]=x;

    if (x!==Infinity) {
      for(var k=C.neighborhood().intersect(d),D=0;D<k.length;D++){
        var B=k[D];
        var P=B.id();
        var A=E(C,B);
        var R=x+A.dist;

        if (R<g(B)) {
          p(B,R);
          f[P]={node:C,edge:A.edge};
        }
      }
    }
  }

  return {distanceTo:function(I){var M=ge(I)?d.filter(I)[0]:I[0];return c[M.id()]},pathTo:function(I){
      var M=ge(I)?d.filter(I)[0]:I[0];
      var O=[];
      var V=M;
      var G=V.id();
      if (M.length>0) {
        for(O.unshift(M);f[G];){
          var N=f[G];
          O.unshift(N.edge);
          O.unshift(N.node);
          V=N.node;
          G=V.id();
        }
      }return o.spawn(O)
    }};
}};

var od={kruskal:function(e){
  e=e||function(b){return 1};
  var t=this.byGroup();
  var a=t.nodes;
  var n=t.edges;
  var s=new Array(i);
  var o=a;

  var l=function(w){for(var E=0;E<s.length;E++){var C=s[E];if (C.has(w)) {
    return E
  }}};

  for (var i=a.length, u=0; u<i; u++) {
    s[u]=this.spawn(a[u]);
  }for(var v=n.sort(function(b,w){return e(b)-e(w)}),f=0;f<v.length;f++){
  var c=v[f];
  var h=c.source()[0];
  var d=c.target()[0];
  var y=l(h);
  var g=l(d);
  var p=s[y];
  var m=s[g];

  if (y!==g) {
    o.merge(c);
    p.merge(m);
    s.splice(g,1);
  }
}return o
}};

var ud=cr({root:null,goal:null,weight:function(e){return 1},heuristic:function(e){return 0},directed:false});

var ld={aStar:function(e){
  var t=this.cy();
  var a=ud(e);
  var n=a.root;
  var i=a.goal;
  var s=a.heuristic;
  var o=a.directed;
  var l=a.weight;
  n=t.collection(n)[0];
  i=t.collection(i)[0];
  var u=n.id();
  var v=i.id();
  var f={};
  var c={};
  var h={};
  var d=new Va(function(G,N){return c[G.id()]-c[N.id()]});
  var y=new ra;
  var g={};
  var p={};

  var m=function(N,F){
    d.push(N);
    y.add(F);
  };

  var b;
  var w;

  var E=function(){
    b=d.pop();
    w=b.id();
    y.delete(w);
  };

  var C=function(N){return y.has(N)};
  m(n,u);
  f[u]=0;
  c[u]=s(n);
  var x=0;

  while (d.size()>0) {
    E();
    x++;

    if (w===v) {for (var T=[],k=i,D=v,B=p[D]; T.unshift(k),B!=null&&T.unshift(B),k=g[D],k!=null; ) {
      D=k.id();
      B=p[D];
    }return {found:true,distance:f[w],path:this.spawn(T),steps:x};}

    h[w]=true;for(var P=b._private.edges,A=0;A<P.length;A++){var R=P[A];if(this.hasElementWithId(R.id())&&!(o&&R.data("source")!==w)){
      var L=R.source();
      var I=R.target();
      var M=L.id()!==w?L:I;
      var O=M.id();
      if(this.hasElementWithId(O)&&!h[O]){
        var V=f[w]+l(R);if(!C(O)){
          f[O]=V;
          c[O]=V+s(M);
          m(M,O);
          g[O]=b;
          p[O]=R;
          continue
        }

        if (V<f[O]) {
          f[O]=V;
          c[O]=V+s(M);
          g[O]=b;
          p[O]=R;
        }
      }
    }}
  }

  return {found:false,distance:void 0,path:void 0,steps:x};
}};

var vd=cr({weight:function(e){return 1},directed:false});

var fd={floydWarshall:function(e){
  var t=this.cy();
  var a=vd(e);
  var n=a.weight;
  var i=a.directed;
  var s=n;
  var o=this.byGroup();
  var l=o.nodes;
  var u=o.edges;
  var v=l.length;
  var c=function(U){return l.indexOf(U)};
  var h=function(U){return l[U]};
  var d=new Array(f);
  for(var f=v*v, y=0;y<f;y++){
    var g=y%v;
    var p=(y-g)/v;

    if (p===g) {
      d[y]=0;
    } else {
      d[y]=Infinity;
    }
  }
  var m=new Array(f);
  var b=new Array(f);
  for(var w=0;w<u.length;w++){
    var E=u[w];
    var C=E.source()[0];
    var x=E.target()[0];
    if(C!==x){
      var T=c(C);
      var k=c(x);
      var D=T*v+k;
      var B=s(E);

      if (d[D]>B) {
        d[D]=B;
        m[D]=k;
        b[D]=E;
      }

      if (!i)
        {
          var P=k*v+T;

          if (!i&&d[P]>B) {
            d[P]=B;
            m[P]=T;
            b[P]=E;
          }
        }
    }
  }for (var A=0; A<v; A++) {
    for (var R=0; R<v; R++) {
      var L=R*v+A;
      for(var I=0;I<v;I++){
        var M=R*v+I;
        var O=A*v+I;

        if (d[L]+d[O]<d[M]) {
          d[M]=d[L]+d[O];
          m[M]=m[L];
        }
      }
    }
  }
  var V=function(U){return(ge(U)?t.filter(U):U)[0]};
  var G=function(U){return c(V(U))};

  var N={distance:function(U,Q){
    var K=G(U);
    var j=G(Q);
    return d[K*v+j]
  },path:function(U,Q){
    var K=G(U);
    var j=G(Q);
    var re=h(K);
    if (K===j) {
      return re.collection();
    }if (m[K*v+j]==null) {
      return t.collection();
    }
    var ne=t.collection();
    var J=K;
    var z;
    for (ne.merge(re); K!==j; ) {
      J=K;
      K=m[K*v+j];
      z=b[J*v+K];
      ne.merge(z);
      ne.merge(h(K));
    }return ne
  }};

  return N
}};

var cd=cr({weight:function(e){return 1},directed:false,root:null});

var dd={bellmanFord:function(e){
  var t=this;
  var a=cd(e);
  var n=a.weight;
  var i=a.directed;
  var s=a.root;
  var o=n;
  var l=this;
  var u=this.cy();
  var v=this.byGroup();
  var f=v.edges;
  var c=v.nodes;
  var h=c.length;
  var d=new Xr;
  var y=false;
  var g=[];
  s=u.collection(s)[0];
  f.unmergeBy(function(Ce){return Ce.isLoop()});
  var p=f.length;

  var m=function(we){
    var ye=d.get(we.id());

    if (!ye) {
      ye={};
      d.set(we.id(),ye);
    }

    return ye;
  };

  var b=function(we){return(ge(we)?u.$(we):we)[0]};
  var w=function(we){return m(b(we)).dist};

  var E=function(we, ye = s) {
    var ie=b(we);
    var de=[];
    var he=ie;

    while (true) {
      if (he==null) {
        return t.spawn();
      }
      var Ee=m(he);
      var pe=Ee.edge;
      var Se=Ee.pred;
      de.unshift(he[0]);

      if (he.same(ye)&&de.length>0) {
        break;
      }

      if (pe!=null) {
        de.unshift(pe);
      }

      he=Se;
    }

    return l.spawn(de)
  };

  for(var C=0;C<h;C++){
    var x=c[C];
    var T=m(x);

    if (x.same(s)) {
      T.dist=0;
    } else {
      T.dist=Infinity;
    }

    T.pred=null;
    T.edge=null;
  }
  var k=false;
  var D=function(we,ye,ie,de,he,Ee){
    var pe=de.dist+Ee;

    if (pe<he.dist&&!ie.same(de.edge)) {
      he.dist=pe;
      he.pred=we;
      he.edge=ie;
      k=true;
    }
  };
  for(var B=1;B<h;B++){k=false;for(var P=0;P<p;P++){
    var A=f[P];
    var R=A.source();
    var L=A.target();
    var I=o(A);
    var M=m(R);
    var O=m(L);
    D(R,L,A,M,O,I);

    if (!i) {
      D(L,R,A,O,M,I);
    }
  }if (!k) {
    break
  }}if (k) {
    var V=[];
    for(var G=0;G<p;G++){
      var N=f[G];
      var F=N.source();
      var U=N.target();
      var Q=o(N);
      var K=m(F).dist;
      var j=m(U).dist;
      if (K+Q<j||!i&&j+Q<K) {
        if (!y) {
          Ve("Graph contains a negative weight cycle for Bellman-Ford");
          y=true;
        }

        if (e.findNegativeWeightCycles!==false) {
          var re=[];

          if (K+Q<j) {
            re.push(F);
          }

          if (!i&&j+Q<K) {
            re.push(U);
          }

          for(var ne=re.length,J=0;J<ne;J++){
            var z=re[J];
            var q=[z];
            q.push(m(z).edge);for (var H=m(z).pred; q.indexOf(H)===-1; ) {
                q.push(H);
                q.push(m(H).edge);
                H=m(H).pred;
              }q=q.slice(q.indexOf(H));
            var Y=q[0].id();
            var te=0;
            for (var ce=2; ce<q.length; ce+=2) {
              if (q[ce].id()<Y) {
                Y=q[ce].id();
                te=ce;
              }
            }
            q=q.slice(te).concat(q.slice(0,te));
            q.push(q[0]);
            var Ae=q.map(function(Ce){return Ce.id()}).join(",");

            if (V.indexOf(Ae)===-1) {
              g.push(l.spawn(q));
              V.push(Ae);
            }
          }
        } else {
          break
        }
      }
    }
  }return{distanceTo:w,pathTo:E,hasNegativeWeightCycle:y,negativeWeightCycles:g}
}};

var hd=Math.sqrt(2);

var gd=function(e,t,a){
  if (a.length===0) {
    $e("Karger-Stein must be run on a connected (sub)graph");
  }

  var n=a[e];
  var i=n[1];
  var s=n[2];
  var o=t[i];
  var l=t[s];
  var u=a;
  for(var v=u.length-1;v>=0;v--){
    var f=u[v];
    var c=f[1];
    var h=f[2];

    if ((t[c]===o&&t[h]===l || t[c]===l&&t[h]===o)) {
      u.splice(v,1);
    }
  }for(var d=0;d<u.length;d++){
    var y=u[d];

    if (y[1]===l) {
      u[d]=y.slice();
      u[d][1]=o;
    } else if (y[2]===l) {
      u[d]=y.slice();
      u[d][2]=o;
    }
  }for (var g=0; g<t.length; g++) {
    if (t[g]===l) {
      (t[g] = o);
    }
  }return u
};

var hi=function(e,t,a,n){
  while (a>n) {
    var i=Math.floor(Math.random()*t.length);
    t=gd(i,e,t);
    a--;
  }

  return t
};

var pd={kargerStein:function(){
  var e=this;
  var t=this.byGroup();
  var a=t.nodes;
  var n=t.edges;
  n.unmergeBy(function(O){return O.isLoop()});
  var i=a.length;
  var s=n.length;
  var o=Math.ceil(Math.pow(Math.log(i)/Math.LN2,2));
  var l=Math.floor(i/hd);
  if(i<2){$e("At least 2 nodes are required for Karger-Stein algorithm");return}
  var u=[];
  for(var v=0;v<s;v++){var f=n[v];u.push([v,a.indexOf(f.source()),a.indexOf(f.target())])}
  var c=Infinity;
  var h=[];
  var d=new Array(i);
  var y=new Array(i);
  var g=new Array(i);

  var p=function(V,G){for (var N=0; N<i; N++) {
    G[N]=V[N]
  }};

  for(var m=0;m<=o;m++){
    for (var b=0; b<i; b++) {
      y[b]=b;
    }
    var w=hi(y,u.slice(),i,l);
    var E=w.slice();
    p(y,g);
    var C=hi(y,w,l,2);
    var x=hi(g,E,l,2);

    if (C.length<=x.length&&C.length<c) {
      c=C.length;
      h=C;
      p(y,d);
    } else if (x.length<=C.length&&x.length<c) {
      c=x.length;
      h=x;
      p(g,d);
    }
  }
  var T=this.spawn(h.map(function(O){return n[O[0]]}));
  var k=this.spawn();
  var D=this.spawn();
  var B=d[0];
  for(var P=0;P<d.length;P++){
    var A=d[P];
    var R=a[P];

    if (A===B) {
      k.merge(R);
    } else {
      D.merge(R);
    }
  }

  var L=function(V){
    var G=e.spawn();

    V.forEach(function(N){
      G.merge(N);
      N.connectedEdges().forEach(function(F){
        if (e.contains(F)&&!T.contains(F)) {
          G.merge(F);
        }
      });
    });

    return G;
  };

  var I=[L(k),L(D)];
  var M={cut:T,components:I,partition1:k,partition2:D};
  return M
}};

var yd=function(e){return{x:e.x,y:e.y}};
var On=function(e,t,a){return{x:e.x*t+a.x,y:e.y*t+a.y}};
var yv=function(e,t,a){return{x:(e.x-a.x)/t,y:(e.y-a.y)/t}};
var Wt=function(e){return{x:e[0],y:e[1]}};

var md=function(e, t = 0) {
  var n=Infinity;
  for(var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:e.length, i=t;i<a;i++){
    var s=e[i];

    if (isFinite(s)) {
      (n = Math.min(s,n));
    }
  }return n
};

var bd=function(e, t = 0) {
  var n=-Infinity;
  for(var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:e.length, i=t;i<a;i++){
    var s=e[i];

    if (isFinite(s)) {
      (n = Math.max(s,n));
    }
  }return n
};

var wd=function(e, t = 0) {
  var n=0;
  var i=0;
  for(var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:e.length, s=t;s<a;s++){
    var o=e[s];

    if (isFinite(o)) {
      n+=o;
      i++;
    }
  }return n/i
};

var xd=function(e, t = 0, a = e.length, n = true, i = true, s = true) {
  if (n) {
    e=e.slice(t,a);
  } else {
    a<e.length&&e.splice(a,e.length-a);
    t>0&&e.splice(0,t);
  }

  var o=0;
  for(var l=e.length-1;l>=0;l--){
    var u=e[l];

    if (s) {
      if (!isFinite(u)) {
        e[l]=-Infinity;
        o++;
      }
    } else {
      e.splice(l,1);
    }
  }

  if (i) {
    e.sort(function(c,h){return c-h});
  }

  var v=e.length;
  var f=Math.floor(v/2);
  return v%2!==0?e[f+1+o]:(e[f-1+o]+e[f+o])/2
};

var Ed=function(e){return Math.PI*e/180};
var Ya=function(e,t){return Math.atan2(t,e)-Math.PI/2};
var ro=Math.log2||function(r){return Math.log(r)/Math.log(2)};
var to=function(e){return e>0?1:e<0?-1:0};
var Bt=function(e,t){return Math.sqrt(Et(e,t))};

var Et=function(e,t){
  var a=t.x-e.x;
  var n=t.y-e.y;
  return a*a+n*n
};

var Cd=function(e){
  var a=0;
  for (var t=e.length, n=0; n<t; n++) {
    a+=e[n];
  }for (var i=0; i<t; i++) {
    e[i]=e[i]/a;
  }return e
};

var sr=function(e,t,a,n){return(1-n)*(1-n)*e+2*(1-n)*n*t+n*n*a};
var Kt=function(e,t,a,n){return{x:sr(e.x,t.x,a.x,n),y:sr(e.y,t.y,a.y,n)}};

var Td=function(e,t,a,n){
  var i={x:t.x-e.x,y:t.y-e.y};
  var s=Bt(e,t);
  var o={x:i.x/s,y:i.y/s};
  a=a??0;
  n=n??a*s;
  return {x:e.x+o.x*n,y:e.y+o.y*n};
};

var ka=function(e,t,a){return Math.max(e,Math.min(a,t))};

var wr=function(e){if (e==null) {
  return {x1:Infinity,y1:Infinity,x2:-Infinity,y2:-Infinity,w:0,h:0};
}if(e.x1!=null&&e.y1!=null){if (e.x2!=null&&e.y2!=null&&e.x2>=e.x1&&e.y2>=e.y1) {
  return{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,w:e.x2-e.x1,h:e.y2-e.y1};
}if (e.w!=null&&e.h!=null&&e.w>=0&&e.h>=0) {
  return{x1:e.x1,y1:e.y1,x2:e.x1+e.w,y2:e.y1+e.h,w:e.w,h:e.h}
}}};

var Sd=function(e){return{x1:e.x1,x2:e.x2,w:e.w,y1:e.y1,y2:e.y2,h:e.h}};

var kd=function(e){
  e.x1=Infinity;
  e.y1=Infinity;
  e.x2=-Infinity;
  e.y2=-Infinity;
  e.w=0;
  e.h=0;
};

var Dd=function(e,t){
  e.x1=Math.min(e.x1,t.x1);
  e.x2=Math.max(e.x2,t.x2);
  e.w=e.x2-e.x1;
  e.y1=Math.min(e.y1,t.y1);
  e.y2=Math.max(e.y2,t.y2);
  e.h=e.y2-e.y1;
};

var mv=function(e,t,a){
  e.x1=Math.min(e.x1,t);
  e.x2=Math.max(e.x2,t);
  e.w=e.x2-e.x1;
  e.y1=Math.min(e.y1,a);
  e.y2=Math.max(e.y2,a);
  e.h=e.y2-e.y1;
};

var un=function(e, t = 0) {
  e.x1-=t;
  e.x2+=t;
  e.y1-=t;
  e.y2+=t;
  e.w=e.x2-e.x1;
  e.h=e.y2-e.y1;
  return e;
};

var ln=function(e, t = [0]) {
  var a;
  var n;
  var i;
  var s;
  if (t.length===1) {
    a=n=i=s=t[0];
  } else if (t.length===2) {
    a=i=t[0];
    s=n=t[1];
  } else if(t.length===4){
    var o=Je(t,4);
    a=o[0];
    n=o[1];
    i=o[2];
    s=o[3];
  }
  e.x1-=s;
  e.x2+=n;
  e.y1-=a;
  e.y2+=i;
  e.w=e.x2-e.x1;
  e.h=e.y2-e.y1;
  return e;
};

var Uo=function(e,t){
  e.x1=t.x1;
  e.y1=t.y1;
  e.x2=t.x2;
  e.y2=t.y2;
  e.w=e.x2-e.x1;
  e.h=e.y2-e.y1;
};

var ao=function(e,t){return!(e.x1>t.x2||t.x1>e.x2||e.x2<t.x1||t.x2<e.x1||e.y2<t.y1||t.y2<e.y1||e.y1>t.y2||t.y1>e.y2)};
var nt=function(e,t,a){return e.x1<=t&&t<=e.x2&&e.y1<=a&&a<=e.y2};
var Ko=function(e,t){return nt(e,t.x,t.y)};
var bv=function(e,t){return nt(e,t.x1,t.y1)&&nt(e,t.x2,t.y2)};
var Bd=Math.hypot ?? function(r,e){return Math.sqrt(r*r+e*e)};
function Pd(r,e){
  if (r.length<3) {
    throw new Error("Need at least 3 vertices");
  }
  var t=function(T,k){return{x:T.x+k.x,y:T.y+k.y}};
  var a=function(T,k){return{x:T.x-k.x,y:T.y-k.y}};
  var n=function(T,k){return{x:T.x*k,y:T.y*k}};
  var i=function(T,k){return T.x*k.y-T.y*k.x};
  var s=function(T){var k=Bd(T.x,T.y);return k===0?{x:0,y:0}:{x:T.x/k,y:T.y/k}};

  var o=function(T){
    var k=0;
    for(var D=0;D<T.length;D++){
      var B=T[D];
      var P=T[(D+1)%T.length];
      k+=B.x*P.y-P.x*B.y
    }return k/2
  };

  var l=function(T,k,D,B){
    var P=a(k,T);
    var A=a(B,D);
    var R=i(P,A);
    if (Math.abs(R)<1e-9) {
      return t(T,n(P,0.5/* .5 */));
    }var L=i(a(D,T),A)/R;return t(T,n(P,L))
  };

  var u=r.map(function(x){return{x:x.x,y:x.y}});

  if (o(u)<0) {
    u.reverse();
  }

  var f=[];
  for(var v=u.length, c=0;c<v;c++){
    var h=u[c];
    var d=u[(c+1)%v];
    var y=a(d,h);
    var g=s({x:y.y,y:-y.x});
    f.push(g)
  }

  var p=f.map(function(x,T){
    var k=t(u[T],n(x,e));
    var D=t(u[(T+1)%v],n(x,e));
    return{p1:k,p2:D}
  });

  var m=[];
  for(var b=0;b<v;b++){
    var w=p[(b-1+v)%v];
    var E=p[b];
    var C=l(w.p1,w.p2,E.p1,E.p2);
    m.push(C)
  }return m
}function Ad(r,e,t,a,n,i){
  var s=Vd(r,e,t,a,n);
  var o=Pd(s,i);
  var l=wr();
  o.forEach(function(u){return mv(l,u.x,u.y)});
  return l;
}

var wv=function(e, t, a, n, i, s, o, l = "auto") {
  var u=l==="auto"?vt(i,s):l;
  var v=i/2;
  var f=s/2;
  u=Math.min(u,v,f);
  var c=u!==v;
  var h=u!==f;
  var d;
  if(c){
    var y=a-v+u-o;
    var g=n-f-o;
    var p=a+v-u+o;
    var m=g;
    d=it(e,t,a,n,y,g,p,m,false);

    if (d.length>0) {
      return d
    }
  }if(h){
      var b=a+v+o;
      var w=n-f+u-o;
      var E=b;
      var C=n+f-u+o;
      d=it(e,t,a,n,b,w,E,C,false);

      if (d.length>0) {
        return d
      }
    }if(c){
      var x=a-v+u-o;
      var T=n+f+o;
      var k=a+v-u+o;
      var D=T;
      d=it(e,t,a,n,x,T,k,D,false);

      if (d.length>0) {
        return d
      }
    }if(h){
      var B=a-v-o;
      var P=n-f+u-o;
      var A=B;
      var R=n+f-u+o;
      d=it(e,t,a,n,B,P,A,R,false);

      if (d.length>0) {
        return d
      }
    }var L;{
      var I=a-v+u;
      var M=n-f+u;
      L=ya(e,t,a,n,I,M,u+o);

      if (L.length>0&&L[0]<=I&&L[1]<=M) {
        return[L[0],L[1]]
      }
    }{
      var O=a+v-u;
      var V=n-f+u;
      L=ya(e,t,a,n,O,V,u+o);

      if (L.length>0&&L[0]>=O&&L[1]<=V) {
        return[L[0],L[1]]
      }
    }{
      var G=a+v-u;
      var N=n+f-u;
      L=ya(e,t,a,n,G,N,u+o);

      if (L.length>0&&L[0]>=G&&L[1]>=N) {
        return[L[0],L[1]]
      }
    }{
      var F=a-v+u;
      var U=n+f-u;
      L=ya(e,t,a,n,F,U,u+o);

      if (L.length>0&&L[0]<=F&&L[1]>=U) {
        return[L[0],L[1]]
      }
    }return[]
};

var Rd=function(e,t,a,n,i,s,o){
  var l=o;
  var u=Math.min(a,i);
  var v=Math.max(a,i);
  var f=Math.min(n,s);
  var c=Math.max(n,s);
  return u-l<=e&&e<=v+l&&f-l<=t&&t<=c+l
};

var Md=function(e,t,a,n,i,s,o,l,u){var v={x1:Math.min(a,o,i)-u,x2:Math.max(a,o,i)+u,y1:Math.min(n,l,s)-u,y2:Math.max(n,l,s)+u};return!(e<v.x1||e>v.x2||t<v.y1||t>v.y2)};

var Ld=function(e,t,a,n){
  a-=n;var i=t*t-4*e*a;if (i<0) {
    return[];
  }
  var s=Math.sqrt(i);
  var o=2*e;
  var l=(-t+s)/o;
  var u=(-t-s)/o;
  return[l,u]
};

var Id=function(e,t,a,n,i){
  var s=0.00001/* 1e-5 */;

  if (e===0) {
    (e = s);
  }

  t/=e;
  a/=e;
  n/=e;
  var o;
  var l;
  var u;
  var v;
  var f;
  var c;
  var h;
  var d;
  l=(3*a-t*t)/9;
  u=-(27*n)+t*(9*a-2*(t*t));
  u/=54;
  o=l*l*l+u*u;
  i[1]=0;
  h=t/3;

  if (o>0) {
    f=u+Math.sqrt(o);
    f=f<0?-Math.pow(-f,1/3):Math.pow(f,1/3);
    c=u-Math.sqrt(o);
    c=c<0?-Math.pow(-c,1/3):Math.pow(c,1/3);
    i[0]=-h+f+c;
    h+=(f+c)/2;
    i[4]=i[2]=-h;
    h=Math.sqrt(3)*(-c+f)/2;
    i[3]=h;
    i[5]=-h;
    return
  }

  i[5] = 0;
  i[3] = 0;

  if (o===0) {
    d=u<0?-Math.pow(-u,1/3):Math.pow(u,1/3);
    i[0]=-h+2*d;
    i[4]=i[2]=-(d+h);
    return
  }

  l=-l;
  v=l*l*l;
  v=Math.acos(u/Math.sqrt(v));
  d=2*Math.sqrt(l);
  i[0]=-h+d*Math.cos(v/3);
  i[2]=-h+d*Math.cos((v+2*Math.PI)/3);
  i[4]=-h+d*Math.cos((v+4*Math.PI)/3);
};

var Od=function(e,t,a,n,i,s,o,l){
  var u=1*a*a-4*a*i+2*a*o+4*i*i-4*i*o+o*o+n*n-4*n*s+2*n*l+4*s*s-4*s*l+l*l;
  var v=9*a*i-3*a*a-3*a*o-6*i*i+3*i*o+9*n*s-3*n*n-3*n*l-6*s*s+3*s*l;
  var f=3*a*a-6*a*i+a*o-a*e+2*i*i+2*i*e-o*e+3*n*n-6*n*s+n*l-n*t+2*s*s+2*s*t-l*t;
  var c=1*a*i-a*a+a*e-i*e+n*s-n*n+n*t-s*t;
  var h=[];
  Id(u,v,f,c,h);
  var d=1e-7;
  var y=[];
  for (var g=0; g<6; g+=2) {
    if (Math.abs(h[g+1])<d&&h[g]>=0&&h[g]<=1) {
      y.push(h[g]);
    }
  }
  y.push(1);
  y.push(0);
  var p=-1;
  var m;
  var b;
  var w;
  for (var E=0; E<y.length; E++) {
    m=Math.pow(1-y[E],2)*a+2*(1-y[E])*y[E]*i+y[E]*y[E]*o;
    b=Math.pow(1-y[E],2)*n+2*(1-y[E])*y[E]*s+y[E]*y[E]*l;
    w=Math.pow(m-e,2)+Math.pow(b-t,2);

    if (p>=0) {
      if (w<p) {
        (p = w);
      }
    } else {
      p=w;
    }
  }return p
};

var Nd=function(e,t,a,n,i,s){
  var o=[e-a,t-n];
  var l=[i-a,s-n];
  var u=l[0]*l[0]+l[1]*l[1];
  var v=o[0]*o[0]+o[1]*o[1];
  var f=o[0]*l[0]+o[1]*l[1];
  var c=f*f/u;
  return f<0?v:c>u?(e-i)*(e-i)+(t-s)*(t-s):v-c
};

var Sr=function(e,t,a){
  var n;
  var i;
  var s;
  var o;
  var l;
  var u=0;
  for (var v=0; v<a.length/2; v++) {
    n=a[v*2];
    i=a[v*2+1];

    if (v+1<a.length/2) {
      s=a[(v+1)*2];
      o=a[(v+1)*2+1];
    } else {
      s=a[(v+1-a.length/2)*2];
      o=a[(v+1-a.length/2)*2+1];
    }

    if (!(n==e&&s==e)) {
      if (n>=e&&e>=s||n<=e&&e<=s) {
        l=(e-n)/(s-n)*(o-i)+i;

        if (l>t) {
          u++;
        }
      } else {
        continue;
      }
    }
  }return u%2!==0
};

var Zr=function(e,t,a,n,i,s,o,l,u){
  var v=new Array(a.length);
  var f;

  if (l[0]!=null) {
    f=Math.atan(l[1]/l[0]);
    l[0]<0?f=f+Math.PI/2:f=-f-Math.PI/2;
  } else {
    f=l;
  }

  var c=Math.cos(-f);
  var h=Math.sin(-f);
  for (var d=0; d<v.length/2; d++) {
    v[d*2]=s/2*(a[d*2]*c-a[d*2+1]*h);
    v[d*2+1]=o/2*(a[d*2+1]*c+a[d*2]*h);
    v[d*2]+=n;
    v[d*2+1]+=i;
  }var y;if (u>0)
      {var g=Cn(v,-u);y=En(g)} else {
      y=v;
    }return Sr(e,t,y)
};

var zd=function(e,t,a,n,i,s,o,l){
  var u=new Array(a.length*2);
  for(var v=0;v<l.length;v++){
    var f=l[v];
    u[v*4+0]=f.startX;
    u[v*4+1]=f.startY;
    u[v*4+2]=f.stopX;
    u[v*4+3]=f.stopY;
    var c=Math.pow(f.cx-e,2)+Math.pow(f.cy-t,2);if (c<=Math.pow(f.radius,2)) {
      return true;
    }
  }return Sr(e,t,u)
};

var En=function(e){
  var t=new Array(e.length/2);
  var a;
  var n;
  var i;
  var s;
  var o;
  var l;
  var u;
  var v;
  for(var f=0;f<e.length/4;f++){
    a=e[f*4];
    n=e[f*4+1];
    i=e[f*4+2];
    s=e[f*4+3];

    if (f<e.length/4-1) {
      o=e[(f+1)*4];
      l=e[(f+1)*4+1];
      u=e[(f+1)*4+2];
      v=e[(f+1)*4+3];
    } else {
      o=e[0];
      l=e[1];
      u=e[2];
      v=e[3];
    }

    var c=it(a,n,i,s,o,l,u,v,true);
    t[f*2]=c[0];
    t[f*2+1]=c[1];
  }return t
};

var Cn=function(e,t){
  var a=new Array(e.length*2);
  var n;
  var i;
  var s;
  var o;
  for(var l=0;l<e.length/2;l++){
    n=e[l*2];
    i=e[l*2+1];

    if (l<e.length/2-1) {
      s=e[(l+1)*2];
      o=e[(l+1)*2+1];
    } else {
      s=e[0];
      o=e[1];
    }

    var u=o-i;
    var v=-(s-n);
    var f=Math.sqrt(u*u+v*v);
    var c=u/f;
    var h=v/f;
    a[l*4]=n+c*t;
    a[l*4+1]=i+h*t;
    a[l*4+2]=s+c*t;
    a[l*4+3]=o+h*t;
  }return a
};

var Fd=function(e,t,a,n,i,s){
  var o=a-e;
  var l=n-t;
  o/=i;
  l/=s;
  var u=Math.sqrt(o*o+l*l);
  var v=u-1;
  if (v<0) {
    return[];
  }var f=v/u;return[(a-e)*f+e,(n-t)*f+t]
};

var kt=function(e,t,a,n,i,s,o){
  e-=i;
  t-=s;
  e/=a/2+o;
  t/=n/2+o;
  return e*e+t*t<=1;
};

var ya=function(e,t,a,n,i,s,o){
  var l=[a-e,n-t];
  var u=[e-i,t-s];
  var v=l[0]*l[0]+l[1]*l[1];
  var f=2*(u[0]*l[0]+u[1]*l[1]);
  var c=u[0]*u[0]+u[1]*u[1]-o*o;
  var h=f*f-4*v*c;
  if (h<0) {
    return[];
  }
  var d=(-f+Math.sqrt(h))/(2*v);
  var y=(-f-Math.sqrt(h))/(2*v);
  var g=Math.min(d,y);
  var p=Math.max(d,y);
  var m=[];

  if (g>=0&&g<=1) {
    m.push(g);
  }

  if (p>=0&&p<=1) {
    m.push(p);
  }

  if (m.length===0) {
    return[];
  }

  var b=m[0]*l[0]+e;
  var w=m[0]*l[1]+t;
  if (m.length>1) {
    if (m[0]==m[1]) {
      return[b,w];
    }
    var E=m[1]*l[0]+e;
    var C=m[1]*l[1]+t;
    return[b,w,E,C]
  } else {
    return[b,w]
  }
};

var pi=function(e,t,a){return t<=e&&e<=a||a<=e&&e<=t?e:e<=t&&t<=a||a<=t&&t<=e?t:a};

var it=function(e,t,a,n,i,s,o,l,u){
  var v=e-i;
  var f=a-e;
  var c=o-i;
  var h=t-s;
  var d=n-t;
  var y=l-s;
  var g=c*h-y*v;
  var p=f*h-d*v;
  var m=y*f-c*d;
  if (m!==0) {
    var b=g/m;
    var w=p/m;
    var E=0.001/* .001 */;
    var C=0-E;
    var x=1+E;

    if (C<=b&&b<=x&&C<=w&&w<=x) {
      return [e+b*f,t+b*d];
    }

    if (u) {
      return [e+b*f,t+b*d];
    }

    return [];
  } else {
    if (g===0||p===0) {
      if (pi(e,a,o)===o) {
        return [o,l];
      }

      if (pi(e,a,i)===i) {
        return [i,s];
      }

      if (pi(i,o,a)===a) {
        return [a,n];
      }

      return [];
    }

    return [];
  }
};

var Vd=function(e,t,a,n,i){
  var s=[];
  var o=n/2;
  var l=i/2;
  var u=t;
  var v=a;
  s.push({x:u+o*e[0],y:v+l*e[1]});for (var f=1; f<e.length/2; f++) {
    s.push({x:u+o*e[f*2],y:v+l*e[f*2+1]});
  }return s
};

var Da=function(e,t,a,n,i,s,o,l){
  var u=[];
  var v;
  var f=new Array(a.length);
  var c=true;

  if (s==null) {
    (c = false);
  }

  var h;if (c) {for (var d=0; d<f.length/2; d++) {
      f[d*2]=a[d*2]*s+n;
      f[d*2+1]=a[d*2+1]*o+i;
    }if (l>0)
      {var y=Cn(f,-l);h=En(y)} else {
      h=f
    }} else {
      h=a;
    }
  var g;
  var p;
  var m;
  var b;
  for (var w=0; w<h.length/2; w++) {
    g=h[w*2];
    p=h[w*2+1];

    if (w<h.length/2-1) {
      m=h[(w+1)*2];
      b=h[(w+1)*2+1];
    } else {
      m=h[0];
      b=h[1];
    }

    v=it(e,t,n,i,g,p,m,b);

    if (v.length!==0) {
      u.push(v[0],v[1]);
    }
  }return u
};

var qd=function(e,t,a,n,i,s,o,l,u){
  var v=[];
  var f;
  var c=new Array(a.length*2);
  u.forEach(function(m,b){
    if (b===0) {
      c[c.length-2]=m.startX;
      c[c.length-1]=m.startY;
    } else {
      c[b*4-2]=m.startX;
      c[b*4-1]=m.startY;
    }

    c[b*4]=m.stopX;
    c[b*4+1]=m.stopY;
    f=ya(e,t,n,i,m.cx,m.cy,m.radius);

    if (f.length!==0) {
      v.push(f[0],f[1]);
    }
  });for (var h=0; h<c.length/4; h++) {
  f=it(e,t,n,i,c[h*4],c[h*4+1],c[h*4+2],c[h*4+3],false);

  if (f.length!==0) {
    v.push(f[0],f[1]);
  }
}if(v.length>2){
    var d=[v[0],v[1]];
    var y=Math.pow(d[0]-e,2)+Math.pow(d[1]-t,2);
    for(var g=1;g<v.length/2;g++){
      var p=Math.pow(v[g*2]-e,2)+Math.pow(v[g*2+1]-t,2);

      if (p<=y) {
        d[0]=v[g*2];
        d[1]=v[g*2+1];
        y=p;
      }
    }return d
  }return v
};

var Za=function(e,t,a){
  var n=[e[0]-t[0],e[1]-t[1]];
  var i=Math.sqrt(n[0]*n[0]+n[1]*n[1]);
  var s=(i-a)/i;

  if (s<0) {
    (s = 0.00001/* 1e-5 */);
  }

  return [t[0]+s*n[0],t[1]+s*n[1]];
};

var br=function(e,t){
  var a=Ps(e,t);
  a=xv(a);
  return a;
};

var xv=function(e){
  var t;
  var a;
  var i=Infinity;
  var s=Infinity;
  var o=-Infinity;
  var l=-Infinity;
  for (var n=e.length/2, u=0; u<n; u++) {
    t=e[2*u];
    a=e[2*u+1];
    i=Math.min(i,t);
    o=Math.max(o,t);
    s=Math.min(s,a);
    l=Math.max(l,a);
  }
  var v=2/(o-i);
  var f=2/(l-s);
  for (var c=0; c<n; c++) {
    t=e[2*c]=e[2*c]*v;
    a=e[2*c+1]=e[2*c+1]*f;
    i=Math.min(i,t);
    o=Math.max(o,t);
    s=Math.min(s,a);
    l=Math.max(l,a);
  }if (s<-1) {
    for (var h=0; h<n; h++) {
      a=e[2*h+1]=e[2*h+1]+(-1-s);
    }
  }return e
};

var Ps=function(e,t){
  var a=1/e*2*Math.PI;
  var n=e%2===0?Math.PI/2+a/2:Math.PI/2;
  n+=t;
  var i=new Array(e*2);
  var s;
  for (var o=0; o<e; o++) {
    s=o*a+n;
    i[2*o]=Math.cos(s);
    i[2*o+1]=Math.sin(-s);
  }return i
};

var vt=function(e,t){return Math.min(e/4,t/4,8)};
var Ev=function(e,t){return Math.min(e/10,t/10,8)};
var no=function(){return 8};
var _d=function(e,t,a){return[e-2*t+a,2*(t-e),e]};
var As=function(e,t){return {heightOffset:Math.min(15,0.05/* .05 */*t),widthOffset:Math.min(100,0.25/* .25 */*e),ctrlPtOffsetPct:0.05/* .05 */};};
function yi(r,e){
  function t(f){
    var c=[];
    for(var h=0;h<f.length;h++){
      var d=f[h];
      var y=f[(h+1)%f.length];
      var g={x:y.x-d.x,y:y.y-d.y};
      var p={x:-g.y,y:g.x};
      var m=Math.sqrt(p.x*p.x+p.y*p.y);
      c.push({x:p.x/m,y:p.y/m})
    }return c
  }function a(f,c){
    var h=Infinity;
    var d=-Infinity;
    var y=kr(f);
    var g;
    try{for(y.s();!(g=y.n()).done;){
      var p=g.value;
      var m=p.x*c.x+p.y*c.y;
      h=Math.min(h,m);
      d=Math.max(d,m);
    }}catch(b){y.e(b)}finally{y.f()}return{min:h,max:d}
  }function n(f,c){return!(f.max<c.min||c.max<f.min)}
  var i=[].concat(mn(t(r)),mn(t(e)));
  var s=kr(i);
  var o;
  try{for(s.s();!(o=s.n()).done;){
    var l=o.value;
    var u=a(r,l);
    var v=a(e,l);
    if (!n(u,v)) {
      return false;
    }
  }}catch(f){s.e(f)}finally{s.f()}return true;
}
var Gd=cr({dampingFactor:0.8/* .8 */,precision:0.000001/* 1e-6 */,iterations:200,weight:function(e){return 1}});

var Hd={pageRank:function(e){
  var t=Gd(e);
  var a=t.dampingFactor;
  var n=t.precision;
  var i=t.iterations;
  var s=t.weight;
  var o=this._private.cy;
  var l=this.byGroup();
  var u=l.nodes;
  var v=l.edges;
  var c=f*f;
  var h=v.length;
  var d=new Array(c);
  var y=new Array(f);
  var g=(1-a)/f;
  for(var f=u.length, p=0;p<f;p++){for(var m=0;m<f;m++){var b=p*f+m;d[b]=0}y[p]=0}for(var w=0;w<h;w++){
    var E=v[w];
    var C=E.data("source");
    var x=E.data("target");
    if(C!==x){
      var T=u.indexOfId(C);
      var k=u.indexOfId(x);
      var D=s(E);
      var B=k*f+T;
      d[B]+=D;
      y[T]+=D;
    }
  }
  var P=1/f+g;
  for (var A=0; A<f; A++) {
    if (y[A]===0) {
      for(var R=0;R<f;R++){var L=R*f+A;d[L]=P}
    } else {
      for(var I=0;I<f;I++){var M=I*f+A;d[M]=d[M]/y[A]+g}
    }
  }
  var O=new Array(f);
  var V=new Array(f);
  var G;
  for (var N=0; N<f; N++) {
    O[N]=1;
  }for(var F=0;F<i;F++){
    for (var U=0; U<f; U++) {
      V[U]=0;
    }for (var Q=0; Q<f; Q++) {
      for(var K=0;K<f;K++){var j=Q*f+K;V[Q]+=d[j]*O[K]}
    }
    Cd(V);
    G=O;
    O=V;
    V=G;
    var re=0;
    for(var ne=0;ne<f;ne++){var J=G[ne]-O[ne];re+=J*J}if (re<n) {
      break
    }
  }var z={rank:function(H){
    H=o.collection(H)[0];
    return O[u.indexOf(H)];
  }};return z
}};

var Xo=cr({root:null,weight:function(e){return 1},directed:false,alpha:0});

var Xt={degreeCentralityNormalized:function(e){
  e=Xo(e);
  var t=this.cy();
  var a=this.nodes();
  var n=a.length;
  if(e.directed){
    var v={};
    var f={};
    var c=0;
    var h=0;
    for(var d=0;d<n;d++){
      var y=a[d];
      var g=y.id();
      e.root=y;var p=this.degreeCentrality(e);

      if (c<p.indegree) {
        (c = p.indegree);
      }

      if (h<p.outdegree) {
        (h = p.outdegree);
      }

      v[g]=p.indegree;
      f[g]=p.outdegree;
    }return{indegree:function(b){return c==0?0:(ge(b)&&(b=t.filter(b)),v[b.id()]/c)},outdegree:function(b){return h===0?0:(ge(b)&&(b=t.filter(b)),f[b.id()]/h)}}
  }else{
    var i={};
    var s=0;
    for(var o=0;o<n;o++){
      var l=a[o];e.root=l;var u=this.degreeCentrality(e);

      if (s<u.degree) {
        (s = u.degree);
      }

      i[l.id()]=u.degree;
    }return{degree:function(b){return s===0?0:(ge(b)&&(b=t.filter(b)),i[b.id()]/s)}}
  }
},degreeCentrality:function(e){
  e=Xo(e);
  var t=this.cy();
  var a=this;
  var n=e;
  var i=n.root;
  var s=n.weight;
  var o=n.directed;
  var l=n.alpha;
  i=t.collection(i)[0];

  if (o) {
    var h=i.connectedEdges();
    var y=h.filter(function(C){return C.source().same(i)&&a.has(C)});
    var g=d.length;
    var p=y.length;
    var m=0;
    var b=0;
    for (var d=h.filter(function(C){return C.target().same(i)&&a.has(C)}), w=0; w<d.length; w++) {
      m+=s(d[w]);
    }for (var E=0; E<y.length; E++) {
      b+=s(y[E]);
    }return{indegree:Math.pow(g,1-l)*Math.pow(m,l),outdegree:Math.pow(p,1-l)*Math.pow(b,l)}
  } else {
    var v=u.length;
    var f=0;
    for (var u=i.connectedEdges().intersection(a), c=0; c<u.length; c++) {
      f+=s(u[c]);
    }return{degree:Math.pow(v,1-l)*Math.pow(f,l)}
  }
}};

Xt.dc=Xt.degreeCentrality;Xt.dcn=Xt.degreeCentralityNormalised=Xt.degreeCentralityNormalized;
var Yo=cr({harmonic:true,weight:function(){return 1},directed:false,root:null});

var Yt={closenessCentralityNormalized:function(e){
  var t=Yo(e);
  var a=t.harmonic;
  var n=t.weight;
  var i=t.directed;
  var s=this.cy();
  var o={};
  var l=0;
  var v=this.floydWarshall({weight:n,directed:i});
  for(var u=this.nodes(), f=0;f<u.length;f++){
    var c=0;
    var h=u[f];
    for (var d=0; d<u.length; d++) {
      if(f!==d){
        var y=v.distance(h,u[d]);

        if (a) {
          c+=1/y;
        } else {
          c+=y;
        }
      }
    }

    if (!a) {
      (c = 1/c);
    }

    if (l<c) {
      (l = c);
    }

    o[h.id()]=c;
  }return{closeness:function(p){return l==0?0:(ge(p)?p=s.filter(p)[0].id():p=p.id(),o[p]/l)}}
},closenessCentrality:function(e){
  var t=Yo(e);
  var a=t.root;
  var n=t.weight;
  var i=t.directed;
  var s=t.harmonic;
  a=this.filter(a)[0];
  var o=this.dijkstra({root:a,weight:n,directed:i});
  var l=0;
  for(var u=this.nodes(), v=0;v<u.length;v++){var f=u[v];if(!f.same(a)){
    var c=o.distanceTo(f);

    if (s) {
      l+=1/c;
    } else {
      l+=c;
    }
  }}return s?l:1/l
}};

Yt.cc=Yt.closenessCentrality;Yt.ccn=Yt.closenessCentralityNormalised=Yt.closenessCentralityNormalized;
var Wd=cr({weight:null,directed:false});

var Rs={betweennessCentrality:function(e){
  var t=Wd(e);
  var a=t.directed;
  var n=t.weight;
  var i=n!=null;
  var s=this.cy();
  var l={};
  var u={};
  var v=0;

  var f={set:function(b,w){
    u[b]=w;

    if (w>v) {
      (v = w);
    }
  },get:function(b){return u[b]}};

  for(var o=this.nodes(), c=0;c<o.length;c++){
    var h=o[c];
    var d=h.id();

    if (a) {
      l[d]=h.outgoers().nodes();
    } else {
      l[d]=h.openNeighborhood().nodes();
    }

    f.set(d,0);
  }

  var y=function(){
    var b=o[g].id();
    var w=[];
    var E={};
    var C={};
    var x={};
    var T=new Va(function(Q,K){return x[Q]-x[K]});
    for(var k=0;k<o.length;k++){
      var D=o[k].id();
      E[D]=[];
      C[D]=0;
      x[D]=Infinity;
    }
    C[b]=1;
    x[b]=0;
    T.push(b);

    while (!T.empty()) {
      var B=T.pop();
      w.push(B);

      if (i) {
        for(var P=0;P<l[B].length;P++){
          var A=l[B][P];
          var R=s.getElementById(B);
          var L=void 0;

          if (R.edgesTo(A).length>0) {
            L=R.edgesTo(A)[0];
          } else {
            L=A.edgesTo(R)[0];
          }

          var I=n(L);
          A=A.id();

          if (x[A]>x[B]+I) {
            x[A]=x[B]+I;
            T.nodes.indexOf(A)<0?T.push(A):T.updateItem(A);
            C[A]=0;
            E[A]=[];
          }

          if (x[A]==x[B]+I) {
            C[A]=C[A]+C[B];
            E[A].push(B);
          }
        }
      } else {
        for(var M=0;M<l[B].length;M++){
          var O=l[B][M].id();

          if (x[O]==Infinity) {
            T.push(O);
            x[O]=x[B]+1;
          }

          if (x[O]==x[B]+1) {
            C[O]=C[O]+C[B];
            E[O].push(B);
          }
        }
      }
    }

    var V={};
    for (var G=0; G<o.length; G++) {
      V[o[G].id()]=0;
    }

    while (w.length>0) {
      for(var N=w.pop(),F=0;F<E[N].length;F++){var U=E[N][F];V[U]=V[U]+C[U]/C[N]*(1+V[N])}

      if (N!=o[g].id()) {
        f.set(N,f.get(N)+V[N]);
      }
    }
  };

  for (var g=0; g<o.length; g++) {
    y();
  }var p={betweenness:function(b){var w=s.collection(b).id();return f.get(w)},betweennessNormalized:function(b){if (v==0) {
    return 0;
  }var w=s.collection(b).id();return f.get(w)/v}};
  p.betweennessNormalised=p.betweennessNormalized;
  return p;
}};

Rs.bc=Rs.betweennessCentrality;
var $d=cr({expandFactor:2,inflateFactor:2,multFactor:1,maxIterations:20,attributes:[function(r){return 1}]});
var Ud=function(e){return $d(e)};

var Kd=function(e,t){
  var a=0;
  for (var n=0; n<t.length; n++) {
    a+=t[n](e);
  }return a
};

var Xd=function(e,t,a){for (var n=0; n<t; n++) {
  e[n*t+n]=a
}};

var Cv=function(e,t){
  var a;
  for(var n=0;n<t;n++){a=0;for (var i=0; i<t; i++) {
    a+=e[i*t+n];
  }for (var s=0; s<t; s++) {
    e[s*t+n]=e[s*t+n]/a
  }}
};

var Yd=function(e,t,a){
  var n=new Array(a*a);
  for(var i=0;i<a;i++){for (var s=0; s<a; s++) {
    n[i*a+s]=0;
  }for (var o=0; o<a; o++) {
    for (var l=0; l<a; l++) {
      n[i*a+l]+=e[i*a+o]*t[o*a+l]
    }
  }}return n
};

var Zd=function(e,t,a){
  var n=e.slice(0);
  for (var i=1; i<a; i++) {
    e=Yd(e,n,t);
  }return e
};

var Qd=function(e,t,a){
  var n=new Array(t*t);
  for (var i=0; i<t*t; i++) {
    n[i]=Math.pow(e[i],a);
  }
  Cv(n,t);
  return n;
};

var Jd=function(e,t,a,n){for(var i=0;i<a;i++){
  var s=Math.round(e[i]*Math.pow(10,n))/Math.pow(10,n);
  var o=Math.round(t[i]*Math.pow(10,n))/Math.pow(10,n);
  if (s!==o) {
    return false;
  }
}return true;};

var jd=function(e,t,a,n){
  var i=[];
  for(var s=0;s<t;s++){
    var o=[];
    for (var l=0; l<t; l++) {
      if (Math.round(e[s*t+l]*1000/* 1e3 */)/1000/* 1e3 */>0) {
        o.push(a[l]);
      }
    }

    if (o.length!==0) {
      i.push(n.collection(o));
    }
  }return i
};

var eh=function(e,t){for (var a=0; a<e.length; a++) {
  if (!t[a]||e[a].id()!==t[a].id()) {
    return false;
  }
}return true;};

var rh=function(e){for (var t=0; t<e.length; t++) {
  for (var a=0; a<e.length; a++) {
    if (t!=a&&eh(e[t],e[a])) {
      e.splice(a,1);
    }
  }
}return e};

var Zo=function(e){
  var a=this.edges();
  var n=this.cy();
  var i=Ud(e);
  var s={};
  for (var t=this.nodes(), o=0; o<t.length; o++) {
    s[t[o].id()]=o;
  }
  var l=t.length;
  var v=new Array(u);
  var f;
  for (var u=l*l, c=0; c<u; c++) {
    v[c]=0;
  }for(var h=0;h<a.length;h++){
    var d=a[h];
    var y=s[d.source().id()];
    var g=s[d.target().id()];
    var p=Kd(d,i.attributes);
    v[y*l+g]+=p;
    v[g*l+y]+=p;
  }
  Xd(v,l,i.multFactor);
  Cv(v,l);
  for (var m=true,b=0; m&&b<i.maxIterations; ) {
    m=false;
    f=Zd(v,l,i.expandFactor);
    v=Qd(f,l,i.inflateFactor);

    if (!Jd(v,f,u,4)) {
      (m = true);
    }

    b++;
  }var w=jd(v,l,t,n);
  w=rh(w);
  return w;
};

var th={markovClustering:Zo,mcl:Zo};
var ah=function(e){return e};
var Tv=function(e,t){return Math.abs(t-e)};
var Qo=function(e,t,a){return e+Tv(t,a)};
var Jo=function(e,t,a){return e+Math.pow(a-t,2)};
var nh=function(e){return Math.sqrt(e)};
var ih=function(e,t,a){return Math.max(e,Tv(t,a))};

var va=function(e, t, a, n, i, s = ah) {
  var o=n;
  var l;
  var u;
  for (var v=0; v<e; v++) {
    l=t(v);
    u=a(v);
    o=i(o,l,u);
  }return s(o)
};

var Jt={euclidean:function(e,t,a){return e>=2?va(e,t,a,0,Jo,nh):va(e,t,a,0,Qo)},squaredEuclidean:function(e,t,a){return va(e,t,a,0,Jo)},manhattan:function(e,t,a){return va(e,t,a,0,Qo)},max:function(e,t,a){return va(e,t,a,-Infinity,ih);}};
Jt["squared-euclidean"]=Jt.squaredEuclidean;Jt.squaredeuclidean=Jt.squaredEuclidean;function Nn(r,e,t,a,n,i){
  var s;

  if (Ue(r)) {
    s=r;
  } else {
    s=Jt[r]||Jt.euclidean;
  }

  return e===0&&Ue(r)?s(n,i):s(e,t,a,n,i);
}
var sh=cr({k:2,m:2,sensitivityThreshold:0.0001/* 1e-4 */,distance:"euclidean",maxIterations:10,attributes:[],testMode:false,testCentroids:null});
var io=function(e){return sh(e)};

var Tn=function(e,t,a,n,i){
  var s=i!=="kMedoids";
  var o=s?function(f){return a[f]}:function(f){return n[f](a)};
  var l=function(c){return n[c](t)};
  var u=a;
  var v=t;
  return Nn(e,n.length,o,l,u,v)
};

var mi=function(e,t,a){
  var i=new Array(n);
  var s=new Array(n);
  var o=new Array(t);
  var l=null;
  for (var n=a.length, u=0; u<n; u++) {
    i[u]=e.min(a[u]).value;
    s[u]=e.max(a[u]).value;
  }for(var v=0;v<t;v++){l=[];for (var f=0; f<n; f++) {
    l[f]=Math.random()*(s[f]-i[f])+i[f];
  }o[v]=l}return o
};

var Sv=function(e,t,a,n,i){
  var s=Infinity;
  var o=0;
  for(var l=0;l<t.length;l++){
    var u=Tn(a,e,t[l],n,i);

    if (u<s) {
      s=u;
      o=l;
    }
  }return o
};

var kv=function(e,t,a){
  var n=[];
  var i=null;
  for (var s=0; s<t.length; s++) {
    i=t[s];

    if (a[i.id()]===e) {
      n.push(i);
    }
  }return n
};

var oh=function(e,t,a){return Math.abs(t-e)<=a};

var uh=function(e,t,a){for (var n=0; n<e.length; n++) {
  for(var i=0;i<e[n].length;i++){var s=Math.abs(e[n][i]-t[n][i]);if (s>a) {
    return false;
  }}
}return true;};

var lh=function(e,t,a){for (var n=0; n<a; n++) {
  if (e===t[n]) {
    return true;
  }
}return false;};

var jo=function(e,t){var a=new Array(t);if (e.length<50) {
  for(var n=0;n<t;n++){for (var i=e[Math.floor(Math.random()*e.length)]; lh(i,a,n); ) {
    i=e[Math.floor(Math.random()*e.length)];
  }a[n]=i}
} else {
  for (var s=0; s<t; s++) {
    a[s]=e[Math.floor(Math.random()*e.length)];
  }
}return a};

var eu=function(e,t,a){
  var n=0;
  for (var i=0; i<t.length; i++) {
    n+=Tn("manhattan",t[i],e,a,"kMedoids");
  }return n
};

var vh=function(e){
  var t=this.cy();
  var a=this.nodes();
  var n=null;
  var i=io(e);
  var s=new Array(i.k);
  var o={};
  var l;

  if (i.testMode) {
    if (typeof i.testCentroids=="number") {
      i.testCentroids;
      l=mi(a,i.k,i.attributes);
    } else if (ar(i.testCentroids)==="object") {
      l=i.testCentroids;
    } else {
      l=mi(a,i.k,i.attributes);
    }
  } else {
    l=mi(a,i.k,i.attributes);
  }

  for(var u=true,v=0;u&&v<i.maxIterations;){for (var f=0; f<a.length; f++) {
      n=a[f];
      o[n.id()]=Sv(n,l,i.distance,i.attributes,"kMeans");
    }u=false;for(var c=0;c<i.k;c++){var h=kv(c,a,o);if(h.length!==0){
      var y=l[c];
      var g=new Array(d);
      var p=new Array(d);
      for(var d=i.attributes.length, m=0;m<d;m++){
        p[m]=0;for (var b=0; b<h.length; b++) {
            n=h[b];
            p[m]+=i.attributes[m](n);
          }
        g[m]=p[m]/h.length;

        if (!oh(g[m],y[m],i.sensitivityThreshold)) {
          (u = true);
        }
      }
      l[c]=g;
      s[c]=t.collection(h);
    }}v++}return s
};

var fh=function(e){
  var t=this.cy();
  var a=this.nodes();
  var n=null;
  var i=io(e);
  var s=new Array(i.k);
  var o;
  var l={};
  var u;
  var v=new Array(i.k);

  if (i.testMode) {
    if (typeof i.testCentroids != "number") {
      if (ar(i.testCentroids)==="object") {
        o=i.testCentroids;
      } else {
        o=jo(a,i.k);
      }
    }
  } else {
    o=jo(a,i.k);
  }

  for(var f=true,c=0;f&&c<i.maxIterations;){for (var h=0; h<a.length; h++) {
      n=a[h];
      l[n.id()]=Sv(n,o,i.distance,i.attributes,"kMedoids");
    }f=false;for(var d=0;d<o.length;d++){var y=kv(d,a,l);if(y.length!==0){v[d]=eu(o[d],y,i.attributes);for (var g=0; g<y.length; g++) {
    u=eu(y[g],y,i.attributes);

    if (u<v[d]) {
      v[d]=u;
      o[d]=y[g];
      f=true;
    }
  }s[d]=t.collection(y)}}c++}return s
};

var ch=function(e,t,a,n,i){
  var s;
  var o;
  for (var l=0; l<t.length; l++) {
    for (var u=0; u<e.length; u++) {
      n[l][u]=Math.pow(a[l][u],i.m);
    }
  }for (var v=0; v<e.length; v++) {
    for(var f=0;f<i.attributes.length;f++){
      s=0;
      o=0;
      for (var c=0; c<t.length; c++) {
        s+=n[c][v]*i.attributes[f](t[c]);
        o+=n[c][v];
      }e[v][f]=s/o
    }
  }
};

var dh=function(e,t,a,n,i){
  for (var s=0; s<e.length; s++) {
    t[s]=e[s].slice();
  }
  var o;
  var l;
  var u;
  var v=2/(i.m-1);
  for (var f=0; f<a.length; f++) {
    for(var c=0;c<n.length;c++){o=0;for (var h=0; h<a.length; h++) {
      l=Tn(i.distance,n[c],a[f],i.attributes,"cmeans");
      u=Tn(i.distance,n[c],a[h],i.attributes,"cmeans");
      o+=Math.pow(l/u,v);
    }e[c][f]=1/o}
  }
};

var hh=function(e,t,a,n){
  for (var i=new Array(a.k),s=0; s<i.length; s++) {
    i[s]=[];
  }
  var o;
  var l;
  for(var u=0;u<t.length;u++){
    o=-Infinity;
    l=-1;
    for (var v=0; v<t[0].length; v++) {
      if (t[u][v]>o) {
        o=t[u][v];
        l=v;
      }
    }i[l].push(e[u])
  }for (var f=0; f<i.length; f++) {
    i[f]=n.collection(i[f]);
  }return i
};

var ru=function(e){
  var t=this.cy();
  var a=this.nodes();
  var n=io(e);
  var i;
  var s;
  var o;
  var l;
  var u;
  l=new Array(a.length);for (var v=0; v<a.length; v++) {
    l[v]=new Array(n.k);
  }o=new Array(a.length);for (var f=0; f<a.length; f++) {
    o[f]=new Array(n.k);
  }for(var c=0;c<a.length;c++){
    var h=0;
    for (var d=0; d<n.k; d++) {
      o[c][d]=Math.random();
      h+=o[c][d];
    }for (var y=0; y<n.k; y++) {
      o[c][y]=o[c][y]/h
    }
  }s=new Array(n.k);for (var g=0; g<n.k; g++) {
    s[g]=new Array(n.attributes.length);
  }u=new Array(a.length);for (var p=0; p<a.length; p++) {
    u[p]=new Array(n.k);
  }for (var m=true,b=0; m&&b<n.maxIterations; ) {
  m=false;
  ch(s,a,o,u,n);
  dh(o,l,s,a,n);

  if (!uh(o,l,n.sensitivityThreshold)) {
    (m = true);
  }

  b++;
}
  i=hh(a,o,n,t);
  return {clusters:i,degreeOfMembership:o};
};

var gh={kMeans:vh,kMedoids:fh,fuzzyCMeans:ru,fcm:ru};
var ph=cr({distance:"euclidean",linkage:"min",mode:"threshold",threshold:Infinity,addDendrogram:false,dendrogramDepth:0,attributes:[]});
var yh={single:"min",complete:"max"};

var mh=function(e){
  var t=ph(e);
  var a=yh[t.linkage];

  if (a!=null) {
    (t.linkage = a);
  }

  return t;
};

var tu=function(e,t,a,n,i){
  var s=0;
  var o=Infinity;
  var l;
  var u=i.attributes;
  var v=function(k,D){return Nn(i.distance,u.length,function(B){return u[B](k)},function(B){return u[B](D)},k,D)};
  for(var f=0;f<e.length;f++){
    var c=e[f].key;
    var h=a[c][n[c]];

    if (h<o) {
      s=c;
      o=h;
    }
  }if (i.mode==="threshold"&&o>=i.threshold||i.mode==="dendrogram"&&e.length===1) {
      return false;
    }
  var d=t[s];
  var y=t[n[s]];
  var g;

  if (i.mode==="dendrogram") {
    g={left:d,right:y,key:d.key};
  } else {
    g={value:d.value.concat(y.value),key:d.key};
  }

  e[d.index]=g;
  e.splice(y.index,1);
  t[d.key]=g;
  for(var p=0;p<e.length;p++){
    var m=e[p];

    if (d.key===m.key) {
      l=Infinity;
    } else if (i.linkage==="min") {
      l=a[d.key][m.key];
      a[d.key][m.key]>a[y.key][m.key]&&(l=a[y.key][m.key]);
    } else if (i.linkage==="max") {
      l=a[d.key][m.key];
      a[d.key][m.key]<a[y.key][m.key]&&(l=a[y.key][m.key]);
    } else if (i.linkage==="mean") {
      l=(a[d.key][m.key]*d.size+a[y.key][m.key]*y.size)/(d.size+y.size);
    } else if (i.mode==="dendrogram") {
      l=v(m.value,d.value);
    } else {
      l=v(m.value[0],d.value[0]);
    }

    a[d.key][m.key] = l;
    a[m.key][d.key] = l;
  }for(var b=0;b<e.length;b++){var w=e[b].key;if(n[w]===d.key||n[w]===y.key){
      var E=w;
      for(var C=0;C<e.length;C++){
        var x=e[C].key;

        if (a[w][x]<a[w][E]) {
          (E = x);
        }
      }n[w]=E
    }e[b].index=b}
  d.key = null;
  y.key = null;
  d.index = null;
  y.index = null;
  return true;
};

var $t=function(e,t,a){
  if (e) {
    if (e.value) {
      t.push(e.value);
    } else {
      e.left&&$t(e.left,t);
      e.right&&$t(e.right,t);
    }
  }
};

var Ms=function(e,t){if (!e) {
  return"";
}if(e.left&&e.right){
  var a=Ms(e.left,t);
  var n=Ms(e.right,t);
  var i=t.add({group:"nodes",data:{id:a+","+n}});
  t.add({group:"edges",data:{source:a,target:i.id()}});
  t.add({group:"edges",data:{source:n,target:i.id()}});
  return i.id();
}else if (e.value) {
  return e.value.id()
}};

var Ls=function(e,t,a){
  if (!e) {
    return[];
  }
  var n=[];
  var i=[];
  var s=[];

  if (t===0) {
    e.left&&$t(e.left,n);
    e.right&&$t(e.right,i);
    s=n.concat(i);
    return [a.collection(s)];
  }

  if (t===1) {
    if (e.value) {
      return [a.collection(e.value)];
    }

    e.left&&$t(e.left,n);
    e.right&&$t(e.right,i);
    return [a.collection(n),a.collection(i)];
  }

  if (e.value) {
    return [a.collection(e.value)];
  }

  e.left&&(n=Ls(e.left,t-1,a));
  e.right&&(i=Ls(e.right,t-1,a));
  return n.concat(i);
};

var au=function(e){
  var t=this.cy();
  var n=mh(e);
  var i=n.attributes;
  var s=function(b,w){return Nn(n.distance,i.length,function(E){return i[E](b)},function(E){return i[E](w)},b,w)};
  var o=[];
  var l=[];
  var u=[];
  var v=[];
  for(var a=this.nodes(), f=0;f<a.length;f++){
    var c={value:n.mode==="dendrogram"?a[f]:[a[f]],key:f,index:f};
    o[f]=c;
    v[f]=c;
    l[f]=[];
    u[f]=0;
  }for (var h=0; h<o.length; h++) {
      for(var d=0;d<=h;d++){
        var y=void 0;

        if (n.mode==="dendrogram") {
          y=h===d?Infinity:s(o[h].value,o[d].value);
        } else {
          y=h===d?Infinity:s(o[h].value[0],o[d].value[0]);
        }

        l[h][d]=y;
        l[d][h]=y;

        if (y<l[h][u[h]]) {
          (u[h] = d);
        }
      }
    }
  var g=tu(o,v,l,u,n);

  while (g) {
    g=tu(o,v,l,u,n);
  }

  var p;

  if (n.mode==="dendrogram") {
    p=Ls(o[0],n.dendrogramDepth,t);
    n.addDendrogram&&Ms(o[0],t);
  } else {
    p=new Array(o.length);

    o.forEach(function(m,b){
      m.key = null;
      m.index = null;
      p[b]=t.collection(m.value);
    });
  }

  return p;
};

var bh={hierarchicalClustering:au,hca:au};
var wh=cr({distance:"euclidean",preference:"median",damping:0.8/* .8 */,maxIterations:1000/* 1e3 */,minIterations:100,attributes:[]});

var xh=function(e){
  var t=e.damping;
  var a=e.preference;

  if (t < 0.5/* .5 */ || t >= 1) {
    $e(`Damping must range on [0.5, 1).  Got: ${t}`);
  }

  var n=["median","mean","min","max"];

  if (!n.some(function(i){return i===a}) && !ae(a)) {
    $e(`Preference must be one of [${n.map(function(i){return"'".concat(i,"'")}).join(", ")}] or a number.  Got: ${a}`);
  }

  return wh(e);
};

var Eh=function(e,t,a,n){var i=function(o,l){return n[l](o)};return-Nn(e,n.length,function(s){return i(t,s)},function(s){return i(a,s)},t,a)};

var Ch=function(e,t){
  var a=null;

  switch (t) {
  case "median":
    a=xd(e);
    break;
  case "mean":
    a=wd(e);
    break;
  case "min":
    a=md(e);
    break;
  case "max":
    a=bd(e);
    break;
  default:
    a=t;
    break;
  }

  return a;
};

var Th=function(e,t,a){
  var n=[];
  for (var i=0; i<e; i++) {
    if (t[i*e+i]+a[i*e+i]>0) {
      n.push(i);
    }
  }return n
};

var nu=function(e,t,a){
  var n=[];
  for(var i=0;i<e;i++){
    var s=-1;
    var o=-Infinity;
    for(var l=0;l<a.length;l++){
      var u=a[l];

      if (t[i*e+u]>o) {
        s=u;
        o=t[i*e+u];
      }
    }

    if (s>0) {
      n.push(s);
    }
  }for (var v=0; v<a.length; v++) {
    n[a[v]]=a[v];
  }return n
};

var Sh=function(e,t,a){
  var n=nu(e,t,a);
  for(var i=0;i<a.length;i++){
    var s=[];
    for (var o=0; o<n.length; o++) {
      if (n[o]===a[i]) {
        s.push(o);
      }
    }
    var l=-1;
    var u=-Infinity;
    for(var v=0;v<s.length;v++){
      var f=0;
      for (var c=0; c<s.length; c++) {
        f+=t[s[c]*e+s[v]];
      }

      if (f>u) {
        l=v;
        u=f;
      }
    }a[i]=s[l]
  }
  n=nu(e,t,a);
  return n;
};

var iu=function(e){
  var t=this.cy();
  var n=xh(e);
  var i={};
  for (var a=this.nodes(), s=0; s<a.length; s++) {
    i[a[s].id()]=s;
  }
  var o;
  var l;
  var u;
  var v;
  var f;
  var c;
  o=a.length;
  l=o*o;
  u=new Array(l);
  for (var h=0; h<l; h++) {
    u[h]=-Infinity;
  }for (var d=0; d<o; d++) {
    for (var y=0; y<o; y++) {
      if (d!==y) {
        (u[d*o+y] = Eh(n.distance,a[d],a[y],n.attributes));
      }
    }
  }v=Ch(u,n.preference);for (var g=0; g<o; g++) {
    u[g*o+g]=v;
  }f=new Array(l);for (var p=0; p<l; p++) {
    f[p]=0;
  }c=new Array(l);for (var m=0; m<l; m++) {
    c[m]=0;
  }
  var b=new Array(o);
  var w=new Array(o);
  var E=new Array(o);
  for (var C=0; C<o; C++) {
    b[C]=0;
    w[C]=0;
    E[C]=0;
  }for (var x=new Array(o*n.minIterations),T=0; T<x.length; T++) {
    x[T]=0;
  }var k;for(k=0;k<n.maxIterations;k++){
    for(var D=0;D<o;D++){
      var B=-Infinity;
      var P=-Infinity;
      var A=-1;
      var R=0;
      for (var L=0; L<o; L++) {
        b[L]=f[D*o+L];
        R=c[D*o+L]+u[D*o+L];

        if (R>=B) {
          P=B;
          B=R;
          A=L;
        } else if (R>P) {
          (P = R);
        }
      }for (var I=0; I<o; I++) {
        f[D*o+I]=(1-n.damping)*(u[D*o+I]-B)+n.damping*b[I];
      }f[D*o+A]=(1-n.damping)*(u[D*o+A]-P)+n.damping*b[A]
    }for(var M=0;M<o;M++){
      var O=0;
      for (var V=0; V<o; V++) {
        b[V]=c[V*o+M];
        w[V]=Math.max(0,f[V*o+M]);
        O+=w[V];
      }
      O-=w[M];
      w[M]=f[M*o+M];
      O+=w[M];
      for (var G=0; G<o; G++) {
        c[G*o+M]=(1-n.damping)*Math.min(0,O-w[G])+n.damping*b[G];
      }c[M*o+M]=(1-n.damping)*(O-w[M])+n.damping*b[M]
    }
    var N=0;
    for(var F=0;F<o;F++){
      var U=c[F*o+F]+f[F*o+F]>0?1:0;
      x[k%n.minIterations*o+F]=U;
      N+=U;
    }if(N>0&&(k>=n.minIterations-1||k==n.maxIterations-1)){
      var Q=0;
      for(var K=0;K<o;K++){
        E[K]=0;for (var j=0; j<n.minIterations; j++) {
          E[K]+=x[j*o+K];
        }

        if ((E[K]===0 || E[K]===n.minIterations)) {
          Q++;
        }
      }if (Q===o) {
        break
      }
    }
  }
  var ne=Sh(o,u,re);
  var J={};
  for (var re=Th(o,f,c), z=0; z<re.length; z++) {
    J[re[z]]=[];
  }for(var q=0;q<a.length;q++){
  var H=i[a[q].id()];
  var Y=ne[H];

  if (Y!=null) {
    J[Y].push(a[q]);
  }
}
  var te=new Array(re.length);
  for (var ce=0; ce<re.length; ce++) {
    te[ce]=t.collection(J[re[ce]]);
  }return te
};

var kh={affinityPropagation:iu,ap:iu};
var Dh=cr({root:void 0,directed:false});

var Bh={hierholzer:function(e){
  if(!Le(e)){var t=arguments;e={root:t[0],directed:t[1]}}
  var a=Dh(e);
  var n=a.root;
  var i=a.directed;
  var s=this;
  var o=false;
  var l;
  var u;
  var v;

  if (n) {
    (v = ge(n)?this.filter(n)[0].id():n[0].id());
  }

  var f={};
  var c={};

  if (i) {
    s.forEach(function(m){var b=m.id();if (m.isNode()) {
      var w=m.indegree(true);
      var E=m.outdegree(true);
      var C=w-E;
      var x=E-w;

      if (C==1) {
        if (l) {
          o=true;
        } else {
          l=b;
        }
      } else if (x==1) {
        if (u) {
          o=true;
        } else {
          u=b;
        }
      } else if ((x>1 || C>1)) {
        (o = true);
      }

      f[b]=[];
      m.outgoers().forEach(function(T){
        if (T.isEdge()) {
          f[b].push(T.id());
        }
      });
    } else {
      c[b]=[void 0,m.target().id()]
    }});
  } else {
    s.forEach(function(m){var b=m.id();if (m.isNode()) {
      var w=m.degree(true);

      if (w%2) {
        if (l) {
          if (u) {
            o=true;
          } else {
            u=b;
          }
        } else {
          l=b;
        }
      }

      f[b]=[];
      m.connectedEdges().forEach(function(E){return f[b].push(E.id())});
    } else {
      c[b]=[m.source().id(),m.target().id()]
    }});
  }

  var h={found:false,trail:void 0};if (o) {
      return h;
    }if (u&&l) {
      if(i){if (v&&u!=v) {
        return h;
      }v=u}else{
        if (v&&u!=v&&l!=v) {
          return h;
        }

        if (!v) {
          (v = u);
        }
      }
    } else {
    if (!v) {
      (v = s[0].id());
    }
  }

  var d=function(b){
    var E=[b];
    var C;
    var x;
    var T;
    for (var w=b; f[w].length; ) {
      C=f[w].shift();
      x=c[C][0];
      T=c[C][1];

      if (w!=T) {
        f[T]=f[T].filter(function(k){return k!=C});
        w=T;
      } else if (!i&&w!=x) {
        f[x]=f[x].filter(function(k){return k!=C});
        w=x;
      }

      E.unshift(C);
      E.unshift(w);
    }return E
  };

  var y=[];
  var g=[];
  for (g=d(v); g.length!=1; ) {
    if (f[g[0]].length==0) {
      y.unshift(s.getElementById(g.shift()));
      y.unshift(s.getElementById(g.shift()));
    } else {
      g=d(g.shift()).concat(g);
    }
  }y.unshift(s.getElementById(g.shift()));for (var p in f) {
      if (f[p].length) {
        return h;
      }
    }
  h.found=true;
  h.trail=this.spawn(y,true);
  return h;
}};

var Qa=function(){
  var e=this;
  var t={};
  var a=0;
  var n=0;
  var i=[];
  var s=[];
  var o={};

  var l=function(c,h){
    var g=e.spawn();
    for (var d=s.length-1, y=[]; s[d].x!=c||s[d].y!=h; ) {
      y.push(s.pop().edge);
      d--;
    }
    y.push(s.pop().edge);

    y.forEach(function(p){
      var m=p.connectedNodes().intersection(e);
      g.merge(p);

      m.forEach(function(b){
        var w=b.id();
        var E=b.connectedEdges().intersection(e);
        g.merge(b);

        if (t[w].cutVertex) {
          g.merge(E.filter(function(C){return C.isLoop()}));
        } else {
          g.merge(E);
        }
      });
    });

    i.push(g);
  };

  var u=function(c,h,d){
    if (c===d) {
      (n += 1);
    }

    t[h]={id:a,low:a++,cutVertex:false};
    var y=e.getElementById(h).connectedEdges().intersection(e);if (y.size()===0) {
        i.push(e.spawn(e.getElementById(h)));
      } else {
        var g;
        var p;
        var m;
        var b;
        y.forEach(function(w){
          g=w.source().id();
          p=w.target().id();
          m=g===h?p:g;

          if (m!==d) {
            b=w.id();
            o[b]||(o[b]=true,s.push({x:h,y:m,edge:w}));
            m in t?t[h].low=Math.min(t[h].low,t[m].id):(u(c,m,h),t[h].low=Math.min(t[h].low,t[m].low),t[h].id<=t[m].low&&(t[h].cutVertex=true,l(h,m)));
          }
        })
      }
  };

  e.forEach(function(f){if(f.isNode()){
    var c=f.id();

    if (c in t) {
      n=0;
      u(c,c);
      t[c].cutVertex=n>1;
    }
  }});var v=Object.keys(t).filter(function(f){return t[f].cutVertex}).map(function(f){return e.getElementById(f)});return{cut:e.spawn(v),components:i}
};

var Ph={hopcroftTarjanBiconnected:Qa,htbc:Qa,htb:Qa,hopcroftTarjanBiconnectedComponents:Qa};

var Ja=function(){
  var e=this;
  var t={};
  var a=0;
  var n=[];
  var i=[];
  var s=e.spawn(e);

  var o=function(u){
    i.push(u);
    t[u]={index:a,low:a++,explored:false};
    var v=e.getElementById(u).connectedEdges().intersection(e);
    v.forEach(function(y){
      var g=y.target().id();

      if (g!==u) {
        g in t||o(g);
        t[g].explored||(t[u].low=Math.min(t[u].low,t[g].low));
      }
    });

    if (t[u].index===t[u].low) {
      var f=e.spawn();

      while (true) {
        var c=i.pop();
        f.merge(e.getElementById(c));
        t[c].low=t[u].index;
        t[c].explored=true;

        if (c===u) {
          break
        }
      }

      var h=f.edgesWith(f);
      var d=f.merge(h);
      n.push(d);
      s=s.difference(d);
    }
  };

  e.forEach(function(l){if(l.isNode()){
    var u=l.id();

    if (u in t) {
      o(u);
    }
  }});
  return {cut:s,components:n};
};

var Ah={tarjanStronglyConnected:Ja,tsc:Ja,tscc:Ja,tarjanStronglyConnectedComponents:Ja};
var Dv={};
[Sa,sd,od,ld,fd,dd,pd,Hd,Xt,Yt,Rs,th,gh,bh,kh,Bh,Ph,Ah].forEach(function(r){be(Dv,r)});

/*!
Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
Licensed under The MIT License (http://opensource.org/licenses/MIT)
*/var Bv=0;

var Pv=1;
var Av=2;

var Nr=function(e){
  if (!(this instanceof Nr)) {
    return new Nr(e);
  }
  this.id="Thenable/1.0.7";
  this.state=Bv;
  this.fulfillValue=void 0;
  this.rejectReason=void 0;
  this.onFulfilled=[];
  this.onRejected=[];
  this.proxy={then:this.then.bind(this)};

  if (typeof e=="function") {
    e.call(this,this.fulfill.bind(this),this.reject.bind(this));
  }
};

Nr.prototype={fulfill:function(e){return su(this,Pv,"fulfillValue",e)},reject:function(e){return su(this,Av,"rejectReason",e)},then:function(e,t){
  var a=this;
  var n=new Nr;
  a.onFulfilled.push(uu(e,n,"fulfill"));
  a.onRejected.push(uu(t,n,"reject"));
  Rv(a);
  return n.proxy;
}};

var su=function(e,t,a,n){
  if (e.state===Bv) {
    e.state=t;
    e[a]=n;
    Rv(e);
  }

  return e;
};

var Rv=function(e){
  if (e.state===Pv) {
    ou(e,"onFulfilled",e.fulfillValue);
  } else if (e.state===Av) {
    ou(e,"onRejected",e.rejectReason);
  }
};

var ou=function(e,t,a){if(e[t].length!==0){
  var n=e[t];e[t]=[];var i=function(){for (var o=0; o<n.length; o++) {
    n[o](a)
  }};

  if (typeof setImmediate=="function") {
    setImmediate(i);
  } else {
    setTimeout(i,0);
  }
}};

var uu=function(e,t,a){return function(n){if (typeof e!="function") {
  t[a].call(t,n);
} else
  {var i;try{i=e(n)}catch(s){t.reject(s);return}Mv(t,i)}};};

var Mv=function(e,t){if(e===t||e.proxy===t){e.reject(new TypeError("cannot resolve promise with itself"));return}var a;if (ar(t)==="object"&&t!==null||typeof t=="function") {
  try{a=t.then}catch(i){e.reject(i);return}
}if(typeof a=="function"){var n=false;try{a.call(t,function(i){
  if (!n) {
    n=true;
    i===t?e.reject(new TypeError("circular thenable chain")):Mv(e,i);
  }
},function(i){
  if (!n) {
    n=true;
    e.reject(i);
  }
})}catch(i){
  if (!n) {
    e.reject(i);
  }
}return}e.fulfill(t)};

Nr.all=function(r){return new Nr(function(e,t){
  var a=new Array(r.length);
  var n=0;

  var i=function(l,u){
    a[l]=u;
    n++;

    if (n===r.length) {
      e(a);
    }
  };

  for (var s=0; s<r.length; s++) {
    (function(o){
      var l=r[o];
      var u=l!=null&&l.then!=null;
      if (u) {
        l.then(function(f){i(o,f)},function(f){t(f)});
      } else
        {var v=l;i(o,v)}
    })(s)
  }
});};Nr.resolve=function(r){return new Nr(function(e,t){e(r)})};Nr.reject=function(r){return new Nr(function(e,t){t(r)})};
var ta=typeof Promise !== "undefined"?Promise:Nr;

var Is=function(e,t,a){
  var n=Ys(e);
  var i=!n;
  var s=this._private=be({duration:1000/* 1e3 */},t,a);
  s.target=e;
  s.style=s.style||s.css;
  s.started=false;
  s.playing=false;
  s.hooked=false;
  s.applying=false;
  s.progress=0;
  s.completes=[];
  s.frames=[];

  if (s.complete&&Ue(s.complete)) {
    s.completes.push(s.complete);
  }

  if (i) {
    var o=e.position();
    s.startPosition=s.startPosition||{x:o.x,y:o.y};
    s.startStyle=s.startStyle||e.cy().style().getAnimationStartStyle(e,s.style);
  }

  if(n){
    var l=e.pan();
    s.startPan={x:l.x,y:l.y};
    s.startZoom=e.zoom();
  }
  this.length=1;
  this[0]=this;
};

var Pt=Is.prototype;
be(Pt,{instanceString:function(){return"animation"},hook:function(){var e=this._private;if(!e.hooked){
  var t;
  var a=e.target._private.animation;

  if (e.queue) {
    t=a.queue;
  } else {
    t=a.current;
  }

  t.push(this);

  if (Dr(e.target)) {
    e.target.cy().addToAnimationPool(e.target);
  }

  e.hooked=true;
}return this},play:function(){
  var e=this._private;

  if (e.progress===1) {
    (e.progress = 0);
  }

  e.playing=true;
  e.started=false;
  e.stopped=false;
  this.hook();
  return this;
},playing:function(){return this._private.playing},apply:function(){
  var e=this._private;
  e.applying=true;
  e.started=false;
  e.stopped=false;
  this.hook();
  return this;
},applying:function(){return this._private.applying},pause:function(){
  var e=this._private;
  e.playing=false;
  e.started=false;
  return this;
},stop:function(){
  var e=this._private;
  e.playing=false;
  e.started=false;
  e.stopped=true;
  return this;
},rewind:function(){return this.progress(0)},fastforward:function(){return this.progress(1)},time:function(e){var t=this._private;return e===void 0?t.progress*t.duration:this.progress(e/t.duration)},progress:function(e){
  var t=this._private;
  var a=t.playing;
  return e===void 0?t.progress:(a&&this.pause(),t.progress=e,t.started=false,a&&this.play(),this);
},completed:function(){return this._private.progress===1},reverse:function(){
  var e=this._private;
  var t=e.playing;

  if (t) {
    this.pause();
  }

  e.progress=1-e.progress;
  e.started=false;
  var a=function(u,v){
    var f=e[u];

    if (f!=null) {
      e[u]=e[v];
      e[v]=f;
    }
  };
  a("zoom","startZoom");
  a("pan","startPan");
  a("position","startPosition");

  if (e.style) {
    for(var n=0;n<e.style.length;n++){
      var i=e.style[n];
      var s=i.name;
      var o=e.startStyle[s];
      e.startStyle[s]=i;
      e.style[n]=o;
    }
  }

  if (t) {
    this.play();
  }

  return this;
},promise:function(e){
  var t=this._private;
  var a;
  switch(e){case "frame":
    {
      a=t.frames;break;
    }default:case"complete":case "completed":
    {
      a=t.completes
    }}return new ta(function(n,i){a.push(function(){n()})})
}});Pt.complete=Pt.completed;Pt.run=Pt.play;Pt.running=Pt.playing;

var Rh={animated:function(){return function(){
  var t=this;
  var a=t.length!==void 0;
  var n=a?t:[t];
  var i=this._private.cy||this;
  if (!i.styleEnabled()) {
    return false;
  }var s=n[0];if (s) {
    return s._private.animation.current.length>0
  }
};},clearQueue:function(){return function(){
  var t=this;
  var a=t.length!==void 0;
  var n=a?t:[t];
  var i=this._private.cy||this;
  if (!i.styleEnabled()) {
    return this;
  }for(var s=0;s<n.length;s++){var o=n[s];o._private.animation.queue=[]}return this
};},delay:function(){return function(t,a){var n=this._private.cy||this;return n.styleEnabled()?this.animate({delay:t,duration:t,complete:a}):this}},delayAnimation:function(){return function(t,a){var n=this._private.cy||this;return n.styleEnabled()?this.animation({delay:t,duration:t,complete:a}):this}},animation:function(){return function(t,a){
  var n=this;
  var i=n.length!==void 0;
  var s=i?n:[n];
  var o=this._private.cy||this;
  var l=!i;
  var u=!l;
  if (!o.styleEnabled()) {
    return this;
  }var v=o.style();t=be({},t,a);var f=Object.keys(t).length===0;if (f) {
      return new Is(s[0],t);
    }

  if (t.duration===void 0) {
    (t.duration = 400);
  }

  switch (t.duration) {
  case "slow":
    {
      t.duration=600;break;
    }
  case "fast":
    {
      t.duration=200;break
    }
  }

  if (u) {
    t.style=v.getPropsList(t.style||t.css);
    t.css=void 0;
  }

  if (u&&t.renderedPosition!=null) {
    var c=t.renderedPosition;
    var h=o.pan();
    var d=o.zoom();
    t.position=yv(c,d,h)
  }

  if(l&&t.panBy!=null){
    var y=t.panBy;
    var g=o.pan();
    t.pan={x:g.x+y.x,y:g.y+y.y}
  }var p=t.center||t.centre;if(l&&p!=null){
    var m=o.getCenterPan(p.eles,t.zoom);

    if (m!=null) {
      (t.pan = m);
    }
  }if(l&&t.fit!=null){
    var b=t.fit;
    var w=o.getFitViewport(b.eles||b.boundingBox,b.padding);

    if (w!=null) {
      t.pan=w.pan;
      t.zoom=w.zoom;
    }
  }if(l&&Le(t.zoom)){
    var E=o.getZoomedViewport(t.zoom);

    if (E!=null) {
      E.zoomed&&(t.zoom=E.zoom);
      E.panned&&(t.pan=E.pan);
    } else {
      t.zoom=null;
    }
  }return new Is(s[0],t)
};},animate:function(){return function(t,a){
  var n=this;
  var i=n.length!==void 0;
  var s=i?n:[n];
  var o=this._private.cy||this;
  if (!o.styleEnabled()) {
    return this;
  }

  if (a) {
    (t = be({},t,a));
  }

  for(var l=0;l<s.length;l++){
      var u=s[l];
      var v=u.animated()&&(t.queue===void 0||t.queue);
      var f=u.animation(t,v?{queue:true}:void 0);
      f.play()
    }return this
};},stop:function(){return function(t,a){
  var n=this;
  var i=n.length!==void 0;
  var s=i?n:[n];
  var o=this._private.cy||this;
  if (!o.styleEnabled()) {
    return this;
  }for(var l=0;l<s.length;l++){
  var u=s[l];
  var v=u._private;
  for(var f=v.animation.current, c=0;c<f.length;c++){
    var h=f[c];
    var d=h._private;

    if (a) {
      (d.duration = 0);
    }
  }

  if (t) {
    (v.animation.queue = []);
  }

  if (!a) {
    (v.animation.current = []);
  }
}
  o.notify("draw");
  return this;
};}};

var bi;
var lu;
function zn(){
  if (lu) {
    return bi;
  }lu=1;var r=Array.isArray;
  bi=r;
  return bi;
}
var wi;
var vu;
function Mh(){
  if (vu) {
    return wi;
  }vu=1;
  var r=zn();
  var e=za();
  var t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var a=/^\w*$/;
  function n(i,s){if (r(i)) {
    return false;
  }var o=typeof i;return o=="number"||o=="symbol"||o=="boolean"||i==null||e(i)?true:a.test(i)||!t.test(i)||s!=null&&i in Object(s);}
  wi=n;
  return wi;
}
var xi;
var fu;
function Lh(){
  if (fu) {
    return xi;
  }fu=1;
  var r=uv();
  var e=Na();
  var t="[object AsyncFunction]";
  var a="[object Function]";
  var n="[object GeneratorFunction]";
  var i="[object Proxy]";
  function s(o){if (!e(o)) {
    return false;
  }var l=r(o);return l==a||l==n||l==t||l==i}
  xi=s;
  return xi;
}
var Ei;
var cu;
function Ih(){
  if (cu) {
    return Ei;
  }cu=1;
  var r=Ln();
  var e=r["__core-js_shared__"];
  Ei=e;
  return Ei;
}
var Ci;
var du;
function Oh(){
  if (du) {
    return Ci;
  }du=1;
  var r=Ih();
  var e=(function(){var a=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""})();
  function t(a){return!!e&&e in a}
  Ci=t;
  return Ci;
}
var Ti;
var hu;
function Nh(){
  if (hu) {
    return Ti;
  }hu=1;
  var r=Function.prototype;
  var e=r.toString;
  function t(a){if(a!=null){try{return e.call(a)}catch{}try{return a+""}catch{}}return""}
  Ti=t;
  return Ti;
}
var Si;
var gu;
function zh(){
  if (gu) {
    return Si;
  }gu=1;
  var r=Lh();
  var e=Oh();
  var t=Na();
  var a=Nh();
  var n=/[\\^$.*+?()[\]{}|]/g;
  var i=/^\[object .+?Constructor\]$/;
  var s=Function.prototype;
  var o=Object.prototype;
  var l=s.toString;
  var u=o.hasOwnProperty;
  var v=RegExp("^"+l.call(u).replace(n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");
  function f(c){if (!t(c)||e(c)) {
    return false;
  }var h=r(c)?v:i;return h.test(a(c))}
  Si=f;
  return Si;
}
var ki;
var pu;
function Fh(){
  if (pu) {
    return ki;
  }pu=1;function r(e,t){return e?.[t]}
  ki=r;
  return ki;
}
var Di;
var yu;
function so(){
  if (yu) {
    return Di;
  }yu=1;
  var r=zh();
  var e=Fh();
  function t(a,n){var i=e(a,n);return r(i)?i:void 0}
  Di=t;
  return Di;
}
var Bi;
var mu;
function Fn(){
  if (mu) {
    return Bi;
  }mu=1;
  var r=so();
  var e=r(Object,"create");
  Bi=e;
  return Bi;
}
var Pi;
var bu;
function Vh(){
  if (bu) {
    return Pi;
  }bu=1;var r=Fn();function e(){
    this.__data__=r?r(null):{};
    this.size=0;
  }
  Pi=e;
  return Pi;
}
var Ai;
var wu;
function qh(){
  if (wu) {
    return Ai;
  }wu=1;function r(e){
    var t=this.has(e)&&delete this.__data__[e];
    this.size-=t?1:0;
    return t;
  }
  Ai=r;
  return Ai;
}
var Ri;
var xu;
function _h(){
  if (xu) {
    return Ri;
  }xu=1;
  var r=Fn();
  var e="__lodash_hash_undefined__";
  var t=Object.prototype;
  var a=t.hasOwnProperty;
  function n(i){var s=this.__data__;if(r){var o=s[i];return o===e?void 0:o}return a.call(s,i)?s[i]:void 0}
  Ri=n;
  return Ri;
}
var Mi;
var Eu;
function Gh(){
  if (Eu) {
    return Mi;
  }Eu=1;
  var r=Fn();
  var e=Object.prototype;
  var t=e.hasOwnProperty;
  function a(n){var i=this.__data__;return r?i[n]!==void 0:t.call(i,n)}
  Mi=a;
  return Mi;
}
var Li;
var Cu;
function Hh(){
  if (Cu) {
    return Li;
  }Cu=1;
  var r=Fn();
  var e="__lodash_hash_undefined__";
  function t(a,n){
    var i=this.__data__;
    this.size+=this.has(a)?0:1;
    i[a]=r&&n===void 0?e:n;
    return this;
  }
  Li=t;
  return Li;
}
var Ii;
var Tu;
function Wh(){
  if (Tu) {
    return Ii;
  }Tu=1;
  var r=Vh();
  var e=qh();
  var t=_h();
  var a=Gh();
  var n=Hh();
  function i(s){
    var o=-1;
    var l=s==null?0:s.length;
    for(this.clear();++o<l;){var u=s[o];this.set(u[0],u[1])}
  }
  i.prototype.clear=r;
  i.prototype.delete=e;
  i.prototype.get=t;
  i.prototype.has=a;
  i.prototype.set=n;
  Ii=i;
  return Ii;
}
var Oi;
var Su;
function $h(){
  if (Su) {
    return Oi;
  }Su=1;function r(){
    this.__data__=[];
    this.size=0;
  }
  Oi=r;
  return Oi;
}
var Ni;
var ku;
function Lv(){
  if (ku) {
    return Ni;
  }ku=1;function r(e,t){return e===t||e!==e&&t!==t}
  Ni=r;
  return Ni;
}
var zi;
var Du;
function Vn(){
  if (Du) {
    return zi;
  }Du=1;var r=Lv();function e(t,a){for (var n=t.length; n--; ) {
    if (r(t[n][0],a)) {
      return n;
    }
  }return-1}
  zi=e;
  return zi;
}
var Fi;
var Bu;
function Uh(){
  if (Bu) {
    return Fi;
  }Bu=1;
  var r=Vn();
  var e=Array.prototype;
  var t=e.splice;
  function a(n){
    var i=this.__data__;
    var s=r(i,n);
    if (s<0) {
      return false;
    }var o=i.length-1;

    if (s==o) {
      i.pop();
    } else {
      t.call(i,s,1);
    }

    --this.size;
    return true;
  }
  Fi=a;
  return Fi;
}
var Vi;
var Pu;
function Kh(){
  if (Pu) {
    return Vi;
  }Pu=1;var r=Vn();function e(t){
    var a=this.__data__;
    var n=r(a,t);
    return n<0?void 0:a[n][1]
  }
  Vi=e;
  return Vi;
}
var qi;
var Au;
function Xh(){
  if (Au) {
    return qi;
  }Au=1;var r=Vn();function e(t){return r(this.__data__,t)>-1}
  qi=e;
  return qi;
}
var _i;
var Ru;
function Yh(){
  if (Ru) {
    return _i;
  }Ru=1;var r=Vn();function e(t,a){
  var n=this.__data__;
  var i=r(n,t);

  if (i<0) {
    ++this.size;
    n.push([t,a]);
  } else {
    n[i][1]=a;
  }

  return this;
}
  _i=e;
  return _i;
}
var Gi;
var Mu;
function Zh(){
  if (Mu) {
    return Gi;
  }Mu=1;
  var r=$h();
  var e=Uh();
  var t=Kh();
  var a=Xh();
  var n=Yh();
  function i(s){
    var o=-1;
    var l=s==null?0:s.length;
    for(this.clear();++o<l;){var u=s[o];this.set(u[0],u[1])}
  }
  i.prototype.clear=r;
  i.prototype.delete=e;
  i.prototype.get=t;
  i.prototype.has=a;
  i.prototype.set=n;
  Gi=i;
  return Gi;
}
var Hi;
var Lu;
function Qh(){
  if (Lu) {
    return Hi;
  }Lu=1;
  var r=so();
  var e=Ln();
  var t=r(e,"Map");
  Hi=t;
  return Hi;
}
var Wi;
var Iu;
function Jh(){
  if (Iu) {
    return Wi;
  }Iu=1;
  var r=Wh();
  var e=Zh();
  var t=Qh();
  function a(){
    this.size=0;
    this.__data__={hash:new r,map:new(t||e),string:new r};
  }
  Wi=a;
  return Wi;
}
var $i;
var Ou;
function jh(){
  if (Ou) {
    return $i;
  }Ou=1;function r(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}
  $i=r;
  return $i;
}
var Ui;
var Nu;
function qn(){
  if (Nu) {
    return Ui;
  }Nu=1;var r=jh();function e(t,a){var n=t.__data__;return r(a)?n[typeof a=="string"?"string":"hash"]:n.map}
  Ui=e;
  return Ui;
}
var Ki;
var zu;
function eg(){
  if (zu) {
    return Ki;
  }zu=1;var r=qn();function e(t){
    var a=r(this,t).delete(t);
    this.size-=a?1:0;
    return a;
  }
  Ki=e;
  return Ki;
}
var Xi;
var Fu;
function rg(){
  if (Fu) {
    return Xi;
  }Fu=1;var r=qn();function e(t){return r(this,t).get(t)}
  Xi=e;
  return Xi;
}
var Yi;
var Vu;
function tg(){
  if (Vu) {
    return Yi;
  }Vu=1;var r=qn();function e(t){return r(this,t).has(t)}
  Yi=e;
  return Yi;
}
var Zi;
var qu;
function ag(){
  if (qu) {
    return Zi;
  }qu=1;var r=qn();function e(t,a){
    var n=r(this,t);
    var i=n.size;
    n.set(t,a);
    this.size+=n.size==i?0:1;
    return this;
  }
  Zi=e;
  return Zi;
}
var Qi;
var _u;
function ng(){
  if (_u) {
    return Qi;
  }_u=1;
  var r=Jh();
  var e=eg();
  var t=rg();
  var a=tg();
  var n=ag();
  function i(s){
    var o=-1;
    var l=s==null?0:s.length;
    for(this.clear();++o<l;){var u=s[o];this.set(u[0],u[1])}
  }
  i.prototype.clear=r;
  i.prototype.delete=e;
  i.prototype.get=t;
  i.prototype.has=a;
  i.prototype.set=n;
  Qi=i;
  return Qi;
}
var Ji;
var Gu;
function ig(){
  if (Gu) {
    return Ji;
  }Gu=1;
  var r=ng();
  var e="Expected a function";
  function t(a,n){
    if (typeof a!="function"||n!=null&&typeof n!="function") {
      throw new TypeError(e);
    }var i=function(...args) {
      var s=args;
      var o=n?n.apply(this,s):s[0];
      var l=i.cache;
      if (l.has(o)) {
        return l.get(o);
      }var u=a.apply(this,s);
      i.cache=l.set(o,u)||l;
      return u;
    };
    i.cache=new(t.Cache||r);
    return i;
  }
  t.Cache=r;
  Ji=t;
  return Ji;
}
var ji;
var Hu;
function sg(){
  if (Hu) {
    return ji;
  }Hu=1;
  var r=ig();
  var e=500;
  function t(a){
    var n=r(a,function(s){
      if (i.size===e) {
        i.clear();
      }

      return s;
    });

    var i=n.cache;
    return n
  }
  ji=t;
  return ji;
}
var es;
var Wu;
function Iv(){
  if (Wu) {
    return es;
  }Wu=1;
  var r=sg();
  var e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var t=/\\(\\)?/g;

  var a=r(function(n){
    var i=[];

    if (n.charCodeAt(0)===46) {
      i.push("");
    }

    n.replace(e,function(s,o,l,u){i.push(l?u.replace(t,"$1"):o||s)});
    return i;
  });

  es=a;
  return es;
}
var rs;
var $u;
function Ov(){
  if ($u) {
    return rs;
  }$u=1;function r(e,t){
    var i=Array(n);
    for (var a=-1, n=e==null?0:e.length; ++a<n; ) {
      i[a]=t(e[a],a,e);
    }return i
  }
  rs=r;
  return rs;
}
var ts;
var Uu;
function og(){
  if (Uu) {
    return ts;
  }Uu=1;
  var r=Qs();
  var e=Ov();
  var t=zn();
  var a=za();
  var n=r?r.prototype:void 0;
  var i=n?n.toString:void 0;
  function s(o){if (typeof o=="string") {
    return o;
  }if (t(o)) {
    return e(o,s)+"";
  }if (a(o)) {
    return i?i.call(o):"";
  }var l=o+"";return l=="0"&&1/o==-Infinity?"-0":l;}
  ts=s;
  return ts;
}
var as;
var Ku;
function Nv(){
  if (Ku) {
    return as;
  }Ku=1;var r=og();function e(t){return t==null?"":r(t)}
  as=e;
  return as;
}
var ns;
var Xu;
function zv(){
  if (Xu) {
    return ns;
  }Xu=1;
  var r=zn();
  var e=Mh();
  var t=Iv();
  var a=Nv();
  function n(i,s){return r(i)?i:e(i,s)?[i]:t(a(i))}
  ns=n;
  return ns;
}
var is;
var Yu;
function oo(){
  if (Yu) {
    return is;
  }Yu=1;var r=za();function e(t){if (typeof t=="string"||r(t)) {
    return t;
  }var a=t+"";return a=="0"&&1/t==-Infinity?"-0":a;}
  is=e;
  return is;
}
var ss;
var Zu;
function ug(){
  if (Zu) {
    return ss;
  }Zu=1;
  var r=zv();
  var e=oo();
  function t(a,n){n=r(n,a);for (var i=0,s=n.length; a!=null&&i<s; ) {
    a=a[e(n[i++])];
  }return i&&i==s?a:void 0}
  ss=t;
  return ss;
}
var os;
var Qu;
function lg(){
  if (Qu) {
    return os;
  }Qu=1;var r=ug();function e(t,a,n){var i=t==null?void 0:r(t,a);return i===void 0?n:i}
  os=e;
  return os;
}
var vg=lg();
var fg=Oa(vg);
var us;
var Ju;
function cg(){
  if (Ju) {
    return us;
  }Ju=1;
  var r=so();

  var e=(function(){try{
    var t=r(Object,"defineProperty");
    t({},"",{});
    return t;
  }catch{}})();

  us=e;
  return us;
}
var ls;
var ju;
function dg(){
  if (ju) {
    return ls;
  }ju=1;var r=cg();function e(t,a,n){
  if (a=="__proto__"&&r) {
    r(t,a,{configurable:true,enumerable:true,value:n,writable:true});
  } else {
    t[a]=n;
  }
}
  ls=e;
  return ls;
}
var vs;
var el;
function hg(){
  if (el) {
    return vs;
  }el=1;
  var r=dg();
  var e=Lv();
  var t=Object.prototype;
  var a=t.hasOwnProperty;
  function n(i,s,o){
    var l=i[s];

    if ((!(a.call(i,s)&&e(l,o)) || o===void 0&&!(s in i))) {
      r(i,s,o);
    }
  }
  vs=n;
  return vs;
}
var fs;
var rl;
function gg(){
  if (rl) {
    return fs;
  }rl=1;
  var r=9007199254740991;
  var e=/^(?:0|[1-9]\d*)$/;
  function t(a,n){
    var i=typeof a;
    n=n??r;
    return !!n&&(i=="number"||i!="symbol"&&e.test(a))&&a>-1&&a%1==0&&a<n;
  }
  fs=t;
  return fs;
}
var cs;
var tl;
function pg(){
  if (tl) {
    return cs;
  }tl=1;
  var r=hg();
  var e=zv();
  var t=gg();
  var a=Na();
  var n=oo();
  function i(s,o,l,u){
    if (!a(s)) {
      return s;
    }o=e(o,s);
    var c=f-1;
    for(var v=-1, f=o.length, h=s;h!=null&&++v<f;){
      var d=n(o[v]);
      var y=l;
      if (d==="__proto__"||d==="constructor"||d==="prototype") {
        return s;
      }if(v!=c){
      var g=h[d];
      y=u?u(g,d,h):void 0;

      if (y===void 0) {
        (y = a(g)?g:t(o[v+1])?[]:{});
      }
    }
      r(h,d,y);
      h=h[d];
    }return s
  }
  cs=i;
  return cs;
}
var ds;
var al;
function yg(){
  if (al) {
    return ds;
  }al=1;var r=pg();function e(t,a,n){return t==null?t:r(t,a,n)}
  ds=e;
  return ds;
}
var mg=yg();
var bg=Oa(mg);
var hs;
var nl;
function wg(){
  if (nl) {
    return hs;
  }nl=1;function r(e,t){
    var a=-1;
    var n=e.length;
    for (t||(t=Array(n)); ++a<n; ) {
      t[a]=e[a];
    }return t
  }
  hs=r;
  return hs;
}
var gs;
var il;
function xg(){
  if (il) {
    return gs;
  }il=1;
  var r=Ov();
  var e=wg();
  var t=zn();
  var a=za();
  var n=Iv();
  var i=oo();
  var s=Nv();
  function o(l){
    if (t(l)) {
      return r(l,i);
    }

    if (a(l)) {
      return [l];
    }

    return e(n(s(l)));
  }
  gs=o;
  return gs;
}
var Eg=xg();
var Cg=Oa(Eg);

var Tg={data:function(e){
  var t={field:"data",bindingEvent:"data",allowBinding:false,allowSetting:false,allowGetting:false,settingEvent:"data",settingTriggersEvent:false,triggerFnName:"trigger",immutableKeys:{},updateStyle:false,beforeGet:function(n){},beforeSet:function(n,i){},onSet:function(n){},canSet:function(n){return true;}};
  e=be({},t,e);

  return function(n,i){
    var s=e;
    var o=this;
    var l=o.length!==void 0;
    var u=l?o:[o];
    var v=l?o[0]:o;
    if(ge(n)){
      var f=n.indexOf(".")!==-1;
      var c=f&&Cg(n);
      if(s.allowGetting&&i===void 0){
        var h;

        if (v) {
          s.beforeGet(v);
          c&&v._private[s.field][n]===void 0?h=fg(v._private[s.field],c):h=v._private[s.field][n];
        }

        return h;
      }else if(s.allowSetting&&i!==void 0){var d=!s.immutableKeys[n];if(d){
        var y=Jl({},n,i);s.beforeSet(o,y);for(var g=0,p=u.length;g<p;g++){
          var m=u[g];

          if (s.canSet(m)) {
            if (c&&v._private[s.field][n]===void 0) {
              bg(m._private[s.field],c,i);
            } else {
              m._private[s.field][n]=i;
            }
          }
        }

        if (s.updateStyle) {
          o.updateStyle();
        }

        s.onSet(o);

        if (s.settingTriggersEvent) {
          o[s.triggerFnName](s.settingEvent);
        }
      }}
    }else if(s.allowSetting&&Le(n)){
      var b=n;
      var w;
      var E;
      var C=Object.keys(b);
      s.beforeSet(o,b);for(var x=0;x<C.length;x++){
          w=C[x];
          E=b[w];
          var T=!s.immutableKeys[w];if (T) {
            for(var k=0;k<u.length;k++){
              var D=u[k];

              if (s.canSet(D)) {
                (D._private[s.field][w] = E);
              }
            }
          }
        }

      if (s.updateStyle) {
        o.updateStyle();
      }

      s.onSet(o);

      if (s.settingTriggersEvent) {
        o[s.triggerFnName](s.settingEvent);
      }
    }else if(s.allowBinding&&Ue(n)){var B=n;o.on(s.bindingEvent,B)}else if(s.allowGetting&&n===void 0){
      var P;

      if (v) {
        s.beforeGet(v);
        P=v._private[s.field];
      }

      return P;
    }return o
  };
},removeData:function(e){
  var t={field:"data",event:"data",triggerFnName:"trigger",triggerEvent:false,immutableKeys:{}};
  e=be({},t,e);

  return function(n){
    var i=e;
    var s=this;
    var o=s.length!==void 0;
    var l=o?s:[s];
    if(ge(n)){
      var u=n.split(/\s+/);
      for(var v=u.length, f=0;f<v;f++){var c=u[f];if(!ut(c)){var h=!i.immutableKeys[c];if (h) {
        for (var d=0,y=l.length; d<y; d++) {
          l[d]._private[i.field][c]=void 0
        }
      }}}

      if (i.triggerEvent) {
        s[i.triggerFnName](i.event);
      }
    }else if(n===void 0){
      for (var g=0,p=l.length; g<p; g++) {
        var m=l[g]._private[i.field];
        for(var b=Object.keys(m), w=0;w<b.length;w++){
          var E=b[w];
          var C=!i.immutableKeys[E];

          if (C) {
            (m[E] = void 0);
          }
        }
      }

      if (i.triggerEvent) {
        s[i.triggerFnName](i.event);
      }
    }return s
  };
}};

var Sg={eventAliasesOn:function(e){
  var t=e;
  t.addListener=t.listen=t.bind=t.on;
  t.unlisten=t.unbind=t.off=t.removeListener;
  t.trigger=t.emit;

  t.pon=t.promiseOn=function(a,n){
    var i=this;
    var s=Array.prototype.slice.call(arguments,0);
    return new ta(function(o,l){
      var u=function(h){
        i.off(...f);
        o(h);
      };

      var v=s.concat([u]);
      var f=v.concat([]);
      i.on(...v)
    });
  };
}};

var Fe={};
[Rh,Tg,Sg].forEach(function(r){be(Fe,r)});
var kg={animate:Fe.animate(),animation:Fe.animation(),animated:Fe.animated(),clearQueue:Fe.clearQueue(),delay:Fe.delay(),delayAnimation:Fe.delayAnimation(),stop:Fe.stop()};

var vn={classes:function(e){
  var t=this;if (e===void 0) {
      var a=[];
      t[0]._private.classes.forEach(function(d){return a.push(d)});
      return a;
    } else {
    if (!_e(e)) {
      (e = (e||"").match(/\S+/g)||[]);
    }
  }
  var n=[];
  var i=new ra(e);
  for(var s=0;s<t.length;s++){
    var o=t[s];
    var l=o._private;
    var u=l.classes;
    var v=false;
    for(var f=0;f<e.length;f++){
      var c=e[f];
      var h=u.has(c);
      if(!h){v=true;break}
    }

    if (!v) {
      (v = u.size!==e.length);
    }

    if (v) {
      l.classes=i;
      n.push(o);
    }
  }

  if (n.length>0) {
    this.spawn(n).updateStyle().emit("class");
  }

  return t;
},addClass:function(e){return this.toggleClass(e,true);},hasClass:function(e){var t=this[0];return t!=null&&t._private.classes.has(e)},toggleClass:function(e,t){
  if (!_e(e)) {
    (e = e.match(/\S+/g)||[]);
  }

  var a=this;
  var n=t===void 0;
  var i=[];
  for (var s=0, o=a.length; s<o; s++) {
    var l=a[s];
    var u=l._private.classes;
    var v=false;
    for(var f=0;f<e.length;f++){
      var c=e[f];
      var h=u.has(c);
      var d=false;

      if (t||n&&!h) {
        u.add(c);
        d=true;
      } else if ((!t || n&&h)) {
        u.delete(c);
        d=true;
      }

      if (!v&&d) {
        i.push(l);
        v=true;
      }
    }
  }

  if (i.length>0) {
    this.spawn(i).updateStyle().emit("class");
  }

  return a;
},removeClass:function(e){return this.toggleClass(e,false);},flashClass:function(e,t){
  var a=this;if (t==null) {
    t=250;
  } else if (t===0) {
    return a;
  }
  a.addClass(e);
  setTimeout(function(){a.removeClass(e)},t);
  return a;
}};

vn.className=vn.classNames=vn.classes;var Me={metaChar:"[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",comparatorOp:"=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",boolOp:"\\?|\\!|\\^",string:`"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,number:tr,meta:"degree|indegree|outdegree",separator:"\\s*,\\s*",descendant:"\\s+",child:"\\s+>\\s+",subject:"\\$",group:"node|edge|\\*",directedEdge:"\\s+->\\s+",undirectedEdge:"\\s+<->\\s+"};Me.variable="(?:[\\w-.]|(?:\\\\"+Me.metaChar+"))+";Me.className="(?:[\\w-]|(?:\\\\"+Me.metaChar+"))+";Me.value=Me.string+"|"+Me.number;Me.id=Me.variable;(function(){
  var r;
  var e;
  var t;
  r=Me.comparatorOp.split("|");

  for (t=0; t<r.length; t++) {
    e=r[t];
    Me.comparatorOp+="|@"+e;
  }

  r=Me.comparatorOp.split("|");

  for (t=0; t<r.length; t++) {
    e=r[t];

    if (!(e.indexOf("!")>=0)&&e!=="=") {
      (Me.comparatorOp += "|\\!"+e);
    }
  }
})();
var qe=function(){return{checks:[]}};
var se={GROUP:0,COLLECTION:1,FILTER:2,DATA_COMPARE:3,DATA_EXIST:4,DATA_BOOL:5,META_COMPARE:6,STATE:7,ID:8,CLASS:9,UNDIRECTED_EDGE:10,DIRECTED_EDGE:11,NODE_SOURCE:12,NODE_TARGET:13,NODE_NEIGHBOR:14,CHILD:15,DESCENDANT:16,PARENT:17,ANCESTOR:18,COMPOUND_SPLIT:19,TRUE:20};
var Os=[{selector:":selected",matches:function(e){return e.selected()}},{selector:":unselected",matches:function(e){return!e.selected()}},{selector:":selectable",matches:function(e){return e.selectable()}},{selector:":unselectable",matches:function(e){return!e.selectable()}},{selector:":locked",matches:function(e){return e.locked()}},{selector:":unlocked",matches:function(e){return!e.locked()}},{selector:":visible",matches:function(e){return e.visible()}},{selector:":hidden",matches:function(e){return!e.visible()}},{selector:":transparent",matches:function(e){return e.transparent()}},{selector:":grabbed",matches:function(e){return e.grabbed()}},{selector:":free",matches:function(e){return!e.grabbed()}},{selector:":removed",matches:function(e){return e.removed()}},{selector:":inside",matches:function(e){return!e.removed()}},{selector:":grabbable",matches:function(e){return e.grabbable()}},{selector:":ungrabbable",matches:function(e){return!e.grabbable()}},{selector:":animated",matches:function(e){return e.animated()}},{selector:":unanimated",matches:function(e){return!e.animated()}},{selector:":parent",matches:function(e){return e.isParent()}},{selector:":childless",matches:function(e){return e.isChildless()}},{selector:":child",matches:function(e){return e.isChild()}},{selector:":orphan",matches:function(e){return e.isOrphan()}},{selector:":nonorphan",matches:function(e){return e.isChild()}},{selector:":compound",matches:function(e){
  if (e.isNode()) {
    return e.isParent();
  }

  if (!e.source().isParent()) {
    return e.target().isParent();
  }
}},{selector:":loop",matches:function(e){return e.isLoop()}},{selector:":simple",matches:function(e){return e.isSimple()}},{selector:":active",matches:function(e){return e.active()}},{selector:":inactive",matches:function(e){return!e.active()}},{selector:":backgrounding",matches:function(e){return e.backgrounding()}},{selector:":nonbackgrounding",matches:function(e){return!e.backgrounding()}}].sort(function(r,e){return Tc(r.selector,e.selector)});

var Dg=(function(){
  var r={};
  var e;
  for (var t=0; t<Os.length; t++) {
    e=Os[t];
    r[e.selector]=e.matches;
  }return r
})();

var Bg=function(e,t){return Dg[e](t)};
var Pg="("+Os.map(function(r){return r.selector}).join("|")+")";
var Ot=function(e){return e.replace(new RegExp("\\\\("+Me.metaChar+")","g"),function(t,a){return a})};
var rt=function(e,t,a){e[e.length-1]=a};

var Ns=[{name:"group",query:true,regex:"("+Me.group+")",populate:function(e,t,a){
  var n=Je(a,1);
  var i=n[0];
  t.checks.push({type:se.GROUP,value:i==="*"?i:i+"s"})
}},{name:"state",query:true,regex:Pg,populate:function(e,t,a){
  var n=Je(a,1);
  var i=n[0];
  t.checks.push({type:se.STATE,value:i})
}},{name:"id",query:true,regex:"\\#("+Me.id+")",populate:function(e,t,a){
  var n=Je(a,1);
  var i=n[0];
  t.checks.push({type:se.ID,value:Ot(i)})
}},{name:"className",query:true,regex:"\\.("+Me.className+")",populate:function(e,t,a){
  var n=Je(a,1);
  var i=n[0];
  t.checks.push({type:se.CLASS,value:Ot(i)})
}},{name:"dataExists",query:true,regex:"\\[\\s*("+Me.variable+")\\s*\\]",populate:function(e,t,a){
  var n=Je(a,1);
  var i=n[0];
  t.checks.push({type:se.DATA_EXIST,field:Ot(i)})
}},{name:"dataCompare",query:true,regex:"\\[\\s*("+Me.variable+")\\s*("+Me.comparatorOp+")\\s*("+Me.value+")\\s*\\]",populate:function(e,t,a){
  var n=Je(a,3);
  var i=n[0];
  var s=n[1];
  var o=n[2];
  var l=new RegExp("^"+Me.string+"$").exec(o)!=null;

  if (l) {
    o=o.substring(1,o.length-1);
  } else {
    o=parseFloat(o);
  }

  t.checks.push({type:se.DATA_COMPARE,field:Ot(i),operator:s,value:o});
}},{name:"dataBool",query:true,regex:"\\[\\s*("+Me.boolOp+")\\s*("+Me.variable+")\\s*\\]",populate:function(e,t,a){
  var n=Je(a,2);
  var i=n[0];
  var s=n[1];
  t.checks.push({type:se.DATA_BOOL,field:Ot(s),operator:i})
}},{name:"metaCompare",query:true,regex:"\\[\\[\\s*("+Me.meta+")\\s*("+Me.comparatorOp+")\\s*("+Me.number+")\\s*\\]\\]",populate:function(e,t,a){
  var n=Je(a,3);
  var i=n[0];
  var s=n[1];
  var o=n[2];
  t.checks.push({type:se.META_COMPARE,field:Ot(i),operator:s,value:parseFloat(o)})
}},{name:"nextQuery",separator:true,regex:Me.separator,populate:function(e,t){
  var a=e.currentSubject;
  var n=e.edgeCount;
  var i=e.compoundCount;
  var s=e[e.length-1];

  if (a!=null) {
    s.subject=a;
    e.currentSubject=null;
  }

  s.edgeCount=n;
  s.compoundCount=i;
  e.edgeCount=0;
  e.compoundCount=0;
  var o=e[e.length++]=qe();return o
}},{name:"directedEdge",separator:true,regex:Me.directedEdge,populate:function(e,t){if(e.currentSubject==null){
  var a=qe();
  var n=t;
  var i=qe();
  a.checks.push({type:se.DIRECTED_EDGE,source:n,target:i});
  rt(e,t,a);
  e.edgeCount++;
  return i;
}else{
  var s=qe();
  var o=t;
  var l=qe();
  s.checks.push({type:se.NODE_SOURCE,source:o,target:l});
  rt(e,t,s);
  e.edgeCount++;
  return l;
}}},{name:"undirectedEdge",separator:true,regex:Me.undirectedEdge,populate:function(e,t){if(e.currentSubject==null){
  var a=qe();
  var n=t;
  var i=qe();
  a.checks.push({type:se.UNDIRECTED_EDGE,nodes:[n,i]});
  rt(e,t,a);
  e.edgeCount++;
  return i;
}else{
  var s=qe();
  var o=t;
  var l=qe();
  s.checks.push({type:se.NODE_NEIGHBOR,node:o,neighbor:l});
  rt(e,t,s);
  return l;
}}},{name:"child",separator:true,regex:Me.child,populate:function(e,t){if(e.currentSubject==null){
  var a=qe();
  var n=qe();
  var i=e[e.length-1];
  a.checks.push({type:se.CHILD,parent:i,child:n});
  rt(e,t,a);
  e.compoundCount++;
  return n;
}else if(e.currentSubject===t){
  var s=qe();
  var o=e[e.length-1];
  var l=qe();
  var u=qe();
  var v=qe();
  var f=qe();
  s.checks.push({type:se.COMPOUND_SPLIT,left:o,right:l,subject:u});
  u.checks=t.checks;
  t.checks=[{type:se.TRUE}];
  f.checks.push({type:se.TRUE});
  l.checks.push({type:se.PARENT,parent:f,child:v});
  rt(e,o,s);
  e.currentSubject=u;
  e.compoundCount++;
  return v;
}else{
  var c=qe();
  var h=qe();
  var d=[{type:se.PARENT,parent:c,child:h}];
  c.checks=t.checks;
  t.checks=d;
  e.compoundCount++;
  return h;
}}},{name:"descendant",separator:true,regex:Me.descendant,populate:function(e,t){if(e.currentSubject==null){
  var a=qe();
  var n=qe();
  var i=e[e.length-1];
  a.checks.push({type:se.DESCENDANT,ancestor:i,descendant:n});
  rt(e,t,a);
  e.compoundCount++;
  return n;
}else if(e.currentSubject===t){
  var s=qe();
  var o=e[e.length-1];
  var l=qe();
  var u=qe();
  var v=qe();
  var f=qe();
  s.checks.push({type:se.COMPOUND_SPLIT,left:o,right:l,subject:u});
  u.checks=t.checks;
  t.checks=[{type:se.TRUE}];
  f.checks.push({type:se.TRUE});
  l.checks.push({type:se.ANCESTOR,ancestor:f,descendant:v});
  rt(e,o,s);
  e.currentSubject=u;
  e.compoundCount++;
  return v;
}else{
  var c=qe();
  var h=qe();
  var d=[{type:se.ANCESTOR,ancestor:c,descendant:h}];
  c.checks=t.checks;
  t.checks=d;
  e.compoundCount++;
  return h;
}}},{name:"subject",modifier:true,regex:Me.subject,populate:function(e,t){
  if (e.currentSubject!=null&&e.currentSubject!==t) {
    Ve("Redefinition of subject in selector `"+e.toString()+"`");
    return false;
  }e.currentSubject=t;
  var a=e[e.length-1];
  var n=a.checks[0];
  var i=n==null?null:n.type;

  if (i===se.DIRECTED_EDGE) {
    n.type=se.NODE_TARGET;
  } else if (i===se.UNDIRECTED_EDGE) {
    n.type=se.NODE_NEIGHBOR;
    n.node=n.nodes[1];
    n.neighbor=n.nodes[0];
    n.nodes=null;
  }
}}];

Ns.forEach(function(r){return r.regexObj=new RegExp("^"+r.regex)});

var Ag=function(e){
  var t;
  var a;
  var n;
  for(var i=0;i<Ns.length;i++){
    var s=Ns[i];
    var o=s.name;
    var l=e.match(s.regexObj);
    if(l!=null){
      a=l;
      t=s;
      n=o;
      var u=l[0];e=e.substring(u.length);break
    }
  }return{expr:t,match:a,name:n,remaining:e}
};

var Rg=function(e){var t=e.match(/^\s+/);if(t){var a=t[0];e=e.substring(a.length)}return e};

var Mg=function(e){
  var t=this;
  var a=t.inputText=e;
  var n=t[0]=qe();
  t.length=1;

  for (a=Rg(a); ; ) {
    var i=Ag(a);if (i.expr==null) {
        Ve("The selector `"+e+"`is invalid");
        return false;
      }
    var s=i.match.slice(1);
    var o=i.expr.populate(t,n,s);
    if (o===false) {
      return false;
    }

    if (o!=null) {
      (n = o);
    }

    a=i.remaining;

    if (a.match(/^\s*$/)) {
      break
    }
  }

  var l=t[t.length-1];

  if (t.currentSubject!=null) {
    (l.subject = t.currentSubject);
  }

  l.edgeCount=t.edgeCount;
  l.compoundCount=t.compoundCount;
  for(var u=0;u<t.length;u++){
    var v=t[u];if (v.compoundCount>0&&v.edgeCount>0) {
      Ve("The selector `"+e+"` is invalid because it uses both a compound selector and an edge selector");
      return false;
    }if (v.edgeCount>1) {
      Ve("The selector `"+e+"` is invalid because it uses multiple edge selectors");
      return false;
    }

    if (v.edgeCount===1) {
      Ve("The selector `"+e+"` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
    }
  }return true;
};

var Lg=function(){
  if (this.toStringCache!=null) {
    return this.toStringCache;
  }
  var e=function(v){return v??""};
  var t=function(v){return ge(v)?'"'+v+'"':e(v)};
  var a=function(v){return" "+v+" "};

  var n=function(v,f){
    var c=v.type;
    var h=v.value;
    switch(c){case se.GROUP:{var d=e(h);return d.substring(0,d.length-1)}case se.DATA_COMPARE:{
      var y=v.field;
      var g=v.operator;
      return"["+y+a(e(g))+t(h)+"]"
    }case se.DATA_BOOL:{
      var p=v.operator;
      var m=v.field;
      return"["+e(p)+m+"]"
    }case se.DATA_EXIST:{var b=v.field;return"["+b+"]"}case se.META_COMPARE:{
      var w=v.operator;
      var E=v.field;
      return"[["+E+a(e(w))+t(h)+"]]"
    }case se.STATE:
      {
        return h;
      }case se.ID:
      {
        return"#"+h;
      }case se.CLASS:
      {
        return"."+h;
      }case se.PARENT:case se.CHILD:
      {
        return i(v.parent,f)+a(">")+i(v.child,f);
      }case se.ANCESTOR:case se.DESCENDANT:
      {
        return i(v.ancestor,f)+" "+i(v.descendant,f);
      }case se.COMPOUND_SPLIT:{
      var C=i(v.left,f);
      var x=i(v.subject,f);
      var T=i(v.right,f);
      return C+(C.length>0?" ":"")+x+T
    }case se.TRUE:
      {
        return""
      }}
  };

  var i=function(v,f){return v.checks.reduce(function(c,h,d){return c+(f===v&&d===0?"$":"")+n(h,f)},"")};
  var s="";
  for(var o=0;o<this.length;o++){
    var l=this[o];
    s+=i(l,l.subject);

    if (this.length>1&&o<this.length-1) {
      (s += ", ");
    }
  }
  this.toStringCache=s;
  return s;
};

var Ig={parse:Mg,toString:Lg};

var Fv=function(e,t,a){
  var n;
  var i=ge(e);
  var s=ae(e);
  var o=ge(a);
  var l;
  var u;
  var v=false;
  var f=false;
  var c=false;

  if (t.indexOf("!")>=0) {
    t=t.replace("!","");
    f=true;
  }

  if (t.indexOf("@")>=0) {
    t=t.replace("@","");
    v=true;
  }

  if ((i||o || v)) {
    l=!i&&!s?"":""+e;
    u=""+a;
  }

  if (v) {
    e=l=l.toLowerCase();
    a=u=u.toLowerCase();
  }

  switch (t) {
  case "*=":
    {
      n=l.indexOf(u)>=0;break;
    }
  case "$=":
    {
      n=l.indexOf(u,l.length-u.length)>=0;break;
    }
  case "^=":
    {
      n=l.indexOf(u)===0;break;
    }
  case "=":
    {
      n=e===a;break;
    }
  case ">":
    {
      c=true;
      n=e>a;
      break;
    }
  case ">=":
    {
      c=true;
      n=e>=a;
      break;
    }
  case "<":
    {
      c=true;
      n=e<a;
      break;
    }
  case "<=":
    {
      c=true;
      n=e<=a;
      break;
    }
  default:
    {
      n=false;break
    }
  }

  if (f&&(e!=null||!c)) {
    (n = !n);
  }

  return n;
};

var Og=function(e,t){switch(t){case "?":
  {
    return!!e;
  }case "!":
  {
    return!e;
  }case "^":
  {
    return e===void 0
  }}};

var Ng=function(e){return e!==void 0};
var uo=function(e,t){return e.data(t)};
var zg=function(e,t){return e[t]()};
var Xe=[];
var We=function(e,t){return e.checks.every(function(a){return Xe[a.type](a,t)})};
Xe[se.GROUP]=function(r,e){var t=r.value;return t==="*"||t===e.group()};Xe[se.STATE]=function(r,e){var t=r.value;return Bg(t,e)};Xe[se.ID]=function(r,e){var t=r.value;return e.id()===t};Xe[se.CLASS]=function(r,e){var t=r.value;return e.hasClass(t)};Xe[se.META_COMPARE]=function(r,e){
  var t=r.field;
  var a=r.operator;
  var n=r.value;
  return Fv(zg(e,t),a,n)
};Xe[se.DATA_COMPARE]=function(r,e){
  var t=r.field;
  var a=r.operator;
  var n=r.value;
  return Fv(uo(e,t),a,n)
};Xe[se.DATA_BOOL]=function(r,e){
  var t=r.field;
  var a=r.operator;
  return Og(uo(e,t),a)
};Xe[se.DATA_EXIST]=function(r,e){
  var t=r.field;
  r.operator;
  return Ng(uo(e,t));
};Xe[se.UNDIRECTED_EDGE]=function(r,e){
  var t=r.nodes[0];
  var a=r.nodes[1];
  var n=e.source();
  var i=e.target();
  return We(t,n)&&We(a,i)||We(a,n)&&We(t,i)
};Xe[se.NODE_NEIGHBOR]=function(r,e){return We(r.node,e)&&e.neighborhood().some(function(t){return t.isNode()&&We(r.neighbor,t)})};Xe[se.DIRECTED_EDGE]=function(r,e){return We(r.source,e.source())&&We(r.target,e.target())};Xe[se.NODE_SOURCE]=function(r,e){return We(r.source,e)&&e.outgoers().some(function(t){return t.isNode()&&We(r.target,t)})};Xe[se.NODE_TARGET]=function(r,e){return We(r.target,e)&&e.incomers().some(function(t){return t.isNode()&&We(r.source,t)})};Xe[se.CHILD]=function(r,e){return We(r.child,e)&&We(r.parent,e.parent())};Xe[se.PARENT]=function(r,e){return We(r.parent,e)&&e.children().some(function(t){return We(r.child,t)})};Xe[se.DESCENDANT]=function(r,e){return We(r.descendant,e)&&e.ancestors().some(function(t){return We(r.ancestor,t)})};Xe[se.ANCESTOR]=function(r,e){return We(r.ancestor,e)&&e.descendants().some(function(t){return We(r.descendant,t)})};Xe[se.COMPOUND_SPLIT]=function(r,e){return We(r.subject,e)&&We(r.left,e)&&We(r.right,e)};Xe[se.TRUE]=function(){return true;};Xe[se.COLLECTION]=function(r,e){var t=r.value;return t.has(e)};Xe[se.FILTER]=function(r,e){var t=r.value;return t(e)};

var Fg=function(e){
  var t=this;if (t.length===1&&t[0].checks.length===1&&t[0].checks[0].type===se.ID) {
      return e.getElementById(t[0].checks[0].value).collection();
    }var a=function(i){for(var s=0;s<t.length;s++){var o=t[s];if (We(o,i)) {
      return true;
    }}return false;};

  if (t.text()==null) {
    (a = function(){return true;});
  }

  return e.filter(a);
};

var Vg=function(e){for(var t=this,a=0;a<t.length;a++){var n=t[a];if (We(n,e)) {
  return true;
}}return false;};

var qg={matches:Vg,filter:Fg};

var ft=function(e){
  this.inputText=e;
  this.currentSubject=null;
  this.compoundCount=0;
  this.edgeCount=0;
  this.length=0;

  if (e != null && (!ge(e) || !e.match(/^\s*$/))) {
    if (Dr(e)) {
      this.addQuery({checks:[{type:se.COLLECTION,value:e.collection()}]});
    } else if (Ue(e)) {
      this.addQuery({checks:[{type:se.FILTER,value:e}]});
    } else if (ge(e)) {
      if (!this.parse(e)) {
        (this.invalid = true);
      }
    } else {
      $e("A selector must be created from a string; found ");
    }
  }
};

var ct=ft.prototype;
[Ig,qg].forEach(function(r){return be(ct,r)});ct.text=function(){return this.inputText};ct.size=function(){return this.length};ct.eq=function(r){return this[r]};ct.sameText=function(r){return!this.invalid&&!r.invalid&&this.text()===r.text()};ct.addQuery=function(r){this[this.length++]=r};ct.selector=ct.toString;var st={allAre:function(e){var t=new ft(e);return this.every(function(a){return t.matches(a)})},is:function(e){var t=new ft(e);return this.some(function(a){return t.matches(a)})},some:function(e,t){for(var a=0;a<this.length;a++){var n=t?e.apply(t,[this[a],a,this]):e(this[a],a,this);if (n) {
  return true;
}}return false;},every:function(e,t){for(var a=0;a<this.length;a++){var n=t?e.apply(t,[this[a],a,this]):e(this[a],a,this);if (!n) {
  return false;
}}return true;},same:function(e){
  if (this===e) {
    return true;
  }e=this.cy().collection(e);
  var t=this.length;
  var a=e.length;
  return t!==a?false:t===1?this[0]===e[0]:this.every(function(n){return e.hasElementWithId(n.id())});
},anySame:function(e){
  e=this.cy().collection(e);
  return this.some(function(t){return e.hasElementWithId(t.id())});
},allAreNeighbors:function(e){e=this.cy().collection(e);var t=this.neighborhood();return e.every(function(a){return t.hasElementWithId(a.id())})},contains:function(e){e=this.cy().collection(e);var t=this;return e.every(function(a){return t.hasElementWithId(a.id())})}};st.allAreNeighbours=st.allAreNeighbors;st.has=st.contains;st.equal=st.equals=st.same;

var Rr=function(e,t){return function(n,i,s,o){
  var l=n;
  var u=this;
  var v;

  if (l==null) {
    v="";
  } else if (Dr(l)&&l.length===1) {
    (v = l.id());
  }

  if (u.length===1&&v) {
    var f=u[0]._private;
    var c=f.traversalCache=f.traversalCache||{};
    var h=c[t]=c[t]||[];
    var d=Dt(v);
    var y=h[d];
    return y||(h[d]=e.call(u,n,i,s,o))
  } else {
    return e.call(u,n,i,s,o)
  }
};};

var jt={parent:function(e){var t=[];if(this.length===1){var a=this[0]._private.parent;if (a) {
  return a
}}for(var n=0;n<this.length;n++){
  var i=this[n];
  var s=i._private.parent;

  if (s) {
    t.push(s);
  }
}return this.spawn(t,true).filter(e);},parents:function(e){
  var t=[];
  for(var a=this.parent();a.nonempty();){for(var n=0;n<a.length;n++){var i=a[n];t.push(i)}a=a.parent()}return this.spawn(t,true).filter(e);
},commonAncestors:function(e){
  var t;
  for(var a=0;a<this.length;a++){
    var n=this[a];
    var i=n.parents();
    t=t||i;
    t=t.intersect(i);
  }return t.filter(e)
},orphans:function(e){return this.stdFilter(function(t){return t.isOrphan()}).filter(e)},nonorphans:function(e){return this.stdFilter(function(t){return t.isChild()}).filter(e)},children:Rr(function(r){
  var e=[];
  for (var t=0; t<this.length; t++) {
    var a=this[t];
    for (var n=a._private.children, i=0; i<n.length; i++) {
      e.push(n[i]);
    }
  }return this.spawn(e,true).filter(r);
},"children"),siblings:function(e){return this.parent().children().not(this).filter(e)},isParent:function(){var e=this[0];if (e) {
  return e.isNode()&&e._private.children.length!==0
}},isChildless:function(){var e=this[0];if (e) {
  return e.isNode()&&e._private.children.length===0
}},isChild:function(){var e=this[0];if (e) {
  return e.isNode()&&e._private.parent!=null
}},isOrphan:function(){var e=this[0];if (e) {
  return e.isNode()&&e._private.parent==null
}},descendants:function(e){
  var t=[];function a(n){for(var i=0;i<n.length;i++){
  var s=n[i];
  t.push(s);

  if (s.children().nonempty()) {
    a(s.children());
  }
}}
  a(this.children());
  return this.spawn(t,true).filter(e);
}};

function lo(r,e,t,a){
  var n=[];
  var i=new ra;
  var s=r.cy();
  var o=s.hasCompoundNodes();
  for(var l=0;l<r.length;l++){
    var u=r[l];

    if (t) {
      n.push(u);
    } else if (o) {
      a(n,i,u);
    }
  }

  while (n.length>0) {
    var v=n.shift();
    e(v);
    i.add(v.id());

    if (o) {
      a(n,i,v);
    }
  }

  return r
}function Vv(r,e,t){if (t.isParent()) {
  for(var a=t._private.children,n=0;n<a.length;n++){
    var i=a[n];

    if (!e.has(i.id())) {
      r.push(i);
    }
  }
}}jt.forEachDown=function(r, e = true) {
  return lo(this,r,e,Vv)
};function qv(r,e,t){if(t.isChild()){
  var a=t._private.parent;

  if (!e.has(a.id())) {
    r.push(a);
  }
}}jt.forEachUp=function(r, e = true) {
  return lo(this,r,e,qv)
};function _g(r,e,t){
  qv(r,e,t);
  Vv(r,e,t);
}jt.forEachUpAndDown=function(r, e = true) {
  return lo(this,r,e,_g)
};jt.ancestors=jt.parents;
var Ba;
var _v;
Ba=_v={data:Fe.data({field:"data",bindingEvent:"data",allowBinding:true,allowSetting:true,settingEvent:"data",settingTriggersEvent:true,triggerFnName:"trigger",allowGetting:true,immutableKeys:{id:true,source:true,target:true,parent:true},updateStyle:true}),removeData:Fe.removeData({field:"data",event:"data",triggerFnName:"trigger",triggerEvent:true,immutableKeys:{id:true,source:true,target:true,parent:true},updateStyle:true}),scratch:Fe.data({field:"scratch",bindingEvent:"scratch",allowBinding:true,allowSetting:true,settingEvent:"scratch",settingTriggersEvent:true,triggerFnName:"trigger",allowGetting:true,updateStyle:true}),removeScratch:Fe.removeData({field:"scratch",event:"scratch",triggerFnName:"trigger",triggerEvent:true,updateStyle:true}),rscratch:Fe.data({field:"rscratch",allowBinding:false,allowSetting:true,settingTriggersEvent:false,allowGetting:true}),removeRscratch:Fe.removeData({field:"rscratch",triggerEvent:false}),id:function(){var e=this[0];if (e) {
  return e._private.data.id
}}};Ba.attr=Ba.data;Ba.removeAttr=Ba.removeData;
var Gg=_v;
var _n={};
function ps(r){return function(e = true) {
  var t=this;

  if (t.length!==0) {
    if (t.isNode()&&!t.removed()) {
      var a=0;
      var n=t[0];
      for(var i=n._private.edges, s=0;s<i.length;s++){
        var o=i[s];

        if (e || !o.isLoop()) {
          (a += r(n,o));
        }
      }return a
    } else {
      return
    }
  }
};}be(_n,{degree:ps(function(r,e){return e.source().same(e.target())?2:1}),indegree:ps(function(r,e){return e.target().same(r)?1:0}),outdegree:ps(function(r,e){return e.source().same(r)?1:0})});function Nt(r,e){return function(t){
  var a;
  for(var n=this.nodes(), i=0;i<n.length;i++){
    var s=n[i];
    var o=s[r](t);

    if (o!==void 0&&(a===void 0||e(o,a))) {
      (a = o);
    }
  }return a
};}be(_n,{minDegree:Nt("degree",function(r,e){return r<e}),maxDegree:Nt("degree",function(r,e){return r>e}),minIndegree:Nt("indegree",function(r,e){return r<e}),maxIndegree:Nt("indegree",function(r,e){return r>e}),minOutdegree:Nt("outdegree",function(r,e){return r<e}),maxOutdegree:Nt("outdegree",function(r,e){return r>e})});be(_n,{totalDegree:function(e){
  var t=0;
  for (var a=this.nodes(), n=0; n<a.length; n++) {
    t+=a[n].degree(e);
  }return t
}});
var Or;
var Gv;

var Hv=function(e,t,a){for(var n=0;n<e.length;n++){var i=e[n];if(!i.locked()){
  var s=i._private.position;
  var o={x:t.x!=null?t.x-s.x:0,y:t.y!=null?t.y-s.y:0};

  if (i.isParent()&&!(o.x===0&&o.y===0)) {
    i.children().shift(o,a);
  }

  i.dirtyBoundingBoxCache();
}}};

var sl={field:"position",bindingEvent:"position",allowBinding:true,allowSetting:true,settingEvent:"position",settingTriggersEvent:true,triggerFnName:"emitAndNotify",allowGetting:true,validKeys:["x","y"],beforeGet:function(e){e.updateCompoundBounds()},beforeSet:function(e,t){Hv(e,t,false)},onSet:function(e){e.dirtyCompoundBoundsCache()},canSet:function(e){return!e.locked()}};
Or=Gv={position:Fe.data(sl),silentPosition:Fe.data(be({},sl,{allowBinding:false,allowSetting:true,settingTriggersEvent:false,allowGetting:false,beforeSet:function(e,t){Hv(e,t,true)},onSet:function(e){e.dirtyCompoundBoundsCache()}})),positions:function(e,t){if (Le(e)) {
  if (t) {
    this.silentPosition(e);
  } else {
    this.position(e);
  }
} else if(Ue(e)){
  var a=e;
  var n=this.cy();
  n.startBatch();for(var i=0;i<this.length;i++){
  var s=this[i];
  var o=void 0;

  if ((o = a(s,i))) {
    if (t) {
      s.silentPosition(o);
    } else {
      s.position(o);
    }
  }
}n.endBatch()
}return this},silentPositions:function(e){return this.positions(e,true);},shift:function(e,t,a){
  var n;

  if (Le(e)) {
    n={x:ae(e.x)?e.x:0,y:ae(e.y)?e.y:0};
    a=t;
  } else if (ge(e)&&ae(t)) {
    n={x:0,y:0};
    n[e]=t;
  }

  if (n!=null) {var i=this.cy();i.startBatch();for(var s=0;s<this.length;s++){var o=this[s];if(!(i.hasCompoundNodes()&&o.isChild()&&o.ancestors().anySame(this))){
    var l=o.position();
    var u={x:l.x+n.x,y:l.y+n.y};

    if (a) {
      o.silentPosition(u);
    } else {
      o.position(u);
    }
  }}i.endBatch()}

  return this
},silentShift:function(e,t){
  if (Le(e)) {
    this.shift(e,true);
  } else if (ge(e)&&ae(t)) {
    this.shift(e,t,true);
  }

  return this;
},renderedPosition:function(e,t){
  var a=this[0];
  var n=this.cy();
  var i=n.zoom();
  var s=n.pan();
  var o=Le(e)?e:void 0;
  var l=o!==void 0||t!==void 0&&ge(e);
  if (a&&a.isNode()) {
    if (l) {
      for(var u=0;u<this.length;u++){
        var v=this[u];

        if (t!==void 0) {
          v.position(e,(t-s[e])/i);
        } else if (o!==void 0) {
          v.position(yv(o,i,s));
        }
      }
    } else {
      var f=a.position();
      o=On(f,i,s);
      return e===void 0?o:o[e];
    }
  } else if (!l) {
    return;
  }return this
},relativePosition:function(e,t){
  var a=this[0];
  var n=this.cy();
  var i=Le(e)?e:void 0;
  var s=i!==void 0||t!==void 0&&ge(e);
  var o=n.hasCompoundNodes();
  if (a&&a.isNode()) {
    if (s) {
      for(var l=0;l<this.length;l++){
        var u=this[l];
        var v=o?u.parent():null;
        var f=v&&v.length>0;
        var c=f;

        if (f) {
          (v = v[0]);
        }

        var h=c?v.position():{x:0,y:0};

        if (t!==void 0) {
          u.position(e,t+h[e]);
        } else if (i!==void 0) {
          u.position({x:i.x+h.x,y:i.y+h.y});
        }
      }
    } else {
      var d=a.position();
      var y=o?a.parent():null;
      var g=y&&y.length>0;
      var p=g;

      if (g) {
        (y = y[0]);
      }

      var m=p?y.position():{x:0,y:0};
      i={x:d.x-m.x,y:d.y-m.y};
      return e===void 0?i:i[e];
    }
  } else if (!s) {
    return;
  }return this
}};Or.modelPosition=Or.point=Or.position;Or.modelPositions=Or.points=Or.positions;Or.renderedPoint=Or.renderedPosition;Or.relativePoint=Or.relativePosition;
var Hg=Gv;
var Zt;
var pt;
Zt=pt={};pt.renderedBoundingBox=function(r){
  var e=this.boundingBox(r);
  var t=this.cy();
  var a=t.zoom();
  var n=t.pan();
  var i=e.x1*a+n.x;
  var s=e.x2*a+n.x;
  var o=e.y1*a+n.y;
  var l=e.y2*a+n.y;
  return{x1:i,x2:s,y1:o,y2:l,w:s-i,h:l-o}
};pt.dirtyCompoundBoundsCache=function(r = false) {
  var e=this.cy();
  return !e.styleEnabled()||!e.hasCompoundNodes()?this:(this.forEachUp(function(t){if(t.isParent()){
    var a=t._private;
    a.compoundBoundsClean=false;
    a.bbCache=null;

    if (!r) {
      t.emitAndNotify("bounds");
    }
  }}),this);
};pt.updateCompoundBounds=function(r = false) {
  var e=this.cy();
  if (!e.styleEnabled()||!e.hasCompoundNodes()) {
    return this;
  }if (!r&&e.batching()) {
      return this;
    }function t(s){
    if (!s.isParent()) {
      return;
    }
    var o=s._private;
    var l=s.children();
    var u=s.pstyle("compound-sizing-wrt-labels").value==="include";
    var v={width:{val:s.pstyle("min-width").pfValue,left:s.pstyle("min-width-bias-left"),right:s.pstyle("min-width-bias-right")},height:{val:s.pstyle("min-height").pfValue,top:s.pstyle("min-height-bias-top"),bottom:s.pstyle("min-height-bias-bottom")}};
    var f=l.boundingBox({includeLabels:u,includeOverlays:false,useCache:false});
    var c=o.position;

    if ((f.w===0 || f.h===0)) {
      f={w:s.pstyle("width").pfValue,h:s.pstyle("height").pfValue};
      f.x1=c.x-f.w/2;
      f.x2=c.x+f.w/2;
      f.y1=c.y-f.h/2;
      f.y2=c.y+f.h/2;
    }

    function h(k,D,B){
      var P=0;
      var A=0;
      var R=D+B;

      if (k>0&&R>0) {
        P=D/R*k;
        A=B/R*k;
      }

      return {biasDiff:P,biasComplementDiff:A};
    }function d(k,D,B,P){if (B.units==="%") {
          switch(P){case "width":
            {
              return k>0?B.pfValue*k:0;
            }case "height":
            {
              return D>0?B.pfValue*D:0;
            }case "average":
            {
              return k>0&&D>0?B.pfValue*(k+D)/2:0;
            }case "min":
            {
              return k>0&&D>0?k>D?B.pfValue*D:B.pfValue*k:0;
            }case "max":
            {
              return k>0&&D>0?k>D?B.pfValue*k:B.pfValue*D:0;
            }default:
            {
              return 0
            }}
        } else {
          return B.units==="px"?B.pfValue:0
        }}var y=v.width.left.value;

    if (v.width.left.units==="px"&&v.width.val>0) {
      (y = y*100/v.width.val);
    }

    var g=v.width.right.value;

    if (v.width.right.units==="px"&&v.width.val>0) {
      (g = g*100/v.width.val);
    }

    var p=v.height.top.value;

    if (v.height.top.units==="px"&&v.height.val>0) {
      (p = p*100/v.height.val);
    }

    var m=v.height.bottom.value;

    if (v.height.bottom.units==="px"&&v.height.val>0) {
      (m = m*100/v.height.val);
    }

    var b=h(v.width.val-f.w,y,g);
    var w=b.biasDiff;
    var E=b.biasComplementDiff;
    var C=h(v.height.val-f.h,p,m);
    var x=C.biasDiff;
    var T=C.biasComplementDiff;
    o.autoPadding=d(f.w,f.h,s.pstyle("padding"),s.pstyle("padding-relative-to").value);
    o.autoWidth=Math.max(f.w,v.width.val);
    c.x=(-w+f.x1+f.x2+E)/2;
    o.autoHeight=Math.max(f.h,v.height.val);
    c.y=(-x+f.y1+f.y2+T)/2;
  }for(var a=0;a<this.length;a++){
    var n=this[a];
    var i=n._private;

    if ((!i.compoundBoundsClean || r)) {
      t(n);
      e.batching()||(i.compoundBoundsClean=true);
    }
  }return this
};
var Ar=function(e){return e===Infinity||e===-Infinity?0:e;};
var Ir=function(e,t,a,n,i){
  if (n-t !== 0 && i-a !== 0 && t != null && a != null && n != null && i != null) {
    e.x1=t<e.x1?t:e.x1;
    e.x2=n>e.x2?n:e.x2;
    e.y1=a<e.y1?a:e.y1;
    e.y2=i>e.y2?i:e.y2;
    e.w=e.x2-e.x1;
    e.h=e.y2-e.y1;
  }
};
var tt=function(e,t){return t==null?e:Ir(e,t.x1,t.y1,t.x2,t.y2)};
var fa=function(e,t,a){return Tr(e,t,a)};

var ja=function(e,t,a){if(!t.cy().headless()){
  var n=t._private;
  var i=n.rstyle;
  var s=i.arrowWidth/2;
  var o=t.pstyle(a+"-arrow-shape").value;
  var l;
  var u;
  if(o!=="none"){
    if (a==="source") {
      l=i.srcX;
      u=i.srcY;
    } else if (a==="target") {
      l=i.tgtX;
      u=i.tgtY;
    } else {
      l=i.midX;
      u=i.midY;
    }

    var v=n.arrowBounds=n.arrowBounds||{};
    var f=v[a]=v[a]||{};
    f.x1=l-s;
    f.y1=u-s;
    f.x2=l+s;
    f.y2=u+s;
    f.w=f.x2-f.x1;
    f.h=f.y2-f.y1;
    un(f,1);
    Ir(e,f.x1,f.y1,f.x2,f.y2);
  }
}};

var ys=function(e,t,a){if(!t.cy().headless()){
  var n;

  if (a) {
    n=a+"-";
  } else {
    n="";
  }

  var i=t._private;
  var s=i.rstyle;
  var o=t.pstyle(n+"label").strValue;
  if(o){
    var l=t.pstyle("text-halign");
    var u=t.pstyle("text-valign");
    var v=fa(s,"labelWidth",a);
    var f=fa(s,"labelHeight",a);
    var c=fa(s,"labelX",a);
    var h=fa(s,"labelY",a);
    var d=t.pstyle(n+"text-margin-x").pfValue;
    var y=t.pstyle(n+"text-margin-y").pfValue;
    var g=t.isEdge();
    var p=t.pstyle(n+"text-rotation");
    var m=t.pstyle("text-outline-width").pfValue;
    var b=t.pstyle("text-border-width").pfValue;
    var w=b/2;
    var E=t.pstyle("text-background-padding").pfValue;
    var C=2;
    var x=f;
    var T=v;
    var k=T/2;
    var D=x/2;
    var B;
    var P;
    var A;
    var R;
    if (g) {
      B=c-k;
      P=c+k;
      A=h-D;
      R=h+D;
    } else {switch(l.value){case "left":
      {
        B=c-T;
        P=c;
        break;
      }case "center":
      {
        B=c-k;
        P=c+k;
        break;
      }case "right":
      {
        B=c;
        P=c+T;
        break
      }}switch(u.value){case "top":
      {
        A=h-x;
        R=h;
        break;
      }case "center":
      {
        A=h-D;
        R=h+D;
        break;
      }case "bottom":
      {
        A=h;
        R=h+x;
        break
      }}}
    var L=d-Math.max(m,w)-E-C;
    var I=d+Math.max(m,w)+E+C;
    var M=y-Math.max(m,w)-E-C;
    var O=y+Math.max(m,w)+E+C;
    B+=L;
    P+=I;
    A+=M;
    R+=O;
    var V=a||"main";
    var G=i.labelBounds;
    var N=G[V]=G[V]||{};
    N.x1=B;
    N.y1=A;
    N.x2=P;
    N.y2=R;
    N.w=P-B;
    N.h=R-A;
    N.leftPad=L;
    N.rightPad=I;
    N.topPad=M;
    N.botPad=O;
    var F=g&&p.strValue==="autorotate";
    var U=p.pfValue!=null&&p.pfValue!==0;
    if(F||U){
      var Q=F?fa(i.rstyle,"labelAngle",a):p.pfValue;
      var K=Math.cos(Q);
      var j=Math.sin(Q);
      var re=(B+P)/2;
      var ne=(A+R)/2;
      if(!g){switch(l.value){case "left":
        {
          re=P;break;
        }case "right":
        {
          re=B;break
        }}switch(u.value){case "top":
        {
          ne=R;break;
        }case "bottom":
        {
          ne=A;break
        }}}

      var J=function(Ce,we){
        Ce=Ce-re;
        we=we-ne;
        return {x:Ce*K-we*j+re,y:Ce*j+we*K+ne};
      };

      var z=J(B,A);
      var q=J(B,R);
      var H=J(P,A);
      var Y=J(P,R);
      B=Math.min(z.x,q.x,H.x,Y.x);
      P=Math.max(z.x,q.x,H.x,Y.x);
      A=Math.min(z.y,q.y,H.y,Y.y);
      R=Math.max(z.y,q.y,H.y,Y.y);
    }
    var te=V+"Rot";
    var ce=G[te]=G[te]||{};
    ce.x1=B;
    ce.y1=A;
    ce.x2=P;
    ce.y2=R;
    ce.w=P-B;
    ce.h=R-A;
    Ir(e,B,A,P,R);
    Ir(i.labelBounds.all,B,A,P,R);
  }return e
}};

var ol=function(e,t){if(!t.cy().headless()){
  var a=t.pstyle("outline-opacity").value;
  var n=t.pstyle("outline-width").value;
  var i=t.pstyle("outline-offset").value;
  var s=n+i;
  Wv(e,t,a,s,"outside",s/2)
}};

var Wv=function(e,t,a,n,i,s){if(!(a===0||n<=0||i==="inside")){
  var o=t.cy();
  var l=t.pstyle("shape").value;
  var u=o.renderer().nodeShapes[l];
  var v=t.position();
  var f=v.x;
  var c=v.y;
  var h=t.width();
  var d=t.height();
  if (u.hasMiterBounds)
    {
      if (i==="center") {
        (n /= 2);
      }

      var y=u.miterBounds(f,c,h,d,n);tt(e,y)
    } else {
    if (s!=null&&s>0) {
      ln(e,[s,s,s,s]);
    }
  }
}};

var Wg=function(e,t){if(!t.cy().headless()){
  var a=t.pstyle("border-opacity").value;
  var n=t.pstyle("border-width").pfValue;
  var i=t.pstyle("border-position").value;
  Wv(e,t,a,n,i)
}};

var $g=function(e,t){
  var a=e._private.cy;
  var n=a.styleEnabled();
  var i=a.headless();
  var s=wr();
  var o=e._private;
  var l=e.isNode();
  var u=e.isEdge();
  var v;
  var f;
  var c;
  var h;
  var d;
  var y;
  var g=o.rstyle;
  var p=l&&n?e.pstyle("bounds-expansion").pfValue:[0];
  var m=function(Ae){return Ae.pstyle("display").value!=="none"};
  var b=!n||m(e)&&(!u||m(e.source())&&m(e.target()));
  if(b){
    var w=0;
    var E=0;

    if (n&&t.includeOverlays) {
      w=e.pstyle("overlay-opacity").value;
      w!==0&&(E=e.pstyle("overlay-padding").value);
    }

    var C=0;
    var x=0;

    if (n&&t.includeUnderlays) {
      C=e.pstyle("underlay-opacity").value;
      C!==0&&(x=e.pstyle("underlay-padding").value);
    }

    var T=Math.max(E,x);
    var k=0;
    var D=0;

    if (n) {
      k=e.pstyle("width").pfValue;
      D=k/2;
    }

    if (l&&t.includeNodes) {
      var B=e.position();
      d=B.x;
      y=B.y;
      var P=e.outerWidth();
      var A=P/2;
      var R=e.outerHeight();
      var L=R/2;
      v=d-A;
      f=d+A;
      c=y-L;
      h=y+L;
      Ir(s,v,c,f,h);

      if (n) {
        ol(s,e);
      }

      if (n&&t.includeOutlines&&!i) {
        ol(s,e);
      }

      if (n) {
        Wg(s,e);
      }
    } else if (u&&t.includeEdges) {
      if(n&&!i){
        var I=e.pstyle("curve-style").strValue;
        v=Math.min(g.srcX,g.midX,g.tgtX);
        f=Math.max(g.srcX,g.midX,g.tgtX);
        c=Math.min(g.srcY,g.midY,g.tgtY);
        h=Math.max(g.srcY,g.midY,g.tgtY);
        v-=D;
        f+=D;
        c-=D;
        h+=D;
        Ir(s,v,c,f,h);

        if (I==="haystack") {var M=g.haystackPts;if(M&&M.length===2){
          v=M[0].x;
          c=M[0].y;
          f=M[1].x;
          h=M[1].y;

          if (v>f) {
            var O=v;
            v=f;
            f=O;
          }

          if(c>h){
            var V=c;
            c=h;
            h=V;
          }Ir(s,v-D,c-D,f+D,h+D)
        }} else if(I==="bezier"||I==="unbundled-bezier"||at(I,"segments")||at(I,"taxi")){var G;switch(I){case"bezier":case "unbundled-bezier":
          {
            G=g.bezierPts;break;
          }case"segments":case"taxi":case"round-segments":case "round-taxi":
          {
            G=g.linePts;break
          }}if (G!=null) {
          for(var N=0;N<G.length;N++){
            var F=G[N];
            v=F.x-D;
            f=F.x+D;
            c=F.y-D;
            h=F.y+D;
            Ir(s,v,c,f,h);
          }
        }}
      }else{
        var U=e.source();
        var Q=U.position();
        var K=e.target();
        var j=K.position();
        v=Q.x;
        f=j.x;
        c=Q.y;
        h=j.y;

        if (v>f) {
          var re=v;
          v=f;
          f=re;
        }

        if(c>h){
          var ne=c;
          c=h;
          h=ne;
        }
        v-=D;
        f+=D;
        c-=D;
        h+=D;
        Ir(s,v,c,f,h);
      }
    }

    if (n&&t.includeEdges&&u) {
      ja(s,e,"mid-source");
      ja(s,e,"mid-target");
      ja(s,e,"source");
      ja(s,e,"target");
    }

    if (n) {var J=e.pstyle("ghost").value==="yes";if(J){
      var z=e.pstyle("ghost-offset-x").pfValue;
      var q=e.pstyle("ghost-offset-y").pfValue;
      Ir(s,s.x1+z,s.y1+q,s.x2+z,s.y2+q)
    }}

    var H=o.bodyBounds=o.bodyBounds||{};
    Uo(H,s);
    ln(H,p);
    un(H,1);

    if (n) {
      v=s.x1;
      f=s.x2;
      c=s.y1;
      h=s.y2;
      Ir(s,v-T,c-T,f+T,h+T);
    }

    var Y=o.overlayBounds=o.overlayBounds||{};
    Uo(Y,s);
    ln(Y,p);
    un(Y,1);
    var te=o.labelBounds=o.labelBounds||{};

    if (te.all!=null) {
      kd(te.all);
    } else {
      te.all=wr();
    }

    if (n&&t.includeLabels) {
      t.includeMainLabels&&ys(s,e,null);
      u&&(t.includeSourceLabels&&ys(s,e,"source"),t.includeTargetLabels&&ys(s,e,"target"));
    }
  }
  s.x1=Ar(s.x1);
  s.y1=Ar(s.y1);
  s.x2=Ar(s.x2);
  s.y2=Ar(s.y2);
  s.w=Ar(s.x2-s.x1);
  s.h=Ar(s.y2-s.y1);

  if (s.w>0&&s.h>0&&b) {
    ln(s,p);
    un(s,1);
  }

  return s;
};

var $v=function(e){
  var t=0;
  var a=function(s){return(s?1:0)<<t++};
  var n=0;
  n+=a(e.incudeNodes);
  n+=a(e.includeEdges);
  n+=a(e.includeLabels);
  n+=a(e.includeMainLabels);
  n+=a(e.includeSourceLabels);
  n+=a(e.includeTargetLabels);
  n+=a(e.includeOverlays);
  n+=a(e.includeOutlines);
  return n;
};

var Uv=function(e){var t=function(o){return Math.round(o)};if(e.isEdge()){
  var a=e.source().position();
  var n=e.target().position();
  return qo([t(a.x),t(a.y),t(n.x),t(n.y)])
}else{var i=e.position();return qo([t(i.x),t(i.y)])}};

var ul=function(e,t){
  var a=e._private;
  var n;
  var i=e.isEdge();
  var s=t==null?ll:$v(t);
  var o=s===ll;

  if (a.bbCache==null) {
    n=$g(e,Pa);
    a.bbCache=n;
    a.bbCachePosKey=Uv(e);
  } else {
    n=a.bbCache;
  }

  if (!o) {
    var l=e.isNode();
    n=wr();

    if ((t.includeNodes&&l || t.includeEdges&&!l)) {
      if (t.includeOverlays) {
        tt(n,a.overlayBounds);
      } else {
        tt(n,a.bodyBounds);
      }
    }

    if (t.includeLabels) {
      if (t.includeMainLabels&&(!i||t.includeSourceLabels&&t.includeTargetLabels)) {
        tt(n,a.labelBounds.all);
      } else {
        t.includeMainLabels&&tt(n,a.labelBounds.mainRot);
        t.includeSourceLabels&&tt(n,a.labelBounds.sourceRot);
        t.includeTargetLabels&&tt(n,a.labelBounds.targetRot);
      }
    }

    n.w=n.x2-n.x1;
    n.h=n.y2-n.y1;
  }

  return n
};

var Pa={includeNodes:true,includeEdges:true,includeLabels:true,includeMainLabels:true,includeSourceLabels:true,includeTargetLabels:true,includeOverlays:true,includeUnderlays:true,includeOutlines:true,useCache:true};
var ll=$v(Pa);
var vl=cr(Pa);
pt.boundingBox=function(r){
  var e;
  var t=r===void 0||r.useCache===void 0||r.useCache===true;
  var a=Qt(function(v){var f=v._private;return f.bbCache==null||f.styleDirty||f.bbCachePosKey!==Uv(v)},function(v){return v.id()});
  if (t&&this.length===1&&!a(this[0])) {
    if (r===void 0) {
      r=Pa;
    } else {
      r=vl(r);
    }

    e=ul(this[0],r);
  } else {
    e=wr();
    r=r||Pa;
    var n=vl(r);
    var i=this;
    var s=i.cy();
    var o=s.styleEnabled();
    this.edges().forEach(a);
    this.nodes().forEach(a);

    if (o) {
      this.recalculateRenderedStyle(t);
    }

    this.updateCompoundBounds(!t);
    for(var l=0;l<i.length;l++){
      var u=i[l];

      if (a(u)) {
        u.dirtyBoundingBoxCache();
      }

      tt(e,ul(u,n));
    }
  }
  e.x1=Ar(e.x1);
  e.y1=Ar(e.y1);
  e.x2=Ar(e.x2);
  e.y2=Ar(e.y2);
  e.w=Ar(e.x2-e.x1);
  e.h=Ar(e.y2-e.y1);
  return e;
};pt.dirtyBoundingBoxCache=function(){
  for(var r=0;r<this.length;r++){
    var e=this[r]._private;
    e.bbCache=null;
    e.bbCachePosKey=null;
    e.bodyBounds=null;
    e.overlayBounds=null;
    e.labelBounds.all=null;
    e.labelBounds.source=null;
    e.labelBounds.target=null;
    e.labelBounds.main=null;
    e.labelBounds.sourceRot=null;
    e.labelBounds.targetRot=null;
    e.labelBounds.mainRot=null;
    e.arrowBounds.source=null;
    e.arrowBounds.target=null;
    e.arrowBounds["mid-source"]=null;
    e.arrowBounds["mid-target"]=null;
  }
  this.emitAndNotify("bounds");
  return this;
};pt.boundingBoxAt=function(r){
  var e=this.nodes();
  var t=this.cy();
  var a=t.hasCompoundNodes();
  var n=t.collection();

  if (a) {
    n=e.filter(function(u){return u.isParent()});
    e=e.not(n);
  }

  if (Le(r))
    {var i=r;r=function(){return i}}

  var s=function(v,f){return v._private.bbAtOldPos=r(v,f)};
  var o=function(v){return v._private.bbAtOldPos};
  t.startBatch();
  e.forEach(s).silentPositions(r);

  if (a) {
    n.dirtyCompoundBoundsCache();
    n.dirtyBoundingBoxCache();
    n.updateCompoundBounds(true);
  }

  var l=Sd(this.boundingBox({useCache:false}));
  e.silentPositions(o);

  if (a) {
    n.dirtyCompoundBoundsCache();
    n.dirtyBoundingBoxCache();
    n.updateCompoundBounds(true);
  }

  t.endBatch();
  return l;
};Zt.boundingbox=Zt.bb=Zt.boundingBox;Zt.renderedBoundingbox=Zt.renderedBoundingBox;
var Ug=pt;
var ma;
var qa;
ma=qa={};var Kv=function(e){
  e.uppercaseName=So(e.name);
  e.autoName="auto"+e.uppercaseName;
  e.labelName="label"+e.uppercaseName;
  e.outerName="outer"+e.uppercaseName;
  e.uppercaseOuterName=So(e.outerName);

  ma[e.name]=function(){
    var a=this[0];
    var n=a._private;
    var i=n.cy;
    var s=i._private.styleEnabled;
    if (a) {
      if (s) {if (a.isParent()) {
        a.updateCompoundBounds();
        return n[e.autoName]||0;
      }var o=a.pstyle(e.name);switch(o.strValue){case "label":
        {
          a.recalculateRenderedStyle();
          return n.rstyle[e.labelName]||0;
        }default:
        {
          return o.pfValue
        }}} else {
        return 1
      }
    }
  };

  ma["outer"+e.uppercaseName]=function(){
    var a=this[0];
    var n=a._private;
    var i=n.cy;
    var s=i._private.styleEnabled;
    if (a) {
      if (s) {
        var o=a[e.name]();
        var l=a.pstyle("border-position").value;
        var u;

        if (l==="center") {
          u=a.pstyle("border-width").pfValue;
        } else if (l==="outside") {
          u=2*a.pstyle("border-width").pfValue;
        } else {
          u=0;
        }

        var v=2*a.padding();return o+u+v
      } else {
        return 1
      }
    }
  };

  ma["rendered"+e.uppercaseName]=function(){var a=this[0];if(a){var n=a[e.name]();return n*this.cy().zoom()}};
  ma["rendered"+e.uppercaseOuterName]=function(){var a=this[0];if(a){var n=a[e.outerName]();return n*this.cy().zoom()}};
};Kv({name:"width"});Kv({name:"height"});qa.padding=function(){
  var r=this[0];
  var e=r._private;
  return r.isParent()?(r.updateCompoundBounds(),e.autoPadding!==void 0?e.autoPadding:r.pstyle("padding").pfValue):r.pstyle("padding").pfValue
};qa.paddedHeight=function(){var r=this[0];return r.height()+2*r.padding()};qa.paddedWidth=function(){var r=this[0];return r.width()+2*r.padding()};
var Kg=qa;

var Xg=function(e,t){if (e.isEdge()&&e.takesUpSpace()) {
  return t(e)
}};

var Yg=function(e,t){if(e.isEdge()&&e.takesUpSpace()){var a=e.cy();return On(t(e),a.zoom(),a.pan())}};

var Zg=function(e,t){if(e.isEdge()&&e.takesUpSpace()){
  var a=e.cy();
  var n=a.pan();
  var i=a.zoom();
  return t(e).map(function(s){return On(s,i,n)})
}};

var Qg=function(e){return e.renderer().getControlPoints(e)};
var Jg=function(e){return e.renderer().getSegmentPoints(e)};
var jg=function(e){return e.renderer().getSourceEndpoint(e)};
var ep=function(e){return e.renderer().getTargetEndpoint(e)};
var rp=function(e){return e.renderer().getEdgeMidpoint(e)};
var fl={controlPoints:{get:Qg,mult:true},segmentPoints:{get:Jg,mult:true},sourceEndpoint:{get:jg},targetEndpoint:{get:ep},midpoint:{get:rp}};
var tp=function(e){return"rendered"+e[0].toUpperCase()+e.substr(1)};

var ap=Object.keys(fl).reduce(function(r,e){
  var t=fl[e];
  var a=tp(e);
  r[e]=function(){return Xg(this,t.get)};

  if (t.mult) {
    r[a]=function(){return Zg(this,t.get)};
  } else {
    r[a]=function(){return Yg(this,t.get)};
  }

  return r;
},{});

var np=be({},Hg,Ug,Kg,ap);
/*!
Event object based on jQuery events, MIT license

https://jquery.org/license/
https://tldrlegal.com/license/mit-license
https://github.com/jquery/jquery/blob/master/src/event.js
*/var Xv=function(e,t){this.recycle(e,t)};function ca(){return false;}function en(){return true;}Xv.prototype={instanceString:function(){return"event"},recycle:function(e,t){
  this.isImmediatePropagationStopped = ca;
  this.isPropagationStopped = ca;
  this.isDefaultPrevented = ca;

  if (e!=null&&e.preventDefault) {
    this.type=e.type;
    this.isDefaultPrevented=e.defaultPrevented?en:ca;
  } else if (e!=null&&e.type) {
    t=e;
  } else {
    this.type=e;
  }

  if (t!=null) {
    this.originalEvent=t.originalEvent;
    this.type=t.type!=null?t.type:this.type;
    this.cy=t.cy;
    this.target=t.target;
    this.position=t.position;
    this.renderedPosition=t.renderedPosition;
    this.namespace=t.namespace;
    this.layout=t.layout;
  }

  if (this.cy!=null&&this.position!=null&&this.renderedPosition==null) {
    var a=this.position;
    var n=this.cy.zoom();
    var i=this.cy.pan();
    this.renderedPosition={x:a.x*n+i.x,y:a.y*n+i.y}
  }

  this.timeStamp=e&&e.timeStamp||Date.now()
},preventDefault:function(){
  this.isDefaultPrevented=en;var e=this.originalEvent;

  if (e&&e.preventDefault) {
    e.preventDefault();
  }
},stopPropagation:function(){
  this.isPropagationStopped=en;var e=this.originalEvent;

  if (e&&e.stopPropagation) {
    e.stopPropagation();
  }
},stopImmediatePropagation:function(){
  this.isImmediatePropagationStopped=en;
  this.stopPropagation();
},isDefaultPrevented:ca,isPropagationStopped:ca,isImmediatePropagationStopped:ca};
var Yv=/^([^.]+)(\.(?:[^.]+))?$/;
var ip=".*";
var Zv={qualifierCompare:function(e,t){return e===t},eventMatches:function(){return true;},addEventFields:function(){},callbackContext:function(e){return e},beforeEmit:function(){},afterEmit:function(){},bubble:function(){return false;},parent:function(){return null},context:null};
var cl=Object.keys(Zv);
var sp={};
function Gn(r = sp, e) {
  for(var t=0;t<cl.length;t++){var a=cl[t];this[a]=r[a]||Zv[a]}
  this.context=e||this.context;
  this.listeners=[];
  this.emitting=0;
}
var dt=Gn.prototype;

var Qv=function(e,t,a,n,i,s,o){
  if (Ue(n)) {
    i=n;
    n=null;
  }

  if (o) {
    if (s==null) {
      s=o;
    } else {
      s=be({},s,o);
    }
  }

  for(var l=_e(a)?a:a.split(/\s+/),u=0;u<l.length;u++){var v=l[u];if(!ut(v)){var f=v.match(Yv);if(f){
    var c=f[1];
    var h=f[2]?f[2]:null;
    var d=t(e,v,c,h,n,i,s);
    if (d===false) {
      break
    }
  }}}
};

var dl=function(e,t){
  e.addEventFields(e.context,t);
  return new Xv(t.type,t);
};

var op=function(e,t,a){if(dc(a)){t(e,a);return}else if(Le(a)){t(e,dl(e,a));return}for(var n=_e(a)?a:a.split(/\s+/),i=0;i<n.length;i++){var s=n[i];if(!ut(s)){var o=s.match(Yv);if(o){
  var l=o[1];
  var u=o[2]?o[2]:null;
  var v=dl(e,{type:l,namespace:u,target:e.context});
  t(e,v)
}}}};

dt.on=dt.addListener=function(r,e,t,a,n){
  Qv(this,function(i,s,o,l,u,v,f){
    if (Ue(v)) {
      i.listeners.push({event:s,callback:v,type:o,namespace:l,qualifier:u,conf:f});
    }
  },r,e,t,a,n);
  return this;
};dt.one=function(r,e,t,a){return this.on(r,e,t,a,{one:true});};dt.removeListener=dt.off=function(r,e,t,a){
  var n=this;

  if (this.emitting!==0) {
    (this.listeners = Yc(this.listeners));
  }

  var i=this.listeners;

  var s=function(u){var v=i[u];Qv(n,function(f,c,h,d,y,g){if ((v.type===h||r==="*")&&(!d&&v.namespace!==".*"||v.namespace===d)&&(!y||f.qualifierCompare(v.qualifier,y))&&(!g||v.callback===g)) {
    i.splice(u,1);
    return false;
  }},r,e,t,a)};

  for (var o=i.length-1; o>=0; o--) {
    s(o);
  }return this
};dt.removeAllListeners=function(){return this.removeListener("*")};dt.emit=dt.trigger=function(r,e,t){
  var a=this.listeners;
  var n=a.length;
  this.emitting++;

  if (!_e(e)) {
    (e = [e]);
  }

  op(this,function(i,s){
    if (t!=null) {
      a=[{event:s.event,type:s.type,namespace:s.namespace,callback:t}];
      n=a.length;
    }

    var o=function(){var v=a[l];if(v.type===s.type&&(!v.namespace||v.namespace===s.namespace||v.namespace===ip)&&i.eventMatches(i.context,v,s)){
      var f=[s];

      if (e!=null) {
        Qc(f,e);
      }

      i.beforeEmit(i.context,v,s);

      if (v.conf&&v.conf.one) {
        (i.listeners = i.listeners.filter(function(d){return d!==v}));
      }

      var c=i.callbackContext(i.context,v,s);
      var h=v.callback.apply(c,f);
      i.afterEmit(i.context,v,s);

      if (h===false) {
        s.stopPropagation();
        s.preventDefault();
      }
    }};

    for (var l=0; l<n; l++) {
      o();
    }

    if (i.bubble(i.context)&&!s.isPropagationStopped()) {
      i.parent(i.context).emit(s,e);
    }
  },r);

  this.emitting--;
  return this;
};

var up={qualifierCompare:function(e,t){return e==null||t==null?e==null&&t==null:e.sameText(t)},eventMatches:function(e,t,a){var n=t.qualifier;return n!=null?e!==a.target&&Ia(a.target)&&n.matches(a.target):true;},addEventFields:function(e,t){
  t.cy=e.cy();
  t.target=e;
},callbackContext:function(e,t,a){return t.qualifier!=null?a.target:e},beforeEmit:function(e,t){
  if (t.conf&&t.conf.once) {
    t.conf.onceCollection.removeListener(t.event,t.qualifier,t.callback);
  }
},bubble:function(){return true;},parent:function(e){return e.isChild()?e.parent():e.cy()}};

var rn=function(e){return ge(e)?new ft(e):e};

var Jv={createEmitter:function(){for(var e=0;e<this.length;e++){
  var t=this[e];
  var a=t._private;

  if (!a.emitter) {
    (a.emitter = new Gn(up,t));
  }
}return this},emitter:function(){return this._private.emitter},on:function(e,t,a){
  var n=rn(t);
  for(var i=0;i<this.length;i++){var s=this[i];s.emitter().on(e,n,a)}return this
},removeListener:function(e,t,a){
  var n=rn(t);
  for(var i=0;i<this.length;i++){var s=this[i];s.emitter().removeListener(e,n,a)}return this
},removeAllListeners:function(){for(var e=0;e<this.length;e++){var t=this[e];t.emitter().removeAllListeners()}return this},one:function(e,t,a){
  var n=rn(t);
  for(var i=0;i<this.length;i++){var s=this[i];s.emitter().one(e,n,a)}return this
},once:function(e,t,a){
  var n=rn(t);
  for(var i=0;i<this.length;i++){var s=this[i];s.emitter().on(e,n,a,{once:true,onceCollection:this})}
},emit:function(e,t){for(var a=0;a<this.length;a++){var n=this[a];n.emitter().emit(e,t)}return this},emitAndNotify:function(e,t){if (this.length!==0) {
  this.cy().notify(e,this);
  this.emit(e,t);
  return this;
}}};

Fe.eventAliasesOn(Jv);

var jv={nodes:function(e){return this.filter(function(t){return t.isNode()}).filter(e)},edges:function(e){return this.filter(function(t){return t.isEdge()}).filter(e)},byGroup:function(){
  var e=this.spawn();
  var t=this.spawn();
  for(var a=0;a<this.length;a++){
    var n=this[a];

    if (n.isNode()) {
      e.push(n);
    } else {
      t.push(n);
    }
  }return{nodes:e,edges:t}
},filter:function(e,t){if (e===void 0) {
  return this;
}if (ge(e)||Dr(e)) {
  return new ft(e).filter(this);
}if(Ue(e)){
  var a=this.spawn();
  for(var n=this, i=0;i<n.length;i++){
    var s=n[i];
    var o=t?e.apply(t,[s,i,n]):e(s,i,n);

    if (o) {
      a.push(s);
    }
  }return a
}return this.spawn()},not:function(e){if (e) {
  if (ge(e)) {
    (e = this.filter(e));
  }

  var t=this.spawn();
  for(var a=0;a<this.length;a++){
    var n=this[a];
    var i=e.has(n);

    if (!i) {
      t.push(n);
    }
  }return t
} else {
  return this
}},absoluteComplement:function(){var e=this.cy();return e.mutableElements().not(this)},intersect:function(e){
  if(ge(e)){var t=e;return this.filter(t)}
  var a=this.spawn();
  var n=this;
  var i=e;
  var s=this.length<e.length;
  var l=s?i:n;
  for(var o=s?n:i, u=0;u<o.length;u++){
    var v=o[u];

    if (l.has(v)) {
      a.push(v);
    }
  }return a
},xor:function(e){
  var t=this._private.cy;

  if (ge(e)) {
    (e = t.$(e));
  }

  var a=this.spawn();
  var n=this;
  var i=e;

  var s=function(l,u){for(var v=0;v<l.length;v++){
    var f=l[v];
    var c=f._private.data.id;
    var h=u.hasElementWithId(c);

    if (!h) {
      a.push(f);
    }
  }};

  s(n,i);
  s(i,n);
  return a;
},diff:function(e){
  var t=this._private.cy;

  if (ge(e)) {
    (e = t.$(e));
  }

  var a=this.spawn();
  var n=this.spawn();
  var i=this.spawn();
  var s=this;
  var o=e;

  var l=function(v,f,c){for(var h=0;h<v.length;h++){
    var d=v[h];
    var y=d._private.data.id;
    var g=f.hasElementWithId(y);

    if (g) {
      i.merge(d);
    } else {
      c.push(d);
    }
  }};

  l(s,o,a);
  l(o,s,n);
  return {left:a,right:n,both:i};
},add:function(e){
  var t=this._private.cy;if (!e) {
    return this;
  }if(ge(e)){var a=e;e=t.mutableElements().filter(a)}
  var n=this.spawnSelf();
  for(var i=0;i<e.length;i++){
    var s=e[i];
    var o=!this.has(s);

    if (o) {
      n.push(s);
    }
  }return n
},merge:function(e){
  var t=this._private;
  var a=t.cy;
  if (!e) {
    return this;
  }if(e&&ge(e)){var n=e;e=a.mutableElements().filter(n)}
  var i=t.map;
  for(var s=0;s<e.length;s++){
    var o=e[s];
    var l=o._private.data.id;
    var u=!i.has(l);
    if(u){
      var v=this.length++;
      this[v]=o;
      i.set(l,{ele:o,index:v});
    }
  }return this
},unmergeAt:function(e){
  var t=this[e];
  var a=t.id();
  var n=this._private;
  var i=n.map;
  this[e]=void 0;
  i.delete(a);
  var s=e===this.length-1;if(this.length>1&&!s){
    var o=this.length-1;
    var l=this[o];
    var u=l._private.data.id;
    this[o]=void 0;
    this[e]=l;
    i.set(u,{ele:l,index:e});
  }
  this.length--;
  return this;
},unmergeOne:function(e){
  e=e[0];
  var t=this._private;
  var a=e._private.data.id;
  var n=t.map;
  var i=n.get(a);
  if (!i) {
    return this;
  }var s=i.index;
  this.unmergeAt(s);
  return this;
},unmerge:function(e){var t=this._private.cy;if (!e) {
  return this;
}if(e&&ge(e)){var a=e;e=t.mutableElements().filter(a)}for (var n=0; n<e.length; n++) {
  this.unmergeOne(e[n]);
}return this},unmergeBy:function(e){for(var t=this.length-1;t>=0;t--){
  var a=this[t];

  if (e(a)) {
    this.unmergeAt(t);
  }
}return this},map:function(e,t){
  var a=[];
  for(var n=this, i=0;i<n.length;i++){
    var s=n[i];
    var o=t?e.apply(t,[s,i,n]):e(s,i,n);
    a.push(o)
  }return a
},reduce:function(e,t){
  var a=t;
  for (var n=this, i=0; i<n.length; i++) {
    a=e(a,n[i],i,n);
  }return a
},max:function(e,t){
  var a=-Infinity;
  var n;
  for(var i=this, s=0;s<i.length;s++){
    var o=i[s];
    var l=t?e.apply(t,[o,s,i]):e(o,s,i);

    if (l>a) {
      a=l;
      n=o;
    }
  }return{value:a,ele:n}
},min:function(e,t){
  var a=Infinity;
  var n;
  for(var i=this, s=0;s<i.length;s++){
    var o=i[s];
    var l=t?e.apply(t,[o,s,i]):e(o,s,i);

    if (l<a) {
      a=l;
      n=o;
    }
  }return{value:a,ele:n}
}};

var Ie=jv;
Ie.u=Ie["|"]=Ie["+"]=Ie.union=Ie.or=Ie.add;Ie["\\"]=Ie["!"]=Ie["-"]=Ie.difference=Ie.relativeComplement=Ie.subtract=Ie.not;Ie.n=Ie["&"]=Ie["."]=Ie.and=Ie.intersection=Ie.intersect;Ie["^"]=Ie["(+)"]=Ie["(-)"]=Ie.symmetricDifference=Ie.symdiff=Ie.xor;Ie.fnFilter=Ie.filterFn=Ie.stdFilter=Ie.filter;Ie.complement=Ie.abscomp=Ie.absoluteComplement;

var lp={isNode:function(){return this.group()==="nodes"},isEdge:function(){return this.group()==="edges"},isLoop:function(){return this.isEdge()&&this.source()[0]===this.target()[0]},isSimple:function(){return this.isEdge()&&this.source()[0]!==this.target()[0]},group:function(){var e=this[0];if (e) {
  return e._private.group
}}};

var ef=function(e,t){
  var a=e.cy();
  var n=a.hasCompoundNodes();
  function i(v){var f=v.pstyle("z-compound-depth");return f.value==="auto"?n?v.zDepth():0:f.value==="bottom"?-1:f.value==="top"?Js:0}var s=i(e)-i(t);if (s!==0) {
    return s;
  }function o(v){var f=v.pstyle("z-index-compare");return f.value==="auto"&&v.isNode()?1:0}var l=o(e)-o(t);if (l!==0) {
    return l;
  }var u=e.pstyle("z-index").value-t.pstyle("z-index").value;return u!==0?u:e.poolIndex()-t.poolIndex()
};

var Sn={forEach:function(e,t){if (Ue(e)) {
  for(var a=this.length,n=0;n<a;n++){
    var i=this[n];
    var s=t?e.apply(t,[i,n,this]):e(i,n,this);
    if (s===false) {
      break
    }
  }
}return this},toArray:function(){
  var e=[];
  for (var t=0; t<this.length; t++) {
    e.push(this[t]);
  }return e
},slice:function(e,t){
  var a=[];
  var n=this.length;

  if (t==null) {
    (t = n);
  }

  if (e==null) {
    (e = 0);
  }

  if (e<0) {
    (e = n+e);
  }

  if (t<0) {
    (t = n+t);
  }

  for (var i=e; i>=0&&i<t&&i<n; i++) {
    a.push(this[i]);
  }return this.spawn(a)
},size:function(){return this.length},eq:function(e){return this[e]||this.spawn()},first:function(){return this[0]||this.spawn()},last:function(){return this[this.length-1]||this.spawn()},empty:function(){return this.length===0},nonempty:function(){return!this.empty()},sort:function(e){if (!Ue(e)) {
  return this;
}var t=this.toArray().sort(e);return this.spawn(t)},sortByZIndex:function(){return this.sort(ef)},zDepth:function(){var e=this[0];if(e){
  var t=e._private;
  var a=t.group;
  if(a==="nodes"){var n=t.data.parent?e.parents().size():0;return e.isParent()?n:Js-1}else{
    var i=t.source;
    var s=t.target;
    var o=i.zDepth();
    var l=s.zDepth();
    return Math.max(o,l,0)
  }
}}};

Sn.each=Sn.forEach;var vp=function(){
  var e="undefined";
  var t=(typeof Symbol === "undefined"?"undefined":ar(Symbol))!=e&&ar(Symbol.iterator)!=e;

  if (t) {
    (Sn[Symbol.iterator] = function(){
      var a=this;
      var n={value:void 0,done:false};
      var i=0;
      var s=this.length;
      return Jl({next:function(){
        if (i<s) {
          n.value=a[i++];
        } else {
          n.value=void 0;
          n.done=true;
        }

        return n;
      }},Symbol.iterator,function(){return this});
    });
  }
};vp();
var fp=cr({nodeDimensionsIncludeLabels:false});

var fn={layoutDimensions:function(e){
  e=fp(e);var t;if (!this.takesUpSpace()) {
      t={w:0,h:0};
    } else if (e.nodeDimensionsIncludeLabels)
      {var a=this.boundingBox();t={w:a.w,h:a.h}} else {
      t={w:this.outerWidth(),h:this.outerHeight()};
    }

  if ((t.w===0 || t.h===0)) {
    (t.w = t.h=1);
  }

  return t;
},layoutPositions:function(e,t,a){
  var n=this.nodes().filter(function(E){return!E.isParent()});
  var i=this.cy();
  var s=t.eles;
  var o=function(C){return C.id()};
  var l=Qt(a,o);
  e.emit({type:"layoutstart",layout:e});
  e.animations=[];

  var u=function(C,x,T){
    var k={x:x.x1+x.w/2,y:x.y1+x.h/2};
    var D={x:(T.x-k.x)*C,y:(T.y-k.y)*C};
    return{x:k.x+D.x,y:k.y+D.y}
  };

  var v=t.spacingFactor&&t.spacingFactor!==1;

  var f=function(){
    if (!v) {
      return null;
    }
    var C=wr();
    for(var x=0;x<n.length;x++){
      var T=n[x];
      var k=l(T,x);
      mv(C,k.x,k.y)
    }return C
  };

  var c=f();

  var h=Qt(function(E,C){
    var x=l(E,C);if(v){var T=Math.abs(t.spacingFactor);x=u(T,c,x)}

    if (t.transform!=null) {
      (x = t.transform(E,x));
    }

    return x;
  },o);

  if (t.animate) {
    for(var d=0;d<n.length;d++){
      var y=n[d];
      var g=h(y,d);
      var p=t.animateFilter==null||t.animateFilter(y,d);
      if (p)
        {var m=y.animation({position:g,duration:t.animationDuration,easing:t.animationEasing});e.animations.push(m)} else {
        y.position(g)
      }
    }if(t.fit){var b=i.animation({fit:{boundingBox:s.boundingBoxAt(h),padding:t.padding},duration:t.animationDuration,easing:t.animationEasing});e.animations.push(b)}else if(t.zoom!==void 0&&t.pan!==void 0){var w=i.animation({zoom:t.zoom,pan:t.pan,duration:t.animationDuration,easing:t.animationEasing});e.animations.push(w)}
    e.animations.forEach(function(E){return E.play()});
    e.one("layoutready",t.ready);
    e.emit({type:"layoutready",layout:e});

    ta.all(e.animations.map(function(E){return E.promise()})).then(function(){
      e.one("layoutstop",t.stop);
      e.emit({type:"layoutstop",layout:e});
    });
  } else {
    n.positions(h);

    if (t.fit) {
      i.fit(t.eles,t.padding);
    }

    if (t.zoom!=null) {
      i.zoom(t.zoom);
    }

    if (t.pan) {
      i.pan(t.pan);
    }

    e.one("layoutready",t.ready);
    e.emit({type:"layoutready",layout:e});
    e.one("layoutstop",t.stop);
    e.emit({type:"layoutstop",layout:e});
  }return this
},layout:function(e){var t=this.cy();return t.makeLayout(be({},e,{eles:this}))}};

fn.createLayout=fn.makeLayout=fn.layout;function rf(r,e,t){
  var a=t._private;
  var n=a.styleCache=a.styleCache||[];
  var i;

  if ((i = n[r]) == null) {
    (i = n[r]=e(t));
  }

  return i;
}function Hn(r,e){
  r=Dt(r);
  return function(a){return rf(r,e,a)};
}function Wn(r,e){r=Dt(r);var t=function(n){return e.call(n)};return function(){var n=this[0];if (n) {
  return rf(r,t,n)
}};}var vr={recalculateRenderedStyle:function(e){
  var t=this.cy();
  var a=t.renderer();
  var n=t.styleEnabled();

  if (a&&n) {
    a.recalculateRenderedStyle(this,e);
  }

  return this;
},dirtyStyleCache:function(){
  var e=this.cy();
  var t=function(i){return i._private.styleCache=null};
  if (e.hasCompoundNodes()) {
    var a;
    a=this.spawnSelf().merge(this.descendants()).merge(this.parents());
    a.merge(a.connectedEdges());
    a.forEach(t);
  } else {
    this.forEach(function(n){
      t(n);
      n.connectedEdges().forEach(t);
    });
  }return this
},updateStyle:function(e){
  var t=this._private.cy;if (!t.styleEnabled()) {
      return this;
    }if(t.batching()){
      var a=t._private.batchStyleEles;
      a.merge(this);
      return this;
    }
  var n=t.hasCompoundNodes();
  var i=this;
  e=!!(e||e===void 0);

  if (n) {
    (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
  }

  var s=i;

  if (e) {
    s.emitAndNotify("style");
  } else {
    s.emit("style");
  }

  i.forEach(function(o){return o._private.styleDirty=true;});
  return this;
},cleanStyle:function(){var e=this.cy();if (e.styleEnabled()) {
  for(var t=0;t<this.length;t++){
    var a=this[t];

    if (a._private.styleDirty) {
      a._private.styleDirty=false;
      e.style().apply(a);
    }
  }
}},parsedStyle:function(e, t = true) {
  var a=this[0];
  var n=a.cy();
  if(n.styleEnabled()&&a){
    if (a._private.styleDirty) {
      a._private.styleDirty=false;
      n.style().apply(a);
    }

    var i=a._private.style[e];return i??(t?n.style().getDefaultProperty(e):null)
  }
},numericStyle:function(e){var t=this[0];if(t.cy().styleEnabled()&&t){var a=t.pstyle(e);return a.pfValue!==void 0?a.pfValue:a.value}},numericStyleUnits:function(e){var t=this[0];if (t.cy().styleEnabled()&&t) {
  return t.pstyle(e).units
}},renderedStyle:function(e){var t=this.cy();if (!t.styleEnabled()) {
  return this;
}var a=this[0];if (a) {
  return t.style().getRenderedStyle(a,e)
}},style:function(e,t){
  var a=this.cy();if (!a.styleEnabled()) {
    return this;
  }
  var n=false;
  var i=a.style();
  if(Le(e)){
    var s=e;
    i.applyBypass(this,s,n);
    this.emitAndNotify("style");
  }else if (ge(e)) {
    if (t===void 0)
      {var o=this[0];return o?i.getStylePropertyValue(o,e):void 0} else {
      i.applyBypass(this,e,t,n);
      this.emitAndNotify("style");
    }
  } else
    if(e===void 0){var l=this[0];return l?i.getRawStyle(l):void 0}return this
},removeStyle:function(e){
  var t=this.cy();if (!t.styleEnabled()) {
    return this;
  }
  var a=false;
  var n=t.style();
  var i=this;
  if (e===void 0) {
    for(var s=0;s<i.length;s++){var o=i[s];n.removeAllBypasses(o,a)}
  } else
    {e=e.split(/\s+/);for(var l=0;l<i.length;l++){var u=i[l];n.removeBypasses(u,e,a)}}
  this.emitAndNotify("style");
  return this;
},show:function(){
  this.css("display","element");
  return this;
},hide:function(){
  this.css("display","none");
  return this;
},effectiveOpacity:function(){
  var e=this.cy();if (!e.styleEnabled()) {
    return 1;
  }
  var t=e.hasCompoundNodes();
  var a=this[0];
  if(a){
    var n=a._private;
    var i=a.pstyle("opacity").value;
    if (!t) {
      return i;
    }var s=n.data.parent?a.parents():null;if (s) {
      for(var o=0;o<s.length;o++){
        var l=s[o];
        var u=l.pstyle("opacity").value;
        i=u*i
      }
    }return i
  }
},transparent:function(){
  var e=this.cy();if (!e.styleEnabled()) {
    return false;
  }
  var t=this[0];
  var a=t.cy().hasCompoundNodes();
  if (t) {
    return a?t.effectiveOpacity()===0:t.pstyle("opacity").value===0
  }
},backgrounding:function(){var e=this.cy();if (!e.styleEnabled()) {
  return false;
}var t=this[0];return!!t._private.backgrounding}};function ms(r,e){
  var t=r._private;
  var a=t.data.parent?r.parents():null;
  if (a) {
    for(var n=0;n<a.length;n++){var i=a[n];if (!e(i)) {
      return false;
    }}
  }return true;
}function vo(r){
  var e=r.ok;
  var t=r.edgeOkViaNode||r.ok;
  var a=r.parentOk||r.ok;
  return function(){
    var n=this.cy();if (!n.styleEnabled()) {
      return true;
    }
    var i=this[0];
    var s=n.hasCompoundNodes();
    if(i){
      var o=i._private;if (!e(i)) {
        return false;
      }if (i.isNode()) {
        return!s||ms(i,a);
      }
      var l=o.source;
      var u=o.target;
      return t(l)&&(!s||ms(l,t))&&(l===u||t(u)&&(!s||ms(u,t)))
    }
  };
}var aa=Hn("eleTakesUpSpace",function(r){return r.pstyle("display").value==="element"&&r.width()!==0&&(r.isNode()?r.height()!==0:true);});vr.takesUpSpace=Wn("takesUpSpace",vo({ok:aa}));
var cp=Hn("eleInteractive",function(r){return r.pstyle("events").value==="yes"&&r.pstyle("visibility").value==="visible"&&aa(r)});
var dp=Hn("parentInteractive",function(r){return r.pstyle("visibility").value==="visible"&&aa(r)});
vr.interactive=Wn("interactive",vo({ok:cp,parentOk:dp,edgeOkViaNode:aa}));vr.noninteractive=function(){var r=this[0];if (r) {
  return!r.interactive()
}};
var hp=Hn("eleVisible",function(r){return r.pstyle("visibility").value==="visible"&&r.pstyle("opacity").pfValue!==0&&aa(r)});
var gp=aa;
vr.visible=Wn("visible",vo({ok:hp,edgeOkViaNode:gp}));vr.hidden=function(){var r=this[0];if (r) {
  return!r.visible()
}};vr.isBundledBezier=Wn("isBundledBezier",function(){return this.cy().styleEnabled()?!this.removed()&&this.pstyle("curve-style").value==="bezier"&&this.takesUpSpace():false;});vr.bypass=vr.css=vr.style;vr.renderedCss=vr.renderedStyle;vr.removeBypass=vr.removeCss=vr.removeStyle;vr.pstyle=vr.parsedStyle;var ot={};function hl(r){return function(...args) {
  var e=args;
  var t=[];
  if(e.length===2){
    var a=e[0];
    var n=e[1];
    this.on(r.event,a,n)
  }else if(e.length===1&&Ue(e[0])){var i=e[0];this.on(r.event,i)}else if(e.length===0||e.length===1&&_e(e[0])){
    var s=e.length===1?e[0]:null;
    for(var o=0;o<this.length;o++){
      var l=this[o];
      var u=!r.ableField||l._private[r.ableField];
      var v=l._private[r.field]!=r.value;
      if(r.overrideAble){var f=r.overrideAble(l);if (f!==void 0&&(u=f,!f)) {
        return this
      }}

      if (u) {
        l._private[r.field]=r.value;
        v&&t.push(l);
      }
    }var c=this.spawn(t);
    c.updateStyle();
    c.emit(r.event);

    if (s) {
      c.emit(s);
    }
  }return this
};}function na(r){
  ot[r.field]=function(){var e=this[0];if(e){if(r.overrideField){var t=r.overrideField(e);if (t!==void 0) {
    return t
  }}return e._private[r.field]}};

  ot[r.on]=hl({event:r.on,field:r.field,ableField:r.ableField,overrideAble:r.overrideAble,value:true});
  ot[r.off]=hl({event:r.off,field:r.field,ableField:r.ableField,overrideAble:r.overrideAble,value:false});
}na({field:"locked",overrideField:function(e){return e.cy().autolock()?true:void 0;},on:"lock",off:"unlock"});na({field:"grabbable",overrideField:function(e){return e.cy().autoungrabify()||e.pannable()?false:void 0;},on:"grabify",off:"ungrabify"});na({field:"selected",ableField:"selectable",overrideAble:function(e){return e.cy().autounselectify()?false:void 0;},on:"select",off:"unselect"});na({field:"selectable",overrideField:function(e){return e.cy().autounselectify()?false:void 0;},on:"selectify",off:"unselectify"});ot.deselect=ot.unselect;ot.grabbed=function(){var r=this[0];if (r) {
  return r._private.grabbed
}};na({field:"active",on:"activate",off:"unactivate"});na({field:"pannable",on:"panify",off:"unpanify"});ot.inactive=function(){var r=this[0];if (r) {
  return!r._private.active
}};
var gr={};

var gl=function(e){return function(a){
  var i=[];
  for(var n=this, s=0;s<n.length;s++){var o=n[s];if(o.isNode()){
    var l=false;
    for(var u=o.connectedEdges(), v=0;v<u.length;v++){
      var f=u[v];
      var c=f.source();
      var h=f.target();
      if(e.noIncomingEdges&&h===o&&c!==o||e.noOutgoingEdges&&c===o&&h!==o){l=true;break}
    }

    if (!l) {
      i.push(o);
    }
  }}return this.spawn(i,true).filter(a);
};};

var pl=function(e){return function(t){
  var n=[];
  for(var a=this, i=0;i<a.length;i++){var s=a[i];if (s.isNode()) {
    for(var o=s.connectedEdges(),l=0;l<o.length;l++){
      var u=o[l];
      var v=u.source();
      var f=u.target();

      if (e.outgoing&&v===s) {
        n.push(u);
        n.push(f);
      } else if (e.incoming&&f===s) {
        n.push(u);
        n.push(v);
      }
    }
  }}return this.spawn(n,true).filter(t);
};};

var yl=function(e){return function(t){
  var a=this;
  var n=[];
  var i={};

  while (true) {
    var s=e.outgoing?a.outgoers():a.incomers();if (s.length===0) {
      break;
    }
    var o=false;
    for(var l=0;l<s.length;l++){
      var u=s[l];
      var v=u.id();

      if (!i[v]) {
        i[v]=true;
        n.push(u);
        o=true;
      }
    }if (!o) {
      break;
    }a=s
  }

  return this.spawn(n,true).filter(t);
};};

gr.clearTraversalCache=function(){for (var r=0; r<this.length; r++) {
  this[r]._private.traversalCache=null
}};be(gr,{roots:gl({noIncomingEdges:true}),leaves:gl({noOutgoingEdges:true}),outgoers:Rr(pl({outgoing:true}),"outgoers"),successors:yl({outgoing:true}),incomers:Rr(pl({incoming:true}),"incomers"),predecessors:yl({})});be(gr,{neighborhood:Rr(function(r){
  var e=[];
  for (var t=this.nodes(), a=0; a<t.length; a++) {
    var n=t[a];
    for(var i=n.connectedEdges(), s=0;s<i.length;s++){
      var o=i[s];
      var l=o.source();
      var u=o.target();
      var v=n===l?u:l;

      if (v.length>0) {
        e.push(v[0]);
      }

      e.push(o[0]);
    }
  }return this.spawn(e,true).filter(r);
},"neighborhood"),closedNeighborhood:function(e){return this.neighborhood().add(this).filter(e)},openNeighborhood:function(e){return this.neighborhood(e)}});gr.neighbourhood=gr.neighborhood;gr.closedNeighbourhood=gr.closedNeighborhood;gr.openNeighbourhood=gr.openNeighborhood;be(gr,{source:Rr(function(e){
  var t=this[0];
  var a;

  if (t) {
    (a = t._private.source||t.cy().collection());
  }

  return a&&e?a.filter(e):a;
},"source"),target:Rr(function(e){
  var t=this[0];
  var a;

  if (t) {
    (a = t._private.target||t.cy().collection());
  }

  return a&&e?a.filter(e):a;
},"target"),sources:ml({attr:"source"}),targets:ml({attr:"target"})});function ml(r){return function(t){
  var a=[];
  for(var n=0;n<this.length;n++){
    var i=this[n];
    var s=i._private[r.attr];

    if (s) {
      a.push(s);
    }
  }return this.spawn(a,true).filter(t);
};}be(gr,{edgesWith:Rr(bl(),"edgesWith"),edgesTo:Rr(bl({thisIsSrc:true}),"edgesTo")});function bl(r){return function(t){
  var a=[];
  var n=this._private.cy;
  var i=r||{};

  if (ge(t)) {
    (t = n.$(t));
  }

  for (var s=0; s<t.length; s++) {
      for(var o=t[s]._private.edges,l=0;l<o.length;l++){
        var u=o[l];
        var v=u._private.data;
        var f=this.hasElementWithId(v.source)&&t.hasElementWithId(v.target);
        var c=t.hasElementWithId(v.source)&&this.hasElementWithId(v.target);
        var h=f||c;

        if (h) {
          if (!i.thisIsSrc && !i.thisIsTgt || (!i.thisIsSrc || f) && (!i.thisIsTgt || c)) {
            a.push(u);
          }
        }
      }
    }return this.spawn(a,true);
};}be(gr,{connectedEdges:Rr(function(r){
  var e=[];
  for(var t=this, a=0;a<t.length;a++){var n=t[a];if (n.isNode()) {
    for(var i=n._private.edges,s=0;s<i.length;s++){var o=i[s];e.push(o)}
  }}return this.spawn(e,true).filter(r);
},"connectedEdges"),connectedNodes:Rr(function(r){
  var e=[];
  for(var t=this, a=0;a<t.length;a++){
    var n=t[a];

    if (n.isEdge()) {
      e.push(n.source()[0]);
      e.push(n.target()[0]);
    }
  }return this.spawn(e,true).filter(r);
},"connectedNodes"),parallelEdges:Rr(wl(),"parallelEdges"),codirectedEdges:Rr(wl({codirected:true}),"codirectedEdges")});function wl(r){
  var e={codirected:false};
  r=be({},e,r);

  return function(a){
    var n=[];
    var s=r;
    for (var i=this.edges(), o=0; o<i.length; o++) {
      var l=i[o];
      var u=l._private;
      var v=u.source;
      var f=v._private.data.id;
      var c=u.data.target;
      for(var h=v._private.edges, d=0;d<h.length;d++){
        var y=h[d];
        var g=y._private.data;
        var p=g.target;
        var m=g.source;
        var b=p===c&&m===f;
        var w=f===p&&c===m;

        if ((s.codirected&&b || !s.codirected&&(b||w))) {
          n.push(y);
        }
      }
    }return this.spawn(n,true).filter(a);
  };
}be(gr,{components:function(e){
  var t=this;
  var a=t.cy();
  var n=a.collection();
  var i=e==null?t.nodes():e.nodes();
  var s=[];

  if (e!=null&&i.empty()) {
    (i = e.sources());
  }

  var o=function(v,f){
      n.merge(v);
      i.unmerge(v);
      f.merge(v);
    };if (i.empty()) {
      return t.spawn();
    }var l=function(){
      var v=a.collection();s.push(v);var f=i[0];
      o(f,v);
      t.bfs({directed:false,roots:f,visit:function(h){return o(h,v)}});
      v.forEach(function(c){c.connectedEdges().forEach(function(h){
        if (t.has(h)&&v.has(h.source())&&v.has(h.target())) {
          v.merge(h);
        }
      })});
    };do {
      l();
    } while (i.length>0);return s
},component:function(){var e=this[0];return e.cy().mutableElements().components(e)[0]}});gr.componentsOf=gr.components;

var fr=function(e, t, a = false, n = false) {
  if(e===void 0){$e("A collection must have a reference to the core");return}
  var i=new Xr;
  var s=false;
  if (!t) {
    t=[];
  } else if(t.length>0&&Le(t[0])&&!Ia(t[0])){
    s=true;
    var o=[];
    var l=new ra;
    for(var u=0, v=t.length;u<v;u++){
      var f=t[u];

      if (f.data==null) {
        (f.data = {});
      }

      var c=f.data;if (c.id==null) {
          c.id=gv();
        } else if (e.hasElementWithId(c.id)||l.has(c.id)) {
          continue;
        }var h=new In(e,f,false);
      o.push(h);
      l.add(c.id);
    }t=o
  }this.length=0;for(var d=0,y=t.length;d<y;d++){var g=t[d][0];if(g!=null){
    var p=g._private.data.id;

    if ((!a || !i.has(p))) {
      a&&i.set(p,{index:this.length,ele:g});
      this[this.length]=g;
      this.length++;
    }
  }}

  this._private={eles:this,cy:e,get map(){
    if (this.lazyMap==null) {
      this.rebuildMap();
    }

    return this.lazyMap;
  },set map(m){this.lazyMap=m},rebuildMap:function(){
    var b=this.lazyMap=new Xr;
    for(var w=this.eles, E=0;E<w.length;E++){var C=w[E];b.set(C.id(),{index:E,ele:C})}
  }};

  if (a) {
    (this._private.map = i);
  }

  if (s&&!n) {
    this.restore();
  }
};

var He=In.prototype=fr.prototype=Object.create(Array.prototype);
He.instanceString=function(){return"collection"};He.spawn=function(r,e){return new fr(this.cy(),r,e)};He.spawnSelf=function(){return this.spawn(this)};He.cy=function(){return this._private.cy};He.renderer=function(){return this._private.cy.renderer()};He.element=function(){return this[0]};He.collection=function(){return rv(this)?this:new fr(this._private.cy,[this])};He.unique=function(){return new fr(this._private.cy,this,true);};He.hasElementWithId=function(r){
  r=""+r;
  return this._private.map.has(r);
};He.getElementById=function(r){
  r=""+r;
  var e=this._private.cy;
  var t=this._private.map.get(r);
  return t?t.ele:new fr(e)
};He.$id=He.getElementById;He.poolIndex=function(){
  var r=this._private.cy;
  var e=r._private.elements;
  var t=this[0]._private.data.id;
  return e._private.map.get(t).index
};He.indexOf=function(r){var e=r[0]._private.data.id;return this._private.map.get(e).index};He.indexOfId=function(r){
  r=""+r;
  return this._private.map.get(r).index;
};He.json=function(r){
  var e=this.element();
  var t=this.cy();
  if (e==null&&r) {
    return this;
  }if(e!=null){var a=e._private;if(Le(r)){
  t.startBatch();

  if (r.data) {e.data(r.data);var n=a.data;if(e.isEdge()){
    var i=false;
    var s={};
    var o=r.data.source;
    var l=r.data.target;

    if (o!=null&&o!=n.source) {
      s.source=""+o;
      i=true;
    }

    if (l!=null&&l!=n.target) {
      s.target=""+l;
      i=true;
    }

    if (i) {
      (e = e.move(s));
    }
  }else{
    var u="parent"in r.data;
    var v=r.data.parent;

    if (u&&(v!=null||n.parent!=null)&&v!=n.parent) {
      v===void 0&&(v=null);
      v!=null&&(v=""+v);
      e=e.move({parent:v});
    }
  }}

  if (r.position) {
    e.position(r.position);
  }

  var f=function(y,g,p){
    var m=r[y];

    if (m!=null&&m!==a[y]) {
      if (m) {
        e[g]();
      } else {
        e[p]();
      }
    }
  };
  f("removed","remove","restore");
  f("selected","select","unselect");
  f("selectable","selectify","unselectify");
  f("locked","lock","unlock");
  f("grabbable","grabify","ungrabify");
  f("pannable","panify","unpanify");

  if (r.classes!=null) {
    e.classes(r.classes);
  }

  t.endBatch();
  return this;
}else if(r===void 0){
    var c={data:qr(a.data),position:qr(a.position),group:a.group,removed:a.removed,selected:a.selected,selectable:a.selectable,locked:a.locked,grabbable:a.grabbable,pannable:a.pannable,classes:null};c.classes="";var h=0;
    a.classes.forEach(function(d){return c.classes+=h++===0?d:" "+d});
    return c;
  }}
};He.jsons=function(){
  var r=[];
  for(var e=0;e<this.length;e++){
    var t=this[e];
    var a=t.json();
    r.push(a)
  }return r
};He.clone=function(){
  var r=this.cy();
  var e=[];
  for(var t=0;t<this.length;t++){
    var a=this[t];
    var n=a.json();
    var i=new In(r,n,false);
    e.push(i)
  }return new fr(r,e)
};He.copy=He.clone;He.restore=function(r = true, e = true) {
  var t=this;
  var a=t.cy();
  var n=a._private;
  var i=[];
  var s=[];
  var o;
  for(var l=0, u=t.length;l<u;l++){
    var v=t[l];

    if (!e || v.removed()) {
      if (v.isNode()) {
        i.push(v);
      } else {
        s.push(v);
      }
    }
  }o=i.concat(s);
  var f;

  var c=function(){
    o.splice(f,1);
    f--;
  };

  for(f=0;f<o.length;f++){
    var h=o[f];
    var d=h._private;
    var y=d.data;
    h.clearTraversalCache();

    if (!(!e&&!d.removed)) {if (y.id===void 0) {
      y.id=gv();
    } else if (ae(y.id)) {
      y.id=""+y.id;
    } else if(ut(y.id)||!ge(y.id)){
      $e("Can not create element with invalid string ID `"+y.id+"`");
      c();
      continue
    }else if(a.hasElementWithId(y.id)){
      $e("Can not create second element with ID `"+y.id+"`");
      c();
      continue
    }}

    var g=y.id;if(h.isNode()){
      var p=d.position;

      if (p.x==null) {
        (p.x = 0);
      }

      if (p.y==null) {
        (p.y = 0);
      }
    }if(h.isEdge()){
      var m=h;
      var b=["source","target"];
      var E=false;
      for(var w=b.length, C=0;C<w;C++){
        var x=b[C];
        var T=y[x];

        if (ae(T)) {
          (T = y[x]=""+y[x]);
        }

        if (T==null||T==="") {
          $e("Can not create edge `"+g+"` with unspecified "+x);
          E=true;
        } else if (!a.hasElementWithId(T)) {
          $e("Can not create edge `"+g+"` with nonexistant "+x+" `"+T+"`");
          E=true;
        }
      }if(E){c();continue}
      var k=a.getElementById(y.source);
      var D=a.getElementById(y.target);

      if (k.same(D)) {
        k._private.edges.push(m);
      } else {
        k._private.edges.push(m);
        D._private.edges.push(m);
      }

      m._private.source=k;
      m._private.target=D;
    }
    d.map=new Xr;
    d.map.set(g,{ele:h,index:0});
    d.removed=false;

    if (e) {
      a.addToPool(h);
    }
  }for(var B=0;B<i.length;B++){
    var P=i[B];
    var A=P._private.data;

    if (ae(A.parent)) {
      (A.parent = ""+A.parent);
    }

    var R=A.parent;
    var L=R!=null;
    if(L||P._private.parent){var I=P._private.parent?a.collection().merge(P._private.parent):a.getElementById(R);if (I.empty()) {
      A.parent=void 0;
    } else if (I[0].removed()) {
      Ve("Node added with missing parent, reference to parent removed");
      A.parent=void 0;
      P._private.parent=null;
    } else {
      var M=false;
      for(var O=I;!O.empty();){if(P.same(O)){
        M=true;
        A.parent=void 0;
        break
      }O=O.parent()}

      if (!M) {
        I[0]._private.children.push(P);
        P._private.parent=I[0];
        n.hasCompoundNodes=true;
      }
    }}
  }if(o.length>0){
    for(var V=o.length===t.length?t:new fr(a,o),G=0;G<V.length;G++){
      var N=V[G];

      if (!N.isNode()) {
        N.parallelEdges().clearTraversalCache();
        N.source().clearTraversalCache();
        N.target().clearTraversalCache();
      }
    }var F;

    if (n.hasCompoundNodes) {
      F=a.collection().merge(V).merge(V.connectedNodes()).merge(V.parent());
    } else {
      F=V;
    }

    F.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(r);

    if (r) {
      V.emitAndNotify("add");
    } else if (e) {
      V.emit("add");
    }
  }return t
};He.removed=function(){var r=this[0];return r&&r._private.removed};He.inside=function(){var r=this[0];return r&&!r._private.removed};He.remove=function(r = true, e = true) {
  var t=this;
  var a=[];
  var n={};
  var i=t._private.cy;
  function s(R){for (var L=R._private.edges,I=0; I<L.length; I++) {
    l(L[I])
  }}function o(R){for (var L=R._private.children,I=0; I<L.length; I++) {
      l(L[I])
    }}function l(R){
    var L=n[R.id()];

    if ((!e || !R.removed()) && !L) {
      n[R.id()]=true;
      R.isNode()?(a.push(R),s(R),o(R)):a.unshift(R);
    }
  }for(var u=0,v=t.length;u<v;u++){var f=t[u];l(f)}function c(R,L){
      var I=R._private.edges;
      lt(I,L);
      R.clearTraversalCache();
    }function h(R){R.clearTraversalCache()}var d=[];d.ids={};function y(R,L){
    L=L[0];
    R=R[0];
    var I=R._private.children;
    var M=R.id();
    lt(I,L);
    L._private.parent=null;

    if (!d.ids[M]) {
      d.ids[M]=true;
      d.push(R);
    }
  }
  t.dirtyCompoundBoundsCache();

  if (e) {
    i.removeFromPool(a);
  }

  for(var g=0;g<a.length;g++){
    var p=a[g];if(p.isEdge()){
      var m=p.source()[0];
      var b=p.target()[0];
      c(m,p);
      c(b,p);
      for(var w=p.parallelEdges(),E=0;E<w.length;E++){
        var C=w[E];
        h(C);

        if (C.isBundledBezier()) {
          C.dirtyBoundingBoxCache();
        }
      }
    }else{
      var x=p.parent();

      if (x.length!==0) {
        y(x,p);
      }
    }

    if (e) {
      (p._private.removed = true);
    }
  }var T=i._private.elements;i._private.hasCompoundNodes=false;for(var k=0;k<T.length;k++){var D=T[k];if(D.isParent()){i._private.hasCompoundNodes=true;break}}var B=new fr(this.cy(),a);

  if (B.size()>0) {
    if (r) {
      B.emitAndNotify("remove");
    } else if (e) {
      B.emit("remove");
    }
  }

  for(var P=0;P<d.length;P++){
    var A=d[P];

    if ((!e || !A.removed())) {
      A.updateStyle();
    }
  }return B
};He.move=function(r){
  var e=this._private.cy;
  var t=this;
  var a=false;
  var n=false;
  var i=function(d){return d==null?d:""+d};
  if(r.source!==void 0||r.target!==void 0){
    var s=i(r.source);
    var o=i(r.target);
    var l=s!=null&&e.hasElementWithId(s);
    var u=o!=null&&e.hasElementWithId(o);

    if ((l || u)) {
      e.batch(function(){
        t.remove(a,n);
        t.emitAndNotify("moveout");
        for(var h=0;h<t.length;h++){
          var d=t[h];
          var y=d._private.data;

          if (d.isEdge()) {
            l&&(y.source=s);
            u&&(y.target=o);
          }
        }t.restore(a,n)
      });

      t.emitAndNotify("move");
    }
  }else if(r.parent!==void 0){
    var v=i(r.parent);
    var f=v===null||e.hasElementWithId(v);
    if(f){
      var c=v===null?void 0:v;

      e.batch(function(){var h=t.remove(a,n);h.emitAndNotify("moveout");for(var d=0;d<t.length;d++){
        var y=t[d];
        var g=y._private.data;

        if (y.isNode()) {
          (g.parent = c);
        }
      }h.restore(a,n)});

      t.emitAndNotify("move");
    }
  }return this
};[Dv,kg,vn,st,jt,Gg,_n,np,Jv,jv,lp,Sn,fn,vr,ot,gr].forEach(function(r){be(He,r)});var pp={add:function(e){
  var t;
  var a=this;
  if(Dr(e)){var n=e;if (n._private.cy===a) {
    t=n.restore();
  } else {
    var i=[];
    for(var s=0;s<n.length;s++){var o=n[s];i.push(o.json())}t=new fr(a,i)
  }}else if(_e(e)){var l=e;t=new fr(a,l)}else if(Le(e)&&(_e(e.nodes)||_e(e.edges))){
    var u=e;
    var v=[];
    var f=["nodes","edges"];
    for(var c=0, h=f.length;c<h;c++){
      var d=f[c];
      var y=u[d];
      if (_e(y)) {
        for(var g=0,p=y.length;g<p;g++){var m=be({group:d},y[g]);v.push(m)}
      }
    }t=new fr(a,v)
  }else{var b=e;t=new In(a,b).collection()}return t
},remove:function(e){if(!Dr(e)){if(ge(e)){var t=e;e=this.$(t)}}return e.remove()}};/*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */function yp(r,e,t,a){
  var n=4;
  var i=0.001/* .001 */;
  var s=1e-7;
  var o=10;
  var l=11;
  var u=1/(l-1);
  var v=typeof Float32Array !== "undefined";
  if (arguments.length!==4) {
    return false;
  }for (var f=0; f<4; ++f) {
    if (typeof arguments[f]!="number"||isNaN(arguments[f])||!isFinite(arguments[f])) {
      return false;
    }
  }
  r=Math.min(r,1);
  t=Math.min(t,1);
  r=Math.max(r,0);
  t=Math.max(t,0);
  var c=v?new Float32Array(l):new Array(l);function h(D,B){return 1-3*B+3*D}function d(D,B){return 3*B-6*D}function y(D){return 3*D}function g(D,B,P){return((h(B,P)*D+d(B,P))*D+y(B))*D}function p(D,B,P){return 3*h(B,P)*D*D+2*d(B,P)*D+y(B)}function m(D,B){for(var P=0;P<n;++P){var A=p(B,r,t);if (A===0) {
    return B;
  }var R=g(B,r,t)-D;B-=R/A}return B}function b(){for (var D=0; D<l; ++D) {
    c[D]=g(D*u,r,t)
  }}function w(D,B,P){
    var A;
    var R;
    var L=0;
    do {
      R=B+(P-B)/2;
      A=g(R,r,t)-D;

      if (A>0) {
        P=R;
      } else {
        B=R;
      }
    } while (Math.abs(A)>s&&++L<o);return R
  }function E(D){
    var B=0;
    for (var P=1, A=l-1; P!==A&&c[P]<=D; ++P) {
      B+=u;
    }--P;
    var R=(D-c[P])/(c[P+1]-c[P]);
    var L=B+R*u;
    var I=p(L,r,t);
    return I>=i?m(D,L):I===0?L:w(D,B,B+u)
  }var C=false;function x(){
  C=true;

  if ((r!==e || t!==a)) {
    b();
  }
}var T=function(B){
  if (!C) {
    x();
  }

  return r===e&&t===a?B:B===0?0:B===1?1:g(E(B),e,a);
};T.getControlPoints=function(){return[{x:r,y:e},{x:t,y:a}]};var k="generateBezier("+[r,e,t,a]+")";
  T.toString=function(){return k};
  return T;
}

/*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */var mp=(function(){function r(a){return-a.tension*a.x-a.friction*a.v}function e(a,n,i){var s={x:a.x+i.dx*n,v:a.v+i.dv*n,tension:a.tension,friction:a.friction};return{dx:s.v,dv:r(s)}}function t(a,n){
  var i={dx:a.v,dv:r(a)};
  var s=e(a,n*0.5/* .5 */,i);
  var o=e(a,n*0.5/* .5 */,s);
  var l=e(a,n,o);
  var u=1/6*(i.dx+2*(s.dx+o.dx)+l.dx);
  var v=1/6*(i.dv+2*(s.dv+o.dv)+l.dv);
  a.x=a.x+u*n;
  a.v=a.v+v*n;
  return a;
}return function a(n,i,s){
  var o={x:-1,v:0,tension:null,friction:null};
  var l=[0];
  var u=0;
  var v=1/10000/* 1e4 */;
  var f=16/1000/* 1e3 */;
  var c;
  var h;
  var d;
  n=parseFloat(n)||500;
  i=parseFloat(i)||20;
  s=s||null;
  o.tension=n;
  o.friction=i;
  c=s!==null;

  if (c) {
    u=a(n,i);
    h=u/s*f;
  } else {
    h=f;
  }

  while ((d=t(d||o,h), l.push(1+d.x), u+=16, Math.abs(d.x)>v&&Math.abs(d.v)>v))
    {}

  return c?function(y){return l[y*(l.length-1)|0]}:u
};})();

var Ge=function(e,t,a,n){var i=yp(e,t,a,n);return function(s,o,l){return s+(o-s)*i(l)}};

var cn={linear:function(e,t,a){return e+(t-e)*a},ease:Ge(0.25/* .25 */,0.1/* .1 */,0.25/* .25 */,1),"ease-in":Ge(0.42/* .42 */,0,1,1),"ease-out":Ge(0,0,0.58/* .58 */,1),"ease-in-out":Ge(0.42/* .42 */,0,0.58/* .58 */,1),"ease-in-sine":Ge(0.47/* .47 */,0,0.745/* .745 */,0.715/* .715 */),"ease-out-sine":Ge(0.39/* .39 */,0.575/* .575 */,0.565/* .565 */,1),"ease-in-out-sine":Ge(0.445/* .445 */,0.05/* .05 */,0.55/* .55 */,0.95/* .95 */),"ease-in-quad":Ge(0.55/* .55 */,0.085/* .085 */,0.68/* .68 */,0.53/* .53 */),"ease-out-quad":Ge(0.25/* .25 */,0.46/* .46 */,0.45/* .45 */,0.94/* .94 */),"ease-in-out-quad":Ge(0.455/* .455 */,0.03/* .03 */,0.515/* .515 */,0.955/* .955 */),"ease-in-cubic":Ge(0.55/* .55 */,0.055/* .055 */,0.675/* .675 */,0.19/* .19 */),"ease-out-cubic":Ge(0.215/* .215 */,0.61/* .61 */,0.355/* .355 */,1),"ease-in-out-cubic":Ge(0.645/* .645 */,0.045/* .045 */,0.355/* .355 */,1),"ease-in-quart":Ge(0.895/* .895 */,0.03/* .03 */,0.685/* .685 */,0.22/* .22 */),"ease-out-quart":Ge(0.165/* .165 */,0.84/* .84 */,0.44/* .44 */,1),"ease-in-out-quart":Ge(0.77/* .77 */,0,0.175/* .175 */,1),"ease-in-quint":Ge(0.755/* .755 */,0.05/* .05 */,0.855/* .855 */,0.06/* .06 */),"ease-out-quint":Ge(0.23/* .23 */,1,0.32/* .32 */,1),"ease-in-out-quint":Ge(0.86/* .86 */,0,0.07/* .07 */,1),"ease-in-expo":Ge(0.95/* .95 */,0.05/* .05 */,0.795/* .795 */,0.035/* .035 */),"ease-out-expo":Ge(0.19/* .19 */,1,0.22/* .22 */,1),"ease-in-out-expo":Ge(1,0,0,1),"ease-in-circ":Ge(0.6/* .6 */,0.04/* .04 */,0.98/* .98 */,0.335/* .335 */),"ease-out-circ":Ge(0.075/* .075 */,0.82/* .82 */,0.165/* .165 */,1),"ease-in-out-circ":Ge(0.785/* .785 */,0.135/* .135 */,0.15/* .15 */,0.86/* .86 */),spring:function(e,t,a){if (a===0) {
  return cn.linear;
}var n=mp(e,t,a);return function(i,s,o){return i+(s-i)*n(o)}},"cubic-bezier":Ge};

function xl(r,e,t,a,n){
  if (a===1||e===t) {
    return t;
  }var i=n(e,t,a);

  if (r != null) {
    (r.roundValue||r.color)&&(i=Math.round(i));
    r.min!==void 0&&(i=Math.max(i,r.min));
    r.max!==void 0&&(i=Math.min(i,r.max));
  }

  return i;
}function El(r,e){return r.pfValue!=null||r.value!=null?r.pfValue!=null&&(e==null||e.type.units!=="%")?r.pfValue:r.value:r}function zt(r,e,t,a,n){
  var i=n!=null?n.type:null;

  if (t<0) {
    t=0;
  } else if (t>1) {
    (t = 1);
  }

  var s=El(r,n);
  var o=El(e,n);
  if (ae(s)&&ae(o)) {
    return xl(i,s,o,t,a);
  }if(_e(s)&&_e(o)){
      var l=[];
      for(var u=0;u<o.length;u++){
        var v=s[u];
        var f=o[u];
        if (v!=null&&f!=null)
          {var c=xl(i,v,f,t,a);l.push(c)} else {
          l.push(f)
        }
      }return l
    }
}function bp(r,e,t,a){
  var n=!a;
  var i=r._private;
  var s=e._private;
  var o=s.easing;
  var l=s.startTime;
  var u=a?r:r.cy();
  var v=u.style();
  if (!s.easingImpl) {
    if (o==null) {
      s.easingImpl=cn.linear;
    } else {
      var f;if (ge(o))
          {var c=v.parse("transition-timing-function",o);f=c.value} else {
          f=o;
        }
      var h;
      var d;

      if (ge(f)) {
        h=f;
        d=[];
      } else {
        h=f[1];
        d=f.slice(2).map(function(V){return+V});
      }

      if (d.length>0) {
        h==="spring"&&d.push(s.duration);
        s.easingImpl=cn[h].apply(null,d);
      } else {
        s.easingImpl=cn[h];
      }
    }
  }
  var y=s.easingImpl;
  var g;

  if (s.duration===0) {
    g=1;
  } else {
    g=(t-l)/s.duration;
  }

  if (s.applying) {
    (g = s.progress);
  }

  if (g<0) {
    g=0;
  } else if (g>1) {
    (g = 1);
  }

  if (s.delay==null) {
    var p=s.startPosition;
    var m=s.position;
    if(m&&n&&!r.locked()){
      var b={};

      if (da(p.x,m.x)) {
        (b.x = zt(p.x,m.x,g,y));
      }

      if (da(p.y,m.y)) {
        (b.y = zt(p.y,m.y,g,y));
      }

      r.position(b);
    }
    var w=s.startPan;
    var E=s.pan;
    var C=i.pan;
    var x=E!=null&&a;

    if (x) {
      da(w.x,E.x)&&(C.x=zt(w.x,E.x,g,y));
      da(w.y,E.y)&&(C.y=zt(w.y,E.y,g,y));
      r.emit("pan");
    }

    var T=s.startZoom;
    var k=s.zoom;
    var D=k!=null&&a;

    if (D) {
      da(T,k)&&(i.zoom=ka(i.minZoom,zt(T,k,g,y),i.maxZoom));
      r.emit("zoom");
    }

    if ((x || D)) {
      r.emit("viewport");
    }

    var B=s.style;if(B&&B.length>0&&n){for(var P=0;P<B.length;P++){
        var A=B[P];
        var R=A.name;
        var L=A;
        var I=s.startStyle[R];
        var M=v.properties[I.name];
        var O=zt(I,L,g,y,M);
        v.overrideBypass(r,R,O)
      }r.emit("style")}
  }

  s.progress=g;
  return g;
}function da(r,e){return r==null||e==null?false:ae(r)&&ae(e)?true:!!(r&&e);}function wp(r,e,t,a){
  var n=e._private;
  n.started=true;
  n.startTime=t-n.progress*n.duration;
}function Cl(r,e){
  var t=e._private.aniEles;
  var a=[];
  function n(v,f){
    var c=v._private;
    var h=c.animation.current;
    var d=c.animation.queue;
    var y=false;
    if(h.length===0){
      var g=d.shift();

      if (g) {
        h.push(g);
      }
    }
    var p=function(C){for(var x=C.length-1;x>=0;x--){var T=C[x];T()}C.splice(0,C.length)};
    for(var m=h.length-1;m>=0;m--){
      var b=h[m];
      var w=b._private;
      if(w.stopped){
        h.splice(m,1);
        w.hooked=false;
        w.playing=false;
        w.started=false;
        p(w.frames);
        continue
      }

      if (w.playing || w.applying) {
        w.playing&&w.applying&&(w.applying=false);
        w.started||wp(v,b,r);
        bp(v,b,r,f);
        w.applying&&(w.applying=false);
        p(w.frames);
        w.step!=null&&w.step(r);
        b.completed()&&(h.splice(m,1),w.hooked=false,w.playing=false,w.started=false,p(w.completes));
        y=true;
      }
    }

    if (!f&&h.length===0&&d.length===0) {
      a.push(v);
    }

    return y;
  }
  var i=false;
  for(var s=0;s<t.length;s++){
    var o=t[s];
    var l=n(o);
    i=i||l
  }var u=n(e,true);

  if ((i || u)) {
    if (t.length>0) {
      e.notify("draw",t);
    } else {
      e.notify("draw");
    }
  }

  t.unmerge(a);
  e.emit("step");
}

var xp={animate:Fe.animate(),animation:Fe.animation(),animated:Fe.animated(),clearQueue:Fe.clearQueue(),delay:Fe.delay(),delayAnimation:Fe.delayAnimation(),stop:Fe.stop(),addToAnimationPool:function(e){
  var t=this;

  if (t.styleEnabled()) {
    t._private.aniEles.merge(e);
  }
},stopAnimationLoop:function(){this._private.animationsRunning=false},startAnimationLoop:function(){
  var e=this;
  e._private.animationsRunning=true;

  if (!e.styleEnabled()) {
    return;
  }

  function t(){
    if (e._private.animationsRunning) {
      wn(function(i){
        Cl(i,e);
        t();
      });
    }
  }var a=e.renderer();

  if (a&&a.beforeRender) {
    a.beforeRender(function(i,s){Cl(s,e)},a.beforeRenderPriorities.animations);
  } else {
    t();
  }
}};

var Ep={qualifierCompare:function(e,t){return e==null||t==null?e==null&&t==null:e.sameText(t)},eventMatches:function(e,t,a){var n=t.qualifier;return n!=null?e!==a.target&&Ia(a.target)&&n.matches(a.target):true;},addEventFields:function(e,t){
  t.cy=e;
  t.target=e;
},callbackContext:function(e,t,a){return t.qualifier!=null?a.target:e}};

var tn=function(e){return ge(e)?new ft(e):e};

var tf={createEmitter:function(){
  var e=this._private;

  if (!e.emitter) {
    (e.emitter = new Gn(Ep,this));
  }

  return this;
},emitter:function(){return this._private.emitter},on:function(e,t,a){
  this.emitter().on(e,tn(t),a);
  return this;
},removeListener:function(e,t,a){
  this.emitter().removeListener(e,tn(t),a);
  return this;
},removeAllListeners:function(){
  this.emitter().removeAllListeners();
  return this;
},one:function(e,t,a){
  this.emitter().one(e,tn(t),a);
  return this;
},once:function(e,t,a){
  this.emitter().one(e,tn(t),a);
  return this;
},emit:function(e,t){
  this.emitter().emit(e,t);
  return this;
},emitAndNotify:function(e,t){
  this.emit(e);
  this.notify(e,t);
  return this;
}};

Fe.eventAliasesOn(tf);var zs={png:function(e){
  var t=this._private.renderer;
  e=e||{};
  return t.png(e);
},jpg:function(e){
  var t=this._private.renderer;
  e=e||{};
  e.bg=e.bg||"#fff";
  return t.jpg(e);
}};zs.jpeg=zs.jpg;var dn={layout:function(e){
  var t=this;if(e==null){$e("Layout options must be specified to make a layout");return}if(e.name==null){$e("A `name` must be specified to make a layout");return}
  var a=e.name;
  var n=t.extension("layout",a);
  if(n==null){$e("No such layout `"+a+"` found.  Did you forget to import it and `cytoscape.use()` it?");return}var i;

  if (ge(e.eles)) {
    i=t.$(e.eles);
  } else {
    i=e.eles!=null?e.eles:t.$();
  }

  var s=new n(be({},e,{cy:t,eles:i}));return s
}};dn.createLayout=dn.makeLayout=dn.layout;

var Cp={notify:function(e,t){var a=this._private;if(this.batching()){
  a.batchNotifications=a.batchNotifications||{};var n=a.batchNotifications[e]=a.batchNotifications[e]||this.collection();

  if (t!=null) {
    n.merge(t);
  }

  return
}if(a.notificationsEnabled){
  var i=this.renderer();

  if (!this.destroyed() && i) {
    i.notify(e,t);
  }
}},notifications:function(e){var t=this._private;return e===void 0?t.notificationsEnabled:(t.notificationsEnabled=!!e,this)},noNotifications:function(e){
  this.notifications(false);
  e();
  this.notifications(true);
},batching:function(){return this._private.batchCount>0},startBatch:function(){
  var e=this._private;

  if (e.batchCount==null) {
    (e.batchCount = 0);
  }

  if (e.batchCount===0) {
    e.batchStyleEles=this.collection();
    e.batchNotifications={};
  }

  e.batchCount++;
  return this;
},endBatch:function(){
  var e=this._private;if (e.batchCount===0) {
    return this;
  }
  e.batchCount--;

  if (e.batchCount===0)
    {e.batchStyleEles.updateStyle();var t=this.renderer();Object.keys(e.batchNotifications).forEach(function(a){
      var n=e.batchNotifications[a];

      if (n.empty()) {
        t.notify(a);
      } else {
        t.notify(a,n);
      }
    })}

  return this
},batch:function(e){
  this.startBatch();
  e();
  this.endBatch();
  return this;
},batchData:function(e){var t=this;return this.batch(function(){for(var a=Object.keys(e),n=0;n<a.length;n++){
  var i=a[n];
  var s=e[i];
  var o=t.getElementById(i);
  o.data(s)
}});}};

var Tp=cr({hideEdgesOnViewport:false,textureOnViewport:false,motionBlur:false,motionBlurOpacity:0.05/* .05 */,pixelRatio:void 0,desktopTapThreshold:4,touchTapThreshold:8,wheelSensitivity:1,debug:false,showFps:false,webgl:false,webglDebug:false,webglDebugShowAtlases:false,webglTexSize:2048,webglTexRows:36,webglTexRowsNodes:18,webglBatchSize:2048,webglTexPerBatch:14,webglBgColor:[255,255,255]});

var Fs={renderTo:function(e,t,a,n){
  var i=this._private.renderer;
  i.renderTo(e,t,a,n);
  return this;
},renderer:function(){return this._private.renderer},forceRender:function(){
  this.notify("draw");
  return this;
},resize:function(){
  this.invalidateSize();
  this.emitAndNotify("resize");
  return this;
},initRenderer:function(e){
  var t=this;
  var a=t.extension("renderer",e.name);
  if(a==null){$e(`Can not initialise: No such renderer \`${e.name}\` found. Did you forget to import it and \`cytoscape.use()\` it?`);return}

  if (e.wheelSensitivity!==void 0) {
    Ve("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
  }

  var n=Tp(e);
  n.cy=t;
  t._private.renderer=new a(n);
  this.notify("init");
},destroyRenderer:function(){
  var e=this;e.notify("destroy");var t=e.container();if (t) {
    for (t._cyreg=null; t.childNodes.length>0; ) {
      t.removeChild(t.childNodes[0]);
    }
  }
  e._private.renderer=null;

  e.mutableElements().forEach(function(a){
    var n=a._private;
    n.rscratch={};
    n.rstyle={};
    n.animation.current=[];
    n.animation.queue=[];
  });
},onRender:function(e){return this.on("render",e)},offRender:function(e){return this.off("render",e)}};

Fs.invalidateDimensions=Fs.resize;var hn={collection:function(e,t){
  if (ge(e)) {
    return this.$(e);
  }

  if (Dr(e)) {
    return e.collection();
  }

  if (_e(e)) {
    t||(t={});
    return new fr(this,e,t.unique,t.removed);
  }

  return new fr(this);
},nodes:function(e){var t=this.$(function(a){return a.isNode()});return e?t.filter(e):t},edges:function(e){var t=this.$(function(a){return a.isEdge()});return e?t.filter(e):t},$:function(e){var t=this._private.elements;return e?t.filter(e):t.spawnSelf()},mutableElements:function(){return this._private.elements}};hn.elements=hn.filter=hn.$;
var ur={};
var wa="t";
var Sp="f";
ur.apply=function(r){
  var e=this;
  var t=e._private;
  var a=t.cy;
  var n=a.collection();
  for(var i=0;i<r.length;i++){
    var s=r[i];
    var o=e.getContextMeta(s);
    if(!o.empty){
      var l=e.getContextStyle(o);
      var u=e.applyContextStyle(o,l,s);

      if (s._private.appliedInitStyle) {
        e.updateTransitions(s,u.diffProps);
      } else {
        s._private.appliedInitStyle=true;
      }

      var v=e.updateStyleHints(s);

      if (v) {
        n.push(s);
      }
    }
  }return n
};ur.getPropertiesDiff=function(r,e){
  var t=this;
  var a=t._private.propDiffs=t._private.propDiffs||{};
  var n=r+"-"+e;
  var i=a[n];
  if (i) {
    return i;
  }
  var s=[];
  var o={};
  for(var l=0;l<t.length;l++){
    var u=t[l];
    var v=r[l]===wa;
    var f=e[l]===wa;
    var c=v!==f;
    var h=u.mappedProperties.length>0;
    if(c||f&&h){
      var d=void 0;

      if (c&&h||c) {
        d=u.properties;
      } else if (h) {
        (d = u.mappedProperties);
      }

      for(var y=0;y<d.length;y++){
        var g=d[y];
        var p=g.name;
        var m=false;
        for(var b=l+1;b<t.length;b++){
          var w=t[b];
          var E=e[b]===wa;
          if (E&&(m=w.properties[g.name]!=null,m)) {
            break
          }
        }

        if (!o[p]&&!m) {
          o[p]=true;
          s.push(p);
        }
      }
    }
  }
  a[n]=s;
  return s;
};ur.getContextMeta=function(r){
  var t="";
  var a;
  var n=r._private.styleCxtKey||"";
  for(var e=this, i=0;i<e.length;i++){
    var s=e[i];
    var o=s.selector&&s.selector.matches(r);

    if (o) {
      t+=wa;
    } else {
      t+=Sp;
    }
  }
  a=e.getPropertiesDiff(n,t);
  r._private.styleCxtKey=t;
  return {key:t,diffPropNames:a,empty:a.length===0};
};ur.getContextStyle=function(r){
  var e=r.key;
  var t=this;
  var a=this._private.contextStyles=this._private.contextStyles||{};
  if (a[e]) {
    return a[e];
  }
  var n={_private:{key:e}};
  for(var i=0;i<t.length;i++){
    var s=t[i];
    var o=e[i]===wa;
    if (o) {
      for(var l=0;l<s.properties.length;l++){var u=s.properties[l];n[u.name]=u}
    }
  }
  a[e]=n;
  return n;
};ur.applyContextStyle=function(r,e,t){
  var a=this;
  var i={};
  var s=a.types;
  for(var n=r.diffPropNames, o=0;o<n.length;o++){
    var l=n[o];
    var u=e[l];
    var v=t.pstyle(l);
    if (!u) {
      if (v) {
        if (v.bypass) {
          u={name:l,deleteBypassed:true};
        } else {
          u={name:l,delete:true};
        }
      } else {
        continue;
      }
    }if(v!==u){
    if(u.mapped===s.fn&&v!=null&&v.mapping!=null&&v.mapping.value===u.value){
      var f=v.mapping;
      var c=f.fnValue=u.value(t);
      if (c===f.prevFnValue) {
        continue
      }
    }var h=i[l]={prev:v};
    a.applyParsedProperty(t,u);
    h.next=t.pstyle(l);

    if (h.next&&h.next.bypass) {
      (h.next = h.next.bypassed);
    }
  }
  }return{diffProps:i}
};ur.updateStyleHints=function(r){
  var e=r._private;
  var t=this;
  var a=t.propertyGroupNames;
  var n=t.propertyGroupKeys;
  var i=function(H,Y,te){return t.getPropertiesHash(H,Y,te)};
  var s=e.styleKey;
  if (r.removed()) {
    return false;
  }
  var o=e.group==="nodes";
  var l=r._private.style;
  a=Object.keys(l);for(var u=0;u<n.length;u++){var v=n[u];e.styleKeys[v]=[Tt,Ht]}
  var f=function(H,Y){return e.styleKeys[Y][0]=Ca(H,e.styleKeys[Y][0])};
  var c=function(H,Y){return e.styleKeys[Y][1]=Ta(H,e.styleKeys[Y][1])};

  var h=function(H,Y){
    f(H,Y);
    c(H,Y);
  };

  var d=function(H,Y){for(var te=0;te<H.length;te++){
    var ce=H.charCodeAt(te);
    f(ce,Y);
    c(ce,Y);
  }};

  var y=2000000000/* 2e9 */;
  var g=function(H){return-128<H&&H<128&&Math.floor(H)!==H?y-(H*1024|0):H};
  for(var p=0;p<a.length;p++){
    var m=a[p];
    var b=l[m];
    if(b!=null){
      var w=this.properties[m];
      var E=w.type;
      var C=w.groupKey;
      var x=void 0;

      if (w.hashOverride!=null) {
        x=w.hashOverride(r,b);
      } else if (b.pfValue!=null) {
        (x = b.pfValue);
      }

      var T=w.enums==null?b.value:null;
      var k=x!=null;
      var D=T!=null;
      var B=k||D;
      var P=b.units;
      if (E.number&&B&&!E.multiple) {
        var A=k?x:T;
        h(g(A),C);

        if (!k&&P!=null) {
          d(P,C);
        }
      } else {
        d(b.strValue,C)
      }
    }
  }
  var R=[Tt,Ht];
  for(var L=0;L<n.length;L++){
    var I=n[L];
    var M=e.styleKeys[I];
    R[0]=Ca(M[0],R[0]);
    R[1]=Ta(M[1],R[1]);
  }e.styleKey=_c(R[0],R[1]);var O=e.styleKeys;e.labelDimsKey=et(O.labelDimensions);var V=i(r,["label"],O.labelDimensions);
  e.labelKey=et(V);
  e.labelStyleKey=et(Xa(O.commonLabel,V));

  if (!o) {
    var G=i(r,["source-label"],O.labelDimensions);
    e.sourceLabelKey=et(G);
    e.sourceLabelStyleKey=et(Xa(O.commonLabel,G));
    var N=i(r,["target-label"],O.labelDimensions);
    e.targetLabelKey=et(N);
    e.targetLabelStyleKey=et(Xa(O.commonLabel,N));
  }

  if(o){
    var F=e.styleKeys;
    var U=F.nodeBody;
    var Q=F.nodeBorder;
    var K=F.nodeOutline;
    var j=F.backgroundImage;
    var re=F.compound;
    var ne=F.pie;
    var J=F.stripe;
    var z=[U,Q,K,j,re,ne,J].filter(function(q){return q!=null}).reduce(Xa,[Tt,Ht]);
    e.nodeKey=et(z);
    e.hasPie=ne!=null&&ne[0]!==Tt&&ne[1]!==Ht;
    e.hasStripe=J!=null&&J[0]!==Tt&&J[1]!==Ht;
  }return s!==e.styleKey
};ur.clearStyleHints=function(r){
  var e=r._private;
  e.styleCxtKey="";
  e.styleKeys={};
  e.styleKey=null;
  e.labelKey=null;
  e.labelStyleKey=null;
  e.sourceLabelKey=null;
  e.sourceLabelStyleKey=null;
  e.targetLabelKey=null;
  e.targetLabelStyleKey=null;
  e.nodeKey=null;
  e.hasPie=null;
  e.hasStripe=null;
};ur.applyParsedProperty=function(r,e){
  var t=this;
  var a=e;
  var n=r._private.style;
  var i;
  var s=t.types;
  var o=t.properties[a.name].type;
  var l=a.bypass;
  var u=n[a.name];
  var v=u&&u.bypass;
  var f=r._private;
  var c="mapping";
  var h=function(U){return U==null?null:U.pfValue!=null?U.pfValue:U.value};

  var d=function(){
    var U=h(u);
    var Q=h(a);
    t.checkTriggers(r,a.name,U,Q)
  };

  if (e.name==="curve-style"&&r.isEdge()&&(e.value!=="bezier"&&r.isLoop()||e.value==="haystack"&&(r.source().isParent()||r.target().isParent()))) {
    (a = e=this.parse(e.name,"bezier",l));
  }

  if (a.delete) {
    n[a.name]=void 0;
    d();
    return true;
  }

  if (a.deleteBypassed) {
    return u?u.bypass?(u.bypassed=void 0,d(),true):false:(d(),true);
  }if (a.deleteBypass) {
      return u?u.bypass?(n[a.name]=u.bypassed,d(),true):false:(d(),true);
    }var y=function(){Ve("Do not assign mappings to elements without corresponding data (i.e. ele `"+r.id()+"` has no mapping for property `"+a.name+"` with data field `"+a.field+"`); try a `["+a.field+"]` selector to limit scope to elements with `"+a.field+"` defined")};switch(a.mapped){case s.mapData:{
    for(var g=a.field.split("."),p=f.data,m=0;m<g.length&&p;m++){var b=g[m];p=p[b]}if (p==null) {
          y();
          return false;
        }var w;if (ae(p))
          {
            var E=a.fieldMax-a.fieldMin;

            if (E===0) {
              w=0;
            } else {
              w=(p-a.fieldMin)/E;
            }
          } else {
          Ve("Do not use continuous mappers without specifying numeric data (i.e. `"+a.field+": "+p+"` for `"+r.id()+"` is non-numeric)");
          return false;
        }

    if (w<0) {
      w=0;
    } else if (w>1) {
      (w = 1);
    }

    if (o.color) {
      var C=a.valueMin[0];
      var x=a.valueMax[0];
      var T=a.valueMin[1];
      var k=a.valueMax[1];
      var D=a.valueMin[2];
      var B=a.valueMax[2];
      var P=a.valueMin[3]==null?1:a.valueMin[3];
      var A=a.valueMax[3]==null?1:a.valueMax[3];
      var R=[Math.round(C+(x-C)*w),Math.round(T+(k-T)*w),Math.round(D+(B-D)*w),Math.round(P+(A-P)*w)];
      i={bypass:a.bypass,name:a.name,value:R,strValue:"rgb("+R[0]+", "+R[1]+", "+R[2]+")"}
    } else if (o.number)
      {var L=a.valueMin+(a.valueMax-a.valueMin)*w;i=this.parse(a.name,L,a.bypass,c)} else {
      return false;
    }

    if (!i) {
      y();
      return false;
    }
    i.mapping=a;
    a=i;
    break
  }case s.data:{
    for(var I=a.field.split("."),M=f.data,O=0;O<I.length&&M;O++){var V=I[O];M=M[V]}

    if (M!=null) {
      (i = this.parse(a.name,M,a.bypass,c));
    }

    if (!i) {
      y();
      return false;
    }

    i.mapping=a;
    a=i;
    break
  }case s.fn:{
      var G=a.value;
      var N=a.fnValue!=null?a.fnValue:G(r);
      a.prevFnValue=N;

      if (N==null) {
        Ve("Custom function mappers may not return null (i.e. `"+a.name+"` for ele `"+r.id()+"` is null)");
        return false;
      }

      i=this.parse(a.name,N,a.bypass,c);

      if (!i) {
        Ve("Custom function mappers may not return invalid values for the property type (i.e. `"+a.name+"` for ele `"+r.id()+"` is invalid)");
        return false;
      }

      i.mapping=qr(a);
      a=i;
      break
    }case void 0:
      {
        break;
      }default:
      {
        return false;
      }}

  if (l) {
    v?a.bypassed=u.bypassed:a.bypassed=u;
    n[a.name]=a;
  } else if (v) {
    u.bypassed=a;
  } else {
    n[a.name]=a;
  }

  d();
  return true;
};ur.cleanElements=function(r,e){for(var t=0;t<r.length;t++){
  var a=r[t];
  this.clearStyleHints(a);
  a.dirtyCompoundBoundsCache();
  a.dirtyBoundingBoxCache();

  if (!e) {
    a._private.style={};
  } else {
    var n=a._private.style;
    for(var i=Object.keys(n), s=0;s<i.length;s++){
      var o=i[s];
      var l=n[o];

      if (l!=null) {
        if (l.bypass) {
          l.bypassed=null;
        } else {
          n[o]=null;
        }
      }
    }
  }
}};ur.update=function(){
  var r=this._private.cy;
  var e=r.mutableElements();
  e.updateStyle()
};ur.updateTransitions=function(r,e){
  var t=this;
  var a=r._private;
  var n=r.pstyle("transition-property").value;
  var i=r.pstyle("transition-duration").pfValue;
  var s=r.pstyle("transition-delay").pfValue;
  if (n.length>0&&i>0) {
    var o={};
    var l=false;
    for(var u=0;u<n.length;u++){
      var v=n[u];
      var f=r.pstyle(v);
      var c=e[v];
      if(c){
        var h=c.prev;
        var d=h;
        var y=c.next!=null?c.next:f;
        var g=false;
        var p=void 0;
        var m=0.000001/* 1e-6 */;

        if (d) {
          ae(d.pfValue)&&ae(y.pfValue)?(g=y.pfValue-d.pfValue,p=d.pfValue+m*g):ae(d.value)&&ae(y.value)?(g=y.value-d.value,p=d.value+m*g):_e(d.value)&&_e(y.value)&&(g=d.value[0]!==y.value[0]||d.value[1]!==y.value[1]||d.value[2]!==y.value[2],p=d.strValue);
          g&&(o[v]=y.strValue,this.applyBypass(r,v,p),l=true);
        }
      }
    }if (!l) {
      return;
    }
    a.transitioning=true;

    new ta(function(b){
      if (s>0) {
        r.delayAnimation(s).play().promise().then(b);
      } else {
        b();
      }
    }).then(function(){return r.animation({style:o,duration:i,easing:r.pstyle("transition-timing-function").value,queue:false}).play().promise();}).then(function(){
      t.removeBypasses(r,n);
      r.emitAndNotify("style");
      a.transitioning=false;
    });
  } else {
    if (a.transitioning) {
      this.removeBypasses(r,n);
      r.emitAndNotify("style");
      a.transitioning=false;
    }
  }
};ur.checkTrigger=function(r,e,t,a,n,i){
  var s=this.properties[e];
  var o=n(s);

  if (!r.removed()) {
    if (o!=null&&o(t,a,r)) {
      i(s);
    }
  }
};ur.checkZOrderTrigger=function(r,e,t,a){var n=this;this.checkTrigger(r,e,t,a,function(i){return i.triggersZOrder},function(){n._private.cy.notify("zorder",r)})};ur.checkBoundsTrigger=function(r,e,t,a){this.checkTrigger(r,e,t,a,function(n){return n.triggersBounds},function(n){
  r.dirtyCompoundBoundsCache();
  r.dirtyBoundingBoxCache();
})};ur.checkConnectedEdgesBoundsTrigger=function(r,e,t,a){this.checkTrigger(r,e,t,a,function(n){return n.triggersBoundsOfConnectedEdges},function(n){r.connectedEdges().forEach(function(i){i.dirtyBoundingBoxCache()})})};ur.checkParallelEdgesBoundsTrigger=function(r,e,t,a){this.checkTrigger(r,e,t,a,function(n){return n.triggersBoundsOfParallelEdges},function(n){r.parallelEdges().forEach(function(i){i.dirtyBoundingBoxCache()})})};ur.checkTriggers=function(r,e,t,a){
  r.dirtyStyleCache();
  this.checkZOrderTrigger(r,e,t,a);
  this.checkBoundsTrigger(r,e,t,a);
  this.checkConnectedEdgesBoundsTrigger(r,e,t,a);
  this.checkParallelEdgesBoundsTrigger(r,e,t,a);
};var _a={};_a.applyBypass=function(r,e,t,a){
  var n=this;
  var i=[];
  var s=true;
  if(e==="*"||e==="**"){if (t!==void 0) {
    for(var o=0;o<n.properties.length;o++){
      var l=n.properties[o];
      var u=l.name;
      var v=this.parse(u,t,true);

      if (v) {
        i.push(v);
      }
    }
  }}else if(ge(e)){
    var f=this.parse(e,t,true);

    if (f) {
      i.push(f);
    }
  }else if (Le(e)) {var c=e;a=t;for(var h=Object.keys(c),d=0;d<h.length;d++){
    var y=h[d];
    var g=c[y];

    if (g===void 0) {
      (g = c[Mn(y)]);
    }

    if (g!==void 0)
      {
        var p=this.parse(y,g,true);

        if (p) {
          i.push(p);
        }
      }
  }} else {
    return false;
  }if (i.length===0) {
    return false;
  }
  var m=false;
  for(var b=0;b<r.length;b++){
    var w=r[b];
    var E={};
    var C=void 0;
    for(var x=0;x<i.length;x++){
      var T=i[x];if(a){var k=w.pstyle(T.name);C=E[T.name]={prev:k}}
      m=this.applyParsedProperty(w,qr(T))||m;

      if (a) {
        (C.next = w.pstyle(T.name));
      }
    }

    if (m) {
      this.updateStyleHints(w);
    }

    if (a) {
      this.updateTransitions(w,E,s);
    }
  }return m
};_a.overrideBypass=function(r,e,t){e=Zs(e);for(var a=0;a<r.length;a++){
  var n=r[a];
  var i=n._private.style[e];
  var s=this.properties[e].type;
  var o=s.color;
  var l=s.mutiple;
  var u=i?i.pfValue!=null?i.pfValue:i.value:null;

  if (!i||!i.bypass) {
    this.applyBypass(n,e,t);
  } else {
    i.value=t;
    i.pfValue!=null&&(i.pfValue=t);
    o?i.strValue="rgb("+t.join(",")+")":l?i.strValue=t.join(" "):i.strValue=""+t;
    this.updateStyleHints(n);
  }

  this.checkTriggers(n,e,u,t);
}};_a.removeAllBypasses=function(r,e){return this.removeBypasses(r,this.propertyNames,e)};_a.removeBypasses=function(r,e,t){
  var a=true;
  for(var n=0;n<r.length;n++){
    var i=r[n];
    var s={};
    for(var o=0;o<e.length;o++){
      var l=e[o];
      var u=this.properties[l];
      var v=i.pstyle(u.name);
      if(!(!v||!v.bypass)){
        var f="";
        var c=this.parse(l,f,true);
        var h=s[u.name]={prev:v};
        this.applyParsedProperty(i,c);
        h.next=i.pstyle(u.name);
      }
    }
    this.updateStyleHints(i);

    if (t) {
      this.updateTransitions(i,s,a);
    }
  }
};var fo={};fo.getEmSizeInPixels=function(){var r=this.containerCss("font-size");return r!=null?parseFloat(r):1};fo.containerCss=function(r){
  var e=this._private.cy;
  var t=e.container();
  var a=e.window();
  if (a&&t&&a.getComputedStyle) {
    return a.getComputedStyle(t).getPropertyValue(r)
  }
};var _r={};_r.getRenderedStyle=function(r,e){return e?this.getStylePropertyValue(r,e,true):this.getRawStyle(r,true);};_r.getRawStyle=function(r,e){
  var t=this;
  r=r[0];

  if (r) {
    var a={};
    for(var n=0;n<t.properties.length;n++){
      var i=t.properties[n];
      var s=t.getStylePropertyValue(r,i.name,e);

      if (s!=null) {
        a[i.name]=s;
        a[Mn(i.name)]=s;
      }
    }return a
  }
};_r.getIndexedStyle=function(r,e,t,a){var n=r.pstyle(e)[t][a];return n??r.cy().style().getDefaultProperty(e)[t][0]};_r.getStylePropertyValue=function(r,e,t){
  var a=this;
  r=r[0];

  if (r) {
    var n=a.properties[e];

    if (n.alias) {
      (n = n.pointsTo);
    }

    var i=n.type;
    var s=r.pstyle(n.name);
    if(s){
      var o=s.value;
      var l=s.units;
      var u=s.strValue;
      if(t&&i.number&&o!=null&&ae(o)){
        var v=r.cy().zoom();
        var f=function(g){return g*v};
        var c=function(g,p){return f(g)+p};
        var h=_e(o);
        var d=h?l.every(function(y){return y!=null}):l!=null;

        if (d) {
          if (h) {
            return o.map(function(y,g){return c(y,l[g])}).join(" ");
          }

          return c(o,l);
        }

        if (h) {
          return o.map(function(y){return ge(y)?y:""+f(y)}).join(" ");
        }

        return ""+f(o);
      }else if (u!=null) {
        return u
      }
    }return null
  }
};_r.getAnimationStartStyle=function(r,e){
  var t={};
  for(var a=0;a<e.length;a++){
    var n=e[a];
    var i=n.name;
    var s=r.pstyle(i);

    if (s!==void 0) {
      if (Le(s)) {
        s=this.parse(i,s.strValue);
      } else {
        s=this.parse(i,s);
      }
    }

    if (s) {
      (t[i] = s);
    }
  }return t
};_r.getPropsList=function(r){
  var e=this;
  var t=[];
  var a=r;
  var n=e.properties;
  if (a) {
    for(var i=Object.keys(a),s=0;s<i.length;s++){
      var o=i[s];
      var l=a[o];
      var u=n[o]||n[Zs(o)];
      var v=this.parse(u.name,l);

      if (v) {
        t.push(v);
      }
    }
  }return t
};_r.getNonDefaultPropertiesHash=function(r,e,t){
  var a=t.slice();
  var n;
  var i;
  var s;
  var o;
  var l;
  var u;
  for (l=0; l<e.length; l++) {
    n=e[l];
    i=r.pstyle(n,false);

    if (i!=null) {
      if (i.pfValue!=null) {
        a[0]=Ca(o,a[0]);
        a[1]=Ta(o,a[1]);
      } else {
        s=i.strValue;

        for (u=0; u<s.length; u++) {
          o=s.charCodeAt(u);
          a[0]=Ca(o,a[0]);
          a[1]=Ta(o,a[1]);
        }
      }
    }
  }return a
};_r.getPropertiesHash=_r.getNonDefaultPropertiesHash;var $n={};$n.appendFromJson=function(r){
  var e=this;
  for(var t=0;t<r.length;t++){
    var a=r[t];
    var n=a.selector;
    var i=a.style||a.css;
    var s=Object.keys(i);
    e.selector(n);for(var o=0;o<s.length;o++){
      var l=s[o];
      var u=i[l];
      e.css(l,u)
    }
  }return e
};$n.fromJson=function(r){
  var e=this;
  e.resetToDefault();
  e.appendFromJson(r);
  return e;
};$n.json=function(){
  var r=[];
  for(var e=this.defaultLength;e<this.length;e++){
    var t=this[e];
    var a=t.selector;
    var i={};
    for(var n=t.properties, s=0;s<n.length;s++){var o=n[s];i[o.name]=o.strValue}r.push({selector:a?a.toString():"core",style:i})
  }return r
};var co={};co.appendFromString=function(r){
  var e=this;
  var t=this;
  var a=""+r;
  var n;
  var i;
  var s;
  a=a.replace(/[/][*](\s|.)+?[*][/]/g,"");function o(){
    if (a.length>n.length) {
      a=a.substr(n.length);
    } else {
      a="";
    }
  }function l(){
    if (i.length>s.length) {
      i=i.substr(s.length);
    } else {
      i="";
    }
  }

  while (true) {
    var u=a.match(/^\s*$/);if (u) {
          break;
        }var v=a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);if(!v){Ve("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: "+a);break}n=v[0];var f=v[1];if(f!=="core"){var c=new ft(f);if(c.invalid){
          Ve("Skipping parsing of block: Invalid selector found in string stylesheet: "+f);
          o();
          continue
        }}
    var h=v[2];
    var d=false;
    i=h;
    var y=[];

    while (true) {
      var g=i.match(/^\s*$/);if (g) {
        break;
      }var p=i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);if(!p){
        Ve("Skipping parsing of block: Invalid formatting of style property and value definitions found in:"+h);
        d=true;
        break
      }s=p[0];
      var m=p[1];
      var b=p[2];
      var w=e.properties[m];
      if(!w){
        Ve("Skipping property: Invalid property name in: "+s);
        l();
        continue
      }var E=t.parse(m,b);if(!E){
        Ve("Skipping property: Invalid property definition in: "+s);
        l();
        continue
      }
      y.push({name:m,val:b});
      l();
    }

    if(d){o();break}t.selector(f);for(var C=0;C<y.length;C++){var x=y[C];t.css(x.name,x.val)}o()
  }

  return t
};co.fromString=function(r){
  var e=this;
  e.resetToDefault();
  e.appendFromString(r);
  return e;
};var Qe={};(function(){
  var r=tr;
  var e=bc;
  var t=xc;
  var a=Ec;
  var n=Cc;
  var i=function(q){return"^"+q+"\\s*\\(\\s*([\\w\\.]+)\\s*\\)$"};
  var s=function(q){var H=r+"|\\w+|"+e+"|"+t+"|"+a+"|"+n;return"^"+q+"\\s*\\(([\\w\\.]+)\\s*\\,\\s*("+r+")\\s*\\,\\s*("+r+")\\s*,\\s*("+H+")\\s*\\,\\s*("+H+")\\)$"};
  var o=[`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`,"^(none)$","^(.+)$"];
  Qe.types={time:{number:true,min:0,units:"s|ms",implicitUnits:"ms"},percent:{number:true,min:0,max:100,units:"%",implicitUnits:"%"},percentages:{number:true,min:0,max:100,units:"%",implicitUnits:"%",multiple:true},zeroOneNumber:{number:true,min:0,max:1,unitless:true},zeroOneNumbers:{number:true,min:0,max:1,unitless:true,multiple:true},nOneOneNumber:{number:true,min:-1,max:1,unitless:true},nonNegativeInt:{number:true,min:0,integer:true,unitless:true},nonNegativeNumber:{number:true,min:0,unitless:true},position:{enums:["parent","origin"]},nodeSize:{number:true,min:0,enums:["label"]},number:{number:true,unitless:true},numbers:{number:true,unitless:true,multiple:true},positiveNumber:{number:true,unitless:true,min:0,strictMin:true},size:{number:true,min:0},bidirectionalSize:{number:true},bidirectionalSizeMaybePercent:{number:true,allowPercent:true},bidirectionalSizes:{number:true,multiple:true},sizeMaybePercent:{number:true,min:0,allowPercent:true},axisDirection:{enums:["horizontal","leftward","rightward","vertical","upward","downward","auto"]},axisDirectionExplicit:{enums:["leftward","rightward","upward","downward"]},axisDirectionPrimary:{enums:["horizontal","vertical"]},paddingRelativeTo:{enums:["width","height","average","min","max"]},bgWH:{number:true,min:0,allowPercent:true,enums:["auto"],multiple:true},bgPos:{number:true,allowPercent:true,multiple:true},bgRelativeTo:{enums:["inner","include-padding"],multiple:true},bgRepeat:{enums:["repeat","repeat-x","repeat-y","no-repeat"],multiple:true},bgFit:{enums:["none","contain","cover"],multiple:true},bgCrossOrigin:{enums:["anonymous","use-credentials","null"],multiple:true},bgClip:{enums:["none","node"],multiple:true},bgContainment:{enums:["inside","over"],multiple:true},boxSelection:{enums:["contain","overlap","none"]},color:{color:true},colors:{color:true,multiple:true},fill:{enums:["solid","linear-gradient","radial-gradient"]},bool:{enums:["yes","no"]},bools:{enums:["yes","no"],multiple:true},lineStyle:{enums:["solid","dotted","dashed"]},lineCap:{enums:["butt","round","square"]},linePosition:{enums:["center","inside","outside"]},lineJoin:{enums:["round","bevel","miter"]},borderStyle:{enums:["solid","dotted","dashed","double"]},curveStyle:{enums:["bezier","unbundled-bezier","haystack","segments","straight","straight-triangle","taxi","round-segments","round-taxi"]},radiusType:{enums:["arc-radius","influence-radius"],multiple:true},fontFamily:{regex:'^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'},fontStyle:{enums:["italic","normal","oblique"]},fontWeight:{enums:["normal","bold","bolder","lighter","100","200","300","400","500","600","800","900",100,200,300,400,500,600,700,800,900]},textDecoration:{enums:["none","underline","overline","line-through"]},textTransform:{enums:["none","uppercase","lowercase"]},textWrap:{enums:["none","wrap","ellipsis"]},textOverflowWrap:{enums:["whitespace","anywhere"]},textBackgroundShape:{enums:["rectangle","roundrectangle","round-rectangle","circle"]},nodeShape:{enums:["rectangle","roundrectangle","round-rectangle","cutrectangle","cut-rectangle","bottomroundrectangle","bottom-round-rectangle","barrel","ellipse","triangle","round-triangle","square","pentagon","round-pentagon","hexagon","round-hexagon","concavehexagon","concave-hexagon","heptagon","round-heptagon","octagon","round-octagon","tag","round-tag","star","diamond","round-diamond","vee","rhomboid","right-rhomboid","polygon"]},overlayShape:{enums:["roundrectangle","round-rectangle","ellipse"]},cornerRadius:{number:true,min:0,units:"px|em",implicitUnits:"px",enums:["auto"]},compoundIncludeLabels:{enums:["include","exclude"]},arrowShape:{enums:["tee","triangle","triangle-tee","circle-triangle","triangle-cross","triangle-backcurve","vee","square","circle","diamond","chevron","none"]},arrowFill:{enums:["filled","hollow"]},arrowWidth:{number:true,units:"%|px|em",implicitUnits:"px",enums:["match-line"]},display:{enums:["element","none"]},visibility:{enums:["hidden","visible"]},zCompoundDepth:{enums:["bottom","orphan","auto","top"]},zIndexCompare:{enums:["auto","manual"]},valign:{enums:["top","center","bottom"]},halign:{enums:["left","center","right"]},justification:{enums:["left","center","right","auto"]},text:{string:true},data:{mapping:true,regex:i("data")},layoutData:{mapping:true,regex:i("layoutData")},scratch:{mapping:true,regex:i("scratch")},mapData:{mapping:true,regex:s("mapData")},mapLayoutData:{mapping:true,regex:s("mapLayoutData")},mapScratch:{mapping:true,regex:s("mapScratch")},fn:{mapping:true,fn:true},url:{regexes:o,singleRegexMatchValue:true},urls:{regexes:o,singleRegexMatchValue:true,multiple:true},propList:{propList:true},angle:{number:true,units:"deg|rad",implicitUnits:"rad"},textRotation:{number:true,units:"deg|rad",implicitUnits:"rad",enums:["none","autorotate"]},polygonPointList:{number:true,multiple:true,evenMultiple:true,min:-1,max:1,unitless:true},edgeDistances:{enums:["intersection","node-position","endpoints"]},edgeEndpoint:{number:true,multiple:true,units:"%|px|em|deg|rad",implicitUnits:"px",enums:["inside-to-node","outside-to-node","outside-to-node-or-label","outside-to-line","outside-to-line-or-label"],singleEnum:true,validate:function(q,H){switch(q.length){case 2:
    {
      return H[0]!=="deg"&&H[0]!=="rad"&&H[1]!=="deg"&&H[1]!=="rad";
    }case 1:
    {
      return ge(q[0])||H[0]==="deg"||H[0]==="rad";
    }default:
    {
      return false;
    }}}},easing:{regexes:["^(spring)\\s*\\(\\s*("+r+")\\s*,\\s*("+r+")\\s*\\)$","^(cubic-bezier)\\s*\\(\\s*("+r+")\\s*,\\s*("+r+")\\s*,\\s*("+r+")\\s*,\\s*("+r+")\\s*\\)$"],enums:["linear","ease","ease-in","ease-out","ease-in-out","ease-in-sine","ease-out-sine","ease-in-out-sine","ease-in-quad","ease-out-quad","ease-in-out-quad","ease-in-cubic","ease-out-cubic","ease-in-out-cubic","ease-in-quart","ease-out-quart","ease-in-out-quart","ease-in-quint","ease-out-quint","ease-in-out-quint","ease-in-expo","ease-out-expo","ease-in-out-expo","ease-in-circ","ease-out-circ","ease-in-out-circ"]},gradientDirection:{enums:["to-bottom","to-top","to-left","to-right","to-bottom-right","to-bottom-left","to-top-right","to-top-left","to-right-bottom","to-left-bottom","to-right-top","to-left-top"]},boundsExpansion:{number:true,multiple:true,min:0,validate:function(q){var H=q.length;return H===1||H===2||H===4}}};

  var l={zeroNonZero:function(q,H){return (q==null||H==null)&&q!==H||q==0&&H!=0?true:q!=0&&H==0;},any:function(q,H){return q!=H},emptyNonEmpty:function(q,H){
    var Y=ut(q);
    var te=ut(H);
    return Y&&!te||!Y&&te
  }};

  var u=Qe.types;
  var v=[{name:"label",type:u.text,triggersBounds:l.any,triggersZOrder:l.emptyNonEmpty},{name:"text-rotation",type:u.textRotation,triggersBounds:l.any},{name:"text-margin-x",type:u.bidirectionalSize,triggersBounds:l.any},{name:"text-margin-y",type:u.bidirectionalSize,triggersBounds:l.any}];
  var f=[{name:"source-label",type:u.text,triggersBounds:l.any},{name:"source-text-rotation",type:u.textRotation,triggersBounds:l.any},{name:"source-text-margin-x",type:u.bidirectionalSize,triggersBounds:l.any},{name:"source-text-margin-y",type:u.bidirectionalSize,triggersBounds:l.any},{name:"source-text-offset",type:u.size,triggersBounds:l.any}];
  var c=[{name:"target-label",type:u.text,triggersBounds:l.any},{name:"target-text-rotation",type:u.textRotation,triggersBounds:l.any},{name:"target-text-margin-x",type:u.bidirectionalSize,triggersBounds:l.any},{name:"target-text-margin-y",type:u.bidirectionalSize,triggersBounds:l.any},{name:"target-text-offset",type:u.size,triggersBounds:l.any}];
  var h=[{name:"font-family",type:u.fontFamily,triggersBounds:l.any},{name:"font-style",type:u.fontStyle,triggersBounds:l.any},{name:"font-weight",type:u.fontWeight,triggersBounds:l.any},{name:"font-size",type:u.size,triggersBounds:l.any},{name:"text-transform",type:u.textTransform,triggersBounds:l.any},{name:"text-wrap",type:u.textWrap,triggersBounds:l.any},{name:"text-overflow-wrap",type:u.textOverflowWrap,triggersBounds:l.any},{name:"text-max-width",type:u.size,triggersBounds:l.any},{name:"text-outline-width",type:u.size,triggersBounds:l.any},{name:"line-height",type:u.positiveNumber,triggersBounds:l.any}];
  var d=[{name:"text-valign",type:u.valign,triggersBounds:l.any},{name:"text-halign",type:u.halign,triggersBounds:l.any},{name:"color",type:u.color},{name:"text-outline-color",type:u.color},{name:"text-outline-opacity",type:u.zeroOneNumber},{name:"text-background-color",type:u.color},{name:"text-background-opacity",type:u.zeroOneNumber},{name:"text-background-padding",type:u.size,triggersBounds:l.any},{name:"text-border-opacity",type:u.zeroOneNumber},{name:"text-border-color",type:u.color},{name:"text-border-width",type:u.size,triggersBounds:l.any},{name:"text-border-style",type:u.borderStyle,triggersBounds:l.any},{name:"text-background-shape",type:u.textBackgroundShape,triggersBounds:l.any},{name:"text-justification",type:u.justification},{name:"box-select-labels",type:u.bool,triggersBounds:l.any}];
  var y=[{name:"events",type:u.bool,triggersZOrder:l.any},{name:"text-events",type:u.bool,triggersZOrder:l.any},{name:"box-selection",type:u.boxSelection,triggersZOrder:l.any}];
  var g=[{name:"display",type:u.display,triggersZOrder:l.any,triggersBounds:l.any,triggersBoundsOfConnectedEdges:l.any,triggersBoundsOfParallelEdges:function(q,H,Y){return q===H?false:Y.pstyle("curve-style").value==="bezier";}},{name:"visibility",type:u.visibility,triggersZOrder:l.any},{name:"opacity",type:u.zeroOneNumber,triggersZOrder:l.zeroNonZero},{name:"text-opacity",type:u.zeroOneNumber},{name:"min-zoomed-font-size",type:u.size},{name:"z-compound-depth",type:u.zCompoundDepth,triggersZOrder:l.any},{name:"z-index-compare",type:u.zIndexCompare,triggersZOrder:l.any},{name:"z-index",type:u.number,triggersZOrder:l.any}];
  var p=[{name:"overlay-padding",type:u.size,triggersBounds:l.any},{name:"overlay-color",type:u.color},{name:"overlay-opacity",type:u.zeroOneNumber,triggersBounds:l.zeroNonZero},{name:"overlay-shape",type:u.overlayShape,triggersBounds:l.any},{name:"overlay-corner-radius",type:u.cornerRadius}];
  var m=[{name:"underlay-padding",type:u.size,triggersBounds:l.any},{name:"underlay-color",type:u.color},{name:"underlay-opacity",type:u.zeroOneNumber,triggersBounds:l.zeroNonZero},{name:"underlay-shape",type:u.overlayShape,triggersBounds:l.any},{name:"underlay-corner-radius",type:u.cornerRadius}];
  var b=[{name:"transition-property",type:u.propList},{name:"transition-duration",type:u.time},{name:"transition-delay",type:u.time},{name:"transition-timing-function",type:u.easing}];
  var w=function(q,H){return H.value==="label"?-q.poolIndex():H.pfValue};
  var E=[{name:"height",type:u.nodeSize,triggersBounds:l.any,hashOverride:w},{name:"width",type:u.nodeSize,triggersBounds:l.any,hashOverride:w},{name:"shape",type:u.nodeShape,triggersBounds:l.any},{name:"shape-polygon-points",type:u.polygonPointList,triggersBounds:l.any},{name:"corner-radius",type:u.cornerRadius},{name:"background-color",type:u.color},{name:"background-fill",type:u.fill},{name:"background-opacity",type:u.zeroOneNumber},{name:"background-blacken",type:u.nOneOneNumber},{name:"background-gradient-stop-colors",type:u.colors},{name:"background-gradient-stop-positions",type:u.percentages},{name:"background-gradient-direction",type:u.gradientDirection},{name:"padding",type:u.sizeMaybePercent,triggersBounds:l.any},{name:"padding-relative-to",type:u.paddingRelativeTo,triggersBounds:l.any},{name:"bounds-expansion",type:u.boundsExpansion,triggersBounds:l.any}];
  var C=[{name:"border-color",type:u.color},{name:"border-opacity",type:u.zeroOneNumber},{name:"border-width",type:u.size,triggersBounds:l.any},{name:"border-style",type:u.borderStyle},{name:"border-cap",type:u.lineCap},{name:"border-join",type:u.lineJoin},{name:"border-dash-pattern",type:u.numbers},{name:"border-dash-offset",type:u.number},{name:"border-position",type:u.linePosition}];
  var x=[{name:"outline-color",type:u.color},{name:"outline-opacity",type:u.zeroOneNumber},{name:"outline-width",type:u.size,triggersBounds:l.any},{name:"outline-style",type:u.borderStyle},{name:"outline-offset",type:u.size,triggersBounds:l.any}];
  var T=[{name:"background-image",type:u.urls},{name:"background-image-crossorigin",type:u.bgCrossOrigin},{name:"background-image-opacity",type:u.zeroOneNumbers},{name:"background-image-containment",type:u.bgContainment},{name:"background-image-smoothing",type:u.bools},{name:"background-position-x",type:u.bgPos},{name:"background-position-y",type:u.bgPos},{name:"background-width-relative-to",type:u.bgRelativeTo},{name:"background-height-relative-to",type:u.bgRelativeTo},{name:"background-repeat",type:u.bgRepeat},{name:"background-fit",type:u.bgFit},{name:"background-clip",type:u.bgClip},{name:"background-width",type:u.bgWH},{name:"background-height",type:u.bgWH},{name:"background-offset-x",type:u.bgPos},{name:"background-offset-y",type:u.bgPos}];
  var k=[{name:"position",type:u.position,triggersBounds:l.any},{name:"compound-sizing-wrt-labels",type:u.compoundIncludeLabels,triggersBounds:l.any},{name:"min-width",type:u.size,triggersBounds:l.any},{name:"min-width-bias-left",type:u.sizeMaybePercent,triggersBounds:l.any},{name:"min-width-bias-right",type:u.sizeMaybePercent,triggersBounds:l.any},{name:"min-height",type:u.size,triggersBounds:l.any},{name:"min-height-bias-top",type:u.sizeMaybePercent,triggersBounds:l.any},{name:"min-height-bias-bottom",type:u.sizeMaybePercent,triggersBounds:l.any}];
  var D=[{name:"line-style",type:u.lineStyle},{name:"line-color",type:u.color},{name:"line-fill",type:u.fill},{name:"line-cap",type:u.lineCap},{name:"line-opacity",type:u.zeroOneNumber},{name:"line-dash-pattern",type:u.numbers},{name:"line-dash-offset",type:u.number},{name:"line-outline-width",type:u.size},{name:"line-outline-color",type:u.color},{name:"line-gradient-stop-colors",type:u.colors},{name:"line-gradient-stop-positions",type:u.percentages},{name:"curve-style",type:u.curveStyle,triggersBounds:l.any,triggersBoundsOfParallelEdges:function(q,H){return q===H?false:q==="bezier"||H==="bezier";}},{name:"haystack-radius",type:u.zeroOneNumber,triggersBounds:l.any},{name:"source-endpoint",type:u.edgeEndpoint,triggersBounds:l.any},{name:"target-endpoint",type:u.edgeEndpoint,triggersBounds:l.any},{name:"control-point-step-size",type:u.size,triggersBounds:l.any},{name:"control-point-distances",type:u.bidirectionalSizes,triggersBounds:l.any},{name:"control-point-weights",type:u.numbers,triggersBounds:l.any},{name:"segment-distances",type:u.bidirectionalSizes,triggersBounds:l.any},{name:"segment-weights",type:u.numbers,triggersBounds:l.any},{name:"segment-radii",type:u.numbers,triggersBounds:l.any},{name:"radius-type",type:u.radiusType,triggersBounds:l.any},{name:"taxi-turn",type:u.bidirectionalSizeMaybePercent,triggersBounds:l.any},{name:"taxi-turn-min-distance",type:u.size,triggersBounds:l.any},{name:"taxi-direction",type:u.axisDirection,triggersBounds:l.any},{name:"taxi-radius",type:u.number,triggersBounds:l.any},{name:"edge-distances",type:u.edgeDistances,triggersBounds:l.any},{name:"arrow-scale",type:u.positiveNumber,triggersBounds:l.any},{name:"loop-direction",type:u.angle,triggersBounds:l.any},{name:"loop-sweep",type:u.angle,triggersBounds:l.any},{name:"source-distance-from-node",type:u.size,triggersBounds:l.any},{name:"target-distance-from-node",type:u.size,triggersBounds:l.any}];
  var B=[{name:"ghost",type:u.bool,triggersBounds:l.any},{name:"ghost-offset-x",type:u.bidirectionalSize,triggersBounds:l.any},{name:"ghost-offset-y",type:u.bidirectionalSize,triggersBounds:l.any},{name:"ghost-opacity",type:u.zeroOneNumber}];
  var P=[{name:"selection-box-color",type:u.color},{name:"selection-box-opacity",type:u.zeroOneNumber},{name:"selection-box-border-color",type:u.color},{name:"selection-box-border-width",type:u.size},{name:"active-bg-color",type:u.color},{name:"active-bg-opacity",type:u.zeroOneNumber},{name:"active-bg-size",type:u.size},{name:"outside-texture-bg-color",type:u.color},{name:"outside-texture-bg-opacity",type:u.zeroOneNumber}];
  var A=[];
  Qe.pieBackgroundN=16;
  A.push({name:"pie-size",type:u.sizeMaybePercent});
  A.push({name:"pie-hole",type:u.sizeMaybePercent});
  A.push({name:"pie-start-angle",type:u.angle});
  for (var R=1; R<=Qe.pieBackgroundN; R++) {
    A.push({name:"pie-"+R+"-background-color",type:u.color});
    A.push({name:"pie-"+R+"-background-size",type:u.percent});
    A.push({name:"pie-"+R+"-background-opacity",type:u.zeroOneNumber});
  }var L=[];
  Qe.stripeBackgroundN=16;
  L.push({name:"stripe-size",type:u.sizeMaybePercent});
  L.push({name:"stripe-direction",type:u.axisDirectionPrimary});
  for (var I=1; I<=Qe.stripeBackgroundN; I++) {
    L.push({name:"stripe-"+I+"-background-color",type:u.color});
    L.push({name:"stripe-"+I+"-background-size",type:u.percent});
    L.push({name:"stripe-"+I+"-background-opacity",type:u.zeroOneNumber});
  }
  var M=[];
  var O=Qe.arrowPrefixes=["source","mid-source","target","mid-target"];
  [{name:"arrow-shape",type:u.arrowShape,triggersBounds:l.any},{name:"arrow-color",type:u.color},{name:"arrow-fill",type:u.arrowFill},{name:"arrow-width",type:u.arrowWidth}].forEach(function(z){O.forEach(function(q){
    var H=q+"-"+z.name;
    var Y=z.type;
    var te=z.triggersBounds;
    M.push({name:H,type:Y,triggersBounds:te})
  })},{});
  var V=Qe.properties=[].concat(y,b,g,p,m,B,d,h,v,f,c,E,C,x,T,A,L,k,D,M,P);
  var G=Qe.propertyGroups={behavior:y,transition:b,visibility:g,overlay:p,underlay:m,ghost:B,commonLabel:d,labelDimensions:h,mainLabel:v,sourceLabel:f,targetLabel:c,nodeBody:E,nodeBorder:C,nodeOutline:x,backgroundImage:T,pie:A,stripe:L,compound:k,edgeLine:D,edgeArrow:M,core:P};
  var N=Qe.propertyGroupNames={};
  var F=Qe.propertyGroupKeys=Object.keys(G);
  F.forEach(function(z){
    N[z]=G[z].map(function(q){return q.name});
    G[z].forEach(function(q){return q.groupKey=z});
  });var U=Qe.aliases=[{name:"content",pointsTo:"label"},{name:"control-point-distance",pointsTo:"control-point-distances"},{name:"control-point-weight",pointsTo:"control-point-weights"},{name:"segment-distance",pointsTo:"segment-distances"},{name:"segment-weight",pointsTo:"segment-weights"},{name:"segment-radius",pointsTo:"segment-radii"},{name:"edge-text-rotation",pointsTo:"text-rotation"},{name:"padding-left",pointsTo:"padding"},{name:"padding-right",pointsTo:"padding"},{name:"padding-top",pointsTo:"padding"},{name:"padding-bottom",pointsTo:"padding"}];Qe.propertyNames=V.map(function(z){return z.name});for(var Q=0;Q<V.length;Q++){var K=V[Q];V[K.name]=K}for(var j=0;j<U.length;j++){
    var re=U[j];
    var ne=V[re.pointsTo];
    var J={name:re.name,alias:true,pointsTo:ne};
    V.push(J);
    V[re.name]=J;
  }
})();Qe.getDefaultProperty=function(r){return this.getDefaultProperties()[r]};Qe.getDefaultProperties=function(){
  var r=this._private;if (r.defaultProperties!=null) {
    return r.defaultProperties;
  }

  var e=be({"selection-box-color":"#ddd","selection-box-opacity":0.65/* .65 */,"selection-box-border-color":"#aaa","selection-box-border-width":1,"active-bg-color":"black","active-bg-opacity":0.15/* .15 */,"active-bg-size":30,"outside-texture-bg-color":"#000","outside-texture-bg-opacity":0.125/* .125 */,events:"yes","text-events":"no","text-valign":"top","text-halign":"center","text-justification":"auto","line-height":1,color:"#000","box-selection":"contain","text-outline-color":"#000","text-outline-width":0,"text-outline-opacity":1,"text-opacity":1,"text-decoration":"none","text-transform":"none","text-wrap":"none","text-overflow-wrap":"whitespace","text-max-width":9999,"text-background-color":"#000","text-background-opacity":0,"text-background-shape":"rectangle","text-background-padding":0,"text-border-opacity":0,"text-border-width":0,"text-border-style":"solid","text-border-color":"#000","font-family":"Helvetica Neue, Helvetica, sans-serif","font-style":"normal","font-weight":"normal","font-size":16,"min-zoomed-font-size":0,"text-rotation":"none","source-text-rotation":"none","target-text-rotation":"none",visibility:"visible",display:"element",opacity:1,"z-compound-depth":"auto","z-index-compare":"auto","z-index":0,label:"","text-margin-x":0,"text-margin-y":0,"source-label":"","source-text-offset":0,"source-text-margin-x":0,"source-text-margin-y":0,"target-label":"","target-text-offset":0,"target-text-margin-x":0,"target-text-margin-y":0,"overlay-opacity":0,"overlay-color":"#000","overlay-padding":10,"overlay-shape":"round-rectangle","overlay-corner-radius":"auto","underlay-opacity":0,"underlay-color":"#000","underlay-padding":10,"underlay-shape":"round-rectangle","underlay-corner-radius":"auto","transition-property":"none","transition-duration":0,"transition-delay":0,"transition-timing-function":"linear","box-select-labels":"no","background-blacken":0,"background-color":"#999","background-fill":"solid","background-opacity":1,"background-image":"none","background-image-crossorigin":"anonymous","background-image-opacity":1,"background-image-containment":"inside","background-image-smoothing":"yes","background-position-x":"50%","background-position-y":"50%","background-offset-x":0,"background-offset-y":0,"background-width-relative-to":"include-padding","background-height-relative-to":"include-padding","background-repeat":"no-repeat","background-fit":"none","background-clip":"node","background-width":"auto","background-height":"auto","border-color":"#000","border-opacity":1,"border-width":0,"border-style":"solid","border-dash-pattern":[4,2],"border-dash-offset":0,"border-cap":"butt","border-join":"miter","border-position":"center","outline-color":"#999","outline-opacity":1,"outline-width":0,"outline-offset":0,"outline-style":"solid",height:30,width:30,shape:"ellipse","shape-polygon-points":"-1, -1,   1, -1,   1, 1,   -1, 1","corner-radius":"auto","bounds-expansion":0,"background-gradient-direction":"to-bottom","background-gradient-stop-colors":"#999","background-gradient-stop-positions":"0%",ghost:"no","ghost-offset-y":0,"ghost-offset-x":0,"ghost-opacity":0,padding:0,"padding-relative-to":"width",position:"origin","compound-sizing-wrt-labels":"include","min-width":0,"min-width-bias-left":0,"min-width-bias-right":0,"min-height":0,"min-height-bias-top":0,"min-height-bias-bottom":0},{"pie-size":"100%","pie-hole":0,"pie-start-angle":"0deg"},[{name:"pie-{{i}}-background-color",value:"black"},{name:"pie-{{i}}-background-size",value:"0%"},{name:"pie-{{i}}-background-opacity",value:1}].reduce(function(l,u){for(var v=1;v<=Qe.pieBackgroundN;v++){
    var f=u.name.replace("{{i}}",v);
    var c=u.value;
    l[f]=c
  }return l},{}),{"stripe-size":"100%","stripe-direction":"horizontal"},[{name:"stripe-{{i}}-background-color",value:"black"},{name:"stripe-{{i}}-background-size",value:"0%"},{name:"stripe-{{i}}-background-opacity",value:1}].reduce(function(l,u){for(var v=1;v<=Qe.stripeBackgroundN;v++){
    var f=u.name.replace("{{i}}",v);
    var c=u.value;
    l[f]=c
  }return l},{}),{"line-style":"solid","line-color":"#999","line-fill":"solid","line-cap":"butt","line-opacity":1,"line-outline-width":0,"line-outline-color":"#000","line-gradient-stop-colors":"#999","line-gradient-stop-positions":"0%","control-point-step-size":40,"control-point-weights":0.5/* .5 */,"segment-weights":0.5/* .5 */,"segment-distances":20,"segment-radii":15,"radius-type":"arc-radius","taxi-turn":"50%","taxi-radius":15,"taxi-turn-min-distance":10,"taxi-direction":"auto","edge-distances":"intersection","curve-style":"haystack","haystack-radius":0,"arrow-scale":1,"loop-direction":"-45deg","loop-sweep":"-90deg","source-distance-from-node":0,"target-distance-from-node":0,"source-endpoint":"outside-to-node","target-endpoint":"outside-to-node","line-dash-pattern":[6,3],"line-dash-offset":0},[{name:"arrow-shape",value:"none"},{name:"arrow-color",value:"#999"},{name:"arrow-fill",value:"filled"},{name:"arrow-width",value:1}].reduce(function(l,u){
    Qe.arrowPrefixes.forEach(function(v){
      var f=v+"-"+u.name;
      var c=u.value;
      l[f]=c
    });

    return l;
  },{}));

  var t={};
  for(var a=0;a<this.properties.length;a++){var n=this.properties[a];if(!n.pointsTo){
    var i=n.name;
    var s=e[i];
    var o=this.parse(i,s);
    t[i]=o
  }}
  r.defaultProperties=t;
  return r.defaultProperties;
};Qe.addDefaultStylesheet=function(){
  this.selector(":parent").css({shape:"rectangle",padding:10,"background-color":"#eee","border-color":"#ccc","border-width":1}).selector("edge").css({width:3}).selector(":loop").css({"curve-style":"bezier"}).selector("edge:compound").css({"curve-style":"bezier","source-endpoint":"outside-to-line","target-endpoint":"outside-to-line"}).selector(":selected").css({"background-color":"#0169D9","line-color":"#0169D9","source-arrow-color":"#0169D9","target-arrow-color":"#0169D9","mid-source-arrow-color":"#0169D9","mid-target-arrow-color":"#0169D9"}).selector(":parent:selected").css({"background-color":"#CCE1F9","border-color":"#aec8e5"}).selector(":active").css({"overlay-color":"black","overlay-padding":10,"overlay-opacity":0.25/* .25 */});
  this.defaultLength=this.length;
};var Un={};Un.parse=function(r,e,t,a){
  var n=this;if (Ue(e)) {
      return n.parseImplWarn(r,e,t,a);
    }
  var i=a==="mapping"||a===true||a===false||a==null?"dontcare":a;
  var s=t?"t":"f";
  var o=""+e;
  var l=cv(r,o,s,i);
  var u=n.propCache=n.propCache||[];
  var v;

  if (!(v = u[l])) {
    (v = u[l]=n.parseImplWarn(r,e,t,a));
  }

  if ((t || a==="mapping")) {
    v=qr(v);
    v&&(v.value=qr(v.value));
  }

  return v;
};Un.parseImplWarn=function(r,e,t,a){
  var n=this.parseImpl(r,e,t,a);

  if (!n&&e!=null) {
    Ve(`The style property \`${r}: ${e}\` is invalid`);
  }

  if (n&&(n.name==="width"||n.name==="height")&&e==="label") {
    Ve("The style value of `label` is deprecated for `"+n.name+"`");
  }

  return n;
};Un.parseImpl=function(r,e,t,a){
  var n=this;r=Zs(r);
  var i=n.properties[r];
  var s=e;
  var o=n.types;
  if (!i||e===void 0) {
    return null;
  }

  if (i.alias) {
    i=i.pointsTo;
    r=i.name;
  }

  var l=ge(e);

  if (l) {
    (e = e.trim());
  }

  var u=i.type;if (!u) {
      return null;
    }if (t&&(e===""||e===null)) {
      return {name:r,value:e,bypass:true,deleteBypass:true};
    }if (Ue(e)) {
      return{name:r,value:e,strValue:"fn",mapped:o.fn,bypass:t};
    }
  var v;
  var f;
  if(!(!l||a||e.length<7||e[1]!=="a")){if(e.length>=7&&e[0]==="d"&&(v=new RegExp(o.data.regex).exec(e))){if (t) {
    return false;
  }var c=o.data;return{name:r,value:v,strValue:""+e,mapped:c,field:v[1],bypass:t}}else if(e.length>=10&&e[0]==="m"&&(f=new RegExp(o.mapData.regex).exec(e))){if (t||u.multiple) {
    return false;
  }var h=o.mapData;if (!(u.color||u.number)) {
    return false;
  }var d=this.parse(r,f[4]);if (!d||d.mapped) {
    return false;
  }var y=this.parse(r,f[5]);if (!y||y.mapped) {
    return false;
  }if (d.pfValue===y.pfValue||d.strValue===y.strValue) {
    Ve("`"+r+": "+e+"` is not a valid mapper because the output range is zero; converting to `"+r+": "+d.strValue+"`");
    return this.parse(r,d.strValue);
  }if(u.color){
    var g=d.value;
    var p=y.value;
    var m=g[0]===p[0]&&g[1]===p[1]&&g[2]===p[2]&&(g[3]===p[3]||(g[3]==null||g[3]===1)&&(p[3]==null||p[3]===1));
    if (m) {
      return false;
    }
  }return{name:r,value:f,strValue:""+e,mapped:h,field:f[1],fieldMin:parseFloat(f[2]),fieldMax:parseFloat(f[3]),valueMin:d.value,valueMax:y.value,bypass:t}}}if(u.multiple&&a!=="multiple"){
    var b;

    if (l) {
      b=e.split(/\s+/);
    } else if (_e(e)) {
      b=e;
    } else {
      b=[e];
    }

    if (u.evenMultiple&&b.length%2!==0) {
      return null;
    }

    var w=[];
    var E=[];
    var C=[];
    var x="";
    var T=false;
    for(var k=0;k<b.length;k++){
      var D=n.parse(r,b[k],t,"multiple");
      T=T||ge(D.value);
      w.push(D.value);
      C.push(D.pfValue!=null?D.pfValue:D.value);
      E.push(D.units);
      x+=(k>0?" ":"")+D.strValue;
    }return u.validate&&!u.validate(w,E)?null:u.singleEnum&&T?w.length===1&&ge(w[0])?{name:r,value:w[0],strValue:w[0],bypass:t}:null:{name:r,value:w,pfValue:C,strValue:x,bypass:t,units:E}
  }var B=function(){for(var J=0;J<u.enums.length;J++){var z=u.enums[J];if (z===e) {
      return{name:r,value:e,strValue:""+e,bypass:t}
    }}return null};if(u.number){
    var P;
    var A="px";

    if (u.units) {
      (P = u.units);
    }

    if (u.implicitUnits) {
      (A = u.implicitUnits);
    }

    if (!u.unitless) {
      if (l)
        {
          var R="px|em"+(u.allowPercent?"|\\%":"");

          if (P) {
            (R = P);
          }

          var L=e.match("^("+tr+")("+R+")?$");

          if (L) {
            e=L[1];
            P=L[2]||A;
          }
        } else {
        if ((!P || u.implicitUnits)) {
          (P = A);
        }
      }
    }

    e=parseFloat(e);

    if (isNaN(e)&&u.enums===void 0) {
      return null;
    }

    if (isNaN(e)&&u.enums!==void 0) {
      e=s;
      return B();
    }if (u.integer&&!cc(e)||u.min!==void 0&&(e<u.min||u.strictMin&&e===u.min)||u.max!==void 0&&(e>u.max||u.strictMax&&e===u.max)) {
          return null;
        }var I={name:r,value:e,strValue:""+e+(P||""),units:P,bypass:t};

    if (u.unitless||P!=="px"&&P!=="em") {
      I.pfValue=e;
    } else {
      I.pfValue=P==="px"||!P?e:this.getEmSizeInPixels()*e;
    }

    if ((P==="ms" || P==="s")) {
      (I.pfValue = P==="ms"?e:1000/* 1e3 */*e);
    }

    if ((P==="deg" || P==="rad")) {
      (I.pfValue = P==="rad"?e:Ed(e));
    }

    if (P==="%") {
      (I.pfValue = e/100);
    }

    return I;
  }else if(u.propList){
      var M=[];
      var O=""+e;
      if(O!=="none"){for(var V=O.split(/\s*,\s*|\s+/),G=0;G<V.length;G++){
        var N=V[G].trim();

        if (n.properties[N]) {
          M.push(N);
        } else {
          Ve("`"+N+"` is not a valid property name");
        }
      }if (M.length===0) {
        return null
      }}return{name:r,value:M,strValue:M.length===0?"none":M.join(" "),bypass:t}
    }else if(u.color){var F=iv(e);return F?{name:r,value:F,pfValue:F,strValue:"rgb("+F[0]+","+F[1]+","+F[2]+")",bypass:t}:null}else if (u.regex||u.regexes) {if(u.enums){var U=B();if (U) {
      return U
    }}for(var Q=u.regexes?u.regexes:[u.regex],K=0;K<Q.length;K++){
      var j=new RegExp(Q[K]);
      var re=j.exec(e);
      if (re) {
        return{name:r,value:u.singleRegexMatchValue?re[1]:re,strValue:""+e,bypass:t}
      }
    }return null} else {
      return u.string?{name:r,value:""+e,strValue:""+e,bypass:t}:u.enums?B():null
    }
};

var or=function(e){
  if (!(this instanceof or)) {
    return new or(e);
  }if(!Ys(e)){$e("A style must have a core reference");return}
  this._private={cy:e,coreStyle:{}};
  this.length=0;
  this.resetToDefault();
};

var pr=or.prototype;
pr.instanceString=function(){return"style"};pr.clear=function(){
  var r=this._private;
  var e=r.cy;
  var t=e.elements();
  for (var a=0; a<this.length; a++) {
    this[a]=void 0;
  }
  this.length=0;
  r.contextStyles={};
  r.propDiffs={};
  this.cleanElements(t,true);

  t.forEach(function(n){
    var i=n[0]._private;
    i.styleDirty=true;
    i.appliedInitStyle=false;
  });

  return this;
};pr.resetToDefault=function(){
  this.clear();
  this.addDefaultStylesheet();
  return this;
};pr.core=function(r){return this._private.coreStyle[r]||this.getDefaultProperty(r)};pr.selector=function(r){
  var e=r==="core"?null:new ft(r);
  var t=this.length++;
  this[t]={selector:e,properties:[],mappedProperties:[],index:t};
  return this;
};pr.css=function(...args) {
  var r=this;
  var e=args;
  if (e.length===1) {
    var t=e[0];
    for(var a=0;a<r.properties.length;a++){
      var n=r.properties[a];
      var i=t[n.name];

      if (i===void 0) {
        (i = t[Mn(n.name)]);
      }

      if (i!==void 0) {
        this.cssRule(n.name,i);
      }
    }
  } else {
    if (e.length===2) {
      this.cssRule(e[0],e[1]);
    }
  }return this
};pr.style=pr.css;pr.cssRule=function(r,e){var t=this.parse(r,e);if(t){
  var a=this.length-1;
  this[a].properties.push(t);
  this[a].properties[t.name]=t;

  if (t.name.match(/pie-(\d+)-background-size/)&&t.value) {
    (this._private.hasPie = true);
  }

  if (t.name.match(/stripe-(\d+)-background-size/)&&t.value) {
    (this._private.hasStripe = true);
  }

  if (t.mapped) {
    this[a].mappedProperties.push(t);
  }

  var n=!this[a].selector;

  if (n) {
    (this._private.coreStyle[t.name] = t);
  }
}return this};pr.append=function(r){
  if (tv(r)) {
    r.appendToStyle(this);
  } else if (_e(r)) {
    this.appendFromJson(r);
  } else if (ge(r)) {
    this.appendFromString(r);
  }

  return this;
};or.fromJson=function(r,e){
  var t=new or(r);
  t.fromJson(e);
  return t;
};or.fromString=function(r,e){return new or(r).fromString(e)};[ur,_a,fo,_r,$n,co,Qe,Un].forEach(function(r){be(pr,r)});or.types=pr.types;or.properties=pr.properties;or.propertyGroups=pr.propertyGroups;or.propertyGroupNames=pr.propertyGroupNames;or.propertyGroupKeys=pr.propertyGroupKeys;

var kp={style:function(e){if(e){var t=this.setStyle(e);t.update()}return this._private.style},setStyle:function(e){
  var t=this._private;

  if (tv(e)) {
    t.style=e.generateStyle(this);
  } else if (_e(e)) {
    t.style=or.fromJson(this,e);
  } else if (ge(e)) {
    t.style=or.fromString(this,e);
  } else {
    t.style=or(this);
  }

  return t.style;
},updateStyle:function(){this.mutableElements().updateStyle()}};

var Dp="single";

var At={autolock:function(e){if (e!==void 0) {
  this._private.autolock=!!e;
} else {
  return this._private.autolock;
}return this},autoungrabify:function(e){if (e!==void 0) {
  this._private.autoungrabify=!!e;
} else {
  return this._private.autoungrabify;
}return this},autounselectify:function(e){if (e!==void 0) {
  this._private.autounselectify=!!e;
} else {
  return this._private.autounselectify;
}return this},selectionType:function(e){
  var t=this._private;

  if (t.selectionType==null) {
    (t.selectionType = Dp);
  }

  if (e!==void 0) {
    if ((e==="additive" || e==="single")) {
      (t.selectionType = e);
    }
  } else {
    return t.selectionType;
  }

  return this
},panningEnabled:function(e){if (e!==void 0) {
  this._private.panningEnabled=!!e;
} else {
  return this._private.panningEnabled;
}return this},userPanningEnabled:function(e){if (e!==void 0) {
  this._private.userPanningEnabled=!!e;
} else {
  return this._private.userPanningEnabled;
}return this},zoomingEnabled:function(e){if (e!==void 0) {
  this._private.zoomingEnabled=!!e;
} else {
  return this._private.zoomingEnabled;
}return this},userZoomingEnabled:function(e){if (e!==void 0) {
  this._private.userZoomingEnabled=!!e;
} else {
  return this._private.userZoomingEnabled;
}return this},boxSelectionEnabled:function(e){if (e!==void 0) {
  this._private.boxSelectionEnabled=!!e;
} else {
  return this._private.boxSelectionEnabled;
}return this},pan:function(...args) {
  var e=args;
  var t=this._private.pan;
  var a;
  var n;
  var i;
  var s;
  var o;
  switch(e.length){case 0:
    {
      return t;
    }case 1:
    {
      if (ge(e[0])) {
        a=e[0];
        return t[a];
      }if(Le(e[0])){
      if (!this._private.panningEnabled) {
        return this;
      }
      i=e[0];
      s=i.x;
      o=i.y;

      if (ae(s)) {
        (t.x = s);
      }

      if (ae(o)) {
        (t.y = o);
      }

      this.emit("pan viewport");
    }break;
    }case 2:
    {
      if (!this._private.panningEnabled) {
        return this;
      }
      a=e[0];
      n=e[1];

      if ((a==="x"||a==="y")&&ae(n)) {
        (t[a] = n);
      }

      this.emit("pan viewport");
      break
    }}
  this.notify("viewport");
  return this;
},panBy:function(e,t){
  var a=arguments;
  var n=this._private.pan;
  var i;
  var s;
  var o;
  var l;
  var u;
  if (!this._private.panningEnabled) {
    return this;
  }switch(a.length){case 1:
    {
      if (Le(e)) {
        o=a[0];
        l=o.x;
        u=o.y;
        ae(l)&&(n.x+=l);
        ae(u)&&(n.y+=u);
        this.emit("pan viewport");
      }

      break;
    }case 2:
    {
      i=e;
      s=t;

      if ((i==="x"||i==="y")&&ae(s)) {
        (n[i] += s);
      }

      this.emit("pan viewport");
      break
    }}
  this.notify("viewport");
  return this;
},gc:function(){this.notify("gc")},fit:function(e,t){var a=this.getFitViewport(e,t);if(a){
  var n=this._private;
  n.zoom=a.zoom;
  n.pan=a.pan;
  this.emit("pan zoom viewport");
  this.notify("viewport");
}return this},getFitViewport:function(e,t){
  if (ae(e)&&t===void 0) {
    t=e;
    e=void 0;
  }

  if (!(!this._private.panningEnabled||!this._private.zoomingEnabled)) {var a;if(ge(e)){var n=e;e=this.$(n)}else if (gc(e)) {
    var i=e;
    a={x1:i.x1,y1:i.y1,x2:i.x2,y2:i.y2};
    a.w=a.x2-a.x1;
    a.h=a.y2-a.y1;
  } else {
    if (!Dr(e)) {
      (e = this.mutableElements());
    }
  }if(!(Dr(e)&&e.empty())){
    a=a||e.boundingBox();
    var s=this.width();
    var o=this.height();
    var l;
    t=ae(t)?t:0;

    if (!isNaN(s)&&!isNaN(o)&&s>0&&o>0&&!isNaN(a.w)&&!isNaN(a.h)&&a.w>0&&a.h>0) {
      l=Math.min((s-2*t)/a.w,(o-2*t)/a.h);
      l=l>this._private.maxZoom?this._private.maxZoom:l;
      l=l<this._private.minZoom?this._private.minZoom:l;
      var u={x:(s-l*(a.x1+a.x2))/2,y:(o-l*(a.y1+a.y2))/2};return{zoom:l,pan:u}
    }
  }}
},zoomRange:function(e,t){
  var a=this._private;if(t==null){
      var n=e;
      e=n.min;
      t=n.max;
    }

  if (ae(e)&&ae(t)&&e<=t) {
    a.minZoom=e;
    a.maxZoom=t;
  } else if (ae(e)&&t===void 0&&e<=a.maxZoom) {
    a.minZoom=e;
  } else if (ae(t)&&e===void 0&&t>=a.minZoom) {
    (a.maxZoom = t);
  }

  return this;
},minZoom:function(e){return e===void 0?this._private.minZoom:this.zoomRange({min:e})},maxZoom:function(e){return e===void 0?this._private.maxZoom:this.zoomRange({max:e})},getZoomedViewport:function(e){
  var t=this._private;
  var a=t.pan;
  var n=t.zoom;
  var i;
  var s;
  var o=false;

  if (!t.zoomingEnabled) {
    (o = true);
  }

  if (ae(e)) {
    s=e;
  } else if (Le(e)) {
    s=e.level;
    e.position!=null?i=On(e.position,n,a):e.renderedPosition!=null&&(i=e.renderedPosition);
    i!=null&&!t.panningEnabled&&(o=true);
  }

  s=s>t.maxZoom?t.maxZoom:s;
  s=s<t.minZoom?t.minZoom:s;

  if (o||!ae(s)||s===n||i!=null&&(!ae(i.x)||!ae(i.y))) {
    return null;
  }

  if (i!=null) {
    var l=a;
    var u=n;
    var v=s;
    var f={x:-v/u*(i.x-l.x)+i.x,y:-v/u*(i.y-l.y)+i.y};
    return {zoomed:true,panned:true,zoom:v,pan:f};
  } else {
    return {zoomed:true,panned:false,zoom:s,pan:a};
  }
},zoom:function(e){
  if (e===void 0) {
    return this._private.zoom;
  }
  var t=this.getZoomedViewport(e);
  var a=this._private;
  return t==null||!t.zoomed?this:(a.zoom=t.zoom,t.panned&&(a.pan.x=t.pan.x,a.pan.y=t.pan.y),this.emit("zoom"+(t.panned?" pan":"")+" viewport"),this.notify("viewport"),this)
},viewport:function(e){
  var t=this._private;
  var a=true;
  var n=true;
  var i=[];
  var s=false;
  var o=false;
  if (!e) {
    return this;
  }

  if (!ae(e.zoom)) {
    (a = false);
  }

  if (!Le(e.pan)) {
    (n = false);
  }

  if (!a&&!n) {
    return this;
  }

  if(a){
    var l=e.zoom;

    if (l<t.minZoom||l>t.maxZoom||!t.zoomingEnabled) {
      s=true;
    } else {
      t.zoom=l;
      i.push("zoom");
    }
  }if(n&&(!s||!e.cancelOnFailedZoom)&&t.panningEnabled){
    var u=e.pan;

    if (ae(u.x)) {
      t.pan.x=u.x;
      o=false;
    }

    if (ae(u.y)) {
      t.pan.y=u.y;
      o=false;
    }

    if (!o) {
      i.push("pan");
    }
  }

  if (i.length>0) {
    i.push("viewport");
    this.emit(i.join(" "));
    this.notify("viewport");
  }

  return this;
},center:function(e){
  var t=this.getCenterPan(e);

  if (t) {
    this._private.pan=t;
    this.emit("pan viewport");
    this.notify("viewport");
  }

  return this;
},getCenterPan:function(e,t){if(this._private.panningEnabled){if (ge(e))
  {var a=e;e=this.mutableElements().filter(a)} else {
  if (!Dr(e)) {
    (e = this.mutableElements());
  }
}if(e.length!==0){
  var n=e.boundingBox();
  var i=this.width();
  var s=this.height();
  t=t===void 0?this._private.zoom:t;var o={x:(i-t*(n.x1+n.x2))/2,y:(s-t*(n.y1+n.y2))/2};return o
}}},reset:function(){return!this._private.panningEnabled||!this._private.zoomingEnabled?this:(this.viewport({pan:{x:0,y:0},zoom:1}),this)},invalidateSize:function(){this._private.sizeCache=null},size:function(){
  var e=this._private;
  var t=e.container;
  var a=this;
  return e.sizeCache=e.sizeCache||(t?(function(){
    var n=a.window().getComputedStyle(t);
    var i=function(o){return parseFloat(n.getPropertyValue(o))};
    return{width:t.clientWidth-i("padding-left")-i("padding-right"),height:t.clientHeight-i("padding-top")-i("padding-bottom")}
  })():{width:1,height:1});
},width:function(){return this.size().width},height:function(){return this.size().height},extent:function(){
  var e=this._private.pan;
  var t=this._private.zoom;
  var a=this.renderedExtent();
  var n={x1:(a.x1-e.x)/t,x2:(a.x2-e.x)/t,y1:(a.y1-e.y)/t,y2:(a.y2-e.y)/t};
  n.w=n.x2-n.x1;
  n.h=n.y2-n.y1;
  return n;
},renderedExtent:function(){
  var e=this.width();
  var t=this.height();
  return{x1:0,y1:0,x2:e,y2:t,w:e,h:t}
},multiClickDebounceTime:function(e){if (e) {
  this._private.multiClickDebounceTime=e;
} else {
  return this._private.multiClickDebounceTime;
}return this}};

At.centre=At.center;At.autolockNodes=At.autolock;At.autoungrabifyNodes=At.autoungrabify;var Aa={data:Fe.data({field:"data",bindingEvent:"data",allowBinding:true,allowSetting:true,settingEvent:"data",settingTriggersEvent:true,triggerFnName:"trigger",allowGetting:true,updateStyle:true}),removeData:Fe.removeData({field:"data",event:"data",triggerFnName:"trigger",triggerEvent:true,updateStyle:true}),scratch:Fe.data({field:"scratch",bindingEvent:"scratch",allowBinding:true,allowSetting:true,settingEvent:"scratch",settingTriggersEvent:true,triggerFnName:"trigger",allowGetting:true,updateStyle:true}),removeScratch:Fe.removeData({field:"scratch",event:"scratch",triggerFnName:"trigger",triggerEvent:true,updateStyle:true})};Aa.attr=Aa.data;Aa.removeAttr=Aa.removeData;

var Ra=function(e){
  var t=this;e=be({},e);var a=e.container;

  if (a&&!bn(a)&&bn(a[0])) {
    (a = a[0]);
  }

  var n=a?a._cyreg:null;
  n=n||{};

  if (n&&n.cy) {
    n.cy.destroy();
    n={};
  }

  var i=n.readies=n.readies||[];

  if (a) {
    (a._cyreg = n);
  }

  n.cy=t;
  var s=rr!==void 0&&a!==void 0&&!e.headless;
  var o=e;
  o.layout=be({name:s?"grid":"null"},o.layout);
  o.renderer=be({name:s?"canvas":"null"},o.renderer);
  var l=function(d,y,g){return y!==void 0?y:g!==void 0?g:d};
  var u=this._private={container:a,ready:false,options:o,elements:new fr(this),listeners:[],aniEles:new fr(this),data:o.data||{},scratch:{},layout:null,renderer:null,destroyed:false,notificationsEnabled:true,minZoom:1e-50,maxZoom:1e+50/* 1e50 */,zoomingEnabled:l(true,o.zoomingEnabled),userZoomingEnabled:l(true,o.userZoomingEnabled),panningEnabled:l(true,o.panningEnabled),userPanningEnabled:l(true,o.userPanningEnabled),boxSelectionEnabled:l(true,o.boxSelectionEnabled),autolock:l(false,o.autolock,o.autolockNodes),autoungrabify:l(false,o.autoungrabify,o.autoungrabifyNodes),autounselectify:l(false,o.autounselectify),styleEnabled:o.styleEnabled===void 0?s:o.styleEnabled,zoom:ae(o.zoom)?o.zoom:1,pan:{x:Le(o.pan)&&ae(o.pan.x)?o.pan.x:0,y:Le(o.pan)&&ae(o.pan.y)?o.pan.y:0},animation:{current:[],queue:[]},hasCompoundNodes:false,multiClickDebounceTime:l(250,o.multiClickDebounceTime)};
  this.createEmitter();
  this.selectionType(o.selectionType);
  this.zoomRange({min:o.minZoom,max:o.maxZoom});
  var v=function(d,y){var g=d.some(pc);if (g) {
    return ta.all(d).then(y);
  }y(d)};

  if (u.styleEnabled) {
    t.setStyle([]);
  }

  var f=be({},o,o.renderer);t.initRenderer(f);var c=function(d,y,g){
    t.notifications(false);var p=t.mutableElements();

    if (p.length>0) {
      p.remove();
    }

    if (d!=null&&(Le(d)||_e(d))) {
      t.add(d);
    }

    t.one("layoutready",function(b){
      t.notifications(true);
      t.emit(b);
      t.one("load",y);
      t.emitAndNotify("load");
    }).one("layoutstop",function(){
      t.one("done",g);
      t.emit("done");
    });

    var m=be({},t._private.options.layout);
    m.eles=t.elements();
    t.layout(m).run();
  };v([o.style,o.elements],function(h){
    var d=h[0];
    var y=h[1];

    if (u.styleEnabled) {
      t.style().append(d);
    }

    c(y,function(){
      t.startAnimationLoop();
      u.ready=true;

      if (Ue(o.ready)) {
        t.on("ready",o.ready);
      }

      for(var g=0;g<i.length;g++){var p=i[g];t.on("ready",p)}

      if (n) {
        (n.readies = []);
      }

      t.emit("ready");
    },o.done);
  })
};

var kn=Ra.prototype;
be(kn,{instanceString:function(){return"core"},isReady:function(){return this._private.ready},destroyed:function(){return this._private.destroyed},ready:function(e){
  if (this.isReady()) {
    this.emitter().emit("ready",[],e);
  } else {
    this.on("ready",e);
  }

  return this;
},destroy:function(){var e=this;if (!e.destroyed()) {
  e.stopAnimationLoop();
  e.destroyRenderer();
  this.emit("destroy");
  e._private.destroyed=true;
  return e;
}},hasElementWithId:function(e){return this._private.elements.hasElementWithId(e)},getElementById:function(e){return this._private.elements.getElementById(e)},hasCompoundNodes:function(){return this._private.hasCompoundNodes},headless:function(){return this._private.renderer.isHeadless()},styleEnabled:function(){return this._private.styleEnabled},addToPool:function(e){
  this._private.elements.merge(e);
  return this;
},removeFromPool:function(e){
  this._private.elements.unmerge(e);
  return this;
},container:function(){return this._private.container||null},window:function(){var e=this._private.container;if (e==null) {
  return rr;
}var t=this._private.container.ownerDocument;return t===void 0||t==null?rr:t.defaultView||rr},mount:function(e){if(e!=null){
  var t=this;
  var a=t._private;
  var n=a.options;

  if (!bn(e)&&bn(e[0])) {
    (e = e[0]);
  }

  t.stopAnimationLoop();
  t.destroyRenderer();
  a.container=e;
  a.styleEnabled=true;
  t.invalidateSize();
  t.initRenderer(be({},n,n.renderer,{name:n.renderer.name==="null"?"canvas":n.renderer.name}));
  t.startAnimationLoop();
  t.style(n.style);
  t.emit("mount");
  return t;
}},unmount:function(){
  var e=this;
  e.stopAnimationLoop();
  e.destroyRenderer();
  e.initRenderer({name:"null"});
  e.emit("unmount");
  return e;
},options:function(){return qr(this._private.options)},json:function(e){
  var t=this;
  var a=t._private;
  var n=t.mutableElements();
  var i=function(w){return t.getElementById(w.id())};
  if(Le(e)){
    t.startBatch();

    if (e.elements) {
      var s={};

      var o=function(w,E){
        var C=[];
        var x=[];
        for(var T=0;T<w.length;T++){
          var k=w[T];if(!k.data.id){Ve("cy.json() cannot handle elements without an ID attribute");continue}
          var D=""+k.data.id;
          var B=t.getElementById(D);
          s[D]=true;

          if (B.length!==0) {
            x.push({ele:B,json:k});
          } else {
            E&&(k.group=E);
            C.push(k);
          }
        }t.add(C);for(var P=0;P<x.length;P++){
          var A=x[P];
          var R=A.ele;
          var L=A.json;
          R.json(L)
        }
      };

      if (_e(e.elements)) {
        o(e.elements);
      } else {
        for(var l=["nodes","edges"],u=0;u<l.length;u++){
          var v=l[u];
          var f=e.elements[v];

          if (_e(f)) {
            o(f,v);
          }
        }
      }var c=t.collection();
      n.filter(function(b){return!s[b.id()]}).forEach(function(b){
        if (b.isParent()) {
          c.merge(b);
        } else {
          b.remove();
        }
      });
      c.forEach(function(b){return b.children().move({parent:null})});
      c.forEach(function(b){return i(b).remove()});
    }

    if (e.style) {
      t.style(e.style);
    }

    if (e.zoom!=null&&e.zoom!==a.zoom) {
      t.zoom(e.zoom);
    }

    if (e.pan&&(e.pan.x!==a.pan.x||e.pan.y!==a.pan.y)) {
      t.pan(e.pan);
    }

    if (e.data) {
      t.data(e.data);
    }

    for(var h=["minZoom","maxZoom","zoomingEnabled","userZoomingEnabled","panningEnabled","userPanningEnabled","boxSelectionEnabled","autolock","autoungrabify","autounselectify","multiClickDebounceTime"],d=0;d<h.length;d++){
      var y=h[d];

      if (e[y]!=null) {
        t[y](e[y]);
      }
    }
    t.endBatch();
    return this;
  }else{
    var g=!!e;
    var p={};

    if (g) {
      p.elements=this.elements().map(function(b){return b.json()});
    } else {
      p.elements={};

      n.forEach(function(b){
        var w=b.group();

        if (!p.elements[w]) {
          (p.elements[w] = []);
        }

        p.elements[w].push(b.json());
      });
    }

    if (this._private.styleEnabled) {
      (p.style = t.style().json());
    }

    p.data=qr(t.data());
    var m=a.options;
    p.zoomingEnabled=a.zoomingEnabled;
    p.userZoomingEnabled=a.userZoomingEnabled;
    p.zoom=a.zoom;
    p.minZoom=a.minZoom;
    p.maxZoom=a.maxZoom;
    p.panningEnabled=a.panningEnabled;
    p.userPanningEnabled=a.userPanningEnabled;
    p.pan=qr(a.pan);
    p.boxSelectionEnabled=a.boxSelectionEnabled;
    p.renderer=qr(m.renderer);
    p.hideEdgesOnViewport=m.hideEdgesOnViewport;
    p.textureOnViewport=m.textureOnViewport;
    p.wheelSensitivity=m.wheelSensitivity;
    p.motionBlur=m.motionBlur;
    p.multiClickDebounceTime=m.multiClickDebounceTime;
    return p;
  }
}});kn.$id=kn.getElementById;[pp,xp,tf,zs,dn,Cp,Fs,hn,kp,At,Aa].forEach(function(r){be(kn,r)});
var Bp={fit:true,directed:false,direction:"downward",padding:30,circle:false,grid:false,spacingFactor:1.75,boundingBox:void 0,avoidOverlap:true,nodeDimensionsIncludeLabels:false,roots:void 0,depthSort:void 0,animate:false,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return true;},ready:void 0,stop:void 0,transform:function(e,t){return t}};
var Pp={maximal:false,acyclic:false};
var Ft=function(e){return e.scratch("breadthfirst")};
var Tl=function(e,t){return e.scratch("breadthfirst",t)};
function af(r){this.options=be({},Bp,Pp,r)}af.prototype.run=function(){
  var r=this.options;
  var e=r.cy;
  var t=r.eles;
  var a=t.nodes().filter(function(ye){return ye.isChildless()});
  var n=t;
  var i=r.directed;
  var s=r.acyclic||r.maximal||r.maximalAdjustments>0;
  var o=!!r.boundingBox;
  var l=wr(o?r.boundingBox:structuredClone(e.extent()));
  var u;
  if (Dr(r.roots)) {
    u=r.roots;
  } else if(_e(r.roots)){
    var v=[];
    for(var f=0;f<r.roots.length;f++){
      var c=r.roots[f];
      var h=e.getElementById(c);
      v.push(h)
    }u=e.collection(v)
  }else if (ge(r.roots)) {
    u=e.$(r.roots);
  } else if (i) {
    u=a.roots();
  } else {
    var d=t.components();u=e.collection();

    var y=function(){
      var ie=d[g];
      var de=ie.maxDegree(false);
      var he=ie.filter(function(Ee){return Ee.degree(false)===de;});
      u=u.add(he)
    };

    for (var g=0; g<d.length; g++) {
      y()
    }
  }
  var p=[];
  var m={};

  var b=function(ie,de){
    if (p[de]==null) {
      (p[de] = []);
    }

    var he=p[de].length;
    p[de].push(ie);
    Tl(ie,{index:he,depth:de});
  };

  var w=function(ie,de){
    var he=Ft(ie);
    var Ee=he.depth;
    var pe=he.index;
    p[Ee][pe]=null;

    if (ie.isChildless()) {
      b(ie,de);
    }
  };

  n.bfs({roots:u,directed:r.directed,visit:function(ie,de,he,Ee,pe){
    var Se=ie[0];
    var Re=Se.id();

    if (Se.isChildless()) {
      b(Se,pe);
    }

    m[Re]=true;
  }});
  var E=[];
  for(var C=0;C<a.length;C++){
    var x=a[C];

    if (!m[x.id()]) {
      E.push(x);
    }
  }

  var T=function(ie){for(var de=p[ie],he=0;he<de.length;he++){var Ee=de[he];if(Ee==null){
    de.splice(he,1);
    he--;
    continue
  }Tl(Ee,{depth:ie,index:he})}};

  var k=function(ie,de){
    var he=Ft(ie);
    var pe=-1;
    var Se=ie.id();
    for(var Ee=ie.incomers().filter(function(xe){return xe.isNode()&&t.has(xe)}), Re=0;Re<Ee.length;Re++){
      var Oe=Ee[Re];
      var Ne=Ft(Oe);
      pe=Math.max(pe,Ne.depth)
    }if(he.depth<=pe){
      if (!r.acyclic&&de[Se]) {
        return null;
      }var ze=pe+1;
      w(ie,ze);
      de[Se]=ze;
      return true;
    }return false;
  };

  if(i&&s){
    var D=[];
    var B={};
    var P=function(ie){return D.push(ie)};
    var A=function(){return D.shift()};
    for(a.forEach(function(ye){return D.push(ye)});D.length>0;){
      var R=A();
      var L=k(R,B);
      if (L) {
        R.outgoers().filter(function(ye){return ye.isNode()&&t.has(ye)}).forEach(P);
      } else
        if(L===null){Ve("Detected double maximal shift for node `"+R.id()+"`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");break}
    }
  }var I=0;if (r.avoidOverlap) {
      for(var M=0;M<a.length;M++){
        var O=a[M];
        var V=O.layoutDimensions(r);
        var G=V.w;
        var N=V.h;
        I=Math.max(I,G,N)
      }
    }
  var F={};

  var U=function(ie){
    if (F[ie.id()]) {
      return F[ie.id()];
    }
    var de=Ft(ie).depth;
    var Ee=0;
    var pe=0;
    for(var he=ie.neighborhood(), Se=0;Se<he.length;Se++){var Re=he[Se];if(!(Re.isEdge()||Re.isParent()||!a.has(Re))){var Oe=Ft(Re);if(Oe!=null){
      var Ne=Oe.index;
      var ze=Oe.depth;
      if(!(Ne==null||ze==null)){
        var xe=p[ze].length;

        if (ze<de) {
          Ee+=Ne/xe;
          pe++;
        }
      }
    }}}
    pe=Math.max(1,pe);
    Ee=Ee/pe;

    if (pe===0) {
      (Ee = 0);
    }

    F[ie.id()]=Ee;
    return Ee;
  };

  var Q=function(ie,de){
    var he=U(ie);
    var Ee=U(de);
    var pe=he-Ee;
    return pe===0?nv(ie.id(),de.id()):pe
  };

  if (r.depthSort!==void 0) {
    (Q = r.depthSort);
  }

  for (var K=p.length,j=0; j<K; j++) {
      p[j].sort(Q);
      T(j);
    }
  var re=[];
  for (var ne=0; ne<E.length; ne++) {
    re.push(E[ne]);
  }var J=function(){for (var ie=0; ie<K; ie++) {
      T(ie)
    }};

  if (re.length) {
    p.unshift(re);
    K=p.length;
    J();
  }

  var z=0;
  for (var q=0; q<K; q++) {
    z=Math.max(p[q].length,z);
  }
  var H={x:l.x1+l.w/2,y:l.y1+l.h/2};
  var Y=a.reduce(function(ye,ie){return(function(de){return{w:ye.w===-1?de.w:(ye.w+de.w)/2,h:ye.h===-1?de.h:(ye.h+de.h)/2}})(ie.boundingBox({includeLabels:r.nodeDimensionsIncludeLabels}))},{w:-1,h:-1});
  var te=Math.max(K===1?0:o?(l.h-r.padding*2-Y.h)/(K-1):(l.h-r.padding*2-Y.h)/(K+1),I);
  var ce=p.reduce(function(ye,ie){return Math.max(ye,ie.length)},0);

  var Ae=function(ie){
    var de=Ft(ie);
    var he=de.depth;
    var Ee=de.index;
    if(r.circle){
      var pe=Math.min(l.w/2/K,l.h/2/K);pe=Math.max(pe,I);
      var Se=pe*he+pe-(K>0&&p[0].length<=3?pe/2:0);
      var Re=2*Math.PI/p[he].length*Ee;

      if (he===0&&p[0].length===1) {
        (Se = 1);
      }

      return {x:H.x+Se*Math.cos(Re),y:H.y+Se*Math.sin(Re)};
    }else{
      var Oe=p[he].length;
      var Ne=Math.max(Oe===1?0:o?(l.w-r.padding*2-Y.w)/((r.grid?ce:Oe)-1):(l.w-r.padding*2-Y.w)/((r.grid?ce:Oe)+1),I);
      var ze={x:H.x+(Ee+1-(Oe+1)/2)*Ne,y:H.y+(he+1-(K+1)/2)*te};
      return ze
    }
  };

  var Ce={downward:0,leftward:90,upward:180,rightward:-90};

  if (Object.keys(Ce).indexOf(r.direction)===-1) {
    $e(`Invalid direction '${r.direction}' specified for breadthfirst layout. Valid values are: ${Object.keys(Ce).join(", ")}`);
  }

  var we=function(ie){return $c(Ae(ie),l,Ce[r.direction])};
  t.nodes().layoutPositions(this,r,we);
  return this;
};var Ap={fit:true,padding:30,boundingBox:void 0,avoidOverlap:true,nodeDimensionsIncludeLabels:false,spacingFactor:void 0,radius:void 0,startAngle:3/2*Math.PI,sweep:void 0,clockwise:true,sort:void 0,animate:false,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return true;},ready:void 0,stop:void 0,transform:function(e,t){return t}};function nf(r){this.options=be({},Ap,r)}nf.prototype.run=function(){
  var r=this.options;
  var e=r;
  var t=r.cy;
  var a=e.eles;
  var n=e.counterclockwise!==void 0?!e.counterclockwise:e.clockwise;
  var i=a.nodes().not(":parent");

  if (e.sort) {
    (i = i.sort(e.sort));
  }

  var s=wr(e.boundingBox?e.boundingBox:{x1:0,y1:0,w:t.width(),h:t.height()});
  var o={x:s.x1+s.w/2,y:s.y1+s.h/2};
  var l=e.sweep===void 0?2*Math.PI-2*Math.PI/i.length:e.sweep;
  var u=l/Math.max(1,i.length-1);
  var v;
  var f=0;
  for(var c=0;c<i.length;c++){
    var h=i[c];
    var d=h.layoutDimensions(e);
    var y=d.w;
    var g=d.h;
    f=Math.max(f,y,g)
  }

  if (ae(e.radius)) {
    v=e.radius;
  } else if (i.length<=1) {
    v=0;
  } else {
    v=Math.min(s.h,s.w)/2-f;
  }

  if (i.length>1&&e.avoidOverlap) {
    f*=1.75;
    var p=Math.cos(u)-Math.cos(0);
    var m=Math.sin(u)-Math.sin(0);
    var b=Math.sqrt(f*f/(p*p+m*m));
    v=Math.max(b,v)
  }

  var w=function(C,x){
    var T=e.startAngle+x*u*(n?1:-1);
    var k=v*Math.cos(T);
    var D=v*Math.sin(T);
    var B={x:o.x+k,y:o.y+D};
    return B
  };
  a.nodes().layoutPositions(this,e,w);
  return this;
};var Rp={fit:true,padding:30,startAngle:3/2*Math.PI,sweep:void 0,clockwise:true,equidistant:false,minNodeSpacing:10,boundingBox:void 0,avoidOverlap:true,nodeDimensionsIncludeLabels:false,height:void 0,width:void 0,spacingFactor:void 0,concentric:function(e){return e.degree()},levelWidth:function(e){return e.maxDegree()/4},animate:false,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return true;},ready:void 0,stop:void 0,transform:function(e,t){return t}};function sf(r){this.options=be({},Rp,r)}sf.prototype.run=function(){
  var r=this.options;
  var e=r;
  var t=e.counterclockwise!==void 0?!e.counterclockwise:e.clockwise;
  var a=r.cy;
  var n=e.eles;
  var s=wr(e.boundingBox?e.boundingBox:{x1:0,y1:0,w:a.width(),h:a.height()});
  var o={x:s.x1+s.w/2,y:s.y1+s.h/2};
  var l=[];
  var u=0;
  for(var i=n.nodes().not(":parent"), v=0;v<i.length;v++){
    var f=i[v];
    var c=void 0;
    c=e.concentric(f);
    l.push({value:c,node:f});
    f._private.scratch.concentric=c;
  }i.updateStyle();for(var h=0;h<i.length;h++){
    var d=i[h];
    var y=d.layoutDimensions(e);
    u=Math.max(u,y.w,y.h)
  }l.sort(function(te,ce){return ce.value-te.value});
  var g=e.levelWidth(i);
  var p=[[]];
  var m=p[0];
  for(var b=0;b<l.length;b++){var w=l[b];if(m.length>0){
    var E=Math.abs(m[0].value-w.value);

    if (E>=g) {
      m=[];
      p.push(m);
    }
  }m.push(w)}var C=u+e.minNodeSpacing;if(!e.avoidOverlap){
    var x=p.length>0&&p[0].length>1;
    var T=Math.min(s.w,s.h)/2-C;
    var k=T/(p.length+x?1:0);
    C=Math.min(C,k)
  }
  var D=0;
  for(var B=0;B<p.length;B++){
    var P=p[B];
    var A=e.sweep===void 0?2*Math.PI-2*Math.PI/P.length:e.sweep;
    var R=P.dTheta=A/Math.max(1,P.length-1);
    if(P.length>1&&e.avoidOverlap){
      var L=Math.cos(R)-Math.cos(0);
      var I=Math.sin(R)-Math.sin(0);
      var M=Math.sqrt(C*C/(L*L+I*I));
      D=Math.max(M,D)
    }
    P.r=D;
    D+=C;
  }if(e.equidistant){
    var O=0;
    var V=0;
    for(var G=0;G<p.length;G++){
      var N=p[G];
      var F=N.r-V;
      O=Math.max(O,F)
    }V=0;for(var U=0;U<p.length;U++){
  var Q=p[U];

  if (U===0) {
    (V = Q.r);
  }

  Q.r=V;
  V+=O;
}
  }
  var K={};
  for (var j=0; j<p.length; j++) {
    var ne=re.dTheta;
    var J=re.r;
    for(var re=p[j], z=0;z<re.length;z++){
      var q=re[z];
      var H=e.startAngle+(t?1:-1)*ne*z;
      var Y={x:o.x+J*Math.cos(H),y:o.y+J*Math.sin(H)};
      K[q.node.id()]=Y
    }
  }
  n.nodes().layoutPositions(this,e,function(te){var ce=te.id();return K[ce]});
  return this;
};
var bs;
var Mp={ready:function(){},stop:function(){},animate:true,animationEasing:void 0,animationDuration:void 0,animateFilter:function(e,t){return true;},animationThreshold:250,refresh:20,fit:true,padding:30,boundingBox:void 0,nodeDimensionsIncludeLabels:false,randomize:false,componentSpacing:40,nodeRepulsion:function(e){return 2048},nodeOverlap:4,idealEdgeLength:function(e){return 32},edgeElasticity:function(e){return 32},nestingFactor:1.2,gravity:1,numIter:1000/* 1e3 */,initialTemp:1000/* 1e3 */,coolingFactor:0.99/* .99 */,minTemp:1};
function Kn(r){
  this.options=be({},Mp,r);
  this.options.layout=this;
  var e=this.options.eles.nodes();
  var t=this.options.eles.edges();

  var a=t.filter(function(n){
    var i=n.source().data("id");
    var s=n.target().data("id");
    var o=e.some(function(u){return u.data("id")===i});
    var l=e.some(function(u){return u.data("id")===s});
    return!o||!l
  });

  this.options.eles=this.options.eles.not(a)
}Kn.prototype.run=function(){
  var r=this.options;
  var e=r.cy;
  var t=this;
  t.stopped=false;

  if ((r.animate===true || r.animate===false)) {
    t.emit({type:"layoutstart",layout:t});
  }

  if (r.debug===true) {
    bs=true;
  } else {
    bs=false;
  }

  var a=Lp(e,t,r);

  if (bs) {
    Op(a);
  }

  if (r.randomize) {
    Np(a);
  }

  var n=Yr();

  var i=function(){
    zp(a,e,r);

    if (r.fit===true) {
      e.fit(r.padding);
    }
  };

  var s=function(c){return!(t.stopped||c>=r.numIter||(Fp(a,r),a.temperature=a.temperature*r.coolingFactor,a.temperature<r.minTemp))};

  var o=function(){if (r.animate===true||r.animate===false) {
    i();
    t.one("layoutstop",r.stop);
    t.emit({type:"layoutstop",layout:t});
  } else {
    var c=r.eles.nodes();
    var h=uf(a,r,c);
    c.layoutPositions(t,r,h)
  }};

  var l=0;
  var u=true;
  if(r.animate===true){var v=function(){for (var c=0; u&&c<r.refresh; ) {
    u=s(l);
    l++;
    c++;
  }if (!u) {
    kl(a,r);
    o();
  } else {
    var h=Yr();

    if (h-n>=r.animationThreshold) {
      i();
    }

    wn(v);
  }};v()}else{
    while (u) {
      u=s(l);
      l++;
    }

    kl(a,r);
    o();
  }return this
};Kn.prototype.stop=function(){
  this.stopped=true;

  if (this.thread) {
    this.thread.stop();
  }

  this.emit("layoutstop");
  return this;
};Kn.prototype.destroy=function(){
  if (this.thread) {
    this.thread.stop();
  }

  return this;
};

var Lp=function(e,t,a){
  var n=a.eles.edges();
  var i=a.eles.nodes();
  var s=wr(a.boundingBox?a.boundingBox:{x1:0,y1:0,w:e.width(),h:e.height()});
  var o={isCompound:e.hasCompoundNodes(),layoutNodes:[],idToIndex:{},nodeSize:i.size(),graphSet:[],indexToGraph:[],layoutEdges:[],edgeSize:n.size(),temperature:a.initialTemp,clientWidth:s.w,clientHeight:s.h,boundingBox:s};
  var u={};
  for (var l=a.eles.components(), v=0; v<l.length; v++) {
    for(var f=l[v],c=0;c<f.length;c++){var h=f[c];u[h.id()]=v}
  }for(var v=0;v<o.nodeSize;v++){
    var d=i[v];
    var y=d.layoutDimensions(a);
    var g={};
    g.isLocked=d.locked();
    g.id=d.data("id");
    g.parentId=d.data("parent");
    g.cmptId=u[d.id()];
    g.children=[];
    g.positionX=d.position("x");
    g.positionY=d.position("y");
    g.offsetX=0;
    g.offsetY=0;
    g.height=y.w;
    g.width=y.h;
    g.maxX=g.positionX+g.width/2;
    g.minX=g.positionX-g.width/2;
    g.maxY=g.positionY+g.height/2;
    g.minY=g.positionY-g.height/2;
    g.padLeft=parseFloat(d.style("padding"));
    g.padRight=parseFloat(d.style("padding"));
    g.padTop=parseFloat(d.style("padding"));
    g.padBottom=parseFloat(d.style("padding"));
    g.nodeRepulsion=Ue(a.nodeRepulsion)?a.nodeRepulsion(d):a.nodeRepulsion;
    o.layoutNodes.push(g);
    o.idToIndex[g.id]=v;
  }
  var p=[];
  var m=0;
  var b=-1;
  var w=[];
  for(var v=0;v<o.nodeSize;v++){
    var d=o.layoutNodes[v];
    var E=d.parentId;

    if (E!=null) {
      o.layoutNodes[o.idToIndex[E]].children.push(d.id);
    } else {
      p[++b]=d.id;
      w.push(d.id);
    }
  }for(o.graphSet.push(w);m<=b;){
    var C=p[m++];
    var x=o.idToIndex[C];
    var h=o.layoutNodes[x];
    var T=h.children;
    if(T.length>0){o.graphSet.push(T);for (var v=0; v<T.length; v++) {
      p[++b]=T[v]
    }}
  }for (var v=0; v<o.graphSet.length; v++) {
    for(var k=o.graphSet[v],c=0;c<k.length;c++){var D=o.idToIndex[k[c]];o.indexToGraph[D]=v}
  }for(var v=0;v<o.edgeSize;v++){
    var B=n[v];
    var P={};
    P.id=B.data("id");
    P.sourceId=B.data("source");
    P.targetId=B.data("target");
    var A=Ue(a.idealEdgeLength)?a.idealEdgeLength(B):a.idealEdgeLength;
    var R=Ue(a.edgeElasticity)?a.edgeElasticity(B):a.edgeElasticity;
    var L=o.idToIndex[P.sourceId];
    var I=o.idToIndex[P.targetId];
    var M=o.indexToGraph[L];
    var O=o.indexToGraph[I];
    if(M!=O){
      var V=Ip(P.sourceId,P.targetId,o);
      var N=0;
      for (var G=o.graphSet[V], g=o.layoutNodes[L]; G.indexOf(g.id)===-1; ) {
        g=o.layoutNodes[o.idToIndex[g.parentId]];
        N++;
      }for (g=o.layoutNodes[I]; G.indexOf(g.id)===-1; ) {
        g=o.layoutNodes[o.idToIndex[g.parentId]];
        N++;
      }A*=N*a.nestingFactor
    }
    P.idealLength=A;
    P.elasticity=R;
    o.layoutEdges.push(P);
  }return o
};

var Ip=function(e,t,a){var n=of(e,t,0,a);return n.count < 2?0:n.graph;};

var of=function(e,t,a,n){
  var i=n.graphSet[a];if (-1<i.indexOf(e)&&-1<i.indexOf(t)) {
    return{count:2,graph:a};
  }
  var s=0;
  for(var o=0;o<i.length;o++){
    var l=i[o];
    var u=n.idToIndex[l];
    var v=n.layoutNodes[u].children;
    if(v.length!==0){
      var f=n.indexToGraph[n.idToIndex[v[0]]];
      var c=of(e,t,f,n);
      if (c.count!==0) {
        if (c.count===1) {
          s++;

          if (s===2) {
            break
          }
        } else {
          return c
        }
      }
    }
  }return{count:s,graph:a}
};

var Op;

var Np=function(e,t){
  var a=e.clientWidth;
  var n=e.clientHeight;
  for(var i=0;i<e.nodeSize;i++){
    var s=e.layoutNodes[i];

    if (s.children.length===0&&!s.isLocked) {
      s.positionX=Math.random()*a;
      s.positionY=Math.random()*n;
    }
  }
};

var uf=function(e,t,a){
  var n=e.boundingBox;
  var i={x1:Infinity,x2:-Infinity,y1:Infinity,y2:-Infinity};

  if (t.boundingBox) {
    a.forEach(function(s){
      var o=e.layoutNodes[e.idToIndex[s.data("id")]];
      i.x1=Math.min(i.x1,o.positionX);
      i.x2=Math.max(i.x2,o.positionX);
      i.y1=Math.min(i.y1,o.positionY);
      i.y2=Math.max(i.y2,o.positionY);
    });

    i.w=i.x2-i.x1;
    i.h=i.y2-i.y1;
  }

  return function(s,o){var l=e.layoutNodes[e.idToIndex[s.data("id")]];if (t.boundingBox) {
    var u=i.w===0?0.5/* .5 */:(l.positionX-i.x1)/i.w;
    var v=i.h===0?0.5/* .5 */:(l.positionY-i.y1)/i.h;
    return{x:n.x1+u*n.w,y:n.y1+v*n.h}
  } else {
    return{x:l.positionX,y:l.positionY}
  }};
};

var zp=function(e,t,a){
  var n=a.layout;
  var i=a.eles.nodes();
  var s=uf(e,a,i);
  i.positions(s);

  if (e.ready!==true) {
    e.ready=true;
    n.one("layoutready",a.ready);
    n.emit({type:"layoutready",layout:this});
  }
};

var Fp=function(e,t,a){
  Vp(e,t);
  Gp(e);
  Hp(e,t);
  Wp(e);
  $p(e);
};

var Vp=function(e,t){for (var a=0; a<e.graphSet.length; a++) {
  var n=e.graphSet[a];
  for (var i=n.length, s=0; s<i; s++) {
    var o=e.layoutNodes[e.idToIndex[n[s]]];
    for(var l=s+1;l<i;l++){var u=e.layoutNodes[e.idToIndex[n[l]]];qp(o,u,e,t)}
  }
}};

var Sl=function(e){return-1+2*e*Math.random()};

var qp=function(e,t,a,n){
  var i=e.cmptId;
  var s=t.cmptId;
  if(!(i!==s&&!a.isCompound)){
    var o=t.positionX-e.positionX;
    var l=t.positionY-e.positionY;
    var u=1;

    if (o===0&&l===0) {
      o=Sl(u);
      l=Sl(u);
    }

    var v=_p(e,t,o,l);if (v>0) {
        var f=n.nodeOverlap*v;
        var c=Math.sqrt(o*o+l*l);
        var h=f*o/c;
        var d=f*l/c;
      } else {
        var y=Dn(e,o,l);
        var g=Dn(t,-1*o,-1*l);
        var p=g.x-y.x;
        var m=g.y-y.y;
        var b=p*p+m*m;
        var c=Math.sqrt(b);
        var f=(e.nodeRepulsion+t.nodeRepulsion)/b;
        var h=f*p/c;
        var d=f*m/c;
      }

    if (!e.isLocked) {
      e.offsetX-=h;
      e.offsetY-=d;
    }

    if (!t.isLocked) {
      t.offsetX+=h;
      t.offsetY+=d;
    }
  }
};

var _p=function(e,t,a,n){if(a>0)var i=e.maxX-t.minX;else var i=t.maxX-e.minX;if(n>0)var s=e.maxY-t.minY;else var s=t.maxY-e.minY;return i>=0&&s>=0?Math.sqrt(i*i+s*s):0};

var Dn=function(e,t,a){
  var n=e.positionX;
  var i=e.positionY;
  var s=e.height||1;
  var o=e.width||1;
  var l=a/t;
  var u=s/o;
  var v={};

  if (t===0&&a > 0||t===0&&a < 0) {
    v.x=n;
    v.y=i+s/2;
    return v;
  }

  if (t > 0&&-1*u<=l&&l<=u) {
    v.x=n+o/2;
    v.y=i+o*a/2/t;
    return v;
  }

  if (t < 0&&-1*u<=l&&l<=u) {
    v.x=n-o/2;
    v.y=i-o*a/2/t;
    return v;
  }

  if (a > 0&&(l<=-1*u||l>=u)) {
    v.x=n+s*t/2/a;
    v.y=i+s/2;
    return v;
  }

  a < 0&&(l<=-1*u||l>=u)&&(v.x=n-s*t/2/a,v.y=i-s/2);
  return v;
};

var Gp=function(e,t){for(var a=0;a<e.edgeSize;a++){
  var n=e.layoutEdges[a];
  var i=e.idToIndex[n.sourceId];
  var s=e.layoutNodes[i];
  var o=e.idToIndex[n.targetId];
  var l=e.layoutNodes[o];
  var u=l.positionX-s.positionX;
  var v=l.positionY-s.positionY;
  if(!(u===0&&v===0)){
    var f=Dn(s,u,v);
    var c=Dn(l,-1*u,-1*v);
    var h=c.x-f.x;
    var d=c.y-f.y;
    var y=Math.sqrt(h*h+d*d);
    var g=Math.pow(n.idealLength-y,2)/n.elasticity;
    if (y!==0) {
      var p=g*h/y;
      var m=g*d/y;
    } else {
      var p=0;
      var m=0;
    }

    if (!s.isLocked) {
      s.offsetX+=p;
      s.offsetY+=m;
    }

    if (!l.isLocked) {
      l.offsetX-=p;
      l.offsetY-=m;
    }
  }
}};

var Hp=function(e,t){if (t.gravity!==0) {
  var a=1;
  for(var n=0;n<e.graphSet.length;n++){
    var i=e.graphSet[n];
    var s=i.length;
    if (n===0) {
      var o=e.clientHeight/2;
      var l=e.clientWidth/2;
    } else {
      var u=e.layoutNodes[e.idToIndex[i[0]]];
      var v=e.layoutNodes[e.idToIndex[u.parentId]];
      var o=v.positionX;
      var l=v.positionY;
    }for(var f=0;f<s;f++){var c=e.layoutNodes[e.idToIndex[i[f]]];if(!c.isLocked){
      var h=o-c.positionX;
      var d=l-c.positionY;
      var y=Math.sqrt(h*h+d*d);
      if(y>a){
        var g=t.gravity*h/y;
        var p=t.gravity*d/y;
        c.offsetX+=g;
        c.offsetY+=p;
      }
    }}
  }
}};

var Wp=function(e,t){
  var a=[];
  var n=0;
  var i=-1;
  a.push(...e.graphSet[0]);

  for (i+=e.graphSet[0].length; n<=i; ) {
    var s=a[n++];
    var o=e.idToIndex[s];
    var l=e.layoutNodes[o];
    var u=l.children;
    if(u.length > 0&&!l.isLocked){
      var v=l.offsetX;
      var f=l.offsetY;
      for(var c=0;c<u.length;c++){
        var h=e.layoutNodes[e.idToIndex[u[c]]];
        h.offsetX+=v;
        h.offsetY+=f;
        a[++i]=u[c];
      }
      l.offsetX=0;
      l.offsetY=0;
    }
  }
};

var $p=function(e,t){for(var a=0;a<e.nodeSize;a++){
  var n=e.layoutNodes[a];

  if (n.children.length > 0) {
    n.maxX=void 0;
    n.minX=void 0;
    n.maxY=void 0;
    n.minY=void 0;
  }
}for(var a=0;a<e.nodeSize;a++){var n=e.layoutNodes[a];if(!(n.children.length > 0||n.isLocked)){
  var i=Up(n.offsetX,n.offsetY,e.temperature);
  n.positionX+=i.x;
  n.positionY+=i.y;
  n.offsetX=0;
  n.offsetY=0;
  n.minX=n.positionX-n.width;
  n.maxX=n.positionX+n.width;
  n.minY=n.positionY-n.height;
  n.maxY=n.positionY+n.height;
  lf(n,e);
}}for(var a=0;a<e.nodeSize;a++){
  var n=e.layoutNodes[a];

  if (n.children.length > 0&&!n.isLocked) {
    n.positionX=(n.maxX+n.minX)/2;
    n.positionY=(n.maxY+n.minY)/2;
    n.width=n.maxX-n.minX;
    n.height=n.maxY-n.minY;
  }
}};

var Up=function(e,t,a){var n=Math.sqrt(e*e+t*t);if(n>a)var i={x:a*e/n,y:a*t/n};else var i={x:e,y:t};return i};

var lf=function(e,t){var a=e.parentId;if(a!=null){
  var n=t.layoutNodes[t.idToIndex[a]];
  var i=false;

  if ((n.maxX==null || e.maxX+n.padRight>n.maxX)) {
    n.maxX=e.maxX+n.padRight;
    i=true;
  }

  if ((n.minX==null || e.minX-n.padLeft<n.minX)) {
    n.minX=e.minX-n.padLeft;
    i=true;
  }

  if ((n.maxY==null || e.maxY+n.padBottom>n.maxY)) {
    n.maxY=e.maxY+n.padBottom;
    i=true;
  }

  if ((n.minY==null || e.minY-n.padTop<n.minY)) {
    n.minY=e.minY-n.padTop;
    i=true;
  }

  if (i) {
    return lf(n,t)
  }
}};

var kl=function(e,t){
  var n=[];
  for(var a=e.layoutNodes, i=0;i<a.length;i++){
    var s=a[i];
    var o=s.cmptId;
    var l=n[o]=n[o]||[];
    l.push(s)
  }
  var u=0;
  for(var i=0;i<n.length;i++){var v=n[i];if(v){
    v.x1=Infinity;
    v.x2=-Infinity;
    v.y1=Infinity;
    v.y2=-Infinity;
    for(var f=0;f<v.length;f++){
      var c=v[f];
      v.x1=Math.min(v.x1,c.positionX-c.width/2);
      v.x2=Math.max(v.x2,c.positionX+c.width/2);
      v.y1=Math.min(v.y1,c.positionY-c.height/2);
      v.y2=Math.max(v.y2,c.positionY+c.height/2);
    }
    v.w=v.x2-v.x1;
    v.h=v.y2-v.y1;
    u+=v.w*v.h;
  }}n.sort(function(m,b){return b.w*b.h-m.w*m.h});
  var h=0;
  var d=0;
  var y=0;
  var g=0;
  var p=Math.sqrt(u)*e.clientWidth/e.clientHeight;
  for(var i=0;i<n.length;i++){var v=n[i];if(v){
    for(var f=0;f<v.length;f++){
      var c=v[f];

      if (!c.isLocked) {
        c.positionX+=h-v.x1;
        c.positionY+=d-v.y1;
      }
    }
    h+=v.w+t.componentSpacing;
    y+=v.w+t.componentSpacing;
    g=Math.max(g,v.h);

    if (y>p) {
      d+=g+t.componentSpacing;
      h=0;
      y=0;
      g=0;
    }
  }}
};

var Kp={fit:true,padding:30,boundingBox:void 0,avoidOverlap:true,avoidOverlapPadding:10,nodeDimensionsIncludeLabels:false,spacingFactor:void 0,condense:false,rows:void 0,cols:void 0,position:function(e){},sort:void 0,animate:false,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return true;},ready:void 0,stop:void 0,transform:function(e,t){return t}};
function vf(r){this.options=be({},Kp,r)}vf.prototype.run=function(){
  var r=this.options;
  var e=r;
  var t=r.cy;
  var a=e.eles;
  var n=a.nodes().not(":parent");

  if (e.sort) {
    (n = n.sort(e.sort));
  }

  var i=wr(e.boundingBox?e.boundingBox:{x1:0,y1:0,w:t.width(),h:t.height()});if (i.h===0||i.w===0) {
      a.nodes().layoutPositions(this,e,function(U){return{x:i.x1,y:i.y1}});
    } else {
    var s=n.size();
    var o=Math.sqrt(s*i.h/i.w);
    var l=Math.round(o);
    var u=Math.round(i.w/i.h*o);

    var v=function(Q){
      if (Q==null) {
        return Math.min(l,u);
      }var K=Math.min(l,u);

      if (K==l) {
        l=Q;
      } else {
        u=Q;
      }
    };

    var f=function(Q){
      if (Q==null) {
        return Math.max(l,u);
      }var K=Math.max(l,u);

      if (K==l) {
        l=Q;
      } else {
        u=Q;
      }
    };

    var c=e.rows;
    var h=e.cols!=null?e.cols:e.columns;
    if (c!=null&&h!=null) {
      l=c;
      u=h;
    } else if (c!=null&&h==null) {
      l=c;
      u=Math.ceil(s/l);
    } else if (c==null&&h!=null) {
      u=h;
      l=Math.ceil(s/u);
    } else if (u*l>s) {
      var d=v();
      var y=f();

      if ((d-1)*y>=s) {
        v(d-1);
      } else if ((y-1)*d>=s) {
        f(y-1);
      }
    } else {
      while (u*l<s) {
        var g=v();
        var p=f();

        if ((p+1)*g>=s) {
          f(p+1);
        } else {
          v(g+1);
        }
      }
    }
    var m=i.w/u;
    var b=i.h/l;

    if (e.condense) {
      m=0;
      b=0;
    }

    if (e.avoidOverlap) {
      for(var w=0;w<n.length;w++){
        var E=n[w];
        var C=E._private.position;

        if ((C.x==null || C.y==null)) {
          C.x=0;
          C.y=0;
        }

        var x=E.layoutDimensions(e);
        var T=e.avoidOverlapPadding;
        var k=x.w+T;
        var D=x.h+T;
        m=Math.max(m,k);
        b=Math.max(b,D);
      }
    }

    var B={};
    var P=function(Q,K){return!!B["c-"+Q+"-"+K]};
    var A=function(Q,K){B["c-"+Q+"-"+K]=true};
    var R=0;
    var L=0;

    var I=function(){
      L++;

      if (L>=u) {
        L=0;
        R++;
      }
    };

    var M={};
    for(var O=0;O<n.length;O++){
      var V=n[O];
      var G=e.position(V);
      if(G&&(G.row!==void 0||G.col!==void 0)){
        var N={row:G.row,col:G.col};if (N.col===void 0) {
          for (N.col=0; P(N.row,N.col); ) {
            N.col++;
          }
        } else if (N.row===void 0) {
          for (N.row=0; P(N.row,N.col); ) {
            N.row++;
          }
        }
        M[V.id()]=N;
        A(N.row,N.col);
      }
    }var F=function(Q,K){
          var j;
          var re;
          if (Q.locked()||Q.isParent()) {
            return false;
          }var ne=M[Q.id()];if (ne) {
            j=ne.col*m+m/2+i.x1;
            re=ne.row*b+b/2+i.y1;
          } else {
      while (P(R,L)) {
        I();
      }

      j=L*m+m/2+i.x1;
      re=R*b+b/2+i.y1;
      A(R,L);
      I();
    }return{x:j,y:re}
        };n.layoutPositions(this,e,F)
  }return this
};var Xp={ready:function(){},stop:function(){}};function ho(r){this.options=be({},Xp,r)}ho.prototype.run=function(){
  var r=this.options;
  var e=r.eles;
  var t=this;
  r.cy;
  t.emit("layoutstart");
  e.nodes().positions(function(){return{x:0,y:0}});
  t.one("layoutready",r.ready);
  t.emit("layoutready");
  t.one("layoutstop",r.stop);
  t.emit("layoutstop");
  return this;
};ho.prototype.stop=function(){return this};var Yp={positions:void 0,zoom:void 0,pan:void 0,fit:true,padding:30,spacingFactor:void 0,animate:false,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return true;},ready:void 0,stop:void 0,transform:function(e,t){return t}};function ff(r){this.options=be({},Yp,r)}ff.prototype.run=function(){
  var r=this.options;
  var e=r.eles;
  var t=e.nodes();
  var a=Ue(r.positions);
  function n(i){if (r.positions==null) {
    return yd(i.position());
  }if (a) {
    return r.positions(i);
  }var s=r.positions[i._private.data.id];return s??null}
  t.layoutPositions(this,r,function(i,s){var o=n(i);return i.locked()||o==null?false:o;});
  return this;
};var Zp={fit:true,padding:30,boundingBox:void 0,animate:false,animationDuration:500,animationEasing:void 0,animateFilter:function(e,t){return true;},ready:void 0,stop:void 0,transform:function(e,t){return t}};function cf(r){this.options=be({},Zp,r)}cf.prototype.run=function(){
  var r=this.options;
  var e=r.cy;
  var t=r.eles;
  var a=wr(r.boundingBox?r.boundingBox:{x1:0,y1:0,w:e.width(),h:e.height()});
  var n=function(s,o){return{x:a.x1+Math.round(Math.random()*a.w),y:a.y1+Math.round(Math.random()*a.h)}};
  t.nodes().layoutPositions(this,r,n);
  return this;
};var Qp=[{name:"breadthfirst",impl:af},{name:"circle",impl:nf},{name:"concentric",impl:sf},{name:"cose",impl:Kn},{name:"grid",impl:vf},{name:"null",impl:ho},{name:"preset",impl:ff},{name:"random",impl:cf}];function df(r){
  this.options=r;
  this.notifications=0;
}
var Dl=function(){};
var Bl=function(){throw new Error("A headless instance can not render images")};
df.prototype={recalculateRenderedStyle:Dl,notify:function(){this.notifications++},init:Dl,isHeadless:function(){return true;},png:Bl,jpg:Bl};var go={};go.arrowShapeWidth=0.3/* .3 */;go.registerArrowShapes=function(){
  var r=this.arrowShapes={};
  var e=this;

  var t=function(u,v,f,c,h,d,y){
    var g=h.x-f/2-y;
    var p=h.x+f/2+y;
    var m=h.y-f/2-y;
    var b=h.y+f/2+y;
    var w=g<=u&&u<=p&&m<=v&&v<=b;
    return w
  };

  var a=function(u,v,f,c,h){
    var d=u*Math.cos(c)-v*Math.sin(c);
    var y=u*Math.sin(c)+v*Math.cos(c);
    var g=d*f;
    var p=y*f;
    var m=g+h.x;
    var b=p+h.y;
    return{x:m,y:b}
  };

  var n=function(u,v,f,c){
    var h=[];
    for(var d=0;d<u.length;d+=2){
      var y=u[d];
      var g=u[d+1];
      h.push(a(y,g,v,f,c))
    }return h
  };

  var i=function(u){
    var v=[];
    for(var f=0;f<u.length;f++){var c=u[f];v.push(c.x,c.y)}return v
  };

  var s=function(u){return u.pstyle("width").pfValue*u.pstyle("arrow-scale").pfValue*2};

  var o=function(u,v){
    if (ge(v)) {
      (v = r[v]);
    }

    r[u]=be({name:u,points:[-0.15/* -.15 */,-0.3/* -.3 */,0.15/* .15 */,-0.3/* -.3 */,0.15/* .15 */,0.3/* .3 */,-0.15/* -.15 */,0.3/* .3 */],collide:function(c,h,d,y,g,p){
      var m=i(n(this.points,d+2*p,y,g));
      var b=Sr(c,h,m);
      return b
    },roughCollide:t,draw:function(c,h,d,y){var g=n(this.points,h,d,y);e.arrowShapeImpl("polygon")(c,g)},spacing:function(c){return 0},gap:s},v);
  };

  o("none",{collide:xn,roughCollide:xn,draw:js,spacing:Go,gap:Go});
  o("triangle",{points:[-0.15/* -.15 */,-0.3/* -.3 */,0,0,0.15/* .15 */,-0.3/* -.3 */]});
  o("arrow","triangle");

  o("triangle-backcurve",{points:r.triangle.points,controlPoint:[0,-0.15/* -.15 */],roughCollide:t,draw:function(u,v,f,c,h){
    var d=n(this.points,v,f,c);
    var y=this.controlPoint;
    var g=a(y[0],y[1],v,f,c);
    e.arrowShapeImpl(this.name)(u,d,g)
  },gap:function(u){return s(u)*0.8/* .8 */;}});

  o("triangle-tee",{points:[0,0,0.15/* .15 */,-0.3/* -.3 */,-0.15/* -.15 */,-0.3/* -.3 */,0,0],pointsTee:[-0.15/* -.15 */,-0.4/* -.4 */,-0.15/* -.15 */,-0.5/* -.5 */,0.15/* .15 */,-0.5/* -.5 */,0.15/* .15 */,-0.4/* -.4 */],collide:function(u,v,f,c,h,d,y){
    var g=i(n(this.points,f+2*y,c,h));
    var p=i(n(this.pointsTee,f+2*y,c,h));
    var m=Sr(u,v,g)||Sr(u,v,p);
    return m
  },draw:function(u,v,f,c,h){
    var d=n(this.points,v,f,c);
    var y=n(this.pointsTee,v,f,c);
    e.arrowShapeImpl(this.name)(u,d,y)
  }});

  o("circle-triangle",{radius:0.15/* .15 */,pointsTr:[0,-0.15/* -.15 */,0.15/* .15 */,-0.45/* -.45 */,-0.15/* -.15 */,-0.45/* -.45 */,0,-0.15/* -.15 */],collide:function(u,v,f,c,h,d,y){
    var g=h;
    var p=Math.pow(g.x-u,2)+Math.pow(g.y-v,2)<=Math.pow((f+2*y)*this.radius,2);
    var m=i(n(this.points,f+2*y,c,h));
    return Sr(u,v,m)||p
  },draw:function(u,v,f,c,h){var d=n(this.pointsTr,v,f,c);e.arrowShapeImpl(this.name)(u,d,c.x,c.y,this.radius*v)},spacing:function(u){return e.getArrowWidth(u.pstyle("width").pfValue,u.pstyle("arrow-scale").value)*this.radius}});

  o("triangle-cross",{points:[0,0,0.15/* .15 */,-0.3/* -.3 */,-0.15/* -.15 */,-0.3/* -.3 */,0,0],baseCrossLinePts:[-0.15/* -.15 */,-0.4/* -.4 */,-0.15/* -.15 */,-0.4/* -.4 */,0.15/* .15 */,-0.4/* -.4 */,0.15/* .15 */,-0.4/* -.4 */],crossLinePts:function(u,v){
    var f=this.baseCrossLinePts.slice();
    var c=v/u;
    var h=3;
    var d=5;
    f[h]=f[h]-c;
    f[d]=f[d]-c;
    return f;
  },collide:function(u,v,f,c,h,d,y){
    var g=i(n(this.points,f+2*y,c,h));
    var p=i(n(this.crossLinePts(f,d),f+2*y,c,h));
    var m=Sr(u,v,g)||Sr(u,v,p);
    return m
  },draw:function(u,v,f,c,h){
    var d=n(this.points,v,f,c);
    var y=n(this.crossLinePts(v,h),v,f,c);
    e.arrowShapeImpl(this.name)(u,d,y)
  }});

  o("vee",{points:[-0.15/* -.15 */,-0.3/* -.3 */,0,0,0.15/* .15 */,-0.3/* -.3 */,0,-0.15/* -.15 */],gap:function(u){return s(u)*0.525/* .525 */;}});

  o("circle",{radius:0.15/* .15 */,collide:function(u,v,f,c,h,d,y){
    var g=h;
    var p=Math.pow(g.x-u,2)+Math.pow(g.y-v,2)<=Math.pow((f+2*y)*this.radius,2);
    return p
  },draw:function(u,v,f,c,h){e.arrowShapeImpl(this.name)(u,c.x,c.y,this.radius*v)},spacing:function(u){return e.getArrowWidth(u.pstyle("width").pfValue,u.pstyle("arrow-scale").value)*this.radius}});

  o("tee",{points:[-0.15/* -.15 */,0,-0.15/* -.15 */,-0.1/* -.1 */,0.15/* .15 */,-0.1/* -.1 */,0.15/* .15 */,0],spacing:function(u){return 1},gap:function(u){return 1}});
  o("square",{points:[-0.15/* -.15 */,0,0.15/* .15 */,0,0.15/* .15 */,-0.3/* -.3 */,-0.15/* -.15 */,-0.3/* -.3 */]});
  o("diamond",{points:[-0.15/* -.15 */,-0.15/* -.15 */,0,-0.3/* -.3 */,0.15/* .15 */,-0.15/* -.15 */,0,0],gap:function(u){return u.pstyle("width").pfValue*u.pstyle("arrow-scale").value}});
  o("chevron",{points:[0,0,-0.15/* -.15 */,-0.15/* -.15 */,-0.1/* -.1 */,-0.2/* -.2 */,0,-0.1/* -.1 */,0.1/* .1 */,-0.2/* -.2 */,0.15/* .15 */,-0.15/* -.15 */],gap:function(u){return 0.95/* .95 */*u.pstyle("width").pfValue*u.pstyle("arrow-scale").value;}});
};var Mt={};Mt.projectIntoViewport=function(r,e){
  var t=this.cy;
  var a=this.findContainerClientCoords();
  var n=a[0];
  var i=a[1];
  var s=a[4];
  var o=t.pan();
  var l=t.zoom();
  var u=((r-n)/s-o.x)/l;
  var v=((e-i)/s-o.y)/l;
  return[u,v]
};Mt.findContainerClientCoords=function(){
  if (this.containerBB) {
    return this.containerBB;
  }
  var r=this.container;
  var e=r.getBoundingClientRect();
  var t=this.cy.window().getComputedStyle(r);
  var a=function(p){return parseFloat(t.getPropertyValue(p))};
  var n={left:a("padding-left"),right:a("padding-right"),top:a("padding-top"),bottom:a("padding-bottom")};
  var i={left:a("border-left-width"),right:a("border-right-width"),top:a("border-top-width"),bottom:a("border-bottom-width")};
  var s=r.clientWidth;
  var o=r.clientHeight;
  var l=n.left+n.right;
  var u=n.top+n.bottom;
  var v=i.left+i.right;
  var f=e.width/(s+v);
  var c=s-l;
  var h=o-u;
  var d=e.left+n.left+i.left;
  var y=e.top+n.top+i.top;
  return this.containerBB=[d,y,c,h,f]
};Mt.invalidateContainerClientCoordsCache=function(){this.containerBB=null};Mt.findNearestElement=function(r,e,t,a){return this.findNearestElements(r,e,t,a)[0]};Mt.findNearestElements=function(r,e,t,a){
  var n=this;
  var i=this;
  var s=i.getCachedZSortedEles();
  var o=[];
  var l=i.cy.zoom();
  var u=i.cy.hasCompoundNodes();
  var v=(a?24:8)/l;
  var f=(a?8:2)/l;
  var c=(a?8:2)/l;
  var h=Infinity;
  var d;
  var y;

  if (t) {
    (s = s.interactive);
  }

  function g(x,T){if(x.isNode()){
      if (y) {
        return;
      }
      y=x;
      o.push(x);
    }if (x.isEdge()&&(T==null||T<h)) {
      if (d) {if(d.pstyle("z-compound-depth").value===x.pstyle("z-compound-depth").value&&d.pstyle("z-compound-depth").value===x.pstyle("z-compound-depth").value){for (var k=0; k<o.length; k++) {
        if(o[k].isEdge()){
          o[k]=x;
          d=x;
          h=T??h;
          break
        }
      }}} else {
        o.push(x);
        d=x;
        h=T??h;
      }
    }}function p(x){
      var T=x.outerWidth()+2*f;
      var k=x.outerHeight()+2*f;
      var D=T/2;
      var B=k/2;
      var P=x.position();
      var A=x.pstyle("corner-radius").value==="auto"?"auto":x.pstyle("corner-radius").pfValue;
      var R=x._private.rscratch;
      if(P.x-D<=r&&r<=P.x+D&&P.y-B<=e&&e<=P.y+B){var L=i.nodeShapes[n.getNodeShape(x)];if (L.checkPoint(r,e,0,T,k,P.x,P.y,A,R)) {
        g(x,0);
        return true;
      }}
    }function m(x){
    var T=x._private;
    var k=T.rscratch;
    var D=x.pstyle("width").pfValue;
    var B=x.pstyle("arrow-scale").value;
    var P=D/2+v;
    var A=P*P;
    var R=P*2;
    var O=T.source;
    var V=T.target;
    var L;
    if(k.edgeType==="segments"||k.edgeType==="straight"||k.edgeType==="haystack"){for (var I=k.allpts,M=0; M+3<I.length; M+=2) {
      if (Rd(r,e,I[M],I[M+1],I[M+2],I[M+3],R)&&A>(L=Nd(r,e,I[M],I[M+1],I[M+2],I[M+3]))) {
        g(x,L);
        return true;
      }
    }}else if(k.edgeType==="bezier"||k.edgeType==="multibezier"||k.edgeType==="self"||k.edgeType==="compound"){
      var I=k.allpts;
      for (var M=0; M+5<k.allpts.length; M+=4) {
        if (Md(r,e,I[M],I[M+1],I[M+2],I[M+3],I[M+4],I[M+5],R)&&A>(L=Od(r,e,I[M],I[M+1],I[M+2],I[M+3],I[M+4],I[M+5]))) {
          g(x,L);
          return true;
        }
      }
    }
    var G=n.getArrowWidth(D,B);
    for(var O=O||T.source, V=V||T.target, N=[{name:"source",x:k.arrowStartX,y:k.arrowStartY,angle:k.srcArrowAngle},{name:"target",x:k.arrowEndX,y:k.arrowEndY,angle:k.tgtArrowAngle},{name:"mid-source",x:k.midX,y:k.midY,angle:k.midsrcArrowAngle},{name:"mid-target",x:k.midX,y:k.midY,angle:k.midtgtArrowAngle}], M=0;M<N.length;M++){
      var F=N[M];
      var U=i.arrowShapes[x.pstyle(F.name+"-arrow-shape").value];
      var Q=x.pstyle("width").pfValue;
      if (U.roughCollide(r,e,G,F.angle,{x:F.x,y:F.y},Q,v)&&U.collide(r,e,G,F.angle,{x:F.x,y:F.y},Q,v)) {
        g(x);
        return true;
      }
    }

    if (u&&o.length>0) {
      p(O);
      p(V);
    }
  }function b(x,T,k){return Tr(x,T,k)}function w(x,T){
    var k=x._private;
    var D=c;
    var B;

    if (T) {
      B=T+"-";
    } else {
      B="";
    }

    x.boundingBox();
    var P=k.labelBounds[T||"main"];
    var A=x.pstyle(B+"label").value;
    var R=x.pstyle("text-events").strValue==="yes";
    if(!(!R||!A)){
      var L=b(k.rscratch,"labelX",T);
      var I=b(k.rscratch,"labelY",T);
      var M=b(k.rscratch,"labelAngle",T);
      var O=x.pstyle(B+"text-margin-x").pfValue;
      var V=x.pstyle(B+"text-margin-y").pfValue;
      var G=P.x1-D-O;
      var N=P.x2+D-O;
      var F=P.y1-D-V;
      var U=P.y2+D-V;
      if(M){
        var Q=Math.cos(M);
        var K=Math.sin(M);

        var j=function(Y,te){
          Y=Y-L;
          te=te-I;
          return {x:Y*Q-te*K+L,y:Y*K+te*Q+I};
        };

        var re=j(G,F);
        var ne=j(G,U);
        var J=j(N,F);
        var z=j(N,U);
        var q=[re.x+O,re.y+V,J.x+O,J.y+V,z.x+O,z.y+V,ne.x+O,ne.y+V];
        if (Sr(r,e,q)) {
          g(x);
          return true;
        }
      }else if (nt(P,r,e)) {
        g(x);
        return true;
      }
    }
  }for(var E=s.length-1;E>=0;E--){
    var C=s[E];

    if (C.isNode()) {
      if (!p(C)) {
        w(C);
      }
    } else if (!m(C) && !w(C) && !w(C,"source")) {
      w(C,"target");
    }
  }return o
};Mt.getAllInBox=function(r,e,t,a){
  var n=this.getCachedZSortedEles().interactive;
  var i=this.cy.zoom();
  var s=2/i;
  var o=[];
  var l=Math.min(r,t);
  var u=Math.max(r,t);
  var v=Math.min(e,a);
  var f=Math.max(e,a);
  r=l;
  t=u;
  e=v;
  a=f;
  var c=wr({x1:r,y1:e,x2:t,y2:a});
  var h=[{x:c.x1,y:c.y1},{x:c.x2,y:c.y1},{x:c.x2,y:c.y2},{x:c.x1,y:c.y2}];
  var d=[[h[0],h[1]],[h[1],h[2]],[h[2],h[3]],[h[3],h[0]]];
  function y(Y,te,ce){return Tr(Y,te,ce)}function g(Y,te){
    var ce=Y._private;
    var Ae=s;
    var Ce="";
    Y.boundingBox();var we=ce.labelBounds.main;if (!we) {
      return null;
    }
    var ye=y(ce.rscratch,"labelX",te);
    var ie=y(ce.rscratch,"labelY",te);
    var de=y(ce.rscratch,"labelAngle",te);
    var he=Y.pstyle(Ce+"text-margin-x").pfValue;
    var Ee=Y.pstyle(Ce+"text-margin-y").pfValue;
    var pe=we.x1-Ae-he;
    var Se=we.x2+Ae-he;
    var Re=we.y1-Ae-Ee;
    var Oe=we.y2+Ae-Ee;
    if (de) {
      var Ne=Math.cos(de);
      var ze=Math.sin(de);

      var xe=function(X,S){
        X=X-ye;
        S=S-ie;
        return {x:X*Ne-S*ze+ye,y:X*ze+S*Ne+ie};
      };

      return[xe(pe,Re),xe(Se,Re),xe(Se,Oe),xe(pe,Oe)]
    } else {
      return[{x:pe,y:Re},{x:Se,y:Re},{x:Se,y:Oe},{x:pe,y:Oe}]
    }
  }function p(Y,te,ce,Ae){function Ce(we,ye,ie){return(ie.y-we.y)*(ye.x-we.x)>(ye.y-we.y)*(ie.x-we.x)}return Ce(Y,ce,Ae)!==Ce(te,ce,Ae)&&Ce(Y,te,ce)!==Ce(Y,te,Ae)}for(var m=0;m<n.length;m++){var b=n[m];if(b.isNode()){
    var w=b;
    var E=w.pstyle("text-events").strValue==="yes";
    var C=w.pstyle("box-selection").strValue;
    var x=w.pstyle("box-select-labels").strValue==="yes";
    if (C==="none") {
      continue;
    }
    var T=(C==="overlap"||x)&&E;
    var k=w.boundingBox({includeNodes:true,includeEdges:false,includeLabels:T});
    if(C==="contain"){
      var D=false;if(x&&E){
        var B=g(w);

        if (B&&yi(B,h)) {
          o.push(w);
          D=true;
        }
      }

      if (!D&&bv(c,k)) {
        o.push(w);
      }
    }else if(C==="overlap"&&ao(c,k)){
      var P=w.boundingBox({includeNodes:true,includeEdges:true,includeLabels:false,includeMainLabels:false,includeSourceLabels:false,includeTargetLabels:false});
      var A=[{x:P.x1,y:P.y1},{x:P.x2,y:P.y1},{x:P.x2,y:P.y2},{x:P.x1,y:P.y2}];
      if (yi(A,h)) {
        o.push(w);
      } else
        {
          var R=g(w);

          if (R&&yi(R,h)) {
            o.push(w);
          }
        }
    }
  }else{
    var L=b;
    var I=L._private;
    var M=I.rscratch;
    var O=L.pstyle("box-selection").strValue;
    if (O==="none") {
      continue;
    }if(O==="contain"){if (M.startX!=null&&M.startY!=null&&!nt(c,M.startX,M.startY)||M.endX!=null&&M.endY!=null&&!nt(c,M.endX,M.endY)) {
      continue;
    }if (M.edgeType==="bezier"||M.edgeType==="multibezier"||M.edgeType==="self"||M.edgeType==="compound"||M.edgeType==="segments"||M.edgeType==="haystack") {
  var G=true;
  for (var V=I.rstyle.bezierPts||I.rstyle.linePts||I.rstyle.haystackPts, N=0; N<V.length; N++) {
    if(!Ko(c,V[N])){G=false;break}
  }

  if (G) {
    o.push(L);
  }
} else {
  if (M.edgeType==="straight") {
    o.push(L);
  }
}}else if(O==="overlap"){var F=false;if (M.startX!=null&&M.startY!=null&&M.endX!=null&&M.endY!=null&&(nt(c,M.startX,M.startY)||nt(c,M.endX,M.endY))) {
      o.push(L);
      F=true;
    } else if(!F&&M.edgeType==="haystack"){for (var U=I.rstyle.haystackPts,Q=0; Q<U.length; Q++) {
      if(Ko(c,U[Q])){
        o.push(L);
        F=true;
        break
      }
    }}if(!F){
  var K=I.rstyle.bezierPts||I.rstyle.linePts||I.rstyle.haystackPts;

  if ((!K||K.length<2)&&M.edgeType==="straight"&&M.startX!=null&&M.startY!=null&&M.endX!=null&&M.endY!=null) {
    (K = [{x:M.startX,y:M.startY},{x:M.endX,y:M.endY}]);
  }

  if (!K||K.length<2) {
    continue;
  }

  for(var j=0;j<K.length-1;j++){
    var re=K[j];
    var ne=K[j+1];
    for(var J=0;J<d.length;J++){
      var z=Je(d[J],2);
      var q=z[0];
      var H=z[1];
      if(p(re,ne,q,H)){
        o.push(L);
        F=true;
        break
      }
    }if (F) {
      break
    }
  }
}}
  }}return o
};var Bn={};Bn.calculateArrowAngles=function(r){
  var e=r._private.rscratch;
  var t=e.edgeType==="haystack";
  var a=e.edgeType==="bezier";
  var n=e.edgeType==="multibezier";
  var i=e.edgeType==="segments";
  var s=e.edgeType==="compound";
  var o=e.edgeType==="self";
  var l;
  var u;
  var v;
  var f;
  var c;
  var h;
  var p;
  var m;

  if (t) {
    v=e.haystackPts[0];
    f=e.haystackPts[1];
    c=e.haystackPts[2];
    h=e.haystackPts[3];
  } else {
    v=e.arrowStartX;
    f=e.arrowStartY;
    c=e.arrowEndX;
    h=e.arrowEndY;
  }

  p=e.midX;
  m=e.midY;

  if (i) {
    l=v-e.segpts[0];
    u=f-e.segpts[1];
  } else if (n||s||o||a) {
    var d=e.allpts;
    var y=sr(d[0],d[2],d[4],0.1/* .1 */);
    var g=sr(d[1],d[3],d[5],0.1/* .1 */);
    l=v-y;
    u=f-g;
  } else {
    l=v-p;
    u=f-m;
  }

  e.srcArrowAngle=Ya(l,u);
  var p=e.midX;
  var m=e.midY;

  if (t) {
    p=(v+c)/2;
    m=(f+h)/2;
  }

  l=c-v;
  u=h-f;

  if (i) {var d=e.allpts;if(d.length/2%2===0){
    var b=d.length/2;
    var w=b-2;
    l=d[b]-d[w];
    u=d[b+1]-d[w+1];
  }else if (e.isRound) {
    l=e.midVector[1];
    u=-e.midVector[0];
  } else {
    var b=d.length/2-1;
    var w=b-2;
    l=d[b]-d[w];
    u=d[b+1]-d[w+1];
  }} else if(n||s||o){
    var d=e.allpts;
    var E=e.ctrlpts;
    var C;
    var x;
    var T;
    var k;
    if(E.length/2%2===0){
      var D=d.length/2-1;
      var B=D+2;
      var P=B+2;
      C=sr(d[D],d[B],d[P],0);
      x=sr(d[D+1],d[B+1],d[P+1],0);
      T=sr(d[D],d[B],d[P],0.0001/* 1e-4 */);
      k=sr(d[D+1],d[B+1],d[P+1],0.0001/* 1e-4 */);
    }else{
      var B=d.length/2-1;
      var D=B-2;
      var P=B+2;
      C=sr(d[D],d[B],d[P],0.4999/* .4999 */);
      x=sr(d[D+1],d[B+1],d[P+1],0.4999/* .4999 */);
      T=sr(d[D],d[B],d[P],0.5/* .5 */);
      k=sr(d[D+1],d[B+1],d[P+1],0.5/* .5 */);
    }
    l=T-C;
    u=k-x;
  }

  e.midtgtArrowAngle=Ya(l,u);
  e.midDispX=l;
  e.midDispY=u;
  l*=-1;
  u*=-1;

  if (i) {var d=e.allpts;if(d.length/2%2!==0){if(!e.isRound){
    var b=d.length/2-1;
    var A=b+2;
    l=-(d[A]-d[b]);
    u=-(d[A+1]-d[b+1]);
  }}}

  e.midsrcArrowAngle=Ya(l,u);

  if (i) {
    l=c-e.segpts[e.segpts.length-2];
    u=h-e.segpts[e.segpts.length-1];
  } else if (n||s||o||a) {
    var d=e.allpts;
    var R=d.length;
    var y=sr(d[R-6],d[R-4],d[R-2],0.9/* .9 */);
    var g=sr(d[R-5],d[R-3],d[R-1],0.9/* .9 */);
    l=c-y;
    u=h-g;
  } else {
    l=c-p;
    u=h-m;
  }

  e.tgtArrowAngle=Ya(l,u)
};Bn.getArrowWidth=Bn.getArrowHeight=function(r,e){
  var t=this.arrowWidthCache=this.arrowWidthCache||{};
  var a=t[r+", "+e];
  return a||(a=Math.max(Math.pow(r*13.37,0.9/* .9 */),29)*e,t[r+", "+e]=a,a);
};
var Vs;
var qs;
var Vr={};
var Pr={};
var Pl;
var Al;
var St;
var gn;
var Ur;
var wt;
var Ct;
var zr;
var Vt;
var an;
var hf;
var gf;
var _s;
var Gs;
var Rl;

var Ml=function(e,t,a){
  a.x=t.x-e.x;
  a.y=t.y-e.y;
  a.len=Math.sqrt(a.x*a.x+a.y*a.y);
  a.nx=a.x/a.len;
  a.ny=a.y/a.len;
  a.ang=Math.atan2(a.ny,a.nx);
};

var Jp=function(e,t){
  t.x=e.x*-1;
  t.y=e.y*-1;
  t.nx=e.nx*-1;
  t.ny=e.ny*-1;
  t.ang=e.ang>0?-(Math.PI-e.ang):Math.PI+e.ang;
};

var jp=function(e,t,a,n,i){
  if (e!==Rl) {
    Ml(t,e,Vr);
  } else {
    Jp(Pr,Vr);
  }

  Ml(t,a,Pr);
  Pl=Vr.nx*Pr.ny-Vr.ny*Pr.nx;
  Al=Vr.nx*Pr.nx-Vr.ny*-Pr.ny;
  Ur=Math.asin(Math.max(-1,Math.min(1,Pl)));

  if (Math.abs(Ur)<0.000001/* 1e-6 */) {
    Vs=t.x;
    qs=t.y;
    Ct = 0;
    Vt = 0;
    return
  }

  St=1;
  gn=false;

  if (Al<0) {
    if (Ur<0) {
      Ur=Math.PI+Ur;
    } else {
      Ur=Math.PI-Ur;
      St=-1;
      gn=true;
    }
  } else if (Ur>0) {
    St=-1;
    gn=true;
  }

  if (t.radius!==void 0) {
    Vt=t.radius;
  } else {
    Vt=n;
  }

  wt=Ur/2;
  an=Math.min(Vr.len/2,Pr.len/2);

  if (i) {
    zr=Math.abs(Math.cos(wt)*Vt/Math.sin(wt));
    zr>an?(zr=an,Ct=Math.abs(zr*Math.sin(wt)/Math.cos(wt))):Ct=Vt;
  } else {
    zr=Math.min(an,Vt);
    Ct=Math.abs(zr*Math.sin(wt)/Math.cos(wt));
  }

  _s=t.x+Pr.nx*zr;
  Gs=t.y+Pr.ny*zr;
  Vs=_s-Pr.ny*Ct*St;
  qs=Gs+Pr.nx*Ct*St;
  hf=t.x+Vr.nx*zr;
  gf=t.y+Vr.ny*zr;
  Rl=t;
};

function pf(r,e){
  if (e.radius===0) {
    r.lineTo(e.cx,e.cy);
  } else {
    r.arc(e.cx,e.cy,e.radius,e.startAngle,e.endAngle,e.counterClockwise);
  }
}function po(r, e, t, a, n = true) {
  return a===0||e.radius===0?{cx:e.x,cy:e.y,radius:0,startX:e.x,startY:e.y,stopX:e.x,stopY:e.y,startAngle:void 0,endAngle:void 0,counterClockwise:void 0}:(jp(r,e,t,a,n),{cx:Vs,cy:qs,radius:Ct,startX:hf,startY:gf,stopX:_s,stopY:Gs,startAngle:Vr.ang+Math.PI/2*St,endAngle:Pr.ang-Math.PI/2*St,counterClockwise:gn})
}
var Ma=0.01/* .01 */;
var ey=Math.sqrt(2*Ma);
var yr={};
yr.findMidptPtsEtc=function(r,e){
  var t=e.posPts;
  var a=e.intersectionPts;
  var n=e.vectorNormInverse;
  var i;
  var s=r.pstyle("source-endpoint");
  var o=r.pstyle("target-endpoint");
  var l=s.units!=null&&o.units!=null;

  var u=function(E,C,x,T){
    var k=T-C;
    var D=x-E;
    var B=Math.sqrt(D*D+k*k);
    return{x:-k/B,y:D/B}
  };

  var v=r.pstyle("edge-distances").value;
  switch(v){case "node-position":
    {
      i=t;break;
    }case "intersection":
    {
      i=a;break;
    }case"endpoints":{if (l) {
    var f=this.manualEndptToPx(r.source()[0],s);
    var c=Je(f,2);
    var h=c[0];
    var d=c[1];
    var y=this.manualEndptToPx(r.target()[0],o);
    var g=Je(y,2);
    var p=g[0];
    var m=g[1];
    var b={x1:h,y1:d,x2:p,y2:m};
    n=u(h,d,p,m);
    i=b;
  } else {
    Ve(`Edge ${r.id()} has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).`);
    i=a;
  }break}}return{midptPts:i,vectorNormInverse:n}
};yr.findHaystackPoints=function(r){for(var e=0;e<r.length;e++){
  var t=r[e];
  var a=t._private;
  var n=a.rscratch;
  if(!n.haystack){
    var i=Math.random()*2*Math.PI;
    n.source={x:Math.cos(i),y:Math.sin(i)};
    i=Math.random()*2*Math.PI;
    n.target={x:Math.cos(i),y:Math.sin(i)};
  }
  var s=a.source;
  var o=a.target;
  var l=s.position();
  var u=o.position();
  var v=s.width();
  var f=o.width();
  var c=s.height();
  var h=o.height();
  var d=t.pstyle("haystack-radius").value;
  var y=d/2;
  n.haystackPts=n.allpts=[n.source.x*v*y+l.x,n.source.y*c*y+l.y,n.target.x*f*y+u.x,n.target.y*h*y+u.y];
  n.midX=(n.allpts[0]+n.allpts[2])/2;
  n.midY=(n.allpts[1]+n.allpts[3])/2;
  n.edgeType="haystack";
  n.haystack=true;
  this.storeEdgeProjections(t);
  this.calculateArrowAngles(t);
  this.recalculateEdgeLabelProjections(t);
  this.calculateLabelAngles(t);
}};yr.findSegmentsPoints=function(r,e){
  var t=r._private.rscratch;
  var a=r.pstyle("segment-weights");
  var n=r.pstyle("segment-distances");
  var i=r.pstyle("segment-radii");
  var s=r.pstyle("radius-type");
  var o=Math.min(a.pfValue.length,n.pfValue.length);
  var l=i.pfValue[i.pfValue.length-1];
  var u=s.pfValue[s.pfValue.length-1];
  t.edgeType="segments";
  t.segpts=[];
  t.radii=[];
  t.isArcRadius=[];
  for(var v=0;v<o;v++){
    var f=a.pfValue[v];
    var c=n.pfValue[v];
    var h=1-f;
    var d=f;
    var y=this.findMidptPtsEtc(r,e);
    var g=y.midptPts;
    var p=y.vectorNormInverse;
    var m={x:g.x1*h+g.x2*d,y:g.y1*h+g.y2*d};
    t.segpts.push(m.x+p.x*c,m.y+p.y*c);
    t.radii.push(i.pfValue[v]!==void 0?i.pfValue[v]:l);
    t.isArcRadius.push((s.pfValue[v]!==void 0?s.pfValue[v]:u)==="arc-radius");
  }
};yr.findLoopPoints=function(r,e,t,a){
  var n=r._private.rscratch;
  var i=e.dirCounts;
  var s=e.srcPos;
  var o=r.pstyle("control-point-distances");
  var l=o?o.pfValue[0]:void 0;
  var u=r.pstyle("loop-direction").pfValue;
  var v=r.pstyle("loop-sweep").pfValue;
  var f=r.pstyle("control-point-step-size").pfValue;
  n.edgeType="self";
  var c=t;
  var h=f;

  if (a) {
    c=0;
    h=l;
  }

  var d=u-Math.PI/2;
  var y=d-v/2;
  var g=d+v/2;
  var p=u+"_"+v;
  c=i[p]===void 0?i[p]=0:++i[p];
  n.ctrlpts=[s.x+Math.cos(y)*1.4*h*(c/3+1),s.y+Math.sin(y)*1.4*h*(c/3+1),s.x+Math.cos(g)*1.4*h*(c/3+1),s.y+Math.sin(g)*1.4*h*(c/3+1)];
};yr.findCompoundLoopPoints=function(r,e,t,a){
  var n=r._private.rscratch;n.edgeType="compound";
  var i=e.srcPos;
  var s=e.tgtPos;
  var o=e.srcW;
  var l=e.srcH;
  var u=e.tgtW;
  var v=e.tgtH;
  var f=r.pstyle("control-point-step-size").pfValue;
  var c=r.pstyle("control-point-distances");
  var h=c?c.pfValue[0]:void 0;
  var d=t;
  var y=f;

  if (a) {
    d=0;
    y=h;
  }

  var g=50;
  var p={x:i.x-o/2,y:i.y-l/2};
  var m={x:s.x-u/2,y:s.y-v/2};
  var b={x:Math.min(p.x,m.x),y:Math.min(p.y,m.y)};
  var w=0.5/* .5 */;
  var E=Math.max(w,Math.log(o*Ma));
  var C=Math.max(w,Math.log(u*Ma));
  n.ctrlpts=[b.x,b.y-(1+Math.pow(g,1.12)/100)*y*(d/3+1)*E,b.x-(1+Math.pow(g,1.12)/100)*y*(d/3+1)*C,b.y]
};yr.findStraightEdgePoints=function(r){r._private.rscratch.edgeType="straight"};yr.findBezierPoints=function(r,e,t,a,n){
  var i=r._private.rscratch;
  var s=r.pstyle("control-point-step-size").pfValue;
  var o=r.pstyle("control-point-distances");
  var l=r.pstyle("control-point-weights");
  var u=o&&l?Math.min(o.value.length,l.value.length):1;
  var v=o?o.pfValue[0]:void 0;
  var f=l.value[0];
  var c=a;
  i.edgeType=c?"multibezier":"bezier";
  i.ctrlpts=[];
  for(var h=0;h<u;h++){
    var d=(0.5/* .5 */-e.eles.length/2+t)*s*(n?-1:1);
    var y=void 0;
    var g=to(d);

    if (c) {
      v=o?o.pfValue[h]:s;
      f=l.value[h];
    }

    if (a) {
      y=v;
    } else {
      y=v!==void 0?g*v:void 0;
    }

    var p=y!==void 0?y:d;
    var m=1-f;
    var b=f;
    var w=this.findMidptPtsEtc(r,e);
    var E=w.midptPts;
    var C=w.vectorNormInverse;
    var x={x:E.x1*m+E.x2*b,y:E.y1*m+E.y2*b};
    i.ctrlpts.push(x.x+C.x*p,x.y+C.y*p)
  }
};yr.findTaxiPoints=function(r,e){
  var t=r._private.rscratch;t.edgeType="segments";
  var a="vertical";
  var n="horizontal";
  var i="leftward";
  var s="rightward";
  var o="downward";
  var l="upward";
  var u="auto";
  var v=e.posPts;
  var f=e.srcW;
  var c=e.srcH;
  var h=e.tgtW;
  var d=e.tgtH;
  var y=r.pstyle("edge-distances").value;
  var g=y!=="node-position";
  var p=r.pstyle("taxi-direction").value;
  var m=p;
  var b=r.pstyle("taxi-turn");
  var w=b.units==="%";
  var E=b.pfValue;
  var C=E<0;
  var x=r.pstyle("taxi-turn-min-distance").pfValue;
  var T=g?(f+h)/2:0;
  var k=g?(c+d)/2:0;
  var D=v.x2-v.x1;
  var B=v.y2-v.y1;
  var P=function(S,_){return S>0?Math.max(S-_,0):Math.min(S+_,0)};
  var A=P(D,T);
  var R=P(B,k);
  var L=false;

  switch (m) {
  case u:
    p=Math.abs(A)>Math.abs(R)?n:a;
    break;
  case l:
  case o:
    p=a;
    L=true;
    break;
  case i:
  case s:
    p=n;
    L=true;
    break;
  }

  var I=p===a;
  var M=I?R:A;
  var O=I?B:D;
  var V=to(O);
  var G=false;

  if (!(L&&(w||C))&&(m===o&&O<0||m===l&&O>0||m===i&&O>0||m===s&&O<0)) {
    V*=-1;
    M=V*Math.abs(M);
    G=true;
  }

  var N;if(w){var F=E<0?1+E:E;N=F*M}else{var U=E<0?M:0;N=U+E*V}
  var Q=function(S){return Math.abs(S)<x||Math.abs(S)>=Math.abs(M)};
  var K=Q(N);
  var j=Q(Math.abs(M)-Math.abs(N));
  var re=K||j;
  if (re&&!G) {
    if(I){
      var ne=Math.abs(O)<=c/2;
      var J=Math.abs(D)<=h/2;
      if(ne){
        var z=(v.x1+v.x2)/2;
        var q=v.y1;
        var H=v.y2;
        t.segpts=[z,q,z,H]
      }else if (J) {
        var Y=(v.y1+v.y2)/2;
        var te=v.x1;
        var ce=v.x2;
        t.segpts=[te,Y,ce,Y]
      } else {
        t.segpts=[v.x1,v.y2]
      }
    }else{
      var Ae=Math.abs(O)<=f/2;
      var Ce=Math.abs(B)<=d/2;
      if(Ae){
        var we=(v.y1+v.y2)/2;
        var ye=v.x1;
        var ie=v.x2;
        t.segpts=[ye,we,ie,we]
      }else if (Ce) {
        var de=(v.x1+v.x2)/2;
        var he=v.y1;
        var Ee=v.y2;
        t.segpts=[de,he,de,Ee]
      } else {
        t.segpts=[v.x2,v.y1]
      }
    }
  } else if(I){
    var pe=v.y1+N+(g?c/2*V:0);
    var Se=v.x1;
    var Re=v.x2;
    t.segpts=[Se,pe,Re,pe]
  }else{
    var Oe=v.x1+N+(g?f/2*V:0);
    var Ne=v.y1;
    var ze=v.y2;
    t.segpts=[Oe,Ne,Oe,ze]
  }if(t.isRound){
      var xe=r.pstyle("taxi-radius").value;
      var ue=r.pstyle("radius-type").value[0]==="arc-radius";
      t.radii=new Array(t.segpts.length/2).fill(xe);
      t.isArcRadius=new Array(t.segpts.length/2).fill(ue);
    }
};yr.tryToCorrectInvalidPoints=function(r,e){var t=r._private.rscratch;if(t.edgeType==="bezier"){
  var a=e.srcPos;
  var n=e.tgtPos;
  var i=e.srcW;
  var s=e.srcH;
  var o=e.tgtW;
  var l=e.tgtH;
  var u=e.srcShape;
  var v=e.tgtShape;
  var f=e.srcCornerRadius;
  var c=e.tgtCornerRadius;
  var h=e.srcRs;
  var d=e.tgtRs;
  var y=!ae(t.startX)||!ae(t.startY);
  var g=!ae(t.arrowStartX)||!ae(t.arrowStartY);
  var p=!ae(t.endX)||!ae(t.endY);
  var m=!ae(t.arrowEndX)||!ae(t.arrowEndY);
  var b=3;
  var w=this.getArrowWidth(r.pstyle("width").pfValue,r.pstyle("arrow-scale").value)*this.arrowShapeWidth;
  var E=b*w;
  var C=Bt({x:t.ctrlpts[0],y:t.ctrlpts[1]},{x:t.startX,y:t.startY});
  var x=C<E;
  var T=Bt({x:t.ctrlpts[0],y:t.ctrlpts[1]},{x:t.endX,y:t.endY});
  var k=T<E;
  var D=false;
  if(y||g||x){
    D=true;
    var B={x:t.ctrlpts[0]-a.x,y:t.ctrlpts[1]-a.y};
    var P=Math.sqrt(B.x*B.x+B.y*B.y);
    var A={x:B.x/P,y:B.y/P};
    var R=Math.max(i,s);
    var L={x:t.ctrlpts[0]+A.x*2*R,y:t.ctrlpts[1]+A.y*2*R};
    var I=u.intersectLine(a.x,a.y,i,s,L.x,L.y,0,f,h);

    if (x) {
      t.ctrlpts[0]=t.ctrlpts[0]+A.x*(E-C);
      t.ctrlpts[1]=t.ctrlpts[1]+A.y*(E-C);
    } else {
      t.ctrlpts[0]=I[0]+A.x*E;
      t.ctrlpts[1]=I[1]+A.y*E;
    }
  }if(p||m||k){
    D=true;
    var M={x:t.ctrlpts[0]-n.x,y:t.ctrlpts[1]-n.y};
    var O=Math.sqrt(M.x*M.x+M.y*M.y);
    var V={x:M.x/O,y:M.y/O};
    var G=Math.max(i,s);
    var N={x:t.ctrlpts[0]+V.x*2*G,y:t.ctrlpts[1]+V.y*2*G};
    var F=v.intersectLine(n.x,n.y,o,l,N.x,N.y,0,c,d);

    if (k) {
      t.ctrlpts[0]=t.ctrlpts[0]+V.x*(E-T);
      t.ctrlpts[1]=t.ctrlpts[1]+V.y*(E-T);
    } else {
      t.ctrlpts[0]=F[0]+V.x*E;
      t.ctrlpts[1]=F[1]+V.y*E;
    }
  }

  if (D) {
    this.findEndpoints(r);
  }
}};yr.storeAllpts=function(r){var e=r._private.rscratch;if(e.edgeType==="multibezier"||e.edgeType==="bezier"||e.edgeType==="self"||e.edgeType==="compound"){
  e.allpts=[];
  e.allpts.push(e.startX,e.startY);
  for (var t=0; t+1<e.ctrlpts.length; t+=2) {
    e.allpts.push(e.ctrlpts[t],e.ctrlpts[t+1]);

    if (t+3<e.ctrlpts.length) {
      e.allpts.push((e.ctrlpts[t]+e.ctrlpts[t+2])/2,(e.ctrlpts[t+1]+e.ctrlpts[t+3])/2);
    }
  }e.allpts.push(e.endX,e.endY);
  var a;
  var n;

  if (e.ctrlpts.length/2%2===0) {
    a=e.allpts.length/2-1;
    e.midX=e.allpts[a];
    e.midY=e.allpts[a+1];
  } else {
    a=e.allpts.length/2-3;
    n=0.5/* .5 */;
    e.midX=sr(e.allpts[a],e.allpts[a+2],e.allpts[a+4],n);
    e.midY=sr(e.allpts[a+1],e.allpts[a+3],e.allpts[a+5],n);
  }
}else if (e.edgeType==="straight") {
  e.allpts=[e.startX,e.startY,e.endX,e.endY];
  e.midX=(e.startX+e.endX+e.arrowStartX+e.arrowEndX)/4;
  e.midY=(e.startY+e.endY+e.arrowStartY+e.arrowEndY)/4;
} else if(e.edgeType==="segments"){
  e.allpts=[];
  e.allpts.push(e.startX,e.startY);
  e.allpts.push(...e.segpts);
  e.allpts.push(e.endX,e.endY);

  if (e.isRound) {e.roundCorners=[];for(var i=2;i+3<e.allpts.length;i+=2){
    var s=e.radii[i/2-1];
    var o=e.isArcRadius[i/2-1];
    e.roundCorners.push(po({x:e.allpts[i-2],y:e.allpts[i-1]},{x:e.allpts[i],y:e.allpts[i+1],radius:s},{x:e.allpts[i+2],y:e.allpts[i+3]},s,o))
  }}

  if(e.segpts.length%4===0){
    var l=e.segpts.length/2;
    var u=l-2;
    e.midX=(e.segpts[u]+e.segpts[l])/2;
    e.midY=(e.segpts[u+1]+e.segpts[l+1])/2;
  }else{var v=e.segpts.length/2-1;if (!e.isRound) {
    e.midX=e.segpts[v];
    e.midY=e.segpts[v+1];
  } else {
    var f={x:e.segpts[v],y:e.segpts[v+1]};
    var c=e.roundCorners[v/2];
    if(c.radius===0){
      var h={x:e.segpts[v+2],y:e.segpts[v+3]};
      e.midX=f.x;
      e.midY=f.y;
      e.midVector=[f.y-h.y,h.x-f.x];
    }else{
      var d=[f.x-c.cx,f.y-c.cy];
      var y=c.radius/Math.sqrt(Math.pow(d[0],2)+Math.pow(d[1],2));
      d=d.map(function(g){return g*y});
      e.midX=c.cx+d[0];
      e.midY=c.cy+d[1];
      e.midVector=d;
    }
  }}
}};yr.checkForInvalidEdgeWarning=function(r){
  var e=r[0]._private.rscratch;

  if (e.nodesOverlap||ae(e.startX)&&ae(e.startY)&&ae(e.endX)&&ae(e.endY)) {
    e.loggedErr=false;
  } else if (!e.loggedErr) {
    e.loggedErr=true;
    Ve("Edge `"+r.id()+"` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap.");
  }
};yr.findEdgeControlPoints=function(r){var e=this;if(!(!r||r.length===0)){
  var t=this;
  var a=t.cy;
  var n=a.hasCompoundNodes();
  var i=new Xr;
  var s=function(k,D){return[].concat(mn(k),[D?1:0]).join("-")};
  var o=[];
  var l=[];
  for(var u=0;u<r.length;u++){
    var v=r[u];
    var f=v._private;
    var c=v.pstyle("curve-style").value;
    if(!(v.removed()||!v.takesUpSpace())){
      if(c==="haystack"){l.push(v);continue}
      var h=c==="unbundled-bezier"||at(c,"segments")||c==="straight"||c==="straight-triangle"||at(c,"taxi");
      var d=c==="unbundled-bezier"||c==="bezier";
      var y=f.source;
      var g=f.target;
      var p=y.poolIndex();
      var m=g.poolIndex();
      var b=[p,m].sort();
      var w=s(b,h);
      var E=i.get(w);

      if (E==null) {
        E={eles:[]};
        o.push({pairId:b,edgeIsUnbundled:h});
        i.set(w,E);
      }

      E.eles.push(v);

      if (h) {
        (E.hasUnbundled = true);
      }

      if (d) {
        (E.hasBezier = true);
      }
    }
  }

  var C=function(){
    var k=o[x];
    var D=k.pairId;
    var B=k.edgeIsUnbundled;
    var P=s(D,B);
    var A=i.get(P);
    var R;
    if(!A.hasUnbundled){
      var L=A.eles[0].parallelEdges().filter(function(ue){return ue.isBundledBezier()});
      eo(A.eles);
      L.forEach(function(ue){return A.eles.push(ue)});
      A.eles.sort(function(ue,X){return ue.poolIndex()-X.poolIndex()});
    }
    var I=A.eles[0];
    var M=I.source();
    var O=I.target();
    if(M.poolIndex()>O.poolIndex()){
      var V=M;
      M=O;
      O=V;
    }
    var G=A.srcPos=M.position();
    var N=A.tgtPos=O.position();
    var F=A.srcW=M.outerWidth();
    var U=A.srcH=M.outerHeight();
    var Q=A.tgtW=O.outerWidth();
    var K=A.tgtH=O.outerHeight();
    var j=A.srcShape=t.nodeShapes[e.getNodeShape(M)];
    var re=A.tgtShape=t.nodeShapes[e.getNodeShape(O)];
    var ne=A.srcCornerRadius=M.pstyle("corner-radius").value==="auto"?"auto":M.pstyle("corner-radius").pfValue;
    var J=A.tgtCornerRadius=O.pstyle("corner-radius").value==="auto"?"auto":O.pstyle("corner-radius").pfValue;
    var z=A.tgtRs=O._private.rscratch;
    var q=A.srcRs=M._private.rscratch;
    A.dirCounts={north:0,west:0,south:0,east:0,northwest:0,southwest:0,northeast:0,southeast:0};for(var H=0;H<A.eles.length;H++){
    var Y=A.eles[H];
    var te=Y[0]._private.rscratch;
    var ce=Y.pstyle("curve-style").value;
    var Ae=ce==="unbundled-bezier"||at(ce,"segments")||at(ce,"taxi");
    var Ce=!M.same(Y.source());
    if(!A.calculatedIntersection&&M!==O&&(A.hasBezier||A.hasUnbundled)){
      A.calculatedIntersection=true;
      var we=j.intersectLine(G.x,G.y,F,U,N.x,N.y,0,ne,q);
      var ye=A.srcIntn=we;
      var ie=re.intersectLine(N.x,N.y,Q,K,G.x,G.y,0,J,z);
      var de=A.tgtIntn=ie;
      var he=A.intersectionPts={x1:we[0],x2:ie[0],y1:we[1],y2:ie[1]};
      var Ee=A.posPts={x1:G.x,x2:N.x,y1:G.y,y2:N.y};
      var pe=ie[1]-we[1];
      var Se=ie[0]-we[0];
      var Re=Math.sqrt(Se*Se+pe*pe);

      if (!ae(Re) || Re < ey) {
        (Re = Math.sqrt(Math.max(Se*Se,Ma)+Math.max(pe*pe,Ma)));
      }

      var Oe=A.vector={x:Se,y:pe};
      var Ne=A.vectorNorm={x:Oe.x/Re,y:Oe.y/Re};
      var ze={x:-Ne.y,y:Ne.x};
      A.nodesOverlap=!ae(Re)||re.checkPoint(we[0],we[1],0,Q,K,N.x,N.y,J,z)||j.checkPoint(ie[0],ie[1],0,F,U,G.x,G.y,ne,q);
      A.vectorNormInverse=ze;
      R={nodesOverlap:A.nodesOverlap,dirCounts:A.dirCounts,calculatedIntersection:true,hasBezier:A.hasBezier,hasUnbundled:A.hasUnbundled,eles:A.eles,srcPos:N,srcRs:z,tgtPos:G,tgtRs:q,srcW:Q,srcH:K,tgtW:F,tgtH:U,srcIntn:de,tgtIntn:ye,srcShape:re,tgtShape:j,posPts:{x1:Ee.x2,y1:Ee.y2,x2:Ee.x1,y2:Ee.y1},intersectionPts:{x1:he.x2,y1:he.y2,x2:he.x1,y2:he.y1},vector:{x:-Oe.x,y:-Oe.y},vectorNorm:{x:-Ne.x,y:-Ne.y},vectorNormInverse:{x:-ze.x,y:-ze.y}};
    }var xe=Ce?R:A;
    te.nodesOverlap=xe.nodesOverlap;
    te.srcIntn=xe.srcIntn;
    te.tgtIntn=xe.tgtIntn;
    te.isRound=ce.startsWith("round");

    if (n&&(M.isParent()||M.isChild()||O.isParent()||O.isChild())&&(M.parents().anySame(O)||O.parents().anySame(M)||M.same(O)&&M.isParent())) {
      e.findCompoundLoopPoints(Y,xe,H,Ae);
    } else if (M===O) {
      e.findLoopPoints(Y,xe,H,Ae);
    } else if (ce.endsWith("segments")) {
      e.findSegmentsPoints(Y,xe);
    } else if (ce.endsWith("taxi")) {
      e.findTaxiPoints(Y,xe);
    } else if (ce==="straight"||!Ae&&A.eles.length%2===1&&H===Math.floor(A.eles.length/2)) {
      e.findStraightEdgePoints(Y);
    } else {
      e.findBezierPoints(Y,xe,H,Ae,Ce);
    }

    e.findEndpoints(Y);
    e.tryToCorrectInvalidPoints(Y,xe);
    e.checkForInvalidEdgeWarning(Y);
    e.storeAllpts(Y);
    e.storeEdgeProjections(Y);
    e.calculateArrowAngles(Y);
    e.recalculateEdgeLabelProjections(Y);
    e.calculateLabelAngles(Y);
  }
  };

  for (var x=0; x<o.length; x++) {
    C();
  }this.findHaystackPoints(l)
}};function yf(r){var e=[];if(r!=null){for(var t=0;t<r.length;t+=2){
  var a=r[t];
  var n=r[t+1];
  e.push({x:a,y:n})
}return e}}yr.getSegmentPoints=function(r){var e=r[0]._private.rscratch;this.recalculateRenderedStyle(r);var t=e.edgeType;if (t==="segments") {
  return yf(e.segpts)
}};yr.getControlPoints=function(r){var e=r[0]._private.rscratch;this.recalculateRenderedStyle(r);var t=e.edgeType;if (t==="bezier"||t==="multibezier"||t==="self"||t==="compound") {
  return yf(e.ctrlpts)
}};yr.getEdgeMidpoint=function(r){
  var e=r[0]._private.rscratch;
  this.recalculateRenderedStyle(r);
  return {x:e.midX,y:e.midY};
};var Ga={};Ga.manualEndptToPx=function(r,e){
  var t=this;
  var a=r.position();
  var n=r.outerWidth();
  var i=r.outerHeight();
  var s=r._private.rscratch;
  if(e.value.length===2){
    var o=[e.pfValue[0],e.pfValue[1]];

    if (e.units[0]==="%") {
      (o[0] = o[0]*n);
    }

    if (e.units[1]==="%") {
      (o[1] = o[1]*i);
    }

    o[0]+=a.x;
    o[1]+=a.y;
    return o;
  }else{
    var l=e.pfValue[0];l=-Math.PI/2+l;
    var u=2*Math.max(n,i);
    var v=[a.x+Math.cos(l)*u,a.y+Math.sin(l)*u];
    return t.nodeShapes[this.getNodeShape(r)].intersectLine(a.x,a.y,n,i,v[0],v[1],0,r.pstyle("corner-radius").value==="auto"?"auto":r.pstyle("corner-radius").pfValue,s)
  }
};Ga.findEndpoints=function(r){
  var i=this;
  var s;
  var o=r.source()[0];
  var l=r.target()[0];
  var u=o.position();
  var v=l.position();
  var f=r.pstyle("target-arrow-shape").value;
  var c=r.pstyle("source-arrow-shape").value;
  var h=r.pstyle("target-distance-from-node").pfValue;
  var d=r.pstyle("source-distance-from-node").pfValue;
  var y=o._private.rscratch;
  var g=l._private.rscratch;
  var p=r.pstyle("curve-style").value;
  var m=r._private.rscratch;
  var b=m.edgeType;
  var w=at(p,"taxi");
  var E=b==="self"||b==="compound";
  var C=b==="bezier"||b==="multibezier"||E;
  var x=b!=="bezier";
  var T=b==="straight"||b==="segments";
  var k=b==="segments";
  var D=C||x||T;
  var B=E||w;
  var P=r.pstyle("source-endpoint");
  var A=B?"outside-to-node":P.value;
  var R=o.pstyle("corner-radius").value==="auto"?"auto":o.pstyle("corner-radius").pfValue;
  var L=r.pstyle("target-endpoint");
  var I=B?"outside-to-node":L.value;
  var M=l.pstyle("corner-radius").value==="auto"?"auto":l.pstyle("corner-radius").pfValue;
  m.srcManEndpt=P;
  m.tgtManEndpt=L;
  var O;
  var V;
  var G;
  var N;
  var F=((L==null||(t=L.pfValue)===null||t===void 0?void 0:t.length)===2 ? L.pfValue : null) ?? [0,0];
  var U=((P==null||(n=P.pfValue)===null||n===void 0?void 0:n.length)===2 ? P.pfValue : null) ?? [0,0];
  if(C){
    var Q=[m.ctrlpts[0],m.ctrlpts[1]];
    var K=x?[m.ctrlpts[m.ctrlpts.length-2],m.ctrlpts[m.ctrlpts.length-1]]:Q;
    O=K;
    V=Q;
  }else if(T){
    var j=k?m.segpts.slice(0,2):[v.x+F[0],v.y+F[1]];
    var re=k?m.segpts.slice(m.segpts.length-2):[u.x+U[0],u.y+U[1]];
    O=re;
    V=j;
  }if (I==="inside-to-node") {
      s=[v.x,v.y];
    } else if (L.units) {
      s=this.manualEndptToPx(l,L);
    } else if (I==="outside-to-line") {
      s=m.tgtIntn;
    } else {
    if (I==="outside-to-node"||I==="outside-to-node-or-label") {
      G=O;
    } else if ((I==="outside-to-line" || I==="outside-to-line-or-label")) {
      (G = [u.x,u.y]);
    }

    s=i.nodeShapes[this.getNodeShape(l)].intersectLine(v.x,v.y,l.outerWidth(),l.outerHeight(),G[0],G[1],0,M,g);

    if (I==="outside-to-node-or-label"||I==="outside-to-line-or-label") {
      var ne=l._private.rscratch;
      var J=ne.labelWidth;
      var z=ne.labelHeight;
      var q=ne.labelX;
      var H=ne.labelY;
      var Y=J/2;
      var te=z/2;
      var ce=l.pstyle("text-valign").value;

      if (ce==="top") {
        H-=te;
      } else if (ce==="bottom") {
        (H += te);
      }

      var Ae=l.pstyle("text-halign").value;

      if (Ae==="left") {
        q-=Y;
      } else if (Ae==="right") {
        (q += Y);
      }

      var Ce=Da(G[0],G[1],[q-Y,H-te,q+Y,H-te,q+Y,H+te,q-Y,H+te],v.x,v.y);if(Ce.length>0){
        var we=u;
        var ye=Et(we,Wt(s));
        var ie=Et(we,Wt(Ce));
        var de=ye;

        if (ie<ye) {
          s=Ce;
          de=ie;
        }

        if (Ce.length>2)
          {
            var he=Et(we,{x:Ce[2],y:Ce[3]});

            if (he<de) {
              (s = [Ce[2],Ce[3]]);
            }
          }
      }
    }
  }
  var Ee=Za(s,O,i.arrowShapes[f].spacing(r)+h);
  var pe=Za(s,O,i.arrowShapes[f].gap(r)+h);
  m.endX=pe[0];
  m.endY=pe[1];
  m.arrowEndX=Ee[0];
  m.arrowEndY=Ee[1];

  if (A==="inside-to-node") {
    s=[u.x,u.y];
  } else if (P.units) {
    s=this.manualEndptToPx(o,P);
  } else if (A==="outside-to-line") {
    s=m.srcIntn;
  } else {
    if (A==="outside-to-node"||A==="outside-to-node-or-label") {
      N=V;
    } else if ((A==="outside-to-line" || A==="outside-to-line-or-label")) {
      (N = [v.x,v.y]);
    }

    s=i.nodeShapes[this.getNodeShape(o)].intersectLine(u.x,u.y,o.outerWidth(),o.outerHeight(),N[0],N[1],0,R,y);

    if (A==="outside-to-node-or-label"||A==="outside-to-line-or-label") {
      var Se=o._private.rscratch;
      var Re=Se.labelWidth;
      var Oe=Se.labelHeight;
      var Ne=Se.labelX;
      var ze=Se.labelY;
      var xe=Re/2;
      var ue=Oe/2;
      var X=o.pstyle("text-valign").value;

      if (X==="top") {
        ze-=ue;
      } else if (X==="bottom") {
        (ze += ue);
      }

      var S=o.pstyle("text-halign").value;

      if (S==="left") {
        Ne-=xe;
      } else if (S==="right") {
        (Ne += xe);
      }

      var _=Da(N[0],N[1],[Ne-xe,ze-ue,Ne+xe,ze-ue,Ne+xe,ze+ue,Ne-xe,ze+ue],u.x,u.y);if(_.length>0){
        var W=v;
        var $=Et(W,Wt(s));
        var Z=Et(W,Wt(_));
        var oe=$;

        if (Z<$) {
          s=[_[0],_[1]];
          oe=Z;
        }

        if (_.length>2)
          {
            var ee=Et(W,{x:_[2],y:_[3]});

            if (ee<oe) {
              (s = [_[2],_[3]]);
            }
          }
      }
    }
  }

  var ve=Za(s,V,i.arrowShapes[c].spacing(r)+d);
  var le=Za(s,V,i.arrowShapes[c].gap(r)+d);
  m.startX=le[0];
  m.startY=le[1];
  m.arrowStartX=ve[0];
  m.arrowStartY=ve[1];

  if (D) {
    if (!ae(m.startX)||!ae(m.startY)||!ae(m.endX)||!ae(m.endY)) {
      m.badLine=true;
    } else {
      m.badLine=false;
    }
  }
};Ga.getSourceEndpoint=function(r){
  var e=r[0]._private.rscratch;
  this.recalculateRenderedStyle(r);

  switch (e.edgeType) {
  case "haystack":
    {
      return{x:e.haystackPts[0],y:e.haystackPts[1]};
    }
  default:
    {
      return{x:e.arrowStartX,y:e.arrowStartY}
    }
  }
};Ga.getTargetEndpoint=function(r){
  var e=r[0]._private.rscratch;
  this.recalculateRenderedStyle(r);

  switch (e.edgeType) {
  case "haystack":
    {
      return{x:e.haystackPts[2],y:e.haystackPts[3]};
    }
  default:
    {
      return{x:e.arrowEndX,y:e.arrowEndY}
    }
  }
};var yo={};function ry(r,e,t){
  var a=function(u,v,f,c){return sr(u,v,f,c)};
  var n=e._private;
  var i=n.rstyle.bezierPts;
  for(var s=0;s<r.bezierProjPcts.length;s++){var o=r.bezierProjPcts[s];i.push({x:a(t[0],t[2],t[4],o),y:a(t[1],t[3],t[5],o)})}
}yo.storeEdgeProjections=function(r){
  var e=r._private;
  var t=e.rscratch;
  var a=t.edgeType;
  e.rstyle.bezierPts=null;
  e.rstyle.linePts=null;
  e.rstyle.haystackPts=null;

  if (a==="multibezier"||a==="bezier"||a==="self"||a==="compound") {e.rstyle.bezierPts=[];for (var n=0; n+5<t.allpts.length; n+=4) {
    ry(this,r,t.allpts.slice(n,n+6))
  }} else if (a==="segments") {
    var i=e.rstyle.linePts=[];
    for (var n=0; n+1<t.allpts.length; n+=2) {
      i.push({x:t.allpts[n],y:t.allpts[n+1]});
    }
  } else
    if(a==="haystack"){var s=t.haystackPts;e.rstyle.haystackPts=[{x:s[0],y:s[1]},{x:s[2],y:s[3]}]}

  e.rstyle.arrowWidth=this.getArrowWidth(r.pstyle("width").pfValue,r.pstyle("arrow-scale").value)*this.arrowShapeWidth
};yo.recalculateEdgeProjections=function(r){this.findEdgeControlPoints(r)};var Gr={};Gr.recalculateNodeLabelProjection=function(r){var e=r.pstyle("label").strValue;if(!ut(e)){
  var t;
  var a;
  var n=r._private;
  var i=r.width();
  var s=r.height();
  var o=r.padding();
  var l=r.position();
  var u=r.pstyle("text-halign").strValue;
  var v=r.pstyle("text-valign").strValue;
  var f=n.rscratch;
  var c=n.rstyle;
  switch(u){case "left":
    {
      t=l.x-i/2-o;break;
    }case "right":
    {
      t=l.x+i/2+o;break;
    }default:
    {
      t=l.x
    }}switch(v){case "top":
    {
      a=l.y-s/2-o;break;
    }case "bottom":
    {
      a=l.y+s/2+o;break;
    }default:
    {
      a=l.y
    }}
  f.labelX=t;
  f.labelY=a;
  c.labelX=t;
  c.labelY=a;
  this.calculateLabelAngles(r);
  this.applyLabelDimensions(r);
}};

var mf=function(e,t){
  var a=Math.atan(t/e);

  if (e===0&&a<0) {
    (a = a*-1);
  }

  return a;
};

var bf=function(e,t){
  var a=t.x-e.x;
  var n=t.y-e.y;
  return mf(a,n)
};

var ty=function(e,t,a,n){
  var i=ka(0,n-0.001/* .001 */,1);
  var s=ka(0,n+0.001/* .001 */,1);
  var o=Kt(e,t,a,i);
  var l=Kt(e,t,a,s);
  return bf(o,l)
};

Gr.recalculateEdgeLabelProjections=function(r){
  var e;
  var t=r._private;
  var a=t.rscratch;
  var n=this;
  var i={mid:r.pstyle("label").strValue,source:r.pstyle("source-label").strValue,target:r.pstyle("target-label").strValue};
  if(i.mid||i.source||i.target){
    e={x:a.midX,y:a.midY};var s=function(f,c,h){
      Kr(t.rscratch,f,c,h);
      Kr(t.rstyle,f,c,h);
    };
    s("labelX",null,e.x);
    s("labelY",null,e.y);
    var o=mf(a.midDispX,a.midDispY);s("labelAutoAngle",null,o);

    var l=function(){
      if (l.cache) {
        return l.cache;
      }
      var f=[];
      for(var c=0;c+5<a.allpts.length;c+=4){
        var h={x:a.allpts[c],y:a.allpts[c+1]};
        var d={x:a.allpts[c+2],y:a.allpts[c+3]};
        var y={x:a.allpts[c+4],y:a.allpts[c+5]};
        f.push({p0:h,p1:d,p2:y,startDist:0,length:0,segments:[]})
      }
      var g=t.rstyle.bezierPts;
      var p=n.bezierProjPcts.length;
      function m(x,T,k,D,B){
        var P=Bt(T,k);
        var A=x.segments[x.segments.length-1];
        var R={p0:T,p1:k,t0:D,t1:B,startDist:A?A.startDist+A.length:0,length:P};
        x.segments.push(R);
        x.length+=P;
      }for(var b=0;b<f.length;b++){
      var w=f[b];
      var E=f[b-1];

      if (E) {
        (w.startDist = E.startDist+E.length);
      }

      m(w,w.p0,g[b*p],0,n.bezierProjPcts[0]);
      for (var C=0; C<p-1; C++) {
        m(w,g[b*p+C],g[b*p+C+1],n.bezierProjPcts[C],n.bezierProjPcts[C+1]);
      }m(w,g[b*p+p-1],w.p2,n.bezierProjPcts[p-1],1)
    }return l.cache=f
    };

    var u=function(f){
      var c;
      var h=f==="source";
      if(i[f]){
        var d=r.pstyle(f+"-text-offset").pfValue;switch(a.edgeType){case"self":case"compound":case"bezier":case"multibezier":{
          var g;
          var p=0;
          var m=0;
          for(var y=l(), b=0;b<y.length;b++){for(var w=y[h?b:y.length-1-b],E=0;E<w.segments.length;E++){
            var C=w.segments[h?E:w.segments.length-1-E];
            var x=b===y.length-1&&E===w.segments.length-1;
            p=m;
            m+=C.length;

            if (m>=d||x)
              {g={cp:w,segment:C};break}
          }if (g) {
            break
          }}
          var T=g.cp;
          var k=g.segment;
          var D=(d-p)/k.length;
          var B=k.t1-k.t0;
          var P=h?k.t0+B*D:k.t1-B*D;
          P=ka(0,P,1);
          e=Kt(T.p0,T.p1,T.p2,P);
          c=ty(T.p0,T.p1,T.p2,P);
          break
        }case"straight":case"segments":case"haystack":{
          for (var A=0,R,L,I,M,O=a.allpts.length,V=0; V+3<O&&(h?(I={x:a.allpts[V],y:a.allpts[V+1]},M={x:a.allpts[V+2],y:a.allpts[V+3]}):(I={x:a.allpts[O-2-V],y:a.allpts[O-1-V]},M={x:a.allpts[O-4-V],y:a.allpts[O-3-V]}),R=Bt(I,M),L=A,A+=R,!(A>=d)); V+=2)
            {}
          var G=d-L;
          var N=G/R;
          N=ka(0,N,1);
          e=Td(I,M,N);
          c=bf(I,M);
          break
        }}
        s("labelX",f,e.x);
        s("labelY",f,e.y);
        s("labelAutoAngle",f,c);
      }
    };

    u("source");
    u("target");
    this.applyLabelDimensions(r);
  }
};Gr.applyLabelDimensions=function(r){
  this.applyPrefixedLabelDimensions(r);

  if (r.isEdge()) {
    this.applyPrefixedLabelDimensions(r,"source");
    this.applyPrefixedLabelDimensions(r,"target");
  }
};Gr.applyPrefixedLabelDimensions=function(r,e){
  var t=r._private;
  var a=this.getLabelText(r,e);
  var n=Dt(a,r._private.labelDimsKey);
  if(Tr(t.rscratch,"prefixedLabelDimsKey",e)!==n){
    Kr(t.rscratch,"prefixedLabelDimsKey",e,n);
    var i=this.calculateLabelDimensions(r,a);
    var s=r.pstyle("line-height").pfValue;
    var o=r.pstyle("text-wrap").strValue;
    var l=Tr(t.rscratch,"labelWrapCachedLines",e)||[];
    var u=o!=="wrap"?1:Math.max(l.length,1);
    var v=i.height/u;
    var f=v*s;
    var c=i.width;
    var h=i.height+(u-1)*(s-1)*v;
    Kr(t.rstyle,"labelWidth",e,c);
    Kr(t.rscratch,"labelWidth",e,c);
    Kr(t.rstyle,"labelHeight",e,h);
    Kr(t.rscratch,"labelHeight",e,h);
    Kr(t.rscratch,"labelLineHeight",e,f);
  }
};Gr.getLabelText=function(r,e){
  var t=r._private;
  var a=e?e+"-":"";
  var n=r.pstyle(a+"label").strValue;
  var i=r.pstyle("text-transform").value;
  var s=function(U,Q){return Q?(Kr(t.rscratch,U,e,Q),Q):Tr(t.rscratch,U,e)};
  if (!n) {
    return"";
  }

  switch (i) {
  case "none":
  case "uppercase":
    n=n.toUpperCase();
    break;
  case "lowercase":
    (n = n.toLowerCase());
    break;
  }

  var o=r.pstyle("text-wrap").value;if(o==="wrap"){
      var l=s("labelKey");if (l!=null&&s("labelWrapKey")===l) {
        return s("labelWrapCachedText");
      }
      var u="​";
      var f=r.pstyle("text-max-width").pfValue;
      var c=r.pstyle("text-overflow-wrap").value;
      var h=c==="anywhere";
      var d=[];
      var y=/[\s\u200b]+|$/g;
      for(var v=n.split(`
          `),
          g=0;g<v.length;g++){
        var p=v[g];
        var m=this.calculateLabelDimensions(r,p);
        var b=m.width;
        if(h){var w=p.split("").join(u);p=w}if (b>f) {
        var E=p.matchAll(y);
        var C="";
        var x=0;
        var T=kr(E);
        var k;
        try{for(T.s();!(k=T.n()).done;){
          var D=k.value;
          var B=D[0];
          var P=p.substring(x,D.index);
          x=D.index+B.length;
          var A=C.length===0?P:C+P+B;
          var R=this.calculateLabelDimensions(r,A);
          var L=R.width;

          if (L<=f) {
            C+=P+B;
          } else {
            C&&d.push(C);
            C=P+B;
          }
        }}catch(F){T.e(F)}finally{T.f()}

        if (!C.match(/^[\s\u200b]+$/)) {
          d.push(C);
        }
      } else {
          d.push(p)
        }
      }
      s("labelWrapCachedLines",d);

      n=s("labelWrapCachedText",d.join(`
      `));

      s("labelWrapKey",l);
    }else if(o==="ellipsis"){
    var I=r.pstyle("text-max-width").pfValue;
    var M="";
    var O="…";
    var V=false;
    if (this.calculateLabelDimensions(r,n).width<I) {
      return n;
    }for(var G=0;G<n.length;G++){
      var N=this.calculateLabelDimensions(r,M+n[G]+O).width;if (N>I) {
              break;
            }
      M+=n[G];

      if (G===n.length-1) {
        (V = true);
      }
    }

    if (!V) {
      (M += O);
    }

    return M;
  }return n
};Gr.getLabelJustification=function(r){
  var e=r.pstyle("text-justification").strValue;
  var t=r.pstyle("text-halign").strValue;
  if (e==="auto") {
    if (r.isNode()) {
      switch(t){case "left":
        {
          return"right";
        }case "right":
        {
          return"left";
        }default:
        {
          return"center"
        }}
    } else {
      return"center";
    }
  } else {
    return e
  }
};Gr.calculateLabelDimensions=function(r,e){
  var t=this;
  var a=t.cy.window();
  var n=a.document;
  var i=0;
  var s=r.pstyle("font-style").strValue;
  var o=r.pstyle("font-size").pfValue;
  var l=r.pstyle("font-family").strValue;
  var u=r.pstyle("font-weight").strValue;
  var v=this.labelCalcCanvas;
  var f=this.labelCalcCanvasContext;
  if(!v){
    v=this.labelCalcCanvas=n.createElement("canvas");
    f=this.labelCalcCanvasContext=v.getContext("2d");
    var c=v.style;
    c.position="absolute";
    c.left="-9999px";
    c.top="-9999px";
    c.zIndex="-1";
    c.visibility="hidden";
    c.pointerEvents="none";
  }f.font=`${s} ${u} ${o}px ${l}`;
  var h=0;
  var d=0;
  for(var y=e.split(`
      `),
      g=0;g<y.length;g++){
    var p=y[g];
    var m=f.measureText(p);
    var b=Math.ceil(m.width);
    var w=o;
    h=Math.max(b,h);
    d+=w;
  }
  h+=i;
  d+=i;
  return {width:h,height:d};
};Gr.calculateLabelAngle=function(r,e){
  var t=r._private;
  var a=t.rscratch;
  var n=r.isEdge();
  var i=e?e+"-":"";
  var s=r.pstyle(i+"text-rotation");
  var o=s.strValue;
  return o==="none"?0:n&&o==="autorotate"?a.labelAutoAngle:o==="autorotate"?0:s.pfValue
};Gr.calculateLabelAngles=function(r){
  var e=this;
  var t=r.isEdge();
  var a=r._private;
  var n=a.rscratch;
  n.labelAngle=e.calculateLabelAngle(r);

  if (t) {
    n.sourceLabelAngle=e.calculateLabelAngle(r,"source");
    n.targetLabelAngle=e.calculateLabelAngle(r,"target");
  }
};
var wf={};
var Ll=28;
var Il=false;
wf.getNodeShape=function(r){
  var e=this;
  var t=r.pstyle("shape").value;
  if (t==="cutrectangle"&&(r.width()<Ll||r.height()<Ll)) {
    if (!Il) {
      Ve("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead");
      Il=true;
    }

    return "rectangle";
  }if (r.isParent()) {
    return t==="rectangle"||t==="roundrectangle"||t==="round-rectangle"||t==="cutrectangle"||t==="cut-rectangle"||t==="barrel"?t:"rectangle";
  }if(t==="polygon"){var a=r.pstyle("shape-polygon-points").value;return e.nodeShapes.makePolygon(a).name}return t
};var Xn={};Xn.registerCalculationListeners=function(){
  var r=this.cy;
  var e=r.collection();
  var t=this;

  var a=function(s, o = true) {
    e.merge(s);

    if (o) {
      for(var l=0;l<s.length;l++){
        var u=s[l];
        var v=u._private;
        var f=v.rstyle;
        f.clean=false;
        f.cleanConnected=false;
      }
    }
  };

  t.binder(r).on("bounds.* dirty.*",function(s){var o=s.target;a(o)}).on("style.* background.*",function(s){var o=s.target;a(o,false)});var n=function(s){if(s){
    var o=t.onUpdateEleCalcsFns;e.cleanStyle();for(var l=0;l<e.length;l++){
  var u=e[l];
  var v=u._private.rstyle;

  if (u.isNode()&&!v.cleanConnected) {
    a(u.connectedEdges());
    v.cleanConnected=true;
  }
}if (o) {
      for(var f=0;f<o.length;f++){var c=o[f];c(s,e)}
    }
    t.recalculateRenderedStyle(e);
    e=r.collection();
  }};
  t.flushRenderedStyleQueue=function(){n(true)};
  t.beforeRender(n,t.beforeRenderPriorities.eleCalcs);
};Xn.onUpdateEleCalcs=function(r){var e=this.onUpdateEleCalcsFns=this.onUpdateEleCalcsFns||[];e.push(r)};Xn.recalculateRenderedStyle=function(r,e){var t=function(w){return w._private.rstyle.cleanConnected};if(r.length!==0){
  var a=[];
  var n=[];
  if(!this.destroyed){
    if (e===void 0) {
      (e = true);
    }

    for(var i=0;i<r.length;i++){
      var s=r[i];
      var o=s._private;
      var l=o.rstyle;

      if (s.isEdge()&&(!t(s.source())||!t(s.target()))) {
        (l.clean = false);
      }

      if (s.isEdge()&&s.isBundledBezier()&&s.parallelEdges().some(function(b){return!b._private.rstyle.clean&&b.isBundledBezier()})) {
        (l.clean = false);
      }

      if (!(e&&l.clean||s.removed())&&s.pstyle("display").value!=="none") {
        o.group==="nodes"?n.push(s):a.push(s);
        l.clean=true;
      }
    }for(var u=0;u<n.length;u++){
      var v=n[u];
      var f=v._private;
      var c=f.rstyle;
      var h=v.position();
      this.recalculateNodeLabelProjection(v);
      c.nodeX=h.x;
      c.nodeY=h.y;
      c.nodeW=v.pstyle("width").pfValue;
      c.nodeH=v.pstyle("height").pfValue;
    }this.recalculateEdgeProjections(a);for(var d=0;d<a.length;d++){
      var y=a[d];
      var g=y._private;
      var p=g.rstyle;
      var m=g.rscratch;
      p.srcX=m.arrowStartX;
      p.srcY=m.arrowStartY;
      p.tgtX=m.arrowEndX;
      p.tgtY=m.arrowEndY;
      p.midX=m.midX;
      p.midY=m.midY;
      p.labelAngle=m.labelAngle;
      p.sourceLabelAngle=m.sourceLabelAngle;
      p.targetLabelAngle=m.targetLabelAngle;
    }
  }
}};var Yn={};Yn.updateCachedGrabbedEles=function(){var r=this.cachedZSortedEles;if(r){
  r.drag=[];
  r.nondrag=[];
  var e=[];
  for(var t=0;t<r.length;t++){
    var a=r[t];
    var n=a._private.rscratch;

    if (a.grabbed()&&!a.isParent()) {
      e.push(a);
    } else if (n.inDragLayer) {
      r.drag.push(a);
    } else {
      r.nondrag.push(a);
    }
  }for(var t=0;t<e.length;t++){var a=e[t];r.drag.push(a)}
}};Yn.invalidateCachedZSortedEles=function(){this.cachedZSortedEles=null};Yn.getCachedZSortedEles=function(r){if (r||!this.cachedZSortedEles) {
  var e=this.cy.mutableElements().toArray();
  e.sort(ef);
  e.interactive=e.filter(function(t){return t.interactive()});
  this.cachedZSortedEles=e;
  this.updateCachedGrabbedEles();
} else {
  e=this.cachedZSortedEles;
}return e};var xf={};[Mt,Bn,yr,Ga,yo,Gr,wf,Xn,Yn].forEach(function(r){be(xf,r)});var Ef={};Ef.getCachedImage=function(r,e,t){
  var a=this;
  var n=a.imageCache=a.imageCache||{};
  var i=n[r];
  if (i) {
    if (!i.image.complete) {
      i.image.addEventListener("load",t);
    }

    return i.image;
  }i=n[r]=n[r]||{};var s=i.image=new Image;
  s.addEventListener("load",t);
  s.addEventListener("error",function(){s.error=true});
  var o="data:";
  var l=r.substring(0,o.length).toLowerCase()===o;

  if (!l) {
    e=e==="null"?null:e;
    s.crossOrigin=e;
  }

  s.src=r;
  return s;
};var ia={};ia.registerBinding=function(r,e,t,a){var n=Array.prototype.slice.apply(arguments,[1]);if(Array.isArray(r)){
  var i=[];
  for(var s=0;s<r.length;s++){var o=r[s];if(o!==void 0){var l=this.binder(o);i.push(l.on(...n))}}return i
}var l=this.binder(r);return l.on(...n);};ia.binder=function(r){
  var e=this;
  var t=e.cy.window();
  var a=r===t||r===t.document||r===t.document.body||hc(r);
  if(e.supportsPassiveEvents==null){var n=false;try{var i=Object.defineProperty({},"passive",{get:function(){
    n=true;
    return true;
  }});t.addEventListener("test",null,i)}catch{}e.supportsPassiveEvents=n}var s=function(l,u,v){
  var f=Array.prototype.slice.call(arguments);

  if (a&&e.supportsPassiveEvents) {
    (f[2] = {capture:v??false,passive:false,once:false});
  }

  e.bindings.push({target:r,args:f});
  (r.addEventListener||r.on).apply(r,f);
  return this;
};return{on:s,addEventListener:s,addListener:s,bind:s}
};ia.nodeIsDraggable=function(r){return r&&r.isNode()&&!r.locked()&&r.grabbable()};ia.nodeIsGrabbable=function(r){return this.nodeIsDraggable(r)&&r.interactive()};ia.load=function(){
  var r=this;
  var e=r.cy.window();
  var t=function(S){return S.selected()};

  var a=function(S){var _=S.getRootNode();if (_&&_.nodeType===11&&_.host!==void 0) {
    return _
  }};

  var n=function(S,_,W,$){
    if (S==null) {
      (S = r.cy);
    }

    for(var Z=0;Z<_.length;Z++){var oe=_[Z];S.emit({originalEvent:W,type:oe,position:$})}
  };
  var i=function(S){return S.shiftKey||S.metaKey||S.ctrlKey};

  var s=function(S,_){var W=true;if (r.cy.hasCompoundNodes()&&S&&S.pannable()) {
    for(var $=0;_&&$<_.length;$++){var S=_[$];if(S.isNode()&&S.isParent()&&!S.pannable()){W=false;break}}
  } else {
    W=true;
  }return W};

  var o=function(S){S[0]._private.grabbed=true};
  var l=function(S){S[0]._private.grabbed=false};
  var u=function(S){S[0]._private.rscratch.inDragLayer=true};
  var v=function(S){S[0]._private.rscratch.inDragLayer=false};
  var f=function(S){S[0]._private.rscratch.isGrabTarget=true};
  var c=function(S){S[0]._private.rscratch.isGrabTarget=false};

  var h=function(S,_){
    var W=_.addToList;
    var $=W.has(S);

    if (!$&&S.grabbable()&&!S.locked()) {
      W.merge(S);
      o(S);
    }
  };

  var d=function(S,_){if(S.cy().hasCompoundNodes()&&!(_.inDragLayer==null&&_.addToList==null)){
    var W=S.descendants();

    if (_.inDragLayer) {
      W.forEach(u);
      W.connectedEdges().forEach(u);
    }

    if (_.addToList) {
      h(W,_);
    }
  }};

  var y=function(S,_){
    _=_||{};var W=S.cy().hasCompoundNodes();

    if (_.inDragLayer) {
      S.forEach(u);
      S.neighborhood().stdFilter(function($){return!W||$.isEdge()}).forEach(u);
    }

    if (_.addToList) {
      S.forEach(function($){h($,_)});
    }

    d(S,_);
    m(S,{inDragLayer:_.inDragLayer});
    r.updateCachedGrabbedEles();
  };

  var g=y;

  var p=function(S){
    if (S) {
      r.getCachedZSortedEles().forEach(function(_){
        l(_);
        v(_);
        c(_);
      });

      r.updateCachedGrabbedEles();
    }
  };

  var m=function(S,_){if(!(_.inDragLayer==null&&_.addToList==null)&&S.cy().hasCompoundNodes()){var W=S.ancestors().orphans();if(!W.same(S)){
    var $=W.descendants().spawnSelf().merge(W).unmerge(S).unmerge(S.descendants());
    var Z=$.connectedEdges();

    if (_.inDragLayer) {
      Z.forEach(u);
      $.forEach(u);
    }

    if (_.addToList) {
      $.forEach(function(oe){h(oe,_)});
    }
  }}};

  var b=function(){
    if (document.activeElement!=null&&document.activeElement.blur!=null) {
      document.activeElement.blur();
    }
  };
  var w=typeof MutationObserver !== "undefined";
  var E=typeof ResizeObserver !== "undefined";

  if (w) {
    r.removeObserver=new MutationObserver(function(X){for(var S=0;S<X.length;S++){
      var _=X[S];
      var W=_.removedNodes;
      if (W) {
        for(var $=0;$<W.length;$++){var Z=W[$];if(Z===r.container){r.destroy();break}}
      }
    }});

    r.container.parentNode&&r.removeObserver.observe(r.container.parentNode,{childList:true});
  } else {
    r.registerBinding(r.container,"DOMNodeRemoved",function(X){r.destroy()});
  }

  var C=Fa(function(){r.cy.resize()},100);

  if (w) {
    r.styleObserver=new MutationObserver(C);
    r.styleObserver.observe(r.container,{attributes:true});
  }

  r.registerBinding(e,"resize",C);

  if (E) {
    r.resizeObserver=new ResizeObserver(C);
    r.resizeObserver.observe(r.container);
  }

  var x=function(S,_){
    while (S!=null) {
      _(S);
      S=S.parentNode;
    }
  };

  var T=function(){r.invalidateContainerClientCoordsCache()};

  x(r.container,function(X){
    r.registerBinding(X,"transitionend",T);
    r.registerBinding(X,"animationend",T);
    r.registerBinding(X,"scroll",T);
  });

  r.registerBinding(r.container,"contextmenu",function(X){X.preventDefault()});
  var k=function(){return r.selection[4]!==0};

  var D=function(S){
    var _=r.findContainerClientCoords();
    var W=_[0];
    var $=_[1];
    var Z=_[2];
    var oe=_[3];
    var ve=false;
    for(var ee=S.touches?S.touches:[S], le=0;le<ee.length;le++){var me=ee[le];if(W<=me.clientX&&me.clientX<=W+Z&&$<=me.clientY&&me.clientY<=$+oe){ve=true;break}}if (!ve) {
        return false;
      }
    var De=r.container;
    var Te=S.target;
    var fe=Te.parentNode;
    var Pe=false;

    while (fe)
      {if(fe===De){Pe=true;break}fe=fe.parentNode}

    return!!Pe
  };

  r.registerBinding(r.container,"mousedown",function(S){if(D(S)&&!(r.hoverData.which===1&&S.which!==1)){
    S.preventDefault();
    b();
    r.hoverData.capture=true;
    r.hoverData.which=S.which;
    var _=r.cy;
    var W=[S.clientX,S.clientY];
    var $=r.projectIntoViewport(W[0],W[1]);
    var Z=r.selection;
    var oe=r.findNearestElements($[0],$[1],true,false);
    var ee=oe[0];
    var ve=r.dragData.possibleDragElements;
    r.hoverData.mdownPos=$;
    r.hoverData.mdownGPos=W;
    var le=function(Be){return{originalEvent:S,type:Be,position:{x:$[0],y:$[1]}}};

    var me=function(){
      r.hoverData.tapholdCancelled=false;
      clearTimeout(r.hoverData.tapholdTimeout);
      r.hoverData.tapholdTimeout=setTimeout(function(){if(!r.hoverData.tapholdCancelled){
        var Be=r.hoverData.down;

        if (Be) {
          Be.emit(le("taphold"));
        } else {
          _.emit(le("taphold"));
        }
      }},r.tapholdDuration);
    };

    if(S.which==3){
      r.hoverData.cxtStarted=true;var De={originalEvent:S,type:"cxttapstart",position:{x:$[0],y:$[1]}};

      if (ee) {
        ee.activate();
        ee.emit(De);
        r.hoverData.down=ee;
      } else {
        _.emit(De);
      }

      r.hoverData.downTime=new Date().getTime();
      r.hoverData.cxtDragged=false;
    }else if(S.which==1){
      if (ee) {
        ee.activate();
      }

      {
          if(ee!=null&&r.nodeIsGrabbable(ee)){
            var Te=function(Be){Be.emit(le("grab"))};
            f(ee);

            if (!ee.selected()) {
              ve=r.dragData.possibleDragElements=_.collection();
              g(ee,{addToList:ve});
              ee.emit(le("grabon")).emit(le("grab"));
            } else {
              ve=r.dragData.possibleDragElements=_.collection();var fe=_.$(function(Pe){return Pe.isNode()&&Pe.selected()&&r.nodeIsGrabbable(Pe)});
              y(fe,{addToList:ve});
              ee.emit(le("grabon"));
              fe.forEach(Te);
            }

            r.redrawHint("eles",true);
            r.redrawHint("drag",true);
          }
          r.hoverData.down=ee;
          r.hoverData.downs=oe;
          r.hoverData.downTime=new Date().getTime();
        }
      n(ee,["mousedown","tapstart","vmousedown"],S,{x:$[0],y:$[1]});

      if (ee==null) {
        Z[4]=1;
        r.data.bgActivePosistion={x:$[0],y:$[1]};
        r.redrawHint("select",true);
        r.redraw();
      } else if (ee.pannable()) {
        (Z[4] = 1);
      }

      me();
    }
    Z[0]=Z[2]=$[0];
    Z[1]=Z[3]=$[1];
  }},false);var B=a(r.container);r.registerBinding([e,B],"mousemove",function(S){var _=r.hoverData.capture;if(!(!_&&!D(S))){
    var W=false;
    var $=r.cy;
    var Z=$.zoom();
    var oe=[S.clientX,S.clientY];
    var ee=r.projectIntoViewport(oe[0],oe[1]);
    var ve=r.hoverData.mdownPos;
    var le=r.hoverData.mdownGPos;
    var me=r.selection;
    var De=null;

    if (!r.hoverData.draggingEles&&!r.hoverData.dragging&&!r.hoverData.selecting) {
      (De = r.findNearestElement(ee[0],ee[1],true,false));
    }

    var Te=r.hoverData.last;
    var fe=r.hoverData.down;
    var Pe=[ee[0]-me[2],ee[1]-me[3]];
    var Be=r.dragData.possibleDragElements;
    var je;
    if(le){
      var Ke=oe[0]-le[0];
      var mr=Ke*Ke;
      var Ye=oe[1]-le[1];
      var ir=Ye*Ye;
      var er=mr+ir;
      r.hoverData.isOverThresholdDrag=je=er>=r.desktopTapThreshold2
    }var lr=i(S);

    if (je) {
      (r.hoverData.tapholdCancelled = true);
    }

    var jr=function(){
      var Br=r.hoverData.dragDelta=r.hoverData.dragDelta||[];

      if (Br.length===0) {
        Br.push(Pe[0]);
        Br.push(Pe[1]);
      } else {
        Br[0]+=Pe[0];
        Br[1]+=Pe[1];
      }
    };
    W=true;
    n(De,["mousemove","vmousemove","tapdrag"],S,{x:ee[0],y:ee[1]});
    var Ze=function(Br){return{originalEvent:S,type:Br,position:{x:ee[0],y:ee[1]}}};

    var Wr=function(){
      r.data.bgActivePosistion=void 0;

      if (!r.hoverData.selecting) {
        $.emit(Ze("boxstart"));
      }

      me[4]=1;
      r.hoverData.selecting=true;
      r.redrawHint("select",true);
      r.redraw();
    };

    if(r.hoverData.which===3){if(je){
      var $r=Ze("cxtdrag");

      if (fe) {
        fe.emit($r);
      } else {
        $.emit($r);
      }

      r.hoverData.cxtDragged=true;

      if ((!r.hoverData.cxtOver || De!==r.hoverData.cxtOver)) {
        r.hoverData.cxtOver&&r.hoverData.cxtOver.emit(Ze("cxtdragout"));
        r.hoverData.cxtOver=De;
        De&&De.emit(Ze("cxtdragover"));
      }
    }}else if(r.hoverData.dragging){
      W=true;

      if ($.panningEnabled()&&$.userPanningEnabled()) {
        var It;if (r.hoverData.justStartedPan) {
          var $a=r.hoverData.mdownPos;
          It={x:(ee[0]-$a[0])*Z,y:(ee[1]-$a[1])*Z};
          r.hoverData.justStartedPan=false;
        } else {
          It={x:Pe[0]*Z,y:Pe[1]*Z};
        }
        $.panBy(It);
        $.emit(Ze("dragpan"));
        r.hoverData.dragged=true;
      }

      ee=r.projectIntoViewport(S.clientX,S.clientY)
    }else if(me[4]==1&&(fe==null||fe.pannable())){if(je){
      if (!r.hoverData.dragging&&$.boxSelectionEnabled()&&(lr||!$.panningEnabled()||!$.userPanningEnabled())) {
        Wr();
      } else
        if(!r.hoverData.selecting&&$.panningEnabled()&&$.userPanningEnabled()){
          var bt=s(fe,r.hoverData.downs);

          if (bt) {
            r.hoverData.dragging=true;
            r.hoverData.justStartedPan=true;
            me[4]=0;
            r.data.bgActivePosistion=Wt(ve);
            r.redrawHint("select",true);
            r.redraw();
          }
        }

      if (fe&&fe.pannable()&&fe.active()) {
        fe.unactivate();
      }
    }}else{
      if (fe&&fe.pannable()&&fe.active()) {
        fe.unactivate();
      }

      if ((!fe||!fe.grabbed())&&De!=Te) {
        Te&&n(Te,["mouseout","tapdragout"],S,{x:ee[0],y:ee[1]});
        De&&n(De,["mouseover","tapdragover"],S,{x:ee[0],y:ee[1]});
        r.hoverData.last=De;
      }

      if (fe) {
        if (je) {if ($.boxSelectionEnabled()&&lr) {
          if (fe&&fe.grabbed()) {
            p(Be);
            fe.emit(Ze("freeon"));
            Be.emit(Ze("free"));
            r.dragData.didDrag&&(fe.emit(Ze("dragfreeon")),Be.emit(Ze("dragfree")));
          }

          Wr();
        } else if(fe&&fe.grabbed()&&r.nodeIsDraggable(fe)){
          var Er=!r.dragData.didDrag;

          if (Er) {
            r.redrawHint("eles",true);
          }

          r.dragData.didDrag=true;

          if (!r.hoverData.draggingEles) {
            y(Be,{inDragLayer:true});
          }

          var hr={x:0,y:0};if(ae(Pe[0])&&ae(Pe[1])&&(hr.x+=Pe[0],hr.y+=Pe[1],Er)){
            var Cr=r.hoverData.dragDelta;

            if (Cr&&ae(Cr[0])&&ae(Cr[1])) {
              hr.x+=Cr[0];
              hr.y+=Cr[1];
            }
          }
          r.hoverData.draggingEles=true;
          Be.silentShift(hr).emit(Ze("position")).emit(Ze("drag"));
          r.redrawHint("drag",true);
          r.redraw();
        }} else {
          jr();
        }
      }

      W=true
    }
    me[2]=ee[0];
    me[3]=ee[1];

    if (W) {
      if (S.stopPropagation) {
        S.stopPropagation();
      }

      if (S.preventDefault) {
        S.preventDefault();
      }

      return false;
    }
  }},false);
  var P;
  var A;
  var R;
  r.registerBinding(e,"mouseup",function(S){if(!(r.hoverData.which===1&&S.which!==1&&r.hoverData.capture)){var _=r.hoverData.capture;if(_){
    r.hoverData.capture=false;
    var W=r.cy;
    var $=r.projectIntoViewport(S.clientX,S.clientY);
    var Z=r.selection;
    var oe=r.findNearestElement($[0],$[1],true,false);
    var ee=r.dragData.possibleDragElements;
    var ve=r.hoverData.down;
    var le=i(S);

    if (r.data.bgActivePosistion) {
      r.redrawHint("select",true);
      r.redraw();
    }

    r.hoverData.tapholdCancelled=true;
    r.data.bgActivePosistion=void 0;

    if (ve) {
      ve.unactivate();
    }

    var me=function(Ke){return{originalEvent:S,type:Ke,position:{x:$[0],y:$[1]}}};if(r.hoverData.which===3){
      var De=me("cxttapend");

      if (ve) {
        ve.emit(De);
      } else {
        W.emit(De);
      }

      if (!r.hoverData.cxtDragged)
        {
          var Te=me("cxttap");

          if (ve) {
            ve.emit(Te);
          } else {
            W.emit(Te);
          }
        }

      r.hoverData.cxtDragged=false;
      r.hoverData.which=null;
    }else if(r.hoverData.which===1){
      n(oe,["mouseup","tapend","vmouseup"],S,{x:$[0],y:$[1]});

      if (!r.dragData.didDrag&&!r.hoverData.dragged&&!r.hoverData.selecting&&!r.hoverData.isOverThresholdDrag) {
        n(ve,["click","tap","vclick"],S,{x:$[0],y:$[1]});
        A=false;

        S.timeStamp-R<=W.multiClickDebounceTime()?(P&&clearTimeout(P),A=true,R=null,n(ve,["dblclick","dbltap","vdblclick"],S,{x:$[0],y:$[1]})):(P=setTimeout(function(){
          if (!A) {
            n(ve,["oneclick","onetap","voneclick"],S,{x:$[0],y:$[1]});
          }
        },W.multiClickDebounceTime()),R=S.timeStamp);
      }

      if (ve==null&&!r.dragData.didDrag&&!r.hoverData.selecting&&!r.hoverData.dragged&&!i(S)) {
        W.$(t).unselect(["tapunselect"]);
        ee.length>0&&r.redrawHint("eles",true);
        r.dragData.possibleDragElements=ee=W.collection();
      }

      if (oe==ve&&!r.dragData.didDrag&&!r.hoverData.selecting&&oe!=null&&oe._private.selectable) {
        r.hoverData.dragging||(W.selectionType()==="additive"||le?oe.selected()?oe.unselect(["tapunselect"]):oe.select(["tapselect"]):le||(W.$(t).unmerge(oe).unselect(["tapunselect"]),oe.select(["tapselect"])));
        r.redrawHint("eles",true);
      }

      if (r.hoverData.selecting) {
        var fe=W.collection(r.getAllInBox(Z[0],Z[1],Z[2],Z[3]));
        r.redrawHint("select",true);

        if (fe.length>0) {
          r.redrawHint("eles",true);
        }

        W.emit(me("boxend"));
        var Pe=function(Ke){return Ke.selectable()&&!Ke.selected()};

        if (W.selectionType() !== "additive" && !le) {
          W.$(t).unmerge(fe).unselect();
        }

        fe.emit(me("box")).stdFilter(Pe).select().emit(me("boxselect"));
        r.redraw();
      }

      if (r.hoverData.dragging) {
        r.hoverData.dragging=false;
        r.redrawHint("select",true);
        r.redrawHint("eles",true);
        r.redraw();
      }

      if (!Z[4]) {
        r.redrawHint("drag",true);
        r.redrawHint("eles",true);
        var Be=ve&&ve.grabbed();
        p(ee);

        if (Be) {
          ve.emit(me("freeon"));
          ee.emit(me("free"));
          r.dragData.didDrag&&(ve.emit(me("dragfreeon")),ee.emit(me("dragfree")));
        }
      }
    }
    Z[4]=0;
    r.hoverData.down=null;
    r.hoverData.cxtStarted=false;
    r.hoverData.draggingEles=false;
    r.hoverData.selecting=false;
    r.hoverData.isOverThresholdDrag=false;
    r.dragData.didDrag=false;
    r.hoverData.dragged=false;
    r.hoverData.dragDelta=[];
    r.hoverData.mdownPos=null;
    r.hoverData.mdownGPos=null;
    r.hoverData.which=null;
  }}},false);
  var L=[];
  var I=4;
  var M;
  var O=100000/* 1e5 */;

  var V=function(S,_){for (var W=0; W<S.length; W++) {
    if (S[W]%_!==0) {
      return false;
    }
  }return true;};

  var G=function(S){
    var _=Math.abs(S[0]);
    for (var W=1; W<S.length; W++) {
      if (Math.abs(S[W])!==_) {
        return false;
      }
    }return true;
  };

  var N=function(S){
    var _=false;
    var W=S.deltaY;

    if (W==null) {
      if (S.wheelDeltaY!=null) {
        W=S.wheelDeltaY/4;
      } else if (S.wheelDelta!=null) {
        (W = S.wheelDelta/4);
      }
    }

    if (W!==0) {if (M==null) {
      if (L.length>=I) {
        var $=L;
        M=V($,5);

        if (!M)
          {var Z=Math.abs($[0]);M=G($)&&Z>5}

        if (M) {
          for (var oe=0; oe<$.length; oe++) {
            O=Math.min(Math.abs($[oe]),O)
          }
        }
      } else {
        L.push(W);
        _=true;
      }
    } else {
      if (M) {
        (O = Math.min(Math.abs(W),O));
      }
    }if(!r.scrollingPage){
      var ee=r.cy;
      var ve=ee.zoom();
      var le=ee.pan();
      var me=r.projectIntoViewport(S.clientX,S.clientY);
      var De=[me[0]*ve+le.x,me[1]*ve+le.y];
      if(r.hoverData.draggingEles||r.hoverData.dragging||r.hoverData.cxtStarted||k()){S.preventDefault();return}if(ee.panningEnabled()&&ee.userPanningEnabled()&&ee.zoomingEnabled()&&ee.userZoomingEnabled()){
      S.preventDefault();
      r.data.wheelZooming=true;
      clearTimeout(r.data.wheelTimeout);

      r.data.wheelTimeout=setTimeout(function(){
        r.data.wheelZooming=false;
        r.redrawHint("eles",true);
        r.redraw();
      },150);

      var Te;

      if (_&&Math.abs(W)>5) {
        (W = to(W)*5);
      }

      Te=W/-250;

      if (M) {
        Te/=O;
        Te*=3;
      }

      Te=Te*r.wheelSensitivity;
      var fe=S.deltaMode===1;

      if (fe) {
        (Te *= 33);
      }

      var Pe=ee.zoom()*Math.pow(10,Te);

      if (S.type==="gesturechange") {
        (Pe = r.gestureStartZoom*S.scale);
      }

      ee.zoom({level:Pe,renderedPosition:{x:De[0],y:De[1]}});
      ee.emit({type:S.type==="gesturechange"?"pinchzoom":"scrollzoom",originalEvent:S,position:{x:me[0],y:me[1]}});
    }
    }}
  };

  r.registerBinding(r.container,"wheel",N,true);

  r.registerBinding(e,"scroll",function(S){
    r.scrollingPage=true;
    clearTimeout(r.scrollingPageTimeout);
    r.scrollingPageTimeout=setTimeout(function(){r.scrollingPage=false},250);
  },true);

  r.registerBinding(r.container,"gesturestart",function(S){
    r.gestureStartZoom=r.cy.zoom();

    if (!r.hasTouchStarted) {
      S.preventDefault();
    }
  },true);

  r.registerBinding(r.container,"gesturechange",function(X){
    if (!r.hasTouchStarted) {
      N(X);
    }
  },true);
  r.registerBinding(r.container,"mouseout",function(S){var _=r.projectIntoViewport(S.clientX,S.clientY);r.cy.emit({originalEvent:S,type:"mouseout",position:{x:_[0],y:_[1]}})},false);
  r.registerBinding(r.container,"mouseover",function(S){var _=r.projectIntoViewport(S.clientX,S.clientY);r.cy.emit({originalEvent:S,type:"mouseover",position:{x:_[0],y:_[1]}})},false);
  var F;
  var U;
  var Q;
  var K;
  var j;
  var re;
  var ne;
  var J;
  var z;
  var q;
  var H;
  var Y;
  var te;
  var ce=function(S,_,W,$){return Math.sqrt((W-S)*(W-S)+($-_)*($-_))};
  var Ae=function(S,_,W,$){return(W-S)*(W-S)+($-_)*($-_)};
  var Ce;
  r.registerBinding(r.container,"touchstart",Ce=function(S){
    r.hasTouchStarted=true;

    if (!!D(S)) {
      b();
      r.touchData.capture=true;
      r.data.bgActivePosistion=void 0;
      var _=r.cy;
      var W=r.touchData.now;
      var $=r.touchData.earlier;
      if(S.touches[0]){
        var Z=r.projectIntoViewport(S.touches[0].clientX,S.touches[0].clientY);
        W[0]=Z[0];
        W[1]=Z[1];
      }if(S.touches[1]){
        var Z=r.projectIntoViewport(S.touches[1].clientX,S.touches[1].clientY);
        W[2]=Z[0];
        W[3]=Z[1];
      }if(S.touches[2]){
        var Z=r.projectIntoViewport(S.touches[2].clientX,S.touches[2].clientY);
        W[4]=Z[0];
        W[5]=Z[1];
      }var oe=function(lr){return{originalEvent:S,type:lr,position:{x:W[0],y:W[1]}}};if(S.touches[1]){
        r.touchData.singleTouchMoved=true;
        p(r.dragData.touchDragEles);
        var ee=r.findContainerClientCoords();
        z=ee[0];
        q=ee[1];
        H=ee[2];
        Y=ee[3];
        F=S.touches[0].clientX-z;
        U=S.touches[0].clientY-q;
        Q=S.touches[1].clientX-z;
        K=S.touches[1].clientY-q;
        te=F >= 0&&F<=H&&Q >= 0&&Q<=H&&U >= 0&&U<=Y&&K >= 0&&K<=Y;
        var ve=_.pan();
        var le=_.zoom();
        j=ce(F,U,Q,K);
        re=Ae(F,U,Q,K);
        ne=[(F+Q)/2,(U+K)/2];
        J=[(ne[0]-ve.x)/le,(ne[1]-ve.y)/le];
        var me=200;
        var De=me*me;
        if(re<De&&!S.touches[2]){
          var Te=r.findNearestElement(W[0],W[1],true,true);
          var fe=r.findNearestElement(W[2],W[3],true,true);

          if (Te&&Te.isNode()) {
            Te.activate().emit(oe("cxttapstart"));
            r.touchData.start=Te;
          } else if (fe&&fe.isNode()) {
            fe.activate().emit(oe("cxttapstart"));
            r.touchData.start=fe;
          } else {
            _.emit(oe("cxttapstart"));
          }

          if (r.touchData.start) {
            (r.touchData.start._private.grabbed = false);
          }

          r.touchData.cxt=true;
          r.touchData.cxtDragged=false;
          r.data.bgActivePosistion=void 0;
          r.redraw();
          return
        }
      }if (S.touches[2]) {
      if (_.boxSelectionEnabled()) {
        S.preventDefault();
      }
    } else if(!S.touches[1]){if(S.touches[0]){
      var Pe=r.findNearestElements(W[0],W[1],true,true);
      var Be=Pe[0];
      if(Be!=null&&(Be.activate(),r.touchData.start=Be,r.touchData.starts=Pe,r.nodeIsGrabbable(Be))){
        var je=r.dragData.touchDragEles=_.collection();
        var Ke=null;
        r.redrawHint("eles",true);
        r.redrawHint("drag",true);

        if (Be.selected()) {
          Ke=_.$(function(er){return er.selected()&&r.nodeIsGrabbable(er)});
          y(Ke,{addToList:je});
        } else {
          g(Be,{addToList:je});
        }

        f(Be);
        Be.emit(oe("grabon"));

        if (Ke) {
          Ke.forEach(function(er){er.emit(oe("grab"))});
        } else {
          Be.emit(oe("grab"));
        }
      }
      n(Be,["touchstart","tapstart","vmousedown"],S,{x:W[0],y:W[1]});

      if (Be==null) {
        r.data.bgActivePosistion={x:Z[0],y:Z[1]};
        r.redrawHint("select",true);
        r.redraw();
      }

      r.touchData.singleTouchMoved=false;
      r.touchData.singleTouchStartTime=+new Date;
      clearTimeout(r.touchData.tapholdTimeout);
      r.touchData.tapholdTimeout=setTimeout(function(){
        if (r.touchData.singleTouchMoved===false&&!r.pinching&&!r.touchData.selecting) {
          n(r.touchData.start,["taphold"],S,{x:W[0],y:W[1]});
        }
      },r.tapholdDuration);
    }}if(S.touches.length>=1){
        var mr=r.touchData.startPosition=[null,null,null,null,null,null];
        for (var Ye=0; Ye<W.length; Ye++) {
          mr[Ye]=$[Ye]=W[Ye];
        }var ir=S.touches[0];r.touchData.startGPosition=[ir.clientX,ir.clientY]
      }
    }
  },false);var we;r.registerBinding(e,"touchmove",we=function(S){var _=r.touchData.capture;if(!(!_&&!D(S))){
    var W=r.selection;
    var $=r.cy;
    var Z=r.touchData.now;
    var oe=r.touchData.earlier;
    var ee=$.zoom();
    if(S.touches[0]){
      var ve=r.projectIntoViewport(S.touches[0].clientX,S.touches[0].clientY);
      Z[0]=ve[0];
      Z[1]=ve[1];
    }if(S.touches[1]){
          var ve=r.projectIntoViewport(S.touches[1].clientX,S.touches[1].clientY);
          Z[2]=ve[0];
          Z[3]=ve[1];
        }if(S.touches[2]){
          var ve=r.projectIntoViewport(S.touches[2].clientX,S.touches[2].clientY);
          Z[4]=ve[0];
          Z[5]=ve[1];
        }
    var le=function(jf){return{originalEvent:S,type:jf,position:{x:Z[0],y:Z[1]}}};
    var me=r.touchData.startGPosition;
    var De;
    if(_&&S.touches[0]&&me){
      var Te=[];
      for (var fe=0; fe<Z.length; fe++) {
        Te[fe]=Z[fe]-oe[fe];
      }
      var Pe=S.touches[0].clientX-me[0];
      var Be=Pe*Pe;
      var je=S.touches[0].clientY-me[1];
      var Ke=je*je;
      var mr=Be+Ke;
      De=mr>=r.touchTapThreshold2
    }if(_&&r.touchData.cxt){
          S.preventDefault();
          var Ye=S.touches[0].clientX-z;
          var ir=S.touches[0].clientY-q;
          var er=S.touches[1].clientX-z;
          var lr=S.touches[1].clientY-q;
          var jr=Ae(Ye,ir,er,lr);
          var Ze=jr/re;
          var Wr=150;
          var $r=Wr*Wr;
          var It=1.5;
          var $a=It*It;
          if(Ze>=$a||jr>=$r){
            r.touchData.cxt=false;
            r.data.bgActivePosistion=void 0;
            r.redrawHint("select",true);
            var bt=le("cxttapend");

            if (r.touchData.start) {
              r.touchData.start.unactivate().emit(bt);
              r.touchData.start=null;
            } else {
              $.emit(bt);
            }
          }
        }if(_&&r.touchData.cxt){
      var bt=le("cxtdrag");
      r.data.bgActivePosistion=void 0;
      r.redrawHint("select",true);

      if (r.touchData.start) {
        r.touchData.start.emit(bt);
      } else {
        $.emit(bt);
      }

      if (r.touchData.start) {
        (r.touchData.start._private.grabbed = false);
      }

      r.touchData.cxtDragged=true;
      var Er=r.findNearestElement(Z[0],Z[1],true,true);

      if ((!r.touchData.cxtOver || Er!==r.touchData.cxtOver)) {
        r.touchData.cxtOver&&r.touchData.cxtOver.emit(le("cxtdragout"));
        r.touchData.cxtOver=Er;
        Er&&Er.emit(le("cxtdragover"));
      }
    }else if (_&&S.touches[2]&&$.boxSelectionEnabled()) {
      S.preventDefault();
      r.data.bgActivePosistion=void 0;
      this.lastThreeTouch=+new Date;

      if (!r.touchData.selecting) {
        $.emit(le("boxstart"));
      }

      r.touchData.selecting=true;
      r.touchData.didSelect=true;
      W[4]=1;

      if (!W||W.length===0||W[0]===void 0) {
        W[0]=(Z[0]+Z[2]+Z[4])/3;
        W[1]=(Z[1]+Z[3]+Z[5])/3;
        W[2]=(Z[0]+Z[2]+Z[4])/3+1;
        W[3]=(Z[1]+Z[3]+Z[5])/3+1;
      } else {
        W[2]=(Z[0]+Z[2]+Z[4])/3;
        W[3]=(Z[1]+Z[3]+Z[5])/3;
      }

      r.redrawHint("select",true);
      r.redraw();
    } else if(_&&S.touches[1]&&!r.touchData.didSelect&&$.zoomingEnabled()&&$.panningEnabled()&&$.userZoomingEnabled()&&$.userPanningEnabled()){
          S.preventDefault();
          r.data.bgActivePosistion=void 0;
          r.redrawHint("select",true);
          var hr=r.dragData.touchDragEles;if(hr){r.redrawHint("drag",true);for(var Cr=0;Cr<hr.length;Cr++){
            var oa=hr[Cr]._private;
            oa.grabbed=false;
            oa.rscratch.inDragLayer=false;
          }}
          var Br=r.touchData.start;
          var Ye=S.touches[0].clientX-z;
          var ir=S.touches[0].clientY-q;
          var er=S.touches[1].clientX-z;
          var lr=S.touches[1].clientY-q;
          var wo=ce(Ye,ir,er,lr);
          var Wf=wo/j;
          if(te){
            var $f=Ye-F;
            var Uf=ir-U;
            var Kf=er-Q;
            var Xf=lr-K;
            var Yf=($f+Kf)/2;
            var Zf=(Uf+Xf)/2;
            var ua=$.zoom();
            var Zn=ua*Wf;
            var Ua=$.pan();
            var xo=J[0]*ua+Ua.x;
            var Eo=J[1]*ua+Ua.y;
            var Qf={x:-Zn/ua*(xo-Ua.x-Yf)+xo,y:-Zn/ua*(Eo-Ua.y-Zf)+Eo};
            if(Br&&Br.active()){
              var hr=r.dragData.touchDragEles;
              p(hr);
              r.redrawHint("drag",true);
              r.redrawHint("eles",true);
              Br.unactivate().emit(le("freeon"));
              hr.emit(le("free"));

              if (r.dragData.didDrag) {
                Br.emit(le("dragfreeon"));
                hr.emit(le("dragfree"));
              }
            }
            $.viewport({zoom:Zn,pan:Qf,cancelOnFailedZoom:true});
            $.emit(le("pinchzoom"));
            j=wo;
            F=Ye;
            U=ir;
            Q=er;
            K=lr;
            r.pinching=true;
          }if(S.touches[0]){
            var ve=r.projectIntoViewport(S.touches[0].clientX,S.touches[0].clientY);
            Z[0]=ve[0];
            Z[1]=ve[1];
          }if(S.touches[1]){
            var ve=r.projectIntoViewport(S.touches[1].clientX,S.touches[1].clientY);
            Z[2]=ve[0];
            Z[3]=ve[1];
          }if(S.touches[2]){
            var ve=r.projectIntoViewport(S.touches[2].clientX,S.touches[2].clientY);
            Z[4]=ve[0];
            Z[5]=ve[1];
          }
        }else if(S.touches[0]&&!r.touchData.didSelect){
      var Mr=r.touchData.start;
      var Qn=r.touchData.last;
      var Er;

      if (!r.hoverData.draggingEles&&!r.swipePanning) {
        (Er = r.findNearestElement(Z[0],Z[1],true,true));
      }

      if (_&&Mr!=null) {
        S.preventDefault();
      }

      if (_&&Mr!=null&&r.nodeIsDraggable(Mr)) {
        if(De){
          var hr=r.dragData.touchDragEles;
          var Co=!r.dragData.didDrag;

          if (Co) {
            y(hr,{inDragLayer:true});
          }

          r.dragData.didDrag=true;
          var la={x:0,y:0};if(ae(Te[0])&&ae(Te[1])&&(la.x+=Te[0],la.y+=Te[1],Co)){
            r.redrawHint("eles",true);var Lr=r.touchData.dragDelta;

            if (Lr&&ae(Lr[0])&&ae(Lr[1])) {
              la.x+=Lr[0];
              la.y+=Lr[1];
            }
          }
          r.hoverData.draggingEles=true;
          hr.silentShift(la).emit(le("position")).emit(le("drag"));
          r.redrawHint("drag",true);

          if (r.touchData.startPosition[0]==oe[0]&&r.touchData.startPosition[1]==oe[1]) {
            r.redrawHint("eles",true);
          }

          r.redraw();
        }else{
          var Lr=r.touchData.dragDelta=r.touchData.dragDelta||[];

          if (Lr.length===0) {
            Lr.push(Te[0]);
            Lr.push(Te[1]);
          } else {
            Lr[0]+=Te[0];
            Lr[1]+=Te[1];
          }
        }
      }

      n(Mr||Er,["touchmove","tapdrag","vmousemove"],S,{x:Z[0],y:Z[1]});

      if ((!Mr||!Mr.grabbed())&&Er!=Qn) {
        Qn&&Qn.emit(le("tapdragout"));
        Er&&Er.emit(le("tapdragover"));
      }

      r.touchData.last=Er;

      if (_) {
        for (var Cr=0; Cr<Z.length; Cr++) {
          if (Z[Cr]&&r.touchData.startPosition[Cr]&&De) {
            (r.touchData.singleTouchMoved = true);
          }
        }
      }

      if(_&&(Mr==null||Mr.pannable())&&$.panningEnabled()&&$.userPanningEnabled()){
        var Jf=s(Mr,r.touchData.starts);

        if (Jf) {
          S.preventDefault();
          r.data.bgActivePosistion||(r.data.bgActivePosistion=Wt(r.touchData.startPosition));
          r.swipePanning?($.panBy({x:Te[0]*ee,y:Te[1]*ee}),$.emit(le("dragpan"))):De&&(r.swipePanning=true,$.panBy({x:Pe*ee,y:je*ee}),$.emit(le("dragpan")),Mr&&(Mr.unactivate(),r.redrawHint("select",true),r.touchData.start=null));
        }

        var ve=r.projectIntoViewport(S.touches[0].clientX,S.touches[0].clientY);
        Z[0]=ve[0];
        Z[1]=ve[1];
      }
    }for (var fe=0; fe<Z.length; fe++) {
          oe[fe]=Z[fe];
        }

    if (_&&S.touches.length>0&&!r.hoverData.draggingEles&&!r.swipePanning&&r.data.bgActivePosistion!=null) {
      r.data.bgActivePosistion=void 0;
      r.redrawHint("select",true);
      r.redraw();
    }
  }},false);var ye;r.registerBinding(e,"touchcancel",ye=function(S){
    var _=r.touchData.start;
    r.touchData.capture=false;

    if (_) {
      _.unactivate();
    }
  });
  var ie;
  var de;
  var he;
  var Ee;

  r.registerBinding(e,"touchend",ie=function(S){
    var _=r.touchData.start;
    var W=r.touchData.capture;
    if (W) {
      if (S.touches.length===0) {
        (r.touchData.capture = false);
      }

      S.preventDefault();
    } else {
      return;
    }var $=r.selection;
    r.swipePanning=false;
    r.hoverData.draggingEles=false;
    var Z=r.cy;
    var oe=Z.zoom();
    var ee=r.touchData.now;
    var ve=r.touchData.earlier;
    if(S.touches[0]){
      var le=r.projectIntoViewport(S.touches[0].clientX,S.touches[0].clientY);
      ee[0]=le[0];
      ee[1]=le[1];
    }if(S.touches[1]){
        var le=r.projectIntoViewport(S.touches[1].clientX,S.touches[1].clientY);
        ee[2]=le[0];
        ee[3]=le[1];
      }if(S.touches[2]){
        var le=r.projectIntoViewport(S.touches[2].clientX,S.touches[2].clientY);
        ee[4]=le[0];
        ee[5]=le[1];
      }var me=function($r){return{originalEvent:S,type:$r,position:{x:ee[0],y:ee[1]}}};

    if (_) {
      _.unactivate();
    }

    var De;if(r.touchData.cxt){
      De=me("cxttapend");

      if (_) {
        _.emit(De);
      } else {
        Z.emit(De);
      }

      if (!r.touchData.cxtDragged)
        {
          var Te=me("cxttap");

          if (_) {
            _.emit(Te);
          } else {
            Z.emit(Te);
          }
        }

      if (r.touchData.start) {
        (r.touchData.start._private.grabbed = false);
      }

      r.touchData.cxt=false;
      r.touchData.start=null;
      r.redraw();
      return
    }if(!S.touches[2]&&Z.boxSelectionEnabled()&&r.touchData.selecting){
      r.touchData.selecting=false;var fe=Z.collection(r.getAllInBox($[0],$[1],$[2],$[3]));
      $[0]=void 0;
      $[1]=void 0;
      $[2]=void 0;
      $[3]=void 0;
      $[4]=0;
      r.redrawHint("select",true);
      Z.emit(me("boxend"));
      var Pe=function($r){return $r.selectable()&&!$r.selected()};
      fe.emit(me("box")).stdFilter(Pe).select().emit(me("boxselect"));

      if (fe.nonempty()) {
        r.redrawHint("eles",true);
      }

      r.redraw();
    }
    _?.unactivate();

    if (S.touches[2]) {
      r.data.bgActivePosistion=void 0;
      r.redrawHint("select",true);
    } else if(!S.touches[1]){if(!S.touches[0]){if(!S.touches[0]){
      r.data.bgActivePosistion=void 0;
      r.redrawHint("select",true);
      var Be=r.dragData.touchDragEles;if(_!=null){
        var je=_._private.grabbed;
        p(Be);
        r.redrawHint("drag",true);
        r.redrawHint("eles",true);

        if (je) {
          _.emit(me("freeon"));
          Be.emit(me("free"));
          r.dragData.didDrag&&(_.emit(me("dragfreeon")),Be.emit(me("dragfree")));
        }

        n(_,["touchend","tapend","vmouseup","tapdragout"],S,{x:ee[0],y:ee[1]});
        _.unactivate();
        r.touchData.start=null;
      }else{var Ke=r.findNearestElement(ee[0],ee[1],true,true);n(Ke,["touchend","tapend","vmouseup","tapdragout"],S,{x:ee[0],y:ee[1]})}
      var mr=r.touchData.startPosition[0]-ee[0];
      var Ye=mr*mr;
      var ir=r.touchData.startPosition[1]-ee[1];
      var er=ir*ir;
      var lr=Ye+er;
      var jr=lr*oe*oe;

      if (!r.touchData.singleTouchMoved) {
        _||Z.$(":selected").unselect(["tapunselect"]);
        n(_,["tap","vclick"],S,{x:ee[0],y:ee[1]});
        de=false;

        S.timeStamp-Ee<=Z.multiClickDebounceTime()?(he&&clearTimeout(he),de=true,Ee=null,n(_,["dbltap","vdblclick"],S,{x:ee[0],y:ee[1]})):(he=setTimeout(function(){
          if (!de) {
            n(_,["onetap","voneclick"],S,{x:ee[0],y:ee[1]});
          }
        },Z.multiClickDebounceTime()),Ee=S.timeStamp);
      }

      if (_!=null&&!r.dragData.didDrag&&_._private.selectable&&jr<r.touchTapThreshold2&&!r.pinching) {
        Z.selectionType()==="single"?(Z.$(t).unmerge(_).unselect(["tapunselect"]),_.select(["tapselect"])):_.selected()?_.unselect(["tapunselect"]):_.select(["tapselect"]);
        r.redrawHint("eles",true);
      }

      r.touchData.singleTouchMoved=true;
    }}}

    for (var Ze=0; Ze<ee.length; Ze++) {
      ve[Ze]=ee[Ze];
    }
    r.dragData.didDrag=false;

    if (S.touches.length===0) {
      r.touchData.dragDelta=[];
      r.touchData.startPosition=[null,null,null,null,null,null];
      r.touchData.startGPosition=null;
      r.touchData.didSelect=false;
    }

    if (S.touches.length<2) {
      S.touches.length===1&&(r.touchData.startGPosition=[S.touches[0].clientX,S.touches[0].clientY]);
      r.pinching=false;
      r.redrawHint("eles",true);
      r.redraw();
    }
  },false);

  if (typeof TouchEvent === "undefined") {
    var pe=[];
    var Se=function(S){return{clientX:S.clientX,clientY:S.clientY,force:1,identifier:S.pointerId,pageX:S.pageX,pageY:S.pageY,radiusX:S.width/2,radiusY:S.height/2,screenX:S.screenX,screenY:S.screenY,target:S.target}};
    var Re=function(S){return{event:S,touch:Se(S)}};
    var Oe=function(S){pe.push(Re(S))};
    var Ne=function(S){for(var _=0;_<pe.length;_++){var W=pe[_];if(W.event.pointerId===S.pointerId){pe.splice(_,1);return}}};

    var ze=function(S){
      var _=pe.filter(function(W){return W.event.pointerId===S.pointerId})[0];
      _.event=S;
      _.touch=Se(S);
    };

    var xe=function(S){S.touches=pe.map(function(_){return _.touch})};
    var ue=function(S){return S.pointerType==="mouse"||S.pointerType===4};
    r.registerBinding(r.container,"pointerdown",function(X){
      if (!ue(X)) {
        X.preventDefault();
        Oe(X);
        xe(X);
        Ce(X);
      }
    });
    r.registerBinding(r.container,"pointerup",function(X){
      if (!ue(X)) {
        Ne(X);
        xe(X);
        ie(X);
      }
    });
    r.registerBinding(r.container,"pointercancel",function(X){
      if (!ue(X)) {
        Ne(X);
        xe(X);
        ye(X);
      }
    });
    r.registerBinding(r.container,"pointermove",function(X){
      if (!ue(X)) {
        X.preventDefault();
        ze(X);
        xe(X);
        we(X);
      }
    });
  }
};var Qr={};Qr.generatePolygon=function(r,e){return this.nodeShapes[r]={renderer:this,name:r,points:e,draw:function(a,n,i,s,o,l){this.renderer.nodeShapeImpl("polygon",a,n,i,s,o,this.points)},intersectLine:function(a,n,i,s,o,l,u,v){return Da(o,l,this.points,a,n,i/2,s/2,u)},checkPoint:function(a,n,i,s,o,l,u,v){return Zr(a,n,this.points,l,u,s,o,[0,-1],i)},hasMiterBounds:r!=="rectangle",miterBounds:function(a,n,i,s,o,l){return Ad(this.points,a,n,i,s,o)}}};Qr.generateEllipse=function(){return this.nodeShapes.ellipse={renderer:this,name:"ellipse",draw:function(e,t,a,n,i,s){this.renderer.nodeShapeImpl(this.name,e,t,a,n,i)},intersectLine:function(e,t,a,n,i,s,o,l){return Fd(i,s,e,t,a/2+o,n/2+o)},checkPoint:function(e,t,a,n,i,s,o,l){return kt(e,t,n,i,s,o,a)}}};Qr.generateRoundPolygon=function(r,e){return this.nodeShapes[r]={renderer:this,name:r,points:e,getOrCreateCorners:function(a,n,i,s,o,l,u){
  if (l[u]!==void 0&&l[u+"-cx"]===a&&l[u+"-cy"]===n) {
    return l[u];
  }
  l[u]=new Array(e.length/2);
  l[u+"-cx"]=a;
  l[u+"-cy"]=n;
  var v=i/2;
  var f=s/2;
  o=o==="auto"?Ev(i,s):o;
  var c=new Array(e.length/2);
  for (var h=0; h<e.length/2; h++) {
    c[h]={x:a+v*e[h*2],y:n+f*e[h*2+1]};
  }
  var d;
  var y;
  var g;
  var p;
  var m=c.length;
  y=c[m-1];

  for (d=0; d<m; d++) {
    g=c[d%m];
    p=c[(d+1)%m];
    l[u][d]=po(y,g,p,o);
    y=g;
    g=p;
  }

  return l[u]
},draw:function(a,n,i,s,o,l,u){this.renderer.nodeShapeImpl("round-polygon",a,n,i,s,o,this.points,this.getOrCreateCorners(n,i,s,o,l,u,"drawCorners"))},intersectLine:function(a,n,i,s,o,l,u,v,f){return qd(o,l,this.points,a,n,i,s,u,this.getOrCreateCorners(a,n,i,s,v,f,"corners"))},checkPoint:function(a,n,i,s,o,l,u,v,f){return zd(a,n,this.points,l,u,s,o,this.getOrCreateCorners(l,u,s,o,v,f,"corners"))}};};Qr.generateRoundRectangle=function(){return this.nodeShapes["round-rectangle"]=this.nodeShapes.roundrectangle={renderer:this,name:"round-rectangle",points:br(4,0),draw:function(e,t,a,n,i,s){this.renderer.nodeShapeImpl(this.name,e,t,a,n,i,this.points,s)},intersectLine:function(e,t,a,n,i,s,o,l){return wv(i,s,e,t,a,n,o,l)},checkPoint:function(e,t,a,n,i,s,o,l){
  var u=n/2;
  var v=i/2;
  l=l==="auto"?vt(n,i):l;
  l=Math.min(u,v,l);
  var f=l*2;return!!(Zr(e,t,this.points,s,o,n,i-f,[0,-1],a)||Zr(e,t,this.points,s,o,n-f,i,[0,-1],a)||kt(e,t,f,f,s-u+l,o-v+l,a)||kt(e,t,f,f,s+u-l,o-v+l,a)||kt(e,t,f,f,s+u-l,o+v-l,a)||kt(e,t,f,f,s-u+l,o+v-l,a))
}};};Qr.generateCutRectangle=function(){return this.nodeShapes["cut-rectangle"]=this.nodeShapes.cutrectangle={renderer:this,name:"cut-rectangle",cornerLength:no(),points:br(4,0),draw:function(e,t,a,n,i,s){this.renderer.nodeShapeImpl(this.name,e,t,a,n,i,null,s)},generateCutTrianglePts:function(e,t,a,n,i){
  var s=i==="auto"?this.cornerLength:i;
  var o=t/2;
  var l=e/2;
  var u=a-l;
  var v=a+l;
  var f=n-o;
  var c=n+o;
  return{topLeft:[u,f+s,u+s,f,u+s,f+s],topRight:[v-s,f,v,f+s,v-s,f+s],bottomRight:[v,c-s,v-s,c,v-s,c-s],bottomLeft:[u+s,c,u,c-s,u+s,c-s]}
},intersectLine:function(e,t,a,n,i,s,o,l){
  var u=this.generateCutTrianglePts(a+2*o,n+2*o,e,t,l);
  var v=Array.prototype.concat.apply(
    [],
    [u.topLeft.splice(0,4),u.topRight.splice(0,4),u.bottomRight.splice(0,4),u.bottomLeft.splice(0,4)]
  );
  return Da(i,s,v,e,t)
},checkPoint:function(e,t,a,n,i,s,o,l){var u=l==="auto"?this.cornerLength:l;if (Zr(e,t,this.points,s,o,n,i-2*u,[0,-1],a)||Zr(e,t,this.points,s,o,n-2*u,i,[0,-1],a)) {
  return true;
}var v=this.generateCutTrianglePts(n,i,s,o);return Sr(e,t,v.topLeft)||Sr(e,t,v.topRight)||Sr(e,t,v.bottomRight)||Sr(e,t,v.bottomLeft)}};};Qr.generateBarrel=function(){return this.nodeShapes.barrel={renderer:this,name:"barrel",points:br(4,0),draw:function(e,t,a,n,i,s){this.renderer.nodeShapeImpl(this.name,e,t,a,n,i)},intersectLine:function(e,t,a,n,i,s,o,l){
  var u=0.15/* .15 */;
  var v=0.5/* .5 */;
  var f=0.85/* .85 */;
  var c=this.generateBarrelBezierPts(a+2*o,n+2*o,e,t);

  var h=function(g){
    var p=Kt({x:g[0],y:g[1]},{x:g[2],y:g[3]},{x:g[4],y:g[5]},u);
    var m=Kt({x:g[0],y:g[1]},{x:g[2],y:g[3]},{x:g[4],y:g[5]},v);
    var b=Kt({x:g[0],y:g[1]},{x:g[2],y:g[3]},{x:g[4],y:g[5]},f);
    return[g[0],g[1],p.x,p.y,m.x,m.y,b.x,b.y,g[4],g[5]]
  };

  var d=[].concat(h(c.topLeft),h(c.topRight),h(c.bottomRight),h(c.bottomLeft));
  return Da(i,s,d,e,t)
},generateBarrelBezierPts:function(e,t,a,n){
  var i=t/2;
  var s=e/2;
  var o=a-s;
  var l=a+s;
  var u=n-i;
  var v=n+i;
  var f=As(e,t);
  var c=f.heightOffset;
  var h=f.widthOffset;
  var d=f.ctrlPtOffsetPct*e;
  var y={topLeft:[o,u+c,o+d,u,o+h,u],topRight:[l-h,u,l-d,u,l,u+c],bottomRight:[l,v-c,l-d,v,l-h,v],bottomLeft:[o+h,v,o+d,v,o,v-c]};
  y.topLeft.isTop=true;
  y.topRight.isTop=true;
  y.bottomLeft.isBottom=true;
  y.bottomRight.isBottom=true;
  return y;
},checkPoint:function(e,t,a,n,i,s,o,l){
  var u=As(n,i);
  var v=u.heightOffset;
  var f=u.widthOffset;
  if (Zr(e,t,this.points,s,o,n,i-2*v,[0,-1],a)||Zr(e,t,this.points,s,o,n-2*f,i,[0,-1],a)) {
    return true;
  }
  var c=this.generateBarrelBezierPts(n,i,s,o);

  var h=function(T,k,D){
    var B=D[4];
    var P=D[2];
    var A=D[0];
    var R=D[5];
    var L=D[1];
    var I=Math.min(B,A);
    var M=Math.max(B,A);
    var O=Math.min(R,L);
    var V=Math.max(R,L);
    if(I<=T&&T<=M&&O<=k&&k<=V){
      var G=_d(B,P,A);
      var N=Ld(G[0],G[1],G[2],T);
      var F=N.filter(function(U){return U >= 0&&U<=1;});
      if (F.length>0) {
        return F[0]
      }
    }return null
  };

  for(var d=Object.keys(c), y=0;y<d.length;y++){
    var g=d[y];
    var p=c[g];
    var m=h(e,t,p);
    if(m!=null){
      var b=p[5];
      var w=p[3];
      var E=p[1];
      var C=sr(b,w,E,m);
      if (p.isTop&&C<=t||p.isBottom&&t<=C) {
        return true;
      }
    }
  }return false;
}};};Qr.generateBottomRoundrectangle=function(){return this.nodeShapes["bottom-round-rectangle"]=this.nodeShapes.bottomroundrectangle={renderer:this,name:"bottom-round-rectangle",points:br(4,0),draw:function(e,t,a,n,i,s){this.renderer.nodeShapeImpl(this.name,e,t,a,n,i,this.points,s)},intersectLine:function(e,t,a,n,i,s,o,l){
  var u=e-(a/2+o);
  var v=t-(n/2+o);
  var f=v;
  var c=e+(a/2+o);
  var h=it(i,s,e,t,u,v,c,f,false);
  return h.length>0?h:wv(i,s,e,t,a,n,o,l)
},checkPoint:function(e,t,a,n,i,s,o,l){
  l=l==="auto"?vt(n,i):l;var u=2*l;if (Zr(e,t,this.points,s,o,n,i-u,[0,-1],a)||Zr(e,t,this.points,s,o,n-u,i,[0,-1],a)) {
    return true;
  }
  var v=n/2+2*a;
  var f=i/2+2*a;
  var c=[s-v,o-f,s-v,o,s+v,o,s+v,o-f];
  return!!(Sr(e,t,c)||kt(e,t,u,u,s+n/2-l,o+i/2-l,a)||kt(e,t,u,u,s-n/2+l,o+i/2-l,a))
}};};Qr.registerNodeShapes=function(){
  var r=this.nodeShapes={};
  var e=this;
  this.generateEllipse();
  this.generatePolygon("triangle",br(3,0));
  this.generateRoundPolygon("round-triangle",br(3,0));
  this.generatePolygon("rectangle",br(4,0));
  r.square=r.rectangle;
  this.generateRoundRectangle();
  this.generateCutRectangle();
  this.generateBarrel();
  this.generateBottomRoundrectangle();
  {
    var t=[0,1,1,0,0,-1,-1,0];
    this.generatePolygon("diamond",t);
    this.generateRoundPolygon("round-diamond",t);
  }
  this.generatePolygon("pentagon",br(5,0));
  this.generateRoundPolygon("round-pentagon",br(5,0));
  this.generatePolygon("hexagon",br(6,0));
  this.generateRoundPolygon("round-hexagon",br(6,0));
  this.generatePolygon("heptagon",br(7,0));
  this.generateRoundPolygon("round-heptagon",br(7,0));
  this.generatePolygon("octagon",br(8,0));
  this.generateRoundPolygon("round-octagon",br(8,0));
  var a=new Array(20);{
    var n=Ps(5,0);
    var i=Ps(5,Math.PI/5);
    var s=0.5/* .5 */*(3-Math.sqrt(5));
    s*=1.57;for (var o=0; o<i.length/2; o++) {
      i[o*2]*=s;
      i[o*2+1]*=s;
    }for (var o=0; o<20/4; o++) {
      a[o*4]=n[o*2];
      a[o*4+1]=n[o*2+1];
      a[o*4+2]=i[o*2];
      a[o*4+3]=i[o*2+1];
    }
  }
  a=xv(a);
  this.generatePolygon("star",a);
  this.generatePolygon("vee",[-1,-1,0,-0.333/* -.333 */,1,-1,0,1]);
  this.generatePolygon("rhomboid",[-1,-1,0.333/* .333 */,-1,1,1,-0.333/* -.333 */,1]);
  this.generatePolygon("right-rhomboid",[-0.333/* -.333 */,-1,1,-1,0.333/* .333 */,1,-1,1]);
  this.nodeShapes.concavehexagon=this.generatePolygon("concave-hexagon",[-1,-0.95/* -.95 */,-0.75/* -.75 */,0,-1,0.95/* .95 */,1,0.95/* .95 */,0.75/* .75 */,0,1,-0.95/* -.95 */]);
  {
    var l=[-1,-1,0.25/* .25 */,-1,1,0,0.25/* .25 */,1,-1,1];
    this.generatePolygon("tag",l);
    this.generateRoundPolygon("round-tag",l);
  }r.makePolygon=function(u){
    var v=u.join("$");
    var f="polygon-"+v;
    var c;
    return(c=this[f])?c:e.generatePolygon(f,u)
  }
};var Ha={};Ha.timeToRender=function(){return this.redrawTotalTime/this.redrawCount};Ha.redraw=function(r){
  r=r||pv();var e=this;

  if (e.averageRedrawTime===void 0) {
    (e.averageRedrawTime = 0);
  }

  if (e.lastRedrawTime===void 0) {
    (e.lastRedrawTime = 0);
  }

  if (e.lastDrawTime===void 0) {
    (e.lastDrawTime = 0);
  }

  e.requestedFrame=true;
  e.renderOptions=r;
};Ha.beforeRender=function(r,e){if(!this.destroyed){
  if (e==null) {
    $e("Priority is not optional for beforeRender");
  }

  var t=this.beforeRenderCallbacks;
  t.push({fn:r,priority:e});
  t.sort(function(a,n){return n.priority-a.priority});
}};var Ol=function(e,t,a){for (var n=e.beforeRenderCallbacks,i=0; i<n.length; i++) {
  n[i].fn(t,a)
}};Ha.startRenderLoop=function(){
  var r=this;
  var e=r.cy;
  if(!r.renderLoopStarted){r.renderLoopStarted=true;var t=function(n){if(!r.destroyed){
    if (!e.batching()) {
      if (r.requestedFrame&&!r.skipFrame) {
        Ol(r,true,n);var i=Yr();r.render(r.renderOptions);var s=r.lastDrawTime=Yr();

        if (r.averageRedrawTime===void 0) {
          (r.averageRedrawTime = s-i);
        }

        if (r.redrawCount===void 0) {
          (r.redrawCount = 0);
        }

        r.redrawCount++;

        if (r.redrawTotalTime===void 0) {
          (r.redrawTotalTime = 0);
        }

        var o=s-i;
        r.redrawTotalTime+=o;
        r.lastRedrawTime=o;
        r.averageRedrawTime=r.averageRedrawTime/2+o/2;
        r.requestedFrame=false;
      } else {
        Ol(r,false,n);
      }
    }
    r.skipFrame=false;
    wn(t);
  }};wn(t)}
};
var ay=function(e){this.init(e)};
var Cf=ay;
var sa=Cf.prototype;
sa.clientFunctions=["redrawHint","render","renderTo","matchCanvasSize","nodeShapeImpl","arrowShapeImpl"];sa.init=function(r){
  var e=this;
  e.options=r;
  e.cy=r.cy;
  var t=e.container=r.cy.container();
  var a=e.cy.window();
  if(a){
    var n=a.document;
    var i=n.head;
    var s="__________cytoscape_stylesheet";
    var o="__________cytoscape_container";
    var l=n.getElementById(s)!=null;

    if (t.className.indexOf(o)<0) {
      (t.className = (t.className||"")+" "+o);
    }

    if (!l) {
      var u=n.createElement("style");
      u.id=s;
      u.textContent="."+o+" { position: relative; }";
      i.insertBefore(u,i.children[0]);
    }

    var v=a.getComputedStyle(t);
    var f=v.getPropertyValue("position");

    if (f==="static") {
      Ve("A Cytoscape container has style position:static and so can not use UI extensions properly");
    }
  }
  e.selection=[void 0,void 0,void 0,void 0,0];
  e.bezierProjPcts=[0.05/* .05 */,0.225/* .225 */,0.4/* .4 */,0.5/* .5 */,0.6/* .6 */,0.775/* .775 */,0.95/* .95 */];
  e.hoverData={down:null,last:null,downTime:null,triggerMode:null,dragging:false,initialPan:[null,null],capture:false};
  e.dragData={possibleDragElements:[]};
  e.touchData={start:null,capture:false,startPosition:[null,null,null,null,null,null],singleTouchStartTime:null,singleTouchMoved:true,now:[null,null,null,null,null,null],earlier:[null,null,null,null,null,null]};
  e.redraws=0;
  e.showFps=r.showFps;
  e.debug=r.debug;
  e.webgl=r.webgl;
  e.hideEdgesOnViewport=r.hideEdgesOnViewport;
  e.textureOnViewport=r.textureOnViewport;
  e.wheelSensitivity=r.wheelSensitivity;
  e.motionBlurEnabled=r.motionBlur;
  e.forcedPixelRatio=ae(r.pixelRatio)?r.pixelRatio:null;
  e.motionBlur=r.motionBlur;
  e.motionBlurOpacity=r.motionBlurOpacity;
  e.motionBlurTransparency=1-e.motionBlurOpacity;
  e.motionBlurPxRatio=1;
  e.mbPxRBlurry=1;
  e.minMbLowQualFrames=4;
  e.fullQualityMb=false;
  e.clearedForMotionBlur=[];
  e.desktopTapThreshold=r.desktopTapThreshold;
  e.desktopTapThreshold2=r.desktopTapThreshold*r.desktopTapThreshold;
  e.touchTapThreshold=r.touchTapThreshold;
  e.touchTapThreshold2=r.touchTapThreshold*r.touchTapThreshold;
  e.tapholdDuration=500;
  e.bindings=[];
  e.beforeRenderCallbacks=[];
  e.beforeRenderPriorities={animations:400,eleCalcs:300,eleTxrDeq:200,lyrTxrDeq:150,lyrTxrSkip:100};
  e.registerNodeShapes();
  e.registerArrowShapes();
  e.registerCalculationListeners();
};sa.notify=function(r,e){
  var t=this;
  var a=t.cy;
  if(!this.destroyed){
    if(r==="init"){t.load();return}if(r==="destroy"){t.destroy();return}

    if ((r==="add"||r==="remove"||r==="move"&&a.hasCompoundNodes()||r==="load"||r==="zorder" || r==="mount")) {
      t.invalidateCachedZSortedEles();
    }

    if (r==="viewport") {
      t.redrawHint("select",true);
    }

    if (r==="gc") {
      t.redrawHint("gc",true);
    }

    if ((r==="load"||r==="resize" || r==="mount")) {
      t.invalidateContainerClientCoordsCache();
      t.matchCanvasSize(t.container);
    }

    t.redrawHint("eles",true);
    t.redrawHint("drag",true);
    this.startRenderLoop();
    this.redraw();
  }
};sa.destroy=function(){
  var r=this;
  r.destroyed=true;
  r.cy.stopAnimationLoop();
  for(var e=0;e<r.bindings.length;e++){
    var t=r.bindings[e];
    var a=t;
    var n=a.target;
    (n.off||n.removeEventListener).apply(n,a.args)
  }
  r.bindings=[];
  r.beforeRenderCallbacks=[];
  r.onUpdateEleCalcsFns=[];

  if (r.removeObserver) {
    r.removeObserver.disconnect();
  }

  if (r.styleObserver) {
    r.styleObserver.disconnect();
  }

  if (r.resizeObserver) {
    r.resizeObserver.disconnect();
  }

  if (r.labelCalcDiv) {
    try{document.body.removeChild(r.labelCalcDiv)}catch{}
  }
};sa.isHeadless=function(){return false;};[go,xf,Ef,ia,Qr,Ha].forEach(function(r){be(sa,r)});
var ws=1000/* 1e3 *//60;

var Tf={setupDequeueing:function(e){return function(){
  var a=this;
  var n=this.renderer;
  if(!a.dequeueingSetup){
    a.dequeueingSetup=true;

    var i=Fa(function(){
      n.redrawHint("eles",true);
      n.redrawHint("drag",true);
      n.redraw();
    },e.deqRedrawThreshold);

    var s=function(u,v){
      var f=Yr();
      var c=n.averageRedrawTime;
      var h=n.lastRedrawTime;
      var d=[];
      var y=n.cy.extent();
      var g=n.getPixelRatio();
      for(u||n.flushRenderedStyleQueue();;){
        var p=Yr();
        var m=p-f;
        var b=p-v;
        if(h<ws){var w=ws-(u?c:0);if (b>=e.deqFastCost*w) {
          break
        }}else if(u){if (m>=e.deqCost*h||m>=e.deqAvgCost*c) {
          break
        }}else if (b>=e.deqNoDrawCost*ws) {
          break;
        }var E=e.deq(a,g,y);if (E.length>0) {
          for (var C=0; C<E.length; C++) {
            d.push(E[C]);
          }
        } else {
          break
        }
      }

      if (d.length>0) {
        e.onDeqd(a,d);
        !u&&e.shouldRedraw(a,d,g,y)&&i();
      }
    };

    var o=e.priority||js;
    n.beforeRender(s,o(a))
  }
};}};

var ny=(function(){function r(e, t = xn) {
  ht(this,r);
  this.idsByKey=new Xr;
  this.keyForId=new Xr;
  this.cachesByLvl=new Xr;
  this.lvls=[];
  this.getKey=e;
  this.doesEleInvalidateKey=t;
}return gt(r,[{key:"getIdsFor",value:function(t){
  if (t==null) {
    $e("Can not get id list for null key");
  }

  var a=this.idsByKey;
  var n=this.idsByKey.get(t);

  if (!n) {
    n=new ra;
    a.set(t,n);
  }

  return n;
}},{key:"addIdForKey",value:function(t,a){
  if (t!=null) {
    this.getIdsFor(t).add(a);
  }
}},{key:"deleteIdForKey",value:function(t,a){
  if (t!=null) {
    this.getIdsFor(t).delete(a);
  }
}},{key:"getNumberOfIdsForKey",value:function(t){return t==null?0:this.getIdsFor(t).size}},{key:"updateKeyMappingFor",value:function(t){
  var a=t.id();
  var n=this.keyForId.get(a);
  var i=this.getKey(t);
  this.deleteIdForKey(n,a);
  this.addIdForKey(i,a);
  this.keyForId.set(a,i);
}},{key:"deleteKeyMappingFor",value:function(t){
  var a=t.id();
  var n=this.keyForId.get(a);
  this.deleteIdForKey(n,a);
  this.keyForId.delete(a);
}},{key:"keyHasChangedFor",value:function(t){
  var a=t.id();
  var n=this.keyForId.get(a);
  var i=this.getKey(t);
  return n!==i
}},{key:"isInvalid",value:function(t){return this.keyHasChangedFor(t)||this.doesEleInvalidateKey(t)}},{key:"getCachesAt",value:function(t){
  var a=this.cachesByLvl;
  var n=this.lvls;
  var i=a.get(t);

  if (!i) {
    i=new Xr;
    a.set(t,i);
    n.push(t);
  }

  return i;
}},{key:"getCache",value:function(t,a){return this.getCachesAt(a).get(t)}},{key:"get",value:function(t,a){
  var n=this.getKey(t);
  var i=this.getCache(n,a);

  if (i!=null) {
    this.updateKeyMappingFor(t);
  }

  return i;
}},{key:"getForCachedKey",value:function(t,a){
  var n=this.keyForId.get(t.id());
  var i=this.getCache(n,a);
  return i
}},{key:"hasCache",value:function(t,a){return this.getCachesAt(a).has(t)}},{key:"has",value:function(t,a){var n=this.getKey(t);return this.hasCache(n,a)}},{key:"setCache",value:function(t,a,n){
  n.key=t;
  this.getCachesAt(a).set(t,n);
}},{key:"set",value:function(t,a,n){
  var i=this.getKey(t);
  this.setCache(i,a,n);
  this.updateKeyMappingFor(t);
}},{key:"deleteCache",value:function(t,a){this.getCachesAt(a).delete(t)}},{key:"delete",value:function(t,a){var n=this.getKey(t);this.deleteCache(n,a)}},{key:"invalidateKey",value:function(t){var a=this;this.lvls.forEach(function(n){return a.deleteCache(t,n)})}},{key:"invalidate",value:function(t){
  var a=t.id();
  var n=this.keyForId.get(a);
  this.deleteKeyMappingFor(t);var i=this.doesEleInvalidateKey(t);

  if (i) {
    this.invalidateKey(n);
  }

  return i||this.getNumberOfIdsForKey(n)===0;
}}]);})();

var Nl=25;
var nn=50;
var pn=-4;
var Hs=3;
var Sf=7.99;
var iy=8;
var sy=1024;
var oy=1024;
var uy=1024;
var ly=0.2/* .2 */;
var vy=0.8/* .8 */;
var fy=10;
var cy=0.15/* .15 */;
var dy=0.1/* .1 */;
var hy=0.9/* .9 */;
var gy=0.9/* .9 */;
var py=100;
var yy=1;
var Ut={dequeue:"dequeue",downscale:"downscale",highQuality:"highQuality"};
var my=cr({getKey:null,doesEleInvalidateKey:xn,drawElement:null,getBoundingBox:null,getRotationPoint:null,getRotationOffset:null,isVisible:dv,allowEdgeTxrCaching:true,allowParentTxrCaching:true});

var ba=function(e,t){
  var a=this;
  a.renderer=e;
  a.onDequeues=[];
  var n=my(t);
  be(a,n);
  a.lookup=new ny(n.getKey,n.doesEleInvalidateKey);
  a.setupDequeueing();
};

var nr=ba.prototype;
nr.reasons=Ut;nr.getTextureQueue=function(r){
  var e=this;
  e.eleImgCaches=e.eleImgCaches||{};
  e.eleImgCaches[r]=e.eleImgCaches[r]||[];
  return e.eleImgCaches[r];
};nr.getRetiredTextureQueue=function(r){
  var e=this;
  var t=e.eleImgCaches.retired=e.eleImgCaches.retired||{};
  var a=t[r]=t[r]||[];
  return a
};nr.getElementQueue=function(){
  var r=this;
  var e=r.eleCacheQueue=r.eleCacheQueue||new Va(function(t,a){return a.reqs-t.reqs});
  return e
};nr.getElementKeyToQueue=function(){
  var r=this;
  var e=r.eleKeyToCacheQueue=r.eleKeyToCacheQueue||{};
  return e
};nr.getElement=function(r,e,t,a,n){
  var i=this;
  var s=this.renderer;
  var o=s.cy.zoom();
  var l=this.lookup;
  if (!e||e.w===0||e.h===0||isNaN(e.w)||isNaN(e.h)||!r.visible()||r.removed()||!i.allowEdgeTxrCaching&&r.isEdge()||!i.allowParentTxrCaching&&r.isParent()) {
    return null;
  }

  if (a==null) {
    (a = Math.ceil(ro(o*t)));
  }

  if (a<pn) {
    a=pn;
  } else if (o>=Sf||a>Hs) {
    return null;
  }

  var u=Math.pow(2,a);
  var v=e.h*u;
  var f=e.w*u;
  var c=s.eleTextBiggerThanMin(r,u);
  if (!this.isVisible(r,c)) {
    return null;
  }var h=l.get(r,a);

  if (h&&h.invalidated) {
    h.invalidated=false;
    h.texture.invalidatedWidth-=h.width;
  }

  if (h) {
    return h;
  }

  var d;

  if (v<=Nl) {
    d=Nl;
  } else if (v<=nn) {
    d=nn;
  } else {
    d=Math.ceil(v/nn)*nn;
  }

  if (v>uy||f>oy) {
    return null;
  }

  var y=i.getTextureQueue(d);
  var g=y[y.length-2];
  var p=function(){return i.recycleTexture(d,f)||i.addTexture(d,f)};

  if (!g) {
    (g = y[y.length-1]);
  }

  if (!g) {
    (g = p());
  }

  if (g.width-g.usedWidth<f) {
    (g = p());
  }

  var m=function(I){return I&&I.scaledLabelShown===c};
  var b=n&&n===Ut.dequeue;
  var w=n&&n===Ut.highQuality;
  var E=n&&n===Ut.downscale;
  var C;
  for(var x=a+1;x<=Hs;x++){var T=l.get(r,x);if(T){C=T;break}}
  var k=C&&C.level===a+1?C:null;
  var D=function(){g.context.drawImage(k.texture.canvas,k.x,0,k.width,k.height,g.usedWidth,0,f,v)};
  g.context.setTransform(1,0,0,1,0,0);
  g.context.clearRect(g.usedWidth,0,f,d);

  if (m(k)) {
    D();
  } else if (m(C)) {
    if (w) {for (var B=C.level; B>a; B--) {
      k=i.getElement(r,e,t,B,Ut.downscale);
    }D()} else {
      i.queueElement(r,C.level-1);
      return C;
    }
  } else {
    var P;if (!b&&!w&&!E) {
      for(var A=a-1;A>=pn;A--){var R=l.get(r,A);if(R){P=R;break}}
    }if (m(P)) {
      i.queueElement(r,a);
      return P;
    }
    g.context.translate(g.usedWidth,0);
    g.context.scale(u,u);
    this.drawElement(g.context,r,e,c,false);
    g.context.scale(1/u,1/u);
    g.context.translate(-g.usedWidth,0);
  }

  h={x:g.usedWidth,texture:g,level:a,scale:u,width:f,height:v,scaledLabelShown:c};
  g.usedWidth+=Math.ceil(f+iy);
  g.eleCaches.push(h);
  l.set(r,a,h);
  i.checkTextureFullness(g);
  return h;
};nr.invalidateElements=function(r){for (var e=0; e<r.length; e++) {
  this.invalidateElement(r[e])
}};nr.invalidateElement=function(r){
  var e=this;
  var t=e.lookup;
  var a=[];
  var n=t.isInvalid(r);
  if(n){for(var i=pn;i<=Hs;i++){
    var s=t.getForCachedKey(r,i);

    if (s) {
      a.push(s);
    }
  }var o=t.invalidate(r);if (o) {
    for(var l=0;l<a.length;l++){
      var u=a[l];
      var v=u.texture;
      v.invalidatedWidth+=u.width;
      u.invalidated=true;
      e.checkTextureUtility(v);
    }
  }e.removeFromQueue(r)}
};nr.checkTextureUtility=function(r){
  if (r.invalidatedWidth>=ly*r.width) {
    this.retireTexture(r);
  }
};nr.checkTextureFullness=function(r){
  var e=this;
  var t=e.getTextureQueue(r.height);

  if (r.usedWidth/r.width>vy&&r.fullnessChecks>=fy) {
    lt(t,r);
  } else {
    r.fullnessChecks++;
  }
};nr.retireTexture=function(r){
  var e=this;
  var t=r.height;
  var a=e.getTextureQueue(t);
  var n=this.lookup;
  lt(a,r);
  r.retired=true;
  for(var i=r.eleCaches,s=0;s<i.length;s++){var o=i[s];n.deleteCache(o.key,o.level)}eo(i);var l=e.getRetiredTextureQueue(t);l.push(r)
};nr.addTexture=function(r,e){
  var t=this;
  var a=t.getTextureQueue(r);
  var n={};
  a.push(n);
  n.eleCaches=[];
  n.height=r;
  n.width=Math.max(sy,e);
  n.usedWidth=0;
  n.invalidatedWidth=0;
  n.fullnessChecks=0;
  n.canvas=t.renderer.makeOffscreenCanvas(n.width,n.height);
  n.context=n.canvas.getContext("2d");
  return n;
};nr.recycleTexture=function(r,e){
  var t=this;
  var a=t.getTextureQueue(r);
  for(var n=t.getRetiredTextureQueue(r), i=0;i<n.length;i++){var s=n[i];if (s.width>=e) {
    s.retired=false;
    s.usedWidth=0;
    s.invalidatedWidth=0;
    s.fullnessChecks=0;
    eo(s.eleCaches);
    s.context.setTransform(1,0,0,1,0,0);
    s.context.clearRect(0,0,s.width,s.height);
    lt(n,s);
    a.push(s);
    return s;
  }}
};nr.queueElement=function(r,e){
  var t=this;
  var a=t.getElementQueue();
  var n=t.getElementKeyToQueue();
  var i=this.getKey(r);
  var s=n[i];
  if (s) {
    s.level=Math.max(s.level,e);
    s.eles.merge(r);
    s.reqs++;
    a.updateItem(s);
  } else {
    var o={eles:r.spawn().merge(r),level:e,reqs:1,key:i};
    a.push(o);
    n[i]=o;
  }
};nr.dequeue=function(r){
  var e=this;
  var a=e.getElementKeyToQueue();
  var n=[];
  var i=e.lookup;
  for(var t=e.getElementQueue(), s=0;s<yy&&t.size()>0;s++){
    var o=t.pop();
    var l=o.key;
    var u=o.eles[0];
    var v=i.hasCache(u,o.level);
    a[l]=null;

    if (v) {
      continue;
    }

    n.push(o);var f=e.getBoundingBox(u);e.getElement(u,f,r,o.level,Ut.dequeue)
  }return n
};nr.removeFromQueue=function(r){
  var e=this;
  var t=e.getElementQueue();
  var a=e.getElementKeyToQueue();
  var n=this.getKey(r);
  var i=a[n];

  if (i!=null) {
    if (i.eles.length===1) {
      i.reqs=Js;
      t.updateItem(i);
      t.pop();
      a[n]=null;
    } else {
      i.eles.unmerge(r);
    }
  }
};nr.onDequeue=function(r){this.onDequeues.push(r)};nr.offDequeue=function(r){lt(this.onDequeues,r)};nr.setupDequeueing=Tf.setupDequeueing({deqRedrawThreshold:py,deqCost:cy,deqAvgCost:dy,deqNoDrawCost:hy,deqFastCost:gy,deq:function(e,t,a){return e.dequeue(t,a)},onDeqd:function(e,t){for(var a=0;a<e.onDequeues.length;a++){var n=e.onDequeues[a];n(t)}},shouldRedraw:function(e,t,a,n){for (var i=0; i<t.length; i++) {
  for(var s=t[i].eles,o=0;o<s.length;o++){var l=s[o].boundingBox();if (ao(l,n)) {
    return true;
  }}
}return false;},priority:function(e){return e.renderer.beforeRenderPriorities.eleTxrDeq}});
var by=1;
var xa=-4;
var Pn=2;
var wy=3.99;
var xy=50;
var Ey=50;
var Cy=0.15/* .15 */;
var Ty=0.1/* .1 */;
var Sy=0.9/* .9 */;
var ky=0.9/* .9 */;
var Dy=1;
var zl=250;
var By=4000/* 4e3 */*4000/* 4e3 */;
var Fl=32767;
var Py=true;

var kf=function(e){
  var t=this;
  var a=t.renderer=e;
  var n=a.cy;
  t.layersByLevel={};
  t.firstGet=true;
  t.lastInvalidationTime=Yr()-2*zl;
  t.skipping=false;
  t.eleTxrDeqs=n.collection();

  t.scheduleElementRefinement=Fa(function(){
    t.refineElementTextures(t.eleTxrDeqs);
    t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
  },Ey);

  a.beforeRender(function(s,o){
    if (o-t.lastInvalidationTime<=zl) {
      t.skipping=true;
    } else {
      t.skipping=false;
    }
  },a.beforeRenderPriorities.lyrTxrSkip);
  var i=function(o,l){return l.reqs-o.reqs};
  t.layersQueue=new Va(i);
  t.setupDequeueing();
};

var dr=kf.prototype;
var Vl=0;
var Ay=Math.pow(2,53)-1;
dr.makeLayer=function(r,e){
  var t=Math.pow(2,e);
  var a=Math.ceil(r.w*t);
  var n=Math.ceil(r.h*t);
  var i=this.renderer.makeOffscreenCanvas(a,n);
  var s={id:Vl=++Vl%Ay,bb:r,level:e,width:a,height:n,canvas:i,context:i.getContext("2d"),eles:[],elesQueue:[],reqs:0};
  var o=s.context;
  var l=-s.bb.x1;
  var u=-s.bb.y1;
  o.scale(t,t);
  o.translate(l,u);
  return s;
};dr.getLayers=function(r,e,t){
  var a=this;
  var n=a.renderer;
  var i=n.cy;
  var s=i.zoom();
  var o=a.firstGet;
  a.firstGet=false;

  if (t==null) {
    t=Math.ceil(ro(s*e));

    if (t<xa) {
      t=xa;
    } else if (s>=wy||t>Pn) {
      return null
    }
  }

  a.validateLayersElesOrdering(t,r);
  var l=a.layersByLevel;
  var u=Math.pow(2,t);
  var v=l[t]=l[t]||[];
  var f;
  var c=a.levelIsComplete(t,r);
  var h;

  var d=function(){
    var D=function(L){
      a.validateLayersElesOrdering(L,r);

      if (a.levelIsComplete(L,r)) {
        h=l[L];
        return true;
      }
    };

    var B=function(L){if (!h) {
      for (var I=t+L; xa<=I&&I<=Pn&&!D(I); I+=L)
        {}
    }};

    B(1);
    B(-1);
    for(var P=v.length-1;P>=0;P--){
      var A=v[P];

      if (A.invalid) {
        lt(v,A);
      }
    }
  };

  if (!c) {
    d();
  } else {
    return v;
  }

  var y=function(){if(!f){f=wr();for (var D=0; D<r.length; D++) {
    Dd(f,r[D].boundingBox())
  }}return f};

  var g=function(D){
    D=D||{};var B=D.after;y();
    var P=Math.ceil(f.w*u);
    var A=Math.ceil(f.h*u);
    if (P>Fl||A>Fl) {
      return null;
    }var R=P*A;if (R>By) {
      return null;
    }var L=a.makeLayer(f,t);if (B!=null)
      {var I=v.indexOf(B)+1;v.splice(I,0,L)} else {
    if ((D.insert===void 0 || D.insert)) {
      v.unshift(L);
    }
  }return L
  };

  if (a.skipping&&!o) {
    return null;
  }
  var p=null;
  var m=r.length/by;
  var b=!o;
  for(var w=0;w<r.length;w++){
    var E=r[w];
    var C=E._private.rscratch;
    var x=C.imgLayerCaches=C.imgLayerCaches||{};
    var T=x[t];
    if(T){p=T;continue}if ((!p||p.eles.length>=m||!bv(p.bb,E.boundingBox()))&&(p=g({insert:true,after:p}),!p)) {
        return null;
      }

    if (h||b) {
      a.queueLayer(p,E);
    } else {
      a.drawEleInLayer(p,E,t,e);
    }

    p.eles.push(E);
    x[t]=p;
  }return h||(b?null:v)
};dr.getEleLevelForLayerLevel=function(r,e){return r};dr.drawEleInLayer=function(r,e,t,a){
  var n=this;
  var i=this.renderer;
  var s=r.context;
  var o=e.boundingBox();

  if (o.w !== 0 && o.h !== 0 && e.visible()) {
    t=n.getEleLevelForLayerLevel(t,a);
    i.setImgSmoothing(s,false);
    i.drawCachedElement(s,e,null,null,t,Py);
    i.setImgSmoothing(s,true);
  }
};dr.levelIsComplete=function(r,e){
  var t=this;
  var a=t.layersByLevel[r];
  if (!a||a.length===0) {
    return false;
  }
  var n=0;
  for(var i=0;i<a.length;i++){var s=a[i];if (s.reqs>0||s.invalid) {
    return false;
  }n+=s.eles.length}return n===e.length
};dr.validateLayersElesOrdering=function(r,e){var t=this.layersByLevel[r];if (t) {
  for(var a=0;a<t.length;a++){
    var n=t[a];
    var i=-1;
    for (var s=0; s<e.length; s++) {
      if(n.eles[0]===e[s]){i=s;break}
    }if(i<0){this.invalidateLayer(n);continue}
    var o=i;
    for (var s=0; s<n.eles.length; s++) {
      if(n.eles[s]!==e[o+s]){this.invalidateLayer(n);break}
    }
  }
}};dr.updateElementsInLayers=function(r,e){
  var t=this;
  var a=Ia(r[0]);
  for (var n=0; n<r.length; n++) {
    var i=a?null:r[n];
    var s=a?r[n]:r[n].ele;
    var o=s._private.rscratch;
    var l=o.imgLayerCaches=o.imgLayerCaches||{};
    for(var u=xa;u<=Pn;u++){
      var v=l[u];

      if (v) {
        if (!i || t.getEleLevelForLayerLevel(v.level) === i.level) {
          e(v,s,i);
        }
      }
    }
  }
};dr.haveLayers=function(){
  var r=this;
  var e=false;
  for(var t=xa;t<=Pn;t++){var a=r.layersByLevel[t];if(a&&a.length>0){e=true;break}}return e
};dr.invalidateElements=function(r){
  var e=this;

  if (r.length!==0) {
    e.lastInvalidationTime=Yr();
    !(r.length===0||!e.haveLayers())&&e.updateElementsInLayers(r,function(a,n,i){e.invalidateLayer(a)});
  }
};dr.invalidateLayer=function(r){
  this.lastInvalidationTime=Yr();

  if (!r.invalid) {
    var e=r.level;
    var t=r.eles;
    var a=this.layersByLevel[e];
    lt(a,r);
    r.elesQueue=[];
    r.invalid=true;

    if (r.replacement) {
      (r.replacement.invalid = true);
    }

    for(var n=0;n<t.length;n++){
      var i=t[n]._private.rscratch.imgLayerCaches;

      if (i) {
        (i[e] = null);
      }
    }
  }
};dr.refineElementTextures=function(r){var e=this;e.updateElementsInLayers(r,function(a,n,i){
  var s=a.replacement;

  if (!s) {
    s=a.replacement=e.makeLayer(a.bb,a.level);
    s.replaces=a;
    s.eles=a.eles;
  }

  if (!s.reqs) {
    for (var o=0; o<s.eles.length; o++) {
      e.queueLayer(s,s.eles[o])
    }
  }
})};dr.enqueueElementRefinement=function(r){
  this.eleTxrDeqs.merge(r);
  this.scheduleElementRefinement();
};dr.queueLayer=function(r,e){
  var t=this;
  var a=t.layersQueue;
  var n=r.elesQueue;
  var i=n.hasId=n.hasId||{};
  if(!r.replacement){
    if(e){
      if (i[e.id()]) {
        return;
      }
      n.push(e);
      i[e.id()]=true;
    }

    if (r.reqs) {
      r.reqs++;
      a.updateItem(r);
    } else {
      r.reqs=1;
      a.push(r);
    }
  }
};dr.dequeue=function(r){
  var e=this;
  var a=[];
  for(var t=e.layersQueue, n=0;n<Dy&&t.size()!==0;){
    var i=t.peek();if(i.replacement){t.pop();continue}if(i.replaces&&i!==i.replaces.replacement){t.pop();continue}if(i.invalid){t.pop();continue}var s=i.elesQueue.shift();

    if (s) {
      e.drawEleInLayer(i,s,i.level,r);
      n++;
    }

    if (a.length===0) {
      a.push(true);
    }

    if (i.elesQueue.length===0) {
      t.pop();
      i.reqs=0;
      i.replaces&&e.applyLayerReplacement(i);
      e.requestRedraw();
    }
  }return a
};dr.applyLayerReplacement=function(r){
  var e=this;
  var t=e.layersByLevel[r.level];
  var a=r.replaces;
  var n=t.indexOf(a);
  if(!(n<0||a.invalid)){t[n]=r;for(var i=0;i<r.eles.length;i++){
    var s=r.eles[i]._private;
    var o=s.imgLayerCaches=s.imgLayerCaches||{};

    if (o) {
      (o[r.level] = r);
    }
  }e.requestRedraw()}
};dr.requestRedraw=Fa(function(){
  var r=this.renderer;
  r.redrawHint("eles",true);
  r.redrawHint("drag",true);
  r.redraw();
},100);dr.setupDequeueing=Tf.setupDequeueing({deqRedrawThreshold:xy,deqCost:Cy,deqAvgCost:Ty,deqNoDrawCost:Sy,deqFastCost:ky,deq:function(e,t){return e.dequeue(t)},onDeqd:js,shouldRedraw:dv,priority:function(e){return e.renderer.beforeRenderPriorities.lyrTxrDeq}});
var Df={};
var ql;
function Ry(r,e){for(var t=0;t<e.length;t++){var a=e[t];r.lineTo(a.x,a.y)}}function My(r,e,t){
  var a;
  for(var n=0;n<e.length;n++){
    var i=e[n];

    if (n===0) {
      (a = i);
    }

    r.lineTo(i.x,i.y);
  }r.quadraticCurveTo(t.x,t.y,a.x,a.y)
}function _l(r,e,t){
  if (r.beginPath) {
    r.beginPath();
  }

  for(var a=e,n=0;n<a.length;n++){var i=a[n];r.lineTo(i.x,i.y)}
  var s=t;
  var o=t[0];
  r.moveTo(o.x,o.y);for(var n=1;n<s.length;n++){var i=s[n];r.lineTo(i.x,i.y)}

  if (r.closePath) {
    r.closePath();
  }
}function Ly(r,e,t,a,n){
  if (r.beginPath) {
    r.beginPath();
  }

  r.arc(t,a,n,0,Math.PI*2,false);
  var i=e;
  var s=i[0];
  r.moveTo(s.x,s.y);for(var o=0;o<i.length;o++){var l=i[o];r.lineTo(l.x,l.y)}

  if (r.closePath) {
    r.closePath();
  }
}function Iy(r,e,t,a){r.arc(e,t,a,0,Math.PI*2,false)}Df.arrowShapeImpl=function(r){return(ql||(ql={polygon:Ry,"triangle-backcurve":My,"triangle-tee":_l,"circle-triangle":Ly,"triangle-cross":_l,circle:Iy}))[r]};var Hr={};Hr.drawElement=function(r,e,t,a,n,i){
  var s=this;

  if (e.isNode()) {
    s.drawNode(r,e,t,a,n,i);
  } else {
    s.drawEdge(r,e,t,a,n,i);
  }
};Hr.drawElementOverlay=function(r,e){
  var t=this;

  if (e.isNode()) {
    t.drawNodeOverlay(r,e);
  } else {
    t.drawEdgeOverlay(r,e);
  }
};Hr.drawElementUnderlay=function(r,e){
  var t=this;

  if (e.isNode()) {
    t.drawNodeUnderlay(r,e);
  } else {
    t.drawEdgeUnderlay(r,e);
  }
};Hr.drawCachedElementPortion=function(r,e,t,a,n,i,s,o){
  var l=this;
  var u=t.getBoundingBox(e);
  if(!(u.w===0||u.h===0)){var v=t.getElement(e,u,a,n,i);if (v!=null) {
    var f=o(l,e);if (f===0) {
        return;
      }
    var c=s(l,e);
    var h=u.x1;
    var d=u.y1;
    var y=u.w;
    var g=u.h;
    var p;
    var m;
    var b;
    var w;
    var E;
    if (c!==0) {
      var C=t.getRotationPoint(e);
      b=C.x;
      w=C.y;
      r.translate(b,w);
      r.rotate(c);
      E=l.getImgSmoothing(r);

      if (!E) {
        l.setImgSmoothing(r,true);
      }

      var x=t.getRotationOffset(e);
      p=x.x;
      m=x.y;
    } else {
      p=h;
      m=d;
    }var T;

    if (f!==1) {
      T=r.globalAlpha;
      r.globalAlpha=T*f;
    }

    r.drawImage(v.texture.canvas,v.x,0,v.width,v.height,p,m,y,g);

    if (f!==1) {
      (r.globalAlpha = T);
    }

    if (c!==0) {
      r.rotate(-c);
      r.translate(-b,-w);
      E||l.setImgSmoothing(r,false);
    }
  } else {
    t.drawElement(r,e)
  }}
};
var Oy=function(){return 0};
var Ny=function(e,t){return e.getTextAngle(t,null)};
var zy=function(e,t){return e.getTextAngle(t,"source")};
var Fy=function(e,t){return e.getTextAngle(t,"target")};
var Vy=function(e,t){return t.effectiveOpacity()};
var xs=function(e,t){return t.pstyle("text-opacity").pfValue*t.effectiveOpacity()};
Hr.drawCachedElement=function(r,e,t,a,n,i){
  var s=this;
  var o=s.data;
  var l=o.eleTxrCache;
  var u=o.lblTxrCache;
  var v=o.slbTxrCache;
  var f=o.tlbTxrCache;
  var c=e.boundingBox();
  var h=i===true?l.reasons.highQuality:null;
  if(!(c.w===0||c.h===0||!e.visible())&&(!a||ao(c,a))){
    var d=e.isEdge();
    var y=e.element()._private.rscratch.badLine;
    s.drawElementUnderlay(r,e);
    s.drawCachedElementPortion(r,e,l,t,n,h,Oy,Vy);

    if ((!d || !y)) {
      s.drawCachedElementPortion(r,e,u,t,n,h,Ny,xs);
    }

    if (d&&!y) {
      s.drawCachedElementPortion(r,e,v,t,n,h,zy,xs);
      s.drawCachedElementPortion(r,e,f,t,n,h,Fy,xs);
    }

    s.drawElementOverlay(r,e);
  }
};Hr.drawElements=function(r,e){
  var t=this;
  for(var a=0;a<e.length;a++){var n=e[a];t.drawElement(r,n)}
};Hr.drawCachedElements=function(r,e,t,a){
  var n=this;
  for(var i=0;i<e.length;i++){var s=e[i];n.drawCachedElement(r,s,t,a)}
};Hr.drawCachedNodes=function(r,e,t,a){
  var n=this;
  for(var i=0;i<e.length;i++){
    var s=e[i];

    if (s.isNode()) {
      n.drawCachedElement(r,s,t,a);
    }
  }
};Hr.drawLayeredElements=function(r,e,t,a){
  var n=this;
  var i=n.data.lyrTxrCache.getLayers(e,t);
  if (i) {
    for(var s=0;s<i.length;s++){
      var o=i[s];
      var l=o.bb;

      if (l.w !== 0 && l.h !== 0) {
        r.drawImage(o.canvas,l.x1,l.y1,l.w,l.h);
      }
    }
  } else {
    n.drawCachedElements(r,e,t,a)
  }
};var Jr={};Jr.drawEdge=function(r, e, t, a = true, n = true, i = true) {
  var s=this;
  var o=e._private.rscratch;
  if(!(i&&!e.visible())&&!(o.badLine||o.allpts==null||isNaN(o.allpts[0]))){
    var l;

    if (t) {
      l=t;
      r.translate(-l.x1,-l.y1);
    }

    var u=i?e.pstyle("opacity").value:1;
    var v=i?e.pstyle("line-opacity").value:1;
    var f=e.pstyle("curve-style").value;
    var c=e.pstyle("line-style").value;
    var h=e.pstyle("width").pfValue;
    var d=e.pstyle("line-cap").value;
    var y=e.pstyle("line-outline-width").value;
    var g=e.pstyle("line-outline-color").value;
    var p=u*v;
    var m=u*v;
    var b=function(L = p) {
      if (f==="straight-triangle") {
        s.eleStrokeStyle(r,e,L);
        s.drawEdgeTrianglePath(e,r,o.allpts);
      } else {
        r.lineWidth=h;
        r.lineCap=d;
        s.eleStrokeStyle(r,e,L);
        s.drawEdgePath(e,r,o.allpts,c);
        r.lineCap="butt";
      }
    };

    var w=function(L = p) {
      r.lineWidth=h+y;
      r.lineCap=d;

      if (y>0) {
        s.colorStrokeStyle(r,g[0],g[1],g[2],L);
      } else
        {r.lineCap="butt";return}

      if (f==="straight-triangle") {
        s.drawEdgeTrianglePath(e,r,o.allpts);
      } else {
        s.drawEdgePath(e,r,o.allpts,c);
        r.lineCap="butt";
      }
    };

    var E=function(){
      if (n) {
        s.drawEdgeOverlay(r,e);
      }
    };
    var C=function(){
      if (n) {
        s.drawEdgeUnderlay(r,e);
      }
    };
    var x=function(L = m) {
      s.drawArrowheads(r,e,L)
    };
    var T=function(){s.drawElementText(r,e,null,a)};
    r.lineJoin="round";var k=e.pstyle("ghost").value==="yes";if (k) {
        var D=e.pstyle("ghost-offset-x").pfValue;
        var B=e.pstyle("ghost-offset-y").pfValue;
        var P=e.pstyle("ghost-opacity").value;
        var A=p*P;
        r.translate(D,B);
        b(A);
        x(A);
        r.translate(-D,-B);
      } else {
        w();
      }
    C();
    b();
    x();
    E();
    T();

    if (t) {
      r.translate(l.x1,l.y1);
    }
  }
};var Bf=function(e){if (!["overlay","underlay"].includes(e)) {
  throw new Error("Invalid state");
}return function(t,a){if(a.visible()){var n=a.pstyle(`${e}-opacity`).value;if(n!==0){
  var i=this;
  var s=i.usePaths();
  var o=a._private.rscratch;
  var l=a.pstyle(`${e}-padding`).pfValue;
  var u=2*l;
  var v=a.pstyle(`${e}-color`).value;
  t.lineWidth=u;

  if (o.edgeType==="self"&&!s) {
    t.lineCap="butt";
  } else {
    t.lineCap="round";
  }

  i.colorStrokeStyle(t,v[0],v[1],v[2],n);
  i.drawEdgePath(a,t,o.allpts,"solid");
}}};};Jr.drawEdgeOverlay=Bf("overlay");Jr.drawEdgeUnderlay=Bf("underlay");Jr.drawEdgePath=function(r,e,t,a){
  var n=r._private.rscratch;
  var i=e;
  var s;
  var o=false;
  var l=this.usePaths();
  var u=r.pstyle("line-dash-pattern").pfValue;
  var v=r.pstyle("line-dash-offset").pfValue;
  if(l){
    var f=t.join("$");
    var c=n.pathCacheKey&&n.pathCacheKey===f;

    if (c) {
      s=e=n.pathCache;
      o=true;
    } else {
      s=e=new Path2D;
      n.pathCacheKey=f;
      n.pathCache=s;
    }
  }if (i.setLineDash) {
      switch(a){case "dotted":
        {
          i.setLineDash([1,1]);break;
        }case "dashed":
        {
          i.setLineDash(u);
          i.lineDashOffset=v;
          break;
        }case "solid":
        {
          i.setLineDash([]);break
        }}
    }if (!o&&!n.badLine) {
    if (e.beginPath) {
      e.beginPath();
    }

    e.moveTo(t[0],t[1]);

    switch (n.edgeType) {
    case"bezier":
    case"self":
    case"compound":
    case "multibezier":
      {
        for (var h=2; h+3<t.length; h+=4) {
          e.quadraticCurveTo(t[h],t[h+1],t[h+2],t[h+3]);
        }break;
      }
    case"straight":
    case "haystack":
      {
        for (var d=2; d+1<t.length; d+=2) {
          e.lineTo(t[d],t[d+1]);
        }break;
      }
    case "segments":
      {
        if (n.isRound) {
          var y=kr(n.roundCorners);
          var g;
          try{for(y.s();!(g=y.n()).done;){var p=g.value;pf(e,p)}}catch(b){y.e(b)}finally{y.f()}e.lineTo(t[t.length-2],t[t.length-1])
        } else {
          for (var m=2; m+1<t.length; m+=2) {
            e.lineTo(t[m],t[m+1]);
          }
        }break
      }
    }
  }
  e=i;

  if (l) {
    e.stroke(s);
  } else {
    e.stroke();
  }

  if (e.setLineDash) {
    e.setLineDash([]);
  }
};Jr.drawEdgeTrianglePath=function(r,e,t){
  e.fillStyle=e.strokeStyle;
  var a=r.pstyle("width").pfValue;
  for(var n=0;n+1<t.length;n+=2){
    var i=[t[n+2]-t[n],t[n+3]-t[n+1]];
    var s=Math.sqrt(i[0]*i[0]+i[1]*i[1]);
    var o=[i[1]/s,-i[0]/s];
    var l=[o[0]*a/2,o[1]*a/2];
    e.beginPath();
    e.moveTo(t[n]-l[0],t[n+1]-l[1]);
    e.lineTo(t[n]+l[0],t[n+1]+l[1]);
    e.lineTo(t[n+2],t[n+3]);
    e.closePath();
    e.fill();
  }
};Jr.drawArrowheads=function(r,e,t){
  var a=e._private.rscratch;
  var n=a.edgeType==="haystack";

  if (!n) {
    this.drawArrowhead(r,e,"source",a.arrowStartX,a.arrowStartY,a.srcArrowAngle,t);
  }

  this.drawArrowhead(r,e,"mid-target",a.midX,a.midY,a.midtgtArrowAngle,t);
  this.drawArrowhead(r,e,"mid-source",a.midX,a.midY,a.midsrcArrowAngle,t);

  if (!n) {
    this.drawArrowhead(r,e,"target",a.arrowEndX,a.arrowEndY,a.tgtArrowAngle,t);
  }
};Jr.drawArrowhead=function(r,e,t,a,n,i,s){if(!(isNaN(a)||a==null||isNaN(n)||n==null||isNaN(i)||i==null)){
  var o=this;
  var l=e.pstyle(t+"-arrow-shape").value;
  if(l!=="none"){
    var u=e.pstyle(t+"-arrow-fill").value==="hollow"?"both":"filled";
    var v=e.pstyle(t+"-arrow-fill").value;
    var f=e.pstyle("width").pfValue;
    var c=e.pstyle(t+"-arrow-width");
    var h=c.value==="match-line"?f:c.pfValue;

    if (c.units==="%") {
      (h *= f);
    }

    var d=e.pstyle("opacity").value;

    if (s===void 0) {
      (s = d);
    }

    var y=r.globalCompositeOperation;

    if ((s!==1 || v==="hollow")) {
      r.globalCompositeOperation="destination-out";
      o.colorFillStyle(r,255,255,255,1);
      o.colorStrokeStyle(r,255,255,255,1);
      o.drawArrowShape(e,r,u,f,l,h,a,n,i);
      r.globalCompositeOperation=y;
    }

    var g=e.pstyle(t+"-arrow-color").value;
    o.colorFillStyle(r,g[0],g[1],g[2],s);
    o.colorStrokeStyle(r,g[0],g[1],g[2],s);
    o.drawArrowShape(e,r,v,f,l,h,a,n,i);
  }
}};Jr.drawArrowShape=function(r,e,t,a,n,i,s,o,l){
  var u=this;
  var v=this.usePaths()&&n!=="triangle-cross";
  var f=false;
  var c;
  var h=e;
  var d={x:s,y:o};
  var y=r.pstyle("arrow-scale").value;
  var g=this.getArrowWidth(a,y);
  var p=u.arrowShapes[n];
  if(v){
    var m=u.arrowPathCache=u.arrowPathCache||[];
    var b=Dt(n);
    var w=m[b];

    if (w!=null) {
      c=e=w;
      f=true;
    } else {
      c=e=new Path2D;
      m[b]=c;
    }
  }

  if (!f) {
    e.beginPath&&e.beginPath();
    v?p.draw(e,1,0,{x:0,y:0},1):p.draw(e,g,l,d,a);
    e.closePath&&e.closePath();
  }

  e=h;

  if (v) {
    e.translate(s,o);
    e.rotate(l);
    e.scale(g,g);
  }

  if ((t==="filled" || t==="both")) {
    if (v) {
      e.fill(c);
    } else {
      e.fill();
    }
  }

  if ((t==="hollow" || t==="both")) {
    e.lineWidth=i/(v?g:1);
    e.lineJoin="miter";
    v?e.stroke(c):e.stroke();
  }

  if (v) {
    e.scale(1/g,1/g);
    e.rotate(-l);
    e.translate(-s,-o);
  }
};var mo={};mo.safeDrawImage=function(r,e,t,a,n,i,s,o,l,u){if (!(n<=0||i<=0||l<=0||u<=0)) {
  try{r.drawImage(e,t,a,n,i,s,o,l,u)}catch(v){Ve(v)}
}};mo.drawInscribedImage=function(r,e,t,a,n){
  var i=this;
  var s=t.position();
  var o=s.x;
  var l=s.y;
  var u=t.cy().style();
  var v=u.getIndexedStyle.bind(u);
  var f=v(t,"background-fit","value",a);
  var c=v(t,"background-repeat","value",a);
  var h=t.width();
  var d=t.height();
  var y=t.padding()*2;
  var g=h+(v(t,"background-width-relative-to","value",a)==="inner"?0:y);
  var p=d+(v(t,"background-height-relative-to","value",a)==="inner"?0:y);
  var m=t._private.rscratch;
  var b=v(t,"background-clip","value",a);
  var w=b==="node";
  var E=v(t,"background-image-opacity","value",a)*n;
  var C=v(t,"background-image-smoothing","value",a);
  var x=t.pstyle("corner-radius").value;

  if (x!=="auto") {
    (x = t.pstyle("corner-radius").pfValue);
  }

  var T=e.width||e.cachedW;
  var k=e.height||e.cachedH;

  if ((T==null || k==null)) {
    document.body.appendChild(e);
    T=e.cachedW=e.width||e.offsetWidth;
    k=e.cachedH=e.height||e.offsetHeight;
    document.body.removeChild(e);
  }

  var D=T;
  var B=k;

  if (v(t,"background-width","value",a)!=="auto") {
    if (v(t,"background-width","units",a)==="%") {
      D=v(t,"background-width","pfValue",a)*g;
    } else {
      D=v(t,"background-width","pfValue",a);
    }
  }

  if (v(t,"background-height","value",a)!=="auto") {
    if (v(t,"background-height","units",a)==="%") {
      B=v(t,"background-height","pfValue",a)*p;
    } else {
      B=v(t,"background-height","pfValue",a);
    }
  }

  if (!(D===0||B===0)) {
    if(f==="contain"){
      var P=Math.min(g/D,p/B);
      D*=P;
      B*=P;
    }else if(f==="cover"){
      var P=Math.max(g/D,p/B);
      D*=P;
      B*=P;
    }
    var A=o-g/2;
    var R=v(t,"background-position-x","units",a);
    var L=v(t,"background-position-x","pfValue",a);

    if (R==="%") {
      A+=(g-D)*L;
    } else {
      A+=L;
    }

    var I=v(t,"background-offset-x","units",a);
    var M=v(t,"background-offset-x","pfValue",a);

    if (I==="%") {
      A+=(g-D)*M;
    } else {
      A+=M;
    }

    var O=l-p/2;
    var V=v(t,"background-position-y","units",a);
    var G=v(t,"background-position-y","pfValue",a);

    if (V==="%") {
      O+=(p-B)*G;
    } else {
      O+=G;
    }

    var N=v(t,"background-offset-y","units",a);
    var F=v(t,"background-offset-y","pfValue",a);

    if (N==="%") {
      O+=(p-B)*F;
    } else {
      O+=F;
    }

    if (m.pathCache) {
      A-=o;
      O-=l;
      o=0;
      l=0;
    }

    var U=r.globalAlpha;r.globalAlpha=E;
    var Q=i.getImgSmoothing(r);
    var K=false;

    if (C==="no"&&Q) {
      i.setImgSmoothing(r,false);
      K=true;
    } else if (C==="yes"&&!Q) {
      i.setImgSmoothing(r,true);
      K=true;
    }

    if (c==="no-repeat") {
      if (w) {
        r.save();
        m.pathCache?r.clip(m.pathCache):(i.nodeShapes[i.getNodeShape(t)].draw(r,o,l,g,p,x,m),r.clip());
      }

      i.safeDrawImage(r,e,0,0,T,k,A,O,D,B);

      if (w) {
        r.restore();
      }
    } else {
      var j=r.createPattern(e,c);
      r.fillStyle=j;
      i.nodeShapes[i.getNodeShape(t)].draw(r,o,l,g,p,x,m);
      r.translate(A,O);
      r.fill();
      r.translate(-A,-O);
    }

    r.globalAlpha=U;

    if (K) {
      i.setImgSmoothing(r,Q);
    }
  }
};var Lt={};Lt.eleTextBiggerThanMin=function(r,e){
  if(!e){
    var t=r.cy().zoom();
    var a=this.getPixelRatio();
    var n=Math.ceil(ro(t*a));
    e=Math.pow(2,n)
  }
  var i=r.pstyle("font-size").pfValue*e;
  var s=r.pstyle("min-zoomed-font-size").pfValue;
  return!(i<s)
};Lt.drawElementText=function(r, e, t, a, n, i = true) {
  var s=this;
  if(a==null){if (i&&!s.eleTextBiggerThanMin(e)) {
    return
  }}else if (a===false) {
    return;
  }if(e.isNode()){
      var o=e.pstyle("label");if (!o||!o.value) {
        return;
      }var l=s.getLabelJustification(e);
      r.textAlign=l;
      r.textBaseline="bottom";
    }else{
      var u=e.element()._private.rscratch.badLine;
      var v=e.pstyle("label");
      var f=e.pstyle("source-label");
      var c=e.pstyle("target-label");
      if (u||(!v||!v.value)&&(!f||!f.value)&&(!c||!c.value)) {
        return;
      }
      r.textAlign="center";
      r.textBaseline="bottom";
    }
  var h=!t;
  var d;

  if (t) {
    d=t;
    r.translate(-d.x1,-d.y1);
  }

  if (n==null) {
    s.drawText(r,e,null,h,i);
    e.isEdge()&&(s.drawText(r,e,"source",h,i),s.drawText(r,e,"target",h,i));
  } else {
    s.drawText(r,e,n,h,i);
  }

  if (t) {
    r.translate(d.x1,d.y1);
  }
};Lt.getFontCache=function(r){
  var e;this.fontCaches=this.fontCaches||[];for (var t=0; t<this.fontCaches.length; t++) {
    e=this.fontCaches[t];

    if (e.context===r) {
      return e;
    }
  }
  e={context:r};
  this.fontCaches.push(e);
  return e;
};Lt.setupTextStyle=function(r, e, t = true) {
  var a=e.pstyle("font-style").strValue;
  var n=e.pstyle("font-size").pfValue+"px";
  var i=e.pstyle("font-family").strValue;
  var s=e.pstyle("font-weight").strValue;
  var o=t?e.effectiveOpacity()*e.pstyle("text-opacity").value:1;
  var l=e.pstyle("text-outline-opacity").value*o;
  var u=e.pstyle("color").value;
  var v=e.pstyle("text-outline-color").value;
  r.font=a+" "+s+" "+n+" "+i;
  r.lineJoin="round";
  this.colorFillStyle(r,u[0],u[1],u[2],o);
  this.colorStrokeStyle(r,v[0],v[1],v[2],l);
};function qy(r,e,t,a,n){
  var i=Math.min(a,n);
  var s=i/2;
  var o=e+a/2;
  var l=t+n/2;
  r.beginPath();
  r.arc(o,l,s,0,Math.PI*2);
  r.closePath();
}function Gl(r, e, t, a, n, i = 5) {
  var s=Math.min(i,a/2,n/2);
  r.beginPath();
  r.moveTo(e+s,t);
  r.lineTo(e+a-s,t);
  r.quadraticCurveTo(e+a,t,e+a,t+s);
  r.lineTo(e+a,t+n-s);
  r.quadraticCurveTo(e+a,t+n,e+a-s,t+n);
  r.lineTo(e+s,t+n);
  r.quadraticCurveTo(e,t+n,e,t+n-s);
  r.lineTo(e,t+s);
  r.quadraticCurveTo(e,t,e+s,t);
  r.closePath();
}Lt.getTextAngle=function(r,e){
  var t;
  var a=r._private;
  var n=a.rscratch;
  var i=e?e+"-":"";
  var s=r.pstyle(i+"text-rotation");
  if (s.strValue==="autorotate")
    {var o=Tr(n,"labelAngle",e);t=r.isEdge()?o:0} else {
    if (s.strValue==="none") {
      t=0;
    } else {
      t=s.pfValue;
    }
  }return t
};Lt.drawText=function(r, e, t, a = true, n = true) {
  var i=e._private;
  var s=i.rscratch;
  var o=n?e.effectiveOpacity():1;
  if(!(n&&(o===0||e.pstyle("text-opacity").value===0))){
    if (t==="main") {
      (t = null);
    }

    var l=Tr(s,"labelX",t);
    var u=Tr(s,"labelY",t);
    var v;
    var f;
    var c=this.getLabelText(e,t);
    if(c!=null&&c!==""&&!isNaN(l)&&!isNaN(u)){
      this.setupTextStyle(r,e,n);
      var h=t?t+"-":"";
      var d=Tr(s,"labelWidth",t);
      var y=Tr(s,"labelHeight",t);
      var g=e.pstyle(h+"text-margin-x").pfValue;
      var p=e.pstyle(h+"text-margin-y").pfValue;
      var m=e.isEdge();
      var b=e.pstyle("text-halign").value;
      var w=e.pstyle("text-valign").value;

      if (m) {
        b="center";
        w="center";
      }

      l+=g;
      u+=p;
      var E;

      if (a) {
        E=this.getTextAngle(e,t);
      } else {
        E=0;
      }

      if (E!==0) {
        v=l;
        f=u;
        r.translate(v,f);
        r.rotate(E);
        l=0;
        u=0;
      }

      switch (w) {
      case "top":
        {
          break;
        }
      case "center":
        {
          u+=y/2;break;
        }
      case "bottom":
        {
          u+=y;break
        }
      }

      var C=e.pstyle("text-background-opacity").value;
      var x=e.pstyle("text-border-opacity").value;
      var T=e.pstyle("text-border-width").pfValue;
      var k=e.pstyle("text-background-padding").pfValue;
      var D=e.pstyle("text-background-shape").strValue;
      var B=D==="round-rectangle"||D==="roundrectangle";
      var P=D==="circle";
      var A=2;
      if(C>0||T>0&&x>0){
        var R=r.fillStyle;
        var L=r.strokeStyle;
        var I=r.lineWidth;
        var M=e.pstyle("text-background-color").value;
        var O=e.pstyle("text-border-color").value;
        var V=e.pstyle("text-border-style").value;
        var G=C>0;
        var N=T>0&&x>0;
        var F=l-k;
        switch(b){case "left":
          {
            F-=d;break;
          }case "center":
          {
            F-=d/2;break
          }}
        var U=u-y-k;
        var Q=d+2*k;
        var K=y+2*k;

        if (G) {
          (r.fillStyle = `rgba(${M[0]},${M[1]},${M[2]},${C*o})`);
        }

        if (N&&(r.strokeStyle=`rgba(${O[0]},${O[1]},${O[2]},${x*o})`,r.lineWidth=T,r.setLineDash)) {
          switch(V){case "dotted":
            {
              r.setLineDash([1,1]);break;
            }case "dashed":
            {
              r.setLineDash([4,2]);break;
            }case "double":
            {
              r.lineWidth=T/4;
              r.setLineDash([]);
              break;
            }case"solid":default:
            {
              r.setLineDash([]);break
            }}
        }

        if (B) {
          r.beginPath();
          Gl(r,F,U,Q,K,A);
        } else if (P) {
          r.beginPath();
          qy(r,F,U,Q,K);
        } else {
          r.beginPath();
          r.rect(F,U,Q,K);
        }

        if (G) {
          r.fill();
        }

        if (N) {
          r.stroke();
        }

        if (N&&V==="double") {
          var j=T/2;
          r.beginPath();

          if (B) {
            Gl(r,F+j,U+j,Q-2*j,K-2*j,A);
          } else {
            r.rect(F+j,U+j,Q-2*j,K-2*j);
          }

          r.stroke();
        }

        r.fillStyle=R;
        r.strokeStyle=L;
        r.lineWidth=I;

        if (r.setLineDash) {
          r.setLineDash([]);
        }
      }var re=2*e.pstyle("text-outline-width").pfValue;

      if (re>0) {
        (r.lineWidth = re);
      }

      if (e.pstyle("text-wrap").value==="wrap") {
        var ne=Tr(s,"labelWrapCachedLines",t);
        var J=Tr(s,"labelLineHeight",t);
        var z=d/2;
        var q=this.getLabelJustification(e);

        if (q !== "auto") {
          if (b==="left") {
            if (q==="left") {
              l+=-d;
            } else if (q==="center") {
              (l += -z);
            }
          } else if (b==="center") {
            if (q==="left") {
              l+=-z;
            } else if (q==="right") {
              (l += z);
            }
          } else if (b==="right") {
            if (q==="center") {
              l+=z;
            } else if (q==="right") {
              (l += d);
            }
          }
        }

        switch (w) {
        case "top":
          {
            u-=(ne.length-1)*J;break;
          }
        case"center":
        case "bottom":
          {
            u-=(ne.length-1)*J;break
          }
        }

        for (var H=0; H<ne.length; H++) {
          if (re>0) {
            r.strokeText(ne[H],l,u);
          }

          r.fillText(ne[H],l,u);
          u+=J;
        }
      } else {
        if (re>0) {
          r.strokeText(c,l,u);
        }

        r.fillText(c,l,u);
      }

      if (E!==0) {
        r.rotate(-E);
        r.translate(-v,-f);
      }
    }
  }
};var yt={};yt.drawNode=function(r, e, t, a = true, n = true, i = true) {
  var s=this;
  var o;
  var l;
  var u=e._private;
  var v=u.rscratch;
  var f=e.position();
  if(!(!ae(f.x)||!ae(f.y))&&!(i&&!e.visible())){
    var c=i?e.effectiveOpacity():1;
    var h=s.usePaths();
    var d;
    var y=false;
    var g=e.padding();
    o=e.width()+2*g;
    l=e.height()+2*g;
    var p;

    if (t) {
      p=t;
      r.translate(-p.x1,-p.y1);
    }

    var m=e.pstyle("background-image");
    var w=new Array(b.length);
    var E=new Array(b.length);
    var C=0;
    for(var b=m.value, x=0;x<b.length;x++){
      var T=b[x];
      var k=w[x]=T!=null&&T!=="none";
      if(k){
        var D=e.cy().style().getIndexedStyle(e,"background-image-crossorigin","value",x);
        C++;

        E[x]=s.getCachedImage(T,D,function(){
          u.backgroundTimestamp=Date.now();
          e.emitAndNotify("background");
        });
      }
    }
    var B=e.pstyle("background-blacken").value;
    var P=e.pstyle("border-width").pfValue;
    var A=e.pstyle("background-opacity").value*c;
    var R=e.pstyle("border-color").value;
    var L=e.pstyle("border-style").value;
    var I=e.pstyle("border-join").value;
    var M=e.pstyle("border-cap").value;
    var O=e.pstyle("border-position").value;
    var V=e.pstyle("border-dash-pattern").pfValue;
    var G=e.pstyle("border-dash-offset").pfValue;
    var N=e.pstyle("border-opacity").value*c;
    var F=e.pstyle("outline-width").pfValue;
    var U=e.pstyle("outline-color").value;
    var Q=e.pstyle("outline-style").value;
    var K=e.pstyle("outline-opacity").value*c;
    var j=e.pstyle("outline-offset").value;
    var re=e.pstyle("corner-radius").value;

    if (re!=="auto") {
      (re = e.pstyle("corner-radius").pfValue);
    }

    var ne=function(ue = A) {
      s.eleFillStyle(r,e,ue)
    };
    var J=function(ue = N) {
      s.colorStrokeStyle(r,R[0],R[1],R[2],ue)
    };
    var z=function(ue = K) {
      s.colorStrokeStyle(r,U[0],U[1],U[2],ue)
    };

    var q=function(ue,X,S,_){
      var W=s.nodePathCache=s.nodePathCache||[];
      var $=cv(S==="polygon"?S+","+_.join(","):S,""+X,""+ue,""+re);
      var Z=W[$];
      var oe;
      var ee=false;

      if (Z!=null) {
        oe=Z;
        ee=true;
        v.pathCache=oe;
      } else {
        oe=new Path2D;
        W[$]=v.pathCache=oe;
      }

      return {path:oe,cacheHit:ee};
    };

    var H=e.pstyle("shape").strValue;
    var Y=e.pstyle("shape-polygon-points").pfValue;
    if(h){
      r.translate(f.x,f.y);var te=q(o,l,H,Y);
      d=te.path;
      y=te.cacheHit;
    }

    var ce=function(){
      if(!y){
        var ue=f;

        if (h) {
          (ue = {x:0,y:0});
        }

        s.nodeShapes[s.getNodeShape(e)].draw(d||r,ue.x,ue.y,o,l,re,v);
      }

      if (h) {
        r.fill(d);
      } else {
        r.fill();
      }
    };

    var Ae=function(ue = c, X = true) {
      var S=u.backgrounding;
      var _=0;
      for(var W=0;W<E.length;W++){
        var $=e.cy().style().getIndexedStyle(e,"background-image-containment","value",W);if(X&&$==="over"||!X&&$==="inside"){_++;continue}

        if (w[W]&&E[W].complete&&!E[W].error) {
          _++;
          s.drawInscribedImage(r,E[W],e,W,ue);
        }
      }
      u.backgrounding=_!==C;

      if (S!==u.backgrounding) {
        e.updateStyle(false);
      }
    };

    var Ce=function(ue = false, X = c) {
      if (s.hasPie(e)) {
        s.drawPie(r,e,X);
        ue&&(h||s.nodeShapes[s.getNodeShape(e)].draw(r,f.x,f.y,o,l,re,v));
      }
    };

    var we=function(ue = false, X = c) {
      if (s.hasStripe(e)) {
        r.save();
        h?r.clip(v.pathCache):(s.nodeShapes[s.getNodeShape(e)].draw(r,f.x,f.y,o,l,re,v),r.clip());
        s.drawStripe(r,e,X);
        r.restore();
        ue&&(h||s.nodeShapes[s.getNodeShape(e)].draw(r,f.x,f.y,o,l,re,v));
      }
    };

    var ye=function(ue = c) {
      var X=(B>0?B:-B)*ue;
      var S=B>0?0:255;

      if (B!==0) {
        s.colorFillStyle(r,S,S,S,X);
        h?r.fill(d):r.fill();
      }
    };

    var ie=function(){if(P>0){
      r.lineWidth=P;
      r.lineCap=M;
      r.lineJoin=I;

      if (r.setLineDash) {
        switch(L){case "dotted":
          {
            r.setLineDash([1,1]);break;
          }case "dashed":
          {
            r.setLineDash(V);
            r.lineDashOffset=G;
            break;
          }case"solid":case "double":
          {
            r.setLineDash([]);break
          }}
      }

      if (O!=="center") {
        r.save();
        r.lineWidth*=2;

        if (O==="inside") {
          if (h) {
            r.clip(d);
          } else {
            r.clip();
          }
        } else {
          var ue=new Path2D;
          ue.rect(-o/2-P,-l/2-P,o+2*P,l+2*P);
          ue.addPath(d);
          r.clip(ue,"evenodd");
        }

        if (h) {
          r.stroke(d);
        } else {
          r.stroke();
        }

        r.restore();
      } else {
        if (h) {
          r.stroke(d);
        } else {
          r.stroke();
        }
      }if(L==="double"){
        r.lineWidth=P/3;var X=r.globalCompositeOperation;
        r.globalCompositeOperation="destination-out";

        if (h) {
          r.stroke(d);
        } else {
          r.stroke();
        }

        r.globalCompositeOperation=X;
      }

      if (r.setLineDash) {
        r.setLineDash([]);
      }
    }};

    var de=function(){if(F>0){
      r.lineWidth=F;
      r.lineCap="butt";

      if (r.setLineDash) {
        switch(Q){case "dotted":
          {
            r.setLineDash([1,1]);break;
          }case "dashed":
          {
            r.setLineDash([4,2]);break;
          }case"solid":case "double":
          {
            r.setLineDash([]);break
          }}
      }

      var ue=f;

      if (h) {
        (ue = {x:0,y:0});
      }

      var X=s.getNodeShape(e);
      var S=P;

      if (O==="inside") {
        (S = 0);
      }

      if (O==="outside") {
        (S *= 2);
      }

      var _=(o+S+(F+j))/o;
      var W=(l+S+(F+j))/l;
      var $=o*_;
      var Z=l*W;
      var oe=s.nodeShapes[X].points;
      var ee;
      if(h){var ve=q($,Z,X,oe);ee=ve.path}if (X==="ellipse") {
          s.drawEllipsePath(ee||r,ue.x,ue.y,$,Z);
        } else if(["round-diamond","round-heptagon","round-hexagon","round-octagon","round-pentagon","round-polygon","round-triangle","round-tag"].includes(X)){
        var le=0;
        var me=0;
        var De=0;

        switch (X) {
        case "round-diamond":
          le=(S+j+F)*1.4;
          break;
        case "round-heptagon":
          le=(S+j+F)*1.075;
          De=-(S/2+j+F)/35;
          break;
        case "round-hexagon":
          le=(S+j+F)*1.12;
          break;
        case "round-pentagon":
          le=(S+j+F)*1.13;
          De=-(S/2+j+F)/15;
          break;
        case "round-tag":
          le=(S+j+F)*1.12;
          me=(S/2+F+j)*0.07/* .07 */;
          break;
        case "round-triangle":
          le=(S+j+F)*(Math.PI/2);
          De=-(S+j/2+F)/Math.PI;
          break;
        }

        if (le!==0) {
          _=(o+le)/o;
          $=o*_;
          ["round-hexagon","round-tag"].includes(X)||(W=(l+le)/l,Z=l*W);
        }

        re=re==="auto"?Ev($,Z):re;
        var Te=$/2;
        var fe=Z/2;
        var Pe=re+(S+F+j)/2;
        var Be=new Array(oe.length/2);
        var je=new Array(oe.length/2);
        for (var Ke=0; Ke<oe.length/2; Ke++) {
          Be[Ke]={x:ue.x+me+Te*oe[Ke*2],y:ue.y+De+fe*oe[Ke*2+1]};
        }
        var mr;
        var Ye;
        var ir;
        var er;
        var lr=Be.length;
        Ye=Be[lr-1];

        for (mr=0; mr<lr; mr++) {
          ir=Be[mr%lr];
          er=Be[(mr+1)%lr];
          je[mr]=po(Ye,ir,er,Pe);
          Ye=ir;
          ir=er;
        }

        s.drawRoundPolygonPath(ee||r,ue.x+me,ue.y+De,o*_,l*W,oe,je)
      }else if (["roundrectangle","round-rectangle"].includes(X)) {
          re=re==="auto"?vt($,Z):re;
          s.drawRoundRectanglePath(ee||r,ue.x,ue.y,$,Z,re+(S+F+j)/2);
        } else if (["cutrectangle","cut-rectangle"].includes(X)) {
          re=re==="auto"?no():re;
          s.drawCutRectanglePath(ee||r,ue.x,ue.y,$,Z,null,re+(S+F+j)/4);
        } else if (["bottomroundrectangle","bottom-round-rectangle"].includes(X)) {
          re=re==="auto"?vt($,Z):re;
          s.drawBottomRoundRectanglePath(ee||r,ue.x,ue.y,$,Z,re+(S+F+j)/2);
        } else if (X==="barrel") {
          s.drawBarrelPath(ee||r,ue.x,ue.y,$,Z);
        } else if(X.startsWith("polygon")||["rhomboid","right-rhomboid","round-tag","tag","vee"].includes(X)){
          var jr=(S+F+j)/o;
          oe=En(Cn(oe,jr));
          s.drawPolygonPath(ee||r,ue.x,ue.y,o,l,oe);
        }else{
          var Ze=(S+F+j)/o;
          oe=En(Cn(oe,-Ze));
          s.drawPolygonPath(ee||r,ue.x,ue.y,o,l,oe);
        }

      if (h) {
        r.stroke(ee);
      } else {
        r.stroke();
      }

      if (Q==="double") {
        r.lineWidth=S/3;var Wr=r.globalCompositeOperation;
        r.globalCompositeOperation="destination-out";

        if (h) {
          r.stroke(ee);
        } else {
          r.stroke();
        }

        r.globalCompositeOperation=Wr;
      }

      if (r.setLineDash) {
        r.setLineDash([]);
      }
    }};

    var he=function(){
      if (n) {
        s.drawNodeOverlay(r,e,f,o,l);
      }
    };
    var Ee=function(){
      if (n) {
        s.drawNodeUnderlay(r,e,f,o,l);
      }
    };
    var pe=function(){s.drawElementText(r,e,null,a)};
    var Se=e.pstyle("ghost").value==="yes";
    if(Se){
      var Re=e.pstyle("ghost-offset-x").pfValue;
      var Oe=e.pstyle("ghost-offset-y").pfValue;
      var Ne=e.pstyle("ghost-opacity").value;
      var ze=Ne*c;
      r.translate(Re,Oe);
      z();
      de();
      ne(Ne*A);
      ce();
      Ae(ze,true);
      J(Ne*N);
      ie();
      Ce(B!==0||P!==0);
      we(B!==0||P!==0);
      Ae(ze,false);
      ye(ze);
      r.translate(-Re,-Oe);
    }

    if (h) {
      r.translate(-f.x,-f.y);
    }

    Ee();

    if (h) {
      r.translate(f.x,f.y);
    }

    z();
    de();
    ne();
    ce();
    Ae(c,true);
    J();
    ie();
    Ce(B!==0||P!==0);
    we(B!==0||P!==0);
    Ae(c,false);
    ye();

    if (h) {
      r.translate(-f.x,-f.y);
    }

    pe();
    he();

    if (t) {
      r.translate(p.x1,p.y1);
    }
  }
};var Pf=function(e){if (!["overlay","underlay"].includes(e)) {
  throw new Error("Invalid state");
}return function(t,a,n,i,s){var o=this;if(a.visible()){
  var l=a.pstyle(`${e}-padding`).pfValue;
  var u=a.pstyle(`${e}-opacity`).value;
  var v=a.pstyle(`${e}-color`).value;
  var f=a.pstyle(`${e}-shape`).value;
  var c=a.pstyle(`${e}-corner-radius`).value;
  if(u>0){
    n=n||a.position();

    if (i==null||s==null) {
      var h=a.padding();
      i=a.width()+2*h;
      s=a.height()+2*h;
    }

    o.colorFillStyle(t,v[0],v[1],v[2],u);
    o.nodeShapes[f].draw(t,n.x,n.y,i+l*2,s+l*2,c);
    t.fill();
  }
}};};yt.drawNodeOverlay=Pf("overlay");yt.drawNodeUnderlay=Pf("underlay");yt.hasPie=function(r){
  r=r[0];
  return r._private.hasPie;
};yt.hasStripe=function(r){
  r=r[0];
  return r._private.hasStripe;
};yt.drawPie=function(r,e,t,a){
  e=e[0];
  a=a||e.position();
  var n=e.cy().style();
  var i=e.pstyle("pie-size");
  var s=e.pstyle("pie-hole");
  var o=e.pstyle("pie-start-angle").pfValue;
  var l=a.x;
  var u=a.y;
  var v=e.width();
  var f=e.height();
  var c=Math.min(v,f)/2;
  var h;
  var d=0;
  var y=this.usePaths();

  if (y) {
    l=0;
    u=0;
  }

  if (i.units==="%") {
    c=c*i.pfValue;
  } else if (i.pfValue!==void 0) {
    (c = i.pfValue/2);
  }

  if (s.units==="%") {
    h=c*s.pfValue;
  } else if (s.pfValue!==void 0) {
    (h = s.pfValue/2);
  }

  if (!(h>=c)) {
    for(var g=1;g<=n.pieBackgroundN;g++){
      var p=e.pstyle("pie-"+g+"-background-size").value;
      var m=e.pstyle("pie-"+g+"-background-color").value;
      var b=e.pstyle("pie-"+g+"-background-opacity").value*t;
      var w=p/100;

      if (w+d>1) {
        (w = 1-d);
      }

      var E=1.5*Math.PI+2*Math.PI*d;E+=o;
      var C=2*Math.PI*w;
      var x=E+C;

      if (p !== 0 && d < 1 && d+w <= 1) {
        h===0?(r.beginPath(),r.moveTo(l,u),r.arc(l,u,c,E,x),r.closePath()):(r.beginPath(),r.arc(l,u,c,E,x),r.arc(l,u,h,x,E,true),r.closePath());
        this.colorFillStyle(r,m[0],m[1],m[2],b);
        r.fill();
        d+=w;
      }
    }
  }
};yt.drawStripe=function(r,e,t,a){
  e=e[0];
  a=a||e.position();
  var n=e.cy().style();
  var i=a.x;
  var s=a.y;
  var o=e.width();
  var l=e.height();
  var u=0;
  var v=this.usePaths();
  r.save();
  var f=e.pstyle("stripe-direction").value;
  var c=e.pstyle("stripe-size");
  switch(f){case "vertical":
    {
      break;
    }case "righward":
    {
      r.rotate(-Math.PI/2);break
    }}
  var h=o;
  var d=l;

  if (c.units==="%") {
    h=h*c.pfValue;
    d=d*c.pfValue;
  } else if (c.pfValue!==void 0) {
    h=c.pfValue;
    d=c.pfValue;
  }

  if (v) {
    i=0;
    s=0;
  }

  s-=h/2;
  i-=d/2;
  for(var y=1;y<=n.stripeBackgroundN;y++){
    var g=e.pstyle("stripe-"+y+"-background-size").value;
    var p=e.pstyle("stripe-"+y+"-background-color").value;
    var m=e.pstyle("stripe-"+y+"-background-opacity").value*t;
    var b=g/100;

    if (b+u>1) {
      (b = 1-u);
    }

    if (!(g===0||u>=1||u+b>1)) {
      r.beginPath();
      r.rect(i,s+d*u,h,d*b);
      r.closePath();
      this.colorFillStyle(r,p[0],p[1],p[2],m);
      r.fill();
      u+=b;
    }
  }r.restore()
};
var xr={};
var _y=100;
xr.getPixelRatio=function(){
  var r=this.data.contexts[0];if (this.forcedPixelRatio!=null) {
    return this.forcedPixelRatio;
  }
  var e=this.cy.window();
  var t=r.backingStorePixelRatio||r.webkitBackingStorePixelRatio||r.mozBackingStorePixelRatio||r.msBackingStorePixelRatio||r.oBackingStorePixelRatio||r.backingStorePixelRatio||1;
  return(e.devicePixelRatio||1)/t
};xr.paintCache=function(r){
  var t=true;
  var a;
  for (var e=this.paintCaches=this.paintCaches||[], n=0; n<e.length; n++) {
    a=e[n];

    if (a.context===r)
      {t=false;break}
  }

  if (t) {
    a={context:r};
    e.push(a);
  }

  return a;
};xr.createGradientStyleFor=function(r,e,t,a,n){
  var i;
  var s=this.usePaths();
  var o=t.pstyle(e+"-gradient-stop-colors").value;
  var l=t.pstyle(e+"-gradient-stop-positions").pfValue;
  if (a==="radial-gradient") {
    if(t.isEdge()){
      var u=t.sourceEndpoint();
      var v=t.targetEndpoint();
      var f=t.midpoint();
      var c=Bt(u,f);
      var h=Bt(v,f);
      i=r.createRadialGradient(f.x,f.y,0,f.x,f.y,Math.max(c,h))
    }else{
      var d=s?{x:0,y:0}:t.position();
      var y=t.paddedWidth();
      var g=t.paddedHeight();
      i=r.createRadialGradient(d.x,d.y,0,d.x,d.y,Math.max(y,g))
    }
  } else if(t.isEdge()){
    var p=t.sourceEndpoint();
    var m=t.targetEndpoint();
    i=r.createLinearGradient(p.x,p.y,m.x,m.y)
  }else{
    var b=s?{x:0,y:0}:t.position();
    var w=t.paddedWidth();
    var E=t.paddedHeight();
    var C=w/2;
    var x=E/2;
    var T=t.pstyle("background-gradient-direction").value;
    switch(T){case "to-bottom":
      {
        i=r.createLinearGradient(b.x,b.y-x,b.x,b.y+x);break;
      }case "to-top":
      {
        i=r.createLinearGradient(b.x,b.y+x,b.x,b.y-x);break;
      }case "to-left":
      {
        i=r.createLinearGradient(b.x+C,b.y,b.x-C,b.y);break;
      }case "to-right":
      {
        i=r.createLinearGradient(b.x-C,b.y,b.x+C,b.y);break;
      }case"to-bottom-right":case "to-right-bottom":
      {
        i=r.createLinearGradient(b.x-C,b.y-x,b.x+C,b.y+x);break;
      }case"to-top-right":case "to-right-top":
      {
        i=r.createLinearGradient(b.x-C,b.y+x,b.x+C,b.y-x);break;
      }case"to-bottom-left":case "to-left-bottom":
      {
        i=r.createLinearGradient(b.x+C,b.y-x,b.x-C,b.y+x);break;
      }case"to-top-left":case "to-left-top":
      {
        i=r.createLinearGradient(b.x+C,b.y+x,b.x-C,b.y-x);break
      }}
  }if (!i) {
    return null;
  }
  var k=l.length===o.length;
  for (var D=o.length, B=0; B<D; B++) {
    i.addColorStop(k?l[B]:B/(D-1),"rgba("+o[B][0]+","+o[B][1]+","+o[B][2]+","+n+")");
  }return i
};xr.gradientFillStyle=function(r,e,t,a){var n=this.createGradientStyleFor(r,"background",e,t,a);if (!n) {
  return null;
}r.fillStyle=n};xr.colorFillStyle=function(r,e,t,a,n){r.fillStyle="rgba("+e+","+t+","+a+","+n+")"};xr.eleFillStyle=function(r,e,t){var a=e.pstyle("background-fill").value;if (a==="linear-gradient"||a==="radial-gradient") {
  this.gradientFillStyle(r,e,a,t);
} else
  {var n=e.pstyle("background-color").value;this.colorFillStyle(r,n[0],n[1],n[2],t)}};xr.gradientStrokeStyle=function(r,e,t,a){var n=this.createGradientStyleFor(r,"line",e,t,a);if (!n) {
  return null;
}r.strokeStyle=n};xr.colorStrokeStyle=function(r,e,t,a,n){r.strokeStyle="rgba("+e+","+t+","+a+","+n+")"};xr.eleStrokeStyle=function(r,e,t){var a=e.pstyle("line-fill").value;if (a==="linear-gradient"||a==="radial-gradient") {
  this.gradientStrokeStyle(r,e,a,t);
} else
  {var n=e.pstyle("line-color").value;this.colorStrokeStyle(r,n[0],n[1],n[2],t)}};xr.matchCanvasSize=function(r){
  var e=this;
  var t=e.data;
  var a=e.findContainerClientCoords();
  var n=a[2];
  var i=a[3];
  var s=e.getPixelRatio();
  var o=e.motionBlurPxRatio;

  if ((r===e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || r===e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG])) {
    (s = o);
  }

  var l=n*s;
  var u=i*s;
  var v;
  if(!(l===e.canvasWidth&&u===e.canvasHeight)){
    e.fontCaches=null;var f=t.canvasContainer;
    f.style.width=n+"px";
    f.style.height=i+"px";
    for (var c=0; c<e.CANVAS_LAYERS; c++) {
      v=t.canvases[c];
      v.width=l;
      v.height=u;
      v.style.width=n+"px";
      v.style.height=i+"px";
    }for (var c=0; c<e.BUFFER_COUNT; c++) {
        v=t.bufferCanvases[c];
        v.width=l;
        v.height=u;
        v.style.width=n+"px";
        v.style.height=i+"px";
      }
    e.textureMult=1;

    if (s<=1) {
      v=t.bufferCanvases[e.TEXTURE_BUFFER];
      e.textureMult=2;
      v.width=l*e.textureMult;
      v.height=u*e.textureMult;
    }

    e.canvasWidth=l;
    e.canvasHeight=u;
    e.pixelRatio=s;
  }
};xr.renderTo=function(r,e,t,a){this.render({forcedContext:r,forcedZoom:e,forcedPan:t,drawAllLayers:true,forcedPxRatio:a})};xr.clearCanvas=function(){
  var r=this;
  var e=r.data;
  function t(a){a.clearRect(0,0,r.canvasWidth,r.canvasHeight)}
  t(e.contexts[r.NODE]);
  t(e.contexts[r.DRAG]);
};xr.render=function(r){
  var e=this;r=r||pv();
  var t=e.cy;
  var a=r.forcedContext;
  var n=r.drawAllLayers;
  var i=r.drawOnlyNodeLayer;
  var s=r.forcedZoom;
  var o=r.forcedPan;
  var l=r.forcedPxRatio===void 0?this.getPixelRatio():r.forcedPxRatio;
  var u=e.data;
  var v=u.canvasNeedsRedraw;
  var f=e.textureOnViewport&&!a&&(e.pinching||e.hoverData.dragging||e.swipePanning||e.data.wheelZooming);
  var c=r.motionBlur!==void 0?r.motionBlur:e.motionBlur;
  var h=e.motionBlurPxRatio;
  var d=t.hasCompoundNodes();
  var y=e.hoverData.draggingEles;
  var g=!!(e.hoverData.selecting||e.touchData.selecting);
  c=c&&!a&&e.motionBlurEnabled&&!g;var p=c;

  if (!a) {
    e.prevPxRatio!==l&&(e.invalidateContainerClientCoordsCache(),e.matchCanvasSize(e.container),e.redrawHint("eles",true),e.redrawHint("drag",true));
    e.prevPxRatio=l;
  }

  if (!a&&e.motionBlurTimeout) {
    clearTimeout(e.motionBlurTimeout);
  }

  if (c) {
    e.mbFrames==null&&(e.mbFrames=0);
    e.mbFrames++;
    e.mbFrames<3&&(p=false);
    e.mbFrames>e.minMbLowQualFrames&&(e.motionBlurPxRatio=e.mbPxRBlurry);
  }

  if (e.clearingMotionBlur) {
    (e.motionBlurPxRatio = 1);
  }

  if (e.textureDrawLastFrame&&!f) {
    v[e.NODE]=true;
    v[e.SELECT_BOX]=true;
  }

  var m=t.style();
  var b=t.zoom();
  var w=s!==void 0?s:b;
  var E=t.pan();
  var C={x:E.x,y:E.y};
  var x={zoom:b,pan:{x:E.x,y:E.y}};
  var T=e.prevViewport;
  var k=T===void 0||x.zoom!==T.zoom||x.pan.x!==T.pan.x||x.pan.y!==T.pan.y;

  if (!k&&!(y&&!d)) {
    (e.motionBlurPxRatio = 1);
  }

  if (o) {
    (C = o);
  }

  w*=l;
  C.x*=l;
  C.y*=l;
  var D=e.getCachedZSortedEles();function B(J,z,q,H,Y){
      var te=J.globalCompositeOperation;
      J.globalCompositeOperation="destination-out";
      e.colorFillStyle(J,255,255,255,e.motionBlurTransparency);
      J.fillRect(z,q,H,Y);
      J.globalCompositeOperation=te;
    }function P(J,z){
    var q;
    var H;
    var Y;
    var te;

    if (!e.clearingMotionBlur&&(J===u.bufferContexts[e.MOTIONBLUR_BUFFER_NODE]||J===u.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG])) {
      q={x:E.x*h,y:E.y*h};
      H=b*h;
      Y=e.canvasWidth*h;
      te=e.canvasHeight*h;
    } else {
      q=C;
      H=w;
      Y=e.canvasWidth;
      te=e.canvasHeight;
    }

    J.setTransform(1,0,0,1,0,0);

    if (z==="motionBlur") {
      B(J,0,0,Y,te);
    } else if (!a&&(z===void 0||z)) {
      J.clearRect(0,0,Y,te);
    }

    if (!n) {
      J.translate(q.x,q.y);
      J.scale(H,H);
    }

    if (o) {
      J.translate(o.x,o.y);
    }

    if (s) {
      J.scale(s,s);
    }
  }

  if (!f) {
    (e.textureDrawLastFrame = false);
  }

  if (f) {
    e.textureDrawLastFrame=true;

    if (!e.textureCache) {
      e.textureCache={};
      e.textureCache.bb=t.mutableElements().boundingBox();
      e.textureCache.texture=e.data.bufferCanvases[e.TEXTURE_BUFFER];
      var A=e.data.bufferContexts[e.TEXTURE_BUFFER];
      A.setTransform(1,0,0,1,0,0);
      A.clearRect(0,0,e.canvasWidth*e.textureMult,e.canvasHeight*e.textureMult);
      e.render({forcedContext:A,drawOnlyNodeLayer:true,forcedPxRatio:l*e.textureMult});
      var x=e.textureCache.viewport={zoom:t.zoom(),pan:t.pan(),width:e.canvasWidth,height:e.canvasHeight};x.mpan={x:(0-x.pan.x)/x.zoom,y:(0-x.pan.y)/x.zoom}
    }

    v[e.DRAG]=false;
    v[e.NODE]=false;
    var R=u.contexts[e.NODE];
    var L=e.textureCache.texture;
    var x=e.textureCache.viewport;
    R.setTransform(1,0,0,1,0,0);

    if (c) {
      B(R,0,0,x.width,x.height);
    } else {
      R.clearRect(0,0,x.width,x.height);
    }

    var I=m.core("outside-texture-bg-color").value;
    var M=m.core("outside-texture-bg-opacity").value;
    e.colorFillStyle(R,I[0],I[1],I[2],M);
    R.fillRect(0,0,x.width,x.height);
    var b=t.zoom();
    P(R,false);
    R.clearRect(x.mpan.x,x.mpan.y,x.width/x.zoom/l,x.height/x.zoom/l);
    R.drawImage(L,x.mpan.x,x.mpan.y,x.width/x.zoom/l,x.height/x.zoom/l);
  } else {
    if (e.textureOnViewport&&!a) {
      (e.textureCache = null);
    }
  }

  var O=t.extent();
  var V=e.pinching||e.hoverData.dragging||e.swipePanning||e.data.wheelZooming||e.hoverData.draggingEles||e.cy.animated();
  var G=e.hideEdgesOnViewport&&V;
  var N=[];
  N[e.NODE]=!v[e.NODE]&&c&&!e.clearedForMotionBlur[e.NODE]||e.clearingMotionBlur;

  if (N[e.NODE]) {
    (e.clearedForMotionBlur[e.NODE] = true);
  }

  N[e.DRAG]=!v[e.DRAG]&&c&&!e.clearedForMotionBlur[e.DRAG]||e.clearingMotionBlur;

  if (N[e.DRAG]) {
    (e.clearedForMotionBlur[e.DRAG] = true);
  }

  if (v[e.NODE]||n||i||N[e.NODE]) {
    var F=c&&!N[e.NODE]&&h!==1;
    var R=a||(F?e.data.bufferContexts[e.MOTIONBLUR_BUFFER_NODE]:u.contexts[e.NODE]);
    var U=c&&!F?"motionBlur":void 0;
    P(R,U);

    if (G) {
      e.drawCachedNodes(R,D.nondrag,l,O);
    } else {
      e.drawLayeredElements(R,D.nondrag,l,O);
    }

    if (e.debug) {
      e.drawDebugPoints(R,D.nondrag);
    }

    if (!n&&!c) {
      (v[e.NODE] = false);
    }
  }

  if(!i&&(v[e.DRAG]||n||N[e.DRAG])){
    var F=c&&!N[e.DRAG]&&h!==1;
    var R=a||(F?e.data.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG]:u.contexts[e.DRAG]);
    P(R,c&&!F?"motionBlur":void 0);

    if (G) {
      e.drawCachedNodes(R,D.drag,l,O);
    } else {
      e.drawCachedElements(R,D.drag,l,O);
    }

    if (e.debug) {
      e.drawDebugPoints(R,D.drag);
    }

    if (!n&&!c) {
      (v[e.DRAG] = false);
    }
  }
  this.drawSelectionRectangle(r,P);

  if (c&&h!==1) {
    var Q=u.contexts[e.NODE];
    var K=e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE];
    var j=u.contexts[e.DRAG];
    var re=e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG];

    var ne=function(z,q,H){
      z.setTransform(1,0,0,1,0,0);

      if (H||!p) {
        z.clearRect(0,0,e.canvasWidth,e.canvasHeight);
      } else {
        B(z,0,0,e.canvasWidth,e.canvasHeight);
      }

      var Y=h;z.drawImage(q,0,0,e.canvasWidth*Y,e.canvasHeight*Y,0,0,e.canvasWidth,e.canvasHeight)
    };

    if ((v[e.NODE] || N[e.NODE])) {
      ne(Q,K,N[e.NODE]);
      v[e.NODE]=false;
    }

    if ((v[e.DRAG] || N[e.DRAG])) {
      ne(j,re,N[e.DRAG]);
      v[e.DRAG]=false;
    }
  }

  e.prevViewport=x;

  if (e.clearingMotionBlur) {
    e.clearingMotionBlur=false;
    e.motionBlurCleared=true;
    e.motionBlur=true;
  }

  if (c) {
    (e.motionBlurTimeout = setTimeout(function(){
      e.motionBlurTimeout=null;
      e.clearedForMotionBlur[e.NODE]=false;
      e.clearedForMotionBlur[e.DRAG]=false;
      e.motionBlur=false;
      e.clearingMotionBlur=!f;
      e.mbFrames=0;
      v[e.NODE]=true;
      v[e.DRAG]=true;
      e.redraw();
    },_y));
  }

  if (!a) {
    t.emit("render");
  }
};var ha;xr.drawSelectionRectangle=function(r,e){
  var t=this;
  var a=t.cy;
  var n=t.data;
  var i=a.style();
  var s=r.drawOnlyNodeLayer;
  var o=r.drawAllLayers;
  var l=n.canvasNeedsRedraw;
  var u=r.forcedContext;
  if(t.showFps||!s&&l[t.SELECT_BOX]&&!o){
    var v=u||n.contexts[t.SELECT_BOX];
    e(v);

    if (t.selection[4]==1&&(t.hoverData.selecting||t.touchData.selecting)) {
      var f=t.cy.zoom();
      var c=i.core("selection-box-border-width").value/f;
      v.lineWidth=c;
      v.fillStyle="rgba("+i.core("selection-box-color").value[0]+","+i.core("selection-box-color").value[1]+","+i.core("selection-box-color").value[2]+","+i.core("selection-box-opacity").value+")";
      v.fillRect(t.selection[0],t.selection[1],t.selection[2]-t.selection[0],t.selection[3]-t.selection[1]);

      if (c>0) {
        v.strokeStyle="rgba("+i.core("selection-box-border-color").value[0]+","+i.core("selection-box-border-color").value[1]+","+i.core("selection-box-border-color").value[2]+","+i.core("selection-box-opacity").value+")";
        v.strokeRect(t.selection[0],t.selection[1],t.selection[2]-t.selection[0],t.selection[3]-t.selection[1]);
      }
    }

    if(n.bgActivePosistion&&!t.hoverData.selecting){
      var f=t.cy.zoom();
      var h=n.bgActivePosistion;
      v.fillStyle="rgba("+i.core("active-bg-color").value[0]+","+i.core("active-bg-color").value[1]+","+i.core("active-bg-color").value[2]+","+i.core("active-bg-opacity").value+")";
      v.beginPath();
      v.arc(h.x,h.y,i.core("active-bg-size").pfValue/f,0,2*Math.PI);
      v.fill();
    }var d=t.lastRedrawTime;if(t.showFps&&d){
        d=Math.round(d);
        var y=Math.round(1000/* 1e3 *//d);
        var g="1 frame = "+d+" ms = "+y+" fps";
        v.setTransform(1,0,0,1,0,0);
        v.fillStyle="rgba(255, 0, 0, 0.75)";
        v.strokeStyle="rgba(255, 0, 0, 0.75)";
        v.font="30px Arial";

        if (!ha)
          {var p=v.measureText(g);ha=p.actualBoundingBoxAscent}

        v.fillText(g,0,ha);var m=60;
        v.strokeRect(0,ha+10,250,20);
        v.fillRect(0,ha+10,250*Math.min(y/m,1),20);
      }

    if (!o) {
      (l[t.SELECT_BOX] = false);
    }
  }
};function Hl(r,e,t){
  var a=r.createShader(e);
  r.shaderSource(a,t);
  r.compileShader(a);

  if (!r.getShaderParameter(a,r.COMPILE_STATUS)) {
    throw new Error(r.getShaderInfoLog(a));
  }

  return a
}function Gy(r,e,t){
  var a=Hl(r,r.VERTEX_SHADER,e);
  var n=Hl(r,r.FRAGMENT_SHADER,t);
  var i=r.createProgram();
  r.attachShader(i,a);
  r.attachShader(i,n);
  r.linkProgram(i);

  if (!r.getProgramParameter(i,r.LINK_STATUS)) {
    throw new Error("Could not initialize shaders");
  }

  return i
}function Hy(r, e, t = e) {
  var a=r.makeOffscreenCanvas(e,t);
  var n=a.context=a.getContext("2d");
  a.clear=function(){return n.clearRect(0,0,a.width,a.height)};
  a.clear();
  return a;
}function bo(r){
  var e=r.pixelRatio;
  var t=r.cy.zoom();
  var a=r.cy.pan();
  return{zoom:t*e,pan:{x:a.x*e,y:a.y*e}}
}function Wy(r){
  var e=r.pixelRatio;
  var t=r.cy.zoom();
  return t*e
}function $y(r,e,t,a,n){
  var i=a*t+e.x;
  var s=n*t+e.y;
  s=Math.round(r.canvasHeight-s);
  return [i,s];
}function Uy(r){return r.pstyle("background-fill").value!=="solid"||r.pstyle("background-image").strValue!=="none"?false:r.pstyle("border-width").value===0||r.pstyle("border-opacity").value===0?true:r.pstyle("border-style").value==="solid";}function Ky(r,e){if (r.length!==e.length) {
  return false;
}for (var t=0; t<r.length; t++) {
  if (r[t]!==e[t]) {
    return false;
  }
}return true;}function xt(r,e,t){
  var a=r[0]/255;
  var n=r[1]/255;
  var i=r[2]/255;
  var s=e;
  var o=t||new Array(4);
  o[0]=a*s;
  o[1]=n*s;
  o[2]=i*s;
  o[3]=s;
  return o;
}function qt(r,e){
  var t=e||new Array(4);
  t[0]=(r>>0&255)/255;
  t[1]=(r>>8&255)/255;
  t[2]=(r>>16&255)/255;
  t[3]=(r>>24&255)/255;
  return t;
}function Xy(r){return r[0]+(r[1]<<8)+(r[2]<<16)+(r[3]<<24)}function Yy(r,e){
  var t=r.createTexture();

  t.buffer=function(a){
    r.bindTexture(r.TEXTURE_2D,t);
    r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE);
    r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);
    r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR);
    r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_NEAREST);
    r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,true);
    r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,a);
    r.generateMipmap(r.TEXTURE_2D);
    r.bindTexture(r.TEXTURE_2D,null);
  };

  t.deleteTexture=function(){r.deleteTexture(t)};
  return t;
}function Af(r,e){switch(e){case "float":
  {
    return[1,r.FLOAT,4];
  }case "vec2":
  {
    return[2,r.FLOAT,4];
  }case "vec3":
  {
    return[3,r.FLOAT,4];
  }case "vec4":
  {
    return[4,r.FLOAT,4];
  }case "int":
  {
    return[1,r.INT,4];
  }case "ivec2":
  {
    return[2,r.INT,4]
  }}}function Rf(r,e,t){switch(e){case r.FLOAT:
  {
    return new Float32Array(t);
  }case r.INT:
  {
    return new Int32Array(t)
  }}}function Zy(r,e,t,a,n,i){switch(e){case r.FLOAT:
  {
    return new Float32Array(t.buffer,i*a,n);
  }case r.INT:
  {
    return new Int32Array(t.buffer,i*a,n)
  }}}function Qy(r,e,t,a){
  var n=Af(r,e);
  var i=Je(n,2);
  var s=i[0];
  var o=i[1];
  var l=Rf(r,o,a);
  var u=r.createBuffer();
  r.bindBuffer(r.ARRAY_BUFFER,u);
  r.bufferData(r.ARRAY_BUFFER,l,r.STATIC_DRAW);

  if (o===r.FLOAT) {
    r.vertexAttribPointer(t,s,o,false,0,0);
  } else if (o===r.INT) {
    r.vertexAttribIPointer(t,s,o,0,0);
  }

  r.enableVertexAttribArray(t);
  r.bindBuffer(r.ARRAY_BUFFER,null);
  return u;
}function Fr(r,e,t,a){
  var n=Af(r,t);
  var i=Je(n,3);
  var s=i[0];
  var o=i[1];
  var l=i[2];
  var u=Rf(r,o,e*s);
  var v=s*l;
  var f=r.createBuffer();
  r.bindBuffer(r.ARRAY_BUFFER,f);
  r.bufferData(r.ARRAY_BUFFER,e*v,r.DYNAMIC_DRAW);
  r.enableVertexAttribArray(a);

  if (o===r.FLOAT) {
    r.vertexAttribPointer(a,s,o,false,v,0);
  } else if (o===r.INT) {
    r.vertexAttribIPointer(a,s,o,v,0);
  }

  r.vertexAttribDivisor(a,1);
  r.bindBuffer(r.ARRAY_BUFFER,null);
  var c=new Array(e);
  for (var h=0; h<e; h++) {
    c[h]=Zy(r,o,u,v,s,h);
  }
  f.dataArray=u;
  f.stride=v;
  f.size=s;
  f.getView=function(d){return c[d]};

  f.setPoint=function(d,y,g){
    var p=c[d];
    p[0]=y;
    p[1]=g;
  };

  f.bufferSubData=function(d){
    r.bindBuffer(r.ARRAY_BUFFER,f);

    if (d) {
      r.bufferSubData(r.ARRAY_BUFFER,0,u,0,d*s);
    } else {
      r.bufferSubData(r.ARRAY_BUFFER,0,u);
    }
  };

  return f;
}function Jy(r,e,t){
  var a=9;
  var n=new Float32Array(e*a);
  var i=new Array(e);
  for(var s=0;s<e;s++){var o=s*a*4;i[s]=new Float32Array(n.buffer,o,a)}var l=r.createBuffer();
  r.bindBuffer(r.ARRAY_BUFFER,l);
  r.bufferData(r.ARRAY_BUFFER,n.byteLength,r.DYNAMIC_DRAW);
  for(var u=0;u<3;u++){
    var v=t+u;
    r.enableVertexAttribArray(v);
    r.vertexAttribPointer(v,3,r.FLOAT,false,36,u*12);
    r.vertexAttribDivisor(v,1);
  }
  r.bindBuffer(r.ARRAY_BUFFER,null);
  l.getMatrixView=function(f){return i[f]};
  l.setData=function(f,c){i[c].set(f,0)};

  l.bufferSubData=function(){
    r.bindBuffer(r.ARRAY_BUFFER,l);
    r.bufferSubData(r.ARRAY_BUFFER,0,n);
  };

  return l;
}function jy(r){
  var e=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,e);var t=r.createTexture();
  r.bindTexture(r.TEXTURE_2D,t);
  r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR);
  r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE);
  r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);
  r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0);
  r.bindFramebuffer(r.FRAMEBUFFER,null);

  e.setFramebufferAttachmentSizes=function(a,n){
    r.bindTexture(r.TEXTURE_2D,t);
    r.texImage2D(r.TEXTURE_2D,0,r.RGBA,a,n,0,r.RGBA,r.UNSIGNED_BYTE,null);
  };

  return e;
}var Wl=typeof Float32Array !== "undefined"?Float32Array:Array;

if (!Math.hypot) {
  (Math.hypot = function(...args) {
    var r=0;
    for (var e=args.length; e--; ) {
      r+=args[e]*args[e];
    }return Math.sqrt(r)
  });
}

function Es(){
  var r=new Wl(9);

  if (Wl!=Float32Array) {
    r[1]=0;
    r[2]=0;
    r[3]=0;
    r[5]=0;
    r[6]=0;
    r[7]=0;
  }

  r[0]=1;
  r[4]=1;
  r[8]=1;
  return r;
}function $l(r){
  r[0]=1;
  r[1]=0;
  r[2]=0;
  r[3]=0;
  r[4]=1;
  r[5]=0;
  r[6]=0;
  r[7]=0;
  r[8]=1;
  return r;
}function em(r,e,t){
  var a=e[0];
  var n=e[1];
  var i=e[2];
  var s=e[3];
  var o=e[4];
  var l=e[5];
  var u=e[6];
  var v=e[7];
  var f=e[8];
  var c=t[0];
  var h=t[1];
  var d=t[2];
  var y=t[3];
  var g=t[4];
  var p=t[5];
  var m=t[6];
  var b=t[7];
  var w=t[8];
  r[0]=c*a+h*s+d*u;
  r[1]=c*n+h*o+d*v;
  r[2]=c*i+h*l+d*f;
  r[3]=y*a+g*s+p*u;
  r[4]=y*n+g*o+p*v;
  r[5]=y*i+g*l+p*f;
  r[6]=m*a+b*s+w*u;
  r[7]=m*n+b*o+w*v;
  r[8]=m*i+b*l+w*f;
  return r;
}function yn(r,e,t){
  var a=e[0];
  var n=e[1];
  var i=e[2];
  var s=e[3];
  var o=e[4];
  var l=e[5];
  var u=e[6];
  var v=e[7];
  var f=e[8];
  var c=t[0];
  var h=t[1];
  r[0]=a;
  r[1]=n;
  r[2]=i;
  r[3]=s;
  r[4]=o;
  r[5]=l;
  r[6]=c*a+h*s+u;
  r[7]=c*n+h*o+v;
  r[8]=c*i+h*l+f;
  return r;
}function Ul(r,e,t){
  var a=e[0];
  var n=e[1];
  var i=e[2];
  var s=e[3];
  var o=e[4];
  var l=e[5];
  var u=e[6];
  var v=e[7];
  var f=e[8];
  var c=Math.sin(t);
  var h=Math.cos(t);
  r[0]=h*a+c*s;
  r[1]=h*n+c*o;
  r[2]=h*i+c*l;
  r[3]=h*s-c*a;
  r[4]=h*o-c*n;
  r[5]=h*l-c*i;
  r[6]=u;
  r[7]=v;
  r[8]=f;
  return r;
}function Ws(r,e,t){
  var a=t[0];
  var n=t[1];
  r[0]=a*e[0];
  r[1]=a*e[1];
  r[2]=a*e[2];
  r[3]=n*e[3];
  r[4]=n*e[4];
  r[5]=n*e[5];
  r[6]=e[6];
  r[7]=e[7];
  r[8]=e[8];
  return r;
}function rm(r,e,t){
  r[0]=2/e;
  r[1]=0;
  r[2]=0;
  r[3]=0;
  r[4]=-2/t;
  r[5]=0;
  r[6]=-1;
  r[7]=1;
  r[8]=1;
  return r;
}

var tm=(function(){function r(e,t,a,n){
  ht(this,r);
  this.debugID=Math.floor(Math.random()*10000/* 1e4 */);
  this.r=e;
  this.texSize=t;
  this.texRows=a;
  this.texHeight=Math.floor(t/a);
  this.enableWrapping=true;
  this.locked=false;
  this.texture=null;
  this.needsBuffer=true;
  this.freePointer={x:0,row:0};
  this.keyToLocation=new Map;
  this.canvas=n(e,t,t);
  this.scratch=n(e,t,this.texHeight,"scratch");
}return gt(r,[{key:"lock",value:function(){this.locked=true}},{key:"getKeys",value:function(){return new Set(this.keyToLocation.keys())}},{key:"getScale",value:function(t){
  var a=t.w;
  var n=t.h;
  var i=this.texHeight;
  var s=this.texSize;
  var o=i/n;
  var l=a*o;
  var u=n*o;

  if (l>s) {
    o=s/a;
    l=a*o;
    u=n*o;
  }

  return {scale:o,texW:l,texH:u};
}},{key:"draw",value:function(t,a,n){
  var i=this;if (this.locked) {
    throw new Error("can't draw, atlas is locked");
  }
  var s=this.texSize;
  var o=this.texRows;
  var l=this.texHeight;
  var u=this.getScale(a);
  var v=u.scale;
  var f=u.texW;
  var c=u.texH;

  var h=function(b,w){if(n&&w){
    var E=w.context;
    var C=b.x;
    var x=b.row;
    var T=C;
    var k=l*x;
    E.save();
    E.translate(T,k);
    E.scale(v,v);
    n(E,a);
    E.restore();
  }};

  var d=[null,null];

  var y=function(){
    h(i.freePointer,i.canvas);
    d[0]={x:i.freePointer.x,y:i.freePointer.row*l,w:f,h:c};
    d[1]={x:i.freePointer.x+f,y:i.freePointer.row*l,w:0,h:c};
    i.freePointer.x+=f;

    if (i.freePointer.x==s) {
      i.freePointer.x=0;
      i.freePointer.row++;
    }
  };

  var g=function(){
    var b=i.scratch;
    var w=i.canvas;
    b.clear();
    h({x:0,row:0},b);
    var E=s-i.freePointer.x;
    var C=f-E;
    var x=l;
    {
      var T=i.freePointer.x;
      var k=i.freePointer.row*l;
      var D=E;
      w.context.drawImage(b,0,0,D,x,T,k,D,x);
      d[0]={x:T,y:k,w:D,h:c};
    }{
    var B=E;
    var P=(i.freePointer.row+1)*l;
    var A=C;

    if (w) {
      w.context.drawImage(b,B,0,A,x,0,P,A,x);
    }

    d[1]={x:0,y:P,w:A,h:c};
  }
    i.freePointer.x=C;
    i.freePointer.row++;
  };

  var p=function(){
    i.freePointer.x=0;
    i.freePointer.row++;
  };

  if (this.freePointer.x+f<=s) {
    y();
  } else {
    if (this.freePointer.row>=o-1) {
      return false;
    }

    if (this.freePointer.x===s) {
      p();
      y();
    } else if (this.enableWrapping) {
      g();
    } else {
      p();
      y();
    }
  }
  this.keyToLocation.set(t,d);
  this.needsBuffer=true;
  return d;
}},{key:"getOffsets",value:function(t){return this.keyToLocation.get(t)}},{key:"isEmpty",value:function(){return this.freePointer.x===0&&this.freePointer.row===0}},{key:"canFit",value:function(t){
  if (this.locked) {
    return false;
  }
  var a=this.texSize;
  var n=this.texRows;
  var i=this.getScale(t);
  var s=i.texW;
  return this.freePointer.x+s>a?this.freePointer.row<n-1:true;
}},{key:"bufferIfNeeded",value:function(t){
  if (!this.texture) {
    (this.texture = Yy(t,this.debugID));
  }

  if (this.needsBuffer) {
    this.texture.buffer(this.canvas);
    this.needsBuffer=false;
    this.locked&&(this.canvas=null,this.scratch=null);
  }
}},{key:"dispose",value:function(){
  if (this.texture) {
    this.texture.deleteTexture();
    this.texture=null;
  }

  this.canvas=null;
  this.scratch=null;
  this.locked=true;
}}]);})();

var am=(function(){function r(e,t,a,n){
  ht(this,r);
  this.r=e;
  this.texSize=t;
  this.texRows=a;
  this.createTextureCanvas=n;
  this.atlases=[];
  this.styleKeyToAtlas=new Map;
  this.markedKeys=new Set;
}return gt(r,[{key:"getKeys",value:function(){return new Set(this.styleKeyToAtlas.keys())}},{key:"_createAtlas",value:function(){
  var t=this.r;
  var a=this.texSize;
  var n=this.texRows;
  var i=this.createTextureCanvas;
  return new tm(t,a,n,i)
}},{key:"_getScratchCanvas",value:function(){if(!this.scratch){
  var t=this.r;
  var a=this.texSize;
  var n=this.texRows;
  var i=this.createTextureCanvas;
  var s=Math.floor(a/n);
  this.scratch=i(t,a,s,"scratch")
}return this.scratch}},{key:"draw",value:function(t,a,n){
  var i=this.styleKeyToAtlas.get(t);

  if (!i) {
    i=this.atlases[this.atlases.length-1];
    (!i||!i.canFit(a))&&(i&&i.lock(),i=this._createAtlas(),this.atlases.push(i));
    i.draw(t,a,n);
    this.styleKeyToAtlas.set(t,i);
  }

  return i;
}},{key:"getAtlas",value:function(t){return this.styleKeyToAtlas.get(t)}},{key:"hasAtlas",value:function(t){return this.styleKeyToAtlas.has(t)}},{key:"markKeyForGC",value:function(t){this.markedKeys.add(t)}},{key:"gc",value:function(){
  var t=this;
  var a=this.markedKeys;
  if(a.size===0){console.log("nothing to garbage collect");return}
  var n=[];
  var i=new Map;
  var s=null;
  var o=kr(this.atlases);
  var l;
  try{var u=function(){
    var f=l.value;
    var c=f.getKeys();
    var h=nm(a,c);
    if (h.size===0) {
      n.push(f);
      c.forEach(function(E){return i.set(E,f)});
      return 1;
    }

    if (!s) {
      s=t._createAtlas();
      n.push(s);
    }

    var d=kr(c);
    var y;
    try{for(d.s();!(y=d.n()).done;){var g=y.value;if(!h.has(g)){
      var p=f.getOffsets(g);
      var m=Je(p,2);
      var b=m[0];
      var w=m[1];

      if (!s.canFit({w:b.w+w.w,h:b.h})) {
        s.lock();
        s=t._createAtlas();
        n.push(s);
      }

      if (f.canvas) {
        t._copyTextureToNewAtlas(g,f,s);
        i.set(g,s);
      }
    }}}catch(E){d.e(E)}finally{d.f()}f.dispose()
  };for (o.s(); !(l=o.n()).done; ) {
    u()
  }}catch(v){o.e(v)}finally{o.f()}
  this.atlases=n;
  this.styleKeyToAtlas=i;
  this.markedKeys=new Set;
}},{key:"_copyTextureToNewAtlas",value:function(t,a,n){
  var i=a.getOffsets(t);
  var s=Je(i,2);
  var o=s[0];
  var l=s[1];
  if (l.w===0) {
    n.draw(t,o,function(c){c.drawImage(a.canvas,o.x,o.y,o.w,o.h,0,0,o.w,o.h)});
  } else {
    var u=this._getScratchCanvas();
    u.clear();
    u.context.drawImage(a.canvas,o.x,o.y,o.w,o.h,0,0,o.w,o.h);
    u.context.drawImage(a.canvas,l.x,l.y,l.w,l.h,o.w,0,l.w,l.h);
    var v=o.w+l.w;
    var f=o.h;
    n.draw(t,{w:v,h:f},function(c){c.drawImage(u,0,0,v,f,0,0,v,f)})
  }
}},{key:"getCounts",value:function(){return{keyCount:this.styleKeyToAtlas.size,atlasCount:new Set(this.styleKeyToAtlas.values()).size}}}]);})();

function nm(r,e){return r.intersection?r.intersection(e):new Set(mn(r).filter(function(t){return e.has(t)}))}

var im=(function(){function r(e,t){
  ht(this,r);
  this.r=e;
  this.globalOptions=t;
  this.atlasSize=t.webglTexSize;
  this.maxAtlasesPerBatch=t.webglTexPerBatch;
  this.renderTypes=new Map;
  this.collections=new Map;
  this.typeAndIdToKey=new Map;
}return gt(r,[{key:"getAtlasSize",value:function(){return this.atlasSize}},{key:"addAtlasCollection",value:function(t,a){
  var n=this.globalOptions;
  var i=n.webglTexSize;
  var s=n.createTextureCanvas;
  var o=a.texRows;
  var l=this._cacheScratchCanvas(s);
  var u=new am(this.r,i,o,l);
  this.collections.set(t,u)
}},{key:"addRenderType",value:function(t,a){
  var n=a.collection;if (!this.collections.has(n)) {
    throw new Error(`invalid atlas collection name '${n}'`);
  }
  var i=this.collections.get(n);
  var s=be({type:t,atlasCollection:i},a);
  this.renderTypes.set(t,s)
}},{key:"getRenderTypeOpts",value:function(t){return this.renderTypes.get(t)}},{key:"getAtlasCollection",value:function(t){return this.collections.get(t)}},{key:"_cacheScratchCanvas",value:function(t){
  var a=-1;
  var n=-1;
  var i=null;
  return function(s,o,l,u){return u?((!i||o!=a||l!=n)&&(a=o,n=l,i=t(s,o,l)),i):t(s,o,l)}
}},{key:"_key",value:function(t,a){return `${t}-${a}`;}},{key:"invalidate",value:function(t, n = {}) {
  var a=this;
  var i=n.forceRedraw;
  var s=i===void 0?false:i;
  var o=n.filterEle;
  var l=o===void 0?function(){return true;}:o;
  var u=n.filterType;
  var v=u===void 0?function(){return true;}:u;
  var f=false;
  var c=false;
  var h=kr(t);
  var d;
  try{for(h.s();!(d=h.n()).done;){var y=d.value;if(l(y)){
    var g=kr(this.renderTypes.values());
    var p;
    try{var m=function(){
      var w=p.value;
      var E=w.type;
      if(v(E)){
        var C=a.collections.get(w.collection);
        var x=w.getKey(y);
        var T=Array.isArray(x)?x:[x];
        if (s) {
          T.forEach(function(P){return C.markKeyForGC(P)});
          c=true;
        } else {
          var k=w.getID?w.getID(y):y.id();
          var D=a._key(E,k);
          var B=a.typeAndIdToKey.get(D);

          if (B!==void 0&&!Ky(T,B)) {
            f=true;
            a.typeAndIdToKey.delete(D);
            B.forEach(function(P){return C.markKeyForGC(P)});
          }
        }
      }
    };for (g.s(); !(p=g.n()).done; ) {
      m()
    }}catch(b){g.e(b)}finally{g.f()}
  }}}catch(b){h.e(b)}finally{h.f()}

  if (c) {
    this.gc();
    f=false;
  }

  return f;
}},{key:"gc",value:function(){
  var t=kr(this.collections.values());
  var a;
  try{for(t.s();!(a=t.n()).done;){var n=a.value;n.gc()}}catch(i){t.e(i)}finally{t.f()}
}},{key:"getOrCreateAtlas",value:function(t,a,n,i){
  var s=this.renderTypes.get(a);
  var o=this.collections.get(s.collection);
  var l=false;

  var u=o.draw(i,n,function(c){
    if (s.drawClipped) {
      c.save();
      c.beginPath();
      c.rect(0,0,n.w,n.h);
      c.clip();
      s.drawElement(c,t,n,true,true);
      c.restore();
    } else {
      s.drawElement(c,t,n,true,true);
    }

    l=true;
  });

  if(l){
    var v=s.getID?s.getID(t):t.id();
    var f=this._key(a,v);

    if (this.typeAndIdToKey.has(f)) {
      this.typeAndIdToKey.get(f).push(i);
    } else {
      this.typeAndIdToKey.set(f,[i]);
    }
  }return u
}},{key:"getAtlasInfo",value:function(t,a){
  var n=this;
  var i=this.renderTypes.get(a);
  var s=i.getKey(t);
  var o=Array.isArray(s)?s:[s];
  return o.map(function(l){
    var u=i.getBoundingBox(t,l);
    var v=n.getOrCreateAtlas(t,a,u,l);
    var f=v.getOffsets(l);
    var c=Je(f,2);
    var h=c[0];
    var d=c[1];
    return{atlas:v,tex:h,tex1:h,tex2:d,bb:u}
  });
}},{key:"getDebugInfo",value:function(){
  var t=[];
  var a=kr(this.collections);
  var n;
  try{for(a.s();!(n=a.n()).done;){
    var i=Je(n.value,2);
    var s=i[0];
    var o=i[1];
    var l=o.getCounts();
    var u=l.keyCount;
    var v=l.atlasCount;
    t.push({type:s,keyCount:u,atlasCount:v})
  }}catch(f){a.e(f)}finally{a.f()}return t
}}]);})();

var sm=(function(){function r(e){
  ht(this,r);
  this.globalOptions=e;
  this.atlasSize=e.webglTexSize;
  this.maxAtlasesPerBatch=e.webglTexPerBatch;
  this.batchAtlases=[];
}return gt(r,[{key:"getMaxAtlasesPerBatch",value:function(){return this.maxAtlasesPerBatch}},{key:"getAtlasSize",value:function(){return this.atlasSize}},{key:"getIndexArray",value:function(){return Array.from({length:this.maxAtlasesPerBatch},function(t,a){return a})}},{key:"startBatch",value:function(){this.batchAtlases=[]}},{key:"getAtlasCount",value:function(){return this.batchAtlases.length}},{key:"getAtlases",value:function(){return this.batchAtlases}},{key:"canAddToCurrentBatch",value:function(t){return this.batchAtlases.length===this.maxAtlasesPerBatch?this.batchAtlases.includes(t):true;}},{key:"getAtlasIndexForBatch",value:function(t){var a=this.batchAtlases.indexOf(t);if(a<0){
  if (this.batchAtlases.length===this.maxAtlasesPerBatch) {
    throw new Error("cannot add more atlases to batch");
  }
  this.batchAtlases.push(t);
  a=this.batchAtlases.length-1;
}return a}}]);})();

var om=`
  float circleSD(vec2 p, float r) {
    return distance(vec2(0), p) - r; // signed distance
  }
`;

var um=`
  float rectangleSD(vec2 p, vec2 b) {
    vec2 d = abs(p)-b;
    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);
  }
`;

var lm=`
  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {
    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;
    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;
    vec2 q = abs(p) - b + cr.x;
    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;
  }
`;

var vm=`
  float ellipseSD(vec2 p, vec2 ab) {
    p = abs( p ); // symmetry

    // find root with Newton solver
    vec2 q = ab*(p-ab);
    float w = (q.x<q.y)? 1.570796327 : 0.0;
    for( int i=0; i<5; i++ ) {
      vec2 cs = vec2(cos(w),sin(w));
      vec2 u = ab*vec2( cs.x,cs.y);
      vec2 v = ab*vec2(-cs.y,cs.x);
      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));
    }
    
    // compute final point and distance
    float d = length(p-ab*vec2(cos(w),sin(w)));
    
    // return signed distance
    return (dot(p/ab,p/ab)>1.0) ? d : -d;
  }
`;

var Ea={SCREEN:{name:"screen",screen:true},PICKING:{name:"picking",picking:true}};
var An={IGNORE:1,USE_BB:2};
var Cs=0;
var Kl=1;
var Xl=2;
var Ts=3;
var _t=4;
var sn=5;
var ga=6;
var pa=7;

var fm=(function(){function r(e,t,a){
  ht(this,r);
  this.r=e;
  this.gl=t;
  this.maxInstances=a.webglBatchSize;
  this.atlasSize=a.webglTexSize;
  this.bgColor=a.bgColor;
  this.debug=a.webglDebug;
  this.batchDebugInfo=[];
  a.enableWrapping=true;
  a.createTextureCanvas=Hy;
  this.atlasManager=new im(e,a);
  this.batchManager=new sm(a);
  this.simpleShapeOptions=new Map;
  this.program=this._createShaderProgram(Ea.SCREEN);
  this.pickingProgram=this._createShaderProgram(Ea.PICKING);
  this.vao=this._createVAO();
}return gt(r,[{key:"addAtlasCollection",value:function(t,a){this.atlasManager.addAtlasCollection(t,a)}},{key:"addTextureAtlasRenderType",value:function(t,a){this.atlasManager.addRenderType(t,a)}},{key:"addSimpleShapeRenderType",value:function(t,a){this.simpleShapeOptions.set(t,a)}},{key:"invalidate",value:function(t, a = {}) {
  var n=a.type;
  var i=this.atlasManager;
  return n?i.invalidate(t,{filterType:function(o){return o===n},forceRedraw:true}):i.invalidate(t);
}},{key:"gc",value:function(){this.atlasManager.gc()}},{key:"_createShaderProgram",value:function(t){
  var a=this.gl;

  var n=`#version 300 es
        precision highp float;

        uniform mat3 uPanZoomMatrix;
        uniform int  uAtlasSize;
        
        // instanced
        in vec2 aPosition; // a vertex from the unit square
        
        in mat3 aTransform; // used to transform verticies, eg into a bounding box
        in int aVertType; // the type of thing we are rendering

        // the z-index that is output when using picking mode
        in vec4 aIndex;
        
        // For textures
        in int aAtlasId; // which shader unit/atlas to use
        in vec4 aTex; // x/y/w/h of texture in atlas

        // for edges
        in vec4 aPointAPointB;
        in vec4 aPointCPointD;
        in vec2 aLineWidth; // also used for node border width

        // simple shapes
        in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
        in vec4 aColor; // also used for edges
        in vec4 aBorderColor; // aLineWidth is used for border width

        // output values passed to the fragment shader
        out vec2 vTexCoord;
        out vec4 vColor;
        out vec2 vPosition;
        // flat values are not interpolated
        flat out int vAtlasId; 
        flat out int vVertType;
        flat out vec2 vTopRight;
        flat out vec2 vBotLeft;
        flat out vec4 vCornerRadius;
        flat out vec4 vBorderColor;
        flat out vec2 vBorderWidth;
        flat out vec4 vIndex;
        
        void main(void) {
          int vid = gl_VertexID;
          vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

          if(aVertType == `.concat(Cs,`) {
            float texX = aTex.x; // texture coordinates
            float texY = aTex.y;
            float texW = aTex.z;
            float texH = aTex.w;

            if(vid == 1 || vid == 2 || vid == 4) {
              texX += texW;
            }
            if(vid == 2 || vid == 4 || vid == 5) {
              texY += texH;
            }

            float d = float(uAtlasSize);
            vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

            gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          }
          else if(aVertType == `).concat(_t," || aVertType == ").concat(pa,` 
               || aVertType == `).concat(sn," || aVertType == ").concat(ga,`) { // simple shapes

            // the bounding box is needed by the fragment shader
            vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
            vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
            vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

            // calculations are done in the fragment shader, just pass these along
            vColor = aColor;
            vCornerRadius = aCornerRadius;
            vBorderColor = aBorderColor;
            vBorderWidth = aLineWidth;

            gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          }
          else if(aVertType == `).concat(Kl,`) {
            vec2 source = aPointAPointB.xy;
            vec2 target = aPointAPointB.zw;

            // adjust the geometry so that the line is centered on the edge
            position.y = position.y - 0.5;

            // stretch the unit square into a long skinny rectangle
            vec2 xBasis = target - source;
            vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
            vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

            gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
            vColor = aColor;
          } 
          else if(aVertType == `).concat(Xl,`) {
            vec2 pointA = aPointAPointB.xy;
            vec2 pointB = aPointAPointB.zw;
            vec2 pointC = aPointCPointD.xy;
            vec2 pointD = aPointCPointD.zw;

            // adjust the geometry so that the line is centered on the edge
            position.y = position.y - 0.5;

            vec2 p0, p1, p2, pos;
            if(position.x == 0.0) { // The left side of the unit square
              p0 = pointA;
              p1 = pointB;
              p2 = pointC;
              pos = position;
            } else { // The right side of the unit square, use same approach but flip the geometry upside down
              p0 = pointD;
              p1 = pointC;
              p2 = pointB;
              pos = vec2(0.0, -position.y);
            }

            vec2 p01 = p1 - p0;
            vec2 p12 = p2 - p1;
            vec2 p21 = p1 - p2;

            // Find the normal vector.
            vec2 tangent = normalize(normalize(p12) + normalize(p01));
            vec2 normal = vec2(-tangent.y, tangent.x);

            // Find the vector perpendicular to p0 -> p1.
            vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

            // Determine the bend direction.
            float sigma = sign(dot(p01 + p21, normal));
            float width = aLineWidth[0];

            if(sign(pos.y) == -sigma) {
              // This is an intersecting vertex. Adjust the position so that there's no overlap.
              vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
              gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
            } else {
              // This is a non-intersecting vertex. Treat it like a mitre join.
              vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
              gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
            }

            vColor = aColor;
          } 
          else if(aVertType == `).concat(Ts,` && vid < 3) {
            // massage the first triangle into an edge arrow
            if(vid == 0)
              position = vec2(-0.15, -0.3);
            if(vid == 1)
              position = vec2(  0.0,  0.0);
            if(vid == 2)
              position = vec2( 0.15, -0.3);

            gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
            vColor = aColor;
          }
          else {
            gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
          }

          vAtlasId = aAtlasId;
          vVertType = aVertType;
          vIndex = aIndex;
        }
      `);

  var i=this.batchManager.getIndexArray();

  var s=`#version 300 es
        precision highp float;

        // declare texture unit for each texture atlas in the batch
        `.concat(i.map(function(u){return `uniform sampler2D uTexture${u};`;}).join(`
      `),`

        uniform vec4 uBGColor;
        uniform float uZoom;

        in vec2 vTexCoord;
        in vec4 vColor;
        in vec2 vPosition; // model coordinates

        flat in int vAtlasId;
        flat in vec4 vIndex;
        flat in int vVertType;
        flat in vec2 vTopRight;
        flat in vec2 vBotLeft;
        flat in vec4 vCornerRadius;
        flat in vec4 vBorderColor;
        flat in vec2 vBorderWidth;

        out vec4 outColor;

        `).concat(om,`
        `).concat(um,`
        `).concat(lm,`
        `).concat(vm,`

        vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
          return vec4( 
            top.rgb + (bot.rgb * (1.0 - top.a)),
            top.a   + (bot.a   * (1.0 - top.a)) 
          );
        }

        vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
          // scale to the zoom level so that borders don't look blurry when zoomed in
          // note 1.5 is an aribitrary value chosen because it looks good
          return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
        }

        void main(void) {
          if(vVertType == `).concat(Cs,`) {
            // look up the texel from the texture unit
            `).concat(i.map(function(u){return `if(vAtlasId == ${u}) outColor = texture(uTexture${u}, vTexCoord);`;}).join(`
      else `),`
          } 
          else if(vVertType == `).concat(Ts,`) {
            // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
            outColor = blend(vColor, uBGColor);
            outColor.a = 1.0; // make opaque, masks out line under arrow
          }
          else if(vVertType == `).concat(_t,` && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
            outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
          }
          else if(vVertType == `).concat(_t," || vVertType == ").concat(pa,` 
            || vVertType == `).concat(sn," || vVertType == ").concat(ga,`) { // use SDF

            float outerBorder = vBorderWidth[0];
            float innerBorder = vBorderWidth[1];
            float borderPadding = outerBorder * 2.0;
            float w = vTopRight.x - vBotLeft.x - borderPadding;
            float h = vTopRight.y - vBotLeft.y - borderPadding;
            vec2 b = vec2(w/2.0, h/2.0); // half width, half height
            vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

            float d; // signed distance
            if(vVertType == `).concat(_t,`) {
              d = rectangleSD(p, b);
            } else if(vVertType == `).concat(pa,` && w == h) {
              d = circleSD(p, b.x); // faster than ellipse
            } else if(vVertType == `).concat(pa,`) {
              d = ellipseSD(p, b);
            } else {
              d = roundRectangleSD(p, b, vCornerRadius.wzyx);
            }

            // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
            // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
            if(d > 0.0) {
              if(d > outerBorder) {
                discard;
              } else {
                outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
              }
            } else {
              if(d > innerBorder) {
                vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
                vec4 innerBorderColor = blend(vBorderColor, vColor);
                outColor = distInterp(innerBorderColor, outerColor, d);
              } 
              else {
                vec4 outerColor;
                if(innerBorder == 0.0 && outerBorder == 0.0) {
                  outerColor = vec4(0);
                } else if(innerBorder == 0.0) {
                  outerColor = vBorderColor;
                } else {
                  outerColor = blend(vBorderColor, vColor);
                }
                outColor = distInterp(vColor, outerColor, d - innerBorder);
              }
            }
          }
          else {
            outColor = vColor;
          }

          `).concat(t.picking?`if(outColor.a == 0.0) discard;
               else outColor = vIndex;`:"",`
        }
      `);

  var o=Gy(a,n,s);
  o.aPosition=a.getAttribLocation(o,"aPosition");
  o.aIndex=a.getAttribLocation(o,"aIndex");
  o.aVertType=a.getAttribLocation(o,"aVertType");
  o.aTransform=a.getAttribLocation(o,"aTransform");
  o.aAtlasId=a.getAttribLocation(o,"aAtlasId");
  o.aTex=a.getAttribLocation(o,"aTex");
  o.aPointAPointB=a.getAttribLocation(o,"aPointAPointB");
  o.aPointCPointD=a.getAttribLocation(o,"aPointCPointD");
  o.aLineWidth=a.getAttribLocation(o,"aLineWidth");
  o.aColor=a.getAttribLocation(o,"aColor");
  o.aCornerRadius=a.getAttribLocation(o,"aCornerRadius");
  o.aBorderColor=a.getAttribLocation(o,"aBorderColor");
  o.uPanZoomMatrix=a.getUniformLocation(o,"uPanZoomMatrix");
  o.uAtlasSize=a.getUniformLocation(o,"uAtlasSize");
  o.uBGColor=a.getUniformLocation(o,"uBGColor");
  o.uZoom=a.getUniformLocation(o,"uZoom");
  o.uTextures=[];
  for (var l=0; l<this.batchManager.getMaxAtlasesPerBatch(); l++) {
    o.uTextures.push(a.getUniformLocation(o,`uTexture${l}`));
  }return o
}},{key:"_createVAO",value:function(){
  var t=[0,0,1,0,1,1,0,0,1,1,0,1];this.vertexCount=t.length/2;
  var a=this.maxInstances;
  var n=this.gl;
  var i=this.program;
  var s=n.createVertexArray();
  n.bindVertexArray(s);
  Qy(n,"vec2",i.aPosition,t);
  this.transformBuffer=Jy(n,a,i.aTransform);
  this.indexBuffer=Fr(n,a,"vec4",i.aIndex);
  this.vertTypeBuffer=Fr(n,a,"int",i.aVertType);
  this.atlasIdBuffer=Fr(n,a,"int",i.aAtlasId);
  this.texBuffer=Fr(n,a,"vec4",i.aTex);
  this.pointAPointBBuffer=Fr(n,a,"vec4",i.aPointAPointB);
  this.pointCPointDBuffer=Fr(n,a,"vec4",i.aPointCPointD);
  this.lineWidthBuffer=Fr(n,a,"vec2",i.aLineWidth);
  this.colorBuffer=Fr(n,a,"vec4",i.aColor);
  this.cornerRadiusBuffer=Fr(n,a,"vec4",i.aCornerRadius);
  this.borderColorBuffer=Fr(n,a,"vec4",i.aBorderColor);
  n.bindVertexArray(null);
  return s;
}},{key:"buffers",get:function(){
  var t=this;

  if (!this._buffers) {
    (this._buffers = Object.keys(this).filter(function(a){return at(a,"Buffer")}).map(function(a){return t[a]}));
  }

  return this._buffers;
}},{key:"startFrame",value:function(t, a = Ea.SCREEN) {
  this.panZoomMatrix=t;
  this.renderTarget=a;
  this.batchDebugInfo=[];
  this.wrappedCount=0;
  this.simpleCount=0;
  this.startBatch();
}},{key:"startBatch",value:function(){
  this.instanceCount=0;
  this.batchManager.startBatch();
}},{key:"endFrame",value:function(){this.endBatch()}},{key:"_isVisible",value:function(t,a){return t.visible()?a&&a.isVisible?a.isVisible(t):true:false;}},{key:"drawTexture",value:function(t,a,n){
  var i=this.atlasManager;
  var s=this.batchManager;
  var o=i.getRenderTypeOpts(n);
  if(this._isVisible(t,o)&&!(t.isEdge()&&!this._isValidEdge(t))){
    if(this.renderTarget.picking&&o.getTexPickingMode){var l=o.getTexPickingMode(t);if (l===An.IGNORE) {
      return;
    }if(l==An.USE_BB){this.drawPickingRectangle(t,a,n);return}}
    var u=i.getAtlasInfo(t,n);
    var v=kr(u);
    var f;
    try{for(v.s();!(f=v.n()).done;){
      var c=f.value;
      var h=c.atlas;
      var d=c.tex1;
      var y=c.tex2;

      if (!s.canAddToCurrentBatch(h)) {
        this.endBatch();
      }

      var g=s.getAtlasIndexForBatch(h);
      for(var p=0, m=[[d,true],[y,false]];p<m.length;p++){
        var b=Je(m[p],2);
        var w=b[0];
        var E=b[1];
        if(w.w!=0){
          var C=this.instanceCount;this.vertTypeBuffer.getView(C)[0]=Cs;var x=this.indexBuffer.getView(C);qt(a,x);var T=this.atlasIdBuffer.getView(C);T[0]=g;var k=this.texBuffer.getView(C);
          k[0]=w.x;
          k[1]=w.y;
          k[2]=w.w;
          k[3]=w.h;
          var D=this.transformBuffer.getMatrixView(C);
          this.setTransformMatrix(t,D,o,c,E);
          this.instanceCount++;

          if (!E) {
            this.wrappedCount++;
          }

          if (this.instanceCount>=this.maxInstances) {
            this.endBatch();
          }
        }
      }
    }}catch(B){v.e(B)}finally{v.f()}
  }
}},{key:"setTransformMatrix",value:function(t, a, n, i, s = true) {
  var o=0;

  if (n.shapeProps&&n.shapeProps.padding) {
    (o = t.pstyle(n.shapeProps.padding).pfValue);
  }

  if (i) {
    var l=i.bb;
    var u=i.tex1;
    var v=i.tex2;
    var f=u.w/(u.w+v.w);

    if (!s) {
      (f = 1-f);
    }

    var c=this._getAdjustedBB(l,o,s,f);this._applyTransformMatrix(a,c,n,t)
  } else {
    var h=n.getBoundingBox(t);
    var d=this._getAdjustedBB(h,o,true,1);
    this._applyTransformMatrix(a,d,n,t)
  }
}},{key:"_applyTransformMatrix",value:function(t,a,n,i){
  var s;
  var o;
  $l(t);var l=n.getRotation?n.getRotation(i):0;if (l!==0) {
    var u=n.getRotationPoint(i);
    var v=u.x;
    var f=u.y;
    yn(t,t,[v,f]);
    Ul(t,t,l);
    var c=n.getRotationOffset(i);
    s=c.x+(a.xOffset||0);
    o=c.y+(a.yOffset||0);
  } else {
    s=a.x1;
    o=a.y1;
  }
  yn(t,t,[s,o]);
  Ws(t,t,[a.w,a.h]);
}},{key:"_getAdjustedBB",value:function(t,a,n,i){
  var s=t.x1;
  var o=t.y1;
  var l=t.w;
  var u=t.h;
  var v=t.yOffset;

  if (a) {
    s-=a;
    o-=a;
    l+=2*a;
    u+=2*a;
  }

  var f=0;
  var c=l*i;

  if (n&&i<1) {
    l=c;
  } else if (!n&&i<1) {
    f=l-c;
    s+=f;
    l=c;
  }

  return {x1:s,y1:o,w:l,h:u,xOffset:f,yOffset:v};
}},{key:"drawPickingRectangle",value:function(t,a,n){
  var i=this.atlasManager.getRenderTypeOpts(n);
  var s=this.instanceCount;
  this.vertTypeBuffer.getView(s)[0]=_t;var o=this.indexBuffer.getView(s);qt(a,o);var l=this.colorBuffer.getView(s);xt([0,0,0],1,l);var u=this.transformBuffer.getMatrixView(s);
  this.setTransformMatrix(t,u,i);
  this.simpleCount++;
  this.instanceCount++;

  if (this.instanceCount>=this.maxInstances) {
    this.endBatch();
  }
}},{key:"drawNode",value:function(t,a,n){var i=this.simpleShapeOptions.get(n);if(this._isVisible(t,i)){
  var s=i.shapeProps;
  var o=this._getVertTypeForShape(t,s.shape);
  if(o===void 0||i.isSimple&&!i.isSimple(t)){this.drawTexture(t,a,n);return}var l=this.instanceCount;
  this.vertTypeBuffer.getView(l)[0]=o;

  if (o===sn||o===ga) {
    var u=i.getBoundingBox(t);
    var v=this._getCornerRadius(t,s.radius,u);
    var f=this.cornerRadiusBuffer.getView(l);
    f[0]=v;
    f[1]=v;
    f[2]=v;
    f[3]=v;

    if (o===ga) {
      f[0]=0;
      f[2]=0;
    }
  }

  var c=this.indexBuffer.getView(l);qt(a,c);
  var h=t.pstyle(s.color).value;
  var d=t.pstyle(s.opacity).value;
  var y=this.colorBuffer.getView(l);
  xt(h,d,y);var g=this.lineWidthBuffer.getView(l);
  g[0]=0;
  g[1]=0;

  if (s.border) {var p=t.pstyle("border-width").value;if(p>0){
    var m=t.pstyle("border-color").value;
    var b=t.pstyle("border-opacity").value;
    var w=this.borderColorBuffer.getView(l);
    xt(m,b,w);var E=t.pstyle("border-position").value;if (E==="inside") {
      g[0]=0;
      g[1]=-p;
    } else if (E==="outside") {
      g[0]=p;
      g[1]=0;
    } else {
      var C=p/2;
      g[0]=C;
      g[1]=-C;
    }
  }}

  var x=this.transformBuffer.getMatrixView(l);
  this.setTransformMatrix(t,x,i);
  this.simpleCount++;
  this.instanceCount++;

  if (this.instanceCount>=this.maxInstances) {
    this.endBatch();
  }
}}},{key:"_getVertTypeForShape",value:function(t,a){var n=t.pstyle(a).value;switch(n){case "rectangle":
  {
    return _t;
  }case "ellipse":
  {
    return pa;
  }case"roundrectangle":case "round-rectangle":
  {
    return sn;
  }case "bottom-round-rectangle":
  {
    return ga;
  }default:
  {
    return
  }}}},{key:"_getCornerRadius",value:function(t,a,n){
  var i=n.w;
  var s=n.h;
  if (t.pstyle(a).value==="auto") {
    return vt(i,s);
  }
  var o=t.pstyle(a).pfValue;
  var l=i/2;
  var u=s/2;
  return Math.min(o,u,l)
}},{key:"drawEdgeArrow",value:function(t,a,n){if(t.visible()){
  var i=t._private.rscratch;
  var s;
  var o;
  var l;

  if (n==="source") {
    s=i.arrowStartX;
    o=i.arrowStartY;
    l=i.srcArrowAngle;
  } else {
    s=i.arrowEndX;
    o=i.arrowEndY;
    l=i.tgtArrowAngle;
  }

  if (!(isNaN(s)||s==null||isNaN(o)||o==null||isNaN(l)||l==null)) {var u=t.pstyle(n+"-arrow-shape").value;if(u!=="none"){
    var v=t.pstyle(n+"-arrow-color").value;
    var f=t.pstyle("opacity").value;
    var c=t.pstyle("line-opacity").value;
    var h=f*c;
    var d=t.pstyle("width").pfValue;
    var y=t.pstyle("arrow-scale").value;
    var g=this.r.getArrowWidth(d,y);
    var p=this.instanceCount;
    var m=this.transformBuffer.getMatrixView(p);
    $l(m);
    yn(m,m,[s,o]);
    Ws(m,m,[g,g]);
    Ul(m,m,l);
    this.vertTypeBuffer.getView(p)[0]=Ts;
    var b=this.indexBuffer.getView(p);qt(a,b);var w=this.colorBuffer.getView(p);
    xt(v,h,w);
    this.instanceCount++;

    if (this.instanceCount>=this.maxInstances) {
      this.endBatch();
    }
  }}
}}},{key:"drawEdgeLine",value:function(t,a){if(t.visible()){var n=this._getEdgePoints(t);if(n){
  var i=t.pstyle("opacity").value;
  var s=t.pstyle("line-opacity").value;
  var o=t.pstyle("width").pfValue;
  var l=t.pstyle("line-color").value;
  var u=i*s;

  if (n.length/2+this.instanceCount>this.maxInstances) {
    this.endBatch();
  }

  if (n.length==4) {
    var v=this.instanceCount;this.vertTypeBuffer.getView(v)[0]=Kl;var f=this.indexBuffer.getView(v);qt(a,f);var c=this.colorBuffer.getView(v);xt(l,u,c);var h=this.lineWidthBuffer.getView(v);h[0]=o;var d=this.pointAPointBBuffer.getView(v);
    d[0]=n[0];
    d[1]=n[1];
    d[2]=n[2];
    d[3]=n[3];
    this.instanceCount++;

    if (this.instanceCount>=this.maxInstances) {
      this.endBatch();
    }
  } else {
    for(var y=0;y<n.length-2;y+=2){
      var g=this.instanceCount;this.vertTypeBuffer.getView(g)[0]=Xl;var p=this.indexBuffer.getView(g);qt(a,p);var m=this.colorBuffer.getView(g);xt(l,u,m);var b=this.lineWidthBuffer.getView(g);b[0]=o;
      var w=n[y-2];
      var E=n[y-1];
      var C=n[y];
      var x=n[y+1];
      var T=n[y+2];
      var k=n[y+3];
      var D=n[y+4];
      var B=n[y+5];

      if (y==0) {
        w=2*C-T+0.001/* .001 */;
        E=2*x-k+0.001/* .001 */;
      }

      if (y==n.length-4) {
        D=2*T-C+0.001/* .001 */;
        B=2*k-x+0.001/* .001 */;
      }

      var P=this.pointAPointBBuffer.getView(g);
      P[0]=w;
      P[1]=E;
      P[2]=C;
      P[3]=x;
      var A=this.pointCPointDBuffer.getView(g);
      A[0]=T;
      A[1]=k;
      A[2]=D;
      A[3]=B;
      this.instanceCount++;

      if (this.instanceCount>=this.maxInstances) {
        this.endBatch();
      }
    }
  }
}}}},{key:"_isValidEdge",value:function(t){var a=t._private.rscratch;return!(a.badLine||a.allpts==null||isNaN(a.allpts[0]))}},{key:"_getEdgePoints",value:function(t){var a=t._private.rscratch;if(this._isValidEdge(t)){var n=a.allpts;if (n.length==4) {
  return n;
}var i=this._getNumSegments(t);return this._getCurveSegmentPoints(n,i)}}},{key:"_getNumSegments",value:function(t){var a=15;return Math.min(Math.max(a,5),this.maxInstances)}},{key:"_getCurveSegmentPoints",value:function(t,a){
  if (t.length==4) {
    return t;
  }
  var n=Array((a+1)*2);
  for (var i=0; i<=a; i++) {
    if (i==0) {
      n[0]=t[0];
      n[1]=t[1];
    } else if (i==a) {
      n[i*2]=t[t.length-2];
      n[i*2+1]=t[t.length-1];
    } else
      {var s=i/a;this._setCurvePoint(t,s,n,i*2)}
  }return n
}},{key:"_setCurvePoint",value:function(t,a,n,i){if (t.length<=2) {
  n[i]=t[0];
  n[i+1]=t[1];
} else {for(var s=Array(t.length-2),o=0;o<s.length;o+=2){
  var l=(1-a)*t[o]+a*t[o+2];
  var u=(1-a)*t[o+1]+a*t[o+3];
  s[o]=l;
  s[o+1]=u;
}return this._setCurvePoint(s,a,n,i)}}},{key:"endBatch",value:function(){
  var t=this.gl;
  var a=this.vao;
  var n=this.vertexCount;
  var i=this.instanceCount;
  if(i!==0){
    var s=this.renderTarget.picking?this.pickingProgram:this.program;
    t.useProgram(s);
    t.bindVertexArray(a);
    var o=kr(this.buffers);
    var l;
    try{for(o.s();!(l=o.n()).done;){var u=l.value;u.bufferSubData(i)}}catch(d){o.e(d)}finally{o.f()}for (var v=this.batchManager.getAtlases(),f=0; f<v.length; f++) {
        v[f].bufferIfNeeded(t);
      }for (var c=0; c<v.length; c++) {
        t.activeTexture(t.TEXTURE0+c);
        t.bindTexture(t.TEXTURE_2D,v[c].texture);
        t.uniform1i(s.uTextures[c],c);
      }
    t.uniform1f(s.uZoom,Wy(this.r));
    t.uniformMatrix3fv(s.uPanZoomMatrix,false,this.panZoomMatrix);
    t.uniform1i(s.uAtlasSize,this.batchManager.getAtlasSize());
    var h=xt(this.bgColor,1);
    t.uniform4fv(s.uBGColor,h);
    t.drawArraysInstanced(t.TRIANGLES,0,n,i);
    t.bindVertexArray(null);
    t.bindTexture(t.TEXTURE_2D,null);

    if (this.debug) {
      this.batchDebugInfo.push({count:i,atlasCount:v.length});
    }

    this.startBatch();
  }
}},{key:"getDebugInfo",value:function(){
  var t=this.atlasManager.getDebugInfo();
  var a=t.reduce(function(s,o){return s+o.atlasCount},0);
  var n=this.batchDebugInfo;
  var i=n.reduce(function(s,o){return s+o.count},0);
  return{atlasInfo:t,totalAtlases:a,wrappedCount:this.wrappedCount,simpleCount:this.simpleCount,batchCount:n.length,batchInfo:n,totalInstances:i}
}}]);})();

var Mf={};
Mf.initWebgl=function(r,e){
  var t=this;
  var a=t.data.contexts[t.WEBGL];
  r.bgColor=cm(t);
  r.webglTexSize=Math.min(r.webglTexSize,a.getParameter(a.MAX_TEXTURE_SIZE));
  r.webglTexRows=Math.min(r.webglTexRows,54);
  r.webglTexRowsNodes=Math.min(r.webglTexRowsNodes,54);
  r.webglBatchSize=Math.min(r.webglBatchSize,16384);
  r.webglTexPerBatch=Math.min(r.webglTexPerBatch,a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
  t.webglDebug=r.webglDebug;
  t.webglDebugShowAtlases=r.webglDebugShowAtlases;
  t.pickingFrameBuffer=jy(a);
  t.pickingFrameBuffer.needsDraw=true;
  t.drawing=new fm(t,a,r);
  var n=function(f){return function(c){return t.getTextAngle(c,f)}};
  var i=function(f){return function(c){var h=c.pstyle(f);return h&&h.value}};
  var s=function(f){return function(c){return c.pstyle(`${f}-opacity`).value>0;};};
  var o=function(f){var c=f.pstyle("text-events").strValue==="yes";return c?An.USE_BB:An.IGNORE};

  var l=function(f){
    var c=f.position();
    var h=c.x;
    var d=c.y;
    var y=f.outerWidth();
    var g=f.outerHeight();
    return{w:y,h:g,x1:h-y/2,y1:d-g/2}
  };

  t.drawing.addAtlasCollection("node",{texRows:r.webglTexRowsNodes});
  t.drawing.addAtlasCollection("label",{texRows:r.webglTexRows});
  t.drawing.addTextureAtlasRenderType("node-body",{collection:"node",getKey:e.getStyleKey,getBoundingBox:e.getElementBox,drawElement:e.drawElement});
  t.drawing.addSimpleShapeRenderType("node-body",{getBoundingBox:l,isSimple:Uy,shapeProps:{shape:"shape",color:"background-color",opacity:"background-opacity",radius:"corner-radius",border:true}});
  t.drawing.addSimpleShapeRenderType("node-overlay",{getBoundingBox:l,isVisible:s("overlay"),shapeProps:{shape:"overlay-shape",color:"overlay-color",opacity:"overlay-opacity",padding:"overlay-padding",radius:"overlay-corner-radius"}});
  t.drawing.addSimpleShapeRenderType("node-underlay",{getBoundingBox:l,isVisible:s("underlay"),shapeProps:{shape:"underlay-shape",color:"underlay-color",opacity:"underlay-opacity",padding:"underlay-padding",radius:"underlay-corner-radius"}});
  t.drawing.addTextureAtlasRenderType("label",{collection:"label",getTexPickingMode:o,getKey:Ss(e.getLabelKey,null),getBoundingBox:ks(e.getLabelBox,null),drawClipped:true,drawElement:e.drawLabel,getRotation:n(null),getRotationPoint:e.getLabelRotationPoint,getRotationOffset:e.getLabelRotationOffset,isVisible:i("label")});
  t.drawing.addTextureAtlasRenderType("edge-source-label",{collection:"label",getTexPickingMode:o,getKey:Ss(e.getSourceLabelKey,"source"),getBoundingBox:ks(e.getSourceLabelBox,"source"),drawClipped:true,drawElement:e.drawSourceLabel,getRotation:n("source"),getRotationPoint:e.getSourceLabelRotationPoint,getRotationOffset:e.getSourceLabelRotationOffset,isVisible:i("source-label")});
  t.drawing.addTextureAtlasRenderType("edge-target-label",{collection:"label",getTexPickingMode:o,getKey:Ss(e.getTargetLabelKey,"target"),getBoundingBox:ks(e.getTargetLabelBox,"target"),drawClipped:true,drawElement:e.drawTargetLabel,getRotation:n("target"),getRotationPoint:e.getTargetLabelRotationPoint,getRotationOffset:e.getTargetLabelRotationOffset,isVisible:i("target-label")});
  var u=Fa(function(){
    console.log("garbage collect flag set");
    t.data.gc=true;
  },10000/* 1e4 */);

  t.onUpdateEleCalcs(function(v,f){
    var c=false;

    if (f&&f.length>0) {
      (c |= t.drawing.invalidate(f));
    }

    if (c) {
      u();
    }
  });

  dm(t);
};function cm(r){
  var e=r.cy.container();
  var t=e&&e.style&&e.style.backgroundColor||"white";
  return iv(t)
}function Lf(r,e){var t=r._private.rscratch;return Tr(t,"labelWrapCachedLines",e)||[]}

var Ss=function(e,t){return function(a){
  var n=e(a);
  var i=Lf(a,t);
  return i.length>1?i.map(function(s,o){return `${n}_${o}`;}):n;
};};

var ks=function(e,t){return function(a,n){var i=e(a);if(typeof n=="string"){var s=n.indexOf("_");if(s>0){
  var o=Number(n.substring(s+1));
  var l=Lf(a,t);
  var u=i.h/l.length;
  var v=u*o;
  var f=i.y1+v;
  return{x1:i.x1,w:i.w,y1:f,h:u,yOffset:v}
}}return i};};

function dm(r){{var e=r.render;r.render=function(i){
  i=i||{};var s=r.cy;

  if (r.webgl) {
    if (s.zoom()>Sf) {
      hm(r);
      e.call(r,i);
    } else {
      gm(r);
      Of(r,i,Ea.SCREEN);
    }
  }
}}{var t=r.matchCanvasSize;r.matchCanvasSize=function(i){
  t.call(r,i);
  r.pickingFrameBuffer.setFramebufferAttachmentSizes(r.canvasWidth,r.canvasHeight);
  r.pickingFrameBuffer.needsDraw=true;
}}r.findNearestElements=function(i,s,o,l){return xm(r,i,s)};{var a=r.invalidateCachedZSortedEles;r.invalidateCachedZSortedEles=function(){
  a.call(r);
  r.pickingFrameBuffer.needsDraw=true;
}}{var n=r.notify;r.notify=function(i,s){
  n.call(r,i,s);

  if (i==="viewport"||i==="bounds") {
    r.pickingFrameBuffer.needsDraw=true;
  } else if (i==="background") {
    r.drawing.invalidate(s,{type:"node-body"});
  }
}}}function hm(r){var e=r.data.contexts[r.WEBGL];e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT)}function gm(r){
  var e=function(a){
    a.save();
    a.setTransform(1,0,0,1,0,0);
    a.clearRect(0,0,r.canvasWidth,r.canvasHeight);
    a.restore();
  };
  e(r.data.contexts[r.NODE]);
  e(r.data.contexts[r.DRAG]);
}function pm(r){
  var e=r.canvasWidth;
  var t=r.canvasHeight;
  var a=bo(r);
  var n=a.pan;
  var i=a.zoom;
  var s=Es();
  yn(s,s,[n.x,n.y]);
  Ws(s,s,[i,i]);
  var o=Es();rm(o,e,t);var l=Es();
  em(l,o,s);
  return l;
}function If(r,e){
  var t=r.canvasWidth;
  var a=r.canvasHeight;
  var n=bo(r);
  var i=n.pan;
  var s=n.zoom;
  e.setTransform(1,0,0,1,0,0);
  e.clearRect(0,0,t,a);
  e.translate(i.x,i.y);
  e.scale(s,s);
}function ym(r,e){r.drawSelectionRectangle(e,function(t){return If(r,t)})}function mm(r){
  var e=r.data.contexts[r.NODE];
  e.save();
  If(r,e);
  e.strokeStyle="rgba(0, 0, 0, 0.3)";
  e.beginPath();
  e.moveTo(-1000/* -1e3 */,0);
  e.lineTo(1000/* 1e3 */,0);
  e.stroke();
  e.beginPath();
  e.moveTo(0,-1000/* -1e3 */);
  e.lineTo(0,1000/* 1e3 */);
  e.stroke();
  e.restore();
}function bm(r){
  var e=function(n,i,s){
    var o=n.atlasManager.getAtlasCollection(i);
    var l=r.data.contexts[r.NODE];
    for(var u=o.atlases, v=0;v<u.length;v++){
      var f=u[v];
      var c=f.canvas;
      if(c){
        var h=c.width;
        var d=c.height;
        var y=h*v;
        var g=c.height*s;
        var p=0.4/* .4 */;
        l.save();
        l.scale(p,p);
        l.drawImage(c,y,g);
        l.strokeStyle="black";
        l.rect(y,g,h,d);
        l.stroke();
        l.restore();
      }
    }
  };

  var t=0;
  e(r.drawing,"node",t++);
  e(r.drawing,"label",t++);
}function wm(r,e,t,a,n){
  var i;
  var s;
  var o;
  var l;
  var u=bo(r);
  var v=u.pan;
  var f=u.zoom;
  {
    var c=$y(r,v,f,e,t);
    var h=Je(c,2);
    var d=h[0];
    var y=h[1];
    var g=6;
    i=d-g/2;
    s=y-g/2;
    o=g;
    l=g;
  }if (o===0||l===0) {
      return[];
    }var p=r.data.contexts[r.WEBGL];
  p.bindFramebuffer(p.FRAMEBUFFER,r.pickingFrameBuffer);

  if (r.pickingFrameBuffer.needsDraw) {
    p.viewport(0,0,p.canvas.width,p.canvas.height);
    Of(r,null,Ea.PICKING);
    r.pickingFrameBuffer.needsDraw=false;
  }

  var m=o*l;
  var b=new Uint8Array(m*4);
  p.readPixels(i,s,o,l,p.RGBA,p.UNSIGNED_BYTE,b);
  p.bindFramebuffer(p.FRAMEBUFFER,null);
  var w=new Set;
  for(var E=0;E<m;E++){
    var C=b.slice(E*4,E*4+4);
    var x=Xy(C)-1;

    if (x>=0) {
      w.add(x);
    }
  }return w
}function xm(r,e,t){
  var a=wm(r,e,t);
  var n=r.getCachedZSortedEles();
  var i;
  var s;
  var o=kr(a);
  var l;
  try{for(o.s();!(l=o.n()).done;){
    var u=l.value;
    var v=n[u];

    if (!i&&v.isNode()) {
      (i = v);
    }

    if (!s&&v.isEdge()) {
      (s = v);
    }

    if (i&&s) {
      break
    }
  }}catch(f){o.e(f)}finally{o.f()}return[i,s].filter(Boolean)
}function Ds(r,e,t){
  var a=r.drawing;
  e+=1;

  if (t.isNode()) {
    a.drawNode(t,e,"node-underlay");
    a.drawNode(t,e,"node-body");
    a.drawTexture(t,e,"label");
    a.drawNode(t,e,"node-overlay");
  } else {
    a.drawEdgeLine(t,e);
    a.drawEdgeArrow(t,e,"source");
    a.drawEdgeArrow(t,e,"target");
    a.drawTexture(t,e,"label");
    a.drawTexture(t,e,"edge-source-label");
    a.drawTexture(t,e,"edge-target-label");
  }
}function Of(r,e,t){
  var a;

  if (r.webglDebug) {
    (a = performance.now());
  }

  var n=r.drawing;
  var i=0;

  if (t.screen&&r.data.canvasNeedsRedraw[r.SELECT_BOX]) {
    ym(r,e);
  }

  if (r.data.canvasNeedsRedraw[r.NODE]||t.picking) {
    var s=r.data.contexts[r.WEBGL];

    if (t.screen) {
      s.clearColor(0,0,0,0);
      s.enable(s.BLEND);
      s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA);
    } else {
      s.disable(s.BLEND);
    }

    s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);
    s.viewport(0,0,s.canvas.width,s.canvas.height);
    var o=pm(r);
    var l=r.getCachedZSortedEles();
    i=l.length;
    n.startFrame(o,t);

    if (t.screen) {for (var u=0; u<l.nondrag.length; u++) {
      Ds(r,u,l.nondrag[u]);
    }for (var v=0; v<l.drag.length; v++) {
      Ds(r,v,l.drag[v])
    }} else if (t.picking) {
      for (var f=0; f<l.length; f++) {
        Ds(r,f,l[f]);
      }
    }

    n.endFrame();

    if (t.screen&&r.webglDebugShowAtlases) {
      mm(r);
      bm(r);
    }

    r.data.canvasNeedsRedraw[r.NODE]=false;
    r.data.canvasNeedsRedraw[r.DRAG]=false;
  }

  if(r.webglDebug){
    var c=performance.now();
    var h=false;
    var d=Math.ceil(c-a);
    var y=n.getDebugInfo();
    var g=[`${i} elements`,`${y.totalInstances} instances`,`${y.batchCount} batches`,`${y.totalAtlases} atlases`,`${y.wrappedCount} wrapped textures`,`${y.simpleCount} simple shapes`].join(", ");
    if (h) {
      console.log(`WebGL (${t.name}) - time ${d}ms, ${g}`);
    } else {
      console.log(`WebGL (${t.name}) - frame time ${d}ms`);
      console.log("Totals:");
      console.log(`  ${g}`);
      console.log("Texture Atlases Used:");
      var p=y.atlasInfo;
      var m=kr(p);
      var b;
      try{for(m.s();!(b=m.n()).done;){var w=b.value;console.log(`  ${w.type}: ${w.keyCount} keys, ${w.atlasCount} atlases`)}}catch(E){m.e(E)}finally{m.f()}console.log("")
    }
  }

  if (r.data.gc) {
    console.log("Garbage Collect!");
    r.data.gc=false;
    n.gc();
  }
}var mt={};mt.drawPolygonPath=function(r,e,t,a,n,i){
  var s=a/2;
  var o=n/2;

  if (r.beginPath) {
    r.beginPath();
  }

  r.moveTo(e+s*i[0],t+o*i[1]);
  for (var l=1; l<i.length/2; l++) {
    r.lineTo(e+s*i[l*2],t+o*i[l*2+1]);
  }r.closePath()
};mt.drawRoundPolygonPath=function(r,e,t,a,n,i,s){
  s.forEach(function(o){return pf(r,o)});
  r.closePath();
};mt.drawRoundRectanglePath=function(r,e,t,a,n,i){
  var s=a/2;
  var o=n/2;
  var l=i==="auto"?vt(a,n):Math.min(i,o,s);

  if (r.beginPath) {
    r.beginPath();
  }

  r.moveTo(e,t-o);
  r.arcTo(e+s,t-o,e+s,t,l);
  r.arcTo(e+s,t+o,e,t+o,l);
  r.arcTo(e-s,t+o,e-s,t,l);
  r.arcTo(e-s,t-o,e,t-o,l);
  r.lineTo(e,t-o);
  r.closePath();
};mt.drawBottomRoundRectanglePath=function(r,e,t,a,n,i){
  var s=a/2;
  var o=n/2;
  var l=i==="auto"?vt(a,n):i;

  if (r.beginPath) {
    r.beginPath();
  }

  r.moveTo(e,t-o);
  r.lineTo(e+s,t-o);
  r.lineTo(e+s,t);
  r.arcTo(e+s,t+o,e,t+o,l);
  r.arcTo(e-s,t+o,e-s,t,l);
  r.lineTo(e-s,t-o);
  r.lineTo(e,t-o);
  r.closePath();
};mt.drawCutRectanglePath=function(r,e,t,a,n,i,s){
  var o=a/2;
  var l=n/2;
  var u=s==="auto"?no():s;

  if (r.beginPath) {
    r.beginPath();
  }

  r.moveTo(e-o+u,t-l);
  r.lineTo(e+o-u,t-l);
  r.lineTo(e+o,t-l+u);
  r.lineTo(e+o,t+l-u);
  r.lineTo(e+o-u,t+l);
  r.lineTo(e-o+u,t+l);
  r.lineTo(e-o,t+l-u);
  r.lineTo(e-o,t-l+u);
  r.closePath();
};mt.drawBarrelPath=function(r,e,t,a,n){
  var i=a/2;
  var s=n/2;
  var o=e-i;
  var l=e+i;
  var u=t-s;
  var v=t+s;
  var f=As(a,n);
  var c=f.widthOffset;
  var h=f.heightOffset;
  var d=f.ctrlPtOffsetPct*c;

  if (r.beginPath) {
    r.beginPath();
  }

  r.moveTo(o,u+h);
  r.lineTo(o,v-h);
  r.quadraticCurveTo(o+d,v,o+c,v);
  r.lineTo(l-c,v);
  r.quadraticCurveTo(l-d,v,l,v-h);
  r.lineTo(l,u+h);
  r.quadraticCurveTo(l-d,u,l-c,u);
  r.lineTo(o+c,u);
  r.quadraticCurveTo(o+d,u,o,u+h);
  r.closePath();
};
var Yl=Math.sin(0);
var Zl=Math.cos(0);
var $s={};
var Us={};
var Nf=Math.PI/40;
for (var Gt=0*Math.PI; Gt<2*Math.PI; Gt+=Nf) {
  $s[Gt]=Math.sin(Gt);
  Us[Gt]=Math.cos(Gt);
}mt.drawEllipsePath=function(r,e,t,a,n){
  if (r.beginPath) {
    r.beginPath();
  }

  if (r.ellipse) {
    r.ellipse(e,t,a/2,n/2,0,0,2*Math.PI);
  } else {
    var i;
    var s;
    var o=a/2;
    var l=n/2;
    for (var u=0*Math.PI; u<2*Math.PI; u+=Nf) {
      i=e-o*$s[u]*Yl+o*Us[u]*Zl;
      s=t+l*Us[u]*Yl+l*$s[u]*Zl;

      if (u===0) {
        r.moveTo(i,s);
      } else {
        r.lineTo(i,s);
      }
    }
  }

  r.closePath()
};var Wa={};Wa.createBuffer=function(r,e){
  var t=document.createElement("canvas");
  t.width=r;
  t.height=e;
  return [t,t.getContext("2d")];
};Wa.bufferCanvasImage=function(r){
  var e=this.cy;
  var t=e.mutableElements();
  var a=t.boundingBox();
  var n=this.findContainerClientCoords();
  var i=r.full?Math.ceil(a.w):n[2];
  var s=r.full?Math.ceil(a.h):n[3];
  var o=ae(r.maxWidth)||ae(r.maxHeight);
  var l=this.getPixelRatio();
  var u=1;
  if (r.scale!==void 0) {
    i*=r.scale;
    s*=r.scale;
    u=r.scale;
  } else if(o){
    var v=Infinity;
    var f=Infinity;

    if (ae(r.maxWidth)) {
      (v = u*r.maxWidth/i);
    }

    if (ae(r.maxHeight)) {
      (f = u*r.maxHeight/s);
    }

    u=Math.min(v,f);
    i*=u;
    s*=u;
  }

  if (!o) {
    i*=l;
    s*=l;
    u*=l;
  }

  var c=document.createElement("canvas");
  c.width=i;
  c.height=s;
  c.style.width=i+"px";
  c.style.height=s+"px";
  var h=c.getContext("2d");if(i>0&&s>0){
    h.clearRect(0,0,i,s);
    h.globalCompositeOperation="source-over";
    var d=this.getCachedZSortedEles();if (r.full) {
          h.translate(-a.x1*u,-a.y1*u);
          h.scale(u,u);
          this.drawElements(h,d);
          h.scale(1/u,1/u);
          h.translate(a.x1*u,a.y1*u);
        } else {
          var y=e.pan();
          var g={x:y.x*u,y:y.y*u};
          u*=e.zoom();
          h.translate(g.x,g.y);
          h.scale(u,u);
          this.drawElements(h,d);
          h.scale(1/u,1/u);
          h.translate(-g.x,-g.y);
        }

    if (r.bg) {
      h.globalCompositeOperation="destination-over";
      h.fillStyle=r.bg;
      h.rect(0,0,i,s);
      h.fill();
    }
  }return c
};function Em(r,e){
  var a=new ArrayBuffer(t.length);
  var n=new Uint8Array(a);
  for (var t=atob(r), i=0; i<t.length; i++) {
    n[i]=t.charCodeAt(i);
  }return new Blob([a],{type:e})
}function Ql(r){var e=r.indexOf(",");return r.substr(e+1)}function zf(r,e,t){var a=function(){return e.toDataURL(t,r.quality)};switch(r.output){case "blob-promise":
  {
    return new ta(function(n,i){try{e.toBlob(function(s){
      if (s!=null) {
        n(s);
      } else {
        i(new Error("`canvas.toBlob()` sent a null value in its callback"));
      }
    },t,r.quality)}catch(s){i(s)}});
  }case "blob":
  {
    return Em(Ql(a()),t);
  }case "base64":
  {
    return Ql(a());
  }case"base64uri":default:
  {
    return a()
  }}}Wa.png=function(r){return zf(r,this.bufferCanvasImage(r),"image/png")};Wa.jpg=function(r){return zf(r,this.bufferCanvasImage(r),"image/jpeg")};var Ff={};Ff.nodeShapeImpl=function(r,e,t,a,n,i,s,o){switch(r){case "ellipse":
  {
    return this.drawEllipsePath(e,t,a,n,i);
  }case "polygon":
  {
    return this.drawPolygonPath(e,t,a,n,i,s);
  }case "round-polygon":
  {
    return this.drawRoundPolygonPath(e,t,a,n,i,s,o);
  }case"roundrectangle":case "round-rectangle":
  {
    return this.drawRoundRectanglePath(e,t,a,n,i,o);
  }case"cutrectangle":case "cut-rectangle":
  {
    return this.drawCutRectanglePath(e,t,a,n,i,s,o);
  }case"bottomroundrectangle":case "bottom-round-rectangle":
  {
    return this.drawBottomRoundRectanglePath(e,t,a,n,i,o);
  }case "barrel":
  {
    return this.drawBarrelPath(e,t,a,n,i)
  }}};
var Cm=Vf;
var ke=Vf.prototype;
ke.CANVAS_LAYERS=3;ke.SELECT_BOX=0;ke.DRAG=1;ke.NODE=2;ke.WEBGL=3;ke.CANVAS_TYPES=["2d","2d","2d","webgl2"];ke.BUFFER_COUNT=3;ke.TEXTURE_BUFFER=0;ke.MOTIONBLUR_BUFFER_NODE=1;ke.MOTIONBLUR_BUFFER_DRAG=2;function Vf(r){
  var e=this;
  var t=e.cy.window();
  var a=t.document;

  if (r.webgl) {
    ke.CANVAS_LAYERS=e.CANVAS_LAYERS=4;
    console.log("webgl rendering enabled");
  }

  e.data={canvases:new Array(ke.CANVAS_LAYERS),contexts:new Array(ke.CANVAS_LAYERS),canvasNeedsRedraw:new Array(ke.CANVAS_LAYERS),bufferCanvases:new Array(ke.BUFFER_COUNT),bufferContexts:new Array(ke.CANVAS_LAYERS)};
  var n="-webkit-tap-highlight-color";
  var i="rgba(0,0,0,0)";
  e.data.canvasContainer=a.createElement("div");var s=e.data.canvasContainer.style;
  e.data.canvasContainer.style[n]=i;
  s.position="relative";
  s.zIndex="0";
  s.overflow="hidden";
  var o=r.cy.container();
  o.appendChild(e.data.canvasContainer);
  o.style[n]=i;
  var l={"-webkit-user-select":"none","-moz-user-select":"-moz-none","user-select":"none","-webkit-tap-highlight-color":"rgba(0,0,0,0)","outline-style":"none"};

  if (yc()) {
    l["-ms-touch-action"]="none";
    l["touch-action"]="none";
  }

  for(var u=0;u<ke.CANVAS_LAYERS;u++){
    var v=e.data.canvases[u]=a.createElement("canvas");
    var f=ke.CANVAS_TYPES[u];
    e.data.contexts[u]=v.getContext(f);

    if (!e.data.contexts[u]) {
      $e("Could not create canvas of type "+f);
    }

    Object.keys(l).forEach(function(J){v.style[J]=l[J]});
    v.style.position="absolute";
    v.setAttribute("data-id","layer"+u);
    v.style.zIndex=String(ke.CANVAS_LAYERS-u);
    e.data.canvasContainer.appendChild(v);
    e.data.canvasNeedsRedraw[u]=false;
  }
  e.data.topCanvas=e.data.canvases[0];
  e.data.canvases[ke.NODE].setAttribute("data-id","layer"+ke.NODE+"-node");
  e.data.canvases[ke.SELECT_BOX].setAttribute("data-id","layer"+ke.SELECT_BOX+"-selectbox");
  e.data.canvases[ke.DRAG].setAttribute("data-id","layer"+ke.DRAG+"-drag");

  if (e.data.canvases[ke.WEBGL]) {
    e.data.canvases[ke.WEBGL].setAttribute("data-id","layer"+ke.WEBGL+"-webgl");
  }

  for (var u=0; u<ke.BUFFER_COUNT; u++) {
    e.data.bufferCanvases[u]=a.createElement("canvas");
    e.data.bufferContexts[u]=e.data.bufferCanvases[u].getContext("2d");
    e.data.bufferCanvases[u].style.position="absolute";
    e.data.bufferCanvases[u].setAttribute("data-id","buffer"+u);
    e.data.bufferCanvases[u].style.zIndex=String(-u-1);
    e.data.bufferCanvases[u].style.visibility="hidden";
  }e.pathsEnabled=true;
  var c=wr();
  var h=function(z){return{x:(z.x1+z.x2)/2,y:(z.y1+z.y2)/2}};
  var d=function(z){return{x:-z.w/2,y:-z.h/2}};

  var y=function(z){
    var q=z[0]._private;
    var H=q.oldBackgroundTimestamp===q.backgroundTimestamp;
    return!H
  };

  var g=function(z){return z[0]._private.nodeKey};
  var p=function(z){return z[0]._private.labelStyleKey};
  var m=function(z){return z[0]._private.sourceLabelStyleKey};
  var b=function(z){return z[0]._private.targetLabelStyleKey};
  var w=function(z,q,H,Y,te){return e.drawElement(z,q,H,false,false,te);};
  var E=function(z,q,H,Y,te){return e.drawElementText(z,q,H,Y,"main",te)};
  var C=function(z,q,H,Y,te){return e.drawElementText(z,q,H,Y,"source",te)};
  var x=function(z,q,H,Y,te){return e.drawElementText(z,q,H,Y,"target",te)};

  var T=function(z){
    z.boundingBox();
    return z[0]._private.bodyBounds;
  };

  var k=function(z){
    z.boundingBox();
    return z[0]._private.labelBounds.main||c;
  };

  var D=function(z){
    z.boundingBox();
    return z[0]._private.labelBounds.source||c;
  };

  var B=function(z){
    z.boundingBox();
    return z[0]._private.labelBounds.target||c;
  };

  var P=function(z,q){return q};
  var A=function(z){return h(T(z))};
  var R=function(z,q,H){var Y=z?z+"-":"";return{x:q.x+H.pstyle(Y+"text-margin-x").pfValue,y:q.y+H.pstyle(Y+"text-margin-y").pfValue}};
  var L=function(z,q,H){var Y=z[0]._private.rscratch;return{x:Y[q],y:Y[H]}};
  var I=function(z){return R("",L(z,"labelX","labelY"),z)};
  var M=function(z){return R("source",L(z,"sourceLabelX","sourceLabelY"),z)};
  var O=function(z){return R("target",L(z,"targetLabelX","targetLabelY"),z)};
  var V=function(z){return d(T(z))};
  var G=function(z){return d(D(z))};
  var N=function(z){return d(B(z))};

  var F=function(z){
    var q=k(z);
    var H=d(k(z));
    if(z.isNode()){switch(z.pstyle("text-halign").value){case "left":
      {
        H.x=-q.w-(q.leftPad||0);break;
      }case "right":
      {
        H.x=-(q.rightPad||0);break
      }}switch(z.pstyle("text-valign").value){case "top":
      {
        H.y=-q.h-(q.topPad||0);break;
      }case "bottom":
      {
        H.y=-(q.botPad||0);break
      }}}return H
  };

  var U=e.data.eleTxrCache=new ba(e,{getKey:g,doesEleInvalidateKey:y,drawElement:w,getBoundingBox:T,getRotationPoint:A,getRotationOffset:V,allowEdgeTxrCaching:false,allowParentTxrCaching:false});
  var Q=e.data.lblTxrCache=new ba(e,{getKey:p,drawElement:E,getBoundingBox:k,getRotationPoint:I,getRotationOffset:F,isVisible:P});
  var K=e.data.slbTxrCache=new ba(e,{getKey:m,drawElement:C,getBoundingBox:D,getRotationPoint:M,getRotationOffset:G,isVisible:P});
  var j=e.data.tlbTxrCache=new ba(e,{getKey:b,drawElement:x,getBoundingBox:B,getRotationPoint:O,getRotationOffset:N,isVisible:P});
  var re=e.data.lyrTxrCache=new kf(e);
  e.onUpdateEleCalcs(function(z,q){
    U.invalidateElements(q);
    Q.invalidateElements(q);
    K.invalidateElements(q);
    j.invalidateElements(q);
    re.invalidateElements(q);
    for(var H=0;H<q.length;H++){var Y=q[H]._private;Y.oldBackgroundTimestamp=Y.backgroundTimestamp}
  });var ne=function(z){for (var q=0; q<z.length; q++) {
      re.enqueueElementRefinement(z[q].ele)
    }};
  U.onDequeue(ne);
  Q.onDequeue(ne);
  K.onDequeue(ne);
  j.onDequeue(ne);

  if (r.webgl) {
    e.initWebgl(r,{getStyleKey:g,getLabelKey:p,getSourceLabelKey:m,getTargetLabelKey:b,drawElement:w,drawLabel:E,drawSourceLabel:C,drawTargetLabel:x,getElementBox:T,getLabelBox:k,getSourceLabelBox:D,getTargetLabelBox:B,getElementRotationPoint:A,getElementRotationOffset:V,getLabelRotationPoint:I,getSourceLabelRotationPoint:M,getTargetLabelRotationPoint:O,getLabelRotationOffset:F,getSourceLabelRotationOffset:G,getTargetLabelRotationOffset:N});
  }
}ke.redrawHint=function(r,e){var t=this;switch(r){case "eles":
  {
    t.data.canvasNeedsRedraw[ke.NODE]=e;break;
  }case "drag":
  {
    t.data.canvasNeedsRedraw[ke.DRAG]=e;break;
  }case "select":
  {
    t.data.canvasNeedsRedraw[ke.SELECT_BOX]=e;break;
  }case "gc":
  {
    t.data.gc=true;break
  }}};var Tm=typeof Path2D !== "undefined";ke.path2dEnabled=function(r){if (r===void 0) {
  return this.pathsEnabled;
}this.pathsEnabled=!!r};ke.usePaths=function(){return Tm&&this.pathsEnabled};ke.setImgSmoothing=function(r,e){
  if (r.imageSmoothingEnabled!=null) {
    r.imageSmoothingEnabled=e;
  } else {
    r.webkitImageSmoothingEnabled=e;
    r.mozImageSmoothingEnabled=e;
    r.msImageSmoothingEnabled=e;
  }
};ke.getImgSmoothing=function(r){
  if (r.imageSmoothingEnabled!=null) {
    return r.imageSmoothingEnabled;
  }

  if (!(r.webkitImageSmoothingEnabled || r.mozImageSmoothingEnabled)) {
    return r.msImageSmoothingEnabled;
  }
};ke.makeOffscreenCanvas=function(r,e){var t;if ((typeof OffscreenCanvas === "undefined"?"undefined":ar(OffscreenCanvas))!=="undefined") {
  t=new OffscreenCanvas(r,e);
} else {
  var a=this.cy.window();
  var n=a.document;
  t=n.createElement("canvas");
  t.width=r;
  t.height=e;
}return t};[Df,Hr,Jr,mo,Lt,yt,xr,Mf,mt,Wa,Ff].forEach(function(r){be(ke,r)});
var Sm=[{name:"null",impl:df},{name:"base",impl:Cf},{name:"canvas",impl:Cm}];
var km=[{type:"layout",extensions:Qp},{type:"renderer",extensions:Sm}];
var qf={};
var _f={};
function Gf(r,e,t){
  var a=t;
  var n=function(T){Ve("Can not register `"+e+"` for `"+r+"` since `"+T+"` already exists in the prototype and can not be overridden")};
  if(r==="core"){if (Ra.prototype[e]) {
    return n(e);
  }Ra.prototype[e]=t}else if(r==="collection"){if (fr.prototype[e]) {
    return n(e);
  }fr.prototype[e]=t}else if(r==="layout"){
    var i=function(T){
      this.options=T;
      t.call(this,T);

      if (!Le(this._private)) {
        (this._private = {});
      }

      this._private.cy=T.cy;
      this._private.listeners=[];
      this.createEmitter();
    };

    var s=i.prototype=Object.create(t.prototype);
    for(var o=[], l=0;l<o.length;l++){var u=o[l];s[u]=s[u]||function(){return this}}

    if (s.start&&!s.run) {
      s.run=function(){
          this.start();
          return this;
        };
    } else if (!s.start&&s.run) {
      (s.start = function(){
          this.run();
          return this;
        });
    }

    var v=t.prototype.stop;

    s.stop=function(){
      var x=this.options;if(x&&x.animate){var T=this.animations;if (T) {
          for (var k=0; k<T.length; k++) {
            T[k].stop()
          }
        }}

      if (v) {
        v.call(this);
      } else {
        this.emit("layoutstop");
      }

      return this;
    };

    if (!s.destroy) {
      (s.destroy = function(){return this});
    }

    s.cy=function(){return this._private.cy};
    var f=function(T){return T._private.cy};

    var c={addEventFields:function(T,k){
      k.layout=T;
      k.cy=f(T);
      k.target=T;
    },bubble:function(){return true;},parent:function(T){return f(T)}};

    be(s,{createEmitter:function(){
      this._private.emitter=new Gn(c,this);
      return this;
    },emitter:function(){return this._private.emitter},on:function(T,k){
      this.emitter().on(T,k);
      return this;
    },one:function(T,k){
      this.emitter().one(T,k);
      return this;
    },once:function(T,k){
      this.emitter().one(T,k);
      return this;
    },removeListener:function(T,k){
      this.emitter().removeListener(T,k);
      return this;
    },removeAllListeners:function(){
      this.emitter().removeAllListeners();
      return this;
    },emit:function(T,k){
      this.emitter().emit(T,k);
      return this;
    }});

    Fe.eventAliasesOn(s);
    a=i;
  }else if(r==="renderer"&&e!=="null"&&e!=="base"){
    var h=Hf("renderer","base");
    var d=h.prototype;
    var y=t;
    var g=t.prototype;

    var p=function(...args) {
      h.apply(this,args);
      y.apply(this,args);
    };

    var m=p.prototype;
    for(var b in d){
      var w=d[b];
      var E=g[b]!=null;
      if (E) {
        return n(b);
      }m[b]=w
    }for (var C in g) {
      m[C]=g[C];
    }
    d.clientFunctions.forEach(function(x){m[x]=m[x]||function(){$e("Renderer does not implement `renderer."+x+"()` on its prototype")}});
    a=p;
  }else if (r==="__proto__"||r==="constructor"||r==="prototype") {
    return $e(r+" is an illegal type to be registered, possibly lead to prototype pollutions");
  }return sv({map:qf,keys:[r,e],value:a})
}function Hf(r,e){return ov({map:qf,keys:[r,e]})}function Dm(r,e,t,a,n){return sv({map:_f,keys:[r,e,t,a],value:n})}function Bm(r,e,t,a){return ov({map:_f,keys:[r,e,t,a]})}var Ks=function(...args) {if (args.length===2) {
  return Hf(...args);
}if (args.length===3) {
  return Gf(...args);
}if (args.length===4) {
  return Bm(...args);
}if (args.length===5) {
  return Dm(...args);
}$e("Invalid extension access syntax")};Ra.prototype.extension=Ks;km.forEach(function(r){r.extensions.forEach(function(e){Gf(r.type,e.name,e.impl)})});

var Rn=function(){if (!(this instanceof Rn)) {
  return new Rn;
}this.length=0};

var Rt=Rn.prototype;
Rt.instanceString=function(){return"stylesheet"};Rt.selector=function(r){
  var e=this.length++;
  this[e]={selector:r,properties:[]};
  return this;
};Rt.css=function(r,e){var t=this.length-1;if (ge(r)) {
  this[t].properties.push({name:r,value:e});
} else if (Le(r)) {
  var a=r;
  for(var n=Object.keys(a), i=0;i<n.length;i++){
    var s=n[i];
    var o=a[s];
    if(o!=null){var l=or.properties[s]||or.properties[Mn(s)];if(l!=null){
      var u=l.name;
      var v=o;
      this[t].properties.push({name:u,value:v})
    }}
  }
}return this};Rt.style=Rt.css;Rt.generateStyle=function(r){var e=new or(r);return this.appendToStyle(e)};Rt.appendToStyle=function(r){for(var e=0;e<this.length;e++){
  var t=this[e];
  var a=t.selector;
  var n=t.properties;
  r.selector(a);for(var i=0;i<n.length;i++){var s=n[i];r.css(s.name,s.value)}
}return r};
var Pm="3.33.1";

export var c = function(e = {}) {
  if (Le(e)) {
    return new Ra(e);
  }

  if (ge(e)) {
    return Ks.apply(Ks,arguments)
  }
};
//# sourceMappingURL=cytoscape.esm-DtBltrT8.js.map

c.use=function(r){
  var e=Array.prototype.slice.call(arguments,1);
  e.unshift(c);
  r(...e);
  return this;
};c.warnings=function(r){return hv(r)};c.version=Pm;
c.stylesheet = Rn;
c.Stylesheet = Rn;
export{c as c};
//# sourceMappingURL=cytoscape.esm-DtBltrT8.js.map
