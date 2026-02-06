import{a2,aA,aB,aE,aa,a9,ce,a8,a6,a5,an,ao,a4,a3,aC,cf,at as at_1}from"./index-CgwAo6pj.js";import{s}from"./chunk-QN33PNHL-CAvc2xVm.js";import{p}from"./chunk-4BX2VUAB-nk385TCt.js";import{p as p_1}from"./treemap-KMMF4GRG-CK1q9nlx.js";import{b}from"./defaultLocale-C4B-KCzX.js";import{o}from"./ordinal-Cboi1Yqb.js";import"./_baseUniq-DqA0xXry.js";import"./_basePickBy-D-jIhBTu.js";import"./clone-M7Y9qM5V.js";import"./init-Gi6I4Gst.js";function Le(t){
  let a=0;
  const l=t.children;
  let n=l&&l.length;
  if (!n) {
    a=1;
  } else {
    while (--n>=0) {
      a+=l[n].value;
    }
  }t.value=a
}function $e(){return this.eachAfter(Le)}function Ae(t,a){let l=-1;for (const n of this) {
  t.call(a,n,++l,this);
}return this}function Fe(t,a){
  let o;
  let s;
  let d=-1;
  for (let l=this, n=[l]; l=n.pop(); ) {
    t.call(a,l,++d,this);

    if (o=l.children) {
      for (s=o.length-1; s>=0; --s) {
        n.push(o[s]);
      }
    }
  }return this
}function ke(t,a){
  const o=[];
  let s;
  let d;
  let h;
  let m=-1;
  for (var l=this, n=[l]; l=n.pop(); ) {
    o.push(l);

    if (s=l.children) {
      d=0;

      for (h=s.length; d<h; ++d) {
        n.push(s[d]);
      }
    }
  }

  while (l=o.pop()) {
      t.call(a,l,++m,this);
    }

  return this
}function Ne(t,a){let l=-1;for (const n of this) {
  if (t.call(a,n,++l,this)) {
    return n
  }
}}function Me(t){return this.eachAfter(a => {
  let l=+t(a.data)||0;
  const n=a.children;
  for (let o=n&&n.length; --o>=0; ) {
    l+=n[o].value;
  }a.value=l
});}function _e(t){return this.eachBefore(a => {
  if (a.children) {
    a.children.sort(t);
  }
});}function ze(t){
  const n=[a];
  for (var a=this, l=Ve(a,t); a!==l; ) {
    a=a.parent;
    n.push(a);
  }
  const o=n.length;

  while (t!==l) {
    n.splice(o,0,t);
    t=t.parent;
  }

  return n
}function Ve(t,a){
  if (t===a) {
    return t;
  }
  const l=t.ancestors();
  const n=a.ancestors();
  let o=null;
  t=l.pop();

  for (a=n.pop(); t===a; ) {
    o=t;
    t=l.pop();
    a=n.pop();
  }

  return o
}function De(){
  const a=[t];
  for (var t=this; t=t.parent; ) {
    a.push(t);
  }return a
}function Be(){return Array.from(this)}function Pe(){
  const t=[];
  this.eachBefore(a => {
    if (!a.children) {
      t.push(a);
    }
  });
  return t;
}function Ee(){
  const t=this;
  const a=[];
  t.each(l => {
    if (l!==t) {
      a.push({source:l.parent,target:l});
    }
  });
  return a;
}function*Re(){
  let t=this;
  let a;
  let l=[t];
  let n;
  let o;
  let s;
  do {
    a=l.reverse();

    for (l=[]; t=a.pop(); ) {
      yield t;

      if (n=t.children) {
        o=0;

        for (s=n.length; o<s; ++o) {
          l.push(n[o]);
        }
      }
    }
  } while (l.length);
}function Q(t,a){
  if (t instanceof Map) {
    t=[void 0,t];
    a===void 0&&(a=Ie);
  } else if (a===void 0) {
    (a = He);
  }

  const l=new U(t);
  let s;
  let d;
  let h;
  let m;
  for (let n, o=[l]; n=o.pop(); ) {
    if ((d=a(n.data))&&(m=(d=Array.from(d)).length)) {
      n.children=d;

      for (h=m-1; h>=0; --h) {
        o.push(s=d[h]=new U(d[h]));
        s.parent=n;
        s.depth=n.depth+1;
      }
    }
  }return l.eachBefore(Ge)
}function We(){return Q(this).eachBefore(Oe)}function He(t){return t.children}function Ie(t){return Array.isArray(t)?t[1]:null}function Oe(t){
  if (t.data.value!==void 0) {
    (t.value = t.data.value);
  }

  t.data=t.data.data;
}function Ge(t){let a=0;do {
  t.height=a;
} while ((t=t.parent)&&t.height<++a);}function U(t){
  this.data=t;
  this.depth = 0;
  this.height = 0;
  this.parent=null;
}U.prototype=Q.prototype={constructor:U,count:$e,each:Ae,eachAfter:ke,eachBefore:Fe,find:Ne,sum:Me,sort:_e,path:ze,ancestors:De,descendants:Be,leaves:Pe,links:Ee,copy:We,[Symbol.iterator]:Re};function qe(t){if (typeof t!="function") {
  throw new Error;
}return t}function G(){return 0}function q(t){return () => t;}function Xe(t){
  t.x0=Math.round(t.x0);
  t.y0=Math.round(t.y0);
  t.x1=Math.round(t.x1);
  t.y1=Math.round(t.y1);
}function je(t,a,l,n,o){
  const s=t.children;
  let d;
  const c=t.value&&(n-a)/t.value;
  for (let h=-1, m=s.length; ++h<m; ) {
    d=s[h];
    d.y0=l;
    d.y1=o;
    d.x0=a;
    d.x1=a+=d.value*c;
  }
}function Ye(t,a,l,n,o){
  const s=t.children;
  let d;
  const c=t.value&&(o-l)/t.value;
  for (let h=-1, m=s.length; ++h<m; ) {
    d=s[h];
    d.x0=a;
    d.x1=n;
    d.y0=l;
    d.y1=l+=d.value*c;
  }
}const Ue=(1+Math.sqrt(5))/2;function Ze(t,a,l,n,o,s){
  const d=[];
  const h=a.children;
  let m;
  let c;
  let b=0;
  let x;
  let S;
  let v=a.value;
  let p;
  let g;
  let N;
  let k;
  let V;
  let R;
  let M;
  for(let u=0, r=h.length;u<r;){
    x=o-l;
    S=s-n;
    do {
      p=h[b++].value;
    } while (!p&&b<r);
    g = p;
    N = p;
    R=Math.max(S/x,x/S)/(v*t);
    M=p*p*R;

    for (V=Math.max(N/M,M/g); b<r; ++b) {
      p+=c=h[b].value;

      if (c<g) {
        (g = c);
      }

      if (c>N) {
        (N = c);
      }

      M=p*p*R;
      k=Math.max(N/M,M/g);

      if (k>V)
        {p-=c;break}

      V=k
    }

    d.push(m={value:p,dice:x<S,children:h.slice(u,b)});

    if (m.dice) {
      je(m,l,n,o,v?n+=S*p/v:s);
    } else {
      Ye(m,l,n,v?l+=x*p/v:o,s);
    }

    v-=p;
    u=b;
  }return d
}const Je=(function t(a){
  class l {
    constructor(n, o, s, d, h) {Ze(a,n,o,s,d,h)}
    static ratio(n) {return t((n=+n)>1?n:1)}
  }

  return l;
})(Ue);function Ke(...args) {
  let t=Je;
  let a=false;
  let l=1;
  let n=1;
  let o=[0];
  let s=G;
  let d=G;
  let h=G;
  let m=G;
  let c=G;

  class u {
    constructor(r) {
      r.x0 = 0;
      r.y0 = 0;
      r.x1=l;
      r.y1=n;
      r.eachBefore(b);
      o=[0];

      if (a) {
        r.eachBefore(Xe);
      }

      return r;
    }

    static round(r) {return args.length?(a=!!r,u):a;}
    static size(r) {return args.length?(l=+r[0],n=+r[1],u):[l,n];}
    static tile(r) {return args.length?(t=qe(r),u):t;}
    static padding(r) {return args.length?u.paddingInner(r).paddingOuter(r):u.paddingInner();}
    static paddingInner(r) {return args.length?(s=typeof r=="function"?r:q(+r),u):s;}
    static paddingOuter(r) {return args.length?u.paddingTop(r).paddingRight(r).paddingBottom(r).paddingLeft(r):u.paddingTop();}
    static paddingTop(r) {return args.length?(d=typeof r=="function"?r:q(+r),u):d;}
    static paddingRight(r) {return args.length?(h=typeof r=="function"?r:q(+r),u):h;}
    static paddingBottom(r) {return args.length?(m=typeof r=="function"?r:q(+r),u):m;}
    static paddingLeft(r) {return args.length?(c=typeof r=="function"?r:q(+r),u):c;}
  }

  function b(r){
    let x=o[r.depth];
    let S=r.x0+x;
    let v=r.y0+x;
    let p=r.x1-x;
    let g=r.y1-x;

    if (p<S) {
      (S = p=(S+p)/2);
    }

    if (g<v) {
      (v = g=(v+g)/2);
    }

    r.x0=S;
    r.y0=v;
    r.x1=p;
    r.y1=g;

    if (r.children) {
      x=o[r.depth+1]=s(r)/2;
      S+=c(r)-x;
      v+=d(r)-x;
      p-=h(r)-x;
      g-=m(r)-x;
      p<S&&(S=p=(S+p)/2);
      g<v&&(v=g=(v+g)/2);
      t(r,S,v,p,g);
    }
  }
  return u;
}
let E;

E=class{constructor(){
  this.nodes=[];
  this.levels=new Map;
  this.outerNodes=[];
  this.classes=new Map;
  this.setAccTitle=a6;
  this.getAccTitle=a5;
  this.setDiagramTitle=an;
  this.getDiagramTitle=ao;
  this.getAccDescription=a4;
  this.setAccDescription=a3;
}getNodes(){return this.nodes}getConfig(){
  const a=aC;
  const l=aB();
  return aA({...a.treemap,...(l.treemap ?? {})});
}addNode(a,l){
  this.nodes.push(a);
  this.levels.set(a,l);

  if (l===0) {
    this.outerNodes.push(a);
    this.root??=a;
  }
}getRoot(){return{name:"",children:this.outerNodes}}addClass(a,l){
  const n=this.classes.get(a)??{id:a,styles:[],textStyles:[]};
  const o=l.replace(/\\,/g,"§§§").replace(/,/g,";").replace(/§§§/g,",").split(";");

  if (o) {
    o.forEach(s=>{
      if (cf(s)) {
        if (n?.textStyles) {
          n.textStyles.push(s);
        } else {
          n.textStyles=[s];
        }
      }

      if (n?.styles) {
        n.styles.push(s);
      } else {
        n.styles=[s];
      }
    });
  }

  this.classes.set(a,n);
}getClasses(){return this.classes}getStylesForClass(a){return this.classes.get(a)?.styles??[]}clear(){
  at_1();
  this.nodes=[];
  this.levels=new Map;
  this.outerNodes=[];
  this.classes=new Map;
  this.root=void 0;
}};

a2(E,"TreeMapDB");
const ne = E;

function le(t){
  if (!t.length) {
    return[];
  }
  const a=[];
  const l=[];

  t.forEach(n=>{
    const o={name:n.name,children:n.type==="Leaf"?void 0:[]};
    o.classSelector=n?.classSelector;

    if (n?.cssCompiledStyles) {
      (o.cssCompiledStyles = [n.cssCompiledStyles]);
    }

    if (n.type==="Leaf"&&n.value!==void 0) {
      (o.value = n.value);
    }

    while (l.length>0&&l[l.length-1].level>=n.level) {
      l.pop();
    }

    if (l.length===0) {
      a.push(o);
    } else
      {
        const s=l[l.length-1].node;

        if (s.children) {
          s.children.push(o);
        } else {
          s.children=[o];
        }
      }

    if (n.type!=="Leaf") {
      l.push({node:o,level:n.level});
    }
  });

  return a;
}a2(le,"buildHierarchy");

const Qe=a2((t,a)=>{
  p(t,a);const l=[];for (const s of t.TreemapRows??[]) {
  if (s.$type==="ClassDefStatement") {
    a.addClass(s.className??"",s.styleText??"");
  }
}for(const s of t.TreemapRows??[]){
    const d=s.item;if (!d) {
      continue;
    }
    const h=s.indent?parseInt(s.indent):0;
    const m=et(d);
    const c=d.classSelector?a.getStylesForClass(d.classSelector):[];
    const u=c.length>0?c.join(";"):void 0;
    const b={level:h,name:m,type:d.$type,value:d.value,classSelector:d.classSelector,cssCompiledStyles:u};
    l.push(b)
  }
  const n=le(l);

  const o=a2((s,d)=>{for (const h of s) {
    a.addNode(h,d);

    if (h.children&&h.children.length>0) {
      o(h.children,d+1);
    }
  }},"addNodesRecursively");

  o(n,0)
},"populate");

var et=a2(t => t.name?String(t.name):"","getItemName");

const re={parser:{yy:void 0},parse:a2(async t=>{try{const l=await p_1("treemap",t);a9.debug("Treemap AST:",l);const n=re.parser?.yy;if (!(n instanceof ne)) {
  throw new Error("parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
}Qe(l,n)}catch(a){
  a9.error("Error parsing treemap:",a);
  throw a;
}},"parse")};

const tt=10;
const P=10;
const X=25;

var at=a2((t,a,l,n)=>{
  const o=n.db;
  const s=o.getConfig();
  const d=s.padding??tt;
  const h=o.getDiagramTitle();
  const m=o.getRoot();
  const {themeVariables}=aB();
  if (!m) {
    return;
  }
  const u=h?30:0;
  const b=aE(a);
  const r=s.nodeWidth?s.nodeWidth*P:960;
  const x=s.nodeHeight?s.nodeHeight*P:500;
  const S=r;
  const v=x+u;
  b.attr("viewBox",`0 0 ${S} ${v}`);
  aa(b,v,S,s.useMaxWidth);
  let p;try{const e=s.valueFormat||",";if (e==="$0,0") {
      p=a2(i => `$${b(",")(i)}`,"valueFormat");
    } else if(e.startsWith("$")&&e.includes(",")){
      const i=/\.\d+/.exec(e);
      const f=i?i[0]:"";
      p=a2(C => `$${b(`,${f}`)(C)}`,"valueFormat")
    }else if (e.startsWith("$")) {const i=e.substring(1);p=a2(f => `$${b(i||"")(f)}`,"valueFormat")} else {
      p=b(e)
    }}catch(e){
      a9.error("Error creating format function:",e);
      p=b(",");
    }
  const g=o().range(["transparent",themeVariables.cScale0,themeVariables.cScale1,themeVariables.cScale2,themeVariables.cScale3,themeVariables.cScale4,themeVariables.cScale5,themeVariables.cScale6,themeVariables.cScale7,themeVariables.cScale8,themeVariables.cScale9,themeVariables.cScale10,themeVariables.cScale11]);
  const N=o().range(["transparent",themeVariables.cScalePeer0,themeVariables.cScalePeer1,themeVariables.cScalePeer2,themeVariables.cScalePeer3,themeVariables.cScalePeer4,themeVariables.cScalePeer5,themeVariables.cScalePeer6,themeVariables.cScalePeer7,themeVariables.cScalePeer8,themeVariables.cScalePeer9,themeVariables.cScalePeer10,themeVariables.cScalePeer11]);
  const k=o().range([themeVariables.cScaleLabel0,themeVariables.cScaleLabel1,themeVariables.cScaleLabel2,themeVariables.cScaleLabel3,themeVariables.cScaleLabel4,themeVariables.cScaleLabel5,themeVariables.cScaleLabel6,themeVariables.cScaleLabel7,themeVariables.cScaleLabel8,themeVariables.cScaleLabel9,themeVariables.cScaleLabel10,themeVariables.cScaleLabel11]);

  if (h) {
    b.append("text").attr("x",S/2).attr("y",u/2).attr("class","treemapTitle").attr("text-anchor","middle").attr("dominant-baseline","middle").text(h);
  }

  const V=b.append("g").attr("transform",`translate(0, ${u})`).attr("class","treemapContainer");

  const R=Q(m).sum(e => e.value??0).sort((e, i) => (i.value??0)-(e.value??0));

  const ee=Ke().size([r,x]).paddingTop(e => e.children&&e.children.length>0?X+P:0).paddingInner(d).paddingLeft(e => e.children&&e.children.length>0?P:0).paddingRight(e => e.children&&e.children.length>0?P:0).paddingBottom(e => e.children&&e.children.length>0?P:0).round(true)(R);

  const se=ee.descendants().filter(e => e.children&&e.children.length>0);

  const W=V.selectAll(".treemapSection").data(se).enter().append("g").attr("class","treemapSection").attr("transform",e => `translate(${e.x0},${e.y0})`);

  W.append("rect").attr("width",e => e.x1-e.x0).attr("height",X).attr("class","treemapSectionHeader").attr("fill","none").attr("fill-opacity",0.6/* .6 */).attr("stroke-width",0.6/* .6 */).attr("style",e => e.depth===0?"display: none;":"");

  W.append("clipPath").attr("id",(e, i) => `clip-section-${a}-${i}`).append("rect").attr("width",e => Math.max(0,e.x1-e.x0-12)).attr("height",X);

  W.append("rect").attr("width",e => e.x1-e.x0).attr("height",e => e.y1-e.y0).attr("class",(e, i) => `treemapSection section${i}`).attr("fill",e => g(e.data.name)).attr("fill-opacity",0.6/* .6 */).attr("stroke",e => N(e.data.name)).attr("stroke-width",2).attr("stroke-opacity",0.4/* .4 */).attr("style",e=>{if (e.depth===0) {
    return"display: none;";
  }const i=ce({cssCompiledStyles:e.data.cssCompiledStyles});return `${i.nodeStyles};${i.borderStyles.join(";")}`;});

  W.append("text").attr("class","treemapSectionLabel").attr("x",6).attr("y",X/2).attr("dominant-baseline","middle").text(e => e.depth===0?"":e.data.name).attr("font-weight","bold").attr("style",e=>{
    if (e.depth===0) {
      return"display: none;";
    }
    const i=`dominant-baseline: middle; font-size: 12px; fill:${k(e.data.name)}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`;
    const f=ce({cssCompiledStyles:e.data.cssCompiledStyles});
    return i+f.labelStyles.replace("color:","fill:")
  }).each(function(e){
    if (e.depth===0) {
      return;
    }
    const i=a8(this);
    const f=e.data.name;
    i.text(f);
    const C=e.x1-e.x0;
    const L=6;
    let $;

    if (s.showValues!==false&&e.value) {
      $=C-10-30-10-L;
    } else {
      $=C-L-6;
    }

    const A=Math.max(15,$);
    const y=i.node();
    if(y.getComputedTextLength()>A){
      let T=f;

      while (T.length>0) {
        T=f.substring(0,T.length-1);

        if (T.length===0) {
          i.text("...");

          if (y.getComputedTextLength()>A) {
            i.text("");
          }

          break
        }

        i.text(`${T}...`);

        if (y.getComputedTextLength()<=A) {
          break
        }
      }
    }
  });

  if (s.showValues!==false) {
    W.append("text").attr("class","treemapSectionValue").attr("x",e => e.x1-e.x0-10).attr("y",X/2).attr("text-anchor","end").attr("dominant-baseline","middle").text(e => e.value?p(e.value):"").attr("font-style","italic").attr("style",e=>{
      if (e.depth===0) {
        return"display: none;";
      }
      const i=`text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:${k(e.data.name)}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`;
      const f=ce({cssCompiledStyles:e.data.cssCompiledStyles});
      return i+f.labelStyles.replace("color:","fill:")
    });
  }

  const ie=ee.leaves();

  const j=V.selectAll(".treemapLeafGroup").data(ie).enter().append("g").attr("class",(e, i) => `treemapNode treemapLeafGroup leaf${i}${e.data.classSelector?` ${e.data.classSelector}`:""}x`).attr("transform",e => `translate(${e.x0},${e.y0})`);

  j.append("rect").attr("width",e => e.x1-e.x0).attr("height",e => e.y1-e.y0).attr("class","treemapLeaf").attr("fill",e => e.parent?g(e.parent.data.name):g(e.data.name)).attr("style",e => ce({cssCompiledStyles:e.data.cssCompiledStyles}).nodeStyles).attr("fill-opacity",0.3/* .3 */).attr("stroke",e => e.parent?g(e.parent.data.name):g(e.data.name)).attr("stroke-width",3);

  j.append("clipPath").attr("id",(e, i) => `clip-${a}-${i}`).append("rect").attr("width",e => Math.max(0,e.x1-e.x0-4)).attr("height",e => Math.max(0,e.y1-e.y0-4));

  j.append("text").attr("class","treemapLabel").attr("x",e => (e.x1-e.x0)/2).attr("y",e => (e.y1-e.y0)/2).attr("style",e=>{
    const i=`text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:${k(e.data.name)};`;
    const f=ce({cssCompiledStyles:e.data.cssCompiledStyles});
    return i+f.labelStyles.replace("color:","fill:")
  }).attr("clip-path",(e, i) => `url(#clip-${a}-${i})`).text(e => e.data.name).each(function(e){
    const i=a8(this);
    const f=e.x1-e.x0;
    const C=e.y1-e.y0;
    const L=i.node();
    const $=4;
    const D=f-2*$;
    const A=C-2*$;
    if(D<10||A<10){i.style("display","none");return}let y=parseInt(i.style("font-size"),10);
    const _=8;
    const F=28;
    const T=0.6/* .6 */;
    const z=6;
    const H=2;

    while (L.getComputedTextLength()>D&&y>_) {
      y--;
      i.style("font-size",`${y}px`);
    }

    let I=Math.max(z,Math.min(F,Math.round(y*T)));
    let Z=y+H+I;

    while (Z>A&&y>_&&(y--,I=Math.max(z,Math.min(F,Math.round(y*T))),!(I<z&&y===_))) {
      i.style("font-size",`${y}px`);
      Z=y+H+I;
    }

    i.style("font-size",`${y}px`);

    if ((L.getComputedTextLength()>D||y<_ || A<y)) {
      i.style("display","none");
    }
  });

  if (s.showValues!==false) {
    j.append("text").attr("class","treemapValue").attr("x",i => (i.x1-i.x0)/2).attr("y",i => (i.y1-i.y0)/2).attr("style",i=>{
      const f=`text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:${k(i.data.name)};`;
      const C=ce({cssCompiledStyles:i.data.cssCompiledStyles});
      return f+C.labelStyles.replace("color:","fill:")
    }).attr("clip-path",(i, f) => `url(#clip-${a}-${f})`).text(i => i.value?p(i.value):"").each(function(i){
      const f=a8(this);
      const C=this.parentNode;
      if(!C){f.style("display","none");return}const L=a8(C).select(".treemapLabel");if(L.empty()||L.style("display")==="none"){f.style("display","none");return}
      const $=parseFloat(L.style("font-size"));
      const D=28;
      const A=0.6/* .6 */;
      const y=6;
      const _=2;
      const F=Math.max(y,Math.min(D,Math.round($*A)));
      f.style("font-size",`${F}px`);const z=(i.y1-i.y0)/2+$/2+_;f.attr("y",z);
      const H=i.x1-i.x0;
      const ce=i.y1-i.y0-4;
      const de=H-8;

      if (f.node().getComputedTextLength()>de||z+F>ce||F<y) {
        f.style("display","none");
      } else {
        f.style("display",null);
      }
    });
  }

  const oe=s.diagramPadding??8;s(b,oe,"flowchart",s?.useMaxWidth||false)
},"draw");

const nt=a2((t, a) => a.db.getClasses(),"getClasses");
const lt={draw:at,getClasses:nt};
const rt={sectionStrokeColor:"black",sectionStrokeWidth:"1",sectionFillColor:"#efefef",leafStrokeColor:"black",leafStrokeWidth:"1",leafFillColor:"#efefef",labelColor:"black",labelFontSize:"12px",valueFontSize:"10px",valueColor:"black",titleColor:"black",titleFontSize:"14px"};

const st=a2(({treemap:t}={})=>{const a=aA(rt,t);return`
  .treemapNode.section {
    stroke: ${a.sectionStrokeColor};
    stroke-width: ${a.sectionStrokeWidth};
    fill: ${a.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${a.leafStrokeColor};
    stroke-width: ${a.leafStrokeWidth};
    fill: ${a.leafFillColor};
  }
  .treemapLabel {
    fill: ${a.labelColor};
    font-size: ${a.labelFontSize};
  }
  .treemapValue {
    fill: ${a.valueColor};
    font-size: ${a.valueFontSize};
  }
  .treemapTitle {
    fill: ${a.titleColor};
    font-size: ${a.titleFontSize};
  }
  `},"getStyles");

const it=st;

export const diagram = {parser:re,get db() {return new ne},renderer:lt,styles:it};
//# sourceMappingURL=diagram-PSM6KHXK-B0QzYsK2.js.map

export{diagram as diagram};
//# sourceMappingURL=diagram-PSM6KHXK-B0QzYsK2.js.map
