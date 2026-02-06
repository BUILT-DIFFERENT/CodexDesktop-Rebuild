Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const a = require("node:fs/promises");
const E = require("node:path");
const d = require("./main-CQwPb0Th.js");
require("path");
require("node:fs");
require("node:crypto");
require("node:child_process");
require("node:buffer");
require("node:os");
require("node:string_decoder");
require("node:net");
require("crypto");
require("child_process");
const s = d.getTaggedLoggerLazy("applied-devbox-cache");
const A = 30000; /* 3e4 */
const O = 20000; /* 2e4 */
const S = "host-cache";
const x = "applied-devbox-ls.json";
function w(e) {
  return E.join(e, S, x);
}
function b() {
  const e = process.env.CODEX_APP_APPLIED_DEVBOX_REFRESH_INTERVAL_MS;
  if (!e) {
    return A;
  }
  const t = Number(e);
  return !Number.isFinite(t) || t <= 0
    ? (s().warning("Invalid CODEX_APP_APPLIED_DEVBOX_REFRESH_INTERVAL_MS", {
        value: e,
      }),
      A)
    : t;
}
function g(e) {
  const t = e.trim();
  if (!t) {
    return [];
  }
  try {
    const i = JSON.parse(t);
    if (!Array.isArray(i)) {
      s().warning("Applied devbox ls returned non-array JSON", {
        payloadPreview: t.slice(0, 200),
      });

      return null;
    }
    const n = i
      .filter((r) => typeof r == "string")
      .map((r) => r.trim())
      .filter((r) => r.length > 0);
    return [...new Set(n)];
  } catch {
    s().warning("Applied devbox ls returned invalid JSON", {
      payloadPreview: t.slice(0, 200),
    });

    return null;
  }
}
async function h(e, t) {
  await a.mkdir(E.dirname(e), { recursive: true, mode: 448 });
  const i = `${e}.tmp-${process.pid}-${Date.now()}`;
  await a.writeFile(i, t, { encoding: "utf8", mode: 384 });
  try {
    await a.rename(i, e);
  } catch (n) {
    const r = n?.code;
    if (r === "EEXIST" || r === "EPERM") {
      await a.unlink(e).catch(() => {});
      await a.rename(i, e);
    } else {
      await a.unlink(i).catch(() => {});
      throw n;
    }
  }
  await a.chmod(e, 384).catch(() => {});
}
function C(e) {
  const t = w(e.codexHome);
  const i = e.refreshIntervalMs ?? b();
  const n = e.timeoutMs ?? O;
  let r = false;
  let o = false;
  let l = null;
  const p = async () => {
    if (r || o) {
      return;
    }
    o = true;
    const c = new AbortController();
    l = c;
    let f = false;
    const y = setTimeout(() => {
      f = true;
      c.abort();
    }, n);
    try {
      const u = d.spawnAsync({
        args: ["applied", "devbox", "ls", "--format", "json"],
        signal: c.signal,
      });

      const { stdout, stderr, code } = await u.wait();
      if (r) {
        return;
      }
      if (f) {
        s().warning("Applied devbox ls timed out", { timeoutMs: n });
        return;
      }
      if (code !== 0) {
        s().warning("Applied devbox ls failed", {
          code: code,
          stderr: stderr.trim() || null,
        });
        return;
      }
      const m = g(stdout);
      if (m == null) {
        return;
      }
      await h(t, JSON.stringify(m));
      e.onCacheUpdated?.();
    } catch (u) {
      if (r) {
        return;
      }
      s().warning("Applied devbox cache refresh failed", {
        error: d.sanitizeLogValue(u),
      });
    } finally {
      clearTimeout(y);
      o = false;
      l = null;
    }
  };
  p();
  const _ = setInterval(() => {
    p();
  }, i);
  return {
    dispose: () => {
      r = true;
      clearInterval(_);
      l?.abort();
    },
  };
}
exports.atomicWriteCacheFile = h;
exports.parseAppliedDevboxLsOutput = g;
exports.resolveAppliedDevboxCachePath = w;
exports.resolveRefreshIntervalMs = b;
exports.startAppliedDevboxCacheRefresher = C;
//# sourceMappingURL=applied-devbox-cache-CkiLfgk8.js.map
