function _e(t){if ([...t].length!==1) {
  throw new Error(`Expected "${t}" to be a single code point`);
}return t.codePointAt(0)}function bs(t,e,n){
  if (!t.has(e)) {
    t.set(e,n);
  }

  return t.get(e);
}
const Qt=new Set(["alnum","alpha","ascii","blank","cntrl","digit","graph","lower","print","punct","space","upper","word","xdigit"]);
const B=String.raw;
function Se(t,e){if (t==null) {
  throw new Error(e??"Value expected");
}return t}
const ur=B`\[\^?`;
const hr=`c.? | C(?:-.?)?|${B`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${B`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${B`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${B`o\{[^\}]*\}?`}|${B`\d{1,3}`}`;
const Yt=/[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/;

const Fe=new RegExp(B`
  \\ (?:
    ${hr}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${Yt.source})+
  | ${ur}
  | .
`.replace(/\s+/g,""),"gsu");

const pt=new RegExp(B`
  \\ (?:
    ${hr}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${ur}
  | &&
  | .
`.replace(/\s+/g,""),"gsu");

function ws(t,e={}){
  const n={flags:"",...e,rules:{captureGroup:false,singleline:false,...e.rules}};if (typeof t!="string") {
      throw new Error("String expected as pattern");
    }
  const r=Gs(n.flags);
  const s=[r.extended];
  const o={captureGroup:n.rules.captureGroup,getCurrentModX(){return s.at(-1)},numOpenGroups:0,popModX(){s.pop()},pushModX(h){s.push(h)},replaceCurrentModX(h){s[s.length-1]=h},singleline:n.rules.singleline};
  let i=[];
  let l;
  for(Fe.lastIndex=0;l=Fe.exec(t);){
    const h=Cs(o,t,l[0],Fe.lastIndex);

    if (h.tokens) {
      i.push(...h.tokens);
    } else if (h.token) {
      i.push(h.token);
    }

    if (h.lastIndex!==void 0) {
      (Fe.lastIndex = h.lastIndex);
    }
  }const a=[];let c=0;

  i.filter(h => h.type==="GroupOpen").forEach(h=>{
    if (h.kind==="capturing") {
      h.number=++c;
    } else if (h.raw==="(") {
      a.push(h);
    }
  });

  if (!c) {
    a.forEach((h,d)=>{
      h.kind="capturing";
      h.number=d+1;
    });
  }

  const u=c||a.length;return {tokens:i.map(h => h.type==="EscapedNumber"?Fs(h,u):h).flat(),flags:r};
}function Cs(t,e,n,r){
  const[s,o]=n;if(n==="["||n==="[^"){const i=_s(e,n,r);return{tokens:i.tokens,lastIndex:i.lastIndex}}if(s==="\\"){if ("AbBGyYzZ".includes(o)) {
    return{token:pn(n,n)};
  }if(/^\\g[<']/.test(n)){if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(n)) {
    throw new Error(`Invalid group name "${n}"`);
  }return{token:Ns(n)}}if(/^\\k[<']/.test(n)){if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(n)) {
    throw new Error(`Invalid group name "${n}"`);
  }return{token:fr(n)}}if (o==="K") {
    return{token:pr("keep",n)};
  }if (o==="N"||o==="R") {
    return{token:le("newline",n,{negate:o==="N"})};
  }if (o==="O") {
    return{token:le("any",n)};
  }if (o==="X") {
    return{token:le("text_segment",n)};
  }const i=dr(n,{inCharClass:false});return Array.isArray(i)?{tokens:i}:{token:i}}if(s==="("){
    if (o==="*") {
      return{token:Ms(n)};
    }if (n==="(?{") {
      throw new Error(`Unsupported callout "${n}"`);
    }if(n.startsWith("(?#")){if (e[r]!==")") {
      throw new Error('Unclosed comment group "(?#"');
    }return{lastIndex:r+1}}if (/^\(\?[-imx]+[:)]$/.test(n)) {
      return{token:Ts(n,t)};
    }
    t.pushModX(t.getCurrentModX());
    t.numOpenGroups++;

    if (n==="("&&!t.captureGroup||n==="(?:") {
      return{token:pe("group",n)};
    }

    if (n==="(?>") {
      return{token:pe("atomic",n)};
    }if (n==="(?="||n==="(?!"||n==="(?<="||n==="(?<!") {
      return{token:pe(n[2]==="<"?"lookbehind":"lookahead",n,{negate:n.endsWith("!")})};
    }if (n==="("&&t.captureGroup||n.startsWith("(?<")&&n.endsWith(">")||n.startsWith("(?'")&&n.endsWith("'")) {
      return {token:pe("capturing",n,{...(n!=="(" && {name:n.slice(3,-1)})})};
    }if(n.startsWith("(?~")){if (n==="(?~|") {
      throw new Error(`Unsupported absence function kind "${n}"`);
    }return{token:pe("absence_repeater",n)}}throw n==="(?("?new Error(`Unsupported conditional "${n}"`):new Error(`Invalid or unsupported group option "${n}"`)
  }if(n===")"){
    t.popModX();
    t.numOpenGroups--;

    if (t.numOpenGroups<0) {
      throw new Error('Unmatched ")"');
    }

    return{token:As(n)}
  }if(t.getCurrentModX()){if(n==="#"){const i=e.indexOf(`
  `,r);return{lastIndex:i===-1?e.length:i}}if(/^\s$/.test(n)){
    const i=/\s+/y;
    i.lastIndex=r;
    return {lastIndex:i.exec(e)?i.lastIndex:r};
  }}if (n===".") {
    return{token:le("dot",n)};
  }if(n==="^"||n==="$"){const i=t.singleline?{"^":B`\A`,$:B`\Z`}[n]:n;return{token:pn(i,n)}}

  if (n==="|") {
    return {token:ks(n)};
  }

  if (Yt.test(n)) {
    return {tokens:js(n)};
  }

  return {token:J(_e(n),n)};
}function _s(t,e,n){
  const r=[gn(e[1]==="^",e)];
  let s=1;
  let o;
  for(pt.lastIndex=n;o=pt.exec(t);){const i=o[0];if (i[0]==="["&&i[1]!==":") {
    s++;
    r.push(gn(i[1]==="^",i));
  } else if(i==="]"){if (r.at(-1).type==="CharacterClassOpen") {
    r.push(J(93,i));
  } else {
    s--;
    r.push(vs(i));

    if (!s) {
      break
    }
  }}else{
    const l=Ss(i);

    if (Array.isArray(l)) {
      r.push(...l);
    } else {
      r.push(l);
    }
  }}return{tokens:r,lastIndex:pt.lastIndex||t.length}
}function Ss(t){
  if (t[0]==="\\") {
    return dr(t,{inCharClass:true});
  }if(t[0]==="["){const e=/\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(t);if (!e||!Qt.has(e.groups.name)) {
    throw new Error(`Invalid POSIX class "${t}"`);
  }return le("posix",t,{value:e.groups.name,negate:!!e.groups.negate})}

  if (t==="-") {
    return xs(t);
  }

  if (t==="&&") {
    return Es(t);
  }

  return J(_e(t),t);
}function dr(t,{inCharClass}){const n=t[1];if (n==="c"||n==="C") {
  return Ps(t);
}if ("dDhHsSwW".includes(n)) {
  return Os(t);
}if (t.startsWith(B`\o{`)) {
  throw new Error(`Incomplete, invalid, or unsupported octal code point "${t}"`);
}if(/^\\[pP]\{/.test(t)){if (t.length===3) {
  throw new Error(`Incomplete or invalid Unicode property "${t}"`);
}return Ds(t)}if (new RegExp("^\\\\x[89A-Fa-f]\\p{AHex}","u").test(t)) {
  try{
    const r=t.split(/\\x/).slice(1).map(i => parseInt(i,16));

    const s=new TextDecoder("utf-8",{ignoreBOM:true,fatal:true}).decode(new Uint8Array(r));
    const o=new TextEncoder;
    return [...s].map(i=>{const l=[...o.encode(i)].map(a => `\\x${a.toString(16)}`).join("");return J(_e(i),l)});
  }catch{throw new Error(`Multibyte code "${t}" incomplete or invalid in Oniguruma`)}
}if (n==="u"||n==="x") {
  return J(Bs(t),t);
}if (mn.has(n)) {
  return J(mn.get(n),t);
}if (/\d/.test(n)) {
  return Is(inCharClass,t);
}if (t==="\\") {
  throw new Error(B`Incomplete escape "\"`);
}if (n==="M") {
  throw new Error(`Unsupported meta "${t}"`);
}if ([...t].length===2) {
  return J(t.codePointAt(1),t);
}throw new Error(`Unexpected escape "${t}"`)}function ks(t){return{type:"Alternator",raw:t}}function pn(t,e){return{type:"Assertion",kind:t,raw:e}}function fr(t){return{type:"Backreference",raw:t}}function J(t,e){return{type:"Character",value:t,raw:e}}function vs(t){return{type:"CharacterClassClose",raw:t}}function xs(t){return{type:"CharacterClassHyphen",raw:t}}function Es(t){return{type:"CharacterClassIntersector",raw:t}}function gn(t,e){return{type:"CharacterClassOpen",negate:t,raw:e}}function le(t,e,n={}){return{type:"CharacterSet",kind:t,...n,raw:e}}function pr(t,e,n={}){return t==="keep"?{type:"Directive",kind:t,raw:e}:{type:"Directive",kind:t,flags:Se(n.flags),raw:e}}function Is(t,e){return{type:"EscapedNumber",inCharClass:t,raw:e}}function As(t){return{type:"GroupClose",raw:t}}function pe(t,e,n={}){return{type:"GroupOpen",kind:t,...n,raw:e}}function Rs(t,e,n,r){return{type:"NamedCallout",kind:t,tag:e,arguments:n,raw:r}}function Ls(t,e,n,r){return{type:"Quantifier",kind:t,min:e,max:n,raw:r}}function Ns(t){return{type:"Subroutine",raw:t}}
const $s=new Set(["COUNT","CMP","ERROR","FAIL","MAX","MISMATCH","SKIP","TOTAL_COUNT"]);
const mn=new Map([["a",7],["b",8],["e",27],["f",12],["n",10],["r",13],["t",9],["v",11]]);
function Ps(t){const e=t[1]==="c"?t[2]:t[3];if (!e||!/[A-Za-z]/.test(e)) {
  throw new Error(`Unsupported control character "${t}"`);
}return J(_e(e.toUpperCase())-64,t)}function Ts(t,e){
  let{on: on_1,off}=/^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(t).groups;off??="";
  const s=(e.getCurrentModX()||on_1.includes("x"))&&!off.includes("x");
  const o=bn(on_1);
  const i=bn(off);
  const l={};

  if (o) {
    (l.enable = o);
  }

  if (i) {
    (l.disable = i);
  }

  if (t.endsWith(")")) {
    e.replaceCurrentModX(s);
    return pr("flags",t,{flags:l});
  }

  if (t.endsWith(":")) {
    e.pushModX(s);
    e.numOpenGroups++;
    return pe("group",t,{...((o || i) && {flags:l})});
  }throw new Error(`Unexpected flag modifier "${t}"`)
}function Ms(t){
  const e=/\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(t);if (!e) {
    throw new Error(`Incomplete or invalid named callout "${t}"`);
  }const{name,tag,args}=e.groups;if (!name) {
    throw new Error(`Invalid named callout "${t}"`);
  }if (tag==="") {
    throw new Error(`Named callout tag with empty value not allowed "${t}"`);
  }

  const o=args?args.split(",").filter(u => u!=="").map(u => /^[+-]?\d+$/.test(u)?+u:u):[];

  const [i,l,a]=o;
  const c=$s.has(name)?name.toLowerCase():"custom";
  switch(c){case"fail":case"mismatch":case "skip":
    {
      if (o.length>0) {
        throw new Error(`Named callout arguments not allowed "${o}"`);
      }break;
    }case "error":
    {
      if (o.length>1) {
        throw new Error(`Named callout allows only one argument "${o}"`);
      }if (typeof i=="string") {
        throw new Error(`Named callout argument must be a number "${i}"`);
      }break;
    }case "max":
    {
      if (!o.length||o.length>2) {
        throw new Error(`Named callout must have one or two arguments "${o}"`);
      }if (typeof i=="string"&&!/^[A-Za-z_]\w*$/.test(i)) {
        throw new Error(`Named callout argument one must be a tag or number "${i}"`);
      }if (o.length===2&&(typeof l=="number"||!/^[<>X]$/.test(l))) {
        throw new Error(`Named callout optional argument two must be '<', '>', or 'X' "${l}"`);
      }break;
    }case"count":case "total_count":
    {
      if (o.length>1) {
        throw new Error(`Named callout allows only one argument "${o}"`);
      }if (o.length===1&&(typeof i=="number"||!/^[<>X]$/.test(i))) {
        throw new Error(`Named callout optional argument must be '<', '>', or 'X' "${i}"`);
      }break;
    }case "cmp":
    {
      if (o.length!==3) {
        throw new Error(`Named callout must have three arguments "${o}"`);
      }if (typeof i=="string"&&!/^[A-Za-z_]\w*$/.test(i)) {
        throw new Error(`Named callout argument one must be a tag or number "${i}"`);
      }if (typeof l=="number"||!/^(?:[<>!=]=|[<>])$/.test(l)) {
        throw new Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${l}"`);
      }if (typeof a=="string"&&!/^[A-Za-z_]\w*$/.test(a)) {
        throw new Error(`Named callout argument three must be a tag or number "${a}"`);
      }break;
    }case "custom":
    {
      throw new Error(`Undefined callout name "${name}"`);
    }default:
    {
      throw new Error(`Unexpected named callout kind "${c}"`)
    }}return Rs(c,tag??null,args?.split(",")??null,t);
}function yn(t){
  let e=null;
  let n;
  let r;
  if (t[0]==="{") {
    const {minStr,maxStr}=/^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(t).groups;
    const i=100000/* 1e5 */;
    if (+minStr>i||maxStr&&+maxStr>i) {
      throw new Error("Quantifier value unsupported in Oniguruma");
    }
    n=+minStr;
    r=maxStr===void 0?+minStr:maxStr===""?Infinity:+maxStr;

    if (n>r) {
      e="possessive";
      [n,r]=[r,n];
    }

    if (t.endsWith("?")) {if (e==="possessive") {
      throw new Error('Unsupported possessive interval quantifier chain with "?"');
    }e="lazy"} else {
      if (!e) {
        (e = "greedy");
      }
    }
  } else {
    n=t[0]==="+"?1:0;
    r=t[0]==="?"?1:Infinity;
    e=t[1]==="+"?"possessive":t[1]==="?"?"lazy":"greedy";
  }return Ls(e,n,r,t)
}function Os(t){const e=t[1].toLowerCase();return le({d:"digit",h:"hex",s:"space",w:"word"}[e],t,{negate:t[1]!==e})}function Ds(t){const{p,neg,value}=/^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(t).groups;return le("property",t,{value:value,negate:p==="P"&&!neg||p==="p"&&!!neg});}function bn(t){
  const e={};

  if (t.includes("i")) {
    (e.ignoreCase = true);
  }

  if (t.includes("m")) {
    (e.dotAll = true);
  }

  if (t.includes("x")) {
    (e.extended = true);
  }

  return Object.keys(e).length?e:null;
}function Gs(t){const e={ignoreCase:false,dotAll:false,extended:false,digitIsAscii:false,posixIsAscii:false,spaceIsAscii:false,wordIsAscii:false,textSegmentMode:null};for(let n=0;n<t.length;n++){const r=t[n];if (!"imxDPSWy".includes(r)) {
  throw new Error(`Invalid flag "${r}"`);
}if(r==="y"){
  if (!/^y{[gw]}/.test(t.slice(n))) {
    throw new Error('Invalid or unspecified flag "y" mode');
  }
  e.textSegmentMode=t[n+2]==="g"?"grapheme":"word";
  n+=3;
  continue
}e[{i:"ignoreCase",m:"dotAll",x:"extended",D:"digitIsAscii",P:"posixIsAscii",S:"spaceIsAscii",W:"wordIsAscii"}[r]]=true}return e}function Bs(t){if (new RegExp("^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))","u").test(t)) {
  throw new Error(`Incomplete or invalid escape "${t}"`);
}const e=t[2]==="{"?new RegExp("^\\\\x\\{\\s*(?<hex>\\p{AHex}+)","u").exec(t).groups.hex:t.slice(2);return parseInt(e,16)}function Fs(t,e){
  const {raw,inCharClass}=t;
  const s=raw.slice(1);
  if (!inCharClass&&(s!=="0"&&s.length===1||s[0]!=="0"&&+s<=e)) {
    return [fr(raw)];
  }
  const o=[];
  const i=s.match(/^[0-7]+|\d/g);

  i.forEach((a, l) => {
    let c;if (l===0&&a!=="8"&&a!=="9") {
      c=parseInt(a,8);

      if (c>127) {
        throw new Error(B`Octal encoded byte above 177 unsupported "${raw}"`)
      }
    } else {
      c=_e(a);
    }o.push(J(c,(l===0?"\\":"")+a))
  });

  return o
}function js(t){
  const e=[];
  const n=new RegExp(Yt,"gy");
  let r;

  while (r=n.exec(t)) {const s=r[0];if(s[0]==="{"){const o=/^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(s);if(o){const{min,max}=o.groups;if(+min>+max&&s.endsWith("?")){
      n.lastIndex--;
      e.push(yn(s.slice(0,-1)));
      continue
    }}}e.push(yn(s))}

  return e
}function gr(t,e){if (!Array.isArray(t.body)) {
  throw new Error("Expected node with body array");
}if (t.body.length!==1) {
  return false;
}const n=t.body[0];return !e||Object.keys(e).every(r => e[r]===n[r]);}function Us(t){return Ws.has(t.type)}const Ws=new Set(["AbsenceFunction","Backreference","CapturingGroup","Character","CharacterClass","CharacterSet","Group","Quantifier","Subroutine"]);function mr(t,e={}){
  const n={flags:"",normalizeUnknownPropertyNames:false,skipBackrefValidation:false,skipLookbehindValidation:false,skipPropertyNameValidation:false,unicodePropertyMap:null,...e,rules:{captureGroup:false,singleline:false,...e.rules}};
  const r=ws(t,{flags:n.flags,rules:{captureGroup:n.rules.captureGroup,singleline:n.rules.singleline}});

  const s=(d,f)=>{
    const p=r.tokens[o.nextIndex];
    o.parent=d;
    o.nextIndex++;

    switch (p.type) {
    case "Alternator":
      {
        return ue();
      }
    case "Assertion":
      {
        return zs(p);
      }
    case "Backreference":
      {
        return qs(p,o);
      }
    case "Character":
      {
        return at(p.value,{useLastValid:!!f.isCheckingRangeEnd});
      }
    case "CharacterClassHyphen":
      {
        return Hs(p,o,f);
      }
    case "CharacterClassOpen":
      {
        return Vs(p,o,f);
      }
    case "CharacterSet":
      {
        return Xs(p,o);
      }
    case "Directive":
      {
        return eo(p.kind,{flags:p.flags});
      }
    case "GroupOpen":
      {
        return Ks(p,o,f);
      }
    case "NamedCallout":
      {
        return no(p.kind,p.tag,p.arguments);
      }
    case "Quantifier":
      {
        return Zs(p,o);
      }
    case "Subroutine":
      {
        return Qs(p,o);
      }
    default:
      {
        throw new Error(`Unexpected token type "${p.type}"`)
      }
    }
  };

  const o={capturingGroups:[],hasNumberedRef:false,namedGroupsByName:new Map,nextIndex:0,normalizeUnknownPropertyNames:n.normalizeUnknownPropertyNames,parent:null,skipBackrefValidation:n.skipBackrefValidation,skipLookbehindValidation:n.skipLookbehindValidation,skipPropertyNameValidation:n.skipPropertyNameValidation,subroutines:[],tokens:r.tokens,unicodePropertyMap:n.unicodePropertyMap,walk:s};
  const i=so(to(r.flags));
  let l=i.body[0];

  while (o.nextIndex<r.tokens.length) {
    const d=s(l,{});

    if (d.type==="Alternative") {
      i.body.push(d);
      l=d;
    } else {
      l.body.push(d);
    }
  }

  const{capturingGroups,hasNumberedRef,namedGroupsByName,subroutines}=o;if (hasNumberedRef&&namedGroupsByName.size&&!n.rules.captureGroup) {
      throw new Error("Numbered backref/subroutine not allowed when using named capture");
    }for (const{ref} of subroutines) {
      if(typeof ref=="number"){
        if (ref>capturingGroups.length) {
          throw new Error("Subroutine uses a group number that's not defined");
        }

        if (ref) {
          (capturingGroups[ref-1].isSubroutined = true);
        }
      }else if (namedGroupsByName.has(ref)) {if (namedGroupsByName.get(ref).length>1) {
        throw new Error(B`Subroutine uses a duplicate group name "\g<${ref}>"`);
      }namedGroupsByName.get(ref)[0].isSubroutined=true} else {
        throw new Error(B`Subroutine uses a group name that's not defined "\g<${ref}>"`);
      }
    }return i
}function zs({kind}){return Nt(Se({"^":"line_start",$:"line_end","\\A":"string_start","\\b":"word_boundary","\\B":"word_boundary","\\G":"search_start","\\y":"text_segment_boundary","\\Y":"text_segment_boundary","\\z":"string_end","\\Z":"string_end_newline"}[t],`Unexpected assertion kind "${kind}"`),{negate:kind===B`\B`||kind===B`\Y`});}function qs({raw},e){
  const n=/^\\k[<']/.test(raw);
  const r=n?raw.slice(3,-1):raw.slice(1);

  const s=(o,i=false)=>{
    const l=e.capturingGroups.length;let a=false;if (o>l) {
      if (e.skipBackrefValidation) {
        a=true;
      } else {
        throw new Error(`Not enough capturing groups defined to the left "${raw}"`);
      }
    }
    e.hasNumberedRef=true;
    return $t(i?l+1-o:o,{orphan:a});
  };

  if(n){const o=/^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(r);if (o) {
    return s(+o.groups.num,!!o.groups.sign);
  }if (/[-+]/.test(r)) {
    throw new Error(`Invalid backref name "${raw}"`);
  }if (!e.namedGroupsByName.has(r)) {
    throw new Error(`Group name not defined to the left "${raw}"`);
  }return $t(r)}return s(+r)
}function Hs(t,e,n){
  const {tokens,walk}=e;
  const o=e.parent;
  const i=o.body.at(-1);
  const l=tokens[e.nextIndex];
  if(!n.isCheckingRangeEnd&&i&&i.type!=="CharacterClass"&&i.type!=="CharacterClassRange"&&l&&l.type!=="CharacterClassOpen"&&l.type!=="CharacterClassClose"&&l.type!=="CharacterClassIntersector"){const a=walk(o,{...n,isCheckingRangeEnd:true});if (i.type==="Character"&&a.type==="Character") {
    o.body.pop();
    return Js(i,a);
  }throw new Error("Invalid character class range")}return at(_e("-"))
}function Vs({negate},e,n){
  const {tokens,walk}=e;
  const o=tokens[e.nextIndex];
  const i=[Ve()];
  let l=_n(o);

  while (l.type!=="CharacterClassClose") {if (l.type==="CharacterClassIntersector") {
      i.push(Ve());
      e.nextIndex++;
    } else
      {const c=i.at(-1);c.body.push(walk(c,n))}l=_n(tokens[e.nextIndex],o)}

  const a=Ve({negate:negate});

  if (i.length===1) {
    a.body=i[0].body;
  } else {
    a.kind="intersection";
    a.body=i.map(c => c.body.length===1?c.body[0]:c);
  }

  e.nextIndex++;
  return a;
}function Xs({kind,negate,value},r){const{normalizeUnknownPropertyNames,skipPropertyNameValidation,unicodePropertyMap}=r;if(kind==="property"){const l=lt(value);if (Qt.has(l)&&!unicodePropertyMap?.has(l)) {
  kind="posix";
  value=l;
} else {
  return ge(value,{negate:negate,normalizeUnknownPropertyNames:normalizeUnknownPropertyNames,skipPropertyNameValidation:skipPropertyNameValidation,unicodePropertyMap:unicodePropertyMap});
}}return kind==="posix"?ro(value,{negate:negate}):Pt(kind,{negate:negate});}function Ks(t,e,n){
  const {tokens,capturingGroups,namedGroupsByName,skipLookbehindValidation,walk}=e;
  const a=oo(t);
  const c=a.type==="AbsenceFunction";
  const u=Cn(a);
  const h=u&&a.negate;

  if (a.type==="CapturingGroup") {
    capturingGroups.push(a);
    a.name&&bs(namedGroupsByName,a.name,[]).push(a);
  }

  if (c&&n.isInAbsenceFunction) {
    throw new Error("Nested absence function not supported by Oniguruma");
  }

  let d=Sn(tokens[e.nextIndex]);

  while (d.type!=="GroupClose") {if (d.type==="Alternator") {
      a.body.push(ue());
      e.nextIndex++;
    } else {
      const f=a.body.at(-1);
      const p=walk(f,{...n,isInAbsenceFunction:n.isInAbsenceFunction||c,isInLookbehind:n.isInLookbehind||u,isInNegLookbehind:n.isInNegLookbehind||h});
      f.body.push(p);

      if ((u||n.isInLookbehind)&&!skipLookbehindValidation) {const b="Lookbehind includes a pattern not allowed by Oniguruma";if(h||n.isInNegLookbehind){if (wn(p)||p.type==="CapturingGroup") {
        throw new Error(b)
      }}else if (wn(p)||Cn(p)&&p.negate) {
        throw new Error(b)
      }}
    }d=Sn(tokens[e.nextIndex])}

  e.nextIndex++;
  return a;
}function Zs({kind,min,max},r){
  const s=r.parent;
  const o=s.body.at(-1);
  if (!o||!Us(o)) {
    throw new Error("Quantifier requires a repeatable token");
  }const i=br(kind,min,max,o);
  s.body.pop();
  return i;
}function Qs({raw},e){
  const{capturingGroups,subroutines}=e;let s=raw.slice(3,-1);const o=/^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(s);if (o) {
    const l=+o.groups.num;
    const a=capturingGroups.length;
    e.hasNumberedRef=true;
    s={"":l,"+":a+l,"-":a+1-l}[o.groups.sign];

    if (s<1) {
      throw new Error("Invalid subroutine number")
    }
  } else {
  if (s==="0") {
    (s = 0);
  }
}const i=wr(s);
  subroutines.push(i);
  return i;
}function Ys(t,e){return{type:"AbsenceFunction",kind:t,body:Oe(e?.body)}}function ue(t){return{type:"Alternative",body:Cr(t?.body)}}function Nt(t,e){
  const n={type:"Assertion",kind:t};

  if ((t==="word_boundary" || t==="text_segment_boundary")) {
    (n.negate = !!e?.negate);
  }

  return n;
}function $t(t,e){const n=!!e?.orphan;return {type:"Backreference",ref:t,...(n && {orphan:n})};}function yr(t,e){const n={name:void 0,isSubroutined:false,...e};if (n.name!==void 0&&!io(n.name)) {
  throw new Error(`Group name "${n.name}" invalid in Oniguruma`);
}return {type:"CapturingGroup",number:t,...(n.name && {name:n.name}),...(n.isSubroutined && {isSubroutined:n.isSubroutined}),body:Oe(e?.body)};}function at(t,e){const n={useLastValid:false,...e};if(t>1114111){const r=t.toString(16);if (n.useLastValid) {
  t=1114111;
} else {
  throw t>1310719?new Error(`Invalid code point out of range "\\x{${r}}"`):new Error(`Invalid code point out of range in JS "\\x{${r}}"`)
}}return{type:"Character",value:t}}function Ve(t){const e={kind:"union",negate:false,...t};return{type:"CharacterClass",kind:e.kind,negate:e.negate,body:Cr(t?.body)}}function Js(t,e){if (e.value<t.value) {
  throw new Error("Character class range out of order");
}return{type:"CharacterClassRange",min:t,max:e}}function Pt(t,e){
  const n=!!e?.negate;
  const r={type:"CharacterSet",kind:t};

  if ((t==="digit"||t==="hex"||t==="newline"||t==="space" || t==="word")) {
    (r.negate = n);
  }

  if ((t==="text_segment" || t==="newline"&&!n)) {
    (r.variableLength = true);
  }

  return r;
}function eo(t,e={}){if (t==="keep") {
  return{type:"Directive",kind:t};
}if (t==="flags") {
  return{type:"Directive",kind:t,flags:Se(e.flags)};
}throw new Error(`Unexpected directive kind "${t}"`)}function to(t){return{type:"Flags",...t}}function K(t){
  const e=t?.atomic;
  const n=t?.flags;
  if (e&&n) {
    throw new Error("Atomic group cannot have flags");
  }return {type:"Group",...(e && {atomic:e}),...(n && {flags:n}),body:Oe(t?.body)};
}function ae(t){const e={behind:false,negate:false,...t};return{type:"LookaroundAssertion",kind:e.behind?"lookbehind":"lookahead",negate:e.negate,body:Oe(t?.body)}}function no(t,e,n){return{type:"NamedCallout",kind:t,tag:e,arguments:n}}function ro(t,e){const n=!!e?.negate;if (!Qt.has(t)) {
  throw new Error(`Invalid POSIX class "${t}"`);
}return{type:"CharacterSet",kind:"posix",value:t,negate:n}}function br(t,e,n,r){if (e>n) {
  throw new Error("Invalid reversed quantifier range");
}return{type:"Quantifier",kind:t,min:e,max:n,body:r}}function so(t,e){return{type:"Regex",body:Oe(e?.body),flags:t}}function wr(t){return{type:"Subroutine",ref:t}}function ge(t,e){const n={negate:false,normalizeUnknownPropertyNames:false,skipPropertyNameValidation:false,unicodePropertyMap:null,...e};let r=n.unicodePropertyMap?.get(lt(t));if(!r){if (n.normalizeUnknownPropertyNames) {
  r=ao(t);
} else if (n.unicodePropertyMap&&!n.skipPropertyNameValidation) {
  throw new Error(B`Invalid Unicode property "\p{${t}}"`)
}}return{type:"CharacterSet",kind:"property",value:r??t,negate:n.negate}}function oo({flags,kind,name,negate,number}){switch(kind){case "absence_repeater":
  {
    return Ys("repeater");
  }case "atomic":
  {
    return K({atomic:true});
  }case "capturing":
  {
    return yr(number,{name:name});
  }case "group":
  {
    return K({flags:flags});
  }case"lookahead":case "lookbehind":
  {
    return ae({behind:kind==="lookbehind",negate:negate});
  }default:
  {
    throw new Error(`Unexpected group kind "${kind}"`)
  }}}function Oe(t = [ue()]) {
  return t
}function Cr(t = []) {
  return t
}function wn(t){return t.type==="LookaroundAssertion"&&t.kind==="lookahead"}function Cn(t){return t.type==="LookaroundAssertion"&&t.kind==="lookbehind"}function io(t){return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(t);}function ao(t){return t.trim().replace(/[- _]+/g,"_").replace(/[A-Z][a-z]+(?=[A-Z])/g,"$&_").replace(/[A-Za-z]+/g,e => e[0].toUpperCase()+e.slice(1).toLowerCase());}function lt(t){return t.replace(/[- _]+/g,"").toLowerCase();}function _n(t,e){return Se(t,`${e?.type==="Character"&&e.value===93?"Empty":"Unclosed"} character class`)}function Sn(t){return Se(t,"Unclosed group")}function Ae(t,e,n=null){
  function r(o,i){for(let l=0;l<o.length;l++){const a=s(o[l],i,l,o);l=Math.max(-1,l+a)}}function s(o,i=null,l=null,a=null){
    let c=0;
    let u=false;

    const h={node:o,parent:i,key:l,container:a,root:t,remove(){
      je(a).splice(Math.max(0,de(l)+c),1);
      c--;
      u=true;
    },removeAllNextSiblings(){return je(a).splice(de(l)+1)},removeAllPrevSiblings(){
      const g=de(l)+c;
      c-=g;
      return je(a).splice(0,Math.max(0,g));
    },replaceWith(g,y={}){
      const m=!!y.traverse;

      if (a) {
        a[Math.max(0,de(l)+c)]=g;
      } else {
        Se(i,"Can't replace root node")[l]=g;
      }

      if (m) {
        s(g,i,l,a);
      }

      u=true;
    },replaceWithMultiple(g,y={}){
      const m=!!y.traverse;
      je(a).splice(Math.max(0,de(l)+c),1,...g);
      c+=g.length-1;

      if (m) {let _=0;for (let k=0; k<g.length; k++) {
        _+=s(g[k],i,de(l)+k+_,a)
      }}

      u=true
    },skip(){u=true}};

    const {type}=o;
    const f=e["*"];
    const p=e[d];
    const b=typeof f=="function"?f:f?.enter;
    const C=typeof p=="function"?p:p?.enter;
    b?.(h,n);
    C?.(h,n);

    if (!u) {
      switch(type){case"AbsenceFunction":case"CapturingGroup":case "Group":
        {
          r(o.body,o);break;
        }case"Alternative":case "CharacterClass":
        {
          r(o.body,o);break;
        }case"Assertion":case"Backreference":case"Character":case"CharacterSet":case"Directive":case"Flags":case"NamedCallout":case "Subroutine":
        {
          break;
        }case "CharacterClassRange":
        {
          s(o.min,o,"min");
          s(o.max,o,"max");
          break;
        }case "LookaroundAssertion":
        {
          r(o.body,o);break;
        }case "Quantifier":
        {
          s(o.body,o,"body");break;
        }case "Regex":
        {
          r(o.body,o);
          s(o.flags,o,"flags");
          break;
        }default:
        {
          throw new Error(`Unexpected node type "${type}"`)
        }}
    }

    p?.exit?.(h,n);
    f?.exit?.(h,n);
    return c;
  }
  s(t);
  return t;
}function je(t){if (!Array.isArray(t)) {
  throw new Error("Container expected");
}return t}function de(t){if (typeof t!="number") {
  throw new Error("Numeric key expected");
}return t}const lo=String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;function co(t,e){for (let n=0; n<t.length; n++) {
  if (t[n]>=e) {
    t[n]++;
  }
}}function uo(t,e,n,r){return t.slice(0,e)+r+t.slice(e+n.length)}const X=Object.freeze({DEFAULT:"DEFAULT",CHAR_CLASS:"CHAR_CLASS"});function Jt(t,e,n,r){
  const s=new RegExp(String.raw`${e}|(?<$skip>\[\^?|\\?.)`,"gsu");
  const o=[false];
  let i=0;
  let l="";
  for(const a of t.matchAll(s)){
    const{0:c,groups:{$skip:u}}=a;if(!u&&(!r||r===X.DEFAULT==!i)){
      if (n instanceof Function) {
        l+=n(a,{context:i?X.CHAR_CLASS:X.DEFAULT,negated:o[o.length-1]});
      } else {
        l+=n;
      }

      continue
    }

    if (c[0]==="[") {
      i++;
      o.push(c[1]==="^");
    } else if (c==="]"&&i) {
      i--;
      o.pop();
    }

    l+=c;
  }return l
}function _r(t,e,n,r){Jt(t,e,n,r)}function ho(t,e,n=0,r){
  if (!new RegExp(e,"su").test(t)) {
    return null;
  }const s=new RegExp(`${e}|(?<$skip>\\\\?.)`,"gsu");s.lastIndex=n;
  let o=0;
  let i;

  while (i=s.exec(t)) {
    const{0:l,groups:{$skip:a}}=i;if (!a&&(!r||r===X.DEFAULT==!o)) {
        return i;
      }

    if (l==="[") {
      o++;
    } else if (l==="]"&&o) {
      o--;
    }

    if (s.lastIndex==i.index) {
      s.lastIndex++;
    }
  }

  return null
}function Ue(t,e,n){return!!ho(t,e,0,n)}function fo(t,e){
  const n=/\\?./gsu;n.lastIndex=e;
  let r=t.length;
  let s=0;
  let o=1;
  let i;

  while (i=n.exec(t)) {const[l]=i;if (l==="[") {
    s++;
  } else if (s) {
    if (l==="]") {
      s--;
    }
  } else if (l==="(") {
    o++;
  } else
    if(l===")"&&(o--,!o)){r=i.index;break}}

  return t.slice(e,r)
}const kn=new RegExp(String.raw`(?<noncapturingStart>${lo})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`,"gsu");function po(t,e){
  const n=e?.hiddenCaptures??[];let r=e?.captureTransfers??new Map;if (!/\(\?>/.test(t)) {
    return{pattern:t,captureTransfers:r,hiddenCaptures:n};
  }
  const s="(?>";
  const o="(?:(?=(";
  const i=[0];
  const l=[];
  let a=0;
  let c=0;
  let u=NaN;
  let h;
  do{
    h=false;
    let d=0;
    let f=0;
    let p=false;
    let b;
    for(kn.lastIndex=Number.isNaN(u)?0:u+o.length;b=kn.exec(t);){const{0:C,index,groups:{capturingStart:y,noncapturingStart:m}}=b;if (C==="[") {
      d++;
    } else if (d) {
      if (C==="]") {
        d--;
      }
    } else if (C===s&&!p) {
      u=index;
      p=true;
    } else if (p&&m) {
      f++;
    } else if (y) {
      if (p) {
        f++;
      } else {
        a++;
        i.push(a+c);
      }
    } else if(C===")"&&p){if(!f){
      c++;const _=a+c;
      t=`${t.slice(0,u)}${o}${t.slice(u+s.length,index)}))<$$${_}>)${t.slice(index+1)}`;
      h=true;
      l.push(_);
      co(n,_);

      if (r.size) {
        const k=new Map;

        r.forEach((I,S)=>{k.set(S>=_?S+1:S,I.map(A => A>=_?A+1:A))});

        r=k;
      }

      break
    }f--}}
  }while(h);
  n.push(...l);

  t=Jt(t,String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`,({0:d,groups:{backrefNum:f,wrappedBackrefNum:p}})=>{if(f){const b=+f;if (b>i.length-1) {
    throw new Error(`Backref "${d}" greater than number of captures`);
  }return`\\${i[b]}`}return`\\${p}`},X.DEFAULT);

  return {pattern:t,captureTransfers:r,hiddenCaptures:n};
}
const Sr=String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`;

const gt=new RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${Sr})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g,""),"gsu");

function go(t){
  if (!new RegExp(`${Sr}\\+`).test(t)) {
    return{pattern:t};
  }const e=[];
  let n=null;
  let r=null;
  let s="";
  let o=0;
  let i;
  for(gt.lastIndex=0;i=gt.exec(t);){const{0:l,index,groups:{qBase:c,qMod:u,invalidQ:h}}=i;if (l==="[") {
    if (!o) {
      (r = index);
    }

    o++;
  } else if (l==="]") {
    if (o) {
      o--;
    } else {
      r=null;
    }
  } else if (!o) {
    if (u==="+"&&s&&!s.startsWith("(")) {if (h) {
      throw new Error(`Invalid quantifier "${l}"`);
    }let d=-1;if (/^\{\d+\}$/.test(c)) {
      t=uo(t,index+c.length,u,"");
    } else {if (s===")"||s==="]") {const f=s===")"?n:r;if (f===null) {
      throw new Error(`Invalid unmatched "${s}"`);
    }t=`${t.slice(0,f)}(?>${t.slice(f,index)}${c})${t.slice(index+l.length)}`} else {
      t=`${t.slice(0,index-s.length)}(?>${s}${c})${t.slice(index+l.length)}`;
    }d+=4}gt.lastIndex+=d} else {
      if (l[0]==="(") {
        e.push(index);
      } else if (l===")") {
        (n = e.length?e.pop():null);
      }
    }
  }s=l}return{pattern:t}
}
const V=String.raw;
const mo=V`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`;
const Tt=V`\(\?R=(?<rDepth>[^\)]+)\)|${mo}`;
const ct=V`\(\?<(?![=!])(?<captureName>[^>]+)>`;
const kr=V`${ct}|(?<unnamed>\()(?!\?)`;
const oe=new RegExp(V`${ct}|${Tt}|\(\?|\\?.`,"gsu");
const mt="Cannot use multiple overlapping recursions";
function yo(t,e){
  const{hiddenCaptures,mode}={hiddenCaptures:[],mode:"plugin",...e};let s=e?.captureTransfers??new Map;if (!new RegExp(Tt,"su").test(t)) {
    return {pattern:t,captureTransfers:s,hiddenCaptures:hiddenCaptures};
  }if (mode==="plugin"&&Ue(t,V`\(\?\(DEFINE\)`,X.DEFAULT)) {
    throw new Error("DEFINE groups cannot be used with recursion");
  }
  const o=[];
  const i=Ue(t,V`\\[1-9]`,X.DEFAULT);
  const l=new Map;
  const a=[];
  let c=false;
  let u=0;
  let h=0;
  let d;
  for(oe.lastIndex=0;d=oe.exec(t);){const{0:f,groups:{captureName:p,rDepth:b,gRNameOrNum:C,gRDepth:g}}=d;if (f==="[") {
    u++;
  } else if (u) {
    if (f==="]") {
      u--;
    }
  } else if(b){
    vn(b);

    if (c) {
      throw new Error(mt);
    }

    if (i) {
      throw new Error(`${mode==="external"?"Backrefs":"Numbered backrefs"} cannot be used with global recursion`);
    }
    const y=t.slice(0,d.index);
    const m=t.slice(oe.lastIndex);
    if (Ue(m,Tt,X.DEFAULT)) {
      throw new Error(mt);
    }const _=+b-1;
    t=xn(y,m,_,false,hiddenCaptures,o,h);
    s=In(s,y,_,o.length,0,h);
    break
  }else if(C){
    vn(g);let y=false;for (const M of a) {
      if(M.name===C||M.num===+C){
        y=true;

        if (M.hasRecursedWithin) {
          throw new Error(mt);
        }

        break
      }
    }if (!y) {
      throw new Error(V`Recursive \g cannot be used outside the referenced group "${mode==="external"?C:V`\g<${C}&R=${g}>`}"`);
    }
    const m=l.get(C);
    const _=fo(t,m);
    if (i&&Ue(_,V`${ct}|\((?!\?)`,X.DEFAULT)) {
      throw new Error(`${mode==="external"?"Backrefs":"Numbered backrefs"} cannot be used with recursion of capturing groups`);
    }
    const k=t.slice(m,d.index);
    const I=_.slice(k.length+f.length);
    const S=o.length;
    const A=+g-1;
    const E=xn(k,I,A,true,hiddenCaptures,o,h);
    s=In(s,k,A,o.length-S,S,h);
    const R=t.slice(0,m);
    const L=t.slice(m+_.length);
    t=`${R}${E}${L}`;
    oe.lastIndex+=E.length-f.length-k.length-I.length;

    a.forEach(M => M.hasRecursedWithin=true);

    c=true;
  }else if (p) {
    h++;
    l.set(String(h),oe.lastIndex);
    l.set(p,oe.lastIndex);
    a.push({num:h,name:p});
  } else if (f[0]==="(") {
    const y=f==="(";

    if (y) {
      h++;
      l.set(String(h),oe.lastIndex);
    }

    a.push(y?{num:h}:{});
  } else {
    if (f===")") {
      a.pop();
    }
  }}
  hiddenCaptures.push(...o);
  return {pattern:t,captureTransfers:s,hiddenCaptures:hiddenCaptures};
}function vn(t){
  const e=`Max depth must be integer between 2 and 100; used ${t}`;if (!/^[1-9]\d*$/.test(t)) {
    throw new Error(e);
  }
  t=+t;

  if (t<2||t>100) {
    throw new Error(e)
  }
}function xn(t,e,n,r,s,o,i){
  const l=new Set;

  if (r) {
    _r(t+e,ct,({groups:{captureName:c}})=>{l.add(c)},X.DEFAULT);
  }

  const a=[n,r?l:null,s,o,i];return`${t}${En(`(?:${t}`,"forward",...a)}(?:)${En(`${e})`,"backward",...a)}${e}`
}function En(t,e,n,r,s,o,i){const a=u => e==="forward"?u+2:n-u+2-1;let c="";for(let u=0;u<n;u++){const h=a(u);c+=Jt(t,V`${kr}|\\k<(?<backref>[^>]+)>`,({0:d,groups:{captureName:f,unnamed:p,backref:b}})=>{if (b&&r&&!r.has(b)) {
  return d;
}const C=`_$${h}`;if(p||f){
  const g=i+o.length+1;
  o.push(g);
  bo(s,g);
  return p?d:`(?<${f}${C}>`;
}return V`\k<${b}${C}>`},X.DEFAULT)}return c}function bo(t,e){for (let n=0; n<t.length; n++) {
  if (t[n]>=e) {
    t[n]++;
  }
}}function In(t,e,n,r,s,o){if(t.size&&r){
  let i=0;_r(e,kr,() => i++,X.DEFAULT);
  const l=o-i+s;
  const a=new Map;

  t.forEach((c,u)=>{
    const h=(r-i*n)/n;
    const d=i*n;
    const f=u>l+i?u+r:u;
    const p=[];
    for (const b of c) {
      if (b<=l) {
        p.push(b);
      } else if (b>l+i+h) {
        p.push(b+r);
      } else if (b<=l+i) {
        for (let C=0; C<=n; C++) {
          p.push(b+i*C);
        }
      } else {
        for (let C=0; C<=n; C++) {
          p.push(b+d+h*C);
        }
      }
    }a.set(f,p)
  });

  return a;
}return t}
const O=String.fromCodePoint;
const v=String.raw;
const ee={flagGroups:(()=>{try{new RegExp("(?i:)")}catch{return false;}return true;})(),unicodeSets:(()=>{try{new RegExp("[[]]","v")}catch{return false;}return true;})()};
ee.bugFlagVLiteralHyphenIsRange=ee.unicodeSets?(()=>{try{new RegExp(v`[\d\-a]`,"v")}catch{return true;}return false;})():false;ee.bugNestedClassIgnoresNegation=ee.unicodeSets&&new RegExp("[[^a]]","v").test("a");function Ze(t,{enable,disable}){return {dotAll:!disable?.dotAll&&!!(enable?.dotAll||t.dotAll),ignoreCase:!disable?.ignoreCase&&!!(enable?.ignoreCase||t.ignoreCase)};}function Le(t,e,n){
  if (!t.has(e)) {
    t.set(e,n);
  }

  return t.get(e);
}function Mt(t,e){return An[t]>=An[e]}function wo(t,e){if (t==null) {
  throw new Error(e??"Value expected");
}return t}
var An={ES2025:2025,ES2024:2024,ES2018:2018};
const Co={auto:"auto",ES2025:"ES2025",ES2024:"ES2024",ES2018:"ES2018"};
function vr(t={}){
  if (Object.prototype.toString.call(t)!=="[object Object]") {
    throw new Error("Unexpected options");
  }if (t.target!==void 0&&!Co[t.target]) {
      throw new Error(`Unexpected target "${t.target}"`);
    }const e={accuracy:"default",avoidSubclass:false,flags:"",global:false,hasIndices:false,lazyCompileLength:Infinity,target:"auto",verbose:false,...t,rules:{allowOrphanBackrefs:false,asciiWordBoundaries:false,captureGroup:false,recursionLimit:20,singleline:false,...t.rules}};

  if (e.target==="auto") {
    (e.target = ee.flagGroups?"ES2025":ee.unicodeSets?"ES2024":"ES2018");
  }

  return e;
}
const _o="[	-\r ]";
const So=new Set([O(304),O(305)]);
const Q=v`[\p{L}\p{M}\p{N}\p{Pc}]`;
function xr(t){
  if (So.has(t)) {
    return[t];
  }
  const e=new Set;
  const n=t.toLowerCase();
  const r=n.toUpperCase();
  const s=xo.get(n);
  const o=ko.get(n);
  const i=vo.get(n);

  if ([...r].length===1) {
    e.add(r);
  }

  if (i) {
    e.add(i);
  }

  if (s) {
    e.add(s);
  }

  e.add(n);

  if (o) {
    e.add(o);
  }

  return [...e];
}

const en=new Map(`C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map(t => [lt(t),t]));

var ko=new Map([["s",O(383)],[O(383),"s"]]);
var vo=new Map([[O(223),O(7838)],[O(107),O(8490)],[O(229),O(8491)],[O(969),O(8486)]]);
var xo=new Map([ne(453),ne(456),ne(459),ne(498),...yt(8072,8079),...yt(8088,8095),...yt(8104,8111),ne(8124),ne(8140),ne(8188)]);
const Eo=new Map([["alnum",v`[\p{Alpha}\p{Nd}]`],["alpha",v`\p{Alpha}`],["ascii",v`\p{ASCII}`],["blank",v`[\p{Zs}\t]`],["cntrl",v`\p{Cc}`],["digit",v`\p{Nd}`],["graph",v`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`],["lower",v`\p{Lower}`],["print",v`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`],["punct",v`[\p{P}\p{S}]`],["space",v`\p{space}`],["upper",v`\p{Upper}`],["word",v`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`],["xdigit",v`\p{AHex}`]]);
function Io(t,e){const n=[];for (let r=t; r<=e; r++) {
  n.push(r);
}return n}function ne(t){const e=O(t);return[e.toLowerCase(),e]}function yt(t,e){return Io(t,e).map(n => ne(n));}const Er=new Set(["Lower","Lowercase","Upper","Uppercase","Ll","Lowercase_Letter","Lt","Titlecase_Letter","Lu","Uppercase_Letter"]);function Ao(t,e){
  const n={accuracy:"default",asciiWordBoundaries:false,avoidSubclass:false,bestEffortTarget:"ES2025",...e};Ir(t);const r={accuracy:n.accuracy,asciiWordBoundaries:n.asciiWordBoundaries,avoidSubclass:n.avoidSubclass,flagDirectivesByAlt:new Map,jsGroupNameMap:new Map,minTargetEs2024:Mt(n.bestEffortTarget,"ES2024"),passedLookbehind:false,strategy:null,subroutineRefMap:new Map,supportedGNodes:new Set,digitIsAscii:t.flags.digitIsAscii,spaceIsAscii:t.flags.spaceIsAscii,wordIsAscii:t.flags.wordIsAscii};Ae(t,Ro,r);
  const s={dotAll:t.flags.dotAll,ignoreCase:t.flags.ignoreCase};
  const o={currentFlags:s,prevFlags:null,globalFlags:s,groupOriginByCopy:new Map,groupsByName:new Map,multiplexCapturesToLeftByRef:new Map,openRefs:new Map,reffedNodesByReferencer:new Map,subroutineRefMap:r.subroutineRefMap};
  Ae(t,Lo,o);const i={groupsByName:o.groupsByName,highestOrphanBackref:0,numCapturesToLeft:0,reffedNodesByReferencer:o.reffedNodesByReferencer};
  Ae(t,No,i);
  t._originMap=o.groupOriginByCopy;
  t._strategy=r.strategy;
  return t;
}

var Ro={AbsenceFunction({node,parent,replaceWith}){const{body,kind}=node;if (kind==="repeater") {
  const o=K();o.body[0].body.push(ae({negate:true,body:body}),ge("Any"));const i=K();
  i.body[0].body.push(br("greedy",0,Infinity,o));
  replaceWith(P(i,parent),{traverse:true});
} else {
  throw new Error('Unsupported absence function "(?~|"')
}},Alternative:{enter({node,parent,key},{flagDirectivesByAlt}){const s=node.body.filter(o => o.kind==="flags");for(let o=key+1;o<parent.body.length;o++){const i=parent.body[o];Le(flagDirectivesByAlt,i,[]).push(...s)}},exit({node},{flagDirectivesByAlt}){if(flagDirectivesByAlt.get(node)?.length){const n=Rr(flagDirectivesByAlt.get(node));if(n){
  const r=K({flags:n});
  r.body[0].body=node.body;
  node.body=[P(r,node)];
}}}},Assertion({node,parent,key,container,root,remove,replaceWith},l){
  const {kind,negate}=node;
  const {asciiWordBoundaries,avoidSubclass,supportedGNodes,wordIsAscii}=l;
  if (kind==="text_segment_boundary") {
    throw new Error(`Unsupported text segment boundary "\\${negate?"Y":"y"}"`);
  }if (kind==="line_end") {
    replaceWith(P(ae({body:[ue({body:[Nt("string_end")]}),ue({body:[at(10)]})]}),parent));
  } else if (kind==="line_start") {
    replaceWith(P(Y(v`(?<=\A|\n(?!\z))`,{skipLookbehindValidation:true}),parent));
  } else if (kind==="search_start") {
    if (supportedGNodes.has(node)) {
      root.flags.sticky=true;
      remove();
    } else {const p=container[key-1];if (p&&Do(p)) {
      replaceWith(P(ae({negate:true}),parent));
    } else {
      if (avoidSubclass) {
        throw new Error(v`Uses "\G" in a way that requires a subclass`);
      }
      replaceWith(re(Nt("string_start"),parent));
      l.strategy="clip_search";
    }}
  } else if (!(kind==="string_end"||kind==="string_start")) {
    if (kind==="string_end_newline") {
      replaceWith(P(Y(v`(?=\n?\z)`),parent));
    } else if (kind==="word_boundary") {if(!wordIsAscii&&!asciiWordBoundaries){
      const p=`(?:(?<=${Q})(?!${Q})|(?<!${Q})(?=${Q}))`;
      const b=`(?:(?<=${Q})(?=${Q})|(?<!${Q})(?!${Q}))`;
      replaceWith(P(Y(negate?b:p),parent))
    }} else {
      throw new Error(`Unexpected assertion kind "${kind}"`)
    }
  }
},Backreference({node},{jsGroupNameMap}){
  let{ref}=node;

  if (typeof ref=="string"&&!wt(ref)) {
    ref=bt(ref,jsGroupNameMap);
    node.ref=ref;
  }
},CapturingGroup({node},{jsGroupNameMap,subroutineRefMap}){
  let{name}=node;

  if (name&&!wt(name)) {
    name=bt(name,jsGroupNameMap);
    node.name=name;
  }

  subroutineRefMap.set(node.number,node);

  if (name) {
    subroutineRefMap.set(name,node);
  }
},CharacterClassRange({node,parent,replaceWith}){if(parent.kind==="intersection"){const r=Ve({body:[node]});replaceWith(P(r,parent),{traverse:true})}},CharacterSet({node,parent,replaceWith},{accuracy,minTargetEs2024,digitIsAscii,spaceIsAscii,wordIsAscii}){const{kind,negate,value}=node;if(digitIsAscii&&(kind==="digit"||value==="digit")){replaceWith(re(Pt("digit",{negate:negate}),parent));return}if(spaceIsAscii&&(kind==="space"||value==="space")){replaceWith(P(Ct(Y(_o),negate),parent));return}if(wordIsAscii&&(kind==="word"||value==="word")){replaceWith(re(Pt("word",{negate:negate}),parent));return}if (kind==="any") {
  replaceWith(re(ge("Any"),parent));
} else if (kind==="digit") {
  replaceWith(re(ge("Nd",{negate:negate}),parent));
} else if (kind!=="dot") {
  if(kind==="text_segment"){
    if (accuracy==="strict") {
      throw new Error(v`Use of "\X" requires non-strict accuracy`);
    }
    const h="\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?";
    const d=v`\p{RI}{2}|${h}(?:\u200D${h})*`;
    replaceWith(P(Y(v`(?>\r\n|${minTargetEs2024?v`\p{RGI_Emoji}`:d}|\P{M}\p{M}*)`,{skipPropertyNameValidation:true}),parent))
  }else if (kind==="hex") {
    replaceWith(re(ge("AHex",{negate:negate}),parent));
  } else if (kind==="newline") {
    replaceWith(P(Y(negate?`[^
    ]`:`(?>\r
    ?|[
    \v\f\u2028\u2029])`),parent));
  } else if (kind==="posix") {
    if (!minTargetEs2024&&(value==="graph"||value==="print")) {
      if (accuracy==="strict") {
        throw new Error(`POSIX class "${value}" requires min target ES2024 or non-strict accuracy`);
      }let h={graph:"!-~",print:" -~"}[u];

      if (negate) {
        (h = `\0-${O(h.codePointAt(0)-1)}${O(h.codePointAt(2)+1)}-􏿿`);
      }

      replaceWith(P(Y(`[${h}]`),parent));
    } else {
      replaceWith(P(Ct(Y(Eo.get(value)),negate),parent));
    }
  } else if (kind==="property") {
    if (!en.has(lt(value))) {
      (node.key = "sc");
    }
  } else if (kind==="space") {
    replaceWith(re(ge("space",{negate:negate}),parent));
  } else if (kind==="word") {
    replaceWith(P(Ct(Y(Q),negate),parent));
  } else {
    throw new Error(`Unexpected character set kind "${kind}"`)
  }
}},Directive({node,parent,root,remove,replaceWith,removeAllPrevSiblings,removeAllNextSiblings}){const{kind,flags}=node;if (kind==="flags") {
  if (!flags.enable&&!flags.disable) {
    remove();
  } else {
    const c=K({flags:flags});
    c.body[0].body=removeAllNextSiblings();
    replaceWith(P(c,parent),{traverse:true});
  }
} else if (kind==="keep") {
  const c=root.body[0];
  const h=root.body.length===1&&gr(c,{type:"Group"})&&c.body[0].body.length===1?c.body[0]:root;
  if (parent.parent!==h||h.body.length>1) {
    throw new Error(v`Uses "\K" in a way that's unsupported`);
  }const d=ae({behind:true});
  d.body[0].body=removeAllPrevSiblings();
  replaceWith(P(d,parent));
} else {
  throw new Error(`Unexpected directive kind "${kind}"`)
}},Flags({node,parent}){
  if (node.posixIsAscii) {
    throw new Error('Unsupported flag "P"');
  }if (node.textSegmentMode==="word") {
    throw new Error('Unsupported flag "y{w}"');
  }

  ["digitIsAscii","extended","posixIsAscii","spaceIsAscii","wordIsAscii","textSegmentMode"].forEach(n => delete node[n]);

  Object.assign(node,{global:false,hasIndices:false,multiline:false,sticky:node.sticky??false});
  parent.options={disable:{x:true,n:true},force:{v:true}};
},Group({node}){
  if (!node.flags) {
    return;
  }const{enable,disable}=node.flags;

  if (enable?.extended) {
    delete enable.extended;
  }

  if (disable?.extended) {
    delete disable.extended;
  }

  if (enable?.dotAll&&disable?.dotAll) {
    delete enable.dotAll;
  }

  if (enable?.ignoreCase&&disable?.ignoreCase) {
    delete enable.ignoreCase;
  }

  if (enable&&!Object.keys(enable).length) {
    delete node.flags.enable;
  }

  if (disable&&!Object.keys(disable).length) {
    delete node.flags.disable;
  }

  if (!node.flags.enable&&!node.flags.disable) {
    delete node.flags;
  }
},LookaroundAssertion({node},e){
  const{kind}=node;

  if (kind==="lookbehind") {
    (e.passedLookbehind = true);
  }
},NamedCallout({node,parent,replaceWith}){const{kind}=node;if (kind==="fail") {
  replaceWith(P(ae({negate:true}),parent));
} else {
  throw new Error(`Unsupported named callout "(*${kind.toUpperCase()}"`)
}},Quantifier({node}){if(node.body.type==="Quantifier"){
  const e=K();
  e.body[0].body.push(node.body);
  node.body=P(e,node);
}},Regex:{enter({node},{supportedGNodes}){
  const n=[];
  let r=false;
  let s=false;
  for (const o of node.body) {
    if (o.body.length===1&&o.body[0].kind==="search_start") {
      o.body.pop();
    } else
      {
        const i=Nr(o.body);

        if (i) {
          r=true;
          Array.isArray(i)?n.push(...i):n.push(i);
        } else {
          s=true;
        }
      }
  }

  if (r&&!s) {
    n.forEach(o => supportedGNodes.add(o));
  }
},exit(t,{accuracy,passedLookbehind,strategy}){if (accuracy==="strict"&&passedLookbehind&&strategy) {
  throw new Error(v`Uses "\G" in a way that requires non-strict accuracy`)
}}},Subroutine({node},{jsGroupNameMap}){
  let{ref}=node;

  if (typeof ref=="string"&&!wt(ref)) {
    ref=bt(ref,jsGroupNameMap);
    node.ref=ref;
  }
}};

var Lo={Backreference({node},{multiplexCapturesToLeftByRef,reffedNodesByReferencer}){
  const{orphan,ref}=node;

  if (!orphan) {
    reffedNodesByReferencer.set(node,[...multiplexCapturesToLeftByRef.get(ref).map(({node}) => node)]);
  }
},CapturingGroup:{enter({node,parent,replaceWith,skip},{groupOriginByCopy,groupsByName,multiplexCapturesToLeftByRef,openRefs,reffedNodesByReferencer}){
  const c=groupOriginByCopy.get(node);if(c&&openRefs.has(node.number)){
      const h=re(Rn(node.number),parent);
      reffedNodesByReferencer.set(h,openRefs.get(node.number));
      replaceWith(h);
      return
    }
  openRefs.set(node.number,node);
  multiplexCapturesToLeftByRef.set(node.number,[]);

  if (node.name) {
    Le(multiplexCapturesToLeftByRef,node.name,[]);
  }

  const u=multiplexCapturesToLeftByRef.get(node.name??node.number);for(let h=0;h<u.length;h++){const d=u[h];if(c===d.node||c&&c===d.origin||node===d.origin){u.splice(h,1);break}}
  multiplexCapturesToLeftByRef.get(node.number).push({node:node,origin:c});

  if (node.name) {
    multiplexCapturesToLeftByRef.get(node.name).push({node:node,origin:c});
  }

  if (node.name) {const h=Le(groupsByName,node.name,new Map);let d=false;if (c) {
    d=true;
  } else {
    for (const f of h.values()) {
      if(!f.hasDuplicateNameToRemove){d=true;break}
    }
  }groupsByName.get(node.name).set(node,{node:node,hasDuplicateNameToRemove:d})}
},exit({node},{openRefs}){openRefs.delete(node.number)}},Group:{enter({node},e){
  e.prevFlags=e.currentFlags;

  if (node.flags) {
    (e.currentFlags = Ze(e.currentFlags,node.flags));
  }
},exit(t,e){e.currentFlags=e.prevFlags}},Subroutine({node,parent,replaceWith},r){
  const{isRecursive,ref}=node;if(isRecursive){
  let u=parent;

  while ((u=u.parent)&&!(u.type==="CapturingGroup"&&(u.name===ref||u.number===ref)))
    {}

  r.reffedNodesByReferencer.set(node,u);return
}
  const i=r.subroutineRefMap.get(ref);
  const l=ref===0;
  const a=l?Rn(0):Ar(i,r.groupOriginByCopy,null);
  let c=a;if(!l){
  const u=Rr(To(i,d => d.type==="Group"&&!!d.flags));

  const h=u?Ze(r.globalFlags,u):r.globalFlags;

  if (!$o(h,r.currentFlags)) {
    c=K({flags:Mo(h)});
    c.body[0].body.push(a);
  }
}replaceWith(P(c,parent),{traverse:!l})
}};

var No={Backreference({node,parent,replaceWith},r){if(node.orphan){r.highestOrphanBackref=Math.max(r.highestOrphanBackref,node.ref);return}const o=r.reffedNodesByReferencer.get(node).filter(i => Po(i,node));if (!o.length) {
  replaceWith(P(ae({negate:true}),parent));
} else if (o.length>1) {const i=K({atomic:true,body:o.reverse().map(l => ue({body:[$t(l.number)]}))});replaceWith(P(i,parent))} else {
  node.ref=o[0].number
}},CapturingGroup({node},e){
  node.number=++e.numCapturesToLeft;

  if (node.name&&e.groupsByName.get(node.name).get(node).hasDuplicateNameToRemove) {
    delete node.name;
  }
},Regex:{exit({node},e){const n=Math.max(e.highestOrphanBackref-e.numCapturesToLeft,0);for(let r=0;r<n;r++){const s=yr();node.body.at(-1).body.push(s)}}},Subroutine({node},e){
  if (node.isRecursive && node.ref !== 0) {
    (node.ref = e.reffedNodesByReferencer.get(node).number);
  }
}};

function Ir(t){Ae(t,{"*"({node,parent}){node.parent=parent}})}function $o(t,e){return t.dotAll===e.dotAll&&t.ignoreCase===e.ignoreCase}function Po(t,e){let n=e;do{if (n.type==="Regex") {
  return false;
}if (n.type==="Alternative") {
  continue;
}if (n===t) {
  return false;
}const r=Lr(n.parent);for(const s of r){if (s===n) {
  break;
}if (s===t||$r(s,t)) {
  return true;
}}}while(n=n.parent);throw new Error("Unexpected path")}function Ar(t,e,n,r){const s=Array.isArray(t)?[]:{};for (const[o,i] of Object.entries(t)) {
  if (o==="parent") {
    s.parent=Array.isArray(n)?r:n;
  } else if (i&&typeof i=="object") {
    s[o]=Ar(i,e,s,n);
  } else {
    o==="type"&&i==="CapturingGroup"&&e.set(s,e.get(t)??t);
    s[o]=i;
  }
}return s}function Rn(t){
  const e=wr(t);
  e.isRecursive=true;
  return e;
}function To(t,e){
  const n=[];

  while (t=t.parent) {
    if ((!e || e(t))) {
      n.push(t);
    }
  }

  return n
}function bt(t,e){
  if (e.has(t)) {
    return e.get(t);
  }const n=`$${e.size}_${t.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug,"_")}`;
  e.set(t,n);
  return n;
}function Rr(t){
  const e=["dotAll","ignoreCase"];
  const n={enable:{},disable:{}};

  t.forEach(({flags})=>{e.forEach(s=>{
    if (flags.enable?.[s]) {
      delete n.disable[s];
      n.enable[s]=true;
    }

    if (flags.disable?.[s]) {
      (n.disable[s] = true);
    }
  })});

  if (!Object.keys(n.enable).length) {
    delete n.enable;
  }

  if (!Object.keys(n.disable).length) {
    delete n.disable;
  }

  return n.enable||n.disable?n:null;
}function Mo({dotAll,ignoreCase}){
  const n={};

  if ((dotAll || ignoreCase)) {
    n.enable={};
    dotAll&&(n.enable.dotAll=true);
    ignoreCase&&(n.enable.ignoreCase=true);
  }

  if ((!dotAll || !ignoreCase)) {
    n.disable={};
    !dotAll&&(n.disable.dotAll=true);
    !ignoreCase&&(n.disable.ignoreCase=true);
  }

  return n;
}function Lr(t){if (!t) {
  throw new Error("Node expected");
}const{body}=t;return Array.isArray(body)?body:body?[body]:null;}function Nr(t){const e=t.find(n => n.kind==="search_start"||Go(n,{negate:false})||!Oo(n));if (!e) {
  return null;
}if (e.kind==="search_start") {
  return e;
}if (e.type==="LookaroundAssertion") {
  return e.body[0].body[0];
}if(e.type==="CapturingGroup"||e.type==="Group"){const n=[];for(const r of e.body){
  const s=Nr(r.body);if (!s) {
    return null;
  }

  if (Array.isArray(s)) {
    n.push(...s);
  } else {
    n.push(s);
  }
}return n}return null}function $r(t,e){const n=Lr(t)??[];for (const r of n) {
  if (r===e||$r(r,e)) {
    return true;
  }
}return false;}function Oo({type}){return type==="Assertion"||type==="Directive"||type==="LookaroundAssertion";}function Do(t){const e=["Character","CharacterClass","CharacterSet"];return e.includes(t.type)||t.type==="Quantifier"&&t.min&&e.includes(t.body.type)}function Go(t,e){const n={negate:null,...e};return t.type==="LookaroundAssertion"&&(n.negate===null||t.negate===n.negate)&&t.body.length===1&&gr(t.body[0],{type:"Assertion",kind:"search_start"})}function wt(t){return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(t);}function Y(t,e){const r=mr(t,{...e,unicodePropertyMap:en}).body;return r.length>1||r[0].body.length>1?K({body:r}):r[0].body[0]}function Ct(t,e){
  t.negate=e;
  return t;
}function re(t,e){
  t.parent=e;
  return t;
}function P(t,e){
  Ir(t);
  t.parent=e;
  return t;
}function Bo(t,e){
  const n=vr(e);
  const r=Mt(n.target,"ES2024");
  const s=Mt(n.target,"ES2025");
  const o=n.rules.recursionLimit;
  if (!Number.isInteger(o)||o<2||o>20) {
    throw new Error("Invalid recursionLimit; use 2-20");
  }
  let i=null;
  let l=null;
  if(!s){const f=[t.flags.ignoreCase];Ae(t,Fo,{getCurrentModI:() => f.at(-1),popModI(){f.pop()},pushModI(p){f.push(p)},setHasCasedChar(){
    if (f.at(-1)) {
      i=true;
    } else {
      l=true;
    }
  }})}const a={dotAll:t.flags.dotAll,ignoreCase:!!((t.flags.ignoreCase||i)&&!l)};let c=t;const u={accuracy:n.accuracy,appliedGlobalFlags:a,captureMap:new Map,currentFlags:{dotAll:t.flags.dotAll,ignoreCase:t.flags.ignoreCase},inCharClass:false,lastNode:c,originMap:t._originMap,recursionLimit:o,useAppliedIgnoreCase:!!(!s&&i&&l),useFlagMods:s,useFlagV:r,verbose:n.verbose};function h(f){
      u.lastNode=c;
      c=f;
      return wo(jo[f.type],`Unexpected node type "${f.type}"`)(f,u,h);
    }const d={pattern:t.body.map(h).join("|"),flags:h(t.flags),options:{...t.options}};

  if (!r) {
    delete d.options.force.v;
    d.options.disable.v=true;
    d.options.unicodeSetsPlugin=null;
  }

  d._captureTransfers=new Map;
  d._hiddenCaptures=[];

  u.captureMap.forEach((f,p)=>{
    if (f.hidden) {
      d._hiddenCaptures.push(p);
    }

    if (f.transferTo) {
      Le(d._captureTransfers,f.transferTo,[]).push(p);
    }
  });

  return d;
}

var Fo={"*":{enter({node},e){if(Nn(node)){const n=e.getCurrentModI();e.pushModI(node.flags?Ze({ignoreCase:n},node.flags).ignoreCase:n)}},exit({node},e){
  if (Nn(node)) {
    e.popModI();
  }
}},Backreference(t,e){e.setHasCasedChar()},Character({node},e){
  if (tn(O(node.value))) {
    e.setHasCasedChar();
  }
},CharacterClassRange({node,skip},n){
  skip();

  if (Pr(node,{firstOnly:true}).length) {
    n.setHasCasedChar();
  }
},CharacterSet({node},e){
  if (node.kind==="property"&&Er.has(node.value)) {
    e.setHasCasedChar();
  }
}};

var jo={Alternative({body},e,n){return body.map(n).join("");},Assertion({kind,negate}){if (kind==="string_end") {
  return"$";
}if (kind==="string_start") {
  return"^";
}if (kind==="word_boundary") {
  return negate?v`\B`:v`\b`;
}throw new Error(`Unexpected assertion kind "${kind}"`)},Backreference({ref},e){if (typeof ref!="number") {
  throw new Error("Unexpected named backref in transformed AST");
}if (!e.useFlagMods&&e.accuracy==="strict"&&e.currentFlags.ignoreCase&&!e.captureMap.get(ref).ignoreCase) {
  throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
}return `\\${ref}`;},CapturingGroup(t,e,n){
  const {body,name,number}=t;
  const i={ignoreCase:e.currentFlags.ignoreCase};
  const l=e.originMap.get(t);

  if (l) {
    i.hidden=true;
    number>l.number&&(i.transferTo=l.number);
  }

  e.captureMap.set(number,i);
  return `(${name?`?<${name}>`:""}${body.map(n).join("|")})`;
},Character({value},e){
  const n=O(value);
  const r=fe(value,{escDigit:e.lastNode.type==="Backreference",inCharClass:e.inCharClass,useFlagV:e.useFlagV});
  if (r!==n) {
    return r;
  }if(e.useAppliedIgnoreCase&&e.currentFlags.ignoreCase&&tn(n)){const s=xr(n);return e.inCharClass?s.join(""):s.length>1?`[${s.join("")}]`:s[0]}return n
},CharacterClass(t,e,n){
  const{kind,negate,parent}=t;let{body}=t;if (kind==="intersection"&&!e.useFlagV) {
    throw new Error("Use of character class intersection requires min target ES2024");
  }

  if (ee.bugFlagVLiteralHyphenIsRange&&e.useFlagV&&body.some($n)) {
    (body = [at(45),...body.filter(c => !$n(c))]);
  }

  const l=() => `[${negate?"^":""}${body.map(n).join(kind==="intersection"?"&&":"")}]`;if(!e.inCharClass){
    if((!e.useFlagV||ee.bugNestedClassIgnoresNegation)&&!negate){const u=body.filter(h => h.type==="CharacterClass"&&h.kind==="union"&&h.negate);if(u.length){
      const h=K();
      const d=h.body[0];
      h.parent=parent;
      d.parent=h;

      body=body.filter(f => !u.includes(f));

      t.body=body;

      if (body.length) {
        t.parent=d;
        d.body.push(t);
      } else {
        h.body.pop();
      }

      u.forEach(f=>{
        const p=ue({body:[f]});
        f.parent=p;
        p.parent=h;
        h.body.push(p);
      });

      return n(h);
    }}e.inCharClass=true;const c=l();
    e.inCharClass=false;
    return c;
  }const a=body[0];if (kind==="union"&&!negate&&a&&((!e.useFlagV||!e.verbose)&&parent.kind==="union"&&!(ee.bugFlagVLiteralHyphenIsRange&&e.useFlagV)||!e.verbose&&parent.kind==="intersection"&&body.length===1&&a.type!=="CharacterClassRange")) {
    return body.map(n).join("");
  }if (!e.useFlagV&&parent.type==="CharacterClass") {
    throw new Error("Uses nested character class in a way that requires min target ES2024");
  }return l()
},CharacterClassRange(t,e){
  const n=t.min.value;
  const r=t.max.value;
  const s={escDigit:false,inCharClass:true,useFlagV:e.useFlagV};
  const o=fe(n,s);
  const i=fe(r,s);
  const l=new Set;
  if(e.useAppliedIgnoreCase&&e.currentFlags.ignoreCase){const a=Pr(t);Ho(a).forEach(u=>{l.add(Array.isArray(u)?`${fe(u[0],s)}-${fe(u[1],s)}`:fe(u,s))})}return`${o}-${i}${[...l].join("")}`
},CharacterSet({kind,negate,value,key},s){if (kind==="dot") {
  return s.currentFlags.dotAll?s.appliedGlobalFlags.dotAll||s.useFlagMods?".":"[^]":v`[^\n]`;
}if (kind==="digit") {
  return negate?v`\D`:v`\d`;
}if(kind==="property"){if (s.useAppliedIgnoreCase&&s.currentFlags.ignoreCase&&Er.has(value)) {
  throw new Error(`Unicode property "${value}" can't be case-insensitive when other chars have specific case`);
}return `${negate?v`\P`:v`\p`}{${key?`${key}=`:""}${value}}`;}if (kind==="word") {
  return negate?v`\W`:v`\w`;
}throw new Error(`Unexpected character set kind "${kind}"`)},Flags(t,e){return(e.appliedGlobalFlags.ignoreCase?"i":"")+(t.dotAll?"s":"")+(t.sticky?"y":"")},Group({atomic,body,flags,parent},s,o){
  const i=s.currentFlags;

  if (flags) {
    (s.currentFlags = Ze(i,flags));
  }

  const l=body.map(o).join("|");
  const a=!s.verbose&&body.length===1&&parent.type!=="Quantifier"&&!atomic&&(!s.useFlagMods||!flags)?l:`(?${Vo(atomic,flags,s.useFlagMods)}${l})`;
  s.currentFlags=i;
  return a;
},LookaroundAssertion({body,kind,negate},r,s){return `(?${`${kind==="lookahead"?"":"<"}${negate?"!":"="}`}${body.map(s).join("|")})`;},Quantifier(t,e,n){return n(t.body)+Xo(t)},Subroutine({isRecursive,ref},n){if (!isRecursive) {
  throw new Error("Unexpected non-recursive subroutine in transformed AST");
}const r=n.recursionLimit;return ref===0?`(?R=${r})`:v`\g<${ref}&R=${r}>`;}};

const Uo=new Set(["$","(",")","*","+",".","?","[","\\","]","^","{","|","}"]);
const Wo=new Set(["-","\\","]","^","["]);
const zo=new Set(["(",")","-","/","[","\\","]","^","{","|","}","!","#","$","%","&","*","+",",",".",":",";","<","=",">","?","@","`","~"]);
const Ln=new Map([[9,v`\t`],[10,v`\n`],[11,v`\v`],[12,v`\f`],[13,v`\r`],[8232,v`\u2028`],[8233,v`\u2029`],[65279,v`\uFEFF`]]);
const qo=new RegExp("^\\p{Cased}$","u");
function tn(t){return qo.test(t)}function Pr(t,e){
  const n=!!e?.firstOnly;
  const r=t.min.value;
  const s=t.max.value;
  const o=[];
  if (r<65&&(s===65535||s>=131071)||r===65536&&s>=131071) {
    return o;
  }for(let i=r;i<=s;i++){const l=O(i);if (!tn(l)) {
    continue;
  }const a=xr(l).filter(c=>{const u=c.codePointAt(0);return u<r||u>s});if (a.length&&(o.push(...a),n)) {
    break
  }}return o
}function fe(t,{escDigit,inCharClass,useFlagV}){
  if (Ln.has(t)) {
    return Ln.get(t);
  }if (t<32||t>126&&t<160||t>262143||escDigit&&Ko(t)) {
    return t>255?`\\u{${t.toString(16).toUpperCase()}}`:`\\x${t.toString(16).toUpperCase().padStart(2,"0")}`;
  }
  const s=inCharClass?useFlagV?zo:Wo:Uo;
  const o=O(t);
  return(s.has(o)?"\\":"")+o
}function Ho(t){
  const e=t.map(s => s.codePointAt(0)).sort((s, o) => s-o);

  const n=[];
  let r=null;for (let s=0; s<e.length; s++) {
  if (e[s+1]===e[s]+1) {
    r??=e[s];
  } else if (r===null) {
    n.push(e[s]);
  } else {
    n.push([r,e[s]]);
    r=null;
  }
}return n
}function Vo(t,e,n){if (t) {
  return">";
}let r="";if(e&&n){const{enable,disable}=e;r=(enable?.ignoreCase?"i":"")+(enable?.dotAll?"s":"")+(disable?"-":"")+(disable?.ignoreCase?"i":"")+(disable?.dotAll?"s":"")}return`${r}:`}function Xo({kind,max,min}){
  let r;

  if (!min&&max===1) {
    r="?";
  } else if (!min&&max===Infinity) {
    r="*";
  } else if (min===1&&max===Infinity) {
    r="+";
  } else if (min===max) {
    r=`{${min}}`;
  } else {
    r=`{${min},${max===Infinity?"":max}}`;
  }

  return r+{greedy:"",lazy:"?",possessive:"+"}[t];
}function Nn({type}){return type==="CapturingGroup"||type==="Group"||type==="LookaroundAssertion";}function Ko(t){return t>47&&t<58}function $n({type,value}){return type==="Character"&&value===45;}const Zo=class Ot extends RegExp{#t=new Map;#e=null;#r;#n=null;#s=null;rawOptions={};get source(){return this.#r||"(?:)"}constructor(e,n,r){
  const s=!!r?.lazyCompile;if(e instanceof RegExp){
    if (r) {
      throw new Error("Cannot provide options when copying a regexp");
    }const o=e;
    super(o,n);
    this.#r=o.source;

    if (o instanceof Ot) {
      this.#t=o.#t;
      this.#n=o.#n;
      this.#s=o.#s;
      this.rawOptions=o.rawOptions;
    }
  }else{
    const o={hiddenCaptures:[],strategy:null,transfers:[],...r};
    super(s?"":e,n);
    this.#r=e;
    this.#t=Yo(o.hiddenCaptures,o.transfers);
    this.#s=o.strategy;
    this.rawOptions=r??{};
  }

  if (!s) {
    (this.#e = this);
  }
}exec(e){
  if(!this.#e){const{lazyCompile,...o}=this.rawOptions;this.#e=new Ot(this.#r,this.flags,o)}
  const n=this.global||this.sticky;
  const r=this.lastIndex;
  if(this.#s==="clip_search"&&n&&r){
    this.lastIndex=0;const s=this.#o(e.slice(r));

    if (s) {
      Qo(s,r,e,this.hasIndices);
      this.lastIndex+=r;
    }

    return s;
  }return this.#o(e)
}#o(e){
  this.#e.lastIndex=this.lastIndex;const n=super.exec.call(this.#e,e);
  this.lastIndex=this.#e.lastIndex;

  if (!n||!this.#t.size) {
    return n;
  }

  const r=[...n];n.length=1;let s;

  if (this.hasIndices) {
    s=[...n.indices];
    n.indices.length=1;
  }

  const o=[0];for(let i=1;i<r.length;i++){
    const{hidden,transferTo}=this.#t.get(i)??{};

    if (hidden) {
      o.push(null);
    } else {
      o.push(n.length);
      n.push(r[i]);
      this.hasIndices&&n.indices.push(s[i]);
    }

    if (transferTo&&r[i]!==void 0) {
      const c=o[a];if (!c) {
          throw new Error(`Invalid capture transfer to "${c}"`);
        }
      n[c]=r[i];

      if (this.hasIndices) {
        (n.indices[c] = s[i]);
      }

      if (n.groups)
        {
          if (!this.#n) {
            (this.#n = Jo(this.source));
          }

          const u=this.#n.get(transferTo);

          if (u) {
            n.groups[u]=r[i];
            this.hasIndices&&(n.indices.groups[u]=s[i]);
          }
        }
    }
  }return n
}};function Qo(t,e,n,r){
  t.index+=e;
  t.input=n;

  if (r)
    {
      const s=t.indices;

      s.forEach((l, i) => {
        if (l) {
          (s[i] = [l[0]+e,l[1]+e]);
        }
      });

      const o=s.groups;

      if (o) {
        Object.keys(o).forEach(i=>{
          const l=o[i];

          if (l) {
            (o[i] = [l[0]+e,l[1]+e]);
          }
        });
      }
    }
}function Yo(t,e){const n=new Map;for (const r of t) {
  n.set(r,{hidden:true});
}for (const[r,s] of e) {
  for (const o of s) {
    Le(n,o,{}).transferTo=r;
  }
}return n}function Jo(t){
  const e=/(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu;
  const n=new Map;
  let r=0;
  let s=0;
  let o;

  while (o=e.exec(t)) {
    const{0:i,groups:{capture:l,name:a}}=o;

    if (i==="[") {
      r++;
    } else if (r) {
      if (i==="]") {
        r--;
      }
    } else if (l) {
      s++;
      a&&n.set(s,a);
    }
  }

  return n
}function ei(t,e){const n=ti(t,e);return n.options?new Zo(n.pattern,n.flags,n.options):new RegExp(n.pattern,n.flags)}function ti(t,e){
  const n=vr(e);
  const r=mr(t,{flags:n.flags,normalizeUnknownPropertyNames:true,rules:{captureGroup:n.rules.captureGroup,singleline:n.rules.singleline},skipBackrefValidation:n.rules.allowOrphanBackrefs,unicodePropertyMap:en});
  const s=Ao(r,{accuracy:n.accuracy,asciiWordBoundaries:n.rules.asciiWordBoundaries,avoidSubclass:n.avoidSubclass,bestEffortTarget:n.target});
  const o=Bo(s,n);
  const i=yo(o.pattern,{captureTransfers:o._captureTransfers,hiddenCaptures:o._hiddenCaptures,mode:"external"});
  const l=go(i.pattern);
  const a=po(l.pattern,{captureTransfers:i.captureTransfers,hiddenCaptures:i.hiddenCaptures});
  const c={pattern:a.pattern,flags:`${n.hasIndices?"d":""}${n.global?"g":""}${o.flags}${o.options.disable.v?"u":"v"}`};
  if(n.avoidSubclass){if (n.lazyCompileLength!==Infinity) {
    throw new Error("Lazy compilation requires subclass")
  }}else{
    const u=a.hiddenCaptures.sort((p, b) => p-b);

    const h=Array.from(a.captureTransfers);
    const d=s._strategy;
    const f=c.pattern.length>=n.lazyCompileLength;

    if ((u.length||h.length||d || f)) {
      (c.options = {...(u.length && {hiddenCaptures:u}),...(h.length && {transfers:h}),...(d && {strategy:d}),...(f && {lazyCompile:f})});
    }
  }return c
}const Pn=4294967295;class ni{constructor(e,n={}){
  this.patterns=e;
  this.options=n;
  const{forgiving=false,cache,regexConstructor}=n;if (!regexConstructor) {
    throw new Error("Option `regexConstructor` is not provided");
  }this.regexps=e.map(i=>{if (typeof i!="string") {
    return i;
  }const l=cache?.get(i);if(l){if (l instanceof RegExp) {
    return l;
  }if (forgiving) {
    return null;
  }throw l}try{
    const a=regexConstructor(i);
    cache?.set(i,a);
    return a;
  }catch(a){
    cache?.set(i,a);

    if (forgiving) {
      return null;
    }

    throw a
  }})
}regexps;findNextMatchSync(e,n,r){
  const s=typeof e=="string"?e:e.content;
  const o=[];
  function i(l,a,c=0){return {index:l,captureIndices:a.indices.map(u => u==null?{start:Pn,end:Pn,length:0}:{start:u[0]+c,end:u[1]+c,length:u[1]-u[0]})};}for(let l=0;l<this.regexps.length;l++){const a=this.regexps[l];if (a) {
    try{a.lastIndex=n;const c=a.exec(s);if (!c) {
      continue;
    }if (c.index===n) {
      return i(l,c,0);
    }o.push([l,c,0])}catch(c){if (this.options.forgiving) {
      continue;
    }throw c}
  }}if(o.length){const l=Math.min(...o.map(a => a[1].index));for (const[a,c,u] of o) {
    if (c.index===l) {
      return i(a,c,u)
    }
  }}return null
}}function ri(t,e){return ei(t,{global:true,hasIndices:true,lazyCompileLength:3000/* 3e3 */,rules:{allowOrphanBackrefs:true,asciiWordBoundaries:true,captureGroup:true,recursionLimit:5,singleline:true},...e});}function si(t={}){
  const e=Object.assign({target:"auto",cache:new Map},t);

  e.regexConstructor||=n => ri(n,{target:e.target});

  return {createScanner(n){return new ni(n,e)},createString(n){return{content:n}}};
}let G=class extends Error{constructor(e){
  super(e);
  this.name="ShikiError";
}};function oi(t){return nn(t)}function nn(t){return Array.isArray(t)?ii(t):t instanceof RegExp?t:typeof t=="object"?ai(t):t}function ii(t){let e=[];for (let n=0,r=t.length; n<r; n++) {
  e[n]=nn(t[n]);
}return e}function ai(t){let e={};for (let n in t) {
  e[n]=nn(t[n]);
}return e}function Tr(t,...e){
  e.forEach(n=>{for (let r in n) {
    t[r]=n[r]
  }});

  return t;
}function Mr(t){const e=~t.lastIndexOf("/")||~t.lastIndexOf("\\");return e===0?t:~e===t.length-1?Mr(t.substring(0,t.length-1)):t.substr(~e+1)}
const _t=/\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;

const We=class{static hasCaptures(t){return t===null?false:(_t.lastIndex=0,_t.test(t));}static replaceCaptures(t,e,n){return t.replace(_t,(r,s,o,i)=>{let l=n[parseInt(s||o,10)];if (l) {
  let a=e.substring(l.start,l.end);

  while (a[0]===".") {
    a=a.substring(1);
  }

  switch(i){case "downcase":
    {
      return a.toLowerCase();
    }case "upcase":
    {
      return a.toUpperCase();
    }default:
    {
      return a
    }}
} else {
  return r
}});}};

function Or(t,e){return t<e?-1:t>e?1:0}function Dr(t,e){
  if (t===null&&e===null) {
    return 0;
  }if (!t) {
    return-1;
  }if (!e) {
    return 1;
  }
  let n=t.length;
  let r=e.length;
  if(n===r){for(let s=0;s<n;s++){let o=Or(t[s],e[s]);if (o!==0) {
    return o
  }}return 0}return n-r
}function Tn(t){return !!(/^#[0-9a-f]{6}$/i.test(t)||/^#[0-9a-f]{8}$/i.test(t)||/^#[0-9a-f]{3}$/i.test(t)||/^#[0-9a-f]{4}$/i.test(t));}function Gr(t){return t.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g,"\\$&");}

const Br=class{constructor(t){this.fn=t}cache=new Map;get(t){
  if (this.cache.has(t)) {
    return this.cache.get(t);
  }const e=this.fn(t);
  this.cache.set(t,e);
  return e;
}};

const Qe=class{constructor(t,e,n){
  this._colorMap=t;
  this._defaults=e;
  this._root=n;
}static createFromRawTheme(t,e){return this.createFromParsedTheme(ui(t),e)}static createFromParsedTheme(t,e){return di(t,e)}_cachedMatchRoot=new Br(t => this._root.match(t));getColorMap(){return this._colorMap.getColorMap()}getDefaults(){return this._defaults}match(t){
  if (t===null) {
    return this._defaults;
  }
  const e=t.scopeName;

  const r=this._cachedMatchRoot.get(e).find(s => li(t.parent,s.parentScopes));

  return r?new Fr(r.fontStyle,r.foreground,r.background):null
}};

const St=class Xe{constructor(e,n){
  this.parent=e;
  this.scopeName=n;
}static push(e,n){for (const r of n) {
  e=new Xe(e,r);
}return e}static from(...e){let n=null;for (let r=0; r<e.length; r++) {
  n=new Xe(n,e[r]);
}return n}push(e){return new Xe(this,e)}getSegments(){
  let e=this;const n=[];

  while (e) {
      n.push(e.scopeName);
      e=e.parent;
    }

  n.reverse();
  return n;
}toString(){return this.getSegments().join(" ")}extends(e){return this===e?true:this.parent===null?false:this.parent.extends(e);}getExtensionIfDefined(e){
  const n=[];let r=this;

  while (r&&r!==e) {
    n.push(r.scopeName);
    r=r.parent;
  }

  return r===e?n.reverse():void 0
}};

function li(t,e){if (e.length===0) {
  return true;
}for(let n=0;n<e.length;n++){
  let r=e[n];
  let s=false;
  if(r===">"){
    if (n===e.length-1) {
      return false;
    }
    r=e[++n];
    s=true;
  }

  while (t&&!ci(t.scopeName,r)) {if (s) {
      return false;
    }t=t.parent}

  if (!t) {
      return false;
    }t=t.parent
}return true;}function ci(t,e){return e===t||t.startsWith(e)&&t[e.length]==="."}var Fr=class{constructor(t,e,n){
  this.fontStyle=t;
  this.foregroundId=e;
  this.backgroundId=n;
}};function ui(t){
  if (!t) {
    return[];
  }if (!t.settings||!Array.isArray(t.settings)) {
    return[];
  }
  let e=t.settings;
  let n=[];
  let r=0;
  for(let s=0,o=e.length;s<o;s++){
    let i=e[s];if (!i.settings) {
      continue;
    }let l;if (typeof i.scope=="string") {
      let h=i.scope;
      h=h.replace(/^[,]+/,"");
      h=h.replace(/[,]+$/,"");
      l=h.split(",");
    } else {
      if (Array.isArray(i.scope)) {
        l=i.scope;
      } else {
        l=[""];
      }
    }let a=-1;if(typeof i.settings.fontStyle=="string"){a=0;let h=i.settings.fontStyle.split(" ");for (let d=0,f=h.length; d<f; d++) {
      switch(h[d]){case "italic":
        {
          a=a|1;break;
        }case "bold":
        {
          a=a|2;break;
        }case "underline":
        {
          a=a|4;break;
        }case "strikethrough":
        {
          a=a|8;break
        }}
    }}let c=null;

    if (typeof i.settings.foreground=="string"&&Tn(i.settings.foreground)) {
      (c = i.settings.foreground);
    }

    let u=null;

    if (typeof i.settings.background=="string"&&Tn(i.settings.background)) {
      (u = i.settings.background);
    }

    for(let h=0,d=l.length;h<d;h++){
      let p=l[h].trim().split(" ");
      let b=p[p.length-1];
      let C=null;

      if (p.length>1) {
        C=p.slice(0,p.length-1);
        C.reverse();
      }

      n[r++]=new hi(b,C,s,a,c,u);
    }
  }return n
}

var hi=class{constructor(t,e,n,r,s,o){
  this.scope=t;
  this.parentScopes=e;
  this.index=n;
  this.fontStyle=r;
  this.foreground=s;
  this.background=o;
}};

const j={
  NotSet: -1,
  None: 0,
  Italic: 1,
  Bold: 2,
  Underline: 4,
  Strikethrough: 8,

  // reverse mapping
  [-1]: "NotSet",

  0: "None",
  1: "Italic",
  2: "Bold",
  4: "Underline",
  8: "Strikethrough"
};

function di(t,e){
  t.sort((a,c)=>{let u=Or(a.scope,c.scope);return u!==0||(u=Dr(a.parentScopes,c.parentScopes),u!==0)?u:a.index-c.index});
  let n=0;
  let r="#000000";
  let s="#ffffff";

  while (t.length>=1&&t[0].scope==="") {
    let a=t.shift();

    if (a.fontStyle!==-1) {
      (n = a.fontStyle);
    }

    if (a.foreground!==null) {
      (r = a.foreground);
    }

    if (a.background!==null) {
      (s = a.background);
    }
  }

  let o=new fi(e);
  let i=new Fr(n,o.getId(r),o.getId(s));
  let l=new gi(new Dt(0,null,-1,0,0),[]);
  for(let a=0,c=t.length;a<c;a++){let u=t[a];l.insert(0,u.scope,u.parentScopes,u.fontStyle,o.getId(u.foreground),o.getId(u.background))}return new Qe(o,i,l)
}

var fi=class{_isFrozen;_lastColorId;_id2color;_color2id;constructor(t){
  this._lastColorId=0;
  this._id2color=[];
  this._color2id=Object.create(null);

  if (Array.isArray(t)) {this._isFrozen=true;for (let e=0,n=t.length; e<n; e++) {
    this._color2id[t[e]]=e;
    this._id2color[e]=t[e];
  }} else {
    this._isFrozen=false
  }
}getId(t){
  if (t===null) {
    return 0;
  }t=t.toUpperCase();let e=this._color2id[t];if (e) {
    return e;
  }if (this._isFrozen) {
    throw new Error(`Missing color in color map - ${t}`);
  }
  e=++this._lastColorId;
  this._color2id[t]=e;
  this._id2color[e]=t;
  return e;
}getColorMap(){return this._id2color.slice(0)}};

const pi=Object.freeze([]);

var Dt=class jr{scopeDepth;parentScopes;fontStyle;foreground;background;constructor(e,n,r,s,o){
  this.scopeDepth=e;
  this.parentScopes=n||pi;
  this.fontStyle=r;
  this.foreground=s;
  this.background=o;
}clone(){return new jr(this.scopeDepth,this.parentScopes,this.fontStyle,this.foreground,this.background)}static cloneArr(e){let n=[];for (let r=0,s=e.length; r<s; r++) {
  n[r]=e[r].clone();
}return n}acceptOverwrite(e,n,r,s){
  if (this.scopeDepth>e) {
    console.log("how did this happen?");
  } else {
    this.scopeDepth=e;
  }

  if (n!==-1) {
    (this.fontStyle = n);
  }

  if (r!==0) {
    (this.foreground = r);
  }

  if (s!==0) {
    (this.background = s);
  }
}};

var gi=class Gt{constructor(e,n=[],r={}){
  this._mainRule=e;
  this._children=r;
  this._rulesWithParentScopes=n;
}_rulesWithParentScopes;static _cmpBySpecificity(e,n){
  if (e.scopeDepth!==n.scopeDepth) {
    return n.scopeDepth-e.scopeDepth;
  }
  let r=0;
  let s=0;

  while ((e.parentScopes[r]===">"&&r++, n.parentScopes[s]===">"&&s++, !(r>=e.parentScopes.length||s>=n.parentScopes.length))) {
    const o=n.parentScopes[s].length-e.parentScopes[r].length;if (o!==0) {
      return o;
    }
    r++;
    s++;
  }

  return n.parentScopes.length-e.parentScopes.length
}match(e){
  if(e!==""){
    let r=e.indexOf(".");
    let s;
    let o;

    if (r===-1) {
      s=e;
      o="";
    } else {
      s=e.substring(0,r);
      o=e.substring(r+1);
    }

    if (this._children.hasOwnProperty(s)) {
      return this._children[s].match(o)
    }
  }const n=this._rulesWithParentScopes.concat(this._mainRule);
  n.sort(Gt._cmpBySpecificity);
  return n;
}insert(e,n,r,s,o,i){
  if(n===""){this._doInsertHere(e,r,s,o,i);return}
  let l=n.indexOf(".");
  let a;
  let c;

  if (l===-1) {
    a=n;
    c="";
  } else {
    a=n.substring(0,l);
    c=n.substring(l+1);
  }

  let u;

  if (this._children.hasOwnProperty(a)) {
    u=this._children[a];
  } else {
    u=new Gt(this._mainRule.clone(),Dt.cloneArr(this._rulesWithParentScopes));
    this._children[a]=u;
  }

  u.insert(e+1,c,r,s,o,i);
}_doInsertHere(e,n,r,s,o){
  if(n===null){this._mainRule.acceptOverwrite(e,r,s,o);return}for(let i=0,l=this._rulesWithParentScopes.length;i<l;i++){let a=this._rulesWithParentScopes[i];if(Dr(a.parentScopes,n)===0){a.acceptOverwrite(e,r,s,o);return}}

  if (r===-1) {
    (r = this._mainRule.fontStyle);
  }

  if (s===0) {
    (s = this._mainRule.foreground);
  }

  if (o===0) {
    (o = this._mainRule.background);
  }

  this._rulesWithParentScopes.push(new Dt(e,n,r,s,o));
}};

const we=class H{static toBinaryStr(e){return e.toString(2).padStart(32,"0")}static print(e){
  const n=H.getLanguageId(e);
  const r=H.getTokenType(e);
  const s=H.getFontStyle(e);
  const o=H.getForeground(e);
  const i=H.getBackground(e);
  console.log({languageId:n,tokenType:r,fontStyle:s,foreground:o,background:i})
}static getLanguageId(e){return(e&255)>>>0}static getTokenType(e){return(e&768)>>>8}static containsBalancedBrackets(e){return(e&1024)!==0}static getFontStyle(e){return(e&30720)>>>11}static getForeground(e){return(e&16744448)>>>15}static getBackground(e){return(e&4278190080)>>>24}static set(e,n,r,s,o,i,l){
  let a=H.getLanguageId(e);
  let c=H.getTokenType(e);
  let u=H.containsBalancedBrackets(e)?1:0;
  let h=H.getFontStyle(e);
  let d=H.getForeground(e);
  let f=H.getBackground(e);

  if (n!==0) {
    (a = n);
  }

  if (r!==8) {
    (c = r);
  }

  if (s!==null) {
    (u = s?1:0);
  }

  if (o!==-1) {
    (h = o);
  }

  if (i!==0) {
    (d = i);
  }

  if (l!==0) {
    (f = l);
  }

  return (a<<0|c<<8|u<<10|h<<11|d<<15|f<<24)>>>0;
}};

function Ye(t,e){
  const n=[];
  const r=mi(t);
  let s=r.next();

  while (s!==null) {
      let a=0;if(s.length===2&&s.charAt(1)===":"){switch(s.charAt(0)){case "R":
        {
          a=1;break;
        }case "L":
        {
          a=-1;break;
        }default:
        {
          console.log(`Unknown priority ${s} in scope selector`)
        }}s=r.next()}let c=i();
      n.push({matcher:c,priority:a});

      if (s!==",") {
        break;
      }

      s=r.next()
    }

  return n;function o(){if(s==="-"){s=r.next();const a=o();return c => !!a&&!a(c);}if(s==="("){
    s=r.next();const a=l();

    if (s===")") {
      (s = r.next());
    }

    return a;
  }if(Mn(s)){const a=[];do {
      a.push(s);
      s=r.next();
    } while (Mn(s));return c => e(a,c);}return null}function i(){
    const a=[];let c=o();

    while (c) {
        a.push(c);
        c=o();
      }

    return u => a.every(h => h(u));
  }function l(){
    const a=[];let c=i();

    while (c&&(a.push(c),s==="|"||s===",")) {do {
        s=r.next();
      } while (s==="|"||s===",");c=i()}

    return u => a.some(h => h(u));
  }
}function Mn(t){return !!t&&!!t.match(/[\w\.:]+/);}function mi(t){
  let e=/([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
  let n=e.exec(t);
  return {next:()=>{
    if (!n) {
      return null;
    }const r=n[0];
    n=e.exec(t);
    return r;
  }};
}function Ur(t){
  if (typeof t.dispose=="function") {
    t.dispose();
  }
}
const Ne=class{constructor(t){this.scopeName=t}toKey(){return this.scopeName}};

const yi=class{constructor(t,e){
  this.scopeName=t;
  this.ruleName=e;
}toKey(){return`${this.scopeName}#${this.ruleName}`}};

const bi=class{_references=[];_seenReferenceKeys=new Set;get references(){return this._references}visitedRule=new Set;add(t){
  const e=t.toKey();

  if (!this._seenReferenceKeys.has(e)) {
    this._seenReferenceKeys.add(e);
    this._references.push(t);
  }
}};

const wi=class{constructor(t,e){
  this.repo=t;
  this.initialScopeName=e;
  this.seenFullScopeRequests.add(this.initialScopeName);
  this.Q=[new Ne(this.initialScopeName)];
}seenFullScopeRequests=new Set;seenPartialScopeRequests=new Set;Q;processQueue(){const t=this.Q;this.Q=[];const e=new bi;for (const n of t) {
  Ci(n,this.initialScopeName,this.repo,e);
}for (const n of e.references) {
  if(n instanceof Ne){
    if (this.seenFullScopeRequests.has(n.scopeName)) {
      continue;
    }
    this.seenFullScopeRequests.add(n.scopeName);
    this.Q.push(n);
  }else{
    if (this.seenFullScopeRequests.has(n.scopeName)||this.seenPartialScopeRequests.has(n.toKey())) {
      continue;
    }
    this.seenPartialScopeRequests.add(n.toKey());
    this.Q.push(n);
  }
}}};

function Ci(t,e,n,r){
  const s=n.lookup(t.scopeName);if(!s){if (t.scopeName===e) {
    throw new Error(`No grammar provided for <${e}>`);
  }return}const o=n.lookup(e);

  if (t instanceof Ne) {
    Ke({baseGrammar:o,selfGrammar:s},r);
  } else {
    Bt(t.ruleName,{baseGrammar:o,selfGrammar:s,repository:s.repository},r);
  }

  const i=n.injections(t.scopeName);if (i) {
    for (const l of i) {
      r.add(new Ne(l))
    }
  }
}function Bt(t,e,n){if(e.repository&&e.repository[t]){const r=e.repository[t];Je([r],e,n)}}function Ke(t,e){
  if (t.selfGrammar.patterns&&Array.isArray(t.selfGrammar.patterns)) {
    Je(t.selfGrammar.patterns,{...t,repository:t.selfGrammar.repository},e);
  }

  if (t.selfGrammar.injections) {
    Je(Object.values(t.selfGrammar.injections),{...t,repository:t.selfGrammar.repository},e);
  }
}function Je(t,e,n){for(const r of t){
  if (n.visitedRule.has(r)) {
    continue;
  }n.visitedRule.add(r);const s=r.repository?Tr({},e.repository,r.repository):e.repository;

  if (Array.isArray(r.patterns)) {
    Je(r.patterns,{...e,repository:s},n);
  }

  const o=r.include;if (!o) {
    continue;
  }const i=Wr(o);switch(i.kind){case 0:
    {
      Ke({...e,selfGrammar:e.baseGrammar},n);break;
    }case 1:
    {
      Ke(e,n);break;
    }case 2:
    {
      Bt(i.ruleName,{...e,repository:s},n);break;
    }case 3:case 4:
    {
      const l=i.scopeName===e.selfGrammar.scopeName?e.selfGrammar:i.scopeName===e.baseGrammar.scopeName?e.baseGrammar:void 0;if (l)
        {
          const a={baseGrammar:e.baseGrammar,selfGrammar:l,repository:s};

          if (i.kind===4) {
            Bt(i.ruleName,a,n);
          } else {
            Ke(a,n);
          }
        } else {
      if (i.kind===4) {
        n.add(new yi(i.scopeName,i.ruleName));
      } else {
        n.add(new Ne(i.scopeName));
      }
    }break
    }}
}}
const _i=class{kind=0};
const Si=class{kind=1};
const ki=class{constructor(t){this.ruleName=t}kind=2};
const vi=class{constructor(t){this.scopeName=t}kind=3};

const xi=class{constructor(t,e){
  this.scopeName=t;
  this.ruleName=e;
}kind=4};

function Wr(t){if (t==="$base") {
  return new _i;
}if (t==="$self") {
  return new Si;
}const e=t.indexOf("#");if (e===-1) {
  return new vi(t);
}if (e===0) {
  return new ki(t.substring(1));
}{
  const n=t.substring(0,e);
  const r=t.substring(e+1);
  return new xi(n,r)
}}
const Ei=/\\(\d+)/;
const On=/\\(\d+)/g;
const Ii=-1;
const zr=-2;

const De=class{$location;id;_nameIsCapturing;_name;_contentNameIsCapturing;_contentName;constructor(t,e,n,r){
  this.$location=t;
  this.id=e;
  this._name=n||null;
  this._nameIsCapturing=We.hasCaptures(this._name);
  this._contentName=r||null;
  this._contentNameIsCapturing=We.hasCaptures(this._contentName);
}get debugName(){const t=this.$location?`${Mr(this.$location.filename)}:${this.$location.line}`:"unknown";return`${this.constructor.name}#${this.id} @ ${t}`}getName(t,e){return!this._nameIsCapturing||this._name===null||t===null||e===null?this._name:We.replaceCaptures(this._name,t,e)}getContentName(t,e){return!this._contentNameIsCapturing||this._contentName===null?this._contentName:We.replaceCaptures(this._contentName,t,e)}};

const Ai=class extends De{retokenizeCapturedWithRuleId;constructor(t,e,n,r,s){
  super(t,e,n,r);
  this.retokenizeCapturedWithRuleId=s;
}dispose(){}collectPatterns(t,e){throw new Error("Not supported!")}compile(t,e){throw new Error("Not supported!")}compileAG(t,e,n,r){throw new Error("Not supported!")}};

const Ri=class extends De{_match;captures;_cachedCompiledPatterns;constructor(t,e,n,r,s){
  super(t,e,n,null);
  this._match=new $e(r,this.id);
  this.captures=s;
  this._cachedCompiledPatterns=null;
}dispose(){
  if (this._cachedCompiledPatterns) {
    this._cachedCompiledPatterns.dispose();
    this._cachedCompiledPatterns=null;
  }
}get debugMatchRegExp(){return`${this._match.source}`}collectPatterns(t,e){e.push(this._match)}compile(t,e){return this._getCachedCompiledPatterns(t).compile(t)}compileAG(t,e,n,r){return this._getCachedCompiledPatterns(t).compileAG(t,n,r)}_getCachedCompiledPatterns(t){
  if (!this._cachedCompiledPatterns) {
    this._cachedCompiledPatterns=new Pe;
    this.collectPatterns(t,this._cachedCompiledPatterns);
  }

  return this._cachedCompiledPatterns;
}};

const Dn=class extends De{hasMissingPatterns;patterns;_cachedCompiledPatterns;constructor(t,e,n,r,s){
  super(t,e,n,r);
  this.patterns=s.patterns;
  this.hasMissingPatterns=s.hasMissingPatterns;
  this._cachedCompiledPatterns=null;
}dispose(){
  if (this._cachedCompiledPatterns) {
    this._cachedCompiledPatterns.dispose();
    this._cachedCompiledPatterns=null;
  }
}collectPatterns(t,e){for (const n of this.patterns) {
  t.getRule(n).collectPatterns(t,e)
}}compile(t,e){return this._getCachedCompiledPatterns(t).compile(t)}compileAG(t,e,n,r){return this._getCachedCompiledPatterns(t).compileAG(t,n,r)}_getCachedCompiledPatterns(t){
  if (!this._cachedCompiledPatterns) {
    this._cachedCompiledPatterns=new Pe;
    this.collectPatterns(t,this._cachedCompiledPatterns);
  }

  return this._cachedCompiledPatterns;
}};

const Ft=class extends De{_begin;beginCaptures;_end;endHasBackReferences;endCaptures;applyEndPatternLast;hasMissingPatterns;patterns;_cachedCompiledPatterns;constructor(t,e,n,r,s,o,i,l,a,c){
  super(t,e,n,r);
  this._begin=new $e(s,this.id);
  this.beginCaptures=o;
  this._end=new $e(i||"￿",-1);
  this.endHasBackReferences=this._end.hasBackReferences;
  this.endCaptures=l;
  this.applyEndPatternLast=a||false;
  this.patterns=c.patterns;
  this.hasMissingPatterns=c.hasMissingPatterns;
  this._cachedCompiledPatterns=null;
}dispose(){
  if (this._cachedCompiledPatterns) {
    this._cachedCompiledPatterns.dispose();
    this._cachedCompiledPatterns=null;
  }
}get debugBeginRegExp(){return`${this._begin.source}`}get debugEndRegExp(){return`${this._end.source}`}getEndWithResolvedBackReferences(t,e){return this._end.resolveBackReferences(t,e)}collectPatterns(t,e){e.push(this._begin)}compile(t,e){return this._getCachedCompiledPatterns(t,e).compile(t)}compileAG(t,e,n,r){return this._getCachedCompiledPatterns(t,e).compileAG(t,n,r)}_getCachedCompiledPatterns(t,e){
  if(!this._cachedCompiledPatterns){
    this._cachedCompiledPatterns=new Pe;for (const n of this.patterns) {
      t.getRule(n).collectPatterns(t,this._cachedCompiledPatterns);
    }

    if (this.applyEndPatternLast) {
      this._cachedCompiledPatterns.push(this._end.hasBackReferences?this._end.clone():this._end);
    } else {
      this._cachedCompiledPatterns.unshift(this._end.hasBackReferences?this._end.clone():this._end);
    }
  }

  if (this._end.hasBackReferences) {
    if (this.applyEndPatternLast) {
      this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length()-1,e);
    } else {
      this._cachedCompiledPatterns.setSource(0,e);
    }
  }

  return this._cachedCompiledPatterns;
}};

const et=class extends De{_begin;beginCaptures;whileCaptures;_while;whileHasBackReferences;hasMissingPatterns;patterns;_cachedCompiledPatterns;_cachedCompiledWhilePatterns;constructor(t,e,n,r,s,o,i,l,a){
  super(t,e,n,r);
  this._begin=new $e(s,this.id);
  this.beginCaptures=o;
  this.whileCaptures=l;
  this._while=new $e(i,zr);
  this.whileHasBackReferences=this._while.hasBackReferences;
  this.patterns=a.patterns;
  this.hasMissingPatterns=a.hasMissingPatterns;
  this._cachedCompiledPatterns=null;
  this._cachedCompiledWhilePatterns=null;
}dispose(){
  if (this._cachedCompiledPatterns) {
    this._cachedCompiledPatterns.dispose();
    this._cachedCompiledPatterns=null;
  }

  if (this._cachedCompiledWhilePatterns) {
    this._cachedCompiledWhilePatterns.dispose();
    this._cachedCompiledWhilePatterns=null;
  }
}get debugBeginRegExp(){return`${this._begin.source}`}get debugWhileRegExp(){return`${this._while.source}`}getWhileWithResolvedBackReferences(t,e){return this._while.resolveBackReferences(t,e)}collectPatterns(t,e){e.push(this._begin)}compile(t,e){return this._getCachedCompiledPatterns(t).compile(t)}compileAG(t,e,n,r){return this._getCachedCompiledPatterns(t).compileAG(t,n,r)}_getCachedCompiledPatterns(t){if(!this._cachedCompiledPatterns){this._cachedCompiledPatterns=new Pe;for (const e of this.patterns) {
  t.getRule(e).collectPatterns(t,this._cachedCompiledPatterns)
}}return this._cachedCompiledPatterns}compileWhile(t,e){return this._getCachedCompiledWhilePatterns(t,e).compile(t)}compileWhileAG(t,e,n,r){return this._getCachedCompiledWhilePatterns(t,e).compileAG(t,n,r)}_getCachedCompiledWhilePatterns(t,e){
  if (!this._cachedCompiledWhilePatterns) {
    this._cachedCompiledWhilePatterns=new Pe;
    this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences?this._while.clone():this._while);
  }

  if (this._while.hasBackReferences) {
    this._cachedCompiledWhilePatterns.setSource(0,e||"￿");
  }

  return this._cachedCompiledWhilePatterns;
}};

const qr=class F{static createCaptureRule(e,n,r,s,o){return e.registerRule(i => new Ai(n,i,r,s,o));}static getCompiledRuleId(e,n,r){
  if (!e.id) {
    n.registerRule(s=>{
      e.id=s;

      if (e.match) {
        return new Ri(e.$vscodeTextmateLocation,e.id,e.name,e.match,F._compileCaptures(e.captures,n,r));
      }

      if(typeof e.begin === "undefined"){
        if (e.repository) {
          (r = Tr({},r,e.repository));
        }

        let o=e.patterns;

        if (typeof o === "undefined"&&e.include) {
          (o = [{include:e.include}]);
        }

        return new Dn(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,F._compilePatterns(o,n,r));
      }return e.while?new et(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,F._compileCaptures(e.beginCaptures||e.captures,n,r),e.while,F._compileCaptures(e.whileCaptures||e.captures,n,r),F._compilePatterns(e.patterns,n,r)):new Ft(e.$vscodeTextmateLocation,e.id,e.name,e.contentName,e.begin,F._compileCaptures(e.beginCaptures||e.captures,n,r),e.end,F._compileCaptures(e.endCaptures||e.captures,n,r),e.applyEndPatternLast,F._compilePatterns(e.patterns,n,r))
    });
  }

  return e.id;
}static _compileCaptures(e,n,r){let s=[];if(e){let o=0;for(const i in e){
  if (i==="$vscodeTextmateLocation") {
    continue;
  }const l=parseInt(i,10);

  if (l>o) {
    (o = l);
  }
}for (let i=0; i<=o; i++) {
  s[i]=null;
}for(const i in e){
  if (i==="$vscodeTextmateLocation") {
    continue;
  }const l=parseInt(i,10);let a=0;

  if (e[i].patterns) {
    (a = F.getCompiledRuleId(e[i],n,r));
  }

  s[l]=F.createCaptureRule(n,e[i].$vscodeTextmateLocation,e[i].name,e[i].contentName,a);
}}return s}static _compilePatterns(e,n,r){let s=[];if (e) {
  for(let o=0,i=e.length;o<i;o++){const l=e[o];let a=-1;if (l.include) {const c=Wr(l.include);switch(c.kind){case 0:case 1:
    {
      a=F.getCompiledRuleId(r[l.include],n,r);break;
    }case 2:
    {
      let u=r[c.ruleName];

      if (u) {
        (a = F.getCompiledRuleId(u,n,r));
      }

      break;
    }case 3:case 4:
    {
      const h=c.scopeName;
      const d=c.kind===4?c.ruleName:null;
      const f=n.getExternalGrammar(h,r);
      if (f) {
        if (d)
          {
            let p=f.repository[d];

            if (p) {
              (a = F.getCompiledRuleId(p,n,f.repository));
            }
          } else {
          a=F.getCompiledRuleId(f.repository.$self,n,f.repository);
        }
      }break
    }}} else {
    a=F.getCompiledRuleId(l,n,r);
  }if(a!==-1){
    const c=n.getRule(a);let u=false;

    if ((c instanceof Dn||c instanceof Ft||c instanceof et)&&c.hasMissingPatterns&&c.patterns.length===0) {
      (u = true);
    }

    if (u) {
      continue;
    }

    s.push(a)
  }}
}return{patterns:s,hasMissingPatterns:(e?e.length:0)!==s.length}}};

var $e=class Hr{source;ruleId;hasAnchor;hasBackReferences;_anchorCache;constructor(e,n){
  if (e&&typeof e=="string") {
    const r=e.length;
    let s=0;
    let o=[];
    let i=false;
    for (let l=0; l<r; l++) {
      if(e.charAt(l)==="\\"&&l+1<r){
        const c=e.charAt(l+1);

        if (c==="z") {
          o.push(e.substring(s,l));
          o.push("$(?!\\n)(?<!\\n)");
          s=l+2;
        } else if ((c==="A" || c==="G")) {
          (i = true);
        }

        l++;
      }
    }
    this.hasAnchor=i;

    if (s===0) {
      this.source=e;
    } else {
      o.push(e.substring(s,r));
      this.source=o.join("");
    }
  } else {
    this.hasAnchor=false;
    this.source=e;
  }

  if (this.hasAnchor) {
    this._anchorCache=this._buildAnchorCache();
  } else {
    this._anchorCache=null;
  }

  this.ruleId=n;

  if (typeof this.source=="string") {
    this.hasBackReferences=Ei.test(this.source);
  } else {
    this.hasBackReferences=false;
  }
}clone(){return new Hr(this.source,this.ruleId)}setSource(e){
  if (this.source!==e) {
    this.source=e;
    this.hasAnchor&&(this._anchorCache=this._buildAnchorCache());
  }
}resolveBackReferences(e,n){
  if (typeof this.source!="string") {
    throw new Error("This method should only be called if the source is a string");
  }let r=n.map(s => e.substring(s.start,s.end));
  On.lastIndex=0;

  return this.source.replace(On,(s, o) => Gr(r[parseInt(o,10)]||""));
}_buildAnchorCache(){
  if (typeof this.source!="string") {
    throw new Error("This method should only be called if the source is a string");
  }
  let e=[];
  let n=[];
  let r=[];
  let s=[];
  let o;
  let i;
  let l;
  let a;
  o=0;

  for (i=this.source.length; o<i; o++) {
    l=this.source.charAt(o);
    e[o]=l;
    n[o]=l;
    r[o]=l;
    s[o]=l;

    if (l==="\\"&&o+1<i) {
      a=this.source.charAt(o+1);
      a==="A"?(e[o+1]="￿",n[o+1]="￿",r[o+1]="A",s[o+1]="A"):a==="G"?(e[o+1]="￿",n[o+1]="G",r[o+1]="￿",s[o+1]="G"):(e[o+1]=a,n[o+1]=a,r[o+1]=a,s[o+1]=a);
      o++;
    }
  }

  return{A0_G0:e.join(""),A0_G1:n.join(""),A1_G0:r.join(""),A1_G1:s.join("")}
}resolveAnchors(e,n){
  if (!this.hasAnchor||!this._anchorCache||typeof this.source!="string") {
    return this.source;
  }

  if (e) {
    if (n) {
      return this._anchorCache.A1_G1;
    }

    return this._anchorCache.A1_G0;
  }

  if (n) {
    return this._anchorCache.A0_G1;
  }

  return this._anchorCache.A0_G0;
}};

var Pe=class{_items;_hasAnchors;_cached;_anchorCache;constructor(){
  this._items=[];
  this._hasAnchors=false;
  this._cached=null;
  this._anchorCache={A0_G0:null,A0_G1:null,A1_G0:null,A1_G1:null};
}dispose(){this._disposeCaches()}_disposeCaches(){
  if (this._cached) {
    this._cached.dispose();
    this._cached=null;
  }

  if (this._anchorCache.A0_G0) {
    this._anchorCache.A0_G0.dispose();
    this._anchorCache.A0_G0=null;
  }

  if (this._anchorCache.A0_G1) {
    this._anchorCache.A0_G1.dispose();
    this._anchorCache.A0_G1=null;
  }

  if (this._anchorCache.A1_G0) {
    this._anchorCache.A1_G0.dispose();
    this._anchorCache.A1_G0=null;
  }

  if (this._anchorCache.A1_G1) {
    this._anchorCache.A1_G1.dispose();
    this._anchorCache.A1_G1=null;
  }
}push(t){
  this._items.push(t);
  this._hasAnchors=this._hasAnchors||t.hasAnchor;
}unshift(t){
  this._items.unshift(t);
  this._hasAnchors=this._hasAnchors||t.hasAnchor;
}length(){return this._items.length}setSource(t,e){
  if (this._items[t].source!==e) {
    this._disposeCaches();
    this._items[t].setSource(e);
  }
}compile(t){if(!this._cached){let e=this._items.map(n => n.source);this._cached=new Gn(t,e,this._items.map(n => n.ruleId))}return this._cached}compileAG(t,e,n){
  if (this._hasAnchors) {
    if (e) {
      if (n) {
        this._anchorCache.A1_G1||(this._anchorCache.A1_G1=this._resolveAnchors(t,e,n));
        return this._anchorCache.A1_G1;
      }

      this._anchorCache.A1_G0||(this._anchorCache.A1_G0=this._resolveAnchors(t,e,n));
      return this._anchorCache.A1_G0;
    }

    if (n) {
      this._anchorCache.A0_G1||(this._anchorCache.A0_G1=this._resolveAnchors(t,e,n));
      return this._anchorCache.A0_G1;
    }

    this._anchorCache.A0_G0||(this._anchorCache.A0_G0=this._resolveAnchors(t,e,n));
    return this._anchorCache.A0_G0;
  }

  return this.compile(t);
}_resolveAnchors(t,e,n){let r=this._items.map(s => s.resolveAnchors(e,n));return new Gn(t,r,this._items.map(s => s.ruleId));}};

var Gn=class{constructor(t,e,n){
  this.regExps=e;
  this.rules=n;
  this.scanner=t.createOnigScanner(e);
}scanner;dispose(){
  if (typeof this.scanner.dispose=="function") {
    this.scanner.dispose();
  }
}toString(){const t=[];for (let e=0,n=this.rules.length; e<n; e++) {
  t.push(`   - ${this.rules[e]}: ${this.regExps[e]}`);
}return t.join(`
`)}findNextMatchSync(t,e,n){const r=this.scanner.findNextMatchSync(t,e,n);return r?{ruleId:this.rules[r.index],captureIndices:r.captureIndices}:null}};

const kt=class{constructor(t,e){
  this.languageId=t;
  this.tokenType=e;
}};

const Li=class jt{_defaultAttributes;_embeddedLanguagesMatcher;constructor(e,n){
  this._defaultAttributes=new kt(e,8);
  this._embeddedLanguagesMatcher=new Ni(Object.entries(n||{}));
}getDefaultAttributes(){return this._defaultAttributes}getBasicScopeAttributes(e){return e===null?jt._NULL_SCOPE_METADATA:this._getBasicScopeAttributes.get(e)}static _NULL_SCOPE_METADATA=new kt(0,0);_getBasicScopeAttributes=new Br(e=>{
  const n=this._scopeToLanguage(e);
  const r=this._toStandardTokenType(e);
  return new kt(n,r)
});_scopeToLanguage(e){return this._embeddedLanguagesMatcher.match(e)||0}_toStandardTokenType(e){const n=e.match(jt.STANDARD_TOKEN_TYPE_REGEXP);if (!n) {
  return 8;
}switch(n[1]){case "comment":
  {
    return 1;
  }case "string":
  {
    return 2;
  }case "regex":
  {
    return 3;
  }case "meta.embedded":
  {
    return 0
  }}throw new Error("Unexpected match for standard token type!")}static STANDARD_TOKEN_TYPE_REGEXP=/\b(comment|string|regex|meta\.embedded)\b/};

var Ni=class{values;scopesRegExp;constructor(t){if (t.length===0) {
  this.values=null;
  this.scopesRegExp=null;
} else {
  this.values=new Map(t);const e=t.map(([n,r]) => Gr(n));
  e.sort();
  e.reverse();
  this.scopesRegExp=new RegExp(`^((${e.join(")|(")}))($|\\.)`,"");
}}match(t){if (!this.scopesRegExp) {
  return;
}const e=t.match(this.scopesRegExp);if (e) {
  return this.values.get(e[1])
}}};

const Bn=class{constructor(t,e){
  this.stack=t;
  this.stoppedEarly=e;
}};

function Vr(t,e,n,r,s,o,i,l){
  const a=e.content.length;
  let c=false;
  let u=-1;
  if(i){
    const f=$i(t,e,n,r,s,o);
    s=f.stack;
    r=f.linePos;
    n=f.isFirstLine;
    u=f.anchorPosition;
  }const h=Date.now();

  while (!c) {if (l!==0&&Date.now()-h>l) {
      return new Bn(s,true);
    }d()}

  return new Bn(s,false);function d(){
    const f=Pi(t,e,n,r,s,u);if(!f){
          o.produce(s,a);
          c=true;
          return
        }
    const p=f.captureIndices;
    const b=f.matchedRuleId;
    const C=p&&p.length>0?p[0].end>r:false;
    if(b===Ii){
      const g=s.getRule(t);
      o.produce(s,p[0].start);
      s=s.withContentNameScopesList(s.nameScopesList);
      Ie(t,e,n,s,o,g.endCaptures,p);
      o.produce(s,p[0].end);
      const y=s;
      s=s.parent;
      u=y.getAnchorPos();

      if (!C&&y.getEnterPos()===r) {
        s=y;
        o.produce(s,a);
        c=true;
        return
      }
    }else{
      const g=t.getRule(b);o.produce(s,p[0].start);
      const y=s;
      const m=g.getName(e.content,p);
      const _=s.contentNameScopesList.pushAttributed(m,t);
      s=s.push(b,r,u,p[0].end===a,null,_,_);

      if (g instanceof Ft) {
        const k=g;
        Ie(t,e,n,s,o,k.beginCaptures,p);
        o.produce(s,p[0].end);
        u=p[0].end;
        const I=k.getContentName(e.content,p);
        const S=_.pushAttributed(I,t);
        s=s.withContentNameScopesList(S);

        if (k.endHasBackReferences) {
          (s = s.withEndRule(k.getEndWithResolvedBackReferences(e.content,p)));
        }

        if (!C&&y.hasSameRuleAs(s)) {
          s=s.pop();
          o.produce(s,a);
          c=true;
          return
        }
      } else if (g instanceof et) {
        const k=g;
        Ie(t,e,n,s,o,k.beginCaptures,p);
        o.produce(s,p[0].end);
        u=p[0].end;
        const I=k.getContentName(e.content,p);
        const S=_.pushAttributed(I,t);
        s=s.withContentNameScopesList(S);

        if (k.whileHasBackReferences) {
          (s = s.withEndRule(k.getWhileWithResolvedBackReferences(e.content,p)));
        }

        if (!C&&y.hasSameRuleAs(s)) {
          s=s.pop();
          o.produce(s,a);
          c=true;
          return
        }
      } else {
        Ie(t,e,n,s,o,g.captures,p);
        o.produce(s,p[0].end);
        s=s.pop();

        if (!C) {
          s=s.safePop();
          o.produce(s,a);
          c=true;
          return
        }
      }
    }

    if (p[0].end>r) {
      r=p[0].end;
      n=false;
    }
  }
}function $i(t,e,n,r,s,o){let i=s.beginRuleCapturedEOL?0:-1;const l=[];for(let a=s;a;a=a.pop()){
  const c=a.getRule(t);

  if (c instanceof et) {
    l.push({rule:c,stack:a});
  }
}for(let a=l.pop();a;a=l.pop()){
  const {ruleScanner,findOptions}=Oi(a.rule,t,a.stack.endRule,n,r===i);
  const h=ruleScanner.findNextMatchSync(e,r,findOptions);
  if(h){
    if(h.ruleId!==zr){s=a.stack.pop();break}

    if (h.captureIndices&&h.captureIndices.length) {
      o.produce(a.stack,h.captureIndices[0].start);
      Ie(t,e,n,a.stack,o,a.rule.whileCaptures,h.captureIndices);
      o.produce(a.stack,h.captureIndices[0].end);
      i=h.captureIndices[0].end;
      h.captureIndices[0].end>r&&(r=h.captureIndices[0].end,n=false);
    }
  }else{s=a.stack.pop();break}
}return{stack:s,linePos:r,anchorPosition:i,isFirstLine:n}}function Pi(t,e,n,r,s,o){
  const i=Ti(t,e,n,r,s,o);
  const l=t.getInjections();
  if (l.length===0) {
    return i;
  }const a=Mi(l,t,e,n,r,s,o);if (!a) {
    return i;
  }if (!i) {
    return a;
  }
  const c=i.captureIndices[0].start;
  const u=a.captureIndices[0].start;
  return u<c||a.priorityMatch&&u===c?a:i
}function Ti(t,e,n,r,s,o){
  const i=s.getRule(t);
  const {ruleScanner,findOptions}=Xr(i,t,s.endRule,n,r===o);
  const c=ruleScanner.findNextMatchSync(e,r,findOptions);
  return c?{captureIndices:c.captureIndices,matchedRuleId:c.ruleId}:null
}function Mi(t,e,n,r,s,o,i){
  let l=Number.MAX_VALUE;
  let a=null;
  let c;
  let u=0;
  const h=o.contentNameScopesList.getScopeNames();for(let d=0,f=t.length;d<f;d++){
    const p=t[d];if (!p.matcher(h)) {
      continue;
    }
    const b=e.getRule(p.ruleId);
    const {ruleScanner,findOptions}=Xr(b,e,null,r,s===i);
    const y=ruleScanner.findNextMatchSync(n,s,findOptions);
    if (!y) {
      continue;
    }const m=y.captureIndices[0].start;if (!(m>=l)&&(l=m,a=y.captureIndices,c=y.ruleId,u=p.priority,l===s)) {
      break
    }
  }return a?{priorityMatch:u===-1,captureIndices:a,matchedRuleId:c}:null
}function Xr(t,e,n,r,s){return{ruleScanner:t.compileAG(e,n,r,s),findOptions:0}}function Oi(t,e,n,r,s){return{ruleScanner:t.compileWhileAG(e,n,r,s),findOptions:0}}function Ie(t,e,n,r,s,o,i){
  if (o.length===0) {
    return;
  }
  const l=e.content;
  const a=Math.min(o.length,i.length);
  const c=[];
  const u=i[0].end;
  for(let h=0;h<a;h++){
    const d=o[h];if (d===null) {
        continue;
      }const f=i[h];if (f.length===0) {
        continue;
      }if (f.start>u) {
        break;
      }

    while (c.length>0&&c[c.length-1].endPos<=f.start) {
        s.produceFromScopes(c[c.length-1].scopes,c[c.length-1].endPos);
        c.pop();
      }

    if (c.length>0) {
      s.produceFromScopes(c[c.length-1].scopes,f.start);
    } else {
      s.produce(r,f.start);
    }

    if (d.retokenizeCapturedWithRuleId) {
      const b=d.getName(l,i);
      const C=r.contentNameScopesList.pushAttributed(b,t);
      const g=d.getContentName(l,i);
      const y=C.pushAttributed(g,t);
      const m=r.push(d.retokenizeCapturedWithRuleId,f.start,-1,false,null,C,y);
      const _=t.createOnigString(l.substring(0,f.end));
      Vr(t,_,n&&f.start===0,f.start,m,s,false,0);
      Ur(_);
      continue
    }

    const p=d.getName(l,i);if(p!==null){const C=(c.length>0?c[c.length-1].scopes:r.contentNameScopesList).pushAttributed(p,t);c.push(new Di(C,f.end))}
  }

  while (c.length>0) {
      s.produceFromScopes(c[c.length-1].scopes,c[c.length-1].endPos);
      c.pop();
    }
}var Di=class{scopes;endPos;constructor(t,e){
  this.scopes=t;
  this.endPos=e;
}};function Gi(t,e,n,r,s,o,i,l){return new Fi(t,e,n,r,s,o,i,l)}function Fn(t,e,n,r,s){
  const o=Ye(e,tt);
  const i=qr.getCompiledRuleId(n,r,s.repository);
  for (const l of o) {
    t.push({debugSelector:e,matcher:l.matcher,ruleId:i,grammar:s,priority:l.priority})
  }
}function tt(t,e){if (e.length<t.length) {
  return false;
}let n=0;return t.every(r=>{for (let s=n; s<e.length; s++) {
  if (Bi(e[s],r)) {
    n=s+1;
    return true;
  }
}return false;});}function Bi(t,e){if (!t) {
  return false;
}if (t===e) {
  return true;
}const n=e.length;return t.length>n&&t.substr(0,n)===e&&t[n]==="."}var Fi=class{constructor(t,e,n,r,s,o,i,l){
  this._rootScopeName=t;
  this.balancedBracketSelectors=o;
  this._onigLib=l;
  this._basicScopeAttributesProvider=new Li(n,r);
  this._rootId=-1;
  this._lastRuleId=0;
  this._ruleId2desc=[null];
  this._includedGrammars={};
  this._grammarRepository=i;
  this._grammar=jn(e,null);
  this._injections=null;
  this._tokenTypeMatchers=[];

  if (s) {
    for(const a of Object.keys(s)){const c=Ye(a,tt);for (const u of c) {
      this._tokenTypeMatchers.push({matcher:u.matcher,type:s[a]})
    }}
  }
}_rootId;_lastRuleId;_ruleId2desc;_includedGrammars;_grammarRepository;_grammar;_injections;_basicScopeAttributesProvider;_tokenTypeMatchers;get themeProvider(){return this._grammarRepository}dispose(){for (const t of this._ruleId2desc) {
  if (t) {
    t.dispose();
  }
}}createOnigScanner(t){return this._onigLib.createOnigScanner(t)}createOnigString(t){return this._onigLib.createOnigString(t)}getMetadataForScope(t){return this._basicScopeAttributesProvider.getBasicScopeAttributes(t)}_collectInjections(){
  const t={lookup:s => s===this._rootScopeName?this._grammar:this.getExternalGrammar(s),injections:s => this._grammarRepository.injections(s)};

  const e=[];
  const n=this._rootScopeName;
  const r=t.lookup(n);
  if(r){
    const s=r.injections;if (s) {
      for (let i in s) {
        Fn(e,i,s[i],this,r);
      }
    }const o=this._grammarRepository.injections(n);

    if (o) {
      o.forEach(i=>{const l=this.getExternalGrammar(i);if(l){
        const a=l.injectionSelector;

        if (a) {
          Fn(e,a,l,this,l);
        }
      }});
    }
  }

  e.sort((s, o) => s.priority-o.priority);

  return e;
}getInjections(){
  if (this._injections===null) {
    (this._injections = this._collectInjections());
  }

  return this._injections;
}registerRule(t){
  const e=++this._lastRuleId;
  const n=t(e);
  this._ruleId2desc[e]=n;
  return n;
}getRule(t){return this._ruleId2desc[t]}getExternalGrammar(t,e){if (this._includedGrammars[t]) {
  return this._includedGrammars[t];
}if(this._grammarRepository){const n=this._grammarRepository.lookup(t);if (n) {
  this._includedGrammars[t]=jn(n,e&&e.$base);
  return this._includedGrammars[t];
}}}tokenizeLine(t,e,n=0){const r=this._tokenize(t,e,false,n);return{tokens:r.lineTokens.getResult(r.ruleStack,r.lineLength),ruleStack:r.ruleStack,stoppedEarly:r.stoppedEarly}}tokenizeLine2(t,e,n=0){const r=this._tokenize(t,e,true,n);return{tokens:r.lineTokens.getBinaryResult(r.ruleStack,r.lineLength),ruleStack:r.ruleStack,stoppedEarly:r.stoppedEarly}}_tokenize(t,e,n,r){
  if (this._rootId===-1) {
    this._rootId=qr.getCompiledRuleId(this._grammar.repository.$self,this,this._grammar.repository);
    this.getInjections();
  }

  let s;if (!e||e===Ut.NULL) {
    s=true;
    const c=this._basicScopeAttributesProvider.getDefaultAttributes();
    const u=this.themeProvider.getDefaults();
    const h=we.set(0,c.languageId,c.tokenType,null,u.fontStyle,u.foregroundId,u.backgroundId);
    const d=this.getRule(this._rootId).getName(null,null);
    let f;

    if (d) {
      f=Re.createRootAndLookUpScopeName(d,h,this);
    } else {
      f=Re.createRoot("unknown",h);
    }

    e=new Ut(null,this._rootId,-1,-1,false,null,f,f);
  } else {
      s=false;
      e.reset();
    }t=t+`
    `;
  const o=this.createOnigString(t);
  const i=o.content.length;
  const l=new Ui(n,t,this._tokenTypeMatchers,this.balancedBracketSelectors);
  const a=Vr(this,o,s,0,e,l,true,r);
  Ur(o);
  return {lineLength:i,lineTokens:l,ruleStack:a.stack,stoppedEarly:a.stoppedEarly};
}};function jn(t,e){
  t=oi(t);
  t.repository=t.repository||{};
  t.repository.$self={$vscodeTextmateLocation:t.$vscodeTextmateLocation,patterns:t.patterns,name:t.scopeName};
  t.repository.$base=e||t.repository.$self;
  return t;
}

var Re=class Z{constructor(e,n,r){
  this.parent=e;
  this.scopePath=n;
  this.tokenAttributes=r;
}static fromExtension(e,n){
  let r=e;
  let s=e?.scopePath??null;
  for (const o of n) {
    s=St.push(s,o.scopeNames);
    r=new Z(r,s,o.encodedTokenAttributes);
  }return r
}static createRoot(e,n){return new Z(null,new St(null,e),n)}static createRootAndLookUpScopeName(e,n,r){
  const s=r.getMetadataForScope(e);
  const o=new St(null,e);
  const i=r.themeProvider.themeMatch(o);
  const l=Z.mergeAttributes(n,s,i);
  return new Z(null,o,l)
}get scopeName(){return this.scopePath.scopeName}toString(){return this.getScopeNames().join(" ")}equals(e){return Z.equals(this,e)}static equals(e,n){do{
  if (e===n||!e&&!n) {
    return true;
  }if (!e||!n||e.scopeName!==n.scopeName||e.tokenAttributes!==n.tokenAttributes) {
    return false;
  }
  e=e.parent;
  n=n.parent;
}while(true)}static mergeAttributes(e,n,r){
  let s=-1;
  let o=0;
  let i=0;

  if (r!==null) {
    s=r.fontStyle;
    o=r.foregroundId;
    i=r.backgroundId;
  }

  return we.set(e,n.languageId,n.tokenType,null,s,o,i);
}pushAttributed(e,n){if (e===null) {
  return this;
}if (!e.includes(" ")) {
  return Z._pushAttributed(this,e,n);
}const r=e.split(/ /g);let s=this;for (const o of r) {
  s=Z._pushAttributed(s,o,n);
}return s}static _pushAttributed(e,n,r){
  const s=r.getMetadataForScope(n);
  const o=e.scopePath.push(n);
  const i=r.themeProvider.themeMatch(o);
  const l=Z.mergeAttributes(e.tokenAttributes,s,i);
  return new Z(e,o,l)
}getScopeNames(){return this.scopePath.getSegments()}getExtensionIfDefined(e){
  const n=[];let r=this;

  while (r&&r!==e) {
    n.push({encodedTokenAttributes:r.tokenAttributes,scopeNames:r.scopePath.getExtensionIfDefined(r.parent?.scopePath??null)});
    r=r.parent;
  }

  return r===e?n.reverse():void 0
}};

var Ut=class ie{constructor(e,n,r,s,o,i,l,a){
  this.parent=e;
  this.ruleId=n;
  this.beginRuleCapturedEOL=o;
  this.endRule=i;
  this.nameScopesList=l;
  this.contentNameScopesList=a;
  this.depth=this.parent?this.parent.depth+1:1;
  this._enterPos=r;
  this._anchorPos=s;
}_stackElementBrand=void 0;static NULL=new ie(null,0,0,0,false,null,null,null);_enterPos;_anchorPos;depth;equals(e){return e===null?false:ie._equals(this,e);}static _equals(e,n){return e===n?true:this._structuralEquals(e,n)?Re.equals(e.contentNameScopesList,n.contentNameScopesList):false;}static _structuralEquals(e,n){do{
  if (e===n||!e&&!n) {
    return true;
  }if (!e||!n||e.depth!==n.depth||e.ruleId!==n.ruleId||e.endRule!==n.endRule) {
    return false;
  }
  e=e.parent;
  n=n.parent;
}while(true)}clone(){return this}static _reset(e){
  while (e) {
    e._enterPos=-1;
    e._anchorPos=-1;
    e=e.parent;
  }
}reset(){ie._reset(this)}pop(){return this.parent}safePop(){return this.parent?this.parent:this}push(e,n,r,s,o,i,l){return new ie(this,e,n,r,s,o,i,l)}getEnterPos(){return this._enterPos}getAnchorPos(){return this._anchorPos}getRule(e){return e.getRule(this.ruleId)}toString(){
  const e=[];
  this._writeString(e,0);
  return `[${e.join(",")}]`;
}_writeString(e,n){
  if (this.parent) {
    (n = this.parent._writeString(e,n));
  }

  e[n++]=`(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`;
  return n;
}withContentNameScopesList(e){return this.contentNameScopesList===e?this:this.parent.push(this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,this.endRule,this.nameScopesList,e)}withEndRule(e){return this.endRule===e?this:new ie(this.parent,this.ruleId,this._enterPos,this._anchorPos,this.beginRuleCapturedEOL,e,this.nameScopesList,this.contentNameScopesList)}hasSameRuleAs(e){
  let n=this;

  while (n&&n._enterPos===e._enterPos) {if (n.ruleId===e.ruleId) {
    return true;
  }n=n.parent}

  return false;
}toStateStackFrame(){return{ruleId:this.ruleId,beginRuleCapturedEOL:this.beginRuleCapturedEOL,endRule:this.endRule,nameScopesList:this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList??null)??[],contentNameScopesList:this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList)??[]}}static pushFrame(e,n){const r=Re.fromExtension(e?.nameScopesList??null,n.nameScopesList);return new ie(e,n.ruleId,n.enterPos??-1,n.anchorPos??-1,n.beginRuleCapturedEOL,n.endRule,r,Re.fromExtension(r,n.contentNameScopesList))}};

const ji=class{balancedBracketScopes;unbalancedBracketScopes;allowAny=false;constructor(t,e){
  this.balancedBracketScopes=t.flatMap(n => n==="*"?(this.allowAny=true,[]):Ye(n,tt).map(r => r.matcher));

  this.unbalancedBracketScopes=e.flatMap(n => Ye(n,tt).map(r => r.matcher));
}get matchesAlways(){return this.allowAny&&this.unbalancedBracketScopes.length===0}get matchesNever(){return this.balancedBracketScopes.length===0&&!this.allowAny}match(t){for (const e of this.unbalancedBracketScopes) {
  if (e(t)) {
    return false;
  }
}for (const e of this.balancedBracketScopes) {
  if (e(t)) {
    return true;
  }
}return this.allowAny}};

var Ui=class{constructor(t,e,n,r){
  this.balancedBracketSelectors=r;
  this._emitBinaryTokens=t;
  this._tokenTypeOverrides=n;
  this._lineText=null;
  this._tokens=[];
  this._binaryTokens=[];
  this._lastTokenEndIndex=0;
}_emitBinaryTokens;_lineText;_tokens;_binaryTokens;_lastTokenEndIndex;_tokenTypeOverrides;produce(t,e){this.produceFromScopes(t.contentNameScopesList,e)}produceFromScopes(t,e){
  if (this._lastTokenEndIndex>=e) {
    return;
  }if(this._emitBinaryTokens){
  let r=t?.tokenAttributes??0;
  let s=false;

  if (this.balancedBracketSelectors?.matchesAlways) {
    (s = true);
  }

  if (this._tokenTypeOverrides.length>0||this.balancedBracketSelectors&&!this.balancedBracketSelectors.matchesAlways&&!this.balancedBracketSelectors.matchesNever) {
    const o=t?.getScopeNames()??[];for (const i of this._tokenTypeOverrides) {
      if (i.matcher(o)) {
        (r = we.set(r,0,i.type,null,-1,0,0));
      }
    }

    if (this.balancedBracketSelectors) {
      (s = this.balancedBracketSelectors.match(o));
    }
  }

  if (s) {
    (r = we.set(r,0,8,s,-1,0,0));
  }

  if (this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-1]===r)
    {this._lastTokenEndIndex=e;return}

  this._binaryTokens.push(this._lastTokenEndIndex);
  this._binaryTokens.push(r);
  this._lastTokenEndIndex=e;
  return
}const n=t?.getScopeNames()??[];
  this._tokens.push({startIndex:this._lastTokenEndIndex,endIndex:e,scopes:n});
  this._lastTokenEndIndex=e;
}getResult(t,e){
  if (this._tokens.length>0&&this._tokens[this._tokens.length-1].startIndex===e-1) {
    this._tokens.pop();
  }

  if (this._tokens.length===0) {
    this._lastTokenEndIndex=-1;
    this.produce(t,e);
    this._tokens[this._tokens.length-1].startIndex=0;
  }

  return this._tokens;
}getBinaryResult(t,e){
  if (this._binaryTokens.length>0&&this._binaryTokens[this._binaryTokens.length-2]===e-1) {
    this._binaryTokens.pop();
    this._binaryTokens.pop();
  }

  if (this._binaryTokens.length===0) {
    this._lastTokenEndIndex=-1;
    this.produce(t,e);
    this._binaryTokens[this._binaryTokens.length-2]=0;
  }

  const n=new Uint32Array(this._binaryTokens.length);for (let r=0,s=this._binaryTokens.length; r<s; r++) {
      n[r]=this._binaryTokens[r];
    }return n
}};

const Wi=class{constructor(t,e){
  this._onigLib=e;
  this._theme=t;
}_grammars=new Map;_rawGrammars=new Map;_injectionGrammars=new Map;_theme;dispose(){for (const t of this._grammars.values()) {
  t.dispose()
}}setTheme(t){this._theme=t}getColorMap(){return this._theme.getColorMap()}addGrammar(t,e){
  this._rawGrammars.set(t.scopeName,t);

  if (e) {
    this._injectionGrammars.set(t.scopeName,e);
  }
}lookup(t){return this._rawGrammars.get(t)}injections(t){return this._injectionGrammars.get(t)}getDefaults(){return this._theme.getDefaults()}themeMatch(t){return this._theme.match(t)}grammarForScopeName(t,e,n,r,s){if(!this._grammars.has(t)){let o=this._rawGrammars.get(t);if (!o) {
  return null;
}this._grammars.set(t,Gi(t,o,e,n,r,s,this,this._onigLib))}return this._grammars.get(t)}};

const zi=class{_options;_syncRegistry;_ensureGrammarCache;constructor(e){
  this._options=e;
  this._syncRegistry=new Wi(Qe.createFromRawTheme(e.theme,e.colorMap),e.onigLib);
  this._ensureGrammarCache=new Map;
}dispose(){this._syncRegistry.dispose()}setTheme(e,n){this._syncRegistry.setTheme(Qe.createFromRawTheme(e,n))}getColorMap(){return this._syncRegistry.getColorMap()}loadGrammarWithEmbeddedLanguages(e,n,r){return this.loadGrammarWithConfiguration(e,n,{embeddedLanguages:r})}loadGrammarWithConfiguration(e,n,r){return this._loadGrammar(e,n,r.embeddedLanguages,r.tokenTypes,new ji(r.balancedBracketSelectors||[],r.unbalancedBracketSelectors||[]))}loadGrammar(e){return this._loadGrammar(e,0,null,null,null)}_loadGrammar(e,n,r,s,o){
  const i=new wi(this._syncRegistry,e);

  while (i.Q.length>0) {
    i.Q.map(l => this._loadSingleGrammar(l.scopeName));

    i.processQueue();
  }

  return this._grammarForScopeName(e,n,r,s,o)
}_loadSingleGrammar(e){
  if (!this._ensureGrammarCache.has(e)) {
    this._doLoadSingleGrammar(e);
    this._ensureGrammarCache.set(e,true);
  }
}_doLoadSingleGrammar(e){const n=this._options.loadGrammar(e);if(n){const r=typeof this._options.getInjections=="function"?this._options.getInjections(e):void 0;this._syncRegistry.addGrammar(n,r)}}addGrammar(e,n=[],r=0,s=null){
  this._syncRegistry.addGrammar(e,n);
  return this._grammarForScopeName(e.scopeName,r,s);
}_grammarForScopeName(e,n=0,r=null,s=null,o=null){return this._syncRegistry.grammarForScopeName(e,n,r,s,o)}};

const Wt=Ut.NULL;
const qi=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];class Ge{constructor(e,n,r){
  this.normal=n;
  this.property=e;

  if (r) {
    (this.space = r);
  }
}}Ge.prototype.normal={};Ge.prototype.property={};Ge.prototype.space=void 0;function Kr(t,e){
  const n={};
  const r={};
  for (const s of t) {
    Object.assign(n,s.property);
    Object.assign(r,s.normal);
  }return new Ge(n,r,e)
}function zt(t){return t.toLowerCase()}class W{constructor(e,n){
  this.attribute=n;
  this.property=e;
}}W.prototype.attribute="";W.prototype.booleanish=false;W.prototype.boolean=false;W.prototype.commaOrSpaceSeparated=false;W.prototype.commaSeparated=false;W.prototype.defined=false;W.prototype.mustUseProperty=false;W.prototype.number=false;W.prototype.overloadedBoolean=false;W.prototype.property="";W.prototype.spaceSeparated=false;W.prototype.space=void 0;let Hi=0;
const x=he();
const T=he();
const qt=he();
const w=he();
const N=he();
const ye=he();
const z=he();
function he(){return 2**++Hi}const Ht=Object.freeze({__proto__:null,boolean:x,booleanish:T,commaOrSpaceSeparated:z,commaSeparated:ye,number:w,overloadedBoolean:qt,spaceSeparated:N});const vt=Object.keys(Ht);class rn extends W{constructor(e,n,r,s){
  let o=-1;
  super(e,n);
  Un(this,"space",s);

  if (typeof r=="number") {
    while (++o<vt.length)
      {const i=vt[o];Un(this,vt[o],(r&Ht[i])===Ht[i])}
  }
}}rn.prototype.defined=true;function Un(t,e,n){
  if (n) {
    (t[e] = n);
  }
}function ke(t){
  const e={};
  const n={};
  for(const[r,s]of Object.entries(t.properties)){
    const o=new rn(r,t.transform(t.attributes||{},r),s,t.space);

    if (t.mustUseProperty&&t.mustUseProperty.includes(r)) {
      (o.mustUseProperty = true);
    }

    e[r]=o;
    n[zt(r)]=r;
    n[zt(o.attribute)]=r;
  }return new Ge(e,n,t.space)
}const Zr=ke({properties:{ariaActiveDescendant:null,ariaAtomic:T,ariaAutoComplete:null,ariaBusy:T,ariaChecked:T,ariaColCount:w,ariaColIndex:w,ariaColSpan:w,ariaControls:N,ariaCurrent:null,ariaDescribedBy:N,ariaDetails:null,ariaDisabled:T,ariaDropEffect:N,ariaErrorMessage:null,ariaExpanded:T,ariaFlowTo:N,ariaGrabbed:T,ariaHasPopup:null,ariaHidden:T,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:N,ariaLevel:w,ariaLive:null,ariaModal:T,ariaMultiLine:T,ariaMultiSelectable:T,ariaOrientation:null,ariaOwns:N,ariaPlaceholder:null,ariaPosInSet:w,ariaPressed:T,ariaReadOnly:T,ariaRelevant:null,ariaRequired:T,ariaRoleDescription:N,ariaRowCount:w,ariaRowIndex:w,ariaRowSpan:w,ariaSelected:T,ariaSetSize:w,ariaSort:null,ariaValueMax:w,ariaValueMin:w,ariaValueNow:w,ariaValueText:null,role:null},transform(t,e){return e==="role"?e:`aria-${e.slice(4).toLowerCase()}`;}});function Qr(t,e){return e in t?t[e]:e}function Yr(t,e){return Qr(t,e.toLowerCase())}
const Vi=ke({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ye,acceptCharset:N,accessKey:N,action:null,allow:null,allowFullScreen:x,allowPaymentRequest:x,allowUserMedia:x,alt:null,as:null,async:x,autoCapitalize:null,autoComplete:N,autoFocus:x,autoPlay:x,blocking:N,capture:null,charSet:null,checked:x,cite:null,className:N,cols:w,colSpan:null,content:null,contentEditable:T,controls:x,controlsList:N,coords:w|ye,crossOrigin:null,data:null,dateTime:null,decoding:null,default:x,defer:x,dir:null,dirName:null,disabled:x,download:qt,draggable:T,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:x,formTarget:null,headers:N,height:w,hidden:qt,high:w,href:null,hrefLang:null,htmlFor:N,httpEquiv:N,id:null,imageSizes:null,imageSrcSet:null,inert:x,inputMode:null,integrity:null,is:null,isMap:x,itemId:null,itemProp:N,itemRef:N,itemScope:x,itemType:N,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:x,low:w,manifest:null,max:null,maxLength:w,media:null,method:null,min:null,minLength:w,multiple:x,muted:x,name:null,nonce:null,noModule:x,noValidate:x,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:x,optimum:w,pattern:null,ping:N,placeholder:null,playsInline:x,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:x,referrerPolicy:null,rel:N,required:x,reversed:x,rows:w,rowSpan:w,sandbox:N,scope:null,scoped:x,seamless:x,selected:x,shadowRootClonable:x,shadowRootDelegatesFocus:x,shadowRootMode:null,shape:null,size:w,sizes:null,slot:null,span:w,spellCheck:T,src:null,srcDoc:null,srcLang:null,srcSet:null,start:w,step:null,style:null,tabIndex:w,target:null,title:null,translate:null,type:null,typeMustMatch:x,useMap:null,value:T,width:w,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:N,axis:null,background:null,bgColor:null,border:w,borderColor:null,bottomMargin:w,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:x,declare:x,event:null,face:null,frame:null,frameBorder:null,hSpace:w,leftMargin:w,link:null,longDesc:null,lowSrc:null,marginHeight:w,marginWidth:w,noResize:x,noHref:x,noShade:x,noWrap:x,object:null,profile:null,prompt:null,rev:null,rightMargin:w,rules:null,scheme:null,scrolling:T,standby:null,summary:null,text:null,topMargin:w,valueType:null,version:null,vAlign:null,vLink:null,vSpace:w,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:x,disableRemotePlayback:x,prefix:null,property:null,results:w,security:null,unselectable:null},space:"html",transform:Yr});
const Xi=ke({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:z,accentHeight:w,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:w,amplitude:w,arabicForm:null,ascent:w,attributeName:null,attributeType:null,azimuth:w,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:w,by:null,calcMode:null,capHeight:w,className:N,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:w,diffuseConstant:w,direction:null,display:null,dur:null,divisor:w,dominantBaseline:null,download:x,dx:null,dy:null,edgeMode:null,editable:null,elevation:w,enableBackground:null,end:null,event:null,exponent:w,externalResourcesRequired:null,fill:null,fillOpacity:w,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ye,g2:ye,glyphName:ye,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:w,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:w,horizOriginX:w,horizOriginY:w,id:null,ideographic:w,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:w,k:w,k1:w,k2:w,k3:w,k4:w,kernelMatrix:z,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:w,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:w,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:w,overlineThickness:w,paintOrder:null,panose1:null,path:null,pathLength:w,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:N,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:w,pointsAtY:w,pointsAtZ:w,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:z,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:z,rev:z,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:z,requiredFeatures:z,requiredFonts:z,requiredFormats:z,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:w,specularExponent:w,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:w,strikethroughThickness:w,string:null,stroke:null,strokeDashArray:z,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:w,strokeOpacity:w,strokeWidth:null,style:null,surfaceScale:w,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:z,tabIndex:w,tableValues:null,target:null,targetX:w,targetY:w,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:z,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:w,underlineThickness:w,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:w,values:null,vAlphabetic:w,vMathematical:w,vectorEffect:null,vHanging:w,vIdeographic:w,version:null,vertAdvY:w,vertOriginX:w,vertOriginY:w,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:w,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Qr});
const Jr=ke({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,e){return `xlink:${e.slice(5).toLowerCase()}`;}});
const es=ke({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Yr});
const ts=ke({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,e){return `xml:${e.slice(3).toLowerCase()}`;}});
const Ki=/[A-Z]/g;
const Wn=/-[a-z]/g;
const Zi=/^data[-\w.:]+$/i;
function Qi(t,e){
  const n=zt(e);
  let r=e;
  let s=W;
  if (n in t.normal) {
    return t.property[t.normal[n]];
  }if(n.length>4&&n.slice(0,4)==="data"&&Zi.test(e)){if(e.charAt(4)==="-"){const o=e.slice(5).replace(Wn,Ji);r=`data${o.charAt(0).toUpperCase()}${o.slice(1)}`}else{const o=e.slice(4);if(!Wn.test(o)){
  let i=o.replace(Ki,Yi);

  if (i.charAt(0)!=="-") {
    (i = `-${i}`);
  }

  e=`data${i}`;
}}s=rn}return new s(r,e)
}function Yi(t){return `-${t.toLowerCase()}`;}function Ji(t){return t.charAt(1).toUpperCase()}
const ea=Kr([Zr,Vi,Jr,es,ts],"html");
const ns=Kr([Zr,Xi,Jr,es,ts],"svg");
const zn={}.hasOwnProperty;
function ta(t,e){
  const n=e||{};function r(s,...o){let i=r.invalid;const l=r.handlers;if(s&&zn.call(s,t)){const a=String(s[t]);i=zn.call(l,a)?l[a]:r.unknown}if (i) {
    return i.call(this,s,...o)
  }}
  r.handlers=n.handlers||{};
  r.invalid=n.invalid;
  r.unknown=n.unknown;
  return r;
}
const na=/["&'<>`]/g;
const ra=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
const sa=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
const oa=/[|\\{}()[\]^$+*?.]/g;
const qn=new WeakMap;
function ia(t,e){
  t=t.replace(e.subset?aa(e.subset):na,r);

  if (e.subset||e.escapeOnly) {
    return t;
  }

  return t.replace(ra,n).replace(sa,r);function n(s,o,i){return e.format((s.charCodeAt(0)-55296)*1024+s.charCodeAt(1)-56320+65536,i.charCodeAt(o+2),e)}function r(s,o,i){return e.format(s.charCodeAt(0),i.charCodeAt(o+1),e)}
}function aa(t){
  let e=qn.get(t);

  if (!e) {
    e=la(t);
    qn.set(t,e);
  }

  return e;
}function la(t){
  const e=[];let n=-1;

  while (++n<t.length) {
    e.push(t[n].replace(oa,"\\$&"));
  }

  return new RegExp(`(?:${e.join("|")})`,"g");
}const ca=/[\dA-Fa-f]/;function ua(t,e,n){const r=`&#x${t.toString(16).toUpperCase()}`;return n&&e&&!ca.test(String.fromCharCode(e))?r:`${r};`;}const ha=/\d/;function da(t,e,n){const r=`&#${String(t)}`;return n&&e&&!ha.test(String.fromCharCode(e))?r:`${r};`;}
const fa=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"];
const xt={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"};
const pa=["cent","copy","divide","gt","lt","not","para","times"];
const rs={}.hasOwnProperty;
const Vt={};
let ze;for (ze in xt) {
  if (rs.call(xt,ze)) {
    (Vt[xt[ze]] = ze);
  }
}const ga=/[^\dA-Za-z]/;function ma(t,e,n,r){const s=String.fromCharCode(t);if(rs.call(Vt,s)){
  const o=Vt[s];
  const i=`&${o}`;
  return n&&fa.includes(o)&&!pa.includes(o)&&(!r||e&&e!==61&&ga.test(String.fromCharCode(e)))?i:`${i};`;
}return""}function ya(t,e,n){
  let r=ua(t,e,n.omitOptionalSemicolons);
  let s;

  if ((n.useNamedReferences || n.useShortestReferences)) {
    (s = ma(t,e,n.omitOptionalSemicolons,n.attribute));
  }

  if ((n.useShortestReferences||!s)&&n.useShortestReferences)
    {
      const o=da(t,e,n.omitOptionalSemicolons);

      if (o.length<r.length) {
        (r = o);
      }
    }

  return s&&(!n.useShortestReferences||s.length<r.length)?s:r
}function be(t,e){return ia(t,Object.assign({format:ya},e))}
const ba=/^>|^->|<!--|-->|--!>|<!-$/g;
const wa=[">"];
const Ca=["<",">"];
function _a(t,e,n,r){return r.settings.bogusComments?`<?${be(t.value,Object.assign({},r.settings.characterReferences,{subset:wa}))}>`:`<!--${t.value.replace(ba,s)}-->`;function s(o){return be(o,Object.assign({},r.settings.characterReferences,{subset:Ca}))}}function Sa(t,e,n,r){return `<!${r.settings.upperDoctype?"DOCTYPE":"doctype"}${r.settings.tightDoctype?"":" "}html>`;}function Hn(t,e){
  const n=String(t);if (typeof e!="string") {
      throw new TypeError("Expected character");
    }
  let r=0;
  let s=n.indexOf(e);

  while (s!==-1) {
    r++;
    s=n.indexOf(e,s+e.length);
  }

  return r
}function ka(t,e){const n=e||{};return (t[t.length-1]===""?[...t,""]:t).join(`${n.padRight?" ":""},${n.padLeft===false?"":" "}`).trim();}function va(t){return t.join(" ").trim()}const xa=/[ \t\n\f\r]/g;function sn(t){return typeof t=="object"?t.type==="text"?Vn(t.value):false:Vn(t);}function Vn(t){return t.replace(xa,"")===""}
const D=os(1);
const ss=os(-1);
const Ea=[];
function os(t){return e;function e(n,r,s){
  const o=n?n.children:Ea;
  let i=(r||0)+t;
  let l=o[i];
  if (!s) {
    while (l&&sn(l)) {
      i+=t;
      l=o[i];
    }
  }return l
}}const Ia={}.hasOwnProperty;function is(t){return e;function e(n,r,s){return Ia.call(t,n.tagName)&&t[n.tagName](n,r,s)}}const on=is({body:Ra,caption:Et,colgroup:Et,dd:Pa,dt:$a,head:Et,html:Aa,li:Na,optgroup:Ta,option:Ma,p:La,rp:Xn,rt:Xn,tbody:Da,td:Kn,tfoot:Ga,th:Kn,thead:Oa,tr:Ba});function Et(t,e,n){const r=D(n,e,true);return!r||r.type!=="comment"&&!(r.type==="text"&&sn(r.value.charAt(0)))}function Aa(t,e,n){const r=D(n,e);return!r||r.type!=="comment"}function Ra(t,e,n){const r=D(n,e);return!r||r.type!=="comment"}function La(t,e,n){const r=D(n,e);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!n||!(n.type==="element"&&(n.tagName==="a"||n.tagName==="audio"||n.tagName==="del"||n.tagName==="ins"||n.tagName==="map"||n.tagName==="noscript"||n.tagName==="video"))}function Na(t,e,n){const r=D(n,e);return!r||r.type==="element"&&r.tagName==="li"}function $a(t,e,n){const r=D(n,e);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function Pa(t,e,n){const r=D(n,e);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function Xn(t,e,n){const r=D(n,e);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function Ta(t,e,n){const r=D(n,e);return!r||r.type==="element"&&r.tagName==="optgroup"}function Ma(t,e,n){const r=D(n,e);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function Oa(t,e,n){const r=D(n,e);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function Da(t,e,n){const r=D(n,e);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function Ga(t,e,n){return!D(n,e)}function Ba(t,e,n){const r=D(n,e);return!r||r.type==="element"&&r.tagName==="tr"}function Kn(t,e,n){const r=D(n,e);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const Fa=is({body:Wa,colgroup:za,head:Ua,html:ja,tbody:qa});function ja(t){const e=D(t,-1);return!e||e.type!=="comment"}function Ua(t){const e=new Set;for (const r of t.children) {
  if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if (e.has(r.tagName)) {
    return false;
  }e.add(r.tagName)}
}const n=t.children[0];return!n||n.type==="element"}function Wa(t){const e=D(t,-1,true);return!e||e.type!=="comment"&&!(e.type==="text"&&sn(e.value.charAt(0)))&&!(e.type==="element"&&(e.tagName==="meta"||e.tagName==="link"||e.tagName==="script"||e.tagName==="style"||e.tagName==="template"))}function za(t,e,n){
  const r=ss(n,e);
  const s=D(t,-1,true);
  return n&&r&&r.type==="element"&&r.tagName==="colgroup"&&on(r,n.children.indexOf(r),n)?false:!!(s&&s.type==="element"&&s.tagName==="col");
}function qa(t,e,n){
  const r=ss(n,e);
  const s=D(t,-1);
  return n&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&on(r,n.children.indexOf(r),n)?false:!!(s&&s.type==="element"&&s.tagName==="tr");
}const qe={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function Ha(t,e,n,r){
  const s=r.schema;
  const o=s.space==="svg"?false:r.settings.omitOptionalTags;
  let i=s.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(t.tagName.toLowerCase());const l=[];let a;

  if (s.space==="html"&&t.tagName==="svg") {
    (r.schema = ns);
  }

  const c=Va(r,t.properties);
  const u=r.all(s.space==="html"&&t.tagName==="template"?t.content:t);
  r.schema=s;

  if (u) {
    (i = false);
  }

  if ((c||!o || !Fa(t,e,n))) {
    l.push("<",t.tagName,c?` ${c}`:"");
    i&&(s.space==="svg"||r.settings.closeSelfClosing)&&(a=c.charAt(c.length-1),(!r.settings.tightSelfClosing||a==="/"||a&&a!=='"'&&a!=="'")&&l.push(" "),l.push("/"));
    l.push(">");
  }

  l.push(u);

  if (!i&&(!o||!on(t,e,n))) {
    l.push(`</${t.tagName}>`);
  }

  return l.join("");
}function Va(t,e){
  const n=[];
  let r=-1;
  let s;
  if(e){for (s in e) {
    if(e[s]!==null&&e[s]!==void 0){
      const o=Xa(t,s,e[s]);

      if (o) {
        n.push(o);
      }
    }
  }}

  while (++r<n.length) {
    const o=t.settings.tightAttributes?n[r].charAt(n[r].length-1):void 0;

    if (r!==n.length-1&&o!=='"'&&o!=="'") {
      (n[r] += " ");
    }
  }

  return n.join("")
}function Xa(t,e,n){
  const r=Qi(t.schema,e);
  const s=t.settings.allowParseErrors&&t.schema.space==="html"?0:1;
  const o=t.settings.allowDangerousCharacters?0:1;
  let i=t.quote;
  let l;

  if (r.overloadedBoolean&&(n===r.attribute||n==="")) {
    n=true;
  } else if ((r.boolean||r.overloadedBoolean)&&(typeof n!="string"||n===r.attribute||n==="")) {
    (n = !!n);
  }

  if (n==null||n===false||typeof n=="number"&&Number.isNaN(n)) {
    return"";
  }

  const a=be(r.attribute,Object.assign({},t.settings.characterReferences,{subset:qe.name[s][o]}));return n===true||(n=Array.isArray(n)?(r.commaSeparated?ka:va)(n,{padLeft:!t.settings.tightCommaSeparatedLists}):String(n),t.settings.collapseEmptyAttributes&&!n)?a:(t.settings.preferUnquoted&&(l=be(n,Object.assign({},t.settings.characterReferences,{attribute:true,subset:qe.unquoted[s][o]}))),l!==n&&(t.settings.quoteSmart&&Hn(n,i)>Hn(n,t.alternative)&&(i=t.alternative),l=i+be(n,Object.assign({},t.settings.characterReferences,{subset:(i==="'"?qe.single:qe.double)[s][o],attribute:true}))+i),a+(l&&`=${l}`));
}const Ka=["<","&"];function as(t,e,n,r){return n&&n.type==="element"&&(n.tagName==="script"||n.tagName==="style")?t.value:be(t.value,Object.assign({},r.settings.characterReferences,{subset:Ka}))}function Za(t,e,n,r){return r.settings.allowDangerousHtml?t.value:as(t,e,n,r)}function Qa(t,e,n,r){return r.all(t)}const Ya=ta("type",{invalid:Ja,unknown:el,handlers:{comment:_a,doctype:Sa,element:Ha,raw:Za,root:Qa,text:as}});function Ja(t){throw new Error(`Expected node, not \`${t}\``)}function el(t){const e=t;throw new Error(`Cannot compile unknown node \`${e.type}\``)}
const tl={};
const nl={};
const rl=[];
function sl(t,e){
  const n=e||tl;
  const r=n.quote||'"';
  const s=r==='"'?"'":'"';
  if (r!=='"'&&r!=="'") {
    throw new Error(`Invalid quote \`${r}\`, expected \`'\` or \`"\``);
  }return {one:ol,all:il,settings:{omitOptionalTags:n.omitOptionalTags||false,allowParseErrors:n.allowParseErrors||false,allowDangerousCharacters:n.allowDangerousCharacters||false,quoteSmart:n.quoteSmart||false,preferUnquoted:n.preferUnquoted||false,tightAttributes:n.tightAttributes||false,upperDoctype:n.upperDoctype||false,tightDoctype:n.tightDoctype||false,bogusComments:n.bogusComments||false,tightCommaSeparatedLists:n.tightCommaSeparatedLists||false,tightSelfClosing:n.tightSelfClosing||false,collapseEmptyAttributes:n.collapseEmptyAttributes||false,allowDangerousHtml:n.allowDangerousHtml||false,voids:n.voids||qi,characterReferences:n.characterReferences||nl,closeSelfClosing:n.closeSelfClosing||false,closeEmptyElements:n.closeEmptyElements||false},schema:n.space==="svg"?ns:ea,quote:r,alternative:s}.one(Array.isArray(t)?{type:"root",children:t}:t,void 0,void 0);
}function ol(t,e,n){return Ya(t,e,n,this)}function il(t){
  const e=[];
  const n=t&&t.children||rl;
  let r=-1;

  while (++r<n.length) {
      e[r]=this.one(n[r],r,t);
    }

  return e.join("")
}function nt(t,e){
  const n=typeof t=="string"?{}:{...t.colorReplacements};
  const r=typeof t=="string"?t:t.name;
  for (const[s,o] of Object.entries(e?.colorReplacements||{})) {
    if (typeof o=="string") {
      n[s]=o;
    } else if (s===r) {
      Object.assign(n,o);
    }
  }return n
}function se(t,e){return t&&(e?.[t?.toLowerCase()]||t)}function al(t){return Array.isArray(t)?t:[t]}async function ls(t){return Promise.resolve(typeof t=="function"?t():t).then(e => e.default||e);}function an(t){return!t||["plaintext","txt","text","plain"].includes(t)}function ll(t){return t==="ansi"||an(t)}function ln(t){return t==="none"}function cl(t){return ln(t)}function cs(t,e){
  if (!e) {
    return t;
  }
  t.properties||={};
  t.properties.class||=[];

  if (typeof t.properties.class=="string") {
    (t.properties.class = t.properties.class.split(/\s+/g));
  }

  if (!Array.isArray(t.properties.class)) {
    (t.properties.class = []);
  }

  const n=Array.isArray(e)?e:e.split(/\s+/g);for (const r of n) {
    if (r&&!t.properties.class.includes(r)) {
      t.properties.class.push(r);
    }
  }return t
}function ut(t,e=false){if (t.length===0) {
  return[["",0]];
}const n=t.split(/(\r?\n)/g);let r=0;const s=[];for(let o=0;o<n.length;o+=2){
  const i=e?n[o]+(n[o+1]||""):n[o];
  s.push([i,r]);
  r+=n[o].length;
  r+=n[o+1]?.length||0;
}return s}function ul(t){const e=ut(t,true).map(([s]) => s);function n(s){
  if (s===t.length) {
    return{line:e.length-1,character:e[e.length-1].length};
  }
  let o=s;
  let i=0;
  for(const l of e){
    if (o<l.length) {
      break;
    }
    o-=l.length;
    i++;
  }return{line:i,character:o}
}function r(s,o){
  let i=0;for (let l=0; l<s; l++) {
    i+=e[l].length;
  }
  i+=o;
  return i;
}return{lines:e,indexToPos:n,posToIndex:r}}
const cn="light-dark()";
const hl=["color","background-color"];
function dl(t,e){
  let n=0;const r=[];for (const s of e) {
    if (s>n) {
      r.push({...t,content:t.content.slice(n,s),offset:t.offset+n});
    }

    n=s;
  }

  if (n<t.content.length) {
    r.push({...t,content:t.content.slice(n),offset:t.offset+n});
  }

  return r;
}function fl(t,e){const n=Array.from(e instanceof Set?e:new Set(e)).sort((r, s) => r-s);return n.length?t.map(r => r.flatMap(s=>{const o=n.filter(i => s.offset<i&&i<s.offset+s.content.length).map(i => i-s.offset).sort((i, l) => i-l);return o.length?dl(s,o):s})):t;}function pl(t,e,n,r,s="css-vars"){
  const o={content:t.content,explanation:t.explanation,offset:t.offset};

  const i=e.map(u => rt(t.variants[u]));

  const l=new Set(i.flatMap(u => Object.keys(u)));

  const a={};
  const c=(u,h)=>{const d=h==="color"?"":h==="background-color"?"-bg":`-${h}`;return n+e[u]+(h==="color"?"":d)};

  i.forEach((u,h)=>{for(const d of l){const f=u[d]||"inherit";if (h===0&&r&&hl.includes(d)) {
    if (r===cn&&i.length>1) {
      const p=e.findIndex(y => y==="light");

      const b=e.findIndex(y => y==="dark");

      if (p===-1||b===-1) {
        throw new G('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
      }
      const C=i[p][d]||"inherit";
      const g=i[b][d]||"inherit";
      a[d]=`light-dark(${C}, ${g})`;

      if (s==="css-vars") {
        (a[c(h,d)] = f);
      }
    } else {
      a[d]=f;
    }
  } else {
    if (s==="css-vars") {
      (a[c(h,d)] = f);
    }
  }}});

  o.htmlStyle=a;
  return o;
}function rt(t){
  const e={};

  if (t.color) {
    (e.color = t.color);
  }

  if (t.bgColor) {
    (e["background-color"] = t.bgColor);
  }

  if (t.fontStyle) {
    if (t.fontStyle&j.Italic) {
      (e["font-style"] = "italic");
    }

    if (t.fontStyle&j.Bold) {
      (e["font-weight"] = "bold");
    }

    const n=[];

    if (t.fontStyle&j.Underline) {
      n.push("underline");
    }

    if (t.fontStyle&j.Strikethrough) {
      n.push("line-through");
    }

    if (n.length) {
      (e["text-decoration"] = n.join(" "));
    }
  }

  return e
}function Xt(t){return typeof t=="string"?t:Object.entries(t).map(([e,n]) => `${e}:${n}`).join(";");}const us=new WeakMap;function ht(t,e){us.set(t,e)}function Te(t){return us.get(t)}class ve{_stacks={};lang;get themes(){return Object.keys(this._stacks)}get theme(){return this.themes[0]}get _stack(){return this._stacks[this.theme]}static initial(e,n){return new ve(Object.fromEntries(al(n).map(r => [r,Wt])),e);}constructor(...e){if(e.length===2){
  const[n,r]=e;
  this.lang=r;
  this._stacks=n;
}else{
  const[n,r,s]=e;
  this.lang=r;
  this._stacks={[s]:n};
}}getInternalStack(e=this.theme){return this._stacks[e]}getScopes(e=this.theme){return gl(this._stacks[e])}toJSON(){return{lang:this.lang,theme:this.theme,themes:this.themes,scopes:this.getScopes()}}}function gl(t){
  const e=[];
  const n=new Set;
  function r(s){
    if (n.has(s)) {
      return;
    }n.add(s);const o=s?.nameScopesList?.scopeName;

    if (o) {
      e.push(o);
    }

    if (s.parent) {
      r(s.parent);
    }
  }
  r(t);
  return e;
}function ml(t,e){if (!(t instanceof ve)) {
  throw new G("Invalid grammar state");
}return t.getInternalStack(e)}function yl(){const t=new WeakMap;function e(n){if(!t.has(n.meta)){
  let r=i => {if(typeof i=="number"){if (i<0||i>n.source.length) {
    throw new G(`Invalid decoration offset: ${i}. Code length: ${n.source.length}`);
  }return{...s.indexToPos(i),offset:i}}else{
    const l=s.lines[i.line];if (l===void 0) {
        throw new G(`Invalid decoration position ${JSON.stringify(i)}. Lines length: ${s.lines.length}`);
      }let a=i.character;

    if (a<0) {
      (a = l.length+a);
    }

    if (a<0||a>l.length) {
      throw new G(`Invalid decoration position ${JSON.stringify(i)}. Line ${i.line} length: ${l.length}`);
    }

    return{...i,character:a,offset:s.posToIndex(i.line,a)}
  }};
  const s=ul(n.source);

  const o=(n.options.decorations||[]).map(i => ({
    ...i,
    start:r(i.start),
    end:r(i.end)
  }));

  bl(o);
  t.set(n.meta,{decorations:o,converter:s,source:n.source});
}return t.get(n.meta)}return {name:"shiki:decorations",tokens(n){if (!this.options.decorations?.length) {
  return;
}const s=e(this).decorations.flatMap(i => [i.start.offset,i.end.offset]);return fl(n,s)},code(n){
  if (!this.options.decorations?.length) {
    return;
  }
  const r=e(this);

  const s=Array.from(n.children).filter(u => u.type==="element"&&u.tagName==="span");

  if (s.length!==r.converter.lines.length) {
    throw new G(`Number of lines in code element (${s.length}) does not match the number of lines in the source (${r.converter.lines.length}). Failed to apply decorations.`);
  }function o(u,h,d,f){
  const p=s[u];
  let b="";
  let C=-1;
  let g=-1;

  if (h===0) {
    (C = 0);
  }

  if (d===0) {
    (g = 0);
  }

  if (d===Number.POSITIVE_INFINITY) {
    (g = p.children.length);
  }

  if (C===-1||g===-1) {
    for (let m=0; m<p.children.length; m++) {
      b+=hs(p.children[m]);

      if (C===-1&&b.length===h) {
        (C = m+1);
      }

      if (g===-1&&b.length===d) {
        (g = m+1);
      }
    }
  }

  if (C===-1) {
    throw new G(`Failed to find start index for decoration ${JSON.stringify(f.start)}`);
  }if (g===-1) {
        throw new G(`Failed to find end index for decoration ${JSON.stringify(f.end)}`);
      }const y=p.children.slice(C,g);if (!f.alwaysWrap&&y.length===p.children.length) {
        l(p,f,"line");
      } else if (!f.alwaysWrap&&y.length===1&&y[0].type==="element") {
        l(y[0],f,"token");
      } else {
        const m={type:"element",tagName:"span",properties:{},children:y};
        l(m,f,"wrapper");
        p.children.splice(C,y.length,m);
      }
}function i(u,h){s[u]=l(s[u],h,"line")}function l(u,h,d){
  const f=h.properties||{};

  const p=h.transform||(b => b);

  u.tagName=h.tagName||"span";
  u.properties={...u.properties,...f,class:u.properties.class};

  if (h.properties?.class) {
    cs(u,h.properties.class);
  }

  u=p(u,d)||u;
  return u;
}
  const a=[];

  const c=r.decorations.sort((u, h) => h.start.offset-u.start.offset||u.end.offset-h.end.offset);

  for(const u of c){const{start,end}=u;if (start.line===end.line) {
    o(start.line,start.character,end.character,u);
  } else if(start.line<end.line){o(start.line,start.character,Number.POSITIVE_INFINITY,u);for (let f=start.line+1; f<end.line; f++) {
    a.unshift(() => i(f,u));
  }o(end.line,0,end.character,u)}}a.forEach(u => u())
}};}function bl(t){
  t.forEach((n, e) => {
    if (n.start.offset>n.end.offset) {
      throw new G(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
    }for(let r=e+1;r<t.length;r++){
      const s=t[r];
      const o=n.start.offset<=s.start.offset&&s.start.offset<n.end.offset;
      const i=n.start.offset<s.end.offset&&s.end.offset<=n.end.offset;
      const l=s.start.offset<=n.start.offset&&n.start.offset<s.end.offset;
      const a=s.start.offset<n.end.offset&&n.end.offset<=s.end.offset;
      if(o||i||l||a){if (o&&i||l&&a||l&&n.start.offset===n.end.offset||i&&s.start.offset===s.end.offset) {
        continue;
      }throw new G(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(s.start)} intersect.`)}
    }
  });
}function hs(t){return t.type==="text"?t.value:t.type==="element"?t.children.map(hs).join(""):""}const wl=[yl()];function st(t){const e=Cl(t.transformers||[]);return[...e.pre,...e.normal,...e.post,...wl]}function Cl(t){
  const e=[];
  const n=[];
  const r=[];
  for (const s of t) {
    switch(s.enforce){case "pre":
      {
        e.push(s);break;
      }case "post":
      {
        n.push(s);break;
      }default:
      {
        r.push(s)
      }}
  }return{pre:e,post:n,normal:r}
}
const ce=["black","red","green","yellow","blue","magenta","cyan","white","brightBlack","brightRed","brightGreen","brightYellow","brightBlue","brightMagenta","brightCyan","brightWhite"];
const It={1:"bold",2:"dim",3:"italic",4:"underline",7:"reverse",8:"hidden",9:"strikethrough"};
function _l(t,e){const n=t.indexOf("\x1B",e);if(n!==-1&&t[n+1]==="["){const r=t.indexOf("m",n);if (r!==-1) {
  return{sequence:t.substring(n+2,r).split(";"),startPosition:n,position:r+1}
}}return{position:t.length}}function Zn(t){const e=t.shift();if(e==="2"){const n=t.splice(0,3).map(r => Number.parseInt(r));return n.length!==3||n.some(r => Number.isNaN(r))?void 0:{type:"rgb",rgb:n};}else if(e==="5"){const n=t.shift();if (n) {
  return{type:"table",index:Number(n)}
}}}function Sl(t){
  const e=[];

  while (t.length>0) {const n=t.shift();if (!n) {
    continue;
  }const r=Number.parseInt(n);if (!Number.isNaN(r)) {
    if (r===0) {
      e.push({type:"resetAll"});
    } else if (r<=9) {
      if (It[r]) {
        e.push({type:"setDecoration",value:It[r]});
      }
    } else if(r<=29){
      const s=It[r-20];

      if (s) {
        e.push({type:"resetDecoration",value:s});
        s==="dim"&&e.push({type:"resetDecoration",value:"bold"});
      }
    }else if (r<=37) {
      e.push({type:"setForegroundColor",value:{type:"named",name:ce[r-30]}});
    } else if(r===38){
      const s=Zn(t);

      if (s) {
        e.push({type:"setForegroundColor",value:s});
      }
    }else if (r===39) {
      e.push({type:"resetForegroundColor"});
    } else if (r<=47) {
      e.push({type:"setBackgroundColor",value:{type:"named",name:ce[r-40]}});
    } else if (r===48)
      {
        const s=Zn(t);

        if (s) {
          e.push({type:"setBackgroundColor",value:s});
        }
      } else {
      switch (r) {
      case 49:
        e.push({type:"resetBackgroundColor"});
        break;
      case 53:
        e.push({type:"setDecoration",value:"overline"});
        break;
      case 55:
        e.push({type:"resetDecoration",value:"overline"});
        break;
      }
    }
  }}

  return e
}function kl(){
  let t=null;
  let e=null;
  let n=new Set;
  return {parse(r){const s=[];let o=0;do{
    const i=_l(r,o);
    const l=i.sequence?r.substring(o,i.startPosition):r.substring(o);

    if (l.length>0) {
      s.push({value:l,foreground:t,background:e,decorations:new Set(n)});
    }

    if (i.sequence) {const a=Sl(i.sequence);for (const c of a) {
      switch (c.type) {
      case "resetAll":
        t=null;
        e=null;
        n.clear();
        break;
      case "resetForegroundColor":
        t=null;
        break;
      case "resetBackgroundColor":
        e=null;
        break;
      case "resetDecoration":
        n.delete(c.value);
        break;
      }
    }for (const c of a) {
      switch (c.type) {
      case "setForegroundColor":
        t=c.value;
        break;
      case "setBackgroundColor":
        e=c.value;
        break;
      case "setDecoration":
        n.add(c.value);
        break;
      }
    }}

    o=i.position
  }while(o<r.length);return s}};
}const vl={black:"#000000",red:"#bb0000",green:"#00bb00",yellow:"#bbbb00",blue:"#0000bb",magenta:"#ff00ff",cyan:"#00bbbb",white:"#eeeeee",brightBlack:"#555555",brightRed:"#ff5555",brightGreen:"#00ff00",brightYellow:"#ffff55",brightBlue:"#5555ff",brightMagenta:"#ff55ff",brightCyan:"#55ffff",brightWhite:"#ffffff"};function xl(t=vl){function e(l){return t[l]}function n(l){return `#${l.map(a => Math.max(0,Math.min(a,255)).toString(16).padStart(2,"0")).join("")}`;}let r;function s(){if (r) {
  return r;
}r=[];for (let c=0; c<ce.length; c++) {
  r.push(e(ce[c]));
}let l=[0,95,135,175,215,255];for (let c=0; c<6; c++) {
  for (let u=0; u<6; u++) {
    for (let h=0; h<6; h++) {
      r.push(n([l[c],l[u],l[h]]));
    }
  }
}let a=8;for (let c=0; c<24; c++,a+=10) {
  r.push(n([a,a,a]));
}return r}function o(l){return s()[l]}function i(l){switch(l.type){case "named":
  {
    return e(l.name);
  }case "rgb":
  {
    return n(l.rgb);
  }case "table":
  {
    return o(l.index)
  }}}return{value:i}}const El={black:"#000000",red:"#cd3131",green:"#0DBC79",yellow:"#E5E510",blue:"#2472C8",magenta:"#BC3FBC",cyan:"#11A8CD",white:"#E5E5E5",brightBlack:"#666666",brightRed:"#F14C4C",brightGreen:"#23D18B",brightYellow:"#F5F543",brightBlue:"#3B8EEA",brightMagenta:"#D670D6",brightCyan:"#29B8DB",brightWhite:"#FFFFFF"};function Il(t,e,n){
  const r=nt(t,n);
  const s=ut(e);

  const o=Object.fromEntries(ce.map(a=>{
    const c=`terminal.ansi${a[0].toUpperCase()}${a.substring(1)}`;
    const u=t.colors?.[c];
    return[a,u||El[a]]
  }));

  const i=xl(o);
  const l=kl();
  return s.map(a => l.parse(a[0]).map(c=>{
    let u;
    let h;

    if (c.decorations.has("reverse")) {
      u=c.background?i.value(c.background):t.bg;
      h=c.foreground?i.value(c.foreground):t.fg;
    } else {
      u=c.foreground?i.value(c.foreground):t.fg;
      h=c.background?i.value(c.background):void 0;
    }

    u=se(u,r);
    h=se(h,r);

    if (c.decorations.has("dim")) {
      (u = Al(u));
    }

    let d=j.None;

    if (c.decorations.has("bold")) {
      (d |= j.Bold);
    }

    if (c.decorations.has("italic")) {
      (d |= j.Italic);
    }

    if (c.decorations.has("underline")) {
      (d |= j.Underline);
    }

    if (c.decorations.has("strikethrough")) {
      (d |= j.Strikethrough);
    }

    return {content:c.value,offset:a[1],color:u,bgColor:h,fontStyle:d};
  }));
}function Al(t){const e=t.match(/#([0-9a-f]{3,8})/i);if(e){const r=e[1];if(r.length===8){const s=Math.round(Number.parseInt(r.slice(6,8),16)/2).toString(16).padStart(2,"0");return`#${r.slice(0,6)}${s}`}else{if (r.length===6) {
  return`#${r}80`;
}if(r.length===4){
  const s=r[0];
  const o=r[1];
  const i=r[2];
  const l=r[3];
  const a=Math.round(Number.parseInt(`${l}${l}`,16)/2).toString(16).padStart(2,"0");
  return`#${s}${s}${o}${o}${i}${i}${a}`
}else if(r.length===3){
  const s=r[0];
  const o=r[1];
  const i=r[2];
  return`#${s}${s}${o}${o}${i}${i}80`
}}}const n=t.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);return n?`var(${n[1]}-dim)`:t}function un(t,e,n={}){
  const {theme=t.getLoadedThemes()[0]}=n;
  const s=t.resolveLangAlias(n.lang||"text");
  if (an(s)||ln(theme)) {
    return ut(e).map(a => [{content:a[0],offset:a[1]}]);
  }const{theme: theme_1,colorMap}=t.setTheme(theme);if (s==="ansi") {
    return Il(theme_1,e,n);
  }const l=t.getLanguage(n.lang||"text");if(n.grammarState){if (n.grammarState.lang!==l.name) {
    throw new G(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${l.name}"`);
  }if (!n.grammarState.themes.includes(theme_1.name)) {
    throw new G(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${theme_1.name}"`)
  }}return Ll(e,l,theme_1,colorMap,n);
}function Rl(...t){
  if (t.length===2) {
    return Te(t[1]);
  }
  const [e,n,r={}]=t;
  const {lang="text",theme=e.getLoadedThemes()[0]}=r;
  if (an(lang)||ln(theme)) {
    throw new G("Plain language does not have grammar state");
  }if (lang==="ansi") {
    throw new G("ANSI language does not have grammar state");
  }
  const {theme: theme_1,colorMap}=e.setTheme(theme);
  const a=e.getLanguage(lang);
  return new ve(hn(n,a,theme_1,colorMap,r).stateStack,a.name,theme_1.name);
}function Ll(t,e,n,r,s){
  const o=hn(t,e,n,r,s);
  const i=new ve(o.stateStack,e.name,n.name);
  ht(o.tokens,i);
  return o.tokens;
}function hn(t,e,n,r,s){
  const o=nt(n,s);
  const {tokenizeMaxLineLength=0,tokenizeTimeLimit=500}=s;
  const a=ut(t);
  let c=s.grammarState?ml(s.grammarState,n.name)??Wt:s.grammarContextCode!=null?hn(s.grammarContextCode,e,n,r,{...s,grammarState:void 0,grammarContextCode:void 0}).stateStack:Wt;
  let u=[];
  const h=[];for(let d=0,f=a.length;d<f;d++){
  const[p,b]=a[d];if(p===""){
        u=[];
        h.push([]);
        continue
      }if(tokenizeMaxLineLength>0&&p.length>=tokenizeMaxLineLength){
        u=[];
        h.push([{content:p,offset:b,color:"",fontStyle:0}]);
        continue
      }
  let C;
  let g;
  let y;

  if (s.includeExplanation) {
    C=e.tokenizeLine(p,c,tokenizeTimeLimit);
    g=C.tokens;
    y=0;
  }

  const m=e.tokenizeLine2(p,c,tokenizeTimeLimit);
  const _=m.tokens.length/2;
  for(let k=0;k<_;k++){
    const I=m.tokens[2*k];
    const S=k+1<_?m.tokens[2*k+2]:p.length;
    if (I===S) {
      continue;
    }
    const A=m.tokens[2*k+1];
    const E=se(r[we.getForeground(A)],o);
    const R=we.getFontStyle(A);
    const L={content:p.substring(I,S),offset:b+I,color:E,fontStyle:R};
    if(s.includeExplanation){
      const M=[];if (s.includeExplanation!=="scopeName") {
        for(const U of n.settings){let te;switch(typeof U.scope){case "string":
          {
            te=U.scope.split(/,/).map(ft => ft.trim());break;
          }case "object":
          {
            te=U.scope;break;
          }default:
          {
            continue
          }}M.push({settings:U,selectors:te.map(ft => ft.split(/ /))})}
      }L.explanation=[];let $=0;

      while (I+$<S) {
        const U=g[y];
        const te=p.substring(U.startIndex,U.endIndex);
        $+=te.length;
        L.explanation.push({content:te,scopes:s.includeExplanation==="scopeName"?Nl(U.scopes):$l(M,U.scopes)});
        y+=1;
      }
    }u.push(L)
  }
  h.push(u);
  u=[];
  c=m.ruleStack;
}return{tokens:h,stateStack:c}
}function Nl(t){return t.map(e => ({
  scopeName:e
}));}function $l(t,e){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n[r]={scopeName:o,themeMatches:Tl(t,o,e.slice(0,r))}}return n}function Qn(t,e){return t===e||e.substring(0,t.length)===t&&e[t.length]==="."}function Pl(t,e,n){
  if (!Qn(t[t.length-1],e)) {
    return false;
  }
  let r=t.length-2;
  let s=n.length-1;

  while (r>=0&&s>=0) {
    if (Qn(t[r],n[s])) {
      (r -= 1);
    }

    s-=1;
  }

  return r===-1
}function Tl(t,e,n){const r=[];for (const{selectors,settings} of t) {
  for (const i of selectors) {
    if(Pl(i,e,n)){r.push(settings);break}
  }
}return r}function ds(t,e,n){
  const r=Object.entries(n.themes).filter(a => a[1]).map(a => ({
    color:a[0],
    theme:a[1]
  }));

  const s=r.map(a=>{
    const c=un(t,e,{...n,theme:a.theme});
    const u=Te(c);
    const h=typeof a.theme=="string"?a.theme:a.theme.name;
    return{tokens:c,state:u,theme:h}
  });

  const o=Ml(...s.map(a => a.tokens));

  const i=o[0].map((a, c) => a.map((u,h)=>{
    const d={content:u.content,variants:{},offset:u.offset};

    if ("includeExplanation"in n&&n.includeExplanation) {
      (d.explanation = u.explanation);
    }

    o.forEach((f,p)=>{const{content,explanation,offset,...y}=f[c][h];d.variants[r[p].color]=y});
    return d;
  }));

  const l=s[0].state?new ve(Object.fromEntries(s.map(a => [a.theme,a.state?.getInternalStack(a.theme)])),s[0].state.lang):void 0;

  if (l) {
    ht(i,l);
  }

  return i;
}function Ml(...t){
  const e=t.map(() => []);

  const n=t.length;
  for(let r=0;r<t[0].length;r++){
    const s=t.map(a => a[r]);

    const o=e.map(() => []);

    e.forEach((a, c) => a.push(o[c]));

    const i=s.map(() => 0);

    const l=s.map(a => a[0]);

    while (l.every(a => a)) {const a=Math.min(...l.map(c => c.content.length));for(let c=0;c<n;c++){
      const u=l[c];

      if (u.content.length===a) {
        o[c].push(u);
        i[c]+=1;
        l[c]=s[c][i[c]];
      } else {
        o[c].push({...u,content:u.content.slice(0,a)});
        l[c]={...u,content:u.content.slice(a),offset:u.offset+a};
      }
    }}
  }return e
}function ot(t,e,n){
  let r;
  let s;
  let o;
  let i;
  let l;
  let a;
  if("themes"in n){
    const {defaultColor="light",cssVariablePrefix="--shiki-",colorsRendering="css-vars"}=n;

    const d=Object.entries(n.themes).filter(g => g[1]).map(g => ({
      color:g[0],
      theme:g[1]
    })).sort((g, y) => g.color===defaultColor?-1:y.color===defaultColor?1:0);

    if (d.length===0) {
      throw new G("`themes` option must not be empty");
    }const f=ds(t,e,n);
    a=Te(f);

    if (defaultColor&&cn!==defaultColor&&!d.find(g => g.color===defaultColor)) {
      throw new G(`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
    }

    const p=d.map(g => t.getTheme(g.theme));

    const b=d.map(g => g.color);

    o=f.map(g => g.map(y => pl(y,b,cssVariablePrefix,defaultColor,colorsRendering)));

    if (a) {
      ht(o,a);
    }

    const C=d.map(g => nt(g.theme,n));
    s=Yn(d,p,C,cssVariablePrefix,defaultColor,"fg",colorsRendering);
    r=Yn(d,p,C,cssVariablePrefix,defaultColor,"bg",colorsRendering);

    i=`shiki-themes ${p.map(g => g.name).join(" ")}`;

    l=defaultColor?void 0:[s,r].join(";");
  }else if ("theme"in n) {
    const c=nt(n.theme,n);o=un(t,e,n);const u=t.getTheme(n.theme);
    r=se(u.bg,c);
    s=se(u.fg,c);
    i=u.name;
    a=Te(o);
  } else {
    throw new G("Invalid options, either `theme` or `themes` must be provided");
  }return{tokens:o,fg:s,bg:r,themeName:i,rootStyle:l,grammarState:a}
}function Yn(t,e,n,r,s,o,i){return t.map((l,a)=>{
  const c=se(e[a][o],n[a])||"inherit";
  const u=`${r+l.color}${o==="bg"?"-bg":""}:${c}`;
  if(a===0&&s){if(s===cn&&t.length>1){
    const h=t.findIndex(b => b.color==="light");

    const d=t.findIndex(b => b.color==="dark");

    if (h===-1||d===-1) {
      throw new G('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
    }
    const f=se(e[h][o],n[h])||"inherit";
    const p=se(e[d][o],n[d])||"inherit";
    return`light-dark(${f}, ${p});${u}`
  }return c}return i==="css-vars"?u:null
}).filter(l => !!l).join(";");}function it(t,e,n,r={meta:{},options:n,codeToHast:(s, o) => it(t,s,o),codeToTokens:(s, o) => ot(t,s,o)}){
  let s=e;for (const p of st(n)) {
      s=p.preprocess?.call(r,s,n)||s;
    }let{tokens,fg,bg,themeName,rootStyle,grammarState}=ot(t,s,n);const{mergeWhitespaces=true,mergeSameStyleTokens=false}=n;

  if (mergeWhitespaces===true) {
    tokens=Dl(tokens);
  } else if (mergeWhitespaces==="never") {
    (tokens = Gl(tokens));
  }

  if (mergeSameStyleTokens) {
    (tokens = Bl(tokens));
  }

  const f={...r,get source() {return s}};for (const p of st(n)) {
      tokens=p.tokens?.call(f,tokens)||tokens;
    }return Ol(tokens,{...n,fg:fg,bg:bg,themeName:themeName,rootStyle:n.rootStyle===false?false:n.rootStyle??rootStyle},f,grammarState);
}function Ol(t,e,n,r=Te(t)){
  const s=st(e);
  const o=[];
  const i={type:"root",children:[]};
  const {structure="classic",tabindex="0"}=e;
  const c={class:`shiki ${e.themeName||""}`};

  if (e.rootStyle!==false) {
    if (e.rootStyle!=null) {
      c.style=e.rootStyle;
    } else {
      c.style=`background-color:${e.bg};color:${e.fg}`;
    }
  }

  if (tabindex!==false&&tabindex!=null) {
    (c.tabindex = tabindex.toString());
  }

  for (const[b,C] of Object.entries(e.meta||{})) {
    if (!b.startsWith("_")) {
      (c[b] = C);
    }
  }
  let u={type:"element",tagName:"pre",properties:c,children:[]};
  let h={type:"element",tagName:"code",properties:{},children:o};
  const d=[];
  const f={...n,structure:structure,addClassToHast:cs,get source() {return n.source},get tokens() {return t},get options() {return e},get root() {return i},get pre() {return u},get code() {return h},get lines() {return d}};

  t.forEach((b,C)=>{
    if (C) {
      if (structure==="inline") {
        i.children.push({type:"element",tagName:"br",properties:{},children:[]});
      } else if (structure==="classic") {
        o.push({type:"text",value:`
        `});
      }
    }

    let g={type:"element",tagName:"span",properties:{class:"line"},children:[]};
    let y=0;
    for(const m of b){
      let _={type:"element",tagName:"span",properties:{...m.htmlAttrs},children:[{type:"text",value:m.content}]};const k=Xt(m.htmlStyle||rt(m));

      if (k) {
        (_.properties.style = k);
      }

      for (const I of s) {
          _=I?.span?.call(f,_,C+1,y,g,m)||_;
        }

      if (structure==="inline") {
        i.children.push(_);
      } else if (structure==="classic") {
        g.children.push(_);
      }

      y+=m.content.length;
    }if (structure==="classic") {
        for (const m of s) {
          g=m?.line?.call(f,g,C+1)||g;
        }
        d.push(g);
        o.push(g);
      } else {
      if (structure==="inline") {
        d.push(g);
      }
    }
  });

  if (structure==="classic") {for (const b of s) {
    h=b?.code?.call(f,h)||h;
  }u.children.push(h);for (const b of s) {
    u=b?.pre?.call(f,u)||u;
  }i.children.push(u)} else if(structure==="inline"){const b=[];let C={type:"element",tagName:"span",properties:{class:"line"},children:[]};for (const m of i.children) {
    if (m.type==="element"&&m.tagName==="br") {
      b.push(C);
      C={type:"element",tagName:"span",properties:{class:"line"},children:[]};
    } else if ((m.type==="element" || m.type==="text")) {
      C.children.push(m);
    }
  }b.push(C);let y={type:"element",tagName:"code",properties:{},children:b};for (const m of s) {
    y=m?.code?.call(f,y)||y;
  }i.children=[];for(let m=0;m<y.children.length;m++){
    if (m>0) {
      i.children.push({type:"element",tagName:"br",properties:{},children:[]});
    }

    const _=y.children[m];

    if (_.type==="element") {
      i.children.push(..._.children);
    }
  }}

  let p=i;for (const b of s) {
      p=b?.root?.call(f,p)||p;
    }

  if (r) {
    ht(p,r);
  }

  return p;
}function Dl(t){return t.map(e=>{
  const n=[];
  let r="";
  let s;
  e.forEach((o,i)=>{
    const a=!(o.fontStyle&&(o.fontStyle&j.Underline||o.fontStyle&j.Strikethrough));

    if (a&&o.content.match(/^\s+$/)&&e[i+1]) {
      s===void 0&&(s=o.offset);
      r+=o.content;
    } else if (r) {
      a?n.push({...o,offset:s,content:r+o.content}):n.push({content:r,offset:s},o);
      s=void 0;
      r="";
    } else {
      n.push(o);
    }
  });
  return n;
});}function Gl(t){return t.map(e => e.flatMap(n=>{
  if (n.content.match(/^\s+$/)) {
    return n;
  }const r=n.content.match(/^(\s*)(.*?)(\s*)$/);if (!r) {
      return n;
    }const[,s,o,i]=r;if (!s&&!i) {
      return n;
    }const l=[{...n,offset:n.offset+s.length,content:o}];

  if (s) {
    l.unshift({content:s,offset:n.offset});
  }

  if (i) {
    l.push({content:i,offset:n.offset+s.length+o.length});
  }

  return l;
}));}function Bl(t){return t.map(e=>{const n=[];for(const r of e){
  if(n.length===0){n.push({...r});continue}
  const s=n[n.length-1];
  const o=Xt(s.htmlStyle||rt(s));
  const i=Xt(r.htmlStyle||rt(r));
  const l=s.fontStyle&&(s.fontStyle&j.Underline||s.fontStyle&j.Strikethrough);
  const a=r.fontStyle&&(r.fontStyle&j.Underline||r.fontStyle&j.Strikethrough);

  if (!l&&!a&&o===i) {
    s.content+=r.content;
  } else {
    n.push({...r});
  }
}return n});}const Fl=sl;function jl(t,e,n){const r={meta:{},options:n,codeToHast:(o, i) => it(t,o,i),codeToTokens:(o, i) => ot(t,o,i)};let s=Fl(it(t,e,n,r));for (const o of st(n)) {
  s=o.postprocess?.call(r,s,n)||s;
}return s}
const Jn={light:"#333333",dark:"#bbbbbb"};
const er={light:"#fffffe",dark:"#1e1e1e"};
const tr="__shiki_resolved";
function dn(t){
  if (t?.[tr]) {
    return t;
  }const e={...t};

  if (e.tokenColors&&!e.settings) {
    e.settings=e.tokenColors;
    delete e.tokenColors;
  }

  e.type||="dark";
  e.colorReplacements={...e.colorReplacements};
  e.settings||=[];
  let{bg,fg}=e;if(!bg||!fg){
    const l=e.settings?e.settings.find(a => !a.name&&!a.scope):void 0;

    if (l?.settings?.foreground) {
      (fg = l.settings.foreground);
    }

    if (l?.settings?.background) {
      (bg = l.settings.background);
    }

    if (!fg&&e?.colors?.["editor.foreground"]) {
      (fg = e.colors["editor.foreground"]);
    }

    if (!bg&&e?.colors?.["editor.background"]) {
      (bg = e.colors["editor.background"]);
    }

    if (!fg) {
      (fg = e.type==="light"?Jn.light:Jn.dark);
    }

    if (!bg) {
      (bg = e.type==="light"?er.light:er.dark);
    }

    e.fg=fg;
    e.bg=bg;
  }

  if (!e.settings[0] || !e.settings[0].settings || e.settings[0].scope) {
    e.settings.unshift({settings:{foreground:e.fg,background:e.bg}});
  }

  let s=0;const o=new Map;function i(l){if (o.has(l)) {
      return o.get(l);
    }s+=1;const a=`#${s.toString(16).padStart(8,"0").toLowerCase()}`;return e.colorReplacements?.[`#${a}`]?i(l):(o.set(l,a),a)}e.settings=e.settings.map(l=>{
      const a=l.settings?.foreground&&!l.settings.foreground.startsWith("#");
      const c=l.settings?.background&&!l.settings.background.startsWith("#");
      if (!a&&!c) {
        return l;
      }const u={...l,settings:{...l.settings}};if(a){
        const h=i(l.settings.foreground);
        e.colorReplacements[h]=l.settings.foreground;
        u.settings.foreground=h;
      }if(c){
        const h=i(l.settings.background);
        e.colorReplacements[h]=l.settings.background;
        u.settings.background=h;
      }return u
    });for (const l of Object.keys(e.colors||{})) {
      if((l==="editor.foreground"||l==="editor.background"||l.startsWith("terminal.ansi"))&&!e.colors[l]?.startsWith("#")){
        const a=i(e.colors[l]);
        e.colorReplacements[a]=e.colors[l];
        e.colors[l]=a;
      }
    }
  Object.defineProperty(e,tr,{enumerable:false,writable:false,value:true});
  return e;
}async function Ul(t){return Array.from(new Set((await Promise.all(t.filter(e => !ll(e)).map(async e => await ls(e).then(n => Array.isArray(n)?n:[n])))).flat()));}async function Wl(t){return (await Promise.all(t.map(async n => cl(n)?null:dn(await ls(n))))).filter(n => !!n);}class me extends Error{constructor(e){
  super(e);
  this.name="ShikiError";
}}function fs(t,e){if (!e) {
  return t;
}if(e[t]){
  const n=new Set([t]);

  while (e[t]) {
    t=e[t];

    if (n.has(t)) {
      throw new me(`Circular alias \`${Array.from(n).join(" -> ")} -> ${t}\``);
    }

    n.add(t)
  }
}return t}class zl extends zi{constructor(e,n,r,s={}){
  super(e);
  this._resolver=e;
  this._themes=n;
  this._langs=r;
  this._alias=s;

  this._themes.map(o => this.loadTheme(o));

  this.loadLanguages(this._langs);
}_resolvedThemes=new Map;_resolvedGrammars=new Map;_langMap=new Map;_langGraph=new Map;_textmateThemeCache=new WeakMap;_loadedThemesCache=null;_loadedLanguagesCache=null;getTheme(e){return typeof e=="string"?this._resolvedThemes.get(e):this.loadTheme(e)}loadTheme(e){
  const n=dn(e);

  if (n.name) {
    this._resolvedThemes.set(n.name,n);
    this._loadedThemesCache=null;
  }

  return n;
}getLoadedThemes(){
  if (!this._loadedThemesCache) {
    (this._loadedThemesCache = [...this._resolvedThemes.keys()]);
  }

  return this._loadedThemesCache;
}setTheme(e){
  let n=this._textmateThemeCache.get(e);

  if (!n) {
    n=Qe.createFromRawTheme(e);
    this._textmateThemeCache.set(e,n);
  }

  this._syncRegistry.setTheme(n);
}getGrammar(e){
  e=fs(e,this._alias);
  return this._resolvedGrammars.get(e);
}loadLanguage(e){
  if (this.getGrammar(e.name)) {
    return;
  }const n=new Set([...this._langMap.values()].filter(o => o.embeddedLangsLazy?.includes(e.name)));this._resolver.addLanguage(e);const r={balancedBracketSelectors:e.balancedBracketSelectors||["*"],unbalancedBracketSelectors:e.unbalancedBracketSelectors||[]};this._syncRegistry._rawGrammars.set(e.scopeName,e);const s=this.loadGrammarWithConfiguration(e.scopeName,1,r);
  s.name=e.name;
  this._resolvedGrammars.set(e.name,s);

  if (e.aliases) {
    e.aliases.forEach(o=>{this._alias[o]=e.name});
  }

  this._loadedLanguagesCache=null;

  if (n.size) {
    for (const o of n) {
      this._resolvedGrammars.delete(o.name);
      this._loadedLanguagesCache=null;
      this._syncRegistry?._injectionGrammars?.delete(o.scopeName);
      this._syncRegistry?._grammars?.delete(o.scopeName);
      this.loadLanguage(this._langMap.get(o.name));
    }
  }
}dispose(){
  super.dispose();
  this._resolvedThemes.clear();
  this._resolvedGrammars.clear();
  this._langMap.clear();
  this._langGraph.clear();
  this._loadedThemesCache=null;
}loadLanguages(e){
  for (const s of e) {
    this.resolveEmbeddedLanguages(s);
  }
  const n=Array.from(this._langGraph.entries());

  const r=n.filter(([s,o]) => !o);

  if(r.length){const s=n.filter(([o,i]) => i?(i.embeddedLanguages||i.embeddedLangs)?.some(a => r.map(([c]) => c).includes(a)):false).filter(o => !r.includes(o));throw new me(`Missing languages ${r.map(([o]) => `\`${o}\``).join(", ")}, required by ${s.map(([o]) => `\`${o}\``).join(", ")}`)}for (const[s,o] of n) {
    this._resolver.addLanguage(o);
  }for (const[s,o] of n) {
    this.loadLanguage(o)
  }
}getLoadedLanguages(){
  if (!this._loadedLanguagesCache) {
    (this._loadedLanguagesCache = [...new Set([...this._resolvedGrammars.keys(),...Object.keys(this._alias)])]);
  }

  return this._loadedLanguagesCache;
}resolveEmbeddedLanguages(e){
  this._langMap.set(e.name,e);
  this._langGraph.set(e.name,e);
  const n=e.embeddedLanguages??e.embeddedLangs;if (n) {
    for (const r of n) {
      this._langGraph.set(r,this._langMap.get(r))
    }
  }
}}class ql{_langs=new Map;_scopeToLang=new Map;_injections=new Map;_onigLib;constructor(e,n){
  this._onigLib={createOnigScanner:r => e.createScanner(r),createOnigString:r => e.createString(r)};

  n.forEach(r => this.addLanguage(r));
}get onigLib(){return this._onigLib}getLangRegistration(e){return this._langs.get(e)}loadGrammar(e){return this._scopeToLang.get(e)}addLanguage(e){
  this._langs.set(e.name,e);

  if (e.aliases) {
    e.aliases.forEach(n=>{this._langs.set(n,e)});
  }

  this._scopeToLang.set(e.scopeName,e);

  if (e.injectTo) {
    e.injectTo.forEach(n=>{
      if (!this._injections.get(n)) {
        this._injections.set(n,[]);
      }

      this._injections.get(n).push(e.scopeName);
    });
  }
}getInjections(e){const n=e.split(".");let r=[];for(let s=1;s<=n.length;s++){const o=n.slice(0,s).join(".");r=[...r,...(this._injections.get(o) || [])]}return r}}let xe=0;function Hl(t){
  xe+=1;

  if (t.warnings!==false&&xe>=10&&xe%10===0) {
    console.warn(`[Shiki] ${xe} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  }

  let e=false;if (!t.engine) {
      throw new me("`engine` option is required for synchronous mode");
    }
  const n=(t.langs||[]).flat(1);
  const r=(t.themes||[]).flat(1).map(dn);
  const s=new ql(t.engine,n);
  const o=new zl(s,r,n,t.langAlias);
  let i;function l(m){return fs(m,t.langAlias)}function a(m){g();const _=o.getGrammar(typeof m=="string"?m:m.name);if (!_) {
      throw new me(`Language \`${m}\` not found, you may need to load it first`);
    }return _}function c(m){if (m==="none") {
      return{bg:"",fg:"",name:"none",settings:[],type:"dark"};
    }g();const _=o.getTheme(m);if (!_) {
      throw new me(`Theme \`${m}\` not found, you may need to load it first`);
    }return _}function u(m){
    g();const _=c(m);

    if (i!==m) {
      o.setTheme(_);
      i=m;
    }

    const k=o.getColorMap();return{theme:_,colorMap:k}
  }function h(){
      g();
      return o.getLoadedThemes();
    }function d(){
      g();
      return o.getLoadedLanguages();
    }function f(...m){
      g();
      o.loadLanguages(m.flat(1));
    }async function p(...m){return f(await Ul(m))}function b(...m){g();for (const _ of m.flat(1)) {
      o.loadTheme(_)
    }}async function C(...m){
      g();
      return b(await Wl(m));
    }function g(){if (e) {
      throw new me("Shiki instance has been disposed")
    }}function y(){
    if (!e) {
      e=true;
      o.dispose();
      xe-=1;
    }
  }return{setTheme:u,getTheme:c,getLanguage:a,getLoadedThemes:h,getLoadedLanguages:d,resolveLangAlias:l,loadLanguage:p,loadLanguageSync:f,loadTheme:C,loadThemeSync:b,dispose:y,[Symbol.dispose]:y}
}function Vl(t){const e=Hl(t);return {getLastGrammarState:(...n) => Rl(e,...n),codeToTokensBase:(n, r) => un(e,n,r),codeToTokensWithThemes:(n, r) => ds(e,n,r),codeToTokens:(n, r) => ot(e,n,r),codeToHast:(n, r) => it(e,n,r),codeToHtml:(n, r) => jl(e,n,r),getBundledLanguages:() => ({}),getBundledThemes:() => ({}),...e,getInternalContext:() => e};}class ps{diff(e,n,r={}){
  let s;

  if (typeof r=="function") {
    s=r;
    r={};
  } else if ("callback"in r) {
    (s = r.callback);
  }

  const o=this.castInput(e,r);
  const i=this.castInput(n,r);
  const l=this.removeEmpty(this.tokenize(o,r));
  const a=this.removeEmpty(this.tokenize(i,r));
  return this.diffWithOptionsObj(l,a,r,s)
}diffWithOptionsObj(e,n,r,s){
  const i=y=>{
    y=this.postProcess(y,r);

    if (s)
      {setTimeout(() => {s(y)},0);return} else {
      return y
    }
  };

  const l=n.length;
  const a=e.length;
  let c=1;
  let u=l+a;

  if (r.maxEditLength!=null) {
    (u = Math.min(u,r.maxEditLength));
  }

  const h=r.timeout ?? Infinity;
  const d=Date.now()+h;
  const f=[{oldPos:-1,lastComponent:void 0}];
  let p=this.extractCommon(f[0],n,e,0,r);if (f[0].oldPos+1>=a&&p+1>=l) {
      return i(this.buildValues(f[0].lastComponent,n,e));
    }
  let b=-Infinity;
  let C=Infinity;
  const g=()=>{for(let y=Math.max(b,-c);y<=Math.min(C,c);y+=2){
    let m;
    const _=f[y-1];
    const k=f[y+1];

    if (_) {
      (f[y-1] = void 0);
    }

    let I=false;if(k){const A=k.oldPos-y;I=k&&A >= 0&&A<l}const S=_&&_.oldPos+1<a;if(!I&&!S){f[y]=void 0;continue}

    if (!S||I&&_.oldPos<k.oldPos) {
      m=this.addToPath(k,true,false,0,r);
    } else {
      m=this.addToPath(_,false,true,1,r);
    }

    p=this.extractCommon(m,n,e,y,r);

    if (m.oldPos+1>=a&&p+1>=l) {
      return i(this.buildValues(m.lastComponent,n,e))||true;
    }

    f[y]=m;

    if (m.oldPos+1>=a) {
      (C = Math.min(C,y-1));
    }

    if (p+1>=l) {
      (b = Math.max(b,y+1));
    }
  }c++};if (s) {
      (function y(){setTimeout(() => {
        if (c>u||Date.now()>d) {
          return s(void 0);
        }

        if (!g()) {
          y();
        }
      },0)})();
    } else {
    while (c<=u&&Date.now()<=d) {const y=g();if (y) {
      return y
    }}
  }
}addToPath(e,n,r,s,o){const i=e.lastComponent;return i&&!o.oneChangePerToken&&i.added===n&&i.removed===r?{oldPos:e.oldPos+s,lastComponent:{count:i.count+1,added:n,removed:r,previousComponent:i.previousComponent}}:{oldPos:e.oldPos+s,lastComponent:{count:1,added:n,removed:r,previousComponent:i}}}extractCommon(e,n,r,s,o){
  const i=n.length;
  const l=r.length;
  let a=e.oldPos;
  let c=a-s;
  let u=0;

  while (c+1<i&&a+1<l&&this.equals(r[a+1],n[c+1],o)) {
    c++;
    a++;
    u++;

    if (o.oneChangePerToken) {
      (e.lastComponent = {count:1,previousComponent:e.lastComponent,added:false,removed:false});
    }
  }

  if (u&&!o.oneChangePerToken) {
    (e.lastComponent = {count:u,previousComponent:e.lastComponent,added:false,removed:false});
  }

  e.oldPos=a;
  return c;
}equals(e,n,r){return r.comparator?r.comparator(e,n):e===n||!!r.ignoreCase&&e.toLowerCase()===n.toLowerCase()}removeEmpty(e){const n=[];for (let r=0; r<e.length; r++) {
  if (e[r]) {
    n.push(e[r]);
  }
}return n}castInput(e,n){return e}tokenize(e,n){return Array.from(e)}join(e){return e.join("")}postProcess(e,n){return e}get useLongestToken(){return false;}buildValues(e,n,r){
  const s=[];let o;

  while (e) {
      s.push(e);
      o=e.previousComponent;
      delete e.previousComponent;
      e=o;
    }

  s.reverse();const i=s.length;
  let l=0;
  let a=0;
  let c=0;
  for(;l<i;l++){const u=s[l];if (u.removed) {
    u.value=this.join(r.slice(c,c+u.count));
    c+=u.count;
  } else {
    if (!u.added&&this.useLongestToken) {
      let h=n.slice(a,a+u.count);
      h=h.map((d, f) => {const p=r[c+f];return p.length>d.length?p:d});
      u.value=this.join(h);
    } else {
      u.value=this.join(n.slice(a,a+u.count));
    }
    a+=u.count;

    if (!u.added) {
      (c += u.count);
    }
  }}return s
}}class Xl extends ps{}const Kl=new Xl;function Zl(t,e,n){return Kl.diff(t,e,n)}const nr="a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";class Ql extends ps{tokenize(e){const n=new RegExp(`(\\r?\\n)|[${nr}]+|[^\\S\\n\\r]+|[^${nr}]`,"ug");return e.match(n)||[]}}const Yl=new Ql;function Jl(t,e,n){return Yl.diff(t,e,n)}function ec(t={}){
  const {classPrefix="__shiki_",classSuffix="",classReplacer=l => l}=t;

  const s=new Map;
  function o(l){return Object.entries(l).map(([a,c]) => `${a}:${c}`).join(";");}function i(l){
  const a=typeof l=="string"?l:o(l);let c=classPrefix+tc(a)+classSuffix;
  c=classReplacer(c);

  if (!s.has(c)) {
    s.set(c,typeof l=="string"?l:{...l});
  }

  return c;
}return {name:"@shikijs/transformers:style-to-class",pre(l){
    if (!l.properties.style) {
      return;
    }const a=i(l.properties.style);
    delete l.properties.style;
    this.addClassToHast(l,a);
  },tokens(l){for (const a of l) {
    for(const c of a){
      if (!c.htmlStyle) {
        continue;
      }const u=i(c.htmlStyle);
      c.htmlStyle={};
      c.htmlAttrs||={};

      if (c.htmlAttrs.class) {
        c.htmlAttrs.class+=` ${u}`;
      } else {
        c.htmlAttrs.class=u;
      }
    }
  }},getClassRegistry(){return s},getCSS(){let l="";for (const[a,c] of s.entries()) {
    l+=`.${a}{${typeof c=="string"?c:o(c)}}`;
  }return l},clearRegistry(){s.clear()}};
}function tc(t,e=0){
  let n=3735928559^e;
  let r=1103547991^e;
  for (let s=0,o; s<t.length; s++) {
    o=t.charCodeAt(s);
    n=Math.imul(n^o,2654435761);
    r=Math.imul(r^o,1597334677);
  }
  n=Math.imul(n^n>>>16,2246822507);
  n^=Math.imul(r^r>>>13,3266489909);
  r=Math.imul(r^r>>>16,2246822507);
  r^=Math.imul(n^n>>>13,3266489909);
  return (4294967296*(2097151&r)+(n>>>0)).toString(36).slice(0,6);
}
const Be={dark:"pierre-dark",light:"pierre-light"};
const rr=new Map;
const sr=new Set;
function fn(t,e){t=Array.isArray(t)?t:[t];for(const n of t){
  if (sr.has(n.name)) {
    continue;
  }let r=rr.get(n.name);

  if (r==null) {
    r=n;
    rr.set(n.name,r);
  }

  sr.add(r.name);
  e.loadLanguageSync(r.data);
}}
const At=new Map;
const or=new Set;
function gs(t,e){t=Array.isArray(t)?t:[t];for(let n of t){
  let r;if (typeof n=="string") {
    r=At.get(n);

    if (r==null) {
      throw new Error(`loadResolvedThemes: ${n} is not resolved, you must resolve it before calling loadResolvedThemes`)
    }
  } else {
    r=n;
    n=n.name;

    if (!At.has(n)) {
      At.set(n,r);
    }
  }

  if (!or.has(n)) {
    or.add(n);
    e.loadThemeSync(r);
  }
}}function Me(t){return t.replace(/\n$|\r\n$/,"");}function nc(t){return{type:"text",value:t}}function Rt({tagName,children=[],properties={}}){return {type:"element",tagName:tagName,properties:properties,children:children};}function rc(t){
  let e=t.children[0];

  while (e!=null) {
    if (e.type==="element"&&e.tagName==="code") {
      return e;
    }

    if ("children"in e) {
      e=e.children[0];
    } else {
      e=null;
    }
  }
}function sc(t,e,n){
  const r=typeof n.lineInfo=="function"?n.lineInfo(e):n.lineInfo[e-1];if(r==null){
      const s=`processLine: line ${e}, contains no state.lineInfo`;
      console.error(s,{node:t,line:e,state:n});
      throw new Error(s);
    }
  t.tagName="span";
  t.properties["data-column-content"]="";

  if (t.children.length===0) {
    t.children.push(nc(`
    `));
  }

  return Rt({tagName:"div",children:[Rt({tagName:"span",children:[Rt({tagName:"span",children:[{type:"text",value:`${r.lineNumber}`}],properties:{"data-line-number-content":""}})],properties:{"data-column-number":""}}),t],properties:{"data-line":r.lineNumber,"data-alt-line":r.altLineNumber,"data-line-type":r.type,"data-line-index":r.lineIndex}});
}function ms(t=false){
  const e={lineInfo:[]};

  const n=[{line(r){
    delete r.properties.class;
    return r;
  },pre(r){
    const s=rc(r);
    const o=[];
    if(s!=null){let i=1;for (const l of s.children) {
      if (l.type==="element") {
        o.push(sc(l,i,e));
        i++;
      }
    }s.children=o}return r
  }}];

  if (t) {
    n.push(oc,ir);
  }

  return {state:e,transformers:n,toClass:ir};
}
const ir=ec({classPrefix:"hl-"});

const oc={name:"token-style-normalizer",tokens(t){for (const e of t) {
  for(const n of e){
    if (n.htmlStyle!=null) {
      continue;
    }const r={};

    if (n.color!=null) {
      (r.color = n.color);
    }

    if (n.bgColor!=null) {
      (r["background-color"] = n.bgColor);
    }

    if (n.fontStyle!=null&&n.fontStyle!==0) {
      (n.fontStyle&1)!==0&&(r["font-style"]="italic");
      (n.fontStyle&2)!==0&&(r["font-weight"]="bold");
      (n.fontStyle&4)!==0&&(r["text-decoration"]="underline");
    }

    if (Object.keys(r).length>0) {
      (n.htmlStyle = r);
    }
  }
}}};

function q(t){return`--${t==="token"?"diffs-token":"diffs"}-`}const Ee={"1c":"1c",abap:"abap",as:"actionscript-3",ada:"ada",adb:"ada",ads:"ada",adoc:"asciidoc",asciidoc:"asciidoc","component.html":"angular-html","component.ts":"angular-ts",conf:"nginx",htaccess:"apache",cls:"tex",trigger:"apex",apl:"apl",applescript:"applescript",scpt:"applescript",ara:"ara",asm:"asm",s:"riscv",astro:"astro",awk:"awk",bal:"ballerina",sh:"zsh",bash:"zsh",bat:"cmd",cmd:"cmd",be:"berry",beancount:"beancount",bib:"bibtex",bicep:"bicep","blade.php":"blade",bsl:"bsl",c:"c",h:"objective-cpp",cs:"csharp",cpp:"cpp",hpp:"cpp",cc:"cpp",cxx:"cpp",hh:"cpp",cdc:"cdc",cairo:"cairo",clar:"clarity",clj:"clojure",cljs:"clojure",cljc:"clojure",soy:"soy",cmake:"cmake","CMakeLists.txt":"cmake",cob:"cobol",cbl:"cobol",cobol:"cobol",CODEOWNERS:"codeowners",ql:"ql",coffee:"coffeescript",lisp:"lisp",cl:"lisp",lsp:"lisp",log:"log",v:"verilog",cql:"cql",cr:"crystal",css:"css",csv:"csv",cue:"cue",cypher:"cypher",cyp:"cypher",d:"d",dart:"dart",dax:"dax",desktop:"desktop",diff:"diff",patch:"diff",Dockerfile:"dockerfile",dockerfile:"dockerfile",env:"dotenv",dm:"dream-maker",edge:"edge",el:"emacs-lisp",ex:"elixir",exs:"elixir",elm:"elm",erb:"erb",erl:"erlang",hrl:"erlang",f:"fortran-fixed-form",for:"fortran-fixed-form",fs:"fsharp",fsi:"fsharp",fsx:"fsharp",f03:"f03",f08:"f08",f18:"f18",f77:"f77",f90:"fortran-free-form",f95:"fortran-free-form",fnl:"fennel",fish:"fish",ftl:"ftl",tres:"gdresource",res:"gdresource",gd:"gdscript",gdshader:"gdshader",gs:"genie",feature:"gherkin",COMMIT_EDITMSG:"git-commit","git-rebase-todo":"git-rebase",gjs:"glimmer-js",gleam:"gleam",gts:"glimmer-ts",glsl:"glsl",vert:"glsl",frag:"glsl",shader:"shaderlab",gp:"gnuplot",plt:"gnuplot",gnuplot:"gnuplot",go:"go",graphql:"graphql",gql:"graphql",groovy:"groovy",gvy:"groovy",hack:"hack",haml:"haml",hbs:"handlebars",handlebars:"handlebars",hs:"haskell",lhs:"haskell",hx:"haxe",hcl:"hcl",hjson:"hjson",hlsl:"hlsl",fx:"hlsl",html:"html",htm:"html",http:"http",rest:"http",hxml:"hxml",hy:"hy",imba:"imba",ini:"ini",cfg:"ini",jade:"pug",pug:"pug",java:"java",js:"javascript",mjs:"javascript",cjs:"javascript",jinja:"jinja",jinja2:"jinja",j2:"jinja",jison:"jison",jl:"julia",json:"json",json5:"json5",jsonc:"jsonc",jsonl:"jsonl",jsonnet:"jsonnet",libsonnet:"jsonnet",jssm:"jssm",jsx:"jsx",kt:"kotlin",kts:"kts",kql:"kusto",tex:"tex",ltx:"tex",lean:"lean4",less:"less",liquid:"liquid",lit:"lit",ll:"llvm",logo:"logo",lua:"lua",luau:"luau",Makefile:"makefile",mk:"makefile",makefile:"makefile",md:"markdown",markdown:"markdown",marko:"marko",m:"wolfram",mat:"matlab",mdc:"mdc",mdx:"mdx",wiki:"wikitext",mediawiki:"wikitext",mmd:"mermaid",mermaid:"mermaid",mips:"mipsasm",mojo:"mojo","🔥":"mojo",move:"move",nar:"narrat",nf:"nextflow",nim:"nim",nims:"nim",nimble:"nim",nix:"nix",nu:"nushell",mm:"objective-cpp",ml:"ocaml",mli:"ocaml",mll:"ocaml",mly:"ocaml",pas:"pascal",p:"pascal",pl:"prolog",pm:"perl",t:"perl",raku:"raku",p6:"raku",pl6:"raku",php:"php",phtml:"php",pls:"plsql",sql:"sql",po:"po",polar:"polar",pcss:"postcss",pot:"pot",potx:"potx",pq:"powerquery",pqm:"powerquery",ps1:"powershell",psm1:"powershell",psd1:"powershell",prisma:"prisma",pro:"prolog",P:"prolog",properties:"properties",proto:"protobuf",pp:"puppet",purs:"purescript",py:"python",pyw:"python",pyi:"python",qml:"qml",qmldir:"qmldir",qss:"qss",r:"r",R:"r",rkt:"racket",rktl:"racket",razor:"razor",cshtml:"razor",rb:"ruby",rbw:"ruby",reg:"reg",regex:"regexp",rel:"rel",rs:"rust",rst:"rst",rake:"ruby",gemspec:"ruby",sas:"sas",sass:"sass",scala:"scala",sc:"scala",scm:"scheme",ss:"scheme",sld:"scheme",scss:"scss",sdbl:"sdbl",shadergraph:"shader",st:"smalltalk",sol:"solidity",sparql:"sparql",rq:"sparql",spl:"splunk",config:"ssh-config",do:"stata",ado:"stata",dta:"stata",styl:"stylus",stylus:"stylus",svelte:"svelte",swift:"swift",sv:"system-verilog",svh:"system-verilog",service:"systemd",socket:"systemd",device:"systemd",timer:"systemd",talon:"talonscript",tasl:"tasl",tcl:"tcl",templ:"templ",tf:"tf",tfvars:"tfvars",toml:"toml",ts:"typescript",tsp:"typespec",tsv:"tsv",tsx:"tsx",ttl:"turtle",twig:"twig",typ:"typst",vv:"v",vala:"vala",vapi:"vala",vb:"vb",vbs:"vb",bas:"vb",vh:"verilog",vhd:"vhdl",vhdl:"vhdl",vim:"vimscript",vue:"vue","vine.ts":"vue-vine",vy:"vyper",wasm:"wasm",wat:"wasm",wy:"文言",wgsl:"wgsl",wit:"wit",wl:"wolfram",nb:"wolfram",xml:"xml",xsl:"xsl",xslt:"xsl",yaml:"yaml",yml:"yml",zs:"zenscript",zig:"zig",zsh:"zsh",sty:"tex"};function Kt(t){
  if (Ee[t]!=null) {
    return Ee[t];
  }const e=t.match(/\.([^/\\]+\.[^/\\]+)$/);

  if (e!=null&&Ee[e[1]]!=null) {
    return Ee[e[1]]??"text";
  }

  return Ee[t.match(/\.([^.]+)$/)?.[1]??""]??"text";
}function ys({theme=Be,highlighter,prefix}){let r="";if(typeof theme=="string"){
  const s=highlighter.getTheme(theme);
  r+=`color:${s.fg};`;
  r+=`background-color:${s.bg};`;
  r+=`${q("global")}fg:${s.fg};`;
  r+=`${q("global")}bg:${s.bg};`;
  r+=Lt(s,prefix);
}else{
  let s=highlighter.getTheme(theme.dark);
  r+=`${q("global")}dark:${s.fg};`;
  r+=`${q("global")}dark-bg:${s.bg};`;
  r+=Lt(s,"dark");
  s=highlighter.getTheme(theme.light);
  r+=`${q("global")}light:${s.fg};`;
  r+=`${q("global")}light-bg:${s.bg};`;
  r+=Lt(s,"light");
}return r}function Lt(t,e){
  e=e!=null?`${e}-`:"";let n="";const r=t.colors?.["gitDecoration.addedResourceForeground"]??t.colors?.["terminal.ansiGreen"];

  if (r!=null) {
    (n += `${q("global")}${e}addition-color:${r};`);
  }

  const s=t.colors?.["gitDecoration.deletedResourceForeground"]??t.colors?.["terminal.ansiRed"];

  if (s!=null) {
    (n += `${q("global")}${e}deletion-color:${s};`);
  }

  const o=t.colors?.["gitDecoration.modifiedResourceForeground"]??t.colors?.["terminal.ansiBlue"];

  if (o!=null) {
    (n += `${q("global")}${e}modified-color:${o};`);
  }

  return n;
}function Zt(t){
  let e=t.children[0];

  while (e!=null) {
    if (e.type==="element"&&e.tagName==="code") {
        return e.children;
      }

    if ("children"in e) {
      e=e.children[0];
    } else {
      e=null;
    }
  }

  console.error(t);
  throw new Error("getLineNodes: Unable to find children");
}function ic({diff,diffStyle,startingLine=0,totalLines=Infinity,expandedHunks,callback}){const i={finalHunk:diff.hunks.at(-1),viewportStart:startingLine,viewportEnd:startingLine+totalLines,isWindowedHighlight:startingLine>0||totalLines<Infinity,splitCount:0,unifiedCount:0,shouldBreak(){
  if (!i.isWindowedHighlight) {
    return false;
  }
  const c=i.unifiedCount>=startingLine+totalLines;
  const u=i.splitCount>=startingLine+totalLines;
  return c&&u
},shouldSkip(c,u){
  if (!i.isWindowedHighlight) {
    return false;
  }
  const h=i.unifiedCount+c<startingLine;
  const d=i.splitCount+u<startingLine;
  return h&&d
},incrementCounts(c,u){
  i.unifiedCount+=c;
  i.splitCount+=u;
},isInWindow(c,u){
  if (!i.isWindowedHighlight) {
    return true;
  }
  const h=i.isInUnifiedWindow(c);
  const d=i.isInSplitWindow(u);
  return h||d
},isInUnifiedWindow(c){return !i.isWindowedHighlight||i.unifiedCount>=startingLine-c&&i.unifiedCount<startingLine+totalLines;},isInSplitWindow(c){return !i.isWindowedHighlight||i.splitCount>=startingLine-c&&i.splitCount<startingLine+totalLines;},emit(c,u=false){
  if (!u) {
    i.incrementCounts(1,1);
  }

  return callback(c)??false;
}};e:for(const[c,u]of diff.hunks.entries()){
  let p=(S, A) => d==null||d.collapsedLines<=0||d.fromStart+d.fromEnd>0?0:A===u.splitLineStart+u.splitLineCount-1?d.collapsedLines:0;

  let b=() => {
    if (h.collapsedLines===0) {
      return 0;
    }const S=h.collapsedLines;
    h.collapsedLines=0;
    return S;
  };

  const l=p;
  const a=b;
  if (i.shouldBreak()) {
    break;
  }
  const h=ar(diff.isPartial,u.collapsedBefore,expandedHunks,c);

  const d=(()=>{
    if (u!==i.finalHunk||!ac(diff)) {
      return;
    }
    const S=diff.additionLines.length-(u.additionLineIndex+u.additionCount);
    const A=diff.deletionLines.length-(u.deletionLineIndex+u.deletionCount);
    if (S!==A) {
      throw new Error(`iterateOverDiff: trailing context mismatch (additions=${S}, deletions=${A}) for ${diff.name}`);
    }const E=Math.min(S,A);return ar(diff.isPartial,E,expandedHunks,diff.hunks.length);
  })();

  const f=h.fromStart+h.fromEnd;
  if (i.shouldSkip(f,f)) {
    i.incrementCounts(f,f);
    b();
  } else {
    let S=u.unifiedLineStart-h.rangeSize;
    let A=u.splitLineStart-h.rangeSize;
    let E=u.deletionLineIndex-h.rangeSize;
    let R=u.additionLineIndex-h.rangeSize;
    let L=u.deletionStart-h.rangeSize;
    let M=u.additionStart-h.rangeSize;
    let $=0;

    while ($<h.fromStart) {if (i.isInWindow(0,0)) {if (i.emit({hunkIndex:c,hunk:u,collapsedBefore:0,collapsedAfter:0,unifiedDeletionLineIndex:S+$,unifiedAdditionLineIndex:S+$,splitLineIndex:A+$,deletionLineIndex:E+$,additionLineIndex:R+$,deletionLineNumber:L+$,additionLineNumber:M+$,type:"context-expanded",noEOFCRAddition:false,noEOFCRDeletion:false})) {
      break e
    }} else {
      i.incrementCounts(1,1);
    }$++}

    S=u.unifiedLineStart-h.fromEnd;
    A=u.splitLineStart-h.fromEnd;
    E=u.deletionLineIndex-h.fromEnd;
    R=u.additionLineIndex-h.fromEnd;
    L=u.deletionStart-h.fromEnd;
    M=u.additionStart-h.fromEnd;

    for ($=0; $<h.fromEnd; ) {if (i.isInWindow(0,0)) {if (i.emit({hunkIndex:c,hunk:u,collapsedBefore:b(),collapsedAfter:0,unifiedDeletionLineIndex:S+$,unifiedAdditionLineIndex:S+$,splitLineIndex:A+$,deletionLineIndex:E+$,additionLineIndex:R+$,deletionLineNumber:L+$,additionLineNumber:M+$,type:"context-expanded",noEOFCRAddition:false,noEOFCRDeletion:false})) {
      break e
    }} else {
      i.incrementCounts(1,1);
    }$++}
  }
  let C=u.unifiedLineStart;
  let g=u.splitLineStart;
  let y=u.deletionLineIndex;
  let m=u.additionLineIndex;
  let _=u.deletionStart;
  let k=u.additionStart;
  const I=u.hunkContent.at(-1);for(const S of u.hunkContent){if (i.shouldBreak()) {
    break e;
  }const A=S===I;if(S.type==="context"){
    if (i.shouldSkip(S.lines,S.lines)) {
      i.incrementCounts(S.lines,S.lines);
      b();
    } else {
      let E=0;

      while (E<S.lines) {if (i.isInWindow(0,0)) {
        const R=A&&E===S.lines-1;
        const L=C+E;
        const M=g+E;
        if (i.emit({hunkIndex:c,hunk:u,collapsedBefore:b(),collapsedAfter:p(L,M),unifiedDeletionLineIndex:L,unifiedAdditionLineIndex:L,splitLineIndex:M,deletionLineIndex:y+E,additionLineIndex:m+E,deletionLineNumber:_+E,additionLineNumber:k+E,type:"context",noEOFCRAddition:R&&u.noEOFCRAdditions,noEOFCRDeletion:R&&u.noEOFCRDeletions})) {
          break e
        }
      } else {
        i.incrementCounts(1,1);
      }E++}
    }
    C+=S.lines;
    g+=S.lines;
    y+=S.lines;
    m+=S.lines;
    _+=S.lines;
    k+=S.lines;
  }else{
    const E=Math.max(S.deletions,S.additions);
    const R=S.deletions+S.additions;
    if(!i.shouldSkip(R,E)){const L=lc(i,S);for (const[M,$] of L) {
      for(let U=M;U<$;U++){const te=p(C+U,g+U);if (i.emit(cc({hunkIndex:c,hunk:u,collapsedBefore:b(),collapsedAfter:te,diffStyle:diffStyle,index:U,unifiedLineIndex:C,splitLineIndex:g,additionLineIndex:m,deletionLineIndex:y,additionLineNumber:k,deletionLineNumber:_,content:S,isLastContent:A,unifiedCount:R,splitCount:E}),true)) {
        break e
      }}
    }}
    b();
    i.incrementCounts(R,E);
    C+=R;
    g+=E;
    y+=S.deletions;
    m+=S.additions;
    _+=S.deletions;
    k+=S.additions;
  }}if(d!=null){
  const {collapsedLines,fromStart,fromEnd}=d;
  const R=fromStart+fromEnd;
  let L=0;

  while (L<R) {if (i.shouldBreak()) {
        break e;
      }if (i.isInWindow(0,0)) {const M=L===R-1;if (i.emit({hunkIndex:diff.hunks.length,hunk:void 0,collapsedBefore:0,collapsedAfter:M?collapsedLines:0,unifiedDeletionLineIndex:C+L,unifiedAdditionLineIndex:C+L,splitLineIndex:g+L,additionLineIndex:m+L,deletionLineIndex:y+L,additionLineNumber:k+L,deletionLineNumber:_+L,type:"context-expanded",noEOFCRAddition:false,noEOFCRDeletion:false})) {
        break e
      }} else {
        i.incrementCounts(1,1);
      }L++}
}
}}function ar(t,e,n,r){
  e=Math.max(e,0);

  if (e===0||t) {
    return{fromStart:0,fromEnd:0,rangeSize:e,collapsedLines:Math.max(e,0)};
  }

  if (n===true) {
    return{fromStart:e,fromEnd:0,rangeSize:e,collapsedLines:0};
  }
  const s=n?.get(r);
  const o=Math.min(Math.max(s?.fromStart??0,0),e);
  const i=Math.min(Math.max(s?.fromEnd??0,0),e);
  const l=o+i;
  const a=l>=e;
  return{fromStart:a?e:o,fromEnd:a?0:i,rangeSize:e,collapsedLines:Math.max(e-l,0)}
}function ac(t){const e=t.hunks.at(-1);return e==null||t.isPartial||t.additionLines.length===0||t.deletionLines.length===0?false:e.additionLineIndex+e.additionCount<t.additionLines.length||e.deletionLineIndex+e.deletionCount<t.deletionLines.length;}function lc(t,e,n){
  if (!t.isWindowedHighlight) {
    return[[0,Math.max(e.deletions,e.additions)]];
  }const r=[];function s(a,c){
    if (a+c<=t.viewportStart||a>=t.viewportEnd) {
      return;
    }
    const u=Math.max(0,t.viewportStart-a);
    const h=Math.min(c,t.viewportEnd-a);
    return h>u?[u,h]:void 0
  }function o(a,c){return a}function i(a,c){
  if (a==null) {
      return;
    }const[u,h]=o(a);

  if (h>u) {
    r.push([u,h]);
  }
}
  i(s(t.unifiedCount,e.deletions));
  i(s(t.unifiedCount+e.deletions,e.additions));
  i(s(t.splitCount,e.deletions));
  i(s(t.splitCount,e.additions));

  if (r.length===0) {
    return r;
  }

  r.sort((a, c) => a[0]-c[0]);const l=[r[0]];for(const[a,c]of r.slice(1)){
  const u=l[l.length-1];

  if (a<=u[1]) {
    u[1]=Math.max(u[1],c);
  } else {
    l.push([a,c]);
  }
}return l
}function cc({hunkIndex,hunk,collapsedAfter,collapsedBefore,diffStyle,index,unifiedLineIndex,splitLineIndex,additionLineIndex,deletionLineIndex,additionLineNumber,deletionLineNumber,content,isLastContent,unifiedCount,splitCount}){return {type:"change",hunkIndex:hunkIndex,hunk:hunk,collapsedAfter:collapsedAfter,collapsedBefore:collapsedBefore,unifiedDeletionLineIndex:index<content.deletions?unifiedLineIndex+index:void 0,unifiedAdditionLineIndex:index<content.additions?unifiedLineIndex+content.deletions+index:void 0,splitLineIndex:splitLineIndex+index,additionLineIndex:index<content.additions?additionLineIndex+index:void 0,additionLineNumber:index<content.additions?additionLineNumber+index:void 0,deletionLineIndex:index<content.deletions?deletionLineIndex+index:void 0,deletionLineNumber:index<content.deletions?deletionLineNumber+index:void 0,noEOFCRDeletion:isLastContent&&index===splitCount-1&&hunk.noEOFCRDeletions,noEOFCRAddition:isLastContent&&index===splitCount-1&&hunk.noEOFCRAdditions};}function lr({line,spanStart,spanLength}){return {start:{line:line,character:spanStart},end:{line:line,character:spanStart+spanLength},properties:{"data-diff-span":""},alwaysWrap:true};}function He({item,arr,enableJoin,isNeutral=false,isLastItem=false}){const o=arr[arr.length-1];if(o==null||isLastItem||!enableJoin){arr.push([isNeutral?0:1,item.value]);return}const i=o[0]===0;if(isNeutral===i||isNeutral&&item.value.length===1&&!i){o[1]+=item.value;return}arr.push([isNeutral?0:1,item.value])}const uc={forcePlainText:false};function hc(t,e,n,{forcePlainText:r,startingLine:s,totalLines:o,expandedHunks:i}=uc){
  if (r) {
    s??=0;
    o??=Infinity;
  } else {
    s=0;
    o=Infinity;
  }

  const l=s>0||o<Infinity;

  const a=(()=>{const g=n.theme??Be;if (typeof g=="string") {
    return e.getTheme(g).type
  }})();

  const c=ys({theme:n.theme,highlighter:e});
  const u=r&&!l&&(t.unifiedLineCount>1000/* 1e3 */||t.splitLineCount>1000/* 1e3 */)?"none":n.lineDiffType;
  const h={deletionLines:[],additionLines:[]};
  const d=!r&&!t.isPartial;
  const f=r?i:void 0;
  const p=new Map;
  function b(g){
    const y=d?0:g;
    const m=p.get(y)??fc();
    p.set(y,m);
    return m;
  }function C(g,y,m,_){if(l){
    let k=m.at(-1);

    if ((k==null || k.targetIndex+k.count!==y)) {
      k={targetIndex:y,originalOffset:_.length,count:0};
      m.push(k);
    }

    k.count++;
  }_.push(g)}ic({diff:t,diffStyle:"both",startingLine:s,totalLines:o,expandedHunks:l?f:true,callback:({hunkIndex,additionLineIndex,deletionLineIndex,additionLineNumber,deletionLineNumber,unifiedAdditionLineIndex,unifiedDeletionLineIndex,splitLineIndex,type})=>{
    const R=b(hunkIndex);

    if (type==="change"&&u!=="none"&&additionLineIndex!=null&&deletionLineIndex!=null) {
      dc({additionLine:t.additionLines[y],deletionLine:t.deletionLines[m],deletionLineIndex:R.deletionContent.length,additionLineIndex:R.additionContent.length,deletionDecorations:R.deletionDecorations,additionDecorations:R.additionDecorations,lineDiffType:u});
    }

    if (deletionLineIndex!=null&&deletionLineNumber!=null&&unifiedDeletionLineIndex!=null) {
      C(t.deletionLines[m],deletionLineIndex,R.deletionSegments,R.deletionContent);
      R.deletionInfo.push({type:type==="change"?"change-deletion":type,lineNumber:deletionLineNumber,altLineNumber:type==="change"?void 0:additionLineNumber??void 0,lineIndex:`${unifiedDeletionLineIndex},${splitLineIndex}`});
    }

    if (additionLineIndex!=null&&additionLineNumber!=null&&unifiedAdditionLineIndex!=null) {
      C(t.additionLines[y],additionLineIndex,R.additionSegments,R.additionContent);
      R.additionInfo.push({type:type==="change"?"change-addition":type,lineNumber:additionLineNumber,altLineNumber:type==="change"?void 0:deletionLineNumber??void 0,lineIndex:`${unifiedAdditionLineIndex},${splitLineIndex}`});
    }
  }});for(const g of p.values()){
      if (g.deletionContent.length===0&&g.additionContent.length===0) {
        continue;
      }
      const y={name:t.prevName??t.name,contents:g.deletionContent.value};
      const m={name:t.name,contents:g.additionContent.value};
      const {deletionLines,additionLines}=pc({deletionFile:y,deletionInfo:g.deletionInfo,deletionDecorations:g.deletionDecorations,additionFile:m,additionInfo:g.additionInfo,additionDecorations:g.additionDecorations,highlighter:e,options:n,languageOverride:r?"text":t.lang});
      if(d){
        h.deletionLines=deletionLines;
        h.additionLines=additionLines;
        continue
      }if (g.deletionSegments.length>0) {
        for (const I of g.deletionSegments) {
          for (let S=0; S<I.count; S++) {
            h.deletionLines[I.targetIndex+S]=deletionLines[I.originalOffset+S];
          }
        }
      } else {
        h.deletionLines.push(...deletionLines);
      }if (g.additionSegments.length>0) {
        for (const I of g.additionSegments) {
          for (let S=0; S<I.count; S++) {
            h.additionLines[I.targetIndex+S]=additionLines[I.originalOffset+S];
          }
        }
      } else {
        h.additionLines.push(...additionLines)
      }
    }return{code:h,themeStyles:c,baseThemeType:a}
}function dc({deletionLine,additionLine,deletionLineIndex,additionLineIndex,deletionDecorations,additionDecorations,lineDiffType}){
  if (deletionLine==null||additionLine==null||lineDiffType==="none") {
    return;
  }
  deletionLine=Me(deletionLine);
  additionLine=Me(additionLine);
  const l=lineDiffType==="char"?Zl(deletionLine,additionLine):Jl(deletionLine,additionLine);
  const a=[];
  const c=[];
  const u=lineDiffType==="word-alt";
  const h=l.at(-1);
  for(const f of l){
    const p=f===h;

    if (!f.added&&!f.removed) {
      He({item:f,arr:a,enableJoin:u,isNeutral:true,isLastItem:p});
      He({item:f,arr:c,enableJoin:u,isNeutral:true,isLastItem:p});
    } else if (f.removed) {
      He({item:f,arr:a,enableJoin:u,isLastItem:p});
    } else {
      He({item:f,arr:c,enableJoin:u,isLastItem:p});
    }
  }let d=0;for (const f of a) {
  if (f[0]===1) {
    deletionDecorations.push(lr({line:deletionLineIndex,spanStart:d,spanLength:f[1].length}));
  }

  d+=f[1].length;
}d=0;for (const f of c) {
  if (f[0]===1) {
    additionDecorations.push(lr({line:additionLineIndex,spanStart:d,spanLength:f[1].length}));
  }

  d+=f[1].length;
}
}function fc(){return {deletionContent:{push(t){
  this.value+=t;
  this.length++;
},value:"",length:0},additionContent:{push(t){
  this.value+=t;
  this.length++;
},value:"",length:0},deletionInfo:[],additionInfo:[],deletionDecorations:[],additionDecorations:[],deletionSegments:[],additionSegments:[]};}function pc({deletionFile,additionFile,deletionInfo,additionInfo,highlighter,deletionDecorations,additionDecorations,languageOverride,options:{theme:a=Be,...c}}){
  const u=languageOverride??Kt(deletionFile.name);
  const h=languageOverride??Kt(additionFile.name);
  const {state,transformers}=ms();
  const p=typeof a=="string"?{...c,lang:"text",theme:a,transformers:transformers,decorations:void 0,defaultColor:false,cssVariablePrefix:q("token")}:{...c,lang:"text",themes:a,transformers:transformers,decorations:void 0,defaultColor:false,cssVariablePrefix:q("token")};
  return {deletionLines:deletionFile.contents===""?[]:(p.lang=u,state.lineInfo=deletionInfo,p.decorations=deletionDecorations,Zt(highlighter.codeToHast(Me(deletionFile.contents),p))),additionLines:additionFile.contents===""?[]:(p.lang=h,p.decorations=additionDecorations,state.lineInfo=additionInfo,Zt(highlighter.codeToHast(Me(additionFile.contents),p)))};
}function gc(t,e,{theme=Be,tokenizeMaxLineLength},s=false){
  const {state,transformers}=ms();
  const l=s?"text":t.lang??Kt(t.name);

  const a=(()=>{if (typeof theme=="string") {
    return e.getTheme(theme).type;
  }})();

  const c=ys({theme:theme,highlighter:e});
  state.lineInfo=h => ({
    type:"context",
    lineIndex:h-1,
    lineNumber:h
  });const u=typeof theme=="string"?{lang:l,theme:theme,transformers:transformers,defaultColor:false,cssVariablePrefix:q("token"),tokenizeMaxLineLength:tokenizeMaxLineLength}:{lang:l,themes:theme,transformers:transformers,defaultColor:false,cssVariablePrefix:q("token"),tokenizeMaxLineLength:tokenizeMaxLineLength};return{code:Zt(e.codeToHast(Me(t.contents),u)),themeStyles:c,baseThemeType:a}
}
let cr;
let Ce={theme:Be,tokenizeMaxLineLength:1000/* 1e3 */,lineDiffType:"word-alt"};
self.addEventListener("error",t=>{console.error("[Shiki Worker] Unhandled error:",t.error)});self.addEventListener("message",t=>{const e=t.data;try{switch(e.type){case "initialize":
  {
    mc(e);break;
  }case "set-render-options":
  {
    yc(e);break;
  }case "file":
  {
    bc(e);break;
  }case "diff":
  {
    wc(e);break;
  }default:
  {
    throw new Error(`Unknown request type: ${e.type}`)
  }}}catch(n){
  console.error("Worker error:",n);
  Sc(e.id,n);
}});function mc({id,renderOptions,resolvedThemes,resolvedLanguages}){
  const s=dt();
  gs(resolvedThemes,s);

  if (resolvedLanguages!=null) {
    fn(resolvedLanguages,s);
  }

  Ce=renderOptions;
  postMessage({type:"success",id:id,requestType:"initialize",sentAt:Date.now()});
}function yc({id,renderOptions,resolvedThemes}){
  gs(resolvedThemes,dt());
  Ce=renderOptions;
  postMessage({type:"success",id:id,requestType:"set-render-options",sentAt:Date.now()});
}function bc({id,file,resolvedLanguages}){
  const r=dt();

  if (resolvedLanguages!=null) {
    fn(resolvedLanguages,r);
  }

  const s={theme:Ce.theme,tokenizeMaxLineLength:Ce.tokenizeMaxLineLength};Cc(id,gc(file,r,s),s)
}function wc({id,diff,resolvedLanguages}){
  const r=dt();

  if (resolvedLanguages!=null) {
    fn(resolvedLanguages,r);
  }

  _c(id,hc(diff,r,Ce),Ce);
}function dt(){
  cr??=Vl({themes:[],langs:[],engine:si()});
  return cr;
}function Cc(t,e,n){postMessage({type:"success",requestType:"file",id:t,result:e,options:n,sentAt:Date.now()})}function _c(t,e,n){postMessage({type:"success",requestType:"diff",id:t,result:e,options:n,sentAt:Date.now()})}function Sc(t,e){const n={type:"error",id:t,error:e instanceof Error?e.message:String(e),stack:e instanceof Error?e.stack:void 0};postMessage(n)}
//# sourceMappingURL=worker-CJ6-3-tZ.js.map
