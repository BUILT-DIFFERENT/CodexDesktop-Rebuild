import{S_1_1 as c_1,c_1 as c_1_1,D as S_1,D,e,F,F as f_1,S_1 as S_1_1,G,h,i,h as h_1,l,u,m,o,n,P,B as B_1,Q}from"./index-CgwAo6pj.js";

export function AgentSettings() {
  const E=c_1.c(7);
  let a;
  let l;

  if (E[0]===Symbol.for("react.memo_cache_sentinel")) {
    a=<P slug="agent" />;

    l=<S_1_1
      id="settings.agent.configuration.subtitle"
      defaultMessage="These settings apply to anywhere Codex is used"
      description="Subtitle for config.toml settings section" />;

    E[0]=a;
    E[1]=l;
  } else {
    a=E[0];
    l=E[1];
  }

  let i;
  let o;

  if (E[2]===Symbol.for("react.memo_cache_sentinel")) {
    i=<S_1_1
      id="settings.agent.configuration.configToml"
      defaultMessage="config.toml"
      description="Label for config.toml open button" />;

    o=<S_1_1
      id="settings.agent.configuration.configToml.description"
      defaultMessage="Edit your config to customize agent behavior"
      description="Description for config.toml open row" />;

    E[2]=i;
    E[3]=o;
  } else {
    i=E[2];
    o=E[3];
  }

  let s;
  let n;

  if (E[4]===Symbol.for("react.memo_cache_sentinel")) {
    s=<span className="block" />;

    n=<S_1_1
      id="settings.agent.configuration.configToml.restartNote"
      defaultMessage="Restart Codex after editing to apply changes"
      description="Note that config.toml changes require a restart" />;

    E[4]=s;
    E[5]=n;
  } else {
    s=E[4];
    n=E[5];
  }

  let r;

  if (E[6]===Symbol.for("react.memo_cache_sentinel")) {
    r=<S_1 title={a} subtitle={l}>{<D>{<D.Content>{<E><F
              label={i}
              description={<>{o}{" "}{s}{n}{" "}<a
                  className="text-token-text-secondary hover:text-token-text-primary inline-flex items-center gap-1"
                  href={f_1}
                  target="_blank"
                  rel="noreferrer"><S_1_1
                    id="settings.agent.configuration.configToml.docs"
                    defaultMessage="Docs"
                    description="Link label for config documentation" /><G className="icon-xxs" /></a></>}
              control={<Z />} /><B /></E>}</D.Content>}</D>}</S_1>;

    E[6]=r;
  } else {
    r=E[6];
  }

  return r;
}
//# sourceMappingURL=agent-settings-aw3nuacG.js.map

function B(){
  const e=c_1.c(7);
  const a=n();
  let l;
  let i;

  if (e[0]===Symbol.for("react.memo_cache_sentinel")) {
    l=<S_1_1
      id="settings.openSourceLicenses.rowLabel"
      defaultMessage="Open source licenses"
      description="Label for the open source licenses row" />;

    i=<S_1_1
      id="settings.openSourceLicenses.rowDescription"
      defaultMessage="Third-party notices for bundled dependencies"
      description="Description for the open source licenses row" />;

    e[0]=l;
    e[1]=i;
  } else {
    l=e[0];
    i=e[1];
  }

  let o;

  if (e[2]!==a) {
    o=()=>{a("/settings/open-source-licenses")};
    e[2]=a;
    e[3]=o;
  } else {
    o=e[3];
  }

  let s;

  if (e[4]===Symbol.for("react.memo_cache_sentinel")) {
    s=<S_1_1
      id="settings.openSourceLicenses.view"
      defaultMessage="View"
      description="Button label to open the open source licenses page" />;

    e[4]=s;
  } else {
    s=e[4];
  }

  let n;

  if (e[5]!==o) {
    n=<F
      label={l}
      description={i}
      control={<B_1 color="secondary" size="toolbar" onClick={o}>{s}</B_1>} />;

    e[5]=o;
    e[6]=n;
  } else {
    n=e[6];
  }

  return n;
}function Z(){
  const e=c_1.c(13);
  const {data}=h();
  const {data: data_1}=data_2(h_1.RUN_CODEX_IN_WSL);
  const {data: data_2}=data_1("codex-home");
  const o=u();
  let s;

  if (e[0]===Symbol.for("react.memo_cache_sentinel")) {
    s={cwd:null};
    e[0]=s;
  } else {
    s=e[0];
  }

  const n=o==="electron";let r;

  if (e[1]!==n) {
    r={params:s,queryConfig:{enabled:n,staleTime:Q.ONE_MINUTE}};
    e[1]=n;
    e[2]=r;
  } else {
    r=e[2];
  }

  const {data: data_3}=data_1("open-in-targets",r);
  const m=m("open-file");
  const p=data?.platform==="win32"&&data?.hasWsl&&data_1;
  const g=data_2?.codexHome?`${data_2.codexHome}/config.toml`:null;
  const x=data_3?.preferredTarget??void 0;
  let d;

  if (e[3]!==p) {
    d=p?<S_1_1 {...o.openConfigTomlWsl} />:<S_1_1 {...o.openConfigToml} />;
    e[3]=p;
    e[4]=d;
  } else {
    d=e[4];
  }

  const h=d;let f;

  if (e[5]!==g||e[6]!==m||e[7]!==x) {
    f=()=>{
      if (g) {
        m.mutate({path:g,cwd:null,target:x});
      }
    };

    e[5]=g;
    e[6]=m;
    e[7]=x;
    e[8]=f;
  } else {
    f=e[8];
  }

  const b=!g;let u;

  if (e[9]!==h||e[10]!==f||e[11]!==b) {
    u=<B_1
      color="secondary"
      size="toolbar"
      className="inline-flex w-fit"
      onClick={f}
      disabled={b}>{h}</B_1>;

    e[9]=h;
    e[10]=f;
    e[11]=b;
    e[12]=u;
  } else {
    u=e[12];
  }

  return u;
}export{AgentSettings as AgentSettings};
//# sourceMappingURL=agent-settings-aw3nuacG.js.map
