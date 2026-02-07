import{cg,ch,ci as ci_1,cj,ck,cl,cm,bB,a2,a4,a3,ao,cj as cj_1,a5,a6,a7,a8,aa as aa_1,cn as cn_1,a9,ag,ae as ae_1,cn_1 as cn_1_1,am}from"./index-CgwAo6pj.js";import{b,t,c,a,l}from"./linear-BHL9jjBA.js";import{i}from"./init-Gi6I4Gst.js";import"./defaultLocale-C4B-KCzX.js";function jn(t,e){let n;if (e===void 0) {
  for (const r of t) {
    if (r!=null&&(n<r||n===void 0&&r>=r)) {
      (n = r);
    }
  }
} else {let r=-1;for (let a of t) {
  if ((a=e(a,++r,t))!=null&&(n<a||n===void 0&&a>=a)) {
    (n = a);
  }
}}return n}function Jn(t,e){let n;if (e===void 0) {
  for (const r of t) {
    if (r!=null&&(n>r||n===void 0&&r>=r)) {
      (n = r);
    }
  }
} else {let r=-1;for (let a of t) {
  if ((a=e(a,++r,t))!=null&&(n>a||n===void 0&&a>=a)) {
    (n = a);
  }
}}return n}function Kn(t){return t}
const Xt=1;
const oe=2;
const ke=3;
const Zt=4;
const He=0.000001/* 1e-6 */;
function tr(t){return `translate(${t},0)`;}function er(t){return `translate(0,${t})`;}function nr(t){return e => +t(e);}function rr(t,e){
  e=Math.max(0,t.bandwidth()-e*2)/2;

  if (t.round()) {
    (e = Math.round(e));
  }

  return n => +t(n)+e;
}function ar(){return!this.__axis}function on(t,e){
  let n=[];
  let r=null;
  let a=null;
  let i=6;
  let s=6;
  let y=3;
  let _=typeof window !== "undefined"&&window.devicePixelRatio>1?0:0.5/* .5 */;
  const p=t===Xt||t===Zt?-1:1;
  const g=t===Zt||t===oe?"x":"y";
  const E=t===Xt||t===ke?tr:er;
  function C(x){
    const X=r??(e.ticks?e.ticks(...n):e.domain());
    const O=a??(e.tickFormat?e.tickFormat(...n):Kn);
    const M=Math.max(i,0)+y;
    const I=e.range();
    const V=+I[0]+_;
    const W=+I[I.length-1]+_;
    const q=(e.bandwidth?rr:nr)(e.copy(),_);
    const $=x.selection?x.selection():x;
    let D=$.selectAll(".domain").data([null]);
    let H=$.selectAll(".tick").data(X,e).order();
    let b=H.exit();
    const Y=H.enter().append("g").attr("class","tick");
    let F=H.select("line");
    let S=H.select("text");
    D=D.merge(D.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor"));
    H=H.merge(Y);
    F=F.merge(Y.append("line").attr("stroke","currentColor").attr(`${g}2`,p*i));
    S=S.merge(Y.append("text").attr("fill","currentColor").attr(g,p*M).attr("dy",t===Xt?"0em":t===ke?"0.71em":"0.32em"));

    if (x!==$) {
      D=D.transition(x);
      H=H.transition(x);
      F=F.transition(x);
      S=S.transition(x);
      b=b.transition(x).attr("opacity",He).attr("transform",function(v){return isFinite(v=q(v))?E(v+_):this.getAttribute("transform")});
      Y.attr("opacity",He).attr("transform",function(v){let U=this.parentNode.__axis;return E((U&&isFinite(U=U(v))?U:q(v))+_)});
    }

    b.remove();
    D.attr("d",t===Zt||t===oe?s?`M${p*s},${V}H${_}V${W}H${p*s}`:`M${_},${V}V${W}`:s?`M${V},${p*s}V${_}H${W}V${p*s}`:`M${V},${_}H${W}`);
    H.attr("opacity",1).attr("transform",v => E(q(v)+_));
    F.attr(`${g}2`,p*i);
    S.attr(g,p*M).text(O);
    $.filter(ar).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===oe?"start":t===Zt?"end":"middle");
    $.each(function(){this.__axis=q});
  }
  C.scale=function(x){return arguments.length?(e=x,C):e};

  C.ticks=function(...args) {
    n=Array.from(args);
    return C;
  };

  C.tickArguments=function(x){return arguments.length?(n=x==null?[]:Array.from(x),C):n.slice()};
  C.tickValues=function(x){
    if (arguments.length) {
      r=x==null?null:Array.from(x);
      return C;
    }

    if (r) {
      return r.slice();
    }
  };
  C.tickFormat=function(x){return arguments.length?(a=x,C):a};
  C.tickSize=function(x){return arguments.length?(i=s=+x,C):i};
  C.tickSizeInner=function(x){return arguments.length?(i=+x,C):i};
  C.tickSizeOuter=function(x){return arguments.length?(s=+x,C):s};
  C.tickPadding=function(x){return arguments.length?(y=+x,C):y};
  C.offset=function(x){return arguments.length?(_=+x,C):_};
  return C;
}function ir(t){return on(Xt,t)}function sr(t){return on(ke,t)}
const or=Math.PI/180;
const cr=180/Math.PI;
const te=18;
const cn=0.96422/* .96422 */;
const un=1;
const ln=0.82521/* .82521 */;
const fn=4/29;
const St=6/29;
const hn=3*St*St;
const ur=St*St*St;
function dn(t){
  if (t instanceof ft) {
    return new ft(t.l,t.a,t.b,t.opacity);
  }if (t instanceof dt) {
      return mn(t);
    }

  if (t instanceof cg) {
    (t = ch(t));
  }

  const e=fe(t.r);
  const n=fe(t.g);
  const r=fe(t.b);
  const a=ce((0.2225045/* .2225045 */*e+0.7168786/* .7168786 */*n+0.0606169/* .0606169 */*r)/un);
  let i;
  let s;

  if (e===n&&n===r) {
    i=s=a;
  } else {
    i=ce((0.4360747/* .4360747 */*e+0.3850649/* .3850649 */*n+0.1430804/* .1430804 */*r)/cn);
    s=ce((0.0139322/* .0139322 */*e+0.0971045/* .0971045 */*n+0.7141733/* .7141733 */*r)/ln);
  }

  return new ft(116*a-16,500*(i-a),200*(a-s),t.opacity);
}function lr(t,e,n,r){return arguments.length===1?dn(t):new ft(t,e,n,r??1)}function ft(t,e,n,r){
  this.l=+t;
  this.a=+e;
  this.b=+n;
  this.opacity=+r;
}ci_1(ft,lr,cj(ck,{brighter(t){return new ft(this.l+te*(t??1),this.a,this.b,this.opacity)},darker(t){return new ft(this.l-te*(t??1),this.a,this.b,this.opacity)},rgb(){
  let t=(this.l+16)/116;
  let e=isNaN(this.a)?t:t+this.a/500;
  let n=isNaN(this.b)?t:t-this.b/200;
  e=cn*ue(e);
  t=un*ue(t);
  n=ln*ue(n);
  return new cg(le(3.1338561*e-1.6168667*t-0.4906146/* .4906146 */*n),le(-0.9787684/* -.9787684 */*e+1.9161415*t+0.033454/* .033454 */*n),le(0.0719453/* .0719453 */*e-0.2289914/* .2289914 */*t+1.4052427*n),this.opacity);
}}));function ce(t){return t>ur?t ** (1 / 3):t/hn+fn;}function ue(t){return t>St?t*t*t:hn*(t-fn)}function le(t){return 255*(t<=0.0031308/* .0031308 */?12.92*t:1.055*t ** (1 / 2.4)-0.055/* .055 */);}function fe(t){return (t/=255)<=0.04045/* .04045 */?t/12.92:((t + 0.055/* .055 */) / 1.055) ** 2.4;}function fr(t){
  if (t instanceof dt) {
    return new dt(t.h,t.c,t.l,t.opacity);
  }

  if (t instanceof ft) {
    (t = dn(t));
  }

  if (t.a===0&&t.b===0) {
    return new dt(NaN,t.l > 0&&t.l<100?0:NaN,t.l,t.opacity);
  }

  const e=Math.atan2(t.b,t.a)*cr;return new dt(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)
}function pe(t,e,n,r){return arguments.length===1?fr(t):new dt(t,e,n,r??1)}function dt(t,e,n,r){
  this.h=+t;
  this.c=+e;
  this.l=+n;
  this.opacity=+r;
}function mn(t){if (isNaN(t.h)) {
  return new ft(t.l,0,0,t.opacity);
}const e=t.h*or;return new ft(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}ci_1(dt,pe,cj(ck,{brighter(t){return new dt(this.h,this.c,this.l+te*(t??1),this.opacity)},darker(t){return new dt(this.h,this.c,this.l-te*(t??1),this.opacity)},rgb(){return mn(this).rgb()}}));function hr(t){return (e, n) => {
  const r=t((e=pe(e)).h,(n=pe(n)).h);
  const a=cl(e.c,n.c);
  const i=cl(e.l,n.l);
  const s=cl(e.opacity,n.opacity);
  return y => {
    e.h=r(y);
    e.c=a(y);
    e.l=i(y);
    e.opacity=s(y);
    return `${e}`;
  };
};}const dr=hr(cm);function mr(t,e){
  t=t.slice();
  let n=0;
  let r=t.length-1;
  let a=t[n];
  let i=t[r];
  let s;

  if (i<a) {
    s=n;
    n=r;
    r=s;
    s=a;
    a=i;
    i=s;
  }

  t[n]=e.floor(a);
  t[r]=e.ceil(i);
  return t;
}
const he=new Date;
const de=new Date;
function et(t,e,n,r){
  class a {
    constructor(i) {
      t(i=arguments.length===0?new Date:new Date(+i));
      return i;
    }

    static format(s) {
      const y=this;
      const _=this.$locale();
      if (!this.isValid()) {
        return i.bind(this)(s);
      }
      const p=this.$utils();

      const g=(s||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(E => {switch(E){case "Q":
        {
          return Math.ceil((y.$M+1)/3);
        }case "Do":
        {
          return _.ordinal(y.$D);
        }case "gggg":
        {
          return y.weekYear();
        }case "GGGG":
        {
          return y.isoWeekYear();
        }case "wo":
        {
          return _.ordinal(y.week(),"W");
        }case"w":case "ww":
        {
          return p.s(y.week(),E==="w"?1:2,"0");
        }case"W":case "WW":
        {
          return p.s(y.isoWeek(),E==="W"?1:2,"0");
        }case"k":case "kk":
        {
          return p.s(String(y.$H===0?24:y.$H),E==="k"?1:2,"0");
        }case "X":
        {
          return Math.floor(y.$d.getTime()/1000/* 1e3 */);
        }case "x":
        {
          return y.$d.getTime();
        }case "z":
        {
          return `[${y.offsetName()}]`;
        }case "zzz":
        {
          return `[${y.offsetName("long")}]`;
        }default:
        {
          return E
        }}}));

      return i.bind(this)(g)
    }
  }

  a.floor=i => {
    t(i=new Date(+i));
    return i;
  };

  a.ceil=i => {
    t(i=new Date(i-1));
    e(i,1);
    t(i);
    return i;
  };

  a.round=i=>{
    const s=a(i);
    const y=a.ceil(i);
    return i-s<y-i?s:y
  };

  a.offset=(i, s) => {
    e(i=new Date(+i),s==null?1:Math.floor(s));
    return i;
  };

  a.range=(i,s,y)=>{
    const _=[];
    i=a.ceil(i);
    y=y==null?1:Math.floor(y);

    if (!(i<s)||!(y>0)) {
      return _;
    }

    let p;do {
      _.push(p=new Date(+i));
      e(i,y);
      t(i);
    } while (p<i&&i<s);return _
  };

  a.filter=i => et(s=>{if (s>=s) {
    while ((t(s), !i(s))) {
      s.setTime(s-1)
    }
  }},(s,y)=>{if (s>=s) {
    if (y<0) {
      while (++y<=0) {
        while ((e(s,-1), !i(s)))
          {}
      }
    } else {
      while (--y>=0) {
        while ((e(s,1), !i(s)))
          {}
      }
    }
  }});

  if (n) {
    a.count=(i, s) => {
      he.setTime(+i);
      de.setTime(+s);
      t(he);
      t(de);
      return Math.floor(n(he,de));
    };

    a.every=i => {
      i=Math.floor(i);

      return !isFinite(i)||!(i>0)?null:i>1?a.filter(r?s => r(s)%i===0:s => a.count(0,s)%i===0):a;
    };
  }

  return a;
}const Yt=et(()=>{},(t,e)=>{t.setTime(+t+e)},(t, e) => e-t);Yt.every=t => {
  t=Math.floor(t);

  return !isFinite(t)||!(t>0)?null:t>1?et(e=>{e.setTime(Math.floor(e/t)*t)},(e,n)=>{e.setTime(+e+n*t)},(e, n) => (n-e)/t):Yt;
};Yt.range;
const mt=1000/* 1e3 */;
const ct=mt*60;
const gt=ct*60;
const yt=gt*24;
const De=yt*7;
const Ne=yt*30;
const me=yt*365;

const vt=et(t=>{t.setTime(t-t.getMilliseconds())},(t,e)=>{t.setTime(+t+e*mt)},(t, e) => (e-t)/mt,t => t.getUTCSeconds());

vt.range;const Wt=et(t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*mt)},(t,e)=>{t.setTime(+t+e*ct)},(t, e) => (e-t)/ct,t => t.getMinutes());Wt.range;const gr=et(t=>{t.setUTCSeconds(0,0)},(t,e)=>{t.setTime(+t+e*ct)},(t, e) => (e-t)/ct,t => t.getUTCMinutes());gr.range;const Ot=et(t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*mt-t.getMinutes()*ct)},(t,e)=>{t.setTime(+t+e*gt)},(t, e) => (e-t)/gt,t => t.getHours());Ot.range;const yr=et(t=>{t.setUTCMinutes(0,0,0)},(t,e)=>{t.setTime(+t+e*gt)},(t, e) => (e-t)/gt,t => t.getUTCHours());yr.range;const Tt=et(t => t.setHours(0,0,0,0),(t, e) => t.setDate(t.getDate()+e),(t, e) => (e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*ct)/yt,t => t.getDate()-1);Tt.range;const Ce=et(t=>{t.setUTCHours(0,0,0,0)},(t,e)=>{t.setUTCDate(t.getUTCDate()+e)},(t, e) => (e-t)/yt,t => t.getUTCDate()-1);Ce.range;const kr=et(t=>{t.setUTCHours(0,0,0,0)},(t,e)=>{t.setUTCDate(t.getUTCDate()+e)},(t, e) => (e-t)/yt,t => Math.floor(t/yt));kr.range;function wt(t){return et(e=>{
  e.setDate(e.getDate()-(e.getDay()+7-t)%7);
  e.setHours(0,0,0,0);
},(e,n)=>{e.setDate(e.getDate()+n*7)},(e, n) => (n-e-(n.getTimezoneOffset()-e.getTimezoneOffset())*ct)/De);}
const Vt=wt(0);
const Ht=wt(1);
const gn=wt(2);
const yn=wt(3);
const xt=wt(4);
const kn=wt(5);
const pn=wt(6);
Vt.range;Ht.range;gn.range;yn.range;xt.range;kn.range;pn.range;function Dt(t){return et(e=>{
  e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7);
  e.setUTCHours(0,0,0,0);
},(e,n)=>{e.setUTCDate(e.getUTCDate()+n*7)},(e, n) => (n-e)/De);}
const vn=Dt(0);
const ee=Dt(1);
const pr=Dt(2);
const vr=Dt(3);
const Ut=Dt(4);
const Tr=Dt(5);
const xr=Dt(6);
vn.range;ee.range;pr.range;vr.range;Ut.range;Tr.range;xr.range;const Nt=et(t=>{
  t.setDate(1);
  t.setHours(0,0,0,0);
},(t,e)=>{t.setMonth(t.getMonth()+e)},(t, e) => e.getMonth()-t.getMonth()+(e.getFullYear()-t.getFullYear())*12,t => t.getMonth());Nt.range;const br=et(t=>{
  t.setUTCDate(1);
  t.setUTCHours(0,0,0,0);
},(t,e)=>{t.setUTCMonth(t.getUTCMonth()+e)},(t, e) => e.getUTCMonth()-t.getUTCMonth()+(e.getUTCFullYear()-t.getUTCFullYear())*12,t => t.getUTCMonth());br.range;const kt=et(t=>{
  t.setMonth(0,1);
  t.setHours(0,0,0,0);
},(t,e)=>{t.setFullYear(t.getFullYear()+e)},(t, e) => e.getFullYear()-t.getFullYear(),t => t.getFullYear());kt.every=t => !isFinite(t=Math.floor(t))||!(t>0)?null:et(e=>{
  e.setFullYear(Math.floor(e.getFullYear()/t)*t);
  e.setMonth(0,1);
  e.setHours(0,0,0,0);
},(e,n)=>{e.setFullYear(e.getFullYear()+n*t)});kt.range;const bt=et(t=>{
  t.setUTCMonth(0,1);
  t.setUTCHours(0,0,0,0);
},(t,e)=>{t.setUTCFullYear(t.getUTCFullYear()+e)},(t, e) => e.getUTCFullYear()-t.getUTCFullYear(),t => t.getUTCFullYear());bt.every=t => !isFinite(t=Math.floor(t))||!(t>0)?null:et(e=>{
  e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t);
  e.setUTCMonth(0,1);
  e.setUTCHours(0,0,0,0);
},(e,n)=>{e.setUTCFullYear(e.getUTCFullYear()+n*t)});bt.range;function wr(t,e,n,r,a,i){
  const s=[[vt,1,mt],[vt,5,5*mt],[vt,15,15*mt],[vt,30,30*mt],[i,1,ct],[i,5,5*ct],[i,15,15*ct],[i,30,30*ct],[a,1,gt],[a,3,3*gt],[a,6,6*gt],[a,12,12*gt],[r,1,yt],[r,2,2*yt],[n,1,De],[e,1,Ne],[e,3,3*Ne],[t,1,me]];

  class y {
    constructor(p, g, E) {
      const C=g<p;

      if (C) {
        ([p,g] = [g,p]);
      }

      const x=E&&typeof E.range=="function"?E:_(p,g,E);
      const X=x?x.range(p,+g+1):[];
      return C?X.reverse():X
    }

    static isoWeekYear() {return s(this).year()}

    static isoWeek(p) {
      if (!this.$utils().u(p)) {
        return this.add(7*(p-this.isoWeek()),n);
      }
      let g;
      let E;
      let C;
      let x;
      const X=s(this);
      g=this.isoWeekYear();
      E=this.$u;
      C=(E?i.utc:i)().year(g).startOf("year");
      x=4-C.isoWeekday();

      if (C.isoWeekday()>4) {
        (x += 7);
      }

      const O = C.add(x,n);
      return X.diff(O,"week")+1
    }

    static isoWeekday(p) {return this.$utils().u(p)?this.day()||7:this.day(this.day()%7?p:p-7)}

    static startOf(p, g) {
      const E=this.$utils();
      const C=!!E.u(g)||g;

      if (E.p(p)==="isoweek") {
        if (C) {
          return this.date(this.date()-(this.isoWeekday()-1)).startOf("day");
        }

        return this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day");
      }

      return _.bind(this)(p,g);
    }
  }

  function _(p,g,E){
    const C=Math.abs(g-p)/E;

    const x=b(([,,M]) => M).right(s,C);

    if (x===s.length) {
      return t.every(t(p/me,g/me,E));
    }if (x===0) {
      return Yt.every(Math.max(t(p,g,E),1));
    }const[X,O]=s[C/s[x-1][2]<s[x][2]/C?x-1:x];return X.every(O)
  }return[y,_]
}const[Dr,Cr]=wr(kt,Nt,Vt,Tt,Ot,Wt);function ge(t){if(t.y >= 0&&t.y<100){
  const e=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);
  e.setFullYear(t.y);
  return e;
}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function ye(t){if(t.y >= 0&&t.y<100){
  const e=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));
  e.setUTCFullYear(t.y);
  return e;
}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Lt(t,e,n){return{y:t,m:e,d:n,H:0,M:0,S:0,L:0}}function Mr(t){
  const e=t.dateTime;
  const n=t.date;
  const r=t.time;
  const a=t.periods;
  const i=t.days;
  const s=t.shortDays;
  const y=t.months;
  const _=t.shortMonths;
  const p=At(a);
  const g=It(a);
  const E=At(i);
  const C=It(i);
  const x=At(s);
  const X=It(s);
  const O=At(y);
  const M=It(y);
  const I=At(_);
  const V=It(_);
  const W={a:d,A:w,b:c,B:u,c:null,d:qe,e:qe,f:Qr,g:ia,G:oa,H:Zr,I:Xr,j:Gr,L:Tn,m:$r,M:jr,p:o,q:z,Q:Ge,s:Qe,S:Jr,u:Kr,U:ta,V:ea,w:na,W:ra,x:null,X:null,y:aa,Y:sa,Z:ca,"%":Xe};
  const q={a:P,A:R,b:K,B:G,c:null,d:Ze,e:Ze,f:ha,g:ba,G:Da,H:ua,I:la,j:fa,L:bn,m:da,M:ma,p:j,q:it,Q:Ge,s:Qe,S:ga,u:ya,U:ka,V:pa,w:va,W:Ta,x:null,X:null,y:xa,Y:wa,Z:Ca,"%":Xe};
  const $={a:F,A:S,b:v,B:U,c:l,d:Re,e:Re,f:zr,g:ze,G:Pe,H:Be,I:Be,j:Hr,L:Pr,m:Or,M:Nr,p:Y,q:Wr,Q:Br,s:qr,S:Vr,u:Ur,U:Er,V:Lr,w:Yr,W:Ar,x:m,X:T,y:ze,Y:Pe,Z:Ir,"%":Rr};
  W.x=D(n,W);
  W.X=D(r,W);
  W.c=D(e,W);
  q.x=D(n,q);
  q.X=D(r,q);
  q.c=D(e,q);
  function D(k,A){return N => {
    const f=[];
    let J=-1;
    let L=0;
    const Q=k.length;
    let Z;
    let rt;
    let st;
    for (N instanceof Date||(N=new Date(+N)); ++J<Q; ) {
      if (k.charCodeAt(J)===37) {
        f.push(k.slice(L,J));
        (rt=Ve[Z=k.charAt(++J)])!=null?Z=k.charAt(++J):rt=Z==="e"?" ":"0";
        (st=A[Z])&&(Z=st(N,rt));
        f.push(Z);
        L=J+1;
      }
    }
    f.push(k.slice(L,J));
    return f.join("");
  };}function H(k,A){return N => {
  const f=Lt(1900,void 0,1);
  const J=b(f,k,N+="",0);
  let L;
  let Q;
  if (J!=N.length) {
    return null;
  }if ("Q"in f) {
        return new Date(f.Q);
      }if ("s"in f) {
        return new Date(f.s*1000/* 1e3 */+("L"in f?f.L:0));
      }

  if (A&&!("Z"in f)) {
    (f.Z = 0);
  }

  if ("p"in f) {
    (f.H = f.H%12+f.p*12);
  }

  if (f.m===void 0) {
    (f.m = "q"in f?f.q:0);
  }

  if ("V"in f) {
    if (f.V<1||f.V>53) {
      return null;
    }

    if ("w" in f) {
      (f.w = 1);
    }

    if ("Z"in f) {
      L=ye(Lt(f.y,0,1));
      Q=L.getUTCDay();
      L=Q>4||Q===0?ee.ceil(L):ee(L);
      L=Ce.offset(L,(f.V-1)*7);
      f.y=L.getUTCFullYear();
      f.m=L.getUTCMonth();
      f.d=L.getUTCDate()+(f.w+6)%7;
    } else {
      L=ge(Lt(f.y,0,1));
      Q=L.getDay();
      L=Q>4||Q===0?Ht.ceil(L):Ht(L);
      L=Tt.offset(L,(f.V-1)*7);
      f.y=L.getFullYear();
      f.m=L.getMonth();
      f.d=L.getDate()+(f.w+6)%7;
    }
  } else {
    if (("W"in f || "U"in f)) {
      "w"in f||(f.w="u"in f?f.u%7:"W"in f?1:0);
      Q="Z"in f?ye(Lt(f.y,0,1)).getUTCDay():ge(Lt(f.y,0,1)).getDay();
      f.m=0;
      f.d="W"in f?(f.w+6)%7+f.W*7-(Q+5)%7:f.w+f.U*7-(Q+6)%7;
    }
  }

  return"Z"in f?(f.H+=f.Z/100|0,f.M+=f.Z%100,ye(f)):ge(f)
};}function b(k,A,N,f){
    const Q=N.length;
    let Z;
    let rt;
    for(let J=0, L=A.length;J<L;){
      if (f>=Q) {
        return-1;
      }
      Z=A.charCodeAt(J++);

      if (Z===37) {
        Z=A.charAt(J++);
        rt=$[Z in Ve?A.charAt(J++):Z];

        if (!rt||(f=rt(k,N,f))<0) {
          return-1
        }
      } else if (Z!=N.charCodeAt(f++)) {
        return-1
      }
    }return f
  }function Y(k,A,N){const f=p.exec(A.slice(N));return f?(k.p=g.get(f[0].toLowerCase()),N+f[0].length):-1}function F(k,A,N){const f=x.exec(A.slice(N));return f?(k.w=X.get(f[0].toLowerCase()),N+f[0].length):-1}function S(k,A,N){const f=E.exec(A.slice(N));return f?(k.w=C.get(f[0].toLowerCase()),N+f[0].length):-1}function v(k,A,N){const f=I.exec(A.slice(N));return f?(k.m=V.get(f[0].toLowerCase()),N+f[0].length):-1}function U(k,A,N){const f=O.exec(A.slice(N));return f?(k.m=M.get(f[0].toLowerCase()),N+f[0].length):-1}function l(k,A,N){return b(k,e,A,N)}function m(k,A,N){return b(k,n,A,N)}function T(k,A,N){return b(k,r,A,N)}function d(k){return s[k.getDay()]}function w(k){return i[k.getDay()]}function c(k){return _[k.getMonth()]}function u(k){return y[k.getMonth()]}function o(k){return a[+(k.getHours()>=12)]}function z(k){return 1+~~(k.getMonth()/3)}function P(k){return s[k.getUTCDay()]}function R(k){return i[k.getUTCDay()]}function K(k){return _[k.getUTCMonth()]}function G(k){return y[k.getUTCMonth()]}function j(k){return a[+(k.getUTCHours()>=12)]}function it(k){return 1+~~(k.getUTCMonth()/3)}return {format(k) {
    const A=D(k+="",W);
    A.toString=() => k;
    return A;
  },parse(k) {
    const A=H(k+="",false);
    A.toString=() => k;
    return A;
  },utcFormat(k) {
    const A=D(k+="",q);
    A.toString=() => k;
    return A;
  },utcParse(k) {
    const A=H(k+="",true);
    A.toString=() => k;
    return A;
  }};
}
var Ve={"-":"",_:" ",0:"0"};
const nt=/^\s*\d+/;
const _r=/^%/;
const Sr=/[\\^$*+?|[\]().{}]/g;
function B(t,e,n){
  const r=t<0?"-":"";
  const a=`${r?-t:t}`;
  const i=a.length;
  return r+(i<n?new Array(n-i+1).join(e)+a:a)
}function Fr(t){return t.replace(Sr,"\\$&")}function At(t){return new RegExp(`^(?:${t.map(Fr).join("|")})`,"i");}function It(t){return new Map(t.map((e, n) => [e.toLowerCase(),n]));}function Yr(t,e,n){const r=nt.exec(e.slice(n,n+1));return r?(t.w=+r[0],n+r[0].length):-1}function Ur(t,e,n){const r=nt.exec(e.slice(n,n+1));return r?(t.u=+r[0],n+r[0].length):-1}function Er(t,e,n){const r=nt.exec(e.slice(n,n+2));return r?(t.U=+r[0],n+r[0].length):-1}function Lr(t,e,n){const r=nt.exec(e.slice(n,n+2));return r?(t.V=+r[0],n+r[0].length):-1}function Ar(t,e,n){const r=nt.exec(e.slice(n,n+2));return r?(t.W=+r[0],n+r[0].length):-1}function Pe(t,e,n){const r=nt.exec(e.slice(n,n+4));return r?(t.y=+r[0],n+r[0].length):-1}function ze(t,e,n){const r=nt.exec(e.slice(n,n+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2000/* 2e3 */),n+r[0].length):-1;}function Ir(t,e,n){const r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n,n+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function Wr(t,e,n){const r=nt.exec(e.slice(n,n+1));return r?(t.q=r[0]*3-3,n+r[0].length):-1}function Or(t,e,n){const r=nt.exec(e.slice(n,n+2));return r?(t.m=r[0]-1,n+r[0].length):-1}function Re(t,e,n){const r=nt.exec(e.slice(n,n+2));return r?(t.d=+r[0],n+r[0].length):-1}function Hr(t,e,n){const r=nt.exec(e.slice(n,n+3));return r?(t.m=0,t.d=+r[0],n+r[0].length):-1}function Be(t,e,n){const r=nt.exec(e.slice(n,n+2));return r?(t.H=+r[0],n+r[0].length):-1}function Nr(t,e,n){const r=nt.exec(e.slice(n,n+2));return r?(t.M=+r[0],n+r[0].length):-1}function Vr(t,e,n){const r=nt.exec(e.slice(n,n+2));return r?(t.S=+r[0],n+r[0].length):-1}function Pr(t,e,n){const r=nt.exec(e.slice(n,n+3));return r?(t.L=+r[0],n+r[0].length):-1}function zr(t,e,n){const r=nt.exec(e.slice(n,n+6));return r?(t.L=Math.floor(r[0]/1000/* 1e3 */),n+r[0].length):-1;}function Rr(t,e,n){const r=_r.exec(e.slice(n,n+1));return r?n+r[0].length:-1}function Br(t,e,n){const r=nt.exec(e.slice(n));return r?(t.Q=+r[0],n+r[0].length):-1}function qr(t,e,n){const r=nt.exec(e.slice(n));return r?(t.s=+r[0],n+r[0].length):-1}function qe(t,e){return B(t.getDate(),e,2)}function Zr(t,e){return B(t.getHours(),e,2)}function Xr(t,e){return B(t.getHours()%12||12,e,2)}function Gr(t,e){return B(1+Tt.count(kt(t),t),e,3)}function Tn(t,e){return B(t.getMilliseconds(),e,3)}function Qr(t,e){return `${Tn(t,e)}000`;}function $r(t,e){return B(t.getMonth()+1,e,2)}function jr(t,e){return B(t.getMinutes(),e,2)}function Jr(t,e){return B(t.getSeconds(),e,2)}function Kr(t){const e=t.getDay();return e===0?7:e}function ta(t,e){return B(Vt.count(kt(t)-1,t),e,2)}function xn(t){const e=t.getDay();return e>=4||e===0?xt(t):xt.ceil(t)}function ea(t,e){
  t=xn(t);
  return B(xt.count(kt(t),t)+(kt(t).getDay()===4),e,2);
}function na(t){return t.getDay()}function ra(t,e){return B(Ht.count(kt(t)-1,t),e,2)}function aa(t,e){return B(t.getFullYear()%100,e,2)}function ia(t,e){
  t=xn(t);
  return B(t.getFullYear()%100,e,2);
}function sa(t,e){return B(t.getFullYear()%10000/* 1e4 */,e,4);}function oa(t,e){
  const n=t.getDay();
  t=n>=4||n===0?xt(t):xt.ceil(t);
  return B(t.getFullYear()%10000/* 1e4 */,e,4);
}function ca(t){let e=t.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+B(e/60|0,"0",2)+B(e%60,"0",2)}function Ze(t,e){return B(t.getUTCDate(),e,2)}function ua(t,e){return B(t.getUTCHours(),e,2)}function la(t,e){return B(t.getUTCHours()%12||12,e,2)}function fa(t,e){return B(1+Ce.count(bt(t),t),e,3)}function bn(t,e){return B(t.getUTCMilliseconds(),e,3)}function ha(t,e){return `${bn(t,e)}000`;}function da(t,e){return B(t.getUTCMonth()+1,e,2)}function ma(t,e){return B(t.getUTCMinutes(),e,2)}function ga(t,e){return B(t.getUTCSeconds(),e,2)}function ya(t){const e=t.getUTCDay();return e===0?7:e}function ka(t,e){return B(vn.count(bt(t)-1,t),e,2)}function wn(t){const e=t.getUTCDay();return e>=4||e===0?Ut(t):Ut.ceil(t)}function pa(t,e){
  t=wn(t);
  return B(Ut.count(bt(t),t)+(bt(t).getUTCDay()===4),e,2);
}function va(t){return t.getUTCDay()}function Ta(t,e){return B(ee.count(bt(t)-1,t),e,2)}function xa(t,e){return B(t.getUTCFullYear()%100,e,2)}function ba(t,e){
  t=wn(t);
  return B(t.getUTCFullYear()%100,e,2);
}function wa(t,e){return B(t.getUTCFullYear()%10000/* 1e4 */,e,4);}function Da(t,e){
  const n=t.getUTCDay();
  t=n>=4||n===0?Ut(t):Ut.ceil(t);
  return B(t.getUTCFullYear()%10000/* 1e4 */,e,4);
}function Ca(){return"+0000"}function Xe(){return"%"}function Ge(t){return+t}function Qe(t){return Math.floor(+t/1000/* 1e3 */);}
let Mt;
let ne;
Ma({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function Ma(t){
  Mt=Mr(t);
  ne=Mt.format;
  Mt.parse;
  Mt.utcFormat;
  Mt.utcParse;
  return Mt;
}function _a(t){return new Date(t)}function Sa(t){return t instanceof Date?+t:+new Date(+t)}function Dn(t,e,n,r,a,i,s,y,_,p){
  const g=c();
  const E=g.invert;
  const C=g.domain;
  const x=p(".%L");
  const X=p(":%S");
  const O=p("%I:%M");
  const M=p("%I %p");
  const I=p("%a %d");
  const V=p("%b %d");
  const W=p("%B");
  const q=p("%Y");
  function $(D){return(_(D)<D?x:y(D)<D?X:s(D)<D?O:i(D)<D?M:r(D)<D?a(D)<D?I:V:n(D)<D?W:q)(D)}
  g.invert=D => new Date(E(D));
  g.domain=function(D){return arguments.length?C(Array.from(D,Sa)):C().map(_a)};
  g.ticks=D => {const H=C();return t(H[0],H[H.length-1],D??10)};
  g.tickFormat=(D, H) => H==null?$:p(H);

  g.nice=D => {
    const H=C();

    if ((!D || typeof D.range!="function")) {
      (D = e(H[0],H[H.length-1],D??10));
    }

    return D?C(mr(H,D)):g;
  };

  g.copy=() => a(g,Dn(t,e,n,r,a,i,s,y,_,p));
  return g;
}function Fa(...args) {return i.apply(Dn(Dr,Cr,kt,Nt,Vt,Tt,Ot,Wt,vt,ne).domain([new Date(2000/* 2e3 */,0,1),new Date(2000/* 2e3 */,0,2)]),args);}
const Gt={exports:{}};
const Ya=Gt.exports;
let $e;
function Ua(){
  if (!$e) {
    $e=1;

    ((t, e) => {((n, r) => {t.exports=r()})(Ya, () => {const n="day";return (r, a, i) => {
      const s=p => p.add(4-p.isoWeekday(),n);
      const y=a.prototype;
      const _=y.startOf;
    };});})(Gt);
  }

  return Gt.exports;
}const Ea=Ua();const La=bB(Ea);
const Qt={exports:{}};
const Aa=Qt.exports;
let je;
function Ia(){
  if (!je) {
    je=1;

    ((t, e) => {((n, r) => {t.exports=r()})(Aa, () => {
      const n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};
      const r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
      const a=/\d/;
      const i=/\d\d/;
      const s=/\d\d?/;
      const y=/\d*[^-_:/,()\s\d]+/;
      let _={};
      let p=M => (M=+M)+(M>68?1900:2000/* 2e3 */);
      const g=M => (function(I) {this[M]=+I});

      const E=[/[+-]\d\d:?(\d\d)?|Z/,function(M){(this.zone||(this.zone={})).offset = (I => {
        if (!I||I==="Z") {
          return 0;
        }
        const V=I.match(/([+-]|\d\d)/g);
        const W=60*V[1]+(+V[2]||0);
        return W===0?0:V[0]==="+"?-W:W
      })(M)}];

      const C=M => {const I=_[M];return I&&(I.indexOf?I:I.s.concat(I.f))};

      const x=(M, I) => {
        let V;
        const W=_.meridiem;
        if (W) {for (let q=1; q<=24; q+=1) {
          if(M.includes(W(q,0,I))){V=q>12;break}
        }} else {
          V=M===(I?"pm":"PM");
        }return V
      };

      const X={A:[y,function(M){this.afternoon=x(M,false)}],a:[y,function(M){this.afternoon=x(M,true)}],Q:[a,function(M){this.month=3*(M-1)+1}],S:[a,function(M){this.milliseconds=100*+M}],SS:[i,function(M){this.milliseconds=10*+M}],SSS:[/\d{3}/,function(M){this.milliseconds=+M}],s:[s,g("seconds")],ss:[s,g("seconds")],m:[s,g("minutes")],mm:[s,g("minutes")],H:[s,g("hours")],h:[s,g("hours")],HH:[s,g("hours")],hh:[s,g("hours")],D:[s,g("day")],DD:[i,g("day")],Do:[y,function(M){
        const I=_.ordinal;
        const V=M.match(/\d+/);
        this.day=V[0];

        if (I) {
          for (let W=1; W<=31; W+=1) {
            if (I(W).replace(/\[|\]/g,"")===M) {
              (this.day = W);
            }
          }
        }
      }],w:[s,g("week")],ww:[i,g("week")],M:[s,g("month")],MM:[i,g("month")],MMM:[y,function(M){
        const I=C("months");
        const V=(C("monthsShort")||I.map((W => W.slice(0,3)))).indexOf(M)+1;
        if (V<1) {
          throw new Error;
        }this.month=V%12||V
      }],MMMM:[y,function(M){const I=C("months").indexOf(M)+1;if (I<1) {
        throw new Error;
      }this.month=I%12||I}],Y:[/[+-]?\d+/,g("year")],YY:[i,function(M){this.year=p(M)}],YYYY:[/\d{4}/,g("year")],Z:E,ZZ:E};

      function O(M){
        let I;
        let V;
        I=M;
        V=_&&_.formats;
        const W=(M=I.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,((F, S, v) => {const U=v&&v.toUpperCase();return S||V[v]||n[v]||V[U].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,((l, m, T) => m||T.slice(1)));}))).match(r);
        for(var q=W.length, $=0;$<q;$+=1){
          const D=W[$];
          const H=X[D];
          const b=H&&H[0];
          const Y=H&&H[1];
          W[$]=Y?{regex:b,parser:Y}:D.replace(/^\[|\]$/g,"")
        }return F => {
          const S={};
          let U=0;
          for(let v=0;v<q;v+=1){const l=W[v];if (typeof l=="string") {
            U+=l.length;
          } else {
            const m=l.regex;
            const T=l.parser;
            const d=F.slice(U);
            const w=m.exec(d)[0];
            T.call(S,w);
            F=F.replace(w,"");
          }}

          (c => {const u=c.afternoon;if(u!==void 0){
            const o=c.hours;

            if (u) {
              if (o<12) {
                (c.hours += 12);
              }
            } else if (o===12) {
              (c.hours = 0);
            }

            delete c.afternoon;
          }})(S);

          return S;
        };
      }return (M, I, V) => {
      V.p.customParseFormat=true;

      if (M&&M.parseTwoDigitYear) {
        (p = M.parseTwoDigitYear);
      }

      const W=I.prototype;
      const q=W.parse;
      W.parse=function($){
        const D=$.date;
        const H=$.utc;
        const b=$.args;
        this.$u=H;const Y=b[1];if(typeof Y=="string"){
        const F=b[2]===true;
        const S=b[3]===true;
        const v=F||S;
        let U=b[2];

        if (S) {
          (U = b[2]);
        }

        _=this.$locale();

        if (!F&&U) {
          (_ = V.Ls[U]);
        }

        this.$d = ((d, w, c, u) => {try{
          if (["x","X"].includes(w)) {
            return new Date((w==="X"?1000/* 1e3 */:1)*d);
          }
          const o=O(w)(d);
          const z=o.year;
          const P=o.month;
          const R=o.day;
          const K=o.hours;
          const G=o.minutes;
          const j=o.seconds;
          const it=o.milliseconds;
          const k=o.zone;
          const A=o.week;
          const N=new Date;
          const f=R||(z||P?1:N.getDate());
          const J=z||N.getFullYear();
          let L=0;

          if (!z || P) {
            (L = P>0?P-1:N.getMonth());
          }

          let Q;
          const Z=K||0;
          const rt=G||0;
          const st=j||0;
          const pt=it||0;

          if (k) {
            return new Date(Date.UTC(J,L,f,Z,rt,st,pt+60*k.offset*1000/* 1e3 */));
          }

          if (c) {
            return new Date(Date.UTC(J,L,f,Z,rt,st,pt));
          }

          Q=new Date(J,L,f,Z,rt,st,pt);
          A&&(Q=u(Q).week(A).toDate());
          return Q;
        }catch{return new Date("")}})(D, Y, H, V);

        this.init();

        if (U&&U!==true) {
          (this.$L = this.locale(U).$L);
        }

        if (v&&D!=this.format(Y)) {
          (this.$d = new Date(""));
        }

        _={};
      }else if (Y instanceof Array) {
          for(let l=Y.length, m=1;m<=l;m+=1){
            b[1]=Y[m-1];const T=V.apply(this,b);if(T.isValid()){
              this.$d=T.$d;
              this.$L=T.$L;
              this.init();
              break
            }

            if (m===l) {
              (this.$d = new Date(""));
            }
          }
        } else {
          q.call(this,$)
        }
      }
    };
    });})(Qt);
  }

  return Qt.exports;
}const Wa=Ia();const Oa=bB(Wa);
const $t={exports:{}};
const Ha=$t.exports;
let Je;
function Na(){
  if (!Je) {
    Je=1;

    ((t, e) => {((n, r) => {t.exports=r()})(Ha, () => (n, r) => {
      const a=r.prototype;
      const i=a.format;
    });})($t);
  }

  return $t.exports;
}const Va=Na();const Pa=bB(Va);const ve = (() => {
  const t=a2((U, l, m, T) => {
    m=m||{};

    for (T=U.length; T--; m[U[T]]=l)
      {}

    return m
  },"o");

  const e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40];
  const n=[1,26];
  const r=[1,27];
  const a=[1,28];
  const i=[1,29];
  const s=[1,30];
  const y=[1,31];
  const _=[1,32];
  const p=[1,33];
  const g=[1,34];
  const E=[1,9];
  const C=[1,10];
  const x=[1,11];
  const X=[1,12];
  const O=[1,13];
  const M=[1,14];
  const I=[1,15];
  const V=[1,16];
  const W=[1,19];
  const q=[1,20];
  const $=[1,21];
  const D=[1,22];
  const H=[1,23];
  const b=[1,25];
  const Y=[1,35];

  const F={trace:a2(() => {},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:a2(function(l,m,T,d,w,c,u){const o=c.length-1;switch(w){case 1:
    {
      return c[o-1];
    }case 2:
    {
      this.$=[];break;
    }case 3:
    {
      c[o-1].push(c[o]);
      this.$=c[o-1];
      break;
    }case 4:case 5:
    {
      this.$=c[o];break;
    }case 6:case 7:
    {
      this.$=[];break;
    }case 8:
    {
      d.setWeekday("monday");break;
    }case 9:
    {
      d.setWeekday("tuesday");break;
    }case 10:
    {
      d.setWeekday("wednesday");break;
    }case 11:
    {
      d.setWeekday("thursday");break;
    }case 12:
    {
      d.setWeekday("friday");break;
    }case 13:
    {
      d.setWeekday("saturday");break;
    }case 14:
    {
      d.setWeekday("sunday");break;
    }case 15:
    {
      d.setWeekend("friday");break;
    }case 16:
    {
      d.setWeekend("saturday");break;
    }case 17:
    {
      d.setDateFormat(c[o].substr(11));
      this.$=c[o].substr(11);
      break;
    }case 18:
    {
      d.enableInclusiveEndDates();
      this.$=c[o].substr(18);
      break;
    }case 19:
    {
      d.TopAxis();
      this.$=c[o].substr(8);
      break;
    }case 20:
    {
      d.setAxisFormat(c[o].substr(11));
      this.$=c[o].substr(11);
      break;
    }case 21:
    {
      d.setTickInterval(c[o].substr(13));
      this.$=c[o].substr(13);
      break;
    }case 22:
    {
      d.setExcludes(c[o].substr(9));
      this.$=c[o].substr(9);
      break;
    }case 23:
    {
      d.setIncludes(c[o].substr(9));
      this.$=c[o].substr(9);
      break;
    }case 24:
    {
      d.setTodayMarker(c[o].substr(12));
      this.$=c[o].substr(12);
      break;
    }case 27:
    {
      d.setDiagramTitle(c[o].substr(6));
      this.$=c[o].substr(6);
      break;
    }case 28:
    {
      this.$=c[o].trim();
      d.setAccTitle(this.$);
      break;
    }case 29:case 30:
    {
      this.$=c[o].trim();
      d.setAccDescription(this.$);
      break;
    }case 31:
    {
      d.addSection(c[o].substr(8));
      this.$=c[o].substr(8);
      break;
    }case 33:
    {
      d.addTask(c[o-1],c[o]);
      this.$="task";
      break;
    }case 34:
    {
      this.$=c[o-1];
      d.setClickEvent(c[o-1],c[o],null);
      break;
    }case 35:
    {
      this.$=c[o-2];
      d.setClickEvent(c[o-2],c[o-1],c[o]);
      break;
    }case 36:
    {
      this.$=c[o-2];
      d.setClickEvent(c[o-2],c[o-1],null);
      d.setLink(c[o-2],c[o]);
      break;
    }case 37:
    {
      this.$=c[o-3];
      d.setClickEvent(c[o-3],c[o-2],c[o-1]);
      d.setLink(c[o-3],c[o]);
      break;
    }case 38:
    {
      this.$=c[o-2];
      d.setClickEvent(c[o-2],c[o],null);
      d.setLink(c[o-2],c[o-1]);
      break;
    }case 39:
    {
      this.$=c[o-3];
      d.setClickEvent(c[o-3],c[o-1],c[o]);
      d.setLink(c[o-3],c[o-2]);
      break;
    }case 40:
    {
      this.$=c[o-1];
      d.setLink(c[o-1],c[o]);
      break;
    }case 41:case 47:
    {
      this.$=`${c[o-1]} ${c[o]}`;break;
    }case 42:case 43:case 45:
    {
      this.$=`${c[o-2]} ${c[o-1]} ${c[o]}`;break;
    }case 44:case 46:
    {
      this.$=`${c[o-3]} ${c[o-2]} ${c[o-1]} ${c[o]}`;break
    }}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:r,14:a,15:i,16:s,17:y,18:_,19:18,20:p,21:g,22:E,23:C,24:x,25:X,26:O,27:M,28:I,29:V,30:W,31:q,33:$,35:D,36:H,37:24,38:b,40:Y},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:n,13:r,14:a,15:i,16:s,17:y,18:_,19:18,20:p,21:g,22:E,23:C,24:x,25:X,26:O,27:M,28:I,29:V,30:W,31:q,33:$,35:D,36:H,37:24,38:b,40:Y},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:a2(function(l,m){if (m.recoverable) {
    this.trace(l);
  } else {
    const T=new Error(l);
    T.hash=m;
    throw T;
  }},"parseError"),parse:a2(function(l){
    const m=this;
    let T=[0];
    let d=[];
    let w=[null];
    let c=[];
    const u=this.table;
    let o="";
    let z=0;
    let P=0;
    const R=2;
    const K=1;
    const G=c.slice.call(arguments,1);
    const j=Object.create(this.lexer);
    const it={yy:{}};
    for (const k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy,k)) {
        (it.yy[k] = this.yy[k]);
      }
    }
    j.setInput(l,it.yy);
    it.yy.lexer=j;
    it.yy.parser=this;

    if (typeof j.yylloc === "undefined") {
      (j.yylloc = {});
    }

    let A=j.yylloc;c.push(A);const N=j.options&&j.options.ranges;

    if (typeof it.yy.parseError=="function") {
      this.parseError=it.yy.parseError;
    } else {
      this.parseError=Object.getPrototypeOf(this).parseError;
    }

    function f(ot){
        T.length=T.length-2*ot;
        w.length=w.length-ot;
        c.length=c.length-ot;
      }a2(f,"popStack");function J(){
      let ot;
      ot=d.pop()||j.lex()||K;

      if (typeof ot!="number") {
        ot instanceof Array&&(d=ot,ot=d.pop());
        ot=m.symbols_[ot]||ot;
      }

      return ot;
    }a2(J,"lex");
    let L;
    let Q;
    let Z;
    let rt;
    const st={};
    let pt;
    let ut;
    let We;
    let Bt;

    while (true) {
      Q=T[T.length-1];

      if (this.defaultActions[Q]) {
        Z=this.defaultActions[Q];
      } else {
        (L===null||typeof L === "undefined")&&(L=J());
        Z=u[Q]&&u[Q][L];
      }

      if (typeof Z === "undefined"||!Z.length||!Z[0]) {
        let ie="";Bt=[];for (pt in u[Q]) {
          if (this.terminals_[pt]&&pt>R) {
            Bt.push(`'${this.terminals_[pt]}'`);
          }
        }

        if (j.showPosition) {
          ie=`Parse error on line ${z+1}${`:
  `}${j.showPosition()}${`
  Expecting `}${Bt.join(", ")}, got '${this.terminals_[L]||L}'`;
        } else {
          ie=`Parse error on line ${z+1}: Unexpected ${L==K?"end of input":`'${this.terminals_[L]||L}'`}`;
        }

        this.parseError(ie,{text:j.match,token:this.terminals_[L]||L,line:j.yylineno,loc:A,expected:Bt});
      }

      if (Z[0]instanceof Array&&Z.length>1) {
        throw new Error(`Parse Error: multiple actions possible at state: ${Q}, token: ${L}`);
      }switch(Z[0]){case 1:
          {
            T.push(L);
            w.push(j.yytext);
            c.push(j.yylloc);
            T.push(Z[1]);
            L=null;
            P=j.yyleng;
            o=j.yytext;
            z=j.yylineno;
            A=j.yylloc;
            break;
          }case 2:
          {
            ut=this.productions_[Z[1]][1];
            st.$=w[w.length-ut];
            st._$={first_line:c[c.length-(ut||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(ut||1)].first_column,last_column:c[c.length-1].last_column};

            if (N) {
              (st._$.range = [c[c.length-(ut||1)].range[0],c[c.length-1].range[1]]);
            }

            rt=this.performAction.apply(st,[o,P,z,it.yy,Z[1],w,c].concat(G));

            if (typeof rt !== "undefined") {
              return rt;
            }

            if (ut) {
              T=T.slice(0,-1*ut*2);
              w=w.slice(0,-1*ut);
              c=c.slice(0,-1*ut);
            }

            T.push(this.productions_[Z[1]][0]);
            w.push(st.$);
            c.push(st._$);
            We=u[T[T.length-2]][T[T.length-1]];
            T.push(We);
            break;
          }case 3:
          {
            return true;
          }}
    }

    return true;
  },"parse")};

  const S = (() => {const U={EOF:1,parseError:a2(function(m,T){if (this.yy.parser) {
    this.yy.parser.parseError(m,T);
  } else {
    throw new Error(m)
  }},"parseError"),setInput:a2(function(l,m){
    this.yy=m||this.yy||{};
    this._input=l;
    this._more = false;
    this._backtrack = false;
    this.done = false;
    this.yylineno = 0;
    this.yyleng = 0;
    this.yytext = "";
    this.matched = "";
    this.match = "";
    this.conditionStack=["INITIAL"];
    this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};

    if (this.options.ranges) {
      (this.yylloc.range = [0,0]);
    }

    this.offset=0;
    return this;
  },"setInput"),input:a2(function(){
    const l=this._input[0];
    this.yytext+=l;
    this.yyleng++;
    this.offset++;
    this.match+=l;
    this.matched+=l;
    const m=l.match(/(?:\r\n?|\n).*/g);

    if (m) {
      this.yylineno++;
      this.yylloc.last_line++;
    } else {
      this.yylloc.last_column++;
    }

    if (this.options.ranges) {
      this.yylloc.range[1]++;
    }

    this._input=this._input.slice(1);
    return l;
  },"input"),unput:a2(function(l){
    const m=l.length;
    const T=l.split(/(?:\r\n?|\n)/g);
    this._input=l+this._input;
    this.yytext=this.yytext.substr(0,this.yytext.length-m);
    this.offset-=m;
    const d=this.match.split(/(?:\r\n?|\n)/g);
    this.match=this.match.substr(0,this.match.length-1);
    this.matched=this.matched.substr(0,this.matched.length-1);

    if (T.length-1) {
      (this.yylineno -= T.length-1);
    }

    const w=this.yylloc.range;
    this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:T?(T.length===d.length?this.yylloc.first_column:0)+d[d.length-T.length].length-T[0].length:this.yylloc.first_column-m};

    if (this.options.ranges) {
      (this.yylloc.range = [w[0],w[0]+this.yyleng-m]);
    }

    this.yyleng=this.yytext.length;
    return this;
  },"unput"),more:a2(function(){
    this._more=true;
    return this;
  },"more"),reject:a2(function(){if (this.options.backtrack_lexer) {
    this._backtrack=true;
  } else {
    return this.parseError(`Lexical error on line ${this.yylineno+1}${`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`}${this.showPosition()}`,{text:"",token:null,line:this.yylineno});
  }return this},"reject"),less:a2(function(l){this.unput(this.match.slice(l))},"less"),pastInput:a2(function(){const l=this.matched.substr(0,this.matched.length-this.match.length);return (l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"");},"pastInput"),upcomingInput:a2(function(){
    let l=this.match;

    if (l.length<20) {
      (l += this._input.substr(0,20-l.length));
    }

    return (l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"");
  },"upcomingInput"),showPosition:a2(function(){
    const l=this.pastInput();
    const m=new Array(l.length+1).join("-");
    return `${l+this.upcomingInput()+`
`+m}^`;
  },"showPosition"),test_match:a2(function(l,m){
    let T;
    let d;
    let w;

    if (this.options.backtrack_lexer) {
      w={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};
      this.options.ranges&&(w.yylloc.range=this.yylloc.range.slice(0));
    }

    d=l[0].match(/(?:\r\n?|\n).*/g);

    if (d) {
      (this.yylineno += d.length);
    }

    this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length};
    this.yytext+=l[0];
    this.match+=l[0];
    this.matches=l;
    this.yyleng=this.yytext.length;

    if (this.options.ranges) {
      (this.yylloc.range = [this.offset,this.offset+=this.yyleng]);
    }

    this._more=false;
    this._backtrack=false;
    this._input=this._input.slice(l[0].length);
    this.matched+=l[0];
    T=this.performAction.call(this,this.yy,this,m,this.conditionStack[this.conditionStack.length-1]);

    if (this.done&&this._input) {
      (this.done = false);
    }

    if (T) {
      return T;
    }

    if(this._backtrack){for (const c in w) {
      this[c]=w[c];
    }return false;}return false;
  },"test_match"),next:a2(function(){
    if (this.done) {
      return this.EOF;
    }

    if (!this._input) {
      (this.done = true);
    }

    let l;
    let m;
    let T;
    let d;

    if (!this._more) {
      this.yytext="";
      this.match="";
    }

    for (var w=this._currentRules(),c=0; c<w.length; c++) {
        T=this._input.match(this.rules[w[c]]);

        if (T&&(!m||T[0].length>m[0].length)) {
          m=T;
          d=c;

          if (this.options.backtrack_lexer) {
            l=this.test_match(T,w[c]);

            if (l!==false) {
              return l;
            }

            if (this._backtrack)
              {m=false;continue} else {
              return false;
            }
          } else if (!this.options.flex) {
            break
          }
        }
      }

    if (m) {
      l=this.test_match(m,w[d]);
      return l!==false?l:false;
    }

    if (this._input==="") {
      return this.EOF;
    }

    return this.parseError(`Lexical error on line ${this.yylineno+1}${`. Unrecognized text.
    `}${this.showPosition()}`,{text:"",token:null,line:this.yylineno});
  },"next"),lex:a2(function(){const m=this.next();return m||this.lex()},"lex"),begin:a2(function(m){this.conditionStack.push(m)},"begin"),popState:a2(function(){const m=this.conditionStack.length-1;return m>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a2(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a2(function(m){
    m=this.conditionStack.length-1-Math.abs(m||0);
    return m>=0?this.conditionStack[m]:"INITIAL";
  },"topState"),pushState:a2(function(m){this.begin(m)},"pushState"),stateStackSize:a2(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":true},performAction:a2(function(m,T,d,w){switch(d){case 0:
    {
      this.begin("open_directive");
      return "open_directive";
    }case 1:
    {
      this.begin("acc_title");
      return 31;
    }case 2:
    {
      this.popState();
      return "acc_title_value";
    }case 3:
    {
      this.begin("acc_descr");
      return 33;
    }case 4:
    {
      this.popState();
      return "acc_descr_value";
    }case 5:
    {
      this.begin("acc_descr_multiline");break;
    }case 6:
    {
      this.popState();break;
    }case 7:
    {
      return"acc_descr_multiline_value";
    }case 8:
    {
      break;
    }case 9:
    {
      break;
    }case 10:
    {
      break;
    }case 11:
    {
      return 10;
    }case 12:
    {
      break;
    }case 13:
    {
      break;
    }case 14:
    {
      this.begin("href");break;
    }case 15:
    {
      this.popState();break;
    }case 16:
    {
      return 43;
    }case 17:
    {
      this.begin("callbackname");break;
    }case 18:
    {
      this.popState();break;
    }case 19:
    {
      this.popState();
      this.begin("callbackargs");
      break;
    }case 20:
    {
      return 41;
    }case 21:
    {
      this.popState();break;
    }case 22:
    {
      return 42;
    }case 23:
    {
      this.begin("click");break;
    }case 24:
    {
      this.popState();break;
    }case 25:
    {
      return 40;
    }case 26:
    {
      return 4;
    }case 27:
    {
      return 22;
    }case 28:
    {
      return 23;
    }case 29:
    {
      return 24;
    }case 30:
    {
      return 25;
    }case 31:
    {
      return 26;
    }case 32:
    {
      return 28;
    }case 33:
    {
      return 27;
    }case 34:
    {
      return 29;
    }case 35:
    {
      return 12;
    }case 36:
    {
      return 13;
    }case 37:
    {
      return 14;
    }case 38:
    {
      return 15;
    }case 39:
    {
      return 16;
    }case 40:
    {
      return 17;
    }case 41:
    {
      return 18;
    }case 42:
    {
      return 20;
    }case 43:
    {
      return 21;
    }case 44:
    {
      return"date";
    }case 45:
    {
      return 30;
    }case 46:
    {
      return"accDescription";
    }case 47:
    {
      return 36;
    }case 48:
    {
      return 38;
    }case 49:
    {
      return 39;
    }case 50:
    {
      return":";
    }case 51:
    {
      return 6;
    }case 52:
    {
      return"INVALID"
    }}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:false},acc_descr:{rules:[4],inclusive:false},acc_title:{rules:[2],inclusive:false},callbackargs:{rules:[21,22],inclusive:false},callbackname:{rules:[18,19,20],inclusive:false},href:{rules:[15,16],inclusive:false},click:{rules:[24,25],inclusive:false},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:true}}};return U})();

  F.lexer=S;function v(){this.yy={}}
  a2(v,"Parser");
  v.prototype=F;
  F.Parser=v;
  return new v;
})();ve.parser=ve;const za=ve;cn_1.extend(La);cn_1.extend(Oa);cn_1.extend(Pa);
const Ke={friday:5,saturday:6};
let lt="";
let Me="";
let _e=void 0;
let Se="";
let Pt=[];
let zt=[];
let Fe=new Map;
let Ye=[];
let re=[];
let Et="";
let Ue="";
const Cn=["active","done","crit","milestone","vert"];
let Ee=[];
let Rt=false;
let Le=false;
let Ae="sunday";
var ae="saturday";
let Te=0;

const Ra=a2(() => {
  Ye=[];
  re=[];
  Et="";
  Ee=[];
  jt=0;
  be=void 0;
  Jt=void 0;
  tt=[];
  lt="";
  Me="";
  Ue="";
  _e=void 0;
  Se="";
  Pt=[];
  zt=[];
  Rt=false;
  Le=false;
  Te=0;
  Fe=new Map;
  cn_1_1();
  Ae="sunday";
  ae="saturday";
},"clear");

const Ba=a2(t => {Me=t},"setAxisFormat");
const qa=a2(() => Me,"getAxisFormat");
const Za=a2(t => {_e=t},"setTickInterval");
const Xa=a2(() => _e,"getTickInterval");
const Ga=a2(t => {Se=t},"setTodayMarker");
const Qa=a2(() => Se,"getTodayMarker");
const $a=a2(t => {lt=t},"setDateFormat");
const ja=a2(() => {Rt=true},"enableInclusiveEndDates");
const Ja=a2(() => Rt,"endDatesAreInclusive");
const Ka=a2(() => {Le=true},"enableTopAxis");
const ti=a2(() => Le,"topAxisEnabled");
const ei=a2(t => {Ue=t},"setDisplayMode");
const ni=a2(() => Ue,"getDisplayMode");
const ri=a2(() => lt,"getDateFormat");
const ai=a2(t => {Pt=t.toLowerCase().split(/[\s,]+/)},"setIncludes");
const ii=a2(() => Pt,"getIncludes");
const si=a2(t => {zt=t.toLowerCase().split(/[\s,]+/)},"setExcludes");
const oi=a2(() => zt,"getExcludes");
var ci=a2(() => Fe,"getLinks");

const ui=a2(t => {
  Et=t;
  Ye.push(t);
},"addSection");

const li=a2(() => Ye,"getSections");

const fi=a2(() => {
  let t=tn();const e=10;let n=0;

  while (!t&&n<e) {
      t=tn();
      n++;
    }

  re=tt;
  return re;
},"getTasks");

const Mn=a2((t, e, n, r) => {
  const a=t.format(e.trim());
  const i=t.format("YYYY-MM-DD");
  return r.includes(a)||r.includes(i)?false:n.includes("weekends")&&(t.isoWeekday()===Ke[ae]||t.isoWeekday()===Ke[ae]+1)||n.includes(t.format("dddd").toLowerCase())?true:n.includes(a)||n.includes(i);
},"isInvalidDate");

const hi=a2(t => {Ae=t},"setWeekday");
const di=a2(() => Ae,"getWeekday");
const mi=a2(t => {ae=t},"setWeekend");

const _n=a2((t, e, n, r) => {
  if (!n.length||t.manualEndTime) {
    return;
  }let a;

  if (t.startTime instanceof Date) {
    a=cn_1(t.startTime);
  } else {
    a=cn_1(t.startTime,e,true);
  }

  a=a.add(1,"d");
  let i;

  if (t.endTime instanceof Date) {
    i=cn_1(t.endTime);
  } else {
    i=cn_1(t.endTime,e,true);
  }

  const[s,y]=gi(a,i,e,n,r);
  t.endTime=s.toDate();
  t.renderEndTime=y;
},"checkTaskDates");

var gi=a2((t, e, n, r, a) => {
  let i=false;
  let s=null;

  while (t<=e) {
    if (!i) {
      (s = e.toDate());
    }

    i=Mn(t,n,r,a);

    if (i) {
      (e = e.add(1,"d"));
    }

    t=t.add(1,"d");
  }

  return[e,s]
},"fixTaskDates");

const xe=a2((t, e, n) => {
  n=n.trim();

  if ((e.trim()==="x"||e.trim()==="X")&&/^\d+$/.test(n)) {
    return new Date(Number(n));
  }

  const a=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(a!==null){
    let s=null;for(const _ of a.groups.ids.split(" ")){
  let p=Ct(_);

  if (p!==void 0&&(!s||p.endTime>s.endTime)) {
    (s = p);
  }
}if (s) {
      return s.endTime;
    }const y=new Date;
    y.setHours(0,0,0,0);
    return y;
  }let i=cn_1(n,e.trim(),true);if (i.isValid()) {
    return i.toDate();
  }{
    a9.debug(`Invalid date:${n}`);
    a9.debug(`With date format:${e.trim()}`);
    const s=new Date(n);if (s===void 0||isNaN(s.getTime())||s.getFullYear()<-10000/* -1e4 */||s.getFullYear()>10000/* 1e4 */) {
      throw new Error(`Invalid date:${n}`);
    }return s
  }
},"getStartDate");

const Sn=a2(t => {const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration");

const Fn=a2((t, e, n, r=false) => {n=n.trim();const i=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){
  let g=null;for(const C of i.groups.ids.split(" ")){
  let x=Ct(C);

  if (x!==void 0&&(!g||x.startTime<g.startTime)) {
    (g = x);
  }
}if (g) {
    return g.startTime;
  }const E=new Date;
  E.setHours(0,0,0,0);
  return E;
}let s=cn_1(n,e.trim(),true);if (s.isValid()) {
  if (r) {
    (s = s.add(1,"d"));
  }

  return s.toDate();
}let y=cn_1(t);const[_,p]=Sn(n);if(!Number.isNaN(_)){
  const g=y.add(_,p);

  if (g.isValid()) {
    (y = g);
  }
}return y.toDate()},"getEndDate");

var jt=0;
const Ft=a2(t => t===void 0?(jt=jt+1,`task${jt}`):t,"parseId");

const yi=a2((t, e) => {
  let n;

  if (e.substr(0,1)===":") {
    n=e.substr(1,e.length);
  } else {
    n=e;
  }

  const r=n.split(",");
  const a={};
  Ie(r,a,Cn);for (let s=0; s<r.length; s++) {
      r[s]=r[s].trim();
    }let i="";switch(r.length){case 1:
      {
        a.id=Ft();
        a.startTime=t.endTime;
        i=r[0];
        break;
      }case 2:
      {
        a.id=Ft();
        a.startTime=xe(void 0,lt,r[0]);
        i=r[1];
        break;
      }case 3:
      {
        a.id=Ft(r[0]);
        a.startTime=xe(void 0,lt,r[1]);
        i=r[2];
        break
      }}

  if (i) {
    a.endTime=Fn(a.startTime,lt,i,Rt);
    a.manualEndTime=cn_1(i,"YYYY-MM-DD",true).isValid();
    _n(a,lt,zt,Pt);
  }

  return a;
},"compileData");

const ki=a2((t, e) => {
  let n;

  if (e.substr(0,1)===":") {
    n=e.substr(1,e.length);
  } else {
    n=e;
  }

  const r=n.split(",");
  const a={};
  Ie(r,a,Cn);for (let i=0; i<r.length; i++) {
      r[i]=r[i].trim();
    }switch(r.length){case 1:
      {
        a.id=Ft();
        a.startTime={type:"prevTaskEnd",id:t};
        a.endTime={data:r[0]};
        break;
      }case 2:
      {
        a.id=Ft();
        a.startTime={type:"getStartDate",startData:r[0]};
        a.endTime={data:r[1]};
        break;
      }case 3:
      {
        a.id=Ft(r[0]);
        a.startTime={type:"getStartDate",startData:r[1]};
        a.endTime={data:r[2]};
        break
      }}return a
},"parseData");

var be;
var Jt;
var tt=[];
const Yn={};

const pi=a2((t, e) => {
  const n={section:Et,type:Et,processed:false,manualEndTime:false,renderEndTime:null,raw:{data:e},task:t,classes:[]};
  const r=ki(Jt,e);
  n.raw.startTime=r.startTime;
  n.raw.endTime=r.endTime;
  n.id=r.id;
  n.prevTaskId=Jt;
  n.active=r.active;
  n.done=r.done;
  n.crit=r.crit;
  n.milestone=r.milestone;
  n.vert=r.vert;
  n.order=Te;
  Te++;
  const a=tt.push(n);
  Jt=n.id;
  Yn[n.id]=a-1;
},"addTask");

var Ct=a2(t => {const e=Yn[t];return tt[e]},"findTaskById");

const vi=a2((t, e) => {
  const n={section:Et,type:Et,description:t,task:t,classes:[]};
  const r=yi(be,e);
  n.startTime=r.startTime;
  n.endTime=r.endTime;
  n.id=r.id;
  n.active=r.active;
  n.done=r.done;
  n.crit=r.crit;
  n.milestone=r.milestone;
  n.vert=r.vert;
  be=n;
  re.push(n);
},"addTaskOrg");

var tn=a2(() => {const t=a2(n => {
  const r=tt[n];let a="";switch(tt[n].raw.startTime.type){case"prevTaskEnd":{const i=Ct(r.prevTaskId);r.startTime=i.endTime;break}case "getStartDate":
      {
        a=xe(void 0,lt,tt[n].raw.startTime.startData);

        if (a) {
          (tt[n].startTime = a);
        }

        break
      }}

  if (tt[n].startTime) {
    tt[n].endTime=Fn(tt[n].startTime,lt,tt[n].raw.endTime.data,Rt);
    tt[n].endTime&&(tt[n].processed=true,tt[n].manualEndTime=cn_1(tt[n].raw.endTime.data,"YYYY-MM-DD",true).isValid(),_n(tt[n],lt,zt,Pt));
  }

  return tt[n].processed;
},"compileTask");let e=true;for (const[n,r] of tt.entries()) {
  t(n);
  e=e&&r.processed;
}return e},"compileTasks");

const Ti=a2((t, e) => {
  let n=e;

  if (a7().securityLevel!=="loose") {
    (n = ae_1.sanitizeUrl(e));
  }

  t.split(",").forEach(r => {
    if (Ct(r)!==void 0) {
      En(r,()=>{window.open(n,"_self")});
      Fe.set(r,n);
    }
  });
  Un(t,"clickable");
},"setLink");

var Un=a2((t, e) => {t.split(",").forEach(n => {
  let r=Ct(n);

  if (r!==void 0) {
    r.classes.push(e);
  }
})},"setClass");

const xi=a2((t, e, n) => {
  if (a7().securityLevel!=="loose"||e===void 0) {
    return;
  }let r=[];if(typeof n=="string"){r=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let i=0;i<r.length;i++){
    let s=r[i].trim();

    if (s.startsWith('"')&&s.endsWith('"')) {
      (s = s.substr(1,s.length-2));
    }

    r[i]=s;
  }}

  if (r.length===0) {
    r.push(t);
  }

  if (Ct(t)!==void 0) {
    En(t,()=>{am.runFunc(e,...r)});
  }
},"setClickFun");

var En=a2((t, e) => {Ee.push(() => {
  const n=document.querySelector(`[id="${t}"]`);

  if (n!==null) {
    n.addEventListener("click",() => {e()});
  }
},() => {
  const n=document.querySelector(`[id="${t}-text"]`);

  if (n!==null) {
    n.addEventListener("click",() => {e()});
  }
})},"pushFun");

const bi=a2((t, e, n) => {
  t.split(",").forEach(r => {xi(r,e,n)});
  Un(t,"clickable");
},"setClickEvent");

const wi=a2(t => {Ee.forEach(e => {e(t)})},"bindFunctions");

const Di={getConfig:a2(() => a7().gantt,"getConfig"),clear:Ra,setDateFormat:$a,getDateFormat:ri,enableInclusiveEndDates:ja,endDatesAreInclusive:Ja,enableTopAxis:Ka,topAxisEnabled:ti,setAxisFormat:Ba,getAxisFormat:qa,setTickInterval:Za,getTickInterval:Xa,setTodayMarker:Ga,getTodayMarker:Qa,setAccTitle:a6,getAccTitle:a5,setDiagramTitle:cj_1,getDiagramTitle:ao,setDisplayMode:ei,getDisplayMode:ni,setAccDescription:a3,getAccDescription:a4,addSection:ui,getSections:li,getTasks:fi,addTask:pi,findTaskById:Ct,addTaskOrg:vi,setIncludes:ai,getIncludes:ii,setExcludes:si,getExcludes:oi,setClickEvent:bi,setLink:Ti,getLinks:ci,bindFunctions:wi,parseDuration:Sn,isInvalidDate:Mn,setWeekday:hi,getWeekday:di,setWeekend:mi};

function Ie(t,e,n){
  let r=true;

  while (r) {
    r=false;

    n.forEach(a => {
      const i=`^\\s*${a}\\s*$`;
      const s=new RegExp(i);

      if (t[0].match(s)) {
        e[a]=true;
        t.shift(1);
        r=true;
      }
    });
  }
}a2(Ie,"getTaskTags");
const Ci=a2(() => {a9.debug("Something is calling, setConf, remove the call")},"setConf");
const en={monday:Ht,tuesday:gn,wednesday:yn,thursday:xt,friday:kn,saturday:pn,sunday:Vt};

const Mi=a2((t,e)=>{
  let n=[...t].map(() => -Infinity);

  let r=[...t].sort((i, s) => i.startTime-s.startTime||i.order-s.order);

  let a=0;
  for (const i of r) {
    for (let s=0; s<n.length; s++) {
      if(i.startTime>=n[s]){
        n[s]=i.endTime;
        i.order=s+e;

        if (s>a) {
          (a = s);
        }

        break
      }
    }
  }return a
},"getMaxIntersections");

let ht;

const _i=a2((t, e, n, r) => {
  const a=a7().gantt;
  const i=a7().securityLevel;
  let s;

  if (i==="sandbox") {
    (s = a8(`#i${e}`));
  }

  const y=i==="sandbox"?a8(s.nodes()[0].contentDocument.body):a8("body");
  const _=i==="sandbox"?s.nodes()[0].contentDocument:document;
  const p=_.getElementById(e);
  ht=p.parentElement.offsetWidth;

  if (ht===void 0) {
    (ht = 1200);
  }

  if (a.useWidth!==void 0) {
    (ht = a.useWidth);
  }

  const g=r.db.getTasks();let E=[];for (const b of g) {
      E.push(b.type);
    }E=H(E);const C={};let x=2*a.topPadding;if(r.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const b={};for (const F of g) {
    if (b[F.section]===void 0) {
      b[F.section]=[F];
    } else {
      b[F.section].push(F);
    }
  }let Y=0;for(const F of Object.keys(b)){
      const S=Mi(b[F],Y)+1;
      Y+=S;
      x+=S*(a.barHeight+a.barGap);
      C[F]=S;
    }}else{x+=g.length*(a.barHeight+a.barGap);for (const b of E) {
      C[b]=g.filter(Y => Y.type===b).length
    }}p.setAttribute("viewBox",`0 0 ${ht} ${x}`);
  const X=y.select(`[id="${e}"]`);
  const O=Fa().domain([Jn(g,b => b.startTime),jn(g,b => b.endTime)]).rangeRound([0,ht-a.leftPadding-a.rightPadding]);
  function M(b,Y){
    const F=b.startTime;
    const S=Y.startTime;
    let v=0;

    if (F>S) {
      v=1;
    } else if (F<S) {
      (v = -1);
    }

    return v;
  }
  a2(M,"taskCompare");
  g.sort(M);
  I(g,ht,x);
  aa_1(X,x,ht,a.useMaxWidth);
  X.append("text").text(r.db.getDiagramTitle()).attr("x",ht/2).attr("y",a.titleTopMargin).attr("class","titleText");
  function I(b,Y,F){
    const S=a.barHeight;
    const v=S+a.barGap;
    const U=a.topPadding;
    const l=a.leftPadding;
    const m=l().domain([0,E.length]).range(["#00B9FA","#F95002"]).interpolate(dr);
    W(v,U,l,Y,F,b,r.db.getExcludes(),r.db.getIncludes());
    q(l,U,Y,F);
    V(b,v,U,l,S,m,Y);
    $(v,U);
    D(l,U,Y,F);
  }a2(I,"makeGantt");function V(b,Y,F,S,v,U,l){
      b.sort((u, o) => u.vert===o.vert?0:u.vert?1:-1);const T=[...new Set(b.map(u => u.order))].map(u => b.find(o => o.order===u));X.append("g").selectAll("rect").data(T).enter().append("rect").attr("x",0).attr("y",(u, o) => {
        o=u.order;
        return o*Y+F-2;
      }).attr("width",() => l-a.rightPadding/2).attr("height",Y).attr("class",u => {for (const[o,z] of E.entries()) {
        if (u.type===z) {
          return `section section${o%a.numberSectionStyles}`;
        }
      }return"section section0"}).enter();
      const d=X.append("g").selectAll("rect").data(b).enter();
      const w=r.db.getLinks();

      d.append("rect").attr("id",u => u.id).attr("rx",3).attr("ry",3).attr("x",u => u.milestone?O(u.startTime)+S+0.5/* .5 */*(O(u.endTime)-O(u.startTime))-0.5/* .5 */*v:O(u.startTime)+S).attr("y",(u, o) => {
        o=u.order;
        return u.vert?a.gridLineStartPadding:o*Y+F;
      }).attr("width",u => u.milestone?v:u.vert?0.08/* .08 */*v:O(u.renderEndTime||u.endTime)-O(u.startTime)).attr("height",u => u.vert?g.length*(a.barHeight+a.barGap)+a.barHeight*2:v).attr("transform-origin",(u, o) => {
        o=u.order;
        return `${(O(u.startTime)+S+0.5/* .5 */*(O(u.endTime)-O(u.startTime))).toString()}px ${(o*Y+F+0.5/* .5 */*v).toString()}px`;
      }).attr("class",u => {
        const o="task";let z="";

        if (u.classes.length>0) {
          (z = u.classes.join(" "));
        }

        let P=0;for (const[K,G] of E.entries()) {
          if (u.type===G) {
            (P = K%a.numberSectionStyles);
          }
        }let R="";

        if (u.active) {
          if (u.crit) {
            R+=" activeCrit";
          } else {
            R=" active";
          }
        } else if (u.done) {
          if (u.crit) {
            R=" doneCrit";
          } else {
            R=" done";
          }
        } else if (u.crit) {
          (R += " crit");
        }

        if (R.length===0) {
          (R = " task");
        }

        if (u.milestone) {
          (R = ` milestone ${R}`);
        }

        if (u.vert) {
          (R = ` vert ${R}`);
        }

        R+=P;
        R+=` ${z}`;
        return o+R;
      });

      d.append("text").attr("id",u => `${u.id}-text`).text(u => u.task).attr("font-size",a.fontSize).attr("x",function(u){
        let o=O(u.startTime);
        let z=O(u.renderEndTime||u.endTime);

        if (u.milestone) {
          o+=0.5/* .5 */*(O(u.endTime)-O(u.startTime))-0.5/* .5 */*v;
          z=o+v;
        }

        if (u.vert) {
          return O(u.startTime)+S;
        }

        const P=this.getBBox().width;

        if (P>z-o) {
          if (z+P+1.5*a.leftPadding>l) {
            return o+S-5;
          }

          return z+S+5;
        }

        return (z-o)/2+o+S;
      }).attr("y",(u, o) => u.vert?a.gridLineStartPadding+g.length*(a.barHeight+a.barGap)+60:(o=u.order,o*Y+a.barHeight/2+(a.fontSize/2-2)+F)).attr("text-height",v).attr("class",function(u){
        const o=O(u.startTime);let z=O(u.endTime);

        if (u.milestone) {
          (z = o+v);
        }

        const P=this.getBBox().width;let R="";

        if (u.classes.length>0) {
          (R = u.classes.join(" "));
        }

        let K=0;for (const[j,it] of E.entries()) {
          if (u.type===it) {
            (K = j%a.numberSectionStyles);
          }
        }let G="";

        if (u.active) {
          if (u.crit) {
            G=`activeCritText${K}`;
          } else {
            G=`activeText${K}`;
          }
        }

        if (u.done) {
          if (u.crit) {
            G=`${G} doneCritText${K}`;
          } else {
            G=`${G} doneText${K}`;
          }
        } else if (u.crit) {
          (G = `${G} critText${K}`);
        }

        if (u.milestone) {
          (G += " milestoneText");
        }

        if (u.vert) {
          (G += " vertText");
        }

        return P>z-o?z+P+1.5*a.leftPadding>l?`${R} taskTextOutsideLeft taskTextOutside${K} ${G}`:`${R} taskTextOutsideRight taskTextOutside${K} ${G} width-${P}`:`${R} taskText taskText${K} ${G} width-${P}`;
      });

      if (a7().securityLevel==="sandbox") {let u;u=a8(`#i${e}`);const o=u.nodes()[0].contentDocument;d.filter(z => w.has(z.id)).each(z => {
        const P=o.querySelector(`#${z.id}`);
        const R=o.querySelector(`#${z.id}-text`);
        const K=P.parentNode;const G=o.createElement("a");
        G.setAttribute("xlink:href",w.get(z.id));
        G.setAttribute("target","_top");
        K.appendChild(G);
        G.appendChild(P);
        G.appendChild(R);
      })}
    }a2(V,"drawRects");function W(b,Y,F,S,v,U,l,m){
    if (l.length===0&&m.length===0) {
      return;
    }
    let T;
    let d;
    for (const{startTime,endTime} of U) {
      if ((T===void 0 || startTime<T)) {
        (T = startTime);
      }

      if ((d===void 0 || endTime>d)) {
        (d = endTime);
      }
    }if (!T||!d) {
          return;
        }if(cn_1(d).diff(cn_1(T),"year")>5){a9.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}
    const w=r.db.getDateFormat();
    const c=[];
    let u=null;
    let o=cn_1(T);

    while (o.valueOf()<=d) {
      if (r.db.isInvalidDate(o,w,l,m)) {
        if (u) {
          u.end=o;
        } else {
          u={start:o,end:o};
        }
      } else if (u) {
        c.push(u);
        u=null;
      }

      o=o.add(1,"d");
    }

    X.append("g").selectAll("rect").data(c).enter().append("rect").attr("id",P => `exclude-${P.start.format("YYYY-MM-DD")}`).attr("x",P => O(P.start.startOf("day"))+F).attr("y",a.gridLineStartPadding).attr("width",P => O(P.end.endOf("day"))-O(P.start.startOf("day"))).attr("height",v-Y-a.gridLineStartPadding).attr("transform-origin",(P, R) => `${(O(P.start)+F+0.5/* .5 */*(O(P.end)-O(P.start))).toString()}px ${(R*b+0.5/* .5 */*v).toString()}px`).attr("class","exclude-range")
  }a2(W,"drawExcludeDays");function q(b,Y,F,S){
    const v=r.db.getDateFormat();
    const U=r.db.getAxisFormat();
    let l;

    if (U) {
      l=U;
    } else if (v==="D") {
      l="%d";
    } else {
      l=a.axisFormat??"%Y-%m-%d";
    }

    let m=sr(O).tickSize(-S+Y+a.gridLineStartPadding).tickFormat(ne(l));const d=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||a.tickInterval);if(d!==null){
          const w=d[1];
          const c=d[2];
          const u=r.db.getWeekday()||a.weekday;
          switch(c){case "millisecond":
            {
              m.ticks(Yt.every(w));break;
            }case "second":
            {
              m.ticks(vt.every(w));break;
            }case "minute":
            {
              m.ticks(Wt.every(w));break;
            }case "hour":
            {
              m.ticks(Ot.every(w));break;
            }case "day":
            {
              m.ticks(Tt.every(w));break;
            }case "week":
            {
              m.ticks(en[u].every(w));break;
            }case "month":
            {
              m.ticks(Nt.every(w));break
            }}
        }
    X.append("g").attr("class","grid").attr("transform",`translate(${b}, ${S-50})`).call(m).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em");

    if (r.db.topAxisEnabled()||a.topAxis) {let w=ir(O).tickSize(-S+Y+a.gridLineStartPadding).tickFormat(ne(l));if(d!==null){
      const c=d[1];
      const u=d[2];
      const o=r.db.getWeekday()||a.weekday;
      switch(u){case "millisecond":
        {
          w.ticks(Yt.every(c));break;
        }case "second":
        {
          w.ticks(vt.every(c));break;
        }case "minute":
        {
          w.ticks(Wt.every(c));break;
        }case "hour":
        {
          w.ticks(Ot.every(c));break;
        }case "day":
        {
          w.ticks(Tt.every(c));break;
        }case "week":
        {
          w.ticks(en[o].every(c));break;
        }case "month":
        {
          w.ticks(Nt.every(c));break
        }}
    }X.append("g").attr("class","grid").attr("transform",`translate(${b}, ${Y})`).call(w).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}
  }a2(q,"makeGrid");function $(b,Y){let F=0;const S=Object.keys(C).map(v => [v,C[v]]);X.append("g").selectAll("text").data(S).enter().append(v => {
      const U=v[0].split(ag.lineBreakRegex);
      const l=-(U.length-1)/2;
      const m=_.createElementNS("http://www.w3.org/2000/svg","text");
      m.setAttribute("dy",`${l}em`);for(const[T,d]of U.entries()){
    const w=_.createElementNS("http://www.w3.org/2000/svg","tspan");
    w.setAttribute("alignment-baseline","central");
    w.setAttribute("x","10");

    if (T>0) {
      w.setAttribute("dy","1em");
    }

    w.textContent=d;
    m.appendChild(w);
  }return m
    }).attr("x",10).attr("y",(v, U) => {if (U>0) {
      for (let l=0; l<U; l++) {
        F+=S[U-1][1];
        return v[1]*b/2+F*b+Y;
      }
    } else {
      return v[1]*b/2+Y
    }}).attr("font-size",a.sectionFontSize).attr("class",v => {for (const[U,l] of E.entries()) {
      if (v[0]===l) {
        return `sectionTitle sectionTitle${U%a.numberSectionStyles}`;
      }
    }return"sectionTitle"})}a2($,"vertLabels");function D(b,Y,F,S){
    const v=r.db.getTodayMarker();if (v==="off") {
          return;
        }
    const U=X.append("g").attr("class","today");
    const l=new Date;
    const m=U.append("line");
    m.attr("x1",O(l)+b).attr("x2",O(l)+b).attr("y1",a.titleTopMargin).attr("y2",S-a.titleTopMargin).attr("class","today");

    if (v!=="") {
      m.attr("style",v.replace(/,/g,";"));
    }
  }a2(D,"drawToday");function H(b){
      const Y={};
      const F=[];
      for (let S=0,v=b.length; S<v; ++S) {
        if (!Object.prototype.hasOwnProperty.call(Y,b[S])) {
          Y[b[S]]=true;
          F.push(b[S]);
        }
      }return F
    }a2(H,"checkUnique")
},"draw");

const Si={setConf:Ci,draw:_i};

const Fi=a2(t => `
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles");

const Yi=Fi;

export const diagram = {parser:za,db:Di,renderer:Si,styles:Yi};
//# sourceMappingURL=ganttDiagram-LVOFAZNH-CJrLW_z7.js.map

export{diagram as diagram};
//# sourceMappingURL=ganttDiagram-LVOFAZNH-CJrLW_z7.js.map
