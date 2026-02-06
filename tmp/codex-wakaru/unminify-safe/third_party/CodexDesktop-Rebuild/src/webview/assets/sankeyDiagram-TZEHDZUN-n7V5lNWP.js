import{a2,an,ao,a3,a4,a6,a5,a7,au,a8,b4,at as at_1,ag}from"./index-CgwAo6pj.js";import{o}from"./ordinal-Cboi1Yqb.js";import"./init-Gi6I4Gst.js";function Nt(t){
  const i=new Array(e);
  for (var e=t.length/6|0, a=0; a<e; ) {
    i[a]=`#${t.slice(a*6,++a*6)}`;
  }return i
}const It=Nt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");function ct(t,e){let i;if (e===void 0) {
  for (const a of t) {
    if (a!=null&&(i<a||i===void 0&&a>=a)) {
      (i = a);
    }
  }
} else {let a=-1;for (let h of t) {
  if ((h=e(h,++a,t))!=null&&(i<h||i===void 0&&h>=h)) {
    (i = h);
  }
}}return i}function pt(t,e){let i;if (e===void 0) {
  for (const a of t) {
    if (a!=null&&(i>a||i===void 0&&a>=a)) {
      (i = a);
    }
  }
} else {let a=-1;for (let h of t) {
  if ((h=e(h,++a,t))!=null&&(i>h||i===void 0&&h>=h)) {
    (i = h);
  }
}}return i}function nt(t,e){let i=0;if (e===void 0) {
  for (let a of t) {
    if ((a = +a)) {
      (i += a);
    }
  }
} else {let a=-1;for (let h of t) {
  if ((h = +e(h,++a,t))) {
    (i += h);
  }
}}return i}function Pt(t){return t.target.depth}function Ct(t){return t.depth}function Ot(t,e){return e-1-t.height}function mt(t,e){return t.sourceLinks.length?t.depth:e-1}function Dt(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?pt(t.sourceLinks,Pt)-1:0}function q(t){return () => t;}function ut(t,e){return Q(t.source,e.source)||t.index-e.index}function ht(t,e){return Q(t.target,e.target)||t.index-e.index}function Q(t,e){return t.y0-e.y0}function it(t){return t.value}function $t(t){return t.index}function zt(t){return t.nodes}function jt(t){return t.links}function ft(t,e){const i=t.get(e);if (!i) {
  throw new Error(`missing: ${e}`);
}return i}function yt({nodes}){for(const e of nodes){
  let i=e.y0;
  let a=i;
  for (const h of e.sourceLinks) {
    h.y0=i+h.width/2;
    i+=h.width;
  }for (const h of e.targetLinks) {
    h.y1=a+h.width/2;
    a+=h.width;
  }
}}function Bt(...args) {
  let t=0;
  let e=0;
  let i=1;
  let a=1;
  let h=24;
  let b=8;
  let p;
  let k=$t;
  let s=mt;
  let o;
  let l;
  let _=zt;
  let x=jt;
  let y=6;

  class v {
    constructor() {
      const n={nodes:_(...args),links:x(...args)};
      M(n);
      T(n);
      N(n);
      C(n);
      S(n);
      yt(n);
      return n;
    }

    static update(n) {
      yt(n);
      return n;
    }

    static nodeId(n) {return args.length?(k=typeof n=="function"?n:q(n),v):k;}
    static nodeAlign(n) {return args.length?(s=typeof n=="function"?n:q(n),v):s;}
    static nodeSort(n) {return args.length?(o=n,v):o;}
    static nodeWidth(n) {return args.length?(h=+n,v):h;}
    static nodePadding(n) {return args.length?(b=p=+n,v):b;}
    static nodes(n) {return args.length?(_=typeof n=="function"?n:q(n),v):_;}
    static links(n) {return args.length?(x=typeof n=="function"?n:q(n),v):x;}
    static linkSort(n) {return args.length?(l=n,v):l;}
    static size(n) {return args.length?(t=e=0,i=+n[0],a=+n[1],v):[i-t,a-e];}
    static extent(n) {return args.length?(t=+n[0][0],i=+n[1][0],e=+n[0][1],a=+n[1][1],v):[[t,e],[i,a]];}
    static iterations(n) {return args.length?(y=+n,v):y;}
  }

  function M({nodes,links}){for (const[c,r] of nodes.entries()) {
    r.index=c;
    r.sourceLinks=[];
    r.targetLinks=[];
  }const u=new Map(nodes.map((c, r) => [k(c,r,nodes),c]));for(const[c,r]of links.entries()){
    r.index=c;let{source,target}=r;

    if (typeof source!="object") {
      (source = r.source=ft(u,source));
    }

    if (typeof target!="object") {
      (target = r.target=ft(u,target));
    }

    source.sourceLinks.push(r);
    target.targetLinks.push(r);
  }if (l!=null) {
    for (const{sourceLinks,targetLinks} of nodes) {
      sourceLinks.sort(l);
      targetLinks.sort(l);
    }
  }}function T({nodes}){for (const f of nodes) {
      f.value=f.fixedValue===void 0?Math.max(nt(f.sourceLinks,it),nt(f.targetLinks,it)):f.fixedValue
    }}function N({nodes}){
  const f=nodes.length;
  let u=new Set(nodes);
  let c=new Set;
  let r=0;

  while (u.size) {
    for(const m of u){m.depth=r;for (const{target} of m.sourceLinks) {
      c.add(target)
    }}if (++r>f) {
      throw new Error("circular link");
    }
    u=c;
    c=new Set;
  }
}function C({nodes}){
  const f=nodes.length;
  let u=new Set(nodes);
  let c=new Set;
  let r=0;

  while (u.size) {
    for(const m of u){m.height=r;for (const{source} of m.targetLinks) {
      c.add(source)
    }}if (++r>f) {
      throw new Error("circular link");
    }
    u=c;
    c=new Set;
  }
}function $({nodes}){
      const f=ct(nodes,r => r.depth)+1;

      const u=(i-t-h)/(f-1);
      const c=new Array(f);
      for(const r of nodes){
        const m=Math.max(0,Math.min(f-1,Math.floor(s.call(null,r,f))));
        r.layer=m;
        r.x0=t+m*u;
        r.x1=r.x0+h;

        if (c[m]) {
          c[m].push(r);
        } else {
          c[m]=[r];
        }
      }if (o) {
        for (const r of c) {
          r.sort(o);
        }
      }return c
    }function R(n){const f=pt(n,u => (a-e-(u.length-1)*p)/nt(u,it));for(const u of n){
    let c=e;for(const r of u){
        r.y0=c;
        r.y1=c+r.value*f;
        c=r.y1+p;
        for (const m of r.sourceLinks) {
          m.width=m.value*f
        }
      }c=(a-c+p)/(u.length+1);

    u.forEach((m, r) => {
      m.y0+=c*(r+1);
      m.y1+=c*(r+1);
    });

    A(u)
  }}function S(n){
      const f=$(n);

      p=Math.min(b,(a-e)/(ct(f,u => u.length)-1));

      R(f);
      for(let u=0;u<y;++u){
        const c=0.99/* .99 */ ** u;
        const r=Math.max(1-c,(u+1)/y);
        B(f,c,r);
        P(f,c,r);
      }
    }function P(n,f,u){for(let c=1,r=n.length;c<r;++c){
  const m=n[c];for(const w of m){
          let L=0;
          let F=0;
          for(const{source,value}of w.targetLinks){
            let H=value*(w.layer-source.layer);
            L+=z(source,w)*H;
            F+=H;
          }if (!(F>0)) {
            continue;
          }let G=(L/F-w.y0)*f;
          w.y0+=G;
          w.y1+=G;
          E(w);
        }

  if (o===void 0) {
    m.sort(Q);
  }

  O(m,u);
}}function B(n,f,u){for(let c=n.length,r=c-2;r>=0;--r){
  const m=n[r];for(const w of m){
          let L=0;
          let F=0;
          for(const{target,value}of w.sourceLinks){
            let H=value*(target.layer-w.layer);
            L+=I(w,target)*H;
            F+=H;
          }if (!(F>0)) {
            continue;
          }let G=(L/F-w.y0)*f;
          w.y0+=G;
          w.y1+=G;
          E(w);
        }

  if (o===void 0) {
    m.sort(Q);
  }

  O(m,u);
}}function O(n,f){
      const u=n.length>>1;
      const c=n[u];
      d(n,c.y0-p,u-1,f);
      D(n,c.y1+p,u+1,f);
      d(n,a,n.length-1,f);
      D(n,e,0,f);
    }function D(n,f,u,c){for(;u<n.length;++u){
  const r=n[u];
  const m=(f-r.y0)*c;

  if (m>0.000001/* 1e-6 */) {
    r.y0+=m;
    r.y1+=m;
  }

  f=r.y1+p;
}}function d(n,f,u,c){for(;u>=0;--u){
  const r=n[u];
  const m=(r.y1-f)*c;

  if (m>0.000001/* 1e-6 */) {
    r.y0-=m;
    r.y1-=m;
  }

  f=r.y0-p;
}}function E({sourceLinks,targetLinks}){if(l===void 0){for (const{source:{sourceLinks:u}} of targetLinks) {
      u.sort(ht);
    }for (const{target:{targetLinks:u}} of sourceLinks) {
      u.sort(ut)
    }}}function A(n){if (l===void 0) {
      for (const{sourceLinks,targetLinks} of n) {
        sourceLinks.sort(ht);
        targetLinks.sort(ut);
      }
    }}function z(n,f){let u=n.y0-(n.sourceLinks.length-1)*p/2;for(const{target,width}of n.sourceLinks){if (target===f) {
      break;
    }u+=width+p}for(const{source,width}of f.targetLinks){if (source===n) {
      break;
    }u-=width}return u}function I(n,f){let u=f.y0-(f.targetLinks.length-1)*p/2;for(const{source,width}of f.targetLinks){if (source===n) {
      break;
    }u+=width+p}for(const{target,width}of n.sourceLinks){if (target===f) {
      break;
    }u-=width}return u}return v
}
const st=Math.PI;
const rt=2*st;
const V=0.000001/* 1e-6 */;
const Rt=rt-V;
function ot(){
  this._x0 = null;
  this._y0 = null;
  this._x1 = null;
  this._y1 = null;
  this._="";
}function kt(){return new ot}ot.prototype=kt.prototype={constructor:ot,moveTo(t, e) {this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`},closePath() {
  if (this._x1!==null) {
    this._x1=this._x0;
    this._y1=this._y0;
    this._+="Z";
  }
},lineTo(t, e) {this._+=`L${this._x1=+t},${this._y1=+e}`},quadraticCurveTo(t, e, i, a) {this._+=`Q${+t},${+e},${this._x1=+i},${this._y1=+a}`},bezierCurveTo(t, e, i, a, h, b) {this._+=`C${+t},${+e},${+i},${+a},${this._x1=+h},${this._y1=+b}`},arcTo(t, e, i, a, h) {
  t=+t;
  e=+e;
  i=+i;
  a=+a;
  h=+h;
  const b=this._x1;
  const p=this._y1;
  const k=i-t;
  const s=a-e;
  const o=b-t;
  const l=p-e;
  const _=o*o+l*l;
  if (h<0) {
    throw new Error(`negative radius: ${h}`);
  }if (this._x1===null) {
    this._+=`M${this._x1=t},${this._y1=e}`;
  } else if (_>V) {
    if (!(Math.abs(l*k-s*o)>V)||!h) {
      this._+=`L${this._x1=t},${this._y1=e}`;
    } else {
      const x=i-b;
      const y=a-p;
      const v=k*k+s*s;
      const M=x*x+y*y;
      const T=Math.sqrt(v);
      const N=Math.sqrt(_);
      const C=h*Math.tan((st-Math.acos((v+_-M)/(2*T*N)))/2);
      const $=C/N;
      const R=C/T;

      if (Math.abs($-1)>V) {
        (this._ += `L${t+$*o},${e+$*l}`);
      }

      this._+=`A${h},${h},0,0,${+(l*x>o*y)},${this._x1=t+R*k},${this._y1=e+R*s}`;
    }
  }
},arc(t, e, i, a, h, b) {
  t=+t;
  e=+e;
  i=+i;
  b=!!b;
  const p=i*Math.cos(a);
  const k=i*Math.sin(a);
  const s=t+p;
  const o=e+k;
  const l=1^b;
  let _=b?a-h:h-a;
  if (i<0) {
    throw new Error(`negative radius: ${i}`);
  }

  if (this._x1===null) {
    this._+=`M${s},${o}`;
  } else if ((Math.abs(this._x1-s)>V || Math.abs(this._y1-o)>V)) {
    (this._ += `L${s},${o}`);
  }

  if (i) {
    _<0&&(_=_%rt+rt);
    _>Rt?this._+=`A${i},${i},0,1,${l},${t-p},${e-k}A${i},${i},0,1,${l},${this._x1=s},${this._y1=o}`:_>V&&(this._+=`A${i},${i},0,${+(_>=st)},${l},${this._x1=t+i*Math.cos(h)},${this._y1=e+i*Math.sin(h)}`);
  }
},rect(t, e, i, a) {this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${+i}v${+a}h${-i}Z`},toString() {return this._}};function dt(t){return () => t;}function Ft(t){return t[0]}function Vt(t){return t[1]}const Wt=Array.prototype.slice;function Ut(t){return t.source}function Gt(t){return t.target}function Yt(t){
  let e=Ut;
  let i=Gt;
  let a=Ft;
  let h=Vt;
  let b=null;
  function p(...args) {
    let k;
    const s=Wt.call(args);
    const o=e.apply(this,s);
    const l=i.apply(this,s);

    if (!b) {
      (b = k=kt());
    }

    t(b,+a.apply(this,(s[0]=o,s)),+h.apply(this,s),+a.apply(this,(s[0]=l,s)),+h.apply(this,s));

    if (k) {
      b=null;
      return `${k}`||null;
    }
  }
  p.source=function(k){return arguments.length?(e=k,p):e};
  p.target=function(k){return arguments.length?(i=k,p):i};
  p.x=function(k){return arguments.length?(a=typeof k=="function"?k:dt(+k),p):a};
  p.y=function(k){return arguments.length?(h=typeof k=="function"?k:dt(+k),p):h};
  p.context=function(k){return arguments.length?(b=k??null,p):b};
  return p;
}function Ht(t,e,i,a,h){
  t.moveTo(e,i);
  t.bezierCurveTo(e=(e+a)/2,i,e,h,a,h);
}function Xt(){return Yt(Ht)}function qt(t){return[t.source.x1,t.y0]}function Qt(t){return[t.target.x0,t.y1]}function Kt(){return Xt().source(qt).target(Qt)}var at = (() => {
  const t=a2((k, s, o, l) => {
    o=o||{};

    for (l=k.length; l--; o[k[l]]=s)
      {}

    return o
  },"o");

  const e=[1,9];
  const i=[1,10];
  const a=[1,5,10,12];

  const h={trace:a2(() => {},"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:a2(function(s,o,l,_,x,y,v){const M=y.length-1;switch(x){case 7:
    {
      const T=_.findOrCreateNode(y[M-4].trim().replaceAll('""','"'));
      const N=_.findOrCreateNode(y[M-2].trim().replaceAll('""','"'));
      const C=parseFloat(y[M].trim());
      _.addLink(T,N,C);break;
    }case 8:case 9:case 11:
    {
      this.$=y[M];break;
    }case 10:
    {
      this.$=y[M-1];break
    }}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:e,20:i},{1:[2,6],7:11,10:[1,12]},t(i,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(a,[2,8]),t(a,[2,9]),{19:[1,16]},t(a,[2,11]),{1:[2,1]},{1:[2,5]},t(i,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:e,20:i},{15:18,16:7,17:8,18:e,20:i},{18:[1,19]},t(i,[2,3]),{12:[1,20]},t(a,[2,10]),{15:21,16:7,17:8,18:e,20:i},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:a2(function(s,o){if (o.recoverable) {
    this.trace(s);
  } else {
    const l=new Error(s);
    l.hash=o;
    throw l;
  }},"parseError"),parse:a2(function(s){
    const o=this;
    let l=[0];
    let _=[];
    let x=[null];
    let y=[];
    const v=this.table;
    let M="";
    let T=0;
    let N=0;
    const C=2;
    const $=1;
    const R=y.slice.call(arguments,1);
    const S=Object.create(this.lexer);
    const P={yy:{}};
    for (const B in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy,B)) {
        (P.yy[B] = this.yy[B]);
      }
    }
    S.setInput(s,P.yy);
    P.yy.lexer=S;
    P.yy.parser=this;

    if (typeof S.yylloc === "undefined") {
      (S.yylloc = {});
    }

    let O=S.yylloc;y.push(O);const D=S.options&&S.options.ranges;

    if (typeof P.yy.parseError=="function") {
      this.parseError=P.yy.parseError;
    } else {
      this.parseError=Object.getPrototypeOf(this).parseError;
    }

    function d(L){
        l.length=l.length-2*L;
        x.length=x.length-L;
        y.length=y.length-L;
      }a2(d,"popStack");function E(){
      let L;
      L=_.pop()||S.lex()||$;

      if (typeof L!="number") {
        L instanceof Array&&(_=L,L=_.pop());
        L=o.symbols_[L]||L;
      }

      return L;
    }a2(E,"lex");
    let A;
    let z;
    let I;
    let n;
    const f={};
    let u;
    let c;
    let r;
    let m;

    while (true) {
      z=l[l.length-1];

      if (this.defaultActions[z]) {
        I=this.defaultActions[z];
      } else {
        (A===null||typeof A === "undefined")&&(A=E());
        I=v[z]&&v[z][A];
      }

      if (typeof I === "undefined"||!I.length||!I[0]) {
        let w="";m=[];for (u in v[z]) {
          if (this.terminals_[u]&&u>C) {
            m.push(`'${this.terminals_[u]}'`);
          }
        }

        if (S.showPosition) {
          w=`Parse error on line ${T+1}${`:
  `}${S.showPosition()}${`
  Expecting `}${m.join(", ")}, got '${this.terminals_[A]||A}'`;
        } else {
          w=`Parse error on line ${T+1}: Unexpected ${A==$?"end of input":`'${this.terminals_[A]||A}'`}`;
        }

        this.parseError(w,{text:S.match,token:this.terminals_[A]||A,line:S.yylineno,loc:O,expected:m});
      }

      if (I[0]instanceof Array&&I.length>1) {
        throw new Error(`Parse Error: multiple actions possible at state: ${z}, token: ${A}`);
      }switch(I[0]){case 1:
          {
            l.push(A);
            x.push(S.yytext);
            y.push(S.yylloc);
            l.push(I[1]);
            A=null;
            N=S.yyleng;
            M=S.yytext;
            T=S.yylineno;
            O=S.yylloc;
            break;
          }case 2:
          {
            c=this.productions_[I[1]][1];
            f.$=x[x.length-c];
            f._$={first_line:y[y.length-(c||1)].first_line,last_line:y[y.length-1].last_line,first_column:y[y.length-(c||1)].first_column,last_column:y[y.length-1].last_column};

            if (D) {
              (f._$.range = [y[y.length-(c||1)].range[0],y[y.length-1].range[1]]);
            }

            n=this.performAction.apply(f,[M,N,T,P.yy,I[1],x,y].concat(R));

            if (typeof n !== "undefined") {
              return n;
            }

            if (c) {
              l=l.slice(0,-1*c*2);
              x=x.slice(0,-1*c);
              y=y.slice(0,-1*c);
            }

            l.push(this.productions_[I[1]][0]);
            x.push(f.$);
            y.push(f._$);
            r=v[l[l.length-2]][l[l.length-1]];
            l.push(r);
            break;
          }case 3:
          {
            return true;
          }}
    }

    return true;
  },"parse")};

  const b = (() => {const k={EOF:1,parseError:a2(function(o,l){if (this.yy.parser) {
    this.yy.parser.parseError(o,l);
  } else {
    throw new Error(o)
  }},"parseError"),setInput:a2(function(s,o){
    this.yy=o||this.yy||{};
    this._input=s;
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
    const s=this._input[0];
    this.yytext+=s;
    this.yyleng++;
    this.offset++;
    this.match+=s;
    this.matched+=s;
    const o=s.match(/(?:\r\n?|\n).*/g);

    if (o) {
      this.yylineno++;
      this.yylloc.last_line++;
    } else {
      this.yylloc.last_column++;
    }

    if (this.options.ranges) {
      this.yylloc.range[1]++;
    }

    this._input=this._input.slice(1);
    return s;
  },"input"),unput:a2(function(s){
    const o=s.length;
    const l=s.split(/(?:\r\n?|\n)/g);
    this._input=s+this._input;
    this.yytext=this.yytext.substr(0,this.yytext.length-o);
    this.offset-=o;
    const _=this.match.split(/(?:\r\n?|\n)/g);
    this.match=this.match.substr(0,this.match.length-1);
    this.matched=this.matched.substr(0,this.matched.length-1);

    if (l.length-1) {
      (this.yylineno -= l.length-1);
    }

    const x=this.yylloc.range;
    this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===_.length?this.yylloc.first_column:0)+_[_.length-l.length].length-l[0].length:this.yylloc.first_column-o};

    if (this.options.ranges) {
      (this.yylloc.range = [x[0],x[0]+this.yyleng-o]);
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
  }return this},"reject"),less:a2(function(s){this.unput(this.match.slice(s))},"less"),pastInput:a2(function(){const s=this.matched.substr(0,this.matched.length-this.match.length);return (s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"");},"pastInput"),upcomingInput:a2(function(){
    let s=this.match;

    if (s.length<20) {
      (s += this._input.substr(0,20-s.length));
    }

    return (s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"");
  },"upcomingInput"),showPosition:a2(function(){
    const s=this.pastInput();
    const o=new Array(s.length+1).join("-");
    return `${s+this.upcomingInput()+`
`+o}^`;
  },"showPosition"),test_match:a2(function(s,o){
    let l;
    let _;
    let x;

    if (this.options.backtrack_lexer) {
      x={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};
      this.options.ranges&&(x.yylloc.range=this.yylloc.range.slice(0));
    }

    _=s[0].match(/(?:\r\n?|\n).*/g);

    if (_) {
      (this.yylineno += _.length);
    }

    this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:_?_[_.length-1].length-_[_.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length};
    this.yytext+=s[0];
    this.match+=s[0];
    this.matches=s;
    this.yyleng=this.yytext.length;

    if (this.options.ranges) {
      (this.yylloc.range = [this.offset,this.offset+=this.yyleng]);
    }

    this._more=false;
    this._backtrack=false;
    this._input=this._input.slice(s[0].length);
    this.matched+=s[0];
    l=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]);

    if (this.done&&this._input) {
      (this.done = false);
    }

    if (l) {
      return l;
    }

    if(this._backtrack){for (const y in x) {
      this[y]=x[y];
    }return false;}return false;
  },"test_match"),next:a2(function(){
    if (this.done) {
      return this.EOF;
    }

    if (!this._input) {
      (this.done = true);
    }

    let s;
    let o;
    let l;
    let _;

    if (!this._more) {
      this.yytext="";
      this.match="";
    }

    for (var x=this._currentRules(),y=0; y<x.length; y++) {
        l=this._input.match(this.rules[x[y]]);

        if (l&&(!o||l[0].length>o[0].length)) {
          o=l;
          _=y;

          if (this.options.backtrack_lexer) {
            s=this.test_match(l,x[y]);

            if (s!==false) {
              return s;
            }

            if (this._backtrack)
              {o=false;continue} else {
              return false;
            }
          } else if (!this.options.flex) {
            break
          }
        }
      }

    if (o) {
      s=this.test_match(o,x[_]);
      return s!==false?s:false;
    }

    if (this._input==="") {
      return this.EOF;
    }

    return this.parseError(`Lexical error on line ${this.yylineno+1}${`. Unrecognized text.
    `}${this.showPosition()}`,{text:"",token:null,line:this.yylineno});
  },"next"),lex:a2(function(){const o=this.next();return o||this.lex()},"lex"),begin:a2(function(o){this.conditionStack.push(o)},"begin"),popState:a2(function(){const o=this.conditionStack.length-1;return o>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a2(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a2(function(o){
    o=this.conditionStack.length-1-Math.abs(o||0);
    return o>=0?this.conditionStack[o]:"INITIAL";
  },"topState"),pushState:a2(function(o){this.begin(o)},"pushState"),stateStackSize:a2(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":true},performAction:a2(function(o,l,_,x){switch(_){case 0:
    {
      this.pushState("csv");
      return 4;
    }case 1:
    {
      this.pushState("csv");
      return 4;
    }case 2:
    {
      return 10;
    }case 3:
    {
      return 5;
    }case 4:
    {
      return 12;
    }case 5:
    {
      this.pushState("escaped_text");
      return 18;
    }case 6:
    {
      return 20;
    }case 7:
    {
      this.popState("escaped_text");
      return 18;
    }case 8:
    {
      return 19
    }}},"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:sankey\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[2,3,4,5,6,7,8],inclusive:false},escaped_text:{rules:[7,8],inclusive:false},INITIAL:{rules:[0,1,2,3,4,5,6,7,8],inclusive:true}}};return k})();

  h.lexer=b;function p(){this.yy={}}
  a2(p,"Parser");
  p.prototype=h;
  h.Parser=p;
  return new p;
})();at.parser=at;
const K=at;
let J=[];
let tt=[];
let Z=new Map;

const Zt=a2(()=>{
  J=[];
  tt=[];
  Z=new Map;
  at_1();
},"clear");

let W;

W=class{constructor(e,i,a=0){
  this.source=e;
  this.target=i;
  this.value=a;
}};

a2(W,"SankeyLink");
const Jt = W;

const te=a2((t,e,i)=>{J.push(new Jt(t,e,i))},"addLink");
let U;
U=class{constructor(e){this.ID=e}};
a2(U,"SankeyNode");
const ee = U;

const ne=a2(t=>{
  t=ag.sanitizeText(t,a7());let e=Z.get(t);

  if (e===void 0) {
    e=new ee(t);
    Z.set(t,e);
    tt.push(e);
  }

  return e;
},"findOrCreateNode");

const ie=a2(() => tt,"getNodes");

const se=a2(() => J,"getLinks");

const re=a2(() => ({
  nodes:tt.map(t => ({
    id:t.ID
  })),

  links:J.map(t => ({
    source:t.source.ID,
    target:t.target.ID,
    value:t.value
  }))
}),"getGraph");

const oe={nodesMap:Z,getConfig:a2(() => a7().sankey,"getConfig"),getNodes:ie,getLinks:se,getGraph:re,addLink:te,findOrCreateNode:ne,getAccTitle:a5,setAccTitle:a6,getAccDescription:a4,setAccDescription:a3,getDiagramTitle:ao,setDiagramTitle:an,clear:Zt};

let j;

j=class{static next(e){return new j(e+ ++j.count)}constructor(e){
  this.id=e;
  this.href=`#${e}`;
}toString(){return `url(${this.href})`;}};

a2(j,"Uid");
j.count=0;
const gt = j;

const ae={left:Ct,right:Ot,center:Dt,justify:mt};

const le=a2((t, e, i, a) => {
  const {securityLevel,sankey}=a7();
  const p=au.sankey;
  let k;

  if (securityLevel==="sandbox") {
    (k = a8(`#i${e}`));
  }

  const s=securityLevel==="sandbox"?a8(k.nodes()[0].contentDocument.body):a8("body");
  const o=securityLevel==="sandbox"?s.select(`[id="${e}"]`):a8(`[id="${e}"]`);
  const l=sankey?.width??p.width;
  const _=sankey?.height??p.width;
  const x=sankey?.useMaxWidth??p.useMaxWidth;
  const y=sankey?.nodeAlignment??p.nodeAlignment;
  const v=sankey?.prefix??p.prefix;
  const M=sankey?.suffix??p.suffix;
  const T=sankey?.showValues??p.showValues;
  const N=a.db.getGraph();
  const C=ae[y];
  Bt().nodeId(d => d.id).nodeWidth(10).nodePadding(10+(T?15:0)).nodeAlign(C).extent([[0,0],[l,_]])(N);const S=o(It);o.append("g").attr("class","nodes").selectAll(".node").data(N.nodes).join("g").attr("class","node").attr("id",d => (d.uid=gt.next("node-")).id).attr("transform",d => `translate(${d.x0},${d.y0})`).attr("x",d => d.x0).attr("y",d => d.y0).append("rect").attr("height",d => d.y1-d.y0).attr("width",d => d.x1-d.x0).attr("fill",d => S(d.id));const P=a2(({id,value}) => T?`${id}
  ${v}${Math.round(value*100)/100}${M}`:id,"getText");o.append("g").attr("class","node-labels").attr("font-size",14).selectAll("text").data(N.nodes).join("text").attr("x",d => d.x0<l/2?d.x1+6:d.x0-6).attr("y",d => (d.y1+d.y0)/2).attr("dy",`${T?"0":"0.35"}em`).attr("text-anchor",d => d.x0<l/2?"start":"end").text(P);
  const B=o.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",0.5/* .5 */).selectAll(".link").data(N.links).join("g").attr("class","link").style("mix-blend-mode","multiply");
  const O=sankey?.linkColor??"gradient";
  if(O==="gradient"){
    const d=B.append("linearGradient").attr("id",E => (E.uid=gt.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",E => E.source.x1).attr("x2",E => E.target.x0);

    d.append("stop").attr("offset","0%").attr("stop-color",E => S(E.source.id));

    d.append("stop").attr("offset","100%").attr("stop-color",E => S(E.target.id));
  }let D;switch(O){case "gradient":
      {
        D=a2(d => d.uid,"coloring");break;
      }case "source":
      {
        D=a2(d => S(d.source.id),"coloring");break;
      }case "target":
      {
        D=a2(d => S(d.target.id),"coloring");break;
      }default:
      {
        D=O
      }}

  B.append("path").attr("d",Kt()).attr("stroke",D).attr("stroke-width",d => Math.max(1,d.width));

  b4(void 0,o,0,x);
},"draw");

const ce={draw:le};

const ue=a2(t => t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),"prepareTextForParsing");

const he=a2(t => `.label {
      font-family: ${t.fontFamily};
    }`,"getStyles");

const fe=he;
const ye=K.parse.bind(K);
K.parse=t => ye(ue(t));

export const diagram = {styles:fe,parser:K,db:oe,renderer:ce};
//# sourceMappingURL=sankeyDiagram-TZEHDZUN-n7V5lNWP.js.map

export{diagram as diagram};
//# sourceMappingURL=sankeyDiagram-TZEHDZUN-n7V5lNWP.js.map
