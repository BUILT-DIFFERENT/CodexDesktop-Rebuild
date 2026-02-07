import{c,j as u_1,a,b,D,j,W,c as c_1}from"./index-CgwAo6pj.js";
const S=await w();
const y=4;
const I=100;

export function ShikiHighlightProvider(a) {
  const e=c.c(7);
  const {children}=a;
  const l=u_1();
  const c=a(b);
  if (l!=="electron") {
    return children;
  }let i;

  if (e[0]===Symbol.for("react.memo_cache_sentinel")) {
    i={workerFactory:S,poolSize:y,totalASTLRUCacheSize:I};
    e[0]=i;
  } else {
    i=e[0];
  }

  const n=c?"word-alt":"none";let r;

  if (e[1]===Symbol.for("react.memo_cache_sentinel")) {
    r=["typescript","javascript","css","html","python"];
    e[1]=r;
  } else {
    r=e[1];
  }

  let t;

  if (e[2]!==n) {
    t={theme:D,lineDiffType:n,langs:r};
    e[2]=n;
    e[3]=t;
  } else {
    t=e[3];
  }

  let s;

  if (e[4]!==children||e[5]!==t) {
    s=<W poolOptions={i} highlighterOptions={t}>{children}</W>;
    e[4]=children;
    e[5]=t;
    e[6]=s;
  } else {
    s=e[6];
  }

  return s;
}
//# sourceMappingURL=shiki-highlight-provider-DeAcrcgE.js.map

async function w(){return (await c_1(() => import("./shiki-worker-factory-vite-ByDGcbwB.js"),[],import.meta.url)).shikiWorkerFactoryVite;}export{ShikiHighlightProvider as ShikiHighlightProvider};
//# sourceMappingURL=shiki-highlight-provider-DeAcrcgE.js.map
