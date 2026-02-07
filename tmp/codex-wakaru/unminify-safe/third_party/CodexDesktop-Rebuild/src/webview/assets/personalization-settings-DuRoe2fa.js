import{c,q,r,A,H,I,j as s_1,l,m,j,d,e,f,J,K,L,B,M,N,g,O,P,p,d as D1}from"./index-CgwAo6pj.js";

export function PersonalizationSettings() {
  const E_1=personality.c(69);
  const t=q();
  const r=r();
  const T=setPersonality();
  const V=data.useGateValue("codex_rollout_personality");
  const {personality,setPersonality}=I();
  const [G,setG]=s_1.useState(null);
  let C;

  if (E_1[0]===Symbol.for("react.memo_cache_sentinel")) {
    C={queryConfig:void 0};
    E_1[0]=C;
  } else {
    C=E_1[0];
  }

  const{data,error,isFetching,refetch}=l("codex-agents-md",C);let D_1;

  if (E_1[1]!==t||E_1[2]!==T||E_1[3]!==r) {
    D_1=(n,B)=>{
        T.setQueryData(P("codex-agents-md"),{path:n.path,contents:B.contents});
        setG(null);
        r.success(t.formatMessage({id:"settings.personalization.agents.save.success",defaultMessage:"Saved agents.md",description:"Toast shown when agents.md is saved"}));
      };

    E_1[1]=t;
    E_1[2]=T;
    E_1[3]=r;
    E_1[4]=D_1;
  } else {
    D_1=E_1[4];
  }

  let G_1;

  if (E_1[5]!==t||E_1[6]!==r) {
    G_1=()=>{r.danger(t.formatMessage({id:"settings.personalization.agents.save.error",defaultMessage:"Unable to save agents.md",description:"Toast shown when agents.md save fails"}))};
    E_1[5]=t;
    E_1[6]=r;
    E_1[7]=G_1;
  } else {
    G_1=E_1[7];
  }

  let z;

  if (E_1[8]!==D_1||E_1[9]!==G_1) {
    z={onSuccess:D_1,onError:G_1};
    E_1[8]=D_1;
    E_1[9]=G_1;
    E_1[10]=z;
  } else {
    z=E_1[10];
  }

  const N=m("codex-agents-md-save",z);
  const M=data?.contents??"";
  const P_1=G??M;
  const m=G!=null&&G!==M;
  const a=data!=null;
  const q=!a&&isFetching;
  const i=N.isPending;
  const O=error!=null&&data==null;
  let k;

  if (E_1[11]!==P_1||E_1[12]!==m||E_1[13]!==a||E_1[14]!==i||E_1[15]!==N) {
    k=()=>{
      if (a && m && !i) {
        N.mutate({contents:P_1});
      }
    };

    E_1[11]=P_1;
    E_1[12]=m;
    E_1[13]=a;
    E_1[14]=i;
    E_1[15]=N;
    E_1[16]=k;
  } else {
    k=E_1[16];
  }

  const Q=k;let w;

  if (E_1[17]!==refetch) {
    w=()=>{refetch()};
    E_1[17]=refetch;
    E_1[18]=w;
  } else {
    w=E_1[18];
  }

  const K=w;let E;

  if (E_1[19]!==t) {
    E=t.formatMessage({id:"settings.personalization.agents.placeholder",defaultMessage:"Add your custom instructions…",description:"Placeholder text for personal agents editor"});
    E_1[19]=t;
    E_1[20]=E;
  } else {
    E=E_1[20];
  }

  const J=E;let L;

  if (E_1[21]!==t) {
    L=t.formatMessage({id:"settings.personalization.agents.title",defaultMessage:"Custom instructions",description:"Heading for personal agents settings section"});
    E_1[21]=t;
    E_1[22]=L;
  } else {
    L=E_1[22];
  }

  const W=L;let F_1;

  if (E_1[23]!==t) {
    F_1=t.formatMessage({id:"composer.personalitySlashCommand.label.friendly",defaultMessage:"Friendly",description:"Label for the friendly personality"});
    E_1[23]=t;
    E_1[24]=F_1;
  } else {
    F_1=E_1[24];
  }

  let u;

  if (E_1[25]!==t) {
    u=t.formatMessage({id:"composer.personalitySlashCommand.description.friendly",defaultMessage:"Warm, collaborative, and helpful",description:"Description for the friendly personality option"});
    E_1[25]=t;
    E_1[26]=u;
  } else {
    u=E_1[26];
  }

  let x;

  if (E_1[27]!==F_1||E_1[28]!==u) {
    x={value:"friendly",label:F_1,description:u};
    E_1[27]=F_1;
    E_1[28]=u;
    E_1[29]=x;
  } else {
    x=E_1[29];
  }

  let h;

  if (E_1[30]!==t) {
    h=t.formatMessage({id:"composer.personalitySlashCommand.label.pragmatic",defaultMessage:"Pragmatic",description:"Label for the pragmatic personality"});
    E_1[30]=t;
    E_1[31]=h;
  } else {
    h=E_1[31];
  }

  let y;

  if (E_1[32]!==t) {
    y=t.formatMessage({id:"composer.personalitySlashCommand.description.pragmatic",defaultMessage:"Concise, task-focused, and direct",description:"Description for the pragmatic personality option"});
    E_1[32]=t;
    E_1[33]=y;
  } else {
    y=E_1[33];
  }

  let b;

  if (E_1[34]!==h||E_1[35]!==y) {
    b={value:"pragmatic",label:h,description:y};
    E_1[34]=h;
    E_1[35]=y;
    E_1[36]=b;
  } else {
    b=E_1[36];
  }

  let D;

  if (E_1[37]!==x||E_1[38]!==b) {
    D=[x,b];
    E_1[37]=x;
    E_1[38]=b;
    E_1[39]=D;
  } else {
    D=E_1[39];
  }

  const l=D;let _;

  if (E_1[40]!==personality||E_1[41]!==l) {
    _=l.find(n => n.value===personality)??l[0];
    E_1[40]=personality;
    E_1[41]=l;
    E_1[42]=_;
  } else {
    _=E_1[42];
  }

  const X=_;let P;

  if (E_1[43]===Symbol.for("react.memo_cache_sentinel")) {
    P=<P_1 slug="personalization" />;
    E_1[43]=P;
  } else {
    P=E_1[43];
  }

  let j;

  if (E_1[44]!==V||E_1[45]!==a||E_1[46]!==i||E_1[47]!==personality||E_1[48]!==l||E_1[49]!==X||E_1[50]!==setPersonality) {
    j=V?<D_1 className="gap-2">{<D_1.Content>{<E_1>{<F_1
            label={<M
              id="settings.personalization.personality.label"
              defaultMessage="Personality"
              description="Label for personality selection in personalization settings" />}
            description={<M
              id="settings.personalization.personality.description"
              defaultMessage="Choose a default tone for Codex responses"
              description="Description for personality selection in personalization settings" />}
            control={<J
              triggerButton={<B
                color="secondary"
                size="toolbar"
                className="min-w-[240px] justify-between"
                disabled={!a||i}>{<span className="flex items-center gap-1.5">{X.label}</span>}</B>}
              align="end">{<div className="w-[260px] max-w-xs space-y-1">{l.map(n => <K.Item
                  key={n.value}
                  onSelect={()=>{setPersonality(n.value)}}
                  RightIcon={personality===n.value?L:void 0}>{<div className="flex flex-col items-start gap-0.5"><span className="text-sm">{n.label}</span><span className="text-token-text-secondary text-xs">{n.description}</span></div>}</K.Item>)}</div>}</J>} />}</E_1>}</D_1.Content>}</D_1>:null;

    E_1[44]=V;
    E_1[45]=a;
    E_1[46]=i;
    E_1[47]=personality;
    E_1[48]=l;
    E_1[49]=X;
    E_1[50]=setPersonality;
    E_1[51]=j;
  } else {
    j=E_1[51];
  }

  let R;

  if (E_1[52]===Symbol.for("react.memo_cache_sentinel")) {
    R=<M
      id="settings.personalization.agents.title"
      defaultMessage="Custom instructions"
      description="Heading for personal agents settings section" />;

    E_1[52]=R;
  } else {
    R=E_1[52];
  }

  let F;

  if (E_1[53]===Symbol.for("react.memo_cache_sentinel")) {
    F=<D_1.Header
      title={R}
      subtitle={<M
        id="settings.personalization.agents.description"
        defaultMessage="Edit instructions that tailor Codex to you. {learnMore}"
        description="Description for personal agents settings"
        values={{learnMore:<a
          className="text-token-text-secondary hover:text-token-text-primary inline-flex items-center gap-1"
          href={N}
          target="_blank"
          rel="noreferrer"><M
            id="settings.personalization.agents.learnMore"
            defaultMessage="Learn more"
            description="Link label for agents.md docs" /><G_1 className="icon-xxs" /></a>}} />} />;

    E_1[53]=F;
  } else {
    F=E_1[53];
  }

  let v;

  if (E_1[54]!==M||E_1[55]!==W||E_1[56]!==P_1||E_1[57]!==K||E_1[58]!==Q||E_1[59]!==m||E_1[60]!==q||E_1[61]!==a||E_1[62]!==i||E_1[63]!==J||E_1[64]!==O) {
    v=<D_1 className="gap-2">{F}<D_1.Content>{O?<div className="flex items-center justify-between gap-3"><div className="text-token-text-secondary text-sm">{<M
              id="settings.personalization.agents.loadError"
              defaultMessage="Unable to load agents.md."
              description="Error message shown when agents.md fails to load" />}</div><B className="shrink-0" color="secondary" onClick={K} size="toolbar">{<M
              id="settings.personalization.agents.retry"
              defaultMessage="Retry"
              description="Button label to retry loading agents.md" />}</B></div>:<div className="flex flex-col gap-3">{q?<div className="text-token-text-secondary flex items-center gap-2 text-sm"><O className="icon-xs" /><M
              id="settings.personalization.agents.loading"
              defaultMessage="Loading agents.md…"
              description="Loading label for agents.md editor" /></div>:<textarea
            aria-label={W}
            id="personal-agents-editor"
            className="bg-token-input-background text-token-text-primary font-mono w-full rounded-md border border-token-border px-2.5 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-token-focus"
            disabled={!a||i}
            placeholder={J}
            rows={12}
            value={P_1}
            onChange={n=>{const B=n.target.value;setG(B===M?null:B)}} />}<div className="flex items-center justify-end gap-2">{<B color="primary" disabled={!m||!a} loading={i} onClick={Q} size="toolbar">{<M
                id="settings.personalization.agents.save"
                defaultMessage="Save"
                description="Save button label for personal agents editor" />}</B>}</div></div>}</D_1.Content></D_1>;

    E_1[54]=M;
    E_1[55]=W;
    E_1[56]=P_1;
    E_1[57]=K;
    E_1[58]=Q;
    E_1[59]=m;
    E_1[60]=q;
    E_1[61]=a;
    E_1[62]=i;
    E_1[63]=J;
    E_1[64]=O;
    E_1[65]=v;
  } else {
    v=E_1[65];
  }

  let I;

  if (E_1[66]!==j||E_1[67]!==v) {
    I=<D1 title={P}>{j}{v}</D1>;
    E_1[66]=j;
    E_1[67]=v;
    E_1[68]=I;
  } else {
    I=E_1[68];
  }

  return I;
}
//# sourceMappingURL=personalization-settings-DuRoe2fa.js.map

export{PersonalizationSettings as PersonalizationSettings};
//# sourceMappingURL=personalization-settings-DuRoe2fa.js.map
