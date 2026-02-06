const n = require("electron");
const g = "codex_desktop:show-context-menu";
const u = "codex_desktop:get-sentry-init-options";
const S = "codex_desktop:get-build-flavor";
const w = "codex_desktop:trigger-sentry-test";
function M(e) {
  return `codex_desktop:worker:${e}:from-view`;
}
function p(e) {
  return `codex_desktop:worker:${e}:for-view`;
}
const l = "electron";
const f = "codex_desktop:message-from-view";
const v = "codex_desktop:message-for-view";
const _ = n.ipcRenderer.sendSync(u);
const x = n.ipcRenderer.sendSync(S);
const r = new Map();
const d = new Map();

const R = {
  windowType: l,
  sendMessageFromView: async (e) => {
    await n.ipcRenderer.invoke(f, e);
  },
  getPathForFile: (e) => {
    const t = n.webUtils.getPathForFile(e);
    return t || null;
  },
  sendWorkerMessageFromView: async (e, t) => {
    await n.ipcRenderer.invoke(M(e), t);
  },
  subscribeToWorkerMessages: (e, t) => {
    let s = r.get(e);

    if (!s) {
      s = new Set();
      r.set(e, s);
    }

    if (!o) {
      o = (i, c) => {
        const a = r.get(e);

        if (a) {
          a.forEach((E) => {
            E(c);
          });
        }
      };

      d.set(e, o);
      n.ipcRenderer.on(p(e), o);
    }

    s.add(t);

    return () => {
      const i = r.get(e);
      if (!i || (i.delete(t), i.size > 0)) {
        return;
      }
      r.delete(e);
      const c = d.get(e);

      if (c) {
        n.ipcRenderer.removeListener(p(e), c);
      }

      d.delete(e);
    };
  },
  showContextMenu: async (e) => n.ipcRenderer.invoke(g, e),
  triggerSentryTestError: async () => {
    await n.ipcRenderer.invoke(w);
  },
  getSentryInitOptions: () => _,
  getAppSessionId: () => _.codexAppSessionId,
  getBuildFlavor: () => x,
};

n.ipcRenderer.on(v, (e, t) => {
  window.dispatchEvent(new MessageEvent("message", { data: t }));
});
n.contextBridge.exposeInMainWorld("codexWindowType", l);
n.contextBridge.exposeInMainWorld("electronBridge", R);
//# sourceMappingURL=preload.js.map
