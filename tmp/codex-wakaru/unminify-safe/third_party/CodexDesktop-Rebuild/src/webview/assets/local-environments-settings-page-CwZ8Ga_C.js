import{F,c,j,B,BN,M,Co,cp,cq,s,cr,cx as cs_1,q,A,r,h,l,ct as ct_1,X,Z as Z_1,cu,cv,cw,m,cx,cy,P,cz,CA,d,e,f,cB,s as S1,K,CC,CD,CE,BH,cF,cG,CH,cI,G,O,cJ,cK,cL,BJ,cM,p,S,bU}from"./index-CgwAo6pj.js";function Bt(t,e){const s=F(t)??t;return e?.label??s}function Js_1(t){
 const e=c.c(17);
 const {workspaceRoot,workspaceGroup,mode,onBack}=t;
 let a;

 if (e[0]!==workspaceGroup||e[1]!==workspaceRoot) {
  a=Bt(workspaceRoot,workspaceGroup);
  e[0]=workspaceGroup;
  e[1]=workspaceRoot;
  e[2]=a;
 } else {
  a=e[2];
 }

 const d=a;let f;

 if (e[3]!==onBack) {
  f=onBack?<B color="ghost" size="toolbar" onClick={onBack}><BN className="icon-2xs" /><M
    id="settings.localEnvironments.breadcrumb.back"
    defaultMessage="Back"
    description="Button label to go back to local environments list" /></B>:null;

  e[3]=onBack;
  e[4]=f;
 } else {
  f=e[4];
 }

 let m;
 let c;

 if (e[5]===Symbol.for("react.memo_cache_sentinel")) {
  m=<span>{<M
    id="settings.localEnvironments.breadcrumb.root"
    defaultMessage="Environments"
    description="Breadcrumb label for the local environments page" />}</span>;

  c=<Co className="icon-xs text-token-text-secondary" />;
  e[5]=m;
  e[6]=c;
 } else {
  m=e[5];
  c=e[6];
 }

 let l;

 if (e[7]!==d) {
  l=<span className="text-token-text-primary">{d}</span>;
  e[7]=d;
  e[8]=l;
 } else {
  l=e[8];
 }

 let h;

 if (e[9]!==mode) {
  h=mode==="edit"?<><Co className="icon-xs text-token-text-secondary" /><span>{<M
     id="settings.localEnvironments.breadcrumb.edit"
     defaultMessage="edit"
     description="Breadcrumb label for local environment edit mode" />}</span></>:null;

  e[9]=mode;
  e[10]=h;
 } else {
  h=e[10];
 }

 let u;

 if (e[11]!==l||e[12]!==h) {
  u=<div className="flex items-center gap-1">{m}{c}{l}{h}</div>;
  e[11]=l;
  e[12]=h;
  e[13]=u;
 } else {
  u=e[13];
 }

 let p;

 if (e[14]!==f||e[15]!==u) {
  p=<nav className="flex items-center gap-2 text-sm text-token-text-secondary">{f}{u}</nav>;
  e[14]=f;
  e[15]=u;
  e[16]=p;
 } else {
  p=e[16];
 }

 return p;
}
const ue=cp({darwin:{id:"settings.localEnvironments.actions.item.platforms.macos",defaultMessage:"macOS",description:"Label for macOS platform toggle"},linux:{id:"settings.localEnvironments.actions.item.platforms.linux",defaultMessage:"Linux",description:"Label for Linux platform toggle"},win32:{id:"settings.localEnvironments.actions.item.platforms.windows",defaultMessage:"Windows",description:"Label for Windows platform toggle"}});
const Fe=new WeakMap;
const Ke=new WeakMap;
const Qe={current:[]};
let st=false;
let De=0;
const Ie=new Set;
const Re=new Map;
function Wt(t){const e=Array.from(t).sort((s, i) => s instanceof fe&&s.options.deps.includes(i)?1:i instanceof fe&&i.options.deps.includes(s)?-1:0);for(const s of e){
 if (Qe.current.includes(s)) {
  continue;
 }
 Qe.current.push(s);
 s.recompute();
 const i=Ke.get(s);if (i) {
  for(const o of i){
   const r=Fe.get(o);

   if (r) {
    Wt(r);
   }
  }
 }
}}function ks(t){const e={prevVal:t.prevState,currentVal:t.state};for (const s of t.listeners) {
 s(e)
}}function Vs(t){const e={prevVal:t.prevState,currentVal:t.state};for (const s of t.listeners) {
 s(e)
}}function zt(t){
 if (De>0&&!Re.has(t)) {
  Re.set(t,t.prevState);
 }

 Ie.add(t);

 if (!(De>0)&&!st) {
  try{for(st=true;Ie.size>0;){const e=Array.from(Ie);Ie.clear();for(const s of e){
   const i=Re.get(s)??s.prevState;
   s.prevState=i;
   ks(s);
  }for(const s of e){
   const i=Fe.get(s);

   if (i) {
    Qe.current.push(s);
    Wt(i);
   }
  }for(const s of e){const i=Fe.get(s);if (i) {
   for (const o of i) {
    Vs(o)
   }
  }}}}finally{
   st=false;
   Qe.current=[];
   Re.clear();
  }
 }
}function le(t){De++;try{t()}finally{
 De--;

 if (De===0)
  {
   const e=Ie.values().next().value;

   if (e) {
    zt(e);
   }
  }
}}function Fs(t){return typeof t=="function"}class ct{constructor(e,s){
 this.listeners=new Set;

 this.subscribe=i=>{
  let o;
  let r;
  this.listeners.add(i);const a=(r=(o=this.options)==null?void 0:o.onSubscribe)==null?void 0:r.call(o,i,this);return ()=>{
   this.listeners.delete(i);
   a?.();
  };
 };

 this.prevState=e;
 this.state=e;
 this.options=s;
}setState(e){
 let s;
 let i;
 let o;
 this.prevState=this.state;

 if ((s=this.options)!=null&&s.updateFn) {
  this.state=this.options.updateFn(this.prevState)(e);
 } else if (Fs(e)) {
  this.state=e(this.prevState);
 } else {
  this.state=e;
 }

 if ((o = (i=this.options)==null?void 0:i.onUpdate) != null) {
  o.call(i);
 }

 zt(this);
}}class fe{constructor(e){
 this.listeners=new Set;
 this._subscriptions=[];
 this.lastSeenDepValues=[];

 this.getDepVals=()=>{
  const s=this.options.deps.length;
  const i=new Array(s);
  const o=new Array(s);
  for(let r=0;r<s;r++){
   const a=this.options.deps[r];
   i[r]=a.prevState;
   o[r]=a.state;
  }
  this.lastSeenDepValues=o;
  return {prevDepVals:i,currDepVals:o,prevVal:this.prevState??void 0};
 };

 this.recompute=()=>{
  let s;
  let i;
  this.prevState=this.state;const o=this.getDepVals();
  this.state=this.options.fn(o);

  if ((i = (s=this.options).onUpdate) != null) {
   i.call(s);
  }
 };

 this.checkIfRecalculationNeededDeeply=()=>{
  for (const r of this.options.deps) {
   if (r instanceof fe) {
    r.checkIfRecalculationNeededDeeply();
   }
  }let s=false;
  const i=this.lastSeenDepValues;
  const {currDepVals}=this.getDepVals();
  for (let r=0; r<currDepVals.length; r++) {
   if(currDepVals[r]!==i[r]){s=true;break}
  }

  if (s) {
   this.recompute();
  }
 };

 this.mount=() => {
  this.registerOnGraph();
  this.checkIfRecalculationNeededDeeply();

  return ()=>{this.unregisterFromGraph();for (const s of this._subscriptions) {
   s()
  }};
 };

 this.subscribe=s=>{
  let i;
  let o;
  this.listeners.add(s);const r=(o=(i=this.options).onSubscribe)==null?void 0:o.call(i,s,this);return ()=>{
   this.listeners.delete(s);
   r?.();
  };
 };

 this.options=e;
 this.state=e.fn({prevDepVals:void 0,prevVal:void 0,currDepVals:this.getDepVals().currDepVals});
}registerOnGraph(e=this.options.deps){for (const s of e) {
 if (s instanceof fe) {
  s.registerOnGraph();
  this.registerOnGraph(s.options.deps);
 } else if(s instanceof ct){
  let i=Fe.get(s);

  if (!i) {
   i=new Set;
   Fe.set(s,i);
  }

  i.add(this);
  let o=Ke.get(this);

  if (!o) {
   o=new Set;
   Ke.set(this,o);
  }

  o.add(s);
 }
}}unregisterFromGraph(e=this.options.deps){for (const s of e) {
 if (s instanceof fe) {
  this.unregisterFromGraph(s.options.deps);
 } else
  if(s instanceof ct){
   const i=Fe.get(s);

   if (i) {
    i.delete(this);
   }

   const o=Ke.get(this);

   if (o) {
    o.delete(s);
   }
  }
}}}const Ls=class{constructor(t,e){
 this.fn=t;
 this.options=e;
 this.lastExecutionTime=0;
 this.isPending=false;

 this.maybeExecute=(...s)=>{const i=Date.now()-this.lastExecutionTime;if (this.options.leading&&i>=this.options.wait) {
  this.execute(...s);
 } else {
  this.lastArgs=s;

  if (!this.timeoutId&&this.options.trailing) {
   const o=this.options.wait-i;
   this.isPending=true;
   this.timeoutId=setTimeout(()=>{
    if (this.lastArgs!==void 0) {
     this.execute(...this.lastArgs);
    }
   },o);
  }
 }};

 this.execute=(...s)=>{
  this.fn(...s);
  this.options.onExecute?.(s,this);
  this.lastExecutionTime=Date.now();
  this.clearTimeout();
  this.lastArgs=void 0;
  this.isPending=false;
 };

 this.flush=()=>{
  if (this.isPending&&this.lastArgs) {
   this.execute(...this.lastArgs);
  }
 };

 this.cancel=()=>{
  this.clearTimeout();
  this.lastArgs=void 0;
  this.isPending=false;
 };

 this.clearTimeout=()=>{
  if (this.timeoutId) {
   clearTimeout(this.timeoutId);
   this.timeoutId=void 0;
  }
 };

 if (this.options.leading===void 0&&this.options.trailing===void 0) {
  this.options.leading=true;
  this.options.trailing=true;
 }
}};function Ns(t,e){return new Ls(t,e).maybeExecute}class As{#r=true;#t;#e;#u;#s;#a;#i;#l;#f=0;#h=5;#o=false;#c=false;#n=null;#m=()=>{
 this.debugLog("Connected to event bus");
 this.#a=true;
 this.#o=false;
 this.debugLog("Emitting queued events",this.#s);

 this.#s.forEach(e => this.emitEventToBus(e));

 this.#s=[];
 this.stopConnectLoop();
 this.#e().removeEventListener("tanstack-connect-success",this.#m);
};#d=()=>{
 if(this.#f<this.#h){
  this.#f++;
  this.dispatchCustomEvent("tanstack-connect",{});
  return
 }
 this.#e().removeEventListener("tanstack-connect",this.#d);
 this.#c=true;
 this.debugLog("Max retries reached, giving up on connection");
 this.stopConnectLoop();
};#p=()=>{
 if (!this.#o) {
  this.#o=true;
  this.#e().addEventListener("tanstack-connect-success",this.#m);
  this.#d();
 }
};constructor({pluginId,debug=false,enabled=true,reconnectEveryMs=300}){
 this.#t=pluginId;
 this.#r=enabled;
 this.#e=this.getGlobalTarget;
 this.#u=debug;
 this.debugLog(" Initializing event subscription for plugin",this.#t);
 this.#s=[];
 this.#a=false;
 this.#c=false;
 this.#i=null;
 this.#l=reconnectEveryMs;
}startConnectLoop(){
 if (this.#i === null && !this.#a) {
  this.debugLog(`Starting connect loop (every ${this.#l}ms)`);
  this.#i=setInterval(this.#d,this.#l);
 }
}stopConnectLoop(){
 this.#o=false;

 if (this.#i!==null) {
  clearInterval(this.#i);
  this.#i=null;
  this.#s=[];
  this.debugLog("Stopped connect loop");
 }
}debugLog(...e){
 if (this.#u) {
  console.log(`🌴 [tanstack-devtools:${this.#t}-plugin]`,...e);
 }
}getGlobalTarget(){if (typeof globalThis !== "undefined"&&globalThis.__TANSTACK_EVENT_TARGET__) {
 this.debugLog("Using global event target");
 return globalThis.__TANSTACK_EVENT_TARGET__;
}if (typeof window !== "undefined"&&typeof window.addEventListener !== "undefined") {
 this.debugLog("Using window as event target");
 return window;
}const e=typeof EventTarget !== "undefined"?new EventTarget:void 0;return typeof e === "undefined"||typeof e.addEventListener === "undefined"?(this.debugLog("No event mechanism available, running in non-web environment"),{addEventListener:()=>{},removeEventListener:()=>{},dispatchEvent:() => false}):(this.debugLog("Using new EventTarget as fallback"),e);}getPluginId(){return this.#t}dispatchCustomEventShim(e,s){try{const i=new Event(e,{detail:s});this.#e().dispatchEvent(i)}catch{this.debugLog("Failed to dispatch shim event")}}dispatchCustomEvent(e,s){try{this.#e().dispatchEvent(new CustomEvent(e,{detail:s}))}catch{this.dispatchCustomEventShim(e,s)}}emitEventToBus(e){
 this.debugLog("Emitting event to client bus",e);
 this.dispatchCustomEvent("tanstack-dispatch-event",e);
}createEventPayload(e,s){return{type:`${this.#t}:${e}`,payload:s,pluginId:this.#t}}emit(e,s){
 if(!this.#r){this.debugLog("Event bus client is disabled, not emitting event",e,s);return}

 if (this.#n) {
  this.debugLog("Emitting event to internal event target",e,s);
  this.#n.dispatchEvent(new CustomEvent(`${this.#t}:${e}`,{detail:this.createEventPayload(e,s)}));
 }

 if (this.#c)
  {this.debugLog("Previously failed to connect, not emitting to bus");return}

 if(!this.#a){
  this.debugLog("Bus not available, will be pushed as soon as connected");
  this.#s.push(this.createEventPayload(e,s));

  if (typeof CustomEvent !== "undefined"&&!this.#o) {
   this.#p();
   this.startConnectLoop();
  }

  return
 }return this.emitEventToBus(this.createEventPayload(e,s))
}on(e,s,i){
 const o=i?.withEventTarget??false;
 const r=`${this.#t}:${e}`;

 if (o) {
  this.#n||(this.#n=new EventTarget);
  this.#n.addEventListener(r,d=>{s(d.detail)});
 }

 if (!this.#r) {
  this.debugLog("Event bus client is disabled, not registering event",r);
  return ()=>{};
 }

 const a=d=>{
  this.debugLog("Received event from bus",d.detail);
  s(d.detail);
 };
 this.#e().addEventListener(r,a);
 this.debugLog("Registered event to bus",r);

 return ()=>{
  if (o) {
   this.#n?.removeEventListener(r,a);
  }

  this.#e().removeEventListener(r,a);
 };
}onAll(e){
 if (!this.#r) {
  this.debugLog("Event bus client is disabled, not registering event");
  return ()=>{};
 }const s=i=>{const o=i.detail;e(o)};
 this.#e().addEventListener("tanstack-devtools-global",s);

 return () => this.#e().removeEventListener("tanstack-devtools-global",s);
}onAllPluginEvents(e){
 if (!this.#r) {
  this.debugLog("Event bus client is disabled, not registering event");
  return ()=>{};
 }const s=i=>{
 const o=i.detail;

 if (!this.#t || o.pluginId === this.#t) {
  e(o);
 }
};
 this.#e().addEventListener("tanstack-devtools-global",s);

 return () => this.#e().removeEventListener("tanstack-devtools-global",s);
}}class Cs extends As{constructor(){super({pluginId:"form-devtools",reconnectEveryMs:1000/* 1e3 */})}}const re=new Cs;function Ye(t,e){return typeof t=="function"?t(e):t}function $e(t,e){return pt(e).reduce((i,o)=>{if (i===null) {
 return null;
}if (typeof i !== "undefined") {
 return i[o]
}},t);}function Be(t,e,s){const i=pt(e);function o(r){if (!i.length) {
 return Ye(s,r);
}const a=i.shift();if (typeof a=="string"||typeof a=="number"&&!Array.isArray(r)) {
 return typeof r=="object"?(r===null&&(r={}),{...r,[a]:o(r[a])}):{[a]:o()};
}if(Array.isArray(r)&&typeof a=="number"){const d=r.slice(0,a);return [...(d.length ? d : new Array(a)),o(r[a]),...r.slice(a+1)];}return[...new Array(a),o()]}return o(t)}function Ts(t,e){const s=pt(e);function i(o){if (!o) {
 return;
}if(s.length===1){const a=s[0];if (Array.isArray(o)&&typeof a=="number") {
 return o.filter((m, c) => c!==a);
}const{[a]:d,...f}=o;return f}const r=s.shift();if ((typeof r=="string"||typeof r=="number"&&!Array.isArray(o))&&typeof o=="object") {
 return{...o,[r]:i(o[r])};
}if(typeof r=="number"&&Array.isArray(o)){if (r>=o.length) {
 return o;
}const a=o.slice(0,r);return [...(a.length ? a : new Array(r)),i(o[r]),...o.slice(r+1)];}throw new Error("It seems we have created an infinite loop in deleteBy. ")}return i(t)}
const Is=/^(\d+)$/gm;
const Ds=/\.(\d+)(?=\.)/gm;
const Ps=/^(\d+)\./gm;
const _s=/\.(\d+$)/gm;
const Os=/\.{2,}/gm;
const dt="__int__";
const We=`${dt}$1`;
function pt(t){if (Array.isArray(t)) {
 return[...t];
}if (typeof t!="string") {
 throw new Error("Path must be a string.");
}return t.replace(/(^\[)|]/gm,"").replace(/\[/g,".").replace(Is,We).replace(Ds,`.${We}.`).replace(Ps,`${We}.`).replace(_s,`.${We}`).replace(Os,".").split(".").map(e=>{if(e.startsWith(dt)){
 const s=e.substring(dt.length);
 const i=parseInt(s,10);
 return String(i)===s?i:s
}return e});}function Rs(t){return!(Array.isArray(t)&&t.length===0)}function ut(t,e){const s=i => i.validators.filter(Boolean).map(o => ({
 cause:o.cause,
 validate:o.fn
}));return e.validationLogic({form:e.form,validators:e.validators,event:{type:t,async:false},runValidation:s});}function ft(t,e){
 const {asyncDebounceMs}=e;
 const {onBlurAsyncDebounceMs,onChangeAsyncDebounceMs,onDynamicAsyncDebounceMs}=e.validators||{};
 const a=asyncDebounceMs??0;

 const d=f => f.validators.filter(Boolean).map(m=>{
  const c=m?.cause||t;let l=a;switch(c){case "change":
    {
     l=onChangeAsyncDebounceMs??a;break;
    }case "blur":
    {
     l=onBlurAsyncDebounceMs??a;break;
    }case "dynamic":
    {
     l=onDynamicAsyncDebounceMs??a;break;
    }case "submit":
    {
     l=0;break
    }}

  if (t==="submit") {
   (l = 0);
  }

  return {cause:c,validate:m.fn,debounceMs:l};
 });

 return e.validationLogic({form:e.form,validators:e.validators,event:{type:t,async:true},runValidation:d});
}const mt=t => !!t&&typeof t=="object"&&"fields"in t;function ge(t,e){
 if (Object.is(t,e)) {
  return true;
 }if (typeof t!="object"||t===null||typeof e!="object"||e===null) {
  return false;
 }if (t instanceof Date&&e instanceof Date) {
  return t.getTime()===e.getTime();
 }if(t instanceof Map&&e instanceof Map){if (t.size!==e.size) {
  return false;
 }for (const[o,r] of t) {
  if (!e.has(o)||!Object.is(r,e.get(o))) {
   return false;
  }
 }return true;}if(t instanceof Set&&e instanceof Set){if (t.size!==e.size) {
  return false;
 }for (const o of t) {
  if (!e.has(o)) {
   return false;
  }
 }return true;}
 const s=Object.keys(t);
 const i=Object.keys(e);
 if (s.length!==i.length) {
  return false;
 }for (const o of s) {
  if (!i.includes(o)||!ge(t[o],e[o])) {
   return false;
  }
 }return true;
}

const bt=(
 {newFormValidatorError,isPreviousErrorFromFormValidator,previousErrorValue}
) => newFormValidatorError?{newErrorValue:newFormValidatorError,newSource:"form"}:isPreviousErrorFromFormValidator?{newErrorValue:void 0,newSource:void 0}:previousErrorValue?{newErrorValue:previousErrorValue,newSource:"field"}:{newErrorValue:void 0,newSource:void 0};

const yt=({formLevelError,fieldLevelError}) => fieldLevelError?{newErrorValue:fieldLevelError,newSource:"field"}:formLevelError?{newErrorValue:formLevelError,newSource:"form"}:{newErrorValue:void 0,newSource:void 0};

function Z(t,e){return t==null?e:{...t,...e}}let ye=256;const qe=[];let ze;

while (ye--) {
 qe[ye]=(ye+256).toString(16).substring(1);
}

function Gt(){
 let t=0;
 let e;
 let s="";
 if(!ze||ye+16>256){
  ze=new Array(256);

  for (t=256; t--; ) {
   ze[t]=256*Math.random()|0;
  }

  t=0;
  ye=0;
 }for (; t<16; t++) {
 e=ze[ye+t];

 if (t===6) {
  s+=qe[e&15|64];
 } else if (t===8) {
  s+=qe[e&63|128];
 } else {
  s+=qe[e];
 }

 if (t&1&&t>1&&t<11) {
  (s += "-");
 }
}
 ye++;
 return s;
}

const $s=Ns(t => re.emit("form-state",{id:t.formId,state:t.store.state}),{wait:300});

const ke=t=>{
 if (!t.validators) {
  return t.runValidation({validators:[],form:t.form});
 }
 const e=t.event.async;
 const s=e?void 0:{fn:t.validators.onMount,cause:"mount"};
 const i={fn:e?t.validators.onChangeAsync:t.validators.onChange,cause:"change"};
 const o={fn:e?t.validators.onBlurAsync:t.validators.onBlur,cause:"blur"};
 const r={fn:e?t.validators.onSubmitAsync:t.validators.onSubmit,cause:"submit"};
 const a=e?void 0:{fn:()=>{},cause:"server"};
 switch(t.event.type){case "mount":
  {
   return t.runValidation({validators:[s],form:t.form});
  }case "submit":
  {
   return t.runValidation({validators:[i,o,r,a],form:t.form});
  }case "server":
  {
   return t.runValidation({validators:[],form:t.form});
  }case "blur":
  {
   return t.runValidation({validators:[o,a],form:t.form});
  }case "change":
  {
   return t.runValidation({validators:[i,a],form:t.form});
  }default:
  {
   throw new Error(`Unknown validation event type: ${t.event.type}`)
  }}
};

function Bs(t,e){const s=new Map;for(const i of t){
 const o=i.path??[];
 let r=e;
 let a="";
 for(let d=0;d<o.length;d++){
  const f=o[d];if (f===void 0) {
    continue;
   }
  const m=typeof f=="object"?f.key:f;
  const c=Number(m);

  if (Array.isArray(r)&&!Number.isNaN(c)) {
   a+=`[${c}]`;
  } else {
   a+=(d>0?".":"")+String(m);
  }

  if (typeof r=="object"&&r!==null) {
   r=r[m];
  } else {
   r=void 0;
  }
 }s.set(a,(s.get(a)??[]).concat(i))
}return Object.fromEntries(s)}
const St=(t,e)=>{const s=Bs(t,e);return{form:s,fields:s}};

const Le={validate({value,validationSource},s){const i=s["~standard"].validate(value);if (i instanceof Promise) {
 throw new Error("async function passed to sync validator");
}if (i.issues) {
 return validationSource==="field"?i.issues:St(i.issues,value);
}},async validateAsync({value,validationSource},s){const i=await s["~standard"].validate(value);if (i.issues) {
 return validationSource==="field"?i.issues:St(i.issues,value);
}}};

const Ut=t => !!t&&"~standard"in t;

const Ve={isValidating:false,isTouched:false,isBlurred:false,isDirty:false,isPristine:true,isValid:true,isDefaultValue:true,errors:[],errorMap:{},errorSourceMap:{}};
function Ge(t){function e(c,l,h){
 const u=a(c,l,"move",h);
 const p=Math.min(l,h);
 const v=Math.max(l,h);
 for (let g=p; g<=v; g++) {
  u.push(r(c,g));
 }const x=Object.keys(t.fieldInfo).reduce((g, S) => {
 if (S.startsWith(r(c,l))) {
  g.set(S,t.getFieldMeta(S));
 }

 return g;
},new Map);
 f(u,l<h?"up":"down");

 Object.keys(t.fieldInfo).filter(g => g.startsWith(r(c,h))).forEach(g=>{
  const S=g.replace(r(c,h),r(c,l));
  const j=x.get(S);

  if (j) {
   t.setFieldMeta(g,j);
  }
 });
}function s(c,l){const h=a(c,l,"remove");f(h,"up")}function i(c,l,h){a(c,l,"swap",h).forEach(p=>{
 if (!p.toString().startsWith(r(c,l))) {
  return;
 }
 const v=p.toString().replace(r(c,l),r(c,h));
 const [x,g]=[t.getFieldMeta(p),t.getFieldMeta(v)];

 if (x) {
  t.setFieldMeta(v,x);
 }

 if (g) {
  t.setFieldMeta(p,g);
 }
})}function o(c,l){
 const h=a(c,l,"insert");
 f(h,"down");
 h.forEach(u=>{
  if (u.toString().startsWith(r(c,l))) {
   t.setFieldMeta(u,m());
  }
 });
}function r(c,l){return`${c}[${l}]`}function a(c,l,h,u){const p=[r(c,l)];switch(h){case "swap":
 {
  p.push(r(c,u));break;
 }case"move":{const[v,x]=[Math.min(l,u),Math.max(l,u)];for (let g=v; g<=x; g++) {
 p.push(r(c,g));
}break}default:{
 const v=t.getFieldValue(c);
 const x=Array.isArray(v)?v.length:0;
 for (let g=l+1; g<x; g++) {
  p.push(r(c,g));
 }break
}}return Object.keys(t.fieldInfo).filter(v => p.some(x => v.startsWith(x)));}function d(c,l){return c.replace(/\[(\d+)\]/,(h,u)=>{const p=parseInt(u,10);return`[${l==="up"?p+1:Math.max(0,p-1)}]`});}function f(c,l){(l==="up"?c:[...c].reverse()).forEach(u=>{
 const p=d(u.toString(),l);
 const v=t.getFieldMeta(p);

 if (v) {
  t.setFieldMeta(u,v);
 } else {
  t.setFieldMeta(u,m());
 }
})}const m=() => Ve;return{handleArrayMove:e,handleArrayRemove:s,handleArraySwap:i,handleArrayInsert:o}}function it(t){return {values:t.values??{},errorMap:t.errorMap??{},fieldMetaBase:t.fieldMetaBase??{},isSubmitted:t.isSubmitted??false,isSubmitting:t.isSubmitting??false,isValidating:t.isValidating??false,submissionAttempts:t.submissionAttempts??0,isSubmitSuccessful:t.isSubmitSuccessful??false,validationMetaMap:t.validationMetaMap??{onChange:void 0,onBlur:void 0,onSubmit:void 0,onMount:void 0,onServer:void 0,onDynamic:void 0}};}class Mt{constructor(e){
 this.options={};
 this.fieldInfo={};
 this.prevTransformArray=[];

 this.mount=()=>{
  const s=this.fieldMetaDerived.mount();
  const i=this.store.mount();
  const o=this.store.subscribe(()=>{$s(this)});
  const r=re.on("request-form-state",c=>{
   if (c.payload.id===this._formId) {
    re.emit("form-api",{id:this._formId,state:this.store.state,options:this.options});
   }
  });
  const a=re.on("request-form-reset",c=>{
   if (c.payload.id===this._formId) {
    this.reset();
   }
  });
  const d=re.on("request-form-force-submit",c=>{
   if (c.payload.id===this._formId) {
    this._devtoolsSubmissionOverride=true;
    this.handleSubmit();
    this._devtoolsSubmissionOverride=false;
   }
  });

  const f=()=>{
   d();
   a();
   r();
   o();
   s();
   i();
   re.emit("form-unmounted",{id:this._formId});
  };

  this.options.listeners?.onMount?.({formApi:this});const{onMount}=this.options.validators||{};
  re.emit("form-api",{id:this._formId,state:this.store.state,options:this.options});

  if (onMount) {
   this.validateSync("mount");
  }

  return f;
 };

 this.update=s=>{
  if (!s) {
   return;
  }const i=this.options;this.options=s;

  const o=!!s.transform?.deps?.some((d, f) => d!==this.prevTransformArray[f]);

  const r=s.defaultValues&&!ge(s.defaultValues,i.defaultValues)&&!this.state.isTouched;
  const a=!ge(s.defaultState,i.defaultState)&&!this.state.isTouched;

  if (r || a || o) {
   le(()=>{this.baseStore.setState(() => it(Object.assign({},this.state,a?s.defaultState:{},r?{values:s.defaultValues}:{},o?{_force_re_eval:!this.state._force_re_eval}:{})))});
   re.emit("form-api",{id:this._formId,state:this.store.state,options:this.options});
  }
 };

 this.reset=(s,i)=>{
  const {fieldMeta}=this.state;
  const r=this.resetFieldMeta(fieldMeta);

  if (s&&!i?.keepDefaultValues) {
   (this.options = {...this.options,defaultValues:s});
  }

  this.baseStore.setState(() => it({...this.options.defaultState,values:s??this.options.defaultValues??this.options.defaultState?.values,fieldMetaBase:r}));
 };

 this.validateAllFields=async s=>{
  const i=[];

  le(()=>{Object.values(this.fieldInfo).forEach(r=>{
   if (!r.instance) {
    return;
   }const a=r.instance;

   i.push(Promise.resolve().then(() => a.validate(s,{skipFormValidation:true})));

   if (!r.instance.state.meta.isTouched) {
    r.instance.setMeta(d => ({
     ...d,
     isTouched:true
    }));
   }
  })});

  return (await Promise.all(i)).flat();
 };

 this.validateArrayFieldsStartingFrom=async(s,i,o)=>{
  const r=this.getFieldValue(s);
  const a=Array.isArray(r)?Math.max(r.length-1,0):null;
  const d=[`${s}[${i}]`];
  for (let l=i+1; l<=(a??0); l++) {
   d.push(`${s}[${l}]`);
  }

  const f=Object.keys(this.fieldInfo).filter(l => d.some(h => l.startsWith(h)));

  const m=[];

  le(()=>{f.forEach(l=>{m.push(Promise.resolve().then(() => this.validateField(l,o)))})});

  return (await Promise.all(m)).flat();
 };

 this.validateField=(s,i)=>{const o=this.fieldInfo[s]?.instance;return o?(o.state.meta.isTouched||o.setMeta(r => ({
  ...r,
  isTouched:true
 })),o.validate(i)):[];};

 this.validateSync=s=>{
  const i=ut(s,{...this.options,form:this,validationLogic:this.options.validationLogic||ke});let o=false;const r={};

  le(()=>{
   for(const f of i){
    if (!f.validate) {
     continue;
    }
    const m=this.runValidator({validate:f.validate,value:{value:this.state.values,formApi:this,validationSource:"form"},type:"validate"});
    const {formError,fieldErrors}=He(m);
    const h=Te(f.cause);
    const u=new Set([...Object.keys(this.state.fieldMeta),...Object.keys(fieldErrors||{})]);
    for(const p of u){
     if (this.baseStore.state.fieldMetaBase[p]===void 0&&!fieldErrors?.[p]) {
      continue;
     }
     const v=this.getFieldMeta(p)??Ve;
     const {errorMap,errorSourceMap}=v;
     const S=fieldErrors?.[p];
     const {newErrorValue,newSource}=bt({newFormValidatorError:S,isPreviousErrorFromFormValidator:errorSourceMap?.[h]==="form",previousErrorValue:errorMap?.[h]});

     if (newSource==="form") {
      (r[p] = {...r[p],[h]:S});
     }

     if (errorMap?.[h]!==newErrorValue) {
      this.setFieldMeta(p,(L=Ve) => ({
       ...L,
       errorMap:{...L.errorMap,[h]:newErrorValue},
       errorSourceMap:{...L.errorSourceMap,[h]:newSource}
      }));
     }
    }

    if (this.state.errorMap?.[h]!==formError) {
     this.baseStore.setState(p => ({
      ...p,
      errorMap:{...p.errorMap,[h]:formError}
     }));
    }

    if ((formError || fieldErrors)) {
     (o = true);
    }
   }const a=Te("submit");

   if (this.state.errorMap?.[a]&&s!=="submit"&&!o) {
    this.baseStore.setState(f => ({
     ...f,
     errorMap:{...f.errorMap,[a]:void 0}
    }));
   }

   const d=Te("server");

   if (this.state.errorMap?.[d]&&s!=="server"&&!o) {
    this.baseStore.setState(f => ({
     ...f,
     errorMap:{...f.errorMap,[d]:void 0}
    }));
   }
  });

  return {hasErrored:o,fieldsErrorMap:r};
 };

 this.validateAsync=async s=>{
  const i=ft(s,{...this.options,form:this,validationLogic:this.options.validationLogic||ke});

  if (!this.state.isFormValidating) {
   this.baseStore.setState(f => ({
    ...f,
    isFormValidating:true
   }));
  }

  const o=[];let r;for(const f of i){
    if (!f.validate) {
     continue;
    }const m=Te(f.cause);this.state.validationMetaMap[m]?.lastAbortController.abort();const l=new AbortController;
    this.state.validationMetaMap[m]={lastAbortController:l};

    o.push(new Promise(async h=>{
     let u;try{u=await new Promise((g,S)=>{setTimeout(async()=>{if (l.signal.aborted) {
       return g(void 0);
      }try{g(await this.runValidator({validate:f.validate,value:{value:this.state.values,formApi:this,validationSource:"form",signal:l.signal},type:"validateAsync"}))}catch(j){S(j)}},f.debounceMs)})}catch(g){u=g}const{formError,fieldErrors}=He(u);

     if (fieldErrors) {
      (r = r?{...r,...fieldErrors}:fieldErrors);
     }

     const x=Te(f.cause);for(const g of Object.keys(this.state.fieldMeta)){
      if (this.baseStore.state.fieldMetaBase[g]===void 0) {
       continue;
      }const S=this.getFieldMeta(g);if (!S) {
         continue;
        }
      const {errorMap,errorSourceMap}=S;
      const L=r?.[g];
      const {newErrorValue,newSource}=bt({newFormValidatorError:L,isPreviousErrorFromFormValidator:errorSourceMap?.[x]==="form",previousErrorValue:errorMap?.[x]});

      if (errorMap?.[x]!==newErrorValue) {
       this.setFieldMeta(g,V => ({
        ...V,
        errorMap:{...V.errorMap,[x]:newErrorValue},
        errorSourceMap:{...V.errorSourceMap,[x]:newSource}
       }));
      }
     }

     this.baseStore.setState(g => ({
      ...g,
      errorMap:{...g.errorMap,[x]:formError}
     }));

     h(r?{fieldErrors:r,errorMapKey:x}:void 0);
    }));
   }let a=[];const d={};if(o.length){a=await Promise.all(o);for (const f of a) {
    if(f?.fieldErrors){const{errorMapKey}=f;for(const[c,l]of Object.entries(f.fieldErrors)){const u={...(d[c] || {}),[errorMapKey]:l};d[c]=u}}
   }}

  this.baseStore.setState(f => ({
   ...f,
   isFormValidating:false
  }));

  return d;
 };

 this.validate=s=>{const{hasErrored,fieldsErrorMap}=this.validateSync(s);return hasErrored&&!this.options.asyncAlways?fieldsErrorMap:this.validateAsync(s);};

 this._handleSubmit=async s=>{
  this.baseStore.setState(r => ({
   ...r,
   isSubmitted:false,
   submissionAttempts:r.submissionAttempts+1,
   isSubmitSuccessful:false
  }));

  le(()=>{Object.values(this.fieldInfo).forEach(r=>{
   if (r.instance) {
    if (!r.instance.state.meta.isTouched) {
     r.instance.setMeta(a => ({
      ...a,
      isTouched:true
     }));
    }
   }
  })});

  const i=s??this.options.onSubmitMeta;if(!this.state.canSubmit&&!this._devtoolsSubmissionOverride){this.options.onSubmitInvalid?.({value:this.state.values,formApi:this,meta:i});return}this.baseStore.setState(r => ({
  ...r,
  isSubmitting:true
 }));const o=()=>{this.baseStore.setState(r => ({
  ...r,
  isSubmitting:false
 }))};
  await this.validateAllFields("submit");

  if (!this.state.isFieldsValid) {
   o();
   this.options.onSubmitInvalid?.({value:this.state.values,formApi:this,meta:i});

   re.emit("form-submission",{id:this._formId,submissionAttempt:this.state.submissionAttempts,successful:false,stage:"validateAllFields",errors:Object.values(this.state.fieldMeta).map(r => r.errors).flat()});

   return
  }

  await this.validate("submit");

  if (!this.state.isValid) {
   o();
   this.options.onSubmitInvalid?.({value:this.state.values,formApi:this,meta:i});
   re.emit("form-submission",{id:this._formId,submissionAttempt:this.state.submissionAttempts,successful:false,stage:"validate",errors:this.state.errors});
   return
  }

  le(()=>{Object.values(this.fieldInfo).forEach(r=>{r.instance?.options.listeners?.onSubmit?.({value:r.instance.state.value,fieldApi:r.instance})})});
  this.options.listeners?.onSubmit?.({formApi:this,meta:i});
  try{
   await this.options.onSubmit?.({value:this.state.values,formApi:this,meta:i});

   le(()=>{
    this.baseStore.setState(r => ({
     ...r,
     isSubmitted:true,
     isSubmitSuccessful:true
    }));

    re.emit("form-submission",{id:this._formId,submissionAttempt:this.state.submissionAttempts,successful:true});
    o();
   });
  }catch(r){
   this.baseStore.setState(a => ({
    ...a,
    isSubmitSuccessful:false
   }));

   re.emit("form-submission",{id:this._formId,submissionAttempt:this.state.submissionAttempts,successful:false,stage:"inflight",onError:r});
   o();
   throw r;
  }
 };

 this.getFieldValue=s => $e(this.state.values,s);

 this.getFieldMeta=s => this.state.fieldMeta[s];

 this.getFieldInfo=s => this.fieldInfo[s]||={instance:null,validationMetaMap:{onChange:void 0,onBlur:void 0,onSubmit:void 0,onMount:void 0,onServer:void 0,onDynamic:void 0}};

 this.setFieldMeta=(s,i)=>{this.baseStore.setState(o => ({
  ...o,
  fieldMetaBase:{...o.fieldMetaBase,[s]:Ye(i,o.fieldMetaBase[s])}
 }))};

 this.resetFieldMeta=s => Object.keys(s).reduce((i,o)=>{
  const r=o;
  i[r]=Ve;
  return i;
 },{});

 this.setFieldValue=(s,i,o)=>{
  const r=o?.dontUpdateMeta??false;
  const a=o?.dontRunListeners??false;
  const d=o?.dontValidate??false;

  le(()=>{
   if (!r) {
    this.setFieldMeta(s,f => ({
     ...f,
     isTouched:true,
     isDirty:true,
     errorMap:{...f?.errorMap,onMount:void 0}
    }));
   }

   this.baseStore.setState(f => ({
    ...f,
    values:Be(f.values,s,i)
   }));
  });

  if (!a) {
   this.getFieldInfo(s).instance?.triggerOnChangeListener();
  }

  if (!d) {
   this.validateField(s,"change");
  }
 };

 this.deleteField=s=>{const o=[...Object.keys(this.fieldInfo).filter(r=>{const a=s.toString();return r!==a&&r.startsWith(a)}),s];this.baseStore.setState(r=>{
  const a={...r};

  o.forEach(d=>{
   a.values=Ts(a.values,d);
   delete this.fieldInfo[d];
   delete a.fieldMetaBase[d];
  });

  return a;
 })};

 this.pushFieldValue=(s,i,o)=>{this.setFieldValue(s,r => [...(Array.isArray(r) ? r : []),i],o)};

 this.insertFieldValue=async(s,i,o,r)=>{
  this.setFieldValue(s,d => [...d.slice(0,i),o,...d.slice(i)],Z(r,{dontValidate:true}));const a=r?.dontValidate??false;

  if (!a) {
   (await this.validateField(s,"change"));
  }

  Ge(this).handleArrayInsert(s,i);

  if (!a) {
   (await this.validateArrayFieldsStartingFrom(s,i,"change"));
  }
 };

 this.replaceFieldValue=async(s,i,o,r)=>{
  this.setFieldValue(s,d => d.map((f, m) => m===i?o:f),Z(r,{dontValidate:true}));

  if (!(r?.dontValidate ?? false)) {
   await this.validateField(s,"change");
   await this.validateArrayFieldsStartingFrom(s,i,"change");
  }
 };

 this.removeFieldValue=async(s,i,o)=>{
  const r=this.getFieldValue(s);
  const a=Array.isArray(r)?Math.max(r.length-1,0):null;

  this.setFieldValue(s,f => f.filter((m, c) => c!==i),Z(o,{dontValidate:true}));

  Ge(this).handleArrayRemove(s,i);

  if (a!==null)
   {const f=`${s}[${a}]`;this.deleteField(f)}

  if (!(o?.dontValidate ?? false)) {
   await this.validateField(s,"change");
   await this.validateArrayFieldsStartingFrom(s,i,"change");
  }
 };

 this.swapFieldValues=(s,i,o,r)=>{
  this.setFieldValue(s,d=>{
   const f=d[i];
   const m=d[o];
   return Be(Be(d,`${i}`,m),`${o}`,f)
  },Z(r,{dontValidate:true}));

  Ge(this).handleArraySwap(s,i,o);

  if (!(r?.dontValidate ?? false)) {
   this.validateField(s,"change");
   this.validateField(`${s}[${i}]`,"change");
   this.validateField(`${s}[${o}]`,"change");
  }
 };

 this.moveFieldValues=(s,i,o,r)=>{
  this.setFieldValue(s,d=>{
   const f=[...d];
   f.splice(o,0,f.splice(i,1)[0]);
   return f;
  },Z(r,{dontValidate:true}));

  Ge(this).handleArrayMove(s,i,o);

  if (!(r?.dontValidate ?? false)) {
   this.validateField(s,"change");
   this.validateField(`${s}[${i}]`,"change");
   this.validateField(`${s}[${o}]`,"change");
  }
 };

 this.clearFieldValues=(s,i)=>{
  const o=this.getFieldValue(s);
  const r=Array.isArray(o)?Math.max(o.length-1,0):null;
  this.setFieldValue(s,[],Z(i,{dontValidate:true}));

  if (r!==null) {
   for(let d=0;d<=r;d++){const f=`${s}[${d}]`;this.deleteField(f)}
  }

  if (!(i?.dontValidate ?? false)) {
   this.validateField(s,"change");
  }
 };

 this.resetField=s=>{this.baseStore.setState(i => ({
  ...i,
  fieldMetaBase:{...i.fieldMetaBase,[s]:Ve},
  values:this.options.defaultValues?Be(i.values,s,$e(this.options.defaultValues,s)):i.values
 }))};

 this.setErrorMap=s=>{le(()=>{Object.entries(s).forEach(([i,o])=>{const r=i;if (mt(o)) {const{formError,fieldErrors}=He(o);for (const f of Object.keys(this.fieldInfo)) {
  if (this.getFieldMeta(f)) {
   this.setFieldMeta(f,c => ({
    ...c,
    errorMap:{...c.errorMap,[r]:fieldErrors?.[f]},
    errorSourceMap:{...c.errorSourceMap,[r]:"form"}
   }));
  }
 }this.baseStore.setState(f => ({
  ...f,
  errorMap:{...f.errorMap,[r]:formError}
 }))} else {
  this.baseStore.setState(a => ({
   ...a,
   errorMap:{...a.errorMap,[r]:o}
  }))
 }})})};

 this.getAllErrors=() => ({
  form:{errors:this.state.errors,errorMap:this.state.errorMap},

  fields:Object.entries(this.state.fieldMeta).reduce((s, [i,o]) => {
   if (Object.keys(o).length&&o.errors.length) {
    (s[i] = {errors:o.errors,errorMap:o.errorMap});
   }

   return s;
  },{})
 });

 this.parseValuesWithSchema=s => Le.validate({value:this.state.values,validationSource:"form"},s);

 this.parseValuesWithSchemaAsync=s => Le.validateAsync({value:this.state.values,validationSource:"form"},s);

 this.timeoutIds={validations:{},listeners:{},formListeners:{}};
 this._formId=e?.formId??Gt();
 this._devtoolsSubmissionOverride=false;
 this.baseStore=new ct(it({...e?.defaultState,values:e?.defaultValues??e?.defaultState?.values}));

 this.fieldMetaDerived=new fe({deps:[this.baseStore],fn:({prevDepVals,currDepVals,prevVal})=>{
  const r=prevVal;
  const a=prevDepVals?.[0];
  const d=currDepVals[0];
  let f=0;const m={};for(const c of Object.keys(d.fieldMetaBase)){
   const l=d.fieldMetaBase[c];
   const h=a?.fieldMetaBase[c];
   const u=r?.[c];
   const p=$e(d.values,c);
   let v=u?.errors;if(!h||l.errorMap!==h.errorMap){
  v=Object.values(l.errorMap??{}).filter(M => M!==void 0);const j=this.getFieldInfo(c)?.instance;

  if (j&&!j.options.disableErrorFlat) {
   (v = v.flat(1));
  }
 }
   const x=!Rs(v);
   const g=!l.isDirty;
   const S=ge(p,$e(this.options.defaultValues,c))||ge(p,this.getFieldInfo(c)?.instance?.options.defaultValue);
   if(u&&u.isPristine===g&&u.isValid===x&&u.isDefaultValue===S&&u.errors===v&&l===h){
    m[c]=u;
    f++;
    continue
   }m[c]={...l,errors:v??[],isPristine:g,isValid:x,isDefaultValue:S}
  }return Object.keys(d.fieldMetaBase).length&&r&&f===Object.keys(d.fieldMetaBase).length?r:m
 }});

 this.store=new fe({deps:[this.baseStore,this.fieldMetaDerived],fn:({prevDepVals,currDepVals,prevVal})=>{
  const r=prevVal;
  const a=prevDepVals?.[0];
  const d=currDepVals[0];
  const f=currDepVals[1];
  const m=Object.values(f).filter(Boolean);

  const c=m.some(w => w.isValidating);

  const l=m.every(w => w.isValid);

  const h=m.some(w => w.isTouched);

  const u=m.some(w => w.isBlurred);

  const p=m.every(w => w.isDefaultValue);

  const v=h&&d.errorMap?.onMount;

  const x=m.some(w => w.isDirty);

  const g=!x;

  const S=!!(d.errorMap?.onMount||m.some(w => w?.errorMap?.onMount));

  const j=!!c;
  let M=r?.errors??[];

  if ((!a || d.errorMap!==a.errorMap)) {
   (M = Object.values(d.errorMap).reduce((w, P) => P===void 0?w:P&&mt(P)?(w.push(P.form),w):(w.push(P),w),[]));
  }

  const L=M.length===0;
  const E=l&&L;
  const N=this.options.canSubmitWhenInvalid??false;
  const V=d.submissionAttempts===0&&!h&&!S||!j&&!d.isSubmitting&&E||N;
  let k=d.errorMap;

  if (v) {
   M=M.filter(w => w!==d.errorMap.onMount);
   k=Object.assign(k,{onMount:void 0});
  }

  if (r&&a&&r.errorMap===k&&r.fieldMeta===this.fieldMetaDerived.state&&r.errors===M&&r.isFieldsValidating===c&&r.isFieldsValid===l&&r.isFormValid===L&&r.isValid===E&&r.canSubmit===V&&r.isTouched===h&&r.isBlurred===u&&r.isPristine===g&&r.isDefaultValue===p&&r.isDirty===x&&ge(a,d)) {
   return r;
  }

  let I={...d,errorMap:k,fieldMeta:this.fieldMetaDerived.state,errors:M,isFieldsValidating:c,isFieldsValid:l,isFormValid:L,isValid:E,canSubmit:V,isTouched:h,isBlurred:u,isPristine:g,isDefaultValue:p,isDirty:x};const G=this.options.transform?.deps??[];if(G.length!==this.prevTransformArray.length||G.some((w, P) => w!==this.prevTransformArray[P])){
    const w=Object.assign({},this,{state:I});
    this.options.transform?.fn(w);
    I=w.state;
    this.prevTransformArray=G;
   }return I
 }});

 this.handleSubmit=this.handleSubmit.bind(this);
 this.update(e||{});
}get state(){return this.store.state}get formId(){return this._formId}runValidator(e){return Ut(e.validate)?Le[e.type](e.value,e.validate):e.validate(e.value)}handleSubmit(e){return this._handleSubmit(e)}}function He(t){if(t){if(mt(t)){
 const e=He(t.form).formError;
 const s=t.fields;
 return{formError:e,fieldErrors:s}
}return{formError:t}}return{formError:void 0}}function Te(t){switch(t){case "submit":
 {
  return"onSubmit";
 }case "blur":
 {
  return"onBlur";
 }case "mount":
 {
  return"onMount";
 }case "server":
 {
  return"onServer";
 }case "dynamic":
 {
  return"onDynamic";
 }case"change":default:
 {
  return"onChange"
 }}}class Et{constructor(e){
 this.options={};

 this.mount=()=>{
  const s=this.store.mount();

  if (this.options.defaultValue!==void 0&&!this.getMeta().isTouched) {
   this.form.setFieldValue(this.name,this.options.defaultValue,{dontUpdateMeta:true});
  }

  const i=this.getInfo();
  i.instance=this;
  this.update(this.options);
  const{onMount}=this.options.validators||{};if(onMount){
   const r=this.runValidator({validate:onMount,value:{value:this.state.value,fieldApi:this,validationSource:"field"},type:"validate"});

   if (r) {
    this.setMeta(a => ({
     ...a,
     errorMap:{...a?.errorMap,onMount:r},
     errorSourceMap:{...a?.errorSourceMap,onMount:"field"}
    }));
   }
  }
  this.options.listeners?.onMount?.({value:this.state.value,fieldApi:this});
  return s;
 };

 this.update=s=>{
  this.options=s;
  this.name=s.name;

  if (!this.state.meta.isTouched&&this.options.defaultValue!==void 0)
   {
    const i=this.form.getFieldValue(this.name);

    if (!ge(i,s.defaultValue)) {
     this.form.setFieldValue(this.name,s.defaultValue,{dontUpdateMeta:true,dontValidate:true,dontRunListeners:true});
    }
   }

  if (!this.form.getFieldMeta(this.name)) {
   this.form.setFieldMeta(this.name,this.state.meta);
  }
 };

 this.getValue=() => this.form.getFieldValue(this.name);

 this.setValue=(s,i)=>{
  this.form.setFieldValue(this.name,s,Z(i,{dontRunListeners:true,dontValidate:true}));

  if (!i?.dontRunListeners) {
   this.triggerOnChangeListener();
  }

  if (!i?.dontValidate) {
   this.validate("change");
  }
 };

 this.getMeta=() => this.store.state.meta;

 this.setMeta=s => this.form.setFieldMeta(this.name,s);

 this.getInfo=() => this.form.getFieldInfo(this.name);

 this.pushValue=(s,i)=>{
  this.form.pushFieldValue(this.name,s,Z(i,{dontRunListeners:true}));

  if (!i?.dontRunListeners) {
   this.triggerOnChangeListener();
  }
 };

 this.insertValue=(s,i,o)=>{
  this.form.insertFieldValue(this.name,s,i,Z(o,{dontRunListeners:true}));

  if (!o?.dontRunListeners) {
   this.triggerOnChangeListener();
  }
 };

 this.replaceValue=(s,i,o)=>{
  this.form.replaceFieldValue(this.name,s,i,Z(o,{dontRunListeners:true}));

  if (!o?.dontRunListeners) {
   this.triggerOnChangeListener();
  }
 };

 this.removeValue=(s,i)=>{
  this.form.removeFieldValue(this.name,s,Z(i,{dontRunListeners:true}));

  if (!i?.dontRunListeners) {
   this.triggerOnChangeListener();
  }
 };

 this.swapValues=(s,i,o)=>{
  this.form.swapFieldValues(this.name,s,i,Z(o,{dontRunListeners:true}));

  if (!o?.dontRunListeners) {
   this.triggerOnChangeListener();
  }
 };

 this.moveValue=(s,i,o)=>{
  this.form.moveFieldValues(this.name,s,i,Z(o,{dontRunListeners:true}));

  if (!o?.dontRunListeners) {
   this.triggerOnChangeListener();
  }
 };

 this.clearValues=s=>{
  this.form.clearFieldValues(this.name,Z(s,{dontRunListeners:true}));

  if (!s?.dontRunListeners) {
   this.triggerOnChangeListener();
  }
 };

 this.getLinkedFields=s=>{
  const i=Object.values(this.form.fieldInfo);
  const o=[];
  for(const r of i){
   if (!r.instance) {
    continue;
   }const{onChangeListenTo,onBlurListenTo}=r.instance.options.validators||{};

   if (s==="change"&&onChangeListenTo?.includes(this.name)) {
    o.push(r.instance);
   }

   if (s==="blur"&&onBlurListenTo?.includes(this.name)) {
    o.push(r.instance);
   }
  }return o
 };

 this.validateSync=(s,i)=>{
  const o=ut(s,{...this.options,form:this.form,validationLogic:this.form.options.validationLogic||ke});

  const a=this.getLinkedFields(s).reduce((m,c)=>{
   const l=ut(s,{...c.options,form:c.form,validationLogic:c.form.options.validationLogic||ke});
   l.forEach(h=>{h.field=c});
   return m.concat(l);
  },[]);

  let d=false;le(()=>{const m=(c,l)=>{
   const h=Ue(l.cause);
   const u=l.validate?wt(c.runValidator({validate:l.validate,value:{value:c.store.state.value,validationSource:"field",fieldApi:c},type:"validate"})):void 0;
   const p=i[h];
   const {newErrorValue,newSource}=yt({formLevelError:p,fieldLevelError:u});

   if (c.state.meta.errorMap?.[h]!==newErrorValue) {
    c.setMeta(g => ({
     ...g,
     errorMap:{...g.errorMap,[h]:newErrorValue},
     errorSourceMap:{...g.errorSourceMap,[h]:newSource}
    }));
   }

   if (newErrorValue) {
    (d = true);
   }
  };for (const c of o) {
    m(this,c);
   }for (const c of a) {
   if (c.validate) {
    m(c.field,c);
   }
  }});const f=Ue("submit");

  if (this.state.meta.errorMap?.[f]&&s!=="submit"&&!d) {
   this.setMeta(m => ({
    ...m,
    errorMap:{...m.errorMap,[f]:void 0},
    errorSourceMap:{...m.errorSourceMap,[f]:void 0}
   }));
  }

  return {hasErrored:d};
 };

 this.validateAsync=async(s,i)=>{
  const o=ft(s,{...this.options,form:this.form,validationLogic:this.form.options.validationLogic||ke});
  const r=await i;
  const a=this.getLinkedFields(s);

  const d=a.reduce((u,p)=>{
   const v=ft(s,{...p.options,form:p.form,validationLogic:p.form.options.validationLogic||ke});
   v.forEach(x=>{x.field=p});
   return u.concat(v);
  },[]);

  const f=[];
  const m=[];

  const c=o.some(u => u.validate)||d.some(u => u.validate);

  if(c){
   if (!this.state.meta.isValidating) {
    this.setMeta(u => ({
     ...u,
     isValidating:true
    }));
   }

   for (const u of a) {
    u.setMeta(p => ({
     ...p,
     isValidating:true
    }))
   }
  }const l=(u,p,v)=>{
    const x=Ue(p.cause);u.getInfo().validationMetaMap[x]?.lastAbortController.abort();const S=new AbortController;
    this.getInfo().validationMetaMap[x]={lastAbortController:S};

    v.push(new Promise(async j=>{
     let M;try{M=await new Promise((k,I)=>{
     if (this.timeoutIds.validations[p.cause]) {
      clearTimeout(this.timeoutIds.validations[p.cause]);
     }

     this.timeoutIds.validations[p.cause]=setTimeout(async()=>{if (S.signal.aborted) {
      return k(void 0);
     }try{k(await this.runValidator({validate:p.validate,value:{value:u.store.state.value,fieldApi:u,signal:S.signal,validationSource:"field"},type:"validateAsync"}))}catch(G){I(G)}},p.debounceMs);
    })}catch(k){M=k}if (S.signal.aborted) {
      return j(void 0);
     }
     const L=wt(M);
     const E=r[this.name]?.[x];
     const {newErrorValue,newSource}=yt({formLevelError:E,fieldLevelError:L});

     u.setMeta(k => ({
      ...k,
      errorMap:{...k?.errorMap,[x]:newErrorValue},
      errorSourceMap:{...k.errorSourceMap,[x]:newSource}
     }));

     j(newErrorValue);
    }));
   };for (const u of o) {
   if (u.validate) {
    l(this,u,f);
   }
  }for (const u of d) {
   if (u.validate) {
    l(u.field,u,m);
   }
  }let h=[];

  if ((f.length || m.length)) {
   h=await Promise.all(f);
   await Promise.all(m);
  }

  if (c) {this.setMeta(u => ({
   ...u,
   isValidating:false
  }));for (const u of a) {
   u.setMeta(p => ({
    ...p,
    isValidating:false
   }))
  }}

  return h.filter(Boolean)
 };

 this.validate=(s,i)=>{
  if (!this.state.meta.isTouched) {
   return[];
  }
  const {fieldsErrorMap}=i?.skipFormValidation?{fieldsErrorMap:{}}:this.form.validateSync(s);
  const {hasErrored}=this.validateSync(s,fieldsErrorMap[this.name]??{});
  if (hasErrored&&!this.options.asyncAlways) {
   this.getInfo().validationMetaMap[Ue(s)]?.lastAbortController.abort();
   return this.state.meta.errors;
  }const a=i?.skipFormValidation?Promise.resolve({}):this.form.validateAsync(s);return this.validateAsync(s,a)
 };

 this.handleChange=s=>{this.setValue(s)};

 this.handleBlur=()=>{
  if (!this.state.meta.isTouched) {
   this.setMeta(i => ({
    ...i,
    isTouched:true
   }));
  }

  if (!this.state.meta.isBlurred) {
   this.setMeta(i => ({
    ...i,
    isBlurred:true
   }));
  }

  this.validate("blur");
  this.triggerOnBlurListener();
 };

 this.setErrorMap=s=>{this.setMeta(i => ({
  ...i,
  errorMap:{...i.errorMap,...s}
 }))};

 this.parseValueWithSchema=s => Le.validate({value:this.state.value,validationSource:"field"},s);

 this.parseValueWithSchemaAsync=s => Le.validateAsync({value:this.state.value,validationSource:"field"},s);

 this.triggerOnChangeListener=()=>{
  const s=this.form.options.listeners?.onChangeDebounceMs;

  if (s&&s>0) {
   this.timeoutIds.formListeners.change&&clearTimeout(this.timeoutIds.formListeners.change);
   this.timeoutIds.formListeners.change=setTimeout(()=>{this.form.options.listeners?.onChange?.({formApi:this.form,fieldApi:this})},s);
  } else {
   this.form.options.listeners?.onChange?.({formApi:this.form,fieldApi:this});
  }

  const i=this.options.listeners?.onChangeDebounceMs;

  if (i&&i>0) {
   this.timeoutIds.listeners.change&&clearTimeout(this.timeoutIds.listeners.change);
   this.timeoutIds.listeners.change=setTimeout(()=>{this.options.listeners?.onChange?.({value:this.state.value,fieldApi:this})},i);
  } else {
   this.options.listeners?.onChange?.({value:this.state.value,fieldApi:this});
  }
 };
 this.form=e.form;
 this.name=e.name;
 this.options=e;
 this.timeoutIds={validations:{},listeners:{},formListeners:{}};

 this.store=new fe({deps:[this.form.store],fn:({prevVal})=>{
  const i=prevVal;
  const o=this.form.getFieldMeta(this.name)??{...Ve,...e.defaultMeta};
  let r=this.form.getFieldValue(this.name);

  if (!o.isTouched&&r===void 0&&this.options.defaultValue!==void 0&&!ge(r,this.options.defaultValue)) {
   (r = this.options.defaultValue);
  }

  return i&&i.value===r&&i.meta===o?i:{value:r,meta:o};
 }});
}get state(){return this.store.state}runValidator(e){return Ut(e.validate)?Le[e.type](e.value,e.validate):e.validate(e.value)}triggerOnBlurListener(){
 const e=this.form.options.listeners?.onBlurDebounceMs;

 if (e&&e>0) {
  this.timeoutIds.formListeners.blur&&clearTimeout(this.timeoutIds.formListeners.blur);
  this.timeoutIds.formListeners.blur=setTimeout(()=>{this.form.options.listeners?.onBlur?.({formApi:this.form,fieldApi:this})},e);
 } else {
  this.form.options.listeners?.onBlur?.({formApi:this.form,fieldApi:this});
 }

 const s=this.options.listeners?.onBlurDebounceMs;

 if (s&&s>0) {
  this.timeoutIds.listeners.blur&&clearTimeout(this.timeoutIds.listeners.blur);
  this.timeoutIds.listeners.blur=setTimeout(()=>{this.options.listeners?.onBlur?.({value:this.state.value,fieldApi:this})},s);
 } else {
  this.options.listeners?.onBlur?.({value:this.state.value,fieldApi:this});
 }
}}function wt(t){if (t) {
 return t
}}function Ue(t){switch(t){case "submit":
 {
  return"onSubmit";
 }case "blur":
 {
  return"onBlur";
 }case "mount":
 {
  return"onMount";
 }case "server":
 {
  return"onServer";
 }case "dynamic":
 {
  return"onDynamic";
 }case"change":default:
 {
  return"onChange"
 }}}
const nt={exports:{}};
const rt={};
const ot={exports:{}};
const at={};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/let jt;function Ws(){
 if (jt) {
  return at;
 }jt=1;const t=cq();function e(l,h){return l===h&&(l!==0||1/l===1/h)||l!==l&&h!==h}
 const s=typeof Object.is=="function"?Object.is:e;
 const i=t.useState;
 const o=t.useEffect;
 const r=t.useLayoutEffect;
 const a=t.useDebugValue;

 class d {
  constructor(l, h) {
   const u=h();
   const p=i({inst:{value:u,getSnapshot:h}});
   const v=p[0].inst;
   const x=p[1];

   r(() => {
    v.value=u;
    v.getSnapshot=h;

    if (f(v)) {
     x({inst:v});
    }
   },[l,u,h]);

   o(() => {
    if (f(v)) {
     x({inst:v});
    }

    return l(() => {
     if (f(v)) {
      x({inst:v});
     }
    });
   },[l]);

   a(u);
   return u;
  }

  static Field(m) {return <Kt {...m} form={o} />;}
  static Subscribe(m) {return <Js form={o} selector={m.selector}>{m.children}</Js>;}
 }

 function f(l){const h=l.getSnapshot;l=l.value;try{const u=h();return!s(l,u)}catch{return true;}}function m(l,h){return h()}const c=typeof window === "undefined"||typeof window.document === "undefined"||typeof window.document.createElement === "undefined"?m:d;
 at.useSyncExternalStore=t.useSyncExternalStore!==void 0?t.useSyncExternalStore:c;
 return at;
}let kt;function zs(){
 if (!kt) {
  kt=1;
  ot.exports=Ws();
 }

 return ot.exports;
}/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/let Vt;function Gs(){
 if (Vt) {
  return rt;
 }Vt=1;
 const t=cq();
 const e=zs();
 function s(m,c){return m===c&&(m!==0||1/m===1/c)||m!==m&&c!==c}
 const i=typeof Object.is=="function"?Object.is:s;
 const o=e.useSyncExternalStore;
 const r=t.useRef;
 const a=t.useEffect;
 const d=t.useMemo;
 const f=t.useDebugValue;

 rt.useSyncExternalStoreWithSelector=(m, c, l, h, u) => {
  let p=r(null);if (p.current===null)
   {var v={hasValue:false,value:null};p.current=v} else {
   v=p.current;
  }p=d(() => {
   function g(E){
    if(!S){
     S=true;
     j=E;
     E=h(E);

     if (u!==void 0&&v.hasValue) {var N=v.value;if (u(N,E)) {
      return M=N
     }}

     return M=E
    }
    N=M;

    if (i(j,E)) {
     return N;
    }

    const V=h(E);return u!==void 0&&u(N,V)?(j=E,N):(j=E,M=V)
   }
   var S=false;
   var j;
   var M;
   const L=l===void 0?null:l;
   return [() => g(c()),L===null?void 0:() => g(L())];
  },[c,l,h,u]);const x=o(m,p[0],p[1]);

  a(() => {
   v.hasValue=true;
   v.value=x;
  },[x]);

  f(x);
  return x;
 };

 return rt;
}let Ft;function Us(){
 if (!Ft) {
  Ft=1;
  nt.exports=Gs();
 }

 return nt.exports;
}const Ks=Us();function ve(t,e=i => i,s={}){const i=s.equal??qs;return Ks.useSyncExternalStoreWithSelector(t.subscribe,() => t.state,() => t.state,e,i);}function qs(t,e){if (Object.is(t,e)) {
 return true;
}if (typeof t!="object"||t===null||typeof e!="object"||e===null) {
 return false;
}if(t instanceof Map&&e instanceof Map){if (t.size!==e.size) {
 return false;
}for (const[i,o] of t) {
 if (!e.has(i)||!Object.is(o,e.get(i))) {
  return false;
 }
}return true;}if(t instanceof Set&&e instanceof Set){if (t.size!==e.size) {
 return false;
}for (const i of t) {
 if (!e.has(i)) {
  return false;
 }
}return true;}if (t instanceof Date&&e instanceof Date) {
 return t.getTime()===e.getTime();
}const s=Lt(t);if (s.length!==Lt(e).length) {
 return false;
}for (let i=0; i<s.length; i++) {
 if (!Object.prototype.hasOwnProperty.call(e,s[i])||!Object.is(t[s[i]],e[s[i]])) {
  return false;
 }
}return true;}function Lt(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}const Xe=typeof window !== "undefined"?s.useLayoutEffect:s.useEffect;function Hs(t){
 const [e,setE]=setE.useState(() => ({
  form:t.form,
  name:t.name
 }));

 const [i,setI]=setE.useState(() => new Et({...t}));

 if ((e.form!==t.form || e.name!==t.name)) {
  setI(new Et({...t}));
  setE({form:t.form,name:t.name});
 }

 const r=ve(i.store,t.mode==="array"?u => Object.keys(u.value??[]).length:u => u.value);

 const a=ve(i.store,u => u.meta.isTouched);

 const d=ve(i.store,u => u.meta.isBlurred);

 const f=ve(i.store,u => u.meta.isDirty);

 const m=ve(i.store,u => u.meta.errorMap);

 const c=ve(i.store,u => u.meta.errorSourceMap);

 const l=ve(i.store,u => u.meta.isValidating);

 const h=setE.useMemo(()=>{
  const p={...i,get state() {return {value:t.mode==="array"?i.state.value:r,get meta() {return{...i.state.meta,isTouched:a,isBlurred:d,isDirty:f,errorMap:m,errorSourceMap:c,isValidating:l}}};}};
  p.Field=Kt;
  return p;
 },[i,t.mode,r,a,d,f,m,c,l]);

 Xe(i.mount,[i]);
 Xe(()=>{i.update(t)});
 return h;
}const Kt=(({children,...e})=>{
 const s=Hs(e);

 const i=s.useMemo(() => Ye(children,s),[children,s]);

 return <>{i}</>;
});function Qs(){return s.useState(() => Gt())[0];}const Xs=s.version.split(".")[0]==="17"?Qs:s.useId;function Js({form,selector,children}){const i=ve(form.store,selector);return <>{Ye(children,i)}</>;}function Ys(t){
 const e=Xs();
 const [s,setS]=s.useState(t?.formId);

 const [o,setO]=s.useState(() => new Mt({...t,formId:t?.formId??e}));

 if(s!==t?.formId){
  const d=t?.formId??e;
  setO(new Mt({...t,formId:d}));
  setS(d);
 }const a=s.useMemo(()=>{
 const d={...o,handleSubmit:((...f) => o._handleSubmit(...f)),get formId() {return o._formId},get state() {return o.store.state}};
 return d;
},[o]);
 Xe(o.mount,[]);
 Xe(()=>{o.update(t)});
 return a;
}function Qt(t){
 const e=c.c(20);
 const {workspaceRoot,workspaceGroup}=t;
 let o;

 if (e[0]!==workspaceGroup||e[1]!==workspaceRoot) {
  o=Bt(workspaceRoot,workspaceGroup);
  e[0]=workspaceGroup;
  e[1]=workspaceRoot;
  e[2]=o;
 } else {
  o=e[2];
 }

 const r=o;
 const a=workspaceGroup?.repositoryData?.rootFolder;
 const d=a&&a!==r?`(${a})`:null;
 const F_1=workspaceGroup?.isCodexWorktree?cr:cs_1;
 let m;

 if (e[3]!==F_1) {
  m=<F_1 className="icon-sm text-token-text-secondary shrink-0" />;
  e[3]=F_1;
  e[4]=m;
 } else {
  m=e[4];
 }

 let c;

 if (e[5]!==r) {
  c=<span className="truncate">{r}</span>;
  e[5]=r;
  e[6]=c;
 } else {
  c=e[6];
 }

 let l;

 if (e[7]!==d) {
  l=d&&<span className="text-token-description-foreground truncate text-xs">{d}</span>;
  e[7]=d;
  e[8]=l;
 } else {
  l=e[8];
 }

 let h;

 if (e[9]!==c||e[10]!==l) {
  h=<div
   className="flex min-w-0 items-center gap-1 text-sm text-token-text-primary">{c}{l}</div>;

  e[9]=c;
  e[10]=l;
  e[11]=h;
 } else {
  h=e[11];
 }

 let u;

 if (e[12]!==workspaceRoot) {
  u=<span className="text-token-text-secondary truncate text-xs">{workspaceRoot}</span>;
  e[12]=workspaceRoot;
  e[13]=u;
 } else {
  u=e[13];
 }

 let p;

 if (e[14]!==h||e[15]!==u) {
  p=<div className="flex min-w-0 flex-col gap-1">{h}{u}</div>;
  e[14]=h;
  e[15]=u;
  e[16]=p;
 } else {
  p=e[16];
 }

 let v;

 if (e[17]!==m||e[18]!==p) {
  v=<div className="flex items-center gap-3 p-3">{m}{p}</div>;
  e[17]=m;
  e[18]=p;
  e[19]=v;
 } else {
  v=e[19];
 }

 return v;
}const Je=["darwin","linux","win32"];function Zs(t){
 const E_1=c.c(57);
 const {workspaceRoot,workspaceGroup,configPath,configExists,initialEnvironment,ParseErrorMessage,ReadErrorMessage,onExitEdit}=t;
 const c=q();
 const l=A();
 const h=configExists();
 const {data}=h();
 let p;

 if (E_1[0]===Symbol.for("react.memo_cache_sentinel")) {
  p={select:ti};
  E_1[0]=p;
 } else {
  p=E_1[0];
 }

 const{data: data_1}=l("codex-home",p);let x;

 if (E_1[1]!==data_1||E_1[2]!==workspaceRoot) {
  x=ct_1(workspaceRoot,data_1);
  E_1[1]=data_1;
  E_1[2]=workspaceRoot;
  E_1[3]=x;
 } else {
  x=E_1[3];
 }

 const g=x;
 const {data: data_2}=X(workspaceRoot);
 const j=Z_1();
 let M;

 if (E_1[4]!==j) {
  M=cu(j);
  E_1[4]=j;
  E_1[5]=M;
 } else {
  M=E_1[5];
 }

 const L=M;let E;

 if (E_1[6]!==data_2||E_1[7]!==L||E_1[8]!==l) {
  E={onSuccess:()=>{
   if (data_2) {
    l.invalidateQueries({queryKey:cx({metadata:data_2,method:"config-value",params:{root:data_2.root,key:cy,scope:"worktree"},hostKey:L})});
   }
  }};

  E_1[6]=data_2;
  E_1[7]=L;
  E_1[8]=l;
  E_1[9]=E;
 } else {
  E=E_1[9];
 }

 const N=cv("set-config-value",E);
 let V;
 let k;
 if (E_1[10]!==initialEnvironment?.actions||E_1[11]!==initialEnvironment?.name||E_1[12]!==initialEnvironment?.setup||E_1[13]!==initialEnvironment?.version||E_1[14]!==c||E_1[15]!==workspaceRoot) {
  const K=F(workspaceRoot)??c.formatMessage({id:"settings.localEnvironments.environment.defaultName",defaultMessage:"local",description:"Fallback name for the local environment"});
  const A=initialEnvironment?.actions??[];
  const W=initialEnvironment?.name??K;
  const q=initialEnvironment?.setup?.script??"";
  const H=ri(initialEnvironment?.setup);
  const ce=cw(A);
  k=initialEnvironment?.version??1;
  V=si({name:W,setupScript:q,setupPlatformScripts:H,actions:ce});
  E_1[10]=initialEnvironment?.actions;
  E_1[11]=initialEnvironment?.name;
  E_1[12]=initialEnvironment?.setup;
  E_1[13]=initialEnvironment?.version;
  E_1[14]=c;
  E_1[15]=workspaceRoot;
  E_1[16]=V;
  E_1[17]=k;
 } else {
  V=E_1[16];
  k=E_1[17];
 }const I=V;let G;

 if (E_1[18]!==g||E_1[19]!==configExists||E_1[20]!==configPath||E_1[21]!==data_2||E_1[22]!==c||E_1[23]!==onExitEdit||E_1[24]!==l||E_1[25]!==N||E_1[26]!==h||E_1[27]!==workspaceRoot) {
  G={onSuccess:()=>{
   l.invalidateQueries({queryKey:P("local-environment-config",{configPath:configPath})});
   l.invalidateQueries({queryKey:P("local-environment",{configPath:configPath})});
   l.invalidateQueries({queryKey:P("local-environments",{workspaceRoot:workspaceRoot})});
   h.success(c.formatMessage({id:"settings.localEnvironments.save.success",defaultMessage:"Saved local environment",description:"Toast shown when local environment is saved"}));

   if (!configExists&&g&&data_2?.root) {
    N.mutate({root:data_2.root,key:cy,value:configPath,scope:"worktree"});
   }

   onExitEdit();
  }};

  E_1[18]=g;
  E_1[19]=configExists;
  E_1[20]=configPath;
  E_1[21]=data_2;
  E_1[22]=c;
  E_1[23]=onExitEdit;
  E_1[24]=l;
  E_1[25]=N;
  E_1[26]=h;
  E_1[27]=workspaceRoot;
  E_1[28]=G;
 } else {
  G=E_1[28];
 }

 const _=onExitEdit("local-environment-config-save",G);let w;

 if (E_1[29]!==configPath||E_1[30]!==_||E_1[31]!==k) {
  w=K=>{
   const {value}=K;
   const W=Nt(value,k);

   if (value.name.length!==0) {
    _.mutate({configPath:configPath,raw:W});
   }
  };

  E_1[29]=configPath;
  E_1[30]=_;
  E_1[31]=k;
  E_1[32]=w;
 } else {
  w=E_1[32];
 }

 let P;

 if (E_1[33]!==I||E_1[34]!==w) {
  P={defaultValues:I,onSubmit:w};
  E_1[33]=I;
  E_1[34]=w;
  E_1[35]=P;
 } else {
  P=E_1[35];
 }

 const F=Ys(P);let B;

 if (E_1[36]!==F) {
  B=K=>{
    K.preventDefault();
    F.handleSubmit();
   };

  E_1[36]=F;
  E_1[37]=B;
 } else {
  B=E_1[37];
 }

 let O;

 if (E_1[38]!==configExists||E_1[39]!==configPath||E_1[40]!==F||E_1[41]!==c||E_1[42]!==data?.platform||E_1[43]!==ParseErrorMessage||E_1[44]!==ReadErrorMessage||E_1[45]!==_.error||E_1[46]!==_.isPending||E_1[47]!==k||E_1[48]!==workspaceGroup||E_1[49]!==workspaceRoot) {
  O=K=>{
    const{values,isDirty}=K;Nt(values,k);

    const q=cz.map(y => ({
     ariaLabel:c.formatMessage(y.message),
     value:y.value,
     icon:<CA icon={y.value} />
    }));

    const H=oi(data?.platform);
    const ce=ai(c);
    const Q=ii({values:values,isDirty:isDirty,isSaving:_.isPending});
    const ae=ni(Q);
    const se=Q!=null;
    const he=y=>{F.setFieldValue("setupPlatformVisibility",{...values.setupPlatformVisibility,[y]:true})};

    const ie=y=>{
     F.setFieldValue("setupPlatformScripts",{...values.setupPlatformScripts,[y]:""});
     F.setFieldValue("setupPlatformVisibility",{...values.setupPlatformVisibility,[y]:false});
    };

    const xe=(y,X)=>{F.setFieldValue("setupPlatformScripts",{...values.setupPlatformScripts,[y]:X})};
    const z=()=>{F.setFieldValue("actions",[...values.actions,cG("")])};

    const Ze=y=>{F.setFieldValue("actions",values.actions.filter(X => X.id!==y))};

    const pe=(y,X)=>{F.setFieldValue("actions",values.actions.map(te => te.id!==y?te:{...te,...X}))};

    const Ne=()=>{
     if (!se) {
      F.handleSubmit();
     }
    };
    return <><ParseErrorMessage><ParseErrorMessage.Header
       title={<M
        id="settings.localEnvironments.file.title"
        defaultMessage="Local environment file"
        description="Title for local environment file section" />} /><ParseErrorMessage.Content><E_1>{<Qt workspaceRoot={workspaceRoot} workspaceGroup={workspaceGroup} />}</E_1><div className="text-token-text-secondary mt-2 text-xs truncate">{<M
         id="settings.localEnvironments.file.path"
         defaultMessage="File: {path}"
         description="Label for local environment config path"
         values={{path:<span className="font-mono">{configPath}</span>}} />}</div>{configExists?null:<div className="text-token-text-secondary mt-1 text-sm">{<M
         id="settings.localEnvironments.file.missing"
         defaultMessage="Save to create this file for the first time."
         description="Message shown when local environment config does not exist" />}</div>}{ParseErrorMessage?<div className="text-token-error-foreground mt-2 text-sm">{<M
         id="settings.localEnvironments.file.parseError"
         defaultMessage="Unable to parse the existing file. Saving will overwrite it. ({error})"
         description="Parse error message for local environment file"
         values={{error:ParseErrorMessage}} />}</div>:null}{ReadErrorMessage?<div className="text-token-error-foreground mt-2 text-sm">{<M
         id="settings.localEnvironments.file.readError"
         defaultMessage="Failed to load local environment data. ({error})"
         description="Read error message for local environment config"
         values={{error:ReadErrorMessage}} />}</div>:null}</ParseErrorMessage.Content></ParseErrorMessage><ParseErrorMessage><ParseErrorMessage.Header
       title={<M
        id="settings.localEnvironments.environment.title"
        defaultMessage="Environment details"
        description="Title for local environment details section" />} /><ParseErrorMessage.Content className="gap-[var(--padding-panel)]"><E_1>{<ReadErrorMessage
         label={<M
          id="settings.localEnvironments.environment.name"
          defaultMessage="Name"
          description="Label for environment name input" />}
         control={<div className="w-72">{<input
           id="local-environment-name"
           className="bg-token-input-background text-token-text-primary w-full rounded-md border border-token-border px-2.5 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-token-focus"
           value={values.name}
           onChange={y=>{F.setFieldValue("name",y.target.value)}} />}</div>} />}</E_1><div className="flex flex-col gap-3"><div className="flex flex-col gap-1"><div className="text-token-text-primary text-sm font-medium">{<M
           id="settings.localEnvironments.environment.setup"
           defaultMessage="Setup script"
           description="Label for environment setup script input" />}</div><div className="text-sm text-token-text-secondary">{<M
           id="settings.localEnvironments.environment.setup.description"
           defaultMessage="This script will run on worktree creation."
           description="Description for environment setup script summary" />}</div></div><E_1>{<div className="flex flex-col gap-2 p-3"><div
           className="text-token-text-secondary text-xs font-medium uppercase tracking-wide">{<M
            id="settings.localEnvironments.environment.setup.script"
            defaultMessage="Script"
            description="Label for setup script input" />}</div><div className="text-sm text-token-text-secondary">{<M
            id="settings.localEnvironments.environment.setup.hint"
            defaultMessage="Runs in the project root."
            description="Description for setup script input" />}</div><textarea
           id="local-environment-setup-script"
           className="bg-token-input-background text-token-text-primary font-mono w-full rounded-md border border-token-border px-2.5 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-token-focus"
           value={values.setupScript}
           placeholder={cB}
           rows={6}
           onChange={y=>{F.setFieldValue("setupScript",y.target.value)}} /></div>}</E_1><E_1>{<div className="flex flex-col gap-3 p-3"><div className="flex flex-col gap-1"><div
            className="text-token-text-secondary text-xs font-medium uppercase tracking-wide">{<M
             id="settings.localEnvironments.environment.setup.platformOverrides"
             defaultMessage="Platform overrides"
             description="Label for setup script platform overrides" />}</div><div className="text-sm text-token-text-secondary">{<M
             id="settings.localEnvironments.environment.setup.platformOverrides.description"
             defaultMessage="Overrides the default script for specific OSes."
             description="Description for setup script platform overrides" />}</div></div><div className="flex flex-col gap-4">{Je.map(y => values.setupPlatformVisibility[y]?<div key={y} className="flex flex-col gap-2"><div className="flex items-center justify-between"><div
              className="text-token-text-secondary text-xs font-medium uppercase tracking-wide">{At(y)}</div><B color="ghost" size="toolbar" onClick={()=>{ie(y)}}>{<M
               id="settings.localEnvironments.environment.setup.platformOverrides.remove"
               defaultMessage="Remove"
               description="Button label to remove a setup script override" />}</B></div><textarea
             id={`local-environment-setup-platform-script-${y}`}
             className="bg-token-input-background text-token-text-primary font-mono w-full rounded-md border border-token-border px-2.5 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-token-focus"
             value={values.setupPlatformScripts[y]??""}
             placeholder={cB}
             rows={6}
             onChange={X=>{xe(y,X.target.value)}} /></div>:null)}</div><div className="flex flex-col items-start gap-2">{Je.map(y => values.setupPlatformVisibility[y]?null:<B
            key={y}
            color="secondary"
            size="toolbar"
            className="w-auto"
            onClick={()=>{he(y)}}>{<M
             id="settings.localEnvironments.environment.setup.platformOverrides.add"
             defaultMessage="Add {platform} setup script"
             description="Button label to add a platform-specific setup script"
             values={{platform:At(y)}} />}</B>)}</div></div>}</E_1></div></ParseErrorMessage.Content></ParseErrorMessage><ParseErrorMessage><ParseErrorMessage.Header
       title={<M
        id="settings.localEnvironments.actions.title"
        defaultMessage="Actions"
        description="Title for local environment actions section" />}
       actions={<B color="secondary" size="toolbar" onClick={z}>{<M
         id="settings.localEnvironments.actions.add"
         defaultMessage="Add action"
         description="Button label to add a local environment action" />}</B>} /><ParseErrorMessage.Content className="gap-1"><div className="text-sm text-token-text-secondary">{<M
         id="settings.localEnvironments.environment.actions.description"
         defaultMessage="These actions can run any command and will be displayed in the header."
         description="Description for local environment actions summary" />}</div>{values.actions.length===0?<E_1>{<div className="p-3 text-sm text-token-text-secondary">{<M
          id="settings.localEnvironments.actions.empty"
          defaultMessage="Add an action to run commands from the local toolbar."
          description="Empty state for local environment actions" />}</div>}</E_1>:<div className="flex flex-col gap-3">{values.actions.map(y=>{
         const X=q.find(R => R.value===(y.icon??"tool"))??q[0];

         const te=y.platform!=null;
         const be=y.platform??H;
         return (
          <div
           key={y.id}
           className="bg-token-input-background border-token-border flex flex-col gap-3 rounded-lg border p-3"><div className="flex flex-col gap-2"><label
             className="text-token-text-secondary text-xs font-medium uppercase tracking-wide"
             htmlFor={`local-env-action-name-${y.id}`}>{<M
              id="settings.localEnvironments.actions.item.name"
              defaultMessage="Name"
              description="Label for local environment action name" />}</label><div className="flex items-center gap-2"><S1
              align="start"
              contentWidth="icon"
              triggerButton={<B
               id={`local-env-action-icon-${y.id}`}
               className="w-12 justify-center text-sm"
               color="secondary"
               size="toolbar"
               aria-label={X.ariaLabel}>{X.icon}</B>}>{q.map(R => <K.Item
               key={R.value}
               tooltipText={R.ariaLabel}
               onSelect={()=>{pe(y.id,{icon:R.value})}}>{R.icon}</K.Item>)}</S1><div className="flex-1">{<input
               id={`local-env-action-name-${y.id}`}
               className="bg-token-input-background text-token-text-primary w-full rounded-md border border-token-border px-2.5 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-token-focus"
               value={y.name}
               onChange={R=>{pe(y.id,{name:R.target.value})}} />}</div></div></div><div className="flex flex-col gap-2"><label
             className="text-token-text-secondary text-xs font-medium uppercase tracking-wide"
             htmlFor={`local-env-action-command-${y.id}`}>{<M
              id="settings.localEnvironments.actions.item.command"
              defaultMessage="Action script"
              description="Label for local environment action script" />}</label><textarea
             id={`local-env-action-command-${y.id}`}
             className="bg-token-input-background text-token-text-primary font-mono w-full rounded-md border border-token-border px-2.5 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-token-focus"
             value={y.command}
             placeholder={cB}
             rows={4}
             onChange={R=>{pe(y.id,{command:R.target.value})}} /></div><div
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6"><div className="min-w-0">{<div className="flex flex-col gap-2"><div
                className="text-token-text-secondary text-xs font-medium uppercase tracking-wide">{<M
                 id="settings.localEnvironments.actions.item.platforms"
                 defaultMessage="Platforms"
                 description="Label for local environment action platforms" />}</div><div className="text-token-text-secondary text-xs">{<M
                 id="settings.localEnvironments.actions.item.platforms.help"
                 defaultMessage="Only run on a specific OS."
                 description="Help text for action platforms selection" />}</div><div className="relative flex items-center gap-2 text-sm"><CC
                 id={`local-env-action-platform-specific-${y.id}`}
                 checked={te}
                 onCheckedChange={R=>{if(R){pe(y.id,{platform:be});return}pe(y.id,{platform:null})}} /><label
                 className="text-token-text-secondary"
                 htmlFor={`local-env-action-platform-specific-${y.id}`}>{<M
                  id="settings.localEnvironments.actions.item.platforms.specific"
                  defaultMessage="Platform specific"
                  description="Label for enabling platform-specific action selection" />}</label></div></div>}</div>{te?<div className="flex justify-start">{<CD
               selectedId={be}
               onSelect={R=>{pe(y.id,{platform:R})}}
               ariaLabel={c.formatMessage({id:"settings.localEnvironments.actions.item.platforms.selector",defaultMessage:"Platform selection",description:"Aria label for platform selection toggle"})}
               options={ce} />}</div>:null}</div><div className="flex justify-end sm:justify-center">{<CE
              tooltipContent={<M
               id="settings.localEnvironments.actions.item.tooltip.delete"
               defaultMessage="Delete"
               description="Tooltip for removing a local environment action" />}>{<B
               aria-label={c.formatMessage({id:"settings.localEnvironments.actions.item.button.delete",defaultMessage:"Delete",description:"Label for removing a local environment action"})}
               color="ghost"
               size="toolbar"
               onClick={()=>{Ze(y.id)}}>{<BH className="icon-sm" />}</B>}</CE>}</div></div></div>
         );
        })}</div>}</ParseErrorMessage.Content></ParseErrorMessage>{_.error?<div className="text-token-error-foreground text-sm">{<M
       id="settings.localEnvironments.preview.saveError"
       defaultMessage="Failed to save the file. ({error})"
       description="Error message when saving local environment file fails"
       values={{error:_.error.message}} />}</div>:null}<div className="flex justify-end">{<CE disabled={ae==null} tooltipContent={ae}>{<span className="inline-flex">{<B color="primary" size="toolbar" disabled={se} onClick={Ne}>{<M
          id="settings.localEnvironments.preview.save"
          defaultMessage="Save"
          description="Save button label for local environment file" />}</B>}</span>}</CE>}</div></>;
   };

  E_1[38]=configExists;
  E_1[39]=configPath;
  E_1[40]=F;
  E_1[41]=c;
  E_1[42]=data?.platform;
  E_1[43]=ParseErrorMessage;
  E_1[44]=ReadErrorMessage;
  E_1[45]=_.error;
  E_1[46]=_.isPending;
  E_1[47]=k;
  E_1[48]=workspaceGroup;
  E_1[49]=workspaceRoot;
  E_1[50]=O;
 } else {
  O=E_1[50];
 }

 let $;

 if (E_1[51]!==F.Subscribe||E_1[52]!==O) {
  $=<F.Subscribe selector={ei}>{O}</F.Subscribe>;
  E_1[51]=F.Subscribe;
  E_1[52]=O;
  E_1[53]=$;
 } else {
  $=E_1[53];
 }

 let U;

 if (E_1[54]!==$||E_1[55]!==B) {
  U=<form className="flex flex-col gap-[var(--padding-panel)]" onSubmit={B}>{$}</form>;
  E_1[54]=$;
  E_1[55]=B;
  E_1[56]=U;
 } else {
  U=E_1[56];
 }

 return U;
}function ei(t){return{values:t.values,isDirty:t.isDirty}}function ti(t){return t?.codexHome}function si({name,setupScript,setupPlatformScripts,actions}){return {name:name,setupScript:setupScript,setupPlatformScripts:setupPlatformScripts,setupPlatformVisibility:ci(setupPlatformScripts),actions:actions};}function Nt(t,e){return cF({version:e,name:t.name,setupScript:t.setupScript,setupPlatformScripts:li(t.setupPlatformScripts),actions:t.actions});}function ii({values,isDirty,isSaving}){return isSaving?"saving":values.name.length===0?"missing-name":isDirty?null:"no-changes";}function ni(t){return t==null?null:t==="missing-name"?<M
 id="settings.localEnvironments.save.disabled.name"
 defaultMessage="Add an environment name to save."
 description="Tooltip shown when save is disabled because the name is missing" />:t==="no-changes"?<M
 id="settings.localEnvironments.save.disabled.noChanges"
 defaultMessage="No changes to save."
 description="Tooltip shown when save is disabled because there are no changes" />:<M
 id="settings.localEnvironments.save.disabled.saving"
 defaultMessage="Saving…"
 description="Tooltip shown when save is disabled because a save is already in progress" />;}function ri(t){
 const e={darwin:"",linux:"",win32:""};

 if (t) {
  t.darwin?.script&&(e.darwin=t.darwin.script);
  t.linux?.script&&(e.linux=t.linux.script);
  t.win32?.script&&(e.win32=t.win32.script);
 }

 return e;
}function oi(t){return t==="darwin"||t==="linux"||t==="win32"?t:"darwin"}function ai(t){return[{id:"darwin",label:t.formatMessage(ue.darwin)},{id:"linux",label:t.formatMessage(ue.linux)},{id:"win32",label:t.formatMessage(ue.win32)}]}function li(t){const e={};for(const s of Je){
 const i=t[s];

 if (i&&i.length>0) {
  (e[s] = i);
 }
}return e}function ci(t){const e={darwin:false,linux:false,win32:false};for(const s of Je){
 const i=t[s];

 if (i&&i.length>0) {
  (e[s] = true);
 }
}return e}function At(t){
 if (t==="darwin") {
  return <M {...ue.darwin} />;
 }

 if (t==="linux") {
  return <M {...ue.linux} />;
 }

 return <M {...ue[t]} />;
}function Di(t){
 const E_1=c.c(33);
 const {workspaceRoot,workspaceGroup,configExists,initialEnvironment,parseErrorMessage,ReadErrorMessage,OnEdit}=t;
 const m=configExists&&initialEnvironment!=null;
 let c;

 if (E_1[0]!==initialEnvironment?.actions) {
  c=initialEnvironment?.actions??[];
  E_1[0]=initialEnvironment?.actions;
  E_1[1]=c;
 } else {
  c=E_1[1];
 }

 const l=c;
 const h=initialEnvironment?.setup.script??"";
 const u=initialEnvironment?.setup.darwin?.script??"";
 const p=initialEnvironment?.setup.linux?.script??"";
 const v=initialEnvironment?.setup.win32?.script??"";
 const x=u.length>0||p.length>0||v.length>0;
 let g;

 if (E_1[2]===Symbol.for("react.memo_cache_sentinel")) {
  g=<ReadErrorMessage.Header
   title={<M
    id="settings.localEnvironments.workspace.title"
    defaultMessage="Project"
    description="Title for the workspace summary section" />} />;

  E_1[2]=g;
 } else {
  g=E_1[2];
 }

 let S;

 if (E_1[3]!==workspaceGroup||E_1[4]!==workspaceRoot) {
  S=<ReadErrorMessage>{g}<ReadErrorMessage.Content>{<E_1>{<Qt workspaceRoot={workspaceRoot} workspaceGroup={workspaceGroup} />}</E_1>}</ReadErrorMessage.Content></ReadErrorMessage>;
  E_1[3]=workspaceGroup;
  E_1[4]=workspaceRoot;
  E_1[5]=S;
 } else {
  S=E_1[5];
 }

 let j;

 if (E_1[6]===Symbol.for("react.memo_cache_sentinel")) {
  j=<ReadErrorMessage.Header
   title={<M
    id="settings.localEnvironments.environment.title"
    defaultMessage="Environment details"
    description="Title for local environment details section" />} />;

  E_1[6]=j;
 } else {
  j=E_1[6];
 }

 let M;

 if (E_1[7]!==l||E_1[8]!==m||E_1[9]!==x||E_1[10]!==initialEnvironment||E_1[11]!==u||E_1[12]!==p||E_1[13]!==h||E_1[14]!==v) {
  M=m&&initialEnvironment?<><E_1>{<OnEdit
     label={<M
      id="settings.localEnvironments.environment.name"
      defaultMessage="Name"
      description="Label for environment name input" />}
     control={<span className="text-token-text-secondary text-sm">{initialEnvironment.name}</span>} />}</E_1><div className="flex flex-col gap-3"><div className="flex flex-col gap-1"><div className="text-token-text-primary text-sm font-medium">{<M
       id="settings.localEnvironments.environment.setup"
       defaultMessage="Setup script"
       description="Label for environment setup script input" />}</div><div className="text-sm text-token-text-secondary">{<M
       id="settings.localEnvironments.environment.setup.description"
       defaultMessage="This script will run on worktree creation."
       description="Description for environment setup script summary" />}</div></div><CH
     language="bash"
     content={h}
     shouldWrapCode
     codeContainerClassName="max-h-40" />{x?<div className="flex flex-col gap-3"><div className="flex flex-col gap-1"><div
       className="text-token-text-secondary text-xs font-medium uppercase tracking-wide">{<M
        id="settings.localEnvironments.environment.setup.platformOverrides"
        defaultMessage="Platform overrides"
        description="Label for setup script platform overrides" />}</div><div className="text-sm text-token-text-secondary">{<M
        id="settings.localEnvironments.environment.setup.platformOverrides.description"
        defaultMessage="Overrides the default script for specific OSes."
        description="Description for setup script platform overrides" />}</div></div>{u.length>0?<Lt_1 platform="darwin" script={u} />:null}{p.length>0?<Lt_1 platform="linux" script={p} />:null}{v.length>0?<Lt_1 platform="win32" script={v} />:null}</div>:null}</div><div className="flex flex-col gap-3"><div className="flex flex-col gap-1"><div className="text-token-text-primary text-sm font-medium">{<M
       id="settings.localEnvironments.environment.actionsLabel"
       defaultMessage="Actions"
       description="Label for actions count in local environment summary" />}</div><div className="text-sm text-token-text-secondary">{<M
       id="settings.localEnvironments.environment.actions.description"
       defaultMessage="These actions can run any command and will be displayed in the header."
       description="Description for local environment actions summary" />}</div></div><E_1>{<div className="flex flex-col gap-2 p-3">{l.length>0?<div className="flex flex-col gap-2">{l.map(ui)}</div>:<div className="text-sm text-token-text-secondary">{<M
        id="settings.localEnvironments.actions.empty"
        defaultMessage="Add an action to run commands from the local toolbar."
        description="Empty state for local environment actions" />}</div>}</div>}</E_1></div></>:<E_1>{<div className="p-3 text-sm text-token-text-secondary">{<M
     id="settings.localEnvironments.environment.empty"
     defaultMessage="No local environment is configured for this project yet."
     description="Empty state when no local environment is configured" />}</div>}</E_1>;

  E_1[7]=l;
  E_1[8]=m;
  E_1[9]=x;
  E_1[10]=initialEnvironment;
  E_1[11]=u;
  E_1[12]=p;
  E_1[13]=h;
  E_1[14]=v;
  E_1[15]=M;
 } else {
  M=E_1[15];
 }

 let L;

 if (E_1[16]!==parseErrorMessage) {
  L=parseErrorMessage?<div className="text-token-error-foreground mt-2 text-sm">{<M
    id="settings.localEnvironments.file.parseError"
    defaultMessage="Unable to parse the existing file. Saving will overwrite it. ({error})"
    description="Parse error message for local environment file"
    values={{error:parseErrorMessage}} />}</div>:null;

  E_1[16]=parseErrorMessage;
  E_1[17]=L;
 } else {
  L=E_1[17];
 }

 let E;

 if (E_1[18]!==ReadErrorMessage) {
  E=ReadErrorMessage?<div className="text-token-error-foreground mt-2 text-sm">{<M
    id="settings.localEnvironments.file.readError"
    defaultMessage="Failed to load local environment data. ({error})"
    description="Read error message for local environment config"
    values={{error:ReadErrorMessage}} />}</div>:null;

  E_1[18]=ReadErrorMessage;
  E_1[19]=E;
 } else {
  E=E_1[19];
 }

 let N;

 if (E_1[20]!==M||E_1[21]!==L||E_1[22]!==E) {
  N=<ReadErrorMessage>{j}<ReadErrorMessage.Content className="gap-[var(--padding-panel)]">{M}{L}{E}</ReadErrorMessage.Content></ReadErrorMessage>;
  E_1[20]=M;
  E_1[21]=L;
  E_1[22]=E;
  E_1[23]=N;
 } else {
  N=E_1[23];
 }

 let V;

 if (E_1[24]!==m) {
  V=m?<M
   id="settings.localEnvironments.environment.edit"
   defaultMessage="Edit local environment"
   description="Button label to edit a local environment" />:<M
   id="settings.localEnvironments.environment.create"
   defaultMessage="Create local environment"
   description="Button label to create a local environment" />;

  E_1[24]=m;
  E_1[25]=V;
 } else {
  V=E_1[25];
 }

 let k;

 if (E_1[26]!==OnEdit||E_1[27]!==V) {
  k=<div className="flex justify-end">{<B color="primary" size="toolbar" onClick={OnEdit}>{V}</B>}</div>;
  E_1[26]=OnEdit;
  E_1[27]=V;
  E_1[28]=k;
 } else {
  k=E_1[28];
 }

 let I;

 if (E_1[29]!==k||E_1[30]!==S||E_1[31]!==N) {
  I=<div className="flex flex-col gap-[var(--padding-panel)]">{S}{N}{k}</div>;
  E_1[29]=k;
  E_1[30]=S;
  E_1[31]=N;
  E_1[32]=I;
 } else {
  I=E_1[32];
 }

 return I;
}function ui(t,e){return (
 <div
  key={`${t.name}-${e}`}
  className="text-token-text-secondary flex items-center gap-2 text-sm"><span className="text-token-text-secondary">{<CA icon={t.icon??"tool"} />}</span><span>{t.name}</span></div>
);}function fi(t){
 if (t==="darwin") {
  return <M {...ue.darwin} />;
 }

 if (t==="linux") {
  return <M {...ue.linux} />;
 }

 return <M {...ue.win32} />;
}function Lt_1(t){
 const e=c.c(9);
 const {platform,script}=t;
 let o;

 if (e[0]!==platform) {
  o=fi(platform);
  e[0]=platform;
  e[1]=o;
 } else {
  o=e[1];
 }

 let r;

 if (e[2]!==o) {
  r=<div
   className="text-token-text-secondary text-xs font-medium uppercase tracking-wide">{o}</div>;

  e[2]=o;
  e[3]=r;
 } else {
  r=e[3];
 }

 let a;

 if (e[4]!==script) {
  a=<CH
   language="bash"
   content={script}
   shouldWrapCode
   codeContainerClassName="max-h-40" />;

  e[4]=script;
  e[5]=a;
 } else {
  a=e[5];
 }

 let d;

 if (e[6]!==r||e[7]!==a) {
  d=<div className="flex flex-col gap-2">{r}{a}</div>;
  e[6]=r;
  e[7]=a;
  e[8]=d;
 } else {
  d=e[8];
 }

 return d;
}function Mi(t){
 const e=c.c(14);
 const {groups,isLoading,onAddWorkspace,onCreateEnvironment,onSelectEnvironment}=t;
 let D;

 if (e[0]===Symbol.for("react.memo_cache_sentinel")) {
  D=<M
   id="settings.localEnvironments.workspaceSelect.title"
   defaultMessage="Select a project"
   description="Title for the workspace selection step" />;

  e[0]=D;
 } else {
  D=e[0];
 }

 let f;

 if (e[1]===Symbol.for("react.memo_cache_sentinel")) {
  f=<M
   id="settings.localEnvironments.workspaceSelect.description"
   defaultMessage="Local environments tell Codex how to set up worktrees for a project. {learnMore}"
   description="Description for the workspace selection step"
   values={{learnMore:<a
    className="text-token-text-secondary hover:text-token-text-primary inline-flex items-center gap-1 text-base"
    href={cI}
    target="_blank"
    rel="noreferrer"><M
     id="settings.localEnvironments.workspaceSelect.learnMore"
     defaultMessage="Learn more"
     description="Link label for local environments docs" /><G className="icon-xxs" /></a>}} />;

  e[1]=f;
 } else {
  f=e[1];
 }

 let m;

 if (e[2]===Symbol.for("react.memo_cache_sentinel")) {
  m=<M
   id="settings.localEnvironments.workspace.add"
   defaultMessage="Add project"
   description="Button label to add a new workspace" />;

  e[2]=m;
 } else {
  m=e[2];
 }

 let c;

 if (e[3]!==onAddWorkspace) {
  c=<D.Header
   title={D}
   subtitle={f}
   actions={<B color="secondary" size="toolbar" onClick={onAddWorkspace}>{m}</B>} />;

  e[3]=onAddWorkspace;
  e[4]=c;
 } else {
  c=e[4];
 }

 let l;

 if (e[5]!==groups||e[6]!==isLoading||e[7]!==onAddWorkspace||e[8]!==onCreateEnvironment||e[9]!==onSelectEnvironment) {
  l=<D.Content>{<div className="flex flex-col gap-2">{<Hi
     groups={groups}
     isLoading={isLoading}
     onAddWorkspace={onAddWorkspace}
     onCreateEnvironment={onCreateEnvironment}
     onSelectEnvironment={onSelectEnvironment} />}</div>}</D.Content>;

  e[5]=groups;
  e[6]=isLoading;
  e[7]=onAddWorkspace;
  e[8]=onCreateEnvironment;
  e[9]=onSelectEnvironment;
  e[10]=l;
 } else {
  l=e[10];
 }

 let h;

 if (e[11]!==c||e[12]!==l) {
  h=<D className="gap-2">{c}{l}</D>;
  e[11]=c;
  e[12]=l;
  e[13]=h;
 } else {
  h=e[13];
 }

 return h;
}function Hi(t){
 const E=c.c(17);
 const {groups,isLoading,onAddWorkspace,onCreateEnvironment,onSelectEnvironment}=t;
 const d=q();
 if(isLoading){
  let l;

  if (E[0]===Symbol.for("react.memo_cache_sentinel")) {
   l=<E>{<div className="flex items-center gap-2 p-3 text-sm text-token-text-secondary"><O className="icon-xs" /><M
      id="settings.localEnvironments.workspaceSelect.loading"
      defaultMessage="Loading projects."
      description="Loading message while workspace options are fetched" /></div>}</E>;

   E[0]=l;
  } else {
   l=E[0];
  }

  return l;
 }if(groups.length===0){
  let l;

  if (E[1]===Symbol.for("react.memo_cache_sentinel")) {
   l=<M
    id="settings.localEnvironments.workspaceSelect.empty"
    defaultMessage="No projects yet. Add one to configure local environments."
    description="Empty state when no workspace roots are available" />;

   E[1]=l;
  } else {
   l=E[1];
  }

  let h;

  if (E[2]===Symbol.for("react.memo_cache_sentinel")) {
   h=<M
    id="settings.localEnvironments.workspace.add"
    defaultMessage="Add project"
    description="Button label to add a new workspace" />;

   E[2]=h;
  } else {
   h=E[2];
  }

  let u;

  if (E[3]!==onAddWorkspace) {
   u=<E>{<div className="flex flex-col gap-3 p-3 text-sm text-token-text-secondary">{l}<div>{<B color="primary" size="toolbar" onClick={onAddWorkspace}>{h}</B>}</div></div>}</E>;
   E[3]=onAddWorkspace;
   E[4]=u;
  } else {
   u=E[4];
  }

  return u;
 }let f;

 if (E[5]!==d) {
  f=d.formatMessage({id:"settings.localEnvironments.workspaceSelect.listLabel",defaultMessage:"Available projects",description:"Aria label for the workspace selection list"});
  E[5]=d;
  E[6]=f;
 } else {
  f=E[6];
 }

 let m;if (E[7]!==groups||E[8]!==onCreateEnvironment||E[9]!==onSelectEnvironment) {
  let l;

  if (E[11]!==onCreateEnvironment||E[12]!==onSelectEnvironment) {
   l=h => <Pi
    key={h.path}
    group={h}
    onCreateEnvironment={onCreateEnvironment}
    onSelectEnvironment={onSelectEnvironment}>
    {h.path}
   </Pi>;

   E[11]=onCreateEnvironment;
   E[12]=onSelectEnvironment;
   E[13]=l;
  } else {
   l=E[13];
  }

  m=groups.map(l);
  E[7]=groups;
  E[8]=onCreateEnvironment;
  E[9]=onSelectEnvironment;
  E[10]=m;
 } else {
   m=E[10];
  }let c;

 if (E[14]!==f||E[15]!==m) {
  c=<div className="flex flex-col gap-3" role="list" aria-label={f}>{m}</div>;
  E[14]=f;
  E[15]=m;
  E[16]=c;
 } else {
  c=E[16];
 }

 return c;
}function Pi(t){
 const E_1=c.c(58);
 const {group,onCreateEnvironment,onSelectEnvironment}=t;
 const r=q();
 let a;

 if (E_1[0]!==group.path) {
  a={params:{workspaceRoot:group.path},select:vi};
  E_1[0]=group.path;
  E_1[1]=a;
 } else {
  a=E_1[1];
 }

 const{data,isLoading,error}=l("local-environments",a);let c;

 if (E_1[2]!==data) {
  c=data===void 0?[]:data;
  E_1[2]=data;
  E_1[3]=c;
 } else {
  c=E_1[3];
 }

 const l=c;let h;

 if (E_1[4]!==l) {
  h=cJ(l);
  E_1[4]=l;
  E_1[5]=h;
 } else {
  h=E_1[5];
 }

 const u=h;
 const V_1=group.isCodexWorktree?cr:cs_1;
 const x=group.repositoryData?.ownerRepo?.owner??null;
 const g=isLoading;
 const S=error!=null;
 const j=l.length>0;
 let M;

 if (E_1[6]!==r) {
  M=r.formatMessage({id:"settings.localEnvironments.workspaceSelect.viewAction",defaultMessage:"View",description:"Action label to view a local environment"});
  E_1[6]=r;
  E_1[7]=M;
 } else {
  M=E_1[7];
 }

 const L=M;let E;

 if (E_1[8]!==r) {
  E=r.formatMessage({id:"settings.localEnvironments.workspaceSelect.addLabel",defaultMessage:"Add environment",description:"Aria label for add environment button"});
  E_1[8]=r;
  E_1[9]=E;
 } else {
  E=E_1[9];
 }

 const N=E;let V;

 if (E_1[10]!==l||E_1[11]!==group.path) {
  V=cK(l,group.path);
  E_1[10]=l;
  E_1[11]=group.path;
  E_1[12]=V;
 } else {
  V=E_1[12];
 }

 const k=V;let I;

 if (E_1[13]!==r) {
  I=r.formatMessage({id:"settings.localEnvironments.workspaceSelect.loadingLabel",defaultMessage:"Loading environment",description:"Label for environment row while loading"});
  E_1[13]=r;
  E_1[14]=I;
 } else {
  I=E_1[14];
 }

 const G=I;let _;

 if (E_1[15]!==r) {
  _=r.formatMessage({id:"settings.localEnvironments.workspaceSelect.errorLabel",defaultMessage:"Environment needs attention",description:"Label for environment row when environment data fails"});
  E_1[15]=r;
  E_1[16]=_;
 } else {
  _=E_1[16];
 }

 const w=_;let P;

 if (E_1[17]!==u||E_1[18]!==group.path||E_1[19]!==onSelectEnvironment) {
  P=()=>{
   if (u!=null) {
    onSelectEnvironment(group.path,u);
   }
  };

  E_1[17]=u;
  E_1[18]=group.path;
  E_1[19]=onSelectEnvironment;
  E_1[20]=P;
 } else {
  P=E_1[20];
 }

 let F;

 if (E_1[21]!==V_1) {
  F=<V_1 className="icon-sm text-token-text-secondary shrink-0" />;
  E_1[21]=V_1;
  E_1[22]=F;
 } else {
  F=E_1[22];
 }

 let B;

 if (E_1[23]!==group.label) {
  B=<span className="truncate font-medium">{group.label}</span>;
  E_1[23]=group.label;
  E_1[24]=B;
 } else {
  B=E_1[24];
 }

 let O;

 if (E_1[25]!==x) {
  O=x?<span className="text-token-text-secondary truncate">{x}</span>:null;
  E_1[25]=x;
  E_1[26]=O;
 } else {
  O=E_1[26];
 }

 let $;

 if (E_1[27]!==B||E_1[28]!==O) {
  $=<div
   className="flex min-w-0 items-center gap-2 text-sm text-token-text-primary">{B}{O}</div>;

  E_1[27]=B;
  E_1[28]=O;
  E_1[29]=$;
 } else {
  $=E_1[29];
 }

 let U;

 if (E_1[30]!==P||E_1[31]!==F||E_1[32]!==$) {
  U=<button
   className="flex min-w-0 items-center gap-3 text-left"
   type="button"
   onClick={P}>{F}{$}</button>;

  E_1[30]=P;
  E_1[31]=F;
  E_1[32]=$;
  E_1[33]=U;
 } else {
  U=E_1[33];
 }

 let K;

 if (E_1[34]!==group.path||E_1[35]!==k||E_1[36]!==onCreateEnvironment) {
  K=()=>{onCreateEnvironment(group.path,k)};
  E_1[34]=group.path;
  E_1[35]=k;
  E_1[36]=onCreateEnvironment;
  E_1[37]=K;
 } else {
  K=E_1[37];
 }

 let A;

 if (E_1[38]===Symbol.for("react.memo_cache_sentinel")) {
  A=<BJ className="icon-sm" />;
  E_1[38]=A;
 } else {
  A=E_1[38];
 }

 let W;

 if (E_1[39]!==N||E_1[40]!==K) {
  W=<B
   className="w-9 justify-center"
   aria-label={N}
   color="secondary"
   size="toolbar"
   onClick={K}>{A}</B>;

  E_1[39]=N;
  E_1[40]=K;
  E_1[41]=W;
 } else {
  W=E_1[41];
 }

 let q;

 if (E_1[42]!==U||E_1[43]!==W) {
  q=<div className="flex items-center justify-between gap-2 px-4 py-3">{U}{W}</div>;
  E_1[42]=U;
  E_1[43]=W;
  E_1[44]=q;
 } else {
  q=E_1[44];
 }

 let H;

 if (E_1[45]!==L||E_1[46]!==l||E_1[47]!==w||E_1[48]!==group.path||E_1[49]!==j||E_1[50]!==S||E_1[51]!==G||E_1[52]!==onSelectEnvironment||E_1[53]!==g) {
  H=g||S||j?<div className="border-t border-token-border">{g?<div className="px-4 py-3">{<div className="flex items-center gap-2 text-sm text-token-text-secondary"><O className="icon-xs" /><span>{G}</span></div>}</div>:S?<div className="px-4 py-3">{<div className="flex items-center gap-2 text-sm text-token-error-foreground">{<span>{w}</span>}</div>}</div>:<div className="flex flex-col divide-y divide-token-border">{l.map(Q=>{
      const ae=gi(Q.configPath);
      const se=Q.type==="success"&&Q.environment?.name!=null&&Q.environment.name.length>0;
      const he=se?Q.environment.name:ae;
      const ie=Q.type==="error";
      const z=ie||se&&ae!==he?ae:null;
      return (
       <div
        key={Q.configPath}
        className="flex items-center justify-between gap-3 px-4 py-3"><button
         className="flex min-w-0 flex-1 text-left"
         type="button"
         onClick={()=>{onSelectEnvironment(group.path,Q.configPath)}}>{<div className="flex min-w-0 flex-col gap-0.5 text-sm"><span className={ie?"text-token-error-foreground":"text-token-text-primary"}>{ie?w:he}</span>{z?<span className="text-token-description-foreground text-xs">{z}</span>:null}</div>}</button><B
         color="ghost"
         size="toolbar"
         onClick={()=>{onSelectEnvironment(group.path,Q.configPath)}}>{L}</B></div>
      );
     })}</div>}</div>:null;

  E_1[45]=L;
  E_1[46]=l;
  E_1[47]=w;
  E_1[48]=group.path;
  E_1[49]=j;
  E_1[50]=S;
  E_1[51]=G;
  E_1[52]=onSelectEnvironment;
  E_1[53]=g;
  E_1[54]=H;
 } else {
  H=E_1[54];
 }

 let ce;

 if (E_1[55]!==q||E_1[56]!==H) {
  ce=<E_1 className="p-0">{q}{H}</E_1>;
  E_1[55]=q;
  E_1[56]=H;
  E_1[57]=ce;
 } else {
  ce=E_1[57];
 }

 return ce;
}function vi(t){return t.environments}function gi(t){
 const e=cL(t);
 const s=e.split("/").filter(Boolean);
 return s[s.length-1]??e
}

export function LocalEnvironmentsSettings() {
 const t=c.c(79);
 const {Data,isLoading}=setC("workspace-root-options");
 let i;

 if (t[0]!==Data?.roots) {
  i=Data?.roots??[];
  t[0]=Data?.roots;
  t[1]=i;
 } else {
  i=t[1];
 }

 const o=i;
 const r=cM();
 const [a,SetA]=isLoading.useState(null);
 const [f,setF]=isLoading.useState(null);
 const [c,setC]=isLoading.useState(false);
 const u=a??null;
 let P_1;

 if (t[2]!==u||t[3]!==o) {
  P_1=u!=null&&o.includes(u)?u:null;
  t[2]=u;
  t[3]=o;
  t[4]=P_1;
 } else {
  P_1=t[4];
 }

 const v=P_1;let x;

 if (t[5]!==v||t[6]!==r) {
  x=v!=null?r.find(C => C.path===v)??null:null;
  t[5]=v;
  t[6]=r;
  t[7]=x;
 } else {
  x=t[7];
 }

 const g=x;
 const S=v==null;
 const j=bi;
 let M;

 if (t[8]===Symbol.for("react.memo_cache_sentinel")) {
  M=()=>{
    SetA(null);
    setF(null);
    setC(false);
   };

  t[8]=M;
 } else {
  M=t[8];
 }

 const L=M;let E;

 if (t[9]===Symbol.for("react.memo_cache_sentinel")) {
  E=()=>{setC(true)};
  t[9]=E;
 } else {
  E=t[9];
 }

 const N=E;let V;

 if (t[10]===Symbol.for("react.memo_cache_sentinel")) {
  V=()=>{setC(false)};
  t[10]=V;
 } else {
  V=t[10];
 }

 const k=V;let I;

 if (t[11]===Symbol.for("react.memo_cache_sentinel")) {
  I=(C,T)=>{
    SetA(C);
    setF(T);
    setC(false);
   };

  t[11]=I;
 } else {
  I=t[11];
 }

 const G=I;let _;

 if (t[12]===Symbol.for("react.memo_cache_sentinel")) {
  _=(C,T)=>{
    SetA(C);
    setF(T);
    setC(true);
   };

  t[12]=_;
 } else {
  _=t[12];
 }

 const w=_;
 const P=v??"";
 let F;

 if (t[13]!==P) {
  F={workspaceRoot:P};
  t[13]=P;
  t[14]=F;
 } else {
  F=t[14];
 }

 const B=!S&&v!=null;let O;

 if (t[15]!==B) {
  O={enabled:B};
  t[15]=B;
  t[16]=O;
 } else {
  O=t[16];
 }

 let $;

 if (t[17]!==O||t[18]!==F) {
  $={params:F,queryConfig:O,select:xi};
  t[17]=O;
  t[18]=F;
  t[19]=$;
 } else {
  $=t[19];
 }

 const{Data: data_1,isLoading: isLoading_1,error}=setC("local-environments",$);let W;

 if (t[20]!==data_1) {
  W=data_1===void 0?[]:data_1;
  t[20]=data_1;
  t[21]=W;
 } else {
  W=t[21];
 }

 const q=W;let H;

 if (t[22]!==q) {
  H=cJ(q);
  t[22]=q;
  t[23]=H;
 } else {
  H=t[23];
 }

 const Q=f??H??null;
 const ae=Q??"";
 let se;

 if (t[24]!==ae) {
  se={configPath:ae};
  t[24]=ae;
  t[25]=se;
 } else {
  se=t[25];
 }

 const he=!S&&v!=null&&Q!=null;let ie;

 if (t[26]!==he) {
  ie={enabled:he};
  t[26]=he;
  t[27]=ie;
 } else {
  ie=t[27];
 }

 let xe;

 if (t[28]!==se||t[29]!==ie) {
  xe={params:se,queryConfig:ie};
  t[28]=se;
  t[29]=ie;
  t[30]=xe;
 } else {
  xe=t[30];
 }

 const {Data: data_2,isLoading: isLoading_2,error: error_1}=setC("local-environment-config",xe);
 const Ne=data_2?.configPath??"";
 let y;

 if (t[31]!==Ne) {
  y={configPath:Ne};
  t[31]=Ne;
  t[32]=y;
 } else {
  y=t[32];
 }

 const X=!S&&v!=null&&!!data_2?.exists;let te;

 if (t[33]!==X) {
  te={enabled:X};
  t[33]=X;
  t[34]=te;
 } else {
  te=t[34];
 }

 let be;

 if (t[35]!==y||t[36]!==te) {
  be={params:y,queryConfig:te};
  t[35]=y;
  t[36]=te;
  t[37]=be;
 } else {
  be=t[37];
 }

 const {Data: data_3,error: error_2,isLoading: isLoading_3}=setC("local-environment",be);
 const Se=data_3?.environment.type==="success"?data_3.environment.environment:null;
 const Me=data_3?.environment.type==="error"?data_3.environment.error.message:null;
 const Ee=error_1?.message??error_2?.message??error?.message??null;
 let Pe;

 if (t[38]!==c||t[39]!==v||t[40]!==g) {
  Pe=v!=null?<Js_1
   workspaceRoot={v}
   workspaceGroup={g}
   mode={c?"edit":void 0}
   onBack={c?k:L} />:null;

  t[38]=c;
  t[39]=v;
  t[40]=g;
  t[41]=Pe;
 } else {
  Pe=t[41];
 }

 const ne=Pe;
 const Xt=isLoading_1||isLoading_2||isLoading_3;
 if(S){
  let C;

  if (t[42]===Symbol.for("react.memo_cache_sentinel")) {
   C=<P_1 slug="local-environments" />;
   t[42]=C;
  } else {
   C=t[42];
  }

  let T;

  if (t[43]!==r||t[44]!==isLoading) {
   T=<S title={C}>{<Mi
     groups={r}
     isLoading={isLoading}
     onAddWorkspace={j}
     onCreateEnvironment={w}
     onSelectEnvironment={G} />}</S>;

   t[43]=r;
   t[44]=isLoading;
   t[45]=T;
  } else {
   T=t[45];
  }

  return T;
 }if(Xt){
  let C;

  if (t[46]===Symbol.for("react.memo_cache_sentinel")) {
   C=<P_1 slug="local-environments" />;
   t[46]=C;
  } else {
   C=t[46];
  }

  let T;

  if (t[47]===Symbol.for("react.memo_cache_sentinel")) {
   T=<SetA.Header
    title={<M
     id="settings.localEnvironments.loading.title"
     defaultMessage="Loading local environments"
     description="Loading state title for local environments settings" />} />;

   t[47]=T;
  } else {
   T=t[47];
  }

  let Y;

  if (t[48]===Symbol.for("react.memo_cache_sentinel")) {
   Y=<SetA>{T}<SetA.Content>{<Data>{<div className="p-3 text-sm text-token-text-secondary">{<M
        id="settings.localEnvironments.loading.body"
        defaultMessage="Fetching your project configuration."
        description="Loading state body for local environments settings" />}</div>}</Data>}</SetA.Content></SetA>;

   t[48]=Y;
  } else {
   Y=t[48];
  }

  let de;

  if (t[49]!==ne) {
   de=<S title={C} backSlot={ne}>{Y}</S>;
   t[49]=ne;
   t[50]=de;
  } else {
   de=t[50];
  }

  return de;
 }if(!data_2||v==null){
  let C;

  if (t[51]===Symbol.for("react.memo_cache_sentinel")) {
   C=<P_1 slug="local-environments" />;
   t[51]=C;
  } else {
   C=t[51];
  }

  let T;

  if (t[52]===Symbol.for("react.memo_cache_sentinel")) {
   T=<SetA.Header
    title={<M
     id="settings.localEnvironments.unavailable.title"
     defaultMessage="Local environments unavailable"
     description="Title for missing local environment config state" />} />;

   t[52]=T;
  } else {
   T=t[52];
  }

  let Y;

  if (t[53]===Symbol.for("react.memo_cache_sentinel")) {
   Y=<SetA>{T}<SetA.Content>{<Data>{<div className="p-3 text-sm text-token-text-secondary">{<M
        id="settings.localEnvironments.unavailable.body"
        defaultMessage="We could not load local environment settings for this project."
        description="Body text for missing local environment config state" />}</div>}</Data>}</SetA.Content></SetA>;

   t[53]=Y;
  } else {
   Y=t[53];
  }

  let de;

  if (t[54]!==ne) {
   de=<S title={C} backSlot={ne}>{Y}</S>;
   t[54]=ne;
   t[55]=de;
  } else {
   de=t[55];
  }

  return de;
 }if(c){
  let C;

  if (t[56]===Symbol.for("react.memo_cache_sentinel")) {
   C=<P_1 slug="local-environments" />;
   t[56]=C;
  } else {
   C=t[56];
  }

  let T;

  if (t[57]!==data_2.configPath||t[58]!==data_2.exists||t[59]!==Se||t[60]!==Me||t[61]!==Ee||t[62]!==v||t[63]!==g) {
   T=<Zs
    workspaceRoot={v}
    workspaceGroup={g}
    configPath={data_2.configPath}
    configExists={data_2.exists}
    initialEnvironment={Se}
    parseErrorMessage={Me}
    readErrorMessage={Ee}
    onExitEdit={k} />;

   t[57]=data_2.configPath;
   t[58]=data_2.exists;
   t[59]=Se;
   t[60]=Me;
   t[61]=Ee;
   t[62]=v;
   t[63]=g;
   t[64]=T;
  } else {
   T=t[64];
  }

  let Y;

  if (t[65]!==ne||t[66]!==T) {
   Y=<S title={C} backSlot={ne}>{T}</S>;
   t[65]=ne;
   t[66]=T;
   t[67]=Y;
  } else {
   Y=t[67];
  }

  return Y;
 }let _e;

 if (t[68]===Symbol.for("react.memo_cache_sentinel")) {
  _e=<P_1 slug="local-environments" />;
  t[68]=_e;
 } else {
  _e=t[68];
 }

 let we;

 if (t[69]!==data_2.exists||t[70]!==Se||t[71]!==Me||t[72]!==Ee||t[73]!==v||t[74]!==g) {
  we=<Di
   workspaceRoot={v}
   workspaceGroup={g}
   configExists={data_2.exists}
   initialEnvironment={Se}
   parseErrorMessage={Me}
   readErrorMessage={Ee}
   onEdit={N} />;

  t[69]=data_2.exists;
  t[70]=Se;
  t[71]=Me;
  t[72]=Ee;
  t[73]=v;
  t[74]=g;
  t[75]=we;
 } else {
  we=t[75];
 }

 let Oe;

 if (t[76]!==ne||t[77]!==we) {
  Oe=<S title={_e} backSlot={ne}>{we}</S>;
  t[76]=ne;
  t[77]=we;
  t[78]=Oe;
 } else {
  Oe=t[78];
 }

 return Oe;
}
//# sourceMappingURL=local-environments-settings-page-CwZ8Ga_C.js.map

function xi(t){return t.environments}function bi(){bU.dispatchMessage("electron-add-new-workspace-root-option",{})}export{LocalEnvironmentsSettings as LocalEnvironmentsSettings};
//# sourceMappingURL=local-environments-settings-page-CwZ8Ga_C.js.map
