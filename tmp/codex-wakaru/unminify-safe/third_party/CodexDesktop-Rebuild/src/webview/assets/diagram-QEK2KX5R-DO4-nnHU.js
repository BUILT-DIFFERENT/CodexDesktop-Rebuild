import{a2,a3,a4,ao,an,a5,a6,aE,at as at_1,aA,aB,aC,a9,aV}from"./index-CgwAo6pj.js";import{p}from"./chunk-4BX2VUAB-nk385TCt.js";import{p as p_1}from"./treemap-KMMF4GRG-CK1q9nlx.js";import"./_baseUniq-DqA0xXry.js";import"./_basePickBy-D-jIhBTu.js";import"./clone-M7Y9qM5V.js";
const h={showLegend:true,ticks:5,max:null,min:0,graticule:"circle"};
const w={axes:[],curves:[],options:h};
let m=structuredClone(w);
const H=aC.radar;

const j=a2(() => aA({...H,...aB().radar}),"getConfig");

const b=a2(() => m.axes,"getAxes");

const N=a2(() => m.curves,"getCurves");

const U=a2(() => m.options,"getOptions");

const X=a2(a=>{m.axes=a.map(t => ({
    name:t.name,
    label:t.label??t.name
}))},"setAxes");

const Y=a2(a=>{m.curves=a.map(t => ({
    name:t.name,
    label:t.label??t.name,
    entries:Z(t.entries)
}))},"setCurves");

var Z=a2(a=>{if (a[0].axis==null) {
    return a.map(e => e.value);
}const t=b();if (t.length===0) {
    throw new Error("Axes must be populated before curves for reference entries");
}return t.map(e=>{const r=a.find(s => s.axis?.$refText===e.name);if (r===void 0) {
    throw new Error(`Missing entry for axis ${e.label}`);
}return r.value});},"computeCurveEntries");

const q=a2(a=>{const t=a.reduce((e, r) => {
    e[r.name]=r;
    return e;
},{});m.options={showLegend:t.showLegend?.value??h.showLegend,ticks:t.ticks?.value??h.ticks,max:t.max?.value??h.max,min:t.min?.value??h.min,graticule:t.graticule?.value??h.graticule}},"setOptions");

const J=a2(()=>{
    at_1();
    m=structuredClone(w);
},"clear");

const $={getAxes:b,getCurves:N,getOptions:U,setAxes:X,setCurves:Y,setOptions:q,getConfig:j,clear:J,setAccTitle:a6,getAccTitle:a5,setDiagramTitle:an,getDiagramTitle:ao,getAccDescription:a4,setAccDescription:a3};

const K=a2(a=>{
    p(a,$);const{axes,curves,options}=a;
    $.setAxes(axes);
    $.setCurves(curves);
    $.setOptions(options);
},"populate");

const Q={parse:a2(async a=>{
    const t=await p_1("radar",a);
    a9.debug(t);
    K(t);
},"parse")};

const tt=a2((a,t,e,r)=>{
    const s=r.db;
    const o=s.getAxes();
    const i=s.getCurves();
    const n=s.getOptions();
    const c=s.getConfig();
    const d=s.getDiagramTitle();
    const u=aE(t);
    const p=et(u,c);

    const g=n.max??Math.max(...i.map(f => Math.max(...f.entries)));

    const x=n.min;
    const v=Math.min(c.width,c.height)/2;
    at(p,o,v,n.ticks,n.graticule);
    rt(p,o,v,c);
    M(p,o,i,x,g,n.graticule,c);
    T(p,i,n.showLegend,c);
    p.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-c.height/2-c.marginTop);
},"draw");

var et=a2((a,t)=>{
    const e=t.width+t.marginLeft+t.marginRight;
    const r=t.height+t.marginTop+t.marginBottom;
    const s={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};
    a.attr("viewbox",`0 0 ${e} ${r}`).attr("width",e).attr("height",r);
    return a.append("g").attr("transform",`translate(${s.x}, ${s.y})`);
},"drawFrame");

var at=a2((a,t,e,r,s)=>{if (s==="circle") {
    for(let o=0;o<r;o++){const i=e*(o+1)/r;a.append("circle").attr("r",i).attr("class","radarGraticule")}
} else if(s==="polygon"){const o=t.length;for(let i=0;i<r;i++){
    const n=e*(i+1)/r;

    const c=t.map((d,u)=>{
        const p=2*u*Math.PI/o-Math.PI/2;
        const g=n*Math.cos(p);
        const x=n*Math.sin(p);
        return`${g},${x}`
    }).join(" ");

    a.append("polygon").attr("points",c).attr("class","radarGraticule")
}}},"drawGraticule");

var rt=a2((a,t,e,r)=>{const s=t.length;for(let o=0;o<s;o++){
    const i=t[o].label;
    const n=2*o*Math.PI/s-Math.PI/2;
    a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*Math.cos(n)).attr("y2",e*r.axisScaleFactor*Math.sin(n)).attr("class","radarAxisLine");
    a.append("text").text(i).attr("x",e*r.axisLabelFactor*Math.cos(n)).attr("y",e*r.axisLabelFactor*Math.sin(n)).attr("class","radarAxisLabel");
}},"drawAxes");

function M(a,t,e,r,s,o,i){
    const n=t.length;
    const c=Math.min(i.width,i.height)/2;
    e.forEach((d,u)=>{
        if (d.entries.length!==n) {
            return;
        }const p=d.entries.map((g,x)=>{
            const v=2*Math.PI*x/n-Math.PI/2;
            const f=A(g,r,s,c);
            const O=f*Math.cos(v);
            const S=f*Math.sin(v);
            return{x:O,y:S}
        });

        if (o==="circle") {
            a.append("path").attr("d",L(p,i.curveTension)).attr("class",`radarCurve-${u}`);
        } else if (o==="polygon") {
            a.append("polygon").attr("points",p.map(g => `${g.x},${g.y}`).join(" ")).attr("class",`radarCurve-${u}`);
        }
    })
}a2(M,"drawCurves");function A(a,t,e,r){const s=Math.min(Math.max(a,t),e);return r*(s-t)/(e-t)}a2(A,"relativeRadius");function L(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let s=0;s<e;s++){
    const o=a[(s-1+e)%e];
    const i=a[s];
    const n=a[(s+1)%e];
    const c=a[(s+2)%e];
    const d={x:i.x+(n.x-o.x)*t,y:i.y+(n.y-o.y)*t};
    const u={x:n.x-(c.x-i.x)*t,y:n.y-(c.y-i.y)*t};
    r+=` C${d.x},${d.y} ${u.x},${u.y} ${n.x},${n.y}`
}return`${r} Z`}a2(L,"closedRoundCurve");function T(a,t,e,r){
    if (!e) {
        return;
    }
    const s=(r.width/2+r.marginRight)*3/4;
    const o=-(r.height/2+r.marginTop)*3/4;
    const i=20;
    t.forEach((n,c)=>{
        const d=a.append("g").attr("transform",`translate(${s}, ${o+c*i})`);
        d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${c}`);
        d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(n.label);
    })
}a2(T,"drawLegend");
const st={draw:tt};

const nt=a2((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const s=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`}return e},"genIndexStyles");

const ot=a2(a=>{
    const t=aV();
    const e=aB();
    const r=aA(t,e.themeVariables);
    const s=aA(r.radar,a);
    return{themeVariables:r,radarOptions:s}
},"buildRadarStyleOptions");

const it=a2(({radar:a}={})=>{const{themeVariables,radarOptions}=ot(a);return `
	.radarTitle {
		font-size: ${themeVariables.fontSize};
		color: ${themeVariables.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${radarOptions.axisColor};
		stroke-width: ${radarOptions.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${radarOptions.axisLabelFontSize}px;
		color: ${radarOptions.axisColor};
	}
	.radarGraticule {
		fill: ${radarOptions.graticuleColor};
		fill-opacity: ${radarOptions.graticuleOpacity};
		stroke: ${radarOptions.graticuleColor};
		stroke-width: ${radarOptions.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${radarOptions.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${nt(themeVariables,radarOptions)}
	`;},"styles");

export const diagram = {parser:Q,db:$,renderer:st,styles:it};
//# sourceMappingURL=diagram-QEK2KX5R-DO4-nnHU.js.map

export{diagram as diagram};
//# sourceMappingURL=diagram-QEK2KX5R-DO4-nnHU.js.map
