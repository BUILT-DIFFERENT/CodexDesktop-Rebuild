import{g}from"./chunk-FMBD7UC4-DiMn5Uua.js";import{a2,aj,a9,a7,a8,ak,al,am,a6,a3,an,a5,a4,ao,ag,ap,aq,ar,as,at,au,av}from"./index-CgwAo6pj.js";import{g as g_1}from"./chunk-55IACEB6-BijZijHg.js";import{s}from"./chunk-QN33PNHL-CAvc2xVm.js";import{c}from"./channel-BpsdF4dx.js";
const de="flowchart-";
let G1;

G1=class{constructor(){
  this.vertexCounter=0;
  this.config=a7();
  this.vertices=new Map;
  this.edges=[];
  this.classes=new Map;
  this.subGraphs=[];
  this.subGraphLookup=new Map;
  this.tooltips=new Map;
  this.subCount=0;
  this.firstGraphFlag=true;
  this.secCount=-1;
  this.posCrossRef=[];
  this.funs=[];
  this.setAccTitle=a6;
  this.setAccDescription=a3;
  this.setDiagramTitle=an;
  this.getAccTitle=a5;
  this.getAccDescription=a4;
  this.getDiagramTitle=ao;
  this.funs.push(this.setupToolTips.bind(this));
  this.addVertex=this.addVertex.bind(this);
  this.firstGraph=this.firstGraph.bind(this);
  this.setDirection=this.setDirection.bind(this);
  this.addSubGraph=this.addSubGraph.bind(this);
  this.addLink=this.addLink.bind(this);
  this.setLink=this.setLink.bind(this);
  this.updateLink=this.updateLink.bind(this);
  this.addClass=this.addClass.bind(this);
  this.setClass=this.setClass.bind(this);
  this.destructLink=this.destructLink.bind(this);
  this.setClickEvent=this.setClickEvent.bind(this);
  this.setTooltip=this.setTooltip.bind(this);
  this.updateLinkInterpolate=this.updateLinkInterpolate.bind(this);
  this.setClickFun=this.setClickFun.bind(this);
  this.bindFunctions=this.bindFunctions.bind(this);
  this.lex={firstGraph:this.firstGraph.bind(this)};
  this.clear();
  this.setGen("gen-2");
}sanitizeText(i){return ag.sanitizeText(i,this.config);}lookUpDomId(i){for (const r of this.vertices.values()) {
  if (r.id===i) {
    return r.domId;
  }
}return i}addVertex(i,r,a,n,l,g,c={},b){
  if (!i||i.trim().length===0) {
    return;
  }let u;if(b!==void 0){
    let k;

    if (b.includes(`
    `)) {
      k=b+`
      `;
    } else {
      k=`{
      `+b+`
      }`;
    }

    u=ap(k,{schema:aq});
  }const A=this.edges.find(k => k.id===i);if(A){
    const k=u;

    if (k?.animate!==void 0) {
      (A.animate = k.animate);
    }

    if (k?.animation!==void 0) {
      (A.animation = k.animation);
    }

    if (k?.curve!==void 0) {
      (A.interpolate = k.curve);
    }

    return
  }
  let y;
  let f=this.vertices.get(i);

  if (f===void 0) {
    f={id:i,labelType:"text",domId:`${de+i}-${this.vertexCounter}`,styles:[],classes:[]};
    this.vertices.set(i,f);
  }

  this.vertexCounter++;

  if (r!==void 0) {
    this.config=a7();
    y=this.sanitizeText(r.text.trim());
    f.labelType=r.type;
    y.startsWith('"')&&y.endsWith('"')&&(y=y.substring(1,y.length-1));
    f.text=y;
  } else if (f.text===void 0) {
    (f.text = i);
  }

  if (a!==void 0) {
    (f.type = a);
  }

  n?.forEach(k=>{f.styles.push(k)});
  l?.forEach(k=>{f.classes.push(k)});

  if (g!==void 0) {
    (f.dir = g);
  }

  if (f.props===void 0) {
    f.props=c;
  } else if (c!==void 0) {
    Object.assign(f.props,c);
  }

  if (u!==void 0) {
    if(u.shape){if (u.shape!==u.shape.toLowerCase()||u.shape.includes("_")) {
      throw new Error(`No such shape: ${u.shape}. Shape names should be lowercase.`);
    }if (!ar(u.shape)) {
      throw new Error(`No such shape: ${u.shape}.`);
    }f.type=u?.shape}

    if (u?.label) {
      (f.text = u?.label);
    }

    if (u?.icon) {
      f.icon=u?.icon;
      !u.label?.trim()&&f.text===i&&(f.text="");
    }

    if (u?.form) {
      (f.form = u?.form);
    }

    if (u?.pos) {
      (f.pos = u?.pos);
    }

    if (u?.img) {
      f.img=u?.img;
      !u.label?.trim()&&f.text===i&&(f.text="");
    }

    if (u?.constraint) {
      (f.constraint = u.constraint);
    }

    if (u.w) {
      (f.assetWidth = Number(u.w));
    }

    if (u.h) {
      (f.assetHeight = Number(u.h));
    }
  }
}addSingleLink(i,r,a,n){
  const c={start:i,end:r,type:void 0,text:"",labelType:"text",classes:[],isUserDefinedId:false,interpolate:this.edges.defaultInterpolate};a9.info("abc78 Got edge...",c);const b=a.text;

  if (b!==void 0) {
    c.text=this.sanitizeText(b.text.trim());
    c.text.startsWith('"')&&c.text.endsWith('"')&&(c.text=c.text.substring(1,c.text.length-1));
    c.labelType=b.type;
  }

  if (a!==void 0) {
    c.type=a.type;
    c.stroke=a.stroke;
    c.length=a.length>10?10:a.length;
  }

  if (n&&!this.edges.some(u => u.id===n)) {
    c.id=n;
    c.isUserDefinedId=true;
  } else {
    const u=this.edges.filter(A => A.start===c.start&&A.end===c.end);

    if (u.length===0) {
      c.id=as(c.start,c.end,{counter:0,prefix:"L"});
    } else {
      c.id=as(c.start,c.end,{counter:u.length+1,prefix:"L"});
    }
  }

  if (this.edges.length<(this.config.maxEdges??500)) {
    a9.info("Pushing edge...");
    this.edges.push(c);
  } else {
    throw new Error(`Edge limit exceeded. ${this.edges.length} edges found, but the limit is ${this.config.maxEdges}.

    Initialize mermaid with maxEdges set to a higher number to allow more edges.
    You cannot set this config via configuration inside the diagram as it is a secure config.
    You have to call mermaid.initialize.`)
  }
}isLinkData(i){return i!==null&&typeof i=="object"&&"id"in i&&typeof i.id=="string"}addLink(i,r,a){const n=this.isLinkData(a)?a.id.replace("@",""):void 0;a9.info("addLink",i,r,n);for (const l of i) {
  for(const g of r){
    const c=l===i[i.length-1];
    const b=g===r[0];

    if (c&&b) {
      this.addSingleLink(l,g,a,n);
    } else {
      this.addSingleLink(l,g,a,void 0);
    }
  }
}}updateLinkInterpolate(i,r){i.forEach(a=>{
  if (a==="default") {
    this.edges.defaultInterpolate=r;
  } else {
    this.edges[a].interpolate=r;
  }
})}updateLink(i,r){i.forEach(a=>{
  if (typeof a=="number"&&a>=this.edges.length) {
    throw new Error(`The index ${a} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${this.edges.length-1}. (Help: Ensure that the index is within the range of existing edges.)`);
  }

  if (a==="default") {
    this.edges.defaultStyle=r;
  } else {
    this.edges[a].style=r;
    (this.edges[a]?.style?.length??0)>0&&!this.edges[a]?.style?.some(n => n?.startsWith("fill"))&&this.edges[a]?.style?.push("fill:none");
  }
})}addClass(i,r){const a=r.join().replace(/\\,/g,"§§§").replace(/,/g,";").replace(/§§§/g,",").split(";");i.split(",").forEach(n=>{
  let l=this.classes.get(n);

  if (l===void 0) {
    l={id:n,styles:[],textStyles:[]};
    this.classes.set(n,l);
  }

  a?.forEach(g=>{if(/color/.exec(g)){const c=g.replace("fill","bgFill");l.textStyles.push(c)}l.styles.push(g)});
})}setDirection(i){
  this.direction=i.trim();

  if (/.*</.exec(this.direction)) {
    (this.direction = "RL");
  }

  if (/.*\^/.exec(this.direction)) {
    (this.direction = "BT");
  }

  if (/.*>/.exec(this.direction)) {
    (this.direction = "LR");
  }

  if (/.*v/.exec(this.direction)) {
    (this.direction = "TB");
  }

  if (this.direction==="TD") {
    (this.direction = "TB");
  }
}setClass(i,r){for(const a of i.split(",")){
  const n=this.vertices.get(a);

  if (n) {
    n.classes.push(r);
  }

  const l=this.edges.find(c => c.id===a);

  if (l) {
    l.classes.push(r);
  }

  const g=this.subGraphLookup.get(a);

  if (g) {
    g.classes.push(r);
  }
}}setTooltip(i,r){if(r!==void 0){r=this.sanitizeText(r);for (const a of i.split(",")) {
  this.tooltips.set(this.version==="gen-1"?this.lookUpDomId(a):a,r)
}}}setClickFun(i,r,a){
  const n=this.lookUpDomId(i);if (a7().securityLevel!=="loose"||r===void 0) {
    return;
  }let l=[];if(typeof a=="string"){l=a.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let c=0;c<l.length;c++){
    let b=l[c].trim();

    if (b.startsWith('"')&&b.endsWith('"')) {
      (b = b.substr(1,b.length-2));
    }

    l[c]=b;
  }}

  if (l.length===0) {
    l.push(i);
  }

  const g=this.vertices.get(i);

  if (g) {
    g.haveCallback=true;

    this.funs.push(()=>{
      const c=document.querySelector(`[id="${n}"]`);

      if (c!==null) {
        c.addEventListener("click",()=>{am.runFunc(r,...l)},false);
      }
    });
  }
}setLink(i,r,a){
  i.split(",").forEach(n=>{
    const l=this.vertices.get(n);

    if (l!==void 0) {
      l.link=am.formatUrl(r,this.config);
      l.linkTarget=a;
    }
  });
  this.setClass(i,"clickable");
}getTooltip(i){return this.tooltips.get(i)}setClickEvent(i,r,a){
  i.split(",").forEach(n=>{this.setClickFun(n,r,a)});
  this.setClass(i,"clickable");
}bindFunctions(i){this.funs.forEach(r=>{r(i)})}getDirection(){return this.direction?.trim()}getVertices(){return this.vertices}getEdges(){return this.edges}getClasses(){return this.classes}setupToolTips(i){
  let r=a8(".mermaidTooltip");

  if ((r._groups||r)[0][0]===null) {
    (r = a8("body").append("div").attr("class","mermaidTooltip").style("opacity",0));
  }

  a8(i).select("svg").selectAll("g.node").on("mouseover",l=>{
    const g=a8(l.currentTarget);if (g.attr("title")===null) {
      return;
    }const b=l.currentTarget?.getBoundingClientRect();
    r.transition().duration(200).style("opacity",".9");
    r.text(g.attr("title")).style("left",`${window.scrollX+b.left+(b.right-b.left)/2}px`).style("top",`${window.scrollY+b.bottom}px`);
    r.html(r.html().replace(/&lt;br\/&gt;/g,"<br/>"));
    g.classed("hover",true);
  }).on("mouseout",l=>{
    r.transition().duration(500).style("opacity",0);
    a8(l.currentTarget).classed("hover",false);
  });
}clear(i="gen-2"){
  this.vertices=new Map;
  this.classes=new Map;
  this.edges=[];
  this.funs=[this.setupToolTips.bind(this)];
  this.subGraphs=[];
  this.subGraphLookup=new Map;
  this.subCount=0;
  this.tooltips=new Map;
  this.firstGraphFlag=true;
  this.version=i;
  this.config=a7();
  at();
}setGen(i){this.version=i||"gen-2"}defaultStyle(){return"fill:#ffa;stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;fill:#ffa;stroke: #666;"}addSubGraph(i,r,a){
  let n=i.text.trim();
  let l=a.text;

  if (i===a&&/\s/.exec(a.text)) {
    (n = void 0);
  }

  const c=a2(f=>{
    const k={boolean:{},number:{},string:{}};
    const x=[];
    let T;return {nodeList:f.filter(W => {const J=typeof W;return W.stmt&&W.stmt==="dir"?(T=W.value,false):W.trim()===""?false:J in k?k[J].hasOwnProperty(W)?false:k[J][W]=true:x.includes(W)?false:x.push(W);}),dir:T};
  },"uniq")(r.flat());

  const b=c.nodeList;
  let u=c.dir;const A=a7().flowchart??{};
  u=u??(A.inheritDir?this.getDirection()??a7().direction??void 0:void 0);

  if (this.version==="gen-1") {
    for (let f=0; f<b.length; f++) {
      b[f]=this.lookUpDomId(b[f]);
    }
  }

  n=n??`subGraph${this.subCount}`;
  l=l||"";
  l=this.sanitizeText(l);
  this.subCount=this.subCount+1;
  const y={id:n,nodes:b,title:l.trim(),classes:[],dir:u,labelType:a.type};
  a9.info("Adding",y.id,y.nodes,y.dir);
  y.nodes=this.makeUniq(y,this.subGraphs).nodes;
  this.subGraphs.push(y);
  this.subGraphLookup.set(n,y);
  return n;
}getPosForId(i){for (const[r,a] of this.subGraphs.entries()) {
  if (a.id===i) {
    return r;
  }
}return-1}indexNodes2(i,r){
  const a=this.subGraphs[r].nodes;
  this.secCount=this.secCount+1;

  if (this.secCount>2000/* 2e3 */) {
    return {result:false,count:0};
  }

  this.posCrossRef[this.secCount]=r;

  if (this.subGraphs[r].id===i) {
    return {result:true,count:0};
  }

  let n=0;
  let l=1;

  while (n<a.length) {const g=this.getPosForId(a[n]);if(g>=0){const c=this.indexNodes2(i,g);if (c.result) {
    return {result:true,count:l+c.count};
  }l=l+c.count}n=n+1}

  return {result:false,count:l};
}getDepthFirstPos(i){return this.posCrossRef[i]}indexNodes(){
  this.secCount=-1;

  if (this.subGraphs.length>0) {
    this.indexNodes2("none",this.subGraphs.length-1);
  }
}getSubGraphs(){return this.subGraphs}firstGraph(){return this.firstGraphFlag?(this.firstGraphFlag=false,true):false;}destructStartLink(i){
  let r=i.trim();
  let a="arrow_open";
  switch(r[0]){case "<":
    {
      a="arrow_point";
      r=r.slice(1);
      break;
    }case "x":
    {
      a="arrow_cross";
      r=r.slice(1);
      break;
    }case "o":
    {
      a="arrow_circle";
      r=r.slice(1);
      break
    }}let n="normal";

  if (r.includes("=")) {
    (n = "thick");
  }

  if (r.includes(".")) {
    (n = "dotted");
  }

  return {type:a,stroke:n};
}countChar(i,r){const a=r.length;let n=0;for (let l=0; l<a; ++l) {
  if (r[l]===i) {
    ++n;
  }
}return n}destructEndLink(i){
  const r=i.trim();
  let a=r.slice(0,-1);
  let n="arrow_open";
  switch(r.slice(-1)){case "x":
    {
      n="arrow_cross";

      if (r.startsWith("x")) {
        n=`double_${n}`;
        a=a.slice(1);
      }

      break;
    }case ">":
    {
      n="arrow_point";

      if (r.startsWith("<")) {
        n=`double_${n}`;
        a=a.slice(1);
      }

      break;
    }case "o":
    {
      n="arrow_circle";

      if (r.startsWith("o")) {
        n=`double_${n}`;
        a=a.slice(1);
      }

      break
    }}
  let l="normal";
  let g=a.length-1;

  if (a.startsWith("=")) {
    (l = "thick");
  }

  if (a.startsWith("~")) {
    (l = "invisible");
  }

  const c=this.countChar(".",a);

  if (c) {
    l="dotted";
    g=c;
  }

  return {type:n,stroke:l,length:g};
}destructLink(i,r){const a=this.destructEndLink(i);let n;if(r){
  n=this.destructStartLink(r);

  if (n.stroke!==a.stroke) {
    return{type:"INVALID",stroke:"INVALID"};
  }

  if (n.type==="arrow_open") {
    n.type=a.type;
  } else {if (n.type!==a.type) {
    return{type:"INVALID",stroke:"INVALID"};
  }n.type=`double_${n.type}`}

  if (n.type==="double_arrow") {
    (n.type = "double_arrow_point");
  }

  n.length=a.length;
  return n;
}return a}exists(i,r){for (const a of i) {
  if (a.nodes.includes(r)) {
    return true;
  }
}return false;}makeUniq(i,r){
  const a=[];
  i.nodes.forEach((n,l)=>{
    if (!this.exists(r,n)) {
      a.push(i.nodes[l]);
    }
  });
  return {nodes:a};
}getTypeFromVertex(i){if (i.img) {
  return"imageSquare";
}if (i.icon) {
  return i.form==="circle"?"iconCircle":i.form==="square"?"iconSquare":i.form==="rounded"?"iconRounded":"icon";
}switch(i.type){case"square":case void 0:
  {
    return"squareRect";
  }case "round":
  {
    return"roundedRect";
  }case "ellipse":
  {
    return"ellipse";
  }default:
  {
    return i.type
  }}}findNode(i,r){return i.find(a => a.id===r);}destructEdgeType(i){
  let r="none";
  let a="arrow_point";
  switch(i){case"arrow_point":case"arrow_circle":case "arrow_cross":
    {
      a=i;break;
    }case"double_arrow_point":case"double_arrow_circle":case "double_arrow_cross":
    {
      r=i.replace("double_","");
      a=r;
      break
    }}return{arrowTypeStart:r,arrowTypeEnd:a}
}addNodeFromVertex(i,r,a,n,l,g){
  const c=a.get(i.id);
  const b=n.get(i.id)??false;
  const u=this.findNode(r,i.id);
  if (u) {
    u.cssStyles=i.styles;
    u.cssCompiledStyles=this.getCompiledStyles(i.classes);
    u.cssClasses=i.classes.join(" ");
  } else
    {
      const A={id:i.id,label:i.text,labelStyle:"",parentId:c,padding:l.flowchart?.padding||8,cssStyles:i.styles,cssCompiledStyles:this.getCompiledStyles(["default","node",...i.classes]),cssClasses:`default ${i.classes.join(" ")}`,dir:i.dir,domId:i.domId,look:g,link:i.link,linkTarget:i.linkTarget,tooltip:this.getTooltip(i.id),icon:i.icon,pos:i.pos,img:i.img,assetWidth:i.assetWidth,assetHeight:i.assetHeight,constraint:i.constraint};

      if (b) {
        r.push({...A,isGroup:true,shape:"rect"});
      } else {
        r.push({...A,isGroup:false,shape:this.getTypeFromVertex(i)});
      }
    }
}getCompiledStyles(i){let r=[];for(const a of i){
  const n=this.classes.get(a);

  if (n?.styles) {
    (r = [...r,...(n.styles ?? [])].map(l => l.trim()));
  }

  if (n?.textStyles) {
    (r = [...r,...(n.textStyles ?? [])].map(l => l.trim()));
  }
}return r}getData(){
  const i=a7();
  const r=[];
  const a=[];
  const n=this.getSubGraphs();
  const l=new Map;
  const g=new Map;
  for(let u=n.length-1;u>=0;u--){
    const A=n[u];

    if (A.nodes.length>0) {
      g.set(A.id,true);
    }

    for (const y of A.nodes) {
      l.set(y,A.id)
    }
  }for(let u=n.length-1;u>=0;u--){const A=n[u];r.push({id:A.id,label:A.title,labelStyle:"",parentId:l.get(A.id),padding:8,cssCompiledStyles:this.getCompiledStyles(A.classes),cssClasses:A.classes.join(" "),shape:"rect",dir:A.dir,isGroup:true,look:i.look})}this.getVertices().forEach(u=>{this.addNodeFromVertex(u,r,l,g,i,i.look||"classic")});const b=this.getEdges();

  b.forEach((u,A)=>{
    const {arrowTypeStart,arrowTypeEnd}=this.destructEdgeType(u.type);
    const k=[...(b.defaultStyle ?? [])];

    if (u.style) {
      k.push(...u.style);
    }

    const x={id:as(u.start,u.end,{counter:A,prefix:"L"},u.id),isUserDefinedId:u.isUserDefinedId,start:u.start,end:u.end,type:u.type??"normal",label:u.text,labelpos:"c",thickness:u.stroke,minlen:u.length,classes:u?.stroke==="invisible"?"":"edge-thickness-normal edge-pattern-solid flowchart-link",arrowTypeStart:u?.stroke==="invisible"||u?.type==="arrow_open"?"none":arrowTypeStart,arrowTypeEnd:u?.stroke==="invisible"||u?.type==="arrow_open"?"none":arrowTypeEnd,arrowheadStyle:"fill: #333",cssCompiledStyles:this.getCompiledStyles(u.classes),labelStyle:k,style:k,pattern:u.stroke,look:i.look,animate:u.animate,animation:u.animation,curve:u.interpolate||this.edges.defaultInterpolate||i.flowchart?.curve};a.push(x)
  });

  return {nodes:r,edges:a,other:{},config:i};
}defaultConfig(){return au.flowchart;}};

a2(G1,"FlowDB");
const pe = G1;

const fe=a2((s, i) => i.db.getClasses(),"getClasses");

const ge=a2(async (s, i, r, a) => {
  a9.info("REF0:");
  a9.info("Drawing state diagram (v2)",i);
  const{securityLevel,flowchart,layout}=a7();let c;

  if (securityLevel==="sandbox") {
    (c = a8(`#i${i}`));
  }

  const b=securityLevel==="sandbox"?c.nodes()[0].contentDocument:document;a9.debug("Before getData: ");const u=a.db.getData();a9.debug("Data: ",u);
  const A=g_1(i,securityLevel);
  const y=a.db.getDirection();
  u.type=a.type;
  u.layoutAlgorithm=ak(layout);

  if (u.layoutAlgorithm==="dagre"&&layout==="elk") {
    a9.warn("flowchart-elk was moved to an external package in Mermaid v11. Please refer [release notes](https://github.com/mermaid-js/mermaid/releases/tag/v11.0.0) for more details. This diagram will be rendered using `dagre` layout as a fallback.");
  }

  u.direction=y;
  u.nodeSpacing=flowchart?.nodeSpacing||50;
  u.rankSpacing=flowchart?.rankSpacing||50;
  u.markers=["point","circle","cross"];
  u.diagramId=i;
  a9.debug("REF1:",u);
  await al(u,A);
  const f=u.config.flowchart?.diagramPadding??8;
  am.insertTitle(A,"flowchartTitleText",flowchart?.titleTopMargin||0,a.db.getDiagramTitle());
  s(A,f,"flowchart",flowchart?.useMaxWidth||false);
  for(const k of u.nodes){
    const x=a8(`#${i} [id="${k.id}"]`);if (!x||!k.link) {
        continue;
      }const T=b.createElementNS("http://www.w3.org/2000/svg","a");
    T.setAttributeNS("http://www.w3.org/2000/svg","class",k.cssClasses);
    T.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener");

    if (securityLevel==="sandbox") {
      T.setAttributeNS("http://www.w3.org/2000/svg","target","_top");
    } else if (k.linkTarget) {
      T.setAttributeNS("http://www.w3.org/2000/svg","target",k.linkTarget);
    }

    const d1=x.insert(() => T,":first-child");
    const W=x.select(".label-container");

    if (W) {
      d1.append(() => W.node());
    }

    const J=x.select(".label");

    if (J) {
      d1.append(() => J.node());
    }
  }
},"draw");

const be={getClasses:fe,draw:ge};

const rt = (() => {
  const s=a2((g1, h, d, p) => {
    d=d||{};

    for (p=g1.length; p--; d[g1[p]]=h)
      {}

    return d
  },"o");

  const i=[1,4];
  const r=[1,3];
  const a=[1,5];
  const n=[1,8,9,10,11,27,34,36,38,44,60,84,85,86,87,88,89,102,105,106,109,111,114,115,116,121,122,123,124];
  const l=[2,2];
  const g=[1,13];
  const c=[1,14];
  const b=[1,15];
  const u=[1,16];
  const A=[1,23];
  const y=[1,25];
  const f=[1,26];
  const k=[1,27];
  const x=[1,49];
  const T=[1,48];
  const d1=[1,29];
  const W=[1,30];
  const J=[1,31];
  const O1=[1,32];
  const M1=[1,33];
  const V=[1,44];
  const w=[1,46];
  const I=[1,42];
  const R=[1,47];
  const N=[1,43];
  const G=[1,50];
  const P=[1,45];
  const O=[1,51];
  const M=[1,52];
  const U1=[1,34];
  const W1=[1,35];
  const j1=[1,36];
  const z1=[1,37];
  const p1=[1,57];
  const F=[1,8,9,10,11,27,32,34,36,38,44,60,84,85,86,87,88,89,102,105,106,109,111,114,115,116,121,122,123,124];
  const t1=[1,61];
  const e1=[1,60];
  const s1=[1,62];
  const C1=[8,9,11,75,77,78];
  const at=[1,78];
  const D1=[1,91];
  const S1=[1,96];
  const x1=[1,95];
  const T1=[1,92];
  const y1=[1,88];
  const F1=[1,94];
  const _1=[1,90];
  const B1=[1,97];
  const v1=[1,93];
  const L1=[1,98];
  const V1=[1,89];
  const A1=[8,9,10,11,40,75,77,78];
  const j=[8,9,10,11,40,46,75,77,78];
  const q=[8,9,10,11,29,40,44,46,48,50,52,54,56,58,60,63,65,67,68,70,75,77,78,89,102,105,106,109,111,114,115,116];
  const nt=[8,9,11,44,60,75,77,78,89,102,105,106,109,111,114,115,116];
  const w1=[44,60,89,102,105,106,109,111,114,115,116];
  const ut=[1,121];
  const ot=[1,122];
  const K1=[1,124];
  const Y1=[1,123];
  const lt=[44,60,62,74,89,102,105,106,109,111,114,115,116];
  const ct=[1,133];
  const ht=[1,147];
  const dt=[1,148];
  const pt=[1,149];
  const ft=[1,150];
  const gt=[1,135];
  const bt=[1,137];
  const At=[1,141];
  const kt=[1,142];
  const mt=[1,143];
  const Et=[1,144];
  const Ct=[1,145];
  const Dt=[1,146];
  const St=[1,151];
  const xt=[1,152];
  const Tt=[1,131];
  const yt=[1,132];
  const Ft=[1,139];
  const _t=[1,134];
  const Bt=[1,138];
  const vt=[1,136];
  const Q1=[8,9,10,11,27,32,34,36,38,44,60,84,85,86,87,88,89,102,105,106,109,111,114,115,116,121,122,123,124];
  const Lt=[1,154];
  const Vt=[1,156];
  const v=[8,9,11];
  const H=[8,9,10,11,14,44,60,89,105,106,109,111,114,115,116];
  const E=[1,176];
  const z=[1,172];
  const K=[1,173];
  const C=[1,177];
  const D=[1,174];
  const S=[1,175];
  const I1=[77,116,119];
  const _=[8,9,10,11,12,14,27,29,32,44,60,75,84,85,86,87,88,89,90,105,109,111,114,115,116];
  const wt=[10,106];
  const f1=[31,49,51,53,55,57,62,64,66,67,69,71,116,117,118];
  const i1=[1,247];
  const r1=[1,245];
  const a1=[1,249];
  const n1=[1,243];
  const u1=[1,244];
  const o1=[1,246];
  const l1=[1,248];
  const c1=[1,250];
  const R1=[1,268];
  const It=[8,9,11,106];
  const Z=[8,9,10,11,60,84,105,106,109,110,111,112];

  const J1={trace:a2(() => {},"trace"),yy:{},symbols_:{error:2,start:3,graphConfig:4,document:5,line:6,statement:7,SEMI:8,NEWLINE:9,SPACE:10,EOF:11,GRAPH:12,NODIR:13,DIR:14,FirstStmtSeparator:15,ending:16,endToken:17,spaceList:18,spaceListNewline:19,vertexStatement:20,separator:21,styleStatement:22,linkStyleStatement:23,classDefStatement:24,classStatement:25,clickStatement:26,subgraph:27,textNoTags:28,SQS:29,text:30,SQE:31,end:32,direction:33,acc_title:34,acc_title_value:35,acc_descr:36,acc_descr_value:37,acc_descr_multiline_value:38,shapeData:39,SHAPE_DATA:40,link:41,node:42,styledVertex:43,AMP:44,vertex:45,STYLE_SEPARATOR:46,idString:47,DOUBLECIRCLESTART:48,DOUBLECIRCLEEND:49,PS:50,PE:51,"(-":52,"-)":53,STADIUMSTART:54,STADIUMEND:55,SUBROUTINESTART:56,SUBROUTINEEND:57,VERTEX_WITH_PROPS_START:58,"NODE_STRING[field]":59,COLON:60,"NODE_STRING[value]":61,PIPE:62,CYLINDERSTART:63,CYLINDEREND:64,DIAMOND_START:65,DIAMOND_STOP:66,TAGEND:67,TRAPSTART:68,TRAPEND:69,INVTRAPSTART:70,INVTRAPEND:71,linkStatement:72,arrowText:73,TESTSTR:74,START_LINK:75,edgeText:76,LINK:77,LINK_ID:78,edgeTextToken:79,STR:80,MD_STR:81,textToken:82,keywords:83,STYLE:84,LINKSTYLE:85,CLASSDEF:86,CLASS:87,CLICK:88,DOWN:89,UP:90,textNoTagsToken:91,stylesOpt:92,"idString[vertex]":93,"idString[class]":94,CALLBACKNAME:95,CALLBACKARGS:96,HREF:97,LINK_TARGET:98,"STR[link]":99,"STR[tooltip]":100,alphaNum:101,DEFAULT:102,numList:103,INTERPOLATE:104,NUM:105,COMMA:106,style:107,styleComponent:108,NODE_STRING:109,UNIT:110,BRKT:111,PCT:112,idStringToken:113,MINUS:114,MULT:115,UNICODE_TEXT:116,TEXT:117,TAGSTART:118,EDGE_TEXT:119,alphaNumToken:120,direction_tb:121,direction_bt:122,direction_rl:123,direction_lr:124,$accept:0,$end:1},terminals_:{2:"error",8:"SEMI",9:"NEWLINE",10:"SPACE",11:"EOF",12:"GRAPH",13:"NODIR",14:"DIR",27:"subgraph",29:"SQS",31:"SQE",32:"end",34:"acc_title",35:"acc_title_value",36:"acc_descr",37:"acc_descr_value",38:"acc_descr_multiline_value",40:"SHAPE_DATA",44:"AMP",46:"STYLE_SEPARATOR",48:"DOUBLECIRCLESTART",49:"DOUBLECIRCLEEND",50:"PS",51:"PE",52:"(-",53:"-)",54:"STADIUMSTART",55:"STADIUMEND",56:"SUBROUTINESTART",57:"SUBROUTINEEND",58:"VERTEX_WITH_PROPS_START",59:"NODE_STRING[field]",60:"COLON",61:"NODE_STRING[value]",62:"PIPE",63:"CYLINDERSTART",64:"CYLINDEREND",65:"DIAMOND_START",66:"DIAMOND_STOP",67:"TAGEND",68:"TRAPSTART",69:"TRAPEND",70:"INVTRAPSTART",71:"INVTRAPEND",74:"TESTSTR",75:"START_LINK",77:"LINK",78:"LINK_ID",80:"STR",81:"MD_STR",84:"STYLE",85:"LINKSTYLE",86:"CLASSDEF",87:"CLASS",88:"CLICK",89:"DOWN",90:"UP",93:"idString[vertex]",94:"idString[class]",95:"CALLBACKNAME",96:"CALLBACKARGS",97:"HREF",98:"LINK_TARGET",99:"STR[link]",100:"STR[tooltip]",102:"DEFAULT",104:"INTERPOLATE",105:"NUM",106:"COMMA",109:"NODE_STRING",110:"UNIT",111:"BRKT",112:"PCT",114:"MINUS",115:"MULT",116:"UNICODE_TEXT",117:"TEXT",118:"TAGSTART",119:"EDGE_TEXT",121:"direction_tb",122:"direction_bt",123:"direction_rl",124:"direction_lr"},productions_:[0,[3,2],[5,0],[5,2],[6,1],[6,1],[6,1],[6,1],[6,1],[4,2],[4,2],[4,2],[4,3],[16,2],[16,1],[17,1],[17,1],[17,1],[15,1],[15,1],[15,2],[19,2],[19,2],[19,1],[19,1],[18,2],[18,1],[7,2],[7,2],[7,2],[7,2],[7,2],[7,2],[7,9],[7,6],[7,4],[7,1],[7,2],[7,2],[7,1],[21,1],[21,1],[21,1],[39,2],[39,1],[20,4],[20,3],[20,4],[20,2],[20,2],[20,1],[42,1],[42,6],[42,5],[43,1],[43,3],[45,4],[45,4],[45,6],[45,4],[45,4],[45,4],[45,8],[45,4],[45,4],[45,4],[45,6],[45,4],[45,4],[45,4],[45,4],[45,4],[45,1],[41,2],[41,3],[41,3],[41,1],[41,3],[41,4],[76,1],[76,2],[76,1],[76,1],[72,1],[72,2],[73,3],[30,1],[30,2],[30,1],[30,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[83,1],[28,1],[28,2],[28,1],[28,1],[24,5],[25,5],[26,2],[26,4],[26,3],[26,5],[26,3],[26,5],[26,5],[26,7],[26,2],[26,4],[26,2],[26,4],[26,4],[26,6],[22,5],[23,5],[23,5],[23,9],[23,9],[23,7],[23,7],[103,1],[103,3],[92,1],[92,3],[107,1],[107,2],[108,1],[108,1],[108,1],[108,1],[108,1],[108,1],[108,1],[108,1],[113,1],[113,1],[113,1],[113,1],[113,1],[113,1],[113,1],[113,1],[113,1],[113,1],[113,1],[82,1],[82,1],[82,1],[82,1],[91,1],[91,1],[91,1],[91,1],[91,1],[91,1],[91,1],[91,1],[91,1],[91,1],[91,1],[79,1],[79,1],[120,1],[120,1],[120,1],[120,1],[120,1],[120,1],[120,1],[120,1],[120,1],[120,1],[120,1],[47,1],[47,2],[101,1],[101,2],[33,1],[33,1],[33,1],[33,1]],performAction:a2(function(h,d,p,o,B,t,P1){const e=t.length-1;switch(B){case 2:
    {
      this.$=[];break;
    }case 3:
    {
      if ((!Array.isArray(t[e]) || t[e].length>0)) {
        t[e-1].push(t[e]);
      }

      this.$=t[e-1];
      break;
    }case 4:case 183:
    {
      this.$=t[e];break;
    }case 11:
    {
      o.setDirection("TB");
      this.$="TB";
      break;
    }case 12:
    {
      o.setDirection(t[e-1]);
      this.$=t[e-1];
      break;
    }case 27:
    {
      this.$=t[e-1].nodes;break;
    }case 28:case 29:case 30:case 31:case 32:
    {
      this.$=[];break;
    }case 33:
    {
      this.$=o.addSubGraph(t[e-6],t[e-1],t[e-4]);break;
    }case 34:
    {
      this.$=o.addSubGraph(t[e-3],t[e-1],t[e-3]);break;
    }case 35:
    {
      this.$=o.addSubGraph(void 0,t[e-1],void 0);break;
    }case 37:
    {
      this.$=t[e].trim();
      o.setAccTitle(this.$);
      break;
    }case 38:case 39:
    {
      this.$=t[e].trim();
      o.setAccDescription(this.$);
      break;
    }case 43:
    {
      this.$=t[e-1]+t[e];break;
    }case 44:
    {
      this.$=t[e];break;
    }case 45:
    {
      o.addVertex(t[e-1][t[e-1].length-1],void 0,void 0,void 0,void 0,void 0,void 0,t[e]);
      o.addLink(t[e-3].stmt,t[e-1],t[e-2]);
      this.$={stmt:t[e-1],nodes:t[e-1].concat(t[e-3].nodes)};
      break;
    }case 46:
    {
      o.addLink(t[e-2].stmt,t[e],t[e-1]);
      this.$={stmt:t[e],nodes:t[e].concat(t[e-2].nodes)};
      break;
    }case 47:
    {
      o.addLink(t[e-3].stmt,t[e-1],t[e-2]);
      this.$={stmt:t[e-1],nodes:t[e-1].concat(t[e-3].nodes)};
      break;
    }case 48:
    {
      this.$={stmt:t[e-1],nodes:t[e-1]};break;
    }case 49:
    {
      o.addVertex(t[e-1][t[e-1].length-1],void 0,void 0,void 0,void 0,void 0,void 0,t[e]);
      this.$={stmt:t[e-1],nodes:t[e-1],shapeData:t[e]};
      break;
    }case 50:
    {
      this.$={stmt:t[e],nodes:t[e]};break;
    }case 51:
    {
      this.$=[t[e]];break;
    }case 52:
    {
      o.addVertex(t[e-5][t[e-5].length-1],void 0,void 0,void 0,void 0,void 0,void 0,t[e-4]);
      this.$=t[e-5].concat(t[e]);
      break;
    }case 53:
    {
      this.$=t[e-4].concat(t[e]);break;
    }case 54:
    {
      this.$=t[e];break;
    }case 55:
    {
      this.$=t[e-2];
      o.setClass(t[e-2],t[e]);
      break;
    }case 56:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"square");
      break;
    }case 57:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"doublecircle");
      break;
    }case 58:
    {
      this.$=t[e-5];
      o.addVertex(t[e-5],t[e-2],"circle");
      break;
    }case 59:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"ellipse");
      break;
    }case 60:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"stadium");
      break;
    }case 61:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"subroutine");
      break;
    }case 62:
    {
      this.$=t[e-7];
      o.addVertex(t[e-7],t[e-1],"rect",void 0,void 0,void 0,Object.fromEntries([[t[e-5],t[e-3]]]));
      break;
    }case 63:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"cylinder");
      break;
    }case 64:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"round");
      break;
    }case 65:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"diamond");
      break;
    }case 66:
    {
      this.$=t[e-5];
      o.addVertex(t[e-5],t[e-2],"hexagon");
      break;
    }case 67:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"odd");
      break;
    }case 68:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"trapezoid");
      break;
    }case 69:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"inv_trapezoid");
      break;
    }case 70:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"lean_right");
      break;
    }case 71:
    {
      this.$=t[e-3];
      o.addVertex(t[e-3],t[e-1],"lean_left");
      break;
    }case 72:
    {
      this.$=t[e];
      o.addVertex(t[e]);
      break;
    }case 73:
    {
      t[e-1].text=t[e];
      this.$=t[e-1];
      break;
    }case 74:case 75:
    {
      t[e-2].text=t[e-1];
      this.$=t[e-2];
      break;
    }case 76:
    {
      this.$=t[e];break;
    }case 77:
    {
      var L=o.destructLink(t[e],t[e-2]);this.$={type:L.type,stroke:L.stroke,length:L.length,text:t[e-1]};break;
    }case 78:
    {
      var L=o.destructLink(t[e],t[e-2]);this.$={type:L.type,stroke:L.stroke,length:L.length,text:t[e-1],id:t[e-3]};break;
    }case 79:
    {
      this.$={text:t[e],type:"text"};break;
    }case 80:
    {
      this.$={text:`${t[e-1].text}${t[e]}`,type:t[e-1].type};break;
    }case 81:
    {
      this.$={text:t[e],type:"string"};break;
    }case 82:
    {
      this.$={text:t[e],type:"markdown"};break;
    }case 83:
    {
      var L=o.destructLink(t[e]);this.$={type:L.type,stroke:L.stroke,length:L.length};break;
    }case 84:
    {
      var L=o.destructLink(t[e]);this.$={type:L.type,stroke:L.stroke,length:L.length,id:t[e-1]};break;
    }case 85:
    {
      this.$=t[e-1];break;
    }case 86:
    {
      this.$={text:t[e],type:"text"};break;
    }case 87:
    {
      this.$={text:`${t[e-1].text}${t[e]}`,type:t[e-1].type};break;
    }case 88:
    {
      this.$={text:t[e],type:"string"};break;
    }case 89:case 104:
    {
      this.$={text:t[e],type:"markdown"};break;
    }case 101:
    {
      this.$={text:t[e],type:"text"};break;
    }case 102:
    {
      this.$={text:`${t[e-1].text}${t[e]}`,type:t[e-1].type};break;
    }case 103:
    {
      this.$={text:t[e],type:"text"};break;
    }case 105:
    {
      this.$=t[e-4];
      o.addClass(t[e-2],t[e]);
      break;
    }case 106:
    {
      this.$=t[e-4];
      o.setClass(t[e-2],t[e]);
      break;
    }case 107:case 115:
    {
      this.$=t[e-1];
      o.setClickEvent(t[e-1],t[e]);
      break;
    }case 108:case 116:
    {
      this.$=t[e-3];
      o.setClickEvent(t[e-3],t[e-2]);
      o.setTooltip(t[e-3],t[e]);
      break;
    }case 109:
    {
      this.$=t[e-2];
      o.setClickEvent(t[e-2],t[e-1],t[e]);
      break;
    }case 110:
    {
      this.$=t[e-4];
      o.setClickEvent(t[e-4],t[e-3],t[e-2]);
      o.setTooltip(t[e-4],t[e]);
      break;
    }case 111:
    {
      this.$=t[e-2];
      o.setLink(t[e-2],t[e]);
      break;
    }case 112:
    {
      this.$=t[e-4];
      o.setLink(t[e-4],t[e-2]);
      o.setTooltip(t[e-4],t[e]);
      break;
    }case 113:
    {
      this.$=t[e-4];
      o.setLink(t[e-4],t[e-2],t[e]);
      break;
    }case 114:
    {
      this.$=t[e-6];
      o.setLink(t[e-6],t[e-4],t[e]);
      o.setTooltip(t[e-6],t[e-2]);
      break;
    }case 117:
    {
      this.$=t[e-1];
      o.setLink(t[e-1],t[e]);
      break;
    }case 118:
    {
      this.$=t[e-3];
      o.setLink(t[e-3],t[e-2]);
      o.setTooltip(t[e-3],t[e]);
      break;
    }case 119:
    {
      this.$=t[e-3];
      o.setLink(t[e-3],t[e-2],t[e]);
      break;
    }case 120:
    {
      this.$=t[e-5];
      o.setLink(t[e-5],t[e-4],t[e]);
      o.setTooltip(t[e-5],t[e-2]);
      break;
    }case 121:
    {
      this.$=t[e-4];
      o.addVertex(t[e-2],void 0,void 0,t[e]);
      break;
    }case 122:
    {
      this.$=t[e-4];
      o.updateLink([t[e-2]],t[e]);
      break;
    }case 123:
    {
      this.$=t[e-4];
      o.updateLink(t[e-2],t[e]);
      break;
    }case 124:
    {
      this.$=t[e-8];
      o.updateLinkInterpolate([t[e-6]],t[e-2]);
      o.updateLink([t[e-6]],t[e]);
      break;
    }case 125:
    {
      this.$=t[e-8];
      o.updateLinkInterpolate(t[e-6],t[e-2]);
      o.updateLink(t[e-6],t[e]);
      break;
    }case 126:
    {
      this.$=t[e-6];
      o.updateLinkInterpolate([t[e-4]],t[e]);
      break;
    }case 127:
    {
      this.$=t[e-6];
      o.updateLinkInterpolate(t[e-4],t[e]);
      break;
    }case 128:case 130:
    {
      this.$=[t[e]];break;
    }case 129:case 131:
    {
      t[e-2].push(t[e]);
      this.$=t[e-2];
      break;
    }case 133:
    {
      this.$=t[e-1]+t[e];break;
    }case 181:
    {
      this.$=t[e];break;
    }case 182:
    {
      this.$=`${t[e-1]}${t[e]}`;break;
    }case 184:
    {
      this.$=`${t[e-1]}${t[e]}`;break;
    }case 185:
    {
      this.$={stmt:"dir",value:"TB"};break;
    }case 186:
    {
      this.$={stmt:"dir",value:"BT"};break;
    }case 187:
    {
      this.$={stmt:"dir",value:"RL"};break;
    }case 188:
    {
      this.$={stmt:"dir",value:"LR"};break
    }}},"anonymous"),table:[{3:1,4:2,9:i,10:r,12:a},{1:[3]},s(n,l,{5:6}),{4:7,9:i,10:r,12:a},{4:8,9:i,10:r,12:a},{13:[1,9],14:[1,10]},{1:[2,1],6:11,7:12,8:g,9:c,10:b,11:u,20:17,22:18,23:19,24:20,25:21,26:22,27:A,33:24,34:y,36:f,38:k,42:28,43:38,44:x,45:39,47:40,60:T,84:d1,85:W,86:J,87:O1,88:M1,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M,121:U1,122:W1,123:j1,124:z1},s(n,[2,9]),s(n,[2,10]),s(n,[2,11]),{8:[1,54],9:[1,55],10:p1,15:53,18:56},s(F,[2,3]),s(F,[2,4]),s(F,[2,5]),s(F,[2,6]),s(F,[2,7]),s(F,[2,8]),{8:t1,9:e1,11:s1,21:58,41:59,72:63,75:[1,64],77:[1,66],78:[1,65]},{8:t1,9:e1,11:s1,21:67},{8:t1,9:e1,11:s1,21:68},{8:t1,9:e1,11:s1,21:69},{8:t1,9:e1,11:s1,21:70},{8:t1,9:e1,11:s1,21:71},{8:t1,9:e1,10:[1,72],11:s1,21:73},s(F,[2,36]),{35:[1,74]},{37:[1,75]},s(F,[2,39]),s(C1,[2,50],{18:76,39:77,10:p1,40:at}),{10:[1,79]},{10:[1,80]},{10:[1,81]},{10:[1,82]},{14:D1,44:S1,60:x1,80:[1,86],89:T1,95:[1,83],97:[1,84],101:85,105:y1,106:F1,109:_1,111:B1,114:v1,115:L1,116:V1,120:87},s(F,[2,185]),s(F,[2,186]),s(F,[2,187]),s(F,[2,188]),s(A1,[2,51]),s(A1,[2,54],{46:[1,99]}),s(j,[2,72],{113:112,29:[1,100],44:x,48:[1,101],50:[1,102],52:[1,103],54:[1,104],56:[1,105],58:[1,106],60:T,63:[1,107],65:[1,108],67:[1,109],68:[1,110],70:[1,111],89:V,102:w,105:I,106:R,109:N,111:G,114:P,115:O,116:M}),s(q,[2,181]),s(q,[2,142]),s(q,[2,143]),s(q,[2,144]),s(q,[2,145]),s(q,[2,146]),s(q,[2,147]),s(q,[2,148]),s(q,[2,149]),s(q,[2,150]),s(q,[2,151]),s(q,[2,152]),s(n,[2,12]),s(n,[2,18]),s(n,[2,19]),{9:[1,113]},s(nt,[2,26],{18:114,10:p1}),s(F,[2,27]),{42:115,43:38,44:x,45:39,47:40,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M},s(F,[2,40]),s(F,[2,41]),s(F,[2,42]),s(w1,[2,76],{73:116,62:[1,118],74:[1,117]}),{76:119,79:120,80:ut,81:ot,116:K1,119:Y1},{75:[1,125],77:[1,126]},s(lt,[2,83]),s(F,[2,28]),s(F,[2,29]),s(F,[2,30]),s(F,[2,31]),s(F,[2,32]),{10:ct,12:ht,14:dt,27:pt,28:127,32:ft,44:gt,60:bt,75:At,80:[1,129],81:[1,130],83:140,84:kt,85:mt,86:Et,87:Ct,88:Dt,89:St,90:xt,91:128,105:Tt,109:yt,111:Ft,114:_t,115:Bt,116:vt},s(Q1,l,{5:153}),s(F,[2,37]),s(F,[2,38]),s(C1,[2,48],{44:Lt}),s(C1,[2,49],{18:155,10:p1,40:Vt}),s(A1,[2,44]),{44:x,47:157,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M},{102:[1,158],103:159,105:[1,160]},{44:x,47:161,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M},{44:x,47:162,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M},s(v,[2,107],{10:[1,163],96:[1,164]}),{80:[1,165]},s(v,[2,115],{120:167,10:[1,166],14:D1,44:S1,60:x1,89:T1,105:y1,106:F1,109:_1,111:B1,114:v1,115:L1,116:V1}),s(v,[2,117],{10:[1,168]}),s(H,[2,183]),s(H,[2,170]),s(H,[2,171]),s(H,[2,172]),s(H,[2,173]),s(H,[2,174]),s(H,[2,175]),s(H,[2,176]),s(H,[2,177]),s(H,[2,178]),s(H,[2,179]),s(H,[2,180]),{44:x,47:169,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M},{30:170,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{30:178,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{30:180,50:[1,179],67:E,80:z,81:K,82:171,116:C,117:D,118:S},{30:181,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{30:182,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{30:183,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{109:[1,184]},{30:185,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{30:186,65:[1,187],67:E,80:z,81:K,82:171,116:C,117:D,118:S},{30:188,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{30:189,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{30:190,67:E,80:z,81:K,82:171,116:C,117:D,118:S},s(q,[2,182]),s(n,[2,20]),s(nt,[2,25]),s(C1,[2,46],{39:191,18:192,10:p1,40:at}),s(w1,[2,73],{10:[1,193]}),{10:[1,194]},{30:195,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{77:[1,196],79:197,116:K1,119:Y1},s(I1,[2,79]),s(I1,[2,81]),s(I1,[2,82]),s(I1,[2,168]),s(I1,[2,169]),{76:198,79:120,80:ut,81:ot,116:K1,119:Y1},s(lt,[2,84]),{8:t1,9:e1,10:ct,11:s1,12:ht,14:dt,21:200,27:pt,29:[1,199],32:ft,44:gt,60:bt,75:At,83:140,84:kt,85:mt,86:Et,87:Ct,88:Dt,89:St,90:xt,91:201,105:Tt,109:yt,111:Ft,114:_t,115:Bt,116:vt},s(_,[2,101]),s(_,[2,103]),s(_,[2,104]),s(_,[2,157]),s(_,[2,158]),s(_,[2,159]),s(_,[2,160]),s(_,[2,161]),s(_,[2,162]),s(_,[2,163]),s(_,[2,164]),s(_,[2,165]),s(_,[2,166]),s(_,[2,167]),s(_,[2,90]),s(_,[2,91]),s(_,[2,92]),s(_,[2,93]),s(_,[2,94]),s(_,[2,95]),s(_,[2,96]),s(_,[2,97]),s(_,[2,98]),s(_,[2,99]),s(_,[2,100]),{6:11,7:12,8:g,9:c,10:b,11:u,20:17,22:18,23:19,24:20,25:21,26:22,27:A,32:[1,202],33:24,34:y,36:f,38:k,42:28,43:38,44:x,45:39,47:40,60:T,84:d1,85:W,86:J,87:O1,88:M1,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M,121:U1,122:W1,123:j1,124:z1},{10:p1,18:203},{44:[1,204]},s(A1,[2,43]),{10:[1,205],44:x,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:112,114:P,115:O,116:M},{10:[1,206]},{10:[1,207],106:[1,208]},s(wt,[2,128]),{10:[1,209],44:x,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:112,114:P,115:O,116:M},{10:[1,210],44:x,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:112,114:P,115:O,116:M},{80:[1,211]},s(v,[2,109],{10:[1,212]}),s(v,[2,111],{10:[1,213]}),{80:[1,214]},s(H,[2,184]),{80:[1,215],98:[1,216]},s(A1,[2,55],{113:112,44:x,60:T,89:V,102:w,105:I,106:R,109:N,111:G,114:P,115:O,116:M}),{31:[1,217],67:E,82:218,116:C,117:D,118:S},s(f1,[2,86]),s(f1,[2,88]),s(f1,[2,89]),s(f1,[2,153]),s(f1,[2,154]),s(f1,[2,155]),s(f1,[2,156]),{49:[1,219],67:E,82:218,116:C,117:D,118:S},{30:220,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{51:[1,221],67:E,82:218,116:C,117:D,118:S},{53:[1,222],67:E,82:218,116:C,117:D,118:S},{55:[1,223],67:E,82:218,116:C,117:D,118:S},{57:[1,224],67:E,82:218,116:C,117:D,118:S},{60:[1,225]},{64:[1,226],67:E,82:218,116:C,117:D,118:S},{66:[1,227],67:E,82:218,116:C,117:D,118:S},{30:228,67:E,80:z,81:K,82:171,116:C,117:D,118:S},{31:[1,229],67:E,82:218,116:C,117:D,118:S},{67:E,69:[1,230],71:[1,231],82:218,116:C,117:D,118:S},{67:E,69:[1,233],71:[1,232],82:218,116:C,117:D,118:S},s(C1,[2,45],{18:155,10:p1,40:Vt}),s(C1,[2,47],{44:Lt}),s(w1,[2,75]),s(w1,[2,74]),{62:[1,234],67:E,82:218,116:C,117:D,118:S},s(w1,[2,77]),s(I1,[2,80]),{77:[1,235],79:197,116:K1,119:Y1},{30:236,67:E,80:z,81:K,82:171,116:C,117:D,118:S},s(Q1,l,{5:237}),s(_,[2,102]),s(F,[2,35]),{43:238,44:x,45:39,47:40,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M},{10:p1,18:239},{10:i1,60:r1,84:a1,92:240,105:n1,107:241,108:242,109:u1,110:o1,111:l1,112:c1},{10:i1,60:r1,84:a1,92:251,104:[1,252],105:n1,107:241,108:242,109:u1,110:o1,111:l1,112:c1},{10:i1,60:r1,84:a1,92:253,104:[1,254],105:n1,107:241,108:242,109:u1,110:o1,111:l1,112:c1},{105:[1,255]},{10:i1,60:r1,84:a1,92:256,105:n1,107:241,108:242,109:u1,110:o1,111:l1,112:c1},{44:x,47:257,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M},s(v,[2,108]),{80:[1,258]},{80:[1,259],98:[1,260]},s(v,[2,116]),s(v,[2,118],{10:[1,261]}),s(v,[2,119]),s(j,[2,56]),s(f1,[2,87]),s(j,[2,57]),{51:[1,262],67:E,82:218,116:C,117:D,118:S},s(j,[2,64]),s(j,[2,59]),s(j,[2,60]),s(j,[2,61]),{109:[1,263]},s(j,[2,63]),s(j,[2,65]),{66:[1,264],67:E,82:218,116:C,117:D,118:S},s(j,[2,67]),s(j,[2,68]),s(j,[2,70]),s(j,[2,69]),s(j,[2,71]),s([10,44,60,89,102,105,106,109,111,114,115,116],[2,85]),s(w1,[2,78]),{31:[1,265],67:E,82:218,116:C,117:D,118:S},{6:11,7:12,8:g,9:c,10:b,11:u,20:17,22:18,23:19,24:20,25:21,26:22,27:A,32:[1,266],33:24,34:y,36:f,38:k,42:28,43:38,44:x,45:39,47:40,60:T,84:d1,85:W,86:J,87:O1,88:M1,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M,121:U1,122:W1,123:j1,124:z1},s(A1,[2,53]),{43:267,44:x,45:39,47:40,60:T,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M},s(v,[2,121],{106:R1}),s(It,[2,130],{108:269,10:i1,60:r1,84:a1,105:n1,109:u1,110:o1,111:l1,112:c1}),s(Z,[2,132]),s(Z,[2,134]),s(Z,[2,135]),s(Z,[2,136]),s(Z,[2,137]),s(Z,[2,138]),s(Z,[2,139]),s(Z,[2,140]),s(Z,[2,141]),s(v,[2,122],{106:R1}),{10:[1,270]},s(v,[2,123],{106:R1}),{10:[1,271]},s(wt,[2,129]),s(v,[2,105],{106:R1}),s(v,[2,106],{113:112,44:x,60:T,89:V,102:w,105:I,106:R,109:N,111:G,114:P,115:O,116:M}),s(v,[2,110]),s(v,[2,112],{10:[1,272]}),s(v,[2,113]),{98:[1,273]},{51:[1,274]},{62:[1,275]},{66:[1,276]},{8:t1,9:e1,11:s1,21:277},s(F,[2,34]),s(A1,[2,52]),{10:i1,60:r1,84:a1,105:n1,107:278,108:242,109:u1,110:o1,111:l1,112:c1},s(Z,[2,133]),{14:D1,44:S1,60:x1,89:T1,101:279,105:y1,106:F1,109:_1,111:B1,114:v1,115:L1,116:V1,120:87},{14:D1,44:S1,60:x1,89:T1,101:280,105:y1,106:F1,109:_1,111:B1,114:v1,115:L1,116:V1,120:87},{98:[1,281]},s(v,[2,120]),s(j,[2,58]),{30:282,67:E,80:z,81:K,82:171,116:C,117:D,118:S},s(j,[2,66]),s(Q1,l,{5:283}),s(It,[2,131],{108:269,10:i1,60:r1,84:a1,105:n1,109:u1,110:o1,111:l1,112:c1}),s(v,[2,126],{120:167,10:[1,284],14:D1,44:S1,60:x1,89:T1,105:y1,106:F1,109:_1,111:B1,114:v1,115:L1,116:V1}),s(v,[2,127],{120:167,10:[1,285],14:D1,44:S1,60:x1,89:T1,105:y1,106:F1,109:_1,111:B1,114:v1,115:L1,116:V1}),s(v,[2,114]),{31:[1,286],67:E,82:218,116:C,117:D,118:S},{6:11,7:12,8:g,9:c,10:b,11:u,20:17,22:18,23:19,24:20,25:21,26:22,27:A,32:[1,287],33:24,34:y,36:f,38:k,42:28,43:38,44:x,45:39,47:40,60:T,84:d1,85:W,86:J,87:O1,88:M1,89:V,102:w,105:I,106:R,109:N,111:G,113:41,114:P,115:O,116:M,121:U1,122:W1,123:j1,124:z1},{10:i1,60:r1,84:a1,92:288,105:n1,107:241,108:242,109:u1,110:o1,111:l1,112:c1},{10:i1,60:r1,84:a1,92:289,105:n1,107:241,108:242,109:u1,110:o1,111:l1,112:c1},s(j,[2,62]),s(F,[2,33]),s(v,[2,124],{106:R1}),s(v,[2,125],{106:R1})],defaultActions:{},parseError:a2(function(h,d){if (d.recoverable) {
    this.trace(h);
  } else {
    const p=new Error(h);
    p.hash=d;
    throw p;
  }},"parseError"),parse:a2(function(h){
    const d=this;
    let p=[0];
    let o=[];
    let B=[null];
    let t=[];
    const P1=this.table;
    let e="";
    let L=0;
    let Rt=0;
    const jt=2;
    const Nt=1;
    const zt=t.slice.call(arguments,1);
    const U=Object.create(this.lexer);
    const k1={yy:{}};
    for (const Z1 in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy,Z1)) {
        (k1.yy[Z1] = this.yy[Z1]);
      }
    }
    U.setInput(h,k1.yy);
    k1.yy.lexer=U;
    k1.yy.parser=this;

    if (typeof U.yylloc === "undefined") {
      (U.yylloc = {});
    }

    let $1=U.yylloc;t.push($1);const Kt=U.options&&U.options.ranges;

    if (typeof k1.yy.parseError=="function") {
      this.parseError=k1.yy.parseError;
    } else {
      this.parseError=Object.getPrototypeOf(this).parseError;
    }

    function Yt(X){
        p.length=p.length-2*X;
        B.length=B.length-X;
        t.length=t.length-X;
      }a2(Yt,"popStack");function Gt(){
      let X;
      X=o.pop()||U.lex()||Nt;

      if (typeof X!="number") {
        X instanceof Array&&(o=X,X=o.pop());
        X=d.symbols_[X]||X;
      }

      return X;
    }a2(Gt,"lex");
    let Y;
    let m1;
    let Q;
    let tt;
    const N1={};
    let H1;
    let h1;
    let Pt;
    let X1;

    while (true) {
      m1=p[p.length-1];

      if (this.defaultActions[m1]) {
        Q=this.defaultActions[m1];
      } else {
        (Y===null||typeof Y === "undefined")&&(Y=Gt());
        Q=P1[m1]&&P1[m1][Y];
      }

      if (typeof Q === "undefined"||!Q.length||!Q[0]) {
        let et="";X1=[];for (H1 in P1[m1]) {
          if (this.terminals_[H1]&&H1>jt) {
            X1.push(`'${this.terminals_[H1]}'`);
          }
        }

        if (U.showPosition) {
          et=`Parse error on line ${L+1}${`:
  `}${U.showPosition()}${`
  Expecting `}${X1.join(", ")}, got '${this.terminals_[Y]||Y}'`;
        } else {
          et=`Parse error on line ${L+1}: Unexpected ${Y==Nt?"end of input":`'${this.terminals_[Y]||Y}'`}`;
        }

        this.parseError(et,{text:U.match,token:this.terminals_[Y]||Y,line:U.yylineno,loc:$1,expected:X1});
      }

      if (Q[0]instanceof Array&&Q.length>1) {
        throw new Error(`Parse Error: multiple actions possible at state: ${m1}, token: ${Y}`);
      }switch(Q[0]){case 1:
          {
            p.push(Y);
            B.push(U.yytext);
            t.push(U.yylloc);
            p.push(Q[1]);
            Y=null;
            Rt=U.yyleng;
            e=U.yytext;
            L=U.yylineno;
            $1=U.yylloc;
            break;
          }case 2:
          {
            h1=this.productions_[Q[1]][1];
            N1.$=B[B.length-h1];
            N1._$={first_line:t[t.length-(h1||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(h1||1)].first_column,last_column:t[t.length-1].last_column};

            if (Kt) {
              (N1._$.range = [t[t.length-(h1||1)].range[0],t[t.length-1].range[1]]);
            }

            tt=this.performAction.apply(N1,[e,Rt,L,k1.yy,Q[1],B,t].concat(zt));

            if (typeof tt !== "undefined") {
              return tt;
            }

            if (h1) {
              p=p.slice(0,-1*h1*2);
              B=B.slice(0,-1*h1);
              t=t.slice(0,-1*h1);
            }

            p.push(this.productions_[Q[1]][0]);
            B.push(N1.$);
            t.push(N1._$);
            Pt=P1[p[p.length-2]][p[p.length-1]];
            p.push(Pt);
            break;
          }case 3:
          {
            return true;
          }}
    }

    return true;
  },"parse")};

  const Wt = (() => {const g1={EOF:1,parseError:a2(function(d,p){if (this.yy.parser) {
    this.yy.parser.parseError(d,p);
  } else {
    throw new Error(d)
  }},"parseError"),setInput:a2(function(h,d){
    this.yy=d||this.yy||{};
    this._input=h;
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
    const h=this._input[0];
    this.yytext+=h;
    this.yyleng++;
    this.offset++;
    this.match+=h;
    this.matched+=h;
    const d=h.match(/(?:\r\n?|\n).*/g);

    if (d) {
      this.yylineno++;
      this.yylloc.last_line++;
    } else {
      this.yylloc.last_column++;
    }

    if (this.options.ranges) {
      this.yylloc.range[1]++;
    }

    this._input=this._input.slice(1);
    return h;
  },"input"),unput:a2(function(h){
    const d=h.length;
    const p=h.split(/(?:\r\n?|\n)/g);
    this._input=h+this._input;
    this.yytext=this.yytext.substr(0,this.yytext.length-d);
    this.offset-=d;
    const o=this.match.split(/(?:\r\n?|\n)/g);
    this.match=this.match.substr(0,this.match.length-1);
    this.matched=this.matched.substr(0,this.matched.length-1);

    if (p.length-1) {
      (this.yylineno -= p.length-1);
    }

    const B=this.yylloc.range;
    this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:p?(p.length===o.length?this.yylloc.first_column:0)+o[o.length-p.length].length-p[0].length:this.yylloc.first_column-d};

    if (this.options.ranges) {
      (this.yylloc.range = [B[0],B[0]+this.yyleng-d]);
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
  }return this},"reject"),less:a2(function(h){this.unput(this.match.slice(h))},"less"),pastInput:a2(function(){const h=this.matched.substr(0,this.matched.length-this.match.length);return (h.length>20?"...":"")+h.substr(-20).replace(/\n/g,"");},"pastInput"),upcomingInput:a2(function(){
    let h=this.match;

    if (h.length<20) {
      (h += this._input.substr(0,20-h.length));
    }

    return (h.substr(0,20)+(h.length>20?"...":"")).replace(/\n/g,"");
  },"upcomingInput"),showPosition:a2(function(){
    const h=this.pastInput();
    const d=new Array(h.length+1).join("-");
    return `${h+this.upcomingInput()+`
`+d}^`;
  },"showPosition"),test_match:a2(function(h,d){
    let p;
    let o;
    let B;

    if (this.options.backtrack_lexer) {
      B={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};
      this.options.ranges&&(B.yylloc.range=this.yylloc.range.slice(0));
    }

    o=h[0].match(/(?:\r\n?|\n).*/g);

    if (o) {
      (this.yylineno += o.length);
    }

    this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+h[0].length};
    this.yytext+=h[0];
    this.match+=h[0];
    this.matches=h;
    this.yyleng=this.yytext.length;

    if (this.options.ranges) {
      (this.yylloc.range = [this.offset,this.offset+=this.yyleng]);
    }

    this._more=false;
    this._backtrack=false;
    this._input=this._input.slice(h[0].length);
    this.matched+=h[0];
    p=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]);

    if (this.done&&this._input) {
      (this.done = false);
    }

    if (p) {
      return p;
    }

    if(this._backtrack){for (const t in B) {
      this[t]=B[t];
    }return false;}return false;
  },"test_match"),next:a2(function(){
    if (this.done) {
      return this.EOF;
    }

    if (!this._input) {
      (this.done = true);
    }

    let h;
    let d;
    let p;
    let o;

    if (!this._more) {
      this.yytext="";
      this.match="";
    }

    for (var B=this._currentRules(),t=0; t<B.length; t++) {
        p=this._input.match(this.rules[B[t]]);

        if (p&&(!d||p[0].length>d[0].length)) {
          d=p;
          o=t;

          if (this.options.backtrack_lexer) {
            h=this.test_match(p,B[t]);

            if (h!==false) {
              return h;
            }

            if (this._backtrack)
              {d=false;continue} else {
              return false;
            }
          } else if (!this.options.flex) {
            break
          }
        }
      }

    if (d) {
      h=this.test_match(d,B[o]);
      return h!==false?h:false;
    }

    if (this._input==="") {
      return this.EOF;
    }

    return this.parseError(`Lexical error on line ${this.yylineno+1}${`. Unrecognized text.
    `}${this.showPosition()}`,{text:"",token:null,line:this.yylineno});
  },"next"),lex:a2(function(){const d=this.next();return d||this.lex()},"lex"),begin:a2(function(d){this.conditionStack.push(d)},"begin"),popState:a2(function(){const d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a2(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a2(function(d){
    d=this.conditionStack.length-1-Math.abs(d||0);
    return d>=0?this.conditionStack[d]:"INITIAL";
  },"topState"),pushState:a2(function(d){this.begin(d)},"pushState"),stateStackSize:a2(function(){return this.conditionStack.length},"stateStackSize"),options:{},performAction:a2(function(d,p,o,B){switch(o){case 0:
    {
      this.begin("acc_title");
      return 34;
    }case 1:
    {
      this.popState();
      return "acc_title_value";
    }case 2:
    {
      this.begin("acc_descr");
      return 36;
    }case 3:
    {
      this.popState();
      return "acc_descr_value";
    }case 4:
    {
      this.begin("acc_descr_multiline");break;
    }case 5:
    {
      this.popState();break;
    }case 6:
    {
      return"acc_descr_multiline_value";
    }case 7:
    {
      this.pushState("shapeData");
      p.yytext="";
      return 40;
    }case 8:
    {
      this.pushState("shapeDataStr");
      return 40;
    }case 9:
    {
      this.popState();
      return 40;
    }case 10:
    {
      const t=/\n\s*/g;
      p.yytext=p.yytext.replace(t,"<br/>");
      return 40;
    }case 11:
    {
      return 40;
    }case 12:
    {
      this.popState();break;
    }case 13:
    {
      this.begin("callbackname");break;
    }case 14:
    {
      this.popState();break;
    }case 15:
    {
      this.popState();
      this.begin("callbackargs");
      break;
    }case 16:
    {
      return 95;
    }case 17:
    {
      this.popState();break;
    }case 18:
    {
      return 96;
    }case 19:
    {
      return"MD_STR";
    }case 20:
    {
      this.popState();break;
    }case 21:
    {
      this.begin("md_string");break;
    }case 22:
    {
      return"STR";
    }case 23:
    {
      this.popState();break;
    }case 24:
    {
      this.pushState("string");break;
    }case 25:
    {
      return 84;
    }case 26:
    {
      return 102;
    }case 27:
    {
      return 85;
    }case 28:
    {
      return 104;
    }case 29:
    {
      return 86;
    }case 30:
    {
      return 87;
    }case 31:
    {
      return 97;
    }case 32:
    {
      this.begin("click");break;
    }case 33:
    {
      this.popState();break;
    }case 34:
    {
      return 88;
    }case 35:
    {
      if (d.lex.firstGraph()) {
        this.begin("dir");
      }

      return 12;
    }case 36:
    {
      if (d.lex.firstGraph()) {
        this.begin("dir");
      }

      return 12;
    }case 37:
    {
      if (d.lex.firstGraph()) {
        this.begin("dir");
      }

      return 12;
    }case 38:
    {
      return 27;
    }case 39:
    {
      return 32;
    }case 40:
    {
      return 98;
    }case 41:
    {
      return 98;
    }case 42:
    {
      return 98;
    }case 43:
    {
      return 98;
    }case 44:
    {
      this.popState();
      return 13;
    }case 45:
    {
      this.popState();
      return 14;
    }case 46:
    {
      this.popState();
      return 14;
    }case 47:
    {
      this.popState();
      return 14;
    }case 48:
    {
      this.popState();
      return 14;
    }case 49:
    {
      this.popState();
      return 14;
    }case 50:
    {
      this.popState();
      return 14;
    }case 51:
    {
      this.popState();
      return 14;
    }case 52:
    {
      this.popState();
      return 14;
    }case 53:
    {
      this.popState();
      return 14;
    }case 54:
    {
      this.popState();
      return 14;
    }case 55:
    {
      return 121;
    }case 56:
    {
      return 122;
    }case 57:
    {
      return 123;
    }case 58:
    {
      return 124;
    }case 59:
    {
      return 78;
    }case 60:
    {
      return 105;
    }case 61:
    {
      return 111;
    }case 62:
    {
      return 46;
    }case 63:
    {
      return 60;
    }case 64:
    {
      return 44;
    }case 65:
    {
      return 8;
    }case 66:
    {
      return 106;
    }case 67:
    {
      return 115;
    }case 68:
    {
      this.popState();
      return 77;
    }case 69:
    {
      this.pushState("edgeText");
      return 75;
    }case 70:
    {
      return 119;
    }case 71:
    {
      this.popState();
      return 77;
    }case 72:
    {
      this.pushState("thickEdgeText");
      return 75;
    }case 73:
    {
      return 119;
    }case 74:
    {
      this.popState();
      return 77;
    }case 75:
    {
      this.pushState("dottedEdgeText");
      return 75;
    }case 76:
    {
      return 119;
    }case 77:
    {
      return 77;
    }case 78:
    {
      this.popState();
      return 53;
    }case 79:
    {
      return"TEXT";
    }case 80:
    {
      this.pushState("ellipseText");
      return 52;
    }case 81:
    {
      this.popState();
      return 55;
    }case 82:
    {
      this.pushState("text");
      return 54;
    }case 83:
    {
      this.popState();
      return 57;
    }case 84:
    {
      this.pushState("text");
      return 56;
    }case 85:
    {
      return 58;
    }case 86:
    {
      this.pushState("text");
      return 67;
    }case 87:
    {
      this.popState();
      return 64;
    }case 88:
    {
      this.pushState("text");
      return 63;
    }case 89:
    {
      this.popState();
      return 49;
    }case 90:
    {
      this.pushState("text");
      return 48;
    }case 91:
    {
      this.popState();
      return 69;
    }case 92:
    {
      this.popState();
      return 71;
    }case 93:
    {
      return 117;
    }case 94:
    {
      this.pushState("trapText");
      return 68;
    }case 95:
    {
      this.pushState("trapText");
      return 70;
    }case 96:
    {
      return 118;
    }case 97:
    {
      return 67;
    }case 98:
    {
      return 90;
    }case 99:
    {
      return"SEP";
    }case 100:
    {
      return 89;
    }case 101:
    {
      return 115;
    }case 102:
    {
      return 111;
    }case 103:
    {
      return 44;
    }case 104:
    {
      return 109;
    }case 105:
    {
      return 114;
    }case 106:
    {
      return 116;
    }case 107:
    {
      this.popState();
      return 62;
    }case 108:
    {
      this.pushState("text");
      return 62;
    }case 109:
    {
      this.popState();
      return 51;
    }case 110:
    {
      this.pushState("text");
      return 50;
    }case 111:
    {
      this.popState();
      return 31;
    }case 112:
    {
      this.pushState("text");
      return 29;
    }case 113:
    {
      this.popState();
      return 66;
    }case 114:
    {
      this.pushState("text");
      return 65;
    }case 115:
    {
      return"TEXT";
    }case 116:
    {
      return"QUOTE";
    }case 117:
    {
      return 9;
    }case 118:
    {
      return 10;
    }case 119:
    {
      return 11
    }}},"anonymous"),rules:[/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:@\{)/,/^(?:["])/,/^(?:["])/,/^(?:[^\"]+)/,/^(?:[^}^"]+)/,/^(?:\})/,/^(?:call[\s]+)/,/^(?:\([\s]*\))/,/^(?:\()/,/^(?:[^(]*)/,/^(?:\))/,/^(?:[^)]*)/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["][`])/,/^(?:[^"]+)/,/^(?:["])/,/^(?:["])/,/^(?:style\b)/,/^(?:default\b)/,/^(?:linkStyle\b)/,/^(?:interpolate\b)/,/^(?:classDef\b)/,/^(?:class\b)/,/^(?:href[\s])/,/^(?:click[\s]+)/,/^(?:[\s\n])/,/^(?:[^\s\n]*)/,/^(?:flowchart-elk\b)/,/^(?:graph\b)/,/^(?:flowchart\b)/,/^(?:subgraph\b)/,/^(?:end\b\s*)/,/^(?:_self\b)/,/^(?:_blank\b)/,/^(?:_parent\b)/,/^(?:_top\b)/,/^(?:(\r?\n)*\s*\n)/,/^(?:\s*LR\b)/,/^(?:\s*RL\b)/,/^(?:\s*TB\b)/,/^(?:\s*BT\b)/,/^(?:\s*TD\b)/,/^(?:\s*BR\b)/,/^(?:\s*<)/,/^(?:\s*>)/,/^(?:\s*\^)/,/^(?:\s*v\b)/,/^(?:.*direction\s+TB[^\n]*)/,/^(?:.*direction\s+BT[^\n]*)/,/^(?:.*direction\s+RL[^\n]*)/,/^(?:.*direction\s+LR[^\n]*)/,/^(?:[^\s\"]+@(?=[^\{\"]))/,/^(?:[0-9]+)/,/^(?:#)/,/^(?::::)/,/^(?::)/,/^(?:&)/,/^(?:;)/,/^(?:,)/,/^(?:\*)/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?--\s*)/,/^(?:[^-]|-(?!-)+)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?==\s*)/,/^(?:[^=]|=(?!))/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?:\s*[xo<]?-\.\s*)/,/^(?:[^\.]|\.(?!))/,/^(?:\s*~~[\~]+\s*)/,/^(?:[-/\)][\)])/,/^(?:[^\(\)\[\]\{\}]|!\)+)/,/^(?:\(-)/,/^(?:\]\))/,/^(?:\(\[)/,/^(?:\]\])/,/^(?:\[\[)/,/^(?:\[\|)/,/^(?:>)/,/^(?:\)\])/,/^(?:\[\()/,/^(?:\)\)\))/,/^(?:\(\(\()/,/^(?:[\\(?=\])][\]])/,/^(?:\/(?=\])\])/,/^(?:\/(?!\])|\\(?!\])|[^\\\[\]\(\)\{\}\/]+)/,/^(?:\[\/)/,/^(?:\[\\)/,/^(?:<)/,/^(?:>)/,/^(?:\^)/,/^(?:\\\|)/,/^(?:v\b)/,/^(?:\*)/,/^(?:#)/,/^(?:&)/,/^(?:([A-Za-z0-9!"\#$%&'*+\.`?\\_\/]|-(?=[^\>\-\.])|(?!))+)/,/^(?:-)/,/^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,/^(?:\|)/,/^(?:\|)/,/^(?:\))/,/^(?:\()/,/^(?:\])/,/^(?:\[)/,/^(?:(\}))/,/^(?:\{)/,/^(?:[^\[\]\(\)\{\}\|\"]+)/,/^(?:")/,/^(?:(\r?\n)+)/,/^(?:\s)/,/^(?:$)/],conditions:{shapeDataEndBracket:{rules:[21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},shapeDataStr:{rules:[9,10,21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},shapeData:{rules:[8,11,12,21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},callbackargs:{rules:[17,18,21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},callbackname:{rules:[14,15,16,21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},href:{rules:[21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},click:{rules:[21,24,33,34,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},dottedEdgeText:{rules:[21,24,74,76,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},thickEdgeText:{rules:[21,24,71,73,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},edgeText:{rules:[21,24,68,70,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},trapText:{rules:[21,24,77,80,82,84,88,90,91,92,93,94,95,108,110,112,114],inclusive:false},ellipseText:{rules:[21,24,77,78,79,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},text:{rules:[21,24,77,80,81,82,83,84,87,88,89,90,94,95,107,108,109,110,111,112,113,114,115],inclusive:false},vertex:{rules:[21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},dir:{rules:[21,24,44,45,46,47,48,49,50,51,52,53,54,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},acc_descr_multiline:{rules:[5,6,21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},acc_descr:{rules:[3,21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},acc_title:{rules:[1,21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},md_string:{rules:[19,20,21,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},string:{rules:[21,22,23,24,77,80,82,84,88,90,94,95,108,110,112,114],inclusive:false},INITIAL:{rules:[0,2,4,7,13,21,24,25,26,27,28,29,30,31,32,35,36,37,38,39,40,41,42,43,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,71,72,74,75,77,80,82,84,85,86,88,90,94,95,96,97,98,99,100,101,102,103,104,105,106,108,110,112,114,116,117,118,119],inclusive:true}}};return g1})();

  J1.lexer=Wt;function q1(){this.yy={}}
  a2(q1,"Parser");
  q1.prototype=J1;
  J1.Parser=q1;
  return new q1;
})();

rt.parser=rt;
const Mt=rt;
const Ut=Object.assign({},Mt);
Ut.parse=s=>{const i=s.replace(/}\s*\n/g,`}
`);return Mt.parse(i)};
const Ae=Ut;

const ke=a2((s,i)=>{
  const r=c;
  const a=r(s,"r");
  const n=r(s,"g");
  const l=r(s,"b");
  return av(a,n,l,i);
},"fade");

const me=a2(s => `.label {
    font-family: ${s.fontFamily};
    color: ${s.nodeTextColor||s.textColor};
  }
  .cluster-label text {
    fill: ${s.titleColor};
  }
  .cluster-label span {
    color: ${s.titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .label text,span {
    fill: ${s.nodeTextColor||s.textColor};
    color: ${s.nodeTextColor||s.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${s.mainBkg};
    stroke: ${s.nodeBorder};
    stroke-width: 1px;
  }
  .rough-node .label text , .node .label text, .image-shape .label, .icon-shape .label {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .rough-node .label,.node .label, .image-shape .label, .icon-shape .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }


  .root .anchor path {
    fill: ${s.lineColor} !important;
    stroke-width: 0;
    stroke: ${s.lineColor};
  }

  .arrowheadPath {
    fill: ${s.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${s.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${s.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${s.edgeLabelBackground};
    p {
      background-color: ${s.edgeLabelBackground};
    }
    rect {
      opacity: 0.5;
      background-color: ${s.edgeLabelBackground};
      fill: ${s.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${ke(s.edgeLabelBackground,0.5/* .5 */)};
    // background-color:
  }

  .cluster rect {
    fill: ${s.clusterBkg};
    stroke: ${s.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${s.titleColor};
  }

  .cluster span {
    color: ${s.titleColor};
  }
  /* .cluster div {
    color: ${s.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${s.fontFamily};
    font-size: 12px;
    background: ${s.tertiaryColor};
    border: 1px solid ${s.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${s.textColor};
  }

  rect.text {
    fill: none;
    stroke-width: 0;
  }

  .icon-shape, .image-shape {
    background-color: ${s.edgeLabelBackground};
    p {
      background-color: ${s.edgeLabelBackground};
      padding: 2px;
    }
    rect {
      opacity: 0.5;
      background-color: ${s.edgeLabelBackground};
      fill: ${s.edgeLabelBackground};
    }
    text-align: center;
  }
  ${g()}
`,"getStyles");

const Ee=me;

export const diagram = {parser:Ae,get db() {return new pe},renderer:be,styles:Ee,init:a2(s=>{
  if (!s.flowchart) {
    (s.flowchart = {});
  }

  if (s.layout) {
    aj({layout:s.layout});
  }

  s.flowchart.arrowMarkerAbsolute=s.arrowMarkerAbsolute;
  aj({flowchart:{arrowMarkerAbsolute:s.arrowMarkerAbsolute}});
},"init")};
//# sourceMappingURL=flowDiagram-NV44I4VS-X7J7-73G.js.map

export{diagram as diagram};
//# sourceMappingURL=flowDiagram-NV44I4VS-X7J7-73G.js.map
