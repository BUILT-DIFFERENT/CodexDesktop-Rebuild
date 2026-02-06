import{a2,a9,aE,aa,aF}from"./index-CgwAo6pj.js";import{aF as aF_1}from"./treemap-KMMF4GRG-CK1q9nlx.js";import"./_baseUniq-DqA0xXry.js";import"./_basePickBy-D-jIhBTu.js";import"./clone-M7Y9qM5V.js";
const v={parse:a2(async a=>{const r=await aF_1("info",a);a9.debug(r)},"parse")};
const d={version:`${aF.version}`};

const m=a2(() => d.version,"getVersion");

const c={getVersion:m};

const f=a2((a,r,o)=>{
  a9.debug(`rendering info diagram
  `+a);const t=aE(r);
  aa(t,100,400,true);
  t.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text(`v${o}`);
},"draw");

const l={draw:f};

export const diagram = {parser:v,db:c,renderer:l};
//# sourceMappingURL=infoDiagram-F6ZHWCRC-B22GewOt.js.map

export{diagram as diagram};
//# sourceMappingURL=infoDiagram-F6ZHWCRC-B22GewOt.js.map
