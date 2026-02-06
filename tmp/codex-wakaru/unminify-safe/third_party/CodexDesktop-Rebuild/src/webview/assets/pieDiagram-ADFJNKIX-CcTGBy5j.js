import{aO,aJ,bA,a2,a4,a3,a5,a6,ao,an,a9,a7,aA,aE,aY,aa,at,aC}from"./index-CgwAo6pj.js";import{a2 as a2_1}from"./chunk-4BX2VUAB-nk385TCt.js";import{a2 as a2_2}from"./treemap-KMMF4GRG-CK1q9nlx.js";import{d}from"./arc-8gtVlnzN.js";import{o}from"./ordinal-Cboi1Yqb.js";import"./_baseUniq-DqA0xXry.js";import"./_basePickBy-D-jIhBTu.js";import"./clone-M7Y9qM5V.js";import"./init-Gi6I4Gst.js";function oe(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ce(e){return e}function ue(...args) {
  let e=ce;
  let a=oe;
  let f=null;
  let x=aO(0);
  let s=aO(aJ);
  let o=aO(0);

  class l {
    constructor(t) {
      let n;
      const c=(t=bA(t)).length;
      let d;
      let y;
      let h=0;
      const u=new Array(c);
      const i=new Array(c);
      let v=+x.apply(this,args);
      const A=Math.min(aJ,Math.max(-aJ,s.apply(this,args)-v));
      let m;
      const D=Math.min(Math.abs(A)/c,o.apply(this,args));
      const $=D*(A<0?-1:1);
      let g;
      for (n=0; n<c; ++n) {
        if ((g=i[u[n]=n]=+e(t[n],n,t))>0) {
          (h += g);
        }
      }

      if (a!=null) {
        u.sort((w, C) => a(i[w],i[C]));
      } else if (f!=null) {
        u.sort((w, C) => f(t[w],t[C]));
      }

      n=0;

      for (y=h?(A-c*$)/h:0; n<c; ++n,v=m) {
        d=u[n];
        g=i[d];
        m=v+(g>0?g*y:0)+$;
        i[d]={data:t[d],index:n,value:g,startAngle:v,endAngle:m,padAngle:D};
      }

      return i
    }

    static value(t) {return args.length?(e=typeof t=="function"?t:aO(+t),l):e;}
    static sortValues(t) {return args.length?(a=t,f=null,l):a;}
    static sort(t) {return args.length?(f=t,a=null,l):f;}
    static startAngle(t) {return args.length?(x=typeof t=="function"?t:aO(+t),l):x;}
    static endAngle(t) {return args.length?(s=typeof t=="function"?t:aO(+t),l):s;}
    static padAngle(t) {return args.length?(o=typeof t=="function"?t:aO(+t),l):o;}
  }

  return l;
}
const pe=aC.pie;
const G={sections:new Map,showData:false};
let T=G.sections;
let N=G.showData;
const de=structuredClone(pe);

const ge=a2(() => structuredClone(de),"getConfig");

const fe=a2(()=>{
  T=new Map;
  N=G.showData;
  at();
},"clear");

const me=a2(({label,value})=>{
  if (value<0) {
    throw new Error(`"${label}" has invalid value: ${value}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
  }

  if (!T.has(label)) {
    T.set(label,value);
    a9.debug(`added new section: ${label}, with value: ${value}`);
  }
},"addSection");

const he=a2(() => T,"getSections");

const ve=a2(e=>{N=e},"setShowData");

const Se=a2(() => N,"getShowData");

const L={getConfig:ge,clear:fe,setDiagramTitle:an,getDiagramTitle:ao,setAccTitle:a6,getAccTitle:a5,setAccDescription:a3,getAccDescription:a4,addSection:me,getSections:he,setShowData:ve,getShowData:Se};

const xe=a2((e,a)=>{
  a2_1(e,a);
  a.setShowData(e.showData);
  e.sections.map(a.addSection);
},"populateDb");

const ye={parse:a2(async e=>{
  const a=await a2_2("pie",e);
  a9.debug(a);
  xe(a,L);
},"parse")};

const Ae=a2(e => `
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles");

const we=Ae;

const Ce=a2(e=>{
  const a=[...e.values()].reduce((s, o) => s+o,0);

  const f=[...e.entries()].map(([s,o]) => ({
    label:s,
    value:o
  })).filter(s => s.value/a*100>=1).sort((s, o) => o.value-s.value);

  return ue().value(s => s.value)(f);
},"createPieArcs");

const De=a2((e,a,f,x)=>{
  a9.debug(`rendering pie chart
  `+e);
  const s=x.db;
  const o=a7();
  const l=aA(s.getConfig(),o.pie);
  const t=40;
  const n=18;
  const c=4;
  const d=450;
  const y=d;
  const h=aE(a);
  const u=h.append("g");
  u.attr("transform",`translate(${y/2},${d/2})`);const{themeVariables}=o;let[v]=aY(themeVariables.pieOuterStrokeWidth);v??=2;
  const A=l.textPosition;
  const m=Math.min(y,d)/2-t;
  const D=d().innerRadius(0).outerRadius(m);
  const $=d().innerRadius(m*A).outerRadius(m*A);
  u.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");
  const g=s.getSections();
  const w=Ce(g);
  const C=[themeVariables.pie1,themeVariables.pie2,themeVariables.pie3,themeVariables.pie4,themeVariables.pie5,themeVariables.pie6,themeVariables.pie7,themeVariables.pie8,themeVariables.pie9,themeVariables.pie10,themeVariables.pie11,themeVariables.pie12];
  let E=0;g.forEach(r=>{E+=r});

  const O=w.filter(r => (r.data.value/E*100).toFixed(0)!=="0");

  const b=o(C);

  u.selectAll("mySlices").data(O).enter().append("path").attr("d",D).attr("fill",r => b(r.data.label)).attr("class","pieCircle");

  u.selectAll("mySlices").data(O).enter().append("text").text(r => `${(r.data.value/E*100).toFixed(0)}%`).attr("transform",r => `translate(${$.centroid(r)})`).style("text-anchor","middle").attr("class","slice");

  u.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");

  const W=[...g.entries()].map(([r,M]) => ({
    label:r,
    value:M
  }));

  const k=u.selectAll(".legend").data(W).enter().append("g").attr("class","legend").attr("transform",(r,M)=>{
    const R=n+c;
    const B=R*W.length/2;
    const V=12*n;
    const U=M*R-B;
    return `translate(${V},${U})`;
  });

  k.append("rect").attr("width",n).attr("height",n).style("fill",r => b(r.label)).style("stroke",r => b(r.label));

  k.append("text").attr("x",n+c).attr("y",n-c).text(r => s.getShowData()?`${r.label} [${r.value}]`:r.label);

  const _=Math.max(...k.selectAll("text").nodes().map(r => r?.getBoundingClientRect().width??0));

  const P=y+t+n+c+_;
  h.attr("viewBox",`0 0 ${P} ${d}`);
  aa(h,d,P,l.useMaxWidth);
},"draw");

const $e={draw:De};

export const diagram = {parser:ye,db:L,renderer:$e,styles:we};
//# sourceMappingURL=pieDiagram-ADFJNKIX-CcTGBy5j.js.map

export{diagram as diagram};
//# sourceMappingURL=pieDiagram-ADFJNKIX-CcTGBy5j.js.map
