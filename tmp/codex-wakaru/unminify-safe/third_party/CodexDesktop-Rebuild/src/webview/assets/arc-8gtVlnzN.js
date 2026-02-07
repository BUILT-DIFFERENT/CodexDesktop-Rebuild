import{aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU}from"./index-CgwAo6pj.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function dn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,h,q,O,v,R,K,a){
  const D=q-l;
  const i=O-h;
  const n=K-v;
  const d=a-R;
  let u=d*D-n*i;
  if (!(u*u<aI)) {
    u=(n*(h-R)-d*(l-v))/u;
    return [l+u*D,h+u*i];
  }
}function W(l,h,q,O,v,R,K){
  const a=l-q;
  const D=h-O;
  const i=(K?R:-R)/aQ(a*a+D*D);
  const n=i*D;
  const d=-i*a;
  const u=l+n;
  const s=h+d;
  const f=q+n;
  const c=O+d;
  const L=(u+f)/2;
  const t=(s+c)/2;
  const m=f-u;
  const g=c-s;
  const A=m*m+g*g;
  const T=v-R;
  const P=u*c-f*s;
  const E=(g<0?-1:1)*aQ(aU(0,T*T*A-P*P));
  let G=(P*g-m*E)/A;
  let H=(-P*m-g*E)/A;
  const w=(P*g+m*E)/A;
  const p=(-P*m+g*E)/A;
  const x=G-L;
  const e=H-t;
  const r=w-L;
  const M=p-t;

  if (x*x+e*e>r*r+M*M) {
    G=w;
    H=p;
  }

  return {cx:G,cy:H,x01:-n,y01:-d,x11:G*(v/T-1),y11:H*(v/T-1)};
}

export function d(...args) {
  let l=cn;
  let h=yn;
  let q=aO(0);
  let O=null;
  let v=gn;
  let R=dn;
  let K=mn;
  let a=null;
  const D=aG(i);

  class i {
    constructor() {
      let n;
      let d;
      let u=+l.apply(this,args);
      let s=+h.apply(this,args);
      const f=v.apply(this,args)-aH;
      const c=R.apply(this,args)-aH;
      const L=aN(c-f);
      const t=c>f;

      if (!a) {
        (a = n=D());
      }

      if (s<u) {
        d=s;
        s=u;
        u=d;
      }

      if (!(s>aI)) {
        a.moveTo(0,0);
      } else if (L>aJ-aI) {
        a.moveTo(s*aK(f),s*aL(f));
        a.arc(0,0,s,f,c,!t);

        if (u>aI) {
          a.moveTo(u*aK(c),u*aL(c));
          a.arc(0,0,u,c,f,t);
        }
      } else {
        let m=f;
        let g=c;
        let A=f;
        let T=c;
        let P=L;
        let E=L;
        const G=K.apply(this,args)/2;
        const H=G>aI&&(O?+O.apply(this,args):aQ(u*u+s*s));
        const w=aM(aN(s-u)/2,+q.apply(this,args));
        let p=w;
        let x=w;
        let e;
        let r;
        if(H>aI){
          let M=aS(H/u*aL(G));
          let z=aS(H/s*aL(G));

          if ((P-=M*2)>aI) {
            M*=t?1:-1;
            A+=M;
            T-=M;
          } else {
            P=0;
            A=T=(f+c)/2;
          }

          if ((E-=z*2)>aI) {
            z*=t?1:-1;
            m+=z;
            g-=z;
          } else {
            E=0;
            m=g=(f+c)/2;
          }
        }
        const Q=s*aK(m);
        const U=s*aL(m);
        const B=u*aK(T);
        const C=u*aL(T);
        if(w>aI){
          var F=s*aK(g);
          var V=s*aL(g);
          var X=u*aK(A);
          var Y=u*aL(A);
          let S;
          if (L<aP) {
            if (S=pn(Q,U,X,Y,F,V,B,C)) {
              const Z=Q-S[0];
              const $=U-S[1];
              const k=F-S[0];
              const b=V-S[1];
              const nn=1/aL(aT((Z*k+$*b)/(aQ(Z*Z+$*$)*aQ(k*k+b*b)))/2);
              const en=aQ(S[0]*S[0]+S[1]*S[1]);
              p=aM(w,(u-en)/(nn-1));
              x=aM(w,(s-en)/(nn+1));
            } else {
              p = 0;
              x = 0;
            }
          }
        }

        if (E>aI) {
          if (x>aI) {
            e=W(X,Y,Q,U,s,x,t);
            r=W(F,V,B,C,s,x,t);
            a.moveTo(e.cx+e.x01,e.cy+e.y01);
            x<w?a.arc(e.cx,e.cy,x,aR(e.y01,e.x01),aR(r.y01,r.x01),!t):(a.arc(e.cx,e.cy,x,aR(e.y01,e.x01),aR(e.y11,e.x11),!t),a.arc(0,0,s,aR(e.cy+e.y11,e.cx+e.x11),aR(r.cy+r.y11,r.cx+r.x11),!t),a.arc(r.cx,r.cy,x,aR(r.y11,r.x11),aR(r.y01,r.x01),!t));
          } else {
            a.moveTo(Q,U);
            a.arc(0,0,s,m,g,!t);
          }
        } else {
          a.moveTo(Q,U);
        }

        if (!(u>aI)||!(P>aI)) {
          a.lineTo(B,C);
        } else if (p>aI) {
          e=W(B,C,F,V,u,-p,t);
          r=W(Q,U,X,Y,u,-p,t);
          a.lineTo(e.cx+e.x01,e.cy+e.y01);
          p<w?a.arc(e.cx,e.cy,p,aR(e.y01,e.x01),aR(r.y01,r.x01),!t):(a.arc(e.cx,e.cy,p,aR(e.y01,e.x01),aR(e.y11,e.x11),!t),a.arc(0,0,u,aR(e.cy+e.y11,e.cx+e.x11),aR(r.cy+r.y11,r.cx+r.x11),t),a.arc(r.cx,r.cy,p,aR(r.y11,r.x11),aR(r.y01,r.x01),!t));
        } else {
          a.arc(0,0,u,T,A,t);
        }
      }

      a.closePath();

      if (n) {
        a=null;
        return `${n}`||null;
      }
    }

    static centroid() {
      const n=(+l.apply(this,args)+ +h.apply(this,args))/2;
      const d=(+v.apply(this,args)+ +R.apply(this,args))/2-aP/2;
      return [aK(d)*n,aL(d)*n];
    }

    static innerRadius(n) {return args.length?(l=typeof n=="function"?n:aO(+n),i):l;}
    static outerRadius(n) {return args.length?(h=typeof n=="function"?n:aO(+n),i):h;}
    static cornerRadius(n) {return args.length?(q=typeof n=="function"?n:aO(+n),i):q;}
    static padRadius(n) {return args.length?(O=n==null?null:typeof n=="function"?n:aO(+n),i):O;}
    static startAngle(n) {return args.length?(v=typeof n=="function"?n:aO(+n),i):v;}
    static endAngle(n) {return args.length?(R=typeof n=="function"?n:aO(+n),i):R;}
    static padAngle(n) {return args.length?(K=typeof n=="function"?n:aO(+n),i):K;}
    static context(n) {return args.length?(a=n??null,i):a;}
  }

  return i;
}
//# sourceMappingURL=arc-8gtVlnzN.js.map

export{d as d};
//# sourceMappingURL=arc-8gtVlnzN.js.map
