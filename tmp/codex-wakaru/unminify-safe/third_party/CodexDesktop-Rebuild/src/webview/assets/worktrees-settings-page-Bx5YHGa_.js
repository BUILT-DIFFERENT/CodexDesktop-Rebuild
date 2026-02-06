import{c,w as q_1,S as R_1,X_1 as U_1,j,M as D1,M,e,S,j_1 as O_1,Y_1 as B_1,Z_1 as V_1,R_1_1 as X_1,a0 as Y_1,p,y,w,r,j as j_1,Z as Z_1,R_1 as R_1_1,a0}from"./index-CgwAo6pj.js";

export function WorktreesSettingsPage() {
  const E=c.c(32);
  const t=q_1();
  const {data,isLoading,error,refetch}=R_1();
  const {data: data_1,isLoading: IsLoading1}=U_1();
  let h;
  let f;
  if (E[0]!==data_1||E[1]!==t||E[2]!==IsLoading1||E[3]!==isLoading||E[4]!==refetch||E[5]!==data?.worktrees||E[6]!==error) {
    f=Symbol.for("react.early_return_sentinel");E:{
    const j=data?.worktrees??[];let u;

    if (E[9]!==data_1) {
      u=data_1??[];
      E[9]=data_1;
      E[10]=u;
    } else {
      u=E[10];
    }

    const g=u;
    const y=K(j);
    let k;

    if (E[11]===Symbol.for("react.memo_cache_sentinel")) {
      k=<D1.Header
        title={<M
          id="settings.worktrees.empty.title"
          defaultMessage="No worktrees yet"
          description="Empty state title for worktrees settings" />} />;

      E[11]=k;
    } else {
      k=E[11];
    }

    let w;

    if (E[12]===Symbol.for("react.memo_cache_sentinel")) {
      w=<D1>{k}<D1.Content>{<E>{<div className="p-3 text-sm text-token-text-secondary">{<M
                id="settings.worktrees.empty.body"
                defaultMessage="Worktrees created by Codex will appear here."
                description="Empty state body for worktrees settings" />}</div>}</E>}</D1.Content></D1>;

      E[12]=w;
    } else {
      w=E[12];
    }

    const v=w;if(isLoading){
      let i;

      if (E[13]===Symbol.for("react.memo_cache_sentinel")) {
        i=<P slug="worktrees" />;
        E[13]=i;
      } else {
        i=E[13];
      }

      let c;

      if (E[14]===Symbol.for("react.memo_cache_sentinel")) {
        c=<D1.Header
          title={<M
            id="settings.worktrees.loading.title"
            defaultMessage="Loading worktrees"
            description="Loading state title for worktrees settings" />} />;

        E[14]=c;
      } else {
        c=E[14];
      }

      let l;

      if (E[15]===Symbol.for("react.memo_cache_sentinel")) {
        l=<IsLoading1 title={i}>{<D1>{c}<D1.Content>{<E>{<div className="flex items-center gap-2 p-3 text-sm text-token-text-secondary"><O_1 className="icon-xxs" /><M
                    id="settings.worktrees.loading.body"
                    defaultMessage="Fetching worktree details."
                    description="Loading state body for worktrees settings" /></div>}</E>}</D1.Content></D1>}</IsLoading1>;

        E[15]=l;
      } else {
        l=E[15];
      }

      f=l;
      break E
    }if(error){
      let i;

      if (E[16]===Symbol.for("react.memo_cache_sentinel")) {
        i=<P slug="worktrees" />;
        E[16]=i;
      } else {
        i=E[16];
      }

      let c;

      if (E[17]===Symbol.for("react.memo_cache_sentinel")) {
        c=<M
          id="settings.worktrees.error.title"
          defaultMessage="Unable to load worktrees"
          description="Error state title for worktrees settings" />;

        E[17]=c;
      } else {
        c=E[17];
      }

      let l;

      if (E[18]!==refetch) {
        l=()=>{refetch()};
        E[18]=refetch;
        E[19]=l;
      } else {
        l=E[19];
      }

      let b;

      if (E[20]===Symbol.for("react.memo_cache_sentinel")) {
        b=<M
          id="settings.worktrees.error.retry"
          defaultMessage="Retry"
          description="Retry button for worktrees settings" />;

        E[20]=b;
      } else {
        b=E[20];
      }

      let C;

      if (E[21]!==l) {
        C=<D1.Header
          title={c}
          actions={<B_1 className="shrink-0" color="secondary" onClick={l} size="toolbar">{b}</B_1>} />;

        E[21]=l;
        E[22]=C;
      } else {
        C=E[22];
      }

      let M;

      if (E[23]!==t||E[24]!==error.message) {
        M=error.message||t.formatMessage({id:"settings.worktrees.error.body",defaultMessage:"Something went wrong while loading worktrees.",description:"Error body for worktrees settings"});
        E[23]=t;
        E[24]=error.message;
        E[25]=M;
      } else {
        M=E[25];
      }

      let N;

      if (E[26]!==M) {
        N=<D1.Content>{<E>{<div className="p-3 text-sm text-token-text-secondary">{M}</div>}</E>}</D1.Content>;
        E[26]=M;
        E[27]=N;
      } else {
        N=E[27];
      }

      let _;

      if (E[28]!==N||E[29]!==C) {
        _=<IsLoading1 title={i}>{<D1>{C}{N}</D1>}</IsLoading1>;
        E[28]=N;
        E[29]=C;
        E[30]=_;
      } else {
        _=E[30];
      }

      f=_;
      break E
    }let P;

    if (E[31]===Symbol.for("react.memo_cache_sentinel")) {
      P=<P slug="worktrees" />;
      E[31]=P;
    } else {
      P=E[31];
    }

    h=<IsLoading1 title={P}>{y.length===0?v:y.map(i => <Z
        key={i.key}
        conversations={g}
        isConversationsLoading={IsLoading1}
        onWorktreeDeleted={()=>{refetch()}}
        repoRoot={i.repoRoot}
        worktrees={i.worktrees}>
        {i.key}
      </Z>)}</IsLoading1>;
  }
    E[0]=data_1;
    E[1]=t;
    E[2]=IsLoading1;
    E[3]=isLoading;
    E[4]=refetch;
    E[5]=data?.worktrees;
    E[6]=error;
    E[7]=h;
    E[8]=f;
  } else {
    h=E[7];
    f=E[8];
  }return f!==Symbol.for("react.early_return_sentinel")?f:h
}
//# sourceMappingURL=worktrees-settings-page-Bx5YHGa_.js.map

function Z(E){
  const t=c.c(23);
  const {repoRoot,worktrees,conversations,isConversationsLoading,onWorktreeDeleted}=E;
  const S=repoRoot;
  const {data,isLoading}=X_1(S);
  const j=data?.root??repoRoot??worktrees[0]?.dir??null;
  let u;

  if (t[0]!==j) {
    u=j?<span className="truncate font-mono text-sm">{j}</span>:<M
      id="settings.worktrees.repository.unknown"
      defaultMessage="Unknown repository"
      description="Fallback label when worktree repository cannot be resolved" />;

    t[0]=j;
    t[1]=u;
  } else {
    u=t[1];
  }

  const g=u;
  const y=isLoading&&j==null;
  let k;

  if (t[2]!==g) {
    k=<div className="text-token-text-primary min-w-0 truncate text-sm">{g}</div>;
    t[2]=g;
    t[3]=k;
  } else {
    k=t[3];
  }

  let w;

  if (t[4]!==y) {
    w=y?<div className="text-token-text-secondary text-xs">{<M
        id="settings.worktrees.repository.loading"
        defaultMessage="Loading repository metadata…"
        description="Subtitle while repository metadata is loading" />}</div>:null;

    t[4]=y;
    t[5]=w;
  } else {
    w=t[5];
  }

  let v;

  if (t[6]!==k||t[7]!==w) {
    v=<D1.Header title={<div className="flex min-w-0 flex-col">{k}{w}</div>} />;
    t[6]=k;
    t[7]=w;
    t[8]=v;
  } else {
    v=t[8];
  }

  let p;if (t[9]!==conversations||t[10]!==isConversationsLoading||t[11]!==onWorktreeDeleted||t[12]!==worktrees) {
    let l;

    if (t[14]!==conversations||t[15]!==isConversationsLoading||t[16]!==onWorktreeDeleted) {
      l=b => <J
        key={b.dir}
        conversations={T(b.dir,conversations)}
        isConversationsLoading={isConversationsLoading}
        onWorktreeDeleted={onWorktreeDeleted}
        worktree={b}>
        {b.dir}
      </J>;

      t[14]=conversations;
      t[15]=isConversationsLoading;
      t[16]=onWorktreeDeleted;
      t[17]=l;
    } else {
      l=t[17];
    }

    p=Q(worktrees,conversations).map(l);
    t[9]=conversations;
    t[10]=isConversationsLoading;
    t[11]=onWorktreeDeleted;
    t[12]=worktrees;
    t[13]=p;
  } else {
      p=t[13];
    }let i;

  if (t[18]!==p) {
    i=<D1.Content>{<E>{p}</E>}</D1.Content>;
    t[18]=p;
    t[19]=i;
  } else {
    i=t[19];
  }

  let c;

  if (t[20]!==v||t[21]!==i) {
    c=<D1>{v}{i}</D1>;
    t[20]=v;
    t[21]=i;
    t[22]=c;
  } else {
    c=t[22];
  }

  return c;
}function J({worktree,conversations,isConversationsLoading,onWorktreeDeleted}){
  const r=y();
  const n=w();
  const x=r();
  const S=q_1();
  const [h,setH]=j_1.useState(false);
  const j=Z_1();

  const u=async()=>{if(!h){setH(true);try{
    if (conversations.length>0) {
      (await Promise.all(conversations.map(g => n.archiveConversation(g.id))));
    }

    await a0("git").request({method:"delete-worktree",params:{worktree:worktree.dir,force:true,reason:"settings-delete-targeted",hostConfig:j}});
    onWorktreeDeleted();
  }catch{x.danger(S.formatMessage({id:"settings.worktrees.delete.error",defaultMessage:"Failed to delete worktree",description:"Error message when deleting a worktree from settings"}))}finally{setH(false)}}};

  return (
    <div className="flex flex-col gap-2 p-3"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><div className="text-token-text-primary text-sm font-medium">{<M
              id="settings.worktrees.row.title"
              defaultMessage="Worktree"
              description="Label for a worktree row" />}</div><div className="text-token-text-secondary mt-1 truncate font-mono text-xs">{worktree.dir}</div></div><B_1
          className="shrink-0"
          color="danger"
          loading={h}
          onClick={()=>{u()}}
          size="toolbar">{<M
            id="settings.worktrees.row.delete"
            defaultMessage="Delete"
            description="Delete button label for a worktree row" />}</B_1></div><div className="flex flex-col gap-1"><div className="text-token-text-secondary text-xs">{<M
            id="settings.worktrees.row.conversations"
            defaultMessage="Conversations"
            description="Label for conversations list within a worktree row" />}</div>{isConversationsLoading?<div className="flex items-center gap-2 text-xs text-token-text-secondary"><O_1 className="icon-xxs" /><M
            id="settings.worktrees.row.conversations.loading"
            defaultMessage="Loading conversations…"
            description="Loading label for conversations list" /></div>:conversations.length===0?<div className="text-token-text-secondary text-xs">{<M
            id="settings.worktrees.row.conversations.empty"
            defaultMessage="No conversations linked to this worktree."
            description="Empty state for conversations list in worktree row" />}</div>:<div className="flex flex-col gap-1">{conversations.map(g=>{const y=R_1_1(g);return (
            <button
              key={g.id}
              className="text-token-text-primary hover:text-token-text-primary/80 focus-visible:outline-token-focus flex w-full items-center justify-between gap-2 rounded-lg px-row-x py-row-y text-left text-sm hover:bg-token-list-hover-background focus-visible:outline-1 focus-visible:outline-offset-[-2px]"
              onClick={()=>{r(g.id)}}
              type="button">{<span className="truncate">{y||<M
                  id="settings.worktrees.conversation.untitled"
                  defaultMessage="Untitled conversation"
                  description="Fallback title for a conversation" />}</span>}</button>
          );})}</div>}</div></div>
  );
}function K(e){const t=new Map;for(const a of e){
  const o=V_1(a.gitDir);
  const r=D(o??a.dir);
  const n=t.get(r);
  if(n){n.worktrees.push(a);continue}t.set(r,{key:r,repoRoot:o,worktrees:[a]})
}return Array.from(t.values())}function T(e,t){if (t.length===0) {
  return[];
}const a=D(e);return t.filter(o=>{const r=o.cwd;if (!r) {
  return false;
}const n=D(r);return n===a?true:n.startsWith(`${a}/`);});}function Q(e,t){
  if (t.length===0) {
    return e;
  }const a=e.map((o, r) => ({
  worktree:o,
  index:r,
  conversationCount:T(o.dir,t).length
}));
  a.sort((o,r)=>{const n=r.conversationCount-o.conversationCount;return n!==0?n:o.index-r.index});

  return a.map(o => o.worktree);
}function D(e){return Y_1(e).replace(/\/+$/,"");}export{WorktreesSettingsPage as WorktreesSettingsPage};
//# sourceMappingURL=worktrees-settings-page-Bx5YHGa_.js.map
