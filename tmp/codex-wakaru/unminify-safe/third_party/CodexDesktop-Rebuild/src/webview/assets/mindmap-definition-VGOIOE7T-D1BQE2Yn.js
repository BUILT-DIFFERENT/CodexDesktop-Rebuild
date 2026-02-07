import{g}from"./chunk-55IACEB6-BijZijHg.js";import{s}from"./chunk-QN33PNHL-CAvc2xVm.js";import{a2,a9,ak,al,aC,a7,ad,b9,ba,b5,b6,b7}from"./index-CgwAo6pj.js";const z = (() => {
  const r=a2((L, s, t, a) => {
    t=t||{};

    for (a=L.length; a--; t[L[a]]=s)
      {}

    return t
  },"o");

  const e=[1,4];
  const i=[1,13];
  const l=[1,12];
  const f=[1,15];
  const h=[1,16];
  const p=[1,20];
  const m=[1,19];
  const u=[6,7,8];
  const N=[1,26];
  const W=[1,24];
  const X=[1,25];
  const _=[6,7,11];
  const Y=[1,6,13,15,16,19,22];
  const q=[1,33];
  const J=[1,34];
  const I=[1,6,7,11,13,15,16,19,22];

  const F={trace:a2(() => {},"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,MINDMAP:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,ICON:15,CLASS:16,nodeWithId:17,nodeWithoutId:18,NODE_DSTART:19,NODE_DESCR:20,NODE_DEND:21,NODE_ID:22,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"MINDMAP",11:"EOF",13:"SPACELIST",15:"ICON",16:"CLASS",19:"NODE_DSTART",20:"NODE_DESCR",21:"NODE_DEND",22:"NODE_ID"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,2],[12,2],[12,2],[12,1],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[18,3],[17,1],[17,4]],performAction:a2(function(s,t,a,o,d,n,R){const g=n.length-1;switch(d){case 6:case 7:
    {
      return o;
    }case 8:
    {
      o.getLogger().trace("Stop NL ");break;
    }case 9:
    {
      o.getLogger().trace("Stop EOF ");break;
    }case 11:
    {
      o.getLogger().trace("Stop NL2 ");break;
    }case 12:
    {
      o.getLogger().trace("Stop EOF2 ");break;
    }case 15:
    {
      o.getLogger().info("Node: ",n[g].id);
      o.addNode(n[g-1].length,n[g].id,n[g].descr,n[g].type);
      break;
    }case 16:
    {
      o.getLogger().trace("Icon: ",n[g]);
      o.decorateNode({icon:n[g]});
      break;
    }case 17:case 21:
    {
      o.decorateNode({class:n[g]});break;
    }case 18:
    {
      o.getLogger().trace("SPACELIST");break;
    }case 19:
    {
      o.getLogger().trace("Node: ",n[g].id);
      o.addNode(0,n[g].id,n[g].descr,n[g].type);
      break;
    }case 20:
    {
      o.decorateNode({icon:n[g]});break;
    }case 25:
    {
      o.getLogger().trace("node found ..",n[g-2]);
      this.$={id:n[g-1],descr:n[g-1],type:o.getType(n[g-2],n[g])};
      break;
    }case 26:
    {
      this.$={id:n[g],descr:n[g],type:o.nodeType.DEFAULT};break;
    }case 27:
    {
      o.getLogger().trace("node found ..",n[g-3]);
      this.$={id:n[g-3],descr:n[g-1],type:o.getType(n[g-2],n[g])};
      break
    }}},"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:e},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:e},{6:i,7:[1,10],9:9,12:11,13:l,14:14,15:f,16:h,17:17,18:18,19:p,22:m},r(u,[2,3]),{1:[2,2]},r(u,[2,4]),r(u,[2,5]),{1:[2,6],6:i,12:21,13:l,14:14,15:f,16:h,17:17,18:18,19:p,22:m},{6:i,9:22,12:11,13:l,14:14,15:f,16:h,17:17,18:18,19:p,22:m},{6:N,7:W,10:23,11:X},r(_,[2,22],{17:17,18:18,14:27,15:[1,28],16:[1,29],19:p,22:m}),r(_,[2,18]),r(_,[2,19]),r(_,[2,20]),r(_,[2,21]),r(_,[2,23]),r(_,[2,24]),r(_,[2,26],{19:[1,30]}),{20:[1,31]},{6:N,7:W,10:32,11:X},{1:[2,7],6:i,12:21,13:l,14:14,15:f,16:h,17:17,18:18,19:p,22:m},r(Y,[2,14],{7:q,11:J}),r(I,[2,8]),r(I,[2,9]),r(I,[2,10]),r(_,[2,15]),r(_,[2,16]),r(_,[2,17]),{20:[1,35]},{21:[1,36]},r(Y,[2,13],{7:q,11:J}),r(I,[2,11]),r(I,[2,12]),{21:[1,37]},r(_,[2,25]),r(_,[2,27])],defaultActions:{2:[2,1],6:[2,2]},parseError:a2(function(s,t){if (t.recoverable) {
    this.trace(s);
  } else {
    const a=new Error(s);
    a.hash=t;
    throw a;
  }},"parseError"),parse:a2(function(s){
    const t=this;
    let a=[0];
    let o=[];
    let d=[null];
    let n=[];
    const R=this.table;
    let g="";
    let w=0;
    let K=0;
    const ie=2;
    const Q=1;
    const se=n.slice.call(arguments,1);
    const y=Object.create(this.lexer);
    const x={yy:{}};
    for (const V in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy,V)) {
        (x.yy[V] = this.yy[V]);
      }
    }
    y.setInput(s,x.yy);
    x.yy.lexer=y;
    x.yy.parser=this;

    if (typeof y.yylloc === "undefined") {
      (y.yylloc = {});
    }

    let G=y.yylloc;n.push(G);const ne=y.options&&y.options.ranges;

    if (typeof x.yy.parseError=="function") {
      this.parseError=x.yy.parseError;
    } else {
      this.parseError=Object.getPrototypeOf(this).parseError;
    }

    function re(b){
        a.length=a.length-2*b;
        d.length=d.length-b;
        n.length=n.length-b;
      }a2(re,"popStack");function Z(){
      let b;
      b=o.pop()||y.lex()||Q;

      if (typeof b!="number") {
        b instanceof Array&&(o=b,b=o.pop());
        b=t.symbols_[b]||b;
      }

      return b;
    }a2(Z,"lex");
    let E;
    let v;
    let S;
    let j;
    const T={};
    let P;
    let k;
    let ee;
    let M;

    while (true) {
      v=a[a.length-1];

      if (this.defaultActions[v]) {
        S=this.defaultActions[v];
      } else {
        (E===null||typeof E === "undefined")&&(E=Z());
        S=R[v]&&R[v][E];
      }

      if (typeof S === "undefined"||!S.length||!S[0]) {
        let $="";M=[];for (P in R[v]) {
          if (this.terminals_[P]&&P>ie) {
            M.push(`'${this.terminals_[P]}'`);
          }
        }

        if (y.showPosition) {
          $=`Parse error on line ${w+1}${`:
  `}${y.showPosition()}${`
  Expecting `}${M.join(", ")}, got '${this.terminals_[E]||E}'`;
        } else {
          $=`Parse error on line ${w+1}: Unexpected ${E==Q?"end of input":`'${this.terminals_[E]||E}'`}`;
        }

        this.parseError($,{text:y.match,token:this.terminals_[E]||E,line:y.yylineno,loc:G,expected:M});
      }

      if (S[0]instanceof Array&&S.length>1) {
        throw new Error(`Parse Error: multiple actions possible at state: ${v}, token: ${E}`);
      }switch(S[0]){case 1:
          {
            a.push(E);
            d.push(y.yytext);
            n.push(y.yylloc);
            a.push(S[1]);
            E=null;
            K=y.yyleng;
            g=y.yytext;
            w=y.yylineno;
            G=y.yylloc;
            break;
          }case 2:
          {
            k=this.productions_[S[1]][1];
            T.$=d[d.length-k];
            T._$={first_line:n[n.length-(k||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(k||1)].first_column,last_column:n[n.length-1].last_column};

            if (ne) {
              (T._$.range = [n[n.length-(k||1)].range[0],n[n.length-1].range[1]]);
            }

            j=this.performAction.apply(T,[g,K,w,x.yy,S[1],d,n].concat(se));

            if (typeof j !== "undefined") {
              return j;
            }

            if (k) {
              a=a.slice(0,-1*k*2);
              d=d.slice(0,-1*k);
              n=n.slice(0,-1*k);
            }

            a.push(this.productions_[S[1]][0]);
            d.push(T.$);
            n.push(T._$);
            ee=R[a[a.length-2]][a[a.length-1]];
            a.push(ee);
            break;
          }case 3:
          {
            return true;
          }}
    }

    return true;
  },"parse")};

  const te = (() => {const L={EOF:1,parseError:a2(function(t,a){if (this.yy.parser) {
    this.yy.parser.parseError(t,a);
  } else {
    throw new Error(t)
  }},"parseError"),setInput:a2(function(s,t){
    this.yy=t||this.yy||{};
    this._input=s;
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
    const s=this._input[0];
    this.yytext+=s;
    this.yyleng++;
    this.offset++;
    this.match+=s;
    this.matched+=s;
    const t=s.match(/(?:\r\n?|\n).*/g);

    if (t) {
      this.yylineno++;
      this.yylloc.last_line++;
    } else {
      this.yylloc.last_column++;
    }

    if (this.options.ranges) {
      this.yylloc.range[1]++;
    }

    this._input=this._input.slice(1);
    return s;
  },"input"),unput:a2(function(s){
    const t=s.length;
    const a=s.split(/(?:\r\n?|\n)/g);
    this._input=s+this._input;
    this.yytext=this.yytext.substr(0,this.yytext.length-t);
    this.offset-=t;
    const o=this.match.split(/(?:\r\n?|\n)/g);
    this.match=this.match.substr(0,this.match.length-1);
    this.matched=this.matched.substr(0,this.matched.length-1);

    if (a.length-1) {
      (this.yylineno -= a.length-1);
    }

    const d=this.yylloc.range;
    this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===o.length?this.yylloc.first_column:0)+o[o.length-a.length].length-a[0].length:this.yylloc.first_column-t};

    if (this.options.ranges) {
      (this.yylloc.range = [d[0],d[0]+this.yyleng-t]);
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
  }return this},"reject"),less:a2(function(s){this.unput(this.match.slice(s))},"less"),pastInput:a2(function(){const s=this.matched.substr(0,this.matched.length-this.match.length);return (s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"");},"pastInput"),upcomingInput:a2(function(){
    let s=this.match;

    if (s.length<20) {
      (s += this._input.substr(0,20-s.length));
    }

    return (s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"");
  },"upcomingInput"),showPosition:a2(function(){
    const s=this.pastInput();
    const t=new Array(s.length+1).join("-");
    return `${s+this.upcomingInput()+`
`+t}^`;
  },"showPosition"),test_match:a2(function(s,t){
    let a;
    let o;
    let d;

    if (this.options.backtrack_lexer) {
      d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};
      this.options.ranges&&(d.yylloc.range=this.yylloc.range.slice(0));
    }

    o=s[0].match(/(?:\r\n?|\n).*/g);

    if (o) {
      (this.yylineno += o.length);
    }

    this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length};
    this.yytext+=s[0];
    this.match+=s[0];
    this.matches=s;
    this.yyleng=this.yytext.length;

    if (this.options.ranges) {
      (this.yylloc.range = [this.offset,this.offset+=this.yyleng]);
    }

    this._more=false;
    this._backtrack=false;
    this._input=this._input.slice(s[0].length);
    this.matched+=s[0];
    a=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]);

    if (this.done&&this._input) {
      (this.done = false);
    }

    if (a) {
      return a;
    }

    if(this._backtrack){for (const n in d) {
      this[n]=d[n];
    }return false;}return false;
  },"test_match"),next:a2(function(){
    if (this.done) {
      return this.EOF;
    }

    if (!this._input) {
      (this.done = true);
    }

    let s;
    let t;
    let a;
    let o;

    if (!this._more) {
      this.yytext="";
      this.match="";
    }

    for (var d=this._currentRules(),n=0; n<d.length; n++) {
        a=this._input.match(this.rules[d[n]]);

        if (a&&(!t||a[0].length>t[0].length)) {
          t=a;
          o=n;

          if (this.options.backtrack_lexer) {
            s=this.test_match(a,d[n]);

            if (s!==false) {
              return s;
            }

            if (this._backtrack)
              {t=false;continue} else {
              return false;
            }
          } else if (!this.options.flex) {
            break
          }
        }
      }

    if (t) {
      s=this.test_match(t,d[o]);
      return s!==false?s:false;
    }

    if (this._input==="") {
      return this.EOF;
    }

    return this.parseError(`Lexical error on line ${this.yylineno+1}${`. Unrecognized text.
    `}${this.showPosition()}`,{text:"",token:null,line:this.yylineno});
  },"next"),lex:a2(function(){const t=this.next();return t||this.lex()},"lex"),begin:a2(function(t){this.conditionStack.push(t)},"begin"),popState:a2(function(){const t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a2(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a2(function(t){
    t=this.conditionStack.length-1-Math.abs(t||0);
    return t>=0?this.conditionStack[t]:"INITIAL";
  },"topState"),pushState:a2(function(t){this.begin(t)},"pushState"),stateStackSize:a2(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":true},performAction:a2(function(t,a,o,d){switch(o){case 0:
    {
      t.getLogger().trace("Found comment",a.yytext);
      return 6;
    }case 1:
    {
      return 8;
    }case 2:
    {
      this.begin("CLASS");break;
    }case 3:
    {
      this.popState();
      return 16;
    }case 4:
    {
      this.popState();break;
    }case 5:
    {
      t.getLogger().trace("Begin icon");
      this.begin("ICON");
      break;
    }case 6:
    {
      t.getLogger().trace("SPACELINE");
      return 6;
    }case 7:
    {
      return 7;
    }case 8:
    {
      return 15;
    }case 9:
    {
      t.getLogger().trace("end icon");
      this.popState();
      break;
    }case 10:
    {
      t.getLogger().trace("Exploding node");
      this.begin("NODE");
      return 19;
    }case 11:
    {
      t.getLogger().trace("Cloud");
      this.begin("NODE");
      return 19;
    }case 12:
    {
      t.getLogger().trace("Explosion Bang");
      this.begin("NODE");
      return 19;
    }case 13:
    {
      t.getLogger().trace("Cloud Bang");
      this.begin("NODE");
      return 19;
    }case 14:
    {
      this.begin("NODE");
      return 19;
    }case 15:
    {
      this.begin("NODE");
      return 19;
    }case 16:
    {
      this.begin("NODE");
      return 19;
    }case 17:
    {
      this.begin("NODE");
      return 19;
    }case 18:
    {
      return 13;
    }case 19:
    {
      return 22;
    }case 20:
    {
      return 11;
    }case 21:
    {
      this.begin("NSTR2");break;
    }case 22:
    {
      return"NODE_DESCR";
    }case 23:
    {
      this.popState();break;
    }case 24:
    {
      t.getLogger().trace("Starting NSTR");
      this.begin("NSTR");
      break;
    }case 25:
    {
      t.getLogger().trace("description:",a.yytext);
      return "NODE_DESCR";
    }case 26:
    {
      this.popState();break;
    }case 27:
    {
      this.popState();
      t.getLogger().trace("node end ))");
      return "NODE_DEND";
    }case 28:
    {
      this.popState();
      t.getLogger().trace("node end )");
      return "NODE_DEND";
    }case 29:
    {
      this.popState();
      t.getLogger().trace("node end ...",a.yytext);
      return "NODE_DEND";
    }case 30:
    {
      this.popState();
      t.getLogger().trace("node end ((");
      return "NODE_DEND";
    }case 31:
    {
      this.popState();
      t.getLogger().trace("node end (-");
      return "NODE_DEND";
    }case 32:
    {
      this.popState();
      t.getLogger().trace("node end (-");
      return "NODE_DEND";
    }case 33:
    {
      this.popState();
      t.getLogger().trace("node end ((");
      return "NODE_DEND";
    }case 34:
    {
      this.popState();
      t.getLogger().trace("node end ((");
      return "NODE_DEND";
    }case 35:
    {
      t.getLogger().trace("Long description:",a.yytext);
      return 20;
    }case 36:
    {
      t.getLogger().trace("Long description:",a.yytext);
      return 20;
    }}},"anonymous"),rules:[/^(?:\s*%%.*)/i,/^(?:mindmap\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{CLASS:{rules:[3,4],inclusive:false},ICON:{rules:[8,9],inclusive:false},NSTR2:{rules:[22,23],inclusive:false},NSTR:{rules:[25,26],inclusive:false},NODE:{rules:[21,24,27,28,29,30,31,32,33,34,35,36],inclusive:false},INITIAL:{rules:[0,1,2,5,6,7,10,11,12,13,14,15,16,17,18,19,20],inclusive:true}}};return L})();

  F.lexer=te;function A(){this.yy={}}
  a2(A,"Parser");
  A.prototype=F;
  F.Parser=A;
  return new A;
})();z.parser=z;
const fe=z;
const D={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6};
let C;

C=class{constructor(){
  this.nodes=[];
  this.count=0;
  this.elements={};
  this.getLogger=this.getLogger.bind(this);
  this.nodeType=D;
  this.clear();
  this.getType=this.getType.bind(this);
  this.getElementById=this.getElementById.bind(this);
  this.getParent=this.getParent.bind(this);
  this.getMindmap=this.getMindmap.bind(this);
  this.addNode=this.addNode.bind(this);
  this.decorateNode=this.decorateNode.bind(this);
}clear(){
  this.nodes=[];
  this.count=0;
  this.elements={};
  this.baseLevel=void 0;
}getParent(e){for (let i=this.nodes.length-1; i>=0; i--) {
  if (this.nodes[i].level<e) {
    return this.nodes[i];
  }
}return null}getMindmap(){return this.nodes.length>0?this.nodes[0]:null}addNode(e,i,l,f){
  a9.info("addNode",e,i,l,f);let h=false;

  if (this.nodes.length===0) {
    this.baseLevel=e;
    e=0;
    h=true;
  } else if (this.baseLevel!==void 0) {
    e=e-this.baseLevel;
    h=false;
  }

  const p=a7();let m=p.mindmap?.padding??aC.mindmap.padding;switch(f){case this.nodeType.ROUNDED_RECT:case this.nodeType.RECT:case this.nodeType.HEXAGON:
      {
        m*=2;break
      }}
  const u={id:this.count++,nodeId:ad(i,p),level:e,descr:ad(l,p),type:f,children:[],width:p.mindmap?.maxNodeWidth??aC.mindmap.maxNodeWidth,padding:m,isRoot:h};
  const N=this.getParent(e);
  if (N) {
    N.children.push(u);
    this.nodes.push(u);
  } else if (h) {
    this.nodes.push(u);
  } else {
    throw new Error(`There can be only one root. No parent could be found for ("${u.descr}")`)
  }
}getType(e,i){
  a9.debug("In get type",e,i);

  switch (e) {
  case "[":
    {
      return this.nodeType.RECT;
    }
  case "(":
    {
      return i===")"?this.nodeType.ROUNDED_RECT:this.nodeType.CLOUD;
    }
  case "((":
    {
      return this.nodeType.CIRCLE;
    }
  case ")":
    {
      return this.nodeType.CLOUD;
    }
  case "))":
    {
      return this.nodeType.BANG;
    }
  case "{{":
    {
      return this.nodeType.HEXAGON;
    }
  default:
    {
      return this.nodeType.DEFAULT
    }
  }
}setElementForId(e,i){this.elements[e]=i}getElementById(e){return this.elements[e]}decorateNode(e){
  if (!e) {
    return;
  }
  const i=a7();
  const l=this.nodes[this.nodes.length-1];

  if (e.icon) {
    (l.icon = ad(e.icon,i));
  }

  if (e.class) {
    (l.class = ad(e.class,i));
  }
}type2Str(e){switch(e){case this.nodeType.DEFAULT:
  {
    return"no-border";
  }case this.nodeType.RECT:
  {
    return"rect";
  }case this.nodeType.ROUNDED_RECT:
  {
    return"rounded-rect";
  }case this.nodeType.CIRCLE:
  {
    return"circle";
  }case this.nodeType.CLOUD:
  {
    return"cloud";
  }case this.nodeType.BANG:
  {
    return"bang";
  }case this.nodeType.HEXAGON:
  {
    return"hexgon";
  }default:
  {
    return"no-border"
  }}}assignSections(e,i){
  if (e.level===0) {
    e.section=void 0;
  } else {
    e.section=i;
  }

  if (e.children) {
    for(const[l,f]of e.children.entries()){const h=e.level===0?l:i;this.assignSections(f,h)}
  }
}flattenNodes(e,i){
  const l=["mindmap-node"];

  if (e.isRoot===true) {
    l.push("section-root","section--1");
  } else if (e.section!==void 0) {
    l.push(`section-${e.section}`);
  }

  if (e.class) {
    l.push(e.class);
  }

  const f=l.join(" ");

  const h=a2(m=>{switch(m){case D.CIRCLE:
    {
      return"mindmapCircle";
    }case D.RECT:
    {
      return"rect";
    }case D.ROUNDED_RECT:
    {
      return"rounded";
    }case D.CLOUD:
    {
      return"cloud";
    }case D.BANG:
    {
      return"bang";
    }case D.HEXAGON:
    {
      return"hexagon";
    }case D.DEFAULT:
    {
      return"defaultMindmapNode";
    }case D.NO_BORDER:default:
    {
      return"rect"
    }}},"getShapeFromType");

  const p={id:e.id.toString(),domId:`node_${e.id.toString()}`,label:e.descr,isGroup:false,shape:h(e.type),width:e.width,height:e.height??0,padding:e.padding,cssClasses:f,cssStyles:[],look:"default",icon:e.icon,x:e.x,y:e.y,level:e.level,nodeId:e.nodeId,type:e.type,section:e.section};
  i.push(p);

  if (e.children) {
    for (const m of e.children) {
      this.flattenNodes(m,i)
    }
  }
}generateEdges(e,i){if (e.children) {
  for(const l of e.children){
    let f="edge";

    if (l.section!==void 0) {
      (f += ` section-edge-${l.section}`);
    }

    const h=e.level+1;f+=` edge-depth-${h}`;const p={id:`edge_${e.id}_${l.id}`,start:e.id.toString(),end:l.id.toString(),type:"normal",curve:"basis",thickness:"normal",look:"default",classes:f,depth:e.level,section:l.section};
    i.push(p);
    this.generateEdges(l,i);
  }
}}getData(){
  const e=this.getMindmap();
  const i=a7();
  const f=b9().layout!==void 0;
  const h=i;

  if (!f) {
    (h.layout = "cose-bilkent");
  }

  if (!e) {
    return{nodes:[],edges:[],config:h};
  }

  a9.debug("getData: mindmapRoot",e,i);
  this.assignSections(e);
  const p=[];
  const m=[];
  this.flattenNodes(e,p);
  this.generateEdges(e,m);
  a9.debug(`getData: processed ${p.length} nodes and ${m.length} edges`);
  const u=new Map;for (const N of p) {
      u.set(N.id,{shape:N.shape,width:N.width,height:N.height,padding:N.padding});
    }return {nodes:p,edges:m,config:h,rootNode:e,markers:["point"],direction:"TB",nodeSpacing:50,rankSpacing:50,shapes:Object.fromEntries(u),type:"mindmap",diagramId:`mindmap-${ba()}`};
}getLogger(){return a9;}};

a2(C,"MindmapDB");
const ye = C;

const me=a2(async(r,e,i,l)=>{
  a9.debug(`Rendering mindmap diagram
  `+r);
  const f=l.db;
  const h=f.getData();
  const p=g(e,h.config.securityLevel);
  h.type=l.type;
  h.layoutAlgorithm=ak(h.config.layout,{fallback:"cose-bilkent"});
  h.diagramId=e;

  if (f.getMindmap()) {
    h.nodes.forEach(u=>{
      switch (u.shape) {
      case "rounded":
        u.radius=15;
        u.taper=15;
        u.stroke="none";
        u.width=0;
        u.padding=15;
        break;
      case "circle":
        u.padding=10;
        break;
      case "rect":
        u.width=0;
        u.padding=10;
        break;
      }
    });

    await al(h,p);
    s(p,h.config.mindmap?.padding??aC.mindmap.padding,"mindmapDiagram",h.config.mindmap?.useMaxWidth??aC.mindmap.useMaxWidth);
  }
},"draw");

const Ee={draw:me};

const _e=a2(r=>{let e="";for (let i=0; i<r.THEME_COLOR_LIMIT; i++) {
  r[`lineColor${i}`]=r[`lineColor${i}`]||r[`cScaleInv${i}`];

  if (b5(r[`lineColor${i}`])) {
    r[`lineColor${i}`]=b6(r[`lineColor${i}`],20);
  } else {
    r[`lineColor${i}`]=b7(r[`lineColor${i}`],20);
  }
}for(let i=0;i<r.THEME_COLOR_LIMIT;i++){const l=`${17-3*i}`;e+=`
    .section-${i-1} rect, .section-${i-1} path, .section-${i-1} circle, .section-${i-1} polygon, .section-${i-1} path  {
      fill: ${r[`cScale${i}`]};
    }
    .section-${i-1} text {
     fill: ${r[`cScaleLabel${i}`]};
    }
    .node-icon-${i-1} {
      font-size: 40px;
      color: ${r[`cScaleLabel${i}`]};
    }
    .section-edge-${i-1}{
      stroke: ${r[`cScale${i}`]};
    }
    .edge-depth-${i-1}{
      stroke-width: ${l};
    }
    .section-${i-1} line {
      stroke: ${r[`cScaleInv${i}`]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return e},"genSections");

const be=a2(r => `
  .edge {
    stroke-width: 3;
  }
  ${_e(r)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${r.git0};
  }
  .section-root text {
    fill: ${r.gitBranchLabel0};
  }
  .section-root span {
    color: ${r.gitBranchLabel0};
  }
  .section-2 span {
    color: ${r.gitBranchLabel0};
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
  .mindmap-node-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`,"getStyles");

const Se=be;

export const diagram = {get db() {return new ye},renderer:Ee,parser:fe,styles:Se};
//# sourceMappingURL=mindmap-definition-VGOIOE7T-D1BQE2Yn.js.map

export{diagram as diagram};
//# sourceMappingURL=mindmap-definition-VGOIOE7T-D1BQE2Yn.js.map
