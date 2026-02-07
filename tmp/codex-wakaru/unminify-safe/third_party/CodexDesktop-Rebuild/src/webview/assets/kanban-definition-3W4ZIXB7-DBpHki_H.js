import{a2,a9,a7,aE,bb,bc,bd,b4,aC,ad,ap,aq,b5,b6,b7}from"./index-CgwAo6pj.js";import{g}from"./chunk-FMBD7UC4-DiMn5Uua.js";const $ = (() => {
  const e=a2((O, i, n, r) => {
    n=n||{};

    for (r=O.length; r--; n[O[r]]=i)
      {}

    return n
  },"o");

  const u=[1,4];
  const p=[1,13];
  const s=[1,12];
  const d=[1,15];
  const _=[1,16];
  const b=[1,20];
  const l=[1,19];
  const D=[6,7,8];
  const I=[1,26];
  const g=[1,24];
  const w=[1,25];
  const E=[6,7,11];
  const G=[1,31];
  const N=[6,7,11,24];
  const V=[1,6,13,16,17,20,23];
  const m=[1,35];
  const A=[1,36];
  const L=[1,6,7,11,13,16,17,20,23];
  const M=[1,38];

  const T={trace:a2(() => {},"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,KANBAN:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,shapeData:15,ICON:16,CLASS:17,nodeWithId:18,nodeWithoutId:19,NODE_DSTART:20,NODE_DESCR:21,NODE_DEND:22,NODE_ID:23,SHAPE_DATA:24,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"KANBAN",11:"EOF",13:"SPACELIST",16:"ICON",17:"CLASS",20:"NODE_DSTART",21:"NODE_DESCR",22:"NODE_DEND",23:"NODE_ID",24:"SHAPE_DATA"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,3],[12,2],[12,2],[12,2],[12,1],[12,2],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[19,3],[18,1],[18,4],[15,2],[15,1]],performAction:a2(function(i,n,r,a,h,t,U){const c=t.length-1;switch(h){case 6:case 7:
    {
      return a;
    }case 8:
    {
      a.getLogger().trace("Stop NL ");break;
    }case 9:
    {
      a.getLogger().trace("Stop EOF ");break;
    }case 11:
    {
      a.getLogger().trace("Stop NL2 ");break;
    }case 12:
    {
      a.getLogger().trace("Stop EOF2 ");break;
    }case 15:
    {
      a.getLogger().info("Node: ",t[c-1].id);
      a.addNode(t[c-2].length,t[c-1].id,t[c-1].descr,t[c-1].type,t[c]);
      break;
    }case 16:
    {
      a.getLogger().info("Node: ",t[c].id);
      a.addNode(t[c-1].length,t[c].id,t[c].descr,t[c].type);
      break;
    }case 17:
    {
      a.getLogger().trace("Icon: ",t[c]);
      a.decorateNode({icon:t[c]});
      break;
    }case 18:case 23:
    {
      a.decorateNode({class:t[c]});break;
    }case 19:
    {
      a.getLogger().trace("SPACELIST");break;
    }case 20:
    {
      a.getLogger().trace("Node: ",t[c-1].id);
      a.addNode(0,t[c-1].id,t[c-1].descr,t[c-1].type,t[c]);
      break;
    }case 21:
    {
      a.getLogger().trace("Node: ",t[c].id);
      a.addNode(0,t[c].id,t[c].descr,t[c].type);
      break;
    }case 22:
    {
      a.decorateNode({icon:t[c]});break;
    }case 27:
    {
      a.getLogger().trace("node found ..",t[c-2]);
      this.$={id:t[c-1],descr:t[c-1],type:a.getType(t[c-2],t[c])};
      break;
    }case 28:
    {
      this.$={id:t[c],descr:t[c],type:0};break;
    }case 29:
    {
      a.getLogger().trace("node found ..",t[c-3]);
      this.$={id:t[c-3],descr:t[c-1],type:a.getType(t[c-2],t[c])};
      break;
    }case 30:
    {
      this.$=t[c-1]+t[c];break;
    }case 31:
    {
      this.$=t[c];break
    }}},"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:u},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:u},{6:p,7:[1,10],9:9,12:11,13:s,14:14,16:d,17:_,18:17,19:18,20:b,23:l},e(D,[2,3]),{1:[2,2]},e(D,[2,4]),e(D,[2,5]),{1:[2,6],6:p,12:21,13:s,14:14,16:d,17:_,18:17,19:18,20:b,23:l},{6:p,9:22,12:11,13:s,14:14,16:d,17:_,18:17,19:18,20:b,23:l},{6:I,7:g,10:23,11:w},e(E,[2,24],{18:17,19:18,14:27,16:[1,28],17:[1,29],20:b,23:l}),e(E,[2,19]),e(E,[2,21],{15:30,24:G}),e(E,[2,22]),e(E,[2,23]),e(N,[2,25]),e(N,[2,26]),e(N,[2,28],{20:[1,32]}),{21:[1,33]},{6:I,7:g,10:34,11:w},{1:[2,7],6:p,12:21,13:s,14:14,16:d,17:_,18:17,19:18,20:b,23:l},e(V,[2,14],{7:m,11:A}),e(L,[2,8]),e(L,[2,9]),e(L,[2,10]),e(E,[2,16],{15:37,24:G}),e(E,[2,17]),e(E,[2,18]),e(E,[2,20],{24:M}),e(N,[2,31]),{21:[1,39]},{22:[1,40]},e(V,[2,13],{7:m,11:A}),e(L,[2,11]),e(L,[2,12]),e(E,[2,15],{24:M}),e(N,[2,30]),{22:[1,41]},e(N,[2,27]),e(N,[2,29])],defaultActions:{2:[2,1],6:[2,2]},parseError:a2(function(i,n){if (n.recoverable) {
    this.trace(i);
  } else {
    const r=new Error(i);
    r.hash=n;
    throw r;
  }},"parseError"),parse:a2(function(i){
    const n=this;
    let r=[0];
    let a=[];
    let h=[null];
    let t=[];
    const U=this.table;
    let c="";
    let W=0;
    let se=0;
    const ue=2;
    const re=1;
    const ge=t.slice.call(arguments,1);
    const y=Object.create(this.lexer);
    const R={yy:{}};
    for (const q in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy,q)) {
        (R.yy[q] = this.yy[q]);
      }
    }
    y.setInput(i,R.yy);
    R.yy.lexer=y;
    R.yy.parser=this;

    if (typeof y.yylloc === "undefined") {
      (y.yylloc = {});
    }

    let J=y.yylloc;t.push(J);const de=y.options&&y.options.ranges;

    if (typeof R.yy.parseError=="function") {
      this.parseError=R.yy.parseError;
    } else {
      this.parseError=Object.getPrototypeOf(this).parseError;
    }

    function pe(S){
        r.length=r.length-2*S;
        h.length=h.length-S;
        t.length=t.length-S;
      }a2(pe,"popStack");function ae(){
      let S;
      S=a.pop()||y.lex()||re;

      if (typeof S!="number") {
        S instanceof Array&&(a=S,S=a.pop());
        S=n.symbols_[S]||S;
      }

      return S;
    }a2(ae,"lex");
    let k;
    let P;
    let x;
    let Q;
    const j={};
    let z;
    let C;
    let oe;
    let X;

    while (true) {
      P=r[r.length-1];

      if (this.defaultActions[P]) {
        x=this.defaultActions[P];
      } else {
        (k===null||typeof k === "undefined")&&(k=ae());
        x=U[P]&&U[P][k];
      }

      if (typeof x === "undefined"||!x.length||!x[0]) {
        let Z="";X=[];for (z in U[P]) {
          if (this.terminals_[z]&&z>ue) {
            X.push(`'${this.terminals_[z]}'`);
          }
        }

        if (y.showPosition) {
          Z=`Parse error on line ${W+1}${`:
  `}${y.showPosition()}${`
  Expecting `}${X.join(", ")}, got '${this.terminals_[k]||k}'`;
        } else {
          Z=`Parse error on line ${W+1}: Unexpected ${k==re?"end of input":`'${this.terminals_[k]||k}'`}`;
        }

        this.parseError(Z,{text:y.match,token:this.terminals_[k]||k,line:y.yylineno,loc:J,expected:X});
      }

      if (x[0]instanceof Array&&x.length>1) {
        throw new Error(`Parse Error: multiple actions possible at state: ${P}, token: ${k}`);
      }switch(x[0]){case 1:
          {
            r.push(k);
            h.push(y.yytext);
            t.push(y.yylloc);
            r.push(x[1]);
            k=null;
            se=y.yyleng;
            c=y.yytext;
            W=y.yylineno;
            J=y.yylloc;
            break;
          }case 2:
          {
            C=this.productions_[x[1]][1];
            j.$=h[h.length-C];
            j._$={first_line:t[t.length-(C||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(C||1)].first_column,last_column:t[t.length-1].last_column};

            if (de) {
              (j._$.range = [t[t.length-(C||1)].range[0],t[t.length-1].range[1]]);
            }

            Q=this.performAction.apply(j,[c,se,W,R.yy,x[1],h,t].concat(ge));

            if (typeof Q !== "undefined") {
              return Q;
            }

            if (C) {
              r=r.slice(0,-1*C*2);
              h=h.slice(0,-1*C);
              t=t.slice(0,-1*C);
            }

            r.push(this.productions_[x[1]][0]);
            h.push(j.$);
            t.push(j._$);
            oe=U[r[r.length-2]][r[r.length-1]];
            r.push(oe);
            break;
          }case 3:
          {
            return true;
          }}
    }

    return true;
  },"parse")};

  const Y = (() => {const O={EOF:1,parseError:a2(function(n,r){if (this.yy.parser) {
    this.yy.parser.parseError(n,r);
  } else {
    throw new Error(n)
  }},"parseError"),setInput:a2(function(i,n){
    this.yy=n||this.yy||{};
    this._input=i;
    this._more = false;
    this._backtrack = false;
    this.done = false;
    this.yylineno = 0;
    this.yyleng = 0;
    this.yytext = "";
    this.matched = "";
    this.match = "";
    this.conditionStack=["INITIAL"];
    this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};

    if (this.options.ranges) {
      (this.yylloc.range = [0,0]);
    }

    this.offset=0;
    return this;
  },"setInput"),input:a2(function(){
    const i=this._input[0];
    this.yytext+=i;
    this.yyleng++;
    this.offset++;
    this.match+=i;
    this.matched+=i;
    const n=i.match(/(?:\r\n?|\n).*/g);

    if (n) {
      this.yylineno++;
      this.yylloc.last_line++;
    } else {
      this.yylloc.last_column++;
    }

    if (this.options.ranges) {
      this.yylloc.range[1]++;
    }

    this._input=this._input.slice(1);
    return i;
  },"input"),unput:a2(function(i){
    const n=i.length;
    const r=i.split(/(?:\r\n?|\n)/g);
    this._input=i+this._input;
    this.yytext=this.yytext.substr(0,this.yytext.length-n);
    this.offset-=n;
    const a=this.match.split(/(?:\r\n?|\n)/g);
    this.match=this.match.substr(0,this.match.length-1);
    this.matched=this.matched.substr(0,this.matched.length-1);

    if (r.length-1) {
      (this.yylineno -= r.length-1);
    }

    const h=this.yylloc.range;
    this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===a.length?this.yylloc.first_column:0)+a[a.length-r.length].length-r[0].length:this.yylloc.first_column-n};

    if (this.options.ranges) {
      (this.yylloc.range = [h[0],h[0]+this.yyleng-n]);
    }

    this.yyleng=this.yytext.length;
    return this;
  },"unput"),more:a2(function(){
    this._more=true;
    return this;
  },"more"),reject:a2(function(){if (this.options.backtrack_lexer) {
    this._backtrack=true;
  } else {
    return this.parseError(`Lexical error on line ${this.yylineno+1}${`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`}${this.showPosition()}`,{text:"",token:null,line:this.yylineno});
  }return this},"reject"),less:a2(function(i){this.unput(this.match.slice(i))},"less"),pastInput:a2(function(){const i=this.matched.substr(0,this.matched.length-this.match.length);return (i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"");},"pastInput"),upcomingInput:a2(function(){
    let i=this.match;

    if (i.length<20) {
      (i += this._input.substr(0,20-i.length));
    }

    return (i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"");
  },"upcomingInput"),showPosition:a2(function(){
    const i=this.pastInput();
    const n=new Array(i.length+1).join("-");
    return `${i+this.upcomingInput()+`
`+n}^`;
  },"showPosition"),test_match:a2(function(i,n){
    let r;
    let a;
    let h;

    if (this.options.backtrack_lexer) {
      h={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};
      this.options.ranges&&(h.yylloc.range=this.yylloc.range.slice(0));
    }

    a=i[0].match(/(?:\r\n?|\n).*/g);

    if (a) {
      (this.yylineno += a.length);
    }

    this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length};
    this.yytext+=i[0];
    this.match+=i[0];
    this.matches=i;
    this.yyleng=this.yytext.length;

    if (this.options.ranges) {
      (this.yylloc.range = [this.offset,this.offset+=this.yyleng]);
    }

    this._more=false;
    this._backtrack=false;
    this._input=this._input.slice(i[0].length);
    this.matched+=i[0];
    r=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]);

    if (this.done&&this._input) {
      (this.done = false);
    }

    if (r) {
      return r;
    }

    if(this._backtrack){for (const t in h) {
      this[t]=h[t];
    }return false;}return false;
  },"test_match"),next:a2(function(){
    if (this.done) {
      return this.EOF;
    }

    if (!this._input) {
      (this.done = true);
    }

    let i;
    let n;
    let r;
    let a;

    if (!this._more) {
      this.yytext="";
      this.match="";
    }

    for (var h=this._currentRules(),t=0; t<h.length; t++) {
        r=this._input.match(this.rules[h[t]]);

        if (r&&(!n||r[0].length>n[0].length)) {
          n=r;
          a=t;

          if (this.options.backtrack_lexer) {
            i=this.test_match(r,h[t]);

            if (i!==false) {
              return i;
            }

            if (this._backtrack)
              {n=false;continue} else {
              return false;
            }
          } else if (!this.options.flex) {
            break
          }
        }
      }

    if (n) {
      i=this.test_match(n,h[a]);
      return i!==false?i:false;
    }

    if (this._input==="") {
      return this.EOF;
    }

    return this.parseError(`Lexical error on line ${this.yylineno+1}${`. Unrecognized text.
    `}${this.showPosition()}`,{text:"",token:null,line:this.yylineno});
  },"next"),lex:a2(function(){const n=this.next();return n||this.lex()},"lex"),begin:a2(function(n){this.conditionStack.push(n)},"begin"),popState:a2(function(){const n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a2(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a2(function(n){
    n=this.conditionStack.length-1-Math.abs(n||0);
    return n>=0?this.conditionStack[n]:"INITIAL";
  },"topState"),pushState:a2(function(n){this.begin(n)},"pushState"),stateStackSize:a2(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":true},performAction:a2(function(n,r,a,h){switch(a){case 0:
    {
      this.pushState("shapeData");
      r.yytext="";
      return 24;
    }case 1:
    {
      this.pushState("shapeDataStr");
      return 24;
    }case 2:
    {
      this.popState();
      return 24;
    }case 3:
    {
      const t=/\n\s*/g;
      r.yytext=r.yytext.replace(t,"<br/>");
      return 24;
    }case 4:
    {
      return 24;
    }case 5:
    {
      this.popState();break;
    }case 6:
    {
      n.getLogger().trace("Found comment",r.yytext);
      return 6;
    }case 7:
    {
      return 8;
    }case 8:
    {
      this.begin("CLASS");break;
    }case 9:
    {
      this.popState();
      return 17;
    }case 10:
    {
      this.popState();break;
    }case 11:
    {
      n.getLogger().trace("Begin icon");
      this.begin("ICON");
      break;
    }case 12:
    {
      n.getLogger().trace("SPACELINE");
      return 6;
    }case 13:
    {
      return 7;
    }case 14:
    {
      return 16;
    }case 15:
    {
      n.getLogger().trace("end icon");
      this.popState();
      break;
    }case 16:
    {
      n.getLogger().trace("Exploding node");
      this.begin("NODE");
      return 20;
    }case 17:
    {
      n.getLogger().trace("Cloud");
      this.begin("NODE");
      return 20;
    }case 18:
    {
      n.getLogger().trace("Explosion Bang");
      this.begin("NODE");
      return 20;
    }case 19:
    {
      n.getLogger().trace("Cloud Bang");
      this.begin("NODE");
      return 20;
    }case 20:
    {
      this.begin("NODE");
      return 20;
    }case 21:
    {
      this.begin("NODE");
      return 20;
    }case 22:
    {
      this.begin("NODE");
      return 20;
    }case 23:
    {
      this.begin("NODE");
      return 20;
    }case 24:
    {
      return 13;
    }case 25:
    {
      return 23;
    }case 26:
    {
      return 11;
    }case 27:
    {
      this.begin("NSTR2");break;
    }case 28:
    {
      return"NODE_DESCR";
    }case 29:
    {
      this.popState();break;
    }case 30:
    {
      n.getLogger().trace("Starting NSTR");
      this.begin("NSTR");
      break;
    }case 31:
    {
      n.getLogger().trace("description:",r.yytext);
      return "NODE_DESCR";
    }case 32:
    {
      this.popState();break;
    }case 33:
    {
      this.popState();
      n.getLogger().trace("node end ))");
      return "NODE_DEND";
    }case 34:
    {
      this.popState();
      n.getLogger().trace("node end )");
      return "NODE_DEND";
    }case 35:
    {
      this.popState();
      n.getLogger().trace("node end ...",r.yytext);
      return "NODE_DEND";
    }case 36:
    {
      this.popState();
      n.getLogger().trace("node end ((");
      return "NODE_DEND";
    }case 37:
    {
      this.popState();
      n.getLogger().trace("node end (-");
      return "NODE_DEND";
    }case 38:
    {
      this.popState();
      n.getLogger().trace("node end (-");
      return "NODE_DEND";
    }case 39:
    {
      this.popState();
      n.getLogger().trace("node end ((");
      return "NODE_DEND";
    }case 40:
    {
      this.popState();
      n.getLogger().trace("node end ((");
      return "NODE_DEND";
    }case 41:
    {
      n.getLogger().trace("Long description:",r.yytext);
      return 21;
    }case 42:
    {
      n.getLogger().trace("Long description:",r.yytext);
      return 21;
    }}},"anonymous"),rules:[/^(?:@\{)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^\"]+)/i,/^(?:[^}^"]+)/i,/^(?:\})/i,/^(?:\s*%%.*)/i,/^(?:kanban\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}@]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{shapeDataEndBracket:{rules:[],inclusive:false},shapeDataStr:{rules:[2,3],inclusive:false},shapeData:{rules:[1,4,5],inclusive:false},CLASS:{rules:[9,10],inclusive:false},ICON:{rules:[14,15],inclusive:false},NSTR2:{rules:[28,29],inclusive:false},NSTR:{rules:[31,32],inclusive:false},NODE:{rules:[27,30,33,34,35,36,37,38,39,40,41,42],inclusive:false},INITIAL:{rules:[0,6,7,8,11,12,13,16,17,18,19,20,21,22,23,24,25,26],inclusive:true}}};return O})();

  T.lexer=Y;function B(){this.yy={}}
  a2(B,"Parser");
  B.prototype=T;
  T.Parser=B;
  return new B;
})();$.parser=$;
const xe=$;
let v=[];
let ne=[];
let ee=0;
let ie={};

const ve=a2(()=>{
  v=[];
  ne=[];
  ee=0;
  ie={};
},"clear");

const De=a2(e=>{if (v.length===0) {
  return null;
}const u=v[0].level;let p=null;for (let s=v.length-1; s>=0; s--) {
  if (v[s].level===u&&!p) {
    (p = v[s]);
  }

  if (v[s].level<u) {
    throw new Error(`Items without section detected, found section ("${v[s].label}")`);
  }
}return e===p?.level?null:p},"getSection");

const he=a2(() => ne,"getSections");

const Le=a2(() => {
  const e=[];
  const u=[];
  const p=he();
  const s=a7();
  for(const d of p){const _={id:d.id,label:ad(d.label??"",s),isGroup:true,ticket:d.ticket,shape:"kanbanSection",level:d.level,look:s.look};u.push(_);const b=v.filter(l => l.parentId===d.id);for(const l of b){const D={id:l.id,parentId:d.id,label:ad(l.label??"",s),isGroup:false,ticket:l?.ticket,priority:l?.priority,assigned:l?.assigned,icon:l?.icon,shape:"kanbanItem",level:l.level,rx:5,ry:5,cssStyles:["text-align: left"]};u.push(D)}}return {nodes:u,edges:e,other:{},config:a7()};
},"getData");

const Oe=a2((e,u,p,s,d)=>{
  const _=a7();let b=_.mindmap?.padding??aC.mindmap.padding;switch(s){case f.ROUNDED_RECT:case f.RECT:case f.HEXAGON:
      {
        b*=2
      }}const l={id:ad(u,_)||`kbn${ee++}`,level:e,label:ad(p,_),width:_.mindmap?.maxNodeWidth??aC.mindmap.maxNodeWidth,padding:b,isGroup:false};if(d!==void 0){
    let I;

    if (d.includes(`
        `)) {
      I=d+`
          `;
    } else {
      I=`{
          `+d+`
          }`;
    }

    const g=ap(I,{schema:aq});if (g.shape&&(g.shape!==g.shape.toLowerCase()||g.shape.includes("_"))) {
          throw new Error(`No such shape: ${g.shape}. Shape names should be lowercase.`);
        }

    if (g?.shape&&g.shape==="kanbanItem") {
      (l.shape = g?.shape);
    }

    if (g?.label) {
      (l.label = g?.label);
    }

    if (g?.icon) {
      (l.icon = g?.icon.toString());
    }

    if (g?.assigned) {
      (l.assigned = g?.assigned.toString());
    }

    if (g?.ticket) {
      (l.ticket = g?.ticket.toString());
    }

    if (g?.priority) {
      (l.priority = g?.priority);
    }
  }const D=De(e);

  if (D) {
    l.parentId=D.id||`kbn${ee++}`;
  } else {
    ne.push(l);
  }

  v.push(l);
},"addNode");

var f={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6};

const Ie=a2((e,u)=>{
  a9.debug("In get type",e,u);

  switch (e) {
  case "[":
    {
      return f.RECT;
    }
  case "(":
    {
      return u===")"?f.ROUNDED_RECT:f.CLOUD;
    }
  case "((":
    {
      return f.CIRCLE;
    }
  case ")":
    {
      return f.CLOUD;
    }
  case "))":
    {
      return f.BANG;
    }
  case "{{":
    {
      return f.HEXAGON;
    }
  default:
    {
      return f.DEFAULT
    }
  }
},"getType");

const Ce=a2((e,u)=>{ie[e]=u},"setElementForId");

const we=a2(e=>{
  if (!e) {
    return;
  }
  const u=a7();
  const p=v[v.length-1];

  if (e.icon) {
    (p.icon = ad(e.icon,u));
  }

  if (e.class) {
    (p.cssClasses = ad(e.class,u));
  }
},"decorateNode");

const Ae=a2(e=>{switch(e){case f.DEFAULT:
  {
    return"no-border";
  }case f.RECT:
  {
    return"rect";
  }case f.ROUNDED_RECT:
  {
    return"rounded-rect";
  }case f.CIRCLE:
  {
    return"circle";
  }case f.CLOUD:
  {
    return"cloud";
  }case f.BANG:
  {
    return"bang";
  }case f.HEXAGON:
  {
    return"hexgon";
  }default:
  {
    return"no-border"
  }}},"type2Str");

const Te=a2(() => a9,"getLogger");

const Re=a2(e => ie[e],"getElementById");

const Pe={clear:ve,addNode:Oe,getSections:he,getData:Le,nodeType:f,getType:Ie,setElementForId:Ce,decorateNode:we,type2Str:Ae,getLogger:Te,getElementById:Re};
const Ve=Pe;

const Be=a2(async(e,u,p,s)=>{
  a9.debug(`Rendering kanban diagram
  `+e);
  const _=s.db.getData();
  const b=a7();
  b.htmlLabels=false;
  const l=aE(u);
  const D=l.append("g");
  D.attr("class","sections");const I=l.append("g");I.attr("class","items");const g=_.nodes.filter(m => m.isGroup);let w=0;
  const E=10;
  const G=[];
  let N=25;for(const m of g){
    const A=b?.kanban?.sectionWidth||200;
    w=w+1;
    m.x=A*w+(w-1)*E/2;
    m.width=A;
    m.y=0;
    m.height=A*3;
    m.rx=5;
    m.ry=5;
    m.cssClasses=`${m.cssClasses} section-${w}`;
    const L=await bb(D,m);
    N=Math.max(N,L?.labelBBox?.height);
    G.push(L);
  }let V=0;for(const m of g){
    const A=G[V];V=V+1;
    const L=b?.kanban?.sectionWidth||200;
    const M=-L*3/2+N;
    let T=M;const Y=_.nodes.filter(i => i.parentId===m.id);for(const i of Y){
      if (i.isGroup) {
        throw new Error("Groups within groups are not allowed in Kanban diagrams");
      }
      i.x=m.x;
      i.width=L-1.5*E;
      const r=(await bc(I,i,{config:b})).node().getBBox();
      i.y=T+r.height/2;
      await bd(i);
      T=i.y+r.height/2+E/2;
    }
    const B=A.cluster.select("rect");
    const O=Math.max(T-M+3*E,50)+(N-25);
    B.attr("height",O)
  }b4(void 0,l,b.mindmap?.padding??aC.kanban.padding,b.mindmap?.useMaxWidth??aC.kanban.useMaxWidth)
},"draw");

const je={draw:Be};

const Fe=a2(e=>{let u="";for (let s=0; s<e.THEME_COLOR_LIMIT; s++) {
  e[`lineColor${s}`]=e[`lineColor${s}`]||e[`cScaleInv${s}`];

  if (b5(e[`lineColor${s}`])) {
    e[`lineColor${s}`]=b6(e[`lineColor${s}`],20);
  } else {
    e[`lineColor${s}`]=b7(e[`lineColor${s}`],20);
  }
}const p=a2((s, d) => e.darkMode?b7(s,d):b6(s,d),"adjuster");for(let s=0;s<e.THEME_COLOR_LIMIT;s++){const d=`${17-3*s}`;u+=`
    .section-${s-1} rect, .section-${s-1} path, .section-${s-1} circle, .section-${s-1} polygon, .section-${s-1} path  {
      fill: ${p(e[`cScale${s}`],10)};
      stroke: ${p(e[`cScale${s}`],10)};

    }
    .section-${s-1} text {
     fill: ${e[`cScaleLabel${s}`]};
    }
    .node-icon-${s-1} {
      font-size: 40px;
      color: ${e[`cScaleLabel${s}`]};
    }
    .section-edge-${s-1}{
      stroke: ${e[`cScale${s}`]};
    }
    .edge-depth-${s-1}{
      stroke-width: ${d};
    }
    .section-${s-1} line {
      stroke: ${e[`cScaleInv${s}`]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    text-decoration: underline;
  }
    `}return u},"genSections");

const Ge=a2(e => `
  .edge {
    stroke-width: 3;
  }
  ${Fe(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${e.textColor};
    fill: ${e.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
    ${g()}
`,"getStyles");

const Me=Ge;

export const diagram = {db:Ve,renderer:je,parser:xe,styles:Me};
//# sourceMappingURL=kanban-definition-3W4ZIXB7-DBpHki_H.js.map

export{diagram as diagram};
//# sourceMappingURL=kanban-definition-3W4ZIXB7-DBpHki_H.js.map
