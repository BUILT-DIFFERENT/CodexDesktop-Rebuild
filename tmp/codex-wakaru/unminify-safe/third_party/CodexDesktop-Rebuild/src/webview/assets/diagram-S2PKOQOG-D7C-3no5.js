import{a2,aA,aE,aa,a9,a6,a5,an,ao,a4,a3,aB,aC,at}from"./index-CgwAo6pj.js";import{p}from"./chunk-4BX2VUAB-nk385TCt.js";import{p as p_1}from"./treemap-KMMF4GRG-CK1q9nlx.js";import"./_baseUniq-DqA0xXry.js";import"./_basePickBy-D-jIhBTu.js";import"./clone-M7Y9qM5V.js";
const L=aC.packet;
let u;

u=class{constructor(){
    this.packet=[];
    this.setAccTitle=a6;
    this.getAccTitle=a5;
    this.setDiagramTitle=an;
    this.getDiagramTitle=ao;
    this.getAccDescription=a4;
    this.setAccDescription=a3;
}getConfig(){
    const t=aA({...L,...aB().packet});

    if (t.showBits) {
        (t.paddingY += 10);
    }

    return t;
}getPacket(){return this.packet}pushWord(t){
    if (t.length>0) {
        this.packet.push(t);
    }
}clear(){
    at();
    this.packet=[];
}};

a2(u,"PacketDB");
const v = u;

const M=10000/* 1e4 */;

const Y=a2((e,t)=>{
    p(e,t);
    let r=-1;
    let o=[];
    let n=1;
    const{bitsPerRow}=t.getConfig();for(let{start,end,bits,label}of e.blocks){
    if (start!==void 0&&end!==void 0&&end<start) {
        throw new Error(`Packet block ${start} - ${end} is invalid. End must be greater than start.`);
    }
    start??=r+1;

    if (start!==r+1) {
        throw new Error(`Packet block ${start} - ${end??start} is not contiguous. It should start from ${r+1}.`);
    }

    if (bits===0) {
        throw new Error(`Packet block ${start} is invalid. Cannot have a zero bit field.`);
    }
    end??=start+(bits??1)-1;
    bits??=end-start+1;
    r=end;
    a9.debug(`Packet block ${start} - ${r} with label ${label}`);

    while (o.length<=bitsPerRow+1&&t.getPacket().length<M) {
        const[p,s]=I({start:start,end:end,bits:bits,label:label},n,bitsPerRow);
        o.push(p);

        if (p.end+1===n*bitsPerRow) {
            t.pushWord(o);
            o=[];
            n++;
        }

        if (!s) {
            break;
        }

        ({start:start,end:end,bits:bits,label:label}=s)
    }
}t.pushWord(o)
},"populate");

var I=a2((e,t,r)=>{
    if (e.start===void 0) {
        throw new Error("start should have been set during first phase");
    }if (e.end===void 0) {
        throw new Error("end should have been set during first phase");
    }if (e.start>e.end) {
        throw new Error(`Block start ${e.start} is greater than block end ${e.end}.`);
    }if (e.end+1<=t*r) {
        return[e,void 0];
    }
    const o=t*r-1;
    const n=t*r;
    return[{start:e.start,end:o,label:e.label,bits:o-e.start},{start:n,end:e.end,label:e.label,bits:e.end-n}]
},"getNextFittingBlock");

const x={parser:{yy:void 0},parse:a2(async e=>{
    const t=await p_1("packet",e);
    const r=x.parser?.yy;
    if (!(r instanceof v)) {
        throw new Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
    }
    a9.debug(t);
    Y(t,r);
},"parse")};

const O=a2((e,t,r,o)=>{
    const n=o.db;
    const l=n.getConfig();
    const {rowHeight,paddingY,bitWidth,bitsPerRow}=l;
    const p=n.getPacket();
    const s=n.getDiagramTitle();
    const h=rowHeight+paddingY;
    const g=h*(p.length+1)-(s?0:rowHeight);
    const k=bitWidth*bitsPerRow+2;
    const f=aE(t);
    f.attr("viewbox",`0 0 ${k} ${g}`);
    aa(f,g,k,l.useMaxWidth);
    for (const[y,$] of p.entries()) {
        j(f,$,y,l);
    }f.append("text").text(s).attr("x",k/2).attr("y",g-h/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")
},"draw");

var j=a2((e,t,r,{rowHeight,paddingX,paddingY,bitWidth,bitsPerRow,showBits})=>{
    const c=e.append("g");
    const p=r*(rowHeight+paddingY)+paddingY;
    for(const s of t){
        const h=s.start%bitsPerRow*bitWidth+1;
        const g=(s.end-s.start+1)*bitWidth-paddingX;
        c.append("rect").attr("x",h).attr("y",p).attr("width",g).attr("height",rowHeight).attr("class","packetBlock");
        c.append("text").attr("x",h+g/2).attr("y",p+rowHeight/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(s.label);

        if (!showBits) {
            continue;
        }

        const k=s.end===s.start;
        const f=p-2;
        c.append("text").attr("x",h+(k?g/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(s.start);

        if (!k) {
            c.append("text").attr("x",h+g).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(s.end);
        }
    }
},"drawWord");

const G={draw:O};
const H={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"};

const K=a2(({packet:e}={})=>{const t=aA(H,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},"styles");

export const diagram = {parser:x,get db() {return new v},renderer:G,styles:K};
//# sourceMappingURL=diagram-S2PKOQOG-D7C-3no5.js.map

export{diagram as diagram};
//# sourceMappingURL=diagram-S2PKOQOG-D7C-3no5.js.map
