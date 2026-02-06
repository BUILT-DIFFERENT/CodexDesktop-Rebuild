import{a2,aa,a9}from"./index-CgwAo6pj.js";

export const s = a2((e,t,i,a)=>{
  e.attr("class",i);const{width,height,x,y}=u(e,t);aa(e,height,width,a);const s=B(x,y,width,height,t);
  e.attr("viewBox",s);
  a9.debug(`viewBox configured: ${s} with padding: ${t}`);
},"setupViewPortForSVG");
//# sourceMappingURL=chunk-QN33PNHL-CAvc2xVm.js.map

var u=a2((e,t)=>{const i=e.node()?.getBBox()||{width:0,height:0,x:0,y:0};return{width:i.width+t*2,height:i.height+t*2,x:i.x,y:i.y}},"calculateDimensionsWithPadding");

var B=a2((e, t, i, a, o) => `${e-o} ${t-o} ${i} ${a}`,"createViewBox");

export{s as s};
//# sourceMappingURL=chunk-QN33PNHL-CAvc2xVm.js.map
