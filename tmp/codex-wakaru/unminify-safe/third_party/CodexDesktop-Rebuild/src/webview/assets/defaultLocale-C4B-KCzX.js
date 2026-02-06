function H(n){return Math.abs(n=Math.round(n))>=1e+21/* 1e21 */?n.toLocaleString("en").replace(/,/g,""):n.toString(10);}function j(n,t){
  if ((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0) {
    return null;
  }
  var e;
  const i=n.slice(0,e);
  return[i.length>1?i[0]+i.slice(2):i,+n.slice(e+1)]
}function J(n){
  n=j(Math.abs(n));
  return n?n[1]:NaN;
}function K(n,t){return (e, i) => {
  let c=0;
  for (var o=e.length, f=[], u=n[0], p=0; o>0&&u>0&&(p+u+1>i&&(u=Math.max(1,i-p)),f.push(e.substring(o-=u,o+u)),!((p+=u+1)>i)); ) {
    u=n[c=(c+1)%n.length];
  }return f.reverse().join(t)
};}function Q(n){return t => t.replace(/[0-9]/g,e => n[+e]);}const V=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function N(n){if (!(t=V.exec(n))) {
  throw new Error(`invalid format: ${n}`);
}var t;return new $({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}N.prototype=$.prototype;

class $ {
  constructor(n) {
    this.fill=n.fill===void 0?" ":`${n.fill}`;
    this.align=n.align===void 0?">":`${n.align}`;
    this.sign=n.sign===void 0?"-":`${n.sign}`;
    this.symbol=n.symbol===void 0?"":`${n.symbol}`;
    this.zero=!!n.zero;
    this.width=n.width===void 0?void 0:+n.width;
    this.comma=!!n.comma;
    this.precision=n.precision===void 0?void 0:+n.precision;
    this.trim=!!n.trim;
    this.type=n.type===void 0?"":`${n.type}`;
  }

  toString() {return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":`.${Math.max(0,this.precision|0)}`)+(this.trim?"~":"")+this.type;}
}

function W(n){n:for (let t=n.length, e=1; e<t; ++e) {
  switch(n[e]){case ".":
    {
      i = e;
      o = e;
      break;
    }case "0":
    {
      if (i===0) {
        (i = e);
      }

      o=e;
      break;
    }default:
    {
      if (!+n[e]) {
        break n;
      }

      if (i>0) {
        (i = 0);
      }

      break
    }}
}return i>0?n.slice(0,i)+n.slice(o+1):n}let U;function _(n,t){
  const e=j(n,t);if (!e) {
    return `${n}`;
  }
  const i=e[0];
  const o=e[1];
  const f=o-(U=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1;
  const c=i.length;
  return f===c?i:f>c?i+new Array(f-c+1).join("0"):f>0?`${i.slice(0,f)}.${i.slice(f)}`:`0.${new Array(1-f).join("0")}${j(n,Math.max(0,t+f-1))[0]}`;
}function G(n,t){
  const e=j(n,t);if (!e) {
    return `${n}`;
  }
  const i=e[0];
  const o=e[1];
  return o<0?`0.${new Array(-o).join("0")}${i}`:i.length>o+1?`${i.slice(0,o+1)}.${i.slice(o+1)}`:i+new Array(o-i.length+2).join("0");
}const I={"%":(n, t) => (n*100).toFixed(t),b:n => Math.round(n).toString(2),c:n => `${n}`,d:H,e:(n, t) => n.toExponential(t),f:(n, t) => n.toFixed(t),g:(n, t) => n.toPrecision(t),o:n => Math.round(n).toString(8),p:(n, t) => G(n*100,t),r:G,s:_,X:n => Math.round(n).toString(16).toUpperCase(),x:n => Math.round(n).toString(16)};function X(n){return n}
const O=Array.prototype.map;
const R=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];
function v(n){
  const t=n.grouping===void 0||n.thousands===void 0?X:K(O.call(n.grouping,Number),`${n.thousands}`);
  const e=n.currency===void 0?"":`${n.currency[0]}`;
  const i=n.currency===void 0?"":`${n.currency[1]}`;
  const o=n.decimal===void 0?".":`${n.decimal}`;
  const f=n.numerals===void 0?X:Q(O.call(n.numerals,String));
  const c=n.percent===void 0?"%":`${n.percent}`;
  const u=n.minus===void 0?"−":`${n.minus}`;
  const p=n.nan===void 0?"NaN":`${n.nan}`;
  function F(a){
    a=N(a);
    let x=a.fill;
    let M=a.align;
    const m=a.sign;
    const w=a.symbol;
    let l=a.zero;
    const S=a.width;
    let E=a.comma;
    let g=a.precision;
    let L=a.trim;
    let d=a.type;

    if (d==="n") {
      E=true;
      d="g";
    } else if (!I[d]) {
      g===void 0&&(g=12);
      L=true;
      d="g";
    }

    if ((l || x==="0"&&M==="=")) {
      l=true;
      x="0";
      M="=";
    }

    const Z=w==="$"?e:w==="#"&&/[boxX]/.test(d)?`0${d.toLowerCase()}`:"";
    const q=w==="$"?i:/[%p]/.test(d)?c:"";
    const T=I[d];
    const B=/[defgprs%]/.test(d);
    g=g===void 0?6:/[gprs]/.test(d)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g));

    class C {
      constructor(r) {
        let y=Z;
        let h=q;
        let b;
        let D;
        let k;
        if (d==="c") {
          h=T(r)+h;
          r="";
        } else {
          r=+r;let P=r<0||1/r<0;
          r=isNaN(r)?p:T(Math.abs(r),g);

          if (L) {
            (r = W(r));
          }

          if (P&&+r==0&&m!=="+") {
            (P = false);
          }

          y=(P?m==="("?m:u:m==="-"||m==="("?"":m)+y;
          h=(d==="s"?R[8+U/3]:"")+h+(P&&m==="("?")":"");

          if (B) {
            b=-1;

            for (D=r.length; ++b<D; ) {
              k=r.charCodeAt(b);

              if (k < 48||k>57) {
                h=(k===46?o+r.slice(b+1):r.slice(b))+h;
                r=r.slice(0,b);
                break
              }
            }
          }
        }

        if (E&&!l) {
          (r = t(r,Infinity));
        }

        let z=y.length+r.length+h.length;
        let s=z<S?new Array(S-z+1).join(x):"";

        if (E&&l) {
          r=t(s+r,s.length?S-h.length:Infinity);
          s="";
        }

        switch (M) {
        case "<":
          {
            r=y+r+h+s;break;
          }
        case "=":
          {
            r=y+s+r+h;break;
          }
        case "^":
          {
            r=s.slice(0,z=s.length>>1)+y+r+h+s.slice(z);break;
          }
        default:
          {
            r=s+y+r+h;break
          }
        }

        return f(r)
      }

      static toString() {return `${a}`;}
    }

    return C;
  }function Y(a,x){
    const M=F((a=N(a),a.type="f",a));
    const m=Math.max(-8,Math.min(8,Math.floor(J(x)/3)))*3;
    const w=10 ** -m;
    const l=R[8+m/3];
    return S => M(w*S)+l;
  }return{format:F,formatPrefix:Y}
}
let A;
let nn;

export let a;
//# sourceMappingURL=defaultLocale-C4B-KCzX.js.map

rn({thousands:",",grouping:[3],currency:["$",""]});function rn(n){
  A=v(n);
  nn=A.format;
  a=A.formatPrefix;
  return A;
}export{a as a,nn as b,J as e,N as f};
//# sourceMappingURL=defaultLocale-C4B-KCzX.js.map
