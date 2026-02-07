import{p}from"./chunk-4BX2VUAB-nk385TCt.js";import{I as I_1}from"./chunk-QZHKN3VN-BKR5XpEa.js";import{a2,ao,an,a3,a4,a5,a6,a9,a7,a8,am,az,at,ag,aA,aB,aC,aD}from"./index-CgwAo6pj.js";import{p as p_1}from"./treemap-KMMF4GRG-CK1q9nlx.js";import"./_baseUniq-DqA0xXry.js";import"./_basePickBy-D-jIhBTu.js";import"./clone-M7Y9qM5V.js";
const x={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4};
const hr=aC.gitGraph;

var I=a2(() => aA({...hr,...aB().gitGraph}),"getConfig");

const c=new I_1(()=>{
  const t=I();
  const r=t.mainBranchName;
  const s=t.mainBranchOrder;
  return{mainBranchName:r,commits:new Map,head:null,branchConfig:new Map([[r,{name:r,order:s}]]),branches:new Map([[r,null]]),currBranch:r,direction:"LR",seq:0,options:{}}
});

function q(){return aD({length:7});}a2(q,"getID");function D(t,r){const s=Object.create(null);return t.reduce((n,e)=>{
  const a=r(e);

  if (!s[a]) {
    s[a]=true;
    n.push(e);
  }

  return n;
},[]);}a2(D,"uniqBy");
const lr=a2(t => {c.records.direction=t},"setDirection");

const $r=a2(t => {
  a9.debug("options str",t);
  t=t?.trim();
  t=t||"{}";
  try{c.records.options=JSON.parse(t)}catch(r){a9.error("error while parsing gitGraph options",r.message)}
},"setOptions");

const fr=a2(() => c.records.options,"getOptions");

const gr=a2(t => {
  let r=t.msg;
  let s=t.id;
  const n=t.type;let e=t.tags;
  a9.info("commit",r,s,n,e);
  a9.debug("Entering commit:",r,s,n,e);
  const a=I();
  s=ag.sanitizeText(s,a);
  r=ag.sanitizeText(r,a);

  e=e?.map(o => ag.sanitizeText(o,a));

  const d={id:s||`${c.records.seq}-${q()}`,message:r,seq:c.records.seq++,type:n??x.NORMAL,tags:e??[],parents:c.records.head==null?[]:[c.records.head.id],branch:c.records.currBranch};
  c.records.head=d;
  a9.info("main branch",a.mainBranchName);

  if (c.records.commits.has(d.id)) {
    a9.warn(`Commit ID ${d.id} already exists`);
  }

  c.records.commits.set(d.id,d);
  c.records.branches.set(c.records.currBranch,d.id);
  a9.debug(`in pushCommit ${d.id}`);
},"commit");

const yr=a2(t => {
  let r=t.name;const s=t.order;
  r=ag.sanitizeText(r,I());

  if (c.records.branches.has(r)) {
    throw new Error(`Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout ${r}")`);
  }

  c.records.branches.set(r,c.records.head!=null?c.records.head.id:null);
  c.records.branchConfig.set(r,{name:r,order:s});
  F(r);
  a9.debug("in createBranch");
},"branch");

const ur=a2(t=>{
  let r=t.branch;
  let s=t.id;
  const n=t.type;
  const e=t.tags;
  const a=I();
  r=ag.sanitizeText(r,a);

  if (s) {
    (s = ag.sanitizeText(s,a));
  }

  const d=c.records.branches.get(c.records.currBranch);
  const o=c.records.branches.get(r);
  const f=d?c.records.commits.get(d):void 0;
  const h=o?c.records.commits.get(o):void 0;
  if (f&&h&&f.branch===r) {
    throw new Error(`Cannot merge branch '${r}' into itself.`);
  }if(c.records.currBranch===r){
      const i=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');
      i.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["branch abc"]};
      throw i;
    }if(f===void 0||!f){
      const i=new Error(`Incorrect usage of "merge". Current branch (${c.records.currBranch})has no commits`);
      i.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["commit"]};
      throw i;
    }if(!c.records.branches.has(r)){
      const i=new Error(`Incorrect usage of "merge". Branch to be merged (${r}) does not exist`);
      i.hash={text:`merge ${r}`,token:`merge ${r}`,expected:[`branch ${r}`]};
      throw i;
    }if(h===void 0||!h){
      const i=new Error(`Incorrect usage of "merge". Branch to be merged (${r}) has no commits`);
      i.hash={text:`merge ${r}`,token:`merge ${r}`,expected:['"commit"']};
      throw i;
    }if(f===h){
      const i=new Error('Incorrect usage of "merge". Both branches have same head');
      i.hash={text:`merge ${r}`,token:`merge ${r}`,expected:["branch abc"]};
      throw i;
    }if(s&&c.records.commits.has(s)){
      const i=new Error(`Incorrect usage of "merge". Commit with id:${s} already exists, use different custom id`);
      i.hash={text:`merge ${r} ${s} ${n} ${e?.join(" ")}`,token:`merge ${r} ${s} ${n} ${e?.join(" ")}`,expected:[`merge ${r} ${s}_UNIQUE ${n} ${e?.join(" ")}`]};
      throw i;
    }
  const $=o||"";
  const g={id:s||`${c.records.seq}-${q()}`,message:`merged branch ${r} into ${c.records.currBranch}`,seq:c.records.seq++,parents:c.records.head==null?[]:[c.records.head.id,$],branch:c.records.currBranch,type:x.MERGE,customType:n,customId:!!s,tags:e??[]};
  c.records.head=g;
  c.records.commits.set(g.id,g);
  c.records.branches.set(c.records.currBranch,g.id);
  a9.debug(c.records.branches);
  a9.debug("in mergeBranch");
},"merge");

const pr=a2(t => {
  let r=t.id;
  let s=t.targetId;
  let n=t.tags;
  let e=t.parent;
  a9.debug("Entering cherryPick:",r,s,n);const a=I();
  r=ag.sanitizeText(r,a);
  s=ag.sanitizeText(s,a);

  n=n?.map(f => ag.sanitizeText(f,a));

  e=ag.sanitizeText(e,a);

  if (!r||!c.records.commits.has(r)) {
    const f=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
    f.hash={text:`cherryPick ${r} ${s}`,token:`cherryPick ${r} ${s}`,expected:["cherry-pick abc"]};
    throw f;
  }

  const d=c.records.commits.get(r);if (d===void 0||!d) {
    throw new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');
  }if (e&&!(Array.isArray(d.parents)&&d.parents.includes(e))) {
    throw new Error("Invalid operation: The specified parent commit is not an immediate parent of the cherry-picked commit.");
  }const o=d.branch;if (d.type===x.MERGE&&!e) {
    throw new Error("Incorrect usage of cherry-pick: If the source commit is a merge commit, an immediate parent commit must be specified.");
  }if(!s||!c.records.commits.has(s)){
    if(o===c.records.currBranch){
      const g=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');
      g.hash={text:`cherryPick ${r} ${s}`,token:`cherryPick ${r} ${s}`,expected:["cherry-pick abc"]};
      throw g;
    }const f=c.records.branches.get(c.records.currBranch);if(f===void 0||!f){
      const g=new Error(`Incorrect usage of "cherry-pick". Current branch (${c.records.currBranch})has no commits`);
      g.hash={text:`cherryPick ${r} ${s}`,token:`cherryPick ${r} ${s}`,expected:["cherry-pick abc"]};
      throw g;
    }const h=c.records.commits.get(f);if(h===void 0||!h){
      const g=new Error(`Incorrect usage of "cherry-pick". Current branch (${c.records.currBranch})has no commits`);
      g.hash={text:`cherryPick ${r} ${s}`,token:`cherryPick ${r} ${s}`,expected:["cherry-pick abc"]};
      throw g;
    }const $={id:`${c.records.seq}-${q()}`,message:`cherry-picked ${d?.message} into ${c.records.currBranch}`,seq:c.records.seq++,parents:c.records.head==null?[]:[c.records.head.id,d.id],branch:c.records.currBranch,type:x.CHERRY_PICK,tags:n?n.filter(Boolean):[`cherry-pick:${d.id}${d.type===x.MERGE?`|parent:${e}`:""}`]};
    c.records.head=$;
    c.records.commits.set($.id,$);
    c.records.branches.set(c.records.currBranch,$.id);
    a9.debug(c.records.branches);
    a9.debug("in cherryPick");
  }
},"cherryPick");

var F=a2(t => {
  t=ag.sanitizeText(t,I());

  if (c.records.branches.has(t))
    {
      c.records.currBranch=t;const r=c.records.branches.get(c.records.currBranch);

      if (r===void 0||!r) {
        c.records.head=null;
      } else {
        c.records.head=c.records.commits.get(r)??null;
      }
    } else {
    const r=new Error(`Trying to checkout branch which is not yet created. (Help try using "branch ${t}")`);
    r.hash={text:`checkout ${t}`,token:`checkout ${t}`,expected:[`branch ${t}`]};
    throw r;
  }
},"checkout");

function P(t,r,s){
  const n=t.indexOf(r);

  if (n===-1) {
    t.push(s);
  } else {
    t.splice(n,1,s);
  }
}a2(P,"upsert");function _(t){
  const r=t.reduce((e, a) => e.seq>a.seq?e:a,t[0]);let s="";t.forEach(e => {
  if (e===r) {
    s+="	*";
  } else {
    s+="	|";
  }
});const n=[s,r.id,r.seq];for (const e in c.records.branches) {
  if (c.records.branches.get(e)===r.id) {
    n.push(e);
  }
}
  a9.debug(n.join(" "));

  if (r.parents&&r.parents.length==2&&r.parents[0]&&r.parents[1]) {
    const e=c.records.commits.get(r.parents[0]);
    P(t,r,e);

    if (r.parents[1]) {
      t.push(c.records.commits.get(r.parents[1]));
    }
  } else {if (r.parents.length==0) {
    return;
  }if(r.parents[0]){const e=c.records.commits.get(r.parents[0]);P(t,r,e)}}

  t=D(t,e => e.id);

  _(t);
}a2(_,"prettyPrintCommitHistory");
const xr=a2(() => {a9.debug(c.records.commits);const t=N()[0];_([t])},"prettyPrint");

const mr=a2(() => {
  c.reset();
  at();
},"clear");

const br=a2(() => [...c.records.branchConfig.values()].map((r, s) => r ?? {...r,order:parseFloat(`0.${s}`)}).sort((r, s) => (r.order??0)-(s.order??0)).map(({name}) => ({
  name:name
})),"getBranchesAsObjArray");

const wr=a2(() => c.records.branches,"getBranches");
const vr=a2(() => c.records.commits,"getCommits");

var N=a2(() => {
  const t=[...c.records.commits.values()];
  t.forEach(r => {a9.debug(r.id)});

  t.sort((r, s) => r.seq-s.seq);

  return t;
},"getCommitsArray");

const Cr=a2(() => c.records.currBranch,"getCurrentBranch");
const Er=a2(() => c.records.direction,"getDirection");
const Tr=a2(() => c.records.head,"getHead");
const S={commitType:x,getConfig:I,setDirection:lr,setOptions:$r,getOptions:fr,commit:gr,branch:yr,merge:ur,cherryPick:pr,checkout:F,prettyPrint:xr,clear:mr,getBranchesAsObjArray:br,getBranches:wr,getCommits:vr,getCommitsArray:N,getCurrentBranch:Cr,getDirection:Er,getHead:Tr,setAccTitle:a6,getAccTitle:a5,getAccDescription:a4,setAccDescription:a3,setDiagramTitle:an,getDiagramTitle:ao};

const Br=a2((t,r)=>{
  p(t,r);

  if (t.dir) {
    r.setDirection(t.dir);
  }

  for (const s of t.statements) {
    Lr(s,r)
  }
},"populate");

var Lr=a2((t,r)=>{
  const n={Commit:a2(e => r.commit(kr(e)),"Commit"),Branch:a2(e => r.branch(Mr(e)),"Branch"),Merge:a2(e => r.merge(Ir(e)),"Merge"),Checkout:a2(e => r.checkout(Rr(e)),"Checkout"),CherryPicking:a2(e => r.cherryPick(Gr(e)),"CherryPicking")}[t.$type];

  if (n) {
    n(t);
  } else {
    a9.error(`Unknown statement type: ${t.$type}`);
  }
},"parseStatement");

var kr=a2(t => ({
  id:t.id,
  msg:t.message??"",
  type:t.type!==void 0?x[t.type]:x.NORMAL,
  tags:t.tags??void 0
}),"parseCommit");

var Mr=a2(t => ({
  name:t.name,
  order:t.order??0
}),"parseBranch");

var Ir=a2(t => ({
  branch:t.branch,
  id:t.id??"",
  type:t.type!==void 0?x[t.type]:void 0,
  tags:t.tags??void 0
}),"parseMerge");

var Rr=a2(t => t.branch,"parseCheckout");

var Gr=a2(t => ({
  id:t.id,
  targetId:"",
  tags:t.tags?.length===0?void 0:t.tags,
  parent:t.parent
}),"parseCherryPicking");

const Or={parse:a2(async t=>{
  const r=await p_1("gitGraph",t);
  a9.debug(r);
  Br(r,S);
},"parse")};

const Ar=a7();
const v=Ar?.gitGraph;
const L=10;
const k=40;
const E=4;
const T=2;
const M=8;
const b=new Map;
const w=new Map;
const O=30;
let R=new Map;
let A=[];
let B=0;
let u="LR";

const qr=a2(()=>{
  b.clear();
  w.clear();
  R.clear();
  B=0;
  A=[];
  u="LR";
},"clear");

const W=a2(t=>{
  const r=document.createElementNS("http://www.w3.org/2000/svg","text");

  (typeof t=="string"?t.split(/\\n|\n|<br\s*\/?>/gi):t).forEach(n=>{
    const e=document.createElementNS("http://www.w3.org/2000/svg","tspan");
    e.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve");
    e.setAttribute("dy","1em");
    e.setAttribute("x","0");
    e.setAttribute("class","row");
    e.textContent=n.trim();
    r.appendChild(e);
  });

  return r;
},"drawText");

const j=a2(t=>{
  let r;
  let s;
  let n;

  if (u==="BT") {
    s=a2((e, a) => e<=a,"comparisonFunc");
    n=Infinity;
  } else {
    s=a2((e, a) => e>=a,"comparisonFunc");
    n=0;
  }

  t.forEach(e=>{
    const a=u==="TB"||u=="BT"?w.get(e)?.y:w.get(e)?.x;

    if (a!==void 0&&s(a,n)) {
      r=e;
      n=a;
    }
  });
  return r;
},"findClosestParent");

const Hr=a2(t=>{
  let r="";
  let s=Infinity;
  t.forEach(n=>{
    const e=w.get(n).y;

    if (e<=s) {
      r=n;
      s=e;
    }
  });
  return r||void 0;
},"findClosestParentBT");

const Pr=a2((t,r,s)=>{
  let n=s;
  let e=s;
  const a=[];

  t.forEach(d=>{
    const o=r.get(d);if (!o) {
        throw new Error(`Commit not found for key ${d}`);
      }

    if (o.parents.length) {
      n=zr(o);
      e=Math.max(n,e);
    } else {
      a.push(o);
    }

    Dr(o,n);
  });

  n=e;
  a.forEach(d=>{Fr(d,n,s)});

  t.forEach(d=>{const o=r.get(d);if(o?.parents.length){
    const f=Hr(o.parents);
    n=w.get(f).y-k;

    if (n<=e) {
      (e = n);
    }

    const h=b.get(o.branch).pos;
    const $=n-L;
    w.set(o.id,{x:h,y:$})
  }});
},"setParallelBTPos");

const _r=a2(t=>{const r=j(t.parents.filter(n => n!==null));if (!r) {
  throw new Error(`Closest parent not found for commit ${t.id}`);
}const s=w.get(r)?.y;if (s===void 0) {
  throw new Error(`Closest parent position not found for commit ${t.id}`);
}return s},"findClosestParentPos");

var zr=a2(t => _r(t)+k,"calculateCommitPosition");

var Dr=a2((t,r)=>{
  const s=b.get(t.branch);if (!s) {
    throw new Error(`Branch not found for commit ${t.id}`);
  }
  const n=s.pos;
  const e=r+L;
  w.set(t.id,{x:n,y:e});
  return {x:n,y:e};
},"setCommitPosition");

var Fr=a2((t,r,s)=>{
  const n=b.get(t.branch);if (!n) {
    throw new Error(`Branch not found for commit ${t.id}`);
  }
  const e=r+s;
  const a=n.pos;
  w.set(t.id,{x:a,y:e})
},"setRootPosition");

const Nr=a2((t,r,s,n,e,a)=>{if (a===x.HIGHLIGHT) {
  t.append("rect").attr("x",s.x-10).attr("y",s.y-10).attr("width",20).attr("height",20).attr("class",`commit ${r.id} commit-highlight${e%M} ${n}-outer`);
  t.append("rect").attr("x",s.x-6).attr("y",s.y-6).attr("width",12).attr("height",12).attr("class",`commit ${r.id} commit${e%M} ${n}-inner`);
} else if (a===x.CHERRY_PICK) {
  t.append("circle").attr("cx",s.x).attr("cy",s.y).attr("r",10).attr("class",`commit ${r.id} ${n}`);
  t.append("circle").attr("cx",s.x-3).attr("cy",s.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${n}`);
  t.append("circle").attr("cx",s.x+3).attr("cy",s.y+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${n}`);
  t.append("line").attr("x1",s.x+3).attr("y1",s.y+1).attr("x2",s.x).attr("y2",s.y-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${n}`);
  t.append("line").attr("x1",s.x-3).attr("y1",s.y+1).attr("x2",s.x).attr("y2",s.y-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${n}`);
} else {
  const d=t.append("circle");
  d.attr("cx",s.x);
  d.attr("cy",s.y);
  d.attr("r",r.type===x.MERGE?9:10);
  d.attr("class",`commit ${r.id} commit${e%M}`);

  if (a===x.MERGE) {
    const o=t.append("circle");
    o.attr("cx",s.x);
    o.attr("cy",s.y);
    o.attr("r",6);
    o.attr("class",`commit ${n} ${r.id} commit${e%M}`);
  }

  if (a===x.REVERSE) {
    t.append("path").attr("d",`M ${s.x-5},${s.y-5}L${s.x+5},${s.y+5}M${s.x-5},${s.y+5}L${s.x+5},${s.y-5}`).attr("class",`commit ${n} ${r.id} commit${e%M}`);
  }
}},"drawCommitBullet");

const Sr=a2((t,r,s,n)=>{if(r.type!==x.CHERRY_PICK&&(r.customId&&r.type===x.MERGE||r.type!==x.MERGE)&&v?.showCommitLabel){
  const e=t.append("g");
  const a=e.insert("rect").attr("class","commit-label-bkg");
  const d=e.append("text").attr("x",n).attr("y",s.y+25).attr("class","commit-label").text(r.id);
  const o=d.node()?.getBBox();
  if (o&&(a.attr("x",s.posWithOffset-o.width/2-T).attr("y",s.y+13.5).attr("width",o.width+2*T).attr("height",o.height+2*T),u==="TB"||u==="BT"?(a.attr("x",s.x-(o.width+4*E+5)).attr("y",s.y-12),d.attr("x",s.x-(o.width+4*E)).attr("y",s.y+o.height-12)):d.attr("x",s.posWithOffset-o.width/2),v.rotateCommitLabel)) {
    if (u==="TB"||u==="BT") {
      d.attr("transform",`rotate(-45, ${s.x}, ${s.y})`);
      a.attr("transform",`rotate(-45, ${s.x}, ${s.y})`);
    } else {
      const f=-7.5-(o.width+10)/25*9.5;
      const h=10+o.width/25*8.5;
      e.attr("transform",`translate(${f}, ${h}) rotate(-45, ${n}, ${s.y})`)
    }
  }
}},"drawCommitLabel");

const Wr=a2((t,r,s,n)=>{if(r.tags.length>0){
  let e=0;
  let a=0;
  let d=0;
  const o=[];for(const f of r.tags.reverse()){
    const h=t.insert("polygon");
    const $=t.append("circle");
    const g=t.append("text").attr("y",s.y-16-e).attr("class","tag-label").text(f);
    const i=g.node()?.getBBox();
    if (!i) {
      throw new Error("Tag bbox not found");
    }
    a=Math.max(a,i.width);
    d=Math.max(d,i.height);
    g.attr("x",s.posWithOffset-i.width/2);
    o.push({tag:g,hole:$,rect:h,yOffset:e});
    e+=20;
  }for(const{tag,hole,rect,yOffset}of o){
    const i=d/2;
    const y=s.y-19.2-yOffset;

    rect.attr("class","tag-label-bkg").attr("points",`
          ${n-a/2-E/2},${y+T}  
          ${n-a/2-E/2},${y-T}
          ${s.posWithOffset-a/2-E},${y-i-T}
          ${s.posWithOffset+a/2+E},${y-i-T}
          ${s.posWithOffset+a/2+E},${y+i+T}
          ${s.posWithOffset-a/2-E},${y+i+T}`);

    hole.attr("cy",y).attr("cx",n-a/2+E/2).attr("r",1.5).attr("class","tag-hole");

    if (u==="TB"||u==="BT") {
      const p=n+yOffset;

      rect.attr("class","tag-label-bkg").attr("points",`
              ${s.x},${p+2}
              ${s.x},${p-2}
              ${s.x+L},${p-i-2}
              ${s.x+L+a+4},${p-i-2}
              ${s.x+L+a+4},${p+i+2}
              ${s.x+L},${p+i+2}`).attr("transform",`translate(12,12) rotate(45, ${s.x},${n})`);

      hole.attr("cx",s.x+E/2).attr("cy",p).attr("transform",`translate(12,12) rotate(45, ${s.x},${n})`);
      tag.attr("x",s.x+5).attr("y",p+3).attr("transform",`translate(14,14) rotate(45, ${s.x},${n})`);
    }
  }
}},"drawCommitTags");

const jr=a2(t=>{switch(t.customType??t.type){case x.NORMAL:
  {
    return"commit-normal";
  }case x.REVERSE:
  {
    return"commit-reverse";
  }case x.HIGHLIGHT:
  {
    return"commit-highlight";
  }case x.MERGE:
  {
    return"commit-merge";
  }case x.CHERRY_PICK:
  {
    return"commit-cherry-pick";
  }default:
  {
    return"commit-normal"
  }}},"getCommitClassType");

const Yr=a2((t,r,s,n)=>{const e={x:0,y:0};if (t.parents.length>0)
  {const a=j(t.parents);if(a){
    const d=n.get(a)??e;

    if (r==="TB") {
      return d.y+k;
    }

    if (r==="BT") {
      return (n.get(t.id)??e).y-k;
    }

    return d.x+k;
  }} else {
  return r==="TB"?O:r==="BT"?(n.get(t.id)??e).y-k:0;
}return 0},"calculatePosition");

const Kr=a2((t,r,s)=>{
  const n=u==="BT"&&s?r:r+L;
  const e=u==="TB"||u==="BT"?n:b.get(t.branch)?.pos;
  const a=u==="TB"||u==="BT"?b.get(t.branch)?.pos:n;
  if (a===void 0||e===void 0) {
    throw new Error(`Position were undefined for commit ${t.id}`);
  }return{x:a,y:e,posWithOffset:n}
},"getCommitPosition");

const z=a2((t,r,s)=>{
  if (!v) {
    throw new Error("GitGraph config not found");
  }
  const n=t.append("g").attr("class","commit-bullets");
  const e=t.append("g").attr("class","commit-labels");
  let a=u==="TB"||u==="BT"?O:0;
  const d=[...r.keys()];
  const o=v?.parallelCommits??false;

  const f=a2(($,g)=>{
    const i=r.get($)?.seq;
    const y=r.get(g)?.seq;
    return i!==void 0&&y!==void 0?i-y:0
  },"sortKeys");

  let h=d.sort(f);

  if (u==="BT") {
    o&&Pr(h,r,a);
    h=h.reverse();
  }

  h.forEach($=>{
    const g=r.get($);if (!g) {
        throw new Error(`Commit not found for key ${$}`);
      }

    if (o) {
      (a = Yr(g,u,a,w));
    }

    const i=Kr(g,a,o);if(s){
        const y=jr(g);
        const p=g.customType??g.type;
        const H=b.get(g.branch)?.index??0;
        Nr(n,g,i,y,H,p);
        Sr(e,g,i,a);
        Wr(e,g,i,a);
      }

    if (u==="TB"||u==="BT") {
      w.set(g.id,{x:i.x,y:i.posWithOffset});
    } else {
      w.set(g.id,{x:i.posWithOffset,y:i.y});
    }

    a=u==="BT"&&o?a+k:a+k+L;

    if (a>B) {
      (B = a);
    }
  });
},"drawCommits");

const Ur=a2((t,r,s,n,e)=>{
  const d=(u==="TB"||u==="BT"?s.x<n.x:s.y<n.y)?r.branch:t.branch;

  const o=a2(h => h.branch===d,"isOnBranchToGetCurve");

  const f=a2(h => h.seq>t.seq&&h.seq<r.seq,"isBetweenCommits");

  return [...e.values()].some(h => f(h)&&o(h));
},"shouldRerouteArrow");

const G=a2((t,r,s=0)=>{const n=t+Math.abs(t-r)/2;if (s>5) {
  return n;
}if (A.every(d => Math.abs(d-n)>=10)) {
  A.push(n);
  return n;
}const a=Math.abs(t-r);return G(t,r-a/5,s+1)},"findLane");

const Vr=a2((t,r,s,n)=>{
  const e=w.get(r.id);
  const a=w.get(s.id);
  if (e===void 0||a===void 0) {
    throw new Error(`Commit positions not found for commits ${r.id} and ${s.id}`);
  }const d=Ur(r,s,e,a,n);
  let o="";
  let f="";
  let h=0;
  let $=0;
  let g=b.get(s.branch)?.index;

  if (s.type===x.MERGE&&r.id!==s.parents[0]) {
    (g = b.get(r.branch)?.index);
  }

  let i;if (d) {
    o="A 10 10, 0, 0, 0,";
    f="A 10 10, 0, 0, 1,";
    h=10;
    $=10;
    const y=e.y<a.y?G(e.y,a.y):G(a.y,e.y);
    const p=e.x<a.x?G(e.x,a.x):G(a.x,e.x);

    if (u==="TB") {
      if (e.x<a.x) {
        i=`M ${e.x} ${e.y} L ${p-h} ${e.y} ${f} ${p} ${e.y+$} L ${p} ${a.y-h} ${o} ${p+$} ${a.y} L ${a.x} ${a.y}`;
      } else {
        g=b.get(r.branch)?.index;
        i=`M ${e.x} ${e.y} L ${p+h} ${e.y} ${o} ${p} ${e.y+$} L ${p} ${a.y-h} ${f} ${p-$} ${a.y} L ${a.x} ${a.y}`;
      }
    } else if (u==="BT") {
      if (e.x<a.x) {
        i=`M ${e.x} ${e.y} L ${p-h} ${e.y} ${o} ${p} ${e.y-$} L ${p} ${a.y+h} ${f} ${p+$} ${a.y} L ${a.x} ${a.y}`;
      } else {
        g=b.get(r.branch)?.index;
        i=`M ${e.x} ${e.y} L ${p+h} ${e.y} ${f} ${p} ${e.y-$} L ${p} ${a.y+h} ${o} ${p-$} ${a.y} L ${a.x} ${a.y}`;
      }
    } else if (e.y<a.y) {
      i=`M ${e.x} ${e.y} L ${e.x} ${y-h} ${o} ${e.x+$} ${y} L ${a.x-h} ${y} ${f} ${a.x} ${y+$} L ${a.x} ${a.y}`;
    } else {
      g=b.get(r.branch)?.index;
      i=`M ${e.x} ${e.y} L ${e.x} ${y+h} ${f} ${e.x+$} ${y} L ${a.x-h} ${y} ${o} ${a.x} ${y-$} L ${a.x} ${a.y}`;
    }
  } else {
    o="A 20 20, 0, 0, 0,";
    f="A 20 20, 0, 0, 1,";
    h=20;
    $=20;

    if (u==="TB") {
      e.x<a.x&&(s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${e.x} ${a.y-h} ${o} ${e.x+$} ${a.y} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${a.x-h} ${e.y} ${f} ${a.x} ${e.y+$} L ${a.x} ${a.y}`);
      e.x>a.x&&(o="A 20 20, 0, 0, 0,",f="A 20 20, 0, 0, 1,",h=20,$=20,s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${e.x} ${a.y-h} ${f} ${e.x-$} ${a.y} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${a.x+h} ${e.y} ${o} ${a.x} ${e.y+$} L ${a.x} ${a.y}`);
      e.x===a.x&&(i=`M ${e.x} ${e.y} L ${a.x} ${a.y}`);
    } else if (u==="BT") {
      e.x<a.x&&(s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${e.x} ${a.y+h} ${f} ${e.x+$} ${a.y} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${a.x-h} ${e.y} ${o} ${a.x} ${e.y-$} L ${a.x} ${a.y}`);
      e.x>a.x&&(o="A 20 20, 0, 0, 0,",f="A 20 20, 0, 0, 1,",h=20,$=20,s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${e.x} ${a.y+h} ${o} ${e.x-$} ${a.y} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${a.x-h} ${e.y} ${o} ${a.x} ${e.y-$} L ${a.x} ${a.y}`);
      e.x===a.x&&(i=`M ${e.x} ${e.y} L ${a.x} ${a.y}`);
    } else {
      e.y<a.y&&(s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${a.x-h} ${e.y} ${f} ${a.x} ${e.y+$} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${e.x} ${a.y-h} ${o} ${e.x+$} ${a.y} L ${a.x} ${a.y}`);
      e.y>a.y&&(s.type===x.MERGE&&r.id!==s.parents[0]?i=`M ${e.x} ${e.y} L ${a.x-h} ${e.y} ${o} ${a.x} ${e.y-$} L ${a.x} ${a.y}`:i=`M ${e.x} ${e.y} L ${e.x} ${a.y+h} ${f} ${e.x+$} ${a.y} L ${a.x} ${a.y}`);
      e.y===a.y&&(i=`M ${e.x} ${e.y} L ${a.x} ${a.y}`);
    }
  }if (i===void 0) {
      throw new Error("Line definition not found");
    }t.append("path").attr("d",i).attr("class",`arrow arrow${g%M}`)
},"drawArrow");

const Xr=a2((t,r)=>{const s=t.append("g").attr("class","commit-arrows");[...r.keys()].forEach(n=>{
  const e=r.get(n);

  if (e.parents&&e.parents.length>0) {
    e.parents.forEach(a=>{Vr(s,r.get(a),e,r)});
  }
})},"drawArrows");

const Jr=a2((t,r)=>{const s=t.append("g");r.forEach((n,e)=>{
  const a=e%M;
  const d=b.get(n.name)?.pos;
  if (d===void 0) {
    throw new Error(`Position not found for branch ${n.name}`);
  }const o=s.append("line");
  o.attr("x1",0);
  o.attr("y1",d);
  o.attr("x2",B);
  o.attr("y2",d);
  o.attr("class",`branch branch${a}`);

  if (u==="TB") {
    o.attr("y1",O);
    o.attr("x1",d);
    o.attr("y2",B);
    o.attr("x2",d);
  } else if (u==="BT") {
    o.attr("y1",B);
    o.attr("x1",d);
    o.attr("y2",O);
    o.attr("x2",d);
  }

  A.push(d);
  const f=n.name;
  const h=W(f);
  const $=s.insert("rect");
  const i=s.insert("g").attr("class","branchLabel").insert("g").attr("class",`label branch-label${a}`);
  i.node().appendChild(h);const y=h.getBBox();
  $.attr("class",`branchLabelBkg label${a}`).attr("rx",4).attr("ry",4).attr("x",-y.width-4-(v?.rotateCommitLabel===true?30:0)).attr("y",-y.height/2+8).attr("width",y.width+18).attr("height",y.height+4);
  i.attr("transform",`translate(${-y.width-14-(v?.rotateCommitLabel===true?30:0)}, ${d-y.height/2-1})`);

  if (u==="TB") {
    $.attr("x",d-y.width/2-10).attr("y",0);
    i.attr("transform",`translate(${d-y.width/2-5}, 0)`);
  } else if (u==="BT") {
    $.attr("x",d-y.width/2-10).attr("y",B);
    i.attr("transform",`translate(${d-y.width/2-5}, ${B})`);
  } else {
    $.attr("transform",`translate(-19, ${d-y.height/2})`);
  }
})},"drawBranches");

const Qr=a2((t, r, s, n, e) => {
  b.set(t,{pos:r,index:s});
  r+=50+(e?40:0)+(u==="TB"||u==="BT"?n.width/2:0);
  return r;
},"setBranchPosition");

const Zr=a2((t, r, s, n) => {
  qr();

  a9.debug("in gitgraph renderer",t+`
  `,"id:",r,s);

  if (!v) {
    throw new Error("GitGraph config not found");
  }

  const e=v.rotateCommitLabel??false;
  const a=n.db;
  R=a.getCommits();const d=a.getBranchesAsObjArray();u=a.getDirection();const o=a8(`[id="${r}"]`);let f=0;

  d.forEach((h,$)=>{
    const g=W(h.name);
    const i=o.append("g");
    const y=i.insert("g").attr("class","branchLabel");
    const p=y.insert("g").attr("class","label branch-label");
    p.node()?.appendChild(g);const H=g.getBBox();
    f=Qr(h.name,f,$,H,e);
    p.remove();
    y.remove();
    i.remove();
  });

  z(o,R,false);

  if (v.showBranches) {
    Jr(o,d);
  }

  Xr(o,R);
  z(o,R,true);
  am.insertTitle(o,"gitTitleText",v.titleTopMargin??0,a.getDiagramTitle());
  az(void 0,o,v.diagramPadding,v.useMaxWidth);
},"draw");

const re={draw:Zr};

const ee=a2(t => `
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(r => `
        .branch-label${r} { fill: ${t[`gitBranchLabel${r}`]}; }
        .commit${r} { stroke: ${t[`git${r}`]}; fill: ${t[`git${r}`]}; }
        .commit-highlight${r} { stroke: ${t[`gitInv${r}`]}; fill: ${t[`gitInv${r}`]}; }
        .label${r}  { fill: ${t[`git${r}`]}; }
        .arrow${r} { stroke: ${t[`git${r}`]}; }
        `).join(`
`)}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`,"getStyles");

const te=ee;

export const diagram = {parser:Or,db:S,renderer:re,styles:te};
//# sourceMappingURL=gitGraphDiagram-NY62KEGX-DFlr2ZU5.js.map

export{diagram as diagram};
//# sourceMappingURL=gitGraphDiagram-NY62KEGX-DFlr2ZU5.js.map
