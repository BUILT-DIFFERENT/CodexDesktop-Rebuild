import{c,q,r,j as s_1,t,v,j,d,e,B,G,p,M,f,T,S}from"./index-CgwAo6pj.js";

export function GitSettings() {
  const E_1=c.c(139);
  const t=q();
  const n=r();
  const [je,setJe]=s_1.useState(null);
  const {data,setData,isLoading}=t(G.GIT_BRANCH_PREFIX);
  const {data: data_1,setData: setData_1,isLoading: isLoading_1}=t(G.GIT_ALWAYS_FORCE_PUSH);
  const {data: data_2,setData: setData_2,isLoading: isLoading_2}=t(G.GIT_COMMIT_INSTRUCTIONS);
  const {data: data_3,setData: setData_3,isLoading: isLoading_3}=t(G.GIT_PR_INSTRUCTIONS);
  let g;

  if (E_1[0]!==setData) {
    g=i => setData(i);
    E_1[0]=setData;
    E_1[1]=g;
  } else {
    g=E_1[1];
  }

  let m;
  let P_1;

  if (E_1[2]!==t||E_1[3]!==n) {
    m=()=>{
      setJe(null);
      n.success(t.formatMessage({id:"settings.git.branchPrefix.save.success",defaultMessage:"Saved branch prefix",description:"Toast shown when git branch prefix is saved"}));
    };

    P_1=()=>{n.danger(t.formatMessage({id:"settings.git.branchPrefix.save.error",defaultMessage:"Failed to save branch prefix",description:"Toast shown when git branch prefix save fails"}))};
    E_1[2]=t;
    E_1[3]=n;
    E_1[4]=m;
    E_1[5]=P_1;
  } else {
    m=E_1[4];
    P_1=E_1[5];
  }

  let Q;

  if (E_1[6]!==g||E_1[7]!==m||E_1[8]!==P_1) {
    Q={mutationFn:g,onSuccess:m,onError:P_1};
    E_1[6]=g;
    E_1[7]=m;
    E_1[8]=P_1;
    E_1[9]=Q;
  } else {
    Q=E_1[9];
  }

  const Z=v(Q);let h;

  if (E_1[10]!==setData_1) {
    h=i => setData_1(i);
    E_1[10]=setData_1;
    E_1[11]=h;
  } else {
    h=E_1[11];
  }

  let b;
  let x;

  if (E_1[12]!==t||E_1[13]!==n) {
    b=(i,a)=>{
      if (a) {
        n.success(t.formatMessage({id:"settings.git.forcePush.save.enabled",defaultMessage:"Always force push enabled",description:"Toast shown when the always force push toggle is enabled"}));
      } else {
        n.success(t.formatMessage({id:"settings.git.forcePush.save.disabled",defaultMessage:"Always force push disabled",description:"Toast shown when the always force push toggle is disabled"}));
      }
    };

    x=()=>{n.danger(t.formatMessage({id:"settings.git.forcePush.save.error",defaultMessage:"Failed to save force push setting",description:"Toast shown when saving the always force push toggle fails"}))};
    E_1[12]=t;
    E_1[13]=n;
    E_1[14]=b;
    E_1[15]=x;
  } else {
    b=E_1[14];
    x=E_1[15];
  }

  let ee;

  if (E_1[16]!==h||E_1[17]!==b||E_1[18]!==x) {
    ee={mutationFn:h,onSuccess:b,onError:x};
    E_1[16]=h;
    E_1[17]=b;
    E_1[18]=x;
    E_1[19]=ee;
  } else {
    ee=E_1[19];
  }

  const te=v(ee);
  const [ke,setKe]=s_1.useState(null);
  const [De,setDe]=s_1.useState(null);
  let P;

  if (E_1[20]!==setData_2) {
    P=i => setData_2(i);
    E_1[20]=setData_2;
    E_1[21]=P;
  } else {
    P=E_1[21];
  }

  let M;
  let v;

  if (E_1[22]!==t||E_1[23]!==n) {
    v=()=>{
      setKe(null);
      n.success(t.formatMessage({id:"settings.git.commitInstructions.save.success",defaultMessage:"Saved commit instructions",description:"Toast shown when commit instructions are saved"}));
    };

    M=()=>{n.danger(t.formatMessage({id:"settings.git.commitInstructions.save.error",defaultMessage:"Failed to save commit instructions",description:"Toast shown when commit instructions save fails"}))};
    E_1[22]=t;
    E_1[23]=n;
    E_1[24]=M;
    E_1[25]=v;
  } else {
    M=E_1[24];
    v=E_1[25];
  }

  let se;

  if (E_1[26]!==M||E_1[27]!==P||E_1[28]!==v) {
    se={mutationFn:P,onSuccess:v,onError:M};
    E_1[26]=M;
    E_1[27]=P;
    E_1[28]=v;
    E_1[29]=se;
  } else {
    se=E_1[29];
  }

  const D_1=v(se);let I;

  if (E_1[30]!==setData_3) {
    I=i => setData_3(i);
    E_1[30]=setData_3;
    E_1[31]=I;
  } else {
    I=E_1[31];
  }

  let w;
  let S;

  if (E_1[32]!==t||E_1[33]!==n) {
    w=()=>{
      setDe(null);
      n.success(t.formatMessage({id:"settings.git.prInstructions.save.success",defaultMessage:"Saved pull request instructions",description:"Toast shown when pull request instructions are saved"}));
    };

    S=()=>{n.danger(t.formatMessage({id:"settings.git.prInstructions.save.error",defaultMessage:"Failed to save pull request instructions",description:"Toast shown when pull request instructions save fails"}))};
    E_1[32]=t;
    E_1[33]=n;
    E_1[34]=w;
    E_1[35]=S;
  } else {
    w=E_1[34];
    S=E_1[35];
  }

  let ie;

  if (E_1[36]!==I||E_1[37]!==w||E_1[38]!==S) {
    ie={mutationFn:I,onSuccess:w,onError:S};
    E_1[36]=I;
    E_1[37]=w;
    E_1[38]=S;
    E_1[39]=ie;
  } else {
    ie=E_1[39];
  }

  const F_1=v(ie);
  const Y=data;
  const j=je??Y;
  const Ae=je!=null&&je!==Y;
  const c=Z.isPending||isLoading;
  const y=isLoading_1||te.isPending;
  const $=data_2??"";
  const C=ke??$;
  const ne=ke!=null&&ke!==$;
  const o=isLoading_2||D_1.isPending;
  const J=data_3??"";
  const _=De??J;
  const oe=De!=null&&De!==J;
  const r=isLoading_3||F_1.isPending;
  let re;

  if (E_1[40]!==j||E_1[41]!==c||E_1[42]!==Ae||E_1[43]!==Z) {
    re=()=>{
      if (Ae && !c) {
        Z.mutate(j);
      }
    };

    E_1[40]=j;
    E_1[41]=c;
    E_1[42]=Ae;
    E_1[43]=Z;
    E_1[44]=re;
  } else {
    re=E_1[44];
  }

  const Re=re;let ae;

  if (E_1[45]!==te||E_1[46]!==y) {
    ae=i=>{
      if (!y) {
        te.mutate(i);
      }
    };

    E_1[45]=te;
    E_1[46]=y;
    E_1[47]=ae;
  } else {
    ae=E_1[47];
  }

  const Le=ae;let le;

  if (E_1[48]!==C||E_1[49]!==o||E_1[50]!==ne||E_1[51]!==D_1) {
    le=()=>{
      if (!o && ne) {
        D_1.mutate(C);
      }
    };

    E_1[48]=C;
    E_1[49]=o;
    E_1[50]=ne;
    E_1[51]=D_1;
    E_1[52]=le;
  } else {
    le=E_1[52];
  }

  const Be=le;let ce;

  if (E_1[53]!==r||E_1[54]!==oe||E_1[55]!==_||E_1[56]!==F_1) {
    ce=()=>{
      if (!r && oe) {
        F_1.mutate(_);
      }
    };

    E_1[53]=r;
    E_1[54]=oe;
    E_1[55]=_;
    E_1[56]=F_1;
    E_1[57]=ce;
  } else {
    ce=E_1[57];
  }

  const Fe=ce;let ue;

  if (E_1[58]===Symbol.for("react.memo_cache_sentinel")) {
    ue=<P_1 slug="git-settings" />;
    E_1[58]=ue;
  } else {
    ue=E_1[58];
  }

  let de;
  let fe;

  if (E_1[59]===Symbol.for("react.memo_cache_sentinel")) {
    de=<M
      id="settings.git.branchPrefix.label"
      defaultMessage="Branch prefix"
      description="Label for git branch prefix setting" />;

    fe=<M
      id="settings.git.branchPrefix.description"
      defaultMessage="Prefix used when creating new branches in Codex"
      description="Description for git branch prefix setting" />;

    E_1[59]=de;
    E_1[60]=fe;
  } else {
    de=E_1[59];
    fe=E_1[60];
  }

  let q;

  if (E_1[61]!==c||E_1[62]!==Y) {
    q=i=>{if (c) {
        return;
      }const a=i.target.value;setJe(a===Y?null:a)};

    E_1[61]=c;
    E_1[62]=Y;
    E_1[63]=q;
  } else {
    q=E_1[63];
  }

  let T;

  if (E_1[64]!==t) {
    T=t.formatMessage({id:"settings.git.branchPrefix.placeholder",defaultMessage:"codex/",description:"Placeholder for git branch prefix input"});
    E_1[64]=t;
    E_1[65]=T;
  } else {
    T=E_1[65];
  }

  let k;

  if (E_1[66]!==t) {
    k=t.formatMessage({id:"settings.git.branchPrefix.ariaLabel",defaultMessage:"Branch prefix",description:"Aria label for git branch prefix input"});
    E_1[66]=t;
    E_1[67]=k;
  } else {
    k=E_1[67];
  }

  let D;

  if (E_1[68]!==j||E_1[69]!==Re||E_1[70]!==c||E_1[71]!==q||E_1[72]!==T||E_1[73]!==k) {
    D=<F_1
      label={de}
      description={fe}
      control={<input
        className="bg-token-input-background text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-56 rounded-md border border-token-input-border px-2.5 py-1.5 text-base outline-none focus:border-token-focus-border"
        value={j}
        onChange={q}
        onBlur={Re}
        placeholder={T}
        aria-label={k}
        disabled={c} />} />;

    E_1[68]=j;
    E_1[69]=Re;
    E_1[70]=c;
    E_1[71]=q;
    E_1[72]=T;
    E_1[73]=k;
    E_1[74]=D;
  } else {
    D=E_1[74];
  }

  let ge;
  let me;

  if (E_1[75]===Symbol.for("react.memo_cache_sentinel")) {
    ge=<M
      id="settings.git.forcePush.label"
      defaultMessage="Always force push"
      description="Label for always force push toggle" />;

    me=<M
      id="settings.git.forcePush.description"
      defaultMessage="Use --force-with-lease when pushing from Codex"
      description="Description for always force push toggle" />;

    E_1[75]=ge;
    E_1[76]=me;
  } else {
    ge=E_1[75];
    me=E_1[76];
  }

  let A;

  if (E_1[77]!==Le) {
    A=i=>{Le(i)};
    E_1[77]=Le;
    E_1[78]=A;
  } else {
    A=E_1[78];
  }

  let R;

  if (E_1[79]!==t) {
    R=t.formatMessage({id:"settings.git.forcePush.ariaLabel",defaultMessage:"Always force push",description:"Aria label for always force push toggle"});
    E_1[79]=t;
    E_1[80]=R;
  } else {
    R=E_1[80];
  }

  let L;

  if (E_1[81]!==data_1||E_1[82]!==y||E_1[83]!==A||E_1[84]!==R) {
    L=<F_1
      label={ge}
      description={me}
      control={<T checked={data_1} disabled={y} onChange={A} ariaLabel={R} />} />;

    E_1[81]=data_1;
    E_1[82]=y;
    E_1[83]=A;
    E_1[84]=R;
    E_1[85]=L;
  } else {
    L=E_1[85];
  }

  let B;

  if (E_1[86]!==D||E_1[87]!==L) {
    B=<D_1>{<D_1.Content>{<E_1>{D}{L}</E_1>}</D_1.Content>}</D_1>;
    E_1[86]=D;
    E_1[87]=L;
    E_1[88]=B;
  } else {
    B=E_1[88];
  }

  let pe;
  let he;

  if (E_1[89]===Symbol.for("react.memo_cache_sentinel")) {
    pe=<M
      id="settings.git.commitInstructions.label"
      defaultMessage="Commit instructions"
      description="Label for commit instructions" />;

    he=<M
      id="settings.git.commitInstructions.description"
      defaultMessage="Added to commit message generation prompts"
      description="Description for commit instructions" />;

    E_1[89]=pe;
    E_1[90]=he;
  } else {
    pe=E_1[89];
    he=E_1[90];
  }

  const Ee=!ne||o;let be;

  if (E_1[91]===Symbol.for("react.memo_cache_sentinel")) {
    be=<M
      id="settings.git.commitInstructions.save"
      defaultMessage="Save"
      description="Button label to save commit instructions" />;

    E_1[91]=be;
  } else {
    be=E_1[91];
  }

  let F;

  if (E_1[92]!==Be||E_1[93]!==D_1.isPending||E_1[94]!==Ee) {
    F=<D_1.Header
      title={pe}
      subtitle={he}
      actions={<B
        color="secondary"
        disabled={Ee}
        loading={D_1.isPending}
        onClick={Be}
        size="toolbar">{be}</B>} />;

    E_1[92]=Be;
    E_1[93]=D_1.isPending;
    E_1[94]=Ee;
    E_1[95]=F;
  } else {
    F=E_1[95];
  }

  let E;

  if (E_1[96]!==o||E_1[97]!==$) {
    E=i=>{if (o) {
        return;
      }const a=i.target.value;setKe(a===$?null:a)};

    E_1[96]=o;
    E_1[97]=$;
    E_1[98]=E;
  } else {
    E=E_1[98];
  }

  let G;

  if (E_1[99]!==t) {
    G=t.formatMessage({id:"settings.git.commitInstructions.placeholder",defaultMessage:"Add commit message guidance…",description:"Placeholder for commit instructions textarea"});
    E_1[99]=t;
    E_1[100]=G;
  } else {
    G=E_1[100];
  }

  let N;

  if (E_1[101]!==t) {
    N=t.formatMessage({id:"settings.git.commitInstructions.ariaLabel",defaultMessage:"Commit instructions",description:"Aria label for commit instructions textarea"});
    E_1[101]=t;
    E_1[102]=N;
  } else {
    N=E_1[102];
  }

  let V;

  if (E_1[103]!==C||E_1[104]!==o||E_1[105]!==E||E_1[106]!==G||E_1[107]!==N) {
    V=<D_1.Content>{<textarea
        className="mt-1.5 bg-token-input-background text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full rounded-md border border-token-input-border px-2.5 py-2 text-sm outline-none focus:border-token-focus-border"
        value={C}
        onChange={E}
        placeholder={G}
        aria-label={N}
        disabled={o}
        rows={6} />}</D_1.Content>;

    E_1[103]=C;
    E_1[104]=o;
    E_1[105]=E;
    E_1[106]=G;
    E_1[107]=N;
    E_1[108]=V;
  } else {
    V=E_1[108];
  }

  let H;

  if (E_1[109]!==F||E_1[110]!==V) {
    H=<D_1>{F}{V}</D_1>;
    E_1[109]=F;
    E_1[110]=V;
    E_1[111]=H;
  } else {
    H=E_1[111];
  }

  let xe;
  let Pe;

  if (E_1[112]===Symbol.for("react.memo_cache_sentinel")) {
    xe=<M
      id="settings.git.prInstructions.label"
      defaultMessage="Pull request instructions"
      description="Label for pull request instructions" />;

    Pe=<M
      id="settings.git.prInstructions.description"
      defaultMessage="Appended to pull request bodies created by Codex"
      description="Description for pull request instructions" />;

    E_1[112]=xe;
    E_1[113]=Pe;
  } else {
    xe=E_1[112];
    Pe=E_1[113];
  }

  const Ge=!oe||r;let Me;

  if (E_1[114]===Symbol.for("react.memo_cache_sentinel")) {
    Me=<M
      id="settings.git.prInstructions.save"
      defaultMessage="Save"
      description="Button label to save pull request instructions" />;

    E_1[114]=Me;
  } else {
    Me=E_1[114];
  }

  let O;

  if (E_1[115]!==Fe||E_1[116]!==F_1.isPending||E_1[117]!==Ge) {
    O=<D_1.Header
      title={xe}
      subtitle={Pe}
      actions={<B
        color="secondary"
        disabled={Ge}
        loading={F_1.isPending}
        onClick={Fe}
        size="toolbar">{Me}</B>} />;

    E_1[115]=Fe;
    E_1[116]=F_1.isPending;
    E_1[117]=Ge;
    E_1[118]=O;
  } else {
    O=E_1[118];
  }

  let U;

  if (E_1[119]!==r||E_1[120]!==J) {
    U=i=>{if (r) {
        return;
      }const a=i.target.value;setDe(a===J?null:a)};

    E_1[119]=r;
    E_1[120]=J;
    E_1[121]=U;
  } else {
    U=E_1[121];
  }

  let z;

  if (E_1[122]!==t) {
    z=t.formatMessage({id:"settings.git.prInstructions.placeholder",defaultMessage:"Add pull request guidance…",description:"Placeholder for pull request instructions textarea"});
    E_1[122]=t;
    E_1[123]=z;
  } else {
    z=E_1[123];
  }

  let K;

  if (E_1[124]!==t) {
    K=t.formatMessage({id:"settings.git.prInstructions.ariaLabel",defaultMessage:"Pull request instructions",description:"Aria label for pull request instructions textarea"});
    E_1[124]=t;
    E_1[125]=K;
  } else {
    K=E_1[125];
  }

  let W;

  if (E_1[126]!==r||E_1[127]!==_||E_1[128]!==U||E_1[129]!==z||E_1[130]!==K) {
    W=<D_1.Content>{<textarea
        className="mt-1.5 bg-token-input-background text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full rounded-md border border-token-input-border px-2.5 py-2 text-sm outline-none focus:border-token-focus-border"
        value={_}
        onChange={U}
        placeholder={z}
        aria-label={K}
        disabled={r}
        rows={6} />}</D_1.Content>;

    E_1[126]=r;
    E_1[127]=_;
    E_1[128]=U;
    E_1[129]=z;
    E_1[130]=K;
    E_1[131]=W;
  } else {
    W=E_1[131];
  }

  let X;

  if (E_1[132]!==O||E_1[133]!==W) {
    X=<D_1>{O}{W}</D_1>;
    E_1[132]=O;
    E_1[133]=W;
    E_1[134]=X;
  } else {
    X=E_1[134];
  }

  let ve;

  if (E_1[135]!==B||E_1[136]!==H||E_1[137]!==X) {
    ve=<S title={ue}>{B}{H}{X}</S>;
    E_1[135]=B;
    E_1[136]=H;
    E_1[137]=X;
    E_1[138]=ve;
  } else {
    ve=E_1[138];
  }

  return ve;
}
//# sourceMappingURL=git-settings-BPOHFR8h.js.map

export{GitSettings as GitSettings};
//# sourceMappingURL=git-settings-BPOHFR8h.js.map
