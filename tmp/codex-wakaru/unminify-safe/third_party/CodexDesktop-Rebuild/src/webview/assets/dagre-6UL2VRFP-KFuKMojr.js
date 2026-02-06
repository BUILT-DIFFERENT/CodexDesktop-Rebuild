import{a2,bq,br,bs,bt,a9,a7,bu,bv,bc,bh,bd,bb,bw,bx,by}from"./index-CgwAo6pj.js";import{G as G_1}from"./graph-Cgx_UOHF.js";import{l}from"./layout-B0vNCuaA.js";import{i}from"./_baseUniq-DqA0xXry.js";import{c}from"./clone-M7Y9qM5V.js";import{m}from"./_basePickBy-D-jIhBTu.js";function h(e){
 const t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:ee(e),edges:ne(e)};

 if (!i(e.graph())) {
  (t.value = c(e.graph()));
 }

 return t;
}function ee(e){return m(e.nodes(),t => {
 const n=e.node(t);
 const a=e.parent(t);
 const i={v:t};

 if (!i(n)) {
  (i.value = n);
 }

 if (!i(a)) {
  (i.parent = a);
 }

 return i;
});}function ne(e){return m(e.edges(),t => {
 const n=e.edge(t);
 const a={v:t.v,w:t.w};

 if (!i(t.name)) {
  (a.name = t.name);
 }

 if (!i(n)) {
  (a.value = n);
 }

 return a;
});}
const d=new Map;
const X=new Map;
const J=new Map;

const te=a2(()=>{
 X.clear();
 J.clear();
 d.clear();
},"clear");

const D=a2((e,t)=>{
 const n=X.get(t)||[];
 a9.trace("In isDescendant",t," ",e," = ",n.includes(e));
 return n.includes(e);
},"isDescendant");

const se=a2((e,t)=>{
 const n=X.get(t)||[];
 a9.info("Descendants of ",t," is ",n);
 a9.info("Edge is ",e);
 return e.v===t||e.w===t?false:n?n.includes(e.v)||D(e.v,t)||D(e.w,t)||n.includes(e.w):(a9.debug("Tilt, ",t,",not in descendants"),false);
},"edgeInCluster");

var G=a2((e,t,n,a)=>{
 a9.warn("Copying children of ",e,"root",a,"data",t.node(e),a);const i=t.children(e)||[];

 if (e!==a) {
  i.push(e);
 }

 a9.warn("Copying (nodes) clusterId",e,"nodes",i);

 i.forEach(o=>{
  if (t.children(o).length>0) {
   G(o,t,n,a);
  } else {
   const l=t.node(o);
   a9.info("cp ",o," to ",a," with parent ",e);
   n.setNode(o,l);

   if (a!==t.parent(o)) {
    a9.warn("Setting parent",o,t.parent(o));
    n.setParent(o,t.parent(o));
   }

   if (e!==a&&o!==e) {
    a9.debug("Setting parent",o,e);
    n.setParent(o,e);
   } else {
    a9.info("In copy ",e,"root",a,"data",t.node(e),a);
    a9.debug("Not Setting parent for node=",o,"cluster!==rootId",e!==a,"node!==clusterId",o!==e);
   }

   const u=t.edges(o);
   a9.debug("Copying Edges",u);
   u.forEach(c=>{a9.info("Edge",c);const m=t.edge(c.v,c.w,c.name);a9.info("Edge data",m,a);try{
    if (se(c,a)) {
     a9.info("Copying as ",c.v,c.w,m,c.name);
     n.setEdge(c.v,c.w,m,c.name);
     a9.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]));
    } else {
     a9.info("Skipping copy of edge ",c.v,"-->",c.w," rootId: ",a," clusterId:",e);
    }
   }catch(v){a9.error(v)}});
  }
  a9.debug("Removing node",o);
  t.removeNode(o);
 });
},"copy");

const R=a2((e,t)=>{const n=t.children(e);let a=[...n];for (const i of n) {
 J.set(i,e);
 a=[...a,...R(i,t)];
}return a},"extractDescendants");

const re=a2((e,t,n)=>{
 const a=e.edges().filter(c => c.v===t||c.w===t);

 const i=e.edges().filter(c => c.v===n||c.w===n);

 const o=a.map(c => ({
  v:c.v===t?n:c.v,
  w:c.w===t?t:c.w
 }));

 const l=i.map(c => ({
  v:c.v,
  w:c.w
 }));

 return o.filter(c => l.some(m => c.v===m.v&&c.w===m.w));
},"findCommonEdges");

const C=a2((e,t,n)=>{
 const a=t.children(e);
 a9.trace("Searching children of id ",e,a);

 if (a.length<1) {
  return e;
 }

 let i;for(const o of a){
  const l=C(o,t,n);
  const u=re(t,n,l);
  if (l) {
   if (u.length>0) {
    i=l;
   } else {
    return l
   }
  }
 }return i
},"findNonClusterChild");

const k=a2(e => !d.has(e)||!d.get(e).externalConnections?e:d.has(e)?d.get(e).id:e,"getAnchorId");

const ie=a2((e,t)=>{
 if (!e||t>10)
  {a9.debug("Opting out, no graph ");return} else {
  a9.debug("Opting in, graph ");
 }
 e.nodes().forEach(n => {
  if (e.children(n).length>0) {
   a9.warn("Cluster identified",n," Replacement id in edges: ",C(n,e,n));
   X.set(n,R(n,e));
   d.set(n,{id:C(n,e,n),clusterData:e.node(n)});
  }
 });

 e.nodes().forEach(n => {
  const a=e.children(n);
  const i=e.edges();

  if (a.length>0) {
   a9.debug("Cluster identified",n,X);

   i.forEach(o=>{
    const l=D(o.v,n);
    const u=D(o.w,n);

    if (l^u) {
     a9.warn("Edge: ",o," leaves cluster ",n);
     a9.warn("Descendants of XXX ",n,": ",X.get(n));
     d.get(n).externalConnections=true;
    }
   });
  } else {
   a9.debug("Not a cluster ",n,X);
  }
 });

 for(let n of d.keys()){
  const a=d.get(n).id;
  const i=e.parent(a);

  if (i!==n&&d.has(i)&&!d.get(i).externalConnections) {
   (d.get(n).id = i);
  }
 }

 e.edges().forEach(n => {
  const a=e.edge(n);
  a9.warn(`Edge ${n.v} -> ${n.w}: ${JSON.stringify(n)}`);
  a9.warn(`Edge ${n.v} -> ${n.w}: ${JSON.stringify(e.edge(n))}`);
  let i=n.v;
  let o=n.w;
  a9.warn("Fix XXX",d,"ids:",n.v,n.w,"Translating: ",d.get(n.v)," --- ",d.get(n.w));

  if (d.get(n.v)||d.get(n.w)) {
   a9.warn("Fixing and trying - removing XXX",n.v,n.w,n.name);
   i=k(n.v);
   o=k(n.w);
   e.removeEdge(n.v,n.w,n.name);

   if (i!==n.v) {
    const l=e.parent(i);
    d.get(l).externalConnections=true;
    a.fromCluster=n.v;
   }

   if(o!==n.w){
    const l=e.parent(o);
    d.get(l).externalConnections=true;
    a.toCluster=n.w;
   }
   a9.warn("Fix Replacing with XXX",i,o,n.name);
   e.setEdge(i,o,a,n.name);
  }
 });

 a9.warn("Adjusted Graph",h(e));
 T(e,0);
 a9.trace(d);
},"adjustClustersAndEdges");

var T=a2((e,t)=>{
 a9.warn("extractor - ",t,h(e),e.children("D"));

 if (t>10)
  {a9.error("Bailing out");return}

 let n=e.nodes();
 let a=false;
 for(const i of n){const o=e.children(i);a=a||o.length>0}if(!a){a9.debug("Done, no node has children",e.nodes());return}a9.debug("Nodes = ",n,t);for (const i of n) {
  a9.debug("Extracting node",i,d,d.has(i)&&!d.get(i).externalConnections,!e.parent(i),e.node(i),e.children("D")," Depth ",t);

  if (!d.has(i)) {
   a9.debug("Not a cluster",i,t);
  } else if (!d.get(i).externalConnections&&e.children(i)&&e.children(i).length>0) {
   a9.warn("Cluster without external connections, without a parent and with children",i,t);let l=e.graph().rankdir==="TB"?"LR":"TB";

   if (d.get(i)?.clusterData?.dir) {
    l=d.get(i).clusterData.dir;
    a9.warn("Fixing dir",d.get(i).clusterData.dir,l);
   }

   const u=new G_1({multigraph:true,compound:true}).setGraph({rankdir:l,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel(() => ({}));
   a9.warn("Old graph before copy",h(e));
   G(i,e,u,i);
   e.setNode(i,{clusterNode:true,id:i,clusterData:d.get(i).clusterData,label:d.get(i).label,graph:u});
   a9.warn("New graph after copy node: (",i,")",h(u));
   a9.debug("Old graph after copy",h(e));
  } else {
   a9.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!d.get(i).externalConnections," no parent: ",!e.parent(i)," children ",e.children(i)&&e.children(i).length>0,e.children("D"),t);
   a9.debug(d);
  }
 }
 n=e.nodes();
 a9.warn("New list of nodes",n);
 for(const i of n){
  const o=e.node(i);
  a9.warn(" Now next level",i,o);

  if (o?.clusterNode) {
   T(o.graph,t+1);
  }
 }
},"extractor");

const M=a2((e,t)=>{
 if (t.length===0) {
  return[];
 }let n=Object.assign([],t);

 t.forEach(a=>{
  const i=e.children(a);
  const o=M(e,i);
  n=[...n,...o]
 });

 return n;
},"sorter");

const oe=a2(e => M(e,e.children()),"sortNodesByHierarchy");

const j=a2(async(e,t,n,a,i,o)=>{
 a9.warn("Graph in recursive render:XAX",h(t),i);const l=t.graph().rankdir;a9.trace("Dir in recursive render - dir:",l);const u=e.insert("g").attr("class","root");

 if (t.nodes()) {
  a9.info("Recursive render XXX",t.nodes());
 } else {
  a9.info("No nodes found for",t);
 }

 if (t.edges().length>0) {
  a9.info("Recursive edges",t.edge(t.edges()[0]));
 }

 const c=u.insert("g").attr("class","clusters");
 const m=u.insert("g").attr("class","edgePaths");
 const v=u.insert("g").attr("class","edgeLabels");
 const b=u.insert("g").attr("class","nodes");

 await Promise.all(t.nodes().map(async f => {
  const s=t.node(f);if(i!==void 0){
  const g=JSON.parse(JSON.stringify(i.clusterData));

  a9.trace(`Setting data for parent cluster XXX
   Node.id = `,f,`
   data=`,g.height,`
  Parent cluster`,i.height);

  t.setNode(i.id,g);

  if (!t.parent(f)) {
   a9.trace("Setting parent",f,i.id);
   t.setParent(f,i.id,g);
  }
 }
  a9.info(`(Insert) Node XXX${f}: ${JSON.stringify(t.node(f))}`);

  if (s?.clusterNode) {
   a9.info("Cluster identified XBX",f,s.width,t.node(f));const{ranksep,nodesep}=t.graph();s.graph.setGraph({...s.graph.graph(),ranksep:ranksep+25,nodesep:nodesep});
   const E=await j(b,s.graph,n,a,t.node(f),o);
   const x=E.elem;
   bu(s,x);
   s.diff=E.diff||0;
   a9.info("New compound node after recursive render XAX",f,"width",s.width,"height",s.height);
   bv(x,s);
  } else {
   if (t.children(f).length>0) {
    a9.trace("Cluster - the non recursive path XBX",f,s.id,s,s.width,"Graph:",t);
    a9.trace(C(s.id,t));
    d.set(s.id,{id:C(s.id,t),node:s});
   } else {
    a9.trace("Node - the non recursive path XAX",f,b,t.node(f),l);
    await bc(b,t.node(f),{config:o,dir:l});
   }
  }
 }));

 await a2(async()=>{const f=t.edges().map(async s => {
  const g=t.edge(s.v,s.w,s.name);
  a9.info(`Edge ${s.v} -> ${s.w}: ${JSON.stringify(s)}`);
  a9.info(`Edge ${s.v} -> ${s.w}: `,s," ",JSON.stringify(t.edge(s)));
  a9.info("Fix",d,"ids:",s.v,s.w,"Translating: ",d.get(s.v),d.get(s.w));
  await by(v,g);
 });await Promise.all(f)},"processEdges")();

 a9.info("Graph before layout:",JSON.stringify(h(t)));
 a9.info("############################################# XXX");
 a9.info("###                Layout                 ### XXX");
 a9.info("############################################# XXX");
 l(t);
 a9.info("Graph after layout:",JSON.stringify(h(t)));
 let O=0;
 let {subGraphTitleTotalMargin}=bh(o);

 await Promise.all(oe(t).map(async f => {
  const s=t.node(f);
  a9.info(`Position XBX => ${f}: (${s.x}`,`,${s.y}`,") width: ",s.width," height: ",s.height);

  if (s?.clusterNode) {
   s.y+=subGraphTitleTotalMargin;
   a9.info("A tainted cluster node XBX1",f,s.id,s.width,s.height,s.x,s.y,t.parent(f));
   d.get(s.id).node=s;
   bd(s);
  } else if(t.children(f).length>0){
   a9.info("A pure cluster node XBX1",f,s.id,s.x,s.y,s.width,s.height,t.parent(f));
   s.height+=subGraphTitleTotalMargin;
   t.node(s.parentId);
   const g=s?.padding/2||0;
   const p=s?.labelBBox?.height||0;
   const E=p-g||0;
   a9.debug("OffsetY",E,"labelHeight",p,"halfPadding",g);
   await bb(c,s);
   d.get(s.id).node=s;
  }else{
   const g=t.node(s.parentId);
   s.y+=subGraphTitleTotalMargin/2;
   a9.info("A regular node XBX1 - using the padding",s.id,"parent",s.parentId,s.width,s.height,s.x,s.y,"offsetY",s.offsetY,"parent",g,g?.offsetY,s);
   bd(s);
  }
 }));

 t.edges().forEach(f => {
  const s=t.edge(f);
  a9.info(`Edge ${f.v} -> ${f.w}: ${JSON.stringify(s)}`,s);

  s.points.forEach(x => x.y+=subGraphTitleTotalMargin/2);

  const g=t.node(f.v);const p=t.node(f.w);const E=bw(m,s,d,n,g,p,a);bx(s,E)
 });

 t.nodes().forEach(f => {
  const s=t.node(f);
  a9.info(f,s.type,s.diff);

  if (s.isGroup) {
   (O = s.diff);
  }
 });

 a9.warn("Returning from recursive render XAX",u,O);
 return {elem:u,diff:O};
},"recursiveRender");

export const render = a2(async(e,t)=>{
 const n=new G_1({multigraph:true,compound:true}).setGraph({rankdir:e.direction,nodesep:e.config?.nodeSpacing||e.config?.flowchart?.nodeSpacing||e.nodeSpacing,ranksep:e.config?.rankSpacing||e.config?.flowchart?.rankSpacing||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel(() => ({}));
 const a=t.select("g");
 bq(a,e.markers,e.type,e.diagramId);
 br();
 bs();
 bt();
 te();

 e.nodes.forEach(o=>{
  n.setNode(o.id,{...o});

  if (o.parentId) {
   n.setParent(o.id,o.parentId);
  }
 });

 a9.debug("Edges:",e.edges);

 e.edges.forEach(o=>{if (o.start===o.end) {
  const l=o.start;
  const u=`${l}---${l}---1`;
  const c=`${l}---${l}---2`;
  const m=n.node(l);
  n.setNode(u,{domId:u,id:u,parentId:m.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10});
  n.setParent(u,m.parentId);
  n.setNode(c,{domId:c,id:c,parentId:m.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10});
  n.setParent(c,m.parentId);
  const v=structuredClone(o);
  const b=structuredClone(o);
  const y=structuredClone(o);
  v.label="";
  v.arrowTypeEnd="none";
  v.id=`${l}-cyclic-special-1`;
  b.arrowTypeStart="none";
  b.arrowTypeEnd="none";
  b.id=`${l}-cyclic-special-mid`;
  y.label="";

  if (m.isGroup) {
   v.fromCluster=l;
   y.toCluster=l;
  }

  y.id=`${l}-cyclic-special-2`;
  y.arrowTypeStart="none";
  n.setEdge(l,u,v,`${l}-cyclic-special-0`);
  n.setEdge(u,c,b,`${l}-cyclic-special-1`);
  n.setEdge(c,l,y,`${l}-cyc<lic-special-2`);
 } else {
  n.setEdge(o.start,o.end,{...o},o.id)
 }});

 a9.warn("Graph at first:",JSON.stringify(h(n)));
 ie(n);
 a9.warn("Graph after XAX:",JSON.stringify(h(n)));
 const i=a7();await j(a,n,e.type,e.diagramId,void 0,i)
},"render");
//# sourceMappingURL=dagre-6UL2VRFP-KFuKMojr.js.map

export{render as render};
//# sourceMappingURL=dagre-6UL2VRFP-KFuKMojr.js.map
