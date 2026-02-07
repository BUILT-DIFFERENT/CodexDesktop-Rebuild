import{df as df_1,dg as dg_1,c4,c$,c8,c5,bl as bl_1,bm as bm_1,cR,cU,cV,cS,d4,bo as bo_1,bp as bp_1,c6,c0,_}from"./index-CgwAo6pj.js";import{k,j as j_1,g,S,w as w_1,x,c,v as v_1,y,l,v_1 as v_1_1,A,B as B_1,d as C_1,a,d,i,r,f,bp_1 as bp_1_1}from"./_baseUniq-DqA0xXry.js";import{j as j_2,m,d as d_1,f as f_1,g as g_1,h,i as i_1,l as l_1,e}from"./_basePickBy-D-jIhBTu.js";import{c as c_1}from"./clone-M7Y9qM5V.js";
var qc=Object.prototype;
var Yc=qc.hasOwnProperty;

var ke=df_1(function(n,e){if(dg_1(e)||c4(e)){c$(e,k(e),n);return}for (var t in e) {
    if (Yc.call(e,t)) {
        c8(n,t,e[t]);
    }
}});

function _l(n,e,t){
    var r=-1;
    var i=n.length;

    if (e<0) {
        (e = -e>i?0:i+e);
    }

    t=t>i?i:t;

    if (t<0) {
        (t += i);
    }

    i=e>t?0:t-e>>>0;
    e>>>=0;
    var s=Array(i);

    while (++r<i) {
        s[r]=n[r+e];
    }

    return s
}function Zn(n){
    var r=0;
    var i=[];
    for(var e=-1, t=n==null?0:n.length;++e<t;){
        var s=n[e];

        if (s) {
            (i[r++] = s);
        }
    }return i
}function Xc(n,e,t,r){for(var i=-1,s=n==null?0:n.length;++i<s;){var a=n[i];e(r,a,t(a),n)}return r}function Jc(n,e,t,r){
    j_1(n,function(i,s,a){e(r,i,t(i),a)});
    return r;
}function Qc(n,e){return function(t,r){
    var i=c5(t)?Xc:Jc;
    var s=e?e():{};
    return i(t,n,g(r),s);
};}var Zc=200;function ed(n,e,t,r){
    var i=-1;
    var s=w_1;
    var a=true;
    var o=n.length;
    var l=[];
    var u=e.length;
    if (!o) {
        return l;
    }

    if (e.length>=Zc) {
        s=x;
        a=false;
        e=new S(e);
    }

    e:
    while (++i<o) {
            var c=n[i];
            var d=c;
            c=c!==0?c:0;

            if (a&&d===d) {for (var h=u; h--; ) {
                if (e[h]===d) {
                    continue e;
                }
            }l.push(c)} else {
                if (!s(e,d,r)) {
                    l.push(c);
                }
            }
        }return l
}var hi=bl_1(function(n,e){return bm_1(n)?ed(n,c(e,1,bm_1,true)):[];});function Q(n,e,t){var r=n==null?0:n.length;return r?(e=e===void 0?1:j_2(e),_l(n,e<0?0:e,r)):[];}function Yn(n,e,t){var r=n==null?0:n.length;return r?(e=e===void 0?1:j_2(e),e=r-e,_l(n,0,e<0?0:e)):[];}function td(n,e){for (var t=-1,r=n==null?0:n.length; ++t<r; ) {
    if (!e(n[t],t,n)) {
        return false;
    }
}return true;}function nd(n,e){
    var t=true;

    j_1(n,function(r,i,s){
        t=!!e(r,i,s);
        return t;
    });

    return t;
}function be(n,e,t){var r=c5(n)?td:nd;return r(n,g(e));}function Pe(n){return n&&n.length?n[0]:void 0}function Ee(n,e){return c(m(n,e));}
var rd=Object.prototype;
var id=rd.hasOwnProperty;
var sd=Qc(function(n,e,t){
    if (id.call(n,t)) {
        n[t].push(e);
    } else {
        cR(n,t,[e]);
    }
});
var ad="[object String]";
function he(n){return typeof n=="string"||!c5(n)&&cU(n)&&cV(n)==ad;}var od=Math.max;function de(n,e,t,r){
    n=c4(n)?n:v_1(n);
    t=t?j_2(t):0;
    var i=n.length;

    if (t<0) {
        (t = od(i+t,0));
    }

    return he(n)?t<=i&&n.indexOf(e,t)>-1:!!i&&y(n,e,t)>-1;
}function Ra(n,e,t){var r=n==null?0:n.length;if (!r) {
    return-1;
}var i=0;return y(n,e,i);}var ld="[object RegExp]";function ud(n){return cU(n)&&cV(n)==ld;}
var va=d4&&d4.isRegExp;
var Xe=va?cS(va):ud;
var cd="Expected a function";
function dd(n){if (typeof n!="function") {
    throw new TypeError(cd);
}return function(...args) {var e=args;switch(e.length){case 0:
    {
        return!n.call(this);
    }case 1:
    {
        return!n.call(this,e[0]);
    }case 2:
    {
        return!n.call(this,e[0],e[1]);
    }case 3:
    {
        return!n.call(this,e[0],e[1],e[2])
    }}return!n.apply(this,e)};}function Me(n,e){
    if (n==null) {
        return{};
    }var t=l(v_1_1(n),function(r){return[r]});
    e=g(e);
    return d_1(n,t,function(r,i){return e(r,i[0])});
}function pi(n,e){var t=c5(n)?A:B_1;return t(n,dd(g(e)));}function fd(n,e){
    var t;

    j_1(n,function(r,i,s){
        t=e(r,i,s);
        return !t;
    });

    return !!t;
}function Ll(n,e,t){var r=c5(n)?C_1:fd;return r(n,g(e));}function Ks(n){return n&&n.length?a(n):[];}function hd(n,e){return n&&n.length?a(n,g(e)):[];}function ae(n){return typeof n=="object"&&n!==null&&typeof n.$type=="string"}function Ue(n){return typeof n=="object"&&n!==null&&typeof n.$refText=="string"}function pd(n){return typeof n=="object"&&n!==null&&typeof n.name=="string"&&typeof n.type=="string"&&typeof n.path=="string"}function Nr(n){return typeof n=="object"&&n!==null&&ae(n.container)&&Ue(n.reference)&&typeof n.message=="string"}class Ol{constructor(){
    this.subtypes={};
    this.allSubtypes={};
}isInstance(e,t){return ae(e)&&this.isSubtype(e.$type,t)}isSubtype(e,t){
    if (e===t) {
        return true;
    }let r=this.subtypes[e];

    if (!r) {
        (r = this.subtypes[e]={});
    }

    const i=r[t];if (i!==void 0) {
        return i;
    }{
        const s=this.computeIsSubtype(e,t);
        r[t]=s;
        return s;
    }
}getAllSubTypes(e){const t=this.allSubtypes[e];if (t) {
    return t;
}{
    const r=this.getAllTypes();
    const i=[];
    for (const s of r) {
        if (this.isSubtype(s,e)) {
            i.push(s);
        }
    }
    this.allSubtypes[e]=i;
    return i;
}}}function Xn(n){return typeof n=="object"&&n!==null&&Array.isArray(n.content)}function bl(n){return typeof n=="object"&&n!==null&&typeof n.tokenType=="object"}function Pl(n){return Xn(n)&&typeof n.fullText=="string"}class Z{constructor(e,t){
    this.startFn=e;
    this.nextFn=t;
}iterator(){const e={state:this.startFn(),next:() => {
    return this.nextFn(e.state);
},[Symbol.iterator]:() => {
    return e;
}};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){
    const e=this.iterator();
    let t=0;
    let r=e.next();

    while (!r.done) {
        t++;
        r=e.next();
    }

    return t
}toArray(){
    const e=[];
    const t=this.iterator();
    let r;do {
    r=t.next();

    if (r.value!==void 0) {
        e.push(r.value);
    }
} while (!r.done);return e
}toSet(){return new Set(this)}toMap(e,t){const r=this.map(i => {
    return [e?e(i):i,t?t(i):i];
});return new Map(r)}toString(){return this.join()}concat(e){return new Z(() => {
    return ({
        first:this.startFn(),
        firstDone:false,
        iterator:e[Symbol.iterator]()
    });
},t=>{let r;if(!t.firstDone){do {
    r=this.nextFn(t.first);

    if (!r.done) {
        return r;
    }
} while (!r.done);t.firstDone=true}do {
    r=t.iterator.next();

    if (!r.done) {
        return r;
    }
} while (!r.done);return ve});}join(e=","){
    const t=this.iterator();
    let r="";
    let i;
    let s=false;
    do {
        i=t.next();

        if (!i.done) {
            s&&(r+=e);
            r+=md(i.value);
        }

        s=true;
    } while (!i.done);return r
}indexOf(e,t=0){
    const r=this.iterator();
    let i=0;
    let s=r.next();

    while (!s.done) {
        if (i>=t&&s.value===e) {
            return i;
        }
        s=r.next();
        i++;
    }

    return-1
}every(e){
    const t=this.iterator();let r=t.next();

    while (!r.done) {if (!e(r.value)) {
        return false;
    }r=t.next()}

    return true;
}some(e){
    const t=this.iterator();let r=t.next();

    while (!r.done) {if (e(r.value)) {
        return true;
    }r=t.next()}

    return false;
}forEach(e){
    const t=this.iterator();
    let r=0;
    let i=t.next();

    while (!i.done) {
        e(i.value,r);
        i=t.next();
        r++;
    }
}map(e){return new Z(this.startFn,t=>{const{done,value}=this.nextFn(t);return done?ve:{done:false,value:e(value)};});}filter(e){return new Z(this.startFn,t=>{let r;do {
    r=this.nextFn(t);

    if (!r.done&&e(r.value)) {
        return r;
    }
} while (!r.done);return ve});}nonNullable(){return this.filter(e => {
    return e!=null;
});}reduce(e,t){
    const r=this.iterator();
    let i=t;
    let s=r.next();

    while (!s.done) {
        if (i===void 0) {
            i=s.value;
        } else {
            i=e(i,s.value);
        }

        s=r.next();
    }

    return i
}reduceRight(e,t){return this.recursiveReduce(this.iterator(),e,t)}recursiveReduce(e,t,r){const i=e.next();if (i.done) {
    return r;
}const s=this.recursiveReduce(e,t,r);return s===void 0?i.value:t(s,i.value)}find(e){
    const t=this.iterator();let r=t.next();

    while (!r.done) {if (e(r.value)) {
        return r.value;
    }r=t.next()}
}findIndex(e){
    const t=this.iterator();
    let r=0;
    let i=t.next();

    while (!i.done) {
        if (e(i.value)) {
            return r;
        }
        i=t.next();
        r++;
    }

    return-1
}includes(e){
    const t=this.iterator();let r=t.next();

    while (!r.done) {if (r.value===e) {
        return true;
    }r=t.next()}

    return false;
}flatMap(e){return new Z(() => {
    return ({
        this:this.startFn()
    });
},t=>{do{if(t.iterator){const s=t.iterator.next();if (s.done) {
    t.iterator=void 0;
} else {
    return s
}}const{done,value}=this.nextFn(t.this);if(!done){const s=e(value);if (Wr(s)) {
    t.iterator=s[Symbol.iterator]();
} else {
    return {done:false,value:s};
}}}while(t.iterator);return ve});}flat(e = 1) {
    if (e<=0) {
        return this;
    }

    const t=e>1?this.flat(e-1):this;return new Z(() => {
            return ({
                this:t.startFn()
            });
        },r=>{do{if(r.iterator){const a=r.iterator.next();if (a.done) {
            r.iterator=void 0;
        } else {
            return a
        }}const{done,value}=t.nextFn(r.this);if (!done) {
            if (Wr(value)) {
                r.iterator=value[Symbol.iterator]();
            } else {
                return {done:false,value:value};
            }
        }}while(r.iterator);return ve});
}head(){const t=this.iterator().next();if (!t.done) {
    return t.value
}}tail(e=1){return new Z(()=>{const t=this.startFn();for (let r=0; r<e; r++) {
    if (this.nextFn(t).done) {
        return t;
    }
}return t},this.nextFn);}limit(e){return new Z(() => {
    return ({
        size:0,
        state:this.startFn()
    });
},t => {
    t.size++;
    return t.size>e?ve:this.nextFn(t.state);
});}distinct(e){return new Z(() => {
    return ({
        set:new Set,
        internalState:this.startFn()
    });
},t=>{let r;do {
    r=this.nextFn(t.internalState);

    if (!r.done) {const i=e?e(r.value):r.value;if (!t.set.has(i)) {
        t.set.add(i);
        return r;
    }}
} while (!r.done);return ve});}exclude(e,t){const r=new Set;for(const i of e){const s=t?t(i):i;r.add(s)}return this.filter(i=>{const s=t?t(i):i;return!r.has(s)})}}function md(n){return typeof n=="string"?n:typeof n === "undefined"?"undefined":typeof n.toString=="function"?n.toString():Object.prototype.toString.call(n);}function Wr(n){return!!n&&typeof n[Symbol.iterator]=="function"}

const gd=new Z(()=>{},() => {
    return ve;
});

const ve=Object.freeze({done:true,value:void 0});
function ee(...n){if(n.length===1){const e=n[0];if (e instanceof Z) {
    return e;
}if (Wr(e)) {
    return new Z(() => {
        return e[Symbol.iterator]();
    },t => {
        return t.next();
    });
}if (typeof e.length=="number") {
    return new Z(() => {
        return ({
            index:0
        });
    },t => {
        return t.index<e.length?{done:false,value:e[t.index++]}:ve;
    });
}}return n.length>1?new Z(() => {
    return ({
        collIndex:0,
        arrIndex:0
    });
},e=>{do{if(e.iterator){const t=e.iterator.next();if (!t.done) {
    return t;
}e.iterator=void 0}if(e.array){
    if (e.arrIndex<e.array.length) {
        return {done:false,value:e.array[e.arrIndex++]};
    }
    e.array=void 0;
    e.arrIndex=0;
}if(e.collIndex<n.length){
    const t=n[e.collIndex++];

    if (Wr(t)) {
        e.iterator=t[Symbol.iterator]();
    } else if (t&&typeof t.length=="number") {
        (e.array = t);
    }
}}while(e.iterator||e.array||e.collIndex<n.length);return ve}):gd;}class Ws extends Z{constructor(e,t,r){super(() => {
    return ({
        iterators:r?.includeRoot?[[e][Symbol.iterator]()]:[t(e)[Symbol.iterator]()],
        pruned:false
    });
},i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=false);i.iterators.length>0;){const a=i.iterators[i.iterators.length-1].next();if (a.done) {
    i.iterators.pop();
} else {
    i.iterators.push(t(a.value)[Symbol.iterator]());
    return a;
}}return ve})}iterator(){const e={state:this.startFn(),next:() => {
    return this.nextFn(e.state);
},prune:()=>{e.state.pruned=true},[Symbol.iterator]:() => {
    return e;
}};return e}}var is;(function(n){function e(s){return s.reduce((a, o) => {
    return a+o;
},0);}n.sum=e;function t(s){return s.reduce((a, o) => {
    return a*o;
},0);}n.product=t;function r(s){return s.reduce((a, o) => {
    return Math.min(a,o);
});}n.min=r;function i(s){return s.reduce((a, o) => {
    return Math.max(a,o);
});}n.max=i})(is||(is={}));function ss(n){return new Ws(n,e => {
    return Xn(e)?e.content:[];
},{includeRoot:true});}function yd(n,e){
    while (n.container) {
        n=n.container;

        if (n===e) {
            return true;
        }
    }

    return false;
}function as(n){return{start:{character:n.startColumn-1,line:n.startLine-1},end:{character:n.endColumn,line:n.endLine-1}}}function jr(n){if (!n) {
    return;
}const{offset,end,range}=n;return {range:range,offset:offset,end:end,length:end-offset};}var He = {
    Before: 0,
    After: 1,
    OverlapFront: 2,
    OverlapBack: 3,
    Inside: 4,
    Outside: 5,

    // reverse mapping
    0: "Before",

    1: "After",
    2: "OverlapFront",
    3: "OverlapBack",
    4: "Inside",
    5: "Outside"
};function Td(n,e){
    if (n.end.line<e.start.line||n.end.line===e.start.line&&n.end.character<=e.start.character) {
        return He.Before;
    }if (n.start.line>e.end.line||n.start.line===e.end.line&&n.start.character>=e.end.character) {
            return He.After;
        }
    const t=n.start.line>e.start.line||n.start.line===e.start.line&&n.start.character>=e.start.character;
    const r=n.end.line<e.end.line||n.end.line===e.end.line&&n.end.character<=e.end.character;

    if (t&&r) {
        return He.Inside;
    }

    if (t) {
        return He.OverlapBack;
    }

    if (r) {
        return He.OverlapFront;
    }

    return He.Outside;
}function Rd(n,e){return Td(n,e)>He.After}const vd=/^[\w\p{L}]$/u;function Ad(n,e){if(n){const t=Ed(n,true);if (t&&Aa(t,e)) {
    return t;
}if(Pl(n)){const r=n.content.findIndex(i => {
    return !i.hidden;
});for(let i=r-1;i>=0;i--){const s=n.content[i];if (Aa(s,e)) {
    return s
}}}}}function Aa(n,e){return bl(n)&&e.includes(n.tokenType.name)}function Ed(n,e=true){
    while (n.container) {
        const t=n.container;let r=t.content.indexOf(n);

        while (r>0) {r--;const i=t.content[r];if (e||!i.hidden) {
            return i
        }}

        n=t
    }
}class Ml extends Error{constructor(e,t){super(e?`${t} at ${e.range.start.line}:${e.range.start.character}`:t)}}function er(n){throw new Error("Error! The input value was not handled.")}
const or="AbstractRule";
const lr="AbstractType";
const wi="Condition";
const Ea="TypeDefinition";
const _i="ValueLiteral";
const fn="AbstractElement";
function kd(n){return M.isInstance(n,fn)}
const ur="ArrayLiteral";
const cr="ArrayType";
const hn="BooleanLiteral";
function $d(n){return M.isInstance(n,hn)}const pn="Conjunction";function xd(n){return M.isInstance(n,pn)}const mn="Disjunction";function Sd(n){return M.isInstance(n,mn)}
const dr="Grammar";
const Li="GrammarImport";
const gn="InferredType";
function Dl(n){return M.isInstance(n,gn)}const yn="Interface";function Fl(n){return M.isInstance(n,yn)}
const Oi="NamedArgument";
const Tn="Negation";
function Id(n){return M.isInstance(n,Tn)}
const fr="NumberLiteral";
const hr="Parameter";
const Rn="ParameterReference";
function Cd(n){return M.isInstance(n,Rn)}const vn="ParserRule";function we(n){return M.isInstance(n,vn)}
const pr="ReferenceType";
const wr="ReturnType";
function Nd(n){return M.isInstance(n,wr)}const An="SimpleType";function wd(n){return M.isInstance(n,An)}
const mr="StringLiteral";
const Nt="TerminalRule";
function kt(n){return M.isInstance(n,Nt)}const En="Type";function Gl(n){return M.isInstance(n,En)}
const bi="TypeAttribute";
const gr="UnionType";
const kn="Action";
function mi(n){return M.isInstance(n,kn)}const $n="Alternatives";function Ul(n){return M.isInstance(n,$n)}const xn="Assignment";function gt(n){return M.isInstance(n,xn)}const Sn="CharacterRange";function _d(n){return M.isInstance(n,Sn)}const In="CrossReference";function js(n){return M.isInstance(n,In)}const Cn="EndOfFile";function Ld(n){return M.isInstance(n,Cn)}const Nn="Group";function Hs(n){return M.isInstance(n,Nn)}const wn="Keyword";function yt(n){return M.isInstance(n,wn)}const _n="NegatedToken";function Od(n){return M.isInstance(n,_n)}const Ln="RegexToken";function bd(n){return M.isInstance(n,Ln)}const On="RuleCall";function Tt(n){return M.isInstance(n,On)}const bn="TerminalAlternatives";function Pd(n){return M.isInstance(n,bn)}const Pn="TerminalGroup";function Md(n){return M.isInstance(n,Pn)}const Mn="TerminalRuleCall";function Dd(n){return M.isInstance(n,Mn)}const Dn="UnorderedGroup";function Bl(n){return M.isInstance(n,Dn)}const Fn="UntilToken";function Fd(n){return M.isInstance(n,Fn)}const Gn="Wildcard";function Gd(n){return M.isInstance(n,Gn)}class Vl extends Ol{getAllTypes(){return[fn,or,lr,kn,$n,ur,cr,xn,hn,Sn,wi,pn,In,mn,Cn,dr,Li,Nn,gn,yn,wn,Oi,_n,Tn,fr,hr,Rn,vn,pr,Ln,wr,On,An,mr,bn,Pn,Nt,Mn,En,bi,Ea,gr,Dn,Fn,_i,Gn]}computeIsSubtype(e,t){switch(e){case kn:case $n:case xn:case Sn:case In:case Cn:case Nn:case wn:case _n:case Ln:case On:case bn:case Pn:case Mn:case Dn:case Fn:case Gn:
    {
        return this.isSubtype(fn,t);
    }case ur:case fr:case mr:
    {
        return this.isSubtype(_i,t);
    }case cr:case pr:case An:case gr:
    {
        return this.isSubtype(Ea,t);
    }case hn:
    {
        return this.isSubtype(wi,t)||this.isSubtype(_i,t);
    }case pn:case mn:case Tn:case Rn:
    {
        return this.isSubtype(wi,t);
    }case gn:case yn:case En:
    {
        return this.isSubtype(lr,t);
    }case vn:
    {
        return this.isSubtype(or,t)||this.isSubtype(lr,t);
    }case Nt:
    {
        return this.isSubtype(or,t);
    }default:
    {
        return false;
    }}}getReferenceType(e){const t=`${e.container.$type}:${e.property}`;switch(t){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case "SimpleType:typeRef":
    {
        return lr;
    }case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case "RuleCall:rule":
    {
        return or;
    }case "Grammar:usedGrammars":
    {
        return dr;
    }case"NamedArgument:parameter":case "ParameterReference:parameter":
    {
        return hr;
    }case "TerminalRuleCall:rule":
    {
        return Nt;
    }default:
    {
        throw new Error(`${t} is not a valid reference id.`)
    }}}getTypeMetaData(e){switch(e){case fn:
    {
        return{name:fn,properties:[{name:"cardinality"},{name:"lookahead"}]};
    }case ur:
    {
        return{name:ur,properties:[{name:"elements",defaultValue:[]}]};
    }case cr:
    {
        return{name:cr,properties:[{name:"elementType"}]};
    }case hn:
    {
        return {name:hn,properties:[{name:"true",defaultValue:false}]};
    }case pn:
    {
        return{name:pn,properties:[{name:"left"},{name:"right"}]};
    }case mn:
    {
        return{name:mn,properties:[{name:"left"},{name:"right"}]};
    }case dr:
    {
        return {name:dr,properties:[{name:"definesHiddenTokens",defaultValue:false},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:false},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};
    }case Li:
    {
        return{name:Li,properties:[{name:"path"}]};
    }case gn:
    {
        return{name:gn,properties:[{name:"name"}]};
    }case yn:
    {
        return{name:yn,properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};
    }case Oi:
    {
        return {name:Oi,properties:[{name:"calledByName",defaultValue:false},{name:"parameter"},{name:"value"}]};
    }case Tn:
    {
        return{name:Tn,properties:[{name:"value"}]};
    }case fr:
    {
        return{name:fr,properties:[{name:"value"}]};
    }case hr:
    {
        return{name:hr,properties:[{name:"name"}]};
    }case Rn:
    {
        return{name:Rn,properties:[{name:"parameter"}]};
    }case vn:
    {
        return {name:vn,properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:false},{name:"definition"},{name:"entry",defaultValue:false},{name:"fragment",defaultValue:false},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:false}]};
    }case pr:
    {
        return{name:pr,properties:[{name:"referenceType"}]};
    }case wr:
    {
        return{name:wr,properties:[{name:"name"}]};
    }case An:
    {
        return{name:An,properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};
    }case mr:
    {
        return{name:mr,properties:[{name:"value"}]};
    }case Nt:
    {
        return {name:Nt,properties:[{name:"definition"},{name:"fragment",defaultValue:false},{name:"hidden",defaultValue:false},{name:"name"},{name:"type"}]};
    }case En:
    {
        return{name:En,properties:[{name:"name"},{name:"type"}]};
    }case bi:
    {
        return {name:bi,properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:false},{name:"name"},{name:"type"}]};
    }case gr:
    {
        return{name:gr,properties:[{name:"types",defaultValue:[]}]};
    }case kn:
    {
        return{name:kn,properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};
    }case $n:
    {
        return{name:$n,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};
    }case xn:
    {
        return{name:xn,properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};
    }case Sn:
    {
        return{name:Sn,properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};
    }case In:
    {
        return {name:In,properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:false},{name:"lookahead"},{name:"terminal"},{name:"type"}]};
    }case Cn:
    {
        return{name:Cn,properties:[{name:"cardinality"},{name:"lookahead"}]};
    }case Nn:
    {
        return{name:Nn,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};
    }case wn:
    {
        return{name:wn,properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};
    }case _n:
    {
        return{name:_n,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};
    }case Ln:
    {
        return{name:Ln,properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};
    }case On:
    {
        return{name:On,properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};
    }case bn:
    {
        return{name:bn,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};
    }case Pn:
    {
        return{name:Pn,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};
    }case Mn:
    {
        return{name:Mn,properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};
    }case Dn:
    {
        return{name:Dn,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};
    }case Fn:
    {
        return{name:Fn,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};
    }case Gn:
    {
        return{name:Gn,properties:[{name:"cardinality"},{name:"lookahead"}]};
    }default:
    {
        return{name:e,properties:[]}
    }}}}const M=new Vl;function Ud(n){for (const[e,t] of Object.entries(n)) {
    if (!e.startsWith("$")) {
        if (Array.isArray(t)) {
            t.forEach((r,i)=>{
                if (ae(r)) {
                    r.$container=n;
                    r.$containerProperty=e;
                    r.$containerIndex=i;
                }
            });
        } else if (ae(t)) {
            t.$container=n;
            t.$containerProperty=e;
        }
    }
}}function gi(n,e){
    let t=n;

    while (t) {if (e(t)) {
        return t;
    }t=t.$container}
}function Ze(n){const t=os(n).$document;if (!t) {
    throw new Error("AST node has no document.");
}return t}function os(n){
    while (n.$container) {
        n=n.$container;
    }

    return n
}function zs(n,e){if (!n) {
    throw new Error("Node must be an AstNode.");
}const t=e?.range;return new Z(() => {
    return ({
        keys:Object.keys(n),
        keyIndex:0,
        arrayIndex:0
    });
},r=>{
    while (r.keyIndex<r.keys.length) {const i=r.keys[r.keyIndex];if(!i.startsWith("$")){const s=n[i];if(ae(s)){
        r.keyIndex++;

        if (ka(s,t)) {
            return {done:false,value:s};
        }
    }else if(Array.isArray(s)){
        while (r.arrayIndex<s.length) {
            const a=r.arrayIndex++;
            const o=s[a];
            if (ae(o)&&ka(o,t)) {
                return {done:false,value:o};
            }
        }

        r.arrayIndex=0
    }}r.keyIndex++}

    return ve
});}function tr(n,e){if (!n) {
    throw new Error("Root node must be an AstNode.");
}return new Ws(n,t => {
    return zs(t,e);
});}function _t(n,e){if (!n) {
    throw new Error("Root node must be an AstNode.");
}return new Ws(n,t => {
    return zs(t,e);
},{includeRoot:true});}function ka(n,e){var t;if (!e) {
    return true;
}const r=(t=n.$cstNode)===null||t===void 0?void 0:t.range;return r?Rd(r,e):false;}function Kl(n){return new Z(() => {
    return ({
        keys:Object.keys(n),
        keyIndex:0,
        arrayIndex:0
    });
},e=>{
    while (e.keyIndex<e.keys.length) {const t=e.keys[e.keyIndex];if(!t.startsWith("$")){const r=n[t];if (Ue(r)) {
        e.keyIndex++;
        return {done:false,value:{reference:r,container:n,property:t}};
    }if(Array.isArray(r)){
        while (e.arrayIndex<r.length) {
            const i=e.arrayIndex++;
            const s=r[i];
            if (Ue(s)) {
                return {done:false,value:{reference:s,container:n,property:t,index:i}};
            }
        }

        e.arrayIndex=0
    }}e.keyIndex++}

    return ve
});}function Bd(n,e){
    const t=n.getTypeMetaData(e.$type);
    const r=e;
    for (const i of t.properties) {
        if (i.defaultValue!==void 0&&r[i.name]===void 0) {
            (r[i.name] = Wl(i.defaultValue));
        }
    }
}function Wl(n){return Array.isArray(n)?[...n.map(Wl)]:n}function w(n){return n.charCodeAt(0)}function Pi(n,e){
    if (Array.isArray(n)) {
        n.forEach(function(t){e.push(t)});
    } else {
        e.push(n);
    }
}function un(n,e){
    if (n[e]===true) {
        throw"duplicate flag "+e;
    }
    n[e];
    n[e]=true;
}function Ct(n){if (n===void 0) {
    throw Error("Internal Error - Should never get here!");
}return true;}function Vd(){throw Error("Internal Error - Should never get here!")}function $a(n){return n.type==="Character"}const Hr=[];for (let n=w("0"); n<=w("9"); n++) {
    Hr.push(n);
}const zr=[w("_")].concat(Hr);for (let n=w("a"); n<=w("z"); n++) {
    zr.push(n);
}for (let n=w("A"); n<=w("Z"); n++) {
    zr.push(n);
}

const xa=[w(" "),w("\f"),w(`
`),w("\r"),w("	"),w("\v"),w("	"),w(" "),w(" "),w(" "),w(" "),w(" "),w(" "),w(" "),w(" "),w(" "),w(" "),w(" "),w(" "),w(" "),w("\u2028"),w("\u2029"),w(" "),w(" "),w("　"),w("\uFEFF")];

const Kd=/[0-9a-fA-F]/;
const yr=/[0-9]/;
const Wd=/[1-9]/;
class jl{constructor(){
    this.idx=0;
    this.input="";
    this.groupIdx=0;
}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){
    this.idx=e.idx;
    this.input=e.input;
    this.groupIdx=e.groupIdx;
}pattern(e){
    this.idx=0;
    this.input=e;
    this.groupIdx=0;
    this.consumeChar("/");
    const t=this.disjunction();this.consumeChar("/");const r={type:"Flags",loc:{begin:this.idx,end:e.length},global:false,ignoreCase:false,multiLine:false,unicode:false,sticky:false};

    while (this.isRegExpFlag()) {
            switch(this.popChar()){case "g":
                {
                    un(r,"global");break;
                }case "i":
                {
                    un(r,"ignoreCase");break;
                }case "m":
                {
                    un(r,"multiLine");break;
                }case "u":
                {
                    un(r,"unicode");break;
                }case "y":
                {
                    un(r,"sticky");break
                }}
        }

    if (this.idx!==this.input.length) {
            throw Error("Redundant input: "+this.input.substring(this.idx));
        }return{type:"Pattern",flags:r,value:t,loc:this.loc(0)}
}disjunction(){
    const e=[];
    const t=this.idx;
    for (e.push(this.alternative()); this.peekChar()==="|"; ) {
        this.consumeChar("|");
        e.push(this.alternative());
    }return{type:"Disjunction",value:e,loc:this.loc(t)}
}alternative(){
    const e=[];
    const t=this.idx;

    while (this.isTerm()) {
        e.push(this.term());
    }

    return{type:"Alternative",value:e,loc:this.loc(t)}
}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){const e=this.idx;switch(this.popChar()){case "^":
    {
        return{type:"StartAnchor",loc:this.loc(e)};
    }case "$":
    {
        return{type:"EndAnchor",loc:this.loc(e)};
    }case "\\":
    {
        switch(this.popChar()){case "b":
            {
                return{type:"WordBoundary",loc:this.loc(e)};
            }case "B":
            {
                return{type:"NonWordBoundary",loc:this.loc(e)}
            }}throw Error("Invalid Assertion Escape");
    }case "(":
    {
        this.consumeChar("?");let t;switch(this.popChar()){case "=":
            {
                t="Lookahead";break;
            }case "!":
            {
                t="NegativeLookahead";break
            }}Ct(t);const r=this.disjunction();
        this.consumeChar(")");
        return {type:t,value:r,loc:this.loc(e)};
    }}return Vd()}quantifier(e=false){let t;const r=this.idx;switch(this.popChar()){case "*":
    {
        t={atLeast:0,atMost:Infinity};break;
    }case "+":
    {
        t={atLeast:1,atMost:Infinity};break;
    }case "?":
    {
        t={atLeast:0,atMost:1};break;
    }case "{":
    {
        const i=this.integerIncludingZero();switch(this.popChar()){case "}":
            {
                t={atLeast:i,atMost:i};break;
            }case ",":
            {
                let s;

                if (this.isDigit()) {
                    s=this.integerIncludingZero();
                    t={atLeast:i,atMost:s};
                } else {
                    t={atLeast:i,atMost:Infinity};
                }

                this.consumeChar("}");
                break
            }}if (e===true&&t===void 0) {
            return;
        }Ct(t);break
    }}if (!(e===true&&t===void 0)&&Ct(t)) {
    if (this.peekChar(0)==="?") {
        this.consumeChar("?");
        t.greedy=false;
    } else {
        t.greedy=true;
    }

    t.type="Quantifier";
    t.loc=this.loc(r);
    return t;
}}atom(){
    let e;const t=this.idx;switch(this.peekChar()){case ".":
            {
                e=this.dotAll();break;
            }case "\\":
            {
                e=this.atomEscape();break;
            }case "[":
            {
                e=this.characterClass();break;
            }case "(":
            {
                e=this.group();break
            }}

    if (e===void 0&&this.isPatternCharacter()) {
        (e = this.patternCharacter());
    }

    if (Ct(e)) {
        e.loc=this.loc(t);

        if (this.isQuantifier()) {
            (e.quantifier = this.quantifier());
        }

        return e;
    }
}dotAll(){
    this.consumeChar(".");

    return {type:"Set",complement:true,value:[w(`
    `),w("\r"),w("\u2028"),w("\u2029")]};
}atomEscape(){
    this.consumeChar("\\");

    switch (this.peekChar()) {
    case"1":
    case"2":
    case"3":
    case"4":
    case"5":
    case"6":
    case"7":
    case"8":
    case "9":
        {
            return this.decimalEscapeAtom();
        }
    case"d":
    case"D":
    case"s":
    case"S":
    case"w":
    case "W":
        {
            return this.characterClassEscape();
        }
    case"f":
    case"n":
    case"r":
    case"t":
    case "v":
        {
            return this.controlEscapeAtom();
        }
    case "c":
        {
            return this.controlLetterEscapeAtom();
        }
    case "0":
        {
            return this.nulCharacterAtom();
        }
    case "x":
        {
            return this.hexEscapeSequenceAtom();
        }
    case "u":
        {
            return this.regExpUnicodeEscapeSequenceAtom();
        }
    default:
        {
            return this.identityEscapeAtom()
        }
    }
}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){
    let e;
    let t=false;
    switch(this.popChar()){case "d":
        {
            e=Hr;break;
        }case "D":
        {
            e=Hr;
            t=true;
            break;
        }case "s":
        {
            e=xa;break;
        }case "S":
        {
            e=xa;
            t=true;
            break;
        }case "w":
        {
            e=zr;break;
        }case "W":
        {
            e=zr;
            t=true;
            break
        }}if (Ct(e)) {
        return{type:"Set",value:e,complement:t}
    }
}controlEscapeAtom(){let e;switch(this.popChar()){case "f":
    {
        e=w("\f");break;
    }case "n":
    {
        e=w(`
        `);break;
    }case "r":
    {
        e=w("\r");break;
    }case "t":
    {
        e=w("	");break;
    }case "v":
    {
        e=w("\v");break
    }}if (Ct(e)) {
    return{type:"Character",value:e}
}}controlLetterEscapeAtom(){this.consumeChar("c");const e=this.popChar();if (/[a-zA-Z]/.test(e)===false) {
    throw Error("Invalid ");
}return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){
    this.consumeChar("0");
    return {type:"Character",value:w("\0")};
}hexEscapeSequenceAtom(){
    this.consumeChar("x");
    return this.parseHexDigits(2);
}regExpUnicodeEscapeSequenceAtom(){
    this.consumeChar("u");
    return this.parseHexDigits(4);
}identityEscapeAtom(){const e=this.popChar();return{type:"Character",value:w(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case "]":
    {
        throw Error("TBD");
    }default:
    {
        const e=this.popChar();return{type:"Character",value:w(e)}
    }}}characterClass(){
    const e=[];let t=false;
    this.consumeChar("[");

    if (this.peekChar(0)==="^") {
        this.consumeChar("^");
        t=true;
    }

    while (this.isClassAtom()) {
        const r=this.classAtom();
        r.type;

        if ($a(r)&&this.isRangeDash()) {
            this.consumeChar("-");const i=this.classAtom();
            i.type;

            if ($a(i)) {if (i.value<r.value) {
                throw Error("Range out of order in character class");
            }e.push({from:r.value,to:i.value})} else {
                Pi(r.value,e);
                e.push(w("-"));
                Pi(i.value,e);
            }
        } else {
            Pi(r.value,e)
        }
    }

    this.consumeChar("]");
    return {type:"Set",complement:t,value:e};
}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case "\u2029":
    {
        throw Error("TBD");
    }case "\\":
    {
        return this.classEscape();
    }default:
    {
        return this.classPatternCharacterAtom()
    }}}classEscape(){
    this.consumeChar("\\");

    switch (this.peekChar()) {
    case "b":
        {
            this.consumeChar("b");
            return {type:"Character",value:w("\b")};
        }
    case"d":
    case"D":
    case"s":
    case"S":
    case"w":
    case "W":
        {
            return this.characterClassEscape();
        }
    case"f":
    case"n":
    case"r":
    case"t":
    case "v":
        {
            return this.controlEscapeAtom();
        }
    case "c":
        {
            return this.controlLetterEscapeAtom();
        }
    case "0":
        {
            return this.nulCharacterAtom();
        }
    case "x":
        {
            return this.hexEscapeSequenceAtom();
        }
    case "u":
        {
            return this.regExpUnicodeEscapeSequenceAtom();
        }
    default:
        {
            return this.identityEscapeAtom()
        }
    }
}group(){
    let e=true;
    this.consumeChar("(");

    switch (this.peekChar(0)) {
    case "?":
        {
            this.consumeChar("?");
            this.consumeChar(":");
            e=false;
            break;
        }
    default:
        {
            this.groupIdx++;break
        }
    }

    const t=this.disjunction();this.consumeChar(")");const r={type:"Group",capturing:e,value:t};

    if (e) {
        (r.idx = this.groupIdx);
    }

    return r;
}positiveInteger(){
    let e=this.popChar();if (Wd.test(e)===false) {
        throw Error("Expecting a positive integer");
    }

    while (yr.test(this.peekChar(0))) {
        e+=this.popChar();
    }

    return parseInt(e,10)
}integerIncludingZero(){
    let e=this.popChar();if (yr.test(e)===false) {
        throw Error("Expecting an integer");
    }

    while (yr.test(this.peekChar(0))) {
        e+=this.popChar();
    }

    return parseInt(e,10)
}patternCharacter(){const e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case "|":
    {
        throw Error("TBD");
    }default:
    {
        return{type:"Character",value:w(e)}
    }}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case "y":
    {
        return true;
    }default:
    {
        return false;
    }}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return yr.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case "\u2029":
    {
        return false;
    }default:
    {
        return true;
    }}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if (this.isPatternCharacter()) {
    return true;
}switch(this.peekChar(0)){case".":case"\\":case"[":case "(":
    {
        return true;
    }default:
    {
        return false;
    }}}isAssertion(){switch(this.peekChar(0)){case"^":case "$":
    {
        return true;
    }case "\\":
    {
        switch(this.peekChar(1)){case"b":case "B":
            {
                return true;
            }default:
            {
                return false;
            }}
    }case "(":
    {
        return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");
    }default:
    {
        return false;
    }}}isQuantifier(){const e=this.saveState();try{return this.quantifier(true)!==void 0;}catch{return false;}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case "\u2029":
    {
        return false;
    }default:
    {
        return true;
    }}}parseHexDigits(e){let t="";for(let i=0;i<e;i++){const s=this.popChar();if (Kd.test(s)===false) {
    throw Error("Expecting a HexDecimal digits");
}t+=s}return{type:"Character",value:parseInt(t,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){
    const e=this.peekChar(0);
    this.consumeChar(void 0);
    return e;
}consumeChar(e){if (e!==void 0&&this.input[this.idx]!==e) {
    throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);
}if (this.idx>=this.input.length) {
    throw Error("Unexpected end of input");
}this.idx++}loc(e){return{begin:e,end:this.idx}}}class yi{visitChildren(e){for(const t in e){
    const r=e[t];

    if (e.hasOwnProperty(t)) {
        if (r.type!==void 0) {
            this.visit(r);
        } else if (Array.isArray(r)) {
            r.forEach(i=>{this.visit(i)},this);
        }
    }
}}visit(e){switch(e.type){case "Pattern":
    {
        this.visitPattern(e);break;
    }case "Flags":
    {
        this.visitFlags(e);break;
    }case "Disjunction":
    {
        this.visitDisjunction(e);break;
    }case "Alternative":
    {
        this.visitAlternative(e);break;
    }case "StartAnchor":
    {
        this.visitStartAnchor(e);break;
    }case "EndAnchor":
    {
        this.visitEndAnchor(e);break;
    }case "WordBoundary":
    {
        this.visitWordBoundary(e);break;
    }case "NonWordBoundary":
    {
        this.visitNonWordBoundary(e);break;
    }case "Lookahead":
    {
        this.visitLookahead(e);break;
    }case "NegativeLookahead":
    {
        this.visitNegativeLookahead(e);break;
    }case "Character":
    {
        this.visitCharacter(e);break;
    }case "Set":
    {
        this.visitSet(e);break;
    }case "Group":
    {
        this.visitGroup(e);break;
    }case "GroupBackReference":
    {
        this.visitGroupBackReference(e);break;
    }case "Quantifier":
    {
        this.visitQuantifier(e);break
    }}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}}
const jd=/\r?\n/gm;
const Hd=new jl;
class zd extends yi{constructor(...args) {
    super(...args);
    this.isStarting=true;
    this.endRegexpStack=[];
    this.multiline=false;
}get endRegex(){return this.endRegexpStack.join("")}reset(e){
    this.multiline=false;
    this.regex=e;
    this.startRegexp="";
    this.isStarting=true;
    this.endRegexpStack=[];
}visitGroup(e){
    if (e.quantifier) {
        this.isStarting=false;
        this.endRegexpStack=[];
    }
}visitCharacter(e){
    const t=String.fromCharCode(e.value);

    if (!this.multiline&&t===`
    `) {
        (this.multiline = true);
    }

    if (e.quantifier) {
        this.isStarting=false;
        this.endRegexpStack=[];
    } else {
        const r=Ti(t);
        this.endRegexpStack.push(r);

        if (this.isStarting) {
            (this.startRegexp += r);
        }
    }
}visitSet(e){if(!this.multiline){
    const t=this.regex.substring(e.loc.begin,e.loc.end);
    const r=new RegExp(t);
    this.multiline=!!`
    `.match(r)
}if (e.quantifier) {
    this.isStarting=false;
    this.endRegexpStack=[];
} else {
    const t=this.regex.substring(e.loc.begin,e.loc.end);
    this.endRegexpStack.push(t);

    if (this.isStarting) {
        (this.startRegexp += t);
    }
}}visitChildren(e){
    if (e.type !== "Group" || !e.quantifier) {
        super.visitChildren(e);
    }
}}const Mi=new zd;function qd(n){try{
    if (typeof n=="string") {
        (n = new RegExp(n));
    }

    n=n.toString();
    Mi.reset(n);
    Mi.visit(Hd.pattern(n));
    return Mi.multiline;
}catch{return false;}}const Yd=`\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");function ls(n){const e=typeof n=="string"?new RegExp(n):n;return Yd.some(t => {
    return e.test(t);
});}function Ti(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");}function Xd(n){return Array.prototype.map.call(n,e => {
    return /\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:Ti(e);
}).join("");}function Jd(n,e){
    const t=Qd(n);
    const r=e.match(t);
    return!!r&&r[0].length>0
}function Qd(n){
    if (typeof n=="string") {
        (n = new RegExp(n));
    }

    const e=n;
    const t=n.source;
    let r=0;function i(){
        let s="";
        let a;
        function o(u){
            s+=t.substr(r,u);
            r+=u;
        }function l(u){
                    s+="(?:"+t.substr(r,u)+"|$)";
                    r+=u;
                }

        while (r<t.length) {
                    switch(t[r]){case "\\":
                        {
                            switch(t[r+1]){case "c":
                                {
                                    l(3);break;
                                }case "x":
                                {
                                    l(4);break;
                                }case "u":
                                {
                                    if (e.unicode) {
                                        if (t[r+2]==="{") {
                                            l(t.indexOf("}",r)-r+1);
                                        } else {
                                            l(6);
                                        }
                                    } else {
                                        l(2);
                                    }

                                    break;
                                }case"p":case "P":
                                {
                                    if (e.unicode) {
                                        l(t.indexOf("}",r)-r+1);
                                    } else {
                                        l(2);
                                    }

                                    break;
                                }case "k":
                                {
                                    l(t.indexOf(">",r)-r+1);break;
                                }default:
                                {
                                    l(2);break
                                }}break;
                        }case "[":
                        {
                            a=/\[(?:\\.|.)*?\]/g;
                            a.lastIndex=r;
                            a=a.exec(t)||[];
                            l(a[0].length);
                            break;
                        }case"|":case"^":case"$":case"*":case"+":case "?":
                        {
                            o(1);break;
                        }case "{":
                        {
                            a=/\{\d+,?\d*\}/g;
                            a.lastIndex=r;
                            a=a.exec(t);

                            if (a) {
                                o(a[0].length);
                            } else {
                                l(1);
                            }

                            break;
                        }case "(":
                        {
                            if (t[r+1]==="?") {
                                switch(t[r+2]){case ":":
                                    {
                                        s+="(?:";
                                        r+=3;
                                        s+=i()+"|$)";
                                        break;
                                    }case "=":
                                    {
                                        s+="(?=";
                                        r+=3;
                                        s+=i()+")";
                                        break;
                                    }case "!":
                                    {
                                        a=r;
                                        r+=3;
                                        i();
                                        s+=t.substr(a,r-a);
                                        break;
                                    }case "<":
                                    {
                                        switch(t[r+3]){case"=":case "!":
                                            {
                                                a=r;
                                                r+=4;
                                                i();
                                                s+=t.substr(a,r-a);
                                                break;
                                            }default:
                                            {
                                                o(t.indexOf(">",r)-r+1);
                                                s+=i()+"|$)";
                                                break
                                            }}break
                                    }}
                            } else {
                                o(1);
                                s+=i()+"|$)";
                            }break;
                        }case ")":
                        {
                            ++r;
                            return s;
                        }default:
                        {
                            l(1);break
                        }}
                }

        return s
    }return new RegExp(i(),n.flags)
}function Zd(n){return n.rules.find(e => {
    return we(e)&&e.entry;
});}function ef(n){return n.rules.filter(e => {
    return kt(e)&&e.hidden;
});}function Hl(n,e){
    const t=new Set;
    const r=Zd(n);
    if (!r) {
        return new Set(n.rules);
    }const i=[r].concat(ef(n));for (const a of i) {
        zl(a,t,e);
    }const s=new Set;for (const a of n.rules) {
    if ((t.has(a.name) || kt(a)&&a.hidden)) {
        s.add(a);
    }
}return s
}function zl(n,e,t){
    e.add(n.name);
    tr(n).forEach(r=>{if(Tt(r)||t){
        const i=r.rule.ref;

        if (i&&!e.has(i.name)) {
            zl(i,e,t);
        }
    }});
}function tf(n){if (n.terminal) {
    return n.terminal;
}if(n.type.ref){const e=Yl(n.type.ref);return e?.terminal}}function nf(n){return n.hidden&&!ls(Js(n))}function rf(n,e){return !n||!e?[]:qs(n,e,n.astNode,true);}function ql(n,e,t){if (!n||!e) {
    return;
}const r=qs(n,e,n.astNode,true);if (r.length!==0) {
    if (t!==void 0) {
        t=Math.max(0,Math.min(t,r.length-1));
    } else {
        t=0;
    }

    return r[t];
}}function qs(n,e,t,r){if(!r){const i=gi(n.grammarSource,gt);if (i&&i.feature===e) {
    return[n]
}}return Xn(n)&&n.astNode===t?n.content.flatMap(i => {
    return qs(i,e,t,false);
}):[];}function sf(n,e,t){if (!n) {
    return;
}const r=af(n,e,n?.astNode);if (r.length!==0) {
    if (t!==void 0) {
        t=Math.max(0,Math.min(t,r.length-1));
    } else {
        t=0;
    }

    return r[t];
}}function af(n,e,t){if (n.astNode!==t) {
    return[];
}if (yt(n.grammarSource)&&n.grammarSource.value===e) {
    return[n];
}const r=ss(n).iterator();let i;const s=[];do {
    i=r.next();

    if (!i.done)
        {
            const a=i.value;

            if (a.astNode===t) {
                if (yt(a.grammarSource)&&a.grammarSource.value===e) {
                    s.push(a);
                }
            } else {
                r.prune();
            }
        }
} while (!i.done);return s}function of(n){
    var e;const t=n.astNode;

    while (t===((e=n.container)===null||e===void 0?void 0:e.astNode)) {const r=gi(n.grammarSource,gt);if (r) {
        return r;
    }n=n.container}
}function Yl(n){
    let e=n;

    if (Dl(e)) {
        if (mi(e.$container)) {
            e=e.$container.$container;
        } else if (we(e.$container)) {
            e=e.$container;
        } else {
            er(e.$container);
        }
    }

    return Xl(n,e,new Map);
}function Xl(n,e,t){var r;function i(s,a){
    let o;

    if (!gi(s,gt)) {
        (o = Xl(a,a,t));
    }

    t.set(n,o);
    return o;
}if (t.has(n)) {
    return t.get(n);
}t.set(n,void 0);for(const s of tr(e)){if (gt(s)&&s.feature.toLowerCase()==="name") {
    t.set(n,s);
    return s;
}if (Tt(s)&&we(s.rule.ref)) {
    return i(s,s.rule.ref);
}if (wd(s)&&(!((r=s.typeRef)===null||r===void 0)&&r.ref)) {
    return i(s,s.typeRef.ref)
}}}function Jl(n){return Ql(n,new Set)}function Ql(n,e){if (e.has(n)) {
    return true;
}e.add(n);for (const t of tr(n)) {
    if(Tt(t)){if (!t.rule.ref||we(t.rule.ref)&&!Ql(t.rule.ref,e)) {
        return false;
    }}else{if (gt(t)) {
        return false;
    }if (mi(t)) {
        return false;
    }}
}return!!n.definition}function Ys(n){if (n.inferredType) {
    return n.inferredType.name;
}if (n.dataType) {
    return n.dataType;
}if(n.returnType){const e=n.returnType.ref;if(e){if (we(e)) {
    return e.name;
}if (Fl(e)||Gl(e)) {
    return e.name
}}}}function Xs(n){
    if (we(n)) {
        if (Jl(n)) {
            return n.name;
        }

        return Ys(n) ?? n.name;
    }if (Fl(n)||Gl(n)||Nd(n)) {
        return n.name;
    }if(mi(n)){const t=lf(n);if (t) {
        return t
    }}else if (Dl(n)) {
        return n.name;
    }throw new Error("Cannot get name of Unknown Type")
}function lf(n){var e;if (n.inferredType) {
    return n.inferredType.name;
}if (!((e=n.type)===null||e===void 0)&&e.ref) {
    return Xs(n.type.ref)
}}function uf(n){
    if (kt(n)) {
        return ((e=n.type)===null||e===void 0 ? void 0 : e.name) ?? "string";
    }

    return Ys(n) ?? n.name;
}function Js(n){
    const e={s:false,i:false,u:false};
    const t=sn(n.definition,e);

    const r=Object.entries(e).filter(([,i]) => {
        return i;
    }).map(([i]) => {
        return i;
    }).join("");

    return new RegExp(t,r)
}const Qs=/[\s\S]/.source;function sn(n,e){if (Pd(n)) {
    return cf(n);
}if (Md(n)) {
    return df(n);
}if (_d(n)) {
    return pf(n);
}if(Dd(n)){const t=n.rule.ref;if (!t) {
    throw new Error("Missing rule reference.");
}return qe(sn(t.definition),{cardinality:n.cardinality,lookahead:n.lookahead})}else{if (Od(n)) {
    return hf(n);
}if (Fd(n)) {
    return ff(n);
}if(bd(n)){
    const t=n.regex.lastIndexOf("/");
    const r=n.regex.substring(1,t);
    const i=n.regex.substring(t+1);

    if (e) {
        e.i=i.includes("i");
        e.s=i.includes("s");
        e.u=i.includes("u");
    }

    return qe(r,{cardinality:n.cardinality,lookahead:n.lookahead,wrap:false});
}else{if (Gd(n)) {
    return qe(Qs,{cardinality:n.cardinality,lookahead:n.lookahead});
}throw new Error(`Invalid terminal element: ${n?.$type}`)}}}function cf(n){return qe(n.elements.map(e => {
    return sn(e);
}).join("|"),{cardinality:n.cardinality,lookahead:n.lookahead});}function df(n){return qe(n.elements.map(e => {
    return sn(e);
}).join(""),{cardinality:n.cardinality,lookahead:n.lookahead});}function ff(n){return qe(`${Qs}*?${sn(n.terminal)}`,{cardinality:n.cardinality,lookahead:n.lookahead})}function hf(n){return qe(`(?!${sn(n.terminal)})${Qs}*?`,{cardinality:n.cardinality,lookahead:n.lookahead})}function pf(n){return n.right?qe(`[${Di(n.left)}-${Di(n.right)}]`,{cardinality:n.cardinality,lookahead:n.lookahead,wrap:false}):qe(Di(n.left),{cardinality:n.cardinality,lookahead:n.lookahead,wrap:false});}function Di(n){return Ti(n.value)}function qe(n,e){
    if ((e.wrap!==false || e.lookahead)) {
        (n = `(${e.lookahead ?? ""}${n})`);
    }

    return e.cardinality?`${n}${e.cardinality}`:n;
}function mf(n){
    const e=[];
    const t=n.Grammar;
    for (const r of t.rules) {
        if (kt(r)&&nf(r)&&qd(Js(r))) {
            e.push(r.name);
        }
    }return{multilineCommentRules:e,nameRegexp:vd}
}function us(n){
    if (console&&console.error) {
        console.error(`Error: ${n}`);
    }
}function Zl(n){
    if (console&&console.warn) {
        console.warn(`Warning: ${n}`);
    }
}function eu(n){
    const e=new Date().getTime();
    const t=n();
    return{time:new Date().getTime()-e,value:t}
}function tu(n){
    function e(){}e.prototype=n;const t=new e;function r(){return typeof t.bar}
    r();
    r();
    return n;
}function gf(n){return yf(n)?n.LABEL:n.name}function yf(n){return he(n.LABEL)&&n.LABEL!==""}class Be{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){
    e.visit(this);
    d(this.definition,t=>{t.accept(e)});
}}class ue extends Be{constructor(e){
    super([]);
    this.idx=1;

    ke(this,Me(e,t => {
        return t!==void 0;
    }));
}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}}class an extends Be{constructor(e){
    super(e.definition);
    this.orgText="";

    ke(this,Me(e,t => {
        return t!==void 0;
    }));
}}class pe extends Be{constructor(e){
    super(e.definition);
    this.ignoreAmbiguities=false;

    ke(this,Me(e,t => {
        return t!==void 0;
    }));
}}let ne=class extends Be{constructor(e){
    super(e.definition);
    this.idx=1;

    ke(this,Me(e,t => {
        return t!==void 0;
    }));
}};class xe extends Be{constructor(e){
    super(e.definition);
    this.idx=1;

    ke(this,Me(e,t => {
        return t!==void 0;
    }));
}}class Se extends Be{constructor(e){
    super(e.definition);
    this.idx=1;

    ke(this,Me(e,t => {
        return t!==void 0;
    }));
}}class W extends Be{constructor(e){
    super(e.definition);
    this.idx=1;

    ke(this,Me(e,t => {
        return t!==void 0;
    }));
}}class me extends Be{constructor(e){
    super(e.definition);
    this.idx=1;

    ke(this,Me(e,t => {
        return t!==void 0;
    }));
}}class ge extends Be{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){
    super(e.definition);
    this.idx=1;
    this.ignoreAmbiguities=false;
    this.hasPredicates=false;

    ke(this,Me(e,t => {
        return t!==void 0;
    }));
}}class G{constructor(e){
    this.idx=1;

    ke(this,Me(e,t => {
        return t!==void 0;
    }));
}accept(e){e.visit(this)}}function Tf(n){return m(n,_r);}function _r(n){function e(t){return m(t,_r);}if(n instanceof ue){
    const t={type:"NonTerminal",name:n.nonTerminalName,idx:n.idx};

    if (he(n.label)) {
        (t.label = n.label);
    }

    return t;
}else{if (n instanceof pe) {
    return{type:"Alternative",definition:e(n.definition)};
}if (n instanceof ne) {
    return{type:"Option",idx:n.idx,definition:e(n.definition)};
}if (n instanceof xe) {
    return{type:"RepetitionMandatory",idx:n.idx,definition:e(n.definition)};
}if (n instanceof Se) {
    return{type:"RepetitionMandatoryWithSeparator",idx:n.idx,separator:_r(new G({terminalType:n.separator})),definition:e(n.definition)};
}if (n instanceof me) {
    return{type:"RepetitionWithSeparator",idx:n.idx,separator:_r(new G({terminalType:n.separator})),definition:e(n.definition)};
}if (n instanceof W) {
    return{type:"Repetition",idx:n.idx,definition:e(n.definition)};
}if (n instanceof ge) {
    return{type:"Alternation",idx:n.idx,definition:e(n.definition)};
}if(n instanceof G){
    const t={type:"Terminal",name:n.terminalType.name,label:gf(n.terminalType),idx:n.idx};

    if (he(n.label)) {
        (t.terminalLabel = n.label);
    }

    const r=n.terminalType.PATTERN;

    if (n.terminalType.PATTERN) {
        (t.pattern = Xe(r)?r.source:r);
    }

    return t;
}else{if (n instanceof an) {
    return{type:"Rule",name:n.name,orgText:n.orgText,definition:e(n.definition)};
}throw Error("non exhaustive match")}}}class on{visit(e){const t=e;switch(t.constructor){case ue:
    {
        return this.visitNonTerminal(t);
    }case pe:
    {
        return this.visitAlternative(t);
    }case ne:
    {
        return this.visitOption(t);
    }case xe:
    {
        return this.visitRepetitionMandatory(t);
    }case Se:
    {
        return this.visitRepetitionMandatoryWithSeparator(t);
    }case me:
    {
        return this.visitRepetitionWithSeparator(t);
    }case W:
    {
        return this.visitRepetition(t);
    }case ge:
    {
        return this.visitAlternation(t);
    }case G:
    {
        return this.visitTerminal(t);
    }case an:
    {
        return this.visitRule(t);
    }default:
    {
        throw Error("non exhaustive match")
    }}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}}function Rf(n){return n instanceof pe||n instanceof ne||n instanceof W||n instanceof xe||n instanceof Se||n instanceof me||n instanceof G||n instanceof an}function qr(n,e=[]){return n instanceof ne||n instanceof W||n instanceof me?true:n instanceof ge?Ll(n.definition,r => {
    return qr(r,e);
}):n instanceof ue&&de(e,n)?false:n instanceof Be?(n instanceof ue&&e.push(n),be(n.definition,r => {
    return qr(r,e);
})):false;}function vf(n){return n instanceof ge}function Ge(n){if (n instanceof ue) {
    return"SUBRULE";
}if (n instanceof ne) {
    return"OPTION";
}if (n instanceof ge) {
    return"OR";
}if (n instanceof xe) {
    return"AT_LEAST_ONE";
}if (n instanceof Se) {
    return"AT_LEAST_ONE_SEP";
}if (n instanceof me) {
    return"MANY_SEP";
}if (n instanceof W) {
    return"MANY";
}if (n instanceof G) {
    return"CONSUME";
}throw Error("non exhaustive match")}class Ri{walk(e,t=[]){d(e.definition,(r,i)=>{const s=Q(e.definition,i+1);if (r instanceof ue) {
    this.walkProdRef(r,s,t);
} else if (r instanceof G) {
    this.walkTerminal(r,s,t);
} else if (r instanceof pe) {
    this.walkFlat(r,s,t);
} else if (r instanceof ne) {
    this.walkOption(r,s,t);
} else if (r instanceof xe) {
    this.walkAtLeastOne(r,s,t);
} else if (r instanceof Se) {
    this.walkAtLeastOneSep(r,s,t);
} else if (r instanceof me) {
    this.walkManySep(r,s,t);
} else if (r instanceof W) {
    this.walkMany(r,s,t);
} else if (r instanceof ge) {
    this.walkOr(r,s,t);
} else {
    throw Error("non exhaustive match")
}})}walkTerminal(e,t,r){}walkProdRef(e,t,r){}walkFlat(e,t,r){const i=t.concat(r);this.walk(e,i)}walkOption(e,t,r){const i=t.concat(r);this.walk(e,i)}walkAtLeastOne(e,t,r){const i=[new ne({definition:e.definition})].concat(t,r);this.walk(e,i)}walkAtLeastOneSep(e,t,r){const i=Sa(e,t,r);this.walk(e,i)}walkMany(e,t,r){const i=[new ne({definition:e.definition})].concat(t,r);this.walk(e,i)}walkManySep(e,t,r){const i=Sa(e,t,r);this.walk(e,i)}walkOr(e,t,r){const i=t.concat(r);d(e.definition,s=>{const a=new pe({definition:[s]});this.walk(a,i)})}}function Sa(n,e,t){return[new ne({definition:[new G({terminalType:n.separator})].concat(n.definition)})].concat(e,t)}function nr(n){if (n instanceof ue) {
    return nr(n.referencedRule);
}if (n instanceof G) {
    return kf(n);
}if (Rf(n)) {
    return Af(n);
}if (vf(n)) {
    return Ef(n);
}throw Error("non exhaustive match")}function Af(n){
    let e=[];const t=n.definition;
    let r=0;
    let i=t.length>r;
    let s;
    let a=true;

    while (i&&a) {
        s=t[r];
        a=qr(s);
        e=e.concat(nr(s));
        r=r+1;
        i=t.length>r;
    }

    return Ks(e)
}function Ef(n){const e=m(n.definition,t => {
    return nr(t);
});return Ks(f_1(e));}function kf(n){return[n.terminalType]}const nu="_~IN~_";class $f extends Ri{constructor(e){
    super();
    this.topProd=e;
    this.follows={};
}startWalking(){
    this.walk(this.topProd);
    return this.follows;
}walkTerminal(e,t,r){}walkProdRef(e,t,r){
    const i=Sf(e.referencedRule,e.idx)+this.topProd.name;
    const s=t.concat(r);
    const a=new pe({definition:s});
    const o=nr(a);
    this.follows[i]=o
}}function xf(n){
    const e={};
    d(n,t=>{const r=new $f(t).startWalking();ke(e,r)});
    return e;
}function Sf(n,e){return n.name+e+nu}let Lr={};const If=new jl;function vi(n){const e=n.toString();if (Lr.hasOwnProperty(e)) {
    return Lr[e];
}{
    const t=If.pattern(e);
    Lr[e]=t;
    return t;
}}function Cf(){Lr={}}
const ru="Complement Sets are not supported for first char optimization";

const Yr=`Unable to use "first char" lexer optimizations:
`;

function Nf(n,e=false){try{const t=vi(n);return cs(t.value,{},t.flags.ignoreCase)}catch(t){if (t.message===ru) {
    if (e) {
        Zl(`${Yr}	Unable to optimize: < ${n.toString()} >
            Complement Sets cannot be automatically optimized.
            This will disable the lexer's first char optimizations.
            See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    }
} else {
    let r="";

    if (e) {
        (r = `
            This will disable the lexer's first char optimizations.
            See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`);
    }

    us(`${Yr}
        Failed parsing: < ${n.toString()} >
        Using the @chevrotain/regexp-to-ast library
        Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+r);
}}return[]}function cs(n,e,t){switch(n.type){case "Disjunction":
    {
        for (let i=0; i<n.value.length; i++) {
            cs(n.value[i],e,t);
        }break;
    }case "Alternative":
    {
        const r=n.value;for(let i=0;i<r.length;i++){const s=r[i];switch(s.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case "NonWordBoundary":
            {
                continue
            }}const a=s;switch(a.type){case "Character":
            {
                Tr(a.value,e,t);break;
            }case "Set":
            {
                if (a.complement===true) {
                    throw Error(ru);
                }d(a.value,l=>{if (typeof l=="number") {
                    Tr(l,e,t);
                } else {const u=l;if (t===true) {
                    for (let c=u.from; c<=u.to; c++) {
                        Tr(c,e,t);
                    }
                } else {for (let c=u.from; c<=u.to&&c<Bn; c++) {
                    Tr(c,e,t);
                }if(u.to>=Bn){
                    const c=u.from>=Bn?u.from:Bn;
                    const d=u.to;
                    const h=et(c);
                    const f=et(d);
                    for (let m=h; m<=f; m++) {
                        e[m]=m
                    }
                }}}});break;
            }case "Group":
            {
                cs(a.value,e,t);break;
            }default:
            {
                throw Error("Non Exhaustive Match")
            }}const o=a.quantifier!==void 0&&a.quantifier.atLeast===0;if (a.type==="Group"&&ds(a)===false||a.type!=="Group"&&o===false) {
            break
        }}break;
    }default:
    {
        throw Error("non exhaustive match!")
    }}return v_1(e);}function Tr(n,e,t){
    const r=et(n);
    e[r]=r;

    if (t===true) {
        wf(n,e);
    }
}function wf(n,e){
    const t=String.fromCharCode(n);
    const r=t.toUpperCase();
    if(r!==t){const i=et(r.charCodeAt(0));e[i]=i}else{const i=t.toLowerCase();if(i!==t){const s=et(i.charCodeAt(0));e[s]=s}}
}function Ia(n,e){return g_1(n.value,t=>{if (typeof t=="number") {
    return de(e,t);
}{const r=t;return g_1(e,i => {
    return r.from<=i&&i<=r.to;
})!==void 0;}});}function ds(n){const e=n.quantifier;return e&&e.atLeast===0?true:n.value?c5(n.value)?be(n.value,ds):ds(n.value):false;}class _f extends yi{constructor(e){
    super();
    this.targetCharCodes=e;
    this.found=false;
}visitChildren(e){if(this.found!==true){switch(e.type){case "Lookahead":
    {
        this.visitLookahead(e);return;
    }case "NegativeLookahead":
    {
        this.visitNegativeLookahead(e);return
    }}super.visitChildren(e)}}visitCharacter(e){
    if (de(this.targetCharCodes,e.value)) {
        (this.found = true);
    }
}visitSet(e){
    if (e.complement) {
        if (Ia(e,this.targetCharCodes)===void 0) {
            (this.found = true);
        }
    } else if (Ia(e,this.targetCharCodes)!==void 0) {
        (this.found = true);
    }
}}function Zs(n,e){if (e instanceof RegExp) {
    const t=vi(e);
    const r=new _f(n);
    r.visit(t);
    return r.found;
} else {
    return g_1(e,t => {
        return de(n,t.charCodeAt(0));
    })!==void 0;
}}
const Rt="PATTERN";
const Un="defaultMode";
const Rr="modes";
let iu=typeof new RegExp("(?:)").sticky=="boolean";function Lf(n,e){
    e=i_1(e,{useSticky:iu,debug:false,safeMode:false,positionTracking:"full",lineTerminatorCharacters:["\r",`
    `],tracer:(E, R) => {
        return R();
    }});const t=e.tracer;t("initCharCodeToOptimizedIndexMap",()=>{th()});let r;t("Reject Lexer.NA",()=>{r=pi(n,E => {
            return E[Rt]===fe.NA;
        })});
    let i=false;
    let s;
    t("Transform Patterns",()=>{
        i=false;

        s=m(r,E=>{const R=E[Rt];if(Xe(R)){const I=R.source;return I.length===1&&I!=="^"&&I!=="$"&&I!=="."&&!R.ignoreCase?I:I.length===2&&I[0]==="\\"&&!de(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],I[1])?I[1]:e.useSticky?Na(R):Ca(R)}else{if (bo_1(R)) {
            i=true;
            return {exec:R};
        }if (typeof R=="object") {
            i=true;
            return R;
        }if (typeof R=="string") {if (R.length===1) {
            return R;
        }{
            const I=R.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&");
            const F=new RegExp(I);
            return e.useSticky?Na(F):Ca(F)
        }} else {
            throw Error("non exhaustive match")
        }}});
    });
    let a;
    let o;
    let l;
    let u;
    let c;
    t("misc mapping",()=>{
        a=m(r,E => {
            return E.tokenTypeIdx;
        });

        o=m(r,E=>{const R=E.GROUP;if(R!==fe.SKIPPED){if (he(R)) {
            return R;
        }if (i(R)) {
            return false;
        }throw Error("non exhaustive match")}});

        l=m(r,E=>{const R=E.LONGER_ALT;if (R) {
            return c5(R)?m(R,F => {
                return Ra(r,F);
            }):[Ra(r,R)];
        }});

        u=m(r,E => {
            return E.PUSH_MODE;
        });

        c=m(r,E => {
            return h(E,"POP_MODE");
        });
    });let d;t("Line Terminator Handling",()=>{
        const E=ou(e.lineTerminatorCharacters);

        d=m(r,R => {
            return false;
        });

        if (e.positionTracking!=="onlyOffset") {
            (d = m(r,R => {
                return h(R,"LINE_BREAKS")?!!R.LINE_BREAKS:au(R,E)===false&&Zs(E,R.PATTERN);
            }));
        }
    });
    let h;
    let f;
    let m;
    let g;
    t("Misc Mapping #2",()=>{
        h=m(r,su);
        f=m(s,Qf);

        m=r(r,(E,R)=>{
            const I=R.GROUP;

            if (he(I)&&I!==fe.SKIPPED) {
                (E[I] = []);
            }

            return E;
        },{});

        g=m(s,(E, R) => {
            return ({
                pattern:s[R],
                longerAlt:l[R],
                canLineTerminator:d[R],
                isCustom:h[R],
                short:f[R],
                group:o[R],
                push:u[R],
                pop:c[R],
                tokenTypeIdx:a[R],
                tokenType:r[R]
            });
        });
    });
    let A=true;
    let T=[];

    if (!e.safeMode) {
        t("First Char Optimization",()=>{T=r(r,(E,R,I)=>{if(typeof R.PATTERN=="string"){
            const F=R.PATTERN.charCodeAt(0);
            const ie=et(F);
            Fi(E,ie,g[I])
        }else if(c5(R.START_CHARS_HINT)){let F;d(R.START_CHARS_HINT,ie=>{
            const _e=typeof ie=="string"?ie.charCodeAt(0):ie;
            const ye=et(_e);

            if (F!==ye) {
                F=ye;
                Fi(E,ye,g[I]);
            }
        })}else if (Xe(R.PATTERN)) {
            if (R.PATTERN.unicode) {
                A=false;

                if (e.ensureOptimizations) {
                    us(`${Yr}	Unable to analyze < ${R.PATTERN.toString()} > pattern.
                        The regexp unicode flag is not currently supported by the regexp-to-ast library.
                        This will disable the lexer's first char optimizations.
                        For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
                }
            } else {
                const F=Nf(R.PATTERN,e.ensureOptimizations);

                if (bp_1(F)) {
                    (A = false);
                }

                d(F,ie=>{Fi(E,ie,g[I])});
            }
        } else {
            if (e.ensureOptimizations) {
                us(`${Yr}	TokenType: <${R.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
                    This will disable the lexer's first char optimizations.
                    For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`);
            }

            A=false;
        }return E},[])});
    }

    return {emptyGroups:m,patternIdxToConfig:g,charCodeToPatternIdxToConfig:T,hasCustom:i,canBeOptimized:A};
}function Of(n,e){
    let t=[];const r=Pf(n);t=t.concat(r.errors);
    const i=Mf(r.valid);
    const s=i.valid;
    t=t.concat(i.errors);
    t=t.concat(bf(s));
    t=t.concat(Wf(s));
    t=t.concat(jf(s,e));
    t=t.concat(Hf(s));
    return t;
}function bf(n){
    let e=[];const t=f(n,r => {
        return Xe(r[Rt]);
    });
    e=e.concat(Ff(t));
    e=e.concat(Bf(t));
    e=e.concat(Vf(t));
    e=e.concat(Kf(t));
    e=e.concat(Gf(t));
    return e;
}function Pf(n){
    const e=f(n,i => {
        return !h(i,Rt);
    });

    const t=m(e,i => {
        return ({
            message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",
            type:j.MISSING_PATTERN,
            tokenTypes:[i]
        });
    });

    const r=hi(n,e);
    return{errors:t,valid:r}
}function Mf(n){
    const e=f(n,i=>{const s=i[Rt];return !Xe(s)&&!bo_1(s)&&!h(s,"exec")&&!he(s);});

    const t=m(e,i => {
        return ({
            message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
            type:j.INVALID_PATTERN,
            tokenTypes:[i]
        });
    });

    const r=hi(n,e);
    return{errors:t,valid:r}
}const Df=/[^\\][$]/;function Ff(n){class e extends yi{constructor(...args) {
    super(...args);
    this.found=false;
}visitEndAnchor(s){this.found=true}}const t=f(n,i=>{const s=i.PATTERN;try{
    const a=vi(s);
    const o=new e;
    o.visit(a);
    return o.found;
}catch{return Df.test(s.source)}});return m(t,i => {
    return ({
        message:`Unexpected RegExp Anchor Error:
            Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
            See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,

        type:j.EOI_ANCHOR_FOUND,
        tokenTypes:[i]
    });
});}function Gf(n){const e=f(n,r => {
    return r.PATTERN.test("");
});return m(e,r => {
    return ({
        message:"Token Type: ->"+r.name+"<- static 'PATTERN' must not match an empty string",
        type:j.EMPTY_MATCH_PATTERN,
        tokenTypes:[r]
    });
});}const Uf=/[^\\[][\^]|^\^/;function Bf(n){class e extends yi{constructor(...args) {
    super(...args);
    this.found=false;
}visitStartAnchor(s){this.found=true}}const t=f(n,i=>{const s=i.PATTERN;try{
    const a=vi(s);
    const o=new e;
    o.visit(a);
    return o.found;
}catch{return Uf.test(s.source)}});return m(t,i => {
    return ({
        message:`Unexpected RegExp Anchor Error:
            Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
            See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,

        type:j.SOI_ANCHOR_FOUND,
        tokenTypes:[i]
    });
});}function Vf(n){const e=f(n,r=>{const i=r[Rt];return i instanceof RegExp&&(i.multiline||i.global)});return m(e,r => {
    return ({
        message:"Token Type: ->"+r.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
        type:j.UNSUPPORTED_FLAGS_FOUND,
        tokenTypes:[r]
    });
});}function Kf(n){const e=[];let t=m(n,s => {
    return r(n,(a, o) => {
        if (s.PATTERN.source===o.PATTERN.source&&!de(e,o)&&o.PATTERN!==fe.NA) {
            e.push(o);
            a.push(o);
        }

        return a;
    },[]);
});t=Zn(t);const r=f(t,s => {
    return s.length>1;
});return m(r,s=>{const a=m(s,l => {
    return l.name;
});return{message:`The same RegExp pattern ->${Pe(s).PATTERN}<-has been used in all of the following Token Types: ${a.join(", ")} <-`,type:j.DUPLICATE_PATTERNS_FOUND,tokenTypes:s}});}function Wf(n){const e=f(n,r=>{if (!h(r,"GROUP")) {
    return false;
}const i=r.GROUP;return i!==fe.SKIPPED&&i!==fe.NA&&!he(i)});return m(e,r => {
    return ({
        message:"Token Type: ->"+r.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
        type:j.INVALID_GROUP_TYPE_FOUND,
        tokenTypes:[r]
    });
});}function jf(n,e){const t=f(n,i => {
    return i.PUSH_MODE!==void 0&&!de(e,i.PUSH_MODE);
});return m(t,i => {
    return ({
        message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,
        type:j.PUSH_MODE_DOES_NOT_EXIST,
        tokenTypes:[i]
    });
});}function Hf(n){
    const e=[];

    const t=r(n,(r,i,s)=>{
        const a=i.PATTERN;

        if (a !== fe.NA) {
            if (he(a)) {
                r.push({str:a,idx:s,tokenType:i});
            } else if (Xe(a)&&qf(a)) {
                r.push({str:a.source,idx:s,tokenType:i});
            }
        }

        return r;
    },[]);

    d(n,(r,i)=>{d(t,({str,idx,tokenType})=>{if(i<idx&&zf(str,r.PATTERN)){const l=`Token: ->${tokenType.name}<- can never be matched.
    Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
    See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:l,type:j.UNREACHABLE_PATTERN,tokenTypes:[r,tokenType]})}})});

    return e;
}function zf(n,e){if(Xe(e)){const t=e.exec(n);return t!==null&&t.index===0}else{if (bo_1(e)) {
    return e(n,0,[],{});
}if (h(e,"exec")) {
    return e.exec(n,0,[],{});
}if (typeof e=="string") {
    return e===n;
}throw Error("non exhaustive match")}}function qf(n){return g_1([".","\\","[","]","|","^","$","(",")","?","*","+","{"],t => {
    return n.source.indexOf(t)!==-1;
})===void 0;}function Ca(n){const e=n.ignoreCase?"i":"";return new RegExp(`^(?:${n.source})`,e)}function Na(n){const e=n.ignoreCase?"iy":"y";return new RegExp(`${n.source}`,e)}function Yf(n,e,t){
    const r=[];

    if (!h(n,Un)) {
        r.push({message:"A MultiMode Lexer cannot be initialized without a <"+Un+`> property in its definition
        `,type:j.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE});
    }

    if (!h(n,Rr)) {
        r.push({message:"A MultiMode Lexer cannot be initialized without a <"+Rr+`> property in its definition
        `,type:j.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY});
    }

    if (h(n,Rr)&&h(n,Un)&&!h(n.modes,n.defaultMode)) {
        r.push({message:`A MultiMode Lexer cannot be initialized with a ${Un}: <${n.defaultMode}>which does not exist
        `,type:j.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST});
    }

    if (h(n,Rr)) {
        d(n.modes,(i,s)=>{d(i,(a,o)=>{if (i(a)) {
            r.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${o}>
            `,type:j.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});
        } else if(h(a,"LONGER_ALT")){const l=c5(a.LONGER_ALT)?a.LONGER_ALT:[a.LONGER_ALT];d(l,u=>{
            if (!i(u)&&!de(i,u)) {
                r.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${a.name}> outside of mode <${s}>
                `,type:j.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE});
            }
        })}})});
    }

    return r;
}function Xf(n,e,t){
    const r=[];let i=false;
    const s=Zn(f_1(v_1(n.modes)));

    const a=pi(s,l => {
        return l[Rt]===fe.NA;
    });

    const o=ou(t);

    if (e) {
        d(a,l=>{const u=au(l,o);if (u!==false)
            {const d={message:eh(l,u),type:u.issue,tokenType:l};r.push(d)} else {
            if (h(l,"LINE_BREAKS")) {
                if (l.LINE_BREAKS===true) {
                    (i = true);
                }
            } else if (Zs(o,l.PATTERN)) {
                (i = true);
            }
        }});
    }

    if (e&&!i) {
        r.push({message:`Warning: No LINE_BREAKS Found.
            This Lexer has been defined to track line and column information,
            But none of the Token Types can be identified as matching a line terminator.
            See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
            for details.`,type:j.NO_LINE_BREAKS_FLAGS});
    }

    return r;
}function Jf(n){
    const e={};
    const t=k(n);

    d(t,r=>{const i=n[r];if (c5(i)) {
        e[r]=[];
    } else {
        throw Error("non exhaustive match")
    }});

    return e;
}function su(n){const e=n.PATTERN;if (Xe(e)) {
    return false;
}if (bo_1(e)) {
    return true;
}if (h(e,"exec")) {
    return true;
}if (he(e)) {
    return false;
}throw Error("non exhaustive match")}function Qf(n){return he(n)&&n.length===1?n.charCodeAt(0):false;}const Zf={test:function(n){const e=n.length;for(let t=this.lastIndex;t<e;t++){const r=n.charCodeAt(t);if (r===10) {
    this.lastIndex=t+1;
    return true;
}if (r===13) {
    if (n.charCodeAt(t+1)===10) {
        this.lastIndex=t+2;
    } else {
        this.lastIndex=t+1;
    }

    return true;
}}return false;},lastIndex:0};function au(n,e){if (h(n,"LINE_BREAKS")) {
    return false;
}if(Xe(n.PATTERN)){try{Zs(e,n.PATTERN)}catch(t){return{issue:j.IDENTIFY_TERMINATOR,errMsg:t.message}}return false;}else{if (he(n.PATTERN)) {
    return false;
}if (su(n)) {
    return{issue:j.CUSTOM_LINE_BREAK};
}throw Error("non exhaustive match")}}function eh(n,e){if (e.issue===j.IDENTIFY_TERMINATOR) {
    return`Warning: unable to identify line terminator usage in pattern.
        The problem is in the <${n.name}> Token Type
         Root cause: ${e.errMsg}.
        For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
}if (e.issue===j.CUSTOM_LINE_BREAK) {
    return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
        The problem is in the <${n.name}> Token Type
        For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
}throw Error("non exhaustive match")}function ou(n){return m(n,t => {
    return he(t)?t.charCodeAt(0):t;
});}function Fi(n,e,t){
    if (n[e]===void 0) {
        n[e]=[t];
    } else {
        n[e].push(t);
    }
}const Bn=256;let Or=[];function et(n){return n<Bn?n:Or[n]}function th(){if(bp_1(Or)){Or=new Array(65536);for (let n=0; n<65536; n++) {
    Or[n]=n>255?255+~~(n/255):n
}}}function rr(n,e){const t=n.tokenTypeIdx;return t===e.tokenTypeIdx?true:e.isParent===true&&e.categoryMatchesMap[t]===true;}function Xr(n,e){return n.tokenTypeIdx===e.tokenTypeIdx}let wa=1;const lu={};function ir(n){
    const e=nh(n);
    rh(e);
    sh(e);
    ih(e);
    d(e,t=>{t.isParent=t.categoryMatches.length>0});
}function nh(n){
    let e=c_1(n);
    let t=n;
    let r=true;

    while (r) {
        t=Zn(f_1(m(t,s => {
            return s.CATEGORIES;
        })));const i=hi(t,e);
        e=e.concat(i);

        if (bp_1(i)) {
            r=false;
        } else {
            t=i;
        }
    }

    return e
}function rh(n){d(n,e=>{
    if (!cu(e)) {
        lu[wa]=e;
        e.tokenTypeIdx=wa++;
    }

    if (_a(e)&&!c5(e.CATEGORIES)) {
        (e.CATEGORIES = [e.CATEGORIES]);
    }

    if (!_a(e)) {
        (e.CATEGORIES = []);
    }

    if (!ah(e)) {
        (e.categoryMatches = []);
    }

    if (!oh(e)) {
        (e.categoryMatchesMap = {});
    }
})}function ih(n){d(n,e=>{
    e.categoryMatches=[];
    d(e.categoryMatchesMap,(t,r)=>{e.categoryMatches.push(lu[r].tokenTypeIdx)});
})}function sh(n){d(n,e=>{uu([],e)})}function uu(n,e){
    d(n,t=>{e.categoryMatchesMap[t.tokenTypeIdx]=true});
    d(e.CATEGORIES,t=>{
        const r=n.concat(e);

        if (!de(r,t)) {
            uu(r,t);
        }
    });
}function cu(n){return h(n,"tokenTypeIdx");}function _a(n){return h(n,"CATEGORIES");}function ah(n){return h(n,"categoryMatches");}function oh(n){return h(n,"categoryMatchesMap");}function lh(n){return h(n,"tokenTypeIdx");}const fs={buildUnableToPopLexerModeMessage(n){return`Unable to pop Lexer Mode after encountering Token ->${n.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(n,e,t,r,i){return`unexpected character: ->${n.charAt(e)}<- at offset: ${e}, skipped ${t} characters.`}};var j = {
    MISSING_PATTERN: 0,
    INVALID_PATTERN: 1,
    EOI_ANCHOR_FOUND: 2,
    UNSUPPORTED_FLAGS_FOUND: 3,
    DUPLICATE_PATTERNS_FOUND: 4,
    INVALID_GROUP_TYPE_FOUND: 5,
    PUSH_MODE_DOES_NOT_EXIST: 6,
    MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE: 7,
    MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY: 8,
    MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST: 9,
    LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED: 10,
    SOI_ANCHOR_FOUND: 11,
    EMPTY_MATCH_PATTERN: 12,
    NO_LINE_BREAKS_FLAGS: 13,
    UNREACHABLE_PATTERN: 14,
    IDENTIFY_TERMINATOR: 15,
    CUSTOM_LINE_BREAK: 16,
    MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE: 17,

    // reverse mapping
    0: "MISSING_PATTERN",

    1: "INVALID_PATTERN",
    2: "EOI_ANCHOR_FOUND",
    3: "UNSUPPORTED_FLAGS_FOUND",
    4: "DUPLICATE_PATTERNS_FOUND",
    5: "INVALID_GROUP_TYPE_FOUND",
    6: "PUSH_MODE_DOES_NOT_EXIST",
    7: "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",
    8: "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",
    9: "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",
    10: "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",
    11: "SOI_ANCHOR_FOUND",
    12: "EMPTY_MATCH_PATTERN",
    13: "NO_LINE_BREAKS_FLAGS",
    14: "UNREACHABLE_PATTERN",
    15: "IDENTIFY_TERMINATOR",
    16: "CUSTOM_LINE_BREAK",
    17: "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"
};const Vn={deferDefinitionErrorsHandling:false,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:false,safeMode:false,errorMessageProvider:fs,traceInitPerf:false,skipValidations:false,recoveryEnabled:true};Object.freeze(Vn);class fe{constructor(e,t=Vn){
    this.lexerDefinition=e;
    this.lexerDefinitionErrors=[];
    this.lexerDefinitionWarning=[];
    this.patternIdxToConfig={};
    this.charCodeToPatternIdxToConfig={};
    this.modes=[];
    this.emptyGroups={};
    this.trackStartLines=true;
    this.trackEndLines=true;
    this.hasCustom=false;
    this.canModeBeOptimized={};

    this.TRACE_INIT=(i,s)=>{if (this.traceInitPerf===true) {
        this.traceInitIndent++;const a=new Array(this.traceInitIndent+1).join("	");

        if (this.traceInitIndent<this.traceInitMaxIdent) {
            console.log(`${a}--> <${i}>`);
        }

        const {time,value}=eu(s);
        const u=time>10?console.warn:console.log;

        if (this.traceInitIndent<this.traceInitMaxIdent) {
            u(`${a}<-- <${i}> time: ${time}ms`);
        }

        this.traceInitIndent--;
        return value;
    } else {
        return s()
    }};

    if (typeof t=="boolean") {
        throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
        a boolean 2nd argument is no longer supported`);
    }

    this.config=ke({},Vn,t);const r=this.config.traceInitPerf;

    if (r===true) {
        this.traceInitMaxIdent=Infinity;
        this.traceInitPerf=true;
    } else if (typeof r=="number") {
        this.traceInitMaxIdent=r;
        this.traceInitPerf=true;
    }

    this.traceInitIndent=-1;

    this.TRACE_INIT("Lexer Constructor",()=>{
        let i;
        let s=true;

        this.TRACE_INIT("Lexer Config handling",()=>{
            if (this.config.lineTerminatorsPattern===Vn.lineTerminatorsPattern) {
                this.config.lineTerminatorsPattern=Zf;
            } else if (this.config.lineTerminatorCharacters===Vn.lineTerminatorCharacters) {
                throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
                    For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
            }if (t.safeMode&&t.ensureOptimizations) {
                    throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
                }
            this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking);
            this.trackEndLines=/full/i.test(this.config.positionTracking);

            if (c5(e)) {
                i={modes:{defaultMode:c_1(e)},defaultMode:Un};
            } else {
                s=false;
                i=c_1(e);
            }
        });

        if (this.config.skipValidations===false) {
            this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(Yf(i,this.trackStartLines,this.config.lineTerminatorCharacters))});
            this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(Xf(i,this.trackStartLines,this.config.lineTerminatorCharacters))});
        }

        i.modes=i.modes?i.modes:{};

        d(i.modes,(o,l)=>{i.modes[l]=pi(o,u => {
            return i(u);
        })});

        const a=k(i.modes);

        d(i.modes,(o,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{
            this.modes.push(l);

            if (this.config.skipValidations===false) {
                this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(Of(o,a))});
            }

            if (bp_1(this.lexerDefinitionErrors)) {
                ir(o);let u;
                this.TRACE_INIT("analyzeTokenTypes",()=>{u=Lf(o,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:t.positionTracking,ensureOptimizations:t.ensureOptimizations,safeMode:t.safeMode,tracer:this.TRACE_INIT})});
                this.patternIdxToConfig[l]=u.patternIdxToConfig;
                this.charCodeToPatternIdxToConfig[l]=u.charCodeToPatternIdxToConfig;
                this.emptyGroups=ke({},this.emptyGroups,u.emptyGroups);
                this.hasCustom=u.hasCustom||this.hasCustom;
                this.canModeBeOptimized[l]=u.canBeOptimized;
            }
        })});

        this.defaultMode=i.defaultMode;

        if (!bp_1(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling) {const l=m(this.lexerDefinitionErrors,u => {
            return u.message;
        }).join(`-----------------------
        `);throw new Error(`Errors detected in definition of Lexer:
        `+l)}

        d(this.lexerDefinitionWarning,o=>{Zl(o.message)});

        this.TRACE_INIT("Choosing sub-methods implementations",()=>{
            if (iu) {
                this.chopInput=c6;
                this.match=this.matchWithTest;
            } else {
                this.updateLastIndex=bp_1_1;
                this.match=this.matchWithExec;
            }

            if (s) {
                (this.handleModes = bp_1_1);
            }

            if (this.trackStartLines===false) {
                (this.computeNewColumn = c6);
            }

            if (this.trackEndLines===false) {
                (this.updateTokenEndLineColumnLocation = bp_1_1);
            }

            if (/full/i.test(this.config.positionTracking)) {
                this.createTokenInstance=this.createFullToken;
            } else if (/onlyStart/i.test(this.config.positionTracking)) {
                this.createTokenInstance=this.createStartOnlyToken;
            } else if (/onlyOffset/i.test(this.config.positionTracking)) {
                this.createTokenInstance=this.createOffsetOnlyToken;
            } else {
                throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
            }

            if (this.hasCustom) {
                this.addToken=this.addTokenUsingPush;
                this.handlePayload=this.handlePayloadWithCustom;
            } else {
                this.addToken=this.addTokenUsingMemberAccess;
                this.handlePayload=this.handlePayloadNoCustom;
            }
        });

        this.TRACE_INIT("Failed Optimization Warnings",()=>{const o=r(this.canModeBeOptimized,(l, u, c) => {
            if (u===false) {
                l.push(c);
            }

            return l;
        },[]);if (t.ensureOptimizations&&!bp_1(o)) {
            throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
                 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
                 Or inspect the console log for details on how to resolve these issues.`)
        }});

        this.TRACE_INIT("clearRegExpParserCache",()=>{Cf()});
        this.TRACE_INIT("toFastProperties",()=>{tu(this)});
    });
}tokenize(e,t=this.defaultMode){if(!bp_1(this.lexerDefinitionErrors)){const i=m(this.lexerDefinitionErrors,s => {
    return s.message;
}).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,t)}tokenizeInternal(e,t){
    let r;
    let i;
    let s;
    let a;
    let o;
    let l;
    let u;
    let c;
    let d;
    let h;
    let f;
    let m;
    let g;
    let A;
    let T;
    const E=e;
    const R=E.length;
    let I=0;
    let F=0;
    const ie=this.hasCustom?0:Math.floor(e.length/10);
    const _e=new Array(ie);
    const ye=[];
    let Fe=this.trackStartLines?1:void 0;
    let Ie=this.trackStartLines?1:void 0;
    const k=Jf(this.emptyGroups);
    const y=this.trackStartLines;
    const S=this.config.lineTerminatorsPattern;
    let x=0;
    let O=[];
    let L=[];
    const _=[];
    const Te=[];
    Object.freeze(Te);let q;function K(){return O}function ct(se){
            const Ce=et(se);
            const It=L[Ce];
            return It===void 0?Te:It
        }const Nc=se=>{if(_.length===1&&se.tokenType.PUSH_MODE===void 0){const Ce=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(se);ye.push({offset:se.startOffset,line:se.startLine,column:se.startColumn,length:se.image.length,message:Ce})}else{
        _.pop();const Ce=l_1(_);
        O=this.patternIdxToConfig[Ce];
        L=this.charCodeToPatternIdxToConfig[Ce];
        x=O.length;
        const It=this.canModeBeOptimized[Ce]&&this.config.safeMode===false;

        if (L&&It) {
            q=ct;
        } else {
            q=K;
        }
    }};function ha(se){
        _.push(se);
        L=this.charCodeToPatternIdxToConfig[se];
        O=this.patternIdxToConfig[se];
        x=O.length;
        x=O.length;
        const Ce=this.canModeBeOptimized[se]&&this.config.safeMode===false;

        if (L&&Ce) {
            q=ct;
        } else {
            q=K;
        }
    }ha.call(this,t);let Le;const pa=this.config.recoveryEnabled;

    while (I<R) {
            l=null;
            const se=E.charCodeAt(I);
            const Ce=q(se);
            const It=Ce.length;
            for(r=0;r<It;r++){
                Le=Ce[r];const Re=Le.pattern;u=null;const Ve=Le.short;

                if (Ve!==false) {
                    if (se===Ve) {
                        (l = Re);
                    }
                } else if (Le.isCustom===true) {
                    T=Re.exec(E,I,_e,k);
                    T!==null?(l=T[0],T.payload!==void 0&&(u=T.payload)):l=null;
                } else {
                    this.updateLastIndex(Re,I);
                    l=this.match(Re,e,I);
                }

                if (l!==null) {
                    o=Le.longerAlt;

                    if (o!==void 0) {const Qe=o.length;for(s=0;s<Qe;s++){
                        const Ke=O[o[s]];
                        const dt=Ke.pattern;
                        c=null;

                        if (Ke.isCustom===true) {
                            T=dt.exec(E,I,_e,k);
                            T!==null?(a=T[0],T.payload!==void 0&&(c=T.payload)):a=null;
                        } else {
                            this.updateLastIndex(dt,I);
                            a=this.match(dt,e,I);
                        }

                        if (a&&a.length>l.length) {
                            l=a;
                            u=c;
                            Le=Ke;
                            break
                        }
                    }}

                    break
                }
            }if(l!==null){
        d=l.length;
        h=Le.group;

        if (h!==void 0) {
            f=Le.tokenTypeIdx;
            m=this.createTokenInstance(l,I,f,Le.tokenType,Fe,Ie,d);
            this.handlePayload(m,u);
            h===false?F=this.addToken(_e,F,m):k[h].push(m);
        }

        e=this.chopInput(e,d);
        I=I+d;
        Ie=this.computeNewColumn(Ie,d);

        if (y===true&&Le.canLineTerminator===true) {
            let Re=0;
            let Ve;
            let Qe;
            S.lastIndex=0;do {
                Ve=S.test(l);

                if (Ve===true) {
                    Qe=S.lastIndex-1;
                    Re++;
                }
            } while (Ve===true);

            if (Re!==0) {
                Fe=Fe+Re;
                Ie=d-Qe;
                this.updateTokenEndLineColumnLocation(m,h,Qe,Re,Fe,Ie,d);
            }
        }

        this.handleModes(Le,Nc,ha,m)
    }else{
        const Re=I;
        const Ve=Fe;
        const Qe=Ie;
        let Ke=pa===false;

        while (Ke===false&&I<R) {
                        e=this.chopInput(e,1);
                        I++;

                        for (i=0; i<x; i++) {
                            const dt=O[i];
                            const Ni=dt.pattern;
                            const ma=dt.short;

                            if (ma!==false) {
                                if (E.charCodeAt(I)===ma) {
                                    (Ke = true);
                                }
                            } else if (dt.isCustom===true) {
                                Ke=Ni.exec(E,I,_e,k)!==null;
                            } else {
                                this.updateLastIndex(Ni,I);
                                Ke=Ni.exec(e)!==null;
                            }

                            if (Ke===true) {
                                break
                            }
                        }
                    }

        g=I-Re;
        Ie=this.computeNewColumn(Ie,g);
        A=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(E,Re,g,Ve,Qe);
        ye.push({offset:Re,line:Ve,column:Qe,length:g,message:A});

        if (pa===false) {
            break
        }
    }
        }

    if (!this.hasCustom) {
        (_e.length = F);
    }

    return {tokens:_e,groups:k,errors:ye};
}handleModes(e,t,r,i){if (e.pop===true) {
    const s=e.push;
    t(i);

    if (s!==void 0) {
        r.call(this,s);
    }
} else {
    if (e.push!==void 0) {
        r.call(this,e.push);
    }
}}chopInput(e,t){return e.substring(t)}updateLastIndex(e,t){e.lastIndex=t}updateTokenEndLineColumnLocation(e,t,r,i,s,a,o){
    let l;
    let u;

    if (t!==void 0) {
        l=r===o-1;
        u=l?-1:0;
        i===1&&l===true||(e.endLine=s+u,e.endColumn=a-1+-u);
    }
}computeNewColumn(e,t){return e+t}createOffsetOnlyToken(e,t,r,i){return{image:e,startOffset:t,tokenTypeIdx:r,tokenType:i}}createStartOnlyToken(e,t,r,i,s,a){return{image:e,startOffset:t,startLine:s,startColumn:a,tokenTypeIdx:r,tokenType:i}}createFullToken(e,t,r,i,s,a,o){return{image:e,startOffset:t,endOffset:t+o-1,startLine:s,endLine:s,startColumn:a,endColumn:a+o-1,tokenTypeIdx:r,tokenType:i}}addTokenUsingPush(e,t,r){
    e.push(r);
    return t;
}addTokenUsingMemberAccess(e,t,r){
    e[t]=r;
    t++;
    return t;
}handlePayloadNoCustom(e,t){}handlePayloadWithCustom(e,t){
    if (t!==null) {
        (e.payload = t);
    }
}matchWithTest(e,t,r){return e.test(t)===true?t.substring(r,e.lastIndex):null;}matchWithExec(e,t){const r=e.exec(t);return r!==null?r[0]:null}}fe.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";fe.NA=/NOT_APPLICABLE/;function Lt(n){return du(n)?n.LABEL:n.name}function du(n){return he(n.LABEL)&&n.LABEL!==""}
const uh="parent";
const La="categories";
const Oa="label";
const ba="group";
const Pa="push_mode";
const Ma="pop_mode";
const Da="longer_alt";
const Fa="line_breaks";
const Ga="start_chars_hint";
function fu(n){return ch(n)}function ch(n){
    const e=n.pattern;
    const t={};
    t.name=n.name;

    if (!i(e)) {
        (t.PATTERN = e);
    }

    if (h(n,uh)) {
        throw`The parent property is no longer supported.
        See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
    }

    if (h(n,La)) {
        (t.CATEGORIES = n[La]);
    }

    ir([t]);

    if (h(n,Oa)) {
        (t.LABEL = n[Oa]);
    }

    if (h(n,ba)) {
        (t.GROUP = n[ba]);
    }

    if (h(n,Ma)) {
        (t.POP_MODE = n[Ma]);
    }

    if (h(n,Pa)) {
        (t.PUSH_MODE = n[Pa]);
    }

    if (h(n,Da)) {
        (t.LONGER_ALT = n[Da]);
    }

    if (h(n,Fa)) {
        (t.LINE_BREAKS = n[Fa]);
    }

    if (h(n,Ga)) {
        (t.START_CHARS_HINT = n[Ga]);
    }

    return t;
}const tt=fu({name:"EOF",pattern:fe.NA});ir([tt]);function ea(n,e,t,r,i,s,a,o){return{image:e,startOffset:t,endOffset:r,startLine:i,endLine:s,startColumn:a,endColumn:o,tokenTypeIdx:n.tokenTypeIdx,tokenType:n}}function hu(n,e){return rr(n,e)}const wt={buildMismatchTokenMessage({expected,actual,previous,ruleName}){return `Expecting ${du(expected)?`--> ${Lt(expected)} <--`:`token of type --> ${expected.name} <--`} but found --> '${actual.image}' <--`;},buildNotAllInputParsedMessage({firstRedundant,ruleName}){return "Redundant input, expecting EOF but found: "+firstRedundant.image;},buildNoViableAltMessage({expectedPathsPerAlt,actual,previous,customUserDescription,ruleName}){
    const s="Expecting: ";

    const o=`
    but found: '`+Pe(actual).image+"'";

    if (customUserDescription) {
        return s+customUserDescription+o;
    }{
        const l=customUserDescription(expectedPathsPerAlt,(h, f) => {
            return h.concat(f);
        },[]);

        const u=m(l,h => {
            return `[${m(h,f => {
                return Lt(f);
            }).join(", ")}]`;
        });

        const d=`one of these possible Token sequences:
        ${m(u,(h, f) => {
            return `  ${f+1}. ${h}`;
        }).join(`
        `)}`;

        return s+d+o
    }
},buildEarlyExitMessage({expectedIterationPaths,actual,customUserDescription,ruleName}){
    const i="Expecting: ";

    const a=`
    but found: '`+Pe(actual).image+"'";

    if (customUserDescription) {
        return i+customUserDescription+a;
    }{const l=`expecting at least one iteration which starts with one of these possible Token sequences::
      <${m(expectedIterationPaths,u => {
        return `[${m(u,c => {
            return Lt(c);
        }).join(",")}]`;
    }).join(" ,")}>`;return i+l+a}
}};Object.freeze(wt);

const dh={buildRuleNotFoundError(n,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+n.name+"<-"}};

const mt={buildDuplicateFoundError(n,e){
    function t(c){return c instanceof G?c.terminalType.name:c instanceof ue?c.nonTerminalName:""}
    const r=n.name;
    const i=Pe(e);
    const s=i.idx;
    const a=Ge(i);
    const o=t(i);
    const l=s>0;
    let u=`->${a}${l?s:""}<- ${o?`with argument: ->${o}<-`:""}
                      appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                      For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                      `;
    u=u.replace(/[ \t]+/g," ");

    u=u.replace(/\s\s+/g,`
    `);

    return u;
},buildNamespaceConflictError(n){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${n.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(n){
    const e=m(n.prefixPath,i => {
        return Lt(i);
    }).join(", ");

    const t=n.alternation.idx===0?"":n.alternation.idx;
    return`Ambiguous alternatives: <${n.ambiguityIndices.join(" ,")}> due to common lookahead prefix
    in <OR${t}> inside <${n.topLevelRule.name}> Rule,
    <${e}> may appears as a prefix path in all these alternatives.
    See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
    For Further details.`
},buildAlternationAmbiguityError(n){
    const e=m(n.prefixPath,i => {
        return Lt(i);
    }).join(", ");

    const t=n.alternation.idx===0?"":n.alternation.idx;
    let r=`Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(" ,")}> in <OR${t}> inside <${n.topLevelRule.name}> Rule,
    <${e}> may appears as a prefix path in all these alternatives.
    `;

    r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
    For Further details.`;

    return r;
},buildEmptyRepetitionError(n){
    let e=Ge(n.repetition);

    if (n.repetition.idx!==0) {
        (e += n.repetition.idx);
    }

    return `The repetition <${e}> within Rule <${n.topLevelRule.name}> can never consume any tokens.
    This could lead to an infinite loop.`;
},buildTokenNameError(n){return"deprecated"},buildEmptyAlternationError(n){return`Ambiguous empty alternative: <${n.emptyChoiceIdx+1}> in <OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(n){return`An Alternation cannot have more than 256 alternatives:
<OR${n.alternation.idx}> inside <${n.topLevelRule.name}> Rule.
 has ${n.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(n){
    const e=n.topLevelRule.name;

    const t=m(n.leftRecursionPath,s => {
        return s.name;
    });

    const r=`${e} --> ${t.concat([e]).join(" --> ")}`;
    return`Left Recursion found in grammar.
    rule: <${e}> can be invoked from itself (directly or indirectly)
    without consuming any Tokens. The grammar path that causes this is: 
     ${r}
     To fix this refactor your grammar to remove the left recursion.
    see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`
},buildInvalidRuleNameError(n){return"deprecated"},buildDuplicateRuleNameError(n){
    let e;

    if (n.topLevelRule instanceof an) {
        e=n.topLevelRule.name;
    } else {
        e=n.topLevelRule;
    }

    return `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${n.grammarName}<-`;
}};

function fh(n,e){
    const t=new hh(n,e);
    t.resolveRefs();
    return t.errors;
}class hh extends on{constructor(e,t){
    super();
    this.nameToTopRule=e;
    this.errMsgProvider=t;
    this.errors=[];
}resolveRefs(){d(v_1(this.nameToTopRule),e=>{
    this.currTopLevel=e;
    e.accept(this);
})}visitNonTerminal(e){const t=this.nameToTopRule[e.nonTerminalName];if (t) {
    e.referencedRule=t;
} else
    {const r=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:r,type:ce.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}}class ph extends Ri{constructor(e,t){
    super();
    this.topProd=e;
    this.path=t;
    this.possibleTokTypes=[];
    this.nextProductionName="";
    this.nextProductionOccurrence=0;
    this.found=false;
    this.isAtEndOfPath=false;
}startWalking(){
    this.found=false;

    if (this.path.ruleStack[0]!==this.topProd.name) {
        throw Error("The path does not start with the walker's top Rule!");
    }

    this.ruleStack=c_1(this.path.ruleStack).reverse();
    this.occurrenceStack=c_1(this.path.occurrenceStack).reverse();
    this.ruleStack.pop();
    this.occurrenceStack.pop();
    this.updateExpectedNext();
    this.walk(this.topProd);
    return this.possibleTokTypes;
}walk(e,t=[]){
    if (!this.found) {
        super.walk(e,t);
    }
}walkProdRef(e,t,r){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){
    const i=t.concat(r);
    this.updateExpectedNext();
    this.walk(e.referencedRule,i);
}}updateExpectedNext(){
    if (bp_1(this.ruleStack)) {
        this.nextProductionName="";
        this.nextProductionOccurrence=0;
        this.isAtEndOfPath=true;
    } else {
        this.nextProductionName=this.ruleStack.pop();
        this.nextProductionOccurrence=this.occurrenceStack.pop();
    }
}}class mh extends ph{constructor(e,t){
    super(e,t);
    this.path=t;
    this.nextTerminalName="";
    this.nextTerminalOccurrence=0;
    this.nextTerminalName=this.path.lastTok.name;
    this.nextTerminalOccurrence=this.path.lastTokOccurrence;
}walkTerminal(e,t,r){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){
    const i=t.concat(r);
    const s=new pe({definition:i});
    this.possibleTokTypes=nr(s);
    this.found=true;
}}}class Ai extends Ri{constructor(e,t){
    super();
    this.topRule=e;
    this.occurrence=t;
    this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0};
}startWalking(){
    this.walk(this.topRule);
    return this.result;
}}class gh extends Ai{walkMany(e,t,r){if (e.idx===this.occurrence) {
    const i=Pe(t.concat(r));
    this.result.isEndOfRule=i===void 0;

    if (i instanceof G) {
        this.result.token=i.terminalType;
        this.result.occurrence=i.idx;
    }
} else {
    super.walkMany(e,t,r)
}}}class Ua extends Ai{walkManySep(e,t,r){if (e.idx===this.occurrence) {
    const i=Pe(t.concat(r));
    this.result.isEndOfRule=i===void 0;

    if (i instanceof G) {
        this.result.token=i.terminalType;
        this.result.occurrence=i.idx;
    }
} else {
    super.walkManySep(e,t,r)
}}}class yh extends Ai{walkAtLeastOne(e,t,r){if (e.idx===this.occurrence) {
    const i=Pe(t.concat(r));
    this.result.isEndOfRule=i===void 0;

    if (i instanceof G) {
        this.result.token=i.terminalType;
        this.result.occurrence=i.idx;
    }
} else {
    super.walkAtLeastOne(e,t,r)
}}}class Ba extends Ai{walkAtLeastOneSep(e,t,r){if (e.idx===this.occurrence) {
    const i=Pe(t.concat(r));
    this.result.isEndOfRule=i===void 0;

    if (i instanceof G) {
        this.result.token=i.terminalType;
        this.result.occurrence=i.idx;
    }
} else {
    super.walkAtLeastOneSep(e,t,r)
}}}function hs(n,e,t=[]){
    t=c_1(t);
    let r=[];
    let i=0;
    function s(o){return o.concat(Q(n,i+1))}function a(o){const l=hs(s(o),e,t);return r.concat(l)}

    while (t.length<e&&i<n.length) {const o=n[i];if (o instanceof pe) {
            return a(o.definition);
        }if (o instanceof ue) {
            return a(o.definition);
        }if (o instanceof ne) {
            r=a(o.definition);
        } else if(o instanceof xe){const l=o.definition.concat([new W({definition:o.definition})]);return a(l)}else if(o instanceof Se){const l=[new pe({definition:o.definition}),new W({definition:[new G({terminalType:o.separator})].concat(o.definition)})];return a(l)}else if(o instanceof me){const l=o.definition.concat([new W({definition:[new G({terminalType:o.separator})].concat(o.definition)})]);r=a(l)}else if(o instanceof W){const l=o.definition.concat([new W({definition:o.definition})]);r=a(l)}else{if (o instanceof ge) {
            d(o.definition,l=>{
                if (bp_1(l.definition)===false) {
                    (r = a(l.definition));
                }
            });
            return r;
        }if (o instanceof G) {
            t.push(o.terminalType);
        } else {
            throw Error("non exhaustive match")
        }}i++}

    r.push({partialPath:t,suffixDef:Q(n,i)});
    return r;
}function pu(n,e,t,r){
    const i="EXIT_NONE_TERMINAL";
    const s=[i];
    const a="EXIT_ALTERNATIVE";
    let o=false;
    const l=e.length;
    const u=l-r-1;
    const c=[];
    const d=[];
    for(d.push({idx:-1,def:n,ruleStack:[],occurrenceStack:[]});!bp_1(d);){
        const h=d.pop();if(h===a){
        if (o&&l_1(d).idx<=u) {
            d.pop();
        }

        continue
    }
        const f=h.def;
        const m=h.idx;
        const g=h.ruleStack;
        const A=h.occurrenceStack;
        if (bp_1(f)) {
            continue;
        }const T=f[0];if(T===i){const E={idx:m,def:Q(f),ruleStack:Yn(g),occurrenceStack:Yn(A)};d.push(E)}else if (T instanceof G) {
            if(m<l-1){
                const E=m+1;
                const R=e[E];
                if(t(R,T.terminalType)){const I={idx:E,def:Q(f),ruleStack:g,occurrenceStack:A};d.push(I)}
            }else if (m===l-1) {
                c.push({nextTokenType:T.terminalType,nextTokenOccurrence:T.idx,ruleStack:g,occurrenceStack:A});
                o=true;
            } else {
                throw Error("non exhaustive match");
            }
        } else if(T instanceof ue){const E=c_1(g);E.push(T.nonTerminalName);const R=c_1(A);R.push(T.idx);const I={idx:m,def:T.definition.concat(s,Q(f)),ruleStack:E,occurrenceStack:R};d.push(I)}else if(T instanceof ne){
            const E={idx:m,def:Q(f),ruleStack:g,occurrenceStack:A};
            d.push(E);
            d.push(a);
            const R={idx:m,def:T.definition.concat(Q(f)),ruleStack:g,occurrenceStack:A};d.push(R)
        }else if(T instanceof xe){
            const E=new W({definition:T.definition,idx:T.idx});
            const R=T.definition.concat([E],Q(f));
            const I={idx:m,def:R,ruleStack:g,occurrenceStack:A};
            d.push(I)
        }else if(T instanceof Se){
            const E=new G({terminalType:T.separator});
            const R=new W({definition:[E].concat(T.definition),idx:T.idx});
            const I=T.definition.concat([R],Q(f));
            const F={idx:m,def:I,ruleStack:g,occurrenceStack:A};
            d.push(F)
        }else if(T instanceof me){
            const E={idx:m,def:Q(f),ruleStack:g,occurrenceStack:A};
            d.push(E);
            d.push(a);
            const R=new G({terminalType:T.separator});
            const I=new W({definition:[R].concat(T.definition),idx:T.idx});
            const F=T.definition.concat([I],Q(f));
            const ie={idx:m,def:F,ruleStack:g,occurrenceStack:A};
            d.push(ie)
        }else if(T instanceof W){
            const E={idx:m,def:Q(f),ruleStack:g,occurrenceStack:A};
            d.push(E);
            d.push(a);
            const R=new W({definition:T.definition,idx:T.idx});
            const I=T.definition.concat([R],Q(f));
            const F={idx:m,def:I,ruleStack:g,occurrenceStack:A};
            d.push(F)
        }else if (T instanceof ge) {
            for(let E=T.definition.length-1;E>=0;E--){
                const R=T.definition[E];
                const I={idx:m,def:R.definition.concat(Q(f)),ruleStack:g,occurrenceStack:A};
                d.push(I);
                d.push(a);
            }
        } else if (T instanceof pe) {
            d.push({idx:m,def:T.definition.concat(Q(f)),ruleStack:g,occurrenceStack:A});
        } else if (T instanceof an) {
            d.push(Th(T,m,g,A));
        } else {
            throw Error("non exhaustive match")
        }
    }return c
}function Th(n,e,t,r){
    const i=c_1(t);i.push(n.name);const s=c_1(r);
    s.push(1);
    return {idx:e,def:n.definition,ruleStack:i,occurrenceStack:s};
}var B = {
    OPTION: 0,
    REPETITION: 1,
    REPETITION_MANDATORY: 2,
    REPETITION_MANDATORY_WITH_SEPARATOR: 3,
    REPETITION_WITH_SEPARATOR: 4,
    ALTERNATION: 5,

    // reverse mapping
    0: "OPTION",

    1: "REPETITION",
    2: "REPETITION_MANDATORY",
    3: "REPETITION_MANDATORY_WITH_SEPARATOR",
    4: "REPETITION_WITH_SEPARATOR",
    5: "ALTERNATION"
};function ta(n){if (n instanceof ne||n==="Option") {
    return B.OPTION;
}if (n instanceof W||n==="Repetition") {
    return B.REPETITION;
}if (n instanceof xe||n==="RepetitionMandatory") {
    return B.REPETITION_MANDATORY;
}if (n instanceof Se||n==="RepetitionMandatoryWithSeparator") {
    return B.REPETITION_MANDATORY_WITH_SEPARATOR;
}if (n instanceof me||n==="RepetitionWithSeparator") {
    return B.REPETITION_WITH_SEPARATOR;
}if (n instanceof ge||n==="Alternation") {
    return B.ALTERNATION;
}throw Error("non exhaustive match")}function Va(n){
    const {occurrence,rule,prodType,maxLookahead}=n;
    const s=ta(prodType);
    return s===B.ALTERNATION?Ei(occurrence,rule,maxLookahead):ki(occurrence,rule,s,maxLookahead);
}function Rh(n,e,t,r,i,s){
    const a=Ei(n,e,t);
    const o=yu(a)?Xr:rr;
    return s(a,r,o,i)
}function vh(n,e,t,r,i,s){
    const a=ki(n,e,i,t);
    const o=yu(a)?Xr:rr;
    return s(a[0],o,r)
}function Ah(n,e,t,r){
    const i=n.length;

    const s=be(n,a => {
        return be(a,o => {
            return o.length===1;
        });
    });

    if (e) {
        return function(a){const o=m(a,l => {
            return l.GATE;
        });for(let l=0;l<i;l++){
            const u=n[l];
            const c=u.length;
            const d=o[l];
            if (!(d!==void 0&&d.call(this)===false)) {
                e:for(let h=0;h<c;h++){
                    const f=u[h];
                    const m=f.length;
                    for(let g=0;g<m;g++){const A=this.LA(g+1);if (t(A,f[g])===false) {
                        continue e
                    }}return l
                }
            }
        }};
    }if (s&&!r) {
        const a=m(n,l => {
            return f_1(l);
        });

        const o=r(a,(l, u, c) => {
            d(u,d=>{
                if (!h(l,d.tokenTypeIdx)) {
                    (l[d.tokenTypeIdx] = c);
                }

                d(d.categoryMatches,h=>{
                    if (!h(l,h)) {
                        (l[h] = c);
                    }
                });
            });

            return l;
        },{});

        return function(){const l=this.LA(1);return o[l.tokenTypeIdx]}
    } else {
        return function(){for(let a=0;a<i;a++){
            const o=n[a];
            const l=o.length;
            e:for(let u=0;u<l;u++){
                const c=o[u];
                const d=c.length;
                for(let h=0;h<d;h++){const f=this.LA(h+1);if (t(f,c[h])===false) {
                    continue e
                }}return a
            }
        }};
    }
}function Eh(n,e,t){
    const r=be(n,s => {
        return s.length===1;
    });

    const i=n.length;
    if (r&&!t) {const s=f_1(n);if(s.length===1&&bp_1(s[0].categoryMatches)){const o=s[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===o}}else{const a=r(s,(o, l, u) => {
        o[l.tokenTypeIdx]=true;
        d(l.categoryMatches,c=>{o[c]=true});
        return o;
    },[]);return function(){const o=this.LA(1);return a[o.tokenTypeIdx]===true;};}} else {
        return function(){e:for(let s=0;s<i;s++){
            const a=n[s];
            const o=a.length;
            for(let l=0;l<o;l++){const u=this.LA(l+1);if (e(u,a[l])===false) {
                continue e
            }}return true;
        }return false;};
    }
}class kh extends Ri{constructor(e,t,r){
    super();
    this.topProd=e;
    this.targetOccurrence=t;
    this.targetProdType=r;
}startWalking(){
    this.walk(this.topProd);
    return this.restDef;
}checkIsTarget(e,t,r,i){return e.idx===this.targetOccurrence&&this.targetProdType===t?(this.restDef=r.concat(i),true):false;}walkOption(e,t,r){
    if (!this.checkIsTarget(e,B.OPTION,t,r)) {
        super.walkOption(e,t,r);
    }
}walkAtLeastOne(e,t,r){
    if (!this.checkIsTarget(e,B.REPETITION_MANDATORY,t,r)) {
        super.walkOption(e,t,r);
    }
}walkAtLeastOneSep(e,t,r){
    if (!this.checkIsTarget(e,B.REPETITION_MANDATORY_WITH_SEPARATOR,t,r)) {
        super.walkOption(e,t,r);
    }
}walkMany(e,t,r){
    if (!this.checkIsTarget(e,B.REPETITION,t,r)) {
        super.walkOption(e,t,r);
    }
}walkManySep(e,t,r){
    if (!this.checkIsTarget(e,B.REPETITION_WITH_SEPARATOR,t,r)) {
        super.walkOption(e,t,r);
    }
}}class mu extends on{constructor(e,t,r){
    super();
    this.targetOccurrence=e;
    this.targetProdType=t;
    this.targetRef=r;
    this.result=[];
}checkIsTarget(e,t){
    if (e.idx===this.targetOccurrence&&this.targetProdType===t&&(this.targetRef===void 0||e===this.targetRef)) {
        (this.result = e.definition);
    }
}visitOption(e){this.checkIsTarget(e,B.OPTION)}visitRepetition(e){this.checkIsTarget(e,B.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,B.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,B.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,B.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,B.ALTERNATION)}}function Ka(n){const e=new Array(n);for (let t=0; t<n; t++) {
    e[t]=[];
}return e}function Gi(n){let e=[""];for(let t=0;t<n.length;t++){
    const r=n[t];
    const i=[];
    for(let s=0;s<e.length;s++){const a=e[s];i.push(a+"_"+r.tokenTypeIdx);for(let o=0;o<r.categoryMatches.length;o++){const l="_"+r.categoryMatches[o];i.push(a+l)}}e=i
}return e}function $h(n,e,t){for(let r=0;r<n.length;r++){if (r===t) {
    continue;
}const i=n[r];for(let s=0;s<e.length;s++){const a=e[s];if (i[a]===true) {
    return false;
}}}return true;}function gu(n,e){
    const t=m(n,a => {
        return hs([a],1);
    });

    const r=Ka(t.length);

    const i=m(t,a=>{
        const o={};
        d(a,l=>{const u=Gi(l.partialPath);d(u,c=>{o[c]=true})});
        return o;
    });

    let s=t;for(let a=1;a<=e;a++){const o=s;s=Ka(o.length);for(let l=0;l<o.length;l++){const u=o[l];for(let c=0;c<u.length;c++){
        const d=u[c].partialPath;
        const h=u[c].suffixDef;
        const f=Gi(d);
        if($h(i,f,l)||bp_1(h)||d.length===e){const g=r[l];if(ps(g,d)===false){g.push(d);for(let A=0;A<f.length;A++){const T=f[A];i[l][T]=true}}}else{
            const g=hs(h,a+1,d);
            s[l]=s[l].concat(g);
            d(g,A=>{const T=Gi(A.partialPath);d(T,E=>{i[l][E]=true})});
        }
    }}}return r
}function Ei(n,e,t,r){
    const i=new mu(n,B.ALTERNATION,r);
    e.accept(i);
    return gu(i.result,t);
}function ki(n,e,t,r){
    const i=new mu(n,t);e.accept(i);
    const s=i.result;
    const o=new kh(e,n,t).startWalking();
    const l=new pe({definition:s});
    const u=new pe({definition:o});
    return gu([l,u],r)
}function ps(n,e){e:for(let t=0;t<n.length;t++){const r=n[t];if(r.length===e.length){for(let i=0;i<r.length;i++){
    const s=e[i];
    const a=r[i];
    if ((s===a||a.categoryMatchesMap[s.tokenTypeIdx]!==void 0)===false) {
        continue e
    }
}return true;}}return false;}function xh(n,e){return n.length<e.length&&be(n,(t,r)=>{const i=e[r];return t===i||i.categoryMatchesMap[t.tokenTypeIdx]})}function yu(n){return be(n,e => {
    return be(e,t => {
        return be(t,r => {
            return bp_1(r.categoryMatches);
        });
    });
});}function Sh(n){const e=n.lookaheadStrategy.validate({rules:n.rules,tokenTypes:n.tokenTypes,grammarName:n.grammarName});return m(e,t => {
    return Object.assign({type:ce.CUSTOM_LOOKAHEAD_VALIDATION},t);
});}function Ih(n,e,t,r){
    const i=Ee(n,l => {
        return Ch(l,t);
    });

    const s=Uh(n,e,t);

    const a=Ee(n,l => {
        return Mh(l,t);
    });

    const o=Ee(n,l => {
        return _h(l,n,r,t);
    });

    return i.concat(s,a,o)
}function Ch(n,e){
    const t=new wh;n.accept(t);
    const r=t.allProductions;
    const i=sd(r,Nh);

    const s=Me(i,o => {
        return o.length>1;
    });

    return m(v_1(s),o=>{
        const l=Pe(o);
        const u=e.buildDuplicateFoundError(n,o);
        const c=Ge(l);
        const d={message:u,type:ce.DUPLICATE_PRODUCTIONS,ruleName:n.name,dslName:c,occurrence:l.idx};
        const h=Tu(l);

        if (h) {
            (d.parameter = h);
        }

        return d;
    });
}function Nh(n){return`${Ge(n)}_#_${n.idx}_#_${Tu(n)}`}function Tu(n){return n instanceof G?n.terminalType.name:n instanceof ue?n.nonTerminalName:""}class wh extends on{constructor(...args) {
    super(...args);
    this.allProductions=[];
}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}}function _h(n,e,t,r){const i=[];if(r(e,(a, o) => {
    return o.name===n.name?a+1:a;
},0)>1){const a=r.buildDuplicateRuleNameError({topLevelRule:n,grammarName:t});i.push({message:a,type:ce.DUPLICATE_RULE_NAME,ruleName:n.name})}return i}function Lh(n,e,t){
    const r=[];let i;

    if (!de(e,n)) {
        i=`Invalid rule override, rule: ->${n}<- cannot be overridden in the grammar: ->${t}<-as it is not defined in any of the super grammars `;
        r.push({message:i,type:ce.INVALID_RULE_OVERRIDE,ruleName:n});
    }

    return r;
}function Ru(n,e,t,r=[]){
    const i=[];
    const s=br(e.definition);
    if (bp_1(s)) {
        return[];
    }{
    const a=n.name;

    if (de(s,n)) {
        i.push({message:t.buildLeftRecursionError({topLevelRule:n,leftRecursionPath:r}),type:ce.LEFT_RECURSION,ruleName:a});
    }

    const l=hi(s,r.concat([n]));

    const u=Ee(l,c=>{
        const d=c_1(r);
        d.push(c);
        return Ru(n,c,t,d);
    });

    return i.concat(u)
}
}function br(n){
    let e=[];if (bp_1(n)) {
        return e;
    }const t=Pe(n);if (t instanceof ue) {
        e.push(t.referencedRule);
    } else if (t instanceof pe||t instanceof ne||t instanceof xe||t instanceof Se||t instanceof me||t instanceof W) {
        e=e.concat(br(t.definition));
    } else if (t instanceof ge) {
        e=f_1(m(t.definition,s => {
            return br(s.definition);
        }));
    } else if (!(t instanceof G)) {
        throw Error("non exhaustive match");
    }
    const r=qr(t);
    const i=n.length>1;
    if (r&&i)
        {const s=Q(n);return e.concat(br(s))} else {
        return e
    }
}class na extends on{constructor(...args) {
    super(...args);
    this.alternations=[];
}visitAlternation(e){this.alternations.push(e)}}function Oh(n,e){const t=new na;n.accept(t);const r=t.alternations;return Ee(r,s=>{const a=Yn(s.definition);return Ee(a,(o,l)=>{const u=pu([o],[],rr,1);return bp_1(u)?[{message:e.buildEmptyAlternationError({topLevelRule:n,alternation:s,emptyChoiceIdx:l}),type:ce.NONE_LAST_EMPTY_ALT,ruleName:n.name,occurrence:s.idx,alternative:l+1}]:[];});});}function bh(n,e,t){
    const r=new na;n.accept(r);let i=r.alternations;

    i=pi(i,a => {
        return a.ignoreAmbiguities===true;
    });

    return Ee(i,a=>{
        const o=a.idx;
        const l=a.maxLookahead||e;
        const u=Ei(o,n,l,a);
        const c=Fh(u,a,n,t);
        const d=Gh(u,a,n,t);
        return c.concat(d)
    });
}class Ph extends on{constructor(...args) {
    super(...args);
    this.allProductions=[];
}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}}function Mh(n,e){const t=new na;n.accept(t);const r=t.alternations;return Ee(r,s => {
    return s.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:n,alternation:s}),type:ce.TOO_MANY_ALTS,ruleName:n.name,occurrence:s.idx}]:[];
});}function Dh(n,e,t){
    const r=[];

    d(n,i=>{const s=new Ph;i.accept(s);const a=s.allProductions;d(a,o=>{
        const l=ta(o);
        const u=o.maxLookahead||e;
        const c=o.idx;
        const h=ki(c,i,l,u)[0];
        if(bp_1(f_1(h))){const f=t.buildEmptyRepetitionError({topLevelRule:i,repetition:o});r.push({message:f,type:ce.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}
    })});

    return r;
}function Fh(n,e,t,r){
    const i=[];

    const s=r(n,(o, l, u) => {
        if (e.definition[u].ignoreAmbiguities !== true) {
            d(l,c=>{
                const d=[u];
                d(n,(h,f)=>{
                    if (u!==f&&ps(h,c)&&e.definition[f].ignoreAmbiguities!==true) {
                        d.push(f);
                    }
                });

                if (d.length>1&&!ps(i,c)) {
                    i.push(c);
                    o.push({alts:d,path:c});
                }
            });
        }

        return o;
    },[]);

    return m(s,o=>{const l=m(o.alts,c => {
        return c+1;
    });return{message:r.buildAlternationAmbiguityError({topLevelRule:t,alternation:e,ambiguityIndices:l,prefixPath:o.path}),type:ce.AMBIGUOUS_ALTS,ruleName:t.name,occurrence:e.idx,alternatives:o.alts}});
}function Gh(n,e,t,r){const i=r(n,(a,o,l)=>{const u=m(o,c => {
    return ({
        idx:l,
        path:c
    });
});return a.concat(u)},[]);return Zn(Ee(i,a=>{
    if (e.definition[a.idx].ignoreAmbiguities===true) {
        return[];
    }
    const l=a.idx;
    const u=a.path;

    const c=f(i,h => {
        return e.definition[h.idx].ignoreAmbiguities!==true&&h.idx<l&&xh(h.path,u);
    });

    return m(c,h=>{
        const f=[h.idx+1,l+1];
        const m=e.idx===0?"":e.idx;
        return{message:r.buildAlternationPrefixAmbiguityError({topLevelRule:t,alternation:e,ambiguityIndices:f,prefixPath:h.path}),type:ce.AMBIGUOUS_PREFIX_ALTS,ruleName:t.name,occurrence:m,alternatives:f}
    });
}));}function Uh(n,e,t){
    const r=[];

    const i=m(e,s => {
        return s.name;
    });

    d(n,s=>{const a=s.name;if(de(i,a)){const o=t.buildNamespaceConflictError(s);r.push({message:o,type:ce.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:a})}});
    return r;
}function Bh(n){
    const e=i_1(n,{errMsgProvider:dh});
    const t={};
    d(n.rules,r=>{t[r.name]=r});
    return fh(t,e.errMsgProvider);
}function Vh(n){
    n=i_1(n,{errMsgProvider:mt});
    return Ih(n.rules,n.tokenTypes,n.errMsgProvider,n.grammarName);
}
const vu="MismatchedTokenException";
const Au="NoViableAltException";
const Eu="EarlyExitException";
const ku="NotAllInputParsedException";
const $u=[vu,Au,Eu,ku];
Object.freeze($u);function Jr(n){return de($u,n.name)}class $i extends Error{constructor(e,t){
    super(e);
    this.token=t;
    this.resyncedTokens=[];
    Object.setPrototypeOf(this,new.target.prototype);

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this,this.constructor);
    }
}}class xu extends $i{constructor(e,t,r){
    super(e,t);
    this.previousToken=r;
    this.name=vu;
}}class Kh extends $i{constructor(e,t,r){
    super(e,t);
    this.previousToken=r;
    this.name=Au;
}}class Wh extends $i{constructor(e,t){
    super(e,t);
    this.name=ku;
}}class jh extends $i{constructor(e,t,r){
    super(e,t);
    this.previousToken=r;
    this.name=Eu;
}}
const Ui={};
const Su="InRuleRecoveryException";
class Hh extends Error{constructor(e){
    super(e);
    this.name=Su;
}}class zh{initRecoverable(e){
    this.firstAfterRepMap={};
    this.resyncFollows={};
    this.recoveryEnabled=h(e,"recoveryEnabled")?e.recoveryEnabled:Je.recoveryEnabled;

    if (this.recoveryEnabled) {
        (this.attemptInRepetitionRecovery = qh);
    }
}getTokenToInsert(e){
    const t=ea(e,"",NaN,NaN,NaN,NaN,NaN,NaN);
    t.isInsertedInRecovery=true;
    return t;
}canTokenTypeBeInsertedInRecovery(e){return true;}canTokenTypeBeDeletedInRecovery(e){return true;}tryInRepetitionRecovery(e,t,r,i){
    const s=this.findReSyncTokenType();
    const a=this.exportLexerState();
    const o=[];
    let l=false;const u=this.LA(1);let c=this.LA(1);const d=()=>{
            const h=this.LA(0);
            const f=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:u,previous:h,ruleName:this.getCurrRuleFullName()});
            const m=new xu(f,u,this.LA(0));
            m.resyncedTokens=Yn(o);
            this.SAVE_ERROR(m);
        };

    while (!l) {
            if(this.tokenMatcher(c,i)){d();return}else if (r.call(this)) {
                d();
                e.apply(this,t);
                return
            } else {
                if (this.tokenMatcher(c,s)) {
                    l=true;
                } else {
                    c=this.SKIP_TOKEN();
                    this.addToResyncTokens(c,o);
                }
            }
        }

    this.importLexerState(a)
}shouldInRepetitionRecoveryBeTried(e,t,r){return !(r===false||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,t)));}getFollowsForInRuleRecovery(e,t){const r=this.getCurrentGrammarPath(e,t);return this.getNextPossibleTokenTypes(r)}tryInRuleRecovery(e,t){if (this.canRecoverWithSingleTokenInsertion(e,t)) {
    return this.getTokenToInsert(e);
}if(this.canRecoverWithSingleTokenDeletion(e)){
    const r=this.SKIP_TOKEN();
    this.consumeToken();
    return r;
}throw new Hh("sad sad panda")}canPerformInRuleRecovery(e,t){return this.canRecoverWithSingleTokenInsertion(e,t)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,t){if (!this.canTokenTypeBeInsertedInRecovery(e)||bp_1(t)) {
    return false;
}const r=this.LA(1);return g_1(t,s => {
    return this.tokenMatcher(r,s);
})!==void 0;}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):false;}isInCurrentRuleReSyncSet(e){
    const t=this.getCurrFollowKey();
    const r=this.getFollowSetFromFollowKey(t);
    return de(r,e)
}findReSyncTokenType(){
    const e=this.flattenFollowSet();
    let t=this.LA(1);
    let r=2;

    while (true) {
        const i=g_1(e,s => {
            return hu(t,s);
        });if (i!==void 0) {
            return i;
        }
        t=this.LA(r);
        r++;
    }
}getCurrFollowKey(){
    if (this.RULE_STACK.length===1) {
        return Ui;
    }
    const e=this.getLastExplicitRuleShortName();
    const t=this.getLastExplicitRuleOccurrenceIndex();
    const r=this.getPreviousExplicitRuleShortName();
    return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:t,inRule:this.shortRuleNameToFullName(r)}
}buildFullFollowKeyStack(){
    const e=this.RULE_STACK;
    const t=this.RULE_OCCURRENCE_STACK;
    return m(e,(r, i) => {
        return i===0?Ui:{ruleName:this.shortRuleNameToFullName(r),idxInCallingRule:t[i],inRule:this.shortRuleNameToFullName(e[i-1])};
    });
}flattenFollowSet(){const e=m(this.buildFullFollowKeyStack(),t => {
    return this.getFollowSetFromFollowKey(t);
});return f_1(e);}getFollowSetFromFollowKey(e){if (e===Ui) {
    return[tt];
}const t=e.ruleName+e.idxInCallingRule+nu+e.inRule;return this.resyncFollows[t]}addToResyncTokens(e,t){
    if (!this.tokenMatcher(e,tt)) {
        t.push(e);
    }

    return t;
}reSyncTo(e){
    const t=[];let r=this.LA(1);

    while (this.tokenMatcher(r,e)===false) {
        r=this.SKIP_TOKEN();
        this.addToResyncTokens(r,t);
    }

    return Yn(t)
}attemptInRepetitionRecovery(e,t,r,i,s,a,o){}getCurrentGrammarPath(e,t){
    const r=this.getHumanReadableRuleStack();
    const i=c_1(this.RULE_OCCURRENCE_STACK);
    return{ruleStack:r,occurrenceStack:i,lastTok:e,lastTokOccurrence:t}
}getHumanReadableRuleStack(){return m(this.RULE_STACK,e => {
    return this.shortRuleNameToFullName(e);
});}}function qh(n,e,t,r,i,s,a){
    const o=this.getKeyForAutomaticLookahead(r,i);let l=this.firstAfterRepMap[o];if(l===void 0){
            const h=this.getCurrRuleFullName();
            const f=this.getGAstProductions()[h];
            l=new s(f,i).startWalking();
            this.firstAfterRepMap[o]=l;
        }
    let u=l.token;
    let c=l.occurrence;
    const d=l.isEndOfRule;

    if (this.RULE_STACK.length===1&&d&&u===void 0) {
        u=tt;
        c=1;
    }

    if (!(u===void 0||c===void 0)&&this.shouldInRepetitionRecoveryBeTried(u,c,a)) {
        this.tryInRepetitionRecovery(n,e,t,u);
    }
}
const Yh=4;
const it=8;
const Iu=1<<it;
const Cu=2<<it;
const ms=3<<it;
const gs=4<<it;
const ys=5<<it;
const Pr=6<<it;
function Bi(n,e,t){return t|e|n}class ra{constructor(e){
    this.maxLookahead=e?.maxLookahead ?? Je.maxLookahead
}validate(e){const t=this.validateNoLeftRecursion(e.rules);if(bp_1(t)){
    const r=this.validateEmptyOrAlternatives(e.rules);
    const i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead);
    const s=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);
    return[...t,...r,...i,...s]
}return t}validateNoLeftRecursion(e){return Ee(e,t => {
    return Ru(t,t,mt);
});}validateEmptyOrAlternatives(e){return Ee(e,t => {
    return Oh(t,mt);
});}validateAmbiguousAlternationAlternatives(e,t){return Ee(e,r => {
    return bh(r,t,mt);
});}validateSomeNonEmptyLookaheadPath(e,t){return Dh(e,t,mt)}buildLookaheadForAlternation(e){return Rh(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,Ah)}buildLookaheadForOptional(e){return vh(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,ta(e.prodType),Eh)}}class Xh{initLooksAhead(e){
    this.dynamicTokensEnabled=h(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:Je.dynamicTokensEnabled;
    this.maxLookahead=h(e,"maxLookahead")?e.maxLookahead:Je.maxLookahead;
    this.lookaheadStrategy=h(e,"lookaheadStrategy")?e.lookaheadStrategy:new ra({maxLookahead:this.maxLookahead});
    this.lookAheadFuncsCache=new Map;
}preComputeLookaheadFunctions(e){d(e,t=>{this.TRACE_INIT(`${t.name} Rule Lookahead`,()=>{
    const{alternation,repetition,option,repetitionMandatory,repetitionMandatoryWithSeparator,repetitionWithSeparator}=Qh(t);

    d(alternation,u=>{const c=u.idx===0?"":u.idx;this.TRACE_INIT(`${Ge(u)}${c}`,()=>{
        const d=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:u.idx,rule:t,maxLookahead:u.maxLookahead||this.maxLookahead,hasPredicates:u.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled});
        const h=Bi(this.fullRuleNameToShort[t.name],Iu,u.idx);
        this.setLaFuncCache(h,d)
    })});

    d(repetition,u=>{this.computeLookaheadFunc(t,u.idx,ms,"Repetition",u.maxLookahead,Ge(u))});
    d(option,u=>{this.computeLookaheadFunc(t,u.idx,Cu,"Option",u.maxLookahead,Ge(u))});
    d(repetitionMandatory,u=>{this.computeLookaheadFunc(t,u.idx,gs,"RepetitionMandatory",u.maxLookahead,Ge(u))});
    d(repetitionMandatoryWithSeparator,u=>{this.computeLookaheadFunc(t,u.idx,Pr,"RepetitionMandatoryWithSeparator",u.maxLookahead,Ge(u))});
    d(repetitionWithSeparator,u=>{this.computeLookaheadFunc(t,u.idx,ys,"RepetitionWithSeparator",u.maxLookahead,Ge(u))});
})})}computeLookaheadFunc(e,t,r,i,s,a){this.TRACE_INIT(`${a}${t===0?"":t}`,()=>{
    const o=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:t,rule:e,maxLookahead:s||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i});
    const l=Bi(this.fullRuleNameToShort[e.name],r,t);
    this.setLaFuncCache(l,o)
})}getKeyForAutomaticLookahead(e,t){const r=this.getLastExplicitRuleShortName();return Bi(r,e,t)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,t){this.lookAheadFuncsCache.set(e,t)}}class Jh extends on{constructor(...args) {
    super(...args);
    this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]};
}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}}const vr=new Jh;function Qh(n){
    vr.reset();
    n.accept(vr);
    const e=vr.dslMethods;
    vr.reset();
    return e;
}function Wa(n,e){
    if (isNaN(n.startOffset)===true) {
        n.startOffset=e.startOffset;
        n.endOffset=e.endOffset;
    } else if (n.endOffset<e.endOffset) {
        (n.endOffset = e.endOffset);
    }
}function ja(n,e){
    if (isNaN(n.startOffset)===true) {
        n.startOffset=e.startOffset;
        n.startColumn=e.startColumn;
        n.startLine=e.startLine;
        n.endOffset=e.endOffset;
        n.endColumn=e.endColumn;
        n.endLine=e.endLine;
    } else if (n.endOffset<e.endOffset) {
        n.endOffset=e.endOffset;
        n.endColumn=e.endColumn;
        n.endLine=e.endLine;
    }
}function Zh(n,e,t){
    if (n.children[t]===void 0) {
        n.children[t]=[e];
    } else {
        n.children[t].push(e);
    }
}function ep(n,e,t){
    if (n.children[e]===void 0) {
        n.children[e]=[t];
    } else {
        n.children[e].push(t);
    }
}const tp="name";function Nu(n,e){Object.defineProperty(n,tp,{enumerable:false,configurable:true,writable:false,value:e})}function np(n,e){
    const t=k(n);
    const r=t.length;
    for(let i=0;i<r;i++){
        const s=t[i];
        const a=n[s];
        const o=a.length;
        for(let l=0;l<o;l++){
            const u=a[l];

            if (u.tokenTypeIdx===void 0) {
                this[u.name](u.children,e);
            }
        }
    }
}function rp(n,e){
    const t=function(){};Nu(t,n+"BaseSemantics");const r={visit:function(i,s){
    if (c5(i)) {
        (i = i[0]);
    }

    if (!i(i)) {
        return this[i.name](i.children,s)
    }
},validateVisitor:function(){const i=sp(this,e);if(!bp_1(i)){const s=m(i,a => {
        return a.msg;
    });throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
        ${s.join(`

    `).replace(/\n/g,`
        `)}`)}}};
    t.prototype=r;
    t.prototype.constructor=t;
    t._RULE_NAMES=e;
    return t;
}function ip(n,e,t){
    const r=function(){};Nu(r,n+"BaseSemanticsWithDefaults");const i=Object.create(t.prototype);
    d(e,s=>{i[s]=np});
    r.prototype=i;
    r.prototype.constructor=r;
    return r;
}var Ts = {
    REDUNDANT_METHOD: 0,
    MISSING_METHOD: 1,

    // reverse mapping
    0: "REDUNDANT_METHOD",

    1: "MISSING_METHOD"
};function sp(n,e){return ap(n,e)}function ap(n,e){
    const t=f(e,i => {
        return bo_1(n[i])===false;
    });

    const r=m(t,i => {
        return ({
            msg:`Missing visitor method: <${i}> on ${n.constructor.name} CST Visitor.`,
            type:Ts.MISSING_METHOD,
            methodName:i
        });
    });

    return Zn(r)
}class op{initTreeBuilder(e){
    this.CST_STACK=[];
    this.outputCst=e.outputCst;
    this.nodeLocationTracking=h(e,"nodeLocationTracking")?e.nodeLocationTracking:Je.nodeLocationTracking;

    if (!this.outputCst) {
        this.cstInvocationStateUpdate=bp_1_1;
        this.cstFinallyStateUpdate=bp_1_1;
        this.cstPostTerminal=bp_1_1;
        this.cstPostNonTerminal=bp_1_1;
        this.cstPostRule=bp_1_1;
    } else if (/full/i.test(this.nodeLocationTracking)) {
        if (this.recoveryEnabled) {
            this.setNodeLocationFromToken=ja;
            this.setNodeLocationFromNode=ja;
            this.cstPostRule=bp_1_1;
            this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery;
        } else {
            this.setNodeLocationFromToken=bp_1_1;
            this.setNodeLocationFromNode=bp_1_1;
            this.cstPostRule=this.cstPostRuleFull;
            this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular;
        }
    } else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
        if (this.recoveryEnabled) {
            this.setNodeLocationFromToken=Wa;
            this.setNodeLocationFromNode=Wa;
            this.cstPostRule=bp_1_1;
            this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery;
        } else {
            this.setNodeLocationFromToken=bp_1_1;
            this.setNodeLocationFromNode=bp_1_1;
            this.cstPostRule=this.cstPostRuleOnlyOffset;
            this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular;
        }
    } else if (/none/i.test(this.nodeLocationTracking)) {
        this.setNodeLocationFromToken=bp_1_1;
        this.setNodeLocationFromNode=bp_1_1;
        this.cstPostRule=bp_1_1;
        this.setInitialNodeLocation=bp_1_1;
    } else {
        throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)
    }
}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){const t=this.LA(1);e.location={startOffset:t.startOffset,startLine:t.startLine,startColumn:t.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){
    const t={name:e,children:Object.create(null)};
    this.setInitialNodeLocation(t);
    this.CST_STACK.push(t);
}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){
    const t=this.LA(0);
    const r=e.location;

    if (r.startOffset<=t.startOffset) {
        r.endOffset=t.endOffset;
        r.endLine=t.endLine;
        r.endColumn=t.endColumn;
    } else {
        r.startOffset=NaN;
        r.startLine=NaN;
        r.startColumn=NaN;
    }
}cstPostRuleOnlyOffset(e){
    const t=this.LA(0);
    const r=e.location;

    if (r.startOffset<=t.startOffset) {
        r.endOffset=t.endOffset;
    } else {
        r.startOffset=NaN;
    }
}cstPostTerminal(e,t){
    const r=this.CST_STACK[this.CST_STACK.length-1];
    Zh(r,t,e);
    this.setNodeLocationFromToken(r.location,t);
}cstPostNonTerminal(e,t){
    const r=this.CST_STACK[this.CST_STACK.length-1];
    ep(r,t,e);
    this.setNodeLocationFromNode(r.location,e.location);
}getBaseCstVisitorConstructor(){if(i(this.baseCstVisitorConstructor)){
    const e=rp(this.className,k(this.gastProductionsCache));
    this.baseCstVisitorConstructor=e;
    return e;
}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(i(this.baseCstVisitorWithDefaultsConstructor)){
    const e=ip(this.className,k(this.gastProductionsCache),this.getBaseCstVisitorConstructor());
    this.baseCstVisitorWithDefaultsConstructor=e;
    return e;
}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){const e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}}class lp{initLexerAdapter(){
    this.tokVector=[];
    this.tokVectorLength=0;
    this.currIdx=-1;
}set input(e){
    if (this.selfAnalysisDone!==true) {
        throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    }
    this.reset();
    this.tokVector=e;
    this.tokVectorLength=e.length;
}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Zr}LA(e){const t=this.currIdx+e;return t<0||this.tokVectorLength<=t?Zr:this.tokVector[t]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}}class up{ACTION(e){return e.call(this)}consume(e,t,r){return this.consumeInternal(t,e,r)}subrule(e,t,r){return this.subruleInternal(t,e,r)}option(e,t){return this.optionInternal(t,e)}or(e,t){return this.orInternal(t,e)}many(e,t){return this.manyInternal(e,t)}atLeastOne(e,t){return this.atLeastOneInternal(e,t)}CONSUME(e,t){return this.consumeInternal(e,0,t)}CONSUME1(e,t){return this.consumeInternal(e,1,t)}CONSUME2(e,t){return this.consumeInternal(e,2,t)}CONSUME3(e,t){return this.consumeInternal(e,3,t)}CONSUME4(e,t){return this.consumeInternal(e,4,t)}CONSUME5(e,t){return this.consumeInternal(e,5,t)}CONSUME6(e,t){return this.consumeInternal(e,6,t)}CONSUME7(e,t){return this.consumeInternal(e,7,t)}CONSUME8(e,t){return this.consumeInternal(e,8,t)}CONSUME9(e,t){return this.consumeInternal(e,9,t)}SUBRULE(e,t){return this.subruleInternal(e,0,t)}SUBRULE1(e,t){return this.subruleInternal(e,1,t)}SUBRULE2(e,t){return this.subruleInternal(e,2,t)}SUBRULE3(e,t){return this.subruleInternal(e,3,t)}SUBRULE4(e,t){return this.subruleInternal(e,4,t)}SUBRULE5(e,t){return this.subruleInternal(e,5,t)}SUBRULE6(e,t){return this.subruleInternal(e,6,t)}SUBRULE7(e,t){return this.subruleInternal(e,7,t)}SUBRULE8(e,t){return this.subruleInternal(e,8,t)}SUBRULE9(e,t){return this.subruleInternal(e,9,t)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,t,r=ei){
    if(de(this.definedRulesNames,e)){const a={message:mt.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:ce.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(a)}this.definedRulesNames.push(e);const i=this.defineRule(e,t,r);
    this[e]=i;
    return i;
}OVERRIDE_RULE(e,t,r=ei){
    const i=Lh(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);const s=this.defineRule(e,t,r);
    this[e]=s;
    return s;
}BACKTRACK(e,t){return function(){this.isBackTrackingStack.push(1);const r=this.saveRecogState();try{
    e.apply(this,t);
    return true;
}catch(i){if (Jr(i)) {
    return false;
}throw i}finally{
    this.reloadRecogState(r);
    this.isBackTrackingStack.pop();
}};}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return Tf(v_1(this.gastProductionsCache));}}class cp{initRecognizerEngine(e,t){
    this.className=this.constructor.name;
    this.shortRuleNameToFull={};
    this.fullRuleNameToShort={};
    this.ruleShortNameIdx=256;
    this.tokenMatcher=Xr;
    this.subruleIdx=0;
    this.definedRulesNames=[];
    this.tokensMap={};
    this.isBackTrackingStack=[];
    this.RULE_STACK=[];
    this.RULE_OCCURRENCE_STACK=[];
    this.gastProductionsCache={};

    if (h(t,"serializedGrammar")) {
        throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
            See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
            For Further details.`);
    }

    if(c5(e)){if (bp_1(e)) {
        throw Error(`A Token Vocabulary cannot be empty.
            Note that the first argument for the parser constructor
            is no longer a Token vector (since v4.0).`);
    }if (typeof e[0].startOffset=="number") {
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
            See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
            For Further details.`)
    }}if (c5(e)) {
        this.tokensMap=r(e,(s, a) => {
            s[a.name]=a;
            return s;
        },{});
    } else if(h(e,"modes")&&be(f_1(v_1(e.modes)),lh)){
        const s=f_1(v_1(e.modes));
        const a=Ks(s);
        this.tokensMap=r(a,(o, l) => {
            o[l.name]=l;
            return o;
        },{})
    }else if (c0(e)) {
        this.tokensMap=c_1(e);
    } else {
        throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    }this.tokensMap.EOF=tt;
    const r=h(e,"modes")?f_1(v_1(e.modes)):v_1(e);

    const i=be(r,s => {
        return bp_1(s.categoryMatches);
    });

    this.tokenMatcher=i?Xr:rr;
    ir(v_1(this.tokensMap));
}defineRule(e,t,r){
    if (this.selfAnalysisDone) {
        throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
        Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    }
    const i=h(r,"resyncEnabled")?r.resyncEnabled:ei.resyncEnabled;
    const s=h(r,"recoveryValueFunc")?r.recoveryValueFunc:ei.recoveryValueFunc;
    const a=this.ruleShortNameIdx<<Yh+it;
    this.ruleShortNameIdx++;
    this.shortRuleNameToFull[a]=e;
    this.fullRuleNameToShort[e]=a;
    let o;

    if (this.outputCst===true) {
        o=function(...c){try{
            this.ruleInvocationStateUpdate(a,e,this.subruleIdx);
            t.apply(this,c);
            const d=this.CST_STACK[this.CST_STACK.length-1];
            this.cstPostRule(d);
            return d;
        }catch(d){return this.invokeRuleCatch(d,i,s)}finally{this.ruleFinallyStateUpdate()}};
    } else {
        o=function(...c){try{
            this.ruleInvocationStateUpdate(a,e,this.subruleIdx);
            return t.apply(this,c);
        }catch(d){return this.invokeRuleCatch(d,i,s)}finally{this.ruleFinallyStateUpdate()}};
    }

    return Object.assign(o,{ruleName:e,originalGrammarAction:t});
}invokeRuleCatch(e,t,r){
    const i=this.RULE_STACK.length===1;
    const s=t&&!this.isBackTracking()&&this.recoveryEnabled;
    if (Jr(e)) {const a=e;if(s){const o=this.findReSyncTokenType();if (this.isInCurrentRuleReSyncSet(o)) {
        a.resyncedTokens=this.reSyncTo(o);

        if (this.outputCst) {
            const l=this.CST_STACK[this.CST_STACK.length-1];
            l.recoveredNode=true;
            return l;
        } else {
            return r(e);
        }
    } else {if(this.outputCst){
        const l=this.CST_STACK[this.CST_STACK.length-1];
        l.recoveredNode=true;
        a.partialCstResult=l;
    }throw a}}else{if (i) {
        this.moveToTerminatedState();
        return r(e);
    }throw a}} else {
        throw e
    }
}optionInternal(e,t){const r=this.getKeyForAutomaticLookahead(Cu,t);return this.optionInternalLogic(e,t,r)}optionInternalLogic(e,t,r){
    let i=this.getLaFuncFromCache(r);
    let s;
    if (typeof e!="function") {s=e.DEF;const a=e.GATE;if(a!==void 0){const o=i;i=() => {
        return a.call(this)&&o.call(this);
    }}} else {
        s=e;
    }if (i.call(this)===true) {
        return s.call(this)
    }
}atLeastOneInternal(e,t){const r=this.getKeyForAutomaticLookahead(gs,e);return this.atLeastOneInternalLogic(e,t,r)}atLeastOneInternalLogic(e,t,r){
    let i=this.getLaFuncFromCache(r);
    let s;
    if (typeof t!="function") {s=t.DEF;const a=t.GATE;if(a!==void 0){const o=i;i=() => {
        return a.call(this)&&o.call(this);
    }}} else {
        s=t;
    }if (i.call(this)===true) {
    let a=this.doSingleRepetition(s);

    while (i.call(this)===true&&a===true) {
            a=this.doSingleRepetition(s)
        }
} else {
        throw this.raiseEarlyExitException(e,B.REPETITION_MANDATORY,t.ERR_MSG);
    }this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,t],i,gs,e,yh)
}atLeastOneSepFirstInternal(e,t){const r=this.getKeyForAutomaticLookahead(Pr,e);this.atLeastOneSepFirstInternalLogic(e,t,r)}atLeastOneSepFirstInternalLogic(e,t,r){
    const i=t.DEF;
    const s=t.SEP;
    if (this.getLaFuncFromCache(r).call(this)===true) {
        i.call(this);const o=() => {
            return this.tokenMatcher(this.LA(1),s);
        };

        while (this.tokenMatcher(this.LA(1),s)===true) {
            this.CONSUME(s);
            i.call(this);
        }

        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,o,i,Ba],o,Pr,e,Ba)
    } else {
        throw this.raiseEarlyExitException(e,B.REPETITION_MANDATORY_WITH_SEPARATOR,t.ERR_MSG)
    }
}manyInternal(e,t){const r=this.getKeyForAutomaticLookahead(ms,e);return this.manyInternalLogic(e,t,r)}manyInternalLogic(e,t,r){
    let i=this.getLaFuncFromCache(r);
    let s;
    if (typeof t!="function") {s=t.DEF;const o=t.GATE;if(o!==void 0){const l=i;i=() => {
        return o.call(this)&&l.call(this);
    }}} else {
        s=t;
    }let a=true;

    while (i.call(this)===true&&a===true) {
            a=this.doSingleRepetition(s);
        }

    this.attemptInRepetitionRecovery(this.manyInternal,[e,t],i,ms,e,gh,a)
}manySepFirstInternal(e,t){const r=this.getKeyForAutomaticLookahead(ys,e);this.manySepFirstInternalLogic(e,t,r)}manySepFirstInternalLogic(e,t,r){
    const i=t.DEF;
    const s=t.SEP;
    if(this.getLaFuncFromCache(r).call(this)===true){
        i.call(this);const o=() => {
            return this.tokenMatcher(this.LA(1),s);
        };

        while (this.tokenMatcher(this.LA(1),s)===true) {
            this.CONSUME(s);
            i.call(this);
        }

        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,o,i,Ua],o,ys,e,Ua)
    }
}repetitionSepSecondInternal(e,t,r,i,s){
    while (r()) {
        this.CONSUME(t);
        i.call(this);
    }

    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,t,r,i,s],r,Pr,e,s)
}doSingleRepetition(e){
    const t=this.getLexerPosition();
    e.call(this);
    return this.getLexerPosition()>t;
}orInternal(e,t){
    const r=this.getKeyForAutomaticLookahead(Iu,t);
    const i=c5(e)?e:e.DEF;
    const a=this.getLaFuncFromCache(r).call(this,i);
    if (a!==void 0) {
        return i[a].ALT.call(this);
    }this.raiseNoAltException(t,e.ERR_MSG)
}ruleFinallyStateUpdate(){
    this.RULE_STACK.pop();
    this.RULE_OCCURRENCE_STACK.pop();
    this.cstFinallyStateUpdate();

    if (this.RULE_STACK.length===0&&this.isAtEndOfInput()===false) {
        const e=this.LA(1);
        const t=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});
        this.SAVE_ERROR(new Wh(t,e))
    }
}subruleInternal(e,t,r){let i;try{
    const s=r!==void 0?r.ARGS:void 0;
    this.subruleIdx=t;
    i=e.apply(this,s);
    this.cstPostNonTerminal(i,r!==void 0&&r.LABEL!==void 0?r.LABEL:e.ruleName);
    return i;
}catch(s){throw this.subruleInternalError(s,r,e.ruleName)}}subruleInternalError(e,t,r){
    if (Jr(e)&&e.partialCstResult!==void 0) {
        this.cstPostNonTerminal(e.partialCstResult,t!==void 0&&t.LABEL!==void 0?t.LABEL:r);
        delete e.partialCstResult;
    }

    throw e;
}consumeInternal(e,t,r){
    let i;try{
    const s=this.LA(1);

    if (this.tokenMatcher(s,e)===true) {
        this.consumeToken();
        i=s;
    } else {
        this.consumeInternalError(e,s,r);
    }
}catch(s){i=this.consumeInternalRecovery(e,t,s)}
    this.cstPostTerminal(r!==void 0&&r.LABEL!==void 0?r.LABEL:e.name,i);
    return i;
}consumeInternalError(e,t,r){
    let i;const s=this.LA(0);

    if (r!==void 0&&r.ERR_MSG) {
        i=r.ERR_MSG;
    } else {
        i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:t,previous:s,ruleName:this.getCurrRuleFullName()});
    }

    throw this.SAVE_ERROR(new xu(i,t,s));
}consumeInternalRecovery(e,t,r){if (this.recoveryEnabled&&r.name==="MismatchedTokenException"&&!this.isBackTracking())
    {const i=this.getFollowsForInRuleRecovery(e,t);try{return this.tryInRuleRecovery(e,i)}catch(s){throw s.name===Su?r:s}} else {
    throw r
}}saveRecogState(){
    const e=this.errors;
    const t=c_1(this.RULE_STACK);
    return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:t,CST_STACK:this.CST_STACK}
}reloadRecogState(e){
    this.errors=e.errors;
    this.importLexerState(e.lexerState);
    this.RULE_STACK=e.RULE_STACK;
}ruleInvocationStateUpdate(e,t,r){
    this.RULE_OCCURRENCE_STACK.push(r);
    this.RULE_STACK.push(e);
    this.cstInvocationStateUpdate(t);
}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){const e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),tt)}reset(){
    this.resetLexerState();
    this.subruleIdx=0;
    this.isBackTrackingStack=[];
    this.errors=[];
    this.RULE_STACK=[];
    this.CST_STACK=[];
    this.RULE_OCCURRENCE_STACK=[];
}}class dp{initErrorHandler(e){
    this._errors=[];
    this.errorMessageProvider=h(e,"errorMessageProvider")?e.errorMessageProvider:Je.errorMessageProvider;
}SAVE_ERROR(e){if (Jr(e)) {
    e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:c_1(this.RULE_OCCURRENCE_STACK)};
    this._errors.push(e);
    return e;
}throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return c_1(this._errors);}set errors(e){this._errors=e}raiseEarlyExitException(e,t,r){
    const i=this.getCurrRuleFullName();
    const s=this.getGAstProductions()[i];
    const o=ki(e,s,t,this.maxLookahead)[0];
    const l=[];
    for (let c=1; c<=this.maxLookahead; c++) {
        l.push(this.LA(c));
    }const u=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:o,actual:l,previous:this.LA(0),customUserDescription:r,ruleName:i});throw this.SAVE_ERROR(new jh(u,this.LA(1),this.LA(0)))
}raiseNoAltException(e,t){
    const r=this.getCurrRuleFullName();
    const i=this.getGAstProductions()[r];
    const s=Ei(e,i,this.maxLookahead);
    const a=[];
    for (let u=1; u<=this.maxLookahead; u++) {
        a.push(this.LA(u));
    }
    const o=this.LA(0);
    const l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:s,actual:a,previous:o,customUserDescription:t,ruleName:this.getCurrRuleFullName()});
    throw this.SAVE_ERROR(new Kh(l,this.LA(1),o))
}}class fp{initContentAssist(){}computeContentAssist(e,t){const r=this.gastProductionsCache[e];if (i(r)) {
    throw Error(`Rule ->${e}<- does not exist in this grammar.`);
}return pu([r],t,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){
    const t=Pe(e.ruleStack);
    const i=this.getGAstProductions()[t];
    return new mh(i,e).startWalking()
}}const xi={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(xi);
const Ha=true;
const za=Math.pow(2,it)-1;
const wu=fu({name:"RECORDING_PHASE_TOKEN",pattern:fe.NA});
ir([wu]);const _u=ea(wu,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(_u);const hp={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}};class pp{initGastRecorder(e){
    this.recordingProdStack=[];
    this.RECORDING_PHASE=false;
}enableRecording(){
    this.RECORDING_PHASE=true;

    this.TRACE_INIT("Enable Recording",()=>{
        for(let e=0;e<10;e++){
            const t=e>0?e:"";
            this[`CONSUME${t}`]=function(r,i){return this.consumeInternalRecord(r,e,i)};
            this[`SUBRULE${t}`]=function(r,i){return this.subruleInternalRecord(r,e,i)};
            this[`OPTION${t}`]=function(r){return this.optionInternalRecord(r,e)};
            this[`OR${t}`]=function(r){return this.orInternalRecord(r,e)};
            this[`MANY${t}`]=function(r){this.manyInternalRecord(e,r)};
            this[`MANY_SEP${t}`]=function(r){this.manySepFirstInternalRecord(e,r)};
            this[`AT_LEAST_ONE${t}`]=function(r){this.atLeastOneInternalRecord(e,r)};
            this[`AT_LEAST_ONE_SEP${t}`]=function(r){this.atLeastOneSepFirstInternalRecord(e,r)};
        }
        this.consume=function(e,t,r){return this.consumeInternalRecord(t,e,r)};
        this.subrule=function(e,t,r){return this.subruleInternalRecord(t,e,r)};
        this.option=function(e,t){return this.optionInternalRecord(t,e)};
        this.or=function(e,t){return this.orInternalRecord(t,e)};
        this.many=function(e,t){this.manyInternalRecord(e,t)};
        this.atLeastOne=function(e,t){this.atLeastOneInternalRecord(e,t)};
        this.ACTION=this.ACTION_RECORD;
        this.BACKTRACK=this.BACKTRACK_RECORD;
        this.LA=this.LA_RECORD;
    });
}disableRecording(){
    this.RECORDING_PHASE=false;

    this.TRACE_INIT("Deleting Recording methods",()=>{
        const e=this;for(let t=0;t<10;t++){
            const r=t>0?t:"";
            delete e[`CONSUME${r}`];
            delete e[`SUBRULE${r}`];
            delete e[`OPTION${r}`];
            delete e[`OR${r}`];
            delete e[`MANY${r}`];
            delete e[`MANY_SEP${r}`];
            delete e[`AT_LEAST_ONE${r}`];
            delete e[`AT_LEAST_ONE_SEP${r}`];
        }
        delete e.consume;
        delete e.subrule;
        delete e.option;
        delete e.or;
        delete e.many;
        delete e.atLeastOne;
        delete e.ACTION;
        delete e.BACKTRACK;
        delete e.LA;
    });
}ACTION_RECORD(e){}BACKTRACK_RECORD(e,t){return () => {
    return true;
};}LA_RECORD(e){return Zr}topLevelRuleRecord(e,t){try{
    const r=new an({definition:[],name:e});
    r.name=e;
    this.recordingProdStack.push(r);
    t.call(this);
    this.recordingProdStack.pop();
    return r;
}catch(r){if (r.KNOWN_RECORDER_ERROR!==true) {
    try{r.message=r.message+`
         This error was thrown during the "grammar recording phase" For more info see:
        https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw r}
}throw r}}optionInternalRecord(e,t){return cn.call(this,ne,e,t)}atLeastOneInternalRecord(e,t){cn.call(this,xe,t,e)}atLeastOneSepFirstInternalRecord(e,t){cn.call(this,Se,t,e,Ha)}manyInternalRecord(e,t){cn.call(this,W,t,e)}manySepFirstInternalRecord(e,t){cn.call(this,me,t,e,Ha)}orInternalRecord(e,t){return mp.call(this,e,t)}subruleInternalRecord(e,t,r){
    Qr(t);

    if (!e||h(e,"ruleName")===false) {
        const o=new Error(`<SUBRULE${qa(t)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
         inside top level rule: <${this.recordingProdStack[0].name}>`);
        o.KNOWN_RECORDER_ERROR=true;
        throw o;
    }

    const i=l_1(this.recordingProdStack);
    const s=e.ruleName;
    const a=new ue({idx:t,nonTerminalName:s,label:r?.LABEL,referencedRule:void 0});
    i.definition.push(a);
    return this.outputCst?hp:xi;
}consumeInternalRecord(e,t,r){
    Qr(t);

    if (!cu(e)) {
        const a=new Error(`<CONSUME${qa(t)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
         inside top level rule: <${this.recordingProdStack[0].name}>`);
        a.KNOWN_RECORDER_ERROR=true;
        throw a;
    }

    const i=l_1(this.recordingProdStack);
    const s=new G({idx:t,terminalType:e,label:r?.LABEL});
    i.definition.push(s);
    return _u;
}}function cn(n,e,t,r=false){
    Qr(t);
    const i=l_1(this.recordingProdStack);
    const s=bo_1(e)?e:e.DEF;
    const a=new n({definition:[],idx:t});

    if (r) {
        (a.separator = e.SEP);
    }

    if (h(e,"MAX_LOOKAHEAD")) {
        (a.maxLookahead = e.MAX_LOOKAHEAD);
    }

    this.recordingProdStack.push(a);
    s.call(this);
    i.definition.push(a);
    this.recordingProdStack.pop();
    return xi;
}function mp(n,e){
    Qr(e);
    const t=l_1(this.recordingProdStack);
    const r=c5(n)===false;
    const i=r===false?n:n.DEF;
    const s=new ge({definition:[],idx:e,ignoreAmbiguities:r&&n.IGNORE_AMBIGUITIES===true});

    if (h(n,"MAX_LOOKAHEAD")) {
        (s.maxLookahead = n.MAX_LOOKAHEAD);
    }

    const a=Ll(i,o => {
            return bo_1(o.GATE);
        });
    s.hasPredicates=a;
    t.definition.push(s);

    d(i,o=>{
        const l=new pe({definition:[]});
        s.definition.push(l);

        if (h(o,"IGNORE_AMBIGUITIES")) {
            l.ignoreAmbiguities=o.IGNORE_AMBIGUITIES;
        } else if (h(o,"GATE")) {
            (l.ignoreAmbiguities = true);
        }

        this.recordingProdStack.push(l);
        o.ALT.call(this);
        this.recordingProdStack.pop();
    });

    return xi;
}function qa(n){return n===0?"":`${n}`}function Qr(n){if(n<0||n>za){
    const e=new Error(`Invalid DSL Method idx value: <${n}>
        Idx value must be a none negative value smaller than ${za+1}`);
    e.KNOWN_RECORDER_ERROR=true;
    throw e;
}}class gp{initPerformanceTracer(e){if (h(e,"traceInitPerf")) {
    const t=e.traceInitPerf;
    const r=typeof t=="number";
    this.traceInitMaxIdent=r?t:Infinity;
    this.traceInitPerf=r?t>0:t;
} else {
    this.traceInitMaxIdent=0;
    this.traceInitPerf=Je.traceInitPerf;
}this.traceInitIndent=-1}TRACE_INIT(e,t){if (this.traceInitPerf===true) {
    this.traceInitIndent++;const r=new Array(this.traceInitIndent+1).join("	");

    if (this.traceInitIndent<this.traceInitMaxIdent) {
        console.log(`${r}--> <${e}>`);
    }

    const {time,value}=eu(t);
    const a=time>10?console.warn:console.log;

    if (this.traceInitIndent<this.traceInitMaxIdent) {
        a(`${r}<-- <${e}> time: ${time}ms`);
    }

    this.traceInitIndent--;
    return value;
} else {
    return t()
}}}function yp(n,e){e.forEach(t=>{const r=t.prototype;Object.getOwnPropertyNames(r).forEach(i=>{
    if (i==="constructor") {
        return;
    }const s=Object.getOwnPropertyDescriptor(r,i);

    if (s&&(s.get||s.set)) {
        Object.defineProperty(n.prototype,i,s);
    } else {
        n.prototype[i]=t.prototype[i];
    }
})})}const Zr=ea(tt,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Zr);
const Je=Object.freeze({recoveryEnabled:false,maxLookahead:3,dynamicTokensEnabled:false,outputCst:true,errorMessageProvider:wt,nodeLocationTracking:"none",traceInitPerf:false,skipValidations:false});
const ei=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:true});
var ce = {
    INVALID_RULE_NAME: 0,
    DUPLICATE_RULE_NAME: 1,
    INVALID_RULE_OVERRIDE: 2,
    DUPLICATE_PRODUCTIONS: 3,
    UNRESOLVED_SUBRULE_REF: 4,
    LEFT_RECURSION: 5,
    NONE_LAST_EMPTY_ALT: 6,
    AMBIGUOUS_ALTS: 7,
    CONFLICT_TOKENS_RULES_NAMESPACE: 8,
    INVALID_TOKEN_NAME: 9,
    NO_NON_EMPTY_LOOKAHEAD: 10,
    AMBIGUOUS_PREFIX_ALTS: 11,
    TOO_MANY_ALTS: 12,
    CUSTOM_LOOKAHEAD_VALIDATION: 13,

    // reverse mapping
    0: "INVALID_RULE_NAME",

    1: "DUPLICATE_RULE_NAME",
    2: "INVALID_RULE_OVERRIDE",
    3: "DUPLICATE_PRODUCTIONS",
    4: "UNRESOLVED_SUBRULE_REF",
    5: "LEFT_RECURSION",
    6: "NONE_LAST_EMPTY_ALT",
    7: "AMBIGUOUS_ALTS",
    8: "CONFLICT_TOKENS_RULES_NAMESPACE",
    9: "INVALID_TOKEN_NAME",
    10: "NO_NON_EMPTY_LOOKAHEAD",
    11: "AMBIGUOUS_PREFIX_ALTS",
    12: "TOO_MANY_ALTS",
    13: "CUSTOM_LOOKAHEAD_VALIDATION"
};function Ya(n=void 0){return function(){return n}}class sr{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{
    let e;this.selfAnalysisDone=true;const t=this.className;
    this.TRACE_INIT("toFastProps",()=>{tu(this)});

    this.TRACE_INIT("Grammar Recording",()=>{try{
        this.enableRecording();

        d(this.definedRulesNames,i=>{
            const a=this[i].originalGrammarAction;let o;
            this.TRACE_INIT(`${i} Rule`,()=>{o=this.topLevelRuleRecord(i,a)});
            this.gastProductionsCache[i]=o;
        });
    }finally{this.disableRecording()}});

    let r=[];

    this.TRACE_INIT("Grammar Resolving",()=>{
        r=Bh({rules:v_1(this.gastProductionsCache)});
        this.definitionErrors=this.definitionErrors.concat(r);
    });

    this.TRACE_INIT("Grammar Validations",()=>{if(bp_1(r)&&this.skipValidations===false){
        const i=Vh({rules:v_1(this.gastProductionsCache),tokenTypes:v_1(this.tokensMap),errMsgProvider:mt,grammarName:t});
        const s=Sh({lookaheadStrategy:this.lookaheadStrategy,rules:v_1(this.gastProductionsCache),tokenTypes:v_1(this.tokensMap),grammarName:t});
        this.definitionErrors=this.definitionErrors.concat(i,s)
    }});

    if (bp_1(this.definitionErrors)) {
        this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{const i=xf(v_1(this.gastProductionsCache));this.resyncFollows=i});

        this.TRACE_INIT("ComputeLookaheadFunctions",()=>{
            s.call(i,{rules:v_1(this.gastProductionsCache)}) ?? true;
            this.preComputeLookaheadFunctions(v_1(this.gastProductionsCache));
        });
    }

    if (!sr.DEFER_DEFINITION_ERRORS_HANDLING&&!bp_1(this.definitionErrors)) {
        e=m(this.definitionErrors,i => {
            return i.message;
        });

        throw new Error(`Parser Definition Errors detected:
         ${e.join(`
        -------------------------------
        `)}`);
    }
})}constructor(e,t){
    this.definitionErrors=[];
    this.selfAnalysisDone=false;
    const r=this;
    r.initErrorHandler(t);
    r.initLexerAdapter();
    r.initLooksAhead(t);
    r.initRecognizerEngine(e,t);
    r.initRecoverable(t);
    r.initTreeBuilder(t);
    r.initContentAssist();
    r.initGastRecorder(t);
    r.initPerformanceTracer(t);

    if (h(t,"ignoredIssues")) {
        throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
            Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
            See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
            For further details.`);
    }

    this.skipValidations=h(t,"skipValidations")?t.skipValidations:Je.skipValidations
}}sr.DEFER_DEFINITION_ERRORS_HANDLING=false;yp(sr,[zh,Xh,op,lp,cp,up,dp,fp,pp,gp]);class Tp extends sr{constructor(e,t=Je){
    const r=c_1(t);
    r.outputCst=false;
    super(e,r);
}}function Zt(n,e,t){return`${n.name}_${e}_${t}`}
const nt=1;
const Rp=2;
const Lu=4;
const Ou=5;
const ar=7;
const vp=8;
const Ap=9;
const Ep=10;
const kp=11;
const bu=12;
class ia{constructor(e){this.target=e}isEpsilon(){return false;}}class sa extends ia{constructor(e,t){
    super(e);
    this.tokenType=t;
}}class Pu extends ia{constructor(e){super(e)}isEpsilon(){return true;}}class aa extends ia{constructor(e,t,r){
    super(e);
    this.rule=t;
    this.followState=r;
}isEpsilon(){return true;}}function $p(n){const e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};xp(e,n);const t=n.length;for(let r=0;r<t;r++){
    const i=n[r];
    const s=$t(e,i,i);

    if (s!==void 0) {
        Mp(e,i,s);
    }
}return e}function xp(n,e){const t=e.length;for(let r=0;r<t;r++){
    const i=e[r];
    const s=X(n,i,void 0,{type:Rp});
    const a=X(n,i,void 0,{type:ar});
    s.stop=a;
    n.ruleToStartState.set(i,s);
    n.ruleToStopState.set(i,a);
}}function Mu(n,e,t){
    if (t instanceof G) {
        return oa(n,e,t.terminalType,t);
    }

    if (t instanceof ue) {
        return Pp(n,e,t);
    }

    if (t instanceof ge) {
        return wp(n,e,t);
    }

    if (t instanceof ne) {
        return _p(n,e,t);
    }

    if (t instanceof W) {
        return Sp(n,e,t);
    }

    if (t instanceof me) {
        return Ip(n,e,t);
    }

    if (t instanceof xe) {
        return Cp(n,e,t);
    }

    if (t instanceof Se) {
        return Np(n,e,t);
    }

    return $t(n,e,t);
}function Sp(n,e,t){const r=X(n,e,t,{type:Ou});st(n,r);const i=ln(n,e,r,t,$t(n,e,t));return Fu(n,e,t,i)}function Ip(n,e,t){
    const r=X(n,e,t,{type:Ou});st(n,r);
    const i=ln(n,e,r,t,$t(n,e,t));
    const s=oa(n,e,t.separator,t);
    return Fu(n,e,t,i,s)
}function Cp(n,e,t){const r=X(n,e,t,{type:Lu});st(n,r);const i=ln(n,e,r,t,$t(n,e,t));return Du(n,e,t,i)}function Np(n,e,t){
    const r=X(n,e,t,{type:Lu});st(n,r);
    const i=ln(n,e,r,t,$t(n,e,t));
    const s=oa(n,e,t.separator,t);
    return Du(n,e,t,i,s)
}function wp(n,e,t){const r=X(n,e,t,{type:nt});st(n,r);const i=m(t.definition,a => {
    return Mu(n,e,a);
});return ln(n,e,r,t,...i)}function _p(n,e,t){const r=X(n,e,t,{type:nt});st(n,r);const i=ln(n,e,r,t,$t(n,e,t));return Lp(n,e,t,i)}function $t(n,e,t){
    const r=f(m(t.definition,i => {
        return Mu(n,e,i);
    }),i => {
        return i!==void 0;
    });

    if (r.length===1) {
        return r[0];
    }

    if (r.length===0) {
        return void 0;
    }

    return bp(n,r);
}function Du(n,e,t,r,i){
    const s=r.left;
    const a=r.right;
    const o=X(n,e,t,{type:kp});
    st(n,o);const l=X(n,e,t,{type:bu});
    s.loopback=o;
    l.loopback=o;
    n.decisionMap[Zt(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",t.idx)]=o;
    H(a,o);

    if (i===void 0) {
        H(o,s);
        H(o,l);
    } else {
        H(o,l);
        H(o,i.left);
        H(i.right,s);
    }

    return {left:s,right:l};
}function Fu(n,e,t,r,i){
    const s=r.left;
    const a=r.right;
    const o=X(n,e,t,{type:Ep});
    st(n,o);
    const l=X(n,e,t,{type:bu});
    const u=X(n,e,t,{type:Ap});
    o.loopback=u;
    l.loopback=u;
    H(o,s);
    H(o,l);
    H(a,u);

    if (i!==void 0) {
        H(u,l);
        H(u,i.left);
        H(i.right,s);
    } else {
        H(u,o);
    }

    n.decisionMap[Zt(e,i?"RepetitionWithSeparator":"Repetition",t.idx)]=o;
    return {left:o,right:l};
}function Lp(n,e,t,r){
    const i=r.left;
    const s=r.right;
    H(i,s);
    n.decisionMap[Zt(e,"Option",t.idx)]=i;
    return r;
}function st(n,e){
    n.decisionStates.push(e);
    e.decision=n.decisionStates.length-1;
    return e.decision;
}function ln(n,e,t,r,...i){
    const s=X(n,e,r,{type:vp,start:t});t.end=s;for (const o of i) {
    if (o!==void 0) {
        H(t,o.left);
        H(o.right,s);
    } else {
        H(t,s);
    }
}const a={left:t,right:s};
    n.decisionMap[Zt(e,Op(r),r.idx)]=t;
    return a;
}function Op(n){if (n instanceof ge) {
    return"Alternation";
}if (n instanceof ne) {
    return"Option";
}if (n instanceof W) {
    return"Repetition";
}if (n instanceof me) {
    return"RepetitionWithSeparator";
}if (n instanceof xe) {
    return"RepetitionMandatory";
}if (n instanceof Se) {
    return"RepetitionMandatoryWithSeparator";
}throw new Error("Invalid production type encountered")}function bp(n,e){
    const t=e.length;for(let s=0;s<t-1;s++){
    const a=e[s];let o;

    if (a.left.transitions.length===1) {
        (o = a.left.transitions[0]);
    }

    const l=o instanceof aa;
    const u=o;
    const c=e[s+1].left;

    if (a.left.type===nt&&a.right.type===nt&&o!==void 0&&(l&&u.followState===a.right||o.target===a.right)) {
        l?u.followState=c:o.target=c;
        Dp(n,a.right);
    } else {
        H(a.right,c);
    }
}
    const r=e[0];
    const i=e[t-1];
    return{left:r.left,right:i.right}
}function oa(n,e,t,r){
    const i=X(n,e,r,{type:nt});
    const s=X(n,e,r,{type:nt});
    la(i,new sa(s,t));
    return {left:i,right:s};
}function Pp(n,e,t){
    const r=t.referencedRule;
    const i=n.ruleToStartState.get(r);
    const s=X(n,e,t,{type:nt});
    const a=X(n,e,t,{type:nt});
    const o=new aa(i,r,a);
    la(s,o);
    return {left:s,right:a};
}function Mp(n,e,t){
    const r=n.ruleToStartState.get(e);H(r,t.left);const i=n.ruleToStopState.get(e);
    H(t.right,i);
    return {left:r,right:i};
}function H(n,e){const t=new Pu(e);la(n,t)}function X(n,e,t,r){
    const i=Object.assign({atn:n,production:t,epsilonOnlyTransitions:false,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:n.states.length},r);
    n.states.push(i);
    return i;
}function la(n,e){
    if (n.transitions.length===0) {
        (n.epsilonOnlyTransitions = e.isEpsilon());
    }

    n.transitions.push(e);
}function Dp(n,e){n.states.splice(n.states.indexOf(e),1)}const ti={};class Rs{constructor(){
    this.map={};
    this.configs=[];
}get size(){return this.configs.length}finalize(){this.map={}}add(e){
    const t=Gu(e);

    if (t in this.map) {
        this.map[t]=this.configs.length;
        this.configs.push(e);
    }
}get elements(){return this.configs}get alts(){return m(this.configs,e => {
    return e.alt;
});}get key(){let e="";for (const t in this.map) {
    e+=t+":";
}return e}}function Gu(n,e=true){return `${e?`a${n.alt}`:""}s${n.state.stateNumber}:${n.stack.map(t => {
    return t.stateNumber.toString();
}).join("_")}`;}function Fp(n,e){const t={};return r=>{
    const i=r.toString();let s=t[i];

    if (s === void 0) {
        s={atnStartState:n,decision:e,states:{}};
        t[i]=s;
    }

    return s;
};}class Uu{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,t){this.predicates[e]=t}toString(){let e="";const t=this.predicates.length;for (let r=0; r<t; r++) {
    e+=this.predicates[r]===true?"1":"0";
}return e}}const Xa=new Uu;class Gp extends ra{constructor(e){
    super();

    this.logging=e?.logging ?? (r => {
        return console.log(r);
    });
}initialize(e){
    this.atn=$p(e.rules);
    this.dfas=Up(this.atn);
}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){
    const {prodOccurrence,rule,hasPredicates,dynamicTokensEnabled}=e;
    const a=this.dfas;
    const o=this.logging;
    const l=Zt(rule,"Alternation",prodOccurrence);
    const c=this.atn.decisionMap[l].decision;

    const d=m(Va({maxLookahead:1,occurrence:prodOccurrence,prodType:"Alternation",rule:rule}),h => {
        return m(h,f => {
            return f[0];
        });
    });

    if (Ja(d,false)&&!dynamicTokensEnabled) {const h=rule(d,(f, m, g) => {
        d(m,A=>{
            if (A) {
                f[A.tokenTypeIdx]=g;
                d(A.categoryMatches,T=>{f[T]=g});
            }
        });
        return f;
    },{});return hasPredicates?function(f){
        var m;
        const g=this.LA(1);
        const A=h[g.tokenTypeIdx];
        if(f!==void 0&&A!==void 0){const T=(m=f[A])===null||m===void 0?void 0:m.GATE;if (T!==void 0&&T.call(this)===false) {
            return
        }}return A
    }:function(){const f=this.LA(1);return h[f.tokenTypeIdx]};} else {
        return hasPredicates?function(h){
            const f=new Uu;
            const m=h===void 0?0:h.length;
            for(let A=0;A<m;A++){const T=h?.[A].GATE;f.set(A,T===void 0||T.call(this))}const g=Vi.call(this,a,c,f,o);return typeof g=="number"?g:void 0
        }:function(){const h=Vi.call(this,a,c,Xa,o);return typeof h=="number"?h:void 0};
    }
}buildLookaheadForOptional(e){
    const {prodOccurrence,rule,prodType,dynamicTokensEnabled}=e;
    const a=this.dfas;
    const o=this.logging;
    const l=Zt(rule,prodType,prodOccurrence);
    const c=this.atn.decisionMap[l].decision;

    const d=m(Va({maxLookahead:1,occurrence:prodOccurrence,prodType:prodType,rule:rule}),h => {
        return m(h,f => {
            return f[0];
        });
    });

    if(Ja(d)&&d[0][0]&&!dynamicTokensEnabled){
        const h=d[0];
        const f=f_1(h);
        if(f.length===1&&bp_1(f[0].categoryMatches)){const g=f[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===g}}else{const m=rule(f,(g, A) => {
            if (A!==void 0) {
                g[A.tokenTypeIdx]=true;
                d(A.categoryMatches,T=>{g[T]=true});
            }

            return g;
        },{});return function(){const g=this.LA(1);return m[g.tokenTypeIdx]===true;};}
    }return function(){const h=Vi.call(this,a,c,Xa,o);return typeof h=="object"?false:h===0;};
}}function Ja(n,e=true){const t=new Set;for(const r of n){const i=new Set;for(const s of r){if(s===void 0){if (e) {
    break;
}return false;}const a=[s.tokenTypeIdx].concat(s.categoryMatches);for (const o of a) {
    if (t.has(o)) {if (!i.has(o)) {
        return false;
    }} else {
        t.add(o);
        i.add(o);
    }
}}}return true;}function Up(n){
    const e=n.decisionStates.length;
    const t=Array(e);
    for (let r=0; r<e; r++) {
        t[r]=Fp(n.decisionStates[r],r);
    }return t
}function Vi(n,e,t,r){const i=n[e](t);let s=i.start;if(s===void 0){
    const o=Jp(i.atnStartState);
    s=Vu(i,Bu(o));
    i.start=s;
}return Bp.apply(this,[i,s,t,r])}function Bp(n,e,t,r){
    let i=e;
    let s=1;
    const a=[];let o=this.LA(s++);

    while (true) {
        let l=zp(i,o);

        if (l===void 0) {
            (l = Vp.apply(this,[n,i,o,s,t,r]));
        }

        if (l===ti) {
            return Hp(a,i,o);
        }

        if (l.isAcceptState===true) {
            return l.prediction;
        }
        i=l;
        a.push(o);
        o=this.LA(s++);
    }
}function Vp(n,e,t,r,i,s){
    const a=qp(e.configs,t,i);if (a.size===0) {
        Qa(n,e,t,ti);
        return ti;
    }let o=Bu(a);const l=Xp(a,i);if (l!==void 0) {
        o.isAcceptState=true;
        o.prediction=l;
        o.configs.uniqueAlt=l;
    } else if(tm(a)){
        const u=e(a.alts);
        o.isAcceptState=true;
        o.prediction=u;
        o.configs.uniqueAlt=u;
        Kp.apply(this,[n,r,a.alts,s]);
    }
    o=Qa(n,e,t,o);
    return o;
}function Kp(n,e,t,r){
    const i=[];for (let u=1; u<=e; u++) {
        i.push(this.LA(u).tokenType);
    }
    const s=n.atnStartState;
    const a=s.rule;
    const o=s.production;
    const l=Wp({topLevelRule:a,ambiguityIndices:t,production:o,prefixPath:i});
    r(l)
}function Wp(n){
    const e=m(n.prefixPath,i => {
        return Lt(i);
    }).join(", ");

    const t=n.production.idx===0?"":n.production.idx;
    let r=`Ambiguous Alternatives Detected: <${n.ambiguityIndices.join(", ")}> in <${jp(n.production)}${t}> inside <${n.topLevelRule.name}> Rule,
    <${e}> may appears as a prefix path in all these alternatives.
    `;

    r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
    For Further details.`;

    return r;
}function jp(n){if (n instanceof ue) {
    return"SUBRULE";
}if (n instanceof ne) {
    return"OPTION";
}if (n instanceof ge) {
    return"OR";
}if (n instanceof xe) {
    return"AT_LEAST_ONE";
}if (n instanceof Se) {
    return"AT_LEAST_ONE_SEP";
}if (n instanceof me) {
    return"MANY_SEP";
}if (n instanceof W) {
    return"MANY";
}if (n instanceof G) {
    return"CONSUME";
}throw Error("non exhaustive match")}function Hp(n,e,t){
    const r=Ee(e.configs.elements,s => {
        return s.state.transitions;
    });

    const i=hd(r.filter(s => {
        return s instanceof sa;
    }).map(s => {
        return s.tokenType;
    }),s => {
        return s.tokenTypeIdx;
    });

    return{actualToken:t,possibleTokenTypes:i,tokenPath:n}
}function zp(n,e){return n.edges[e.tokenTypeIdx]}function qp(n,e,t){
    const r=new Rs;
    const i=[];
    for(const a of n.elements){if (t.is(a.alt)===false) {
        continue;
    }if(a.state.type===ar){i.push(a);continue}const o=a.state.transitions.length;for(let l=0;l<o;l++){
        const u=a.state.transitions[l];
        const c=Yp(u,e);

        if (c!==void 0) {
            r.add({state:c,alt:a.alt,stack:a.stack});
        }
    }}let s;

    if (i.length===0&&r.size===1) {
        (s = r);
    }

    if (s===void 0) {s=new Rs;for (const a of r.elements) {
        ni(a,s)
    }}

    if (i.length>0&&!Zp(s)) {
        for (const a of i) {
            s.add(a);
        }
    }return s
}function Yp(n,e){if (n instanceof sa&&hu(e,n.tokenType)) {
    return n.target
}}function Xp(n,e){let t;for (const r of n.elements) {
    if(e.is(r.alt)===true){if (t===void 0) {
        t=r.alt;
    } else if (t!==r.alt) {
        return
    }}
}return t}function Bu(n){return {configs:n,edges:{},isAcceptState:false,prediction:-1};}function Qa(n,e,t,r){
    r=Vu(n,r);
    e.edges[t.tokenTypeIdx]=r;
    return r;
}function Vu(n,e){
    if (e===ti) {
        return e;
    }
    const t=e.configs.key;
    const r=n.states[t];
    return r!==void 0?r:(e.configs.finalize(),n.states[t]=e,e)
}function Jp(n){
    const e=new Rs;
    const t=n.transitions.length;
    for(let r=0;r<t;r++){const s={state:n.transitions[r].target,alt:r,stack:[]};ni(s,e)}return e
}function ni(n,e){
    const t=n.state;if(t.type===ar){if (n.stack.length>0) {
        const i=[...n.stack];
        const a={state:i.pop(),alt:n.alt,stack:i};
        ni(a,e)
    } else {
        e.add(n);
    }return}

    if (!t.epsilonOnlyTransitions) {
        e.add(n);
    }

    const r=t.transitions.length;for(let i=0;i<r;i++){
        const s=t.transitions[i];
        const a=Qp(n,s);

        if (a!==void 0) {
            ni(a,e);
        }
    }
}function Qp(n,e){if (e instanceof Pu) {
    return{state:e.target,alt:n.alt,stack:n.stack};
}if(e instanceof aa){const t=[...n.stack,e.followState];return{state:e.target,alt:n.alt,stack:t}}}function Zp(n){for (const e of n.elements) {
    if (e.state.type===ar) {
        return true;
    }
}return false;}function em(n){for (const e of n.elements) {
    if (e.state.type!==ar) {
        return false;
    }
}return true;}function tm(n){if (em(n)) {
    return true;
}const e=nm(n.elements);return rm(e)&&!im(e)}function nm(n){const e=new Map;for(const t of n){
    const r=Gu(t,false);let i=e.get(r);

    if (i===void 0) {
        i={};
        e.set(r,i);
    }

    i[t.alt]=true;
}return e}function rm(n){for (const e of Array.from(n.values())) {
    if (Object.keys(e).length>1) {
        return true;
    }
}return false;}function im(n){for (const e of Array.from(n.values())) {
    if (Object.keys(e).length===1) {
        return true;
    }
}return false;}var Za;(function(n){function e(t){return typeof t=="string"}n.is=e})(Za||(Za={}));var vs;(function(n){function e(t){return typeof t=="string"}n.is=e})(vs||(vs={}));var eo;(function(n){
    n.MIN_VALUE=-2147483648;
    n.MAX_VALUE=2147483647;
    function e(t){return typeof t=="number"&&n.MIN_VALUE<=t&&t<=n.MAX_VALUE}n.is=e
})(eo||(eo={}));var ri;(function(n){
    n.MIN_VALUE=0;
    n.MAX_VALUE=2147483647;
    function e(t){return typeof t=="number"&&n.MIN_VALUE<=t&&t<=n.MAX_VALUE}n.is=e
})(ri||(ri={}));var P;(function(n){function e(r,i){
    if (r===Number.MAX_VALUE) {
        (r = ri.MAX_VALUE);
    }

    if (i===Number.MAX_VALUE) {
        (i = ri.MAX_VALUE);
    }

    return {line:r,character:i};
}n.create=e;function t(r){let i=r;return p.objectLiteral(i)&&p.uinteger(i.line)&&p.uinteger(i.character)}n.is=t})(P||(P={}));var b;(function(n){function e(r,i,s,a){if (p.uinteger(r)&&p.uinteger(i)&&p.uinteger(s)&&p.uinteger(a)) {
    return{start:P.create(r,i),end:P.create(s,a)};
}if (P.is(r)&&P.is(i)) {
    return{start:r,end:i};
}throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${a}]`)}n.create=e;function t(r){let i=r;return p.objectLiteral(i)&&P.is(i.start)&&P.is(i.end)}n.is=t})(b||(b={}));var ii;(function(n){function e(r,i){return{uri:r,range:i}}n.create=e;function t(r){let i=r;return p.objectLiteral(i)&&b.is(i.range)&&(p.string(i.uri)||p.undefined(i.uri))}n.is=t})(ii||(ii={}));var to;(function(n){function e(r,i,s,a){return{targetUri:r,targetRange:i,targetSelectionRange:s,originSelectionRange:a}}n.create=e;function t(r){let i=r;return p.objectLiteral(i)&&b.is(i.targetRange)&&p.string(i.targetUri)&&b.is(i.targetSelectionRange)&&(b.is(i.originSelectionRange)||p.undefined(i.originSelectionRange))}n.is=t})(to||(to={}));var As;(function(n){function e(r,i,s,a){return{red:r,green:i,blue:s,alpha:a}}n.create=e;function t(r){const i=r;return p.objectLiteral(i)&&p.numberRange(i.red,0,1)&&p.numberRange(i.green,0,1)&&p.numberRange(i.blue,0,1)&&p.numberRange(i.alpha,0,1)}n.is=t})(As||(As={}));var no;(function(n){function e(r,i){return{range:r,color:i}}n.create=e;function t(r){const i=r;return p.objectLiteral(i)&&b.is(i.range)&&As.is(i.color)}n.is=t})(no||(no={}));var ro;(function(n){function e(r,i,s){return{label:r,textEdit:i,additionalTextEdits:s}}n.create=e;function t(r){const i=r;return p.objectLiteral(i)&&p.string(i.label)&&(p.undefined(i.textEdit)||tn.is(i))&&(p.undefined(i.additionalTextEdits)||p.typedArray(i.additionalTextEdits,tn.is))}n.is=t})(ro||(ro={}));var io = {
    Comment: "comment",
    Imports: "imports",
    Region: "region"
};var so;(function(n){function e(r,i,s,a,o,l){
    const u={startLine:r,endLine:i};

    if (p.defined(s)) {
        (u.startCharacter = s);
    }

    if (p.defined(a)) {
        (u.endCharacter = a);
    }

    if (p.defined(o)) {
        (u.kind = o);
    }

    if (p.defined(l)) {
        (u.collapsedText = l);
    }

    return u;
}n.create=e;function t(r){const i=r;return p.objectLiteral(i)&&p.uinteger(i.startLine)&&p.uinteger(i.startLine)&&(p.undefined(i.startCharacter)||p.uinteger(i.startCharacter))&&(p.undefined(i.endCharacter)||p.uinteger(i.endCharacter))&&(p.undefined(i.kind)||p.string(i.kind))}n.is=t})(so||(so={}));var Es;(function(n){function e(r,i){return{location:r,message:i}}n.create=e;function t(r){let i=r;return p.defined(i)&&ii.is(i.location)&&p.string(i.message)}n.is=t})(Es||(Es={}));var ao;(function(n){
    n.Error=1;
    n.Warning=2;
    n.Information=3;
    n.Hint=4;
})(ao||(ao={}));var oo;(function(n){
    n.Unnecessary=1;
    n.Deprecated=2;
})(oo||(oo={}));var lo;(function(n){function e(t){const r=t;return p.objectLiteral(r)&&p.string(r.href)}n.is=e})(lo||(lo={}));var si;(function(n){function e(r,i,s,a,o,l){
    let u={range:r,message:i};

    if (p.defined(s)) {
        (u.severity = s);
    }

    if (p.defined(a)) {
        (u.code = a);
    }

    if (p.defined(o)) {
        (u.source = o);
    }

    if (p.defined(l)) {
        (u.relatedInformation = l);
    }

    return u;
}n.create=e;function t(r){var i;let s=r;return p.defined(s)&&b.is(s.range)&&p.string(s.message)&&(p.number(s.severity)||p.undefined(s.severity))&&(p.integer(s.code)||p.string(s.code)||p.undefined(s.code))&&(p.undefined(s.codeDescription)||p.string((i=s.codeDescription)===null||i===void 0?void 0:i.href))&&(p.string(s.source)||p.undefined(s.source))&&(p.undefined(s.relatedInformation)||p.typedArray(s.relatedInformation,Es.is))}n.is=t})(si||(si={}));var en;(function(n){function e(r,i,...s){
    let a={title:r,command:i};

    if (p.defined(s)&&s.length>0) {
        (a.arguments = s);
    }

    return a;
}n.create=e;function t(r){let i=r;return p.defined(i)&&p.string(i.title)&&p.string(i.command)}n.is=t})(en||(en={}));var tn;(function(n){function e(s,a){return{range:s,newText:a}}n.replace=e;function t(s,a){return{range:{start:s,end:s},newText:a}}n.insert=t;function r(s){return{range:s,newText:""}}n.del=r;function i(s){const a=s;return p.objectLiteral(a)&&p.string(a.newText)&&b.is(a.range)}n.is=i})(tn||(tn={}));var ks;(function(n){function e(r,i,s){
    const a={label:r};

    if (i!==void 0) {
        (a.needsConfirmation = i);
    }

    if (s!==void 0) {
        (a.description = s);
    }

    return a;
}n.create=e;function t(r){const i=r;return p.objectLiteral(i)&&p.string(i.label)&&(p.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(p.string(i.description)||i.description===void 0)}n.is=t})(ks||(ks={}));var nn;(function(n){function e(t){const r=t;return p.string(r)}n.is=e})(nn||(nn={}));var uo;(function(n){function e(s,a,o){return{range:s,newText:a,annotationId:o}}n.replace=e;function t(s,a,o){return{range:{start:s,end:s},newText:a,annotationId:o}}n.insert=t;function r(s,a){return{range:s,newText:"",annotationId:a}}n.del=r;function i(s){const a=s;return tn.is(a)&&(ks.is(a.annotationId)||nn.is(a.annotationId))}n.is=i})(uo||(uo={}));var $s;(function(n){function e(r,i){return{textDocument:r,edits:i}}n.create=e;function t(r){let i=r;return p.defined(i)&&Ns.is(i.textDocument)&&Array.isArray(i.edits)}n.is=t})($s||($s={}));var xs;(function(n){function e(r,i,s){
    let a={kind:"create",uri:r};

    if (i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)) {
        (a.options = i);
    }

    if (s!==void 0) {
        (a.annotationId = s);
    }

    return a;
}n.create=e;function t(r){let i=r;return i&&i.kind==="create"&&p.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||p.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||p.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||nn.is(i.annotationId))}n.is=t})(xs||(xs={}));var Ss;(function(n){function e(r,i,s,a){
    let o={kind:"rename",oldUri:r,newUri:i};

    if (s!==void 0&&(s.overwrite!==void 0||s.ignoreIfExists!==void 0)) {
        (o.options = s);
    }

    if (a!==void 0) {
        (o.annotationId = a);
    }

    return o;
}n.create=e;function t(r){let i=r;return i&&i.kind==="rename"&&p.string(i.oldUri)&&p.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||p.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||p.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||nn.is(i.annotationId))}n.is=t})(Ss||(Ss={}));var Is;(function(n){function e(r,i,s){
    let a={kind:"delete",uri:r};

    if (i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)) {
        (a.options = i);
    }

    if (s!==void 0) {
        (a.annotationId = s);
    }

    return a;
}n.create=e;function t(r){let i=r;return i&&i.kind==="delete"&&p.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||p.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||p.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||nn.is(i.annotationId))}n.is=t})(Is||(Is={}));var Cs;(function(n){function e(t){let r=t;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(i => {
    if (p.string(i.kind)) {
        if (!(xs.is(i) || Ss.is(i))) {
            return Is.is(i);
        }
    }

    return $s.is(i);
}));}n.is=e})(Cs||(Cs={}));var co;(function(n){function e(r){return{uri:r}}n.create=e;function t(r){let i=r;return p.defined(i)&&p.string(i.uri)}n.is=t})(co||(co={}));var fo;(function(n){function e(r,i){return{uri:r,version:i}}n.create=e;function t(r){let i=r;return p.defined(i)&&p.string(i.uri)&&p.integer(i.version)}n.is=t})(fo||(fo={}));var Ns;(function(n){function e(r,i){return{uri:r,version:i}}n.create=e;function t(r){let i=r;return p.defined(i)&&p.string(i.uri)&&(i.version===null||p.integer(i.version))}n.is=t})(Ns||(Ns={}));var ho;(function(n){function e(r,i,s,a){return{uri:r,languageId:i,version:s,text:a}}n.create=e;function t(r){let i=r;return p.defined(i)&&p.string(i.uri)&&p.string(i.languageId)&&p.integer(i.version)&&p.string(i.text)}n.is=t})(ho||(ho={}));var ws;(function(n){
    n.PlainText="plaintext";
    n.Markdown="markdown";
    function e(t){const r=t;return r===n.PlainText||r===n.Markdown}n.is=e
})(ws||(ws={}));var Jn;(function(n){function e(t){const r=t;return p.objectLiteral(t)&&ws.is(r.kind)&&p.string(r.value)}n.is=e})(Jn||(Jn={}));var po;(function(n){
    n.Text=1;
    n.Method=2;
    n.Function=3;
    n.Constructor=4;
    n.Field=5;
    n.Variable=6;
    n.Class=7;
    n.Interface=8;
    n.Module=9;
    n.Property=10;
    n.Unit=11;
    n.Value=12;
    n.Enum=13;
    n.Keyword=14;
    n.Snippet=15;
    n.Color=16;
    n.File=17;
    n.Reference=18;
    n.Folder=19;
    n.EnumMember=20;
    n.Constant=21;
    n.Struct=22;
    n.Event=23;
    n.Operator=24;
    n.TypeParameter=25;
})(po||(po={}));var mo;(function(n){
    n.PlainText=1;
    n.Snippet=2;
})(mo||(mo={}));var go;(function(n){n.Deprecated=1})(go||(go={}));var yo;(function(n){function e(r,i,s){return{newText:r,insert:i,replace:s}}n.create=e;function t(r){const i=r;return i&&p.string(i.newText)&&b.is(i.insert)&&b.is(i.replace)}n.is=t})(yo||(yo={}));var To;(function(n){
    n.asIs=1;
    n.adjustIndentation=2;
})(To||(To={}));var Ro;(function(n){function e(t){const r=t;return r&&(p.string(r.detail)||r.detail===void 0)&&(p.string(r.description)||r.description===void 0)}n.is=e})(Ro||(Ro={}));var vo;(function(n){function e(t){return{label:t}}n.create=e})(vo||(vo={}));var Ao;(function(n){function e(t,r){return{items:t||[],isIncomplete:!!r}}n.create=e})(Ao||(Ao={}));var ai;(function(n){function e(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&");}n.fromPlainText=e;function t(r){const i=r;return p.string(i)||p.objectLiteral(i)&&p.string(i.language)&&p.string(i.value)}n.is=t})(ai||(ai={}));var Eo;(function(n){function e(t){let r=t;return!!r&&p.objectLiteral(r)&&(Jn.is(r.contents)||ai.is(r.contents)||p.typedArray(r.contents,ai.is))&&(t.range===void 0||b.is(t.range))}n.is=e})(Eo||(Eo={}));var ko;(function(n){function e(t,r){return r?{label:t,documentation:r}:{label:t}}n.create=e})(ko||(ko={}));var $o;(function(n){function e(t,r,...i){
    let s={label:t};

    if (p.defined(r)) {
        (s.documentation = r);
    }

    if (p.defined(i)) {
        s.parameters=i;
    } else {
        s.parameters=[];
    }

    return s;
}n.create=e})($o||($o={}));var xo;(function(n){
    n.Text=1;
    n.Read=2;
    n.Write=3;
})(xo||(xo={}));var So;(function(n){function e(t,r){
    let i={range:t};

    if (p.number(r)) {
        (i.kind = r);
    }

    return i;
}n.create=e})(So||(So={}));var Io;(function(n){
    n.File=1;
    n.Module=2;
    n.Namespace=3;
    n.Package=4;
    n.Class=5;
    n.Method=6;
    n.Property=7;
    n.Field=8;
    n.Constructor=9;
    n.Enum=10;
    n.Interface=11;
    n.Function=12;
    n.Variable=13;
    n.Constant=14;
    n.String=15;
    n.Number=16;
    n.Boolean=17;
    n.Array=18;
    n.Object=19;
    n.Key=20;
    n.Null=21;
    n.EnumMember=22;
    n.Struct=23;
    n.Event=24;
    n.Operator=25;
    n.TypeParameter=26;
})(Io||(Io={}));var Co;(function(n){n.Deprecated=1})(Co||(Co={}));var No;(function(n){function e(t,r,i,s,a){
    let o={name:t,kind:r,location:{uri:s,range:i}};

    if (a) {
        (o.containerName = a);
    }

    return o;
}n.create=e})(No||(No={}));var wo;(function(n){function e(t,r,i,s){return s!==void 0?{name:t,kind:r,location:{uri:i,range:s}}:{name:t,kind:r,location:{uri:i}}}n.create=e})(wo||(wo={}));var _o;(function(n){function e(r,i,s,a,o,l){
    let u={name:r,detail:i,kind:s,range:a,selectionRange:o};

    if (l!==void 0) {
        (u.children = l);
    }

    return u;
}n.create=e;function t(r){let i=r;return i&&p.string(i.name)&&p.number(i.kind)&&b.is(i.range)&&b.is(i.selectionRange)&&(i.detail===void 0||p.string(i.detail))&&(i.deprecated===void 0||p.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}n.is=t})(_o||(_o={}));var Lo = {
    Empty: "",
    QuickFix: "quickfix",
    Refactor: "refactor",
    RefactorExtract: "refactor.extract",
    RefactorInline: "refactor.inline",
    RefactorRewrite: "refactor.rewrite",
    Source: "source",
    SourceOrganizeImports: "source.organizeImports",
    SourceFixAll: "source.fixAll"
};var oi;(function(n){
    n.Invoked=1;
    n.Automatic=2;
})(oi||(oi={}));var Oo;(function(n){function e(r,i,s){
    let a={diagnostics:r};

    if (i!=null) {
        (a.only = i);
    }

    if (s!=null) {
        (a.triggerKind = s);
    }

    return a;
}n.create=e;function t(r){let i=r;return p.defined(i)&&p.typedArray(i.diagnostics,si.is)&&(i.only===void 0||p.typedArray(i.only,p.string))&&(i.triggerKind===void 0||i.triggerKind===oi.Invoked||i.triggerKind===oi.Automatic)}n.is=t})(Oo||(Oo={}));var bo;(function(n){function e(r,i,s){
    let a={title:r};
    let o=true;

    if (typeof i=="string") {
        o=false;
        a.kind=i;
    } else if (en.is(i)) {
        a.command=i;
    } else {
        a.edit=i;
    }

    if (o&&s!==void 0) {
        (a.kind = s);
    }

    return a;
}n.create=e;function t(r){let i=r;return i&&p.string(i.title)&&(i.diagnostics===void 0||p.typedArray(i.diagnostics,si.is))&&(i.kind===void 0||p.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||en.is(i.command))&&(i.isPreferred===void 0||p.boolean(i.isPreferred))&&(i.edit===void 0||Cs.is(i.edit))}n.is=t})(bo||(bo={}));var Po;(function(n){function e(r,i){
    let s={range:r};

    if (p.defined(i)) {
        (s.data = i);
    }

    return s;
}n.create=e;function t(r){let i=r;return p.defined(i)&&b.is(i.range)&&(p.undefined(i.command)||en.is(i.command))}n.is=t})(Po||(Po={}));var Mo;(function(n){function e(r,i){return{tabSize:r,insertSpaces:i}}n.create=e;function t(r){let i=r;return p.defined(i)&&p.uinteger(i.tabSize)&&p.boolean(i.insertSpaces)}n.is=t})(Mo||(Mo={}));var Do;(function(n){function e(r,i,s){return{range:r,target:i,data:s}}n.create=e;function t(r){let i=r;return p.defined(i)&&b.is(i.range)&&(p.undefined(i.target)||p.string(i.target))}n.is=t})(Do||(Do={}));var Fo;(function(n){function e(r,i){return{range:r,parent:i}}n.create=e;function t(r){let i=r;return p.objectLiteral(i)&&b.is(i.range)&&(i.parent===void 0||n.is(i.parent))}n.is=t})(Fo||(Fo={}));var Go = {
    namespace: "namespace",
    type: "type",
    "class": "class",
    "enum": "enum",
    "interface": "interface",
    struct: "struct",
    typeParameter: "typeParameter",
    parameter: "parameter",
    variable: "variable",
    property: "property",
    enumMember: "enumMember",
    event: "event",
    "function": "function",
    method: "method",
    macro: "macro",
    keyword: "keyword",
    modifier: "modifier",
    comment: "comment",
    string: "string",
    number: "number",
    regexp: "regexp",
    operator: "operator",
    decorator: "decorator"
};var Uo = {
    declaration: "declaration",
    definition: "definition",
    readonly: "readonly",
    "static": "static",
    deprecated: "deprecated",
    abstract: "abstract",
    async: "async",
    modification: "modification",
    documentation: "documentation",
    defaultLibrary: "defaultLibrary"
};var Bo;(function(n){function e(t){const r=t;return p.objectLiteral(r)&&(r.resultId===void 0||typeof r.resultId=="string")&&Array.isArray(r.data)&&(r.data.length===0||typeof r.data[0]=="number")}n.is=e})(Bo||(Bo={}));var Vo;(function(n){function e(r,i){return{range:r,text:i}}n.create=e;function t(r){const i=r;return i!=null&&b.is(i.range)&&p.string(i.text)}n.is=t})(Vo||(Vo={}));var Ko;(function(n){function e(r,i,s){return{range:r,variableName:i,caseSensitiveLookup:s}}n.create=e;function t(r){const i=r;return i!=null&&b.is(i.range)&&p.boolean(i.caseSensitiveLookup)&&(p.string(i.variableName)||i.variableName===void 0)}n.is=t})(Ko||(Ko={}));var Wo;(function(n){function e(r,i){return{range:r,expression:i}}n.create=e;function t(r){const i=r;return i!=null&&b.is(i.range)&&(p.string(i.expression)||i.expression===void 0)}n.is=t})(Wo||(Wo={}));var jo;(function(n){function e(r,i){return{frameId:r,stoppedLocation:i}}n.create=e;function t(r){const i=r;return p.defined(i)&&b.is(r.stoppedLocation)}n.is=t})(jo||(jo={}));var _s;(function(n){
    n.Type=1;
    n.Parameter=2;
    function e(t){return t===1||t===2}n.is=e
})(_s||(_s={}));var Ls;(function(n){function e(r){return{value:r}}n.create=e;function t(r){const i=r;return p.objectLiteral(i)&&(i.tooltip===void 0||p.string(i.tooltip)||Jn.is(i.tooltip))&&(i.location===void 0||ii.is(i.location))&&(i.command===void 0||en.is(i.command))}n.is=t})(Ls||(Ls={}));var Ho;(function(n){function e(r,i,s){
    const a={position:r,label:i};

    if (s!==void 0) {
        (a.kind = s);
    }

    return a;
}n.create=e;function t(r){const i=r;return p.objectLiteral(i)&&P.is(i.position)&&(p.string(i.label)||p.typedArray(i.label,Ls.is))&&(i.kind===void 0||_s.is(i.kind))&&i.textEdits===void 0||p.typedArray(i.textEdits,tn.is)&&(i.tooltip===void 0||p.string(i.tooltip)||Jn.is(i.tooltip))&&(i.paddingLeft===void 0||p.boolean(i.paddingLeft))&&(i.paddingRight===void 0||p.boolean(i.paddingRight))}n.is=t})(Ho||(Ho={}));var zo;(function(n){function e(t){return{kind:"snippet",value:t}}n.createSnippet=e})(zo||(zo={}));var qo;(function(n){function e(t,r,i,s){return{insertText:t,filterText:r,range:i,command:s}}n.create=e})(qo||(qo={}));var Yo;(function(n){function e(t){return{items:t}}n.create=e})(Yo||(Yo={}));var Xo;(function(n){
    n.Invoked=0;
    n.Automatic=1;
})(Xo||(Xo={}));var Jo;(function(n){function e(t,r){return{range:t,text:r}}n.create=e})(Jo||(Jo={}));var Qo;(function(n){function e(t,r){return{triggerKind:t,selectedCompletionInfo:r}}n.create=e})(Qo||(Qo={}));var Zo;(function(n){function e(t){const r=t;return p.objectLiteral(r)&&vs.is(r.uri)&&p.string(r.name)}n.is=e})(Zo||(Zo={}));var el;(function(n){function e(s,a,o,l){return new sm(s,a,o,l)}n.create=e;function t(s){let a=s;return!!(p.defined(a)&&p.string(a.uri)&&(p.undefined(a.languageId)||p.string(a.languageId))&&p.uinteger(a.lineCount)&&p.func(a.getText)&&p.func(a.positionAt)&&p.func(a.offsetAt))}n.is=t;function r(s,a){
    let o=s.getText();
    let l=i(a,(c,d)=>{let h=c.range.start.line-d.range.start.line;return h===0?c.range.start.character-d.range.start.character:h});
    let u=o.length;
    for(let c=l.length-1;c>=0;c--){
        let d=l[c];
        let h=s.offsetAt(d.range.start);
        let f=s.offsetAt(d.range.end);
        if (f<=u) {
            o=o.substring(0,h)+d.newText+o.substring(f,o.length);
        } else {
            throw new Error("Overlapping edit");
        }u=h
    }return o
}n.applyEdits=r;function i(s,a){
    if (s.length<=1) {
        return s;
    }
    const o=s.length/2|0;
    const l=s.slice(0,o);
    const u=s.slice(o);
    i(l,a);
    i(u,a);
    let c=0;
    let d=0;
    let h=0;

    while (c<l.length&&d<u.length) {
        if (a(l[c],u[d])<=0) {
            s[h++]=l[c++];
        } else {
            s[h++]=u[d++];
        }
    }

    while (c<l.length) {
            s[h++]=l[c++];
        }

    while (d<u.length) {
            s[h++]=u[d++];
        }

    return s
}})(el||(el={}));let sm=class{constructor(e,t,r,i){
    this._uri=e;
    this._languageId=t;
    this._version=r;
    this._content=i;
    this._lineOffsets=void 0;
}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){
    let t=this.offsetAt(e.start);
    let r=this.offsetAt(e.end);
    return this._content.substring(t,r)
}return this._content}update(e,t){
    this._content=e.text;
    this._version=t;
    this._lineOffsets=void 0;
}getLineOffsets(){if(this._lineOffsets===void 0){
    let e=[];
    let t=this._content;
    let r=true;
    for(let i=0;i<t.length;i++){
        if (r) {
            e.push(i);
            r=false;
        }

        let s=t.charAt(i);

        r=s==="\r"||s===`
        `;

        if (s==="\r"&&i+1<t.length&&t.charAt(i+1)===`
        `) {
            i++;
        }
    }

    if (r&&t.length>0) {
        e.push(t.length);
    }

    this._lineOffsets=e;
}return this._lineOffsets}positionAt(e){
    e=Math.max(Math.min(e,this._content.length),0);
    let t=this.getLineOffsets();
    let r=0;
    let i=t.length;
    if (i===0) {
        return P.create(0,e);
    }

    while (r<i) {
        let a=Math.floor((r+i)/2);

        if (t[a]>e) {
            i=a;
        } else {
            r=a+1;
        }
    }

    let s=r-1;return P.create(s,e-t[s])
}offsetAt(e){
    let t=this.getLineOffsets();if (e.line>=t.length) {
        return this._content.length;
    }if (e.line<0) {
        return 0;
    }
    let r=t[e.line];
    let i=e.line+1<t.length?t[e.line+1]:this._content.length;
    return Math.max(Math.min(r+e.character,i),r)
}get lineCount(){return this.getLineOffsets().length}};var p;(function(n){const e=Object.prototype.toString;function t(f){return typeof f !== "undefined";}n.defined=t;function r(f){return typeof f === "undefined";}n.undefined=r;function i(f){return f===true||f===false;}n.boolean=i;function s(f){return e.call(f)==="[object String]"}n.string=s;function a(f){return e.call(f)==="[object Number]"}n.number=a;function o(f,m,g){return e.call(f)==="[object Number]"&&m<=f&&f<=g}n.numberRange=o;function l(f){return e.call(f)==="[object Number]"&&-2147483648<=f&&f<=2147483647}n.integer=l;function u(f){return e.call(f)==="[object Number]"&&f >= 0&&f<=2147483647;}n.uinteger=u;function c(f){return e.call(f)==="[object Function]"}n.func=c;function d(f){return f!==null&&typeof f=="object"}n.objectLiteral=d;function h(f,m){return Array.isArray(f)&&f.every(m)}n.typedArray=h})(p||(p={}));class am{constructor(){this.nodeStack=[]}get current(){
    return this.nodeStack[this.nodeStack.length-1] ?? this.rootNode;
}buildRootNode(e){
    this.rootNode=new Wu(e);
    this.rootNode.root=this.rootNode;
    this.nodeStack=[this.rootNode];
    return this.rootNode;
}buildCompositeNode(e){
    const t=new ua;
    t.grammarSource=e;
    t.root=this.rootNode;
    this.current.content.push(t);
    this.nodeStack.push(t);
    return t;
}buildLeafNode(e,t){
    const r=new Os(e.startOffset,e.image.length,as(e),e.tokenType,!t);
    r.grammarSource=t;
    r.root=this.rootNode;
    this.current.content.push(r);
    return r;
}removeNode(e){const t=e.container;if(t){
    const r=t.content.indexOf(e);

    if (r>=0) {
        t.content.splice(r,1);
    }
}}addHiddenNodes(e){
    const t=[];for(const s of e){
            const a=new Os(s.startOffset,s.image.length,as(s),s.tokenType,true);
            a.root=this.rootNode;
            t.push(a);
        }
    let r=this.current;
    let i=false;
    if(r.content.length>0){r.content.push(...t);return}

    while (r.container) {const s=r.container.content.indexOf(r);if(s>0){
            r.container.content.splice(s,0,...t);
            i=true;
            break
        }r=r.container}

    if (!i) {
        this.rootNode.content.unshift(...t);
    }
}construct(e){
    const t=this.current;

    if (typeof e.$type=="string") {
        (this.current.astNode = e);
    }

    e.$cstNode=t;
    const r=this.nodeStack.pop();

    if (r?.content.length===0) {
        this.removeNode(r);
    }
}}class Ku{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return false;}get astNode(){
    var e;
    var t;
    const r=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(t=this.container)===null||t===void 0?void 0:t.astNode;if (!r) {
        throw new Error("This node has no associated AST element");
    }return r
}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}}class Os extends Ku{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,t,r,i,s=false){
    super();
    this._hidden=s;
    this._offset=e;
    this._tokenType=i;
    this._length=t;
    this._range=r;
}}class ua extends Ku{constructor(...args) {
    super(...args);
    this.content=new ca(this);
}get children(){return this.content}get offset(){
    return ((e=this.firstNonHiddenNode)===null||e===void 0 ? void 0 : e.offset) ?? 0;
}get length(){return this.end-this.offset}get end(){
    return ((e=this.lastNonHiddenNode)===null||e===void 0 ? void 0 : e.end) ?? 0;
}get range(){
    const e=this.firstNonHiddenNode;
    const t=this.lastNonHiddenNode;
    if (e&&t) {if(this._rangeCache===void 0){
        const {range}=e;
        const {range: range_1}=t;
        this._rangeCache={start:range.start,end:range_1.end.line<range.start.line?range.start:range_1.end}
    }return this._rangeCache} else {
        return{start:P.create(0,0),end:P.create(0,0)}
    }
}get firstNonHiddenNode(){for (const e of this.content) {
    if (!e.hidden) {
        return e;
    }
}return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){const t=this.content[e];if (!t.hidden) {
    return t
}}return this.content[this.content.length-1]}}class ca extends Array{constructor(e){
    super();
    this.parent=e;
    Object.setPrototypeOf(this,ca.prototype);
}push(...e){
    this.addParents(e);
    return super.push(...e);
}unshift(...e){
    this.addParents(e);
    return super.unshift(...e);
}splice(e,t,...r){
    this.addParents(r);
    return super.splice(e,t,...r);
}addParents(e){for (const t of e) {
    t.container=this.parent
}}}class Wu extends ua{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){
    super();
    this._text="";
    this._text=e??"";
}}const bs=Symbol("Datatype");function Ki(n){return n.$type===bs}
const tl="​";

const ju=n => {
    return n.endsWith(tl)?n:n+tl;
};

class Hu{constructor(e){
    this._unorderedGroups=new Map;
    this.allRules=new Map;
    this.lexer=e.parser.Lexer;
    const t=this.lexer.definition;
    const r=e.LanguageMetaData.mode==="production";
    this.wrapper=new dm(t,Object.assign(Object.assign({},e.parser.ParserConfig),{skipValidations:r,errorMessageProvider:e.parser.ParserErrorMessageProvider}))
}alternatives(e,t){this.wrapper.wrapOr(e,t)}optional(e,t){this.wrapper.wrapOption(e,t)}many(e,t){this.wrapper.wrapMany(e,t)}atLeastOne(e,t){this.wrapper.wrapAtLeastOne(e,t)}getRule(e){return this.allRules.get(e)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}}class om extends Hu{get current(){return this.stack[this.stack.length-1]}constructor(e){
    super(e);
    this.nodeBuilder=new am;
    this.stack=[];
    this.assignmentMap=new Map;
    this.linker=e.references.Linker;
    this.converter=e.parser.ValueConverter;
    this.astReflection=e.shared.AstReflection;
}rule(e,t){
    const r=this.computeRuleType(e);
    const i=this.wrapper.DEFINE_RULE(ju(e.name),this.startImplementation(r,t).bind(this));
    this.allRules.set(e.name,i);

    if (e.entry) {
        (this.mainRule = i);
    }

    return i;
}computeRuleType(e){if(!e.fragment){if (Jl(e)) {
    return bs;
}{const t=Ys(e);return t??e.name}}}parse(e,t={}){
    this.nodeBuilder.buildRootNode(e);const r=this.lexerResult=this.lexer.tokenize(e);this.wrapper.input=r.tokens;const i=t.rule?this.allRules.get(t.rule):this.mainRule;if (!i) {
        throw new Error(t.rule?`No rule found with name '${t.rule}'`:"No main rule available.");
    }const s=i.call(this.wrapper,{});
    this.nodeBuilder.addHiddenNodes(r.hidden);
    this.unorderedGroups.clear();
    this.lexerResult=void 0;
    return {value:s,lexerErrors:r.errors,lexerReport:r.report,parserErrors:this.wrapper.errors};
}startImplementation(e,t){return r=>{
    const i=!this.isRecording()&&e!==void 0;if(i){
        const a={$type:e};
        this.stack.push(a);

        if (e===bs) {
            (a.value = "");
        }
    }let s;try{s=t(r)}catch{s=void 0}

    if (s===void 0&&i) {
        (s = this.construct());
    }

    return s;
};}extractHiddenTokens(e){const t=this.lexerResult.hidden;if (!t.length) {
    return[];
}const r=e.startOffset;for (let i=0; i<t.length; i++) {
    if (t[i].startOffset>r) {
        return t.splice(0,i);
    }
}return t.splice(0,t.length)}consume(e,t,r){const i=this.wrapper.wrapConsume(e,t);if(!this.isRecording()&&this.isValidToken(i)){
    const s=this.extractHiddenTokens(i);this.nodeBuilder.addHiddenNodes(s);
    const a=this.nodeBuilder.buildLeafNode(i,r);
    const {assignment,isCrossRef}=this.getAssignment(r);
    const u=this.current;
    if(assignment){const c=yt(r)?i.image:this.converter.convert(i.image,a);this.assign(assignment.operator,assignment.feature,c,a,isCrossRef)}else if(Ki(u)){
        let c=i.image;

        if (!yt(r)) {
            (c = this.converter.convert(c,a).toString());
        }

        u.value+=c;
    }
}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,t,r,i,s){
    let a;

    if (!this.isRecording()&&!r) {
        (a = this.nodeBuilder.buildCompositeNode(i));
    }

    const o=this.wrapper.wrapSubrule(e,t,s);

    if (!this.isRecording()&&a&&a.length>0) {
        this.performSubruleAssignment(o,i,a);
    }
}performSubruleAssignment(e,t,r){const{assignment,isCrossRef}=this.getAssignment(t);if (assignment) {
    this.assign(assignment.operator,assignment.feature,e,r,isCrossRef);
} else if(!assignment){const a=this.current;if (Ki(a)) {
    a.value+=e.toString();
} else if(typeof e=="object"&&e){
    const l=this.assignWithoutOverride(e,a);
    this.stack.pop();
    this.stack.push(l);
}}}action(e,t){if(!this.isRecording()){let r=this.current;if (t.feature&&t.operator) {
    r=this.construct();
    this.nodeBuilder.removeNode(r.$cstNode);
    this.nodeBuilder.buildCompositeNode(t).content.push(r.$cstNode);
    const s={$type:e};
    this.stack.push(s);
    this.assign(t.operator,t.feature,r,r.$cstNode,false);
} else {
    r.$type=e
}}}construct(){
    if (this.isRecording()) {
        return;
    }const e=this.current;
    Ud(e);
    this.nodeBuilder.construct(e);
    this.stack.pop();
    return Ki(e)?this.converter.convert(e.value,e.$cstNode):(Bd(this.astReflection,e),e);
}getAssignment(e){if(!this.assignmentMap.has(e)){const t=gi(e,gt);this.assignmentMap.set(e,{assignment:t,isCrossRef:t?js(t.terminal):false})}return this.assignmentMap.get(e)}assign(e,t,r,i,s){
    const a=this.current;let o;

    if (s&&typeof r=="string") {
        o=this.linker.buildReference(a,t,i,r);
    } else {
        o=r;
    }

    switch (e) {
    case"=":{a[t]=o;break}
    case"?=":{a[t]=true;break}
    case "+=":
        {
            if (!Array.isArray(a[t])) {
                (a[t] = []);
            }

            a[t].push(o);
        }
    }
}assignWithoutOverride(e,t){
    for(const[i,s]of Object.entries(t)){
        const a=e[i];

        if (a===void 0) {
            e[i]=s;
        } else if (Array.isArray(a)&&Array.isArray(s)) {
            s.push(...a);
            e[i]=s;
        }
    }const r=e.$cstNode;

    if (r) {
        r.astNode=void 0;
        e.$cstNode=void 0;
    }

    return e;
}get definitionErrors(){return this.wrapper.definitionErrors}}class lm{buildMismatchTokenMessage(e){return wt.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return wt.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return wt.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return wt.buildEarlyExitMessage(e)}}class zu extends lm{buildMismatchTokenMessage({expected,actual}){return `Expecting ${expected.LABEL?"`"+expected.LABEL+"`":expected.name.endsWith(":KW")?`keyword '${expected.name.substring(0,expected.name.length-3)}'`:`token of type '${expected.name}'`} but found \`${actual.image}\`.`;}buildNotAllInputParsedMessage({firstRedundant}){return `Expecting end of file but found \`${firstRedundant.image}\`.`;}}class um extends Hu{constructor(...args) {
    super(...args);
    this.tokens=[];
    this.elementStack=[];
    this.lastElementStack=[];
    this.nextTokenIndex=0;
    this.stackSize=0;
}action(){}construct(){}parse(e){
    this.resetState();const t=this.lexer.tokenize(e,{mode:"partial"});
    this.tokens=t.tokens;
    this.wrapper.input=[...this.tokens];
    this.mainRule.call(this.wrapper,{});
    this.unorderedGroups.clear();
    return {tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex};
}rule(e,t){
    const r=this.wrapper.DEFINE_RULE(ju(e.name),this.startImplementation(t).bind(this));
    this.allRules.set(e.name,r);

    if (e.entry) {
        (this.mainRule = r);
    }

    return r;
}resetState(){
    this.elementStack=[];
    this.lastElementStack=[];
    this.nextTokenIndex=0;
    this.stackSize=0;
}startImplementation(e){return t=>{const r=this.keepStackSize();try{e(t)}finally{this.resetStackSize(r)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){
    const e=this.elementStack.length;
    this.stackSize=e;
    return e;
}resetStackSize(e){
    this.removeUnexpectedElements();
    this.stackSize=e;
}consume(e,t,r){
    this.wrapper.wrapConsume(e,t);

    if (!this.isRecording()) {
        this.lastElementStack=[...this.elementStack,r];
        this.nextTokenIndex=this.currIdx+1;
    }
}subrule(e,t,r,i,s){
    this.before(i);
    this.wrapper.wrapSubrule(e,t,s);
    this.after(i);
}before(e){
    if (!this.isRecording()) {
        this.elementStack.push(e);
    }
}after(e){if(!this.isRecording()){
    const t=this.elementStack.lastIndexOf(e);

    if (t>=0) {
        this.elementStack.splice(t);
    }
}}get currIdx(){return this.wrapper.currIdx}}const cm={recoveryEnabled:true,nodeLocationTracking:"full",skipValidations:true,errorMessageProvider:new zu};class dm extends Tp{constructor(e,t){const r=t&&"maxLookahead"in t;super(e,Object.assign(Object.assign(Object.assign({},cm),{lookaheadStrategy:r?new ra({maxLookahead:t.maxLookahead}):new Gp({logging:t.skipValidations?()=>{}:void 0})}),t))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,t){return this.RULE(e,t)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,t){return this.consume(e,t)}wrapSubrule(e,t,r){return this.subrule(e,t,{ARGS:[r]})}wrapOr(e,t){this.or(e,t)}wrapOption(e,t){this.option(e,t)}wrapMany(e,t){this.many(e,t)}wrapAtLeastOne(e,t){this.atLeastOne(e,t)}}function qu(n,e,t){
    fm({parser:e,tokens:t,ruleNames:new Map},n);
    return e;
}function fm(n,e){
    const t=Hl(e,false);

    const r=ee(e.rules).filter(we).filter(i => {
        return t.has(i);
    });

    for(const i of r){const s=Object.assign(Object.assign({},n),{consume:1,optional:1,subrule:1,many:1,or:1});n.parser.rule(i,vt(s,i.definition))}
}function vt(n,e,t=false){let r;if (yt(e)) {
    r=Rm(n,e);
} else if (mi(e)) {
    r=hm(n,e);
} else if (gt(e)) {
    r=vt(n,e.terminal);
} else if (js(e)) {
    r=Yu(n,e);
} else if (Tt(e)) {
    r=pm(n,e);
} else if (Ul(e)) {
    r=gm(n,e);
} else if (Bl(e)) {
    r=ym(n,e);
} else if (Hs(e)) {
    r=Tm(n,e);
} else if (Ld(e)) {const i=n.consume++;r=() => {
    return n.parser.consume(i,tt,e);
}} else {
    throw new Ml(e.$cstNode,`Unexpected element type: ${e.$type}`);
}return Xu(n,t?void 0:li(e),r,e.cardinality)}function hm(n,e){const t=Xs(e);return () => {
    return n.parser.action(t,e);
};}function pm(n,e){const t=e.rule.ref;if(we(t)){
    const r=n.subrule++;
    const i=t.fragment;

    const s=e.arguments.length>0?mm(t,e.arguments):() => {
        return ({});
    };

    return a => {
        return n.parser.subrule(r,Ju(n,t),i,e,s(a));
    };
}else if(kt(t)){
    const r=n.consume++;
    const i=Ps(n,t.name);
    return () => {
        return n.parser.consume(r,i,e);
    };
}else if (t) {
    er();
} else {
    throw new Ml(e.$cstNode,`Undefined rule: ${e.rule.$refText}`)
}}function mm(n,e){const t=e.map(r => {
    return ze(r.value);
});return r=>{const i={};for(let s=0;s<t.length;s++){
    const a=n.parameters[s];
    const o=t[s];
    i[a.name]=o(r)
}return i};}function ze(n){if(Sd(n)){
    const e=ze(n.left);
    const t=ze(n.right);
    return r => {
        return e(r)||t(r);
    };
}else if(xd(n)){
    const e=ze(n.left);
    const t=ze(n.right);
    return r => {
        return e(r)&&t(r);
    };
}else if(Id(n)){const e=ze(n.value);return t => {
    return !e(t);
};}else if(Cd(n)){const e=n.parameter.ref.name;return t => {
    return t!==void 0&&t[e]===true;
};}else if($d(n)){const e=!!n.true;return () => {
    return e;
};}er()}function gm(n,e){if (e.elements.length===1) {
    return vt(n,e.elements[0]);
}{const t=[];for(const i of e.elements){
    const s={ALT:vt(n,i,true)};
    const a=li(i);

    if (a) {
        (s.GATE = ze(a));
    }

    t.push(s);
}const r=n.or++;return i => {
    return n.parser.alternatives(r,t.map(s=>{
        const a={ALT:() => {
            return s.ALT(i);
        }};

        const o=s.GATE;

        if (o) {
            (a.GATE = () => {
                return o(i);
            });
        }

        return a;
    }));
};}}function ym(n,e){
    if (e.elements.length===1) {
        return vt(n,e.elements[0]);
    }const t=[];for(const o of e.elements){
    const l={ALT:vt(n,o,true)};
    const u=li(o);

    if (u) {
        (l.GATE = ze(u));
    }

    t.push(l);
}
    const r=n.or++;
    const i=(o,l)=>{const u=l.getRuleStack().join("-");return`uGroup_${o}_${u}`};

    const s=o => {
        return n.parser.alternatives(r,t.map((l,u)=>{
            const c={ALT:() => {
                return true;
            }};

            const d=n.parser;
            c.ALT=()=>{
                l.ALT(o);

                if (!d.isRecording())
                    {
                        const f=i(r,d);

                        if (!d.unorderedGroups.get(f)) {
                            d.unorderedGroups.set(f,[]);
                        }

                        const m=d.unorderedGroups.get(f);

                        if (typeof m?.[u] === "undefined") {
                            (m[u] = true);
                        }
                    }
            };const h=l.GATE;

            if (h) {
                c.GATE=() => {
                    return h(o);
                };
            } else {
                c.GATE=()=>{const f=d.unorderedGroups.get(i(r,d));return!f?.[u]};
            }

            return c;
        }));
    };

    const a=Xu(n,li(e),s,"*");
    return o=>{
        a(o);

        if (!n.parser.isRecording()) {
            n.parser.unorderedGroups.delete(i(r,n.parser));
        }
    };
}function Tm(n,e){const t=e.elements.map(r => {
    return vt(n,r);
});return r => {
    return t.forEach(i => {
        return i(r);
    });
};}function li(n){if (Hs(n)) {
    return n.guardCondition
}}function Yu(n,e,t=e.terminal){if (t) {
    if(Tt(t)&&we(t.rule.ref)){
        const r=t.rule.ref;
        const i=n.subrule++;
        return s => {
            return n.parser.subrule(i,Ju(n,r),false,e,s);
        };
    }else if(Tt(t)&&kt(t.rule.ref)){
        const r=n.consume++;
        const i=Ps(n,t.rule.ref.name);
        return () => {
            return n.parser.consume(r,i,e);
        };
    }else if (yt(t)) {
        const r=n.consume++;
        const i=Ps(n,t.value);
        return () => {
            return n.parser.consume(r,i,e);
        };
    } else {
        throw new Error("Could not build cross reference parser");
    }
} else {
    if (!e.type.ref) {
        throw new Error("Could not resolve reference to type: "+e.type.$refText);
    }
    const r=Yl(e.type.ref);
    const i=r?.terminal;
    if (!i) {
        throw new Error("Could not find name assignment for type: "+Xs(e.type.ref));
    }return Yu(n,e,i)
}}function Rm(n,e){
    const t=n.consume++;
    const r=n.tokens[e.value];
    if (!r) {
        throw new Error("Could not find token for keyword: "+e.value);
    }return () => {
        return n.parser.consume(t,r,e);
    };
}function Xu(n,e,t,r){const i=e&&ze(e);if (!r) {
    if (i) {const s=n.or++;return a => {
        return n.parser.alternatives(s,[{ALT:() => {
            return t(a);
        },GATE:() => {
            return i(a);
        }},{ALT:Ya(),GATE:() => {
            return !i(a);
        }}]);
    };} else {
        return t;
    }
}if(r==="*"){const s=n.many++;return a => {
    return n.parser.many(s,{DEF:() => {
        return t(a);
    },GATE:i?() => {
        return i(a);
    }:void 0});
};}else if(r==="+"){const s=n.many++;if (i) {const a=n.or++;return o => {
    return n.parser.alternatives(a,[{ALT:() => {
        return n.parser.atLeastOne(s,{DEF:() => {
            return t(o);
        }});
    },GATE:() => {
        return i(o);
    }},{ALT:Ya(),GATE:() => {
        return !i(o);
    }}]);
};} else {
    return a => {
        return n.parser.atLeastOne(s,{DEF:() => {
            return t(a);
        }});
    };
}}else if (r==="?") {const s=n.optional++;return a => {
    return n.parser.optional(s,{DEF:() => {
        return t(a);
    },GATE:i?() => {
        return i(a);
    }:void 0});
};} else {
    er()
}}function Ju(n,e){
    const t=vm(n,e);
    const r=n.parser.getRule(t);
    if (!r) {
        throw new Error(`Rule "${t}" not found."`);
    }return r
}function vm(n,e){if (we(e)) {
    return e.name;
}if (n.ruleNames.has(e)) {
    return n.ruleNames.get(e);
}{
    let t=e;
    let r=t.$container;
    let i=e.$type;

    while (!we(r)) {
        if ((Hs(r)||Ul(r) || Bl(r))) {
            (i = r.elements.indexOf(t).toString()+":"+i);
        }

        t=r;
        r=r.$container;
    }

    i=r.name+":"+i;
    n.ruleNames.set(e,i);
    return i;
}}function Ps(n,e){const t=n.tokens[e];if (!t) {
    throw new Error(`Token "${e}" not found."`);
}return t}function Am(n){
    const e=n.Grammar;
    const t=n.parser.Lexer;
    const r=new um(n);
    qu(e,r,t.definition);
    r.finalize();
    return r;
}function Em(n){
    const e=km(n);
    e.finalize();
    return e;
}function km(n){
    const e=n.Grammar;
    const t=n.parser.Lexer;
    const r=new om(n);
    return qu(e,r,t.definition)
}class Qu{constructor(){this.diagnostics=[]}buildTokens(e,t){
    const r=ee(Hl(e,false));
    const i=this.buildTerminalTokens(r);
    const s=this.buildKeywordTokens(r,i,t);
    i.forEach(a=>{
        const o=a.PATTERN;

        if (typeof o=="object"&&o&&"test"in o&&ls(o)) {
            s.unshift(a);
        } else {
            s.push(a);
        }
    });
    return s;
}flushLexingReport(e){return{diagnostics:this.popDiagnostics()}}popDiagnostics(){
    const e=[...this.diagnostics];
    this.diagnostics=[];
    return e;
}buildTerminalTokens(e){return e.filter(kt).filter(t => {
    return !t.fragment;
}).map(t => {
    return this.buildTerminalToken(t);
}).toArray();}buildTerminalToken(e){
    const t=Js(e);
    const r=this.requiresCustomPattern(t)?this.regexPatternFunction(t):t;
    const i={name:e.name,PATTERN:r};

    if (typeof r=="function") {
        (i.LINE_BREAKS = true);
    }

    if (e.hidden) {
        (i.GROUP = ls(t)?fe.SKIPPED:"hidden");
    }

    return i;
}requiresCustomPattern(e){return e.flags.includes("u")||e.flags.includes("s")?true:!!(e.source.includes("?<=")||e.source.includes("?<!"));}regexPatternFunction(e){const t=new RegExp(e,e.flags+"y");return (r, i) => {
    t.lastIndex=i;
    return t.exec(r);
};}buildKeywordTokens(e,t,r){return e.filter(we).flatMap(i => {
    return tr(i).filter(yt);
}).distinct(i => {
    return i.value;
}).toArray().sort((i, s) => {
    return s.value.length-i.value.length;
}).map(i => {
    return this.buildKeywordToken(i,t,!!r?.caseInsensitive);
});}buildKeywordToken(e,t,r){
    const i=this.buildKeywordPattern(e,r);
    const s={name:e.value,PATTERN:i,LONGER_ALT:this.findLongerAlt(e,t)};

    if (typeof i=="function") {
        (s.LINE_BREAKS = true);
    }

    return s;
}buildKeywordPattern(e,t){return t?new RegExp(Xd(e.value)):e.value}findLongerAlt(e,t){return t.reduce((r,i)=>{
    const s=i?.PATTERN;

    if (s?.source&&Jd("^"+s.source+"$",e.value)) {
        r.push(i);
    }

    return r;
},[]);}}class Zu{convert(e,t){
    let r=t.grammarSource;

    if (js(r)) {
        (r = tf(r));
    }

    if (Tt(r)) {const i=r.rule.ref;if (!i) {
        throw new Error("This cst node was not parsed by a rule.");
    }return this.runConverter(i,e,t)}

    return e
}runConverter(e,t,r){var i;switch(e.name.toUpperCase()){case "INT":
    {
        return We.convertInt(t);
    }case "STRING":
    {
        return We.convertString(t);
    }case "ID":
    {
        return We.convertID(t)
    }}switch((i=uf(e))===null||i===void 0?void 0:i.toLowerCase()){case "number":
    {
        return We.convertNumber(t);
    }case "boolean":
    {
        return We.convertBoolean(t);
    }case "bigint":
    {
        return We.convertBigint(t);
    }case "date":
    {
        return We.convertDate(t);
    }default:
    {
        return t
    }}}}var We;(function(n){function e(u){let c="";for(let d=1;d<u.length-1;d++){const h=u.charAt(d);if (h==="\\")
    {const f=u.charAt(++d);c+=t(f)} else {
    c+=h
}}return c}n.convertString=e;function t(u){switch(u){case "b":
    {
        return"\b";
    }case "f":
    {
        return"\f";
    }case "n":
    {
        return`
        `;
    }case "r":
    {
        return"\r";
    }case "t":
    {
        return"	";
    }case "v":
    {
        return"\v";
    }case "0":
    {
        return"\0";
    }default:
    {
        return u
    }}}function r(u){return u.charAt(0)==="^"?u.substring(1):u}n.convertID=r;function i(u){return parseInt(u)}n.convertInt=i;function s(u){return BigInt(u)}n.convertBigint=s;function a(u){return new Date(u)}n.convertDate=a;function o(u){return Number(u)}n.convertNumber=o;function l(u){return u.toLowerCase()==="true"}n.convertBoolean=l})(We||(We={}));
var ht={};
var Ar={};
var nl;
function ec(){
    if (nl) {
        return Ar;
    }
    nl=1;
    Object.defineProperty(Ar,"__esModule",{value:true});
    let n;function e(){if (n===void 0) {
        throw new Error("No runtime abstraction layer installed");
    }return n}

    (function(t){function r(i){if (i===void 0) {
        throw new Error("No runtime abstraction layer provided");
    }n=i}t.install=r})(e||(e={}));

    Ar.default=e;
    return Ar;
}
var J={};
var rl;
function $m(){
    if (rl) {
        return J;
    }
    rl=1;
    Object.defineProperty(J,"__esModule",{value:true});
    J.stringArray = void 0;
    J.array = void 0;
    J.func = void 0;
    J.error = void 0;
    J.number = void 0;
    J.string = void 0;
    J.boolean = void 0;
    function n(o){return o===true||o===false;}J.boolean=n;function e(o){return typeof o=="string"||o instanceof String}J.string=e;function t(o){return typeof o=="number"||o instanceof Number}J.number=t;function r(o){return o instanceof Error}J.error=r;function i(o){return typeof o=="function"}J.func=i;function s(o){return Array.isArray(o)}J.array=s;function a(o){return s(o)&&o.every(l => {
        return e(l);
    });}
    J.stringArray=a;
    return J;
}
var pt={};
var il;
function tc(){
    if (il) {
        return pt;
    }
    il=1;
    Object.defineProperty(pt,"__esModule",{value:true});
    pt.Emitter = void 0;
    pt.Event = void 0;
    const n=ec();var e;(function(i){const s={dispose(){}};i.None=function(){return s}})(e||(pt.Event=e={}));class t{add(s,a=null,o){
    if (!this._callbacks) {
        this._callbacks=[];
        this._contexts=[];
    }

    this._callbacks.push(s);
    this._contexts.push(a);

    if (Array.isArray(o)) {
        o.push({dispose:() => {
            return this.remove(s,a);
        }});
    }
}remove(s,a=null){if (!this._callbacks) {
        return;
    }let o=false;for (let l=0,u=this._callbacks.length; l<u; l++) {
        if (this._callbacks[l]===s) {
            if (this._contexts[l]===a) {
                this._callbacks.splice(l,1);
                this._contexts.splice(l,1);
                return
            } else {
                o=true;
            }
        }
    }if (o) {
        throw new Error("When adding a listener with a context, you should remove it with the same context")
    }}invoke(...s){
        if (!this._callbacks) {
            return[];
        }
        const a=[];
        const o=this._callbacks.slice(0);
        const l=this._contexts.slice(0);
        for (let u=0,c=o.length; u<c; u++) {
            try{a.push(o[u].apply(l[u],s))}catch(d){(0,n.default)().console.error(d)}
        }return a
    }isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){
        this._callbacks=void 0;
        this._contexts=void 0;
    }}class r{constructor(s){this._options=s}get event(){
    if (!this._event) {
        (this._event = (s,a,o)=>{
            if (!this._callbacks) {
                (this._callbacks = new t);
            }

            if (this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()) {
                this._options.onFirstListenerAdd(this);
            }

            this._callbacks.add(s,a);
            const l={dispose:()=>{
                if (this._callbacks) {
                    this._callbacks.remove(s,a);
                    l.dispose=r._noop;
                    this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this);
                }
            }};

            if (Array.isArray(o)) {
                o.push(l);
            }

            return l;
        });
    }

    return this._event;
}fire(s){
    if (this._callbacks) {
        this._callbacks.invoke.call(this._callbacks,s);
    }
}dispose(){
    if (this._callbacks) {
        this._callbacks.dispose();
        this._callbacks=void 0;
    }
}}
    pt.Emitter=r;
    r._noop=function(){};
    return pt;
}var sl;function xm(){
    if (sl) {
        return ht;
    }
    sl=1;
    Object.defineProperty(ht,"__esModule",{value:true});
    ht.CancellationTokenSource = void 0;
    ht.CancellationToken = void 0;
    const n=ec();
    const e=$m();
    const t=tc();
    var r;(function(o){
        o.None=Object.freeze({isCancellationRequested:false,onCancellationRequested:t.Event.None});
        o.Cancelled=Object.freeze({isCancellationRequested:true,onCancellationRequested:t.Event.None});
        function l(u){const c=u;return c&&(c===o.None||c===o.Cancelled||e.boolean(c.isCancellationRequested)&&!!c.onCancellationRequested)}o.is=l
    })(r||(ht.CancellationToken=r={}));const i=Object.freeze(function(o,l){const u=(0,n.default)().timer.setTimeout(o.bind(l),0);return{dispose(){u.dispose()}}});class s{constructor(){this._isCancelled=false}cancel(){
    if (!this._isCancelled) {
        this._isCancelled=true;
        this._emitter&&(this._emitter.fire(void 0),this.dispose());
    }
}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?i:(this._emitter||(this._emitter=new t.Emitter),this._emitter.event)}dispose(){
    if (this._emitter) {
        this._emitter.dispose();
        this._emitter=void 0;
    }
}}class a{get token(){
    if (!this._token) {
        (this._token = new s);
    }

    return this._token;
}cancel(){
    if (this._token) {
        this._token.cancel();
    } else {
        this._token=r.Cancelled;
    }
}dispose(){
    if (this._token) {
        if (this._token instanceof s) {
            this._token.dispose();
        }
    } else {
        this._token=r.None;
    }
}}
    ht.CancellationTokenSource=a;
    return ht;
}var V=xm();function Sm(){return new Promise(n=>{
    if (typeof setImmediate === "undefined") {
        setTimeout(n,0);
    } else {
        setImmediate(n);
    }
});}
let Mr=0;
let Im=10;
function Cm(){
    Mr=performance.now();
    return new V.CancellationTokenSource;
}const ui=Symbol("OperationCancelled");function Si(n){return n===ui}async function Ae(n){
    if (n===V.CancellationToken.None) {
        return;
    }const e=performance.now();

    if (e-Mr>=Im) {
        Mr=e;
        await Sm();
        Mr=performance.now();
    }

    if (n.isCancellationRequested) {
        throw ui
    }
}class da{constructor(){this.promise=new Promise((e,t)=>{
    this.resolve=r => {
        e(r);
        return this;
    };

    this.reject=r => {
        t(r);
        return this;
    };
})}}class Qn{constructor(e,t,r,i){
    this._uri=e;
    this._languageId=t;
    this._version=r;
    this._content=i;
    this._lineOffsets=void 0;
}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){
    const t=this.offsetAt(e.start);
    const r=this.offsetAt(e.end);
    return this._content.substring(t,r)
}return this._content}update(e,t){for (const r of e) {
    if(Qn.isIncremental(r)){
        const i=rc(r.range);
        const s=this.offsetAt(i.start);
        const a=this.offsetAt(i.end);
        this._content=this._content.substring(0,s)+r.text+this._content.substring(a,this._content.length);
        const o=Math.max(i.start.line,0);
        const l=Math.max(i.end.line,0);
        let u=this._lineOffsets;const c=al(r.text,false,s);if (l-o===c.length) {
            for (let h=0,f=c.length; h<f; h++) {
                u[h+o+1]=c[h];
            }
        } else {
        if (c.length<10000/* 1e4 */) {
            u.splice(o+1,l-o,...c);
        } else {
            this._lineOffsets=u=u.slice(0,o+1).concat(c,u.slice(l+1));
        }
    }const d=r.text.length-(a-s);if (d!==0) {
            for (let h=o+1+c.length,f=u.length; h<f; h++) {
                u[h]=u[h]+d
            }
        }
    }else if (Qn.isFull(r)) {
        this._content=r.text;
        this._lineOffsets=void 0;
    } else {
        throw new Error("Unknown change event received");
    }
}this._version=t}getLineOffsets(){
    if (this._lineOffsets===void 0) {
        (this._lineOffsets = al(this._content,true));
    }

    return this._lineOffsets;
}positionAt(e){
    e=Math.max(Math.min(e,this._content.length),0);const t=this.getLineOffsets();
    let r=0;
    let i=t.length;
    if (i===0) {
        return{line:0,character:e};
    }

    while (r<i) {
        const a=Math.floor((r+i)/2);

        if (t[a]>e) {
            i=a;
        } else {
            r=a+1;
        }
    }

    const s=r-1;
    e=this.ensureBeforeEOL(e,t[s]);
    return {line:s,character:e-t[s]};
}offsetAt(e){
    const t=this.getLineOffsets();if (e.line>=t.length) {
        return this._content.length;
    }if (e.line<0) {
        return 0;
    }const r=t[e.line];if (e.character<=0) {
        return r;
    }
    const i=e.line+1<t.length?t[e.line+1]:this._content.length;
    const s=Math.min(r+e.character,i);
    return this.ensureBeforeEOL(s,r)
}ensureBeforeEOL(e,t){
    while (e>t&&nc(this._content.charCodeAt(e-1))) {
        e--;
    }

    return e
}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){const t=e;return t!=null&&typeof t.text=="string"&&t.range!==void 0&&(t.rangeLength===void 0||typeof t.rangeLength=="number")}static isFull(e){const t=e;return t!=null&&typeof t.text=="string"&&t.range===void 0&&t.rangeLength===void 0}}var Ms;(function(n){function e(i,s,a,o){return new Qn(i,s,a,o)}n.create=e;function t(i,s,a){if (i instanceof Qn) {
    i.update(s,a);
    return i;
}throw new Error("TextDocument.update: document must be created by TextDocument.create")}n.update=t;function r(i,s){
    const a=i.getText();
    const o=Ds(s.map(Nm),(c,d)=>{const h=c.range.start.line-d.range.start.line;return h===0?c.range.start.character-d.range.start.character:h});
    let l=0;const u=[];for(const c of o){
    const d=i.offsetAt(c.range.start);if (d<l) {
                throw new Error("Overlapping edit");
            }

    if (d>l) {
        u.push(a.substring(l,d));
    }

    if (c.newText.length) {
        u.push(c.newText);
    }

    l=i.offsetAt(c.range.end);
}
    u.push(a.substr(l));
    return u.join("");
}n.applyEdits=r})(Ms||(Ms={}));function Ds(n,e){
    if (n.length<=1) {
        return n;
    }
    const t=n.length/2|0;
    const r=n.slice(0,t);
    const i=n.slice(t);
    Ds(r,e);
    Ds(i,e);
    let s=0;
    let a=0;
    let o=0;

    while (s<r.length&&a<i.length) {
        if (e(r[s],i[a])<=0) {
            n[o++]=r[s++];
        } else {
            n[o++]=i[a++];
        }
    }

    while (s<r.length) {
            n[o++]=r[s++];
        }

    while (a<i.length) {
            n[o++]=i[a++];
        }

    return n
}function al(n,e,t=0){const r=e?[t]:[];for(let i=0;i<n.length;i++){
    const s=n.charCodeAt(i);

    if (nc(s)) {
        s===13&&i+1<n.length&&n.charCodeAt(i+1)===10&&i++;
        r.push(t+i+1);
    }
}return r}function nc(n){return n===13||n===10}function rc(n){
    const e=n.start;
    const t=n.end;
    return e.line>t.line||e.line===t.line&&e.character>t.character?{start:t,end:e}:n
}function Nm(n){const e=rc(n.range);return e!==n.range?{newText:n.newText,range:e}:n}var ic;(()=>{
    var n={470:i=>{
        function s(l){if (typeof l!="string") {
            throw new TypeError("Path must be a string. Received "+JSON.stringify(l))
        }}function a(l,u){
            var c;
            var d="";
            var h=0;
            var f=-1;
            var m=0;
            for(var g=0;g<=l.length;++g){if (g<l.length) {
                c=l.charCodeAt(g);
            } else {if (c===47) {
                break;
            }c=47}if (c===47) {
                if (!(f===g-1||m===1)) {
                    if (f!==g-1&&m===2) {
                        if(d.length<2||h!==2||d.charCodeAt(d.length-1)!==46||d.charCodeAt(d.length-2)!==46){if(d.length>2){var A=d.lastIndexOf("/");if(A!==d.length-1){
                            if (A===-1) {
                                d="";
                                h=0;
                            } else {
                                h=(d=d.slice(0,A)).length-1-d.lastIndexOf("/");
                            }

                            f=g;
                            m=0;
                            continue
                        }}else if(d.length===2||d.length===1){
                            d="";
                            h=0;
                            f=g;
                            m=0;
                            continue
                        }}

                        if (u) {
                            d.length>0?d+="/..":d="..";
                            h=2;
                        }
                    } else {
                        if (d.length>0) {
                            d+="/"+l.slice(f+1,g);
                        } else {
                            d=l.slice(f+1,g);
                        }

                        h=g-f-1;
                    }
                }
                f=g;
                m=0;
            } else {
                if (c===46&&m!==-1) {
                    ++m;
                } else {
                    m=-1;
                }
            }}return d
        }var o={resolve:function(...args) {
            var l;
            var u="";
            for(var c=false, d=args.length-1;d>=-1&&!c;d--){
                var h;

                if (d>=0) {
                    h=args[d];
                } else {
                    l===void 0&&(l=process.cwd());
                    h=l;
                }

                s(h);

                if (h.length!==0) {
                    u=h+"/"+u;
                    c=h.charCodeAt(0)===47;
                }
            }
            u=a(u,!c);
            return c?u.length>0?"/"+u:"/":u.length>0?u:".";
        },normalize:function(l){
        s(l);

        if (l.length===0) {
            return".";
        }

        var u=l.charCodeAt(0)===47;
        var c=l.charCodeAt(l.length-1)===47;

        if ((l=a(l,!u)).length === 0 && !u) {
            (l = ".");
        }

        if (l.length>0&&c) {
            (l += "/");
        }

        return u?"/"+l:l;
    },isAbsolute:function(l){
            s(l);
            return l.length>0&&l.charCodeAt(0)===47;
        },join:function(...args) {
            if (args.length===0) {
                return".";
            }
            var l;
            for(var u=0;u<args.length;++u){
                var c=args[u];
                s(c);

                if (c.length>0) {
                    if (l===void 0) {
                        l=c;
                    } else {
                        l+="/"+c;
                    }
                }
            }return l===void 0?".":o.normalize(l)
        },relative:function(l,u){
            s(l);
            s(u);

            if (l===u||(l=o.resolve(l))===(u=o.resolve(u))) {
                return"";
            }

            for (var c=1; c<l.length&&l.charCodeAt(c)===47; ++c)
                {}
            var d=l.length;
            var h=d-c;
            for (var f=1; f<u.length&&u.charCodeAt(f)===47; ++f)
                {}
            var m=u.length-f;
            var A=-1;
            for(var g=h<m?h:m, T=0;T<=g;++T){
                if(T===g){if (m>g) {if (u.charCodeAt(f+T)===47) {
                    return u.slice(f+T+1);
                }if (T===0) {
                    return u.slice(f+T)
                }} else {
                    if (h>g) {
                        if (l.charCodeAt(c+T)===47) {
                            A=T;
                        } else if (T===0) {
                            (A = 0);
                        }
                    }
                }break}var E=l.charCodeAt(c+T);if (E!==u.charCodeAt(f+T)) {
                    break;
                }

                if (E===47) {
                    (A = T);
                }
            }var R="";for (T=c+A+1; T<=d; ++T) {
        if (T === d || l.charCodeAt(T) === 47) {
            if (R.length===0) {
                R+="..";
            } else {
                R+="/..";
            }
        }
    }return R.length>0?R+u.slice(f+A):(f+=A,u.charCodeAt(f)===47&&++f,u.slice(f))
        },_makeLong:function(l){return l},dirname:function(l){
            s(l);

            if (l.length===0) {
                return".";
            }

            var u=l.charCodeAt(0);
            var c=u===47;
            var d=-1;
            var h=true;
            for (var f=l.length-1; f>=1; --f) {
                if ((u=l.charCodeAt(f))===47)
                    {if(!h){d=f;break}} else {
                    h=false;
                }
            }return d===-1?c?"/":".":c&&d===1?"//":l.slice(0,d)
        },basename:function(l,u){
            if (u!==void 0&&typeof u!="string") {
                throw new TypeError('"ext" argument must be a string');
            }s(l);
            var c;
            var d=0;
            var h=-1;
            var f=true;
            if(u!==void 0&&u.length>0&&u.length<=l.length){
                if (u.length===l.length&&u===l) {
                    return"";
                }
                var m=u.length-1;
                var g=-1;
                for(c=l.length-1;c>=0;--c){var A=l.charCodeAt(c);if (A===47)
                    {if(!f){d=c+1;break}} else {
                    if (g===-1) {
                        f=false;
                        g=c+1;
                    }

                    if (m>=0) {
                        if (A===u.charCodeAt(m)) {
                            if (--m==-1) {
                                (h = c);
                            }
                        } else {
                            m=-1;
                            h=g;
                        }
                    }
                }}

                if (d===h) {
                    h=g;
                } else if (h===-1) {
                    (h = l.length);
                }

                return l.slice(d,h);
            }for (c=l.length-1; c>=0; --c) {
                if (l.charCodeAt(c)===47)
                    {if(!f){d=c+1;break}} else {
                    if (h===-1) {
                        f=false;
                        h=c+1;
                    }
                }
            }return h===-1?"":l.slice(d,h)
        },extname:function(l){
            s(l);
            var u=-1;
            var c=0;
            var d=-1;
            var h=true;
            var f=0;
            for(var m=l.length-1;m>=0;--m){var g=l.charCodeAt(m);if (g!==47) {
                if (d===-1) {
                    h=false;
                    d=m+1;
                }

                if (g===46) {
                    if (u===-1) {
                        u=m;
                    } else if (f!==1) {
                        (f = 1);
                    }
                } else if (u!==-1) {
                    (f = -1);
                }
            } else
                if(!h){c=m+1;break}}return u===-1||d===-1||f===0||f===1&&u===d-1&&u===c+1?"":l.slice(u,d)
        },format:function(l){if (l===null||typeof l!="object") {
            throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof l);
        }return (function(u,c){
            var d=c.dir||c.root;
            var h=c.base||(c.name||"")+(c.ext||"");
            return d?d===c.root?d+h:d+"/"+h:h
        })(0,l);},parse:function(l){
        s(l);var u={root:"",dir:"",base:"",ext:"",name:""};if (l.length===0) {
                    return u;
                }
        var c;
        var d=l.charCodeAt(0);
        var h=d===47;

        if (h) {
            u.root="/";
            c=1;
        } else {
            c=0;
        }

        var f=-1;
        var m=0;
        var g=-1;
        var A=true;
        var E=0;
        for (var T=l.length-1; T>=c; --T) {
            if ((d=l.charCodeAt(T))!==47) {
                if (g===-1) {
                    A=false;
                    g=T+1;
                }

                if (d===46) {
                    if (f===-1) {
                        f=T;
                    } else if (E!==1) {
                        (E = 1);
                    }
                } else if (f!==-1) {
                    (E = -1);
                }
            } else
                if(!A){m=T+1;break}
        }

        if (f===-1||g===-1||E===0||E===1&&f===g-1&&f===m+1) {
            if (g!==-1) {
                (u.base = u.name=m===0&&h?l.slice(1,g):l.slice(m,g));
            }
        } else {
            m===0&&h?(u.name=l.slice(1,f),u.base=l.slice(1,g)):(u.name=l.slice(m,f),u.base=l.slice(m,g));
            u.ext=l.slice(f,g);
        }

        if (m>0) {
            u.dir=l.slice(0,m-1);
        } else if (h) {
            (u.dir = "/");
        }

        return u;
    },sep:"/",delimiter:":",win32:null,posix:null};
        o.posix=o;
        i.exports=o;
    }};

    var e={};
    function t(i){
        var s=e[i];if (s!==void 0) {
            return s.exports;
        }var a=e[i]={exports:{}};
        n[i](a,a.exports,t);
        return a.exports;
    }

    t.d=(i,s)=>{for (var a in s) {
        if (t.o(s,a)&&!t.o(i,a)) {
            Object.defineProperty(i,a,{enumerable:true,get:s[a]});
        }
    }};

    t.o=(i, s) => {
        return Object.prototype.hasOwnProperty.call(i,s);
    };

    t.r=i=>{
        if (typeof Symbol !== "undefined"&&Symbol.toStringTag) {
            Object.defineProperty(i,Symbol.toStringTag,{value:"Module"});
        }

        Object.defineProperty(i,"__esModule",{value:true});
    };

    var r={};

    (()=>{
        let i;
        t.r(r);

        t.d(r,{URI:() => {
            return h;
        },Utils:() => {
            return Ie;
        }});

        if (typeof process=="object") {
            i=process.platform==="win32";
        } else if (typeof navigator=="object") {
            (i = navigator.userAgent.indexOf("Windows")>=0);
        }

        const s=/^\w[\w\d+.-]*$/;
        const a=/^\//;
        const o=/^\/\//;
        function l(k,y){if (!k.scheme&&y) {
            throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${k.authority}", path: "${k.path}", query: "${k.query}", fragment: "${k.fragment}"}`);
        }if (k.scheme&&!s.test(k.scheme)) {
            throw new Error("[UriError]: Scheme contains illegal characters.");
        }if(k.path){if(k.authority){if (!a.test(k.path)) {
            throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
        }}else if (o.test(k.path)) {
            throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
        }}}
        const u="";
        const c="/";
        const d=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
        class h{static isUri(y){return y instanceof h||!!y&&typeof y.authority=="string"&&typeof y.fragment=="string"&&typeof y.path=="string"&&typeof y.query=="string"&&typeof y.scheme=="string"&&typeof y.fsPath=="string"&&typeof y.with=="function"&&typeof y.toString=="function"}scheme;authority;path;query;fragment;constructor(y,S,x,O,L,_=false){
            if (typeof y=="object") {
                this.scheme=y.scheme||u;
                this.authority=y.authority||u;
                this.path=y.path||u;
                this.query=y.query||u;
                this.fragment=y.fragment||u;
            } else {
                this.scheme=(function(Te,q){return Te||q?Te:"file"})(y,_);
                this.authority=S||u;

                this.path=(function(Te,q){switch(Te){case"https":case"http":case "file":
                    {
                        if (q) {
                            if (q[0]!==c) {
                                (q = c+q);
                            }
                        } else {
                            q=c;
                        }
                    }}return q})(this.scheme,x||u);

                this.query=O||u;
                this.fragment=L||u;
                l(this,_);
            }
        }get fsPath(){return E(this)}with(y){
            if (!y) {
                return this;
            }let{scheme,authority,path,query,fragment}=y;

            if (scheme===void 0) {
                scheme=this.scheme;
            } else if (scheme===null) {
                (scheme = u);
            }

            if (authority===void 0) {
                authority=this.authority;
            } else if (authority===null) {
                (authority = u);
            }

            if (path===void 0) {
                path=this.path;
            } else if (path===null) {
                (path = u);
            }

            if (query===void 0) {
                query=this.query;
            } else if (query===null) {
                (query = u);
            }

            if (fragment===void 0) {
                fragment=this.fragment;
            } else if (fragment===null) {
                (fragment = u);
            }

            return scheme===this.scheme&&authority===this.authority&&path===this.path&&query===this.query&&fragment===this.fragment?this:new m(scheme,authority,path,query,fragment);
        }static parse(y,S=false){const x=d.exec(y);return x?new m(x[2]||u,ie(x[4]||u),ie(x[5]||u),ie(x[7]||u),ie(x[9]||u),S):new m(u,u,u,u,u)}static file(y){
            let S=u;

            if (i) {
                (y = y.replace(/\\/g,c));
            }

            if (y[0]===c&&y[1]===c)
                {
                    const x=y.indexOf(c,2);

                    if (x===-1) {
                        S=y.substring(2);
                        y=c;
                    } else {
                        S=y.substring(2,x);
                        y=y.substring(x)||c;
                    }
                }

            return new m("file",S,y,u,u)
        }static from(y){
            const S=new m(y.scheme,y.authority,y.path,y.query,y.fragment);
            l(S,true);
            return S;
        }toString(y=false){return R(this,y)}toJSON(){return this}static revive(y){if(y){if (y instanceof h) {
            return y;
        }{
            const S=new m(y);
            S._formatted=y.external;
            S._fsPath=y._sep===f?y.fsPath:null;
            return S;
        }}return y}}const f=i?1:void 0;class m extends h{_formatted=null;_fsPath=null;get fsPath(){
            if (!this._fsPath) {
                (this._fsPath = E(this));
            }

            return this._fsPath;
        }toString(y=false){return y?R(this,true):(this._formatted||(this._formatted=R(this,false)),this._formatted);}toJSON(){
            const y={$mid:1};

            if (this._fsPath) {
                y.fsPath=this._fsPath;
                y._sep=f;
            }

            if (this._formatted) {
                (y.external = this._formatted);
            }

            if (this.path) {
                (y.path = this.path);
            }

            if (this.scheme) {
                (y.scheme = this.scheme);
            }

            if (this.authority) {
                (y.authority = this.authority);
            }

            if (this.query) {
                (y.query = this.query);
            }

            if (this.fragment) {
                (y.fragment = this.fragment);
            }

            return y;
        }}const g={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function A(k,y,S){
            let x;
            let O=-1;
            for(let L=0;L<k.length;L++){const _=k.charCodeAt(L);if (_>=97&&_<=122||_>=65&&_<=90||_>=48&&_<=57||_===45||_===46||_===95||_===126||y&&_===47||S&&_===91||S&&_===93||S&&_===58) {
                if (O!==-1) {
                    x+=encodeURIComponent(k.substring(O,L));
                    O=-1;
                }

                if (x!==void 0) {
                    (x += k.charAt(L));
                }
            } else
                {
                    if (x===void 0) {
                        (x = k.substr(0,L));
                    }

                    const Te=g[_];

                    if (Te!==void 0) {
                        O!==-1&&(x+=encodeURIComponent(k.substring(O,L)),O=-1);
                        x+=Te;
                    } else if (O===-1) {
                        (O = L);
                    }
                }}

            if (O!==-1) {
                (x += encodeURIComponent(k.substring(O)));
            }

            return x!==void 0?x:k;
        }function T(k){let y;for(let S=0;S<k.length;S++){
            const x=k.charCodeAt(S);

            if (x===35||x===63) {
                y===void 0&&(y=k.substr(0,S));
                y+=g[x];
            } else if (y!==void 0) {
                (y += k[S]);
            }
        }return y!==void 0?y:k}function E(k,y){
            let S;
            S=k.authority&&k.path.length>1&&k.scheme==="file"?`//${k.authority}${k.path}`:k.path.charCodeAt(0)===47&&(k.path.charCodeAt(1)>=65&&k.path.charCodeAt(1)<=90||k.path.charCodeAt(1)>=97&&k.path.charCodeAt(1)<=122)&&k.path.charCodeAt(2)===58?k.path[1].toLowerCase()+k.path.substr(2):k.path;

            if (i) {
                (S = S.replace(/\//g,"\\"));
            }

            return S;
        }function R(k,y){
            const S=y?T:A;
            let x="";
            let {scheme,authority,path,query,fragment}=k;

            if (scheme) {
                x+=scheme;
                x+=":";
            }

            if ((authority || scheme==="file")) {
                x+=c;
                x+=c;
            }

            if (authority) {
                let K=authority.indexOf("@");if(K!==-1){
                    const ct=authority.substr(0,K);
                    authority=authority.substr(K+1);
                    K=ct.lastIndexOf(":");

                    if (K===-1) {
                        x+=S(ct,false,false);
                    } else {
                        x+=S(ct.substr(0,K),false,false);
                        x+=":";
                        x+=S(ct.substr(K+1),false,true);
                    }

                    x+="@";
                }
                authority=authority.toLowerCase();
                K=authority.lastIndexOf(":");

                if (K===-1) {
                    x+=S(authority,false,true);
                } else {
                    x+=S(authority.substr(0,K),false,true);
                    x+=authority.substr(K);
                }
            }

            if(path){if(path.length>=3&&path.charCodeAt(0)===47&&path.charCodeAt(2)===58){
                const K=path.charCodeAt(1);

                if (K>=65&&K<=90) {
                    (path = `/${String.fromCharCode(K+32)}:${path.substr(3)}`);
                }
            }else if(path.length>=2&&path.charCodeAt(1)===58){
                const K=path.charCodeAt(0);

                if (K>=65&&K<=90) {
                    (path = `${String.fromCharCode(K+32)}:${path.substr(2)}`);
                }
            }x+=S(path,true,false)}

            if (query) {
                x+="?";
                x+=S(query,false,false);
            }

            if (fragment) {
                x+="#";
                x+=y?fragment:A(fragment,false,false);
            }

            return x;
        }function I(k){try{return decodeURIComponent(k)}catch{return k.length>3?k.substr(0,3)+I(k.substr(3)):k}}const F=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function ie(k){return k.match(F)?k.replace(F,(y => {
                return I(y);
            })):k;}var _e=t(470);
        const ye=_e.posix||_e;
        const Fe="/";
        var Ie;(function(k){
                k.joinPath=function(y,...S){return y.with({path:ye.join(y.path,...S)})};

                k.resolvePath=function(y,...S){
                    let x=y.path;
                    let O=false;

                    if (x[0]!==Fe) {
                        x=Fe+x;
                        O=true;
                    }

                    let L=ye.resolve(x,...S);

                    if (O&&L[0]===Fe&&!y.authority) {
                        (L = L.substring(1));
                    }

                    return y.with({path:L});
                };

                k.dirname=function(y){
                    if (y.path.length===0||y.path===Fe) {
                        return y;
                    }let S=ye.dirname(y.path);

                    if (S.length===1&&S.charCodeAt(0)===46) {
                        (S = "");
                    }

                    return y.with({path:S});
                };

                k.basename=function(y){return ye.basename(y.path)};
                k.extname=function(y){return ye.extname(y.path)};
            })(Ie||(Ie={}))
    })();

    ic=r;
})();const{URI,Utils}=ic;var rt;(function(n){
    n.basename=Utils.basename;
    n.dirname=Utils.dirname;
    n.extname=Utils.extname;
    n.joinPath=Utils.joinPath;
    n.resolvePath=Utils.resolvePath;
    function e(i,s){return i?.toString()===s?.toString()}n.equals=e;function t(i,s){
        const a=typeof i=="string"?i:i.path;
        const o=typeof s=="string"?s:s.path;

        const l=a.split("/").filter(f => {
            return f.length>0;
        });

        const u=o.split("/").filter(f => {
            return f.length>0;
        });

        let c=0;for (; c<l.length&&l[c]===u[c]; c++)
            {}
        const d="../".repeat(l.length-c);
        const h=u.slice(c).join("/");
        return d+h
    }n.relative=t;function r(i){return URI.parse(i.toString()).toString();}n.normalize=r
})(rt||(rt={}));var U = {
    Changed: 0,
    Parsed: 1,
    IndexedContent: 2,
    ComputedScopes: 3,
    Linked: 4,
    IndexedReferences: 5,
    Validated: 6,

    // reverse mapping
    0: "Changed",

    1: "Parsed",
    2: "IndexedContent",
    3: "ComputedScopes",
    4: "Linked",
    5: "IndexedReferences",
    6: "Validated"
};class wm{constructor(e){
    this.serviceRegistry=e.ServiceRegistry;
    this.textDocuments=e.workspace.TextDocuments;
    this.fileSystemProvider=e.workspace.FileSystemProvider;
}async fromUri(e,t=V.CancellationToken.None){const r=await this.fileSystemProvider.readFile(e);return this.createAsync(e,r,t)}fromTextDocument(e,t,r){
    t=t??URI.parse(e.uri);
    return V.CancellationToken.is(r)?this.createAsync(t,e,r):this.create(t,e,r);
}fromString(e,t,r){return V.CancellationToken.is(r)?this.createAsync(t,e,r):this.create(t,e,r)}fromModel(e,t){return this.create(t,{$model:e})}create(e,t,r){if(typeof t=="string"){const i=this.parse(e,t,r);return this.createLangiumDocument(i,e,void 0,t)}else if("$model"in t){const i={value:t.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(i,e)}else{const i=this.parse(e,t.getText(),r);return this.createLangiumDocument(i,e,t)}}async createAsync(e,t,r){if(typeof t=="string"){const i=await this.parseAsync(e,t,r);return this.createLangiumDocument(i,e,void 0,t)}else{const i=await this.parseAsync(e,t.getText(),r);return this.createLangiumDocument(i,e,t)}}createLangiumDocument(e,t,r,i){
    let s;if (r) {
        s={parseResult:e,uri:t,state:U.Parsed,references:[],textDocument:r};
    } else
        {const a=this.createTextDocumentGetter(t,i);s={parseResult:e,uri:t,state:U.Parsed,references:[],get textDocument(){return a()}}}
    e.value.$document=s;
    return s;
}async update(e,t){
    var r;
    var i;
    const s=(r=e.parseResult.value.$cstNode)===null||r===void 0?void 0:r.root.fullText;
    const a=(i=this.textDocuments)===null||i===void 0?void 0:i.get(e.uri.toString());
    const o=a?a.getText():await this.fileSystemProvider.readFile(e.uri);
    if (a) {
        Object.defineProperty(e,"textDocument",{value:a});
    } else
        {const l=this.createTextDocumentGetter(e.uri,o);Object.defineProperty(e,"textDocument",{get:l})}

    if (s!==o) {
        e.parseResult=await this.parseAsync(e.uri,o,t);
        e.parseResult.value.$document=e;
    }

    e.state=U.Parsed;
    return e;
}parse(e,t,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(t,r)}parseAsync(e,t,r){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(t,r)}createTextDocumentGetter(e,t){const r=this.serviceRegistry;let i;return () => {
    return i??(i=Ms.create(e.toString(),r.getServices(e).LanguageMetaData.languageId,0,t??""));
};}}class _m{constructor(e){
    this.documentMap=new Map;
    this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory;
    this.serviceRegistry=e.ServiceRegistry;
}get all(){return ee(this.documentMap.values())}addDocument(e){const t=e.uri.toString();if (this.documentMap.has(t)) {
    throw new Error(`A document with the URI '${t}' is already present.`);
}this.documentMap.set(t,e)}getDocument(e){const t=e.toString();return this.documentMap.get(t)}async getOrCreateDocument(e,t){let r=this.getDocument(e);return r||(r=await this.langiumDocumentFactory.fromUri(e,t),this.addDocument(r),r)}createDocument(e,t,r){if (r) {
    return this.langiumDocumentFactory.fromString(t,e,r).then(i => {
        this.addDocument(i);
        return i;
    });
}{
    const i=this.langiumDocumentFactory.fromString(t,e);
    this.addDocument(i);
    return i;
}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){
    const t=e.toString();
    const r=this.documentMap.get(t);

    if (r) {
        this.serviceRegistry.getServices(e).references.Linker.unlink(r);
        r.state=U.Changed;
        r.precomputedScopes=void 0;
        r.diagnostics=void 0;
    }

    return r;
}deleteDocument(e){
    const t=e.toString();
    const r=this.documentMap.get(t);

    if (r) {
        r.state=U.Changed;
        this.documentMap.delete(t);
    }

    return r;
}}const Wi=Symbol("ref_resolving");class Lm{constructor(e){
    this.reflection=e.shared.AstReflection;

    this.langiumDocuments=() => {
        return e.shared.workspace.LangiumDocuments;
    };

    this.scopeProvider=e.references.ScopeProvider;
    this.astNodeLocator=e.workspace.AstNodeLocator;
}async link(e,t=V.CancellationToken.None){for (const r of _t(e.parseResult.value)) {
    await Ae(t);

    Kl(r).forEach(i => {
        return this.doLink(i,e);
    });
}}doLink(e,t){
    const i=e.reference;if(i._ref===void 0){i._ref=Wi;try{const s=this.getCandidate(e);if (Nr(s)) {
        i._ref=s;
    } else {
        i._nodeDescription=s;

        if (this.langiumDocuments().hasDocument(s.documentUri))
            {const a=this.loadAstNode(s);i._ref=a??this.createLinkingError(e,s)} else {
            i._ref=void 0
        }
    }}catch(s){console.error(`An error occurred while resolving reference to '${i.$refText}':`,s);const a=s.message ?? String(s);i._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${i.$refText}': ${a}`})}t.references.push(i)}
}unlink(e){for (const t of e.references) {
    delete t._ref;
    delete t._nodeDescription;
}e.references=[]}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r??this.createLinkingError(e)}buildReference(e,t,r,i){
    const s=this;

    const a={$refNode:r,$refText:i,get ref(){
        if (ae(this._ref)) {
            return this._ref;
        }if(pd(this._nodeDescription)){const l=s.loadAstNode(this._nodeDescription);this._ref=l??s.createLinkingError({reference:a,container:e,property:t},this._nodeDescription)}else if(this._ref===void 0){
            this._ref=Wi;
            const l=os(e).$document;
            const u=s.getLinkedNode({reference:a,container:e,property:t});
            if (u.error&&l&&l.state<U.ComputedScopes) {
                return this._ref=void 0;
            }
            this._ref=u.node ?? u.error;
            this._nodeDescription=u.descr;
            l?.references.push(this);
        }else if (this._ref===Wi) {
            throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${t} (symbol '${i}')`);
        }return ae(this._ref)?this._ref:void 0
    },get $nodeDescription(){return this._nodeDescription},get error(){return Nr(this._ref)?this._ref:void 0}};

    return a
}getLinkedNode(e){
    try{const r=this.getCandidate(e);if (Nr(r)) {
        return{error:r};
    }const i=this.loadAstNode(r);return i?{node:i,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`,r);const i=r.message ?? String(r);return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${i}`})}}
}loadAstNode(e){if (e.node) {
    return e.node;
}const t=this.langiumDocuments().getDocument(e.documentUri);if (t) {
    return this.astNodeLocator.getAstNode(t.parseResult.value,e.path)
}}createLinkingError(e,t){
    const r=os(e.container).$document;

    if (r&&r.state<U.ComputedScopes) {
        console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);
    }

    const i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:t})
}}function Om(n){return typeof n.name=="string"}class bm{getName(e){if (Om(e)) {
    return e.name
}}getNameNode(e){return ql(e.$cstNode,"name")}}class Pm{constructor(e){
    this.nameProvider=e.references.NameProvider;
    this.index=e.shared.workspace.IndexManager;
    this.nodeLocator=e.workspace.AstNodeLocator;
}findDeclaration(e){if(e){
    const t=of(e);
    const r=e.astNode;
    if(t&&r){const i=r[t.feature];if (Ue(i)) {
        return i.ref;
    }if(Array.isArray(i)){for (const s of i) {
        if (Ue(s)&&s.$refNode&&s.$refNode.offset<=e.offset&&s.$refNode.end>=e.end) {
            return s.ref
        }
    }}}if(r){const i=this.nameProvider.getNameNode(r);if (i&&(i===e||yd(e,i))) {
        return r
    }}
}}findDeclarationNode(e){const t=this.findDeclaration(e);if(t?.$cstNode){const r=this.nameProvider.getNameNode(t);return r??t.$cstNode}}findReferences(e,t){
    const r=[];if(t.includeDeclaration){
        const s=this.getReferenceToSelf(e);

        if (s) {
            r.push(s);
        }
    }let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));

    if (t.documentUri) {
        (i = i.filter(s => {
            return rt.equals(s.sourceUri,t.documentUri);
        }));
    }

    r.push(...i);
    return ee(r);
}getReferenceToSelf(e){const t=this.nameProvider.getNameNode(e);if(t){
    const r=Ze(e);
    const i=this.nodeLocator.getAstNodePath(e);
    return {sourceUri:r.uri,sourcePath:i,targetUri:r.uri,targetPath:i,segment:jr(t),local:true};
}}}class ci{constructor(e){
    this.map=new Map;

    if (e) {
        for (const[t,r] of e) {
            this.add(t,r)
        }
    }
}get size(){return is.sum(ee(this.map.values()).map(e => {
    return e.length;
}));}clear(){this.map.clear()}delete(e,t){if (t===void 0) {
    return this.map.delete(e);
}{const r=this.map.get(e);if(r){const i=r.indexOf(t);if (i>=0) {
    if (r.length===1) {
        this.map.delete(e);
    } else {
        r.splice(i,1);
    }

    return true;
}}return false;}}get(e){
    return this.map.get(e) ?? [];
}has(e,t){if (t===void 0) {
    return this.map.has(e);
}{const r=this.map.get(e);return r?r.indexOf(t)>=0:false;}}add(e,t){
    if (this.map.has(e)) {
        this.map.get(e).push(t);
    } else {
        this.map.set(e,[t]);
    }

    return this;
}addAll(e,t){
    if (this.map.has(e)) {
        this.map.get(e).push(...t);
    } else {
        this.map.set(e,Array.from(t));
    }

    return this;
}forEach(e){this.map.forEach((t, r) => {
    return t.forEach(i => {
        return e(i,r,this);
    });
})}[Symbol.iterator](){return this.entries().iterator()}entries(){return ee(this.map.entries()).flatMap(([e,t]) => {
    return t.map(r => {
        return [e,r];
    });
});}keys(){return ee(this.map.keys())}values(){return ee(this.map.values()).flat()}entriesGroupedByKey(){return ee(this.map.entries())}}class ol{get size(){return this.map.size}constructor(e){
    this.map=new Map;
    this.inverse=new Map;

    if (e) {
        for (const[t,r] of e) {
            this.set(t,r)
        }
    }
}clear(){
    this.map.clear();
    this.inverse.clear();
}set(e,t){
    this.map.set(e,t);
    this.inverse.set(t,e);
    return this;
}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){const t=this.map.get(e);return t!==void 0?(this.map.delete(e),this.inverse.delete(t),true):false;}}class Mm{constructor(e){
    this.nameProvider=e.references.NameProvider;
    this.descriptions=e.workspace.AstNodeDescriptionProvider;
}async computeExports(e,t=V.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,t)}async computeExportsForNode(e,t,r=zs,i=V.CancellationToken.None){const s=[];this.exportNode(e,s,t);for (const a of r(e)) {
    await Ae(i);
    this.exportNode(a,s,t);
}return s}exportNode(e,t,r){
    const i=this.nameProvider.getName(e);

    if (i) {
        t.push(this.descriptions.createDescription(e,i,r));
    }
}async computeLocalScopes(e,t=V.CancellationToken.None){
    const r=e.parseResult.value;
    const i=new ci;
    for (const s of tr(r)) {
        await Ae(t);
        this.processNode(s,e,i);
    }return i
}processNode(e,t,r){const i=e.$container;if(i){
    const s=this.nameProvider.getName(e);

    if (s) {
        r.add(i,this.descriptions.createDescription(e,s,t));
    }
}}}class ll{constructor(e,t,r){
    this.elements=e;
    this.outerScope=t;
    this.caseInsensitive=r?.caseInsensitive ?? false;
}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){const t=this.caseInsensitive?this.elements.find(r => {
    return r.name.toLowerCase()===e.toLowerCase();
}):this.elements.find(r => {
    return r.name===e;
});if (t) {
    return t;
}if (this.outerScope) {
    return this.outerScope.getElement(e)
}}}class Dm{constructor(e,t,r){
    this.elements=new Map;
    this.caseInsensitive=r?.caseInsensitive ?? false;
    for(const s of e){const a=this.caseInsensitive?s.name.toLowerCase():s.name;this.elements.set(a,s)}this.outerScope=t
}getElement(e){
    const t=this.caseInsensitive?e.toLowerCase():e;
    const r=this.elements.get(t);
    if (r) {
        return r;
    }if (this.outerScope) {
        return this.outerScope.getElement(e)
    }
}getAllElements(){
    let e=ee(this.elements.values());

    if (this.outerScope) {
        (e = e.concat(this.outerScope.getAllElements()));
    }

    return e;
}}class sc{constructor(){
    this.toDispose=[];
    this.isDisposed=false;
}onDispose(e){this.toDispose.push(e)}dispose(){
    this.throwIfDisposed();
    this.clear();
    this.isDisposed=true;

    this.toDispose.forEach(e => {
        return e.dispose();
    });
}throwIfDisposed(){if (this.isDisposed) {
    throw new Error("This cache has already been disposed")
}}}class Fm extends sc{constructor(...args) {
    super(...args);
    this.cache=new Map;
}has(e){
    this.throwIfDisposed();
    return this.cache.has(e);
}set(e,t){
    this.throwIfDisposed();
    this.cache.set(e,t);
}get(e,t){
    this.throwIfDisposed();

    if (this.cache.has(e)) {
        return this.cache.get(e);
    }

    if (t) {
        const r=t();
        this.cache.set(e,r);
        return r;
    } else {
        return
    }
}delete(e){
    this.throwIfDisposed();
    return this.cache.delete(e);
}clear(){
    this.throwIfDisposed();
    this.cache.clear();
}}class Gm extends sc{constructor(e){
    super();
    this.cache=new Map;

    this.converter=e??(t => {
        return t;
    });
}has(e,t){
    this.throwIfDisposed();
    return this.cacheForContext(e).has(t);
}set(e,t,r){
    this.throwIfDisposed();
    this.cacheForContext(e).set(t,r);
}get(e,t,r){this.throwIfDisposed();const i=this.cacheForContext(e);if (i.has(t)) {
    return i.get(t);
}if (r) {
    const s=r();
    i.set(t,s);
    return s;
} else {
    return
}}delete(e,t){
    this.throwIfDisposed();
    return this.cacheForContext(e).delete(t);
}clear(e){
    this.throwIfDisposed();

    if (e)
        {const t=this.converter(e);this.cache.delete(t)} else {
        this.cache.clear()
    }
}cacheForContext(e){
    const t=this.converter(e);let r=this.cache.get(t);

    if (!r) {
        r=new Map;
        this.cache.set(t,r);
    }

    return r;
}}class Um extends Fm{constructor(e,t){
    super();

    if (t) {
        this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(t,()=>{this.clear()}));

        this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r,i)=>{
            if (i.length>0) {
                this.clear();
            }
        }));
    } else {
        this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}));
    }
}}class Bm{constructor(e){
    this.reflection=e.shared.AstReflection;
    this.nameProvider=e.references.NameProvider;
    this.descriptions=e.workspace.AstNodeDescriptionProvider;
    this.indexManager=e.shared.workspace.IndexManager;
    this.globalScopeCache=new Um(e.shared);
}getScope(e){
    const t=[];
    const r=this.reflection.getReferenceType(e);
    const i=Ze(e.container).precomputedScopes;
    if(i){let a=e.container;do{
        const o=i.get(a);

        if (o.length>0) {
            t.push(ee(o).filter(l => {
                return this.reflection.isSubtype(l.type,r);
            }));
        }

        a=a.$container;
    }while(a)}let s=this.getGlobalScope(r,e);for (let a=t.length-1; a>=0; a--) {
        s=this.createScope(t[a],s);
    }return s
}createScope(e,t,r){return new ll(ee(e),t,r)}createScopeForNodes(e,t,r){const i=ee(e).map(s=>{const a=this.nameProvider.getName(s);if (a) {
    return this.descriptions.createDescription(s,a)
}}).nonNullable();return new ll(i,t,r)}getGlobalScope(e,t){return this.globalScopeCache.get(e,() => {
    return new Dm(this.indexManager.allElements(e));
});}}function Vm(n){return typeof n.$comment=="string"}function ul(n){return typeof n=="object"&&!!n&&("$ref"in n||"$error"in n)}class Km{constructor(e){
    this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]);
    this.langiumDocuments=e.shared.workspace.LangiumDocuments;
    this.astNodeLocator=e.workspace.AstNodeLocator;
    this.nameProvider=e.references.NameProvider;
    this.commentProvider=e.documentation.CommentProvider;
}serialize(e,t){
    const r=t??{};
    const i=t?.replacer;

    const s=(o, l) => {
        return this.replacer(o,l,r);
    };

    const a=i?(o, l) => {
        return i(o,l,s);
    }:s;

    try{
        this.currentDocument=Ze(e);
        return JSON.stringify(e,a,t?.space);
    }finally{this.currentDocument=void 0}
}deserialize(e,t){
    const r=t??{};
    const i=JSON.parse(e);
    this.linkNode(i,i,r);
    return i;
}replacer(e,t,{refText,sourceText,textRegions,comments,uriConverter}){
    var c;
    var d;
    if (!this.ignoreProperties.has(e)) {
        if(Ue(t)){
            const h=t.ref;
            const f=refText?t.$refText:void 0;
            if (h)
                {
                    const m=Ze(h);let g="";

                    if (this.currentDocument&&this.currentDocument!==m) {
                        if (uriConverter) {
                            g=uriConverter(m.uri,t);
                        } else {
                            g=m.uri.toString();
                        }
                    }

                    const A=this.astNodeLocator.getAstNodePath(h);return{$ref:`${g}#${A}`,$refText:f}
                } else {
                return {$error:((l=t.error)===null||l===void 0 ? void 0 : l.message) ?? "Could not resolve reference",$refText:f};
            }
        }else if (ae(t)) {
            let h;

            if (textRegions) {
                h=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},t));
                (!e||t.$document)&&h?.$textRegion&&(h.$textRegion.documentURI=(c=this.currentDocument)===null||c===void 0?void 0:c.uri.toString());
            }

            if (sourceText&&!e) {
                h??(h=Object.assign({},t));
                h.$sourceText=(d=t.$cstNode)===null||d===void 0?void 0:d.text;
            }

            if (comments)
                {
                    h??(h=Object.assign({},t));
                    const f=this.commentProvider.getComment(t);

                    if (f) {
                        (h.$comment = f.replace(/\r/g,""));
                    }
                }

            return h??t
        } else {
            return t
        }
    }
}addAstNodeRegionWithAssignmentsTo(e){const t=r => {
    return ({
        offset:r.offset,
        end:r.end,
        length:r.length,
        range:r.range
    });
};if(e.$cstNode){
    const r=e.$textRegion=t(e.$cstNode);
    const i=r.assignments={};

    Object.keys(e).filter(s => {
        return !s.startsWith("$");
    }).forEach(s=>{
        const a=rf(e.$cstNode,s).map(t);

        if (a.length!==0) {
            (i[s] = a);
        }
    });

    return e;
}}linkNode(e,t,r,i,s,a){
    for (const[l,u] of Object.entries(e)) {
        if (Array.isArray(u)) {
            for(let c=0;c<u.length;c++){
                const d=u[c];

                if (ul(d)) {
                    u[c]=this.reviveReference(e,l,t,d,r);
                } else if (ae(d)) {
                    this.linkNode(d,t,r,e,l,c);
                }
            }
        } else {
            if (ul(u)) {
                e[l]=this.reviveReference(e,l,t,u,r);
            } else if (ae(u)) {
                this.linkNode(u,t,r,e,l);
            }
        }
    }const o=e;
    o.$container=i;
    o.$containerProperty=s;
    o.$containerIndex=a;
}reviveReference(e,t,r,i,s){
    let a=i.$refText;
    let o=i.$error;
    if(i.$ref){const l=this.getRefNode(r,i.$ref,s.uriConverter);if (ae(l)) {
        if (!a) {
            (a = this.nameProvider.getName(l));
        }

        return {$refText:a??"",ref:l};
    }o=l}if (o) {
        const l={$refText:a??""};
        l.error={container:e,property:t,message:o,reference:l};
        return l;
    } else {
        return
    }
}getRefNode(e,t,r){try{
    const i=t.indexOf("#");if(i===0){const l=this.astNodeLocator.getAstNode(e,t.substring(1));return l||"Could not resolve path: "+t}if(i<0){
        const l=r?r(t):URI.parse(t);
        const u=this.langiumDocuments.getDocument(l);
        return u?u.parseResult.value:"Could not find document for URI: "+t
    }
    const s=r?r(t.substring(0,i)):URI.parse(t.substring(0,i));
    const a=this.langiumDocuments.getDocument(s);
    if (!a) {
        return"Could not find document for URI: "+t;
    }if (i===t.length-1) {
        return a.parseResult.value;
    }const o=this.astNodeLocator.getAstNode(a.parseResult.value,t.substring(i+1));return o||"Could not resolve URI: "+t
}catch(i){return String(i)}}}class Wm{get map(){return this.fileExtensionMap}constructor(e){
    this.languageIdMap=new Map;
    this.fileExtensionMap=new Map;
    this.textDocuments=e?.workspace.TextDocuments;
}register(e){
    const t=e.LanguageMetaData;for (const r of t.fileExtensions) {
        if (this.fileExtensionMap.has(r)) {
            console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${t.languageId}'.`);
        }

        this.fileExtensionMap.set(r,e);
    }
    this.languageIdMap.set(t.languageId,e);

    if (this.languageIdMap.size===1) {
        this.singleton=e;
    } else {
        this.singleton=void 0;
    }
}getServices(e){
    var t;
    var r;
    if (this.singleton!==void 0) {
        return this.singleton;
    }if (this.languageIdMap.size===0) {
        throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    }const i=(r=(t=this.textDocuments)===null||t===void 0?void 0:t.get(e))===null||r===void 0?void 0:r.languageId;if(i!==void 0){const o=this.languageIdMap.get(i);if (o) {
        return o
    }}
    const s=rt.extname(e);
    const a=this.fileExtensionMap.get(s);
    if (!a) {
        throw i?new Error(`The service registry contains no services for the extension '${s}' for language '${i}'.`):new Error(`The service registry contains no services for the extension '${s}'.`);
    }return a
}hasServices(e){try{
    this.getServices(e);
    return true;
}catch{return false;}}get all(){return Array.from(this.languageIdMap.values())}}function Kn(n){return{code:n}}var di;(function(n){n.all=["fast","slow","built-in"]})(di||(di={}));class jm{constructor(e){
    this.entries=new ci;
    this.entriesBefore=[];
    this.entriesAfter=[];
    this.reflection=e.shared.AstReflection;
}register(e,t=this,r="fast"){if (r==="built-in") {
    throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
}for(const[i,s]of Object.entries(e)){const a=s;if (Array.isArray(a)) {
    for(const o of a){const l={check:this.wrapValidationException(o,t),category:r};this.addEntry(i,l)}
} else if (typeof a=="function")
    {const o={check:this.wrapValidationException(a,t),category:r};this.addEntry(i,o)} else {
    er()
}}}wrapValidationException(e,t){return async(r,i,s)=>{await this.handleException(() => {
    return e.call(t,r,i,s);
},"An error occurred during validation",i,r)};}async handleException(e,t,r,i){try{await e()}catch(s){
    if (Si(s)) {
        throw s;
    }
    console.error(`${t}:`,s);

    if (s instanceof Error&&s.stack) {
        console.error(s.stack);
    }

    const a=s instanceof Error?s.message:String(s);r("error",`${t}: ${a}`,{node:i})
}}addEntry(e,t){if(e==="AstNode"){this.entries.add("AstNode",t);return}for (const r of this.reflection.getAllSubTypes(e)) {
    this.entries.add(r,t)
}}getChecks(e,t){
    let r=ee(this.entries.get(e)).concat(this.entries.get("AstNode"));

    if (t) {
        (r = r.filter(i => {
            return t.includes(i.category);
        }));
    }

    return r.map(i => {
        return i.check;
    });
}registerBeforeDocument(e,t=this){this.entriesBefore.push(this.wrapPreparationException(e,"An error occurred during set-up of the validation",t))}registerAfterDocument(e,t=this){this.entriesAfter.push(this.wrapPreparationException(e,"An error occurred during tear-down of the validation",t))}wrapPreparationException(e,t,r){return async(i,s,a,o)=>{await this.handleException(() => {
    return e.call(r,i,s,a,o);
},t,s,i)};}get checksBefore(){return this.entriesBefore}get checksAfter(){return this.entriesAfter}}class Hm{constructor(e){
    this.validationRegistry=e.validation.ValidationRegistry;
    this.metadata=e.LanguageMetaData;
}async validateDocument(e,t={},r=V.CancellationToken.None){
    const i=e.parseResult;
    const s=[];
    await Ae(r);

    if ((!t.categories||t.categories.includes("built-in"))&&(this.processLexingErrors(i,s,t),t.stopAfterLexingErrors&&s.some(a=>{var o;return((o=a.data)===null||o===void 0?void 0:o.code)===Oe.LexingError})||(this.processParsingErrors(i,s,t),t.stopAfterParsingErrors&&s.some(a=>{var o;return((o=a.data)===null||o===void 0?void 0:o.code)===Oe.ParsingError}))||(this.processLinkingErrors(e,s,t),t.stopAfterLinkingErrors&&s.some(a=>{var o;return((o=a.data)===null||o===void 0?void 0:o.code)===Oe.LinkingError})))) {
        return s;
    }

    try{s.push(...(await this.validateAst(i.value,t,r)))}catch(a){if (Si(a)) {
        throw a;
    }console.error("An error occurred during validation:",a)}
    await Ae(r);
    return s;
}processLexingErrors(e,t,r){
    const o=[...e.lexerErrors,...((((i=e.lexerReport)===null||i===void 0 ? void 0 : i.diagnostics) ?? []))];for(const l of o){
            const u=l.severity ?? "error";
            const c={severity:ji(u),range:{start:{line:l.line-1,character:l.column-1},end:{line:l.line-1,character:l.column+l.length-1}},message:l.message,data:qm(u),source:this.getSource()};
            t.push(c)
        }
}processParsingErrors(e,t,r){for(const i of e.parserErrors){let s;if (isNaN(i.token.startOffset))
    {if("previousToken"in i){const a=i.previousToken;if(isNaN(a.startOffset)){const o={line:0,character:0};s={start:o,end:o}}else{const o={line:a.endLine-1,character:a.endColumn};s={start:o,end:o}}}} else {
    s=as(i.token);
}if(s){const a={severity:ji("error"),range:s,message:i.message,data:Kn(Oe.ParsingError),source:this.getSource()};t.push(a)}}}processLinkingErrors(e,t,r){for(const i of e.references){const s=i.error;if(s){const a={node:s.container,property:s.property,index:s.index,data:{code:Oe.LinkingError,containerType:s.container.$type,property:s.property,refText:s.reference.$refText}};t.push(this.toDiagnostic("error",s.message,a))}}}async validateAst(e,t,r=V.CancellationToken.None){
    const i=[];
    const s=(a,o,l)=>{i.push(this.toDiagnostic(a,o,l))};
    await this.validateAstBefore(e,t,s,r);
    await this.validateAstNodes(e,t,s,r);
    await this.validateAstAfter(e,t,s,r);
    return i;
}async validateAstBefore(e,t,r,i=V.CancellationToken.None){
    const a=this.validationRegistry.checksBefore;for (const o of a) {
        await Ae(i);
        await o(e,r,t.categories ?? [],i);
    }
}async validateAstNodes(e,t,r,i=V.CancellationToken.None){await Promise.all(_t(e).map(async s=>{await Ae(i);const a=this.validationRegistry.getChecks(s.$type,t.categories);for (const o of a) {
    await o(s,r,i)
}}))}async validateAstAfter(e,t,r,i=V.CancellationToken.None){
    const a=this.validationRegistry.checksAfter;for (const o of a) {
        await Ae(i);
        await o(e,r,t.categories ?? [],i);
    }
}toDiagnostic(e,t,r){return{message:t,range:zm(r),severity:ji(e),code:r.code,codeDescription:r.codeDescription,tags:r.tags,relatedInformation:r.relatedInformation,data:r.data,source:this.getSource()}}getSource(){return this.metadata.languageId}}function zm(n){
    if (n.range) {
        return n.range;
    }let e;

    if (typeof n.property=="string") {
        e=ql(n.node.$cstNode,n.property,n.index);
    } else if (typeof n.keyword=="string") {
        (e = sf(n.node.$cstNode,n.keyword,n.index));
    }

    e??(e=n.node.$cstNode);
    return e?e.range:{start:{line:0,character:0},end:{line:0,character:0}};
}function ji(n){switch(n){case "error":
    {
        return 1;
    }case "warning":
    {
        return 2;
    }case "info":
    {
        return 3;
    }case "hint":
    {
        return 4;
    }default:
    {
        throw new Error("Invalid diagnostic severity: "+n)
    }}}function qm(n){switch(n){case "error":
    {
        return Kn(Oe.LexingError);
    }case "warning":
    {
        return Kn(Oe.LexingWarning);
    }case "info":
    {
        return Kn(Oe.LexingInfo);
    }case "hint":
    {
        return Kn(Oe.LexingHint);
    }default:
    {
        throw new Error("Invalid diagnostic severity: "+n)
    }}}var Oe = {
    LexingError: "lexing-error",
    LexingWarning: "lexing-warning",
    LexingInfo: "lexing-info",
    LexingHint: "lexing-hint",
    ParsingError: "parsing-error",
    LinkingError: "linking-error"
};class Ym{constructor(e){
    this.astNodeLocator=e.workspace.AstNodeLocator;
    this.nameProvider=e.references.NameProvider;
}createDescription(e,t,r){const i=r??Ze(e);t??(t=this.nameProvider.getName(e));const s=this.astNodeLocator.getAstNodePath(e);if (!t) {
    throw new Error(`Node at path ${s} has no name.`);
}let a;const o=()=>{
    return a??(a=jr(this.nameProvider.getNameNode(e) ?? e.$cstNode));
};return{node:e,name:t,get nameSegment(){return o()},selectionSegment:jr(e.$cstNode),type:e.$type,documentUri:i.uri,path:s}}}class Xm{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,t=V.CancellationToken.None){
    const r=[];
    const i=e.parseResult.value;
    for (const s of _t(i)) {
        await Ae(t);

        Kl(s).filter(a => {
            return !Nr(a);
        }).forEach(a=>{
            const o=this.createDescription(a);

            if (o) {
                r.push(o);
            }
        });
    }return r
}createDescription(e){
    const t=e.reference.$nodeDescription;
    const r=e.reference.$refNode;
    if (!t||!r) {
        return;
    }const i=Ze(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:t.documentUri,targetPath:t.path,segment:jr(r),local:rt.equals(t.documentUri,i)}
}}class Jm{constructor(){
    this.segmentSeparator="/";
    this.indexSeparator="@";
}getAstNodePath(e){if(e.$container){
    const t=this.getAstNodePath(e.$container);
    const r=this.getPathSegment(e);
    return t+this.segmentSeparator+r
}return""}getPathSegment({$containerProperty,$containerIndex}){if (!$containerProperty) {
    throw new Error("Missing '$containerProperty' in AST node.");
}return $containerIndex!==void 0?$containerProperty+this.indexSeparator+$containerIndex:$containerProperty;}getAstNode(e,t){return t.split(this.segmentSeparator).reduce((i,s)=>{if (!i||s.length===0) {
    return i;
}const a=s.indexOf(this.indexSeparator);if(a>0){
    const o=s.substring(0,a);
    const l=parseInt(s.substring(a+1));
    const u=i[o];
    return u?.[l]
}return i[s]},e);}}var Qm=tc();class Zm{constructor(e){
    this._ready=new da;
    this.settings={};
    this.workspaceConfig=false;
    this.onConfigurationSectionUpdateEmitter=new Qm.Emitter;
    this.serviceRegistry=e.ServiceRegistry;
}get ready(){return this._ready.promise}initialize(e){
    this.workspaceConfig=((t=e.capabilities.workspace)===null||t===void 0 ? void 0 : t.configuration) ?? false
}async initialized(e){if(this.workspaceConfig){if(e.register){const t=this.serviceRegistry.all;e.register({section:t.map(r => {
    return this.toSectionName(r.LanguageMetaData.languageId);
})})}if(e.fetchConfiguration){
    const t=this.serviceRegistry.all.map(i => {
        return ({
            section:this.toSectionName(i.LanguageMetaData.languageId)
        });
    });

    const r=await e.fetchConfiguration(t);
    t.forEach((i,s)=>{this.updateSectionConfiguration(i.section,r[s])})
}}this._ready.resolve()}updateConfiguration(e){
    if (e.settings) {
        Object.keys(e.settings).forEach(t=>{
            const r=e.settings[t];
            this.updateSectionConfiguration(t,r);
            this.onConfigurationSectionUpdateEmitter.fire({section:t,configuration:r});
        });
    }
}updateSectionConfiguration(e,t){this.settings[e]=t}async getConfiguration(e,t){await this.ready;const r=this.toSectionName(e);if (this.settings[r]) {
    return this.settings[r][t]
}}toSectionName(e){return`${e}`}get onConfigurationSectionUpdate(){return this.onConfigurationSectionUpdateEmitter.event}}var qn;(function(n){function e(t){return {dispose:async () => {
    return await t();
}};}n.create=e})(qn||(qn={}));class eg{constructor(e){
    this.updateBuildOptions={validation:{categories:["built-in","fast"]}};
    this.updateListeners=[];
    this.buildPhaseListeners=new ci;
    this.documentPhaseListeners=new ci;
    this.buildState=new Map;
    this.documentBuildWaiters=new Map;
    this.currentState=U.Changed;
    this.langiumDocuments=e.workspace.LangiumDocuments;
    this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory;
    this.textDocuments=e.workspace.TextDocuments;
    this.indexManager=e.workspace.IndexManager;
    this.serviceRegistry=e.ServiceRegistry;
}async build(e,t={},r=V.CancellationToken.None){
    var i;
    for(const a of e){const o=a.uri.toString();if (a.state===U.Validated) {if (typeof t.validation=="boolean"&&t.validation) {
        a.state=U.IndexedReferences;
        a.diagnostics=void 0;
        this.buildState.delete(o);
    } else if(typeof t.validation=="object"){
        const l=this.buildState.get(o);
        const u=(i=l?.result)===null||i===void 0?void 0:i.validationChecks;
        if(u){
            const d=((t.validation.categories ?? di.all)).filter(h => {
                return !u.includes(h);
            });

            if (d.length>0) {
                this.buildState.set(o,{completed:false,options:{validation:Object.assign(Object.assign({},t.validation),{categories:d})},result:l.result});
                a.state=U.IndexedReferences;
            }
        }
    }} else {
        this.buildState.delete(o)
    }}
    this.currentState=U.Changed;

    await this.emitUpdate(e.map(a => {
        return a.uri;
    }),[]);

    await this.buildDocuments(e,t,r);
}async update(e,t,r=V.CancellationToken.None){
    this.currentState=U.Changed;for (const a of t) {
        this.langiumDocuments.deleteDocument(a);
        this.buildState.delete(a.toString());
        this.indexManager.remove(a);
    }for(const a of e){if(!this.langiumDocuments.invalidateDocument(a)){
        const l=this.langiumDocumentFactory.fromModel({$type:"INVALID"},a);
        l.state=U.Changed;
        this.langiumDocuments.addDocument(l);
    }this.buildState.delete(a.toString())}const i=ee(e).concat(t).map(a => {
        return a.toString();
    }).toSet();

    this.langiumDocuments.all.filter(a => {
        return !i.has(a.uri.toString())&&this.shouldRelink(a,i);
    }).forEach(a=>{
        this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a);
        a.state=Math.min(a.state,U.ComputedScopes);
        a.diagnostics=void 0;
    });

    await this.emitUpdate(e,t);
    await Ae(r);
    const s=this.sortDocuments(this.langiumDocuments.all.filter(a=>{var o;return a.state<U.Linked||!(!((o=this.buildState.get(a.uri.toString()))===null||o===void 0)&&o.completed)}).toArray());await this.buildDocuments(s,this.updateBuildOptions,r)
}async emitUpdate(e,t){await Promise.all(this.updateListeners.map(r => {
    return r(e,t);
}))}sortDocuments(e){
    let t=0;
    let r=e.length-1;

    while (t<r) {
        while (t<e.length&&this.hasTextDocument(e[t])) {
            t++;
        }

        while (r>=0&&!this.hasTextDocument(e[r])) {
            r--;
        }

        if (t<r) {
            ([e[t],e[r]] = [e[r],e[t]]);
        }
    }

    return e
}hasTextDocument(e){var t;return!!(!((t=this.textDocuments)===null||t===void 0)&&t.get(e.uri))}shouldRelink(e,t){return e.references.some(r => {
    return r.error!==void 0;
})?true:this.indexManager.isAffected(e,t);}onUpdate(e){
    this.updateListeners.push(e);
    return qn.create(()=>{
        const t=this.updateListeners.indexOf(e);

        if (t>=0) {
            this.updateListeners.splice(t,1);
        }
    });
}async buildDocuments(e,t,r){
    this.prepareBuild(e,t);

    await this.runCancelable(e,U.Parsed,r,s => {
        return this.langiumDocumentFactory.update(s,r);
    });

    await this.runCancelable(e,U.IndexedContent,r,s => {
        return this.indexManager.updateContent(s,r);
    });

    await this.runCancelable(e,U.ComputedScopes,r,async s=>{const a=this.serviceRegistry.getServices(s.uri).references.ScopeComputation;s.precomputedScopes=await a.computeLocalScopes(s,r)});

    await this.runCancelable(e,U.Linked,r,s => {
        return this.serviceRegistry.getServices(s.uri).references.Linker.link(s,r);
    });

    await this.runCancelable(e,U.IndexedReferences,r,s => {
        return this.indexManager.updateReferences(s,r);
    });

    const i=e.filter(s => {
        return this.shouldValidate(s);
    });await this.runCancelable(i,U.Validated,r,s => {
        return this.validate(s,r);
    });for(const s of e){
    const a=this.buildState.get(s.uri.toString());

    if (a) {
        (a.completed = true);
    }
}
}prepareBuild(e,t){for(const r of e){
    const i=r.uri.toString();
    const s=this.buildState.get(i);

    if ((!s || s.completed)) {
        this.buildState.set(i,{completed:false,options:t,result:s?.result});
    }
}}async runCancelable(e,t,r,i){
    const s=e.filter(o => {
        return o.state<t;
    });for (const o of s) {
        await Ae(r);
        await i(o);
        o.state=t;
        await this.notifyDocumentPhase(o,t,r);
    }const a=e.filter(o => {
        return o.state===t;
    });
    await this.notifyBuildPhase(a,t,r);
    this.currentState=t;
}onBuildPhase(e,t){
    this.buildPhaseListeners.add(e,t);
    return qn.create(()=>{this.buildPhaseListeners.delete(e,t)});
}onDocumentPhase(e,t){
    this.documentPhaseListeners.add(e,t);
    return qn.create(()=>{this.documentPhaseListeners.delete(e,t)});
}waitUntil(e,t,r){
    let i;

    if (t&&"path"in t) {
        i=t;
    } else {
        r=t;
    }

    r??(r=V.CancellationToken.None);

    if (i) {const s=this.langiumDocuments.getDocument(i);if (s&&s.state>e) {
        return Promise.resolve(i)
    }}

    if (this.currentState>=e) {
        return Promise.resolve(void 0);
    }

    if (r.isCancellationRequested) {
        return Promise.reject(ui);
    }

    return new Promise((s,a)=>{
        const o=this.onBuildPhase(e,()=>{
            o.dispose();
            l.dispose();

            if (i)
                {const u=this.langiumDocuments.getDocument(i);s(u?.uri)} else {
                s(void 0)
            }
        });

        const l=r.onCancellationRequested(()=>{
            o.dispose();
            l.dispose();
            a(ui);
        });
    });
}async notifyDocumentPhase(e,t,r){const s=this.documentPhaseListeners.get(t).slice();for (const a of s) {
    try{await a(e,r)}catch(o){if (!Si(o)) {
        throw o
    }}
}}async notifyBuildPhase(e,t,r){if (e.length===0) {
    return;
}const s=this.buildPhaseListeners.get(t).slice();for (const a of s) {
    await Ae(r);
    await a(e,r);
}}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,t){
    const s=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator;
    const a=this.getBuildOptions(e).validation;
    const o=typeof a=="object"?a:void 0;
    const l=await s.validateDocument(e,o,t);

    if (e.diagnostics) {
        e.diagnostics.push(...l);
    } else {
        e.diagnostics=l;
    }

    const u=this.buildState.get(e.uri.toString());if(u){
        true ?? (u.result = {});
        const c=o?.categories ?? di.all;

        if (u.result.validationChecks) {
            u.result.validationChecks.push(...c);
        } else {
            u.result.validationChecks=[...c];
        }
    }
}getBuildOptions(e){
    return ((t=this.buildState.get(e.uri.toString()))===null||t===void 0 ? void 0 : t.options) ?? {};
}}class tg{constructor(e){
    this.symbolIndex=new Map;
    this.symbolByTypeIndex=new Gm;
    this.referenceIndex=new Map;
    this.documents=e.workspace.LangiumDocuments;
    this.serviceRegistry=e.ServiceRegistry;
    this.astReflection=e.AstReflection;
}findAllReferences(e,t){
    const r=Ze(e).uri;
    const i=[];
    this.referenceIndex.forEach(s=>{s.forEach(a=>{
        if (rt.equals(a.targetUri,r)&&a.targetPath===t) {
            i.push(a);
        }
    })});
    return ee(i);
}allElements(e,t){
    let r=ee(this.symbolIndex.keys());

    if (t) {
        (r = r.filter(i => {
            return !t||t.has(i);
        }));
    }

    return r.map(i => {
        return this.getFileDescriptions(i,e);
    }).flat();
}getFileDescriptions(e,t){
    if (t) {
        return this.symbolByTypeIndex.get(e,t,()=>{
            return ((this.symbolIndex.get(e) ?? [])).filter(o => {
                return this.astReflection.isSubtype(o.type,t);
            });
        });
    }

    return this.symbolIndex.get(e) ?? [];
}remove(e){
    const t=e.toString();
    this.symbolIndex.delete(t);
    this.symbolByTypeIndex.clear(t);
    this.referenceIndex.delete(t);
}async updateContent(e,t=V.CancellationToken.None){
    const i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,t);
    const s=e.uri.toString();
    this.symbolIndex.set(s,i);
    this.symbolByTypeIndex.clear(s);
}async updateReferences(e,t=V.CancellationToken.None){const i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,t);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,t){const r=this.referenceIndex.get(e.uri.toString());return r?r.some(i => {
    return !i.local&&t.has(i.targetUri.toString());
}):false;}}class ng{constructor(e){
    this.initialBuildOptions={};
    this._ready=new da;
    this.serviceRegistry=e.ServiceRegistry;
    this.langiumDocuments=e.workspace.LangiumDocuments;
    this.documentBuilder=e.workspace.DocumentBuilder;
    this.fileSystemProvider=e.workspace.FileSystemProvider;
    this.mutex=e.workspace.WorkspaceLock;
}get ready(){return this._ready.promise}get workspaceFolders(){return this.folders}initialize(e){
    this.folders=e.workspaceFolders ?? void 0
}initialized(e){return this.mutex.write(t=>{
    return this.initializeWorkspace(this.folders ?? [],t);
});}async initializeWorkspace(e,t=V.CancellationToken.None){
    const r=await this.performStartup(e);
    await Ae(t);
    await this.documentBuilder.build(r,this.initialBuildOptions,t);
}async performStartup(e){
    const t=this.serviceRegistry.all.flatMap(s => {
        return s.LanguageMetaData.fileExtensions;
    });

    const r=[];

    const i=s=>{
        r.push(s);

        if (!this.langiumDocuments.hasDocument(s.uri)) {
            this.langiumDocuments.addDocument(s);
        }
    };

    await this.loadAdditionalDocuments(e,i);

    await Promise.all(e.map(s => {
        return [s,this.getRootFolder(s)];
    }).map(async s => {
        return this.traverseFolder(...s,t,i);
    }));

    this._ready.resolve();
    return r;
}loadAdditionalDocuments(e,t){return Promise.resolve()}getRootFolder(e){return URI.parse(e.uri);}async traverseFolder(e,t,r,i){const s=await this.fileSystemProvider.readDirectory(t);await Promise.all(s.map(async a=>{if(this.includeEntry(e,a,r)){if (a.isDirectory) {
    await this.traverseFolder(e,a.uri,r,i);
} else
    if(a.isFile){const o=await this.langiumDocuments.getOrCreateDocument(a.uri);i(o)}}}))}includeEntry(e,t,r){const i=rt.basename(t.uri);if (i.startsWith(".")) {
    return false;
}if (t.isDirectory) {
    return i!=="node_modules"&&i!=="out";
}if(t.isFile){const s=rt.extname(t.uri);return r.includes(s)}return false;}}class rg{buildUnexpectedCharactersMessage(e,t,r,i,s){return fs.buildUnexpectedCharactersMessage(e,t,r,i,s)}buildUnableToPopLexerModeMessage(e){return fs.buildUnableToPopLexerModeMessage(e)}}const ig={mode:"full"};class sg{constructor(e){
    this.errorMessageProvider=e.parser.LexerErrorMessageProvider;
    this.tokenBuilder=e.parser.TokenBuilder;
    const t=this.tokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(t);
    const r=cl(t)?Object.values(t):t;
    const i=e.LanguageMetaData.mode==="production";
    this.chevrotainLexer=new fe(r,{positionTracking:"full",skipValidations:i,errorMessageProvider:this.errorMessageProvider})
}get definition(){return this.tokenTypes}tokenize(e,t=ig){
    var i;
    var s;
    const a=this.chevrotainLexer.tokenize(e);return {tokens:a.tokens,errors:a.errors,hidden:a.groups.hidden ?? [],report:(s=(i=this.tokenBuilder).flushLexingReport)===null||s===void 0?void 0:s.call(i,e)};
}toTokenTypeDictionary(e){
    if (cl(e)) {
        return e;
    }
    const t=ac(e)?Object.values(e.modes).flat():e;
    const r={};

    t.forEach(i => {
        return r[i.name]=i;
    });

    return r;
}}function ag(n){return Array.isArray(n)&&(n.length===0||"name"in n[0])}function ac(n){return n&&"modes"in n&&"defaultMode"in n}function cl(n){return!ag(n)&&!ac(n)}function og(n,e,t){
    let r;
    let i;

    if (typeof n=="string") {
        i=e;
        r=t;
    } else {
        i=n.range.start;
        r=e;
    }

    if (!i) {
        (i = P.create(0,0));
    }

    const s=oc(n);
    const a=fa(r);
    const o=cg({lines:s,position:i,options:a});
    return mg({index:0,tokens:o,position:i})
}function lg(n,e){
    const t=fa(e);
    const r=oc(n);
    if (r.length===0) {
        return false;
    }
    const i=r[0];
    const s=r[r.length-1];
    const a=t.start;
    const o=t.end;
    return!!a?.exec(i)&&!!o?.exec(s)
}function oc(n){
    let e="";

    if (typeof n=="string") {
        e=n;
    } else {
        e=n.text;
    }

    return e.split(jd);
}
const dl=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy;
const ug=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function cg(n){
    var e;
    var t;
    var r;
    const i=[];
    let s=n.position.line;
    let a=n.position.character;
    for(let o=0;o<n.lines.length;o++){
        const l=o===0;
        const u=o===n.lines.length-1;
        let c=n.lines[o];
        let d=0;
        if(l&&n.options.start){
            const f=(e=n.options.start)===null||e===void 0?void 0:e.exec(c);

            if (f) {
                (d = f.index+f[0].length);
            }
        }else{
            const f=(t=n.options.line)===null||t===void 0?void 0:t.exec(c);

            if (f) {
                (d = f.index+f[0].length);
            }
        }if(u){
        const f=(r=n.options.end)===null||r===void 0?void 0:r.exec(c);

        if (f) {
            (c = c.substring(0,f.index));
        }
    }
        c=c.substring(0,pg(c));

        if (Fs(c,d)>=c.length)
            {if(i.length>0){const f=P.create(s,a);i.push({type:"break",content:"",range:b.create(f,f)})}} else {dl.lastIndex=d;const f=dl.exec(c);if(f){
            const m=f[0];
            const g=f[1];
            const A=P.create(s,a+d);
            const T=P.create(s,a+d+m.length);
            i.push({type:"tag",content:g,range:b.create(A,T)});
            d+=m.length;
            d=Fs(c,d);
        }if(d<c.length){
            const m=c.substring(d);
            const g=Array.from(m.matchAll(ug));
            i.push(...dg(g,m,s,a+d))
        }}

        s++;
        a=0;
    }return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i
}function dg(n,e,t,r){const i=[];if(n.length===0){
    const s=P.create(t,r);
    const a=P.create(t,r+e.length);
    i.push({type:"text",content:e,range:b.create(s,a)})
}else{
    let s=0;for(const o of n){
        const l=o.index;
        const u=e.substring(s,l);

        if (u.length>0) {
            i.push({type:"text",content:e.substring(s,l),range:b.create(P.create(t,s+r),P.create(t,l+r))});
        }

        let c=u.length+1;const d=o[1];
        i.push({type:"inline-tag",content:d,range:b.create(P.create(t,s+c+r),P.create(t,s+c+d.length+r))});
        c+=d.length;

        if (o.length===4)
            {c+=o[2].length;const h=o[3];i.push({type:"text",content:h,range:b.create(P.create(t,s+c+r),P.create(t,s+c+h.length+r))})} else {
            i.push({type:"text",content:"",range:b.create(P.create(t,s+c+r),P.create(t,s+c+r))});
        }

        s=l+o[0].length
    }const a=e.substring(s);

    if (a.length>0) {
        i.push({type:"text",content:a,range:b.create(P.create(t,s+r),P.create(t,s+r+a.length))});
    }
}return i}
const fg=/\S/;
const hg=/\s*$/;
function Fs(n,e){const t=n.substring(e).match(fg);return t?e+t.index:n.length}function pg(n){const e=n.match(hg);if (e&&typeof e.index=="number") {
    return e.index
}}function mg(n){
    const s=P.create(n.position.line,n.position.character);if (n.tokens.length===0) {
            return new fl([],b.create(s,s));
        }const a=[];

    while (n.index<n.tokens.length) {
        const u=gg(n,a[a.length-1]);

        if (u) {
            a.push(u);
        }
    }

    const o=((e=a[0])===null||e===void 0 ? void 0 : e.range.start) ?? s;
    const l=((r=a[a.length-1])===null||r===void 0 ? void 0 : r.range.end) ?? s;
    return new fl(a,b.create(o,l))
}function gg(n,e){
    const t=n.tokens[n.index];if (t.type==="tag") {
        return uc(n,false);
    }if (t.type==="text"||t.type==="inline-tag") {
        return lc(n);
    }
    yg(t,e);
    n.index++;
}function yg(n,e){if(e){
    const t=new dc("",n.range);

    if ("inlines"in e) {
        e.inlines.push(t);
    } else {
        e.content.inlines.push(t);
    }
}}function lc(n){
    let e=n.tokens[n.index];const t=e;let r=e;const i=[];

    while (e&&e.type!=="break"&&e.type!=="tag") {
        i.push(Tg(n));
        r=e;
        e=n.tokens[n.index];
    }

    return new Gs(i,b.create(t.range.start,r.range.end))
}function Tg(n){return n.tokens[n.index].type==="inline-tag"?uc(n,true):cc(n);}function uc(n,e){
    const t=n.tokens[n.index++];
    const r=t.content.substring(1);
    const i=n.tokens[n.index];
    if (i?.type==="text") {
        if(e){const s=cc(n);return new zi(r,new Gs([s],s.range),e,b.create(t.range.start,s.range.end))}else{const s=lc(n);return new zi(r,s,e,b.create(t.range.start,s.range.end))}
    } else
        {const s=t.range;return new zi(r,new Gs([],s),e,s)}
}function cc(n){const e=n.tokens[n.index++];return new dc(e.content,e.range)}function fa(n){if (!n) {
    return fa({start:"/**",end:"*/",line:"*"});
}const{start,end,line}=n;return {start:Hi(start,true),end:Hi(end,false),line:Hi(line,true)};}function Hi(n,e){if (typeof n=="string"||typeof n=="object")
    {const t=typeof n=="string"?Ti(n):n.source;return e?new RegExp(`^\\s*${t}`):new RegExp(`\\s*${t}\\s*$`)} else {
    return n
}}class fl{constructor(e,t){
    this.elements=e;
    this.range=t;
}getTag(e){return this.getAllTags().find(t => {
    return t.name===e;
});}getTags(e){return this.getAllTags().filter(t => {
    return t.name===e;
});}getAllTags(){return this.elements.filter(e => {
    return "name"in e;
});}toString(){let e="";for (const t of this.elements) {
    if (e.length===0) {
        e=t.toString();
    } else
        {const r=t.toString();e+=hl(e)+r}
}return e.trim()}toMarkdown(e){let t="";for (const r of this.elements) {
    if (t.length===0) {
        t=r.toMarkdown(e);
    } else
        {const i=r.toMarkdown(e);t+=hl(t)+i}
}return t.trim()}}class zi{constructor(e,t,r,i){
    this.name=e;
    this.content=t;
    this.inline=r;
    this.range=i;
}toString(){
    let e=`@${this.name}`;const t=this.content.toString();

    if (this.content.inlines.length===1) {
        e=`${e} ${t}`;
    } else if (this.content.inlines.length>1) {
        (e = `${e}
        ${t}`);
    }

    return this.inline?`{${e}}`:e;
}toMarkdown(e){
    return ((t=e?.renderTag)===null||t===void 0 ? void 0 : t.call(e,this)) ?? this.toMarkdownDefault(e);
}toMarkdownDefault(e){
    const t=this.content.toMarkdown(e);if(this.inline){const s=Rg(this.name,t,e??{});if (typeof s=="string") {
            return s
        }}let r="";

    switch (e?.tag) {
    case "italic":
    case void 0:
        r="*";
        break;
    case "bold":
        r="**";
        break;
    case "bold-italic":
        (r = "***");
        break;
    }

    let i=`${r}@${this.name}${r}`;

    if (this.content.inlines.length===1) {
        i=`${i} — ${t}`;
    } else if (this.content.inlines.length>1) {
        (i = `${i}
        ${t}`);
    }

    return this.inline?`{${i}}`:i;
}}function Rg(n,e,t){
    if(n==="linkplain"||n==="linkcode"||n==="link"){
        const s=e.indexOf(" ");let a=e;if(s>0){
                const l=Fs(e,s);
                a=e.substring(l);
                e=e.substring(0,s);
            }

        if ((n==="linkcode" || n==="link"&&t.link==="code")) {
            (a = `\`${a}\``);
        }

        return ((r=t.renderLink)===null||r===void 0 ? void 0 : r.call(t,e,a)) ?? vg(e,a);
    }
}function vg(n,e){try{
    URI.parse(n,true);
    return `[${e}](${n})`;
}catch{return n}}class Gs{constructor(e,t){
    this.inlines=e;
    this.range=t;
}toString(){let e="";for(let t=0;t<this.inlines.length;t++){
    const r=this.inlines[t];
    const i=this.inlines[t+1];
    e+=r.toString();

    if (i&&i.range.start.line>r.range.start.line) {
        (e += `
        `);
    }
}return e}toMarkdown(e){let t="";for(let r=0;r<this.inlines.length;r++){
    const i=this.inlines[r];
    const s=this.inlines[r+1];
    t+=i.toMarkdown(e);

    if (s&&s.range.start.line>i.range.start.line) {
        (t += `
        `);
    }
}return t}}class dc{constructor(e,t){
    this.text=e;
    this.range=t;
}toString(){return this.text}toMarkdown(){return this.text}}function hl(n){return n.endsWith(`
`)?`
`:`

`}class Ag{constructor(e){
    this.indexManager=e.shared.workspace.IndexManager;
    this.commentProvider=e.documentation.CommentProvider;
}getDocumentation(e){const t=this.commentProvider.getComment(e);if (t&&lg(t)) {
    return og(t).toMarkdown({renderLink:(i, s) => {
        return this.documentationLinkRenderer(e,i,s);
    },renderTag:i => {
        return this.documentationTagRenderer(e,i);
    }});
}}documentationLinkRenderer(e,t,r){
    const s=this.findNameInPrecomputedScopes(e,t) ?? this.findNameInGlobalScope(e,t);if (s&&s.nameSegment) {
        const a=s.nameSegment.range.start.line+1;
        const o=s.nameSegment.range.start.character+1;
        const l=s.documentUri.with({fragment:`L${a},${o}`});
        return`[${r}](${l.toString()})`
    } else {
        return
    }
}documentationTagRenderer(e,t){}findNameInPrecomputedScopes(e,t){const i=Ze(e).precomputedScopes;if (!i) {
    return;
}let s=e;do{const o=i.get(s).find(l => {
    return l.name===t;
});if (o) {
    return o;
}s=s.$container}while(s)}findNameInGlobalScope(e,t){return this.indexManager.allElements().find(i => {
    return i.name===t;
});}}class Eg{constructor(e){this.grammarConfig=() => {
    return e.parser.GrammarConfig;
}}getComment(e){
    var t;

    if (Vm(e)) {
        return e.$comment;
    }

    if ((t=Ad(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||t===void 0) {
        return void 0;
    }

    return t.text;
}}class kg{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e,t){return Promise.resolve(this.syncParser.parse(e))}}class $g{constructor(){
    this.previousTokenSource=new V.CancellationTokenSource;
    this.writeQueue=[];
    this.readQueue=[];
    this.done=true;
}write(e){
    this.cancelWrite();const t=Cm();
    this.previousTokenSource=t;
    return this.enqueue(this.writeQueue,e,t.token);
}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,t,r=V.CancellationToken.None){
    const i=new da;
    const s={action:t,deferred:i,cancellationToken:r};
    e.push(s);
    this.performNextOperation();
    return i.promise;
}async performNextOperation(){
    if (!this.done) {
        return;
    }const e=[];if (this.writeQueue.length>0) {
        e.push(this.writeQueue.shift());
    } else if (this.readQueue.length>0) {
        e.push(...this.readQueue.splice(0,this.readQueue.length));
    } else {
        return;
    }
    this.done=false;

    await Promise.all(e.map(async({action,deferred,cancellationToken})=>{try{const s=await Promise.resolve().then(() => {
        return action(cancellationToken);
    });deferred.resolve(s)}catch(s){
        if (Si(s)) {
            deferred.resolve(void 0);
        } else {
            deferred.reject(s);
        }
    }}));

    this.done=true;
    this.performNextOperation();
}cancelWrite(){this.previousTokenSource.cancel()}}class xg{constructor(e){
    this.grammarElementIdMap=new ol;
    this.tokenTypeIdMap=new ol;
    this.grammar=e.Grammar;
    this.lexer=e.parser.Lexer;
    this.linker=e.references.Linker;
}dehydrate(e){return {lexerErrors:e.lexerErrors,lexerReport:e.lexerReport?this.dehydrateLexerReport(e.lexerReport):void 0,parserErrors:e.parserErrors.map(t => {
    return Object.assign(Object.assign({},t),{message:t.message});
}),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))};}dehydrateLexerReport(e){return e}createDehyrationContext(e){
    const t=new Map;
    const r=new Map;
    for (const i of _t(e)) {
        t.set(i,{});
    }if (e.$cstNode) {
        for (const i of ss(e.$cstNode)) {
            r.set(i,{});
        }
    }return{astNodes:t,cstNodes:r}
}dehydrateAstNode(e,t){
    const r=t.astNodes.get(e);
    r.$type=e.$type;
    r.$containerIndex=e.$containerIndex;
    r.$containerProperty=e.$containerProperty;

    if (e.$cstNode!==void 0) {
        (r.$cstNode = this.dehydrateCstNode(e.$cstNode,t));
    }

    for (const[i,s] of Object.entries(e)) {
        if (!i.startsWith("$")) {
            if (Array.isArray(s)) {const a=[];r[i]=a;for (const o of s) {
                if (ae(o)) {
                    a.push(this.dehydrateAstNode(o,t));
                } else if (Ue(o)) {
                    a.push(this.dehydrateReference(o,t));
                } else {
                    a.push(o);
                }
            }} else {
                if (ae(s)) {
                    r[i]=this.dehydrateAstNode(s,t);
                } else if (Ue(s)) {
                    r[i]=this.dehydrateReference(s,t);
                } else if (s!==void 0) {
                    (r[i] = s);
                }
            }
        }
    }return r
}dehydrateReference(e,t){
    const r={};
    r.$refText=e.$refText;

    if (e.$refNode) {
        (r.$refNode = t.cstNodes.get(e.$refNode));
    }

    return r;
}dehydrateCstNode(e,t){
    const r=t.cstNodes.get(e);

    if (Pl(e)) {
        r.fullText=e.fullText;
    } else {
        r.grammarSource=this.getGrammarElementId(e.grammarSource);
    }

    r.hidden=e.hidden;
    r.astNode=t.astNodes.get(e.astNode);

    if (Xn(e)) {
        r.content=e.content.map(i => {
            return this.dehydrateCstNode(i,t);
        });
    } else if (bl(e)) {
        r.tokenType=e.tokenType.name;
        r.offset=e.offset;
        r.length=e.length;
        r.startLine=e.range.start.line;
        r.startColumn=e.range.start.character;
        r.endLine=e.range.end.line;
        r.endColumn=e.range.end.character;
    }

    return r;
}hydrate(e){
    const t=e.value;
    const r=this.createHydrationContext(t);

    if ("$cstNode"in t) {
        this.hydrateCstNode(t.$cstNode,r);
    }

    return {lexerErrors:e.lexerErrors,lexerReport:e.lexerReport,parserErrors:e.parserErrors,value:this.hydrateAstNode(t,r)};
}createHydrationContext(e){
    const t=new Map;
    const r=new Map;
    for (const s of _t(e)) {
        t.set(s,{});
    }let i;if (e.$cstNode) {
        for(const s of ss(e.$cstNode)){
            let a;

            if ("fullText"in s) {
                a=new Wu(s.fullText);
                i=a;
            } else if ("content"in s) {
                a=new ua;
            } else if ("tokenType"in s) {
                (a = this.hydrateCstLeafNode(s));
            }

            if (a) {
                r.set(s,a);
                a.root=i;
            }
        }
    }return{astNodes:t,cstNodes:r}
}hydrateAstNode(e,t){
    const r=t.astNodes.get(e);
    r.$type=e.$type;
    r.$containerIndex=e.$containerIndex;
    r.$containerProperty=e.$containerProperty;

    if (e.$cstNode) {
        (r.$cstNode = t.cstNodes.get(e.$cstNode));
    }

    for (const[i,s] of Object.entries(e)) {
        if (!i.startsWith("$")) {
            if (Array.isArray(s)) {const a=[];r[i]=a;for (const o of s) {
                if (ae(o)) {
                    a.push(this.setParent(this.hydrateAstNode(o,t),r));
                } else if (Ue(o)) {
                    a.push(this.hydrateReference(o,r,i,t));
                } else {
                    a.push(o);
                }
            }} else {
                if (ae(s)) {
                    r[i]=this.setParent(this.hydrateAstNode(s,t),r);
                } else if (Ue(s)) {
                    r[i]=this.hydrateReference(s,r,i,t);
                } else if (s!==void 0) {
                    (r[i] = s);
                }
            }
        }
    }return r
}setParent(e,t){
    e.$container=t;
    return e;
}hydrateReference(e,t,r,i){return this.linker.buildReference(t,r,i.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,t,r=0){
    const i=t.cstNodes.get(e);

    if (typeof e.grammarSource=="number") {
        (i.grammarSource = this.getGrammarElement(e.grammarSource));
    }

    i.astNode=t.astNodes.get(e.astNode);

    if (Xn(i)) {
        for(const s of e.content){const a=this.hydrateCstNode(s,t,r++);i.content.push(a)}
    }

    return i
}hydrateCstLeafNode(e){
    const t=this.getTokenType(e.tokenType);
    const r=e.offset;
    const i=e.length;
    const s=e.startLine;
    const a=e.startColumn;
    const o=e.endLine;
    const l=e.endColumn;
    const u=e.hidden;
    return new Os(r,i,{start:{line:s,character:a},end:{line:o,character:l}},t,u)
}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){if (e) {
    if (this.grammarElementIdMap.size===0) {
        this.createGrammarElementIdMap();
    }

    return this.grammarElementIdMap.get(e);
}}getGrammarElement(e){
    if (this.grammarElementIdMap.size===0) {
        this.createGrammarElementIdMap();
    }

    return this.grammarElementIdMap.getKey(e);
}createGrammarElementIdMap(){let e=0;for (const t of _t(this.grammar)) {
    if (kd(t)) {
        this.grammarElementIdMap.set(t,e++);
    }
}}}function at(n){return {documentation:{CommentProvider:e => {
    return new Eg(e);
},DocumentationProvider:e => {
    return new Ag(e);
}},parser:{AsyncParser:e => {
    return new kg(e);
},GrammarConfig:e => {
    return mf(e);
},LangiumParser:e => {
    return Em(e);
},CompletionParser:e => {
    return Am(e);
},ValueConverter:() => {
    return new Zu;
},TokenBuilder:() => {
    return new Qu;
},Lexer:e => {
    return new sg(e);
},ParserErrorMessageProvider:() => {
    return new zu;
},LexerErrorMessageProvider:() => {
    return new rg;
}},workspace:{AstNodeLocator:() => {
    return new Jm;
},AstNodeDescriptionProvider:e => {
    return new Ym(e);
},ReferenceDescriptionProvider:e => {
    return new Xm(e);
}},references:{Linker:e => {
    return new Lm(e);
},NameProvider:() => {
    return new bm;
},ScopeProvider:e => {
    return new Bm(e);
},ScopeComputation:e => {
    return new Mm(e);
},References:e => {
    return new Pm(e);
}},serializer:{Hydrator:e => {
    return new xg(e);
},JsonSerializer:e => {
    return new Km(e);
}},validation:{DocumentValidator:e => {
    return new Hm(e);
},ValidationRegistry:e => {
    return new jm(e);
}},shared:() => {
    return n.shared;
}};}function ot(n){return {ServiceRegistry:e => {
    return new Wm(e);
},workspace:{LangiumDocuments:e => {
    return new _m(e);
},LangiumDocumentFactory:e => {
    return new wm(e);
},DocumentBuilder:e => {
    return new eg(e);
},IndexManager:e => {
    return new tg(e);
},WorkspaceManager:e => {
    return new ng(e);
},FileSystemProvider:e => {
    return n.fileSystemProvider(e);
},WorkspaceLock:() => {
    return new $g;
},ConfigurationProvider:e => {
    return new Zm(e);
}}};}var pl;(function(n){n.merge=(e, t) => {
    return fi(fi({},e),t);
}})(pl||(pl={}));function oe(n,e,t,r,i,s,a,o,l){const u=[n,e,t,r,i,s,a,o,l].reduce(fi,{});return fc(u)}const Sg=Symbol("isProxy");function fc(n,e){const t=new Proxy({},{deleteProperty:() => {
    return false;
},set:()=>{throw new Error("Cannot set property on injected service container")},get:(r, i) => {
    return i===Sg?true:gl(r,i,n,e||t);
},getOwnPropertyDescriptor:(r, i) => {
    gl(r,i,n,e||t);
    return Object.getOwnPropertyDescriptor(r,i);
},has:(r, i) => {
    return i in n;
},ownKeys:() => {
    return [...Object.getOwnPropertyNames(n)];
}});return t}const ml=Symbol();function gl(n,e,t,r){if(e in n){if (n[e]instanceof Error) {
    throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:n[e]});
}if (n[e]===ml) {
    throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
}return n[e]}else if (e in t) {const i=t[e];n[e]=ml;try{n[e]=typeof i=="function"?i(r):fc(i,r)}catch(s){
    n[e]=s instanceof Error?s:void 0;
    throw s;
}return n[e]} else {
    return
}}function fi(n,e){if(e){for (const[t,r] of Object.entries(e)) {
    if(r!==void 0){
        const i=n[t];

        if (i!==null&&r!==null&&typeof i=="object"&&typeof r=="object") {
            n[t]=fi(i,r);
        } else {
            n[t]=r;
        }
    }
}}return n}class Ig{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}}

const lt={fileSystemProvider:() => {
    return new Ig;
}};

const Cg={Grammar:()=>{},LanguageMetaData:() => {
    return ({
        caseInsensitive:false,
        fileExtensions:[".langium"],
        languageId:"langium"
    });
}};

const Ng={AstReflection:() => {
    return new Vl;
}};

function wg(){
    const n=oe(ot(lt),Ng);
    const e=oe(at({shared:n}),Cg);
    n.ServiceRegistry.register(e);
    return e;
}function xt(n){
    const t=wg();
    const r=t.serializer.JsonSerializer.deserialize(n);
    t.shared.workspace.LangiumDocumentFactory.fromModel(r,URI.parse(`memory://${r.name ?? "grammar"}.langium`));
    return r;
}
var _g=Object.defineProperty;

var v=(n, e) => {
    return _g(n,"name",{value:e,configurable:true});
};

var yl="Statement";
var Dr="Architecture";
function Lg(n){return De.isInstance(n,Dr)}v(Lg,"isArchitecture");
var Er="Axis";
var Wn="Branch";
function Og(n){return De.isInstance(n,Wn)}v(Og,"isBranch");
var kr="Checkout";
var $r="CherryPicking";
var qi="ClassDefStatement";
var jn="Commit";
function bg(n){return De.isInstance(n,jn)}v(bg,"isCommit");
var Yi="Curve";
var Xi="Edge";
var Ji="Entry";
var Hn="GitGraph";
function Pg(n){return De.isInstance(n,Hn)}v(Pg,"isGitGraph");
var Qi="Group";
var Fr="Info";
function Mg(n){return De.isInstance(n,Fr)}v(Mg,"isInfo");
var xr="Item";
var Zi="Junction";
var zn="Merge";
function Dg(n){return De.isInstance(n,zn)}v(Dg,"isMerge");
var es="Option";
var Gr="Packet";
function Fg(n){return De.isInstance(n,Gr)}v(Fg,"isPacket");var Ur="PacketBlock";function Gg(n){return De.isInstance(n,Ur)}v(Gg,"isPacketBlock");var Br="Pie";function Ug(n){return De.isInstance(n,Br)}v(Ug,"isPie");var Vr="PieSection";function Bg(n){return De.isInstance(n,Vr)}v(Bg,"isPieSection");
var ts="Radar";
var ns="Service";
var Kr="Treemap";
function Vg(n){return De.isInstance(n,Kr)}v(Vg,"isTreemap");
var rs="TreemapRow";
var Sr="Direction";
var Ir="Leaf";
var Cr="Section";
var Ot;

Ot=class extends Ol{getAllTypes(){return[Dr,Er,Wn,kr,$r,qi,jn,Yi,Sr,Xi,Ji,Hn,Qi,Fr,xr,Zi,Ir,zn,es,Gr,Ur,Br,Vr,ts,Cr,ns,yl,Kr,rs]}computeIsSubtype(e,t){switch(e){case Wn:case kr:case $r:case jn:case zn:
    {
        return this.isSubtype(yl,t);
    }case Sr:
    {
        return this.isSubtype(Hn,t);
    }case Ir:case Cr:
    {
        return this.isSubtype(xr,t);
    }default:
    {
        return false;
    }}}getReferenceType(e){const t=`${e.container.$type}:${e.property}`;switch(t){case "Entry:axis":
    {
        return Er;
    }default:
    {
        throw new Error(`${t} is not a valid reference id.`)
    }}}getTypeMetaData(e){switch(e){case Dr:
    {
        return{name:Dr,properties:[{name:"accDescr"},{name:"accTitle"},{name:"edges",defaultValue:[]},{name:"groups",defaultValue:[]},{name:"junctions",defaultValue:[]},{name:"services",defaultValue:[]},{name:"title"}]};
    }case Er:
    {
        return{name:Er,properties:[{name:"label"},{name:"name"}]};
    }case Wn:
    {
        return{name:Wn,properties:[{name:"name"},{name:"order"}]};
    }case kr:
    {
        return{name:kr,properties:[{name:"branch"}]};
    }case $r:
    {
        return{name:$r,properties:[{name:"id"},{name:"parent"},{name:"tags",defaultValue:[]}]};
    }case qi:
    {
        return{name:qi,properties:[{name:"className"},{name:"styleText"}]};
    }case jn:
    {
        return{name:jn,properties:[{name:"id"},{name:"message"},{name:"tags",defaultValue:[]},{name:"type"}]};
    }case Yi:
    {
        return{name:Yi,properties:[{name:"entries",defaultValue:[]},{name:"label"},{name:"name"}]};
    }case Xi:
    {
        return {name:Xi,properties:[{name:"lhsDir"},{name:"lhsGroup",defaultValue:false},{name:"lhsId"},{name:"lhsInto",defaultValue:false},{name:"rhsDir"},{name:"rhsGroup",defaultValue:false},{name:"rhsId"},{name:"rhsInto",defaultValue:false},{name:"title"}]};
    }case Ji:
    {
        return{name:Ji,properties:[{name:"axis"},{name:"value"}]};
    }case Hn:
    {
        return{name:Hn,properties:[{name:"accDescr"},{name:"accTitle"},{name:"statements",defaultValue:[]},{name:"title"}]};
    }case Qi:
    {
        return{name:Qi,properties:[{name:"icon"},{name:"id"},{name:"in"},{name:"title"}]};
    }case Fr:
    {
        return{name:Fr,properties:[{name:"accDescr"},{name:"accTitle"},{name:"title"}]};
    }case xr:
    {
        return{name:xr,properties:[{name:"classSelector"},{name:"name"}]};
    }case Zi:
    {
        return{name:Zi,properties:[{name:"id"},{name:"in"}]};
    }case zn:
    {
        return{name:zn,properties:[{name:"branch"},{name:"id"},{name:"tags",defaultValue:[]},{name:"type"}]};
    }case es:
    {
        return {name:es,properties:[{name:"name"},{name:"value",defaultValue:false}]};
    }case Gr:
    {
        return{name:Gr,properties:[{name:"accDescr"},{name:"accTitle"},{name:"blocks",defaultValue:[]},{name:"title"}]};
    }case Ur:
    {
        return{name:Ur,properties:[{name:"bits"},{name:"end"},{name:"label"},{name:"start"}]};
    }case Br:
    {
        return {name:Br,properties:[{name:"accDescr"},{name:"accTitle"},{name:"sections",defaultValue:[]},{name:"showData",defaultValue:false},{name:"title"}]};
    }case Vr:
    {
        return{name:Vr,properties:[{name:"label"},{name:"value"}]};
    }case ts:
    {
        return{name:ts,properties:[{name:"accDescr"},{name:"accTitle"},{name:"axes",defaultValue:[]},{name:"curves",defaultValue:[]},{name:"options",defaultValue:[]},{name:"title"}]};
    }case ns:
    {
        return{name:ns,properties:[{name:"icon"},{name:"iconText"},{name:"id"},{name:"in"},{name:"title"}]};
    }case Kr:
    {
        return{name:Kr,properties:[{name:"accDescr"},{name:"accTitle"},{name:"title"},{name:"TreemapRows",defaultValue:[]}]};
    }case rs:
    {
        return{name:rs,properties:[{name:"indent"},{name:"item"}]};
    }case Sr:
    {
        return{name:Sr,properties:[{name:"accDescr"},{name:"accTitle"},{name:"dir"},{name:"statements",defaultValue:[]},{name:"title"}]};
    }case Ir:
    {
        return{name:Ir,properties:[{name:"classSelector"},{name:"name"},{name:"value"}]};
    }case Cr:
    {
        return{name:Cr,properties:[{name:"classSelector"},{name:"name"}]};
    }default:
    {
        return{name:e,properties:[]}
    }}}};

v(Ot,"MermaidAstReflection");
var hc = Ot;

var De=new hc;
var Tl;

var Kg=v(() => {
    return Tl??(Tl=xt(`{"$type":"Grammar","isDeclared":true,"name":"Info","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`));
},"InfoGrammar");

var Rl;

var Wg=v(() => {
    return Rl??(Rl=xt(`{"$type":"Grammar","isDeclared":true,"name":"Packet","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`));
},"PacketGrammar");

var vl;

var jg=v(() => {
    return vl??(vl=xt(`{"$type":"Grammar","isDeclared":true,"name":"Pie","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`));
},"PieGrammar");

var Al;

var Hg=v(() => {
    return Al??(Al=xt(`{"$type":"Grammar","isDeclared":true,"name":"Architecture","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"}}]},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/"},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[[\\\\w ]+\\\\]/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`));
},"ArchitectureGrammar");

var El;

var zg=v(() => {
    return El??(El=xt(`{"$type":"Grammar","isDeclared":true,"name":"GitGraph","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/"},"fragment":false,"hidden":false}],"definesHiddenTokens":false,"hiddenTokens":[],"interfaces":[],"types":[],"usedGrammars":[]}`));
},"GitGraphGrammar");

var kl;

var qg=v(() => {
    return kl??(kl=xt(`{"$type":"Grammar","isDeclared":true,"name":"Radar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"}}]},"fragment":false,"hidden":false},{"$type":"ParserRule","fragment":true,"name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"}},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/"},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}}}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"types":[],"usedGrammars":[]}`));
},"RadarGrammar");

var $l;

var Yg=v(() => {
    return $l??($l=xt(`{"$type":"Grammar","isDeclared":true,"name":"Treemap","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"definesHiddenTokens":false,"entry":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/"},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}],"cardinality":"*"}]},"definesHiddenTokens":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"}},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"}}]},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"}},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","}},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/"},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/"},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/"},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/"},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"definesHiddenTokens":false,"entry":false,"fragment":false,"hiddenTokens":[],"parameters":[],"wildcard":false},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/"},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@14"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"definesHiddenTokens":false,"hiddenTokens":[],"imports":[],"types":[],"usedGrammars":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`));
},"TreemapGrammar");

var Xg={languageId:"info",fileExtensions:[".mmd",".mermaid"],caseInsensitive:false,mode:"production"};
var Jg={languageId:"packet",fileExtensions:[".mmd",".mermaid"],caseInsensitive:false,mode:"production"};
var Qg={languageId:"pie",fileExtensions:[".mmd",".mermaid"],caseInsensitive:false,mode:"production"};
var Zg={languageId:"architecture",fileExtensions:[".mmd",".mermaid"],caseInsensitive:false,mode:"production"};
var ey={languageId:"gitGraph",fileExtensions:[".mmd",".mermaid"],caseInsensitive:false,mode:"production"};
var ty={languageId:"radar",fileExtensions:[".mmd",".mermaid"],caseInsensitive:false,mode:"production"};
var ny={languageId:"treemap",fileExtensions:[".mmd",".mermaid"],caseInsensitive:false,mode:"production"};

var St={AstReflection:v(() => {
    return new hc;
},"AstReflection")};

var ry={Grammar:v(() => {
    return Kg();
},"Grammar"),LanguageMetaData:v(() => {
    return Xg;
},"LanguageMetaData"),parser:{}};

var iy={Grammar:v(() => {
    return Wg();
},"Grammar"),LanguageMetaData:v(() => {
    return Jg;
},"LanguageMetaData"),parser:{}};

var sy={Grammar:v(() => {
    return jg();
},"Grammar"),LanguageMetaData:v(() => {
    return Qg;
},"LanguageMetaData"),parser:{}};

var ay={Grammar:v(() => {
    return Hg();
},"Grammar"),LanguageMetaData:v(() => {
    return Zg;
},"LanguageMetaData"),parser:{}};

var oy={Grammar:v(() => {
    return zg();
},"Grammar"),LanguageMetaData:v(() => {
    return ey;
},"LanguageMetaData"),parser:{}};

var ly={Grammar:v(() => {
    return qg();
},"Grammar"),LanguageMetaData:v(() => {
    return ty;
},"LanguageMetaData"),parser:{}};

var uy={Grammar:v(() => {
    return Yg();
},"Grammar"),LanguageMetaData:v(() => {
    return ny;
},"LanguageMetaData"),parser:{}};

var cy=/accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/;
var dy=/accTitle[\t ]*:([^\n\r]*)/;
var fy=/title([\t ][^\n\r]*|)/;
var hy={ACC_DESCR:cy,ACC_TITLE:dy,TITLE:fy};
var bt;

bt=class extends Zu{runConverter(e,t,r){
    let i=this.runCommonConverter(e,t,r);

    if (i===void 0) {
        (i = this.runCustomConverter(e,t,r));
    }

    return i===void 0?super.runConverter(e,t,r):i;
}runCommonConverter(e,t,r){const i=hy[e.name];if (i===void 0) {
    return;
}const s=i.exec(t);if(s!==null){if (s[1]!==void 0) {
    return s[1].trim().replace(/[\t ]{2,}/gm," ");
}if (s[2]!==void 0) {
    return s[2].replace(/^\s*/gm,"").replace(/\s+$/gm,"").replace(/[\t ]{2,}/gm," ").replace(/[\n\r]{2,}/gm,`
    `);
}}}};

v(bt,"AbstractMermaidValueConverter");
var Ii = bt;

var Pt;
Pt=class extends Ii{runCustomConverter(e,t,r){}};
v(Pt,"CommonValueConverter");
var Ci = Pt;
var Mt;

Mt=class extends Qu{constructor(e){
    super();
    this.keywords=new Set(e);
}buildKeywordTokens(e,t,r){
    const i=super.buildKeywordTokens(e,t,r);
    i.forEach(s=>{
        if (this.keywords.has(s.name)&&s.PATTERN!==void 0) {
            (s.PATTERN = new RegExp(s.PATTERN.toString()+"(?:(?=%%)|(?!\\S))"));
        }
    });
    return i;
}};

v(Mt,"AbstractMermaidTokenBuilder");
var ut = Mt;

var Dt;
Dt=class extends ut{};
v(Dt,"CommonTokenBuilder");
var Ft;
Ft=class extends ut{constructor(){super(["gitGraph"])}};
v(Ft,"GitGraphTokenBuilder");
var py = Ft;

var pc={parser:{TokenBuilder:v(() => {
    return new py;
},"TokenBuilder"),ValueConverter:v(() => {
    return new Ci;
},"ValueConverter")}};

function mc(n=lt){
    const e=oe(ot(n),St);
    const t=oe(at({shared:e}),oy,pc);
    e.ServiceRegistry.register(t);
    return {shared:e,GitGraph:t};
}v(mc,"createGitGraphServices");
var Gt;
Gt=class extends ut{constructor(){super(["info","showInfo"])}};
v(Gt,"InfoTokenBuilder");
var my = Gt;

var gc={parser:{TokenBuilder:v(() => {
    return new my;
},"TokenBuilder"),ValueConverter:v(() => {
    return new Ci;
},"ValueConverter")}};

function yc(n=lt){
    const e=oe(ot(n),St);
    const t=oe(at({shared:e}),ry,gc);
    e.ServiceRegistry.register(t);
    return {shared:e,Info:t};
}v(yc,"createInfoServices");
var Ut;
Ut=class extends ut{constructor(){super(["packet"])}};
v(Ut,"PacketTokenBuilder");
var gy = Ut;

var Tc={parser:{TokenBuilder:v(() => {
    return new gy;
},"TokenBuilder"),ValueConverter:v(() => {
    return new Ci;
},"ValueConverter")}};

function Rc(n=lt){
    const e=oe(ot(n),St);
    const t=oe(at({shared:e}),iy,Tc);
    e.ServiceRegistry.register(t);
    return {shared:e,Packet:t};
}v(Rc,"createPacketServices");
var Bt;
Bt=class extends ut{constructor(){super(["pie","showData"])}};
v(Bt,"PieTokenBuilder");
var yy = Bt;
var Vt;

Vt=class extends Ii{runCustomConverter(e,t,r){if (e.name==="PIE_SECTION_LABEL") {
    return t.replace(/"/g,"").trim();
}}};

v(Vt,"PieValueConverter");
var Ty = Vt;

var vc={parser:{TokenBuilder:v(() => {
    return new yy;
},"TokenBuilder"),ValueConverter:v(() => {
    return new Ty;
},"ValueConverter")}};

function Ac(n=lt){
    const e=oe(ot(n),St);
    const t=oe(at({shared:e}),sy,vc);
    e.ServiceRegistry.register(t);
    return {shared:e,Pie:t};
}v(Ac,"createPieServices");
var Kt;
Kt=class extends ut{constructor(){super(["architecture"])}};
v(Kt,"ArchitectureTokenBuilder");
var Ry = Kt;
var Wt;

Wt=class extends Ii{runCustomConverter(e,t,r){if (e.name==="ARCH_ICON") {
    return t.replace(/[()]/g,"").trim();
}if (e.name==="ARCH_TEXT_ICON") {
    return t.replace(/["()]/g,"");
}if (e.name==="ARCH_TITLE") {
    return t.replace(/[[\]]/g,"").trim();
}}};

v(Wt,"ArchitectureValueConverter");
var vy = Wt;

var Ec={parser:{TokenBuilder:v(() => {
    return new Ry;
},"TokenBuilder"),ValueConverter:v(() => {
    return new vy;
},"ValueConverter")}};

function kc(n=lt){
    const e=oe(ot(n),St);
    const t=oe(at({shared:e}),ay,Ec);
    e.ServiceRegistry.register(t);
    return {shared:e,Architecture:t};
}v(kc,"createArchitectureServices");
var jt;
jt=class extends ut{constructor(){super(["radar-beta"])}};
v(jt,"RadarTokenBuilder");
var Ay = jt;

var $c={parser:{TokenBuilder:v(() => {
    return new Ay;
},"TokenBuilder"),ValueConverter:v(() => {
    return new Ci;
},"ValueConverter")}};

function xc(n=lt){
    const e=oe(ot(n),St);
    const t=oe(at({shared:e}),ly,$c);
    e.ServiceRegistry.register(t);
    return {shared:e,Radar:t};
}v(xc,"createRadarServices");
var Ht;
Ht=class extends ut{constructor(){super(["treemap"])}};
v(Ht,"TreemapTokenBuilder");
var Ey = Ht;
var ky=/classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/;
var zt;

zt=class extends Ii{runCustomConverter(e,t,r){if (e.name==="NUMBER2") {
    return parseFloat(t.replace(/,/g,""));
}if (e.name==="SEPARATOR") {
    return t.substring(1,t.length-1);
}if (e.name==="STRING2") {
    return t.substring(1,t.length-1);
}if (e.name==="INDENTATION") {
    return t.length;
}if(e.name==="ClassDef"){if (typeof t!="string") {
    return t;
}const i=ky.exec(t);if (i) {
    return{$type:"ClassDefStatement",className:i[1],styleText:i[2]||void 0}
}}}};

v(zt,"TreemapValueConverter");
var $y = zt;

function Sc(n){
    const e=n.validation.TreemapValidator;
    const t=n.validation.ValidationRegistry;
    if(t){const r={Treemap:e.checkSingleRoot.bind(e)};t.register(r,e)}
}v(Sc,"registerValidationChecks");
var qt;

qt=class{checkSingleRoot(e,t){let r;for (const i of e.TreemapRows) {
    if (i.item) {
        if (r===void 0&&i.indent===void 0) {
            r=0;
        } else if (i.indent===void 0) {
            t("error","Multiple root nodes are not allowed in a treemap.",{node:i,property:"item"});
        } else if (r!==void 0&&r>=parseInt(i.indent,10)) {
            t("error","Multiple root nodes are not allowed in a treemap.",{node:i,property:"item"});
        }
    }
}}};

v(qt,"TreemapValidator");
var xy = qt;

var Ic={parser:{TokenBuilder:v(() => {
    return new Ey;
},"TokenBuilder"),ValueConverter:v(() => {
    return new $y;
},"ValueConverter")},validation:{TreemapValidator:v(() => {
    return new xy;
},"TreemapValidator")}};

function Cc(n=lt){
    const e=oe(ot(n),St);
    const t=oe(at({shared:e}),uy,Ic);
    e.ServiceRegistry.register(t);
    Sc(t);
    return {shared:e,Treemap:t};
}v(Cc,"createTreemapServices");
var je={};

var Sy={info:v(async()=>{
    const {createInfoServices}=await _(async()=>{const{createInfoServices: createInfoServices_1}=await Promise.resolve().then(() => {
        return Ny;
    });return {createInfoServices:createInfoServices_1};},void 0,import.meta.url);

    const e=createInfoServices().Info.parser.LangiumParser;
    je.info=e
},"info"),packet:v(async()=>{
    const {createPacketServices}=await _(async()=>{const{createPacketServices: createPacketServices_1}=await Promise.resolve().then(() => {
        return wy;
    });return {createPacketServices:createPacketServices_1};},void 0,import.meta.url);

    const e=createPacketServices().Packet.parser.LangiumParser;
    je.packet=e
},"packet"),pie:v(async()=>{
    const {createPieServices}=await _(async()=>{const{createPieServices: createPieServices_1}=await Promise.resolve().then(() => {
        return _y;
    });return {createPieServices:createPieServices_1};},void 0,import.meta.url);

    const e=createPieServices().Pie.parser.LangiumParser;
    je.pie=e
},"pie"),architecture:v(async()=>{
    const {createArchitectureServices}=await _(async()=>{const{createArchitectureServices: createArchitectureServices_1}=await Promise.resolve().then(() => {
        return Ly;
    });return {createArchitectureServices:createArchitectureServices_1};},void 0,import.meta.url);

    const e=createArchitectureServices().Architecture.parser.LangiumParser;
    je.architecture=e
},"architecture"),gitGraph:v(async()=>{
    const {createGitGraphServices}=await _(async()=>{const{createGitGraphServices: createGitGraphServices_1}=await Promise.resolve().then(() => {
        return Oy;
    });return {createGitGraphServices:createGitGraphServices_1};},void 0,import.meta.url);

    const e=createGitGraphServices().GitGraph.parser.LangiumParser;
    je.gitGraph=e
},"gitGraph"),radar:v(async()=>{
    const {createRadarServices}=await _(async()=>{const{createRadarServices: createRadarServices_1}=await Promise.resolve().then(() => {
        return by;
    });return {createRadarServices:createRadarServices_1};},void 0,import.meta.url);

    const e=createRadarServices().Radar.parser.LangiumParser;
    je.radar=e
},"radar"),treemap:v(async()=>{
    const {createTreemapServices}=await _(async()=>{const{createTreemapServices: createTreemapServices_1}=await Promise.resolve().then(() => {
        return Py;
    });return {createTreemapServices:createTreemapServices_1};},void 0,import.meta.url);

    const e=createTreemapServices().Treemap.parser.LangiumParser;
    je.treemap=e
},"treemap")};

async function Iy(n,e){
    const t=Sy[n];if (!t) {
        throw new Error(`Unknown diagram type: ${n}`);
    }

    if (!je[n]) {
        (await t());
    }

    const i=je[n].parse(e);if (i.lexerErrors.length>0||i.parserErrors.length>0) {
        throw new Cy(i);
    }return i.value
}v(Iy,"parse");
var Yt;

Yt=class extends Error{constructor(e){
    const t=e.lexerErrors.map(i => {
        return i.message;
    }).join(`
    `);

    const r=e.parserErrors.map(i => {
        return i.message;
    }).join(`
    `);

    super(`Parsing failed: ${t} ${r}`);
    this.result=e;
}};

v(Yt,"MermaidParseError");
var Cy = Yt;

const Ny=Object.freeze(Object.defineProperty({__proto__:null,InfoModule:gc,createInfoServices:yc},Symbol.toStringTag,{value:"Module"}));
const wy=Object.freeze(Object.defineProperty({__proto__:null,PacketModule:Tc,createPacketServices:Rc},Symbol.toStringTag,{value:"Module"}));
const _y=Object.freeze(Object.defineProperty({__proto__:null,PieModule:vc,createPieServices:Ac},Symbol.toStringTag,{value:"Module"}));
const Ly=Object.freeze(Object.defineProperty({__proto__:null,ArchitectureModule:Ec,createArchitectureServices:kc},Symbol.toStringTag,{value:"Module"}));
const Oy=Object.freeze(Object.defineProperty({__proto__:null,GitGraphModule:pc,createGitGraphServices:mc},Symbol.toStringTag,{value:"Module"}));
const by=Object.freeze(Object.defineProperty({__proto__:null,RadarModule:$c,createRadarServices:xc},Symbol.toStringTag,{value:"Module"}));
const Py=Object.freeze(Object.defineProperty({__proto__:null,TreemapModule:Ic,createTreemapServices:Cc},Symbol.toStringTag,{value:"Module"}));
export{Iy as p};
//# sourceMappingURL=treemap-KMMF4GRG-CK1q9nlx.js.map
