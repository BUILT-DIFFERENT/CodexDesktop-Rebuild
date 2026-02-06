import{g}from"./chunk-FMBD7UC4-DiMn5Uua.js";import{a2,aB,a8,aa,a9,at,av,a7,ag as be_1,b1,b2,a_ as a,bf,bg,bh,am,ag,bi,bj,ad,bk}from"./index-CgwAo6pj.js";import{c}from"./clone-M7Y9qM5V.js";import{G}from"./graph-Cgx_UOHF.js";import{c as c_1}from"./channel-BpsdF4dx.js";import"./_baseUniq-DqA0xXry.js";const bt = (() => {
  const e=a2((D, y, g, f) => {
    g=g||{};

    for (f=D.length; f--; g[D[f]]=y)
      {}

    return g
  },"o");

  const t=[1,15];
  const a=[1,7];
  const i=[1,13];
  const l=[1,14];
  const s=[1,19];
  const r=[1,16];
  const n=[1,17];
  const c=[1,18];
  const u=[8,30];
  const o=[8,10,21,28,29,30,31,39,43,46];
  const x=[1,23];
  const w=[1,24];
  const b=[8,10,15,16,21,28,29,30,31,39,43,46];
  const S=[8,10,15,16,21,27,28,29,30,31,39,43,46];
  const v=[1,49];

  const k={trace:a2(() => {},"trace"),yy:{},symbols_:{error:2,spaceLines:3,SPACELINE:4,NL:5,separator:6,SPACE:7,EOF:8,start:9,BLOCK_DIAGRAM_KEY:10,document:11,stop:12,statement:13,link:14,LINK:15,START_LINK:16,LINK_LABEL:17,STR:18,nodeStatement:19,columnsStatement:20,SPACE_BLOCK:21,blockStatement:22,classDefStatement:23,cssClassStatement:24,styleStatement:25,node:26,SIZE:27,COLUMNS:28,"id-block":29,end:30,NODE_ID:31,nodeShapeNLabel:32,dirList:33,DIR:34,NODE_DSTART:35,NODE_DEND:36,BLOCK_ARROW_START:37,BLOCK_ARROW_END:38,classDef:39,CLASSDEF_ID:40,CLASSDEF_STYLEOPTS:41,DEFAULT:42,class:43,CLASSENTITY_IDS:44,STYLECLASS:45,style:46,STYLE_ENTITY_IDS:47,STYLE_DEFINITION_DATA:48,$accept:0,$end:1},terminals_:{2:"error",4:"SPACELINE",5:"NL",7:"SPACE",8:"EOF",10:"BLOCK_DIAGRAM_KEY",15:"LINK",16:"START_LINK",17:"LINK_LABEL",18:"STR",21:"SPACE_BLOCK",27:"SIZE",28:"COLUMNS",29:"id-block",30:"end",31:"NODE_ID",34:"DIR",35:"NODE_DSTART",36:"NODE_DEND",37:"BLOCK_ARROW_START",38:"BLOCK_ARROW_END",39:"classDef",40:"CLASSDEF_ID",41:"CLASSDEF_STYLEOPTS",42:"DEFAULT",43:"class",44:"CLASSENTITY_IDS",45:"STYLECLASS",46:"style",47:"STYLE_ENTITY_IDS",48:"STYLE_DEFINITION_DATA"},productions_:[0,[3,1],[3,2],[3,2],[6,1],[6,1],[6,1],[9,3],[12,1],[12,1],[12,2],[12,2],[11,1],[11,2],[14,1],[14,4],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[19,3],[19,2],[19,1],[20,1],[22,4],[22,3],[26,1],[26,2],[33,1],[33,2],[32,3],[32,4],[23,3],[23,3],[24,3],[25,3]],performAction:a2(function(y,g,f,m,E,h,W){const p=h.length-1;switch(E){case 4:
    {
      m.getLogger().debug("Rule: separator (NL) ");break;
    }case 5:
    {
      m.getLogger().debug("Rule: separator (Space) ");break;
    }case 6:
    {
      m.getLogger().debug("Rule: separator (EOF) ");break;
    }case 7:
    {
      m.getLogger().debug("Rule: hierarchy: ",h[p-1]);
      m.setHierarchy(h[p-1]);
      break;
    }case 8:
    {
      m.getLogger().debug("Stop NL ");break;
    }case 9:
    {
      m.getLogger().debug("Stop EOF ");break;
    }case 10:
    {
      m.getLogger().debug("Stop NL2 ");break;
    }case 11:
    {
      m.getLogger().debug("Stop EOF2 ");break;
    }case 12:
    {
      m.getLogger().debug("Rule: statement: ",h[p]);

      if (typeof h[p].length=="number") {
        this.$=h[p];
      } else {
        this.$=[h[p]];
      }

      break;
    }case 13:
    {
      m.getLogger().debug("Rule: statement #2: ",h[p-1]);
      this.$=[h[p-1]].concat(h[p]);
      break;
    }case 14:
    {
      m.getLogger().debug("Rule: link: ",h[p],y);
      this.$={edgeTypeStr:h[p],label:""};
      break;
    }case 15:
    {
      m.getLogger().debug("Rule: LABEL link: ",h[p-3],h[p-1],h[p]);
      this.$={edgeTypeStr:h[p],label:h[p-1]};
      break;
    }case 18:
    {
      const I=parseInt(h[p]);
      const Z=m.generateId();
      this.$={id:Z,type:"space",label:"",width:I,children:[]};break;
    }case 23:
    {
      m.getLogger().debug("Rule: (nodeStatement link node) ",h[p-2],h[p-1],h[p]," typestr: ",h[p-1].edgeTypeStr);const V=m.edgeStrToEdgeData(h[p-1].edgeTypeStr);this.$=[{id:h[p-2].id,label:h[p-2].label,type:h[p-2].type,directions:h[p-2].directions},{id:`${h[p-2].id}-${h[p].id}`,start:h[p-2].id,end:h[p].id,label:h[p-1].label,type:"edge",directions:h[p].directions,arrowTypeEnd:V,arrowTypeStart:"arrow_open"},{id:h[p].id,label:h[p].label,type:m.typeStr2Type(h[p].typeStr),directions:h[p].directions}];break;
    }case 24:
    {
      m.getLogger().debug("Rule: nodeStatement (abc88 node size) ",h[p-1],h[p]);
      this.$={id:h[p-1].id,label:h[p-1].label,type:m.typeStr2Type(h[p-1].typeStr),directions:h[p-1].directions,widthInColumns:parseInt(h[p],10)};
      break;
    }case 25:
    {
      m.getLogger().debug("Rule: nodeStatement (node) ",h[p]);
      this.$={id:h[p].id,label:h[p].label,type:m.typeStr2Type(h[p].typeStr),directions:h[p].directions,widthInColumns:1};
      break;
    }case 26:
    {
      m.getLogger().debug("APA123",this?this:"na");
      m.getLogger().debug("COLUMNS: ",h[p]);
      this.$={type:"column-setting",columns:h[p]==="auto"?-1:parseInt(h[p])};
      break;
    }case 27:
    {
      m.getLogger().debug("Rule: id-block statement : ",h[p-2],h[p-1]);
      m.generateId();
      this.$={...h[p-2],type:"composite",children:h[p-1]};
      break;
    }case 28:
    {
      m.getLogger().debug("Rule: blockStatement : ",h[p-2],h[p-1],h[p]);const at=m.generateId();this.$={id:at,type:"composite",label:"",children:h[p-1]};break;
    }case 29:
    {
      m.getLogger().debug("Rule: node (NODE_ID separator): ",h[p]);
      this.$={id:h[p]};
      break;
    }case 30:
    {
      m.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ",h[p-1],h[p]);
      this.$={id:h[p-1],label:h[p].label,typeStr:h[p].typeStr,directions:h[p].directions};
      break;
    }case 31:
    {
      m.getLogger().debug("Rule: dirList: ",h[p]);
      this.$=[h[p]];
      break;
    }case 32:
    {
      m.getLogger().debug("Rule: dirList: ",h[p-1],h[p]);
      this.$=[h[p-1]].concat(h[p]);
      break;
    }case 33:
    {
      m.getLogger().debug("Rule: nodeShapeNLabel: ",h[p-2],h[p-1],h[p]);
      this.$={typeStr:h[p-2]+h[p],label:h[p-1]};
      break;
    }case 34:
    {
      m.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ",h[p-3],h[p-2]," #3:",h[p-1],h[p]);
      this.$={typeStr:h[p-3]+h[p],label:h[p-2],directions:h[p-1]};
      break;
    }case 35:case 36:
    {
      this.$={type:"classDef",id:h[p-1].trim(),css:h[p].trim()};break;
    }case 37:
    {
      this.$={type:"applyClass",id:h[p-1].trim(),styleClass:h[p].trim()};break;
    }case 38:
    {
      this.$={type:"applyStyles",id:h[p-1].trim(),stylesStr:h[p].trim()};break
    }}},"anonymous"),table:[{9:1,10:[1,2]},{1:[3]},{10:t,11:3,13:4,19:5,20:6,21:a,22:8,23:9,24:10,25:11,26:12,28:i,29:l,31:s,39:r,43:n,46:c},{8:[1,20]},e(u,[2,12],{13:4,19:5,20:6,22:8,23:9,24:10,25:11,26:12,11:21,10:t,21:a,28:i,29:l,31:s,39:r,43:n,46:c}),e(o,[2,16],{14:22,15:x,16:w}),e(o,[2,17]),e(o,[2,18]),e(o,[2,19]),e(o,[2,20]),e(o,[2,21]),e(o,[2,22]),e(b,[2,25],{27:[1,25]}),e(o,[2,26]),{19:26,26:12,31:s},{10:t,11:27,13:4,19:5,20:6,21:a,22:8,23:9,24:10,25:11,26:12,28:i,29:l,31:s,39:r,43:n,46:c},{40:[1,28],42:[1,29]},{44:[1,30]},{47:[1,31]},e(S,[2,29],{32:32,35:[1,33],37:[1,34]}),{1:[2,7]},e(u,[2,13]),{26:35,31:s},{31:[2,14]},{17:[1,36]},e(b,[2,24]),{10:t,11:37,13:4,14:22,15:x,16:w,19:5,20:6,21:a,22:8,23:9,24:10,25:11,26:12,28:i,29:l,31:s,39:r,43:n,46:c},{30:[1,38]},{41:[1,39]},{41:[1,40]},{45:[1,41]},{48:[1,42]},e(S,[2,30]),{18:[1,43]},{18:[1,44]},e(b,[2,23]),{18:[1,45]},{30:[1,46]},e(o,[2,28]),e(o,[2,35]),e(o,[2,36]),e(o,[2,37]),e(o,[2,38]),{36:[1,47]},{33:48,34:v},{15:[1,50]},e(o,[2,27]),e(S,[2,33]),{38:[1,51]},{33:52,34:v,38:[2,31]},{31:[2,15]},e(S,[2,34]),{38:[2,32]}],defaultActions:{20:[2,7],23:[2,14],50:[2,15],52:[2,32]},parseError:a2(function(y,g){if (g.recoverable) {
    this.trace(y);
  } else {
    const f=new Error(y);
    f.hash=g;
    throw f;
  }},"parseError"),parse:a2(function(y){
    const g=this;
    let f=[0];
    let m=[];
    let E=[null];
    let h=[];
    const W=this.table;
    let p="";
    let I=0;
    let Z=0;
    const V=2;
    const at=1;
    const ne=h.slice.call(arguments,1);
    const z=Object.create(this.lexer);
    const q={yy:{}};
    for (const gt in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy,gt)) {
        (q.yy[gt] = this.yy[gt]);
      }
    }
    z.setInput(y,q.yy);
    q.yy.lexer=z;
    q.yy.parser=this;

    if (typeof z.yylloc === "undefined") {
      (z.yylloc = {});
    }

    let ut=z.yylloc;h.push(ut);const le=z.options&&z.options.ranges;

    if (typeof q.yy.parseError=="function") {
      this.parseError=q.yy.parseError;
    } else {
      this.parseError=Object.getPrototypeOf(this).parseError;
    }

    function ce(P){
        f.length=f.length-2*P;
        E.length=E.length-P;
        h.length=h.length-P;
      }a2(ce,"popStack");function Nt(){
      let P;
      P=m.pop()||z.lex()||at;

      if (typeof P!="number") {
        P instanceof Array&&(m=P,P=m.pop());
        P=g.symbols_[P]||P;
      }

      return P;
    }a2(Nt,"lex");
    let F;
    let J;
    let H;
    let pt;
    const Q={};
    let st;
    let G;
    let Tt;
    let it;

    while (true) {
      J=f[f.length-1];

      if (this.defaultActions[J]) {
        H=this.defaultActions[J];
      } else {
        (F===null||typeof F === "undefined")&&(F=Nt());
        H=W[J]&&W[J][F];
      }

      if (typeof H === "undefined"||!H.length||!H[0]) {
        let ft="";it=[];for (st in W[J]) {
          if (this.terminals_[st]&&st>V) {
            it.push(`'${this.terminals_[st]}'`);
          }
        }

        if (z.showPosition) {
          ft=`Parse error on line ${I+1}${`:
  `}${z.showPosition()}${`
  Expecting `}${it.join(", ")}, got '${this.terminals_[F]||F}'`;
        } else {
          ft=`Parse error on line ${I+1}: Unexpected ${F==at?"end of input":`'${this.terminals_[F]||F}'`}`;
        }

        this.parseError(ft,{text:z.match,token:this.terminals_[F]||F,line:z.yylineno,loc:ut,expected:it});
      }

      if (H[0]instanceof Array&&H.length>1) {
        throw new Error(`Parse Error: multiple actions possible at state: ${J}, token: ${F}`);
      }switch(H[0]){case 1:
          {
            f.push(F);
            E.push(z.yytext);
            h.push(z.yylloc);
            f.push(H[1]);
            F=null;
            Z=z.yyleng;
            p=z.yytext;
            I=z.yylineno;
            ut=z.yylloc;
            break;
          }case 2:
          {
            G=this.productions_[H[1]][1];
            Q.$=E[E.length-G];
            Q._$={first_line:h[h.length-(G||1)].first_line,last_line:h[h.length-1].last_line,first_column:h[h.length-(G||1)].first_column,last_column:h[h.length-1].last_column};

            if (le) {
              (Q._$.range = [h[h.length-(G||1)].range[0],h[h.length-1].range[1]]);
            }

            pt=this.performAction.apply(Q,[p,Z,I,q.yy,H[1],E,h].concat(ne));

            if (typeof pt !== "undefined") {
              return pt;
            }

            if (G) {
              f=f.slice(0,-1*G*2);
              E=E.slice(0,-1*G);
              h=h.slice(0,-1*G);
            }

            f.push(this.productions_[H[1]][0]);
            E.push(Q.$);
            h.push(Q._$);
            Tt=W[f[f.length-2]][f[f.length-1]];
            f.push(Tt);
            break;
          }case 3:
          {
            return true;
          }}
    }

    return true;
  },"parse")};

  const B = (() => {const D={EOF:1,parseError:a2(function(g,f){if (this.yy.parser) {
    this.yy.parser.parseError(g,f);
  } else {
    throw new Error(g)
  }},"parseError"),setInput:a2(function(y,g){
    this.yy=g||this.yy||{};
    this._input=y;
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
    const y=this._input[0];
    this.yytext+=y;
    this.yyleng++;
    this.offset++;
    this.match+=y;
    this.matched+=y;
    const g=y.match(/(?:\r\n?|\n).*/g);

    if (g) {
      this.yylineno++;
      this.yylloc.last_line++;
    } else {
      this.yylloc.last_column++;
    }

    if (this.options.ranges) {
      this.yylloc.range[1]++;
    }

    this._input=this._input.slice(1);
    return y;
  },"input"),unput:a2(function(y){
    const g=y.length;
    const f=y.split(/(?:\r\n?|\n)/g);
    this._input=y+this._input;
    this.yytext=this.yytext.substr(0,this.yytext.length-g);
    this.offset-=g;
    const m=this.match.split(/(?:\r\n?|\n)/g);
    this.match=this.match.substr(0,this.match.length-1);
    this.matched=this.matched.substr(0,this.matched.length-1);

    if (f.length-1) {
      (this.yylineno -= f.length-1);
    }

    const E=this.yylloc.range;
    this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===m.length?this.yylloc.first_column:0)+m[m.length-f.length].length-f[0].length:this.yylloc.first_column-g};

    if (this.options.ranges) {
      (this.yylloc.range = [E[0],E[0]+this.yyleng-g]);
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
  }return this},"reject"),less:a2(function(y){this.unput(this.match.slice(y))},"less"),pastInput:a2(function(){const y=this.matched.substr(0,this.matched.length-this.match.length);return (y.length>20?"...":"")+y.substr(-20).replace(/\n/g,"");},"pastInput"),upcomingInput:a2(function(){
    let y=this.match;

    if (y.length<20) {
      (y += this._input.substr(0,20-y.length));
    }

    return (y.substr(0,20)+(y.length>20?"...":"")).replace(/\n/g,"");
  },"upcomingInput"),showPosition:a2(function(){
    const y=this.pastInput();
    const g=new Array(y.length+1).join("-");
    return `${y+this.upcomingInput()+`
`+g}^`;
  },"showPosition"),test_match:a2(function(y,g){
    let f;
    let m;
    let E;

    if (this.options.backtrack_lexer) {
      E={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};
      this.options.ranges&&(E.yylloc.range=this.yylloc.range.slice(0));
    }

    m=y[0].match(/(?:\r\n?|\n).*/g);

    if (m) {
      (this.yylineno += m.length);
    }

    this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+y[0].length};
    this.yytext+=y[0];
    this.match+=y[0];
    this.matches=y;
    this.yyleng=this.yytext.length;

    if (this.options.ranges) {
      (this.yylloc.range = [this.offset,this.offset+=this.yyleng]);
    }

    this._more=false;
    this._backtrack=false;
    this._input=this._input.slice(y[0].length);
    this.matched+=y[0];
    f=this.performAction.call(this,this.yy,this,g,this.conditionStack[this.conditionStack.length-1]);

    if (this.done&&this._input) {
      (this.done = false);
    }

    if (f) {
      return f;
    }

    if(this._backtrack){for (const h in E) {
      this[h]=E[h];
    }return false;}return false;
  },"test_match"),next:a2(function(){
    if (this.done) {
      return this.EOF;
    }

    if (!this._input) {
      (this.done = true);
    }

    let y;
    let g;
    let f;
    let m;

    if (!this._more) {
      this.yytext="";
      this.match="";
    }

    for (var E=this._currentRules(),h=0; h<E.length; h++) {
        f=this._input.match(this.rules[E[h]]);

        if (f&&(!g||f[0].length>g[0].length)) {
          g=f;
          m=h;

          if (this.options.backtrack_lexer) {
            y=this.test_match(f,E[h]);

            if (y!==false) {
              return y;
            }

            if (this._backtrack)
              {g=false;continue} else {
              return false;
            }
          } else if (!this.options.flex) {
            break
          }
        }
      }

    if (g) {
      y=this.test_match(g,E[m]);
      return y!==false?y:false;
    }

    if (this._input==="") {
      return this.EOF;
    }

    return this.parseError(`Lexical error on line ${this.yylineno+1}${`. Unrecognized text.
    `}${this.showPosition()}`,{text:"",token:null,line:this.yylineno});
  },"next"),lex:a2(function(){const g=this.next();return g||this.lex()},"lex"),begin:a2(function(g){this.conditionStack.push(g)},"begin"),popState:a2(function(){const g=this.conditionStack.length-1;return g>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a2(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a2(function(g){
    g=this.conditionStack.length-1-Math.abs(g||0);
    return g>=0?this.conditionStack[g]:"INITIAL";
  },"topState"),pushState:a2(function(g){this.begin(g)},"pushState"),stateStackSize:a2(function(){return this.conditionStack.length},"stateStackSize"),options:{},performAction:a2(function(g,f,m,E){switch(m){case 0:
    {
      g.getLogger().debug("Found block-beta");
      return 10;
    }case 1:
    {
      g.getLogger().debug("Found id-block");
      return 29;
    }case 2:
    {
      g.getLogger().debug("Found block");
      return 10;
    }case 3:
    {
      g.getLogger().debug(".",f.yytext);break;
    }case 4:
    {
      g.getLogger().debug("_",f.yytext);break;
    }case 5:
    {
      return 5;
    }case 6:
    {
      f.yytext=-1;
      return 28;
    }case 7:
    {
      f.yytext=f.yytext.replace(/columns\s+/,"");
      g.getLogger().debug("COLUMNS (LEX)",f.yytext);
      return 28;
    }case 8:
    {
      this.pushState("md_string");break;
    }case 9:
    {
      return"MD_STR";
    }case 10:
    {
      this.popState();break;
    }case 11:
    {
      this.pushState("string");break;
    }case 12:
    {
      g.getLogger().debug("LEX: POPPING STR:",f.yytext);
      this.popState();
      break;
    }case 13:
    {
      g.getLogger().debug("LEX: STR end:",f.yytext);
      return "STR";
    }case 14:
    {
      f.yytext=f.yytext.replace(/space\:/,"");
      g.getLogger().debug("SPACE NUM (LEX)",f.yytext);
      return 21;
    }case 15:
    {
      f.yytext="1";
      g.getLogger().debug("COLUMNS (LEX)",f.yytext);
      return 21;
    }case 16:
    {
      return 42;
    }case 17:
    {
      return"LINKSTYLE";
    }case 18:
    {
      return"INTERPOLATE";
    }case 19:
    {
      this.pushState("CLASSDEF");
      return 39;
    }case 20:
    {
      this.popState();
      this.pushState("CLASSDEFID");
      return "DEFAULT_CLASSDEF_ID";
    }case 21:
    {
      this.popState();
      this.pushState("CLASSDEFID");
      return 40;
    }case 22:
    {
      this.popState();
      return 41;
    }case 23:
    {
      this.pushState("CLASS");
      return 43;
    }case 24:
    {
      this.popState();
      this.pushState("CLASS_STYLE");
      return 44;
    }case 25:
    {
      this.popState();
      return 45;
    }case 26:
    {
      this.pushState("STYLE_STMNT");
      return 46;
    }case 27:
    {
      this.popState();
      this.pushState("STYLE_DEFINITION");
      return 47;
    }case 28:
    {
      this.popState();
      return 48;
    }case 29:
    {
      this.pushState("acc_title");
      return "acc_title";
    }case 30:
    {
      this.popState();
      return "acc_title_value";
    }case 31:
    {
      this.pushState("acc_descr");
      return "acc_descr";
    }case 32:
    {
      this.popState();
      return "acc_descr_value";
    }case 33:
    {
      this.pushState("acc_descr_multiline");break;
    }case 34:
    {
      this.popState();break;
    }case 35:
    {
      return"acc_descr_multiline_value";
    }case 36:
    {
      return 30;
    }case 37:
    {
      this.popState();
      g.getLogger().debug("Lex: ((");
      return "NODE_DEND";
    }case 38:
    {
      this.popState();
      g.getLogger().debug("Lex: ((");
      return "NODE_DEND";
    }case 39:
    {
      this.popState();
      g.getLogger().debug("Lex: ))");
      return "NODE_DEND";
    }case 40:
    {
      this.popState();
      g.getLogger().debug("Lex: ((");
      return "NODE_DEND";
    }case 41:
    {
      this.popState();
      g.getLogger().debug("Lex: ((");
      return "NODE_DEND";
    }case 42:
    {
      this.popState();
      g.getLogger().debug("Lex: (-");
      return "NODE_DEND";
    }case 43:
    {
      this.popState();
      g.getLogger().debug("Lex: -)");
      return "NODE_DEND";
    }case 44:
    {
      this.popState();
      g.getLogger().debug("Lex: ((");
      return "NODE_DEND";
    }case 45:
    {
      this.popState();
      g.getLogger().debug("Lex: ]]");
      return "NODE_DEND";
    }case 46:
    {
      this.popState();
      g.getLogger().debug("Lex: (");
      return "NODE_DEND";
    }case 47:
    {
      this.popState();
      g.getLogger().debug("Lex: ])");
      return "NODE_DEND";
    }case 48:
    {
      this.popState();
      g.getLogger().debug("Lex: /]");
      return "NODE_DEND";
    }case 49:
    {
      this.popState();
      g.getLogger().debug("Lex: /]");
      return "NODE_DEND";
    }case 50:
    {
      this.popState();
      g.getLogger().debug("Lex: )]");
      return "NODE_DEND";
    }case 51:
    {
      this.popState();
      g.getLogger().debug("Lex: )");
      return "NODE_DEND";
    }case 52:
    {
      this.popState();
      g.getLogger().debug("Lex: ]>");
      return "NODE_DEND";
    }case 53:
    {
      this.popState();
      g.getLogger().debug("Lex: ]");
      return "NODE_DEND";
    }case 54:
    {
      g.getLogger().debug("Lexa: -)");
      this.pushState("NODE");
      return 35;
    }case 55:
    {
      g.getLogger().debug("Lexa: (-");
      this.pushState("NODE");
      return 35;
    }case 56:
    {
      g.getLogger().debug("Lexa: ))");
      this.pushState("NODE");
      return 35;
    }case 57:
    {
      g.getLogger().debug("Lexa: )");
      this.pushState("NODE");
      return 35;
    }case 58:
    {
      g.getLogger().debug("Lex: (((");
      this.pushState("NODE");
      return 35;
    }case 59:
    {
      g.getLogger().debug("Lexa: )");
      this.pushState("NODE");
      return 35;
    }case 60:
    {
      g.getLogger().debug("Lexa: )");
      this.pushState("NODE");
      return 35;
    }case 61:
    {
      g.getLogger().debug("Lexa: )");
      this.pushState("NODE");
      return 35;
    }case 62:
    {
      g.getLogger().debug("Lexc: >");
      this.pushState("NODE");
      return 35;
    }case 63:
    {
      g.getLogger().debug("Lexa: ([");
      this.pushState("NODE");
      return 35;
    }case 64:
    {
      g.getLogger().debug("Lexa: )");
      this.pushState("NODE");
      return 35;
    }case 65:
    {
      this.pushState("NODE");
      return 35;
    }case 66:
    {
      this.pushState("NODE");
      return 35;
    }case 67:
    {
      this.pushState("NODE");
      return 35;
    }case 68:
    {
      this.pushState("NODE");
      return 35;
    }case 69:
    {
      this.pushState("NODE");
      return 35;
    }case 70:
    {
      this.pushState("NODE");
      return 35;
    }case 71:
    {
      this.pushState("NODE");
      return 35;
    }case 72:
    {
      g.getLogger().debug("Lexa: [");
      this.pushState("NODE");
      return 35;
    }case 73:
    {
      this.pushState("BLOCK_ARROW");
      g.getLogger().debug("LEX ARR START");
      return 37;
    }case 74:
    {
      g.getLogger().debug("Lex: NODE_ID",f.yytext);
      return 31;
    }case 75:
    {
      g.getLogger().debug("Lex: EOF",f.yytext);
      return 8;
    }case 76:
    {
      this.pushState("md_string");break;
    }case 77:
    {
      this.pushState("md_string");break;
    }case 78:
    {
      return"NODE_DESCR";
    }case 79:
    {
      this.popState();break;
    }case 80:
    {
      g.getLogger().debug("Lex: Starting string");
      this.pushState("string");
      break;
    }case 81:
    {
      g.getLogger().debug("LEX ARR: Starting string");
      this.pushState("string");
      break;
    }case 82:
    {
      g.getLogger().debug("LEX: NODE_DESCR:",f.yytext);
      return "NODE_DESCR";
    }case 83:
    {
      g.getLogger().debug("LEX POPPING");
      this.popState();
      break;
    }case 84:
    {
      g.getLogger().debug("Lex: =>BAE");
      this.pushState("ARROW_DIR");
      break;
    }case 85:
    {
      f.yytext=f.yytext.replace(/^,\s*/,"");
      g.getLogger().debug("Lex (right): dir:",f.yytext);
      return "DIR";
    }case 86:
    {
      f.yytext=f.yytext.replace(/^,\s*/,"");
      g.getLogger().debug("Lex (left):",f.yytext);
      return "DIR";
    }case 87:
    {
      f.yytext=f.yytext.replace(/^,\s*/,"");
      g.getLogger().debug("Lex (x):",f.yytext);
      return "DIR";
    }case 88:
    {
      f.yytext=f.yytext.replace(/^,\s*/,"");
      g.getLogger().debug("Lex (y):",f.yytext);
      return "DIR";
    }case 89:
    {
      f.yytext=f.yytext.replace(/^,\s*/,"");
      g.getLogger().debug("Lex (up):",f.yytext);
      return "DIR";
    }case 90:
    {
      f.yytext=f.yytext.replace(/^,\s*/,"");
      g.getLogger().debug("Lex (down):",f.yytext);
      return "DIR";
    }case 91:
    {
      f.yytext="]>";
      g.getLogger().debug("Lex (ARROW_DIR end):",f.yytext);
      this.popState();
      this.popState();
      return "BLOCK_ARROW_END";
    }case 92:
    {
      g.getLogger().debug("Lex: LINK",`#${f.yytext}#`);
      return 15;
    }case 93:
    {
      g.getLogger().debug("Lex: LINK",f.yytext);
      return 15;
    }case 94:
    {
      g.getLogger().debug("Lex: LINK",f.yytext);
      return 15;
    }case 95:
    {
      g.getLogger().debug("Lex: LINK",f.yytext);
      return 15;
    }case 96:
    {
      g.getLogger().debug("Lex: START_LINK",f.yytext);
      this.pushState("LLABEL");
      return 16;
    }case 97:
    {
      g.getLogger().debug("Lex: START_LINK",f.yytext);
      this.pushState("LLABEL");
      return 16;
    }case 98:
    {
      g.getLogger().debug("Lex: START_LINK",f.yytext);
      this.pushState("LLABEL");
      return 16;
    }case 99:
    {
      this.pushState("md_string");break;
    }case 100:
    {
      g.getLogger().debug("Lex: Starting string");
      this.pushState("string");
      return "LINK_LABEL";
    }case 101:
    {
      this.popState();
      g.getLogger().debug("Lex: LINK",`#${f.yytext}#`);
      return 15;
    }case 102:
    {
      this.popState();
      g.getLogger().debug("Lex: LINK",f.yytext);
      return 15;
    }case 103:
    {
      this.popState();
      g.getLogger().debug("Lex: LINK",f.yytext);
      return 15;
    }case 104:
    {
      g.getLogger().debug("Lex: COLON",f.yytext);
      f.yytext=f.yytext.slice(1);
      return 27;
    }}},"anonymous"),rules:[/^(?:block-beta\b)/,/^(?:block:)/,/^(?:block\b)/,/^(?:[\s]+)/,/^(?:[\n]+)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:columns\s+auto\b)/,/^(?:columns\s+[\d]+)/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:space[:]\d+)/,/^(?:space\b)/,/^(?:default\b)/,/^(?:linkStyle\b)/,/^(?:interpolate\b)/,/^(?:classDef\s+)/,/^(?:DEFAULT\s+)/,/^(?:\w+\s+)/,/^(?:[^\n]*)/,/^(?:class\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:style\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:end\b\s*)/,/^(?:\(\(\()/,/^(?:\)\)\))/,/^(?:[\)]\))/,/^(?:\}\})/,/^(?:\})/,/^(?:\(-)/,/^(?:-\))/,/^(?:\(\()/,/^(?:\]\])/,/^(?:\()/,/^(?:\]\))/,/^(?:\\\])/,/^(?:\/\])/,/^(?:\)\])/,/^(?:[\)])/,/^(?:\]>)/,/^(?:[\]])/,/^(?:-\))/,/^(?:\(-)/,/^(?:\)\))/,/^(?:\))/,/^(?:\(\(\()/,/^(?:\(\()/,/^(?:\{\{)/,/^(?:\{)/,/^(?:>)/,/^(?:\(\[)/,/^(?:\()/,/^(?:\[\[)/,/^(?:\[\|)/,/^(?:\[\()/,/^(?:\)\)\))/,/^(?:\[\\)/,/^(?:\[\/)/,/^(?:\[\\)/,/^(?:\[)/,/^(?:<\[)/,/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,/^(?:$)/,/^(?:["][`])/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]+)/,/^(?:["])/,/^(?:\]>\s*\()/,/^(?:,?\s*right\s*)/,/^(?:,?\s*left\s*)/,/^(?:,?\s*x\s*)/,/^(?:,?\s*y\s*)/,/^(?:,?\s*up\s*)/,/^(?:,?\s*down\s*)/,/^(?:\)\s*)/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?:\s*~~[\~]+\s*)/,/^(?:\s*[xo<]?--\s*)/,/^(?:\s*[xo<]?==\s*)/,/^(?:\s*[xo<]?-\.\s*)/,/^(?:["][`])/,/^(?:["])/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?::\d+)/],conditions:{STYLE_DEFINITION:{rules:[28],inclusive:false},STYLE_STMNT:{rules:[27],inclusive:false},CLASSDEFID:{rules:[22],inclusive:false},CLASSDEF:{rules:[20,21],inclusive:false},CLASS_STYLE:{rules:[25],inclusive:false},CLASS:{rules:[24],inclusive:false},LLABEL:{rules:[99,100,101,102,103],inclusive:false},ARROW_DIR:{rules:[85,86,87,88,89,90,91],inclusive:false},BLOCK_ARROW:{rules:[76,81,84],inclusive:false},NODE:{rules:[37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,77,80],inclusive:false},md_string:{rules:[9,10,78,79],inclusive:false},space:{rules:[],inclusive:false},string:{rules:[12,13,82,83],inclusive:false},acc_descr_multiline:{rules:[34,35],inclusive:false},acc_descr:{rules:[32],inclusive:false},acc_title:{rules:[30],inclusive:false},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,11,14,15,16,17,18,19,23,26,29,31,33,36,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,92,93,94,95,96,97,98,104],inclusive:true}}};return D})();

  k.lexer=B;function _(){this.yy={}}
  a2(_,"Parser");
  _.prototype=k;
  k.Parser=_;
  return new _;
})();bt.parser=bt;
const ve=bt;
let X=new Map;
let kt=[];
let wt=new Map;
const Bt="color";
const Ct="fill";
const Ee="bgFill";
const Pt=",";
const _e=a7();
let ct=new Map;

const De=a2(e => ag.sanitizeText(e,_e),"sanitizeText");

const Ne=a2((e, t="") => {
  let a=ct.get(e);

  if (!a) {
    a={id:e,styles:[],textStyles:[]};
    ct.set(e,a);
  }

  t?.split(Pt).forEach(i=>{const l=i.replace(/([^;]*);/,"$1").trim();if(RegExp(Bt).exec(i)){const r=l.replace(Ct,Ee).replace(Bt,Ct);a.textStyles.push(r)}a.styles.push(l)});
},"addStyleClass");

const Te=a2((e, t="") => {
  const a=X.get(e);

  if (t!=null) {
    (a.styles = t.split(Pt));
  }
},"addStyle2Node");

const Be=a2((e, t) => {e.split(",").forEach(a => {
  let i=X.get(a);if(i===void 0){
      const l=a.trim();
      i={id:l,type:"na",children:[]};
      X.set(l,i);
    }

  if (!i.classes) {
    (i.classes = []);
  }

  i.classes.push(t);
})},"setCssClass");

const Yt=a2((e,t)=>{
  const a=e.flat();
  const i=[];

  const s=a.find(r => r?.type==="column-setting")?.columns??-1;

  for(const r of a){
    if (typeof s=="number"&&s>0&&r.type!=="column-setting"&&typeof r.widthInColumns=="number"&&r.widthInColumns>s) {
      a9.warn(`Block ${r.id} width ${r.widthInColumns} exceeds configured column width ${s}`);
    }

    if (r.label) {
      (r.label = De(r.label));
    }

    if (r.type==="classDef")
      {Ne(r.id,r.css);continue}

    if(r.type==="applyClass"){Be(r.id,r?.styleClass??"");continue}if(r.type==="applyStyles"){
      if (r?.stylesStr) {
        Te(r.id,r?.stylesStr);
      }

      continue
    }if (r.type==="column-setting") {
        t.columns=r.columns??-1;
      } else if(r.type==="edge"){
        const n=(wt.get(r.id)??0)+1;
        wt.set(r.id,n);
        r.id=`${n}-${r.id}`;
        kt.push(r);
      }else{
      if (!r.label) {
        if (r.type==="composite") {
          r.label="";
        } else {
          r.label=r.id;
        }
      }

      const n=X.get(r.id);

      if (n===void 0) {
        X.set(r.id,r);
      } else {
        r.type!=="na"&&(n.type=r.type);
        r.label!==r.id&&(n.label=r.label);
      }

      if (r.children) {
        Yt(r.children,r);
      }

      if (r.type==="space") {const c=r.width??1;for(let u=0;u<c;u++){
        const o=c(r);
        o.id=`${o.id}-${u}`;
        X.set(o.id,o);
        i.push(o);
      }} else {
        if (n===void 0) {
          i.push(r);
        }
      }
    }
  }t.children=i
},"populateBlockDatabase");

let vt=[];
let et={id:"root",type:"composite",children:[],columns:-1};

const Ce=a2(()=>{
  a9.debug("Clear called");
  at();
  et={id:"root",type:"composite",children:[],columns:-1};
  X=new Map([["root",et]]);
  vt=[];
  ct=new Map;
  kt=[];
  wt=new Map;
},"clear");

function Ht(e){
  a9.debug("typeStr2Type",e);

  switch (e) {
  case "[]":
    {
      return"square";
    }
  case "()":
    {
      a9.debug("we have a round");
      return "round";
    }
  case "(())":
    {
      return"circle";
    }
  case ">]":
    {
      return"rect_left_inv_arrow";
    }
  case "{}":
    {
      return"diamond";
    }
  case "{{}}":
    {
      return"hexagon";
    }
  case "([])":
    {
      return"stadium";
    }
  case "[[]]":
    {
      return"subroutine";
    }
  case "[()]":
    {
      return"cylinder";
    }
  case "((()))":
    {
      return"doublecircle";
    }
  case "[//]":
    {
      return"lean_right";
    }
  case "[\\\\]":
    {
      return"lean_left";
    }
  case "[/\\]":
    {
      return"trapezoid";
    }
  case "[\\/]":
    {
      return"inv_trapezoid";
    }
  case "<[]>":
    {
      return"block_arrow";
    }
  default:
    {
      return"na"
    }
  }
}a2(Ht,"typeStr2Type");function Kt(e){
  a9.debug("typeStr2Type",e);

  switch (e) {
  case "==":
    {
      return"thick";
    }
  default:
    {
      return"normal"
    }
  }
}a2(Kt,"edgeTypeStr2Type");function Xt(e){switch(e.replace(/^[\s-]+|[\s-]+$/g,"")){case "x":
  {
    return"arrow_cross";
  }case "o":
  {
    return"arrow_circle";
  }case ">":
  {
    return"arrow_point";
  }default:
  {
    return""
  }}}a2(Xt,"edgeStrToEdgeData");
let It=0;

const Ie=a2(() => {
  It++;
  return `id-${Math.random().toString(36).substr(2,12)}-${It}`;
},"generateId");

const Oe=a2(e=>{
  et.children=e;
  Yt(e,et);
  vt=et.children;
},"setHierarchy");

const Re=a2(e=>{
  const t=X.get(e);

  if (t) {
    if (t.columns) {
      return t.columns;
    }

    if (t.children) {
      return t.children.length;
    }

    return -1;
  }

  return -1;
},"getColumns");

const ze=a2(() => [...X.values()],"getBlocksFlat");

const Ae=a2(() => vt||[],"getBlocks");

const Me=a2(() => kt,"getEdges");

const Fe=a2(e => X.get(e),"getBlock");

const We=a2(e=>{X.set(e.id,e)},"setBlock");

const Pe=a2(() => a9,"getLogger");

const Ye=a2(() => ct,"getClasses");

const He={getConfig:a2(() => aB().block,"getConfig"),typeStr2Type:Ht,edgeTypeStr2Type:Kt,edgeStrToEdgeData:Xt,getLogger:Pe,getBlocksFlat:ze,getBlocks:Ae,getEdges:Me,setHierarchy:Oe,getBlock:Fe,setBlock:We,getColumns:Re,getClasses:Ye,clear:Ce,generateId:Ie};

const Ke=He;

const nt=a2((e,t)=>{
  const a=c_1;
  const i=a(e,"r");
  const l=a(e,"g");
  const s=a(e,"b");
  return av(i,l,s,t);
},"fade");

const Xe=a2(e => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${nt(e.edgeLabelBackground,0.5/* .5 */)};
    // background-color:
  }

  .node .cluster {
    // fill: ${nt(e.mainBkg,0.5/* .5 */)};
    fill: ${nt(e.clusterBkg,0.5/* .5 */)};
    stroke: ${nt(e.clusterBorder,0.2/* .2 */)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  ${g()}
`,"getStyles");

const Ue=Xe;
const je=a2((e,t,a,i)=>{t.forEach(l=>{rr[l](e,a,i)})},"insertMarkers");

const Ve=a2((e,t,a)=>{
  a9.trace("Making markers for ",a);
  e.append("defs").append("marker").attr("id",`${a}_${t}-extensionStart`).attr("class",`marker extension ${t}`).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z");
  e.append("defs").append("marker").attr("id",`${a}_${t}-extensionEnd`).attr("class",`marker extension ${t}`).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z");
},"extension");

const Ge=a2((e,t,a)=>{
  e.append("defs").append("marker").attr("id",`${a}_${t}-compositionStart`).attr("class",`marker composition ${t}`).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z");
  e.append("defs").append("marker").attr("id",`${a}_${t}-compositionEnd`).attr("class",`marker composition ${t}`).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z");
},"composition");

const Ze=a2((e,t,a)=>{
  e.append("defs").append("marker").attr("id",`${a}_${t}-aggregationStart`).attr("class",`marker aggregation ${t}`).attr("refX",18).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z");
  e.append("defs").append("marker").attr("id",`${a}_${t}-aggregationEnd`).attr("class",`marker aggregation ${t}`).attr("refX",1).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z");
},"aggregation");

const qe=a2((e,t,a)=>{
  e.append("defs").append("marker").attr("id",`${a}_${t}-dependencyStart`).attr("class",`marker dependency ${t}`).attr("refX",6).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z");
  e.append("defs").append("marker").attr("id",`${a}_${t}-dependencyEnd`).attr("class",`marker dependency ${t}`).attr("refX",13).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z");
},"dependency");

const Je=a2((e,t,a)=>{
  e.append("defs").append("marker").attr("id",`${a}_${t}-lollipopStart`).attr("class",`marker lollipop ${t}`).attr("refX",13).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6);
  e.append("defs").append("marker").attr("id",`${a}_${t}-lollipopEnd`).attr("class",`marker lollipop ${t}`).attr("refX",1).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","transparent").attr("cx",7).attr("cy",7).attr("r",6);
},"lollipop");

const Qe=a2((e,t,a)=>{
  e.append("marker").attr("id",`${a}_${t}-pointEnd`).attr("class",`marker ${t}`).attr("viewBox","0 0 10 10").attr("refX",6).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0");
  e.append("marker").attr("id",`${a}_${t}-pointStart`).attr("class",`marker ${t}`).attr("viewBox","0 0 10 10").attr("refX",4.5).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0");
},"point");

const $e=a2((e,t,a)=>{
  e.append("marker").attr("id",`${a}_${t}-circleEnd`).attr("class",`marker ${t}`).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0");
  e.append("marker").attr("id",`${a}_${t}-circleStart`).attr("class",`marker ${t}`).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0");
},"circle");

const tr=a2((e,t,a)=>{
  e.append("marker").attr("id",`${a}_${t}-crossEnd`).attr("class",`marker cross ${t}`).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0");
  e.append("marker").attr("id",`${a}_${t}-crossStart`).attr("class",`marker cross ${t}`).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0");
},"cross");

const er=a2((e,t,a)=>{e.append("defs").append("marker").attr("id",`${a}_${t}-barbEnd`).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"barb");
var rr={extension:Ve,composition:Ge,aggregation:Ze,dependency:qe,lollipop:Je,point:Qe,circle:$e,cross:tr,barb:er};
const ar=je;
const C=a7()?.block?.padding??8;
function Ut(e,t){
  if (e===0||!Number.isInteger(e)) {
    throw new Error("Columns must be an integer !== 0.");
  }if (t<0||!Number.isInteger(t)) {
    throw new Error(`Position must be a non-negative integer.${t}`);
  }if (e<0) {
    return{px:t,py:0};
  }if (e===1) {
    return{px:0,py:t};
  }
  const a=t%e;
  const i=Math.floor(t/e);
  return{px:a,py:i}
}a2(Ut,"calculateBlockPosition");const sr=a2(e=>{
  let t=0;
  let a=0;
  for(const i of e.children){
    const{width,height,x,y}=i.size??{width:0,height:0,x:0,y:0};
    a9.debug("getMaxChildSize abc95 child:",i.id,"width:",width,"height:",height,"x:",x,"y:",y,i.type);

    if (i.type!=="space") {
      width>t&&(t=width/(e.widthInColumns??1));
      height>a&&(a=height);
    }
  }return{width:t,height:a}
},"getMaxChildSize");function ot(e,t,a=0,i=0){
  a9.debug("setBlockSizes abc95 (start)",e.id,e?.size?.x,"block width =",e?.size,"siblingWidth",a);

  if (!e?.size?.width) {
    (e.size = {width:a,height:i,x:0,y:0});
  }

  let l=0;
  let s=0;
  if(e.children?.length>0){
    for (const b of e.children) {
      ot(b,t);
    }const r=sr(e);
    l=r.width;
    s=r.height;
    a9.debug("setBlockSizes abc95 maxWidth of",e.id,":s children is ",l,s);
    for (const b of e.children) {
      if (b.size) {
        a9.debug(`abc95 Setting size of children of ${e.id} id=${b.id} ${l} ${s} ${JSON.stringify(b.size)}`);
        b.size.width=l*(b.widthInColumns??1)+C*((b.widthInColumns??1)-1);
        b.size.height=s;
        b.size.x=0;
        b.size.y=0;
        a9.debug(`abc95 updating size of ${e.id} children child:${b.id} maxWidth:${l} maxHeight:${s}`);
      }
    }for (const b of e.children) {
        ot(b,t,l,s);
      }const n=e.columns??-1;let c=0;for (const b of e.children) {
        c+=b.widthInColumns??1;
      }let u=e.children.length;

    if (n>0&&n<c) {
      (u = n);
    }

    const o=Math.ceil(c/u);
    let x=u*(l+C)+C;
    let w=o*(s+C)+C;
    if(x<a){
      a9.debug(`Detected to small sibling: abc95 ${e.id} siblingWidth ${a} siblingHeight ${i} width ${x}`);
      x=a;
      w=i;
      const b=(a-u*C-C)/u;
      const S=(i-o*C-C)/o;
      a9.debug("Size indata abc88",e.id,"childWidth",b,"maxWidth",l);
      a9.debug("Size indata abc88",e.id,"childHeight",S,"maxHeight",s);
      a9.debug("Size indata abc88 xSize",u,"padding",C);
      for (const v of e.children) {
        if (v.size) {
          v.size.width=b;
          v.size.height=S;
          v.size.x=0;
          v.size.y=0;
        }
      }
    }
    a9.debug(`abc95 (finale calc) ${e.id} xSize ${u} ySize ${o} columns ${n}${e.children.length} width=${Math.max(x,e.size?.width||0)}`);

    if (x<(e?.size?.width||0)) {x=e?.size?.width||0;const b=n>0?Math.min(e.children.length,n):e.children.length;if(b>0){const S=(x-b*C-C)/b;a9.debug("abc95 (growing to fit) width",e.id,x,e.size?.width,S);for (const v of e.children) {
      if (v.size) {
        (v.size.width = S);
      }
    }}}

    e.size={width:x,height:w,x:0,y:0}
  }a9.debug("setBlockSizes abc94 (done)",e.id,e?.size?.x,e?.size?.width,e?.size?.y,e?.size?.height)
}a2(ot,"setBlockSizes");function Et(e,t){
  a9.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);const a=e.columns??-1;
  a9.debug("layoutBlocks columns abc95",e.id,"=>",a,e);

  if (e.children&&e.children.length>0) {
    const i=e?.children[0]?.size?.width??0;
    const l=e.children.length*i+(e.children.length-1)*C;
    a9.debug("widthOfChildren 88",l,"posX");let s=0;a9.debug("abc91 block?.size?.x",e.id,e?.size?.x);
    let r=e?.size?.x?e?.size?.x+(-e?.size?.width/2||0):-C;
    let n=0;
    for(const c of e.children){
      const u=e;if (!c.size) {
          continue;
        }
      const {width,height}=c.size;
      const {px,py}=Ut(a,s);

      if (py!=n) {
        n=py;
        r=e?.size?.x?e?.size?.x+(-e?.size?.width/2||0):-C;
        a9.debug("New row in layout for block",e.id," and child ",c.id,n);
      }

      a9.debug(`abc89 layout blocks (child) id: ${c.id} Pos: ${s} (px, py) ${px},${py} (${u?.size?.x},${u?.size?.y}) parent: ${u.id} width: ${width}${C}`);

      if (u.size) {
        const v=width/2;
        c.size.x=r+C+v;
        a9.debug(`abc91 layout blocks (calc) px, pyid:${c.id} startingPos=X${r} new startingPosX${c.size.x} ${v} padding=${C} width=${width} halfWidth=${v} => x:${c.size.x} y:${c.size.y} ${c.widthInColumns} (width * (child?.w || 1)) / 2 ${width*(c?.widthInColumns??1)/2}`);
        r=c.size.x+v;
        c.size.y=u.size.y-u.size.height/2+py*(height+C)+height/2+C;
        a9.debug(`abc88 layout blocks (calc) px, pyid:${c.id}startingPosX${r}${C}${v}=>x:${c.size.x}y:${c.size.y}${c.widthInColumns}(width * (child?.w || 1)) / 2${width*(c?.widthInColumns??1)/2}`);
      }

      if (c.children) {
        Et(c);
      }

      let S=c?.widthInColumns??1;

      if (a>0) {
        (S = Math.min(S,a-s%a));
      }

      s+=S;
      a9.debug("abc88 columnsPos",c,s);
    }
  }

  a9.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`)
}a2(Et,"layoutBlocks");function _t(e,{minX:t,minY:a,maxX:i,maxY:l}={minX:0,minY:0,maxX:0,maxY:0}){if(e.size&&e.id!=="root"){
  const{x,y,width,height}=e.size;

  if (x-width/2<t) {
    (t = x-width/2);
  }

  if (y-height/2<a) {
    (a = y-height/2);
  }

  if (x+width/2>i) {
    (i = x+width/2);
  }

  if (y+height/2>l) {
    (l = y+height/2);
  }
}if (e.children) {
  for (const s of e.children) {
    ({minX:t,minY:a,maxX:i,maxY:l}=_t(s,{minX:t,minY:a,maxX:i,maxY:l}));
  }
}return{minX:t,minY:a,maxX:i,maxY:l}}a2(_t,"findBounds");function jt(e){
  const t=e.getBlock("root");if (!t) {
    return;
  }
  ot(t,e,0,0);
  Et(t);
  a9.debug("getBlocks",JSON.stringify(t,null,2));
  const {minX,minY,maxX,maxY}=_t(t);
  const r=maxY-minY;
  const n=maxX-minX;
  return {x:minX,y:minY,width:n,height:r};
}a2(jt,"layout");function mt(e,t){
  if (t) {
    e.attr("style",t);
  }
}a2(mt,"applyStyle");function Vt(e,t){
  const a=a8(document.createElementNS("http://www.w3.org/2000/svg","foreignObject"));
  const i=a.append("xhtml:div");
  const l=e.label;
  const s=e.isNode?"nodeLabel":"edgeLabel";
  const r=i.append("span");
  r.html(ad(l,t));
  mt(r,e.labelStyle);
  r.attr("class",s);
  mt(i,e.labelStyle);
  i.style("display","inline-block");
  i.style("white-space","nowrap");
  i.attr("xmlns","http://www.w3.org/1999/xhtml");
  return a.node();
}a2(Vt,"addHtmlLabel");

const ir=a2(async(e,t,a,i)=>{
  let l=e||"";

  if (typeof l=="object") {
    (l = l[0]);
  }

  const s=a7();if(bf(s.flowchart.htmlLabels)){
    l=l.replace(/\\n|\n/g,"<br />");
    a9.debug(`vertexText${l}`);
    const r=await bi(bj(l));
    const n={isNode:i,label:r,labelStyle:t.replace("fill:","color:")};
    return Vt(n,s)
  }else{
    const r=document.createElementNS("http://www.w3.org/2000/svg","text");r.setAttribute("style",t.replace("color:","fill:"));let n=[];

    if (typeof l=="string") {
      n=l.split(/\\n|\n|<br\s*\/?>/gi);
    } else if (Array.isArray(l)) {
      n=l;
    } else {
      n=[];
    }

    for(const c of n){
      const u=document.createElementNS("http://www.w3.org/2000/svg","tspan");
      u.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve");
      u.setAttribute("dy","1em");
      u.setAttribute("x","0");

      if (a) {
        u.setAttribute("class","title-row");
      } else {
        u.setAttribute("class","row");
      }

      u.textContent=c.trim();
      r.appendChild(u);
    }return r
  }
},"createLabel");

const K=ir;

const nr=a2((e,t,a,i,l)=>{
  if (t.arrowTypeStart) {
    Ot(e,"start",t.arrowTypeStart,a,i,l);
  }

  if (t.arrowTypeEnd) {
    Ot(e,"end",t.arrowTypeEnd,a,i,l);
  }
},"addEdgeMarkers");

const lr={arrow_cross:"cross",arrow_point:"point",arrow_barb:"barb",arrow_circle:"circle",aggregation:"aggregation",extension:"extension",composition:"composition",dependency:"dependency",lollipop:"lollipop"};
var Ot=a2((e,t,a,i,l,s)=>{const r=lr[a];if(!r){a9.warn(`Unknown arrow type: ${a}`);return}const n=t==="start"?"Start":"End";e.attr(`marker-${t}`,`url(${i}#${l}_${s}-${r}${n})`)},"addEdgeMarker");
const Lt={};
const M={};

const cr=a2(async(e,t)=>{
  const a=a7();
  const i=bf(a.flowchart.htmlLabels);
  const l=t.labelType==="markdown"?bg(e,t.label,{style:t.labelStyle,useHtmlLabels:i,addSvgBackground:true},a):await K(t.label,t.labelStyle);
  const s=e.insert("g").attr("class","edgeLabel");
  const r=s.insert("g").attr("class","label");
  r.node().appendChild(l);let n=l.getBBox();if(i){
    const u=l.children[0];
    const o=a8(l);
    n=u.getBoundingClientRect();
    o.attr("width",n.width);
    o.attr("height",n.height);
  }
  r.attr("transform",`translate(${-n.width/2}, ${-n.height/2})`);
  Lt[t.id]=s;
  t.width=n.width;
  t.height=n.height;
  let c;if(t.startLabelLeft){
  const u=await K(t.startLabelLeft,t.labelStyle);
  const o=e.insert("g").attr("class","edgeTerminals");
  const x=o.insert("g").attr("class","inner");
  c=x.node().appendChild(u);const w=u.getBBox();
  x.attr("transform",`translate(${-w.width/2}, ${-w.height/2})`);

  if (!M[t.id]) {
    (M[t.id] = {});
  }

  M[t.id].startLeft=o;
  tt(c,t.startLabelLeft);
}if(t.startLabelRight){
  const u=await K(t.startLabelRight,t.labelStyle);
  const o=e.insert("g").attr("class","edgeTerminals");
  const x=o.insert("g").attr("class","inner");
  c=o.node().appendChild(u);
  x.node().appendChild(u);
  const w=u.getBBox();
  x.attr("transform",`translate(${-w.width/2}, ${-w.height/2})`);

  if (!M[t.id]) {
    (M[t.id] = {});
  }

  M[t.id].startRight=o;
  tt(c,t.startLabelRight);
}if(t.endLabelLeft){
  const u=await K(t.endLabelLeft,t.labelStyle);
  const o=e.insert("g").attr("class","edgeTerminals");
  const x=o.insert("g").attr("class","inner");
  c=x.node().appendChild(u);const w=u.getBBox();
  x.attr("transform",`translate(${-w.width/2}, ${-w.height/2})`);
  o.node().appendChild(u);

  if (!M[t.id]) {
    (M[t.id] = {});
  }

  M[t.id].endLeft=o;
  tt(c,t.endLabelLeft);
}if(t.endLabelRight){
  const u=await K(t.endLabelRight,t.labelStyle);
  const o=e.insert("g").attr("class","edgeTerminals");
  const x=o.insert("g").attr("class","inner");
  c=x.node().appendChild(u);const w=u.getBBox();
  x.attr("transform",`translate(${-w.width/2}, ${-w.height/2})`);
  o.node().appendChild(u);

  if (!M[t.id]) {
    (M[t.id] = {});
  }

  M[t.id].endRight=o;
  tt(c,t.endLabelRight);
}return l
},"insertEdgeLabel");

function tt(e,t){
  if (a7().flowchart.htmlLabels&&e) {
    e.style.width=`${t.length*9}px`;
    e.style.height="12px";
  }
}a2(tt,"setTerminalWidth");

const or=a2((e,t)=>{
  a9.debug("Moving label abc88 ",e.id,e.label,Lt[e.id],t);let a=t.updatedPath?t.updatedPath:t.originalPath;
  const i=a7();
  const {subGraphTitleTotalMargin}=bh(i);
  if(e.label){
    const s=Lt[e.id];
    let r=e.x;
    let n=e.y;
    if(a){
      const c=am.calcLabelPosition(a);
      a9.debug(`Moving label ${e.label} from (`,r,",",n,") to (",c.x,",",c.y,") abc88");

      if (t.updatedPath) {
        r=c.x;
        n=c.y;
      }
    }s.attr("transform",`translate(${r}, ${n+subGraphTitleTotalMargin/2})`)
  }if(e.startLabelLeft){
    const s=M[e.id].startLeft;
    let r=e.x;
    let n=e.y;
    if(a){
      const c=am.calcTerminalLabelPosition(e.arrowTypeStart?10:0,"start_left",a);
      r=c.x;
      n=c.y;
    }s.attr("transform",`translate(${r}, ${n})`)
  }if(e.startLabelRight){
    const s=M[e.id].startRight;
    let r=e.x;
    let n=e.y;
    if(a){
      const c=am.calcTerminalLabelPosition(e.arrowTypeStart?10:0,"start_right",a);
      r=c.x;
      n=c.y;
    }s.attr("transform",`translate(${r}, ${n})`)
  }if(e.endLabelLeft){
    const s=M[e.id].endLeft;
    let r=e.x;
    let n=e.y;
    if(a){
      const c=am.calcTerminalLabelPosition(e.arrowTypeEnd?10:0,"end_left",a);
      r=c.x;
      n=c.y;
    }s.attr("transform",`translate(${r}, ${n})`)
  }if(e.endLabelRight){
    const s=M[e.id].endRight;
    let r=e.x;
    let n=e.y;
    if(a){
      const c=am.calcTerminalLabelPosition(e.arrowTypeEnd?10:0,"end_right",a);
      r=c.x;
      n=c.y;
    }s.attr("transform",`translate(${r}, ${n})`)
  }
},"positionEdgeLabel");

const hr=a2((e,t)=>{
  const a=e.x;
  const i=e.y;
  const l=Math.abs(t.x-a);
  const s=Math.abs(t.y-i);
  const r=e.width/2;
  const n=e.height/2;
  return l>=r||s>=n
},"outsideNode");

const dr=a2((e,t,a)=>{
  a9.debug(`intersection calc abc89:
    outsidePoint: ${JSON.stringify(t)}
    insidePoint : ${JSON.stringify(a)}
    node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i=e.x;
  const l=e.y;
  const s=Math.abs(i-a.x);
  const r=e.width/2;
  let n=a.x<t.x?r-s:r+s;
  const c=e.height/2;
  const u=Math.abs(t.y-a.y);
  const o=Math.abs(t.x-a.x);
  if(Math.abs(l-t.y)*r>Math.abs(i-t.x)*c){
    let x=a.y<t.y?t.y-c-l:l-c-t.y;n=o*x/u;const w={x:a.x<t.x?a.x+n:a.x-o+n,y:a.y<t.y?a.y+u-x:a.y-u+x};

    if (n===0) {
      w.x=t.x;
      w.y=t.y;
    }

    if (o===0) {
      (w.x = t.x);
    }

    if (u===0) {
      (w.y = t.y);
    }

    a9.debug(`abc89 topp/bott calc, Q ${u}, q ${x}, R ${o}, r ${n}`,w);
    return w;
  }else{
    if (a.x<t.x) {
      n=t.x-r-i;
    } else {
      n=i-r-t.x;
    }

    let x=u*n/o;
    let w=a.x<t.x?a.x+o-n:a.x-o+n;
    let b=a.y<t.y?a.y+x:a.y-x;
    a9.debug(`sides calc abc89, Q ${u}, q ${x}, R ${o}, r ${n}`,{_x:w,_y:b});

    if (n===0) {
      w=t.x;
      b=t.y;
    }

    if (o===0) {
      (w = t.x);
    }

    if (u===0) {
      (b = t.y);
    }

    return {x:w,y:b};
  }
},"intersection");

const Rt=a2((e,t)=>{
  a9.debug("abc88 cutPathAtIntersect",e,t);
  let a=[];
  let i=e[0];
  let l=false;

  e.forEach(s=>{if (!hr(t,s)&&!l) {
    const r=dr(t,i,s);let n=false;
    a.forEach(c=>{n=n||c.x===r.x&&c.y===r.y});

    if (!a.some(c => c.x===r.x&&c.y===r.y)) {
      a.push(r);
    }

    l=true;
  } else {
    i=s;

    if (!l) {
      a.push(s);
    }
  }});

  return a;
},"cutPathAtIntersect");

const gr=a2((e, t, a, i, l, s, r) => {
  let n=a.points;a9.debug("abc88 InsertEdge: edge=",a,"e=",t);let c=false;const u=s.node(t.v);const o=s.node(t.w);

  if (o?.intersect&&u?.intersect) {
    n=n.slice(1,a.points.length-1);
    n.unshift(u.intersect(n[0]));
    n.push(o.intersect(n[n.length-1]));
  }

  if (a.toCluster) {
    a9.debug("to cluster abc88",i[a.toCluster]);
    n=Rt(a.points,i[a.toCluster].node);
    c=true;
  }

  if (a.fromCluster) {
    a9.debug("from cluster abc88",i[a.fromCluster]);
    n=Rt(n.reverse(),i[a.fromCluster].node).reverse();
    c=true;
  }

  const x=n.filter(y => !Number.isNaN(y.y));let w=b2;

  if (a.curve&&(l==="graph"||l==="flowchart")) {
    (w = a.curve);
  }

  const {x: x_1,y}=be_1(a);
  const v=b1().x(x_1).y(y).curve(w);
  let k;switch(a.thickness){case "normal":
      {
        k="edge-thickness-normal";break;
      }case "thick":
      {
        k="edge-thickness-thick";break;
      }case "invisible":
      {
        k="edge-thickness-thick";break;
      }default:
      {
        k=""
      }}switch(a.pattern){case "solid":
      {
        k+=" edge-pattern-solid";break;
      }case "dotted":
      {
        k+=" edge-pattern-dotted";break;
      }case "dashed":
      {
        k+=" edge-pattern-dashed";break
      }}const B=e.append("path").attr("d",v(x)).attr("id",a.id).attr("class",` ${k}${a.classes?` ${a.classes}`:""}`).attr("style",a.style);let _="";

  if ((a7().flowchart.arrowMarkerAbsolute || a7().state.arrowMarkerAbsolute)) {
    (_ = a(true));
  }

  nr(B,a,_,r,l);
  let D={};

  if (c) {
    (D.updatedPath = n);
  }

  D.originalPath=a.points;
  return D;
},"insertEdge");

const ur=a2(e=>{const t=new Set;for (const a of e) {
  switch(a){case "x":
    {
      t.add("right");
      t.add("left");
      break;
    }case "y":
    {
      t.add("up");
      t.add("down");
      break;
    }default:
    {
      t.add(a);break
    }}
}return t},"expandAndDeduplicateDirections");

const pr=a2((e,t,a)=>{
  const i=ur(e);
  const l=2;
  const s=t.height+2*a.padding;
  const r=s/l;
  const n=t.width+2*r+a.padding;
  const c=a.padding/2;

  if (i.has("right")&&i.has("left")&&i.has("up")&&i.has("down")) {
    return [{x:0,y:0},{x:r,y:0},{x:n/2,y:2*c},{x:n-r,y:0},{x:n,y:0},{x:n,y:-s/3},{x:n+2*c,y:-s/2},{x:n,y:-2*s/3},{x:n,y:-s},{x:n-r,y:-s},{x:n/2,y:-s-2*c},{x:r,y:-s},{x:0,y:-s},{x:0,y:-2*s/3},{x:-2*c,y:-s/2},{x:0,y:-s/3}];
  }

  if (i.has("right")&&i.has("left")&&i.has("up")) {
    return [{x:r,y:0},{x:n-r,y:0},{x:n,y:-s/2},{x:n-r,y:-s},{x:r,y:-s},{x:0,y:-s/2}];
  }

  if (i.has("right")&&i.has("left")&&i.has("down")) {
    return [{x:0,y:0},{x:r,y:-s},{x:n-r,y:-s},{x:n,y:0}];
  }

  if (i.has("right")&&i.has("up")&&i.has("down")) {
    return [{x:0,y:0},{x:n,y:-r},{x:n,y:-s+r},{x:0,y:-s}];
  }

  if (i.has("left")&&i.has("up")&&i.has("down")) {
    return [{x:n,y:0},{x:0,y:-r},{x:0,y:-s+r},{x:n,y:-s}];
  }

  if (i.has("right")&&i.has("left")) {
    return [{x:r,y:0},{x:r,y:-c},{x:n-r,y:-c},{x:n-r,y:0},{x:n,y:-s/2},{x:n-r,y:-s},{x:n-r,y:-s+c},{x:r,y:-s+c},{x:r,y:-s},{x:0,y:-s/2}];
  }

  if (i.has("up")&&i.has("down")) {
    return [{x:n/2,y:0},{x:0,y:-c},{x:r,y:-c},{x:r,y:-s+c},{x:0,y:-s+c},{x:n/2,y:-s},{x:n,y:-s+c},{x:n-r,y:-s+c},{x:n-r,y:-c},{x:n,y:-c}];
  }

  if (i.has("right")&&i.has("up")) {
    return [{x:0,y:0},{x:n,y:-r},{x:0,y:-s}];
  }

  if (i.has("right")&&i.has("down")) {
    return [{x:0,y:0},{x:n,y:0},{x:0,y:-s}];
  }

  if (i.has("left")&&i.has("up")) {
    return [{x:n,y:0},{x:0,y:-r},{x:n,y:-s}];
  }

  if (i.has("left")&&i.has("down")) {
    return [{x:n,y:0},{x:0,y:0},{x:n,y:-s}];
  }

  if (i.has("right")) {
    return [{x:r,y:-c},{x:r,y:-c},{x:n-r,y:-c},{x:n-r,y:0},{x:n,y:-s/2},{x:n-r,y:-s},{x:n-r,y:-s+c},{x:r,y:-s+c},{x:r,y:-s+c}];
  }

  if (i.has("left")) {
    return [{x:r,y:0},{x:r,y:-c},{x:n-r,y:-c},{x:n-r,y:-s+c},{x:r,y:-s+c},{x:r,y:-s},{x:0,y:-s/2}];
  }

  if (i.has("up")) {
    return [{x:r,y:-c},{x:r,y:-s+c},{x:0,y:-s+c},{x:n/2,y:-s},{x:n,y:-s+c},{x:n-r,y:-s+c},{x:n-r,y:-c}];
  }

  if (i.has("down")) {
    return [{x:n/2,y:0},{x:0,y:-c},{x:r,y:-c},{x:r,y:-s+c},{x:n-r,y:-s+c},{x:n-r,y:-c},{x:n,y:-c}];
  }

  return [{x:0,y:0}];
},"getArrowPoints");

function Gt(e,t){return e.intersect(t)}a2(Gt,"intersectNode");const fr=Gt;function Zt(e,t,a,i){
  const l=e.x;
  const s=e.y;
  const r=l-i.x;
  const n=s-i.y;
  const c=Math.sqrt(t*t*n*n+a*a*r*r);
  let u=Math.abs(t*a*r/c);

  if (i.x<l) {
    (u = -u);
  }

  let o=Math.abs(t*a*n/c);

  if (i.y<s) {
    (o = -o);
  }

  return {x:l+u,y:s+o};
}a2(Zt,"intersectEllipse");const qt=Zt;function Jt(e,t,a){return qt(e,t,t,a)}a2(Jt,"intersectCircle");const xr=Jt;function Qt(e,t,a,i){
  let l;
  let s;
  let r;
  let n;
  let c;
  let u;
  let o;
  let x;
  let w;
  let b;
  let S;
  let v;
  let k;
  let B;
  let _;
  l=t.y-e.y;
  r=e.x-t.x;
  c=t.x*e.y-e.x*t.y;
  w=l*a.x+r*a.y+c;
  b=l*i.x+r*i.y+c;

  if (!(w!==0&&b!==0&&St(w,b))&&(s=i.y-a.y,n=a.x-i.x,u=i.x*a.y-a.x*i.y,o=s*e.x+n*e.y+u,x=s*t.x+n*t.y+u,!(o!==0&&x!==0&&St(o,x))&&(S=l*n-s*r,S!==0))) {
    v=Math.abs(S/2);
    k=r*u-n*c;
    B=k<0?(k-v)/S:(k+v)/S;
    k=s*c-l*u;
    _=k<0?(k-v)/S:(k+v)/S;
    return {x:B,y:_};
  }
}a2(Qt,"intersectLine");function St(e,t){return e*t>0}a2(St,"sameSign");
const yr=Qt;
const br=$t;
function $t(e,t,a){
  const i=e.x;
  const l=e.y;
  const s=[];
  let r=Number.POSITIVE_INFINITY;
  let n=Number.POSITIVE_INFINITY;

  if (typeof t.forEach=="function") {
    t.forEach(S => {
      r=Math.min(r,S.x);
      n=Math.min(n,S.y);
    });
  } else {
    r=Math.min(r,t.x);
    n=Math.min(n,t.y);
  }

  const c=i-e.width/2-r;
  const u=l-e.height/2-n;

  t.forEach((x, o) => {
    const w=t[o<t.length-1?o+1:0];
    const b=yr(e,a,{x:c+x.x,y:u+x.y},{x:c+w.x,y:u+w.y});

    if (b) {
      s.push(b);
    }
  });

  return s.length?(s.length>1&&s.sort((S, v) => {
      const k=S.x-a.x;
      const B=S.y-a.y;
      const _=Math.sqrt(k*k+B*B);
      const D=v.x-a.x;
      const y=v.y-a.y;
      const g=Math.sqrt(D*D+y*y);
      return _<g?-1:_===g?0:1
    }),s[0]):e;
}a2($t,"intersectPolygon");

const wr=a2((e,t)=>{
  const a=e.x;
  const i=e.y;
  const l=t.x-a;
  const s=t.y-i;
  let r=e.width/2;
  let n=e.height/2;
  let c;
  let u;

  if (Math.abs(s)*r>Math.abs(l)*n) {
    s<0&&(n=-n);
    c=s===0?0:n*l/s;
    u=n;
  } else {
    l<0&&(r=-r);
    c=r;
    u=l===0?0:r*s/l;
  }

  return {x:a+c,y:i+u};
},"intersectRect");

const mr=wr;
const N={node:fr,circle:xr,ellipse:qt,polygon:br,rect:mr};

const A=a2(async(e,t,a,i)=>{
  const l=a7();let s;const r=t.useHtmlLabels||bf(l.flowchart.htmlLabels);

  if (a) {
    s=a;
  } else {
    s="node default";
  }

  const n=e.insert("g").attr("class",s).attr("id",t.domId||t.id);
  const c=n.insert("g").attr("class","label").attr("style",t.labelStyle);
  let u;

  if (t.labelText===void 0) {
    u="";
  } else {
    u=typeof t.labelText=="string"?t.labelText:t.labelText[0];
  }

  const o=c.node();let x;

  if (t.labelType==="markdown") {
    x=bg(c,ad(bj(u),l),{useHtmlLabels:r,width:t.width||l.flowchart.wrappingWidth,classes:"markdown-node-label"},l);
  } else {
    x=o.appendChild(await K(ad(bj(u),l),t.labelStyle,false,i));
  }

  let w=x.getBBox();const b=t.padding/2;if(bf(l.flowchart.htmlLabels)){
      const S=x.children[0];
      const v=a8(x);
      const k=S.getElementsByTagName("img");
      if(k){const B=u.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...k].map(_ => new Promise(D=>{
        function y(){
          _.style.display="flex";
          _.style.flexDirection="column";

          if (B) {
            const g=l.fontSize?l.fontSize:window.getComputedStyle(document.body).fontSize;
            const m=`${parseInt(g,10)*5}px`;
            _.style.minWidth=m;
            _.style.maxWidth=m;
          } else {
            _.style.width="100%";
          }

          D(_)
        }
        a2(y,"setupImage");
        setTimeout(()=>{
          if (_.complete) {
            y();
          }
        });
        _.addEventListener("error",y);
        _.addEventListener("load",y);
      })))}
      w=S.getBoundingClientRect();
      v.attr("width",w.width);
      v.attr("height",w.height);
    }

  if (r) {
    c.attr("transform",`translate(${-w.width/2}, ${-w.height/2})`);
  } else {
    c.attr("transform",`translate(0, ${-w.height/2})`);
  }

  if (t.centerLabel) {
    c.attr("transform",`translate(${-w.width/2}, ${-w.height/2})`);
  }

  c.insert("rect",":first-child");
  return {shapeSvg:n,bbox:w,halfPadding:b,label:c};
},"labelHelper");

const T=a2((e,t)=>{
  const a=t.node().getBBox();
  e.width=a.width;
  e.height=a.height;
},"updateNodeBounds");

function U(e,t,a,i){return e.insert("polygon",":first-child").attr("points",i.map(l => `${l.x},${l.y}`).join(" ")).attr("class","label-container").attr("transform",`translate(${-t/2},${a/2})`);}a2(U,"insertPolygonShape");

const Lr=a2(async(e,t)=>{
  if (!t.useHtmlLabels && !a7().flowchart.htmlLabels) {
    (t.centerLabel = true);
  }

  const{shapeSvg,bbox,halfPadding}=await A(e,t,`node ${t.classes}`,true);a9.info("Classes = ",t.classes);const r=shapeSvg.insert("rect",":first-child");
  r.attr("rx",t.rx).attr("ry",t.ry).attr("x",-bbox.width/2-halfPadding).attr("y",-bbox.height/2-halfPadding).attr("width",bbox.width+t.padding).attr("height",bbox.height+t.padding);
  T(t,r);
  t.intersect=n => N.rect(t,n);
  return shapeSvg;
},"note");

const Sr=Lr;

const zt=a2(e => e?` ${e}`:"","formatClass");

const Y=a2((e, t) => `${t||"node default"}${zt(e.classes)} ${zt(e.class)}`,"getClassesFromNode");

const At=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t,void 0),true);
  const l=bbox.width+t.padding;
  const s=bbox.height+t.padding;
  const r=l+s;
  const n=[{x:r/2,y:0},{x:r,y:-r/2},{x:r/2,y:-r},{x:0,y:-r/2}];
  a9.info("Question main (Circle)");const c=U(shapeSvg,r,r,n);
  c.attr("style",t.style);
  T(t,c);

  t.intersect=u => {
    a9.warn("Intersect called");
    return N.polygon(t,n,u);
  };

  return shapeSvg;
},"question");

const kr=a2((e,t)=>{
  const a=e.insert("g").attr("class","node default").attr("id",t.domId||t.id);
  const i=28;
  const l=[{x:0,y:i/2},{x:i/2,y:0},{x:0,y:-i/2},{x:-i/2,y:0}];
  a.insert("polygon",":first-child").attr("points",l.map(r => `${r.x},${r.y}`).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28);
  t.width=28;
  t.height=28;
  t.intersect=r => N.circle(t,14,r);
  return a;
},"choice");

const vr=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t,void 0),true);
  const l=4;
  const s=bbox.height+t.padding;
  const r=s/l;
  const n=bbox.width+2*r+t.padding;
  const c=[{x:r,y:0},{x:n-r,y:0},{x:n,y:-s/2},{x:n-r,y:-s},{x:r,y:-s},{x:0,y:-s/2}];
  const u=U(shapeSvg,n,s,c);
  u.attr("style",t.style);
  T(t,u);
  t.intersect=o => N.polygon(t,c,o);
  return shapeSvg;
},"hexagon");

const Er=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,void 0,true);
  const l=2;
  const s=bbox.height+2*t.padding;
  const r=s/l;
  const n=bbox.width+2*r+t.padding;
  const c=pr(t.directions,bbox,t);
  const u=U(shapeSvg,n,s,c);
  u.attr("style",t.style);
  T(t,u);
  t.intersect=o => N.polygon(t,c,o);
  return shapeSvg;
},"block_arrow");

const _r=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t,void 0),true);
  const l=bbox.width+t.padding;
  const s=bbox.height+t.padding;
  const r=[{x:-s/2,y:0},{x:l,y:0},{x:l,y:-s},{x:-s/2,y:-s},{x:0,y:-s/2}];
  U(shapeSvg,l,s,r).attr("style",t.style);
  t.width=l+s;
  t.height=s;
  t.intersect=c => N.polygon(t,r,c);
  return shapeSvg;
},"rect_left_inv_arrow");

const Dr=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t),true);
  const l=bbox.width+t.padding;
  const s=bbox.height+t.padding;
  const r=[{x:-2*s/6,y:0},{x:l-s/6,y:0},{x:l+2*s/6,y:-s},{x:s/6,y:-s}];
  const n=U(shapeSvg,l,s,r);
  n.attr("style",t.style);
  T(t,n);
  t.intersect=c => N.polygon(t,r,c);
  return shapeSvg;
},"lean_right");

const Nr=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t,void 0),true);
  const l=bbox.width+t.padding;
  const s=bbox.height+t.padding;
  const r=[{x:2*s/6,y:0},{x:l+s/6,y:0},{x:l-2*s/6,y:-s},{x:-s/6,y:-s}];
  const n=U(shapeSvg,l,s,r);
  n.attr("style",t.style);
  T(t,n);
  t.intersect=c => N.polygon(t,r,c);
  return shapeSvg;
},"lean_left");

const Tr=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t,void 0),true);
  const l=bbox.width+t.padding;
  const s=bbox.height+t.padding;
  const r=[{x:-2*s/6,y:0},{x:l+2*s/6,y:0},{x:l-s/6,y:-s},{x:s/6,y:-s}];
  const n=U(shapeSvg,l,s,r);
  n.attr("style",t.style);
  T(t,n);
  t.intersect=c => N.polygon(t,r,c);
  return shapeSvg;
},"trapezoid");

const Br=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t,void 0),true);
  const l=bbox.width+t.padding;
  const s=bbox.height+t.padding;
  const r=[{x:s/6,y:0},{x:l-s/6,y:0},{x:l+2*s/6,y:-s},{x:-2*s/6,y:-s}];
  const n=U(shapeSvg,l,s,r);
  n.attr("style",t.style);
  T(t,n);
  t.intersect=c => N.polygon(t,r,c);
  return shapeSvg;
},"inv_trapezoid");

const Cr=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t,void 0),true);
  const l=bbox.width+t.padding;
  const s=bbox.height+t.padding;
  const r=[{x:0,y:0},{x:l+s/2,y:0},{x:l,y:-s/2},{x:l+s/2,y:-s},{x:0,y:-s}];
  const n=U(shapeSvg,l,s,r);
  n.attr("style",t.style);
  T(t,n);
  t.intersect=c => N.polygon(t,r,c);
  return shapeSvg;
},"rect_right_inv_arrow");

const Ir=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t,void 0),true);
  const l=bbox.width+t.padding;
  const s=l/2;
  const r=s/(2.5+l/50);
  const n=bbox.height+r+t.padding;
  const c=`M 0,${r} a ${s},${r} 0,0,0 ${l} 0 a ${s},${r} 0,0,0 ${-l} 0 l 0,${n} a ${s},${r} 0,0,0 ${l} 0 l 0,${-n}`;
  const u=shapeSvg.attr("label-offset-y",r).insert("path",":first-child").attr("style",t.style).attr("d",c).attr("transform",`translate(${-l/2},${-(n/2+r)})`);
  T(t,u);

  t.intersect=o => {
    const x=N.rect(t,o);
    const w=x.x-t.x;
    if(s!=0&&(Math.abs(w)<t.width/2||Math.abs(w)==t.width/2&&Math.abs(x.y-t.y)>t.height/2-r)){
      let b=r*r*(1-w*w/(s*s));

      if (b!=0) {
        (b = Math.sqrt(b));
      }

      b=r-b;

      if (o.y-t.y>0) {
        (b = -b);
      }

      x.y+=b;
    }return x
  };

  return shapeSvg;
},"cylinder");

const Or=a2(async(e,t)=>{
  const {shapeSvg,bbox,halfPadding}=await A(e,t,`node ${t.classes} ${t.class}`,true);
  const s=shapeSvg.insert("rect",":first-child");
  const r=t.positioned?t.width:bbox.width+t.padding;
  const n=t.positioned?t.height:bbox.height+t.padding;
  const c=t.positioned?-r/2:-bbox.width/2-halfPadding;
  const u=t.positioned?-n/2:-bbox.height/2-halfPadding;
  s.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",c).attr("y",u).attr("width",r).attr("height",n);

  if (t.props) {
    const o=new Set(Object.keys(t.props));

    if (t.props.borders) {
      ht(s,t.props.borders,r,n);
      o.delete("borders");
    }

    o.forEach(x=>{a9.warn(`Unknown node property ${x}`)});
  }

  T(t,s);
  t.intersect=o => N.rect(t,o);
  return shapeSvg;
},"rect");

const Rr=a2(async(e,t)=>{
  const {shapeSvg,bbox,halfPadding}=await A(e,t,`node ${t.classes}`,true);
  const s=shapeSvg.insert("rect",":first-child");
  const r=t.positioned?t.width:bbox.width+t.padding;
  const n=t.positioned?t.height:bbox.height+t.padding;
  const c=t.positioned?-r/2:-bbox.width/2-halfPadding;
  const u=t.positioned?-n/2:-bbox.height/2-halfPadding;
  s.attr("class","basic cluster composite label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",c).attr("y",u).attr("width",r).attr("height",n);

  if (t.props) {
    const o=new Set(Object.keys(t.props));

    if (t.props.borders) {
      ht(s,t.props.borders,r,n);
      o.delete("borders");
    }

    o.forEach(x=>{a9.warn(`Unknown node property ${x}`)});
  }

  T(t,s);
  t.intersect=o => N.rect(t,o);
  return shapeSvg;
},"composite");

const zr=a2(async(e,t)=>{
  const{shapeSvg}=await A(e,t,"label",true);a9.trace("Classes = ",t.class);
  const i=shapeSvg.insert("rect",":first-child");
  const l=0;
  const s=0;
  i.attr("width",l).attr("height",s);
  shapeSvg.attr("class","label edgeLabel");

  if (t.props) {
    const r=new Set(Object.keys(t.props));

    if (t.props.borders) {
      ht(i,t.props.borders,l,s);
      r.delete("borders");
    }

    r.forEach(n=>{a9.warn(`Unknown node property ${n}`)});
  }

  T(t,i);
  t.intersect=r => N.rect(t,r);
  return shapeSvg;
},"labelRect");

function ht(e,t,a,i){
  const l=[];
  const s=a2(n=>{l.push(n,0)},"addBorder");
  const r=a2(n=>{l.push(0,n)},"skipBorder");

  if (t.includes("t")) {
    a9.debug("add top border");
    s(a);
  } else {
    r(a);
  }

  if (t.includes("r")) {
    a9.debug("add right border");
    s(i);
  } else {
    r(i);
  }

  if (t.includes("b")) {
    a9.debug("add bottom border");
    s(a);
  } else {
    r(a);
  }

  if (t.includes("l")) {
    a9.debug("add left border");
    s(i);
  } else {
    r(i);
  }

  e.attr("stroke-dasharray",l.join(" "));
}a2(ht,"applyNodePropertyBorders");

const Ar=a2(async(e,t)=>{
  let a;

  if (t.classes) {
    a=`node ${t.classes}`;
  } else {
    a="node default";
  }

  const i=e.insert("g").attr("class",a).attr("id",t.domId||t.id);
  const l=i.insert("rect",":first-child");
  const s=i.insert("line");
  const r=i.insert("g").attr("class","label");
  const n=t.labelText.flat?t.labelText.flat():t.labelText;
  let c="";

  if (typeof n=="object") {
    c=n[0];
  } else {
    c=n;
  }

  a9.info("Label text abc79",c,n,typeof n=="object");
  const u=r.node().appendChild(await K(c,t.labelStyle,true,true));let o={width:0,height:0};if(bf(a7().flowchart.htmlLabels)){
      const v=u.children[0];
      const k=a8(u);
      o=v.getBoundingClientRect();
      k.attr("width",o.width);
      k.attr("height",o.height);
    }a9.info("Text 2",n);const x=n.slice(1,n.length);let w=u.getBBox();const b=r.node().appendChild(await K(x.join?x.join("<br/>"):x,t.labelStyle,true,true));if(bf(a7().flowchart.htmlLabels)){
      const v=b.children[0];
      const k=a8(b);
      o=v.getBoundingClientRect();
      k.attr("width",o.width);
      k.attr("height",o.height);
    }const S=t.padding/2;
  a8(b).attr("transform",`translate( ${o.width>w.width?0:(w.width-o.width)/2}, ${w.height+S+5})`);
  a8(u).attr("transform",`translate( ${o.width<w.width?0:-(w.width-o.width)/2}, 0)`);
  o=r.node().getBBox();
  r.attr("transform",`translate(${-o.width/2}, ${-o.height/2-S+3})`);
  l.attr("class","outer title-state").attr("x",-o.width/2-S).attr("y",-o.height/2-S).attr("width",o.width+t.padding).attr("height",o.height+t.padding);
  s.attr("class","divider").attr("x1",-o.width/2-S).attr("x2",o.width/2+S).attr("y1",-o.height/2-S+w.height+S).attr("y2",-o.height/2-S+w.height+S);
  T(t,l);
  t.intersect=v => N.rect(t,v);
  return i;
},"rectWithTitle");

const Mr=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t,void 0),true);
  const l=bbox.height+t.padding;
  const s=bbox.width+l/4+t.padding;
  const r=shapeSvg.insert("rect",":first-child").attr("style",t.style).attr("rx",l/2).attr("ry",l/2).attr("x",-s/2).attr("y",-l/2).attr("width",s).attr("height",l);
  T(t,r);
  t.intersect=n => N.rect(t,n);
  return shapeSvg;
},"stadium");

const Fr=a2(async(e,t)=>{
  const {shapeSvg,bbox,halfPadding}=await A(e,t,Y(t,void 0),true);
  const s=shapeSvg.insert("circle",":first-child");
  s.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",bbox.width/2+halfPadding).attr("width",bbox.width+t.padding).attr("height",bbox.height+t.padding);
  a9.info("Circle main");
  T(t,s);

  t.intersect=r => {
    a9.info("Circle intersect",t,bbox.width/2+halfPadding,r);
    return N.circle(t,bbox.width/2+halfPadding,r);
  };

  return shapeSvg;
},"circle");

const Wr=a2(async(e,t)=>{
  const {shapeSvg,bbox,halfPadding}=await A(e,t,Y(t,void 0),true);
  const s=5;
  const r=shapeSvg.insert("g",":first-child");
  const n=r.insert("circle");
  const c=r.insert("circle");
  r.attr("class",t.class);
  n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",bbox.width/2+halfPadding+s).attr("width",bbox.width+t.padding+s*2).attr("height",bbox.height+t.padding+s*2);
  c.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",bbox.width/2+halfPadding).attr("width",bbox.width+t.padding).attr("height",bbox.height+t.padding);
  a9.info("DoubleCircle main");
  T(t,n);

  t.intersect=u => {
    a9.info("DoubleCircle intersect",t,bbox.width/2+halfPadding+s,u);
    return N.circle(t,bbox.width/2+halfPadding+s,u);
  };

  return shapeSvg;
},"doublecircle");

const Pr=a2(async(e,t)=>{
  const {shapeSvg,bbox}=await A(e,t,Y(t,void 0),true);
  const l=bbox.width+t.padding;
  const s=bbox.height+t.padding;
  const r=[{x:0,y:0},{x:l,y:0},{x:l,y:-s},{x:0,y:-s},{x:0,y:0},{x:-8,y:0},{x:l+8,y:0},{x:l+8,y:-s},{x:-8,y:-s},{x:-8,y:0}];
  const n=U(shapeSvg,l,s,r);
  n.attr("style",t.style);
  T(t,n);
  t.intersect=c => N.polygon(t,r,c);
  return shapeSvg;
},"subroutine");

const Yr=a2((e,t)=>{
  const a=e.insert("g").attr("class","node default").attr("id",t.domId||t.id);
  const i=a.insert("circle",":first-child");
  i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14);
  T(t,i);
  t.intersect=l => N.circle(t,7,l);
  return a;
},"start");

const Mt=a2((e,t,a)=>{
  const i=e.insert("g").attr("class","node default").attr("id",t.domId||t.id);
  let l=70;
  let s=10;

  if (a==="LR") {
    l=10;
    s=70;
  }

  const r=i.append("rect").attr("x",-1*l/2).attr("y",-1*s/2).attr("width",l).attr("height",s).attr("class","fork-join");
  T(t,r);
  t.height=t.height+t.padding/2;
  t.width=t.width+t.padding/2;
  t.intersect=n => N.rect(t,n);
  return i;
},"forkJoin");

const Hr=a2((e,t)=>{
  const a=e.insert("g").attr("class","node default").attr("id",t.domId||t.id);
  const i=a.insert("circle",":first-child");
  const l=a.insert("circle",":first-child");
  l.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14);
  i.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10);
  T(t,l);
  t.intersect=s => N.circle(t,7,s);
  return a;
},"end");

const Kr=a2(async(e,t)=>{
  const a=t.padding/2;
  const i=4;
  const l=8;
  let s;

  if (t.classes) {
    s=`node ${t.classes}`;
  } else {
    s="node default";
  }

  const r=e.insert("g").attr("class",s).attr("id",t.domId||t.id);
  const n=r.insert("rect",":first-child");
  const c=r.insert("line");
  const u=r.insert("line");
  let o=0;
  let x=i;
  const w=r.insert("g").attr("class","label");let b=0;
  const S=t.classData.annotations?.[0];
  const v=t.classData.annotations[0]?`«${t.classData.annotations[0]}»`:"";
  const k=w.node().appendChild(await K(v,t.labelStyle,true,true));
  let B=k.getBBox();if(bf(a7().flowchart.htmlLabels)){
      const E=k.children[0];
      const h=a8(k);
      B=E.getBoundingClientRect();
      h.attr("width",B.width);
      h.attr("height",B.height);
    }

  if (t.classData.annotations[0]) {
    x+=B.height+i;
    o+=B.width;
  }

  let _=t.classData.label;

  if (t.classData.type!==void 0&&t.classData.type!=="") {
    if (a7().flowchart.htmlLabels) {
      _+=`&lt;${t.classData.type}&gt;`;
    } else {
      _+=`<${t.classData.type}>`;
    }
  }

  const D=w.node().appendChild(await K(_,t.labelStyle,true,true));a8(D).attr("class","classTitle");let y=D.getBBox();if(bf(a7().flowchart.htmlLabels)){
      const E=D.children[0];
      const h=a8(D);
      y=E.getBoundingClientRect();
      h.attr("width",y.width);
      h.attr("height",y.height);
    }
  x+=y.height+i;

  if (y.width>o) {
    (o = y.width);
  }

  const g=[];

  t.classData.members.forEach(async E=>{
    const h=E.getDisplayDetails();let W=h.displayText;

    if (a7().flowchart.htmlLabels) {
      (W = W.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
    }

    const p=w.node().appendChild(await K(W,h.cssStyle?h.cssStyle:t.labelStyle,true,true));let I=p.getBBox();if(bf(a7().flowchart.htmlLabels)){
        const Z=p.children[0];
        const V=a8(p);
        I=Z.getBoundingClientRect();
        V.attr("width",I.width);
        V.attr("height",I.height);
      }

    if (I.width>o) {
      (o = I.width);
    }

    x+=I.height+i;
    g.push(p);
  });

  x+=l;
  const f=[];

  t.classData.methods.forEach(async E=>{
    const h=E.getDisplayDetails();let W=h.displayText;

    if (a7().flowchart.htmlLabels) {
      (W = W.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
    }

    const p=w.node().appendChild(await K(W,h.cssStyle?h.cssStyle:t.labelStyle,true,true));let I=p.getBBox();if(bf(a7().flowchart.htmlLabels)){
        const Z=p.children[0];
        const V=a8(p);
        I=Z.getBoundingClientRect();
        V.attr("width",I.width);
        V.attr("height",I.height);
      }

    if (I.width>o) {
      (o = I.width);
    }

    x+=I.height+i;
    f.push(p);
  });

  x+=l;

  if (S) {
    let E=(o-B.width)/2;
    a8(k).attr("transform",`translate( ${-1*o/2+E}, ${-1*x/2})`);
    b=B.height+i;
  }

  let m=(o-y.width)/2;
  a8(D).attr("transform",`translate( ${-1*o/2+m}, ${-1*x/2+b})`);
  b+=y.height+i;
  c.attr("class","divider").attr("x1",-o/2-a).attr("x2",o/2+a).attr("y1",-x/2-a+l+b).attr("y2",-x/2-a+l+b);
  b+=l;
  g.forEach(E=>{a8(E).attr("transform",`translate( ${-o/2}, ${-1*x/2+b+l/2})`);const h=E?.getBBox();b+=(h?.height??0)+i});
  b+=l;
  u.attr("class","divider").attr("x1",-o/2-a).attr("x2",o/2+a).attr("y1",-x/2-a+l+b).attr("y2",-x/2-a+l+b);
  b+=l;
  f.forEach(E=>{a8(E).attr("transform",`translate( ${-o/2}, ${-1*x/2+b})`);const h=E?.getBBox();b+=(h?.height??0)+i});
  n.attr("style",t.style).attr("class","outer title-state").attr("x",-o/2-a).attr("y",-(x/2)-a).attr("width",o+t.padding).attr("height",x+t.padding);
  T(t,n);
  t.intersect=E => N.rect(t,E);
  return r;
},"class_box");

const Ft={rhombus:At,composite:Rr,question:At,rect:Or,labelRect:zr,rectWithTitle:Ar,choice:kr,circle:Fr,doublecircle:Wr,stadium:Mr,hexagon:vr,block_arrow:Er,rect_left_inv_arrow:_r,lean_right:Dr,lean_left:Nr,trapezoid:Tr,inv_trapezoid:Br,rect_right_inv_arrow:Cr,cylinder:Ir,start:Yr,end:Hr,note:Sr,subroutine:Pr,fork:Mt,join:Mt,class_box:Kr};
const lt={};

const te=a2(async(e,t,a)=>{
  let i;
  let l;
  if (t.link) {
    let s;

    if (a7().securityLevel==="sandbox") {
      s="_top";
    } else if (t.linkTarget) {
      (s = t.linkTarget||"_blank");
    }

    i=e.insert("svg:a").attr("xlink:href",t.link).attr("target",s);
    l=await Ft[t.shape](i,t,a);
  } else {
    l=await Ft[t.shape](e,t,a);
    i=l;
  }

  if (t.tooltip) {
    l.attr("title",t.tooltip);
  }

  if (t.class) {
    l.attr("class",`node default ${t.class}`);
  }

  lt[t.id]=i;

  if (t.haveCallback) {
    lt[t.id].attr("class",`${lt[t.id].attr("class")} clickable`);
  }

  return i;
},"insertNode");

const Xr=a2(e=>{
  const t=lt[e.id];a9.trace("Transforming node",e.diff,e,`translate(${e.x-e.width/2-5}, ${e.width/2})`);
  const a=8;
  const i=e.diff||0;

  if (e.clusterNode) {
    t.attr("transform",`translate(${e.x+i-e.width/2}, ${e.y-e.height/2-a})`);
  } else {
    t.attr("transform",`translate(${e.x}, ${e.y})`);
  }

  return i;
},"positionNode");

function Dt(e,t,a=false){
  const i=e;let l="default";

  if ((i?.classes?.length||0)>0) {
    (l = (i?.classes??[]).join(" "));
  }

  l=`${l} flowchart-label`;
  let s=0;
  let r="";
  let n;
  switch(i.type){case "round":
    {
      s=5;
      r="rect";
      break;
    }case "composite":
    {
      s=0;
      r="composite";
      n=0;
      break;
    }case "square":
    {
      r="rect";break;
    }case "diamond":
    {
      r="question";break;
    }case "hexagon":
    {
      r="hexagon";break;
    }case "block_arrow":
    {
      r="block_arrow";break;
    }case "odd":
    {
      r="rect_left_inv_arrow";break;
    }case "lean_right":
    {
      r="lean_right";break;
    }case "lean_left":
    {
      r="lean_left";break;
    }case "trapezoid":
    {
      r="trapezoid";break;
    }case "inv_trapezoid":
    {
      r="inv_trapezoid";break;
    }case "rect_left_inv_arrow":
    {
      r="rect_left_inv_arrow";break;
    }case "circle":
    {
      r="circle";break;
    }case "ellipse":
    {
      r="ellipse";break;
    }case "stadium":
    {
      r="stadium";break;
    }case "subroutine":
    {
      r="subroutine";break;
    }case "cylinder":
    {
      r="cylinder";break;
    }case "group":
    {
      r="rect";break;
    }case "doublecircle":
    {
      r="doublecircle";break;
    }default:
    {
      r="rect"
    }}
  const c=bk(i?.styles??[]);
  const u=i.label;
  const o=i.size??{width:0,height:0,x:0,y:0};
  return {labelStyle:c.labelStyle,shape:r,labelText:u,rx:s,ry:s,class:l,style:c.style,id:i.id,directions:i.directions,width:o.width,height:o.height,x:o.x,y:o.y,positioned:a,intersect:void 0,type:i.type,padding:n??aB()?.block?.padding??0};
}a2(Dt,"getNodeFromBlock");async function ee(e,t,a){
  const i=Dt(t,a,false);if (i.type==="group") {
    return;
  }
  const l=aB();
  const s=await te(e,i,{config:l});
  const r=s.node().getBBox();
  const n=a.getBlock(i.id);
  n.size={width:r.width,height:r.height,x:0,y:0,node:s};
  a.setBlock(n);
  s.remove();
}a2(ee,"calculateBlockSize");async function re(e,t,a){const i=Dt(t,a,true);if(a.getBlock(i.id).type!=="space"){
  const s=aB();
  await te(e,i,{config:s});
  t.intersect=i?.intersect;
  Xr(i);
}}a2(re,"insertBlockPositioned");async function dt(e,t,a,i){for (const l of t) {
  await i(e,l,a);

  if (l.children) {
    (await dt(e,l.children,a,i));
  }
}}a2(dt,"performOperations");async function ae(e,t,a){await dt(e,t,a,ee)}a2(ae,"calculateBlockSizes");async function se(e,t,a){await dt(e,t,a,re)}a2(se,"insertBlocks");async function ie(e,t,a,i,l){const s=new G({multigraph:true,compound:true});s.setGraph({rankdir:"TB",nodesep:10,ranksep:10,marginx:8,marginy:8});for (const r of a) {
  if (r.size) {
    s.setNode(r.id,{width:r.size.width,height:r.size.height,intersect:r.intersect});
  }
}for (const r of t) {
  if(r.start&&r.end){
    const n=i.getBlock(r.start);
    const c=i.getBlock(r.end);
    if(n?.size&&c?.size){
      const u=n.size;
      const o=c.size;
      const x=[{x:u.x,y:u.y},{x:u.x+(o.x-u.x)/2,y:u.y+(o.y-u.y)/2},{x:o.x,y:o.y}];
      gr(e,{v:r.start,w:r.end,name:r.id},{...r,arrowTypeEnd:r.arrowTypeEnd,arrowTypeStart:r.arrowTypeStart,points:x,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"},void 0,"block",s,l);

      if (r.label) {
        await cr(e,{...r,label:r.label,labelStyle:"stroke: #333; stroke-width: 1.5px;fill:none;",arrowTypeEnd:r.arrowTypeEnd,arrowTypeStart:r.arrowTypeStart,points:x,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"});
        or({...r,x:x[1].x,y:x[1].y},{originalPath:x});
      }
    }
  }
}}a2(ie,"insertEdges");
const Ur=a2((e, t) => t.db.getClasses(),"getClasses");

const jr=a2(async (e, t, a, i) => {
  const {securityLevel,block}=aB();
  const r=i.db;
  let n;

  if (securityLevel==="sandbox") {
    (n = a8(`#i${t}`));
  }

  const c=securityLevel==="sandbox"?a8(n.nodes()[0].contentDocument.body):a8("body");
  const u=securityLevel==="sandbox"?c.select(`[id="${t}"]`):a8(`[id="${t}"]`);
  ar(u,["point","circle","cross"],i.type,t);
  const x=r.getBlocks();
  const w=r.getBlocksFlat();
  const b=r.getEdges();
  const S=u.insert("g").attr("class","block");
  await ae(S,x,r);const v=jt(r);
  await se(S,x,r);
  await ie(S,b,w,r,t);

  if (v) {
    const k=v;
    const B=Math.max(1,Math.round(0.125/* .125 */*(k.width/k.height)));
    const _=k.height+B+10;
    const D=k.width+10;
    const {useMaxWidth}=block;
    aa(u,_,D,!!useMaxWidth);
    a9.debug("Here Bounds",v,k);
    u.attr("viewBox",`${k.x-5} ${k.y-5} ${k.width+10} ${k.height+10}`);
  }
},"draw");

const Vr={draw:jr,getClasses:Ur};

export const diagram = {parser:ve,db:Ke,renderer:Vr,styles:Ue};
//# sourceMappingURL=blockDiagram-VD42YOAC-DeMLE3EH.js.map

export{diagram as diagram};
//# sourceMappingURL=blockDiagram-VD42YOAC-DeMLE3EH.js.map
