import{bl,bm,bn,bo,bp}from"./index-CgwAo6pj.js";import{a as a_1,c as c_1,k,bn as bn_1,d,i,a_1 as a_1_1,r}from"./_baseUniq-DqA0xXry.js";
const w=bl(o => a_1(c_1(o,1,bm,true)));
const F="\0";
var a="\0";
const O="";

export class G {constructor(e={}){
  this._isDirected=Object.prototype.hasOwnProperty.call(e,"directed")?e.directed:true;
  this._isMultigraph=Object.prototype.hasOwnProperty.call(e,"multigraph")?e.multigraph:false;
  this._isCompound=Object.prototype.hasOwnProperty.call(e,"compound")?e.compound:false;
  this._label=void 0;
  this._defaultNodeLabelFn=bn(void 0);
  this._defaultEdgeLabelFn=bn(void 0);
  this._nodes={};

  if (this._isCompound) {
    this._parent={};
    this._children={};
    this._children[a]={};
  }

  this._in={};
  this._preds={};
  this._out={};
  this._sucs={};
  this._edgeObjs={};
  this._edgeLabels={};
}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){
  this._label=e;
  return this;
}graph(){return this._label}setDefaultNodeLabel(e){
  if (!bo(e)) {
    (e = bn(e));
  }

  this._defaultNodeLabelFn=e;
  return this;
}nodeCount(){return this._nodeCount}nodes(){return k(this._nodes);}sources(){const e=this;return bn_1(this.nodes(),t => bp(e._in[t]));}sinks(){const e=this;return bn_1(this.nodes(),t => bp(e._out[t]));}setNodes(e,t){
  const s=arguments;
  const i=this;
  d(e,r => {
    if (s.length>1) {
      i.setNode(r,t);
    } else {
      i.setNode(r);
    }
  });
  return this;
}setNode(e,t){return Object.prototype.hasOwnProperty.call(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=t),this):(this._nodes[e]=arguments.length>1?t:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=a,this._children[e]={},this._children[a][e]=true),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this);}node(e){return this._nodes[e]}hasNode(e){return Object.prototype.hasOwnProperty.call(this._nodes,e)}removeNode(e){if(Object.prototype.hasOwnProperty.call(this._nodes,e)){
  const t=s => this.removeEdge(this._edgeObjs[s]);
  delete this._nodes[e];

  if (this._isCompound) {
    this._removeFromParentsChildList(e);
    delete this._parent[e];
    d(this.children(e),s=>{this.setParent(s)});
    delete this._children[e];
  }

  d(k(this._in[e]),t);
  delete this._in[e];
  delete this._preds[e];
  d(k(this._out[e]),t);
  delete this._out[e];
  delete this._sucs[e];
  --this._nodeCount;
}return this}setParent(e,t){
  if (!this._isCompound) {
    throw new Error("Cannot set parent in a non-compound graph");
  }if (i(t)) {
    t=a;
  } else {t+="";for (let s=t; !i(s); s=this.parent(s)) {
    if (s===e) {
      throw new Error(`Setting ${t} as parent of ${e} would create a cycle`);
    }
  }this.setNode(t)}
  this.setNode(e);
  this._removeFromParentsChildList(e);
  this._parent[e]=t;
  this._children[t][e]=true;
  return this;
}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){const t=this._parent[e];if (t!==a) {
  return t
}}}children(e){
  if (i(e)) {
    (e = a);
  }

  if (this._isCompound) {const t=this._children[e];if (t) {
    return k(t);
  }} else {if (e===a) {
    return this.nodes();
  }if (this.hasNode(e)) {
    return[]
  }}
}predecessors(e){const t=this._preds[e];if (t) {
  return k(t);
}}successors(e){const t=this._sucs[e];if (t) {
  return k(t);
}}neighbors(e){const t=this.predecessors(e);if (t) {
  return w(t,this.successors(e))
}}isLeaf(e){
  let t;

  if (this.isDirected()) {
    t=this.successors(e);
  } else {
    t=this.neighbors(e);
  }

  return t.length===0;
}filterNodes(e){
  const t=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});t.setGraph(this.graph());const s=this;
  d(this._nodes,(n, h) => {
    if (e(h)) {
      t.setNode(h,n);
    }
  });
  d(this._edgeObjs,n => {
    if (t.hasNode(n.v)&&t.hasNode(n.w)) {
      t.setEdge(n,s.edge(n));
    }
  });
  const i={};function r(n){
    const h=s.parent(n);

    if (h===void 0||t.hasNode(h)) {
      i[n]=h;
      return h;
    }

    if (h in i) {
      return i[h];
    }

    return r(h);
  }

  if (this._isCompound) {
    d(t.nodes(),n => {t.setParent(n,r(n))});
  }

  return t;
}setDefaultEdgeLabel(e){
  if (!bo(e)) {
    (e = bn(e));
  }

  this._defaultEdgeLabelFn=e;
  return this;
}edgeCount(){return this._edgeCount}edges(){return a_1_1(this._edgeObjs);}setPath(e,t){
  const s=this;
  const i=arguments;

  r(e,(r, n) => {
    if (i.length>1) {
      s.setEdge(r,n,t);
    } else {
      s.setEdge(r,n);
    }

    return n;
  });

  return this;
}setEdge(...args) {
  let e;
  let t;
  let s;
  let i;
  let r=false;
  const n=args[0];

  if (typeof n=="object"&&n!==null&&"v"in n) {
    e=n.v;
    t=n.w;
    s=n.name;
    args.length===2&&(i=args[1],r=true);
  } else {
    e=n;
    t=args[1];
    s=args[3];
    args.length>2&&(i=args[2],r=true);
  }

  e=`${e}`;
  t=`${t}`;

  if (!i(s)) {
    (s = `${s}`);
  }

  const h=c(this._isDirected,e,t,s);if (Object.prototype.hasOwnProperty.call(this._edgeLabels,h)) {
    if (r) {
      (this._edgeLabels[h] = i);
    }

    return this;
  }if (!i(s)&&!this._isMultigraph) {
      throw new Error("Cannot set a named edge when isMultigraph = false");
    }
  this.setNode(e);
  this.setNode(t);
  this._edgeLabels[h]=r?i:this._defaultEdgeLabelFn(e,t,s);
  const u=M(this._isDirected,e,t,s);
  e=u.v;
  t=u.w;
  Object.freeze(u);
  this._edgeObjs[h]=u;
  y(this._preds[t],e);
  y(this._sucs[e],t);
  this._in[t][h]=u;
  this._out[e][h]=u;
  this._edgeCount++;
  return this;
}edge(e,t,s){const i=arguments.length===1?m(this._isDirected,arguments[0]):c(this._isDirected,e,t,s);return this._edgeLabels[i]}hasEdge(e,t,s){const i=arguments.length===1?m(this._isDirected,arguments[0]):c(this._isDirected,e,t,s);return Object.prototype.hasOwnProperty.call(this._edgeLabels,i)}removeEdge(e,t,s){
  const i=arguments.length===1?m(this._isDirected,arguments[0]):c(this._isDirected,e,t,s);
  const r=this._edgeObjs[i];

  if (r) {
    e=r.v;
    t=r.w;
    delete this._edgeLabels[i];
    delete this._edgeObjs[i];
    C(this._preds[t],e);
    C(this._sucs[e],t);
    delete this._in[t][i];
    delete this._out[e][i];
    this._edgeCount--;
  }

  return this;
}inEdges(e,t){const s=this._in[e];if(s){const i=a_1_1(s);return t?bn_1(i,r => r.v===t):i;}}outEdges(e,t){const s=this._out[e];if(s){const i=a_1_1(s);return t?bn_1(i,r => r.w===t):i;}}nodeEdges(e,t){const s=this.inEdges(e,t);if (s) {
  return s.concat(this.outEdges(e,t))
}}}
//# sourceMappingURL=graph-Cgx_UOHF.js.map

G.prototype._nodeCount=0;G.prototype._edgeCount=0;function y(o,e){
  if (o[e]) {
    o[e]++;
  } else {
    o[e]=1;
  }
}function C(o,e){
  if (!--o[e]) {
    delete o[e];
  }
}function c(o,e,t,s){
  let i=`${e}`;
  let r=`${t}`;
  if(!o&&i>r){
    const n=i;
    i=r;
    r=n;
  }return i+O+r+O+(i(s)?F:s);
}function M(o,e,t,s){
  let i=`${e}`;
  let r=`${t}`;
  if(!o&&i>r){
    const n=i;
    i=r;
    r=n;
  }const h={v:i,w:r};

  if (s) {
    (h.name = s);
  }

  return h;
}function m(o,e){return c(o,e.v,e.w,e.name)}export{G as G};
//# sourceMappingURL=graph-Cgx_UOHF.js.map
