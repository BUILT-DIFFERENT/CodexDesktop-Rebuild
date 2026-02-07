import{i}from"./init-Gi6I4Gst.js";class o extends Map{constructor(n,t=g){
  super();
  Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}});

  if (n!=null) {
    for (const[r,s] of n) {
      this.set(r,s)
    }
  }
}get(n){return super.get(c(this,n))}has(n){return super.has(c(this,n))}set(n,t){return super.set(l(this,n),t)}delete(n){return super.delete(p(this,n))}}function c({_intern,_key},t){const r=_key(t);return _intern.has(r)?_intern.get(r):t;}function l({_intern,_key},t){const r=_key(t);return _intern.has(r)?_intern.get(r):(_intern.set(r,t),t);}function p({_intern,_key},t){
  const r=_key(t);

  if (_intern.has(r)) {
    t=_intern.get(r);
    _intern.delete(r);
  }

  return t;
}function g(e){return e!==null&&typeof e=="object"?e.valueOf():e}const f=Symbol("implicit");function h(...args) {
  let e=new o;
  let n=[];
  let t=[];
  let r=f;

  class s {
    constructor(u) {let i=e.get(u);if(i===void 0){if (r!==f) {
      return r;
    }e.set(u,i=n.push(u)-1)}return t[i%t.length]}

    static domain(u) {
      if (!args.length) {
        return n.slice();
      }
      n=[];
      e=new o;
      for (const i of u) {
        if (!e.has(i)) {
          e.set(i,n.push(i)-1);
        }
      }return s
    }

    static range(u) {return args.length?(t=Array.from(u),s):t.slice();}
    static unknown(u) {return args.length?(r=u,s):r;}
    static copy() {return h(n,t).unknown(r)}
  }

  i.apply(s,args);
  return s;
}export{h as o};
//# sourceMappingURL=ordinal-Cboi1Yqb.js.map
