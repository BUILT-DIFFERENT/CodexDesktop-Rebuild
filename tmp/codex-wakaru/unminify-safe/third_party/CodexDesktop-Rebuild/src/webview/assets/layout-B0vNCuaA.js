import{G as G_1}from"./graph-Cgx_UOHF.js";import{b,p,c1 as q_1,G_1 as G_1_1,e,l as l_1,o,s,c,u,d,i,d as d_1,v,r}from"./_baseUniq-DqA0xXry.js";import{d as d_2,b as b_1,a,c as c_1,d as d_3,t,i as i_1,e as e_1,h,G_1 as G_1_2,l as l_2,i as i_2}from"./_basePickBy-D-jIhBTu.js";import{cO,cP,cQ,c2,cR,c6,c5,cS,c1,bl,c8,bn as bn_1,cT}from"./index-CgwAo6pj.js";function He(e){return cO(cP(e,void 0,d_2),`${e}`);}
const Je=1;
const Qe=4;
function Ze(e){return b(e,Je|Qe);}function Ke(e,n){return e==null?e:cQ(e,p(n),c2);}function en(e,n){return e&&q_1(e,p(n));}function nn(e,n){return e>n}function S(e,n){
  const r={};
  n=G_1_1(n);
  q_1(e,(t, a, i) => {cR(r,a,n(t,a,i))});
  return r;
}function y(e){return e&&e.length?b_1(e,c6,nn):void 0;}function U(e,n){return e&&e.length?b_1(e,G_1_1(n),a):void 0;}function rn(e,n){let r=e.length;for (e.sort(n); r--; ) {
  e[r]=e[r].value;
}return e}function tn(e,n){if(e!==n){
  const r=e!==void 0;
  const t=e===null;
  const a=e===e;
  const i=e(e);
  const o=n!==void 0;
  const u=n===null;
  const d=n===n;
  const s=e(n);
  if (!u&&!s&&!i&&e>n||i&&o&&d&&!u&&!s||t&&o&&d||!r&&d||!a) {
    return 1;
  }if (!t&&!i&&!s&&e<n||s&&r&&a&&!t&&!i||u&&r&&a||!o&&a||!d) {
    return-1
  }
}return 0}function an(e,n,r){
  const a=e.criteria;
  const i=n.criteria;
  const u=r.length;
  for(let t=-1, o=a.length;++t<o;){const d=tn(a[t],i[t]);if(d){if (t>=u) {
    return d;
  }const s=r[t];return d*(s=="desc"?-1:1)}}return e.index-n.index
}function on(e,n,r){
  if (n.length) {
    n=l_1(n,i => c5(i)?o => o(o,i.length===1?i[0]:i):i);
  } else {
    n=[c6];
  }

  let t=-1;n=l_1(n,cS(G_1_1));const a=c_1(e,(i, o, u) => {const d=l_1(n,s => s(i));return{criteria:d,index:++t,value:i}});return rn(a,(i, o) => an(i,o,r));
}function un(e,n){return d_3(e,n,(r, t) => s(e,t));}
const I=He((e, n) => e==null?{}:un(e,n));
const dn=Math.ceil;
const sn=Math.max;
function fn(e,n,r,t){
  let a=-1;
  const o=Array(i);
  for (var i=sn(dn((n-e)/(r||1)),0); i--; ) {
    o[++a]=e;
    e+=r;
  }return o
}function cn(e){return (n, r, t) => {
  if (t&&typeof t!="number"&&c1(n,r,t)) {
    (r = t=void 0);
  }

  n=t(n);

  if (r===void 0) {
    r=n;
    n=0;
  } else {
    r=t(r);
  }

  t=t===void 0?n<r?1:-1:t(t);
  return fn(n,r,t);
};}
const E=cn();

const R=bl((e, n) => {
  if (e==null) {
    return[];
  }const r=n.length;

  if (r>1&&c1(e,n[0],n[1])) {
    n=[];
  } else if (r>2&&c1(n[0],n[1],n[2])) {
    (n = [n[0]]);
  }

  return on(e,c(n),[]);
});

let ln=0;
function H(e){const n=++ln;return u(e)+n;}function hn(e,n,r){
  const i=n.length;
  const o={};
  for(let t=-1, a=e.length;++t<a;){const u=t<i?n[t]:void 0;r(o,e[t],u)}return o
}function vn(e,n){return hn(e||[],n||[],c8);}class pn{constructor(){
  const n={};
  n._next = n;
  n._prev = n;
  this._sentinel=n;
}dequeue(){
  const n=this._sentinel;
  const r=n._prev;
  if (r!==n) {
    ne(r);
    return r;
  }
}enqueue(n){
  const r=this._sentinel;

  if (n._prev&&n._next) {
    ne(n);
  }

  n._next=r._next;
  r._next._prev=n;
  r._next=n;
  n._prev=r;
}toString(){
  const n=[];
  for (let r=this._sentinel, t=r._prev; t!==r; ) {
    n.push(JSON.stringify(t,wn));
    t=t._prev;
  }return `[${n.join(", ")}]`;
}}function ne(e){
  e._prev._next=e._next;
  e._next._prev=e._prev;
  delete e._next;
  delete e._prev;
}function wn(e,n){if (e!=="_next"&&e!=="_prev") {
  return n
}}var bn=bn_1(1);function mn(e,n){
  if (e.nodeCount()<=1) {
    return[];
  }
  const r=yn(e,n||bn);
  const t=gn(r.graph,r.buckets,r.zeroIdx);
  return d_2(i_1(t,a => e.outEdges(a.v,a.w)));
}function gn(e,n,r){
  let t=[];
  const a=n[n.length-1];
  const i=n[0];
  let o;

  while (e.nodeCount()) {
    while (o=i.dequeue()) {
      A(e,n,r,o);
    }

    while (o=a.dequeue()) {
      A(e,n,r,o);
    }

    if(e.nodeCount()){for (let u=n.length-2; u>0; --u) {
      o=n[u].dequeue();

      if (o)
        {t=t.concat(A(e,n,r,o,true));break}
    }}
  }

  return t
}function A(e,n,r,t,a){
  const i=a?[]:void 0;

  d(e.inEdges(t.v),o => {
    const u=e.edge(o);
    const d=e.node(o.v);

    if (a) {
      i.push({v:o.v,w:o.w});
    }

    d.out-=u;
    W(n,r,d);
  });

  d(e.outEdges(t.v),o => {
    const u=e.edge(o);
    const d=o.w;
    const s=e.node(d);
    s.in-=u;
    W(n,r,s);
  });

  e.removeNode(t.v);
  return i;
}function yn(e,n){
  const r=new G_1;
  let t=0;
  let a=0;
  d(e.nodes(),u => {r.setNode(u,{v:u,in:0,out:0})});

  d(e.edges(),u => {
    const d=r.edge(u.v,u.w)||0;
    const s=n(u);
    const c=d+s;
    r.setEdge(u.v,u.w,c);
    a=Math.max(a,r.node(u.v).out+=s);
    t=Math.max(t,r.node(u.w).in+=s);
  });

  const i=E(a+t+3).map(() => new pn);
  const o=t+1;
  d(r.nodes(),u => {W(i,o,r.node(u))});
  return {graph:r,buckets:i,zeroIdx:o};
}function W(e,n,r){
  if (r.out) {
    if (r.in) {
      e[r.out-r.in+n].enqueue(r);
    } else {
      e[e.length-1].enqueue(r);
    }
  } else {
    e[0].enqueue(r);
  }
}function kn(e){const n=e.graph().acyclicer==="greedy"?mn(e,r(e)):xn(e);d(n,t => {
  const a=e.edge(t);
  e.removeEdge(t);
  a.forwardName=t.name;
  a.reversed=true;
  e.setEdge(t.w,t.v,a,H("rev"));
});function r(t){return a => t.edge(a).weight;}}function xn(e){
  const n=[];
  const r={};
  const t={};
  function a(i){
    if (!Object.prototype.hasOwnProperty.call(t,i)) {
      t[i]=true;
      r[i]=true;

      d(e.outEdges(i),o => {
        if (Object.prototype.hasOwnProperty.call(r,o.w)) {
          n.push(o);
        } else {
          a(o.w);
        }
      });

      delete r[i];
    }
  }
  d(e.nodes(),a);
  return n;
}function En(e){d(e.edges(),n => {const r=e.edge(n);if(r.reversed){
  e.removeEdge(n);const t=r.forwardName;
  delete r.reversed;
  delete r.forwardName;
  e.setEdge(n.w,n.v,r,t);
}})}function L(e,n,r,t){
  let a;do {
    a=H(t);
  } while (e.hasNode(a));
  r.dummy=n;
  e.setNode(a,r);
  return a;
}function On(e){
  const n=new G_1().setGraph(e.graph());
  d(e.nodes(),r => {n.setNode(r,e.node(r))});

  d(e.edges(),r => {
    const t=n.edge(r.v,r.w)||{weight:0,minlen:1};
    const a=e.edge(r);
    n.setEdge(r.v,r.w,{weight:t.weight+a.weight,minlen:Math.max(t.minlen,a.minlen)})
  });

  return n;
}function be(e){
  const n=new G_1({multigraph:e.isMultigraph()}).setGraph(e.graph());
  d(e.nodes(),r => {
    if (!e.children(r).length) {
      n.setNode(r,e.node(r));
    }
  });
  d(e.edges(),r => {n.setEdge(r,e.edge(r))});
  return n;
}function re(e,n){
  const r=e.x;
  const t=e.y;
  const a=n.x-r;
  const i=n.y-t;
  let o=e.width/2;
  let u=e.height/2;
  if (!a&&!i) {
    throw new Error("Not possible to find intersection inside of the rectangle");
  }
  let d;
  let s;

  if (Math.abs(i)*o>Math.abs(a)*u) {
    i<0&&(u=-u);
    d=u*a/i;
    s=u;
  } else {
    a<0&&(o=-o);
    d=o;
    s=o*i/a;
  }

  return {x:r+d,y:t+s};
}function F(e){
  const n=i_1(E(me(e)+1),() => []);

  d(e.nodes(),r => {
    const t=e.node(r);
    const a=t.rank;

    if (!i(a)) {
      (n[a][t.order] = r);
    }
  });

  return n;
}function Ln(e){const n=e_1(i_1(e.nodes(),r => e.node(r).rank));d(e.nodes(),r => {
  const t=e.node(r);

  if (h(t,"rank")) {
    (t.rank -= n);
  }
})}function Nn(e){
  const n=e_1(i_1(e.nodes(),i => e.node(i).rank));
  const r=[];
  d(e.nodes(),i => {
    const o=e.node(i).rank-n;

    if (!r[o]) {
      (r[o] = []);
    }

    r[o].push(i);
  });
  let t=0;
  const a=e.graph().nodeRankFactor;
  d(r,(i, o) => {
    if (i(i)&&o%a!==0) {
      --t;
    } else if (t) {
      d(i,u => {e.node(u).rank+=t});
    }
  })
}function te(e,n,r,t){
  const a={width:0,height:0};

  if (arguments.length>=4) {
    a.rank=r;
    a.order=t;
  }

  return L(e,"border",a,n);
}function me(e){return y(i_1(e.nodes(),n => {const r=e.node(n).rank;if (!i(r)) {
  return r
}}));}function Pn(e,n){
  const r={lhs:[],rhs:[]};
  d(e,t => {
    if (n(t)) {
      r.lhs.push(t);
    } else {
      r.rhs.push(t);
    }
  });
  return r;
}function Cn(e,n){return n()}function _n(e){function n(r){
  const t=e.children(r);
  const a=e.node(r);

  if (t.length) {
    d(t,n);
  }

  if (Object.prototype.hasOwnProperty.call(a,"minRank")) {
    a.borderLeft=[];
    a.borderRight=[];
    for (let i=a.minRank, o=a.maxRank+1; i<o; ++i) {
      ae(e,"borderLeft","_bl",r,a,i);
      ae(e,"borderRight","_br",r,a,i);
    }
  }
}d(e.children(),n)}function ae(e,n,r,t,a,i){
  const o={width:0,height:0,rank:i,borderType:n};
  const u=a[n][i-1];
  const d=L(e,"border",o,r);
  a[n][i]=d;
  e.setParent(d,t);

  if (u) {
    e.setEdge(u,d,{weight:1});
  }
}function Rn(e){
  const n=e.graph().rankdir.toLowerCase();

  if ((n==="lr" || n==="rl")) {
    ge(e);
  }
}function Tn(e){
  const n=e.graph().rankdir.toLowerCase();

  if ((n==="bt" || n==="rl")) {
    In(e);
  }

  if ((n==="lr" || n==="rl")) {
    Mn(e);
    ge(e);
  }
}function ge(e){
  d(e.nodes(),n => {ie(e.node(n))});
  d(e.edges(),n => {ie(e.edge(n))});
}function ie(e){
  const n=e.width;
  e.width=e.height;
  e.height=n;
}function In(e){
  d(e.nodes(),n => {B(e.node(n))});

  d(e.edges(),n => {
    const r=e.edge(n);
    d(r.points,B);

    if (Object.prototype.hasOwnProperty.call(r,"y")) {
      B(r);
    }
  });
}function B(e){e.y=-e.y}function Mn(e){
  d(e.nodes(),n => {G(e.node(n))});

  d(e.edges(),n => {
    const r=e.edge(n);
    d(r.points,G);

    if (Object.prototype.hasOwnProperty.call(r,"x")) {
      G(r);
    }
  });
}function G(e){
  const n=e.x;
  e.x=e.y;
  e.y=n;
}function Sn(e){
  e.graph().dummyChains=[];
  d(e.edges(),n => {Fn(e,n)});
}function Fn(e,n){
  let r=n.v;
  let t=e.node(r).rank;
  const a=n.w;
  const i=e.node(a).rank;
  const o=n.name;
  const u=e.edge(n);
  const d=u.labelRank;
  if(i!==t+1){
    e.removeEdge(n);
    let s=void 0;
    let c;
    let l;
    l=0;
    ++t;

    for (; t<i; ++l,++t) {
      u.points=[];
      s={width:0,height:0,edgeLabel:u,edgeObj:n,rank:t};
      c=L(e,"edge",s,"_d");

      if (t===d) {
        s.width=u.width;
        s.height=u.height;
        s.dummy="edge-label";
        s.labelpos=u.labelpos;
      }

      e.setEdge(r,c,{weight:u.weight},o);

      if (l===0) {
        e.graph().dummyChains.push(c);
      }

      r=c;
    }

    e.setEdge(r,a,{weight:u.weight},o)
  }
}function jn(e){d(e.graph().dummyChains,n => {
  let r=e.node(n);
  const t=r.edgeLabel;
  let a;
  for (e.setEdge(r.edgeObj,t); r.dummy; ) {
    a=e.successors(n)[0];
    e.removeNode(n);
    t.points.push({x:r.x,y:r.y});

    if (r.dummy==="edge-label") {
      t.x=r.x;
      t.y=r.y;
      t.width=r.width;
      t.height=r.height;
    }

    n=a;
    r=e.node(n);
  }
})}function J(e){const n={};function r(t){
  const a=e.node(t);if (Object.prototype.hasOwnProperty.call(n,t)) {
      return a.rank;
    }n[t]=true;let i=e_1(i_1(e.outEdges(t),o => r(o.w)-e.edge(o).minlen));

  if ((i===Number.POSITIVE_INFINITY||i===void 0 || i===null)) {
    (i = 0);
  }

  a.rank=i;
  return a.rank;
}d(e.sources(),r)}function C(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen}function ye(e){
  const n=new G_1({directed:false});
  const r=e.nodes()[0];
  const t=e.nodeCount();
  n.setNode(r,{});
  let a;
  let i;

  while (Vn(n,e)<t) {
    a=An(n,e);
    i=n.hasNode(a.v)?C(e,a):-C(e,a);
    Bn(n,e,i);
  }

  return n
}function Vn(e,n){
  function r(t){d(n.nodeEdges(t),a => {
    const i=a.v;
    const o=t===i?a.w:i;

    if (!e.hasNode(o)&&!C(n,a)) {
      e.setNode(o,{});
      e.setEdge(t,o,{});
      r(o);
    }
  })}
  d(e.nodes(),r);
  return e.nodeCount();
}function An(e,n){return U(n.edges(),r => {if (e.hasNode(r.v)!==e.hasNode(r.w)) {
  return C(n,r)
}});}function Bn(e,n,r){d(e.nodes(),t => {n.node(t).rank+=r})}
class Gn extends Error {}
function ke(e,n,r){
  if (!c5(n)) {
    (n = [n]);
  }

  const t=(e.isDirected()?e.successors:e.neighbors).bind(e);
  const a=[];
  const i={};

  d(n,o => {if (!e.hasNode(o)) {
    throw new Error(`Graph does not have node: ${o}`);
  }xe(e,o,r==="post",i,t,a)});

  return a;
}function xe(e,n,r,t,a,i){
  if (!Object.prototype.hasOwnProperty.call(t,n)) {
    t[n]=true;
    r||i.push(n);
    d(a(n),o => {xe(e,o,r,t,a,i)});
    r&&i.push(n);
  }
}function Yn(e,n){return ke(e,n,"post")}function Dn(e,n){return ke(e,n,"pre")}k.initLowLimValues=Z;k.initCutValues=Q;k.calcCutValue=Ee;k.leaveEdge=Le;k.enterEdge=Ne;k.exchangeEdges=Pe;function k(e){
  e=On(e);
  J(e);
  const n=ye(e);
  Z(n);
  Q(n,e);
  let t;
  for (let r; r=Le(n); ) {
    t=Ne(n,e,r);
    Pe(n,e,r,t);
  }
}function Q(e,n){
  let r=Yn(e,e.nodes());
  r=r.slice(0,r.length-1);
  d(r,t => {qn(e,n,t)});
}function qn(e,n,r){
  const t=e.node(r);
  const a=t.parent;
  e.edge(r,a).cutvalue=Ee(e,n,r)
}function Ee(e,n,r){
  const t=e.node(r);
  const a=t.parent;
  let i=true;
  let o=n.edge(r,a);
  let u=0;

  if (!o) {
    i=false;
    o=n.edge(a,r);
  }

  u=o.weight;

  d(n.nodeEdges(r),d => {
    const s=d.v===r;
    const c=s?d.w:d.v;
    if(c!==a){
      const l=s===i;
      const h=n.edge(d).weight;
      u+=l?h:-h;

      if (Wn(e,r,c))
        {const v=e.edge(r,c).cutvalue;u+=l?-v:v}
    }
  });

  return u;
}function Z(e,n){
  if (arguments.length<2) {
    (n = e.nodes()[0]);
  }

  Oe(e,{},1,n);
}function Oe(e,n,r,t,a){
  const i=r;
  const o=e.node(t);
  n[t]=true;
  d(e.neighbors(t),u => {
    if (!Object.prototype.hasOwnProperty.call(n,u)) {
      (r = Oe(e,n,r,u,t));
    }
  });
  o.low=i;
  o.lim=r++;

  if (a) {
    o.parent=a;
  } else {
    delete o.parent;
  }

  return r;
}function Le(e){return G_1_2(e.edges(),n => e.edge(n).cutvalue<0);}function Ne(e,n,r){
  let t=r.v;
  let a=r.w;

  if (!n.hasEdge(t,a)) {
    t=r.w;
    a=r.v;
  }

  const i=e.node(t);
  const o=e.node(a);
  let u=i;
  let d=false;

  if (i.lim>o.lim) {
    u=o;
    d=true;
  }

  const s=d_1(n.edges(),c => d===oe(e,e.node(c.v),u)&&d!==oe(e,e.node(c.w),u));return U(s,c => C(n,c));
}function Pe(e,n,r,t){
  const a=r.v;
  const i=r.w;
  e.removeEdge(a,i);
  e.setEdge(t.v,t.w,{});
  Z(e);
  Q(e,n);
  $n(e,n);
}function $n(e,n){
  const r=G_1_2(e.nodes(),a => !n.node(a).parent);
  let t=Dn(e,r);
  t=t.slice(1);

  d(t,a => {
    const i=e.node(a).parent;
    let o=n.edge(a,i);
    let u=false;

    if (!o) {
      o=n.edge(i,a);
      u=true;
    }

    n.node(a).rank=n.node(i).rank+(u?o.minlen:-o.minlen);
  });
}function Wn(e,n,r){return e.hasEdge(n,r)}function oe(e,n,r){return r.low<=n.lim&&n.lim<=r.lim}function zn(e){switch(e.graph().ranker){case "network-simplex":
  {
    ue(e);break;
  }case "tight-tree":
  {
    Un(e);break;
  }case "longest-path":
  {
    Xn(e);break;
  }default:
  {
    ue(e)
  }}}var Xn=J;function Un(e){
  J(e);
  ye(e);
}function ue(e){k(e)}function Hn(e){
  const n=L(e,"root",{},"_root");
  const r=Jn(e);
  const t=y(v(r))-1;
  const a=2*t+1;
  e.graph().nestingRoot=n;
  d(e.edges(),o => {e.edge(o).minlen*=a});
  const i=Qn(e)+1;
  d(e.children(),o => {Ce(e,n,a,i,t,r,o)});
  e.graph().nodeRankFactor=a;
}function Ce(e,n,r,t,a,i,o){
  const u=e.children(o);if(!u.length){
    if (o!==n) {
      e.setEdge(n,o,{weight:0,minlen:r});
    }

    return
  }
  const d=te(e,"_bt");
  const s=te(e,"_bb");
  const c=e.node(o);
  e.setParent(d,o);
  c.borderTop=d;
  e.setParent(s,o);
  c.borderBottom=s;

  d(u,l => {
    Ce(e,n,r,t,a,i,l);
    const h=e.node(l);
    const v=h.borderTop?h.borderTop:l;
    const p=h.borderBottom?h.borderBottom:l;
    const b=h.borderTop?t:2*t;
    const N=v!==p?1:a-i[o]+1;
    e.setEdge(d,v,{weight:b,minlen:N,nestingEdge:true});
    e.setEdge(p,s,{weight:b,minlen:N,nestingEdge:true});
  });

  if (!e.parent(o)) {
    e.setEdge(n,d,{weight:0,minlen:a+i[o]});
  }
}function Jn(e){
  const n={};function r(t,a){
  const i=e.children(t);

  if (i&&i.length) {
    d(i,o => {r(o,a+1)});
  }

  n[t]=a;
}
  d(e.children(),t => {r(t,1)});
  return n;
}function Qn(e){return r(e.edges(),(n, r) => n+e.edge(r).weight,0);}function Zn(e){
  const n=e.graph();
  e.removeNode(n.nestingRoot);
  delete n.nestingRoot;
  d(e.edges(),r => {
    const t=e.edge(r);

    if (t.nestingEdge) {
      e.removeEdge(r);
    }
  });
}function Kn(e,n,r){
  const t={};
  let a;
  d(r,i => {
    let o=e.parent(i);
    let u;
    let d;

    while (o) {
      u=e.parent(o);

      if (u) {
        d=t[u];
        t[u]=o;
      } else {
        d=a;
        a=o;
      }

      if (d&&d!==o)
        {n.setEdge(d,o);return}

      o=u
    }
  })
}function er(e,n,r){
  const t=nr(e);
  const a=new G_1({compound:true}).setGraph({root:t}).setDefaultNodeLabel(i => e.node(i));

  d(e.nodes(),i => {
    const o=e.node(i);
    const u=e.parent(i);

    if ((o.rank===n || o.minRank<=n&&n<=o.maxRank)) {
      a.setNode(i);
      a.setParent(i,u||t);

      d(e[r](i),d => {
        const s=d.v===i?d.w:d.v;
        const c=a.edge(s,i);
        const l=i(c)?0:c.weight;
        a.setEdge(s,i,{weight:e.edge(d).weight+l})
      });

      Object.prototype.hasOwnProperty.call(o,"minRank")&&a.setNode(i,{borderLeft:o.borderLeft[n],borderRight:o.borderRight[n]});
    }
  });

  return a;
}function nr(e){for (var n; e.hasNode(n=H("_root")); )
  {}return n}function rr(e,n){
  let r=0;
  for (let t=1; t<n.length; ++t) {
    r+=tr(e,n[t-1],n[t]);
  }return r
}function tr(e,n,r){
  const t=vn(r,i_1(r,(s, c) => c));
  const a=d_2(i_1(n,s => R(i_1(e.outEdges(s),c => ({
    pos:t[c.w],
    weight:e.edge(c).weight
  })),"pos")));
  for (var i=1; i<r.length; ) {
    i<<=1;
  }const o=2*i-1;i-=1;
  const u=i_1(new Array(o),() => 0);
  let d=0;

  d(a.forEach(s => {
    let c=s.pos+i;u[c]+=s.weight;
    let l=0;

    while (c>0) {
      if (c%2) {
        (l += u[c+1]);
      }

      c=c-1>>1;
      u[c]+=s.weight;
    }

    d+=s.weight*l
  }));

  return d;
}function ar(e){
  const n={};
  const r=d_1(e.nodes(),u => !e.children(u).length);
  const t=y(i_1(r,u => e.node(u).rank));
  const a=i_1(E(t+1),() => []);
  function i(u){if(!h(n,u)){
    n[u]=true;const d=e.node(u);
    a[d.rank].push(u);
    d(e.successors(u),i);
  }}const o=R(r,u => e.node(u).rank);
  d(o,i);
  return a;
}function ir(e,n){return i_1(n,r => {const t=e.inEdges(r);if (t.length) {const a=r(t,(i, o) => {
  const u=e.edge(o);
  const d=e.node(o.v);
  return{sum:i.sum+u.weight*d.order,weight:i.weight+u.weight}
},{sum:0,weight:0});return{v:r,barycenter:a.sum/a.weight,weight:a.weight}} else {
  return{v:r}
}});}function or(e,n){
  const r={};
  d(e,(a, i) => {
    const o=r[a.v]={indegree:0,in:[],out:[],vs:[a.v],i};

    if (!i(a.barycenter)) {
      o.barycenter=a.barycenter;
      o.weight=a.weight;
    }
  });

  d(n.edges(),a => {
    const i=r[a.v];
    const o=r[a.w];

    if (!i(i)&&!i(o)) {
      o.indegree++;
      i.out.push(r[a.w]);
    }
  });

  const t=d_1(r,a => !a.indegree);return ur(t)
}function ur(e){
  const n=[];function r(i){return o => {
    if (!o.merged) {
      if ((i(o.barycenter)||i(i.barycenter) || o.barycenter>=i.barycenter)) {
        dr(i,o);
      }
    }
  };}function t(i){return o => {
    o.in.push(i);

    if (--o.indegree===0) {
      e.push(o);
    }
  };}

  while (e.length) {
    const a=e.pop();
    n.push(a);
    d(a.in.reverse(),r(a));
    d(a.out,t(a));
  }

  return i_1(d_1(n,i => !i.merged),i => I(i,["vs","i","barycenter","weight"]));
}function dr(e,n){
  let r=0;
  let t=0;

  if (e.weight) {
    r+=e.barycenter*e.weight;
    t+=e.weight;
  }

  if (n.weight) {
    r+=n.barycenter*n.weight;
    t+=n.weight;
  }

  e.vs=n.vs.concat(e.vs);
  e.barycenter=r/t;
  e.weight=t;
  e.i=Math.min(n.i,e.i);
  n.merged=true;
}function sr(e,n){
  const r=Pn(e,c => Object.prototype.hasOwnProperty.call(c,"barycenter"));
  const t=r.lhs;
  const a=R(r.rhs,c => -c.i);
  const i=[];
  let o=0;
  let u=0;
  let d=0;
  t.sort(fr(!!n));
  d=de(i,a,d);

  d(t,c => {
    d+=c.vs.length;
    i.push(c.vs);
    o+=c.barycenter*c.weight;
    u+=c.weight;
    d=de(i,a,d);
  });

  const s={vs:d_2(i)};

  if (u) {
    s.barycenter=o/u;
    s.weight=u;
  }

  return s;
}function de(e,n,r){for (let t; n.length&&(t=l_2(n)).i<=r; ) {
  n.pop();
  e.push(t.vs);
  r++;
}return r}function fr(e){return (n, r) => n.barycenter<r.barycenter?-1:n.barycenter>r.barycenter?1:e?r.i-n.i:n.i-r.i;}function _e(e,n,r,t){
  let a=e.children(n);
  const i=e.node(n);
  const o=i?i.borderLeft:void 0;
  const u=i?i.borderRight:void 0;
  const d={};

  if (o) {
    (a = d_1(a,p => p!==o&&p!==u));
  }

  const s=ir(e,a);d(s,p => {if(e.children(p.v).length){
    const b=_e(e,p.v,r,t);
    d[p.v]=b;

    if (Object.prototype.hasOwnProperty.call(b,"barycenter")) {
      lr(p,b);
    }
  }});const c=or(s,r);cr(c,d);const l=sr(c,t);if(o&&(l.vs=d_2([o,l.vs,u]),e.predecessors(o).length)){
    const h=e.node(e.predecessors(o)[0]);
    const v=e.node(e.predecessors(u)[0]);

    if (!Object.prototype.hasOwnProperty.call(l,"barycenter")) {
      l.barycenter=0;
      l.weight=0;
    }

    l.barycenter=(l.barycenter*l.weight+h.order+v.order)/(l.weight+2);
    l.weight+=2;
  }return l
}function cr(e,n){d(e,r => {r.vs=d_2(r.vs.map(t => n[t]?n[t].vs:t))})}function lr(e,n){
  if (i(e.barycenter)) {
    e.barycenter=n.barycenter;
    e.weight=n.weight;
  } else {
    e.barycenter=(e.barycenter*e.weight+n.barycenter*n.weight)/(e.weight+n.weight);
    e.weight+=n.weight;
  }
}function hr(e){
  const n=me(e);
  const r=se(e,E(1,n+1),"inEdges");
  const t=se(e,E(n-1,-1,-1),"outEdges");
  let a=ar(e);
  fe(e,a);
  let i=Number.POSITIVE_INFINITY;
  let o;
  for(let u=0, d=0;d<4;++u,++d){
    vr(u%2?r:t,u%4>=2);
    a=F(e);
    const s=rr(e,a);

    if (s<i) {
      d=0;
      o=Ze(a);
      i=s;
    }
  }fe(e,o)
}function se(e,n,r){return i_1(n,t => er(e,t,r));}function vr(e,n){const r=new G_1;d(e,t => {
  const a=t.graph().root;
  const i=_e(t,a,r,n);
  d(i.vs,(o, u) => {t.node(o).order=u});
  Kn(t,r,i.vs);
})}function fe(e,n){d(n,r => {d(r,(t, a) => {e.node(t).order=a})})}function pr(e){const n=br(e);d(e.graph().dummyChains,r => {
  let t=e.node(r);
  const i=wr(e,n,a.v,a.w);
  const o=i.path;
  const u=i.lca;
  let d=0;
  let s=o[d];
  let c=true;
  for(var a=t.edgeObj;r!==a.w;){
    t=e.node(r);

    if (c) {
      while ((s=o[d])!==u&&e.node(s).maxRank<t.rank) {
        d++;
      }

      if (s===u) {
        (c = false);
      }
    }

    if(!c){
      while (d<o.length-1&&e.node(s=o[d+1]).minRank<=t.rank) {
        d++;
      }

      s=o[d]
    }
    e.setParent(r,s);
    r=e.successors(r)[0];
  }
})}function wr(e,n,r,t){
  const a=[];
  const i=[];
  const o=Math.min(n[r].low,n[t].low);
  const u=Math.max(n[r].lim,n[t].lim);
  let d;
  let s;
  d=r;do {
    d=e.parent(d);
    a.push(d);
  } while (d&&(n[d].low>o||u>n[d].lim));
  s=d;

  for (d=t; (d=e.parent(d))!==s; ) {
    i.push(d);
  }

  return{path:a.concat(i.reverse()),lca:s}
}function br(e){
  const n={};
  let r=0;
  function t(a){
    const i=r;
    d(e.children(a),t);
    n[a]={low:i,lim:r++};
  }
  d(e.children(),t);
  return n;
}function mr(e,n){
  const r={};function t(a,i){
    let o=0;
    let u=0;
    const d=a.length;
    const s=l_2(i);

    d(i,(c, l) => {
      const h=yr(e,c);
      const v=h?e.node(h).order:d;

      if ((h || c===s)) {
        d(i.slice(u,l+1),p => {d(e.predecessors(p),b => {
          const N=e.node(b);
          const K=N.order;

          if ((K<o||v<K)&&!(N.dummy&&e.node(p).dummy)) {
            Re(r,b,p);
          }
        })});

        u=l+1;
        o=v;
      }
    });

    return i;
  }
  r(n,t);
  return r;
}function gr(e,n){
  const r={};function t(i,o,u,d,s){let c;d(E(o,u),l => {
  c=i[l];

  if (e.node(c).dummy) {
    d(e.predecessors(c),h => {
      const v=e.node(h);

      if (v.dummy&&(v.order<d||v.order>s)) {
        Re(r,h,c);
      }
    });
  }
})}function a(i,o){
    let u=-1;
    let d;
    let s=0;
    d(o,(c, l) => {if(e.node(c).dummy==="border"){
      const h=e.predecessors(c);

      if (h.length) {
        d=e.node(h[0]).order;
        t(o,s,l,u,d);
        s=l;
        u=d;
      }
    }t(o,s,o.length,d,i.length)});
    return o;
  }
  r(n,a);
  return r;
}function yr(e,n){if (e.node(n).dummy) {
  return G_1_2(e.predecessors(n),r => e.node(r).dummy);
}}function Re(e,n,r){
  if(n>r){
    const t=n;
    n=r;
    r=t;
  }let a=e[n];

  if (!a) {
    (e[n] = a={});
  }

  a[r]=true;
}function kr(e,n,r){if(n>r){
  const t=n;
  n=r;
  r=t;
}return!!e[n]&&Object.prototype.hasOwnProperty.call(e[n],r)}function xr(e,n,r,t){
  const a={};
  const i={};
  const o={};

  d(n,u => {d(u,(d, s) => {
    a[d]=d;
    i[d]=d;
    o[d]=s;
  })});

  d(n,u => {let d=-1;d(u,s => {let c=t(s);if(c.length){
    c=R(c,b => o[b]);
    const l=(c.length-1)/2;
    for(let h=Math.floor(l), v=Math.ceil(l);h<=v;++h){
      const p=c[h];

      if (i[s]===s&&d<o[p]&&!kr(r,s,p)) {
        i[p]=s;
        i[s]=a[s]=a[p];
        d=o[p];
      }
    }
  }})});

  return {root:a,align:i};
}function Er(e,n,r,t,a){
  const i={};
  const o=Or(e,n,r,a);
  const u=a?"borderLeft":"borderRight";
  function d(l,h){
    let v=o.nodes();
    let p=v.pop();
    const b={};

    while (p) {
      if (b[p]) {
        l(p);
      } else {
        b[p]=true;
        v.push(p);
        v=v.concat(h(p));
      }

      p=v.pop();
    }
  }function s(l){i[l]=o.inEdges(l).reduce((h, v) => Math.max(h,i[v.v]+o.edge(v)),0)}function c(l){
  const h=o.outEdges(l).reduce((p, b) => Math.min(p,i[b.w]-o.edge(b)),Number.POSITIVE_INFINITY);
  const v=e.node(l);

  if (h!==Number.POSITIVE_INFINITY&&v.borderType!==u) {
    (i[l] = Math.max(i[l],h));
  }
}
  d(s,o.predecessors.bind(o));
  d(c,o.successors.bind(o));
  d(t,l => {i[l]=i[r[l]]});
  return i;
}function Or(e,n,r,t){
  const a=new G_1;
  const i=e.graph();
  const o=_r(i.nodesep,i.edgesep,t);

  d(n,u => {let d;d(u,s => {
    const c=r[s];
    a.setNode(c);

    if (d) {
      const l=r[d];
      const h=a.edge(l,c);
      a.setEdge(l,c,Math.max(o(e,s,d),h||0))
    }

    d=s
  })});

  return a;
}function Lr(e,n){return U(v(n),r => {
  let t=Number.NEGATIVE_INFINITY;
  let a=Number.POSITIVE_INFINITY;

  Ke(r,(i, o) => {
    const u=Rr(e,o)/2;
    t=Math.max(i+u,t);
    a=Math.min(i-u,a);
  });

  return t-a;
});}function Nr(e,n){
  const r=v(n);
  const t=e_1(r);
  const a=y(r);
  d(["u","d"],i => {d(["l","r"],o => {
    const u=i+o;
    const d=e[u];
    let s;
    if(d!==n){
      const c=v(d);
      s=o==="l"?t-e_1(c):a-y(c);

      if (s) {
        (e[u] = S(d,l => l+s));
      }
    }
  })})
}function Pr(e,n){return S(e.ul,(r, t) => {if (n) {
  return e[n.toLowerCase()][t];
}const a=R(i_1(e,t));return(a[1]+a[2])/2});}function Cr(e){
  const n=F(e);
  const r=cT(mr(e,n),gr(e,n));
  const t={};
  let a;
  d(["u","d"],o => {
    a=o==="u"?n:v(n).reverse();

    d(["l","r"],u => {
      if (u==="r") {
        (a = i_1(a,l => v(l).reverse()));
      }

      const d=(o==="u"?e.predecessors:e.successors).bind(e);
      const s=xr(e,a,r,d);
      let c=Er(e,a,s.root,s.align,u==="r");

      if (u==="r") {
        (c = S(c,l => -l));
      }

      t[o+u]=c;
    });
  });const i=Lr(e,t);
  Nr(t,i);
  return Pr(t,e.graph().align);
}function _r(e,n,r){return (t, a, i) => {
  const o=t.node(a);
  const u=t.node(i);
  let d=0;
  let s;
  d+=o.width/2;

  if (Object.prototype.hasOwnProperty.call(o,"labelpos")) {
    switch(o.labelpos.toLowerCase()){case "l":
      {
        s=-o.width/2;break;
      }case "r":
      {
        s=o.width/2;break
      }}
  }

  if (s) {
    (d += r?s:-s);
  }

  s=0;
  d+=(o.dummy?n:e)/2;
  d+=(u.dummy?n:e)/2;
  d+=u.width/2;

  if (Object.prototype.hasOwnProperty.call(u,"labelpos")) {
    switch(u.labelpos.toLowerCase()){case "l":
      {
        s=u.width/2;break;
      }case "r":
      {
        s=-u.width/2;break
      }}
  }

  if (s) {
    (d += r?s:-s);
  }

  s=0;
  return d;
};}function Rr(e,n){return e.node(n).width}function Tr(e){
  e=be(e);
  Ir(e);
  en(Cr(e),(n, r) => {e.node(r).x=n});
}function Ir(e){
  const n=F(e);
  const r=e.graph().ranksep;
  let t=0;
  d(n,a => {
    const i=y(i_1(a,o => e.node(o).height));
    d(a,o => {e.node(o).y=t+i/2});
    t+=i+r;
  })
}

export function l(e, n) {const r=Cn;r("layout",()=>{
  const t=r("  buildLayoutGraph",() => qr(e));

  r("  runLayout",() => Mr(t,r));

  r("  updateInputGraph",() => Sr(e,t));
})}
//# sourceMappingURL=layout-B0vNCuaA.js.map

function Mr(e,n){
  n("    makeSpaceForEdgeLabels",() => $r(e));

  n("    removeSelfEdges",() => Kr(e));

  n("    acyclic",() => kn(e));

  n("    nestingGraph.run",() => Hn(e));

  n("    rank",() => zn(be(e)));

  n("    injectEdgeLabelProxies",() => Wr(e));

  n("    removeEmptyRanks",() => Nn(e));

  n("    nestingGraph.cleanup",() => Zn(e));

  n("    normalizeRanks",() => Ln(e));

  n("    assignRankMinMax",() => zr(e));

  n("    removeEdgeLabelProxies",() => Xr(e));

  n("    normalize.run",() => Sn(e));

  n("    parentDummyChains",() => pr(e));

  n("    addBorderSegments",() => _n(e));

  n("    order",() => hr(e));

  n("    insertSelfEdges",() => et(e));

  n("    adjustCoordinateSystem",() => Rn(e));

  n("    position",() => Tr(e));

  n("    positionSelfEdges",() => nt(e));

  n("    removeBorderNodes",() => Zr(e));

  n("    normalize.undo",() => jn(e));

  n("    fixupEdgeLabelCoords",() => Jr(e));

  n("    undoCoordinateSystem",() => Tn(e));

  n("    translateGraph",() => Ur(e));

  n("    assignNodeIntersects",() => Hr(e));

  n("    reversePoints",() => Qr(e));

  n("    acyclic.undo",() => En(e));
}function Sr(e,n){
  d(e.nodes(),r => {
    const t=e.node(r);
    const a=n.node(r);

    if (t) {
      t.x=a.x;
      t.y=a.y;
      n.children(r).length&&(t.width=a.width,t.height=a.height);
    }
  });

  d(e.edges(),r => {
    const t=e.edge(r);
    const a=n.edge(r);
    t.points=a.points;

    if (Object.prototype.hasOwnProperty.call(a,"x")) {
      t.x=a.x;
      t.y=a.y;
    }
  });

  e.graph().width=n.graph().width;
  e.graph().height=n.graph().height;
}
const Fr=["nodesep","edgesep","ranksep","marginx","marginy"];
const jr={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"};
const Vr=["acyclicer","ranker","rankdir","align"];
const Ar=["width","height"];
const Br={width:0,height:0};
const Gr=["minlen","weight","width","height","labeloffset"];
const Yr={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"};
const Dr=["labelpos"];
function qr(e){
  const n=new G_1({multigraph:true,compound:true});
  const r=D(e.graph());
  n.setGraph(cT({},jr,Y(r,Fr),I(r,Vr)));

  d(e.nodes(),t => {
    const a=D(e.node(t));
    n.setNode(t,i_2(Y(a,Ar),Br));
    n.setParent(t,e.parent(t));
  });

  d(e.edges(),t => {const a=D(e.edge(t));n.setEdge(t,cT({},Yr,Y(a,Gr),I(a,Dr)))});
  return n;
}function $r(e){
  const n=e.graph();
  n.ranksep/=2;

  d(e.edges(),r => {
    const t=e.edge(r);
    t.minlen*=2;

    if (t.labelpos.toLowerCase()!=="c") {
      if (n.rankdir==="TB"||n.rankdir==="BT") {
        t.width+=t.labeloffset;
      } else {
        t.height+=t.labeloffset;
      }
    }
  });
}function Wr(e){d(e.edges(),n => {const r=e.edge(n);if(r.width&&r.height){
  const t=e.node(n.v);
  const a=e.node(n.w);
  const i={rank:(a.rank-t.rank)/2+t.rank,e:n};
  L(e,"edge-proxy",i,"_ep")
}})}function zr(e){
  let n=0;
  d(e.nodes(),r => {
    const t=e.node(r);

    if (t.borderTop) {
      t.minRank=e.node(t.borderTop).rank;
      t.maxRank=e.node(t.borderBottom).rank;
      n=y(n,t.maxRank);
    }
  });
  e.graph().maxRank=n;
}function Xr(e){d(e.nodes(),n => {
  const r=e.node(n);

  if (r.dummy==="edge-proxy") {
    e.edge(r.e).labelRank=r.rank;
    e.removeNode(n);
  }
})}function Ur(e){
  let n=Number.POSITIVE_INFINITY;
  let r=0;
  let t=Number.POSITIVE_INFINITY;
  let a=0;
  const i=e.graph();
  const o=i.marginx||0;
  const u=i.marginy||0;
  function d(s){
    const c=s.x;
    const l=s.y;
    const h=s.width;
    const v=s.height;
    n=Math.min(n,c-h/2);
    r=Math.max(r,c+h/2);
    t=Math.min(t,l-v/2);
    a=Math.max(a,l+v/2);
  }
  d(e.nodes(),s => {d(e.node(s))});
  d(e.edges(),s => {
    const c=e.edge(s);

    if (Object.prototype.hasOwnProperty.call(c,"x")) {
      d(c);
    }
  });
  n-=o;
  t-=u;

  d(e.nodes(),s => {
    const c=e.node(s);
    c.x-=n;
    c.y-=t;
  });

  d(e.edges(),s => {
    const c=e.edge(s);

    d(c.points,l => {
      l.x-=n;
      l.y-=t;
    });

    if (Object.prototype.hasOwnProperty.call(c,"x")) {
      (c.x -= n);
    }

    if (Object.prototype.hasOwnProperty.call(c,"y")) {
      (c.y -= t);
    }
  });

  i.width=r-n+o;
  i.height=a-t+u;
}function Hr(e){d(e.edges(),n => {
  const r=e.edge(n);
  const t=e.node(n.v);
  const a=e.node(n.w);
  let i;
  let o;

  if (r.points) {
    i=r.points[0];
    o=r.points[r.points.length-1];
  } else {
    r.points=[];
    i=a;
    o=t;
  }

  r.points.unshift(re(t,i));
  r.points.push(re(a,o));
})}function Jr(e){d(e.edges(),n => {const r=e.edge(n);if (Object.prototype.hasOwnProperty.call(r,"x")) {
  if ((r.labelpos==="l" || r.labelpos==="r")) {
    (r.width -= r.labeloffset);
  }

  switch (r.labelpos) {
  case "l":
    {
      r.x-=r.width/2+r.labeloffset;break;
    }
  case "r":
    {
      r.x+=r.width/2+r.labeloffset;break
    }
  }
}})}function Qr(e){d(e.edges(),n => {
  const r=e.edge(n);

  if (r.reversed) {
    r.points.reverse();
  }
})}function Zr(e){
  d(e.nodes(),n => {if(e.children(n).length){
    const r=e.node(n);
    const t=e.node(r.borderTop);
    const a=e.node(r.borderBottom);
    const i=e.node(l_2(r.borderLeft));
    const o=e.node(l_2(r.borderRight));
    r.width=Math.abs(o.x-i.x);
    r.height=Math.abs(a.y-t.y);
    r.x=i.x+r.width/2;
    r.y=t.y+r.height/2;
  }});

  d(e.nodes(),n => {
    if (e.node(n).dummy==="border") {
      e.removeNode(n);
    }
  });
}function Kr(e){d(e.edges(),n => {if(n.v===n.w){
  const r=e.node(n.v);

  if (!r.selfEdges) {
    (r.selfEdges = []);
  }

  r.selfEdges.push({e:n,label:e.edge(n)});
  e.removeEdge(n);
}})}function et(e){const n=F(e);d(n,r => {let t=0;d(r,(a, i) => {
  const o=e.node(a);
  o.order=i+t;
  d(o.selfEdges,u => {L(e,"selfedge",{width:u.label.width,height:u.label.height,rank:o.rank,order:i+ ++t,e:u.e,label:u.label},"_se")});
  delete o.selfEdges;
})})}function nt(e){d(e.nodes(),n => {const r=e.node(n);if(r.dummy==="selfedge"){
  const t=e.node(r.e.v);
  const a=t.x+t.width/2;
  const i=t.y;
  const o=r.x-a;
  const u=t.height/2;
  e.setEdge(r.e,r.label);
  e.removeNode(n);
  r.label.points=[{x:a+2*o/3,y:i-u},{x:a+5*o/6,y:i-u},{x:a+o,y:i},{x:a+5*o/6,y:i+u},{x:a+2*o/3,y:i+u}];
  r.label.x=r.x;
  r.label.y=r.y;
}})}function Y(e,n){return S(I(e,n),Number)}function D(e){
  const n={};
  d(e,(r, t) => {n[t.toLowerCase()]=r});
  return n;
}export{l as l};
//# sourceMappingURL=layout-B0vNCuaA.js.map
