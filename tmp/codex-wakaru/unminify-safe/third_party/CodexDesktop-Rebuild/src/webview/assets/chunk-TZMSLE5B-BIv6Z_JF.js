import{a2,ai,ae}from"./index-CgwAo6pj.js";

const x=a2((a,t)=>{
  const e=a.append("rect");
  e.attr("x",t.x);
  e.attr("y",t.y);
  e.attr("fill",t.fill);
  e.attr("stroke",t.stroke);
  e.attr("width",t.width);
  e.attr("height",t.height);

  if (t.name) {
    e.attr("name",t.name);
  }

  if (t.rx) {
    e.attr("rx",t.rx);
  }

  if (t.ry) {
    e.attr("ry",t.ry);
  }

  if (t.attrs!==void 0) {
    for (const r in t.attrs) {
      e.attr(r,t.attrs[r]);
    }
  }

  if (t.class) {
    e.attr("class",t.class);
  }

  return e;
},"drawRect");

export const a = a2((a,t)=>{const e={x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,stroke:t.stroke,class:"rect"};x(a,e).lower()},"drawBackgroundRect");
//# sourceMappingURL=chunk-TZMSLE5B-BIv6Z_JF.js.map

const g=a2((a,t)=>{
  const e=t.text.replace(ai," ");
  const r=a.append("text");
  r.attr("x",t.x);
  r.attr("y",t.y);
  r.attr("class","legend");
  r.style("text-anchor",t.anchor);

  if (t.class) {
    r.attr("class",t.class);
  }

  const s=r.append("tspan");
  s.attr("x",t.x+t.textMargin*2);
  s.text(e);
  return r;
},"drawText");

const h=a2((a,t,e,r)=>{
  const s=a.append("image");
  s.attr("x",t);
  s.attr("y",e);
  const i=ae.sanitizeUrl(r);s.attr("xlink:href",i)
},"drawImage");

const m=a2((a,t,e,r)=>{
  const s=a.append("use");
  s.attr("x",t);
  s.attr("y",e);
  const i=ae.sanitizeUrl(r);s.attr("xlink:href",`#${i}`)
},"drawEmbeddedImage");

const y=a2(() => ({
  x:0,
  y:0,
  width:100,
  height:100,
  fill:"#EDF2AE",
  stroke:"#666",
  anchor:"start",
  rx:0,
  ry:0
}),"getNoteRect");

const p=a2(() => ({
  x:0,
  y:0,
  width:100,
  height:100,
  "text-anchor":"start",
  style:"#666",
  textMargin:0,
  rx:0,
  ry:0,
  tspan:true
}),"getTextObj");

export{a as a,p as b,m as c,x as a,h as e,g as f,y as g};
//# sourceMappingURL=chunk-TZMSLE5B-BIv6Z_JF.js.map
