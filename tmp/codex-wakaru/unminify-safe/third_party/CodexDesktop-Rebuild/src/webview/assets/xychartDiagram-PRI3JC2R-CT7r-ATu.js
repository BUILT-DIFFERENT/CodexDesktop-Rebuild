import{a2,a3,a4,ao,an,a5,a6,a9,aE,aa,at,aB,aA,aC,aV,ad,bz,b1}from"./index-CgwAo6pj.js";import{i}from"./init-Gi6I4Gst.js";import{o}from"./ordinal-Cboi1Yqb.js";import{l}from"./linear-BHL9jjBA.js";import"./defaultLocale-C4B-KCzX.js";function Ri(e,t,i){
  e=+e;
  t=+t;
  i=(n=arguments.length)<2?(t=e,e=0,1):n<3?1:+i;
  const o=new Array(n);
  for (var s=-1, n=Math.max(0,Math.ceil((t-e)/i))|0; ++s<n; ) {
    o[s]=e+s*i;
  }return o
}function yt(...args) {
  const e=o().unknown(void 0);
  const t=e.domain;
  const i=e.range;
  let s=0;
  let n=1;
  let o;
  let g;
  let m=false;
  let p=0;
  let k=0;
  let v=0.5/* .5 */;
  delete e.unknown;function C(){
  const b=t().length;
  const E=n<s;
  let D=E?n:s;
  const P=E?s:n;
  o=(P-D)/Math.max(1,b-p+k*2);

  if (m) {
    (o = Math.floor(o));
  }

  D+=(P-D-o*(b-p))*v;
  g=o*(1-p);

  if (m) {
    D=Math.round(D);
    g=Math.round(g);
  }

  const I=Ri(b).map(y => D+o*y);return i(E?I.reverse():I)
}
  e.domain=function(b){return args.length?(t(b),C()):t();};
  e.range=function(b){return args.length?([s,n]=b,s=+s,n=+n,C()):[s,n];};

  e.rangeRound=b => {
    [s,n]=b;
    s=+s;
    n=+n;
    m=true;
    return C();
  };

  e.bandwidth=() => g;
  e.step=() => o;
  e.round=function(b){return args.length?(m=!!b,C()):m;};
  e.padding=function(b){return args.length?(p=Math.min(1,k=+b),C()):p;};
  e.paddingInner=function(b){return args.length?(p=Math.min(1,b),C()):p;};
  e.paddingOuter=function(b){return args.length?(k=+b,C()):k;};
  e.align=function(b){return args.length?(v=Math.max(0,Math.min(1,b)),C()):v;};
  e.copy=() => yt(t(),[s,n]).round(m).paddingInner(p).paddingOuter(k).align(v);
  return i.apply(C(),args);
}const bt = (() => {
  const e=a2((O, h, u, x) => {
    u=u||{};

    for (x=O.length; x--; u[O[x]]=h)
      {}

    return u
  },"o");

  const t=[1,10,12,14,16,18,19,21,23];
  const i=[2,6];
  const s=[1,3];
  const n=[1,5];
  const o=[1,6];
  const g=[1,7];
  const m=[1,5,10,12,14,16,18,19,21,23,34,35,36];
  const p=[1,25];
  const k=[1,26];
  const v=[1,28];
  const C=[1,29];
  const b=[1,30];
  const E=[1,31];
  const D=[1,32];
  const P=[1,33];
  const I=[1,34];
  const y=[1,35];
  const _=[1,36];
  const c=[1,37];
  const W=[1,43];
  const z=[1,42];
  const U=[1,47];
  const X=[1,50];
  const l=[1,10,12,14,16,18,19,21,23,34,35,36];
  const L=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36];
  const S=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50];
  const R=[1,64];

  const $={trace:a2(() => {},"trace"),yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:a2(function(h,u,x,d,w,r,at){const f=r.length-1;switch(w){case 5:
    {
      d.setOrientation(r[f]);break;
    }case 9:
    {
      d.setDiagramTitle(r[f].text.trim());break;
    }case 12:
    {
      d.setLineData({text:"",type:"text"},r[f]);break;
    }case 13:
    {
      d.setLineData(r[f-1],r[f]);break;
    }case 14:
    {
      d.setBarData({text:"",type:"text"},r[f]);break;
    }case 15:
    {
      d.setBarData(r[f-1],r[f]);break;
    }case 16:
    {
      this.$=r[f].trim();
      d.setAccTitle(this.$);
      break;
    }case 17:case 18:
    {
      this.$=r[f].trim();
      d.setAccDescription(this.$);
      break;
    }case 19:
    {
      this.$=r[f-1];break;
    }case 20:
    {
      this.$=[Number(r[f-2]),...r[f]];break;
    }case 21:
    {
      this.$=[Number(r[f])];break;
    }case 22:
    {
      d.setXAxisTitle(r[f]);break;
    }case 23:
    {
      d.setXAxisTitle(r[f-1]);break;
    }case 24:
    {
      d.setXAxisTitle({type:"text",text:""});break;
    }case 25:
    {
      d.setXAxisBand(r[f]);break;
    }case 26:
    {
      d.setXAxisRangeData(Number(r[f-2]),Number(r[f]));break;
    }case 27:
    {
      this.$=r[f-1];break;
    }case 28:
    {
      this.$=[r[f-2],...r[f]];break;
    }case 29:
    {
      this.$=[r[f]];break;
    }case 30:
    {
      d.setYAxisTitle(r[f]);break;
    }case 31:
    {
      d.setYAxisTitle(r[f-1]);break;
    }case 32:
    {
      d.setYAxisTitle({type:"text",text:""});break;
    }case 33:
    {
      d.setYAxisRangeData(Number(r[f-2]),Number(r[f]));break;
    }case 37:
    {
      this.$={text:r[f],type:"text"};break;
    }case 38:
    {
      this.$={text:r[f],type:"text"};break;
    }case 39:
    {
      this.$={text:r[f],type:"markdown"};break;
    }case 40:
    {
      this.$=r[f];break;
    }case 41:
    {
      this.$=`${r[f-1]}${r[f]}`;break
    }}},"anonymous"),table:[e(t,i,{3:1,4:2,7:4,5:s,34:n,35:o,36:g}),{1:[3]},e(t,i,{4:2,7:4,3:8,5:s,34:n,35:o,36:g}),e(t,i,{4:2,7:4,6:9,3:10,5:s,8:[1,11],34:n,35:o,36:g}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},e(m,[2,34]),e(m,[2,35]),e(m,[2,36]),{1:[2,1]},e(t,i,{4:2,7:4,3:21,5:s,34:n,35:o,36:g}),{1:[2,3]},e(m,[2,5]),e(t,[2,7],{4:22,34:n,35:o,36:g}),{11:23,37:24,38:p,39:k,40:27,41:v,42:C,43:b,44:E,45:D,46:P,47:I,48:y,49:_,50:c},{11:39,13:38,24:W,27:z,29:40,30:41,37:24,38:p,39:k,40:27,41:v,42:C,43:b,44:E,45:D,46:P,47:I,48:y,49:_,50:c},{11:45,15:44,27:U,33:46,37:24,38:p,39:k,40:27,41:v,42:C,43:b,44:E,45:D,46:P,47:I,48:y,49:_,50:c},{11:49,17:48,24:X,37:24,38:p,39:k,40:27,41:v,42:C,43:b,44:E,45:D,46:P,47:I,48:y,49:_,50:c},{11:52,17:51,24:X,37:24,38:p,39:k,40:27,41:v,42:C,43:b,44:E,45:D,46:P,47:I,48:y,49:_,50:c},{20:[1,53]},{22:[1,54]},e(l,[2,18]),{1:[2,2]},e(l,[2,8]),e(l,[2,9]),e(L,[2,37],{40:55,41:v,42:C,43:b,44:E,45:D,46:P,47:I,48:y,49:_,50:c}),e(L,[2,38]),e(L,[2,39]),e(S,[2,40]),e(S,[2,42]),e(S,[2,43]),e(S,[2,44]),e(S,[2,45]),e(S,[2,46]),e(S,[2,47]),e(S,[2,48]),e(S,[2,49]),e(S,[2,50]),e(S,[2,51]),e(l,[2,10]),e(l,[2,22],{30:41,29:56,24:W,27:z}),e(l,[2,24]),e(l,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:p,39:k,40:27,41:v,42:C,43:b,44:E,45:D,46:P,47:I,48:y,49:_,50:c},e(l,[2,11]),e(l,[2,30],{33:60,27:U}),e(l,[2,32]),{31:[1,61]},e(l,[2,12]),{17:62,24:X},{25:63,27:R},e(l,[2,14]),{17:65,24:X},e(l,[2,16]),e(l,[2,17]),e(S,[2,41]),e(l,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},e(l,[2,31]),{27:[1,69]},e(l,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},e(l,[2,15]),e(l,[2,26]),e(l,[2,27]),{11:59,32:72,37:24,38:p,39:k,40:27,41:v,42:C,43:b,44:E,45:D,46:P,47:I,48:y,49:_,50:c},e(l,[2,33]),e(l,[2,19]),{25:73,27:R},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:a2(function(h,u){if (u.recoverable) {
    this.trace(h);
  } else {
    const x=new Error(h);
    x.hash=u;
    throw x;
  }},"parseError"),parse:a2(function(h){
    const u=this;
    let x=[0];
    let d=[];
    let w=[null];
    let r=[];
    const at=this.table;
    let f="";
    let lt=0;
    let It=0;
    const hi=2;
    const Mt=1;
    const li=r.slice.call(arguments,1);
    const T=Object.create(this.lexer);
    const Y={yy:{}};
    for (const dt in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy,dt)) {
        (Y.yy[dt] = this.yy[dt]);
      }
    }
    T.setInput(h,Y.yy);
    Y.yy.lexer=T;
    Y.yy.parser=this;

    if (typeof T.yylloc === "undefined") {
      (T.yylloc = {});
    }

    let ft=T.yylloc;r.push(ft);const ci=T.options&&T.options.ranges;

    if (typeof Y.yy.parseError=="function") {
      this.parseError=Y.yy.parseError;
    } else {
      this.parseError=Object.getPrototypeOf(this).parseError;
    }

    function ui(V){
        x.length=x.length-2*V;
        w.length=w.length-V;
        r.length=r.length-V;
      }a2(ui,"popStack");function Vt(){
      let V;
      V=d.pop()||T.lex()||Mt;

      if (typeof V!="number") {
        V instanceof Array&&(d=V,V=d.pop());
        V=u.symbols_[V]||V;
      }

      return V;
    }a2(Vt,"lex");
    let M;
    let H;
    let B;
    let pt;
    const q={};
    let ct;
    let F;
    let Bt;
    let ut;

    while (true) {
      H=x[x.length-1];

      if (this.defaultActions[H]) {
        B=this.defaultActions[H];
      } else {
        (M===null||typeof M === "undefined")&&(M=Vt());
        B=at[H]&&at[H][M];
      }

      if (typeof B === "undefined"||!B.length||!B[0]) {
        let mt="";ut=[];for (ct in at[H]) {
          if (this.terminals_[ct]&&ct>hi) {
            ut.push(`'${this.terminals_[ct]}'`);
          }
        }

        if (T.showPosition) {
          mt=`Parse error on line ${lt+1}${`:
  `}${T.showPosition()}${`
  Expecting `}${ut.join(", ")}, got '${this.terminals_[M]||M}'`;
        } else {
          mt=`Parse error on line ${lt+1}: Unexpected ${M==Mt?"end of input":`'${this.terminals_[M]||M}'`}`;
        }

        this.parseError(mt,{text:T.match,token:this.terminals_[M]||M,line:T.yylineno,loc:ft,expected:ut});
      }

      if (B[0]instanceof Array&&B.length>1) {
        throw new Error(`Parse Error: multiple actions possible at state: ${H}, token: ${M}`);
      }switch(B[0]){case 1:
          {
            x.push(M);
            w.push(T.yytext);
            r.push(T.yylloc);
            x.push(B[1]);
            M=null;
            It=T.yyleng;
            f=T.yytext;
            lt=T.yylineno;
            ft=T.yylloc;
            break;
          }case 2:
          {
            F=this.productions_[B[1]][1];
            q.$=w[w.length-F];
            q._$={first_line:r[r.length-(F||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(F||1)].first_column,last_column:r[r.length-1].last_column};

            if (ci) {
              (q._$.range = [r[r.length-(F||1)].range[0],r[r.length-1].range[1]]);
            }

            pt=this.performAction.apply(q,[f,It,lt,Y.yy,B[1],w,r].concat(li));

            if (typeof pt !== "undefined") {
              return pt;
            }

            if (F) {
              x=x.slice(0,-1*F*2);
              w=w.slice(0,-1*F);
              r=r.slice(0,-1*F);
            }

            x.push(this.productions_[B[1]][0]);
            w.push(q.$);
            r.push(q._$);
            Bt=at[x[x.length-2]][x[x.length-1]];
            x.push(Bt);
            break;
          }case 3:
          {
            return true;
          }}
    }

    return true;
  },"parse")};

  const Et = (() => {const O={EOF:1,parseError:a2(function(u,x){if (this.yy.parser) {
    this.yy.parser.parseError(u,x);
  } else {
    throw new Error(u)
  }},"parseError"),setInput:a2(function(h,u){
    this.yy=u||this.yy||{};
    this._input=h;
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
    const h=this._input[0];
    this.yytext+=h;
    this.yyleng++;
    this.offset++;
    this.match+=h;
    this.matched+=h;
    const u=h.match(/(?:\r\n?|\n).*/g);

    if (u) {
      this.yylineno++;
      this.yylloc.last_line++;
    } else {
      this.yylloc.last_column++;
    }

    if (this.options.ranges) {
      this.yylloc.range[1]++;
    }

    this._input=this._input.slice(1);
    return h;
  },"input"),unput:a2(function(h){
    const u=h.length;
    const x=h.split(/(?:\r\n?|\n)/g);
    this._input=h+this._input;
    this.yytext=this.yytext.substr(0,this.yytext.length-u);
    this.offset-=u;
    const d=this.match.split(/(?:\r\n?|\n)/g);
    this.match=this.match.substr(0,this.match.length-1);
    this.matched=this.matched.substr(0,this.matched.length-1);

    if (x.length-1) {
      (this.yylineno -= x.length-1);
    }

    const w=this.yylloc.range;
    this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:x?(x.length===d.length?this.yylloc.first_column:0)+d[d.length-x.length].length-x[0].length:this.yylloc.first_column-u};

    if (this.options.ranges) {
      (this.yylloc.range = [w[0],w[0]+this.yyleng-u]);
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
  }return this},"reject"),less:a2(function(h){this.unput(this.match.slice(h))},"less"),pastInput:a2(function(){const h=this.matched.substr(0,this.matched.length-this.match.length);return (h.length>20?"...":"")+h.substr(-20).replace(/\n/g,"");},"pastInput"),upcomingInput:a2(function(){
    let h=this.match;

    if (h.length<20) {
      (h += this._input.substr(0,20-h.length));
    }

    return (h.substr(0,20)+(h.length>20?"...":"")).replace(/\n/g,"");
  },"upcomingInput"),showPosition:a2(function(){
    const h=this.pastInput();
    const u=new Array(h.length+1).join("-");
    return `${h+this.upcomingInput()+`
`+u}^`;
  },"showPosition"),test_match:a2(function(h,u){
    let x;
    let d;
    let w;

    if (this.options.backtrack_lexer) {
      w={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};
      this.options.ranges&&(w.yylloc.range=this.yylloc.range.slice(0));
    }

    d=h[0].match(/(?:\r\n?|\n).*/g);

    if (d) {
      (this.yylineno += d.length);
    }

    this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+h[0].length};
    this.yytext+=h[0];
    this.match+=h[0];
    this.matches=h;
    this.yyleng=this.yytext.length;

    if (this.options.ranges) {
      (this.yylloc.range = [this.offset,this.offset+=this.yyleng]);
    }

    this._more=false;
    this._backtrack=false;
    this._input=this._input.slice(h[0].length);
    this.matched+=h[0];
    x=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]);

    if (this.done&&this._input) {
      (this.done = false);
    }

    if (x) {
      return x;
    }

    if(this._backtrack){for (const r in w) {
      this[r]=w[r];
    }return false;}return false;
  },"test_match"),next:a2(function(){
    if (this.done) {
      return this.EOF;
    }

    if (!this._input) {
      (this.done = true);
    }

    let h;
    let u;
    let x;
    let d;

    if (!this._more) {
      this.yytext="";
      this.match="";
    }

    for (var w=this._currentRules(),r=0; r<w.length; r++) {
        x=this._input.match(this.rules[w[r]]);

        if (x&&(!u||x[0].length>u[0].length)) {
          u=x;
          d=r;

          if (this.options.backtrack_lexer) {
            h=this.test_match(x,w[r]);

            if (h!==false) {
              return h;
            }

            if (this._backtrack)
              {u=false;continue} else {
              return false;
            }
          } else if (!this.options.flex) {
            break
          }
        }
      }

    if (u) {
      h=this.test_match(u,w[d]);
      return h!==false?h:false;
    }

    if (this._input==="") {
      return this.EOF;
    }

    return this.parseError(`Lexical error on line ${this.yylineno+1}${`. Unrecognized text.
    `}${this.showPosition()}`,{text:"",token:null,line:this.yylineno});
  },"next"),lex:a2(function(){const u=this.next();return u||this.lex()},"lex"),begin:a2(function(u){this.conditionStack.push(u)},"begin"),popState:a2(function(){const u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a2(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a2(function(u){
    u=this.conditionStack.length-1-Math.abs(u||0);
    return u>=0?this.conditionStack[u]:"INITIAL";
  },"topState"),pushState:a2(function(u){this.begin(u)},"pushState"),stateStackSize:a2(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":true},performAction:a2(function(u,x,d,w){switch(d){case 0:
    {
      break;
    }case 1:
    {
      break;
    }case 2:
    {
      this.popState();
      return 34;
    }case 3:
    {
      this.popState();
      return 34;
    }case 4:
    {
      return 34;
    }case 5:
    {
      break;
    }case 6:
    {
      return 10;
    }case 7:
    {
      this.pushState("acc_title");
      return 19;
    }case 8:
    {
      this.popState();
      return "acc_title_value";
    }case 9:
    {
      this.pushState("acc_descr");
      return 21;
    }case 10:
    {
      this.popState();
      return "acc_descr_value";
    }case 11:
    {
      this.pushState("acc_descr_multiline");break;
    }case 12:
    {
      this.popState();break;
    }case 13:
    {
      return"acc_descr_multiline_value";
    }case 14:
    {
      return 5;
    }case 15:
    {
      return 5;
    }case 16:
    {
      return 8;
    }case 17:
    {
      this.pushState("axis_data");
      return "X_AXIS";
    }case 18:
    {
      this.pushState("axis_data");
      return "Y_AXIS";
    }case 19:
    {
      this.pushState("axis_band_data");
      return 24;
    }case 20:
    {
      return 31;
    }case 21:
    {
      this.pushState("data");
      return 16;
    }case 22:
    {
      this.pushState("data");
      return 18;
    }case 23:
    {
      this.pushState("data_inner");
      return 24;
    }case 24:
    {
      return 27;
    }case 25:
    {
      this.popState();
      return 26;
    }case 26:
    {
      this.popState();break;
    }case 27:
    {
      this.pushState("string");break;
    }case 28:
    {
      this.popState();break;
    }case 29:
    {
      return"STR";
    }case 30:
    {
      return 24;
    }case 31:
    {
      return 26;
    }case 32:
    {
      return 43;
    }case 33:
    {
      return"COLON";
    }case 34:
    {
      return 44;
    }case 35:
    {
      return 28;
    }case 36:
    {
      return 45;
    }case 37:
    {
      return 46;
    }case 38:
    {
      return 48;
    }case 39:
    {
      return 50;
    }case 40:
    {
      return 47;
    }case 41:
    {
      return 41;
    }case 42:
    {
      return 49;
    }case 43:
    {
      return 42;
    }case 44:
    {
      break;
    }case 45:
    {
      return 35;
    }case 46:
    {
      return 36
    }}},"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:xychart\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,18,21,22,24,25,26,27,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],inclusive:true},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,18,21,22,23,26,27,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],inclusive:true},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,18,21,22,25,26,27,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],inclusive:true},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,22,24,26,27,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],inclusive:true},acc_descr_multiline:{rules:[12,13],inclusive:false},acc_descr:{rules:[10],inclusive:false},acc_title:{rules:[8],inclusive:false},title:{rules:[],inclusive:false},md_string:{rules:[],inclusive:false},string:{rules:[28,29],inclusive:false},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,18,21,22,26,27,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],inclusive:true}}};return O})();

  $.lexer=Et;function N(){this.yy={}}
  a2(N,"Parser");
  N.prototype=$;
  $.Parser=N;
  return new N;
})();bt.parser=bt;const Ti=bt;function At(e){return e.type==="bar"}a2(At,"isBarPlot");function _t(e){return e.type==="band"}a2(_t,"isBandAxisData");function G(e){return e.type==="linear"}a2(G,"isLinearAxisData");
let j;

j=class{constructor(t){this.parentGroup=t}getMaxDimension(t,i){
  if (!this.parentGroup) {
    return {width:t.reduce((o, g) => Math.max(g.length,o),0)*i,height:i};
  }
  const s={width:0,height:0};
  const n=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);
  for(const o of t){
    const g=bz(n,1,o);
    const m=g?g.width:o.length*i;
    const p=g?g.height:i;
    s.width=Math.max(s.width,m);
    s.height=Math.max(s.height,p);
  }
  n.remove();
  return s;
}};

a2(j,"TextDimensionCalculatorWithFont");
const Ht = j;

const Ot=0.7/* .7 */;
const Ft=0.2/* .2 */;
let Q;

Q=class{constructor(t,i,s,n){
  this.axisConfig=t;
  this.title=i;
  this.textDimensionCalculator=s;
  this.axisThemeConfig=n;
  this.boundingRect={x:0,y:0,width:0,height:0};
  this.axisPosition="left";
  this.showTitle=false;
  this.showLabel=false;
  this.showTick=false;
  this.showAxisLine=false;
  this.outerPadding=0;
  this.titleTextHeight=0;
  this.labelTextHeight=0;
  this.range=[0,10];
  this.boundingRect={x:0,y:0,width:0,height:0};
  this.axisPosition="left";
}setRange(t){
  this.range=t;

  if (this.axisPosition==="left"||this.axisPosition==="right") {
    this.boundingRect.height=t[1]-t[0];
  } else {
    this.boundingRect.width=t[1]-t[0];
  }

  this.recalculateScale();
}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){
  this.axisPosition=t;
  this.setRange(this.range);
}getTickDistance(){const t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t => t.toString()),this.axisConfig.labelFontSize);}recalculateOuterPaddingToDrawBar(){
  if (Ot*this.getTickDistance()>this.outerPadding*2) {
    (this.outerPadding = Math.floor(Ot*this.getTickDistance()/2));
  }

  this.recalculateScale();
}calculateSpaceIfDrawnHorizontally(t){
  let i=t.height;

  if (this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth) {
    i-=this.axisConfig.axisLineWidth;
    this.showAxisLine=true;
  }

  if (this.axisConfig.showLabel) {
    const s=this.getLabelDimension();
    const n=Ft*t.width;
    this.outerPadding=Math.min(s.width/2,n);const o=s.height+this.axisConfig.labelPadding*2;
    this.labelTextHeight=s.height;

    if (o<=i) {
      i-=o;
      this.showLabel=true;
    }
  }

  if (this.axisConfig.showTick&&i>=this.axisConfig.tickLength) {
    this.showTick=true;
    i-=this.axisConfig.tickLength;
  }

  if (this.axisConfig.showTitle&&this.title) {
    const s=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize);
    const n=s.height+this.axisConfig.titlePadding*2;
    this.titleTextHeight=s.height;

    if (n<=i) {
      i-=n;
      this.showTitle=true;
    }
  }

  this.boundingRect.width=t.width;
  this.boundingRect.height=t.height-i;
}calculateSpaceIfDrawnVertical(t){
  let i=t.width;

  if (this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth) {
    i-=this.axisConfig.axisLineWidth;
    this.showAxisLine=true;
  }

  if (this.axisConfig.showLabel) {
    const s=this.getLabelDimension();
    const n=Ft*t.height;
    this.outerPadding=Math.min(s.height/2,n);const o=s.width+this.axisConfig.labelPadding*2;

    if (o<=i) {
      i-=o;
      this.showLabel=true;
    }
  }

  if (this.axisConfig.showTick&&i>=this.axisConfig.tickLength) {
    this.showTick=true;
    i-=this.axisConfig.tickLength;
  }

  if (this.axisConfig.showTitle&&this.title) {
    const s=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize);
    const n=s.height+this.axisConfig.titlePadding*2;
    this.titleTextHeight=s.height;

    if (n<=i) {
      i-=n;
      this.showTitle=true;
    }
  }

  this.boundingRect.width=t.width-i;
  this.boundingRect.height=t.height;
}calculateSpace(t){
  if (this.axisPosition==="left"||this.axisPosition==="right") {
    this.calculateSpaceIfDrawnVertical(t);
  } else {
    this.calculateSpaceIfDrawnHorizontally(t);
  }

  this.recalculateScale();
  return {width:this.boundingRect.width,height:this.boundingRect.height};
}setBoundingBoxXY(t){
  this.boundingRect.x=t.x;
  this.boundingRect.y=t.y;
}getDrawableElementsForLeftAxis(){
  const t=[];if(this.showAxisLine){const i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}

  if (this.showLabel) {
    t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map(i => ({
      text:i.toString(),
      x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),
      y:this.getScaleValue(i),
      fill:this.axisThemeConfig.labelColor,
      fontSize:this.axisConfig.labelFontSize,
      rotation:0,
      verticalPos:"middle",
      horizontalPos:"right"
    }))});
  }

  if (this.showTick) {const i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map(s => ({
    path:`M ${i},${this.getScaleValue(s)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(s)}`,
    strokeFill:this.axisThemeConfig.tickColor,
    strokeWidth:this.axisConfig.tickWidth
  }))})}

  if (this.showTitle) {
    t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]});
  }

  return t;
}getDrawableElementsForBottomAxis(){
  const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}

  if (this.showLabel) {
    t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map(i => ({
      text:i.toString(),
      x:this.getScaleValue(i),
      y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),
      fill:this.axisThemeConfig.labelColor,
      fontSize:this.axisConfig.labelFontSize,
      rotation:0,
      verticalPos:"top",
      horizontalPos:"center"
    }))});
  }

  if (this.showTick) {const i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map(s => ({
    path:`M ${this.getScaleValue(s)},${i} L ${this.getScaleValue(s)},${i+this.axisConfig.tickLength}`,
    strokeFill:this.axisThemeConfig.tickColor,
    strokeWidth:this.axisConfig.tickWidth
  }))})}

  if (this.showTitle) {
    t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]});
  }

  return t;
}getDrawableElementsForTopAxis(){
  const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}

  if (this.showLabel) {
    t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map(i => ({
      text:i.toString(),
      x:this.getScaleValue(i),
      y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+this.axisConfig.titlePadding*2:0)+this.axisConfig.labelPadding,
      fill:this.axisThemeConfig.labelColor,
      fontSize:this.axisConfig.labelFontSize,
      rotation:0,
      verticalPos:"top",
      horizontalPos:"center"
    }))});
  }

  if (this.showTick) {const i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map(s => ({
    path:`M ${this.getScaleValue(s)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(s)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,
    strokeFill:this.axisThemeConfig.tickColor,
    strokeWidth:this.axisConfig.tickWidth
  }))})}

  if (this.showTitle) {
    t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]});
  }

  return t;
}getDrawableElements(){
  if (this.axisPosition==="left") {
    return this.getDrawableElementsForLeftAxis();
  }if (this.axisPosition==="right") {
    throw Error("Drawing of right axis is not implemented");
  }

  if (this.axisPosition==="bottom") {
    return this.getDrawableElementsForBottomAxis();
  }

  if (this.axisPosition==="top") {
    return this.getDrawableElementsForTopAxis();
  }

  return [];
}};

a2(Q,"BaseAxis");
const Ut = Q;

let K;

K=class extends Ut{constructor(t,i,s,n,o){
  super(t,n,o,i);
  this.categories=s;
  this.scale=yt().domain(this.categories).range(this.getRange());
}setRange(t){super.setRange(t)}recalculateScale(){
  this.scale=yt().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(0.5/* .5 */);
  a9.trace("BandAxis axis final categories, range: ",this.categories,this.getRange());
}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)??this.getRange()[0]}};

a2(K,"BandAxis");
const Di = K;

let Z;

Z=class extends Ut{constructor(t,i,s,n,o){
  super(t,n,o,i);
  this.domain=s;
  this.scale=l().domain(this.domain).range(this.getRange());
}getTickValues(){return this.scale.ticks()}recalculateScale(){
  const t=[...this.domain];

  if (this.axisPosition==="left") {
    t.reverse();
  }

  this.scale=l().domain(t).range(this.getRange());
}getScaleValue(t){return this.scale(t)}};

a2(Z,"LinearAxis");
const vi = Z;

function wt(e,t,i,s){const n=new Ht(s);return _t(e)?new Di(t,i,e.categories,e.title,n):new vi(t,i,[e.min,e.max],e.title,n)}a2(wt,"getAxis");
let J;

J=class{constructor(t,i,s,n){
  this.textDimensionCalculator=t;
  this.chartConfig=i;
  this.chartData=s;
  this.chartThemeConfig=n;
  this.boundingRect={x:0,y:0,width:0,height:0};
  this.showChartTitle=false;
}setBoundingBoxXY(t){
  this.boundingRect.x=t.x;
  this.boundingRect.y=t.y;
}calculateSpace(t){
  const i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize);
  const s=Math.max(i.width,t.width);
  const n=i.height+2*this.chartConfig.titlePadding;

  if (i.width<=s&&i.height<=n&&this.chartConfig.showTitle&&this.chartData.title) {
    this.boundingRect.width=s;
    this.boundingRect.height=n;
    this.showChartTitle=true;
  }

  return {width:this.boundingRect.width,height:this.boundingRect.height};
}getDrawableElements(){
  const t=[];

  if (this.showChartTitle) {
    t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]});
  }

  return t;
}};

a2(J,"ChartTitle");
const Pi = J;

function $t(e,t,i,s){const n=new Ht(s);return new Pi(n,e,t,i)}a2($t,"getChartTitleComponent");
let tt;

tt=class{constructor(t,i,s,n,o){
  this.plotData=t;
  this.xAxis=i;
  this.yAxis=s;
  this.orientation=n;
  this.plotIndex=o;
}getDrawableElement(){
  const t=this.plotData.data.map(s => [this.xAxis.getScaleValue(s[0]),this.yAxis.getScaleValue(s[1])]);let i;

  if (this.orientation==="horizontal") {
    i=b1().y(s => s[0]).x(s => s[1])(t);
  } else {
    i=b1().x(s => s[0]).y(s => s[1])(t);
  }

  return i?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:i,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[];
}};

a2(tt,"LinePlot");
const Li = tt;

let it;

it=class{constructor(t,i,s,n,o,g){
  this.barData=t;
  this.boundingRect=i;
  this.xAxis=s;
  this.yAxis=n;
  this.orientation=o;
  this.plotIndex=g;
}getDrawableElement(){
  const t=this.barData.data.map(o => [this.xAxis.getScaleValue(o[0]),this.yAxis.getScaleValue(o[1])]);

  const s=Math.min(this.xAxis.getAxisOuterPadding()*2,this.xAxis.getTickDistance())*(1-0.05/* .05 */);
  const n=s/2;
  return this.orientation==="horizontal"?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(o => ({
    x:this.boundingRect.x,
    y:o[0]-n,
    height:s,
    width:o[1]-this.boundingRect.x,
    fill:this.barData.fill,
    strokeWidth:0,
    strokeFill:this.barData.fill
  }))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(o => ({
    x:o[0]-n,
    y:o[1],
    width:s,
    height:this.boundingRect.y+this.boundingRect.height-o[1],
    fill:this.barData.fill,
    strokeWidth:0,
    strokeFill:this.barData.fill
  }))}];
}};

a2(it,"BarPlot");
const Ei = it;

let et;

et=class{constructor(t,i,s){
  this.chartConfig=t;
  this.chartData=i;
  this.chartThemeConfig=s;
  this.boundingRect={x:0,y:0,width:0,height:0};
}setAxes(t,i){
  this.xAxis=t;
  this.yAxis=i;
}setBoundingBoxXY(t){
  this.boundingRect.x=t.x;
  this.boundingRect.y=t.y;
}calculateSpace(t){
  this.boundingRect.width=t.width;
  this.boundingRect.height=t.height;
  return {width:this.boundingRect.width,height:this.boundingRect.height};
}getDrawableElements(){if (!(this.xAxis&&this.yAxis)) {
  throw Error("Axes must be passed to render Plots");
}const t=[];for (const[i,s] of this.chartData.plots.entries()) {
  switch(s.type){case"line":{const n=new Li(s,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...n.getDrawableElement())}break;case"bar":{const n=new Ei(s,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...n.getDrawableElement())}break}
}return t}};

a2(et,"BasePlot");
const Ii = et;

function qt(e,t,i){return new Ii(e,t,i)}a2(qt,"getPlotComponent");
let st;

st=class{constructor(t,i,s,n){
  this.chartConfig=t;
  this.chartData=i;
  this.componentStore={title:$t(t,i,s,n),plot:qt(t,i,s),xAxis:wt(i.xAxis,t.xAxis,{titleColor:s.xAxisTitleColor,labelColor:s.xAxisLabelColor,tickColor:s.xAxisTickColor,axisLineColor:s.xAxisLineColor},n),yAxis:wt(i.yAxis,t.yAxis,{titleColor:s.yAxisTitleColor,labelColor:s.yAxisLabelColor,tickColor:s.yAxisTickColor,axisLineColor:s.yAxisLineColor},n)};
}calculateVerticalSpace(){
  let t=this.chartConfig.width;
  let i=this.chartConfig.height;
  let s=0;
  let n=0;
  let o=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100);
  let g=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100);
  let m=this.componentStore.plot.calculateSpace({width:o,height:g});
  t-=m.width;
  i-=m.height;
  m=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i});
  n=m.height;
  i-=m.height;
  this.componentStore.xAxis.setAxisPosition("bottom");
  m=this.componentStore.xAxis.calculateSpace({width:t,height:i});
  i-=m.height;
  this.componentStore.yAxis.setAxisPosition("left");
  m=this.componentStore.yAxis.calculateSpace({width:t,height:i});
  s=m.width;
  t-=m.width;

  if (t>0) {
    o+=t;
    t=0;
  }

  if (i>0) {
    g+=i;
    i=0;
  }

  this.componentStore.plot.calculateSpace({width:o,height:g});
  this.componentStore.plot.setBoundingBoxXY({x:s,y:n});
  this.componentStore.xAxis.setRange([s,s+o]);
  this.componentStore.xAxis.setBoundingBoxXY({x:s,y:n+g});
  this.componentStore.yAxis.setRange([n,n+g]);
  this.componentStore.yAxis.setBoundingBoxXY({x:0,y:n});

  if (this.chartData.plots.some(p => At(p))) {
    this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
}calculateHorizontalSpace(){
  let t=this.chartConfig.width;
  let i=this.chartConfig.height;
  let s=0;
  let n=0;
  let o=0;
  let g=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100);
  let m=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100);
  let p=this.componentStore.plot.calculateSpace({width:g,height:m});
  t-=p.width;
  i-=p.height;
  p=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i});
  s=p.height;
  i-=p.height;
  this.componentStore.xAxis.setAxisPosition("left");
  p=this.componentStore.xAxis.calculateSpace({width:t,height:i});
  t-=p.width;
  n=p.width;
  this.componentStore.yAxis.setAxisPosition("top");
  p=this.componentStore.yAxis.calculateSpace({width:t,height:i});
  i-=p.height;
  o=s+p.height;

  if (t>0) {
    g+=t;
    t=0;
  }

  if (i>0) {
    m+=i;
    i=0;
  }

  this.componentStore.plot.calculateSpace({width:g,height:m});
  this.componentStore.plot.setBoundingBoxXY({x:n,y:o});
  this.componentStore.yAxis.setRange([n,n+g]);
  this.componentStore.yAxis.setBoundingBoxXY({x:n,y:s});
  this.componentStore.xAxis.setRange([o,o+m]);
  this.componentStore.xAxis.setBoundingBoxXY({x:0,y:o});

  if (this.chartData.plots.some(k => At(k))) {
    this.componentStore.xAxis.recalculateOuterPaddingToDrawBar();
  }
}calculateSpace(){
  if (this.chartConfig.chartOrientation==="horizontal") {
    this.calculateHorizontalSpace();
  } else {
    this.calculateVerticalSpace();
  }
}getDrawableElement(){this.calculateSpace();const t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for (const i of Object.values(this.componentStore)) {
  t.push(...i.getDrawableElements());
}return t}};

a2(st,"Orchestrator");
const Mi = st;

let nt;
nt=class{static build(t,i,s,n){return new Mi(t,i,s,n).getDrawableElement()}};
a2(nt,"XYChartBuilder");
const Vi = nt;
let rt=0;
let Gt;
let ot=Tt();
let ht=Rt();
let A=Dt();

let Ct=ht.plotColorPalette.split(",").map(e => e.trim());

let gt=false;
let kt=false;
function Rt(){
  const e=aV();
  const t=aB();
  return aA(e.xyChart,t.themeVariables.xyChart);
}a2(Rt,"getChartDefaultThemeConfig");function Tt(){const e=aB();return aA(aC.xyChart,e.xyChart);}a2(Tt,"getChartDefaultConfig");function Dt(){return {yAxis:{type:"linear",title:"",min:Infinity,max:-Infinity},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]};}a2(Dt,"getChartDefaultData");function xt(e){const t=aB();return ad(e.trim(),t);}a2(xt,"textSanitizer");function jt(e){Gt=e}a2(jt,"setTmpSVGG");function Qt(e){
  if (e==="horizontal") {
    ot.chartOrientation="horizontal";
  } else {
    ot.chartOrientation="vertical";
  }
}a2(Qt,"setOrientation");function Kt(e){A.xAxis.title=xt(e.text)}a2(Kt,"setXAxisTitle");function vt(e,t){
  A.xAxis={type:"linear",title:A.xAxis.title,min:e,max:t};
  gt=true;
}a2(vt,"setXAxisRangeData");function Zt(e){
  A.xAxis={type:"band",title:A.xAxis.title,categories:e.map(t => xt(t.text))};

  gt=true;
}a2(Zt,"setXAxisBand");function Jt(e){A.yAxis.title=xt(e.text)}a2(Jt,"setYAxisTitle");function ti(e,t){
  A.yAxis={type:"linear",title:A.yAxis.title,min:e,max:t};
  kt=true;
}a2(ti,"setYAxisRangeData");function ii(e){
  const t=Math.min(...e);
  const i=Math.max(...e);
  const s=G(A.yAxis)?A.yAxis.min:Infinity;
  const n=G(A.yAxis)?A.yAxis.max:-Infinity;
  A.yAxis={type:"linear",title:A.yAxis.title,min:Math.min(s,t),max:Math.max(n,i)}
}a2(ii,"setYAxisRangeFromPlotData");function Pt(e){
  let t=[];if (e.length===0) {
      return t;
    }if(!gt){
      const i=G(A.xAxis)?A.xAxis.min:Infinity;
      const s=G(A.xAxis)?A.xAxis.max:-Infinity;
      vt(Math.min(i,1),Math.max(s,e.length))
    }

  if (!kt) {
    ii(e);
  }

  if (_t(A.xAxis)) {
    (t = A.xAxis.categories.map((i, s) => [i,e[s]]));
  }

  if (G(A.xAxis)) {
    const i=A.xAxis.min;
    const s=A.xAxis.max;
    const n=(s-i)/(e.length-1);
    const o=[];
    for (let g=i; g<=s; g+=n) {
      o.push(`${g}`);
    }t=o.map((g, m) => [g,e[m]])
  }

  return t
}a2(Pt,"transformDataWithoutCategory");function Lt(e){return Ct[e===0?0:e%Ct.length]}a2(Lt,"getPlotColorFromPalette");function ei(e,t){
  const i=Pt(t);
  A.plots.push({type:"line",strokeFill:Lt(rt),strokeWidth:2,data:i});
  rt++;
}a2(ei,"setLineData");function si(e,t){
  const i=Pt(t);
  A.plots.push({type:"bar",fill:Lt(rt),data:i});
  rt++;
}a2(si,"setBarData");function ni(){
  if (A.plots.length===0) {
    throw Error("No Plot to render, please provide a plot with some data");
  }
  A.title=ao();
  return Vi.build(ot,A,ht,Gt);
}a2(ni,"getDrawableElem");function ai(){return ht}a2(ai,"getChartThemeConfig");function ri(){return ot}a2(ri,"getChartConfig");function oi(){return A}a2(oi,"getXYChartData");

const Bi=a2(() => {
  at();
  rt=0;
  ot=Tt();
  A=Dt();
  ht=Rt();

  Ct=ht.plotColorPalette.split(",").map(e => e.trim());

  gt=false;
  kt=false;
},"clear");

const Wi={getDrawableElem:ni,clear:Bi,setAccTitle:a6,getAccTitle:a5,setDiagramTitle:an,getDiagramTitle:ao,getAccDescription:a4,setAccDescription:a3,setOrientation:Qt,setXAxisTitle:Kt,setXAxisRangeData:vt,setXAxisBand:Zt,setYAxisTitle:Jt,setYAxisRangeData:ti,setLineData:ei,setBarData:si,setTmpSVGG:jt,getChartThemeConfig:ai,getChartConfig:ri,getXYChartData:oi};

const zi=a2((e,t,i,s)=>{
  const n=s.db;
  const o=n.getChartThemeConfig();
  const g=n.getChartConfig();

  const m=n.getXYChartData().plots[0].data.map(y => y[1]);

  function p(y){return y==="top"?"text-before-edge":"middle"}a2(p,"getDominantBaseLine");function k(y){return y==="left"?"start":y==="right"?"end":"middle"}a2(k,"getTextAnchor");function v(y){return`translate(${y.x}, ${y.y}) rotate(${y.rotation||0})`}
  a2(v,"getTextTransformation");

  a9.debug(`Rendering xychart chart
  `+e);

  const C=aE(t);
  const b=C.append("g").attr("class","main");
  const E=b.append("rect").attr("width",g.width).attr("height",g.height).attr("class","background");
  aa(C,g.height,g.width,true);
  C.attr("viewBox",`0 0 ${g.width} ${g.height}`);
  E.attr("fill",o.backgroundColor);
  n.setTmpSVGG(C.append("g").attr("class","mermaid-tmp-group"));
  const D=n.getDrawableElem();
  const P={};
  function I(y){
    let _=b;
    let c="";
    for(const[W]of y.entries()){
      let z=b;

      if (W>0&&P[c]) {
        (z = P[c]);
      }

      c+=y[W];
      _=P[c];

      if (!_) {
        (_ = P[c]=z.append("g").attr("class",y[W]));
      }
    }return _
  }a2(I,"getGroup");for(const y of D){if (y.data.length===0) {
    continue;
  }const _=I(y.groupTexts);switch(y.type){case "rect":
    {
      _.selectAll("rect").data(y.data).enter().append("rect").attr("x",c => c.x).attr("y",c => c.y).attr("width",c => c.width).attr("height",c => c.height).attr("fill",c => c.fill).attr("stroke",c => c.strokeFill).attr("stroke-width",c => c.strokeWidth);

      if (g.showDataLabel) {
        if(g.chartOrientation==="horizontal"){
          let c=(l, L) => {const{data,label}=l;return L*label.length*W<=data.width-10;};a2(c,"fitsHorizontally");
          const W=0.7/* .7 */;

          const z=y.data.map((l, L) => ({
            data:l,
            label:m[L].toString()
          })).filter(l => l.data.width>0&&l.data.height>0);

          const U=z.map(l=>{
            const{data}=l;let S=data.height*0.7/* .7 */;

            while (!c(l,S)&&S>0) {
              S-=1;
            }

            return S
          });

          const X=Math.floor(Math.min(...U));
          _.selectAll("text").data(z).enter().append("text").attr("x",l => l.data.x+l.data.width-10).attr("y",l => l.data.y+l.data.height/2).attr("text-anchor","end").attr("dominant-baseline","middle").attr("fill","black").attr("font-size",`${X}px`).text(l => l.label)
        }else{
          let c=(l, L, S) => {
            const {data,label}=l;
            const N=L*label.length*0.7/* .7 */;
            const O=data.x+data.width/2;
            const h=O-N/2;
            const u=O+N/2;
            const x=h>=data.x&&u<=data.x+data.width;
            const d=data.y+S+L<=data.y+data.height;
            return x&&d
          };a2(c,"fitsInBar");
          const W=10;

          const z=y.data.map((l, L) => ({
            data:l,
            label:m[L].toString()
          })).filter(l => l.data.width>0&&l.data.height>0);

          const U=z.map(l=>{
            const{data,label}=l;let R=data.width/(label.length*0.7/* .7 */);

            while (!c(l,R,W)&&R>0) {
              R-=1;
            }

            return R
          });

          const X=Math.floor(Math.min(...U));
          _.selectAll("text").data(z).enter().append("text").attr("x",l => l.data.x+l.data.width/2).attr("y",l => l.data.y+W).attr("text-anchor","middle").attr("dominant-baseline","hanging").attr("fill","black").attr("font-size",`${X}px`).text(l => l.label)
        }
      }

      break;
    }case "text":
    {
      _.selectAll("text").data(y.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",c => c.fill).attr("font-size",c => c.fontSize).attr("dominant-baseline",c => p(c.verticalPos)).attr("text-anchor",c => k(c.horizontalPos)).attr("transform",c => v(c)).text(c => c.text);break;
    }case "path":
    {
      _.selectAll("path").data(y.data).enter().append("path").attr("d",c => c.path).attr("fill",c => c.fill?c.fill:"none").attr("stroke",c => c.strokeFill).attr("stroke-width",c => c.strokeWidth);break
    }}}
},"draw");

const Oi={draw:zi};

export const diagram = {parser:Ti,db:Wi,renderer:Oi};
//# sourceMappingURL=xychartDiagram-PRI3JC2R-CT7r-ATu.js.map

export{diagram as diagram};
//# sourceMappingURL=xychartDiagram-PRI3JC2R-CT7r-ATu.js.map
