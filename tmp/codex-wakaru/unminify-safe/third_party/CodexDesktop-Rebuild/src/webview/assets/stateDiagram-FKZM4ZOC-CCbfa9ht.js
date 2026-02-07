import{s,a,a9 as S_1}from"./chunk-DI55MBZ5-Kpnm4x_C.js";import{a2,a7,a8,a9,aa,ag,b1,b2,a_ as a_1,am}from"./index-CgwAo6pj.js";import{G as G_1}from"./graph-Cgx_UOHF.js";import{l}from"./layout-B0vNCuaA.js";import"./chunk-55IACEB6-BijZijHg.js";import"./chunk-QN33PNHL-CAvc2xVm.js";import"./_baseUniq-DqA0xXry.js";import"./_basePickBy-D-jIhBTu.js";

const X=a2(e => e.append("circle").attr("class","start-state").attr("r",a7().state.sizeUnit).attr("cx",a7().state.padding+a7().state.sizeUnit).attr("cy",a7().state.padding+a7().state.sizeUnit),"drawStartState");

const D=a2(e => e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",a7().state.textHeight).attr("class","divider").attr("x2",a7().state.textHeight*2).attr("y1",0).attr("y2",0),"drawDivider");

const Y=a2((e,i)=>{
  const d=e.append("text").attr("x",2*a7().state.padding).attr("y",a7().state.textHeight+2*a7().state.padding).attr("font-size",a7().state.fontSize).attr("class","state-title").text(i.id);
  const c=d.node().getBBox();
  e.insert("rect",":first-child").attr("x",a7().state.padding).attr("y",a7().state.padding).attr("width",c.width+2*a7().state.padding).attr("height",c.height+2*a7().state.padding).attr("rx",a7().state.radius);
  return d;
},"drawSimpleState");

const I=a2((e,i)=>{
  const d=a2((g, B, m) => {
    const E=g.append("tspan").attr("x",2*a7().state.padding).text(B);

    if (!m) {
      E.attr("dy",a7().state.textHeight);
    }
  },"addTspan");
  const n=e.append("text").attr("x",2*a7().state.padding).attr("y",a7().state.textHeight+1.3*a7().state.padding).attr("font-size",a7().state.fontSize).attr("class","state-title").text(i.descriptions[0]).node().getBBox();
  const l=n.height;
  const x=e.append("text").attr("x",a7().state.padding).attr("y",l+a7().state.padding*0.4/* .4 */+a7().state.dividerMargin+a7().state.textHeight).attr("class","state-description");
  let a=true;
  let s=true;
  i.descriptions.forEach(g => {
    if (!a) {
      d(x,g,s);
      s=false;
    }

    a=false;
  });
  const w=e.append("line").attr("x1",a7().state.padding).attr("y1",a7().state.padding+l+a7().state.dividerMargin/2).attr("y2",a7().state.padding+l+a7().state.dividerMargin/2).attr("class","descr-divider");
  const p=x.node().getBBox();
  const o=Math.max(p.width,n.width);
  w.attr("x2",o+3*a7().state.padding);
  e.insert("rect",":first-child").attr("x",a7().state.padding).attr("y",a7().state.padding).attr("width",o+2*a7().state.padding).attr("height",p.height+l+2*a7().state.padding).attr("rx",a7().state.radius);
  return e;
},"drawDescrState");

const $=a2((e,i,d)=>{
  const c=a7().state.padding;
  const n=2*a7().state.padding;
  const l=e.node().getBBox();
  const x=l.width;
  const a=l.x;
  const s=e.append("text").attr("x",0).attr("y",a7().state.titleShift).attr("font-size",a7().state.fontSize).attr("class","state-title").text(i.id);
  const p=s.node().getBBox().width+n;
  let o=Math.max(p,x);

  if (o===x) {
    (o = o+n);
  }

  let g;const B=e.node().getBBox();
  i.doc;
  g=a-c;

  if (p>x) {
    (g = (x-o)/2+c);
  }

  if (Math.abs(a-B.x)<c&&p>x) {
    (g = a-(p-x)/2);
  }

  const m=1-a7().state.textHeight;
  e.insert("rect",":first-child").attr("x",g).attr("y",m).attr("class",d?"alt-composit":"composit").attr("width",o).attr("height",B.height+a7().state.textHeight+a7().state.titleShift+1).attr("rx","0");
  s.attr("x",g+c);

  if (p<=x) {
    s.attr("x",a+(o-n)/2-p/2+c);
  }

  e.insert("rect",":first-child").attr("x",g).attr("y",a7().state.titleShift-a7().state.textHeight-a7().state.padding).attr("width",o).attr("height",a7().state.textHeight*3).attr("rx",a7().state.radius);
  e.insert("rect",":first-child").attr("x",g).attr("y",a7().state.titleShift-a7().state.textHeight-a7().state.padding).attr("width",o).attr("height",B.height+3+2*a7().state.textHeight).attr("rx",a7().state.radius);
  return e;
},"addTitleAndBox");

const q=a2(e => {
  e.append("circle").attr("class","end-state-outer").attr("r",a7().state.sizeUnit+a7().state.miniPadding).attr("cx",a7().state.padding+a7().state.sizeUnit+a7().state.miniPadding).attr("cy",a7().state.padding+a7().state.sizeUnit+a7().state.miniPadding);
  return e.append("circle").attr("class","end-state-inner").attr("r",a7().state.sizeUnit).attr("cx",a7().state.padding+a7().state.sizeUnit+2).attr("cy",a7().state.padding+a7().state.sizeUnit+2);
},"drawEndState");

const Z=a2((e,i)=>{
  let d=a7().state.forkWidth;
  let c=a7().state.forkHeight;
  if(i.parentId){
    let n=d;
    d=c;
    c=n;
  }return e.append("rect").style("stroke","black").style("fill","black").attr("width",d).attr("height",c).attr("x",a7().state.padding).attr("y",a7().state.padding);
},"drawForkJoinState");

const j=a2((e,i,d,c)=>{
  let n=0;const l=c.append("text");
  l.style("text-anchor","start");
  l.attr("class","noteText");
  let x=e.replace(/\r\n/g,"<br/>");x=x.replace(/\n/g,"<br/>");const a=x.split(ag.lineBreakRegex);let s=1.25*a7().state.noteMargin;for(const w of a){const p=w.trim();if(p.length>0){
    const o=l.append("tspan");
    o.text(p);

    if (s===0)
      {const g=o.node().getBBox();s+=g.height}

    n+=s;
    o.attr("x",i+a7().state.noteMargin);
    o.attr("y",d+n+1.25*a7().state.noteMargin);
  }}return{textWidth:l.node().getBBox().width,textHeight:n}
},"_drawLongText");

const K=a2((e,i)=>{
  i.attr("class","state-note");
  const d=i.append("rect").attr("x",0).attr("y",a7().state.padding);
  const c=i.append("g");
  const {textWidth,textHeight}=j(e,0,0,c);
  d.attr("height",textHeight+2*a7().state.noteMargin);
  d.attr("width",textWidth+a7().state.noteMargin*2);
  return d;
},"drawNote");

const L=a2((e, i) => {
  const d=i.id;
  const c={id:d,label:i.id,width:0,height:0};
  const n=e.append("g").attr("id",d).attr("class","stateGroup");

  if (i.type==="start") {
    X(n);
  }

  if (i.type==="end") {
    q(n);
  }

  if ((i.type==="fork" || i.type==="join")) {
    Z(n,i);
  }

  if (i.type==="note") {
    K(i.note.text,n);
  }

  if (i.type==="divider") {
    D(n);
  }

  if (i.type==="default"&&i.descriptions.length===0) {
    Y(n,i);
  }

  if (i.type==="default"&&i.descriptions.length>0) {
    I(n,i);
  }

  const l=n.node().getBBox();
  c.width=l.width+2*a7().state.padding;
  c.height=l.height+2*a7().state.padding;
  return c;
},"drawState");

let A=0;

const Q=a2((e, i, d) => {
  const c=a2(s => {switch(s){case S_1.relationType.AGGREGATION:
    {
      return"aggregation";
    }case S_1.relationType.EXTENSION:
    {
      return"extension";
    }case S_1.relationType.COMPOSITION:
    {
      return"composition";
    }case S_1.relationType.DEPENDENCY:
    {
      return"dependency"
    }}},"getRelationType");i.points=i.points.filter(s => !Number.isNaN(s.y));
  const n=i.points;
  const l=b1().x(s => s.x).y(s => s.y).curve(b2);
  const x=e.append("path").attr("d",l(n)).attr("id",`edge${A}`).attr("class","transition");
  let a="";

  if (a7().state.arrowMarkerAbsolute) {
    (a = a_1(true));
  }

  x.attr("marker-end",`url(${a}#${c(S_1.relationType.DEPENDENCY)}End)`);

  if (d.title!==void 0) {
    const s=e.append("g").attr("class","stateLabel");
    const {x: x_1,y}=am.calcLabelPosition(i.points);
    const o=ag.getRows(d.title);
    let g=0;const B=[];
    let m=0;
    let E=0;
    for(let u=0;u<=o.length;u++){
      const h=s.append("text").attr("text-anchor","middle").text(o[u]).attr("x",x_1).attr("y",y+g);
      const y=h.node().getBBox();
      m=Math.max(m,y.width);
      E=Math.min(E,y.x);
      a9.info(y.x,x_1,y+g);

      if (g===0) {
        g=h.node().getBBox().height;
        a9.info("Title height",g,y);
      }

      B.push(h);
    }let k=g*o.length;if(o.length>1){
      const u=(o.length-1)*g*0.5/* .5 */;

      B.forEach((h, y) => h.attr("y",y+y*g-u));

      k=g*o.length;
    }const r=s.node().getBBox();
    s.insert("rect",":first-child").attr("class","box").attr("x",x_1-m/2-a7().state.padding/2).attr("y",y-k/2-a7().state.padding/2-3.5).attr("width",m+a7().state.padding).attr("height",k+a7().state.padding);
    a9.info(r);
  }

  A++
},"drawEdge");

let b;
const T={};
const V=a2(() => {},"setConf");
const tt=a2(e => {e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"insertMarkers");

const et=a2((e, i, d, c) => {
  b=a7().state;const n=a7().securityLevel;let l;

  if (n==="sandbox") {
    (l = a8(`#i${i}`));
  }

  const x=n==="sandbox"?a8(l.nodes()[0].contentDocument.body):a8("body");
  const a=n==="sandbox"?l.nodes()[0].contentDocument:document;
  a9.debug(`Rendering diagram ${e}`);const s=x.select(`[id='${i}']`);tt(s);const w=c.db.getRootDoc();G(w,s,void 0,false,x,a,c);
  const p=b.padding;
  const o=s.node().getBBox();
  const g=o.width+p*2;
  const B=o.height+p*2;
  const m=g*1.75;
  aa(s,B,m,b.useMaxWidth);
  s.attr("viewBox",`${`${o.x-b.padding}  ${o.y-b.padding} `+g} ${B}`);
},"draw");

const at=a2(e => e?e.length*b.fontSizeFactor:1,"getLabelWidth");

var G=a2((e,i,d,c,n,l,x)=>{
  const a=new G_1({compound:true,multigraph:true});
  let s;
  let w=true;
  for (s=0; s<e.length; s++) {
    if(e[s].stmt==="relation"){w=false;break}
  }

  if (d) {
    a.setGraph({rankdir:"LR",multigraph:true,compound:true,ranker:"tight-tree",ranksep:w?1:b.edgeLengthFactor,nodeSep:w?1:50,isMultiGraph:true});
  } else {
    a.setGraph({rankdir:"TB",multigraph:true,compound:true,ranksep:w?1:b.edgeLengthFactor,nodeSep:w?1:50,ranker:"tight-tree",isMultiGraph:true});
  }

  a.setDefaultEdgeLabel(() => ({}));
  const p=x.db.getStates();
  const o=x.db.getRelations();
  const g=Object.keys(p);
  for(const r of g){
    const u=p[r];

    if (d) {
      (u.parentId = d);
    }

    let h;if (u.doc) {let y=i.append("g").attr("id",u.id).attr("class","stateGroup");h=G(u.doc,y,u.id,!c,n,l,x);{
      y=$(y,u,c);let v=y.node().getBBox();
      h.width=v.width;
      h.height=v.height+b.padding/2;
      T[u.id]={y:b.compositTitleSize};
    }} else {
      h=L(i,u,a);
    }if (u.note) {
      const y={descriptions:[],id:`${u.id}-note`,note:u.note,type:"note"};
      const v=L(i,y,a);

      if (u.note.position==="left of") {
        a.setNode(`${h.id}-note`,v);
        a.setNode(h.id,h);
      } else {
        a.setNode(h.id,h);
        a.setNode(`${h.id}-note`,v);
      }

      a.setParent(h.id,`${h.id}-group`);
      a.setParent(`${h.id}-note`,`${h.id}-group`);
    } else {
      a.setNode(h.id,h)
    }
  }a9.debug("Count=",a.nodeCount(),a);let B=0;

  o.forEach(r => {
    B++;
    a9.debug("Setting edge",r);
    a.setEdge(r.id1,r.id2,{relation:r,width:at(r.title),height:b.labelHeight*ag.getRows(r.title).length,labelpos:"c"},`id${B}`);
  });

  l(a);
  a9.debug("Graph after layout",a.nodes());
  const m=i.node();a.nodes().forEach(r => {
    if (r!==void 0&&a.node(r)!==void 0) {
      a9.warn(`Node ${r}: ${JSON.stringify(a.node(r))}`);
      n.select(`#${m.id} #${r}`).attr("transform",`translate(${a.node(r).x-a.node(r).width/2},${a.node(r).y+(T[r]?T[r].y:0)-a.node(r).height/2} )`);
      n.select(`#${m.id} #${r}`).attr("data-x-shift",a.node(r).x-a.node(r).width/2);

      l.querySelectorAll(`#${m.id} #${r} .divider`).forEach(h=>{
        const y=h.parentElement;
        let v=0;
        let M=0;

        if (y) {
          y.parentElement&&(v=y.parentElement.getBBox().width);
          M=parseInt(y.getAttribute("data-x-shift"),10);
          Number.isNaN(M)&&(M=0);
        }

        h.setAttribute("x1",0-M+8);
        h.setAttribute("x2",v-M-8);
      });
    } else {
      a9.debug(`No Node ${r}: ${JSON.stringify(a.node(r))}`);
    }
  });let E=m.getBBox();
  a.edges().forEach(r => {
    if (r!==void 0&&a.edge(r)!==void 0) {
      a9.debug(`Edge ${r.v} -> ${r.w}: ${JSON.stringify(a.edge(r))}`);
      Q(i,a.edge(r),a.edge(r).relation);
    }
  });
  E=m.getBBox();
  const k={id:d||"root",label:d||"root",width:0,height:0};
  k.width=E.width+2*b.padding;
  k.height=E.height+2*b.padding;
  a9.debug("Doc rendered",k,a);
  return k;
},"renderDoc");

const it={setConf:V,draw:et};

export const diagram = {parser:a,get db() {return new S_1(1);},renderer:it,styles:s,init:a2(e=>{
  if (!e.state) {
    (e.state = {});
  }

  e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute;
},"init")};
//# sourceMappingURL=stateDiagram-FKZM4ZOC-CCbfa9ht.js.map

export{diagram as diagram};
//# sourceMappingURL=stateDiagram-FKZM4ZOC-CCbfa9ht.js.map
