// Process polyfill for browser/Windows compatibility
(() => {
  if (typeof window.process === "object" && typeof window.process.cwd === "function") {
    return;
  }
  function detectPlatform() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("win")) {
      return "win32";
    }
    if (ua.includes("mac")) {
      return "darwin";
    }
    if (ua.includes("linux")) {
      return "linux";
    }
    return "browser";
  }
  window.process = window.process || {
    cwd() { return "/"; },
    env: {},
    platform: detectPlatform(),
    version: "",
    versions: {},
    nextTick(fn) { setTimeout(fn, 0); }
  };
})();
