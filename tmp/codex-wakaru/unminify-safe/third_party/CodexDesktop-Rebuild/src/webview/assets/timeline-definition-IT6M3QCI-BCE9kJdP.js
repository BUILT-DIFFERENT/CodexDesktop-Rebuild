import{a2,a7,a9,a8,b4,b5,b6,b7,ay,b8,at as at_1}from"./index-CgwAo6pj.js";import{d}from"./arc-8gtVlnzN.js";const Q = (() => {
  const n=a2((x, r, a, c) => {
    a=a||{};

    for (c=x.length; c--; a[x[c]]=r)
      {}

    return a
  },"o");

  const t=[6,8,10,11,12,14,16,17,20,21];
  const e=[1,9];
  const l=[1,10];
  const i=[1,11];
  const d=[1,12];
  const h=[1,13];
  const f=[1,16];
  const m=[1,17];

  const p={trace:a2(() => {},"trace"),yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:a2(function(r,a,c,u,y,o,w){const v=o.length-1;switch(y){case 1:
    {
      return o[v-1];
    }case 2:
    {
      this.$=[];break;
    }case 3:
    {
      o[v-1].push(o[v]);
      this.$=o[v-1];
      break;
    }case 4:case 5:
    {
      this.$=o[v];break;
    }case 6:case 7:
    {
      this.$=[];break;
    }case 8:
    {
      u.getCommonDb().setDiagramTitle(o[v].substr(6));
      this.$=o[v].substr(6);
      break;
    }case 9:
    {
      this.$=o[v].trim();
      u.getCommonDb().setAccTitle(this.$);
      break;
    }case 10:case 11:
    {
      this.$=o[v].trim();
      u.getCommonDb().setAccDescription(this.$);
      break;
    }case 12:
    {
      u.addSection(o[v].substr(8));
      this.$=o[v].substr(8);
      break;
    }case 15:
    {
      u.addTask(o[v],0,"");
      this.$=o[v];
      break;
    }case 16:
    {
      u.addEvent(o[v].substr(2));
      this.$=o[v];
      break
    }}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},n(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:e,12:l,14:i,16:d,17:h,18:14,19:15,20:f,21:m},n(t,[2,7],{1:[2,1]}),n(t,[2,3]),{9:18,11:e,12:l,14:i,16:d,17:h,18:14,19:15,20:f,21:m},n(t,[2,5]),n(t,[2,6]),n(t,[2,8]),{13:[1,19]},{15:[1,20]},n(t,[2,11]),n(t,[2,12]),n(t,[2,13]),n(t,[2,14]),n(t,[2,15]),n(t,[2,16]),n(t,[2,4]),n(t,[2,9]),n(t,[2,10])],defaultActions:{},parseError:a2(function(r,a){if (a.recoverable) {
    this.trace(r);
  } else {
    const c=new Error(r);
    c.hash=a;
    throw c;
  }},"parseError"),parse:a2(function(r){
    const a=this;
    let c=[0];
    let u=[];
    let y=[null];
    let o=[];
    const w=this.table;
    let v="";
    let N=0;
    let P=0;
    const V=2;
    const U=1;
    const H=o.slice.call(arguments,1);
    const g=Object.create(this.lexer);
    const _={yy:{}};
    for (const L in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy,L)) {
        (_.yy[L] = this.yy[L]);
      }
    }
    g.setInput(r,_.yy);
    _.yy.lexer=g;
    _.yy.parser=this;

    if (typeof g.yylloc === "undefined") {
      (g.yylloc = {});
    }

    let M=g.yylloc;o.push(M);const W=g.options&&g.options.ranges;

    if (typeof _.yy.parseError=="function") {
      this.parseError=_.yy.parseError;
    } else {
      this.parseError=Object.getPrototypeOf(this).parseError;
    }

    function Z(T){
        c.length=c.length-2*T;
        y.length=y.length-T;
        o.length=o.length-T;
      }a2(Z,"popStack");function tt(){
      let T;
      T=u.pop()||g.lex()||U;

      if (typeof T!="number") {
        T instanceof Array&&(u=T,T=u.pop());
        T=a.symbols_[T]||T;
      }

      return T;
    }a2(tt,"lex");
    let S;
    let A;
    let I;
    let J;
    const R={};
    let B;
    let $;
    let et;
    let O;

    while (true) {
      A=c[c.length-1];

      if (this.defaultActions[A]) {
        I=this.defaultActions[A];
      } else {
        (S===null||typeof S === "undefined")&&(S=tt());
        I=w[A]&&w[A][S];
      }

      if (typeof I === "undefined"||!I.length||!I[0]) {
        let K="";O=[];for (B in w[A]) {
          if (this.terminals_[B]&&B>V) {
            O.push(`'${this.terminals_[B]}'`);
          }
        }

        if (g.showPosition) {
          K=`Parse error on line ${N+1}${`:
  `}${g.showPosition()}${`
  Expecting `}${O.join(", ")}, got '${this.terminals_[S]||S}'`;
        } else {
          K=`Parse error on line ${N+1}: Unexpected ${S==U?"end of input":`'${this.terminals_[S]||S}'`}`;
        }

        this.parseError(K,{text:g.match,token:this.terminals_[S]||S,line:g.yylineno,loc:M,expected:O});
      }

      if (I[0]instanceof Array&&I.length>1) {
        throw new Error(`Parse Error: multiple actions possible at state: ${A}, token: ${S}`);
      }switch(I[0]){case 1:
          {
            c.push(S);
            y.push(g.yytext);
            o.push(g.yylloc);
            c.push(I[1]);
            S=null;
            P=g.yyleng;
            v=g.yytext;
            N=g.yylineno;
            M=g.yylloc;
            break;
          }case 2:
          {
            $=this.productions_[I[1]][1];
            R.$=y[y.length-$];
            R._$={first_line:o[o.length-($||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-($||1)].first_column,last_column:o[o.length-1].last_column};

            if (W) {
              (R._$.range = [o[o.length-($||1)].range[0],o[o.length-1].range[1]]);
            }

            J=this.performAction.apply(R,[v,P,N,_.yy,I[1],y,o].concat(H));

            if (typeof J !== "undefined") {
              return J;
            }

            if ($) {
              c=c.slice(0,-1*$*2);
              y=y.slice(0,-1*$);
              o=o.slice(0,-1*$);
            }

            c.push(this.productions_[I[1]][0]);
            y.push(R.$);
            o.push(R._$);
            et=w[c[c.length-2]][c[c.length-1]];
            c.push(et);
            break;
          }case 3:
          {
            return true;
          }}
    }

    return true;
  },"parse")};

  const k = (() => {const x={EOF:1,parseError:a2(function(a,c){if (this.yy.parser) {
    this.yy.parser.parseError(a,c);
  } else {
    throw new Error(a)
  }},"parseError"),setInput:a2(function(r,a){
    this.yy=a||this.yy||{};
    this._input=r;
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
    const r=this._input[0];
    this.yytext+=r;
    this.yyleng++;
    this.offset++;
    this.match+=r;
    this.matched+=r;
    const a=r.match(/(?:\r\n?|\n).*/g);

    if (a) {
      this.yylineno++;
      this.yylloc.last_line++;
    } else {
      this.yylloc.last_column++;
    }

    if (this.options.ranges) {
      this.yylloc.range[1]++;
    }

    this._input=this._input.slice(1);
    return r;
  },"input"),unput:a2(function(r){
    const a=r.length;
    const c=r.split(/(?:\r\n?|\n)/g);
    this._input=r+this._input;
    this.yytext=this.yytext.substr(0,this.yytext.length-a);
    this.offset-=a;
    const u=this.match.split(/(?:\r\n?|\n)/g);
    this.match=this.match.substr(0,this.match.length-1);
    this.matched=this.matched.substr(0,this.matched.length-1);

    if (c.length-1) {
      (this.yylineno -= c.length-1);
    }

    const y=this.yylloc.range;
    this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===u.length?this.yylloc.first_column:0)+u[u.length-c.length].length-c[0].length:this.yylloc.first_column-a};

    if (this.options.ranges) {
      (this.yylloc.range = [y[0],y[0]+this.yyleng-a]);
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
  }return this},"reject"),less:a2(function(r){this.unput(this.match.slice(r))},"less"),pastInput:a2(function(){const r=this.matched.substr(0,this.matched.length-this.match.length);return (r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"");},"pastInput"),upcomingInput:a2(function(){
    let r=this.match;

    if (r.length<20) {
      (r += this._input.substr(0,20-r.length));
    }

    return (r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"");
  },"upcomingInput"),showPosition:a2(function(){
    const r=this.pastInput();
    const a=new Array(r.length+1).join("-");
    return `${r+this.upcomingInput()+`
`+a}^`;
  },"showPosition"),test_match:a2(function(r,a){
    let c;
    let u;
    let y;

    if (this.options.backtrack_lexer) {
      y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};
      this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0));
    }

    u=r[0].match(/(?:\r\n?|\n).*/g);

    if (u) {
      (this.yylineno += u.length);
    }

    this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length};
    this.yytext+=r[0];
    this.match+=r[0];
    this.matches=r;
    this.yyleng=this.yytext.length;

    if (this.options.ranges) {
      (this.yylloc.range = [this.offset,this.offset+=this.yyleng]);
    }

    this._more=false;
    this._backtrack=false;
    this._input=this._input.slice(r[0].length);
    this.matched+=r[0];
    c=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]);

    if (this.done&&this._input) {
      (this.done = false);
    }

    if (c) {
      return c;
    }

    if(this._backtrack){for (const o in y) {
      this[o]=y[o];
    }return false;}return false;
  },"test_match"),next:a2(function(){
    if (this.done) {
      return this.EOF;
    }

    if (!this._input) {
      (this.done = true);
    }

    let r;
    let a;
    let c;
    let u;

    if (!this._more) {
      this.yytext="";
      this.match="";
    }

    for (var y=this._currentRules(),o=0; o<y.length; o++) {
        c=this._input.match(this.rules[y[o]]);

        if (c&&(!a||c[0].length>a[0].length)) {
          a=c;
          u=o;

          if (this.options.backtrack_lexer) {
            r=this.test_match(c,y[o]);

            if (r!==false) {
              return r;
            }

            if (this._backtrack)
              {a=false;continue} else {
              return false;
            }
          } else if (!this.options.flex) {
            break
          }
        }
      }

    if (a) {
      r=this.test_match(a,y[u]);
      return r!==false?r:false;
    }

    if (this._input==="") {
      return this.EOF;
    }

    return this.parseError(`Lexical error on line ${this.yylineno+1}${`. Unrecognized text.
    `}${this.showPosition()}`,{text:"",token:null,line:this.yylineno});
  },"next"),lex:a2(function(){const a=this.next();return a||this.lex()},"lex"),begin:a2(function(a){this.conditionStack.push(a)},"begin"),popState:a2(function(){const a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a2(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a2(function(a){
    a=this.conditionStack.length-1-Math.abs(a||0);
    return a>=0?this.conditionStack[a]:"INITIAL";
  },"topState"),pushState:a2(function(a){this.begin(a)},"pushState"),stateStackSize:a2(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":true},performAction:a2(function(a,c,u,y){switch(u){case 0:
    {
      break;
    }case 1:
    {
      break;
    }case 2:
    {
      return 10;
    }case 3:
    {
      break;
    }case 4:
    {
      break;
    }case 5:
    {
      return 4;
    }case 6:
    {
      return 11;
    }case 7:
    {
      this.begin("acc_title");
      return 12;
    }case 8:
    {
      this.popState();
      return "acc_title_value";
    }case 9:
    {
      this.begin("acc_descr");
      return 14;
    }case 10:
    {
      this.popState();
      return "acc_descr_value";
    }case 11:
    {
      this.begin("acc_descr_multiline");break;
    }case 12:
    {
      this.popState();break;
    }case 13:
    {
      return"acc_descr_multiline_value";
    }case 14:
    {
      return 17;
    }case 15:
    {
      return 21;
    }case 16:
    {
      return 20;
    }case 17:
    {
      return 6;
    }case 18:
    {
      return"INVALID"
    }}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^:\n]+)/i,/^(?::\s(?:[^:\n]|:(?!\s))+)/i,/^(?:[^#:\n]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:false},acc_descr:{rules:[10],inclusive:false},acc_title:{rules:[8],inclusive:false},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:true}}};return x})();

  p.lexer=k;function b(){this.yy={}}
  a2(b,"Parser");
  b.prototype=p;
  p.Parser=b;
  return new b;
})();Q.parser=Q;
const Tt=Q;
var at={};
ay(at,{addEvent:() => yt,addSection:() => ht,addTask:() => pt,addTaskOrg:() => gt,clear:() => ct,default:() => It,getCommonDb:() => ot,getSections:() => dt,getTasks:() => ut});
let F="";
let lt=0;
const X=[];
const G=[];
const z=[];

var ot=a2(() => b8,"getCommonDb");

var ct=a2(() => {
  X.length=0;
  G.length=0;
  F="";
  z.length=0;
  at_1();
},"clear");

var ht=a2(n => {
  F=n;
  X.push(n);
},"addSection");

var dt=a2(() => X,"getSections");

var ut=a2(() => {
  let n=it();const t=100;let e=0;

  while (!n&&e<t) {
      n=it();
      e++;
    }

  G.push(...z);
  return G;
},"getTasks");

var pt=a2((n, t, e) => {const l={id:lt++,section:F,type:F,task:n,score:t||0,events:e?[e]:[]};z.push(l)},"addTask");

var yt=a2(n => {z.find(e => e.id===lt-1).events.push(n)},"addEvent");

var gt=a2(n => {const t={section:F,type:F,description:n,task:n,classes:[]};G.push(t)},"addTaskOrg");

var it=a2(() => {const n=a2(e => z[e].processed,"compileTask");let t=true;for (const[e,l] of z.entries()) {
  n(e);
  t=t&&l.processed;
}return t},"compileTasks");

var It={clear:ct,getCommonDb:ot,addSection:ht,getSections:dt,getTasks:ut,addTask:pt,addTaskOrg:gt,addEvent:yt};
const Nt=12;

const q=a2((n, t) => {
  const e=n.append("rect");
  e.attr("x",t.x);
  e.attr("y",t.y);
  e.attr("fill",t.fill);
  e.attr("stroke",t.stroke);
  e.attr("width",t.width);
  e.attr("height",t.height);
  e.attr("rx",t.rx);
  e.attr("ry",t.ry);

  if (t.class!==void 0) {
    e.attr("class",t.class);
  }

  return e;
},"drawRect");

const Lt=a2((n, t) => {
  const l=n.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible");
  const i=n.append("g");
  i.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");
  i.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");
  function d(m){const p=d().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);m.append("path").attr("class","mouth").attr("d",p).attr("transform",`translate(${t.cx},${t.cy+2})`)}a2(d,"smile");function h(m){const p=d().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);m.append("path").attr("class","mouth").attr("d",p).attr("transform",`translate(${t.cx},${t.cy+7})`)}a2(h,"sad");function f(m){m.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}
  a2(f,"ambivalent");

  if (t.score>3) {
    d(i);
  } else if (t.score<3) {
    h(i);
  } else {
    f(i);
  }

  return l;
},"drawFace");

const Mt=a2((n, t) => {
  const e=n.append("circle");
  e.attr("cx",t.cx);
  e.attr("cy",t.cy);
  e.attr("class",`actor-${t.pos}`);
  e.attr("fill",t.fill);
  e.attr("stroke",t.stroke);
  e.attr("r",t.r);

  if (e.class!==void 0) {
    e.attr("class",e.class);
  }

  if (t.title!==void 0) {
    e.append("title").text(t.title);
  }

  return e;
},"drawCircle");

const ft=a2((n, t) => {
  const e=t.text.replace(/<br\s*\/?>/gi," ");
  const l=n.append("text");
  l.attr("x",t.x);
  l.attr("y",t.y);
  l.attr("class","legend");
  l.style("text-anchor",t.anchor);

  if (t.class!==void 0) {
    l.attr("class",t.class);
  }

  const i=l.append("tspan");
  i.attr("x",t.x+t.textMargin*2);
  i.text(e);
  return l;
},"drawText");

const $t=a2((n, t) => {
  function e(i,d,h,f,m){return `${i},${d} ${i+h},${d} ${i+h},${d+f-m} ${i+h-m*1.2},${d+f} ${i},${d+f}`;}a2(e,"genPoints");const l=n.append("polygon");
  l.attr("points",e(t.x,t.y,50,20,7));
  l.attr("class","labelBox");
  t.y=t.y+t.labelMargin;
  t.x=t.x+0.5/* .5 */*t.labelMargin;
  ft(n,t);
},"drawLabel");

const Ht=a2((n, t, e) => {
  const l=n.append("g");
  const i=Y();
  i.x=t.x;
  i.y=t.y;
  i.fill=t.fill;
  i.width=e.width;
  i.height=e.height;
  i.class=`journey-section section-type-${t.num}`;
  i.rx=3;
  i.ry=3;
  q(l,i);
  mt(e)(t.text,l,i.x,i.y,i.width,i.height,{class:`journey-section section-type-${t.num}`},e,t.colour);
},"drawSection");

let rt=-1;

const Pt=a2((n, t, e) => {
  const l=t.x+e.width/2;
  const i=n.append("g");
  rt++;
  i.append("line").attr("id",`task${rt}`).attr("x1",l).attr("y1",t.y).attr("x2",l).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666");
  Lt(i,{cx:l,cy:300+(5-t.score)*30,score:t.score});
  const h=Y();
  h.x=t.x;
  h.y=t.y;
  h.fill=t.fill;
  h.width=e.width;
  h.height=e.height;
  h.class=`task task-type-${t.num}`;
  h.rx=3;
  h.ry=3;
  q(i,h);
  mt(e)(t.task,i,h.x,h.y,h.width,h.height,{class:"task"},e,t.colour);
},"drawTask");

const At=a2((n, t) => {q(n,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},"drawBackgroundRect");
const Ct=a2(() => ({
  x:0,
  y:0,
  fill:void 0,
  "text-anchor":"start",
  width:100,
  height:100,
  textMargin:0,
  rx:0,
  ry:0
}),"getTextObj");
var Y=a2(() => ({
  x:0,
  y:0,
  width:100,
  anchor:"start",
  height:100,
  rx:0,
  ry:0
}),"getNoteRect");

var mt = (() => {
  function n(i,d,h,f,m,p,k,b){const x=d.append("text").attr("x",h+m/2).attr("y",f+p/2+5).style("font-color",b).style("text-anchor","middle").text(i);l(x,k)}a2(n,"byText");function t(i,d,h,f,m,p,k,b,x){
    const {taskFontSize,taskFontFamily}=b;
    const c=i.split(/<br\s*\/?>/gi);
    for(let u=0;u<c.length;u++){
      const y=u*taskFontSize-taskFontSize*(c.length-1)/2;
      const o=d.append("text").attr("x",h+m/2).attr("y",f).attr("fill",x).style("text-anchor","middle").style("font-size",taskFontSize).style("font-family",taskFontFamily);
      o.append("tspan").attr("x",h+m/2).attr("dy",y).text(c[u]);
      o.attr("y",f+p/2).attr("dominant-baseline","central").attr("alignment-baseline","central");
      l(o,k);
    }
  }a2(t,"byTspan");function e(i,d,h,f,m,p,k,b){
    const x=d.append("switch");
    const a=x.append("foreignObject").attr("x",h).attr("y",f).attr("width",m).attr("height",p).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");
    a.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(i);
    t(i,x,h,f,m,p,k,b);
    l(a,k);
  }a2(e,"byFo");function l(i,d){for (const h in d) {
  if (h in d) {
    i.attr(h,d[h]);
  }
}}
  a2(l,"_setTextAttrs");
  return i => i.textPlacement==="fo"?e:i.textPlacement==="old"?n:t;
})();

const Rt=a2(n => {n.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics");
function D(n,t){n.each(function(){
  const e=a8(this);
  const l=e.text().split(/(\s+|<br>)/).reverse();
  let i;
  let d=[];
  const h=1.1;
  const f=e.attr("y");
  const m=parseFloat(e.attr("dy"));
  let p=e.text(null).append("tspan").attr("x",0).attr("y",f).attr("dy",`${m}em`);
  for (let k=0; k<l.length; k++) {
    i=l[l.length-1-k];
    d.push(i);
    p.text(d.join(" ").trim());

    if ((p.node().getComputedTextLength()>t || i==="<br>")) {
      d.pop();
      p.text(d.join(" ").trim());
      i==="<br>"?d=[""]:d=[i];
      p=e.append("tspan").attr("x",0).attr("y",f).attr("dy",`${h}em`).text(i);
    }
  }
})}a2(D,"wrap");

const Ft=a2((n, t, e, l) => {
  const i=e%Nt-1;
  const d=n.append("g");
  t.section=i;
  d.attr("class",`${t.class?`${t.class} `:""}timeline-node section-${i}`);
  const h=d.append("g");
  const f=d.append("g");
  const p=f.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(D,t.width).node().getBBox();
  const k=l.fontSize?.replace?l.fontSize.replace("px",""):l.fontSize;
  t.height=p.height+k*1.1*0.5/* .5 */+t.padding;
  t.height=Math.max(t.height,t.maxHeight);
  t.width=t.width+2*t.padding;
  f.attr("transform",`translate(${t.width/2}, ${t.padding/2})`);
  Vt(h,t,i,l);
  return t;
},"drawNode");

const zt=a2((n, t, e) => {
  const l=n.append("g");
  const d=l.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(D,t.width).node().getBBox();
  const h=e.fontSize?.replace?e.fontSize.replace("px",""):e.fontSize;
  l.remove();
  return d.height+h*1.1*0.5/* .5 */+t.padding;
},"getVirtualNodeHeight");

var Vt=a2((n, t, e) => {
  n.append("path").attr("id",`node-${t.id}`).attr("class",`node-bkg node-${t.type}`).attr("d",`M0 ${t.height-5} v${-t.height+10} q0,-5 5,-5 h${t.width-10} q5,0 5,5 v${t.height-5} H0 Z`);
  n.append("line").attr("class",`node-line-${e}`).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height);
},"defaultBkg");

const C={drawRect:q,drawCircle:Mt,drawSection:Ht,drawText:ft,drawLabel:$t,drawTask:Pt,drawBackgroundRect:At,getTextObj:Ct,getNoteRect:Y,initGraphics:Rt,drawNode:Ft,getVirtualNodeHeight:zt};

const Wt=a2((n, t, e, l) => {
  const i=a7();
  const d=i.timeline?.leftMargin??50;
  a9.debug("timeline",l.db);const h=i.securityLevel;let f;

  if (h==="sandbox") {
    (f = a8(`#i${t}`));
  }

  const p=(h==="sandbox"?a8(f.nodes()[0].contentDocument.body):a8("body")).select(`#${t}`);p.append("g");
  const k=l.db.getTasks();
  const b=l.db.getCommonDb().getDiagramTitle();
  a9.debug("task",k);
  C.initGraphics(p);
  const x=l.db.getSections();a9.debug("sections",x);
  let r=0;
  let a=0;
  let c=0;
  let u=0;
  let y=50+d;
  let o=50;
  u=50;
  let w=0;
  let v=true;
  x.forEach(H => {
    const g={number:w,descr:H,section:w,width:150,padding:20,maxHeight:r};
    const _=C.getVirtualNodeHeight(p,g,i);
    a9.debug("sectionHeight before draw",_);
    r=Math.max(r,_+20);
  });
  let N=0;
  let P=0;
  a9.debug("tasks.length",k.length);for(const[H,g]of k.entries()){
    const _={number:H,descr:g,section:g.section,width:150,padding:20,maxHeight:a};
    const L=C.getVirtualNodeHeight(p,_,i);
    a9.debug("taskHeight before draw",L);
    a=Math.max(a,L+20);
    N=Math.max(N,g.events.length);
    let M=0;for(const W of g.events){const Z={descr:W,section:g.section,number:g.section,width:150,padding:20,maxHeight:50};M+=C.getVirtualNodeHeight(p,Z,i)}

    if (g.events.length>0) {
      (M += (g.events.length-1)*10);
    }

    P=Math.max(P,M);
  }
  a9.debug("maxSectionHeight before draw",r);
  a9.debug("maxTaskHeight before draw",a);

  if (x&&x.length>0) {
    x.forEach(H=>{
      const g=k.filter(W => W.section===H);

      const _={number:w,descr:H,section:w,width:200*Math.max(g.length,1)-50,padding:20,maxHeight:r};
      a9.debug("sectionNode",_);
      const L=p.append("g");
      const M=C.drawNode(L,_,w,i);
      a9.debug("sectionNode output",M);
      L.attr("transform",`translate(${y}, ${u})`);
      o+=r+50;

      if (g.length>0) {
        st(p,g,w,y,o,a,i,N,P,r,false);
      }

      y+=200*Math.max(g.length,1);
      o=u;
      w++;
    });
  } else {
    v=false;
    st(p,k,w,y,o,a,i,N,P,r,true);
  }

  const V=p.node().getBBox();
  a9.debug("bounds",V);

  if (b) {
    p.append("text").text(b).attr("x",V.width/2-d).attr("font-size","4ex").attr("font-weight","bold").attr("y",20);
  }

  c=v?r+a+150:a+100;
  p.append("g").attr("class","lineWrapper").append("line").attr("x1",d).attr("y1",c).attr("x2",V.width+3*d).attr("y2",c).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");
  b4(void 0,p,i.timeline?.padding??50,i.timeline?.useMaxWidth??false);
},"draw");

var st=a2((n, t, e, l, i, d, h, f, m, p, k) => {for(const b of t){
  const x={descr:b.task,section:e,number:e,width:150,padding:20,maxHeight:d};a9.debug("taskNode",x);
  const r=n.append("g").attr("class","taskWrapper");
  const c=C.drawNode(r,x,e,h).height;
  a9.debug("taskHeight after draw",c);
  r.attr("transform",`translate(${l}, ${i})`);
  d=Math.max(d,c);

  if (b.events) {
    const u=n.append("g").attr("class","lineWrapper");let y=d;
    i+=100;
    y=y+Bt(n,b.events,e,l,i,h);
    i-=100;
    u.append("line").attr("x1",l+190/2).attr("y1",i+d).attr("x2",l+190/2).attr("y2",i+d+100+m+100).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5");
  }

  l=l+200;

  if (k&&!h.timeline?.disableMulticolor) {
    e++;
  }
}i=i-10},"drawTasks");

var Bt=a2((n, t, e, l, i, d) => {
  let h=0;const f=i;i=i+100;for(const m of t){
    const p={descr:m,section:e,number:e,width:150,padding:20,maxHeight:50};a9.debug("eventNode",p);
    const k=n.append("g").attr("class","eventWrapper");
    const x=C.drawNode(k,p,e,d).height;
    h=h+x;
    k.attr("transform",`translate(${l}, ${i})`);
    i=i+10+x;
  }
  i=f;
  return h;
},"drawEvents");

const Ot={setConf:a2(()=>{},"setConf"),draw:Wt};

const jt=a2(n=>{let t="";for (let e=0; e<n.THEME_COLOR_LIMIT; e++) {
  n[`lineColor${e}`]=n[`lineColor${e}`]||n[`cScaleInv${e}`];

  if (b5(n[`lineColor${e}`])) {
    n[`lineColor${e}`]=b6(n[`lineColor${e}`],20);
  } else {
    n[`lineColor${e}`]=b7(n[`lineColor${e}`],20);
  }
}for(let e=0;e<n.THEME_COLOR_LIMIT;e++){const l=`${17-3*e}`;t+=`
    .section-${e-1} rect, .section-${e-1} path, .section-${e-1} circle, .section-${e-1} path  {
      fill: ${n[`cScale${e}`]};
    }
    .section-${e-1} text {
     fill: ${n[`cScaleLabel${e}`]};
    }
    .node-icon-${e-1} {
      font-size: 40px;
      color: ${n[`cScaleLabel${e}`]};
    }
    .section-edge-${e-1}{
      stroke: ${n[`cScale${e}`]};
    }
    .edge-depth-${e-1}{
      stroke-width: ${l};
    }
    .section-${e-1} line {
      stroke: ${n[`cScaleInv${e}`]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n[`cScaleLabel${e}`]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},"genSections");

const Gt=a2(n => `
  .edge {
    stroke-width: 3;
  }
  ${jt(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
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
  .eventWrapper  {
   filter: brightness(120%);
  }
`,"getStyles");

const qt=Gt;

export const diagram = {db:at,renderer:Ot,parser:Tt,styles:qt};
//# sourceMappingURL=timeline-definition-IT6M3QCI-BCE9kJdP.js.map

export{diagram as diagram};
//# sourceMappingURL=timeline-definition-IT6M3QCI-BCE9kJdP.js.map
