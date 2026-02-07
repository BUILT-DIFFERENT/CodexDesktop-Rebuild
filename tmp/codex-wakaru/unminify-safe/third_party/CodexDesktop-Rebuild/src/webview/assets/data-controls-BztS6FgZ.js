import{c,w,x,j,S,d,n,M as y_1,u,Q,P,F as z_1,e,F_1,M,A,r,q,v,E,F,w as W1}from"./index-CgwAo6pj.js";

export function DataControlsSettings() {
  const i=c.c(10);
  const e=w();
  let t;

  if (i[0]===Symbol.for("react.memo_cache_sentinel")) {
    t=["archived-threads"];
    i[0]=t;
  } else {
    t=i[0];
  }

  let u;

  if (i[1]!==e) {
    u={queryKey:t,queryFn:() => e.listArchivedThreads(),staleTime:Q.FIVE_SECONDS};
    i[1]=e;
    i[2]=u;
  } else {
    u=i[2];
  }

  const{data,IsLoading,isError}=x(u);let c;

  if (i[3]!==data) {
    c=data===void 0?[]:data;
    i[3]=data;
    i[4]=c;
  } else {
    c=i[4];
  }

  const o=c;let l;

  if (i[5]===Symbol.for("react.memo_cache_sentinel")) {
    l=<P slug="data-controls" />;
    i[5]=l;
  } else {
    l=i[5];
  }

  let n;

  if (i[6]!==o||i[7]!==isError||i[8]!==IsLoading) {
    n=<S title={l}>{<IsLoading className="gap-2">{<IsLoading.Content>{<Re archivedThreads={o} IsLoading={IsLoading} isError={isError} />}</IsLoading.Content>}</IsLoading>}</S>;
    i[6]=o;
    i[7]=isError;
    i[8]=IsLoading;
    i[9]=n;
  } else {
    n=i[9];
  }

  return n;
}
//# sourceMappingURL=data-controls-BztS6FgZ.js.map

function Re(i){
  const E_1=c.c(14);
  const {archivedThreads,isLoading,isError}=i;
  const d=n();
  const r=y_1();
  const c=isLoading();
  let o;

  if (E_1[0]!==d||E_1[1]!==r||E_1[2]!==c) {
    o=s=>{if(c==="electron"){d(`/local/${z_1(s)}`);return}r(s)};
    E_1[0]=d;
    E_1[1]=r;
    E_1[2]=c;
    E_1[3]=o;
  } else {
    o=E_1[3];
  }

  const l=o;if(isLoading){
    let s;

    if (E_1[4]===Symbol.for("react.memo_cache_sentinel")) {
      s=<div className="px-1.5 py-1">{<E_1>{<F_1
            label={<M
              id="settings.dataControls.archivedChats.loading"
              defaultMessage="Loading archived chats…"
              description="Loading state label for archived chats list" />}
            control={null} />}</E_1>}</div>;

      E_1[4]=s;
    } else {
      s=E_1[4];
    }

    return s;
  }if(isError){
    let s;

    if (E_1[5]===Symbol.for("react.memo_cache_sentinel")) {
      s=<div className="px-1.5 py-1">{<E_1>{<F_1
            label={<M
              id="settings.dataControls.archivedChats.error"
              defaultMessage="Could not load archived chats."
              description="Error state label for archived chats list" />}
            control={null} />}</E_1>}</div>;

      E_1[5]=s;
    } else {
      s=E_1[5];
    }

    return s;
  }if(archivedThreads.length===0){
    let s;

    if (E_1[6]===Symbol.for("react.memo_cache_sentinel")) {
      s=<div className="px-1.5 py-1">{<E_1>{<F_1
            label={<M
              id="settings.dataControls.archivedChats.empty"
              defaultMessage="No archived chats."
              description="Empty state label for archived chats list" />}
            control={null} />}</E_1>}</div>;

      E_1[6]=s;
    } else {
      s=E_1[6];
    }

    return s;
  }let n;if (E_1[7]!==archivedThreads||E_1[8]!==l) {
    let s;

    if (E_1[10]!==l) {
      s=m=>{const f=z_1(m.id);return (
        <Ne key={m.id} archivedThread={m} conversationId={f} onViewConversation={l}>
          {m.id}
        </Ne>
      );};

      E_1[10]=l;
      E_1[11]=s;
    } else {
      s=E_1[11];
    }

    n=archivedThreads.map(s);
    E_1[7]=archivedThreads;
    E_1[8]=l;
    E_1[9]=n;
  } else {
      n=E_1[9];
    }let h;

  if (E_1[12]!==n) {
    h=<div className="px-1.5 py-1">{<E_1 className="max-h-[min(80vh)] overflow-y-auto">{n}</E_1>}</div>;
    E_1[12]=n;
    E_1[13]=h;
  } else {
    h=E_1[13];
  }

  return h;
}function Ne(i){
  const e=c.c(62);
  const {archivedThread,conversationId,onViewConversation}=i;
  const d=w();
  const r=A();
  const c=r();
  const o=q();
  let l;

  if (e[0]!==archivedThread.id) {
    l=["unarchive-thread",archivedThread.id];
    e[0]=archivedThread.id;
    e[1]=l;
  } else {
    l=e[1];
  }

  let n;

  if (e[2]!==d||e[3]!==conversationId) {
    n=async () => d.unarchiveConversation(conversationId);
    e[2]=d;
    e[3]=conversationId;
    e[4]=n;
  } else {
    n=e[4];
  }

  let h;

  if (e[5]!==archivedThread.id||e[6]!==r) {
    h=async()=>{
        await r.cancelQueries({queryKey:["archived-threads"]});const x=r.getQueryData(["archived-threads"])??[];

        r.setQueryData(["archived-threads"],x.filter(w => w.id!==archivedThread.id));

        return {previousThreads:x};
      };

    e[5]=archivedThread.id;
    e[6]=r;
    e[7]=h;
  } else {
    h=e[7];
  }

  let s;

  if (e[8]!==o||e[9]!==r||e[10]!==c) {
    s=(x,w,A)=>{
      if (A?.previousThreads) {
        r.setQueryData(["archived-threads"],A.previousThreads);
      }

      c.danger(o.formatMessage({id:"settings.dataControls.archivedChats.unarchiveError",defaultMessage:"Failed to unarchive chat",description:"Error message when unarchiving a chat"}));
    };

    e[8]=o;
    e[9]=r;
    e[10]=c;
    e[11]=s;
  } else {
    s=e[11];
  }

  let m;

  if (e[12]!==archivedThread.id||e[13]!==onViewConversation||e[14]!==c) {
    m=()=>{const x=w => <button
      className="text-token-link hover:underline underline-offset-2"
      type="button"
      onClick={()=>{onViewConversation(archivedThread.id)}}>{w}</button>;c.info(<M
      id="settings.dataControls.archivedChats.unarchiveSuccess"
      defaultMessage="Unarchived thread. <viewNowLink>View now</viewNowLink>"
      description="Success toast after unarchiving a chat"
      values={{viewNowLink:x}} />,{id:`unarchive-thread-${archivedThread.id}`})};

    e[12]=archivedThread.id;
    e[13]=onViewConversation;
    e[14]=c;
    e[15]=m;
  } else {
    m=e[15];
  }

  let f;

  if (e[16]!==r) {
    f=()=>{r.invalidateQueries({queryKey:["archived-threads"]})};
    e[16]=r;
    e[17]=f;
  } else {
    f=e[17];
  }

  let k;

  if (e[18]!==l||e[19]!==n||e[20]!==h||e[21]!==s||e[22]!==m||e[23]!==f) {
    k={mutationKey:l,mutationFn:n,onMutate:h,onError:s,onSuccess:m,onSettled:f};
    e[18]=l;
    e[19]=n;
    e[20]=h;
    e[21]=s;
    e[22]=m;
    e[23]=f;
    e[24]=k;
  } else {
    k=e[24];
  }

  const p=onViewConversation(k);let D;

  if (e[25]!==archivedThread.preview) {
    D=E(archivedThread.preview).trim();
    e[25]=archivedThread.preview;
    e[26]=D;
  } else {
    D=e[26];
  }

  const L=D;
  let j;
  let g;
  let C;
  let F;
  if (e[27]!==archivedThread.createdAt||e[28]!==archivedThread.cwd||e[29]!==archivedThread.path||e[30]!==archivedThread.updatedAt||e[31]!==o) {
    const x=new Date(Number(archivedThread.updatedAt)*1000/* 1e3 */);
    const w=new Date(Number(archivedThread.createdAt)*1000/* 1e3 */);
    const A=Number.isFinite(x.getTime())?x:Number.isFinite(w.getTime())?w:null;
    let R;

    if (e[36]!==archivedThread.cwd||e[37]!==archivedThread.path) {
      R=F(archivedThread.cwd)??F(archivedThread.path);
      e[36]=archivedThread.cwd;
      e[37]=archivedThread.path;
      e[38]=R;
    } else {
      R=e[38];
    }

    C=R;
    g=A!=null;
    j=g?o.formatDate(A,{year:"numeric",month:"short",day:"numeric"}):"";
    F=g?o.formatTime(A,{hour:"numeric",minute:"2-digit"}):"";
    e[27]=archivedThread.createdAt;
    e[28]=archivedThread.cwd;
    e[29]=archivedThread.path;
    e[30]=archivedThread.updatedAt;
    e[31]=o;
    e[32]=j;
    e[33]=g;
    e[34]=C;
    e[35]=F;
  } else {
    j=e[32];
    g=e[33];
    C=e[34];
    F=e[35];
  }const Q=F;let b;

  if (e[39]!==L) {
    b=L.length>0?L:<M
      id="settings.dataControls.archivedChats.untitled"
      defaultMessage="Untitled chat"
      description="Fallback title for an archived chat" />;

    e[39]=L;
    e[40]=b;
  } else {
    b=e[40];
  }

  let S;

  if (e[41]!==b) {
    S=<div className="truncate text-base font-medium">{b}</div>;
    e[41]=b;
    e[42]=S;
  } else {
    S=e[42];
  }

  let N;

  if (e[43]!==j||e[44]!==g||e[45]!==C||e[46]!==Q) {
    N=g?C?<M
      id="settings.dataControls.archivedChats.dateTimeWithRepo"
      defaultMessage="{date}, {time} • {repo}"
      description="Date, time, and repo name for an archived chat"
      values={{date:j,time:Q,repo:C}} />:<M
      id="settings.dataControls.archivedChats.dateTime"
      defaultMessage="{date}, {time}"
      description="Date and time for an archived chat"
      values={{date:j,time:Q}} />:null;

    e[43]=j;
    e[44]=g;
    e[45]=C;
    e[46]=Q;
    e[47]=N;
  } else {
    N=e[47];
  }

  let T;

  if (e[48]!==N) {
    T=<div className="mt-1 flex min-w-0 flex-col gap-0.5 text-sm">{<div className="text-token-text-secondary truncate">{N}</div>}</div>;
    e[48]=N;
    e[49]=T;
  } else {
    T=e[49];
  }

  let M;

  if (e[50]!==S||e[51]!==T) {
    M=<div className="text-token-text-primary min-w-0 flex-1 text-left">{S}{T}</div>;
    e[50]=S;
    e[51]=T;
    e[52]=M;
  } else {
    M=e[52];
  }

  let _;

  if (e[53]!==p) {
    _=()=>{
      if (!p.isPending) {
        p.mutate();
      }
    };

    e[53]=p;
    e[54]=_;
  } else {
    _=e[54];
  }

  let q;

  if (e[55]===Symbol.for("react.memo_cache_sentinel")) {
    q=<M
      id="settings.dataControls.archivedChats.unarchive"
      defaultMessage="Unarchive"
      description="Button label to unarchive a chat" />;

    e[55]=q;
  } else {
    q=e[55];
  }

  let E;

  if (e[56]!==_||e[57]!==p.isPending) {
    E=<W1
      className="shrink-0"
      color="secondary"
      size="toolbar"
      disabled={p.isPending}
      loading={p.isPending}
      onClick={_}>{q}</W1>;

    e[56]=_;
    e[57]=p.isPending;
    e[58]=E;
  } else {
    E=e[58];
  }

  let P;

  if (e[59]!==M||e[60]!==E) {
    P=<div
      className="hover:bg-token-list-hover-background flex w-full items-center justify-between gap-3 px-4 py-3">{M}{E}</div>;

    e[59]=M;
    e[60]=E;
    e[61]=P;
  } else {
    P=e[61];
  }

  return P;
}export{DataControlsSettings as DataControlsSettings};
//# sourceMappingURL=data-controls-BztS6FgZ.js.map
